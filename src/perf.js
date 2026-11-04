/*
  Quality tiers. The same page has to feel smooth on a MacBook and on a
  four-core Windows laptop with integrated graphics, so the expensive
  parts (glass dispersion, MSAA, pixel ratio, particle count) scale with
  the device. ?quality=low|mid|high forces a tier for testing.

  Detection is only a first guess: a frame-time governor in main.js
  lowers the pixel ratio further if the device still can't keep up.
*/

const LOW_GPU = /swiftshader|llvmpipe|softpipe|software|microsoft basic|intel.*\b(hd|uhd) graphics|mali-[gt]?\d{1,2}\b|adreno.*\b[3-5]\d\d\b|powervr|videocore/i;
const MID_GPU = /intel|iris|radeon\(tm\) graphics|radeon graphics|vega \d|mali|adreno.*\b6\d\d\b/i;

function gpuName() {
  try {
    const gl = document.createElement('canvas').getContext('webgl');
    if (!gl) return null;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const name = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return String(name || '');
  } catch {
    return null;
  }
}

export function detectTier() {
  const forced = new URLSearchParams(location.search).get('quality');
  const gpu = gpuName();
  const webgl = gpu !== null;
  if (forced === 'low' || forced === 'mid' || forced === 'high') return { tier: forced, webgl, gpu };

  const nav = navigator;
  const cores = nav.hardwareConcurrency || 4;
  const mem = nav.deviceMemory || 8; // Chromium only; assume fine elsewhere
  const saveData = !!nav.connection?.saveData;
  const touch = matchMedia('(pointer: coarse)').matches;

  let tier = 'high';
  if (!webgl || saveData || LOW_GPU.test(gpu) || cores <= 2 || mem <= 2) tier = 'low';
  else if (MID_GPU.test(gpu) || touch || cores <= 4 || mem <= 4) tier = 'mid';
  // Apple silicon and discrete GPUs stay high.
  if (tier !== 'low' && /apple (m\d|gpu)|nvidia|geforce|rtx|radeon rx|radeon pro/i.test(gpu) && !touch) tier = 'high';
  return { tier, webgl, gpu };
}

export const SETTINGS = {
  high: { dpr: 2, aa: true, dispersion: 3.5, coat: true, segments: 128, particles: 1800, transmission: 1, mediaDpr: 2, anisotropy: 8 },
  mid: { dpr: 1.5, aa: false, dispersion: 3.5, coat: true, segments: 96, particles: 1100, transmission: 0.6, mediaDpr: 1.5, anisotropy: 4 },
  low: { dpr: 1, aa: false, dispersion: 0, coat: false, segments: 64, particles: 600, transmission: 0.5, mediaDpr: 1, anisotropy: 2 },
};
