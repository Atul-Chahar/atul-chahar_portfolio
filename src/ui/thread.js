/*
  The thread: starts at the hero's full stop, curves into the gutter,
  loops between distant nodes, skips the pinned gallery, and ends in
  Contact. It is built as polylines so lengths are exact, and its tip
  is mapped to scroll between anchors so loops draw smoothly.
*/

const SVGNS = 'http://www.w3.org/2000/svg';
const TIP = 0.62;

export function createThread({ page, scrollY }) {
  const svg = page.querySelector('[data-thread]');
  const ghost = svg.querySelector('[data-thread-ghost]');
  const head = svg.querySelector('[data-thread-head]');
  const proto = svg.querySelector('[data-thread-line]');
  proto.style.display = 'none';

  const hosts = [...page.querySelectorAll('[data-stop="node"]')];
  hosts.forEach((host) => {
    const dot = document.createElement('span');
    dot.className = 'node';
    dot.setAttribute('aria-hidden', 'true');
    host.prepend(dot);
  });

  let segs = [];     // [{ pts, cum, len, el, start }]
  let anchors = [];  // [{ y, len, host? }]
  let total = 0;
  let lastDrawn = -1;
  let pageTop = 0;   // page offset in document space, measured on build
  const halo = svg.querySelector('[data-thread-halo]');

  const rel = (el) => {
    const r = el.getBoundingClientRect();
    const p = page.getBoundingClientRect();
    return { x: r.left - p.left, y: r.top - p.top, w: r.width, h: r.height };
  };

  function bezier(a, b, c, d, n, out) {
    for (let i = 1; i <= n; i++) {
      const t = i / n, u = 1 - t;
      out.push([
        u * u * u * a[0] + 3 * u * u * t * b[0] + 3 * u * t * t * c[0] + t * t * t * d[0],
        u * u * u * a[1] + 3 * u * u * t * b[1] + 3 * u * t * t * c[1] + t * t * t * d[1],
      ]);
    }
  }

  // A prolate-cycloid loop between two points on the gutter.
  function loop(x, y0, y1, r, out) {
    const L = y1 - y0;
    // a > L / 2π makes the curve travel backwards, which draws the loop.
    const a = (L / (2 * Math.PI)) * 1.5;
    const n = 90;
    for (let i = 1; i <= n; i++) {
      const t = i / n;
      out.push([x + r * (1 - Math.cos(2 * Math.PI * t)), y0 + L * t - a * Math.sin(2 * Math.PI * t)]);
    }
  }

  function build() {
    const pr = page.getBoundingClientRect();
    pageTop = pr.top + scrollY();
    svg.setAttribute('viewBox', `0 0 ${pr.width} ${pr.height}`);
    segs.forEach((s) => s.el.remove());
    segs = [];
    anchors = [];

    const s = rel(page.querySelector('[data-stop="start"]'));
    const start = [s.x + s.w * 0.5, s.y + s.h * 0.78];
    const nodes = hosts.map((host) => {
      const r = rel(host.querySelector('.node'));
      return { host, p: [r.x + r.w / 2, r.y + r.h / 2] };
    });
    const e = rel(page.querySelector('[data-stop="end"]'));
    const end = [e.x, e.y];
    const gapEl = page.querySelector('[data-thread-gap]');
    const g = gapEl ? rel(gapEl) : null;
    const gap = g ? [g.y - 24, g.y + g.h + 24] : null;
    const gutterX = nodes.length ? nodes[0].p[0] : 40;
    const r = Math.max(28, Math.min(90, gutterX * 1.4));

    // Waypoints in order, with gap entry/exit inserted.
    const way = [{ p: start }];
    for (const n of nodes) way.push({ p: n.p, host: n.host });
    way.push({ p: end, end: true });

    const lists = [[start.slice()]];
    let cur = lists[0];
    anchors.push({ y: start[1], pi: 0, si: 0 });

    for (let i = 1; i < way.length; i++) {
      const a = way[i - 1].p, b = way[i].p;
      const crossesGap = gap && a[1] < gap[0] && b[1] > gap[1];
      if (i === 1) {
        const dy = b[1] - a[1];
        bezier(a, [a[0], a[1] + dy * 0.6], [b[0], b[1] - dy * 0.5], b, 120, cur);
      } else if (crossesGap) {
        cur.push([a[0], gap[0]]);
        anchors.push({ y: gap[0], si: lists.length - 1, pi: cur.length - 1 });
        cur = [[b[0], gap[1]]];
        lists.push(cur);
        anchors.push({ y: gap[1], si: lists.length - 1, pi: 0 });
        cur.push(b.slice());
      } else if (b[1] - a[1] > 520 && window.innerWidth > 900) {
        const mid = (a[1] + b[1]) / 2;
        const span = Math.min(420, (b[1] - a[1]) * 0.5);
        cur.push([a[0], mid - span / 2]);
        loop(a[0], mid - span / 2, mid + span / 2, r, cur);
        cur.push(b.slice());
      } else {
        cur.push(b.slice());
      }
      anchors.push({ y: b[1], si: lists.length - 1, pi: cur.length - 1, host: way[i].host });
    }

    // Measure.
    let acc = 0;
    let ghostD = '';
    lists.forEach((pts, si) => {
      const cum = new Float32Array(pts.length);
      for (let i = 1; i < pts.length; i++) cum[i] = cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
      const len = cum[pts.length - 1] || 0;
      const d = 'M' + pts.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' L');
      ghostD += d + ' ';
      const el = document.createElementNS(SVGNS, 'path');
      el.setAttribute('class', 'thread__line');
      el.setAttribute('d', d);
      el.style.strokeDasharray = `${len} ${len}`;
      el.style.strokeDashoffset = `${len}`;
      svg.insertBefore(el, head);
      segs.push({ pts, cum, len, el, start: acc });
      acc += len;
    });
    total = acc;
    ghost.setAttribute('d', ghostD.trim());
    anchors.forEach((a) => { a.len = segs[a.si].start + segs[a.si].cum[a.pi]; });
    anchors.sort((x, y) => x.y - y.y || x.len - y.len);
    lastDrawn = -1;
    draw(true);
  }

  function lengthAtY(y) {
    if (!anchors.length) return 0;
    if (y <= anchors[0].y) return 0;
    for (let i = 1; i < anchors.length; i++) {
      const a = anchors[i - 1], b = anchors[i];
      if (y <= b.y) {
        const t = (y - a.y) / (b.y - a.y || 1);
        return a.len + (b.len - a.len) * t;
      }
    }
    return total;
  }

  function pointAt(seg, l) {
    const { cum, pts } = seg;
    let lo = 0, hi = cum.length - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cum[m] < l) lo = m; else hi = m; }
    const t = (l - cum[lo]) / (cum[hi] - cum[lo] || 1);
    return [pts[lo][0] + (pts[hi][0] - pts[lo][0]) * t, pts[lo][1] + (pts[hi][1] - pts[lo][1]) * t];
  }

  function draw(force = false) {
    if (!segs.length) return;
    // No layout reads here: this runs every frame.
    const tipY = scrollY() + window.innerHeight * TIP - pageTop;
    const drawn = lengthAtY(tipY);
    if (!force && Math.abs(drawn - lastDrawn) < 0.3) return;
    lastDrawn = drawn;

    let headPt = null;
    for (const s of segs) {
      const local = Math.max(0, Math.min(s.len, drawn - s.start));
      s.el.style.strokeDashoffset = `${s.len - local}`;
      if (local > 0 && local < s.len) headPt = pointAt(s, local);
    }
    if (headPt && drawn > 2) {
      const t = `translate(${headPt[0].toFixed(1)}px, ${headPt[1].toFixed(1)}px)`;
      head.style.transform = t;
      head.style.opacity = '1';
      if (halo) { halo.style.transform = t; halo.style.opacity = '1'; }
    } else {
      head.style.opacity = '0';
      if (halo) halo.style.opacity = '0';
    }

    for (const a of anchors) {
      if (!a.host) continue;
      const on = tipY >= a.y - 1;
      if (a.on !== on) { a.on = on; a.host.classList.toggle('is-reached', on); }
    }
  }

  return { build, draw };
}
