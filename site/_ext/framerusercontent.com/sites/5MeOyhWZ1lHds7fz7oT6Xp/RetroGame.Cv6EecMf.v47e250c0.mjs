import{t as e}from"./rolldown-runtime.Bi-D_2cA.mjs";import{F as t,I as n,L as r,s as i}from"./react.B4lOa1lM.mjs";var a,o,s;function c(){return(c=e((()=>{t(),i(),a=(()=>{var e=Object.defineProperty,t=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(t,n)=>{for(var r in n)e(t,r,{get:n[r],enumerable:!0})},c=(n,r,o,s)=>{if(r&&typeof r==`object`||typeof r==`function`)for(let c of i(r))!a.call(n,c)&&c!==o&&e(n,c,{get:()=>r[c],enumerable:!(s=t(r,c))||s.enumerable});return n},l=t=>c(e({},`__esModule`,{value:!0}),t);function u(e,t){let n=/* @__PURE__ */ new Float32Array(49),r=/* @__PURE__ */ new Float32Array(49);for(let e=1;e<=48;e++)n[e]=Math.sin(2*Math.PI*e*t)/(Math.PI*e),r[e]=(1-Math.cos(2*Math.PI*e*t))/(Math.PI*e);return e.createPeriodicWave(n,r)}function d(e,t){let n=t.length,r=Math.min(48,Math.floor(n/2)),i=new Float32Array(r+1),a=new Float32Array(r+1);for(let e=1;e<=r;e++){let r=0,o=0;for(let i=0;i<n;i++)r+=t[i]*Math.cos(2*Math.PI*e*i/n),o+=t[i]*Math.sin(2*Math.PI*e*i/n);i[e]=r/n,a[e]=o/n}return e.createPeriodicWave(i,a,{disableNormalization:!1})}function f(){let e=[];for(let t=0;t<32;t++)e.push((t<16?t:31-t)/7.5-1);return e}function p(e,t){let n=1,r=new Float32Array(t);for(let i=0;i<t;i++){let t=n&1^n>>(e?6:1)&1;n=n>>1|t<<14,r[i]=n&1?1:-1}return r}function m(e){let t=x.get(e);if(t)return t;b||=p(!1,g);let n=b,r=e.createBuffer(1,g,g);r.getChannelData(0).set(n);let i=e.createBuffer(1,g,g),a=i.getChannelData(0);for(let e=0;e<g;e++)a[e]=n[e>>3];return t={W:{P12:u(e,.125),P25:u(e,.25),P50:u(e,.5),TRI:d(e,f()),SH:d(e,Array.from(p(!0,93)))},NL1:r,NL8:i},x.set(e,t),t}var h,g,_,v,y,b,x,S=o(()=>{h=.016666666666666666,g=48e3,_={P:.075,T:.13,N:.06,S:.06},v=[4,8,16,32,64,96,128,160,202,254,380,508,762,1016,2034,4068],y=e=>1789773/v[e]/93,b=null,x=/* @__PURE__ */ new WeakMap});function C(e,t,n,r){e.setValueAtTime(0,t),e.linearRampToValueAtTime(n[0]/15*r,t+.004);for(let i=1;i<n.length;i++)n[i]!==n[i-1]&&e.setTargetAtTime(n[i]/15*r,t+i*h,.002);let i=t+n.length*h;return e.setTargetAtTime(0,i,.004),i+.05}function w(e,t,n,r=0){let i=m(e),a={tone:s,noise:c,glint:l,srcs:[],end:0};function o(n){let i=e.createGain();i.gain.value=0;let a=Math.max(-1,Math.min(1,r+n));if(Math.abs(a)<.004)return i.connect(t),[i,1];let o=e.createStereoPanner();return o.pan.value=a,i.connect(o),o.connect(t),[i,E]}function s(t,n,r,s,c,l=0,u=1){let d=e.createOscillator();d.setPeriodicWave(i.W[t]),d.frequency.value=s[0],d.frequency.setValueAtTime(s[0],r);for(let e=1;e<s.length;e++)s[e]!==s[e-1]&&d.frequency.setValueAtTime(s[e],r+e*h);let[f,p]=o(l);d.connect(f);let m=C(f.gain,r,c,_[n]*u*p);d.start(r),d.stop(m),a.srcs.push({n:d,t0:r,t1:m}),m>a.end&&(a.end=m)}function c(t,r,s,c,l=0,u=1){let d=e.createBufferSource();d.buffer=i[t],d.loop=!0,d.playbackRate.value=s[0],d.playbackRate.setValueAtTime(s[0],r);for(let e=1;e<s.length;e++)s[e]!==s[e-1]&&d.playbackRate.setValueAtTime(s[e],r+e*h);let[f,p]=o(l);d.connect(f);let m=C(f.gain,r,c,_.N*u*p);d.start(r,n()*.5),d.stop(m),a.srcs.push({n:d,t0:r,t1:m}),m>a.end&&(a.end=m)}function l(e,t,n,r=0,i=1){s(`P50`,`P`,e,[t],n,r,i),s(`P50`,`P`,e+.5/(t*1.0035),[t*1.0035],n.map(e=>Math.round(e*.55)),r,i),s(`TRI`,`T`,e,[t*2.32],n.map(e=>Math.round(e*.3)),r,i*.6)}return a}function T(e,t){let n={t0:0,v0:t,t1:0,v1:t};e.value=t,e.setValueAtTime(t,0);let r=e=>e>=n.t1?n.v1:e<=n.t0?n.v0:n.v0+(n.v1-n.v0)*(e-n.t0)/(n.t1-n.t0);return{at:r,to(t,i,a){let o=r(i),s=e;typeof s.cancelAndHoldAtTime==`function`?s.cancelAndHoldAtTime(i):e.cancelScheduledValues(i),e.setValueAtTime(o,i);let c=i+Math.max(.003,a);e.linearRampToValueAtTime(t,c),n={t0:i,v0:o,t1:c,v1:t}}}}var E,D,O,k,A,ee=o(()=>{S(),E=Math.SQRT2,D=(e,t,n)=>Array.from({length:n},(r,i)=>e+(t-e)*i/Math.max(1,n-1)),O=(e,t,n)=>Array.from({length:n},(r,i)=>e*(t/e)**+(i/Math.max(1,n-1))),k=e=>e.map(e=>Math.round(e)),A=(e,t,n=1)=>Array.from({length:t},(r,i)=>Math.round(e*(1-i/t)**n))});function j(e,t=!1){let n=440*2**((12*(+e.slice(-1)+1)+oe[e[0]]+ +(e[1]===`#`)-69)/12),r=t?32:16;return 1789773/(r*Math.round(1789773/(r*n)))}function te(e,t=10){let n=e>60?2:4;return Array.from({length:e-2},(e,r)=>r===0?t-3:Math.max(n,t-Math.floor((r-1)/7)))}function ne(e,t=5){return Array.from({length:e-2},(e,n)=>n<8?Math.round(1+(t-1)*n/7):n<40?t:Math.max(2,t-Math.ceil((n-40)/18)))}function re(e){return Array.from({length:e-3},(e,t)=>t===0?10:15)}function ie(e){let t=e.e8,n=8*t,r=[];e.blocks.forEach((i,a)=>{let o=a*4*n;for(let[e,a]of[[0,i.m1],[2,i.m3]])for(let[s,c,l]of a)r.push({f:o+e*n+s*t,ch:0,w:i.duty,cls:`P`,fs:[j(l)],vs:te(c*t)});let s=i.bloom.map(e=>j(e));for(let t of[1,3])r.push({f:o+t*n,ch:0,w:e.bloomW,cls:`P`,fs:Array.from({length:n-2},(e,t)=>s[t%s.length]),vs:ne(n,e.bloomV)});let[c,l]=i.bass.map(e=>j(e,!0));for(let e of[0,1,2,3]){let i=o+e*n;e%2==0?r.push({f:i,ch:2,w:`TRI`,cls:`T`,fs:[c],vs:re(n)}):(r.push({f:i,ch:2,w:`TRI`,cls:`T`,fs:[c],vs:re(4*t)}),r.push({f:i+4*t,ch:2,w:`TRI`,cls:`T`,fs:[l],vs:re(4*t)}))}r.push({f:o,ch:3,w:`P50`,cls:`N`,fs:[],vs:[3]}),r.push({f:o+2*n,ch:3,w:`P50`,cls:`N`,fs:[],vs:[1.5]})});for(let e of r.filter(e=>e.ch===0))r.push({...e,f:e.f+t,ch:1,w:`P12`,vs:e.vs.map(e=>Math.round(e*.45))});return r.sort((e,t)=>e.f-t.f||e.ch-t.ch),{e8:t,beat:2*t,bar:n,loop:32*n,lp:e.lp,grains:e.grains,ev:r}}function ae(e){let t=8*e,n=[],r=(e,t=12)=>n.push({f:e,ch:3,w:`P50`,cls:`N`,fs:[],vs:[t,t-3,t-6,t-8,2,1],nz:{b:`NL8`,rs:[.09,.06,.045,.035,.03,.03]}}),i=(e,t=9)=>n.push({f:e,ch:3,w:`P50`,cls:`N`,fs:[],vs:[t,t-1,t-3,t-4,t-5,t-6,2,1,1],nz:{b:`NL8`,rs:[.95,.9,.85,.8,.78,.76,.75,.75,.75]}}),a=(e,t=3)=>n.push({f:e,ch:3,w:`P50`,cls:`N`,fs:[],vs:[t,1],nz:{b:`NL8`,rs:[1,1]}});return Se.forEach((o,s)=>{let c=s*t;for(let[t,r,i]of o.m)n.push({f:c+t*e,ch:0,w:o.duty??`P25`,cls:`P`,fs:[j(i)],vs:te(r*e,11)});let l=o.arp.map(e=>j(e)),u=t-2;n.push({f:c,ch:1,w:`P12`,cls:`P`,fs:Array.from({length:u},(e,t)=>l[Math.floor(t/3)%l.length]),vs:Array.from({length:u},(t,n)=>n%(2*e)<3?7:5)});let d=j(o.root,!0),f=d*2;if([d,f,d,f,d,f,j(o.fifth,!0),f].forEach((t,r)=>n.push({f:c+r*e,ch:2,w:`TRI`,cls:`T`,fs:[t],vs:re(e)})),o.fill){r(c),i(c+2*e);for(let t of[4,5,6,7])i(c+t*e,6+(t-4));i(c+7*e+Math.round(e/2),10)}else{r(c),r(c+4*e),i(c+2*e),i(c+6*e);for(let t of[1,3,5,7])a(c+t*e)}}),n.sort((e,t)=>e.f-t.f||e.ch-t.ch),{e8:e,beat:2*e,bar:t,loop:Se.length*t,lp:4e3,grains:0,ev:n}}var oe,se,ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we=o(()=>{oe={C:0,D:2,E:4,F:5,G:7,A:9,B:11},se={bass:[`A2`,`E3`],bloom:[`E4`,`G4`,`B4`,`D5`]},ce={bass:[`F2`,`C3`],bloom:[`E4`,`A4`,`B4`,`C5`]},le={bass:[`G2`,`D3`],bloom:[`E4`,`A4`,`B4`,`D5`]},ue={bass:[`E2`,`B2`],bloom:[`G4`,`A4`,`B4`,`D5`]},de=[{name:`Am11`,...se,duty:`P25`,m1:[[0,1,`E5`],[1,1,`B4`],[2,2,`D5`],[4,4,`A4`]],m3:[[0,1,`E5`],[1,1,`B4`],[2,2,`G4`],[4,4,`E4`]]},{name:`Fmaj7#11`,...ce,duty:`P25`,m1:[[0,1,`E5`],[1,1,`C5`],[2,2,`B4`],[4,4,`A4`]],m3:[[0,1,`C5`],[1,1,`B4`],[2,2,`A4`],[4,4,`E4`]]},{name:`Am11`,...se,duty:`P25`,m1:[[0,1,`E5`],[1,1,`B4`],[2,2,`D5`],[4,4,`A4`]],m3:[[0,1,`D5`],[1,1,`B4`],[2,2,`A4`],[4,4,`G4`]]},{name:`G6/9`,...le,duty:`P25`,m1:[[0,1,`E5`],[1,1,`D5`],[2,2,`B4`],[4,4,`A4`]],m3:[[0,1,`D5`],[1,1,`B4`],[2,2,`A4`],[4,4,`E4`]]},{name:`Am11`,...se,duty:`P12`,m1:[[2,1,`E5`],[3,1,`D5`],[4,4,`B4`]],m3:[[2,1,`E5`],[3,1,`D5`],[4,4,`A4`]]},{name:`Fmaj7#11`,...ce,duty:`P12`,m1:[[2,1,`E5`],[3,1,`C5`],[4,4,`B4`]],m3:[[2,1,`C5`],[3,1,`B4`],[4,4,`A4`]]},{name:`Em11`,...ue,duty:`P12`,m1:[[2,1,`D5`],[3,1,`B4`],[4,4,`G4`]],m3:[[2,1,`B4`],[3,1,`A4`],[4,4,`E4`]]},{name:`G6/9`,...le,duty:`P12`,m1:[[2,1,`E5`],[3,1,`D5`],[4,4,`B4`]],m3:[[2,1,`D5`],[3,1,`B4`],[4,4,`A4`]]}],fe={bass:[`C3`,`G3`],bloom:[`G4`,`B4`,`D5`,`E5`]},pe={bass:[`F2`,`C3`],bloom:[`A4`,`B4`,`C5`,`E5`]},me={bass:[`G2`,`D3`],bloom:[`A4`,`B4`,`D5`,`E5`]},he={bass:[`D3`,`A2`],bloom:[`F4`,`A4`,`C5`,`E5`]},ge=[{name:`Cmaj9`,...fe,duty:`P25`,m1:[[0,1,`G4`],[1,1,`C5`],[2,2,`A4`],[4,4,`D5`]],m3:[[0,1,`G4`],[1,1,`C5`],[2,2,`E5`],[4,4,`G5`]]},{name:`Fmaj7#11`,...pe,duty:`P25`,m1:[[0,1,`A4`],[1,1,`C5`],[2,2,`D5`],[4,4,`E5`]],m3:[[0,1,`C5`],[1,1,`D5`],[2,2,`E5`],[4,4,`A5`]]},{name:`Cmaj9`,...fe,duty:`P25`,m1:[[0,1,`G4`],[1,1,`C5`],[2,2,`A4`],[4,4,`D5`]],m3:[[0,1,`G4`],[1,1,`B4`],[2,2,`C5`],[4,4,`D5`]]},{name:`G6/9`,...me,duty:`P25`,m1:[[0,1,`D5`],[1,1,`E5`],[2,2,`G5`],[4,4,`A5`]],m3:[[0,1,`G4`],[1,1,`A4`],[2,2,`B4`],[4,4,`D5`]]},{name:`Cmaj9`,...fe,duty:`P12`,m1:[[2,1,`D5`],[3,1,`E5`],[4,4,`G5`]],m3:[[2,1,`C5`],[3,1,`D5`],[4,4,`E5`]]},{name:`Fmaj7#11`,...pe,duty:`P12`,m1:[[2,1,`E5`],[3,1,`G5`],[4,4,`A5`]],m3:[[2,1,`A4`],[3,1,`B4`],[4,4,`C5`]]},{name:`Dm9`,...he,duty:`P12`,m1:[[2,1,`A4`],[3,1,`C5`],[4,4,`E5`]],m3:[[2,1,`E5`],[3,1,`F5`],[4,4,`A5`]]},{name:`G6/9`,...me,duty:`P12`,m1:[[2,1,`D5`],[3,1,`E5`],[4,4,`G5`]],m3:[[2,1,`B4`],[3,1,`D5`],[4,4,`E5`]]}],_e={bass:[`F2`,`C3`],bloom:[`C5`,`E5`,`A5`,`B5`]},ve={bass:[`G2`,`D3`],bloom:[`B4`,`D5`,`E5`,`A5`]},ye={bass:[`C3`,`G3`],bloom:[`B4`,`D5`,`E5`,`G5`]},be={bass:[`A2`,`E3`],bloom:[`C5`,`E5`,`G5`,`B5`]},xe=[{name:`Fmaj7#11`,..._e,duty:`P25`,m1:[[0,3,`C5`],[3,1,`E5`],[4,4,`A5`]],m3:[[0,3,`B4`],[3,1,`C5`],[4,4,`G5`]]},{name:`G6/9`,...ve,duty:`P25`,m1:[[0,3,`B4`],[3,1,`D5`],[4,4,`A5`]],m3:[[0,3,`D5`],[3,1,`E5`],[4,4,`B5`]]},{name:`Fmaj7#11`,..._e,duty:`P25`,m1:[[0,3,`C5`],[3,1,`E5`],[4,4,`A5`]],m3:[[0,3,`A5`],[3,1,`G5`],[4,4,`E5`]]},{name:`Cmaj9`,...ye,duty:`P25`,m1:[[0,3,`E5`],[3,1,`D5`],[4,4,`G5`]],m3:[[0,3,`C5`],[3,1,`D5`],[4,4,`E5`]]},{name:`Am9`,...be,duty:`P12`,m1:[[2,2,`B4`],[4,4,`E5`]],m3:[[2,2,`C5`],[4,4,`G5`]]},{name:`G6/9`,...ve,duty:`P12`,m1:[[2,2,`D5`],[4,4,`A5`]],m3:[[2,2,`B4`],[4,4,`E5`]]},{name:`Fmaj7#11`,..._e,duty:`P12`,m1:[[2,2,`C5`],[4,4,`A5`]],m3:[[2,2,`E5`],[4,4,`G5`]]},{name:`G6/9`,...ve,duty:`P12`,m1:[[2,2,`B4`],[4,4,`D5`]],m3:[[2,2,`E5`],[4,4,`A5`]]}],Se=(()=>{let e={Am:[[`A4`,`C5`,`E5`],`A2`,`E3`],F:[[`F4`,`A4`,`C5`],`F2`,`C3`],G:[[`G4`,`B4`,`D5`],`G2`,`D3`],E:[[`E4`,`G#4`,`B4`],`E2`,`B2`],Em:[[`E4`,`G4`,`B4`],`E2`,`B2`],C:[[`C5`,`E5`,`G5`],`C3`,`G3`],Dm:[[`D4`,`F4`,`A4`],`D3`,`A3`]},t=(t,n,r={})=>({ch:t,arp:e[t][0],root:e[t][1],fifth:e[t][2],m:n,...r});return[t(`Am`,[[0,2,`A4`],[2,1,`C5`],[3,2,`E5`],[5,3,`A5`]]),t(`F`,[[0,1,`G5`],[1,1,`F5`],[2,2,`E5`],[4,2,`C5`],[6,2,`A4`]]),t(`G`,[[0,2,`B4`],[2,1,`D5`],[3,2,`G5`],[5,3,`B5`]]),t(`E`,[[0,2,`B5`],[2,2,`G#5`],[4,4,`E5`]]),t(`Am`,[[0,2,`A4`],[2,1,`C5`],[3,2,`E5`],[5,2,`A5`],[7,1,`G5`]]),t(`F`,[[0,2,`A5`],[2,2,`C6`],[4,1,`A5`],[5,1,`G5`],[6,2,`F5`]]),t(`G`,[[0,2,`G5`],[2,2,`B5`],[4,4,`D6`]]),t(`E`,[[0,1,`E6`],[1,1,`D6`],[2,2,`B5`],[4,2,`G#5`],[6,2,`E5`]]),t(`F`,[[0,3,`C6`],[3,1,`A5`],[4,4,`F5`]]),t(`G`,[[0,3,`D6`],[3,1,`B5`],[4,4,`G5`]]),t(`Em`,[[0,2,`E6`],[2,1,`D6`],[3,1,`B5`],[4,2,`G5`],[6,2,`E5`]]),t(`Am`,[[0,6,`A5`],[6,1,`G5`],[7,1,`A5`]]),t(`F`,[[0,3,`C6`],[3,1,`A5`],[4,4,`F5`]]),t(`G`,[[0,3,`D6`],[3,1,`B5`],[4,4,`G5`]]),t(`E`,[[0,2,`E6`],[2,2,`D6`],[4,2,`B5`],[6,2,`G#5`]]),t(`E`,[[0,6,`E5`]],{fill:!0}),t(`C`,[[0,1,`E5`],[1,1,`G5`],[2,2,`C6`],[4,4,`E6`]],{duty:`P50`}),t(`G`,[[0,1,`D6`],[1,1,`B5`],[2,2,`G5`],[4,4,`D6`]],{duty:`P50`}),t(`Am`,[[0,1,`C6`],[1,1,`A5`],[2,2,`E5`],[4,2,`A5`],[6,2,`C6`]],{duty:`P50`}),t(`F`,[[0,2,`A5`],[2,2,`G5`],[4,2,`F5`],[6,2,`E5`]],{duty:`P50`}),t(`C`,[[0,1,`E5`],[1,1,`G5`],[2,2,`C6`],[4,3,`E6`],[7,1,`F6`]],{duty:`P50`}),t(`G`,[[0,4,`G6`],[4,1,`F6`],[5,1,`E6`],[6,2,`D6`]],{duty:`P50`}),t(`F`,[[0,2,`C6`],[2,2,`A5`],[4,2,`F5`],[6,2,`A5`]],{duty:`P50`}),t(`E`,[[0,3,`B5`],[3,1,`G#5`],[4,4,`E5`]],{duty:`P50`,fill:!0}),t(`Dm`,[[0,2,`D5`],[2,1,`F5`],[3,2,`A5`],[5,3,`D6`]]),t(`G`,[[0,2,`B5`],[2,1,`D6`],[3,2,`G6`],[5,3,`B5`]]),t(`C`,[[0,2,`C6`],[2,1,`E6`],[3,2,`G6`],[5,3,`E6`]]),t(`Am`,[[0,2,`E5`],[2,1,`A5`],[3,2,`C6`],[5,3,`E6`]]),t(`F`,[[0,2,`C6`],[2,2,`A5`],[4,2,`F5`],[6,2,`C6`]]),t(`G`,[[0,2,`B5`],[2,2,`D6`],[4,4,`G6`]]),t(`E`,[[0,2,`E6`],[2,2,`B5`],[4,2,`G#5`],[6,2,`B5`]]),t(`E`,[[0,4,`E6`]],{fill:!0})]})(),Ce={nes:ie({e8:28,blocks:de,bloomW:`P50`,bloomV:5,lp:4500,grains:1}),brightA:ie({e8:26,blocks:ge,bloomW:`P25`,bloomV:8,lp:4200,grains:1}),brightB:ie({e8:25,blocks:xe,bloomW:`P50`,bloomV:5,lp:4e3,grains:1.3}),boss:ae(13)}}),Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,M,Le,Re,ze=o(()=>{S(),ee(),we(),Te=0,Ee=0,De=0,Oe=`brightA`,ke=0,Ae=.5,je=y(0),Me=y(1),Ne=y(3),Pe=(e,t=1)=>Array.from({length:e},(e,n)=>n%2?0:t),Fe={shard:(e,t,n)=>{e.glint(t,3e3+n()*800,[5,3,2,1,0]),e.tone(`SH`,`S`,t,[je],[2,0])},kill:(e,t,n)=>{e.noise(`NL8`,t,[1,.6,.35,.22,.15,.1],[7,6,4,3,1,0]);let r=.9+.2*n();e.tone(`P25`,`P`,t,[1200*r,900*r,700*r,520*r],[3,2,1,0])},shoot:(e,t,n)=>{let r=2600+800*n();e.tone(`P25`,`P`,t,[r,r*.84,r*.7],[3,2,1,0])},slash:(e,t)=>{e.noise(`NL1`,t,[1,.8,.62,.5,.42,.36,.3],[2,4,5,4,3,1,0]),e.tone(`P12`,`P`,t,[2200,1900,1650,1450],[1,1,1,0])},pulse:(e,t)=>{e.tone(`TRI`,`T`,t,O(180,720,10),[3,5,6,6,5,4,3,2,1,0]),e.noise(`NL8`,t,[.12],[0,1,2,3,3,2,1,1,0])},hurt:(e,t)=>{e.noise(`NL8`,t,O(.6,.06,11),[10,9,8,7,6,5,4,3,2,1,0]),e.tone(`TRI`,`T`,t,O(160,55,12),[9,9,8,7,6,5,4,3,2,1,1,0])},heal:(e,t,n)=>{e.tone(`SH`,`S`,t,O(1200,3600,18),[1,2,3,3,4,4,4,4,3,3,3,2,2,2,1,1,1,0]),e.glint(t+.3,3600*(.98+.04*n()),[4,3,3,2,2,1,1,0])},level:(e,t,n)=>{e.tone(`TRI`,`T`,t,O(330,990,15),[2,3,4,5,6,6,6,5,5,4,4,3,2,1,0]),e.glint(t+.23,3300*(.98+.04*n()),[5,4,3,3,2,2,1,1,0]),e.tone(`SH`,`S`,t+.23,[je],Array.from({length:18},(e,t)=>t%2?0:t<8?2:1))},cardup:(e,t,n)=>e.tone(`P50`,`P`,t,[4100*(.97+.06*n())],[3,1,0]),pick:(e,t)=>{e.tone(`P12`,`P`,t,O(1100,2200,6),[4,4,3,3,2,0]),e.noise(`NL1`,t,[1],[2,0])},grace:(e,t,n)=>{let r=740*(.99+.02*n());e.tone(`TRI`,`T`,t,[r],A(6,54,1.5)),e.tone(`TRI`,`T`,t,[r*1.0035],A(3,54,1.5)),e.tone(`P12`,`P`,t,[r*2.32],[2,2,1,1,1,0])},ready:(e,t,n)=>{e.tone(`SH`,`S`,t,[je],Array.from({length:24},(e,t)=>Math.max(0,Math.round(4*Math.sin(Math.PI*t/23))-t%2))),e.glint(t+.2,3500*(.98+.04*n()),[4,3,2,2,1,1,0])},ult:(e,t)=>{e.noise(`NL8`,t,O(.1,1,30),[...k(D(2,10,18)),...k(D(10,0,12))]),e.tone(`P25`,`P`,t,O(110,1760,30),[...Array(25).fill(5),4,3,2,1,0]),e.tone(`TRI`,`T`,t,[55],[8,8,7,6,5,4,3,2,1,1,0,0])},core:(e,t,n)=>{e.glint(t,2600*(.98+.04*n()),A(6,36,1.3)),e.tone(`SH`,`S`,t,[Me],[2,1,0])},unlock:(e,t,n)=>{e.tone(`TRI`,`T`,t,O(220,880,66),[...k(D(2,7,30)),...Array(20).fill(7),...k(D(7,3,16)),...k(D(3,0,12))]);let r=2800+800*n();[[.6,[4,3,2,2,1,1,0]],[.78,[3,2,2,1,1,0]],[.93,[2,2,1,1,0]]].forEach(([i,a])=>e.glint(t+i,r,a,(n()-.5)*.6)),e.tone(`SH`,`S`,t+.3,[je],Pe(72))},memory:(e,t)=>{e.tone(`TRI`,`T`,t,[330,270,220],[4,3,2,1,0]),e.glint(t,2900,[2,2,1,1,0])},boss:(e,t)=>{e.tone(`TRI`,`T`,t,Array.from({length:156},(e,t)=>55*(41/55)**(Math.floor(t/4)/38)),[...Array(108).fill(10),...k(D(10,0,48))]),e.noise(`NL8`,t,O(.15,.05,156),[...k(D(0,7,78)),...k(D(7,0,78))])},storm:(e,t)=>{e.noise(`NL8`,t,O(.05,.12,216),[...k(D(0,5,216)),...k(D(5,0,120))]),e.tone(`TRI`,`T`,t,[55],[...Array(216).fill(3),...k(D(3,0,60))])},thunder:(e,t)=>{e.noise(`NL8`,t,[1,1],[4,4,0]),e.noise(`NL8`,t+2*h,O(.5,.04,84),A(8,84,1.2)),e.tone(`TRI`,`T`,t,[41],A(6,18))},"thunder.short":(e,t)=>{e.noise(`NL8`,t,[1,1],[4,4,0]),e.noise(`NL8`,t+2*h,O(.5,.04,84).slice(0,18),A(8,18,1.2)),e.tone(`TRI`,`T`,t,[41],A(6,18))},gaze:(e,t)=>{e.tone(`SH`,`S`,t,O(Ne,Me,30).map((e,t)=>e*(Math.floor(t/4)%2?1.03:1)),[1,1,2,2,3,3,3,3,3,3,2,2,2,2,2,1,1,1,1,1,1,1,1,1,0])},rain:(e,t,n)=>e.noise(`NL1`,t,[1],Array.from({length:36},(e,t)=>t===35?0:Math.floor(n()*3))),wave:(e,t)=>e.noise(`NL8`,t,[.06],k(Array.from({length:54},(e,t)=>3*Math.sin(Math.PI*t/53)))),bossDown:(e,t)=>{e.tone(`TRI`,`T`,t,O(220,55,72),A(5,72)),e.tone(`SH`,`S`,t,[je],Pe(48))},over:(e,t)=>{e.tone(`TRI`,`T`,t,Array.from({length:144},(e,t)=>220*(55/220)**(Math.floor(t/3)/47)),A(6,144)),e.noise(`NL8`,t,O(.5,.03,120),A(4,120)),e.glint(t,2400,[2,2,1,1,0])},clear:(e,t,n)=>{let r=e=>t+e*h,i=(e,t)=>Array.from({length:e-1},(e,n)=>Math.max(1,t-Math.floor(n/2))),a=(e,t)=>Array.from({length:e},(e,n)=>n<6?t:Math.max(0,t-Math.ceil((n-6)/12))),o=e=>Array.from({length:e-2},(e,t)=>t===0?10:15);[`C5`,`E5`,`G5`,`C6`,`E6`,`G6`].forEach((t,n)=>e.tone(`P25`,`P`,r(n*7),[j(t)],i(7,11))),[`G4`,`C5`,`E5`,`G5`,`C6`,`E6`].forEach((t,n)=>e.tone(`P12`,`P`,r(n*7),[j(t)],i(7,6))),e.tone(`TRI`,`T`,r(0),[j(`C3`,!0)],o(14)),e.tone(`TRI`,`T`,r(14),[j(`G3`,!0)],o(14)),e.tone(`TRI`,`T`,r(28),[j(`C4`,!0)],o(20)),e.noise(`NL8`,r(0),O(.08,.9,48),Array.from({length:48},(e,t)=>Math.round(1+4*t/47))),[[[`A5`,`C6`,`F6`],[`F5`,`A5`,`C6`],`F2`],[[`B5`,`D6`,`G6`],[`G5`,`B5`,`D6`],`G2`]].forEach(([t,n,a],s)=>{let c=48+s*24;t.forEach((t,n)=>e.tone(`P25`,`P`,r(c+n*6),[j(t)],i(n===2?12:6,11))),n.forEach((t,n)=>e.tone(`P12`,`P`,r(c+n*6),[j(t)],i(n===2?12:6,6))),e.tone(`TRI`,`T`,r(c),[j(a,!0)],o(24)),e.noise(`NL8`,r(c),[.7,.6,.55,.5],[5,3,2,1])}),e.tone(`P25`,`P`,r(96),(e=>Array.from({length:170},(t,n)=>e*(1+(n<24?0:.005*Math.sin(2*Math.PI*5.5*(n-24)/60)))))(j(`E6`)),a(170,12)),e.tone(`P12`,`P`,r(96),[j(`C6`)],a(170,7)),e.tone(`TRI`,`T`,r(96),[j(`C3`,!0)],o(110)),e.noise(`NL8`,r(96),O(1,.6,80),Array.from({length:80},(e,t)=>Math.max(0,Math.round(6-t/13)))),e.glint(r(102),j(`C7`),[4,4,3,3,2,2,1,1,1,0]);let s=2600+400*n();for(let t=0;t<6;t++)e.glint(r(108)+n()*1.6,s*(.98+.04*n()),[3,3,2,2,1,1,0].map(e=>Math.round(e*(.6+.4*n()))),(n()-.5)*1.2)},book:(e,t)=>{e.tone(`TRI`,`T`,t,[196,160,130,110,98],[6,5,3,2,0]),e.noise(`NL8`,t,[.3],[3,1,0])},cover:(e,t)=>{e.noise(`NL8`,t,O(.5,.15,12),[1,2,3,3,2,2,1,1,1,0]),e.tone(`TRI`,`T`,t+.4,[120,100,85,70],[3,2,1,0])},page:(e,t)=>{e.noise(`NL1`,t,[.7,.8,.9,1,1,.9,.8,.7,.65,.6,.6,.6,.55,.55,.5,.5],[1,2,3,2,1,1,2,2,1,1,1,1,1,0,0,0]),e.tone(`TRI`,`T`,t+.27,[190],[2,1,0])},uihover:(e,t,n)=>e.tone(`P50`,`P`,t,[3300*(.98+.04*n())],[2,1,1,0]),pause:(e,t)=>e.tone(`P12`,`P`,t,O(1570,1050,7),[4,4,3,3,2,1,0]),resume:(e,t)=>e.tone(`P12`,`P`,t,O(1050,1570,7),[4,4,3,3,2,1,0]),uiclick:()=>{},"in.tap":(e,t,n)=>{e.glint(t,3400*(.98+.04*n()),[4,3,2,1,1,0]),e.tone(`SH`,`S`,t,[Me],[2,0])},"in.crack":(e,t)=>e.tone(`SH`,`S`,t,[Me],[10,0]),"in.burst":(e,t,n)=>{e.noise(`NL1`,t,[.5,.7,1,1,1,1,1],[2,4,5,3,2,1,0]);let r=.18;for(let i=0;i<8;i++){let i=.006+n()**1.2*r;e.tone(`SH`,`S`,t+i,[Me*(1+i/r*.8+.2*n())],[3,2,1,0].map(e=>Math.round(e*(1-i/r*.5))),(n()-.5)*1.1)}e.glint(t+.03,4400,[4,3,2,2,1,1,0])},"in.gate":(e,t)=>{e.noise(`NL8`,t,O(.08,1,96),[...k(D(1,6,60)),...k(D(6,0,36))]),e.tone(`P12`,`P`,t,O(110,880,42),k(D(1,3,42))),e.tone(`TRI`,`T`,t,[110],A(6,24)),e.noise(`NL8`,t,[.2],[3,3,2,2,1,1,1,1,0])},"out.press":(e,t)=>{e.noise(`NL1`,t,O(1,.06,78),A(5,78)),e.tone(`P12`,`P`,t,O(1760,55,27),[4,4,3,3,3,2,2,2,...Array(18).fill(1),0])},"out.point":(e,t)=>e.glint(t,4e3,[2,1,1,0]),"out.reform":(e,t,n)=>{let r=3420+190*n();e.glint(t,r,[5,4,3,2,2,1,1,0]),e.glint(t+.028,r,[2,2,1,1,0],-.08),e.tone(`SH`,`S`,t,[Me],[1,0])},"shard.spill":(e,t,n)=>{e.tone(`SH`,`S`,t,O(Me,Me*1.5,8),[2,2,3,3,2,2,1,0]),e.glint(t+8*h,3600*(.98+.04*n()),[4,3,2,2,1,1,0])},"shard.peek":(e,t,n)=>{e.glint(t,3800*(.98+.04*n()),[3,2,2,1,1,0]),e.tone(`SH`,`S`,t,[je],[1,0])},"shard.idleA":(e,t,n)=>e.glint(t,3e3+1400*n(),[2,2,1,1,0]),"shard.idleB":(e,t,n)=>{let r=3200+1e3*n();e.glint(t,r,[2,1,1,0]),e.glint(t+.09,r,[1,1,1,0])},"shard.idleC":(e,t)=>e.tone(`SH`,`S`,t,[je],[8,15,8,8,0])},Ie={shard:-2.7,kill:-7.8,shoot:-4.1,slash:-12.6,pulse:-10.8,hurt:-10.6,heal:2,level:-3.9,cardup:-5.9,pick:7,grace:-7.3,ready:-.4,ult:-3.6,core:-9.7,unlock:-5,memory:-1.5,boss:-8.4,storm:-8.2,thunder:-10.5,"thunder.short":-13.5,gaze:-3.1,rain:-13.5,wave:-14.7,bossDown:-5.6,over:-5.2,clear:-8.9,book:-.8,cover:-3.8,page:-3.1,uihover:-7.2,pause:4.6,resume:4.9,uiclick:-99,"in.tap":-3.9,"in.crack":.6,"in.burst":1.3,"in.gate":-2.3,"out.press":-13.5,"out.point":-7.7,"out.reform":-5.7,"shard.spill":-1.8,"shard.peek":2,"shard.idleA":-.1,"shard.idleB":-3.4,"shard.idleC":8.9,__bed:-8.3,__bgm:5.8,"__nes.p1":0,"__nes.p2":1.7,"__nes.tri":-15.8,"__nes.noi":-12.2,__brightA:6,"__brightA.p1":0,"__brightA.p2":.4,"__brightA.tri":-17.4,"__brightA.noi":-12.2,__brightB:6.4,"__brightB.p1":0,"__brightB.p2":1.5,"__brightB.tri":-17.8,"__brightB.noi":-12.5,__boss:.7,"__boss.p1":0,"__boss.p2":2.7,"__boss.tri":-11.4,"__boss.noi":.8,__pad:-5.1,__dry:0,__echo:-8.5,__wind:-56.7,__grain:0},M=(e,t,n,r,i={})=>({bus:e,prio:t,gap:n,pan:r,...i}),Le={shard:M(`world`,3,60,`hero`,{cap:3}),kill:M(`world`,3,70,`front`,{cap:3}),shoot:M(`world`,3,100,`front`,{cap:2}),slash:M(`world`,2,120,`front`,{cap:2}),pulse:M(`world`,2,150,`front`),hurt:M(`world`,0,1e3,`hero`,{duck:0}),heal:M(`world`,1,200,`hero`,{duck:1}),level:M(`ui`,1,300,`center`),cardup:M(`ui`,2,60,`center`),pick:M(`ui`,1,300,`center`),grace:M(`world`,1,150,`center`,{duck:1}),ready:M(`world`,1,1e3,`hero`,{duck:1}),ult:M(`world`,0,500,`center`,{duck:0}),core:M(`world`,1,300,`hero`,{duck:1}),unlock:M(`world`,0,500,`center`,{duck:0}),memory:M(`world`,1,300,`hero`,{duck:1}),boss:M(`world`,0,1e3,`giant`,{duck:0}),storm:M(`world`,1,3e3,`giant`,{duck:1}),thunder:M(`world`,1,150,`rand`,{duck:1,cap:2,group:`thunder`}),"thunder.short":M(`world`,1,150,`rand`,{duck:1,cap:2,group:`thunder`}),gaze:M(`world`,2,300,`giant`),rain:M(`world`,2,1e3,`giant`),wave:M(`world`,2,2e3,`center`),bossDown:M(`world`,0,1e3,`giant`,{duck:0}),over:M(`world`,0,2e3,`center`,{duck:0}),clear:M(`world`,0,5e3,`center`,{duck:0}),book:M(`ui`,1,200,`center`),cover:M(`ui`,1,200,`center`),page:M(`ui`,1,120,`center`),uihover:M(`ui`,2,70,`center`),pause:M(`ui`,1,150,`center`),resume:M(`ui`,1,150,`center`),uiclick:M(`ui`,2,0,`center`,{silent:!0}),"in.tap":M(`cue`,0,0,`center`),"in.crack":M(`cue`,0,0,`center`),"in.burst":M(`cue`,0,0,`center`),"in.gate":M(`cue`,0,0,`center`),"out.press":M(`cue`,0,0,`center`),"out.point":M(`cue`,0,0,`center`),"out.reform":M(`cue`,0,0,`center`)},Object.keys(Le).filter(e=>!e.startsWith(`in.`)&&!e.startsWith(`out.`)),Re=[`shard.spill`,`shard.peek`,`shard.idleA`,`shard.idleB`,`shard.idleC`]});function Be(e,t,n,r,i=!1,a={kind:`nes`,bgm:1,ch:[1,1,1,1],dry:1,echo:1,wind:1,grain:1}){let o=m(e),s=null,c=[],l=`calm`,u=_.T,d=a.kind===`pad`?null:Ce[a.kind],f=d?d.lp:Ve.calm,p=d?d.beat*h:1.25;function g(e,t){let n=e;typeof n.cancelAndHoldAtTime==`function`?n.cancelAndHoldAtTime(t):(e.cancelScheduledValues(t),e.setValueAtTime(e.value,t))}function v(e,t,n,r){g(e,n),e.setTargetAtTime(t,n,r)}function y(t,n){let r=e.createGain();return r.gain.value=t,r.gain.setValueAtTime(t,0),n&&r.connect(n),r}function b(t,n,r){let i=e.createBiquadFilter();return i.type=t,i.frequency.value=n,i.frequency.setValueAtTime(n,0),i.Q.value=r,i}function x(t,r){let i=e.createBufferSource();return i.buffer=o.NL1,i.loop=!0,i.playbackRate.value=t,i.start(r,n()*.9),i}function S(t,r,i,s,c){let l=b(`lowpass`,Ye.f*(i?He.lp:1),Ye.q);l.connect(y(a.dry,t)),Ge.forEach((t,i)=>{let a=y(Je*10**(qe[i]/20),l);for(let c of[-7,7]){let l=e.createOscillator();l.setPeriodicWave(o.W[Ke[i]]),l.frequency.value=t,l.detune.value=c+(n()-.5)*5,l.connect(a),l.start(r),s.push(l)}});let u=e.createOscillator();u.frequency.value=Ye.rate;let d=y(Ye.d*(i?He.lp:1),l.frequency);u.connect(d),u.start(r),s.push(u);let f=y(a.echo,null);l.connect(f);let p=b(`highpass`,Xe.hp,.5);f.connect(p);let m=e.createDelay(1),h=e.createDelay(1);m.delayTime.value=Xe.a,h.delayTime.value=Xe.b,p.connect(m),p.connect(h);let g=b(`lowpass`,Xe.lp,.5),_=b(`lowpass`,Xe.lp,.5);m.connect(g),h.connect(_),g.connect(y(Xe.fb,h)),_.connect(y(Xe.fb,m));let v=e.createChannelMerger(2);g.connect(v,0,0),_.connect(v,0,1),v.connect(t);let S=x(Ze.rate,r),C=b(`bandpass`,Ze.bp,Ze.q);c.connect(p);let w=y(a.wind,c),T=y(a.wind*Ze.swell,w.gain);return u.connect(T),S.connect(C),C.connect(w),s.push(S),{lp:l,lfoF:d,windL:T}}function C(r){let i=l===`giant`,s=e.createGain(),c=T(s.gain,0);s.connect(t);let p=[],m=y(a.bgm,s),h=y(a.grain,s),g=b(`lowpass`,i?Ve.giant:f,Ve.q);g.connect(m);let _=y(i?He.lvl:1,g),v=y(i?He.wind:1,null),C=null,w=null,E=null,D=null,O=[];if(!d)({lp:C,lfoF:w,windL:E}=S(_,r,i,p,v));else{for(let e=0;e<4;e++)O.push(y(a.ch[e],_));let e=x(Ue.rate,r),t=b(`bandpass`,Ue.bp,Ue.q);D=y(0,v),v.connect(O[3]),e.connect(t),t.connect(D),p.push(e)}let k=y(+!!i,s),A=e.createGain();A.gain.value=1,A.connect(k);let ee=[];for(let[t,n]of[[55,1],[110.4,.45]]){let i=e.createOscillator();i.setPeriodicWave(o.W.TRI),i.frequency.value=t;let a=e.createGain();a.gain.value=0,a.gain.setValueAtTime(4/15*u*n,r),i.connect(a),a.connect(A),i.start(r),p.push(i),ee.push(a)}let j=r+.05;return{lv:s,lvl:c,tone:g,gG:_,windM:v,grG:h,lp:C,lfoF:w,windL:E,ch:O,windG:D,ev:0,loop:0,t0:j,notes:[],dg:k,hb:A,drone:ee,srcs:p,grains:[],v:4,nextStep:r+.6+.8*n(),nextBeat:j,nextGrain:r+.5,dead:1/0}}function E(e,t,n){e.lvl.to(0,t,Math.max(.03,n)),e.dead=t+Math.max(.03,n)+.05;for(let t of e.srcs)try{t.stop(e.dead)}catch{}for(let t of e.notes)if(t.t1>e.dead)try{t.n.stop(Math.max(t.t0,e.dead))}catch{}c.push(e)}function D(t,r,i){let a=d.ev,o=d.loop;for(let s=0;s<400;s++){let s=a[t.ev],c=t.t0+(t.loop*o+s.f)*h;if(c>=i)break;if(c>=r-.005){if(s.ch===3&&s.nz){let r=w(e,t.ch[3],n,0);r.noise(s.nz.b,c,s.nz.rs,s.vs);for(let e of r.srcs)t.notes.push(e)}else if(s.ch===3)t.windG.gain.setTargetAtTime(s.vs[0]/15*_.N,c,1.5);else{let r=w(e,t.ch[s.ch],n,0);r.tone(s.w,s.cls,c,s.fs,s.vs);for(let e of r.srcs)t.notes.push(e)}}++t.ev>=a.length&&(t.ev=0,t.loop++)}t.notes.length>24&&(t.notes=t.notes.filter(e=>e.t1>r))}let O={set(e,t,n){if(e){if(s)return;s=C(n),s.lvl.to(r,n,Math.max(.03,t)),O.tick(n)}else s&&=(E(s,n,t),null)},mode(e,t){if(e===l||(l=e,!s))return;let n=s,r=e===`giant`;v(n.tone.frequency,r?Ve.giant:f,t,.8),v(n.gG.gain,r?He.lvl:1,t,.8),n.lp&&v(n.lp.frequency,Ye.f*(r?He.lp:1),t,.8),n.lfoF&&v(n.lfoF.gain,Ye.d*(r?He.lp:1),t,.8),v(n.windM.gain,r?He.wind:1,t,.5),v(n.dg.gain,+!!r,t,r?.6:.8),n.nextGrain=Math.max(n.nextGrain,t+.3);let i=n.t0+Math.ceil((t+.3-n.t0)/p)*p;n.nextBeat=Math.max(n.nextBeat,d?i:t+.3)},tick(t){for(let e=c.length-1;e>=0;e--)if(c[e].dead<t){if(!i)try{c[e].lv.disconnect()}catch{}c.splice(e,1)}let r=s;if(!r)return;let a=t+2;for(d&&D(r,t,a);r.nextStep<a;){let e=r.v;r.v=Math.max(3,Math.min(5,r.v+(n()<.5?-1:1))),r.v!==e&&(r.drone[0].gain.setTargetAtTime(r.v/15*u,r.nextStep,.05),r.drone[1].gain.setTargetAtTime(r.v/15*u*.45,r.nextStep,.05)),r.nextStep+=.6+.8*n()}if(l===`giant`)for(;r.nextBeat<a;){let e=(r.v+2)/r.v;for(let t of[0,.12])r.hb.gain.setTargetAtTime(e,r.nextBeat+t,.008),r.hb.gain.setTargetAtTime(1,r.nextBeat+t+.06,.02);r.nextBeat+=p}else r.nextBeat=Math.max(r.nextBeat,t);let o=l===`giant`?0:(l===`od`?.75:.25)*(d?d.grains:1);if(o===0)r.nextGrain=Math.max(r.nextGrain,t+.5);else for(;r.nextGrain<a;){let t=r.nextGrain,i=We[Math.floor(n()*We.length)],a=(n()-.5)*1.4,s=w(e,r.grG,n,a);s.glint(t,i,[2,2,1,1,0]),s.glint(t+.312,i,[1,1,0,0],0,.8),r.grains.push({t0:t,t1:s.end}),r.nextGrain+=-Math.log(1-n())/o}r.grains.length>8&&(r.grains=r.grains.filter(e=>e.t1>t))},stop(e){s&&E(s,e,.05),s=null},isOn:()=>!!s,srcCount(e){let t=0;for(let n of[...c,...s?[s]:[]]){n.dead>e&&(t+=n.srcs.length);for(let r of n.grains)r.t0<=e&&r.t1>e&&(t+=6);for(let r of n.notes)r.t0<=e&&r.t1>e&&t++}return t}};return O}var Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe=o(()=>{S(),ee(),we(),Ve={calm:4500,giant:1100,q:.5},He={lp:.55,lvl:10**(-2/20),wind:Math.SQRT2},Ue={rate:1789773/762/g,bp:600,q:.5},We=[2637,3136,3520,3951,4699],Ge=[110,164.81,196,246.94,293.66,329.63],Ke=[`TRI`,`TRI`,`TRI`,`P25`,`P25`,`P12`],qe=[0,-1.7,-5.9,-5.6,-7.2,-3.7],Je=.05,Ye={f:900,d:450,q:.7,rate:.06},Xe={a:21/60,b:27/60,fb:.5,lp:2200,hp:200},Ze={rate:1760/g,bp:420,q:.6,swell:.35}}),$e={};s($e,{attachUnlock:()=>it,createRetroAudio:()=>rt,isRetroAudio:()=>tt});function et(e,t){if(!t)return e;let n=!1,r=!1;return{set(i,a,o){n=i,i?((r?t:e).set(!0,a,o),(r?e:t).isOn()&&(r?e:t).set(!1,Math.min(a,.6),o)):(e.isOn()&&e.set(!1,a,o),t.isOn()&&t.set(!1,a,o))},mode(i,a){let o=i===`giant`;o!==r&&(r=o,n&&(o?(e.isOn()&&e.set(!1,dt.mainOut,a),t.set(!0,dt.in,a)):(t.isOn()&&t.set(!1,dt.out,a),e.set(!0,dt.mainIn,a)))),e.mode(o?`calm`:i,a)},tick(n){e.tick(n),t.tick(n)},stop(n){e.stop(n),t.stop(n)},isOn:()=>n,srcCount:n=>e.srcCount(n)+t.srcCount(n)}}function tt(e){return!!e&&e.isRetroAudio===!0}function nt(e,t){let n=e;typeof n.cancelAndHoldAtTime==`function`?n.cancelAndHoldAtTime(t):(e.cancelScheduledValues(t),e.setValueAtTime(e.value,t))}function rt(e={}){let t=e.port??null,n=!t,i=!!e.clock,a=typeof r<`u`?r:null,o=n&&a?a.AudioContext||a.webkitAudioContext:null;if(n&&!o)return null;let s=e.rnd??Math.random,c={...Ie,...e.trims||{}},l=e.bgm??Oe,u=e.enabled??!0,d=null,f=null,p=!1,m=!1,h=!0,g=!n,_=-1e9,v=-1,y=!1,b=0,x=0,S=[],C={},E=-1e9,D=-1e9,O=0,k={played:0,byKey:{},dropped:{},stolen:0,maxSounds:0,maxSrcs:0,errors:0,state:`none`,enabled:u};e.trace&&(k.trace=[],k.srcs=[]);let A=()=>i?e.clock():d?d.currentTime:0,ee=()=>i||!!d&&d.state===`running`,j=()=>i?e.clock()+.01:d?d.state===`running`?d.currentTime+.01:d.currentTime+.12:0,te=()=>typeof performance<`u`?performance.now():0;function ne(t,n){let r=e=>{let n=t.createGain();return n.gain.value=e,n.gain.setValueAtTime(e,0),n},a=(e,n,r)=>{let i=t.createBiquadFilter();return i.type=e,i.frequency.value=n,i.frequency.setValueAtTime(n,0),i.Q.value=r,i},o=e=>(e.channelCount=2,e.channelCountMode=`explicit`,e.channelInterpretation=`speakers`,e),d=r(st*ut(Te)),f=null;n?d.connect(n):(f=r(1),d.connect(f),f.connect(t.destination));let p=t.createGain(),m=T(p.gain,+!!u);p.connect(d);let h=t.createDynamicsCompressor();h.threshold.value=ct.threshold,h.knee.value=ct.knee,h.ratio.value=ct.ratio,h.attack.value=ct.attack,h.release.value=ct.release,h.connect(p);let g=a(`lowpass`,e.lp??ot,.5);g.connect(h);let _=a(`highpass`,35,.5);_.connect(g);let v=o(r(1));v.connect(_);let y=r(1);y.connect(v);let b=a(`lowpass`,12e3,.707);b.connect(y);let x=o(r(1));x.connect(b);let S=r(1);S.connect(v);let C=r(1);C.connect(v);let w=r(1);w.connect(v);let E=r(1);E.connect(w);let D=a(`lowpass`,12e3,.707);D.connect(E);let O=o(r(1));O.connect(D);let k=e=>{let n=e===`pad`?`__nes`:`__${e}`;return Be(t,O,s,ut(c.__bed+Ee),i,{kind:e,bgm:ut((e===`pad`?c.__pad:e===`nes`?c.__bgm:c[n])+De),ch:[ut(c[n+`.p1`]),ut(c[n+`.p2`]),ut(c[n+`.tri`]),ut(c[n+`.noi`])],dry:ut(c.__dry),echo:ut(c.__echo),wind:ut(c.__wind),grain:ut(c.__grain)})},A=et(k(l),l===`boss`?null:k(`boss`));return{out:d,shutG:f,gate:m,mix:v,bus:{world:x,ui:S,cue:C},mufLP:b,mufG:y,bedLP:D,bedMuf:E,bedDuck:w,bed:A}}t&&(d=t.ctx,f=ne(d,t.input));let re=!1,ie=()=>{let e=d;if(re||!e||!f?.shutG||e.state!==`running`)return;re=!0;let t=e.currentTime;f.shutG.gain.cancelScheduledValues(t),f.shutG.gain.setValueAtTime(1,t),f.shutG.gain.linearRampToValueAtTime(0,t+.03);let n=((e.baseLatency||.01)+(e.outputLatency||.03))*1e3,r=te()+Math.min(120,30+n+20);for(;te()<r;);},ae=e=>{let t=d;if(!e.persisted||!re||!t||!f?.shutG)return;re=!1;let n=t.currentTime;f.shutG.gain.cancelScheduledValues(n),f.shutG.gain.setValueAtTime(0,n),f.shutG.gain.linearRampToValueAtTime(1,n+.3)};function oe(e,t){return k.dropped[t]=(k.dropped[t]||0)+1,k.trace&&k.trace.push({t:A(),k:e,res:t}),!1}function se(e){for(let t=S.length-1;t>=0;t--)S[t].end<e&&S.splice(t,1)}function ce(e,t){let n=e.g.gain;n.cancelScheduledValues(t),n.setValueAtTime(n.value,t),n.linearRampToValueAtTime(0,t+.006);for(let n of e.srcs)if(n.t1>t+.008){try{n.n.stop(t+.008)}catch{}n.t1=Math.max(n.t0,t+.008)}e.end=t+.008;let r=S.indexOf(e);r>=0&&S.splice(r,1),k.stolen++}function le(e,t){let n=f.bedDuck.gain;nt(n,e),n.setTargetAtTime(.71,e,.007),n.setTargetAtTime(1,e+.02+(t===0?.25:.1),(t===0?.6:.3)/3)}function ue(e,t){if(!t||e===`center`)return 0;let n=Ae/.5,r=e=>Math.max(-.5,Math.min(.5,e/Math.max(1,t.dev.W)-.5));return(e=>Math.max(-Ae,Math.min(Ae,e)))(e===`hero`?r(t.p.x)*n:e===`front`?(r(t.p.x)+.15+(s()-.5)*.2)*n:e===`giant`?r(t.boss.x)*n:(s()-.5)*.8*n)}function de(e,t,n,r,i=0){let a=d,o=A(),l=e,u=0;if(e===`thunder`){let t=o-E;if(t<.15)return oe(e,`rate`);t<.6&&(l=`thunder.short`)}else if(t.gap>0&&o-(C[e]??-1e9)<t.gap/1e3)return oe(e,`rate`);let p=Le[l]??t,m=O;e===`shard`&&(m=o-D<.4?Math.min(5,O+1):0,u-=m),se(o);let h=p.group??l;if(p.cap){let e=0,t=null;for(let n of S)n.grp===h&&(e++,t||=n);e>=p.cap&&t&&ce(t,o)}if(S.length>=at){let t=null;for(let e of S)if(e.prio>0&&e.prio>=p.prio){t=e;break}if(!t)return oe(e,`full`);ce(t,o)}let g=j()+Math.max(0,i),_=a.createGain();_.gain.value=ut((c[l]??0)+u),_.connect(f.bus[n]);let v=w(a,_,s,r);Fe[l](v,g,s),S.push({k:l,grp:h,prio:p.prio,t0:g,end:v.end,g:_,srcs:v.srcs}),C[e]=o,e===`thunder`&&(E=o),e===`shard`&&(D=o,O=m),p.duck!=null&&n===`world`&&le(g,p.duck),k.played++,k.byKey[l]=(k.byKey[l]||0)+1,S.length>k.maxSounds&&(k.maxSounds=S.length);let y=f.bed.srcCount(g);for(let e of S)for(let t of e.srcs)t.t0<=g+.001&&t.t1>g&&y++;if(y>k.maxSrcs&&(k.maxSrcs=y),k.trace){k.trace.push({t:o,k:l,res:`play`,n:S.length});for(let e of v.srcs)k.srcs.push([e.t0,e.t1])}return!0}function fe(e,t){let n=Le[e];if(!n)return oe(e,`unknown`);if(n.silent)return oe(e,`silent`);if(!d||!f)return oe(e,`locked`);if(!u)return oe(e,`off`);if(p)return oe(e,`hidden`);if(!i&&a&&(((a.__retroSteps??a.__dreamSteps)|0)>1||a.__retroDt!=null||a.__dreamDt!=null)||t&&v>=0&&t.stepN-v>6)return oe(e,`ff`);if(!ee()&&te()-_>1e3)return oe(e,`asleep`);let r=n.bus;if(e===`grace`&&t&&t.sheet.kind!==`none`&&(r=`ui`),e===`uihover`&&t?.dev.touch)return oe(e,`silent`);if(r===`world`&&t){if(t.paused)return oe(e,`paused`);if((t.phase===`dying`||t.phase===`over`)&&e!==`over`)return oe(e,`over`)}return de(e,n,r,ue(n.pan,t))}function pe(e,t,n=0){!f||e===f.bed.isOn()||f.bed.set(e,t,j()+Math.max(0,n))}function me(e,t){try{let n=Le[e];n&&d&&f&&de(e,n,n.bus,0,t)}catch{k.errors++}}function he(e){let t=f,n=m?.25:.8,r=(t,r)=>{nt(t,e),t.setTargetAtTime(r,e,n)};r(t.mufLP.frequency,m?1200:12e3),r(t.mufG.gain,m?.5:1),r(t.bedLP.frequency,m?700:12e3),r(t.bedMuf.gain,m?.5:1)}function ge(){return h&&u&&!p&&ee()}let _e={isRetroAudio:!0,get ctx(){return d},unlock(){if(!(i||y))try{!d&&n&&(d=new o,f=ne(d,null),addEventListener(`pagehide`,ie),addEventListener(`pageshow`,ae));let e=d;if(!e||e.state===`closed`)return;if(g=!0,_=te(),t?.wake)t.wake();else{let t=e.createBufferSource();t.buffer=e.createBuffer(1,1,e.sampleRate),t.connect(e.destination),t.start(0),n&&!u?e.state===`running`&&e.suspend().catch(()=>{}):e.resume().catch(()=>{})}}catch{k.errors++}},sfx(e,t){try{fe(e,t)}catch{k.errors++}},play(e,t=0){try{let n=Le[e];return!n||n.silent||!d||!f?!1:de(e,n,n.bus,t)}catch{return k.errors++,!1}},sync(e){if(e&&!y)try{if(v=e.stepN,e.sound!==u&&_e.setEnabled(e.sound),!d||!f)return;let t=A(),n=e.sheet.kind!==`none`&&e.sheet.exit==null;n!==m&&(m=n,he(t));let r=ge(),i=.6;e.phase===`dying`||e.phase===`over`?r=!1:(e.phase===`clear`||e.phase===`clearing`&&e.clearT>=lt)&&(r=!1,i=.5),pe(r,r?1.2:i),f.bed.mode(e.boss.live?`giant`:e.run.ultT>0?`od`:`calm`,t),f.bed.tick(t)}catch{k.errors++}},setHidden(e){if(!(e===p||y)&&(p=e,d&&f))try{let t=d;e?(f.bed.set(!1,.3,j()),n&&!i&&(clearTimeout(x),x=r.setTimeout(()=>{p&&t.state===`running`&&t.suspend().catch(()=>{})},400))):n&&!i&&u&&g&&(clearTimeout(x),_=te(),t.resume().catch(()=>{}))}catch{k.errors++}},setEnabled(e){if(!y&&(u=e,k.enabled=e,d&&f))try{let t=A();if(f.gate.to(+!!e,t,.5),e||f.bed.set(!1,.5,t),n&&!i){let t=d;clearTimeout(b),e?g&&!p&&(_=te(),t.resume().catch(()=>{})):b=r.setTimeout(()=>{!u&&!y&&t.state===`running`&&t.suspend().catch(()=>{})},600)}}catch{k.errors++}},bed(e,t){h=e,pe(e&&ge(),t??(e?1.2:.6))},warpIn(e,t=0){e===`gate`&&(h=!0,pe(ge(),1.2,t)),d&&f&&u&&!p&&me(`in.`+e,t)},warpOut(e,t=0){e===`press`&&(h=!1,pe(!1,.6,t)),d&&f&&u&&!p&&me(`out.`+e,t)},stats(){return k.state=d?d.state:`none`,k},dispose(){if(y||(y=!0,clearTimeout(b),clearTimeout(x),a&&n&&(removeEventListener(`pagehide`,ie),removeEventListener(`pageshow`,ae)),!d||!f))return;let e=d,t=f;try{let r=A();t.gate.to(0,r,.06),t.bed.stop(r);let a=()=>{try{t.out.disconnect()}catch{}n&&e.close().catch(()=>{})};i?a():setTimeout(a,120)}catch{}}};return _e}function it(e,t=r){let n=[`pointerdown`,`keydown`,`touchend`],i=()=>e.unlock();for(let e of n)t.addEventListener(e,i,{capture:!0,passive:!0});return()=>{for(let e of n)t.removeEventListener(e,i,{capture:!0})}}var at,ot,st,ct,lt,ut,dt,ft=o(()=>{ee(),ze(),Qe(),at=10,ot=1e4,st=.8,ct={threshold:-10,knee:4,ratio:12,attack:.002,release:.15},lt=2.4+2.8-.5,ut=e=>10**(e/20),dt={in:.6,mainOut:.8,out:1.5,mainIn:2}});function pt(e){let t=e.rows.length,n=0;for(let t of e.rows)n=Math.max(n,t.length);return{w:e.w??n,h:e.h??t}}function mt(e,t,n=`base`){let r=xt.get(e);r||xt.set(e,r=/* @__PURE__ */ new Map);let i=r.get(n);if(i)return i;let{w:a,h:o}=pt(e),s=document.createElement(`canvas`);s.width=Math.max(1,a),s.height=Math.max(1,o);let c=s.getContext(`2d`),l=c.createImageData(s.width,s.height),u={};for(let n in e.key){let r=e.key[n],i=r?t[r]:``;if(r&&!i)throw Error(`palette has no colour "${r}" (key "${n}")`);u[n]=i?[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)]:null}for(let t=0;t<o;t++){let n=e.rows[t]||``;for(let e=0;e<a;e++){let r=n[e]??`.`;if(r===`.`||r===` `)continue;let i=u[r];if(i===void 0)throw Error(`sprite key has no "${r}" (row ${t})`);if(!i)continue;let o=(t*a+e)*4;l.data[o]=i[0],l.data[o+1]=i[1],l.data[o+2]=i[2],l.data[o+3]=255}}return c.putImageData(l,0,0),r.set(n,s),s}function ht(e,t){let n=0;for(let r of t){if(r===` `){n+=e.space+e.gap;continue}let t=e.glyphs[r]||e.glyphs[r.toUpperCase()]||e.glyphs[`?`];n+=(t?Math.max(...t.map(e=>e.length)):e.space)+e.gap}return Math.max(0,n-e.gap)}function gt(e,t,n,r,i,a,o=`left`){let s=Math.round(o===`left`?r:o===`center`?r-ht(t,n)/2:r-ht(t,n)),c=Math.round(i);e.fillStyle=a;for(let r of n){if(r===` `){s+=t.space+t.gap;continue}let n=t.glyphs[r]||t.glyphs[r.toUpperCase()]||t.glyphs[`?`];if(!n){s+=t.space+t.gap;continue}let i=0;n.forEach((t,n)=>{i=Math.max(i,t.length);for(let r=0;r<t.length;r++)t[r]!==`.`&&t[r]!==` `&&e.fillRect(s+r,c+n,1,1)}),s+=i+t.gap}return s-r}function _t(e,t){if(!t)return void wt.delete(e);t.imageSmoothingEnabled=!1,wt.set(e,t)}function vt(e,t,n=Ct){let r=e.getTransform();t.setTransform(r.a*n,r.b*n,r.c*n,r.d*n,r.e*n,r.f*n),t.imageSmoothingEnabled=!1}function yt(e,t,n,r){let i=e.getTransform();e.save(),e.setTransform(1,0,0,1,Math.round(i.a*t+i.c*n+i.e),Math.round(i.b*t+i.d*n+i.f));try{return r()}finally{e.restore()}}function bt(e,t,n,r=Ct){if(t<=0)return;if(t>=1)return n(e);let i=e.canvas.width,a=e.canvas.height,o=Et[Dt]||(Et[Dt]=document.createElement(`canvas`));(o.width!==i||o.height!==a)&&(o.width=i,o.height=a);let s=o.getContext(`2d`,{willReadFrequently:!0});s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,i,a),s.setTransform(e.getTransform()),s.imageSmoothingEnabled=!1,Dt++;try{n(s)}finally{Dt--}s.setTransform(1,0,0,1,0,0);let c=s.getImageData(0,0,i,a),l=c.data;for(let e=0;e<a;e++)for(let n=0;n<i;n++){let a=(e*i+n)*4+3;l[a]&&!N(Math.floor(n/r),Math.floor(e/r),t)&&(l[a]=0)}s.putImageData(c,0,0),e.save(),e.setTransform(1,0,0,1,0,0),e.drawImage(o,0,0),e.restore()}var xt,St,N,Ct,wt,Tt,Et,Dt,Ot=o(()=>{xt=/* @__PURE__ */ new WeakMap,St=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],N=(e,t,n)=>(St[(t&3)*4+(e&3)]+.5)/16<n,Ct=2,wt=/* @__PURE__ */ new WeakMap,Tt=e=>wt.get(e)??null,Et=[],Dt=0});async function kt(){if(!Vt){Vt=!0;let e=new FontFace(Rt,`url(${zt})`);document.fonts.add(await e.load())}await document.fonts.load(`10px "${Rt}"`,`夢の書掟`),await document.fonts.load(`80px "${Rt}"`,`夢の書掟`)}function At(){let e=document.createElement(`canvas`).getContext(`2d`);return e.font=`80px "${Rt}"`,e}function jt(e){let t=[],n=!1,r=!1;for(let i of e){if(i===Ht){n=!0;continue}if(i===Ut){r=!0;continue}let e=Gt(i),a=t[t.length-1];a&&r?(r=!1,a.s+=i,a.ke=e):a&&Bt.includes(i)?(a.s+=i,e!==`other`&&(a.ke=e)):a&&Kt.includes(a.s[a.s.length-1])&&!n?(a.s+=i,a.k=a.ke=e):a&&!n&&(e!==`hira`&&e!==`other`&&a.ke===e&&!/[、。！？]$/.test(a.s)||a.ke===`lat`&&/^[0-9]+$/.test(a.s)&&(e===`kanji`||i===`つ`))?(a.s+=i,a.ke=e):(t.push({s:i,k:e,ke:e,hint:n}),n=!1)}return t}function Mt(e,t,n){let r=e.s[e.s.length-1],i=e.s.length>1?e.s[e.s.length-2]:n,a=Wt.includes(r)&&!(`とで`.includes(r)&&qt(i)),o=0;if(/[。！？]/.test(r)?o-=120:r===`、`&&(o-=70),t.hint&&(o-=90),/[。！？、]/.test(r)||t.hint)return o;let s=t.s[0];return e.ke===`hira`&&t.k===`hira`?o+=a&&!Wt.includes(s)?15:Wt.includes(s)?300:250:e.ke===`hira`?o+=a||r===`ら`?-35:-10:t.k===`hira`?o+=Wt.includes(s)?300:400:o+=10,o}function Nt(e,t,n=Ft){let r=[];for(let i of e.split(`
`))r.push(...Pt(i,t,n));return r}function Pt(e,t,n){let r=jt(e),i=r.length;if(!i)return[];let a=/* @__PURE__ */ new Map,o=(e,t)=>{let i=e*1e3+t,o=a.get(i);return o===void 0&&a.set(i,o=n(r.slice(e,t).map(e=>e.s).join(``))),o},s=(e,n)=>{let i=r[n-1].s;return n-e===1||o(e,n)<=t+1||`、。`.includes(i[i.length-1])&&o(e,n)<=t+5},c=0;for(let e=0;e<i;){let t=e+1;for(;t<i&&s(e,t+1);)t++;c++,e=t}let l=(e,t)=>[...r.slice(e,t).map(e=>e.s).join(``)].length,u=e=>{let t=[],n=1/0,a=0,c=[],u=(d,f,p,m)=>{if(!(p-300>=n)){if(f===e-1){if(!s(d,i))return;let r=[...c,i],u=r.map((e,t)=>o(t?r[t-1]:0,e)),f=u[u.length-1],h=p+(u.length>1?.45*(Math.max(...u)-Math.min(...u.slice(0,-1),f+12)):0),g=l(d,i);e>1&&g<=2?h+=600:e>1&&g<=4&&(h+=120),h<n&&(n=h,t=[...c],a=m);return}for(let t=d+1;t<=i-(e-1-f)&&s(d,t);t++){c.push(t);let e=r[t-2],n=Mt(r[t-1],r[t],e?e.s[e.s.length-1]:``);u(t,f+1,p+n,Math.max(m,n)),c.pop()}}};return u(0,0,0,0),{best:t,bestC:n,worst:a}},{best:d,bestC:f,worst:p}=u(c);if(p>=200&&c+1<=i){let e=u(c+1);e.bestC+150<f&&({best:d,bestC:f,worst:p}=e)}let m=[...d,i];return m.map((e,t)=>r.slice(t?m[t-1]:0,e).map(e=>e.s).join(``))}function Ft(e){return Math.ceil(At().measureText(e).width/8)}function It(){if(Jt)return Jt;let e=`第一の掟ーゲージ夢WASD`,t=document.createElement(`canvas`),n=t.getContext(`2d`);n.font=`80px "${Rt}"`;let r=Math.ceil(n.measureText(e).width/8)+3;t.width=r*8,t.height=128,n=t.getContext(`2d`);let i=[0,0],a=1/0;for(let o=0;o<8;o++)for(let s=0;s<8;s++){n.clearRect(0,0,t.width,t.height),n.font=`80px "${Rt}"`,n.fillStyle=`#000`,n.fillText(e,s,88+o);let c=n.getImageData(0,0,t.width,t.height).data,l=0;for(let e=0;e<16;e++)for(let n=0;n<r;n++){let r=c[((e*8+4)*t.width+n*8+4)*4+3];l+=Math.min(r,255-r)}l<a&&(a=l,i=[s,o])}return Jt=i}function Lt(e,t,n,r,i){let[a,o]=It(),s=document.createElement(`canvas`),c=s.getContext(`2d`);c.font=`80px "${Rt}"`;let l=Math.ceil(c.measureText(t).width/8)+2;s.width=l*8,s.height=120,c=s.getContext(`2d`),c.font=`80px "${Rt}"`,c.fillStyle=`#000`,c.fillText(t,a,88+o);let u=c.getImageData(0,0,s.width,s.height).data;e.fillStyle=i;for(let t=0;t<15;t++)for(let i=0;i<l;i++)u[((t*8+4)*s.width+i*8+4)*4+3]>=128&&e.fillRect(Math.round(n)+i,Math.round(r)+t-3,1,1)}var Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt=o(()=>{Rt=`PixelMplus10`,zt=`data:font/woff2;base64,d09GMgABAAAAACNEAAwAAAAAhwQAACLvAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYAilwIBBEICoHwBIG2EwuFOAABNgIkA4cIBCAFgxYHIBuIZkUHYtg4AAiRhxpwh2HjAMoMOsz+vyU3RUSXgWD7r1BjOJxOxBKZIuTgGnJ3dHFq0v7YiGX+ZUrGRrK7yO5VCNNHXonGHcObYtv1TmwQfv338d8I7CSo0Xu+R2n4gHzLMRoTz+QaNdZWTv8dj6YliCaGrMlLs0oOpiUwnf7w8IzLE/HPE5IQGusi3KG00PbWxXhxq5cG19VNrbUHQtTIkcyy+rm+KS6SRDcSMokhJA7H0T1Zje5kNInbQxbxX7P//6zfHWHUqJmRjyek7emhDz1Qc4lXIubLtRk/Yh5qIWiu4vn3b+e+X1sGieWBfLCEoyjQRBJv3iLMl9L5PUke2FXxhPM99lBSsIeSZkh+d9AUZ+R6bmTl89dBBoCgTsQLE8qVmdL+D/DnD8/DudZiExzZgEY6lLgoi6L/LjpoN6h5LjHzX/zlq2b7FyQo0RG4lHkxFJ1DKi9UTkXp/vDe7r7D7n//m4c0wBeAGZFQAAXJY0rHS7T2k7TnE9RYgCMlJ55DiNWlFF20OVSeq650SGUoKo+bvnRdexnq2u/bjRMrImYsSyNDmp5lTGsubXtrVKFKFRUhIMbIYf99E8v9hCPh+ueWc+lsgxGpGzReVfsqVI3w9+8NAPOfBCSgo7oBHsxd5Yd/CWGpasYqWco34H4iWzUCE3qOb7AG+vUC5y9K4N2EUUDqF80LhPMjvWWfkYx7/+OIawDZvjb7mrRq12udKKUVt7Y26BGPeXKSlyNhnbwh56TiNOIeeRC99+P7abGiQf6x0geBgIYZOy58VNNILyOMMc0hx5xywTV3PPLEGy2EPkMmzFiwZc+RBz9+hgEOTAmLwK3wFpwCdyHa6noajFifprmmlaa95hkW46S4qlY2vkp8SXKSmhykp/SC9TlmLsTFuZxoFNulb8VRasqxWqW16comfwaZkW/JsXRaaa1s1h6LJ+uHTdA2Y5nlZfJuVCm4bNZYtRK1g+5OHj4e/h5hdXd1v/rbxn+Tj69wa6PjMKgpWDf4r6d9YBANoyxUjs6GHEOz8fHjTxMLCb+TB6meqcOpyWlj85P/admfqSgiANiVC7TcdcCV9NSAKj5vrUqD6dNNOQwKBlaceKmigTb6ix2n2MyeczXwIBqiNzAe2Bxw5sv3S0Lx382uENopm/y/AeH/UEGjenUqJWwlqSfpn+qfqp/Kn/KD8sXP3uGe/cK1iJw5psuTz632xs1jO600UEc5ZRRTQD555JJNO81UKFMCwoQIEsCPFw92LBjRUMgkIgECIZdYftFj0/3V71X96rrJtsnclH151JjfcHV+Up9Zn16fUs98rqz7q+uos61LP7WeCmv+apSq0o7yB5vlz+V3+7/777uikvXt7ObL5vPmXIEv35z3veZbs62uZ3dnW2aHLouzDpeKS9nF/8yhxZ1k2qSquOOxidiY4b/o4+GHoXPciuuxHM5FpZEZfXcRNKFGQdtBOPCi3fUnbHipb6uvqM+pN/AUqXuusgPzTot+z7HTteoqu0pO5LiLJ9IopVIo+ZIiFCf485vjblPl7TD8kSy7K9EN4sa0UICVq1y2yjqtjTJeRiSgx9wgPJIYAcvnakcx9lRahkOSLEVAMrKIgOGIwxvUGBffQicRGFWSKak3jmmgsNoxIYqSYFTkTPIa2CcbS1vLAdZbSnb1JsZiZg+0dpKlvLGzYYBotspCHFtIWCNVJKBAZzMdS5k2ENFHPbGykrCuOKJSGaakCJBes0G6sfNqB1VziGvOaTHkcjHjOspyzYsjWyRLMWvgOyQ+JAM7ILCMZSailVzubQvUQm0Aa8WsLqLHShmYtqWxHMCYvdUAqlr29ttYxORmSaCEeKPfOO7VxwyvmJAvp174+x4Q+MZKDEFtKqNPBKxsZeXTe+BQxknDNvgtFika0+gxBOPHvr7EVyMj1cYNawRMJkhSy7Ne2SiEYCX8kD3yry2H9EPFWbTBJJAESYv0LZggjFhW/95Ry+vOMmGq2fVUFUjAqMZMOg6wXMrkepsut3woLzXtK2fCQhx185TfnZ3RwNMyWJE7U6g9gTYLAWhlJRYzHT3hmyWhS3/RxGplwNC1i6VXn7DRWMtrjTIMdraqILKzDcrDuqnQ8E4VBZyqQOruZrvaaLw8OtG5mlD3CWWGkmpBqlI5k4KSE/blaxo/9bORHasffSQmkxyOBFbHqIW2GGB94PEU7lKQrc9daQ9BudehZlksZmHu2WUaca6oAY0iGPbDUD/uuiAOTm20cMw3nE6iFVY1JGuy4TzRCrMWKI5gY3RKNVxd4NShM4Lo43LNdm6rseta4U1mhkd5FapLZd59sqxQcpVm7Hy3oB6K5q1M8zmKSqHuvaGfBxhvaC8ruc1Ks6oMtav3qSQpy9+UzczX9ePd73iaQWhiFqS6HbPGEnC5JFMMX63W0IyDxWHz7YzGhpEhscoNhI4QGemwYb9GSdEqCCxEoAAFdzeKoTV9l6vA5GstCG8e1fuKLcBqIaINwgSZquAAAvY7QsZYs2QCghRX3uH3KVYgWF2p40dCgXP5cy1r4mAlaSvMlWS8HX8yGXapXGuT4egbkyNL5YVxc0b1hz1RKNWKijYea9IFmhhvnYDD4kbG3lSh5ckkroHuwjjkE64UWZmBFIvGG1+UxFaBEtZGnp6lhKkTZAIj2sQThTFHSBVme0mvCl0ZTpGwPT4iTD7oVXjPDZNJBmij8HQ7gK/TECjL2I7CeQ4VRK11cit24esZdyw7Gd0zgEkRxtjEtkEroLyItWSNNqC96cMqZ1rovF+V7ABJFoxcEFdkWhKtaHH4gKPoW3hqkBa6GFrK9mwWpAhAo0pS7qnAG5Vd1GjiWU1mYBtVYT9VY1TCAv75NdCpy8nfwWFQzm9qrIr/HC7gYlQbfO4KhUA7qcOFgywpxULIUDXI7y2gJ8Dv1IDMjeKzSFeGaTWLjg0yuWzZCvJCNF5XWxK+PX6+mC1D/YFyNAIKk7oWjaH0Aec2jQrjggIBQnntM9uYjzW0YCGkm1nVF7bF55QJiutDEEE9Jwy0pJpoBE+tND5sh7xByGpy/ZUXm+jUtXOis3KqmSfPUwR/sO0EVc3OL6Pt0hv1OvJGgcjnkupSyW0DCQOT9Jt/dhhqmrw0SJ9LMEZs8hd3IZzZFRXZvE2K7ULndqevWgxBpvAlK4TVZ26XcDeC71rOLblS1NGWsRT3N1ZWXGqxeWLwta/eC9kY3cWA89lKKIOJck1s8FWg5Pz5sZb5oOg6sAUO4XHyKMMCamYd51IAKnL1hEVZAYSbWfHJASCC3HQddRS31J5MtDijbZcL/l58An5wycV5q/xgsckgakt66Kya3IYu3C5M+au/wijX8rlOzuIkIyFTcqxoHNEalFo1Z2JJXsUQ7RmzGN9pLFv+EPMwZ8qKj0SMHmm26g2H9yW4ezZdaIVS6PLRTC8omPxnCEM6SAlZp1NxnEehr/eZDdi1kwkzUqNFsMpNLVYXnRW6DVbrVq1ZJ3KZx4MNbtSVPFtz0DlKcTS3kNkdHT3d1SdY17PZzZvJIxIvNfXZ/18xlu/U76Txpelm/DdlsWXpBbqBxktiGvhhAwL8g9DTWcLbDGNY/IeS2AiaPORygWshSwQyNlil7TDWsmTX/EeIJ5FhFz6llmCtW67Uayzypx4xk9WJjopuoudB5HvMopS+OwZcLa7JwkGKnQ0q3EmEWj14Zt+CAb2gJJpvscG5loJqZ/WRN4Edih0pF6OU7Ew7RkE1l0vagJ10wHlXm++5drsmiZgpup35bOmBJgZ+akm3I6m9YqXjkQEyqK6b/EX7+GeKxhHgY3LyYhtrVhTu9s5vS/5RRBe8IYp7xyBOdo2G3wQFS1cQ/Xq0LKgveb1uZG2vPlNspzYjo9/pSTYiyxTBNHF9nlzQQoFqx+KPxg8nQNCn2V6NIJopNvGsyrYWHI0BU44qJHzVMy0q5khWEgU+6neWYk/RgpmtTp3ofWDtMIWJY6qgKoVkshqJze/qc5suzL4zURbX4cYerGEb4E5tGzPqoBRxdXTnGJyYt7WiOPmPeY+xDeWahdC1wDfDBuSZnA3D+0ib1VwLPVJ4Z36ycwJtwJrKLeBPgBwzggRGrNl6yN9dknc2xGdxuLf4VWIZSXixNmFyj8EhzhMOSiLQTWTv4oahGGy/Rd5kr+xhhn/6VYp4UzAk6rhDO7EfFeSno9jEldoozxtmQR3AUTKWk2Y3f0rlPYLkbtH7aDGgzwvHJJ4V2+E/8aCjyKHF+uRTctUuKaRMv42n0imXkPBbWppSxEfj2rLuIGGsFEDJZQbRmZyjlvesRanD+vAXOzvmcz44pT3HHT+J+aX34ZKpnZGLKTTOEzcIAso6g8JDS3JNtABUJ7ijHX81QHbEKcPnDwqHjipPksig6USj4osl8HBFTXWVzjGC464nEwcBfLCgLZjknXSRTAkkvmms91KENOO2jbK0lBfQYq8UgDPR0fmoJvWhoSYN1xnj8cqnELBovO9yntFLYNXizRKFmoaIYNLTnLQkmcLXGkRFzJmmnsOlsVWaMXa7HUrmlt6UPKZClzN27knwe96e1hEYMF/0xtOBJbR1TNKa7nXfLA9NaqZ2fTi+Hlw7NWKB1gvFx05tRoKqDOAl/44+YV5o12X4W+O4uniiotLxRXH1Rl/8DkrtgFHs6zF3bgrXZMolWVTnFnOks76FMt1jiyajy7BrNG23AIY0Xk0aULXb1oSd5eNLW0Oaoyg5Lalmu71C6BrBYUJ2duKQqyjw22cktEroUMTGIzJeAGZc934YNNMCsSyPopaRS7jH2rHiBwghB696VMexLVXxvytURL0EZIStBhrCq7l1fDYdG8WgcpNY5OpOG4coUaMyCFPH1cdhMhgxMz/6yEns0hY/ep+zGh17THJzW+WtHs/s/QfsSEgizxpwmbz6XFxEAM1bzmPo4rglRChyIuKUfMoY3ru73f4bjpvaJbj9qCAdegn47yjY5w8L8cc6r9Jgep/82enk11+DaBts/meqLJ4lIjK+NCjNYESyT4BzTenzqPsCHLCpLI1WLexTgHbaCB0Vmv1HjKTtFHex4cpUm9gCZjoMIwvV/YYzDq7hc40UB64f51ME14PbEDRNMzCgmtzJn4WPCDR0OegS+c7Ar84ttQtdrv45cSCb+ePeQtd8XXMMy1wUk6FV0QNWZ53/ef/etL+JhfgoKj7YLE7+uQP53550XLDdI8bCi1Cnof5knrQX6hM0OPeQ5uqUhF3/o7e+TePsrfud8Hitptjd7CK1gCMtcVb5iWOIspAT1hZFD5BLA2j9yfw7uXazxCWgh2kMVgqZFa9NJV1WSpBLuxaNzJD/4TIAhfbkGfXn3widh777KA3vbIFQIUbA4lb83P2uWvAljdxUQT94FEr/zKBKkTQDqIc+NG6xzbYeOifuFwTdx0VhBvVduFmPtnu6QFBYrM6/8x2m81eD7XeCsWtNKEw8ZDd1IE80t6+AowsnxiFCyhn0YDsam42oSXb5FezOL3cBQ++ZiBLFZ7PirRXR9y9GyfIGDH9nMKmqN5TOaKihHOVx9Xy+d+iuSfrEvUWDOSnFYvQYGgTKO4gw0EWQGhdRdKiG7LSeu2sxgtqvNCOzqihvcH9E8x8n9WSTeBG6VyJ5PoaiCLJVorTXnfwhn44k3a6Cqvulw3MGagG6lSSSEzPL2EOA6Nwbj+UPIFeUYQxl0AhXcMkLw2+pgVw8N/McVjxCCyP4VfeeeIBZbtnUotNUgTR1ac1dx/Jhv27fO9jGRepChp9h+e9d4z+ZzMC+2Mp2iRbylIQhwJOv6iPguN6WsWj77x56vUfYA1ejWKGMrm0vWLwy5pk8WJfLkZO1YRQPGHyyJic7xJbo7DgjY9g9IT0FnyDh+lGx9glLksaDVVi5hEacrprUoorQi3oMKtLwklQJL27rZ6a5ALCHH13769ES6KdGxBScxqVT1wdlTwiVmu+qHz/3yf8E5QQlSJNtJTpZXl0KGt9IoSCK0I6gkSwqhVZ+SwXOwc8hNOnkwAN5fEcMNHbAUrgd7+tl6uCTGbmwjmGmtH5YAKyxzvjBRlTwUKquCt+k80jPkyC3rKp0r/p/PfBCobcIUFSsXcY/jMTojTvQUhI9hnAlXEVvgF4K0OOg0YN1pLI6NNWZEQSjI/BGlC0kZ8UYjUS6NKoPO1TFyCpwxdwHCK4+AQxKa9pNHUx3PI88lB4iwNftRJeTrqaCvgjKdDJiFfzJefwpGqpI5Al5TVOWskIGHswTZNNjkwxr6I1uzJkOtD4iYtB/TP8MAW4ErmhuBLkcH4gql8SQQQaPWCqqSfRC+fqiv7L8h0irUA7ALigF3VGxcAlE8HIeHZE352LUccNKGJ3I6pjQg5eRQBYhAfdsBU0xt2QjR7Fy6EwFO8zY34UOcY5/heKGnhrEvRauXhqKIDpbDjZJhPiJUwd8UuIIlinTRAsdFag20JeRLMonHqTkgZfVwyhqsJpNwiOjtyEWjreoY6eD6SxyWhNGLX12KLclAUpCi4BKPunihPCwiyYns6WiB1AtXD2xuoCLWCA4J2xWe5dYchnR3KXSQ+HDlPfJpRrQvFnGHmb7f68X13mdJW3mOgbPnNcc3aCLiJ2Iod4NTSFSez1ux/+98cGz7fGXf/y0dI8RBuI/LxuviTG2JJ3QV5n71ATHSjJnZGDNJOOYABLWFDAi+aj9+b8/VQ9UJ6i8px8D/kKaHaJElIw5sVaNdppLeVTZHEb921nagCFjRyTrwqjzZxZiC9jzjYzGOh4bxsbxdqiWdSJztVqKpNfdjkPXjCOvnNq+RMP5HZSaR1UrKUaqbIUsoSsu3fJ1JTAUo7QZPwLtvntlH0tJZKyJeWBA37+DJfnFGtHupY2BefJQ51/ZuhUBGd2IP5DjTiGYR2Tc56VSLklGZFQ9RRBJIin6cQGOG70lO6P7aZVIasyjfL5dYx3SJVnLVqXG/X1UytNxBjalO3KHyxWNexl9ozxX6cC+ii4hExudHeGH6Fy9fnsQN7btktNzhXPFUxRrprIXXG1jTq7oPkpK4ByIl5Gh4FlANujrXrZcrvp71xUkj8uAbYvyXE1V62jr1vaRKGMbK2MxTka0T9LsnmpI6QLGPeun5Mm4Z2QIghjkifoZG8eE1wufE4M2jrNIzGFA11ctRtUjoSRlAkOF32xqvoFE3kZCylmyhXSs4nF0v5JO7/aMq2vcd+u0R2KgSLO+GBHzlMsuDGZTE4+W+IOjLdd4ham0uZvwRbu4tbbIrgxi+H2odmjQ0SbLM3Uox8G1NnPMUqObeccj1OiSdtzaSLY2oJTJXbFIlYqyDuU3kZhXcZV1Me06lja6yVyQ2GQU7BfS9joiPv2CfvwM4k+hnwyPfJoyNpYiRzBGJ2K2jfChNOc7af5tHvdwN2lo932pfjQfETytAkOP7bje3ayxhkJh+D6/nzohNe5DGdf184QN8a7IscTxlpqdsb6udurkmB11xc9+rKX8+b8/CIysQbRt30fhqPPGea8rce/7QU0iXGQeGGuWemepgVbuVepdQKXL3l4vfGF23vCp8t4MXh6/iXcmLpXjwOgIaZSCRFCASo+P/G8S2a3LA/hVXjH8RvvXSNIKtfk+jwKPB9m/4MZ5ZHRYh0vNFN+1fM+TkZ/LdUVUvsj0c16uwSVysM75PVzIViqOSG9/bb83xvHK1se57YEL17Y/tgffiXduexyvqoiqWMx7TPE6jNpzXWX5f6PDDxHJa5lRZmd4W/dxUpmzOtqkD5XzJ3Scs1QC70rwzlIf5YF8V4J7lRoA455uvb1jSSrpseL7PUIL4ExwS6Rx9h8pGH/1H5/L08Zc6vKMc9ZnV+a9o65xrl3ZdX/rsjN+jfR/NkQJxlw+j+n/HKrQsBOD8QB95Ytf9dNvcJwT5ytorTTl5yOMUf/WxzvF96si21YQp8kqMJ35hpQqMzhtuUoNr1UZvbXGVwMnvx9W+U5ZEYHdxd6HmIc234luvVSOuP2+qVtfbOvMozXZPM1t48R11qfR0gYxXxeQUsSqOxFpPyjrKJFIvQImcReXkpXekxK0bJujWE8HzPmh71hGrrvSpsDUtrXqZg2oC6q0JpRPs1N9Uq8in1pasX6BdQMaFsa5YyA5JAbbHe8rmzjmyIutHFwow28A+r4jwzYi+cdD31wV9J1f7inrtD3eqBnD5X/XBhodubRRarynxDApmBOjXcC6A187UmoDSSJEZnB0QuPXCNtgvW3Yo3d527i3TbNG4emiU+O9td//Nep3CjcL51eoap+5mSq/BtFwj0G8ZzE/zMndCzuVcyoUtPo5ycQ5W3NlvHfTOmxOvZ46sl28lft2Nj25m7qV+wzErtYAcSnjPdRPSkuSg/M2Bnq4iF/DtrcI6VuIIbfGpZpOCNXr1WwrMlSPHGS8D/OpXa2vSIlj2Y4D9xEZ7xSwI/vRq+TULbfacExVGnS17lzOD8wpkIZzeb14nXT0LVLzFUzdZuepSVyvRlk/KnXRBk8l8fqig/seXLbg5DzNvLUNa7c8pWtN9wE1v2PxV//x0Z1Sl76KGp5OVeN7Aj4qgpbWrvJ27lMLRyx1Qc9D25ScJDV/yjxUyonqpTtQ6nbzC+ciqRowg3XqWTfOJS5WLqeVvDzMbYMx5MdF0Y/1mAusmiFsTm779QddVp1ZygUmuth8rKn95R8/SDcBqU2nRNtsGOqZOBri7d55yMSlYhodY9cDFQ1yVE/usJX/hcjFl1HqXlizj/jizkbtUOAsn2fwKzPLFYEodYWRSG8y54o/4KtVT/PG6WulxFwxpWysP2DvcoXjLjXmFMeN8/AJ8J7Qeqwl1tqa0KRWHIfFKVWgZtPxerhSqsIqTRTPL7miqlRX++2rji1dxtC7PGq38U4CEZSOoMc5xQMjJ/VlV/Fka2S8dcHB9rNCn/D2V9MjqYI1Leoxc/nesp4Iti4pqQtkBY+p4aHw1y+o9lazHZZrXx6awnyQREZuv0LTLsrvlONlvny8drv9tWuKWHd16yXzdfUFUVWXKHZOquhDJd5BKrINlQS4NF4/MaYvXMdhI/0nHPf2M9rsPN4vMXR/8yf9/m/VGtC+mfAe5V2/y7+Gy3X56Mg9I9FUs2Rdcn99ek/ffQdfm4T8HuRPujn5+fQ3NjclGBvebtZMccraze/Q6Bk72a0jra934ZyAB+cJROvfwzok4bJSOh4fpeJcF51tV2tqnDO+u1VKqxKVQVfpjrGm+BfvIGHJ61NQ+STn4TJUtu/vtknv+h8fo7HmWUeXS2/gn3OB3sRAf+Lx+78/Hy4+87z25StSVbraSaOvpCrqWIeeMU8vMghaizSgJGN89o1PlOZ9dgdG+ZBRautS3VGbktbKurLvbTtvj0H/MBUM+N3N3h3pfc+quo+qGnRKpf28Nf7+v36qt6PEFb/+cJVWrJLRPE8TzTuL6xn6ggJ19y8rr/X8WB0HNZVK8/PBiQNEj+29S6O//Ct9j3hElLRSKuV8xfhOPn6+B9LJcVyXuh6SrCMiwZxIBrFuve1WFdItIAe0xR4ezId1JMS25DhoVXp0gXGaSt/G+k63lh/fcqQACXWoRy+HlecMn228q2LzB4WTesXdi98pZzlgcHF8tr1xCInOe0v2uEDPW4mILRm//6ufkuoqSetEVVeMdwrxLHZ5tLDktZdzSfhOGBH1P6Xb9fu/PxIJyjsvwjXvyHu0vlfkvTHeqXzEOjUaiuhRWZyYWcqWVZpM47Kpcu88KCFRIakkfv3Vn4Cd3leBXF09Gt/36ec8dva7tg1wTmxd3Zr12tYZnufj5+dPoZ/d+z4qNXUXpbuPI8k63nrOlXeH/+Pzw8PP/D6pFvDOVO6DFD/l57jbrz9+nsx57sx914YxaAwc3ln6nRXvcSGRIrg67LFKzalG7MZBZqPmPXxXtI/cbgLIYeEs0tCwCnOqpGJ7IMVKiKhTGZtP6lW3snjiFwcfNOKTV1P36rBF6zhSMl3FPLg878S5GGLRCf4uzzQiUezwM0htez3d4HZqZ2vgPD8/H4+rrzxfUNDCwkRVEtcw6ZDhdKu3TuclEOAa/wAhehMof/8kUgnyU2p4Ynjijaf4SxnH3wpEZDeUbnhfHITrv2dEeWoqys+bThodBq6gw070Jzu2ZXbFhjr4p7r1DL3ucqWjrOvu1Xr+xLMJddoz+vUynC7/+b/jMhX6/KJj2xLUY0GVecddZ+Gug7P0AxtG3GdFhYEzM3uleqWeRFt+6IXTl9/EKLHZsVlQVZwEpW/e4dbnlaaCimT9pXqR6VZNhL+8fQkRT/+8q68+3iTvTLJjfeWDFlER+9lKnPB9t1SWsmGnnpqyofDwipPIkcUuxfo8fvnJ4mz5OJdF7PTM84/PpVEm/rCWQgWY91PPubZ9HBGRQdwLXFBpO6DzRLuctvwpgeKYdZholkR0L4aNsWUqUNSfGlHu3jHfgPf6Uok7Vpx/bKaPxq8/XOMuTn0F8bnateqqCJIyqbGMbVu8tGitKiV8DIVJ2/31W+8veHAmbJmw6k0E+pd/7GVcWbnnn2Jvna5BOlUiHbq66O2zfy6C2AGuFbmojJGxqly7rvaqxua6MI9GjqEBo7+c33j8aNl7R4Gm/Dyu53IG8h0sbLkpS+zolGA/G9cXPCLH3OjGXFyEfpqkP1gU5iy15m7JAzJcr4oMKmtVZdmpZbFK59w+Sa7QxkLgwLk+wf6eVy4QrnaJ02nv/bmOq9h9iaSkn19DEpHxa3h+nr//r8/Ott7NHs/5oZTsa4+xZ/3Z+nOullJU5mqDouwWttbUCdhpJHOARM98jmPbuC/8k5BEgqhzJRigRECyDgRRoPPOyKCVR2m/fmuxq0RCOtIhIWoqztkkpKFTUmykJ0UgGjWX1QWjFvpp94K4SJCtm9KxQPkFPlgL7/AEpEBtoPtkKr2hcM2Sy5XD2J0WoURh4r1n2ex5bCkaHIDhguqKLZuU2pbIlnK2P5AIpcvGvp/2Cfr8nkGKMNI9TIPCd5pIRSI3fbvGH09Zu89uZylFoqN0ybz5r98KtjFz9fY9FvmscaZcEu/ysgnn6sAOc7/DhEtUPDEHD4GXpz/ZeFCuzhuJ3ZSMF7pDUY4ZmBZ/Df0nvhODTsXH6CZvv3CCHLHavu+0XB03+LfBsZS57O6uqH11PsqnqubCKFdKKRVBEiVCqypy38o6kxwHxiWIItveBvQNO9Yr08zLZPVF3Ef179IqwoswGr+C8yiV2EH73C9hHEtQciHDPS3F5XJ1VTlvCVuFLfQ7ujGKEEylGWC0a0/Vxp5SWO/dqrsRSCq9atUPtEjZLVotPbgQbUSChk1VpC9T77uEzEPhmrXHwEXJbzntp1v3z31grcg7N7k7m7vx9Oipb5fjPvmOD+wqiEeU7FvSU41gAk6Nezern5+nzW+pd257b9v7DI8OPlTsZ4hgG5Es07djy5NS1g9tEkYnGZKdxk55rB2fNV9Rx5+LHpZ+5O3WswG2JUyFCmRWvw9CfrvWj+9FTKGTfCWn8h8G8LZgbczrB6LIcoftgUKHAsF7gYAIl26/SZ7xOnai82KAiDA05op1Y14Wg2Te0iC8vMfWIPufIo23QkK4XFXAaZm0aRY3jm2SBGYRNvxCEmfiTACHdfxHQEcnHKfGK5JMmx0nCSA0R+CzWoMF6ALJg3hpkALP5rz1UW+9s7etciZW4rkUFuRy6DpIAoIjsPMLFcoSd16TfNzsUAgOtb7l3x5EE54Pko7vg+xUzUHBosGDolmJfOouTYADDg0s3Cr5L+dWq1oaZI0jVZvabq2mCu1Uq1QTz+jjBSmCUi3JmWoV7pYFZF5UwBbxbU2dr8KsRQpE3k8BLZ0iri3KqoJOJh6e267ay+dWG1WFzmhjVwOSQJJxeeUD9GaCQKqQVL7K5p07a2iLx9FBKHm2EgAAAA==`,Bt=`、。，．・：；！？ー」』）〕】ぁぃぅぇぉっゃゅょゎァィゥェォッャュョヮ々…`,Vt=!1,Ht=`​`,Ut=`⁠`,Wt=`をがにとはでのもへ`,Gt=e=>/[A-Za-z0-9]/.test(e)?`lat`:/[ァ-ヺー]/.test(e)?`kata`:/[一-鿿々〆]/.test(e)?`kanji`:/[ぁ-ゖ]/.test(e)?`hira`:`other`,Kt=`「『（〔【`,qt=e=>/[一-鿿々〆]/.test(e),Jt=null});function Xt(e,t){let n=tn[e];if(!n)return e;let r=en[n],i=r.indexOf(e);return r[Math.max(0,Math.min(r.length-1,i+t))]}function Zt(e){let t={};for(let n of $t)t[n]=P[e(n)]??P[n];return t}function Qt(e){let t={};for(let n of $t){let r=cn(P[n]),i=cn(P[dn[n]]);t[n]=e>=4?P[dn[n]]:fn(r.map((t,n)=>t+(i[n]-t)*e/4))}return t}var P,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn=o(()=>{P={K0:`#05061A`,K1:`#0A0C2C`,K2:`#11153F`,K3:`#191F5A`,K4:`#222D7E`,K5:`#3142B4`,K6:`#4A5BD8`,K7:`#8A8ED9`,K8:`#C4B2FF`,K9:`#F7F0FF`,M0:`#120C34`,M1:`#221A58`,M2:`#342C80`,M3:`#5A4CC8`,V2:`#9C86FF`,P0:`#24103C`,P1:`#4E1B66`,P2:`#9A2D8E`,P3:`#FF4FA3`,P4:`#FF9AD0`,P5:`#FFE4F3`,H0:`#B8205E`,D1:`#0D2894`,D2:`#1E5BE6`,D3:`#1BA2E8`,D4:`#5CE8CF`,W0:`#FFFFFF`,W1:`#DCEBFF`,W2:`#A6F4FF`,C1:`#7DF9FF`,L0:`#CFF5E7`,B1:`#8FB0FF`,G0:`#46FFA6`,G2:`#14A56C`,G1:`#36FF9C`,R5:`#FFB866`,X0:`#FF4FD2`,FU4:`#9DFFCB`,FU5:`#C6FF8F`,T0:`#5A5170`,T1:`#A49CC8`,N0:`#07050C`,N1:`#16112C`,N2:`#2C2558`,E0:`#FF2A4A`,E1:`#FF7D93`,S1:`#2A030A`,S2:`#5C0612`,S3:`#9A0A10`,S4:`#CC2E1C`,S5:`#F06A3C`,S6:`#FFD9B8`,Y0:`#7A5418`,Y1:`#C99634`,Y2:`#FFE39A`,Q0:`#DDD0F2`,Q1:`#EBE0FA`,A0:`#C7B28A`,A1:`#EDE3CC`,BI:`#211710`,BR:`#8A2A20`,AWP:`#ECEBE6`,IC0:`#9FB2BC`},$t=Object.keys(P),en={K:[`K0`,`K1`,`K2`,`K3`,`K4`,`K5`,`K6`,`K7`,`K8`,`K9`,`W0`],M:[`K0`,`M0`,`M1`,`M2`,`M3`,`V2`,`K8`],P:[`K0`,`P0`,`P1`,`P2`,`H0`,`P3`,`P4`,`P5`,`W0`],D:[`K0`,`D1`,`D2`,`D3`,`D4`,`W0`],rim:[`D3`,`C1`,`W0`],N:[`N0`,`N1`,`N2`,`M3`],E:[`S2`,`E0`,`E1`,`P5`],S:[`N0`,`S1`,`S2`,`S3`,`S4`,`S5`,`S6`,`W0`],Y:[`Y0`,`Y1`,`Y2`,`W0`],code:[`G2`,`G0`,`W0`],od:[`G1`,`W0`],motion:[`K6`,`B1`,`W1`,`W0`],design:[`D3`,`W2`,`W1`,`W0`],"3d":[`Y1`,`R5`,`Y2`,`W0`],fusion:[`P2`,`X0`,`P4`,`W0`],ice:[`M3`,`IC0`,`W2`,`W0`],paperA:[`A0`,`A1`,`W0`],paperQ:[`Q0`,`Q1`,`K9`,`W0`],lucid:[`D4`,`L0`,`W0`],pulse:[`G0`,`FU4`,`W0`],turret:[`G0`,`FU5`,`W0`],text:[`N2`,`T0`,`T1`,`K8`,`W0`]},tn={};for(let e of en.K)tn[e]=`K`;for(let e of[`M0`,`M1`,`M2`,`M3`,`V2`])tn[e]=`M`;for(let e of[`P0`,`P1`,`P2`,`P3`,`P4`,`P5`,`H0`])tn[e]=`P`;for(let e of[`D1`,`D2`,`D3`,`D4`])tn[e]=`D`;Object.assign(tn,{C1:`rim`,N0:`N`,N1:`N`,N2:`N`,E0:`E`,E1:`E`,S1:`S`,S2:`S`,S3:`S`,S4:`S`,S5:`S`,S6:`S`,Y0:`Y`,Y1:`Y`,Y2:`Y`,G2:`code`,G0:`code`,G1:`od`,B1:`motion`,W1:`motion`,W2:`design`,R5:`3d`,X0:`fusion`,IC0:`ice`,A0:`paperA`,A1:`paperA`,Q0:`paperQ`,Q1:`paperQ`,L0:`lucid`,FU4:`pulse`,FU5:`turret`,T0:`text`,T1:`text`}),nn=(e,t)=>Zt(n=>!t||t.includes(tn[n])?Xt(n,e):n),rn={K0:`N0`,K1:`N0`,K2:`S1`,K3:`S1`,K4:`S2`,K5:`S3`,K6:`S3`,K7:`S4`,K8:`S5`,K9:`S6`,M0:`N0`,M1:`S1`,M2:`S2`,M3:`S4`,V2:`S5`,P0:`S1`,P1:`S2`,P2:`S3`,H0:`S3`,P3:`S4`,P4:`P4`,P5:`S6`},an={M3:`E1`,K7:`P4`},on={N0:`K2`,N1:`K6`,N2:`B1`},sn=en.S,cn=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)),ln=e=>(e/=255)<=.04045?e/12.92:((e+.055)/1.055)**2.4,un=e=>{let[t,n,r]=cn(e).map(ln),i=.2126*t+.7152*n+.0722*r;return i>.008856?116*Math.cbrt(i)-16:903.3*i},dn={};for(let e of $t){let t=sn[0];for(let n of sn)Math.abs(un(P[n])-un(P[e]))<Math.abs(un(P[t])-un(P[e]))&&(t=n);dn[e]=t}fn=e=>`#`+e.map(e=>Math.round(e).toString(16).padStart(2,`0`)).join(``).toUpperCase(),pn={base:{...P},plus1:nn(1),plus2:nn(2),minus1:nn(-1),minus2:nn(-2),dim:nn(-2),lightning1:nn(1),lightning2:nn(2),overdrive:nn(1,[`K`,`S`,`D`,`rim`]),storm:Zt(e=>rn[e]??e),stormMatter:Zt(e=>an[e]??e),slowed:Zt(e=>on[e]??e),drain1:Qt(1),drain2:Qt(2),drain3:Qt(3),drain4:Qt(4)}});function hn(e,t){let n={},r=``,i=0,a=[],o=()=>{if(!r)return;let t=Math.max(...a.map(e=>e.length)),o=[];for(let n=0;n<e;n++)o.push((a[n-i]??``).padEnd(t,`.`));if(a.length+i>e)throw Error(`glyph ${r} runs past h ${e}`);n[r]=o};for(let e of t.split(`
`)){let t=e.trim();if(t){if(t[0]===`@`){o();let e=t.lastIndexOf(` `);r=t.slice(1,e),i=parseInt(t.slice(e+1)),a=[]}else a.push(t)}}return o(),n}function gn(e,t){let n={},r=0,i=0;for(let n=0;n<e.h;n++)r=Math.max(r,t(n)),i=Math.min(i,t(n));for(let[a,o]of Object.entries(e.glyphs)){let e=o[0].length,s=r-i,c=o.map((e,n)=>{let r=t(n)-i;return`.`.repeat(r)+e+`.`.repeat(s-r)}),l=e=>c.some(t=>t[e]!==`.`),u=0,d=e+s-1;for(;u<d&&!l(u)&&u<s;)u++;for(;d>u&&!l(d)&&d>e-1;)d--;c.some(e=>e.includes(`#`))||(u=0,d=e-1),c=c.map(e=>e.slice(u,d+1)),n[a]=c}return{...e,glyphs:n}}function _n(e,t,n){let r={},i=0,a=0;for(let t=0;t<e;t++)i=Math.min(i,n(t)),a=Math.max(a,n(t));let o=a-i,s=null,c=[],l=()=>{if(!s)return;let[t,a,l=`0`,u=``]=s,d=parseInt(a),f=parseInt(l),p=Math.max(...c.map(e=>e.length));if(c.length+d>e)throw Error(`glyph ${t} runs past h ${e}`);let m=[];for(let r=0;r<e;r++){let e=(c[r-d]??``).padEnd(p,`.`),a=(u===`u`?0:n(r))-i-f;if(a<0){if(e.slice(0,-a).includes(`#`))throw Error(`glyph ${t}: its overhang meets row ${r}`);e=e.slice(-a)}else e=`.`.repeat(a)+e;m.push(e.padEnd(p-f+o,`.`))}r[t]=m};for(let e of t.split(`
`)){let t=e.trim();t&&(t[0]===`@`?(l(),s=t.slice(1).split(` `),c=[]):c.push(t))}return l(),r}function vn(e,t,n,r,i){let a=zn.KEYS9.glyphs[t];if(a)return gt(e,zn.KEYS9,t,n,r,i),a[0].length;let o=zn.NIGHT5,s=ht(o,t)+7;return n=Math.round(n),r=Math.round(r),e.fillStyle=i,e.fillRect(n+1,r,s-2,1),e.fillRect(n+1,r+8,s-2,1),e.fillRect(n,r+1,1,7),e.fillRect(n+s-1,r+1,1,7),gt(e,o,t,n+4,r+2,i),s}function yn(e){let t=zn.NIGHT5;return ht({...t,gap:Vn},e)}function bn(e,t,n,r,i){gt(e,{...zn.NIGHT5,gap:Vn},t,n,r,i)}function xn(e,t,n,r,i,a){for(let o=1;o<r-1;o++)e(t+o,n,a),e(t+o,n+i-1,a);for(let o=1;o<i-1;o++)e(t,n+o,a),e(t+r-1,n+o,a)}function Sn(e){let t=0;return e.forEach((n,r)=>{t+=Cn(n),r<e.length-1&&(t+=wn(n,e[r+1]))}),t}function Cn(e){return e===``?23:e===``?5:e===`LR`?14:e===`/`?yn(`/`):e[0]===`[`?yn(e.slice(1,-1))+4:yn(e)}function wn(e,t){return e===`/`||t===`/`?2:Wn(e)&&!Wn(t)?4:!Wn(e)&&Wn(t)?11:3}function Tn(e,t,n,r,i,a=!1){let o=Math.round(a?n:n-Sn(t));r=Math.round(r);let s=(t,n,r)=>{e.fillStyle=r,e.fillRect(t,n,1,1)};t.forEach((n,a)=>{let c=Cn(n);if(n===``){let e=[[8,-3,`u`],[0,4,`l`],[8,4,`d`],[16,4,`r`]],t={u:[[3,2],[2,3],[3,3],[4,3]],d:[[2,2],[3,2],[4,2],[3,3]],l:[[2,2],[3,1],[3,2],[3,3]],r:[[4,2],[3,1],[3,2],[3,3]]};for(let[n,a,c]of e){xn(s,o+n,r+a,7,6,i.box);for(let[e,l]of t[c])s(o+n+e,r+a+l,i.key)}}else if(n===``){let e=zn.KEYS9.glyphs[n],t=Hn[n]||[];e.forEach((e,n)=>{for(let a=0;a<e.length;a++)e[a]===`#`&&s(o+a,r+n,t.some(([e,t])=>e===a&&t===n)?i.key:i.box)})}else n===`LR`?(xn(s,o,r,c,9,i.box),Un.forEach((e,t)=>{for(let n=0;n<e.length;n++)e[n]!==`.`&&s(o+2+n,r+2+t,i.key)})):n[0]===`[`&&n.length>2?(xn(s,o,r,c,9,i.box),i.shadow&&bn(e,n.slice(1,-1),o+3,r+3,i.shadow),bn(e,n.slice(1,-1),o+2,r+2,i.key)):n===`/`?bn(e,`/`,o,r+2,i.box):(i.shadow&&bn(e,n,o+1,r+3,i.shadow),bn(e,n,o,r+2,i.word));o+=c+(a<t.length-1?wn(n,t[a+1]):0)})}function En(e,t,n,r,i,a,o,s,c,l=.5){let u=ht(t,n)+4,d=t.h+4,f=document.createElement(`canvas`);f.width=u,f.height=d;let p=f.getContext(`2d`);gt(p,t,n,2,2,`#fff`);let m=p.getImageData(0,0,u,d).data,h=(e,t)=>e>=0&&t>=0&&e<u&&t<d&&m[(t*u+e)*4+3]>0,g=Bn[Gn(t)].cap,_=2+Math.round(g/2)-1;r=Math.round(r)-2,i=Math.round(i)-2;for(let t=0;t<d;t++)for(let n=0;n<u;n++)h(n,t)?(e.fillStyle=t<=_?a:o,e.fillRect(r+n,i+t,1,1)):c&&h(n-1,t-1)?(e.fillStyle=c,e.fillRect(r+n,i+t,1,1)):s&&(h(n-1,t)||h(n+1,t)||h(n,t-1)||h(n,t+1))&&N(r+n,i+t,l)&&(e.fillStyle=s,e.fillRect(r+n,i+t,1,1))}function Dn(e,t,n,r,i,a,o,s=.5){let[c,l,u,d]=Kn[a];En(e,t,n,r,i,o[c],o[l],u?o[u]:null,d?o[d]:null,s)}var On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn=o(()=>{Ot(),On=hn(5,`
@A 0
.##.
#..#
####
#..#
#..#
@B 0
###.
#..#
###.
#..#
###.
@C 0
.###
#...
#...
#...
.###
@D 0
###.
#..#
#..#
#..#
###.
@E 0
###
#..
##.
#..
###
@F 0
###
#..
##.
#..
#..
@G 0
.###
#...
#.##
#..#
.###
@H 0
#..#
#..#
####
#..#
#..#
@I 0
#
#
#
#
#
@J 0
...#
...#
...#
#..#
.##.
@K 0
#..#
#.#.
##..
#.#.
#..#
@L 0
#..
#..
#..
#..
###
@M 0
#...#
##.##
#.#.#
#...#
#...#
@N 0
#..#
##.#
#.##
#..#
#..#
@O 0
.##.
#..#
#..#
#..#
.##.
@P 0
###.
#..#
###.
#...
#...
@Q 0
.##.
#..#
#..#
#.#.
.#.#
@R 0
###.
#..#
###.
#.#.
#..#
@S 0
.###
#...
.##.
...#
###.
@T 0
###
.#.
.#.
.#.
.#.
@U 0
#..#
#..#
#..#
#..#
.##.
@V 0
#...#
#...#
.#.#.
.#.#.
..#..
@W 0
#...#
#...#
#.#.#
##.##
#...#
@X 0
#...#
.#.#.
..#..
.#.#.
#...#
@Y 0
#...#
.#.#.
..#..
..#..
..#..
@Z 0
####
...#
.##.
#...
####
@0 0
.#.
#.#
#.#
#.#
.#.
@1 0
.#.
##.
.#.
.#.
###
@2 0
##.
..#
.#.
#..
###
@3 0
##.
..#
.#.
..#
##.
@4 0
#.#
#.#
###
..#
..#
@5 0
###
#..
##.
..#
##.
@6 0
.##
#..
##.
#.#
.#.
@7 0
###
..#
..#
.#.
.#.
@8 0
.#.
#.#
.#.
#.#
.#.
@9 0
.#.
#.#
.##
..#
##.
@· 2
#
@• 1
.#.
###
.#.
@: 1
#
.
#
@. 4
#
@, 3
#
#
@/ 0
..#
..#
.#.
#..
#..
@→ 0
..#..
...#.
#####
...#.
..#..
@← 0
..#..
.#...
#####
.#...
..#..
@↑ 0
..#..
.#.#.
#.#.#
..#..
..#..
@↓ 0
..#..
..#..
#.#.#
.#.#.
..#..
@↗ 0
..###
...##
..#.#
.#...
#....
@× 1
#.#
.#.
#.#
@+ 1
.#.
###
.#.
@= 1
###
...
###
@- 2
###
@— 2
#####
@( 0
.#
#.
#.
#.
.#
@) 0
#.
.#
.#
.#
#.
@[ 0
##
#.
#.
#.
##
@] 0
##
.#
.#
.#
##
@' 0
#
#
@! 0
#
#
#
.
#
@? 0
##.
..#
.#.
...
.#.
@% 0
#...#
...#.
..#..
.#...
#...#
@& 0
.#...
#.#..
.#.#.
#..#.
.##.#
@✦ 0
..#..
.###.
#####
.###.
..#..
@✧ 0
..#..
.#.#.
#...#
.#.#.
..#..
`),kn=hn(9,`
@A 0
.###.
#...#
#...#
#####
#...#
#...#
#...#
@B 0
####.
#...#
#...#
####.
#...#
#...#
####.
@C 0
.###.
#...#
#....
#....
#....
#...#
.###.
@D 0
####.
#...#
#...#
#...#
#...#
#...#
####.
@E 0
#####
#....
#....
####.
#....
#....
#####
@F 0
#####
#....
#....
####.
#....
#....
#....
@G 0
.###.
#...#
#....
#.###
#...#
#...#
.####
@H 0
#...#
#...#
#...#
#####
#...#
#...#
#...#
@I 0
#
#
#
#
#
#
#
@J 0
...#
...#
...#
...#
...#
#..#
.##.
@K 0
#...#
#..#.
#.#..
##...
#.#..
#..#.
#...#
@L 0
#....
#....
#....
#....
#....
#....
#####
@M 0
#...#
##.##
#.#.#
#.#.#
#...#
#...#
#...#
@N 0
#...#
#...#
##..#
#.#.#
#..##
#...#
#...#
@O 0
.###.
#...#
#...#
#...#
#...#
#...#
.###.
@P 0
####.
#...#
#...#
####.
#....
#....
#....
@Q 0
.###.
#...#
#...#
#...#
#.#.#
#..#.
.##.#
@R 0
####.
#...#
#...#
####.
#.#..
#..#.
#...#
@S 0
.###.
#...#
#....
.###.
....#
#...#
.###.
@T 0
#####
..#..
..#..
..#..
..#..
..#..
..#..
@U 0
#...#
#...#
#...#
#...#
#...#
#...#
.###.
@V 0
#...#
#...#
#...#
#...#
.#.#.
.#.#.
..#..
@W 0
#...#
#...#
#...#
#.#.#
#.#.#
#.#.#
.#.#.
@X 0
#...#
#...#
.#.#.
..#..
.#.#.
#...#
#...#
@Y 0
#...#
#...#
.#.#.
..#..
..#..
..#..
..#..
@Z 0
#####
....#
...#.
..#..
.#...
#....
#####
@a 2
.##.
...#
.###
#..#
.###
@b 0
#...
#...
###.
#..#
#..#
#..#
###.
@c 2
.###
#...
#...
#...
.###
@d 0
...#
...#
.###
#..#
#..#
#..#
.###
@e 2
.##.
#..#
####
#...
.###
@f 0
.##
#..
###
#..
#..
#..
#..
@g 2
.###
#..#
#..#
#..#
.###
...#
.##.
@h 0
#...
#...
###.
#..#
#..#
#..#
#..#
@i 0
#
.
#
#
#
#
#
@j 0
.#
..
.#
.#
.#
.#
.#
.#
#.
@k 0
#...
#...
#..#
#.#.
##..
#.#.
#..#
@l 0
#
#
#
#
#
#
#
@m 2
####.
#.#.#
#.#.#
#.#.#
#.#.#
@n 2
###.
#..#
#..#
#..#
#..#
@o 2
.##.
#..#
#..#
#..#
.##.
@p 2
###.
#..#
#..#
#..#
###.
#...
#...
@q 2
.###
#..#
#..#
#..#
.###
...#
...#
@r 2
#.#
##.
#..
#..
#..
@s 2
.###
#...
.##.
...#
###.
@t 1
#..
###
#..
#..
#..
.##
@u 2
#..#
#..#
#..#
#..#
.###
@v 2
#...#
#...#
.#.#.
.#.#.
..#..
@w 2
#...#
#...#
#.#.#
#.#.#
.#.#.
@x 2
#...#
.#.#.
..#..
.#.#.
#...#
@y 2
#..#
#..#
#..#
#..#
.###
...#
.##.
@z 2
####
...#
.##.
#...
####
@0 0
.##.
#..#
#..#
#..#
#..#
#..#
.##.
@1 0
.#.
##.
.#.
.#.
.#.
.#.
###
@2 0
.##.
#..#
...#
..#.
.#..
#...
####
@3 0
###.
...#
...#
.##.
...#
...#
###.
@4 0
...#
..##
.#.#
#..#
####
...#
...#
@5 0
####
#...
###.
...#
...#
#..#
.##.
@6 0
.##.
#...
#...
###.
#..#
#..#
.##.
@7 0
####
...#
...#
..#.
..#.
.#..
.#..
@8 0
.##.
#..#
#..#
.##.
#..#
#..#
.##.
@9 0
.##.
#..#
#..#
.###
...#
...#
.##.
@. 6
#
@, 6
.#
#.
@; 2
.#
..
..
..
.#
#.
@: 2
#
.
.
.
#
@! 0
#
#
#
#
#
.
#
@? 0
.##.
#..#
...#
..#.
.#..
....
.#..
@' 0
#
#
@" 0
#.#
#.#
@’ 0
.#
.#
#.
@‘ 0
.#
#.
#.
@“ 0
.#.#
#.#.
#.#.
@” 0
.#.#
.#.#
#.#.
@- 4
###
@– 4
####
@— 4
#######
@( 0
.#
#.
#.
#.
#.
#.
#.
#.
.#
@) 0
#.
.#
.#
.#
.#
.#
.#
.#
#.
@/ 0
...#
...#
..#.
..#.
.#..
.#..
#...
#...
@% 0
##..#
##.#.
...#.
..#..
.#...
.#.##
#..##
@& 0
.##..
#..#.
#.#..
.#...
#.#.#
#..#.
.##.#
@+ 2
..#..
..#..
#####
..#..
..#..
@× 3
#.#
.#.
#.#
@→ 2
...#..
....#.
######
....#.
...#..
@← 2
..#...
.#....
######
.#....
..#...
@↗ 2
..###
...##
..#.#
.#...
#....
@· 4
#
@… 6
#.#.#
@▶ 0
#...
##..
###.
####
###.
##..
#...
`),An=hn(12,`
@0 0
..###..
.##.##.
##...##
##...##
##...##
##...##
##...##
.##.##.
..###..
@1 0
...##..
.####..
...##..
...##..
...##..
...##..
...##..
...##..
.######
@2 0
.####..
##..##.
....##.
...##..
..##...
.##....
##.....
##...##
#######
@3 0
.#####.
##...##
.....##
...###.
.....##
.....##
.....##
##...##
.#####.
@4 0
....##.
...###.
..#.##.
.#..##.
#...##.
#######
....##.
....##.
...####
@5 0
#######
##.....
##.....
######.
.....##
.....##
.....##
##...##
.#####.
@6 0
..####.
.##....
##.....
######.
##...##
##...##
##...##
##...##
.#####.
@7 0
#######
##...##
....##.
....##.
...##..
...##..
..##...
..##...
..##...
@8 0
.#####.
##...##
##...##
.#####.
##...##
##...##
##...##
##...##
.#####.
@9 0
.#####.
##...##
##...##
##...##
.######
.....##
.....##
....##.
.####..
@: 2
##.
##.
...
...
##.
##.
@A 0
...##...
...##...
..#.##..
..#.##..
.#...##.
.######.
.#...##.
#.....##
##...###
@B 0
######.
.##..##
.##..##
.##.##.
.#####.
.##..##
.##..##
.##..##
######.
@C 0
..####.
.##...#
##.....
##.....
##.....
##.....
##.....
.##...#
..####.
@D 0
#####..
.##.##.
.##..##
.##..##
.##..##
.##..##
.##..##
.##.##.
#####..
@E 0
#######
.##...#
.##....
.##.#..
.####..
.##.#..
.##....
.##...#
#######
@F 0
#######
.##...#
.##....
.##.#..
.####..
.##.#..
.##....
.##....
####...
@G 0
..####.
.##...#
##.....
##.....
##..###
##...##
##...##
.##..##
..####.
@H 0
####.####
.##...##.
.##...##.
.##...##.
.#######.
.##...##.
.##...##.
.##...##.
####.####
@I 0
####
.##.
.##.
.##.
.##.
.##.
.##.
.##.
####
@J 0
..####
...##.
...##.
...##.
...##.
...##.
...##.
#..##.
.###..
@K 0
####.###
.##...#.
.##..#..
.##.#...
.####...
.##.##..
.##..##.
.##...##
####.###
@L 0
####...
.##....
.##....
.##....
.##....
.##....
.##....
.##...#
#######
@M 0
###.....###
.##.....##.
.###...###.
.##.#.#.##.
.##..#..##.
.##.....##.
.##.....##.
.##.....##.
####...####
@N 0
###...###
.##....#.
.###...#.
.#.##..#.
.#..##.#.
.#...###.
.#....##.
.#.....#.
###....#.
@O 0
..####..
.##..##.
##....##
##....##
##....##
##....##
##....##
.##..##.
..####..
@P 0
######.
.##..##
.##..##
.##..##
.#####.
.##....
.##....
.##....
####...
@Q 0
..####..
.##..##.
##....##
##....##
##....##
##....##
##....##
.##..##.
..####..
....##..
.....###
@R 0
######..
.##..##.
.##..##.
.##..##.
.#####..
.##.##..
.##..##.
.##..##.
####..##
@S 0
.####.
##...#
##....
.##...
..##..
...##.
....##
#...##
.####.
@T 0
########
#..##..#
...##...
...##...
...##...
...##...
...##...
...##...
..####..
@U 0
####.###
.##...#.
.##...#.
.##...#.
.##...#.
.##...#.
.##...#.
.##..#..
..###...
@V 0
####..###
.##....#.
.##....#.
..##..#..
..##..#..
...##.#..
...###...
....#....
....#....
@W 0
####..#..###
.##...#...#.
.##..###..#.
..##.#.##.#.
..##.#.##.#.
...###..##..
...##...##..
...##...#...
...#....#...
@X 0
###..###
.##...#.
..##.#..
...##...
...##...
...###..
..#..##.
.#....##
###..###
@Y 0
###..###
.##...#.
..##.#..
...##...
...##...
...##...
...##...
...##...
..####..
@Z 0
#######
#....##
....##.
...##..
..##...
.##....
##.....
##....#
#######
@a 3
.####.
....##
.#####
##..##
##..##
.###.#
@b 0
###....
.##....
.##....
.#####.
.##..##
.##..##
.##..##
.##..##
######.
@c 3
.####
##..#
##...
##...
##..#
.###.
@d 0
....###
.....##
.....##
.######
##...##
##...##
##...##
##...##
.######
@e 3
.####.
##..##
######
##....
##...#
.####.
@f 0
..###
.##.#
.##..
####.
.##..
.##..
.##..
.##..
####.
@g 3
.######
##..##.
##..##.
.####..
##.....
.#####.
##...##
.#####.
@h 0
###.....
.##.....
.##.....
.#####..
.##..##.
.##..##.
.##..##.
.##..##.
###..###
@i 0
.##.
....
....
###.
.##.
.##.
.##.
.##.
####
@j 0
..##
....
....
.###
..##
..##
..##
..##
..##
..##
#.##
.##.
@k 0
###....
.##....
.##....
.##.###
.##..#.
.####..
.##.##.
.##..##
###.###
@l 0
###.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
####
@m 3
#####..##...
.##..##..##.
.##..##..##.
.##..##..##.
.##..##..##.
###..##..###
@n 3
#####...
.##..##.
.##..##.
.##..##.
.##..##.
###..###
@o 3
.####.
##..##
##..##
##..##
##..##
.####.
@p 3
######.
.##..##
.##..##
.##..##
.##..##
.#####.
.##....
.##....
####...
@q 3
.######.
##...##.
##...##.
##...##.
##...##.
.######.
.....##.
.....##.
....####
@r 3
###.##
.###.#
.##...
.##...
.##...
####..
@s 3
.####
##..#
.##..
...##
#..##
####.
@t 1
.##..
.##..
#####
.##..
.##..
.##..
.##..
..###
@u 3
###.###
.##..##
.##..##
.##..##
.##..##
..###.#
@v 3
###..###
.##...#.
.##...#.
..##.#..
..##.#..
...##...
@w 3
###...##...#
.##...##...#
..##.#.##.#.
..##.#.##.#.
...###..###.
...##...##..
@x 3
###.###
.##..#.
..###..
..###..
.#..##.
###.###
@y 3
###..###
.##...#.
..##.#..
..##.#..
...##...
...##...
...#....
#.#.....
.#......
@z 3
######
#...##
...##.
..##..
.##..#
######
@· 4
##
@× 3
#...#
.#.#.
..#..
.#.#.
#...#
@' 0
##
##
.#
@’ 0
##
##
.#
@- 5
####
@. 7
##
##
@, 7
##
##
.#
#.
@! 0
##
##
##
##
##
..
..
##
##
@? 0
.####.
##..##
....##
...##.
..##..
..##..
......
..##..
..##..
@↗ 1
..#####
....###
...#.##
..#..##
.#.....
#......
@& 0
..##...
.##.#..
.##.#..
..##...
.###.##
##.##.#
##..##.
##..##.
.###.##
`),jn=hn(15,`
@A 0
.....#.....
....###....
....###....
...#.###...
...#.###...
..#...###..
..#...###..
..#######..
.#.....###.
.#.....###.
.#......###
###....####
@B 0
#######..
.##...##.
.##....##
.##....##
.##...##.
.######..
.##...##.
.##....##
.##....##
.##....##
.##...##.
#######..
@C 0
...####.#
..##...##
.##.....#
##.......
##.......
##.......
##.......
##.......
##.......
.##.....#
..##...#.
...####..
@D 0
######...
.##..##..
.##...##.
.##....##
.##....##
.##....##
.##....##
.##....##
.##....##
.##...##.
.##..##..
######...
@E 0
########
.##....#
.##....#
.##.....
.##..#..
.#####..
.##..#..
.##.....
.##.....
.##....#
.##....#
########
@F 0
########
.##....#
.##....#
.##.....
.##..#..
.#####..
.##..#..
.##.....
.##.....
.##.....
.##.....
####....
@G 0
...####.#
..##...##
.##.....#
##.......
##.......
##.......
##...####
##.....##
##.....##
.##....##
..##...##
...####..
@H 0
####..####
.##....##.
.##....##.
.##....##.
.##....##.
.########.
.##....##.
.##....##.
.##....##.
.##....##.
.##....##.
####..####
@I 0
####
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
####
@J 0
..#####
...##..
...##..
...##..
...##..
...##..
...##..
...##..
...##..
#..##..
##.##..
.###...
@K 0
####..####
.##....#..
.##...#...
.##..#....
.##.#.....
.####.....
.##.##....
.##..##...
.##...##..
.##....##.
.##.....##
####...###
@L 0
####....
.##.....
.##.....
.##.....
.##.....
.##.....
.##.....
.##.....
.##.....
.##....#
.##....#
########
@M 0
###.......###
.##.......##.
.###.....###.
.#.##...#.##.
.#.##...#.##.
.#..##.#..##.
.#..##.#..##.
.#...###..##.
.#...###..##.
.#....#...##.
.#........##.
###......####
@N 0
###.....###
.##......#.
.###.....#.
.#.##....#.
.#.##....#.
.#..##...#.
.#...##..#.
.#....##.#.
.#....##.#.
.#.....###.
.#......##.
###......#.
@O 0
...####...
..##..##..
.##....##.
##......##
##......##
##......##
##......##
##......##
##......##
.##....##.
..##..##..
...####...
@P 0
#######..
.##...##.
.##....##
.##....##
.##....##
.##...##.
.######..
.##......
.##......
.##......
.##......
####.....
@Q 0
...####...
..##..##..
.##....##.
##......##
##......##
##......##
##......##
##......##
##......##
.##....##.
..##..##..
...####...
.....##...
......####
@R 0
#######...
.##...##..
.##....##.
.##....##.
.##....##.
.##...##..
.#####....
.##.##....
.##..##...
.##...##..
.##....##.
####...###
@S 0
..####.#
.##...##
##.....#
##......
.##.....
..####..
.....##.
......##
#.....##
##....##
##...##.
#.####..
@T 0
##########
#...##...#
#...##...#
....##....
....##....
....##....
....##....
....##....
....##....
....##....
....##....
...####...
@U 0
####...###
.##.....#.
.##.....#.
.##.....#.
.##.....#.
.##.....#.
.##.....#.
.##.....#.
.##.....#.
.##.....#.
..##...#..
...####...
@V 0
####...###
.##.....#.
.##.....#.
..##...#..
..##...#..
..##...#..
...##.#...
...##.#...
...##.#...
....###...
....##....
....#.....
@W 0
####...###...###
.##.....#.....#.
.##....###....#.
..##...#.##..#..
..##...#.##..#..
..##..#..##..#..
...##.#...##.#..
...##.#...##.#..
...####...####..
....##.....##...
....##.....##...
....#......#....
@X 0
####...###
.##.....#.
..##...#..
..##..#...
...##.#...
....##....
....##....
...#.##...
..#...##..
..#...##..
.#.....##.
###...####
@Y 0
####...###
.##.....#.
..##...#..
..##...#..
...##.#...
...##.#...
....##....
....##....
....##....
....##....
....##....
...####...
@Z 0
#########
#......##
......##.
.....##..
.....##..
....##...
...##....
..##.....
..##.....
.##......
##......#
#########
@a 4
.#####..
##...##.
.....##.
..#####.
.##..##.
##...##.
##..###.
.###.###
@b 0
###......
.##......
.##......
.##......
.##.###..
.###..##.
.##....##
.##....##
.##....##
.##....##
.###..##.
##.####..
@c 4
..####.
.##...#
##....#
##.....
##.....
##.....
.##...#
..####.
@d 0
.....###.
......##.
......##.
......##.
..###.##.
.##..###.
##....##.
##....##.
##....##.
##....##.
.##..###.
..###.###
@e 4
..####.
.##..##
##....#
#######
##.....
##.....
.##...#
..####.
@f 0
...####
..##..#
..##...
..##...
######.
..##...
..##...
..##...
..##...
..##...
..##...
.####..
@g 4
..###.##
.##..###
##....##
##....##
##....##
##....##
.##..###
..###.##
......##
#....##.
.#####..
@h 0
###.....
.##.....
.##.....
.##.....
.##.###.
.###..##
.##...##
.##...##
.##...##
.##...##
.##...##
####.###
@i 0
....
.##.
.##.
....
###.
.##.
.##.
.##.
.##.
.##.
.##.
####
@j 0
....
..##
..##
....
.###
..##
..##
..##
..##
..##
..##
..##
..##
#.##
.##.
@k 0
###......
.##......
.##......
.##......
.##..####
.##...#..
.##..#...
.##.#....
.####....
.##.##...
.##..##..
####.####
@l 0
###.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
####
@m 4
###.###..###.
.###..###..##
.##...##...##
.##...##...##
.##...##...##
.##...##...##
.##...##...##
####.###.####
@n 4
###.###.
.###..##
.##...##
.##...##
.##...##
.##...##
.##...##
####.###
@o 4
..####..
.##..##.
##....##
##....##
##....##
##....##
.##..##.
..####..
@p 4
###.###..
.###..##.
.##....##
.##....##
.##....##
.##....##
.###..##.
.##.###..
.##......
.##......
####.....
@q 4
..###.##.
.##..###.
##....##.
##....##.
##....##.
##....##.
.##..###.
..###.##.
......##.
......##.
.....####
@r 4
###.###
.###..#
.##....
.##....
.##....
.##....
.##....
####...
@s 4
.####.#
##...##
##.....
.####..
....##.
.....##
##...##
#.####.
@t 1
..#...
..#...
.##...
######
.##...
.##...
.##...
.##...
.##...
.##..#
..###.
@u 4
###..###.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##..###.
..###.###
@v 4
####..###
.##....#.
.##....#.
..##..#..
..##..#..
...##.#..
...###...
....#....
@w 4
####..#...###
.##..###...#.
.##..#.##..#.
..##.#.##.#..
..##.#.##.#..
...###..###..
...##....##..
....#....#...
@x 4
###..###
.##...#.
..##.#..
...##...
...##...
..#.##..
.#...##.
###.####
@y 4
####..###
.##....#.
.##....#.
..##..#..
..##..#..
...##.#..
...###...
....##...
....#....
#..#.....
.##......
@z 4
#######
#....##
....##.
...##..
..##...
.##....
##....#
#######
@0 0
...###...
..##.##..
.##...##.
##.....##
##.....##
##.....##
##.....##
##.....##
##.....##
.##...##.
..##.##..
...###...
@1 0
..##..
####..
..##..
..##..
..##..
..##..
..##..
..##..
..##..
..##..
..##..
######
@2 0
..####..
.##..##.
##....##
......##
.....##.
....##..
...##...
..##....
.##.....
##......
##.....#
########
@3 0
.#####..
##...##.
......##
......##
.....##.
...###..
.....##.
......##
......##
......##
##...##.
.#####..
@4 0
.....##.
....###.
...#.##.
...#.##.
..#..##.
.#...##.
#....##.
########
.....##.
.....##.
.....##.
....####
@5 0
#######.
##......
##......
##......
######..
.....##.
......##
......##
......##
......##
##...##.
.#####..
@6 0
...####.
..##....
.##.....
##......
######..
##...##.
##....##
##....##
##....##
##....##
.##..##.
..####..
@7 0
########
##....##
......##
.....##.
.....##.
....##..
....##..
...##...
...##...
..##....
..##....
..##....
@8 0
..####..
.##..##.
##....##
##....##
.##..##.
..####..
.##..##.
##....##
##....##
##....##
.##..##.
..####..
@9 0
..####..
.##..##.
##....##
##....##
##....##
##....##
.##...##
..######
......##
.....##.
....##..
.####...
@: 4
##
##
..
..
..
..
##
##
@· 6
##
##
@× 5
#...#
.#.#.
..#..
.#.#.
#...#
@' 0
##
##
.#
@’ 0
##
##
.#
#.
@- 7
#####
@. 10
##
##
@, 10
##
##
.#
#.
@! 0
##
##
##
##
##
##
##
.#
..
..
##
##
@? 0
.####.
##..##
##..##
....##
....##
...##.
..##..
..##..
......
......
..##..
..##..
@↗ 2
...#####
.....###
....#.##
...#..##
..#....#
.#......
#.......
@& 0
..###....
.##.##...
.##.##...
.##.#....
..##.....
.###..###
##.##..#.
##..##.#.
##...##..
##....##.
.##..####
..###...#
`),Mn=hn(32,`
@I 0
##########
##########
..######..
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
..######..
##########
##########
@V 0
##########....#######
##########....#######
..######.......####..
...####.........##...
...####.........##...
....####........##...
....####........##...
....####.......##....
....####.......##....
....####.......##....
.....####......##....
.....####......##....
.....####.....##.....
.....####.....##.....
.....####.....##.....
......####....##.....
......####....##.....
......####...##......
......####...##......
.......####..##......
.......####..##......
.......####..##......
.......####.##.......
.......####.##.......
........######.......
........######.......
........######.......
........#####........
........#####........
.........####........
.........####........
.........####........
`),Nn=hn(5,`
@a 1
.##
#.#
#.#
.##
@b 0
#..
##.
#.#
#.#
##.
@c 1
.##
#..
#..
.##
@d 0
..#
.##
#.#
#.#
.##
@e 1
.#.
###
#..
.##
@f 0
.##
.#.
###
.#.
.#.
@g 1
.##
#.#
.##
##.
@h 0
#..
##.
#.#
#.#
#.#
@i 0
.#.
...
##.
.#.
###
@j 0
..#
...
..#
#.#
.#.
@k 0
#..
#.#
##.
#.#
#.#
@l 0
##.
.#.
.#.
.#.
.##
@m 1
####.
#.#.#
#.#.#
#.#.#
@n 1
##.
#.#
#.#
#.#
@o 1
.#.
#.#
#.#
.#.
@p 1
##.
#.#
##.
#..
@q 1
.##
#.#
.##
..#
@r 1
#.#
##.
#..
#..
@s 1
.##
##.
..#
##.
@t 0
.#.
###
.#.
.#.
..#
@u 1
#.#
#.#
#.#
.##
@v 1
#.#
#.#
#.#
.#.
@w 1
#...#
#.#.#
#.#.#
.#.#.
@x 1
#.#
.#.
.#.
#.#
@y 1
#.#
#.#
.##
##.
@z 1
###
.##
#..
###
@0 0
###
#.#
#.#
#.#
###
@1 0
.#.
##.
.#.
.#.
###
@2 0
##.
..#
.#.
#..
###
@3 0
##.
..#
.#.
..#
##.
@4 0
#.#
#.#
###
..#
..#
@5 0
###
#..
##.
..#
##.
@6 0
.##
#..
###
#.#
###
@7 0
###
..#
.#.
.#.
.#.
@8 0
###
#.#
###
#.#
###
@9 0
###
#.#
###
..#
##.
@= 1
###
...
###
@> 0
#..
.#.
..#
.#.
#..
@< 0
..#
.#.
#..
.#.
..#
@{ 0
.##
.#.
#..
.#.
.##
@} 0
##.
.#.
..#
.#.
##.
@( 0
.#.
#..
#..
#..
.#.
@) 0
.#.
..#
..#
..#
.#.
@[ 0
##.
#..
#..
#..
##.
@] 0
.##
..#
..#
..#
.##
@; 1
.#.
...
.#.
#..
@: 1
.#.
...
.#.
@. 4
.#.
@, 3
.#.
#..
@/ 0
..#
..#
.#.
#..
#..
@| 0
.#.
.#.
.#.
.#.
.#.
@+ 1
.#.
###
.#.
@- 2
###
@* 1
#.#
.#.
#.#
@_ 4
###
@! 0
.#.
.#.
.#.
...
.#.
@? 0
##.
..#
.#.
...
.#.
@" 0
#.#
#.#
@' 0
.#.
.#.
@# 0
#.#
###
#.#
###
#.#
@& 0
.#.
#.#
.#.
#.#
.##
@% 0
#.#
..#
.#.
#..
#.#
@$ 0
.##
##.
.#.
.##
##.
`),Pn=hn(9,`
@ 0
.......###.......
......#.#.#......
......#...#......
.......###.......
.................
.###...###...###.
#...#.#...#.#...#
##..#.#.#.#.#..##
.###...###...###.
@ 0
.###.
#.#.#
#.#.#
#...#
#...#
#...#
#...#
#...#
.###.
`),Fn=_n(13,`
@a 3
.#####.
##..##.
##..##.
##..##.
##..##.
##..##.
.###.##
@b 0 1
###.....
.##.....
.##.....
.#####..
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
.#####..
@c 3
.####..
##..##.
##.....
##.....
##.....
##...#.
.####..
@d 0
...###.
....##.
....##.
.#####.
##..##.
##..##.
##..##.
##..##.
##..##.
.###.##
@e 3
.####..
##..##.
##..##.
######.
##.....
##...#.
.####..
@f 0
..###.
.##..#
.##...
#####.
.##...
.##...
.##...
.##...
.##...
.##...
.##...
.##...
##....
@g 3
.#####.
##..##.
##..##.
##..##.
##..##.
##..##.
.#####.
....##.
....##.
.####..
@h 0 1
###.....
.##.....
.##.....
.#####..
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
.##...##
@i 0 1
....
.##.
....
###.
.##.
.##.
.##.
.##.
.##.
..##
@j 0
....
..##
....
.###
..##
..##
..##
..##
..##
..##
..##
..##
##..
@k 0 1
###.....
.##.....
.##.....
.##..##.
.##.##..
.####...
.##.##..
.##..##.
.##..##.
.##...##
@l 0 1
###.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
..##
@m 3 1
#####.###...
.##..##..##.
.##..##..##.
.##..##..##.
.##..##..##.
.##..##..##.
.##..##...##
@n 3 1
#####...
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
.##...##
@o 3
.####..
##..##.
##..##.
##..##.
##..##.
##..##.
.####..
@p 3 1
#####...
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
.#####..
.##.....
.##.....
.##.....
@q 3
.#####.
##..##.
##..##.
##..##.
##..##.
##..##.
.#####.
....##.
....##.
....##.
@r 3 1
###.##
.####.
.##...
.##...
.##...
.##...
.##...
@s 3
.###..
##..#.
##....
.###..
...##.
#..##.
.###..
@t 1 1
.##..
.##..
#####
.##..
.##..
.##..
.##..
.##..
..##.
@u 3 1
###..##.
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
..###.##
@v 3
##...#.
##...#.
##..#..
.##.#..
..##.#.
...##..
...#...
@w 3 1
###..#...#.
.##..#...#.
.##..#..#..
.##..##.#..
..##.##.#..
..###.###..
...#...#...
@x 3
##...#.
.##.#..
..##...
..##...
..#.##.
.#..##.
#....##
@y 3 1
###..##.
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
..#####.
.....##.
.....##.
..####..
@z 3
######.
#...##.
...##..
..##...
.##....
##...#.
######.
@A 0
....##....
....##....
...#.##...
...#.##...
..#...##..
..#...##..
.#######..
.#.....##.
#......##.
##....###.
@B 0
######...
.##..##..
.##..##..
.##..##..
.#####...
.##..##..
.##...##.
.##...##.
.##..##..
######...
@C 0
..####..
.##...#.
##......
##......
##......
##......
##......
##......
.##...#.
..####..
@D 0
#####...
.##.##..
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
.##.##..
#####...
@E 0
#######.
.##...#.
.##.....
.##.#...
.####...
.##.#...
.##.....
.##.....
.##...#.
#######.
@F 0
#######.
.##...#.
.##.....
.##.#...
.####...
.##.#...
.##.....
.##.....
.##.....
####....
@G 0
..####..
.##...#.
##......
##......
##..###.
##...##.
##...##.
##...##.
.##..##.
..####..
@H 0
####.####.
.##...##..
.##...##..
.##...##..
.#######..
.##...##..
.##...##..
.##...##..
.##...##..
####.####.
@I 0
####.
.##..
.##..
.##..
.##..
.##..
.##..
.##..
.##..
####.
@J 0
..####.
...##..
...##..
...##..
...##..
...##..
...##..
#..##..
#..##..
.###...
@K 0
####.###.
.##...#..
.##..#...
.##.#....
.####....
.##.##...
.##..##..
.##..##..
.##...##.
####.###.
@L 0
####....
.##.....
.##.....
.##.....
.##.....
.##.....
.##.....
.##.....
.##...#.
#######.
@M 0
###.....###.
.##.....##..
.###...###..
.###...###..
.##.#.#.##..
.##.#.#.##..
.##..#..##..
.##..#..##..
.##.....##..
####...####.
@N 0
###...###.
.##....#..
.###...#..
.#.##..#..
.#.##..#..
.#..##.#..
.#..##.#..
.#...###..
.#....##..
###....#..
@O 0
..####...
.##..##..
##....##.
##....##.
##....##.
##....##.
##....##.
##....##.
.##..##..
..####...
@P 0
######..
.##..##.
.##..##.
.##..##.
.#####..
.##.....
.##.....
.##.....
.##.....
####....
@Q 0
..####...
.##..##..
##....##.
##....##.
##....##.
##....##.
##....##.
##....##.
.##..##..
..####...
....##...
.....###.
@R 0
######...
.##..##..
.##..##..
.##..##..
.#####...
.##.##...
.##..##..
.##..##..
.##..##..
####..##.
@S 0
.####..
##...#.
##.....
.##....
..##...
...##..
....##.
....##.
#...##.
.####..
@T 0
########.
#..##..#.
...##....
...##....
...##....
...##....
...##....
...##....
...##....
..####...
@U 0
####.###.
.##...#..
.##...#..
.##...#..
.##...#..
.##...#..
.##...#..
.##...#..
.##..#...
..###....
@V 0
####..####
.##.....#.
.##.....#.
..##...#..
..##...#..
..##..#...
...##.#...
...####...
....##....
....#.....
@W 0
####..##..####
.##....#....#.
.##....#....#.
..##..###..#..
..##..#.##.#..
..##.#..##.#..
...###...###..
...##....##...
....#....#....
....#....#....
@X 0
###...###.
.##....#..
..##..#...
..##.#....
...##.....
...##.....
...#.##...
..#..##...
.#....##..
###..####.
@Y 0
###...###.
.##....#..
..##..#...
..##..#...
...##.#...
....##....
....##....
....##....
....##....
...####...
@Z 0
#######.
#....##.
....##..
....##..
...##...
..##....
..##....
.##.....
##....#.
#######.
@0 0
..###...
.##.##..
##...##.
##...##.
##...##.
##...##.
##...##.
##...##.
.##.##..
..###...
@1 0
.##..
###..
.##..
.##..
.##..
.##..
.##..
.##..
.##..
####.
@2 0
.####..
##..##.
....##.
....##.
...##..
..##...
.##....
##.....
##...#.
######.
@3 0
.####..
##..##.
....##.
....##.
..###..
....##.
....##.
....##.
##..##.
.####..
@4 0
....##..
...###..
..#.##..
..#.##..
.#..##..
#...##..
#######.
....##..
....##..
...####.
@5 0
######.
##.....
##.....
#####..
....##.
....##.
....##.
....##.
##..##.
.####..
@6 0
..###..
.##....
##.....
#####..
##..##.
##..##.
##..##.
##..##.
##..##.
.####..
@7 0
######.
#...##.
....##.
...##..
...##..
..##...
..##...
..##...
.##....
.##....
@8 0
.####..
##..##.
##..##.
##..##.
.####..
##..##.
##..##.
##..##.
##..##.
.####..
@9 0
.####..
##..##.
##..##.
##..##.
##..##.
.#####.
....##.
....##.
...##..
.###...
@. 8
##.
##.
@, 8
##.
##.
.#.
#..
@; 3
##.
##.
...
...
...
##.
##.
.#.
#..
@: 3
##.
##.
...
...
...
##.
##.
@' 0
##.
##.
.#.
#..
@’ 0
##.
##.
.#.
#..
@‘ 0
..#
.#.
.##
.##
@" 0
##.##.
##.##.
.#..#.
#..#..
@” 0
##.##.
##.##.
.#..#.
#..#..
@“ 0
..#..#
.#..#.
.##.##
.##.##
@- 6
####.
@– 6
#######.
@— 6
############.
@→ 4 0 u
....#...
.....#..
#######.
.....#..
....#...
@← 4 0 u
...#....
..#.....
#######.
..#.....
...#....
@! 0
##.
##.
##.
##.
##.
##.
##.
...
##.
##.
@? 0
.####..
##..##.
....##.
...##..
..##...
..##...
..##...
.......
..##...
..##...
@( 0
...#.
..#..
.##..
.##..
##...
##...
##...
##...
.##..
.##..
..#..
...#.
@) 0
.#...
..#..
..##.
..##.
...##
...##
...##
...##
..##.
..##.
..#..
.#...
@/ 0 0 u
......#
.....#.
.....#.
....#..
....#..
...#...
...#...
..#....
..#....
.#.....
.#.....
#......
@& 0
..###....
.##.##...
.##.##...
..###....
.###..##.
##.##.#..
##..##...
##..##...
##...###.
.####..#.
@· 5 0 u
##.
##.
@+ 4
..#...
..#...
#####.
..#...
..#...
@× 4 0 u
#...#.
.#.#..
..#...
.#.#..
#...#.
`,e=>e<=2?2:e<=6?1:e<=9?0:-1),In=_n(15,`
@a 4
.######.
##...##.
##...##.
##...##.
##...##.
##...##.
##...##.
.####.##
@b 0 1
###......
.##......
.##......
.##......
.######..
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.######..
@c 4
.#####..
##...##.
##......
##......
##......
##......
##....#.
.#####..
@d 0
....###.
.....##.
.....##.
.....##.
.######.
##...##.
##...##.
##...##.
##...##.
##...##.
##...##.
.####.##
@e 4
.#####..
##...##.
##...##.
#######.
##......
##......
##....#.
.#####..
@f 0
...####
..##..#
..##...
..##...
######.
..##...
..##...
..##...
..##...
..##...
..##...
..##...
..##...
..##...
.##....
@g 4
.######.
##...##.
##...##.
##...##.
##...##.
##...##.
##...##.
.######.
.....##.
.....##.
.#####..
@h 0 1
###......
.##......
.##......
.##......
.######..
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##....##
@i 0 1
....
.##.
.##.
....
###.
.##.
.##.
.##.
.##.
.##.
.##.
..##
@j 0
.....
..##.
..##.
.....
.###.
..##.
..##.
..##.
..##.
..##.
..##.
..##.
..##.
..##.
##...
@k 0 1
###......
.##......
.##......
.##......
.##...##.
.##..##..
.##.##...
.####....
.##.##...
.##..##..
.##...##.
.##....##
@l 0 1
###.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
..##
@m 4 1
######.####...
.##...##...##.
.##...##...##.
.##...##...##.
.##...##...##.
.##...##...##.
.##...##...##.
.##...##....##
@n 4 1
######...
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##....##
@o 4
.#####..
##...##.
##...##.
##...##.
##...##.
##...##.
##...##.
.#####..
@p 4 1
######...
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.######..
.##......
.##......
.##......
@q 4
.######.
##...##.
##...##.
##...##.
##...##.
##...##.
##...##.
.######.
.....##.
.....##.
.....##.
@r 4 1
###.###
.####..
.##....
.##....
.##....
.##....
.##....
.##....
@s 4
.#####.
##...#.
##.....
.###...
...###.
.....##
#....##
.#####.
@t 1 1
.##...
.##...
.##...
######
.##...
.##...
.##...
.##...
.##...
.##...
..###.
@u 4 1
###...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
..####.##
@v 4
##....##
##....##
.##...#.
.##..##.
..##.#..
..####..
...##...
...#....
@w 4
##...##...#.
##...##...#.
##...##...#.
.##.#.##.#..
.##.#.##.#..
..###..###..
..##...##...
..#....#....
@x 4
##...##.
.##..#..
..##.#..
...##...
...##...
..#.##..
.#...##.
##...##.
@y 4 1
###...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
..######.
......##.
......##.
..#####..
@z 4
#######.
#....##.
....##..
...##...
..##....
.##.....
##....#.
#######.
@A 0
.....##....
.....##....
....#.##...
....#.##...
...#..##...
...#...##..
..#....##..
..#######..
.#......##.
.#......##.
#.......##.
###....####
@D 0
######...
.##..##..
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##..##..
######...
@F 0
########.
.##....#.
.##....#.
.##......
.##..#...
.#####...
.##..#...
.##......
.##......
.##......
.##......
####.....
@H 0
####..####.
.##....##..
.##....##..
.##....##..
.##....##..
.########..
.##....##..
.##....##..
.##....##..
.##....##..
.##....##..
####..####.
@N 0
###....###.
.##.....#..
.###....#..
.#.##...#..
.#.##...#..
.#..##..#..
.#..##..#..
.#...##.#..
.#...##.#..
.#....###..
.#.....##..
###.....#..
@S 0
..#####.
.##...##
##.....#
##......
.###....
..####..
....###.
......##
......##
#.....##
##...##.
#.####..
@W 0
####..###..####
.##....#.....#.
.##....#.....#.
.##....#.....#.
..##..###...#..
..##..#.##..#..
..##..#.##..#..
..##.#...##.#..
...###...###...
...##.....##...
....#.....#....
....#.....#....
@. 10
##.
##.
@, 10
##.
##.
.#.
#..
@; 4
##.
##.
...
...
...
...
##.
##.
.#.
#..
@: 4
##.
##.
...
...
...
...
##.
##.
@' 0
##.
##.
.#.
#..
@’ 0
##.
##.
.#.
#..
@- 8
#####.
@? 0
.#####.
##...##
.....##
.....##
....##.
...##..
..##...
..##...
.......
.......
..##...
..##...
@! 0
##.
##.
##.
##.
##.
##.
##.
##.
...
...
##.
##.
`,e=>e<=3?3:e<=6?2:e<=9?1:e<=11?0:-1),Ln=hn(8,`
@A 0
.#####.
##...##
##...##
##...##
#######
##...##
##...##
##...##
@B 0
######.
##...##
##...##
######.
##...##
##...##
##...##
######.
@C 0
.######
##.....
##.....
##.....
##.....
##.....
##.....
.######
@D 0
######.
##...##
##...##
##...##
##...##
##...##
##...##
######.
@E 0
#####
##...
##...
####.
##...
##...
##...
#####
@F 0
#####
##...
##...
####.
##...
##...
##...
##...
@G 0
.######
##.....
##.....
##..###
##...##
##...##
##...##
.######
@H 0
##...##
##...##
##...##
#######
##...##
##...##
##...##
##...##
@I 0
##
##
##
##
##
##
##
##
@J 0
.....##
.....##
.....##
.....##
.....##
##...##
##...##
.#####.
@K 0
##...##
##..##.
##.##..
####...
##.##..
##..##.
##...##
##...##
@L 0
##...
##...
##...
##...
##...
##...
##...
#####
@M 0
##....##
###..###
##.##.##
##....##
##....##
##....##
##....##
##....##
@N 0
##...##
###..##
####.##
##.####
##..###
##...##
##...##
##...##
@O 0
.#####.
##...##
##...##
##...##
##...##
##...##
##...##
.#####.
@P 0
######.
##...##
##...##
######.
##.....
##.....
##.....
##.....
@Q 0
.#####.
##...##
##...##
##...##
##...##
##.####
##..##.
.###.##
@R 0
######.
##...##
##...##
######.
##.##..
##..##.
##...##
##...##
@S 0
.######
##.....
##.....
.#####.
.....##
.....##
.....##
######.
@T 0
######
..##..
..##..
..##..
..##..
..##..
..##..
..##..
@U 0
##...##
##...##
##...##
##...##
##...##
##...##
##...##
.#####.
@V 0
##...##
##...##
##...##
.##.##.
.##.##.
.##.##.
..###..
..###..
@W 0
##....##
##....##
##....##
##....##
##.##.##
##.##.##
###..###
##....##
@X 0
##...##
##...##
.##.##.
..###..
..###..
.##.##.
##...##
##...##
@Y 0
##..##
##..##
##..##
.####.
..##..
..##..
..##..
..##..
@Z 0
#######
.....##
....##.
...##..
..##...
.##....
##.....
#######
@0 0
.####.
##..##
##..##
##..##
##..##
##..##
##..##
.####.
@1 0
..##..
####..
..##..
..##..
..##..
..##..
..##..
######
@2 0
#####.
....##
....##
...##.
..##..
.##...
##....
######
@3 0
#####.
....##
....##
..###.
....##
....##
....##
#####.
@4 0
##..##
##..##
##..##
##..##
######
....##
....##
....##
@5 0
######
##....
##....
#####.
....##
....##
....##
#####.
@6 0
.#####
##....
##....
#####.
##..##
##..##
##..##
.####.
@7 0
######
....##
....##
...##.
..##..
..##..
..##..
..##..
@8 0
.####.
##..##
##..##
.####.
##..##
##..##
##..##
.####.
@9 0
.####.
##..##
##..##
##..##
.#####
....##
....##
#####.
@· 3
##
##
@: 1
##
##
..
..
##
##
@. 6
##
##
@, 5
##
##
#.
@' 0
##
##
##
@! 0
##
##
##
##
##
..
##
##
@? 0
#####.
....##
....##
..###.
..##..
......
..##..
..##..
@/ 0
...##
...##
..##.
..##.
.##..
.##..
##...
##...
@- 4
#####
@– 4
######
@— 4
########
@( 0
.##
##.
##.
##.
##.
##.
##.
.##
@) 0
##.
.##
.##
.##
.##
.##
.##
##.
@+ 1
..##..
..##..
..##..
######
..##..
..##..
@→ 0
...##...
....##..
.....##.
########
########
.....##.
....##..
...##...
@← 0
...##...
..##....
.##.....
########
########
.##.....
..##....
...##...
`),Rn=hn(16,`
@第 0
..##.....##....
.#####..######.
##..##.##..##..
.....##.....##.
...............
.#############.
.......##...##.
.......##...##.
.#############.
.##....##......
.##....##......
.##############
....##.##....##
...##..##....##
.##....##....##
##.....##..##..
@一 7
###############
###############
@二 3
..###########..
..###########..
...............
...............
...............
...............
...............
...............
###############
###############
@三 1
..###########..
..###########..
...............
...............
...............
...............
...#########...
...#########...
...............
...............
...............
...............
###############
###############
@四 2
###############
###############
##...##..##..##
##...##..##..##
##...##..##..##
##..##...##..##
##.##....##..##
####.....######
##...........##
##...........##
##...........##
###############
###############
##...........##
@五 1
.#############.
.#############.
.....##........
.....##........
.....##........
....#########..
....#########..
....##.....##..
....##.....##..
...##......##..
...##......##..
...##......##..
###############
###############
@六 0
......##.......
.......##......
.......##......
...............
###############
###############
...............
...............
....##...##....
....##...##....
...##.....##...
...##.....##...
..##.......##..
..##.......##..
.##.........##.
##...........##
@七 0
....##.........
....##.........
....##.........
....##.........
....##.........
....##....#####
....###########
##########.....
######.........
....##.........
....##.........
....##.........
....##.......##
....##.......##
....###########
.....##########
@の 3
.....######....
...###.##.###..
..##...##...##.
.##....##....##
.##...##.....##
##....##.....##
##...##......##
##...##......##
##..##.......##
##.##........##
.###........##.
..........###..
........###....
@つ 4
......#####....
...####...###..
####........##.
.............##
.............##
.............##
.............##
............##.
..........###..
......#####....
...####........
@掟 0
.##.......##...
.##.......##...
.##...#########
.##...##.....##
#####.##.....##
.##............
.##....#######.
.##.##....##...
.####.....##...
###...##..#####
.##...##..##...
.##...##..##...
.##...##..##...
.##...######...
.##.........##.
##...........##
@夢 0
....##....##...
###############
....##....##...
###############
##..##...##..##
##..##...##..##
###############
...............
###############
##....##.....##
.....#######...
....##.....##..
...##..##.##...
........###....
......###......
..#####........
@書 0
..###########..
.......##..##..
###############
.......##..##..
..###########..
.......##......
.#############.
.......##......
###############
###############
...............
..###########..
..##.......##..
..###########..
..##.......##..
..###########..
@— 7
###############
###############
`),zn={NIGHT5:{h:5,base:5,gap:2,space:3,glyphs:On},NIGHT7:{h:9,base:7,gap:1,space:3,glyphs:kn},NIGHT7I:gn({h:9,base:7,gap:0,space:4,glyphs:kn},e=>e<=3?1:e<=6?0:-1),NIGHT9:{h:12,base:9,gap:1,space:4,glyphs:An},NIGHT9I:gn({h:12,base:9,gap:1,space:4,glyphs:An},e=>e<=2?2:e<=5?1:e<=8?0:-1),NIGHT12:{h:15,base:12,gap:1,space:4,glyphs:jn},NIGHT10I:{h:13,base:10,gap:-2,space:5,glyphs:Fn},NIGHT12I:{h:15,base:12,gap:-3,space:6,glyphs:In},NUMERAL32:{h:32,base:32,gap:3,space:8,glyphs:Mn},MICRO3:{h:5,base:5,gap:1,space:3,glyphs:Nn},KEYS9:{h:9,base:9,gap:1,space:3,glyphs:Pn},NIGHT5S:{h:8,base:8,gap:3,space:4,glyphs:Ln},JP16:{h:16,base:16,gap:1,space:7,glyphs:Rn}},Bn={NIGHT5:{cap:5,xh:5,desc:0,line:8},NIGHT7:{cap:7,xh:5,desc:2,line:10},NIGHT7I:{cap:7,xh:5,desc:2,line:10},NIGHT9:{cap:9,xh:6,desc:3,line:13},NIGHT9I:{cap:9,xh:6,desc:3,line:13},NIGHT12:{cap:12,xh:8,desc:3,line:17},NIGHT10I:{cap:10,xh:7,desc:3,line:15},NIGHT12I:{cap:12,xh:8,desc:3,line:18},NUMERAL32:{cap:32,xh:32,desc:0,line:32},MICRO3:{cap:5,xh:4,desc:0,line:6},KEYS9:{cap:9,xh:9,desc:0,line:10},NIGHT5S:{cap:8,xh:8,desc:0,line:11},JP16:{cap:16,xh:16,desc:0,line:16}},Vn=1,Hn={"":[[8,1],[1,7],[8,7],[15,7]],"":[[2,1],[2,2]]},Un=[`..a....a..`,`.a......a.`,`a........a`,`.a......a.`,`..a....a..`],Wn=e=>e===``||e===``||e===`LR`||e[0]===`[`&&e.length>2,Gn=e=>Object.keys(zn).find(t=>zn[t]===e)||`NIGHT12`,Kn={night:[`K9`,`K8`,null,`K0`],nightmare:[`P5`,`E1`,null,`S1`],light:[`M3`,`M2`,null,`W0`],ult:[`P5`,`P4`,`P3`,null],fusion:[`W1`,`C1`,`D3`,null]}});function Jn(e,t=0,n=0){let r=Math.imul(e|0,374761393)+Math.imul(t|0,668265263)+Math.imul(n|0,2147483647)|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function F(e,t,n,r){e.fillStyle=Or(r),e.fillRect(Math.round(t),Math.round(n),1,1)}function Yn(e,t,n,r,i,a){r<=0||i<=0||(e.fillStyle=Or(a),e.fillRect(Math.round(t),Math.round(n),Math.round(r),Math.round(i)))}function Xn(e,t,n,r,i,a,o,s=0,c=0){if(!(o<=0)){if(o>=1)return Yn(e,t,n,r,i,a);e.fillStyle=Or(a),t=Math.round(t),n=Math.round(n);for(let a=n;a<n+i;a++)for(let n=t;n<t+r;n++)N(n-s,a-c,o)&&e.fillRect(n,a,1,1)}}function I(e,t,n,r,i,a=0,o=0){(i>=1||i>0&&N(Math.round(t)-a,Math.round(n)-o,i))&&F(e,t,n,r)}function Zn(e,t,n,r,i=0,a=0){if(t<=0)return;if(t>=1)return n(e);let o=e.canvas.width,s=e.canvas.height,c=Br[Vr]||(Br[Vr]=document.createElement(`canvas`));(c.width!==o||c.height!==s)&&(c.width=o,c.height=s);let l=c.getContext(`2d`,{willReadFrequently:!0});l.imageSmoothingEnabled=!1,l.clearRect(0,0,o,s),Vr++;try{n(l)}finally{Vr--}let[u,d,f,p]=r||[0,0,o,s];if(u=Math.max(0,Math.floor(u)),d=Math.max(0,Math.floor(d)),f=Math.min(o-u,Math.ceil(f)),p=Math.min(s-d,Math.ceil(p)),f<=0||p<=0)return;let m=l.getImageData(u,d,f,p),h=m.data;for(let e=0;e<p;e++)for(let n=0;n<f;n++){let r=(e*f+n)*4+3;h[r]&&!N(u+n-i,d+e-a,t)&&(h[r]=0)}l.putImageData(m,u,d),e.drawImage(c,u,d,f,p,u,d,f,p)}function Qn(e,t,n,r,i,a=26){let o=e.canvas.width,s=e.canvas.height,c=Math.max(1,Math.floor(t)-1),l=Math.max(1,Math.floor(n)-1),u=Math.min(o-1,Math.ceil(t+r)+1),d=Math.min(s-1,Math.ceil(n+i)+1);if(u<=c||d<=l)return;let f=u-c+2,p=d-l+2,m=e.getImageData(c-1,l-1,f,p),h=m.data,g=new Uint8ClampedArray(h),_=new Float32Array(f*p);for(let e=0;e<f*p;e++)_[e]=h[e*4+3]<128?-999:.3*h[e*4]+.59*h[e*4+1]+.11*h[e*4+2];let v=!1;for(let e=1;e<p-1;e++)for(let t=1;t<f-1;t++){let n=e*f+t;if(_[n]<0)continue;let r=0,i=[];for(let o=-1;o<=1;o++)for(let s=-1;s<=1;s++){if(!s&&!o)continue;let c=(e+o)*f+t+s;i.push(c),Math.abs(_[c]-_[n])<a&&r++}if(r>=2)continue;let o=i.map(e=>_[e]).sort((e,t)=>e-t)[4];if(Math.abs(_[n]-o)<a)continue;let s=/* @__PURE__ */ new Map,c=i[0],l=0;for(let e of i){let t=h[e*4]<<16|h[e*4+1]<<8|h[e*4+2],n=(s.get(t)||0)+1;s.set(t,n),n>l&&h[e*4+3]>=128&&(l=n,c=e)}for(let e=0;e<4;e++)g[n*4+e]=h[c*4+e];v=!0}v&&(m.data.set(g),e.putImageData(m,c-1,l-1))}function L(e,t,n=0){return t?ht(e,t)+n*Math.max(0,Array.from(t).length-1):0}function $n(e,t,n,r,i,a,o=`left`,s=0){let c=L(t,n,s),l=Math.round(o===`left`?r:o===`center`?r-c/2:r-c),u=l;if(!s)return gt(e,t,n,l,i,Or(a)),{x:u,w:c};for(let r of n)r===` `?l+=t.space+t.gap+s:(gt(e,t,r,l,i,Or(a)),l+=ht(t,r)+t.gap+s);return{x:u,w:c}}function er(e,t,n,r=0){let i=[];for(let a of t.split(`
`)){let t=``;for(let o of a.split(` `)){let a=t?t+` `+o:o;t&&L(e,a,r)>n?(i.push(t),t=o):t=a}t&&i.push(t)}return i}function tr(e,t,n,r,i,a,o,s=null,c=.5,l=`left`){let u=L(t,n),d=Math.round(l===`center`?r-u/2:r),f=Math.round(i);return rr(e,nr(e=>gt(e,t,n,2,2,`#fff`),u+4,t.h+4),d-2,f-2,a,o,s,c),{x:d,w:u}}function nr(e,t,n){let r=document.createElement(`canvas`);r.width=Math.max(1,t),r.height=Math.max(1,n);let i=r.getContext(`2d`,{willReadFrequently:!0});i.imageSmoothingEnabled=!1,e(i);let a=i.getImageData(0,0,r.width,r.height).data,o=new Uint8Array(r.width*r.height);for(let e=0;e<o.length;e++)o[e]=+(a[e*4+3]>127);return{w:r.width,h:r.height,d:o}}function rr(e,t,n,r,i,a,o=null,s=.5,c=!1){for(let l=-2;l<t.h+2;l++)for(let u=-2;u<t.w+2;u++){if(Hr(t,u,l)){F(e,n+u,r+l,i);continue}let d=Hr(t,u-1,l)||Hr(t,u+1,l)||Hr(t,u,l-1)||Hr(t,u,l+1),f=d||Hr(t,u-1,l-1)||Hr(t,u+1,l-1)||Hr(t,u-1,l+1)||Hr(t,u+1,l+1);a&&(c?f:d)?F(e,n+u,r+l,a):o&&(a?f||ir(t,u,l):d||f)&&I(e,n+u,r+l,o,s)}}function ir(e,t,n){return Hr(e,t-2,n)||Hr(e,t+2,n)||Hr(e,t,n-2)||Hr(e,t,n+2)}function ar(e,t,n,r,i=[]){e=Math.round(e),t=Math.round(t),n=Math.round(n),r=Math.round(r);let a=Math.abs(n-e),o=-Math.abs(r-t),s=e<n?1:-1,c=t<r?1:-1,l=a+o;for(;;){let u=i[i.length-1];if((!u||u[0]!==e||u[1]!==t)&&i.push([e,t]),e===n&&t===r)break;let d=2*l;d>=o&&(l+=o,e+=s),d<=a&&(l+=a,t+=c)}return i}function or(e){if(e.length<3)return e;let t=[e[0]];for(let n=1;n<e.length-1;n++){let r=t[t.length-1],i=e[n+1];Math.abs(r[0]-i[0])===1&&Math.abs(r[1]-i[1])===1||t.push(e[n])}return t.push(e[e.length-1]),t}function sr(e,t=!1){let n=[],r=e.length/2;for(let i=0;i<r-1+ +!!t;i++){let t=(i+1)%r;ar(e[i*2],e[i*2+1],e[t*2],e[t*2+1],n)}return n}function cr(e,t){let n=[],r=null;for(let i=0;i<=t;i++){let a=e(i/t);r&&ar(r[0],r[1],a[0],a[1],n),r=a}return or(n)}function lr(e,t,n,r,i,a){return cr(o=>{let s=i+(a-i)*o;return[e+Math.cos(s)*n,t+Math.sin(s)*r]},Math.max(12,Math.ceil(Math.abs(a-i)*Math.max(n,r)*1.5)))}function ur(e,t,n,r=0,i=0){e.fillStyle=Or(n);for(let[n,a]of t)e.fillRect(r+n,i+a,1,1)}function dr(e,t,n,r,i,a){ur(e,ar(t,n,r,i),a)}function fr(e,t,n){let r=[],i=n,a=0,o=1-n,s=/* @__PURE__ */ new Set,c=(e,t)=>{let n=(e+512)*2048+t+512;s.has(n)||(s.add(n),r.push([e,t]))};for(;i>=a;){for(let[n,r]of[[i,a],[a,i],[-a,i],[-i,a],[-i,-a],[-a,-i],[a,-i],[i,-a]])c(e+n,t+r);a++,o<0?o+=2*a+1:(i--,o+=2*(a-i)+1)}return r}function pr(e,t,n){let r=!1,i=e.length/2;for(let a=0,o=i-1;a<i;o=a++){let i=e[a*2],s=e[a*2+1],c=e[o*2],l=e[o*2+1];s>n!=l>n&&t<(c-i)*(n-s)/(l-s)+i&&(r=!r)}return r}function mr(e,t=!1,n=`T1`){let r=Ur[e%3],i=(e,t)=>e>=0&&t>=0&&e<24&&t<30&&pr(r,e+.5,t+.5),a=11.52,o=13.8,s=Wr[e%3].map(e=>[r[e*2],r[e*2+1]]),c=s.map(([e,t])=>Math.atan2(t-o,e-a)).sort((e,t)=>e-t),l=(e,t)=>{let n=Math.atan2(t+.5-o,e+.5-a),r=0;for(;r<c.length&&n>c[r];)r++;return r%c.length},u=/* @__PURE__ */ new Set;for(let[e,t]of s)for(let[n,r]of or(ar(11.02,13.3,e-.5+(e>a?-1:1),t-.5+(t>o?-1:1))))u.add(r*24+n);let d=[],f=Gr[e%3],p=(e,t)=>{let n=f[t-9];return!!n&&n[e-6]===`#`};for(let n=0;n<30;n++){let r=``,a=-1,s=-1;for(let e=0;e<24;e++)i(e,n)&&(a<0&&(a=e),s=e);for(let d=0;d<24;d++){if(!i(d,n)){r+=`.`;continue}let f=!i(d-1,n)||!i(d+1,n)||!i(d,n-1)||!i(d,n+1);if(t){r+=f&&(d+n)%2==0?`o`:`.`;continue}if(p(d,n)){r+=`m`;continue}if(p(d-1,n)||p(d+1,n)||p(d,n-1)||p(d,n+1)){r+=`w`;continue}let m=n>3&&n<26;if(d===a&&m){r+=`p`;continue}if(d===s&&m){r+=`c`;continue}if(f&&!i(d,n-1)){r+=`w`;continue}if(f&&!i(d,n+1)){r+=n>24?`k`:`i`;continue}if(u.has(n*24+d)){r+=n<o?`w`:`l`;continue}let h=l(d,n),g=c[(h+c.length-1)%c.length],_=c[h],v=(g+_)/2;_<g&&(v+=Math.PI);let y=Math.cos(v- -2.2)+(Jn(e*97+h)-.5)*.5;r+=y>.55?`w`:y>-.35?`l`:h%2?`i`:`k`}d.push(r)}return t?{rows:d,key:{o:n}}:{rows:d,key:{w:`W0`,l:`W1`,i:`IC0`,k:`K8`,p:`P4`,c:`C1`,m:`K7`}}}function hr(e,t,n=`T1`){let r=`${e}${t?`L`+n:`W`}`,i=Kr.get(r);return i||Kr.set(r,i=mr(e,t,n)),i}function gr(e,t,n,r,i,a){let o=3.4+r*.7,s=Math.floor((i+r*1.3)%o*8);if(s>=8)return;let c=s/7,l=Math.round(4+c*15),u=Math.round(5+c*14),d=(e,t)=>{let n=a.rows[t];return!!n&&n[e]!==void 0&&n[e]!==`.`},f=s<2||s>5?1:2;d(l,u)&&F(e,t+l,n+u,`W0`);for(let r=1;r<=f;r++)for(let[i,a]of[[r,0],[-r,0],[0,r],[0,-r]])d(l+i,u+a)&&F(e,t+l+i,n+u+a,r===1?`W0`:`W1`)}function _r(e,t,n,r){if(t<0||n<0||t>=e.w||n>=e.h)return;let i=n*e.w+t;Xr[r]>Xr[e.d[i]]&&(e.d[i]=r)}function vr(e){let t=(t,n)=>t>=0&&n>=0&&t<e.w&&n<e.h?e.d[n*e.w+t]:0,n=[];for(let r=0;r<e.h;r++)for(let i=0;i<e.w;i++){if(t(i,r)!==1)continue;let e=t(i,r-1)===1||t(i,r+1)===1;t(i,r+1)!==1&&n.push([i,r+1]),e&&t(i+1,r)!==1&&n.push([i+1,r])}for(let[t,r]of n)_r(e,t,r,3)}function yr(e,t,n,r){let i=t-Math.floor((r-1)/2),a=n-Math.floor((r-1)/2);for(let t=0;t<r;t++)for(let n=0;n<r;n++){let o=i+n,s=a+t;if(o<0||s<0||o>=e.w||s>=e.h)continue;let c=n===0||t===0||n===r-1||t===r-1;e.d[s*e.w+o]=+!!c}}function br(e,t,n,r){for(let i=0;i<r;i++)for(let a=0;a<r;a++){let o=(a===0||a===r-1)&&(i===0||i===r-1);r>=4&&o||_r(e,t-Math.floor((r-1)/2)+a,n-Math.floor((r-1)/2)+i,1)}}function xr(e,t){if(t<(e===`cooldown`?11:14)||![`design`,`code`,`motion`,`cooldown`].includes(e))return null;let n={w:t,h:t,d:new Uint8Array(t*t)},r=t/24;if(e===`code`){let e=Math.max(3,Math.round(5*r)),i=Math.floor((t-1)/2),a=Math.max(1,Math.round(2*r));for(let r=0;r<=e;r++)_r(n,a+r,i-r,1),_r(n,a+r,i+r,1),_r(n,t-1-a-r,i-r,1),_r(n,t-1-a-r,i+r,1);let o=t>=28?5:t>=20?4:3,s=o*4,c=i-Math.floor((s-1)/2),l=Math.floor(t/2)+1;for(let e=0;e<s;e++)_r(n,l-Math.floor(e/o),c+e,1)}else if(e===`design`){let e=e=>e*r-.5,i=[3,18,7,3,17,21,21,6].map(e),a=[3,18,5.5,-3,18.5,27,21,6].map(e),o=cr(e=>{let t=(1-e)**3,n=3*(1-e)**2*e,r=3*(1-e)*e*e,i=e**3;return[t*a[0]+n*a[2]+r*a[4]+i*a[6],t*a[1]+n*a[3]+r*a[5]+i*a[7]]},90);for(let[e,t]of o)_r(n,e,t,1);let s=t>=28?5:t>=20?4:3,c=t>=30?3:2,[l,u,d,f,p,m,h,g]=i.map(e=>Math.round(e));vr(n);let _=(e,t,r,i)=>{let a=or(ar(e,t,r,i));a.forEach(([e,t],r)=>{r<2||r>a.length-3||_r(n,e,t,2)})};return _(l,u,d,f),_(h,g,p,m),yr(n,l,u,s),yr(n,h,g,s),br(n,d,f,c),br(n,p,m,c),n}else if(e===`cooldown`){let e=Math.max(4,Math.round(7.5*r)),i=t>=28?4:t>=20?3:2,a=t>=16,o=[];for(let t=1;t<=Math.max(2,e-(a?4:3));t++)o.push([0,-t]);for(let t=0;t<=Math.max(2,Math.round(e*.4));t++)o.push([t,0]);let s=(e,t)=>e*1024+t,c=e=>{if(!a)return e;let t=new Set(e.map(([e,t])=>s(e,t))),n=[...e];for(let[r,i]of e)t.has(s(r,i+1))||n.push([r,i+1]),(t.has(s(r,i-1))||t.has(s(r,i+1)))&&!t.has(s(r+1,i))&&n.push([r+1,i]);return n},l=(e,t,n)=>e.every(([e,r])=>t.every(([t,i])=>Math.max(Math.abs(e-t),Math.abs(r-i))>=n)),u=c(o),d=t=>{let n=[];for(let r=1;r<=i;r++)n.push([t+i-r,-e+r]);return n},f=0;for(;f<12&&!l(c(d(f)),u,a?3:2);)f++;let p=f+i,m=[];for(let t=1;t<=p;t++)m.push([t,-e]);for(let t=1;t<=i;t++)m.push([p-t,-e-t],[p-t,-e+t]);let h=fr(0,0,e),g=([e,t])=>(Math.atan2(t,e)*180/Math.PI+90+720)%360,_=e=>m.some(([t,n])=>t===e[0]&&n===e[1])||l([e],m,3),v=10;for(;v<180&&!h.every(e=>g(e)>180||g(e)<v||_(e));)v++;let y=[];for(let e of h)(g(e)<.5||g(e)>=v)&&y.push(e);y.push(...m,...o);let b=99,x=-99,S=99,C=-99;for(let[e,t]of y)b=Math.min(b,e),x=Math.max(x,e),S=Math.min(S,t),C=Math.max(C,t);let w=Math.floor((t-(x-b+1))/2)-b,T=Math.floor((t-(C-S+1))/2)-S;for(let[e,t]of y)_r(n,e+w,t+T,1);if(!a)return n}else{let e=Math.max(4,Math.round(6*r-.01)),i=Math.max(3,Math.round(5*r-.01)),a=2*e+1+2*i,o=Math.floor((t-a)/2)+e,s=Math.floor((t-1)/2);for(let t=0;t<3;t++)for(let[r,a]of fr(o+t*i,s,e))_r(n,r,a,t<2?4:1)}return vr(n),n}function Sr(e,t){let n=e+`@`+t,r=Yr.get(n);if(r)return r;let i=xr(e,t);if(i)return Yr.set(n,i),i;let a={w:t,h:t,d:new Uint8Array(t*t)},o=Jr[e];if(o){let e=Math.max(12,Math.round(t*.58)),r=Sr(o[0],e),i=Sr(o[1],e),s=(t>=30?3:t>=24?2:1)+(t>=24&&o.includes(`code`)?1:0),c=(t,n)=>t>=0&&n>=0&&t<e&&n<e&&r.d[n*e+t]>0,l=t=>{for(let n=0;n<e;n++)for(let r=0;r<e;r++)if(i.d[n*e+r]){for(let e=-s;e<=s;e++)for(let i=-s;i<=s;i++)if(c(r+t+i,n+t+e))return!0}return!1},u=Math.round(e*.3);for(;u<t-e&&l(u);)u++;let d=e+u,f=new Uint8Array(d*d);for(let t=0;t<e;t++)for(let n=0;n<e;n++)r.d[t*e+n]&&(f[t*d+n]=r.d[t*e+n]),i.d[t*e+n]&&(f[(t+u)*d+n+u]=i.d[t*e+n]);let p=d,m=-1,h=d,g=-1;for(let e=0;e<d;e++)for(let t=0;t<d;t++)f[e*d+t]&&(t<p&&(p=t),t>m&&(m=t),e<h&&(h=e),e>g&&(g=e));let _=Math.floor((t-(m-p+1))/2)-p,v=Math.floor((t-(g-h+1))/2)-h;for(let e=0;e<d;e++)for(let n=0;n<d;n++){let r=f[e*d+n],i=n+_,o=e+v;r&&i>=0&&o>=0&&i<t&&o<t&&(a.d[o*t+i]=r)}return Yr.set(n,a),a}let s=t/24,c=e=>e*s-.5,l=(e,n)=>{for(let[r,i]of e)r>=0&&i>=0&&r<t&&i<t&&(a.d[i*t+r]===0||n===1)&&(a.d[i*t+r]=n)};for(let t of qr[e]||qr.keep){let e=t.dim?2:1;if(t.k===`l`||t.k===`L`){let n=[];for(let e=0;e<t.p.length;e++)n.push(c(t.p[e]));l(or(sr(n,t.k===`L`)),e)}else if(t.k===`b`){let[n,r,i,a,o,s,u,d]=t.p.map(c);l(cr(e=>{let t=(1-e)**3,c=3*(1-e)**2*e,l=3*(1-e)*e*e,f=e**3;return[t*n+c*i+l*o+f*u,t*r+c*a+l*s+f*d]},40),e)}else if(t.k===`a`){let[n,r,i,a,o]=t.c;l(lr(c(n),c(r),i*s,i*s,a,o),e)}else if(t.k===`r`){let[e,n,r,i]=t.p,a=Math.round(c(e)),o=Math.round(c(n)),s=Math.round(c(e+r)),u=Math.round(c(n+i));l(sr([a,o,s,o,s,u,a,u],!0),1)}else if(t.k===`d`){let[e,n,r]=t.p,i=Math.max(.9,r*s),a=[];for(let t=Math.floor(c(n)-i);t<=Math.ceil(c(n)+i);t++)for(let r=Math.floor(c(e)-i);r<=Math.ceil(c(e)+i);r++)Math.hypot(r-c(e),t-c(n))<=i+.15&&a.push([r,t]);l(a,1)}}return t>=22&&vr(a),Yr.set(n,a),a}function Cr(e,t,n,r,i,a,o,s,c=.25,l=-1,u=a){let d=Sr(t,i),f={w:d.w,h:d.h,d:d.d.map(e=>+(e===1))},p=(e,t)=>e>=0&&t>=0&&e<d.w&&t<d.h?d.d[t*d.w+e]:0;if(s)for(let t=-1;t<=d.h;t++)for(let i=-1;i<=d.w;i++)p(i,t)||(p(i-1,t)||p(i+1,t)||p(i,t-1)||p(i,t+1))&&I(e,n+i,r+t,s,c);for(let t=0;t<d.h;t++)for(let i=0;i<d.w;i++){let s=d.d[t*d.w+i];s===1?F(e,n+i,r+t,a):s===2?F(e,n+i,r+t,u):s===3&&o?F(e,n+i,r+t,o):s===4&&F(e,n+i,r+t,o||a)}if(l>=0){let t=0;for(let e=0;e<f.d.length;e++)f.d[e]&&t++;if(t){let i=Math.floor(l*t)%t;for(let t=0;t<f.d.length;t++)if(f.d[t]&&i--===0){F(e,n+t%d.w,r+Math.floor(t/d.w),`W0`);break}}}}function wr(e,t,n,r,i){let a=Zr[t];if(a){e.fillStyle=Or(i);for(let t=0;t<a.length;t++)for(let i=0;i<a[t].length;i++)a[t][i]===`#`&&e.fillRect(Math.round(n)+i,Math.round(r)+t,1,1)}}function Tr(e,t,n,r,i,a){let o=e.canvas.width,s=e.canvas.height,c=Math.max(0,Math.floor(t)),l=Math.max(0,Math.floor(n)),u=Math.min(o,Math.ceil(t+r)),d=Math.min(s,Math.ceil(n+i));if(u<=c||d<=l)return;let f=e.getImageData(c,l,u-c,d-l),p=f.data,m=e=>.3*p[e]+.59*p[e+1]+.11*p[e+2],h=Or(a),g=.3*parseInt(h.slice(1,3),16)+.59*parseInt(h.slice(3,5),16)+.11*parseInt(h.slice(5,7),16),_=-1,v=1e9;for(let e=0;e<p.length;e+=4)p[e+3]>127&&m(e)<v&&(v=m(e),_=e);if(_<0)return;let[y,b,x]=[p[_],p[_+1],p[_+2]],S=!1;for(let e=0;e<p.length;e+=4)p[e+3]>127&&m(e)>g+.5&&(p[e]=y,p[e+1]=b,p[e+2]=x,S=!0);S&&e.putImageData(f,c,l)}var Er,Dr,Or,R,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr=o(()=>{mn(),qn(),Ot(),Er=P,Dr=e=>Er=e||P,Or=e=>Er[e]??P[e]??e,R=zn.NIGHT5,kr=zn.NIGHT7,Ar=zn.NIGHT7I,jr=zn.NIGHT9,Mr=zn.NIGHT12,Nr=zn.NUMERAL32,zn.KEYS9,Pr=(e,t=0,n=1)=>e<t?t:e>n?n:e,Fr=e=>1-(1-Pr(e))**3,Ir=e=>Pr(e)*Pr(e),Lr=(e,t,n)=>Pr(Math.floor((e-t)/n*4+1e-6)/4),Rr=(e,t,n,r,i)=>Yn(e,t,n,r,1,i),zr=(e,t,n,r,i)=>Yn(e,t,n,1,r,i),Br=[],Vr=0,Hr=(e,t,n)=>t>=0&&n>=0&&t<e.w&&n<e.h?e.d[n*e.w+t]:0,Ur=[[6,2,13,0,17,1,18,3,21,3,23,7,23.5,20,21.5,26,16,29.5,7,29.5,2.5,26.5,.5,18,1,8],[1,8,6,3,14,.5,19.5,1.5,23,5.5,23.5,11,20.5,18.5,14.5,25.5,10.5,29.5,7.5,27.5,3,19.5,.5,13],[5.5,4,12,1,18.5,2,22.5,6.5,23.5,14,22.5,22,18.5,27.5,11,29.5,4.5,27.5,1,21.5,.5,11]],Wr=[[1,5,7,10,12],[1,4,6,9,11],[1,3,5,8,10]],Gr=[[`.....#.....`,`...##.##...`,`.##.....##.`,`#......####`,`#.....#...#`,`#....#....#`,`#...#.....#`,`####......#`,`.##.....##.`,`...##.##...`,`.....#.....`],[`.....#.....`,`..#..#..#..`,`...#.#.#...`,`.#..###..#.`,`..#.###.#..`,`###########`,`..#.###.#..`,`.#..###..#.`,`...#.#.#...`,`..#..#..#..`,`.....#.....`],[`..####.....`,`..####.....`,`..####.....`,`..####.....`,`......##...`,`......###..`,`......##...`,`..####.....`,`..####.....`,`..####.....`,`..####.....`]],Kr=/* @__PURE__ */ new Map,qr={design:[{k:`b`,p:[3,18,7,3,17,21,21,6]},{k:`l`,p:[3,18,7,3],dim:!0},{k:`l`,p:[21,6,17,21],dim:!0},{k:`r`,p:[1.6,16.6,2.8,2.8]},{k:`r`,p:[19.6,4.6,2.8,2.8]},{k:`d`,p:[7,3,1.1]},{k:`d`,p:[17,21,1.1]}],code:[{k:`l`,p:[8,7,3,12,8,17]},{k:`l`,p:[16,7,21,12,16,17]},{k:`l`,p:[14,4.5,10,19.5]}],motion:[{k:`a`,c:[5.6,12,3.4,0,6.2832],dim:!0},{k:`a`,c:[10.4,12,4.4,0,6.2832]},{k:`a`,c:[16.4,12,5.4,0,6.2832]}],"3d":[{k:`L`,p:[12,2.5,20.5,8,18,19.5,6,19.5,3.5,8]},{k:`l`,p:[12,2.5,12,12.5]},{k:`l`,p:[3.5,8,12,12.5,20.5,8]},{k:`l`,p:[6,19.5,12,12.5,18,19.5]}],speed:[{k:`l`,p:[4.5,6,10.5,12,4.5,18]},{k:`l`,p:[12,6,18,12,12,18]}],power:[{k:`L`,p:[12,2.5,13.8,10.2,21.5,12,13.8,13.8,12,21.5,10.2,13.8,2.5,12,10.2,10.2]}],cooldown:[{k:`a`,c:[12,13.5,7.5,-.35,4.7124]},{k:`l`,p:[12,6,18,6]},{k:`l`,p:[15,3,18,6,15,9]},{k:`l`,p:[12,9.5,12,13.5,15,13.5]}],area:[{k:`l`,p:[3,8,3,3,8,3]},{k:`l`,p:[16,3,21,3,21,8]},{k:`l`,p:[21,16,21,21,16,21]},{k:`l`,p:[8,21,3,21,3,16]},{k:`l`,p:[9,12,15,12]},{k:`l`,p:[12,9,12,15]}],magnet:[{k:`l`,p:[6,3.5,6,12]},{k:`a`,c:[12,12,6,3.1416,0]},{k:`l`,p:[18,12,18,3.5]},{k:`l`,p:[6,3.5,9.5,3.5,9.5,12]},{k:`a`,c:[12,12,2.5,3.1416,0]},{k:`l`,p:[14.5,12,14.5,3.5,18,3.5]},{k:`l`,p:[6,7.5,9.5,7.5]},{k:`l`,p:[14.5,7.5,18,7.5]}],recovery:[{k:`b`,p:[12,20,5,15,3,11,4.5,8]},{k:`b`,p:[4.5,8,6,5,10,5,12,8.5]},{k:`b`,p:[12,8.5,14,5,18,5,19.5,8]},{k:`b`,p:[19.5,8,21,11,19,15,12,20]}],charge:[{k:`L`,p:[13.5,2.5,5.5,13.5,11.5,13.5,10.5,21.5,18.5,10.5,12.5,10.5]}],keep:[{k:`L`,p:[12,2.5,19.5,12,12,21.5,4.5,12]},{k:`l`,p:[4.5,12,19.5,12]},{k:`L`,p:[12,2.5,9.5,12,12,21.5,14.5,12]}]},qr.rest=qr.recovery,qr.core=qr.keep,Jr={algorithmic:[`design`,`code`],spline:[`design`,`motion`],reaper:[`design`,`3d`],automation:[`code`,`motion`],procedural:[`code`,`3d`],spatial:[`motion`,`3d`]},Yr=/* @__PURE__ */ new Map,Xr=[0,4,2,3,1],Zr={"?":[`.###.`,`#...#`,`....#`,`..##.`,`..#..`,`.....`,`..#..`],"‹":[`..#`,`.#.`,`#..`,`.#.`,`..#`],"›":[`#..`,`.#.`,`..#`,`.#.`,`#..`],pause:[`##.##`,`##.##`,`##.##`,`##.##`,`##.##`,`##.##`],starFill:[`..#..`,`.###.`,`#####`,`.###.`,`..#..`],starEmpty:[`..#..`,`.#.#.`,`#...#`,`.#.#.`,`..#..`],star4:[`..#..`,`..#..`,`##.##`,`..#..`,`..#..`],chevron:[`#.............#`,`.##.........##.`,`...##.....##...`,`.....##.##.....`,`.......#.......`],arrowNE:[`..###`,`...##`,`..#.#`,`.#...`,`#....`]}});function $r(e,t,n,r){n>=0&&n<e.length&&t>=0&&t<na(e)&&(e[n][t]=r)}function ei(e,t,n){let r=n??Math.max(...e.map(e=>e.length));return e.map((e,n)=>{if(e.length!==r)throw Error(`row ${n} is ${e.length} wide, not ${r}: "${e}"`);return[...e].map(e=>{if(e===`.`)return null;let n=t[e];if(n===void 0)throw Error(`no key for "${e}"`);return n||null})})}function ti(e,t=0,n=0){let r={},i={},a=0;return{rows:e.map(e=>e.map(e=>{if(!e)return`.`;let t=i[e];return t||(t=aa[a++],i[e]=t,r[t]=e),t}).join(``)),key:r,ox:t,oy:n}}function ni(e,t,n,r=0,i=0){let a=n.length/2,o=1/0,s=-1/0;for(let e=0;e<a;e++)o=Math.min(o,n[2*e+1]+i),s=Math.max(s,n[2*e+1]+i);for(let c=Math.max(0,Math.floor(o));c<=Math.min(e.length-1,Math.ceil(s));c++){let o=c+.5,s=[];for(let e=0;e<a;e++){let t=n[2*e]+r,c=n[2*e+1]+i,l=n[2*((e+1)%a)]+r,u=n[2*((e+1)%a)+1]+i;(c<=o&&u>o||u<=o&&c>o)&&s.push(t+(o-c)/(u-c)*(l-t))}s.sort((e,t)=>e-t);for(let n=0;n+1<s.length;n+=2)for(let r=Math.ceil(s[n]-.5);r<Math.ceil(s[n+1]-.5);r++)$r(e,r,c,t)}}function ri(e,t,n,r,i,a){let o=Math.abs(r-t),s=-Math.abs(i-n),c=t<r?1:-1,l=n<i?1:-1,u=o+s;for(;$r(e,t,n,a),t!==r||n!==i;){let e=2*u;e>=s&&(u+=s,t+=c),e<=o&&(u+=o,n+=l)}}function ii(e,t,n=0,r=0){for(let i=0;i<t.length;i+=3)$r(e,t[i]+n,t[i+1]+r,t[i+2])}function ai(e,t,n=0,r=0){for(let i=0;i<t.length;i++)for(let a=0;a<t[i].length;a++)t[i][a]&&$r(e,a+n,i+r,t[i][a])}function oi(e,t,n,r,i=999){let a=ra(e);for(let o=t;o<=n;o++){for(let t=0;t<e.length;t++)t<=i&&(a[t][o]=null);for(let t=0;t<e.length;t++)t<=i&&e[t][o]&&$r(a,o,t+r,e[t][o])}return a}function si(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=(r&63)<<6,l=(r+1&63)<<6,u=sa[c|n&63],d=sa[c|n+1&63],f=sa[l|n&63],p=sa[l|n+1&63];return u+(d-u)*o+(f-u)*s+(u-d-f+p)*o*s}function ci(e){return e.map(e=>e.map(e=>e===`a`||e===`h`?null:e))}function li(e,t,n={}){let r=e=>e*Math.PI/180,i=n.L1??7,a=n.L2??6,o=n.arm??`a`,s=n.hand??`h`,c=n.finger??o,l=t*(n.bend??.45),[u,d]=n.from??Ca,f=[Math.cos(r(l)),Math.sin(r(l))],p=[Math.cos(r(t)),Math.sin(r(t))],m=u+f[0]*i,h=d+f[1]*i,g=m+p[0]*a,_=h+p[1]*a,v=[],y=(t,n,r)=>{let i=ia(e,t,n);(!i||i===`g`)&&($r(e,t,n,r),r===o&&v.push([t,n]))},b=(e,t,n,r,i,a,s)=>{let c=n-e,l=r-t,u=Math.hypot(c,l)||1;if(Math.abs(l)<=Math.abs(c)){let r=Math.ceil(Math.min(e,n)-.5),d=Math.ceil(Math.max(e,n)-.5)-1;for(let n=r;n<=d;n++){let r=(n+.5-e)/c,d=Math.round(t+l*r-1),f=i+r*u;y(n,d,o),f<a&&y(n,d+1,o),f<s&&y(n,d+2,o)}}else{let n=Math.ceil(Math.min(t,r)-.5),d=Math.ceil(Math.max(t,r)-.5)-1,f=l>0;for(let r=n;r<=d;r++){let n=(r+.5-t)/l,d=Math.round(e+c*n-1),p=i+n*u;y(f?d+1:d,r,o),p<a&&y(f?d:d+1,r,o),p<s&&y(f?d-1:d+2,r,o)}}};b(u,d,m+f[0]*.5,h+f[1]*.5,0,99,1.5),b(m,h,g,_,i,i+a-1.5,0);let x=[p[1],-p[0]],S=(t,n)=>{let r=ia(e,t,n);return!r||r===`g`},C=e=>(e[0]+.5-u)*p[0]+(e[1]+.5-d)*p[1],w=e=>(e[0]+.5-u)*x[0]+(e[1]+.5-d)*x[1],T=(e,t)=>!S(e,t);for(let t=0;t<6;t++){let t=e.length,n=na(e),r=new Int32Array(n*t).fill(-1),i=[];for(let e=0;e<t;e++)for(let t=0;t<n;t++){if(!T(t,e)||r[e*n+t]>=0)continue;let a=i.length,o=[t,e],s=0;for(r[e*n+t]=a;o.length;){let e=o.pop(),t=o.pop();s++;for(let[i,s]of[[1,0],[-1,0],[0,1],[0,-1]]){let c=t+i,l=e+s;T(c,l)&&r[l*n+c]<0&&(r[l*n+c]=a,o.push(c,l))}}i.push(s)}let a=i.indexOf(Math.max(...i)),s=(t,n)=>[[1,0],[-1,0],[0,1],[0,-1]].some(([r,i])=>ia(e,t+r,n+i)===`k`),c=null;for(let e of v.slice().sort((e,t)=>C(e)-C(t)))if(r[e[1]*n+e[0]]!==a){for(let[i,o]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let l=e[0]+i,u=e[1]+o;if(l<0||u<0||l>=n||u>=t||r[u*n+l]!==a)continue;let d=[[l,e[1]],[e[0],u]].filter(e=>S(e[0],e[1]));d.sort((e,t)=>(s(e[0],e[1])?-9:0)+w(t)-((s(t[0],t[1])?-9:0)+w(e))),d.length&&(c=d[0]);break}if(c)break}if(!c)break;$r(e,c[0],c[1],o),v.push([c[0],c[1]])}let E=v[0]??[Math.round(g),Math.round(_)];for(let e of v)(C(e)>C(E)+1e-6||Math.abs(C(e)-C(E))<=1e-6&&w(e)>w(E))&&(E=e);let D=[[-1,0],[-1,1],[2,0],[2,1],[0,-1],[1,-1],[0,2],[1,2]],O=[E[0]+.5+p[0]*1.5+x[0]*.5,E[1]+.5+p[1]*1.5+x[1]*.5],k=0,A=0,ee=1/0;for(let[e,t]of D){let n=E[0]-e,r=E[1]-t;if(!(S(n,r)&&S(n+1,r)&&S(n,r+1)&&S(n+1,r+1)))continue;let i=Math.hypot(n+1-O[0],r+1-O[1]);i<ee&&([ee,k,A]=[i,n,r])}for(let t=0;t<2;t++)for(let n=0;n<2;n++)$r(e,k+n,A+t,s);let j=Math.round(Math.max(-90,Math.min(90,t-(n.cock??(t>45?15:45))))/45)*45;for(let[e,t]of{"-90":[[0,-1],[1,-1],[1,-2]],"-45":[[1,-1],[2,-1],[2,-2],[3,-2]],0:[[2,0],[3,0],[2,1]],45:[[1,2],[2,2],[2,3],[3,3]],90:[[0,2],[1,2],[1,3]]}[String(j)])y(k+e,A+t,c);return n.glow&&ui(e,k,A),{wrist:[g,_],palm:[k,A]}}function ui(e,t,n){for(let r=-1;r<=2;r++)for(let i=-1;i<=2;i++)i>=0&&i<2&&r>=0&&r<2||(i!==-1&&i!==2||r!==-1&&r!==2)&&!ia(e,t+i,n+r)&&$r(e,t+i,n+r,`g`)}function di(e,t,n,r,i,a=999){let o=ra(e);for(let r=t;r<=n;r++)for(let t=0;t<e.length;t++)t<=a&&e[t][r]&&i.includes(e[t][r])&&(o[t][r]=null);for(let s=t;s<=n;s++)for(let t=0;t<e.length;t++){let n=e[t][s];t>a||!n||!i.includes(n)||$r(o,s,t+r,n)}return o}function fi(){let e=va(ga),t=[e,di(e,ya[0],7,-1,[`f`]),e,di(e,ya[0],5,1,[`m`])],n=di(e,ya[0],11,1,[`f`]);n=di(n,ya[0],6,1,[`f`]),n=di(n,ba[0],13,-1,[`m`]);for(let e=19;e<=34;e++){let t=fa-1;for(;t>0&&n[t][e]!==`m`;)t--;t>12+pa&&$r(n,e,t,null)}let r=di(n,ya[0],4,1,[`m`]),i=oi(e,ya[0],8,2);i=oi(i,10,14,1),i=di(i,xa[0],xa[1],-1,[`k`]),i=ci(i),li(i,-26,{bend:.25,L1:7,L2:5.5});let a=di(i,ya[0],5,-1,[`f`]),o=(e,t)=>t>0?oi(e,Sa+2,la-1,-t):e,s=t=>oi(o(oi(e,32,la-1,-t),t),ba[0],13,t),c=[];for(let t of[-60,-30,0,30,60])for(let n of[0,1]){if(t===0){let t=ra(e),r=pi(t,`h`);n&&r&&ui(t,r[0],r[1]),c.push(t);continue}let r=ci(e),i=t<0?-1:+(t>0);i&&(r=di(r,xa[0],xa[1],i,[`k`])),li(r,t===0?-6:t,{L1:7,L2:n?7:6,glow:!!n}),c.push(r)}let l=va(ha([`........................................`,`..................................kkk...`,`..ffff...........................kkkkk..`,`..ffffff.........................kkkkk..`,`.....ffffffff....................kkkkk..`,`........fffffff.................mmkkk...`,`..........fffffff...........mmmmmm......`,`............fffffmmm.....mmmmmmmm.......`,`...............ffmmmmmmmmmmmwwmmm.......`,`..............mmmmmmmmmmmmmmwwmmm.......`,`.........mmmmmmmmmmmmmmmmmmmmmmm........`,`......mmmmmmmmmmmmmmmmmmmmmmmmmm........`,`.mmmmmmmmmmmmm..........................`,`.mmmmmm.................................`,`.m......................................`]));li(l,30,{from:[34,11+ua],bend:.5,L1:7,L2:5.5,arm:`f`,hand:`q`,finger:`f`}),li(l,-36,{from:[35,8+ua],bend:.55,L1:7,L2:5.5});let u=oi(e,ba[0],13,-1);return u=di(u,xa[0],xa[1],1,[`k`]),u=ci(u),li(u,34,{bend:.2,L1:7,L2:5.5,cock:0}),{fly:t,fast:[n,r],slow:[i,a],up:[s(1)],down:[s(-1)],cast:c,spread:[l],hurt:[u,u,u,u]}}function pi(e,t){for(let n=0;n<e.length;n++)for(let r=0;r<na(e);r++)if(e[n][r]===t)return[r,n];return null}function mi(e,t,n,r={}){let i=e.length,a=na(e),o=(t,n)=>ia(e,t,n),s=(e,t)=>{let n=o(e,t);return!!n&&n!==`g`},c=Math.floor(t*(r.od?12:6))/6,l=pi(e,`w`)||ma,u=l[0]+.5,d=l[1]+.5,f=+!!r.od,p=r.hurt?`E1`:`C1`,m=99,h=-1,g=99,_=-1;for(let e=0;e<i;e++)for(let t=0;t<a;t++)o(t,e)===`k`&&(m=Math.min(m,t),h=Math.max(h,t),g=Math.min(g,e),_=Math.max(_,e));let v=Math.floor(c*6*.7+n*7.3),y=(e,t)=>((e+Math.round(.6*t)+v)%7+7)%7<2,b=(e,t)=>{let n=0;for(;s(e,t-n-1)&&o(e,t-n-1)!==`k`;)n++;return n},x=(e,t)=>{let n=0;for(;s(e,t+n+1)&&o(e,t+n+1)!==`k`;)n++;return n},S=ta(a,i);for(let e=0;e<i;e++)for(let t=0;t<a;t++){let n=o(t,e);if(!n)continue;if(n===`g`){S[e][t]=t+e&1?`D4`:`C1`;continue}if(n===`w`||n===`h`){S[e][t]=`W0`;continue}if(n===`q`){S[e][t]=`C1`;continue}let i=!s(t,e-1),a=!s(t,e+1),c=!s(t+1,e),l=!s(t-1,e);if(n===`k`){let n=(n,r)=>{let i=o(t+n,e+r);return i===`a`||i===`h`};if(n(1,0)||n(0,1)||n(-1,0)||n(0,-1)||n(1,1)){S[e][t]=`D1`;continue}let s=h-t,u=e-g,d=`D3`;s<=1&&u<=1&&(i||c)?d=s===0&&u<=1&&!(s===0&&u===0&&l)&&r.glint!==!1?`W0`:`C1`:i||c?d=`C1`:a||l?d=l&&a?`D1`:`D2`:s<=2&&u<=2&&(d=`D4`),f&&d===`D3`&&(d=`D4`),r.hurt&&d===`C1`&&(d=`E1`),S[e][t]=d;continue}let m=b(t,e),_=x(t,e),v=m+_+1;if(n===`f`){let n=m===0?3:_===0?1:m<=_?2:1;m>0&&y(t,e)&&(n=Math.min(3,n+1)),S[e][t]=Ta[Math.min(4,n-1+f)];continue}let C=t>=19,w;w=m===0?C||n===`a`?5:3:_===0&&v>=3?0:m/Math.max(1,v-1)<=.5?2:1,w>0&&w<5&&m>0&&y(t,e)&&(w=Math.min(3,w+1)),c&&C&&w>0&&(w=5),Math.hypot(t+.5-u,(e+.5-d)*1.25)<2.4&&w<5&&(w=3),r.cast&&Math.hypot(t-r.cast[0],e-r.cast[1])<3.2&&w<5&&(w=Math.max(w,3)),w<5&&(w=Math.min(4,w+f));let T=w===5?p:w===0?`D1`:Ta[w];l&&!i&&w>=2&&w<5&&(T=Ta[w-1]),S[e][t]=T}return S}function hi(e){let t=e.map(e=>e.slice()),n=e.length,r=na(e),i=(t,n)=>!!ia(e,t,n),a=new Uint8Array(r*n);for(let e=0;e<n;e++)for(let n=0;n<r;n++){if(i(n,e)||!(i(n-1,e)||i(n+1,e)||i(n,e-1)||i(n,e+1))||i(n,e-1)&&i(n,e+1))continue;a[e*r+n]=1;let o=i(n,e+1)||i(n-1,e),s=n>=34&&n<=41&&e<=5+pa;t[e][n]=s&&!(n+e&1)?`C1`:o&&n>=12?`K5`:`K4`}return t}function gi(e,t,n){let r=hi(mi(wa.fly[0],t,n)),i=ta(la,fa),[a,o]=ma,s=[0,3,7,7,6,4,0,0][e];for(let e=o-s;e<=o+s;e++)$r(i,a,e,Math.abs(e-o)<=1?`W0`:`C1`);e===0&&$r(i,a,o,`W0`);let c=[0,0,0,6,12,19,27,99][e];if(c>0)for(let e=0;e<fa;e++)for(let t=0;t<la;t++){let n=r[e][t];if(!n)continue;let s=Math.hypot((t-a)*.8,(e-o)*1.6),l=s<c-4?1:s<c?.5:s<c+3?.25:0;N(t,e,l)&&(i[e][t]=n)}return i}function _i(e,t,n){let r=ta(la,fa+12),i=mi(wa.hurt[0],t,n);if(e<=1)for(let t=0;t<fa;t++)for(let n=0;n<la;n++){let a=i[t][n];a&&(e===0||N(n,t,.5))&&(r[t+12][n]=e===0?`W0`:a)}if(e>=1){let t=[`D1`,`D2`,`D3`,`D4`,`W0`,`C1`];for(let n=0;n<14;n++){let i=4+Math.round((n*11+3)%36*1.34),a=18+pa+n*5%4,o=(ca(n*3.1)-.5)*1.6,s=-.9-ca(n*1.7)*1.2,c=e-1,l=Math.round(i+o*c),u=Math.round(a+s*c+.04*c*c),d=c<4?1:c<6?.75:c<7?.5:c<8?.25:0,f=t[n%t.length],p=n%3==0?1:2;for(let e=0;e<p;e++)for(let t=0;t<p;t++)N(l+t,u+e,d)&&$r(r,l+t,u+e,f)}}return r}function vi(e,t,n,r,i,a,o,s,c){let l=ei(e,Oa),u=na(l)+c*2,d=ta(u,l.length+c*2),f=[0,-1,0,0][i%4];ai(d,l,c,c+f);let p=i%n.length;n.forEach(([e,t],n)=>$r(d,e+c,t+c+f,n===p?`E1`:`E0`)),ai(d,a,t[0]+o[0]+c,t[1]+o[1]+c+f);for(let[e,t,n]of r){let r=Math.round(Math.sin(s*2.1+n*2.7)*1.2),i=Math.round(Math.sin(s*1.3+n)*.6);ai(d,za,e+c+i,t+c+r-1)}return d}function yi(e,t,n){let r=t.p.map(e=>[e[0],e[1]]);if(n){let[e,t]=[r[2],r[3]],n=Math.hypot(t[0]-e[0],t[1]-e[1])||1;r[3]=[t[0]-(t[0]-e[0])/n*1.3,t[1]-(t[1]-e[1])/n*1.3],r[2]=[r[2][0]-(r[2][0]-r[1][0])/6,r[2][1]-(r[2][1]-r[1][1])/6]}let i=t.lit??1;for(let n=0;n<3;n++){let[a,o]=r[n],[s,c]=r[n+1],l=s-a,u=c-o,d=Math.hypot(l,u)||1,f=u/d*i,p=-l/d*i,m=n<2?l/d*.4:l/d*.7,h=n<2?u/d*.4:u/d*.7;s+=m,c+=h;let g=t.w[n],_=t.w[n+1]*(n===2?.75:1);ni(e,Ba[n],[a+f*g,o+p*g,s+f*_,c+p*_,s,c,a,o]),ni(e,Va[n],[s,c,a,o,a-f*g,o-p*g,s-f*_,c-p*_])}}function bi(e,t,n){let r=ta(e.w,e.h);for(let[t,n]of e.palm)ni(r,t,n);yi(r,e.thumb,!1),e.fingers.forEach((e,n)=>yi(r,e,n===t));for(let[t,n]of e.wrist)ni(r,t,n);for(let t of e.bits)ni(r,`N1`,t,0,n);let i=ra(r),a=i.map(e=>e.reduce((e,t,n)=>t?n:e,-1));for(let t=0;t<e.h;t++)for(let n=0;n<e.w;n++){let o=i[t][n];o&&(!ia(i,n,t-1)&&(Ea.includes(o)||o===`M3`)?r[t][n]=o===`M3`?`V2`:`M3`:!ia(i,n-1,t)&&Ea.includes(o)?r[t][n]=`M3`:n===a[t]&&t<=e.rimRightMaxY&&o!==`M3`?r[t][n]=`K7`:!ia(i,n,t+1)&&Ea.includes(o)&&t>e.h*.6&&(r[t][n]=`P2`))}if(ii(r,e.touch),e.split.forEach(([e,t],n)=>$r(r,e,t,n%5==2?`E1`:`E0`)),e.heart){let[t,n]=e.heart;for(let e=-1;e<=1;e++)for(let i=-1;i<=1;i++)(i===0||e===0)&&$r(r,t+i,n+e,`E0`);$r(r,t,n,`E1`);for(let[e,i]of[[t-1,n-1],[t+1,n-1],[t-1,n+1],[t+1,n+1],[t-2,n],[t+2,n]])ia(r,e,i)&&ia(r,e,i)!==`E0`&&$r(r,e,i,`H0`)}return r}function xi(e){let t=ta(36,36),n={},r={};for(let[e,i,a]of Wa){n[e]=i,r[e]=a;for(let n=i;n<=a;n++)e>=Ka(n)&&$r(t,n,e,`N1`)}let i=(e,n)=>!!ia(t,e,n),a=e=>31-(e-11)*2/11;for(let e=0;e<36;e++)for(let o=0;o<36;o++){if(!i(o,e))continue;let s=o-n[e],c=`N1`;e<=Ka(o)+2&&o>=13&&o<=28&&(c=`N2`),e<=22&&(c=s<=2||s<=5&&e<=14?`M3`:s<=7&&e<=14||s===3?`N2`:c),e===15&&(c=s===1?`V2`:s<=9?`M3`:c),e===16&&(c=s<=1?`M3`:s<=10?`N0`:c),e===23&&s<=2&&(c=`N0`),e===24&&s<=3&&(c=`M3`),e===25&&s<=3&&(c=s===0?`N2`:`N0`),e===26&&s<=3&&(c=`M3`),e===27&&s<=2&&(c=s===0?`M3`:`N1`),e>=28&&e<=30&&s<=3&&(c=e===30?`N2`:`M3`),o>=r[e]-4&&(c=`N0`),e>a(o)&&o>=11&&(c=`N0`),$r(t,o,e,c)}ni(t,`N2`,[10.5,18,20,18,18,22,14,25.5,11.5,24]),ri(t,11,18,18,18,`M3`),ni(t,`N1`,[11.5,24,14,25.5,18,22,22,26,21,28.5,13,30.5]),ri(t,11,31,22,29,`N0`),ni(t,`N0`,[23,16,27.5,16,28,24,24.5,24.5]),ni(t,`N1`,[24,17,27,17,27.2,23,25,23.5]),ii(t,[24,16,`N2`,25,16,`M3`,26,16,`N2`,25,18,`N2`,25,19,`N2`,25,20,`N2`]);let o=ra(t);for(let e=0;e<36;e++)for(let n=0;n<36;n++){let r=o[e][n];r&&(!ia(o,n-1,e)&&e>=10&&e<=29?t[e][n]=r===`V2`?`V2`:`M3`:!ia(o,n+1,e)&&e>=12&&e<=27?t[e][n]=`K7`:!ia(o,n,e+1)&&e>=29&&e<=33&&(t[e][n]=`P2`))}ii(t,[5,22,`V2`,6,21,`V2`,9,28,`V2`]),ii(t,[10,17,`E1`,11,17,`E0`,14,17,`E0`,15,17,`E1`,16,17,`E0`]);for(let n=8;n<=33;n++){let r=Ka(n);i(n,r)&&$r(t,n,r,(n+e*3)%9==0?`E1`:`E0`),i(n,r+1)&&Ka(n-1)<r-1&&i(n-1,r-1)&&$r(t,n-1,r,`E0`)}return ii(t,[22,13,`E0`,22,14,`E1`,23,15,`E0`,23,16,`E0`,24,16,`N0`]),t}function Si(e,t,n){let r=ta(36,36),i=xi(e),a=ei(qa,Ja);t%2&&$r(a,2,3,`Y2`),t===1&&$r(a,1,2,`W0`),t===3&&$r(a,3,1,`W0`),ai(r,a,18,6+Math.round(Math.sin(n*2.2))),ai(r,i);for(let e of[18,19,20,21,22]){let t=Ga[e-8];ia(r,e,t)&&$r(r,e,t,e===20?`Y2`:`E1`)}return Xa.forEach(([e,t],i)=>{let a=Math.round(Math.sin(n*4.5*(.31+i*.05)+i*2.1)*1.4),o=Math.round(Math.sin(n*4.5*(.23+i*.04)+i)*.8);ai(r,Ya[i],e+o,t+a)}),r}function Ci(e,t,n,r,i,a,o,s){let c=e-n,l=t-r,u=i-n,d=a-r,f=Math.max(0,Math.min(1,(c*u+l*d)/(u*u+d*d)));return Math.hypot(c-u*f,l-d*f)-(o+(s-o)*f)}function wi(e,t,n,r,i,a,o,s){let c=s,l=/* @__PURE__ */ new Float64Array(26);for(let o=0;o<=12;o++){let s=o/12,c=1-s;l[2*o]=c*c*e+2*c*s*n+s*s*i,l[2*o+1]=c*c*t+2*c*s*r+s*s*a}let u=1/0,d=-1/0,f=1/0,p=-1/0;for(let e=0;e<=12;e++)u=Math.min(u,l[2*e]),d=Math.max(d,l[2*e]),f=Math.min(f,l[2*e+1]),p=Math.max(p,l[2*e+1]);c*=.6;let m=Math.max(o,c);return{pts:l,w0:o,w1:c,x0:u-m,x1:d+m,y0:f-m,y1:p+m}}function Ti(e,t,n){let r=1e3,i=e.pts;for(let a=1;a<=12;a++){let o=i[2*a-2],s=i[2*a-1],c=i[2*a]-o,l=i[2*a+1]-s,u=t-o,d=n-s,f=Math.max(0,Math.min(1,(u*c+d*l)/(c*c+l*l))),p=(a-1+f)/12;r=Math.min(r,Math.hypot(u-c*f,d-l*f)-(e.w0+(e.w1-e.w0)*p**.8))}return r}function Ei(e,t){return[{k:0,f:(n,r)=>$a(n,r,e[0],e[1],.064*t,.05*t)},{k:.018*t,f:(n,r)=>{let i=Math.abs(n-e[0]),a=r-e[1]-.026*t;i-=.034*t;let o=.94*i+-.34*a,s=.34*i+.94*a;return(Math.hypot(o/(.05*t),s/(.022*t))-1)*.022*t}}]}function Di(e){let t=Za[e],n=[],r=(e,t,n,r,i)=>({k:i,f:(i,a)=>$a(i,a,e,t,n,r),box:[e-n,e+n,t-r,t+r]}),i=(e,t,n,r,i,a,o)=>({k:o,f:(o,s)=>Ci(o,s,e,t,n,r,i,a),box:[Math.min(e,n)-i,Math.max(e,n)+i,Math.min(t,r)-i,Math.max(t,r)+i]});if(e===0){n.push(...Ei(t,.9)),n.push(r(t[0],t[1]-.045,.1,.05,.03)),n.push(r(t[0],t[1]-.12,.095,.085,.035));for(let e=0;e<4;e++){let r=t[0],a=t[1]-.075-e*.04;n.push(i(r-.05-e*.006,a,r-.085-e*.01,a+.03,.012,0,.01))}for(let e=0;e<8;e++){let i=e<4?-1:1,a=e<4?e:e-4,o=to(e*91.7)-.5,s=to(e*37.1+3)-.5,c=[t[0]+i*(.05+.02*a),t[1]-.06-.02*a],l=[t[0]+i*(.24+.16*a+o*.05),t[1]+.13-.045*a+s*.035],u=[t[0]+i*(.4+.33*a+s*.08),-.03],d=[c[0]+(l[0]-c[0])*.35,l[1]+.012],f=[l[0]+i*(.05+.03*a),l[1]+(u[1]-l[1])*.35],p=(a<.5?1.1:1-a*.1)*(.9+o*.3);n.push(no(wi(c[0],c[1],d[0],d[1],l[0],l[1],.024*p,.012*p),.016)),n.push(r(l[0],l[1],.016*p,.014*p,.012)),n.push(no(wi(l[0],l[1],f[0],f[1],u[0],u[1],.012*p,.0022),.008))}}else if(e===1){n.push(...Ei(t,1.05)),n.push(r(t[0],t[1]+.03,.21,.1,.05)),n.push(r(t[0],t[1]+.085,.15,.07,.05)),n.push(r(t[0],t[1]-.06,.15,.09,.05));for(let e=0;e<5;e++){let r=e-2,a=t[0]+r*.055,o=t[1]+.14-Math.abs(r)*.02;n.push(i(a,o,a+r*.012,o+.035-Math.abs(r)*.004,.016,0,.012))}for(let e=0;e<6;e++){let i=e<3?-1:1,a=e<3?e:e-3,o=to(e*61.7)-.5,s=to(e*27.1+5)-.5,c=[t[0]+i*(.12+.03*a),t[1]-.02-.03*a],l=[t[0]+i*(.3+.17*a+o*.05),t[1]+.1-.05*a+s*.03],u=[t[0]+i*(.36+.27*a+s*.06),-.03],d=[c[0]+(l[0]-c[0])*.4,l[1]+.02],f=[l[0]+i*.03,l[1]+(u[1]-l[1])*.4],p=(1-a*.12)*(.92+o*.2);n.push(no(wi(c[0],c[1],d[0],d[1],l[0],l[1],.038*p,.02*p),.022)),n.push(r(l[0],l[1],.024*p,.02*p,.014)),n.push(no(wi(l[0],l[1],f[0],f[1],u[0],u[1],.02*p,.004),.01))}for(let e=0;e<12;e++){let r=e%2<.5?-1:1,i=eo(Math.sin(e*13.7)*1735.3),a=[t[0]+r*(.06+i*.16),t[1]-.07-i*.04],o=e<6?[t[0]+r*(.25+i*.34),t[1]+.03-i*.08]:[a[0]+r*(.02+i*.06),a[1]-.13-i*.11],s=[(a[0]+o[0])*.5,(a[1]+o[1])*.5-.07-i*.08];n.push(no(wi(a[0],a[1],s[0],s[1],o[0],o[1],.0095,e<6?.008:.002),.008))}}else{n.push(...Ei(t,1)),n.push(r(t[0],t[1]-.06,.17,.055,.035)),n.push(r(t[0],t[1]-.15,.1,.11,.05)),n.push(r(t[0],t[1]-.26,.075,.08,.05));for(let e=0;e<2;e++){let a=e===0?-1:1,o=[t[0]+a*.15,t[1]-.05],s=[t[0]+a*.38,t[1]+.05],c=[t[0]+a*.5,t[1]+.3];n.push(no(wi(o[0],o[1],t[0]+a*.28,t[1]-.03,s[0],s[1],.034,.022),.03)),n.push(r(s[0],s[1],.024,.022,.015)),n.push(no(wi(s[0],s[1],t[0]+a*.47,t[1]+.14,c[0],c[1],.022,.012),.015));for(let e=0;e<4;e++){let t=[c[0]+a*(-.06+e*.045),c[1]+.07+.02*Math.sin(e*2)];n.push(i(c[0],c[1],t[0],t[1],.01,.0015,.008))}}for(let e=0;e<4;e++){let r=e<2?-1:1,i=e<2?e:e-2,a=[t[0]+r*(.04+.03*i),t[1]-.3],o=[t[0]+r*(.22+.2*i),t[1]-.14-.03*i],s=[t[0]+r*(.34+.38*i),-.03];n.push(no(wi(a[0],a[1],(a[0]+o[0])*.5,o[1]+.02,o[0],o[1],.03,.018),.02)),n.push(no(wi(o[0],o[1],o[0]+r*.04,o[1]+(s[1]-o[1])*.4,s[0],s[1],.018,.003),.01))}}return n}function Oi(e,t,n,r){if(e===0&&r>0){let e=Math.max(0,Math.min(1,(Math.abs(t)-.25)/.75));t/=1+r*.2*e*e*(3-2*e)}let i=ro[e],a=i[0].f(t,n);for(let e=1;e<i.length;e++){let r=i[e];if(r.box){let e=Math.max(r.box[0]-t,0,t-r.box[1]),i=Math.max(r.box[2]-n,0,n-r.box[3]);if(Math.hypot(e,i)-a>=r.k+1e-4&&Math.hypot(e,i)>0)continue}a=r.k>0?Qa(a,r.f(t,n),r.k):Math.min(a,r.f(t,n))}return a}function ki(e,t,n){let r=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];for(let i=0;i<2;i++){let i=[];for(let a=1;a<n-1;a++)for(let n=1;n<t-1;n++){let o=e[a*t+n];if(o<0||o>.9)continue;let s=0;for(let i=0;i<8;i++){let[o,c]=r[i],[l,u]=r[(i+7)%8];e[(a+c)*t+n+o]<0&&!(e[(a+u)*t+n+l]<0)&&s++}s>=2&&i.push(a*t+n)}for(let t of i)e[t]=-.01}for(let r=0;r<2;r++){let r=[],i=[];for(let a=1;a<n-1;a++)for(let n=1;n<t-1;n++){let o=a*t+n,s=+(e[o-1]<0)+ +(e[o+1]<0)+ +(e[o-t]<0)+ +(e[o+t]<0);if(e[o]>=0&&s>=3)r.push(o);else if(e[o]<0&&e[o]>-.6&&s===1){let n=e[o-1]<0?o-1:e[o+1]<0?o+1:e[o-t]<0?o-t:o+t;+(e[n-1]<0)+ +(e[n+1]<0)+ +(e[n-t]<0)+ +(e[n+t]<0)>=3&&i.push(o)}}for(let t of r)e[t]=-.01;for(let t of i)e[t]=.01}}function Ai(e,t,n=0){let r=`${e}:${t}:${n}`,i=io.get(r);if(i)return i;let a=Math.ceil(2.9*t),o=Math.ceil(.72*t),s=new Float32Array(a*o);for(let r=0;r<o;r++){let i=.64-(r+.5)/t;for(let o=0;o<a;o++){let c=-1.45+(o+.5)/t;s[r*a+o]=Oi(e,c,i,n)*t}}let c=s.slice();ki(s,a,o);let l=new Int16Array(a).fill(-1);for(let e=0;e<a;e++)for(let t=o-1;t>=0;t--)if(s[t*a+e]<0){l[e]=t;break}let u=Za[e],d=0;for(let e=0;e<a;e++)d=Math.max(d,l[e]);let f={kind:e,sigma:t,w:a,h:o,hx:Math.round((u[0]+1.45)*t),hy:Math.round((.64-u[1])*t),foot:d,sd:s,raw:c,bottom:l};return io.set(r,f),f}function ji(e,t=0){io.set(`${e.kind}:${e.sigma}:${t}`,e)}function Mi(e,t,n,r,i=!1){let a=Za[e][1];return Math.max(24,Math.round(Math.min((r-n)/(a+.03),(i?2:1.5)*t/2.9)))}function Ni(e,t,n,r,i,a){let o=Math.round(.11*r),s=Math.floor(i*8)/8,c=+!!a.phase2,l=[`S4`,`S5`,`S6`,`W0`],u=o+6,d=((a.clock??Math.floor(i*(a.phase2?4:1))/60%1)+1)%1;for(let r=-u;r<=u;r++)for(let i=-u;i<=u;i++){let a=Math.hypot(i,r),u=(Math.atan2(i,-r)/(2*Math.PI)+1)%1,f=2+Math.floor(3*si(u*24+3.7,s*3.1)),p=Math.floor(4.5*Math.max(0,si(u*40+11.3,s*5.3)-.35)/.65),m=o-f/2,h=o+f/2,g=null;a>=m&&a<h?g=l[Math.min(3,(a<o?0:1)+c)]:a>=h&&a<h+p&&N(i+t,r+n,.75-(a-h)/(p+1)*.5)?g=l[Math.min(3,2+c)]:a<m&&u<d&&N(i+t,r+n,.25)&&(g=`S3`),g&&e(t+i,n+r,g)}for(let r=0;r<12;r++){let a=r/12*Math.PI*2,s=Math.round(t+Math.sin(a)*(o+4)),c=Math.round(n-Math.cos(a)*(o+4)),l=Math.sin(i*2.4+r*1.7)>-.2;for(let[t,n]of[[-1,-1],[0,-1],[-1,0],[0,0]])e(s+t,c+n,l?`S6`:`P5`)}let f=d*Math.PI*2,p=o-2;for(let r=3;r<=p;r++)e(Math.round(t+Math.sin(f)*r),Math.round(n-Math.cos(f)*r),`S6`);let m=Math.round(t+Math.sin(f)*p),h=Math.round(n-Math.cos(f)*p);for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)e(m+n,h+t,n||t?`S6`:`W0`)}function Pi(e,t,n,r,i,a){if(i<=0)return;let o=Math.round(.034*r),s=n+1,c=a>.5?5:3,l=i<.4?1:a>.5?3:2;for(let n of[-1,1]){let r=t+n*o-Math.floor(c/2),i=s-Math.floor(l/2);for(let t=-1;t<=l;t++)for(let n=-1;n<=c;n++){let a=n>=0&&t>=0&&n<c&&t<l,o=r+n,s=i+t;a?e(o,s,(n===0||n===c-1)&&c>1?`P5`:`W0`):N(o,s,.5)&&(n!==-1&&n!==c||t!==-1&&t!==l)&&e(o,s,`E1`)}}}function Fi(e,t){let{w:n,h:r,raw:i}=e,a=r+4,o=new Float32Array(n*a);for(let e=0;e<n;e++){let s=t[e];for(let t=0;t<a;t++){let a=t-2-s,c=Math.floor(a),l=a-c,u=c>=0&&c<r?i[c*n+e]:9,d=c+1>=0&&c+1<r?i[(c+1)*n+e]:9;o[t*n+e]=u+(d-u)*l}}return ki(o,n,a),o}function Ii(e,t,n,r,i){let a=e.w,o=e.h+4,s=Array(a*o).fill(null),c=(e,n)=>e>=0&&n>=0&&e<a&&n<o&&t[n*a+e]<0,l=new Uint8Array(a*o),u=e.foot+2,d=e.hy+2;for(let n=0;n<o;n++)for(let r=0;r<a;r++){if(!c(r,n)||c(r,n-1)&&c(r-1,n)&&c(r+1,n)&&c(r,n+1))continue;let i=t[n*a+Math.min(a-1,r+1)]-t[n*a+Math.max(0,r-1)],s=t[Math.min(o-1,n+1)*a+r]-t[Math.max(0,n-1)*a+r],u=Math.hypot(i,s)||1,d=i/u,f=s/u,p=f<-.35,m=Math.abs(d)>.5&&Math.sign(d)===Math.sign(r-e.hx)&&f<.3;if(p||m){if(c(r-(d>.4?1:d<-.4?-1:0),n-(f>.4?1:f<-.4?-1:0)))l[n*a+r]=1;else{let e=r+(d>.4?1:d<-.4?-1:0),t=n+(f>.4?1:f<-.4?-1:0);e>=0&&t>=0&&e<a&&t<o&&!c(e,t)&&(l[t*a+e]=2)}}}let f=Math.hypot(Math.max(e.hx,a-e.hx),Math.max(d,o-d));for(let c=0;c<o;c++)for(let p=0;p<a;p++){let m=t[c*a+p],h=p,g=c,_=null;if(m<0){let t=-m;_=t>6&&N(h,g,t>12?.5:.25)?`S1`:`N0`,l[c*a+p]?_=n?`W1`:`S4`:n&&t<=3&&(_=`K8`);let r=u-c,i=Math.max(4,Math.min(16,Math.round(.08*e.sigma)));if(r<i){let e=r/i;N(h,g,e<.3?0:e<.55?.25:e<.8?.5:.75)||(_=null)}}else if(l[c*a+p]===2&&u-c>6)_=n?`W1`:`S4`;else if(m<2.5){let e=(e,t)=>e>=0&&t>=0&&e<a&&t<o&&l[t*a+e]>0;(e(p,c+1)||e(p-1,c)||e(p+1,c)||e(p,c-1))&&N(h,g,.25)&&u-c>10&&(_=`S3`)}if(!_)continue;let v=Math.hypot(p-e.hx,c-d);if(r<1){let e=(r*(f+10)-v)/10;if(!N(h,g,e))continue}if(i>0){let e=i*(f+6);if(v<e-2)continue;v<e&&(_=v<e-1?`S6`:`S5`)}s[g*a+h]=_}return s}function Li(e,t,n,r,i,a){let o=Ii(e,n,r,i,a),s=e.w,c=e.h+4,l=document.createElement(`canvas`);l.width=s,l.height=c;let u=l.getContext(`2d`),d=u.createImageData(s,c),f={};for(let e=0;e<o.length;e++){let n=o[e];if(!n)continue;let r=f[n]||(f[n]=[1,3,5].map(e=>parseInt(t[n].slice(e,e+2),16)));d.data[e*4]=r[0],d.data[e*4+1]=r[1],d.data[e*4+2]=r[2],d.data[e*4+3]=255}return u.putImageData(d,0,0),l}function Ri(e,t,n,r,i,a={}){let o=a.t??0,s=a.pal&&pn[a.pal]||P,c=a.grow??0,l=Ai(t,i,c),{w:u,h:d,sd:f}=l,p=Math.round(n)-l.hx,m=Math.round(r)-l.hy,h=a.ceil??-1e9,g=(t,n,r)=>{n<h||n<h+6&&!N(t,n,(n-h+1)/7)||(e.fillStyle=s[r],e.fillRect(t,n,1,1))};t===2&&a.corona!==!1&&Ni(g,Math.round(n),Math.round(r),i,o,a);let _=Math.floor(o*6)/6,v=new Float32Array(u);for(let e=0;e<u;e++){let t=-1.45+(e+.5)/i;v[e]=Math.round(Math.sin(.13*_+3.1*t)*.006*Math.abs(t)*i*4)/4}let y=a.reveal??1,b=a.die??0,x=y>=1&&b<=0,S=`${t}:${i}:${c}:${a.pal||`base`}:${+!!a.struck}:${_}`,C=x?oo.get(S):void 0;if(C||(C=Li(l,s,Fi(l,v),!!a.struck,y,b),x&&(oo.size>48&&oo.clear(),oo.set(S,C))),a.ceil!=null&&m-2<a.ceil+6){let t=document.createElement(`canvas`);t.width=C.width,t.height=C.height;let n=t.getContext(`2d`);n.drawImage(C,0,0);let r=n.getImageData(0,0,t.width,t.height);for(let e=0;e<t.height;e++){let n=m-2+e;if(n>=a.ceil+6)break;for(let i=0;i<t.width;i++)(n<a.ceil||!N(p+i,n,(n-a.ceil+1)/7))&&(r.data[(e*t.width+i)*4+3]=0)}n.putImageData(r,0,0),e.drawImage(t,p,m-2)}else e.drawImage(C,p,m-2);b<.35&&Pi(g,Math.round(n),Math.round(r),i,a.eyes??1,a.gaze??0)}function zi(e,t,n,r,i){co[e]=t,so[e]={fps:n,ox:r,oy:i,w:na(t[0]),h:t[0].length}}function Bi(e,t,n){let r=so[e];if(e.startsWith(`dreamer.`)&&e!==`dreamer.land`&&e!==`dreamer.death`){let i=e===`dreamer.cast`?pi(t,`h`):null,a=mi(t,n/8,0,{cast:i,hurt:+(e===`dreamer.hurt`&&n>=2),glint:e!==`dreamer.spread`});return a=e===`dreamer.hurt`&&n<2?a.map(e=>e.map(e=>e?`W0`:null)):hi(a),ti(a,r.ox,r.oy)}return ti(t,r.ox,r.oy)}function Vi(e,t=0,n=3,r=380){let i=e.map(e=>ei(e.rows,e.key)),a=Math.max(...i.map(e=>e.length)),o=[[]],s=0;for(let e of i)s>0&&s+n+na(e)>r&&(o.push([]),s=0),s+=(s>0?n:0)+na(e),o[o.length-1].push(e);let c=o.map(e=>e.reduce((e,t)=>e+na(t),0)+n*(e.length-1)),l=Math.max(t,...c),u=ta(l,o.length*(a+n)-n);return o.forEach((e,t)=>{let r=0;for(let i of e)ai(u,i,r,t*(a+n)+a-i.length),r+=na(i)+n}),ti(u)}function Hi(e,t){let n=Ai(e,t),r=Ii(n,Fi(n,new Float32Array(n.w)),!1,1,0),i=ta(n.w,n.h+4),a=(e,t,n)=>$r(i,e,t,n);e===2&&Ni(a,n.hx,n.hy+2,t,.4,{clock:.12});for(let e=0;e<r.length;e++)r[e]&&(i[Math.floor(e/n.w)][e%n.w]=r[e]);return Pi(a,n.hx,n.hy+2,t,1,0),ti(i,n.hx,n.hy+2)}function Ui(e,t,n,r,i){if(e.startsWith(`glitch.`)||e.startsWith(`bug.`)){let a=e.startsWith(`glitch.`),o=i.look?Math.round(Math.max(-1,Math.min(1,i.look[0]))):0,s=i.look?Math.round(Math.max(-1,Math.min(1,i.look[1]))):0,c=e.endsWith(`.blink`)?t+1:i.blink??0,l=e.endsWith(`.blink`)?0:a?t:t*2+1,u=n+r*3.7,d=`${e}:${l}:${c}:${o},${s}:`;for(let[,,e]of a?ja:Fa)d+=`${Math.round(Math.sin(u*1.3+e)*.6)},${Math.round(Math.sin(u*2.1+e*2.7)*1.2)};`;return d}if(e===`elite.idle`){let e=n+r*7.1,i=`e${t}:${Math.floor(n*8)%4}:${Math.round(Math.sin(e*2.2))}:`;return Xa.forEach((t,n)=>i+=`${Math.round(Math.sin(e*4.5*(.23+n*.04)+n)*.8)},${Math.round(Math.sin(e*4.5*(.31+n*.05)+n*2.1)*1.4)};`),i}return null}function Wi(e,t,n){if(n){let e=_o.get(n);if(e)return e}let r=e.length,i=na(e),a=document.createElement(`canvas`);a.width=Math.max(1,i),a.height=Math.max(1,r);let o=a.getContext(`2d`),s=o.createImageData(a.width,a.height);for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=e[n][r];if(!a)continue;let o=t[a],c=vo.get(o);c||vo.set(o,c=[parseInt(o.slice(1,3),16),parseInt(o.slice(3,5),16),parseInt(o.slice(5,7),16)]);let l=(n*i+r)*4;s.data[l]=c[0],s.data[l+1]=c[1],s.data[l+2]=c[2],s.data[l+3]=255}return o.putImageData(s,0,0),n&&(_o.size>600&&_o.clear(),_o.set(n,a)),a}function Gi(e,t,n=0){let r=(co[e]||[[]]).length,i=so[e]?.fps??8;return(Math.floor(t*i*(1+.3*(ca(n)-.5))+n*97)%r+r)%r}function Ki(e,t){let n=ra(e);for(let r=0;r<e.length;r++)for(let i=0;i<na(e);i++){let a=e[r][i];if(!a)continue;if(t>=2){n[r][i]=`W0`;continue}let o=!ia(e,i-1,r)||!ia(e,i+1,r)||!ia(e,i,r-1)||!ia(e,i,r+1);n[r][i]=o?`W0`:a===`N0`?`N1`:a===`N1`?`N2`:a===`N2`?`M3`:a}return n}function qi(e,t){let n=e.length,r=na(e),i=ta(r+4,n+4),a=(t,n)=>!!ia(e,t,n),o=(e,t,n)=>{for(let r=-n;r<=n;r++)for(let i=-n;i<=n;i++)if(Math.abs(i)+Math.abs(r)<=n&&a(e+i,t+r))return!0;return!1};for(let e=-2;e<n+2;e++)for(let n=-2;n<r+2;n++)a(n,e)||(o(n,e,1)?N(n,e,.5)&&(i[e+2][n+2]=`D4`):o(n,e,2)&&t>.5&&N(n,e,.25)&&(i[e+2][n+2]=`W0`));return i}function Ji(e){let t=e.length,n=na(e),r=ta(n+yo,t),i=(t,n)=>!!ia(e,t,n);for(let[e,a]of[[8,.25],[4,.5]])for(let o=0;o<t;o++)for(let t=0;t<n;t++){if(!i(t,o))continue;let n=!i(t,o-1)||!i(t+1,o)&&t>=16,s=t+yo-e;n&&N(s,o,a)&&(r[o][s]=`K6`)}for(let a=0;a<t;a++)for(let t=0;t<n;t++){let n=e[a][t];if(!n)continue;let o=t+yo,s=!i(t,a-1),c=!i(t,a+1),l=!i(t+1,a)||!i(t-1,a),u;u=n===`W0`||s?`B1`:c||l||n===`D4`||n===`C1`?`K6`:n===`D3`?N(o,a,.5)?`K6`:null:N(o,a,.25)?`K6`:null,r[a][o]=u}return r}function Yi(e){for(let t=0;t<e.length;t++)for(let n=0;n<na(e);n++)if(e[t][n]===`h`)return[n,t];return null}function Xi(e,t,n,r,i,a={}){let o=co[t];if(!o)return;let s=so[t],c=(n%o.length+o.length)%o.length,l=a.t??0,u=a.phase??0,d=a.pal||`base`,f=pn[d]||P,p,m=null,h=0,g=a.cache?Ui(t,c,l,u,a):null;if(g){let t=`${d}:${g}`;a.flash&&(t+=`:fl${a.flash}`),a.tint&&(t+=`:t${a.tint}`),(a.cover??1)<1&&(t+=`:c${Math.round((a.cover??1)*4)/4}`),a.flip&&(t+=`:fx`);let n=_o.get(t);if(n){let t=n.width,o=n.height,c=Math.round(r-(a.flip?t-1-s.ox:s.ox)),l=Math.round(i-s.oy);if(a.clipY!==void 0){let r=Math.max(0,Math.min(o,Math.round(a.clipY)-l));r>0&&e.drawImage(n,0,0,t,r,c,l,t,r)}else e.drawImage(n,c,l);return}}let _=t.startsWith(`dreamer.`);if(_&&t!==`dreamer.land`&&t!==`dreamer.death`){let e=t===`dreamer.cast`?Yi(o[c]):null;p=mi(o[c],l,u,{od:a.od,cast:e,hurt:+!!a.hurt,glint:t!==`dreamer.spread`}),a.decoy?(p=Ji(p),h=yo):p=hi(p)}else if(t===`dreamer.land`)p=gi(c,l,u);else if(t===`dreamer.death`)p=_i(c,l,u);else if(t.startsWith(`glitch.`)||t.startsWith(`bug.`)){let e=t.startsWith(`glitch.`),n=a.look?[Math.round(Math.max(-1,Math.min(1,a.look[0]))),Math.round(Math.max(-1,Math.min(1,a.look[1])))]:[0,0],r=t.endsWith(`.blink`)?c+1:a.blink??0,i=r===1?La:r===2?Ra:Ia,o=t.endsWith(`.blink`)?0:e?c:c*2+1;p=e?vi(Da,ka,Aa,ja,o,i,n,l+u*3.7,lo):vi(Ma,Na,Pa,Fa,o,i,n,l+u*3.7,lo),m=g}else t===`elite.idle`?(p=Si(c,Math.floor(l*8)%4,l+u*7.1),m=g):(p=o[c],m=`${t}:${c}`);if(a.flash&&(p=Ki(p,a.flash),m&&=`${m}:fl${a.flash}`),a.tint){let e=a.tint;p=p.map(t=>t.map(t=>t?e:null)),m&&=`${m}:t${e}`}let v=!!a.flip,y=na(p),b=p.length,x=Math.round(r-(v?y-1-s.ox-h:s.ox+h)),S=Math.round(i-s.oy);if(a.od&&_){let t=qi(p,+(Math.sin(l*Math.PI*3)>0));e.drawImage(Wi(v?oa(t):t,f,null),x-2,S-2)}let C=a.cover??1;if(C<1){let e=Math.round(C*4)/4;p=p.map((t,n)=>t.map((t,r)=>t&&N(r,n,e)?t:null)),m&&=`${m}:c${e}`}v&&(p=oa(p),m&&=`${m}:fx`);let w=Wi(p,f,m&&`${d}:${m}`);if(a.clipY!==void 0){let t=Math.max(0,Math.min(b,Math.round(a.clipY)-S));t>0&&e.drawImage(w,0,0,y,t,x,S,y,t)}else e.drawImage(w,x,S)}function Zi(e,t){return Math.max(0,Math.min(4,Math.round((e+60)/30)))*2+ +!!t}function Qi(e,t,n){let r=Math.round(.034*n);return[[Math.round(e)-r,Math.round(t)+1],[Math.round(e)+r,Math.round(t)+1]]}function $i(e,t,n=0,r=`base`){let i=pn[r]||P;if(t.length<2)return;let a=2*t[0][0]-t[1][0],o=2*t[0][1]-t[1][1],s=Math.min(t.length,20);for(let[r,c,l]of bo){let u=[],d=Math.round(a+r),f=Math.round(o+c);for(let e=0;e<Math.min(s,c<-4?6:8);e++){let n=Math.round(t[e][0]+r),i=Math.round(t[e][1]+c);for(;d!==n||f!==i;){let e=Math.abs(n-d),t=Math.abs(i-f);e>=t*2||t===0?d+=Math.sign(n-d):(t>=e*2||e===0||(d+=Math.sign(n-d)),f+=Math.sign(i-f)),u.push([d,f])}}let p=u.length;u.forEach(([t,n],r)=>{let a=r/Math.max(1,p-1);N(t,n,a<.35?1:a<.55?.75:a<.75?.5:.25)&&(e.fillStyle=i[l[Math.min(l.length-1,Math.floor(a*l.length))]],e.fillRect(t,n,1,1))});for(let a=c<-4?s:9;a<s;a+=2){let o=Math.round((ca(n+a*1.37+c)-.5)*2.4),s=Math.round((ca(n+a*2.71+r)-.5)*2.4),l=Math.round(t[a][0]+r)+o,u=Math.round(t[a][1]+c)+s;N(l,u,a<13?1:a<17?.5:.25)&&(e.fillStyle=i[a%4==1?`C1`:`D4`],e.fillRect(l,u,1,1))}}}function ea(e,t,n,r,i=1,a=`base`){let o=pn[a]||P,s=Math.round(t)-12,c=Math.round(n)+8,l=Math.round(Math.max(0,Math.min(1,r))*16);for(let t=0;t<16;t++){let n=s+t;N(n,c,i)&&(t<l?(e.fillStyle=o[t>=l-1?`P5`:t>=l-4?`P4`:`P3`],e.fillRect(n,c,1,1)):N(n,c,.25)&&(e.fillStyle=o.T1,e.fillRect(n,c,1,1)))}}var ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo=o(()=>{mn(),Ot(),ta=(e,t)=>Array.from({length:t},()=>Array(e).fill(null)),na=e=>e[0]?e[0].length:0,ra=e=>e.map(e=>e.slice()),ia=(e,t,n)=>n>=0&&n<e.length&&t>=0&&t<na(e)?e[n][t]:null,aa=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+=?@^~`,oa=e=>e.map(e=>e.slice().reverse()),sa=(()=>{let e=/* @__PURE__ */ new Float32Array(4096),t=49723857;for(let n=0;n<e.length;n++)t=t*1664525+1013904223>>>0,e[n]=t/4294967296;return e})(),ca=e=>{let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)},la=56,ua=7,da=7,fa=ua+15+da,pa=ua-2,ma=[30,8+ua],ha=e=>[...Array.from({length:ua},()=>`.`.repeat(la)),...e.map(e=>`..`+e+`.`.repeat(la-2-e.length)),...Array.from({length:da},()=>`.`.repeat(la))],ga=ha([`........................................`,`.....fff..........................kkk...`,`......fff........................kkkkk..`,`.......fff.......................kkkkk..`,`........ffff.....................kkkkk..........aa`,`.........fffffff................mmkkk..........aa.`,`mmmmmm....fffffff...........mmmmmm............hh.`,`..mmmmmmmm..fffffmmm.....mmmmmmmmaaaaa...aaaaahh`,`.....mmmmmmmmmmmmmmmmmmmmmmmwwmmmaaaaaaaaaaaa`,`.......mmmmmmmmmmmmmmmmmmmmmwwmmmaaaaaaaa`,`..........mmmmmmmmmmmmmmmmmmmmmmm`,`.............mmmmmmmm....mmmmmm`,``,``,``]),_a={m:`m`,f:`f`,a:`a`,h:`h`,w:`w`,k:`k`,g:`g`,q:`q`},va=e=>ei(e,_a,la),ya=[2,9],ba=[2,18],xa=[35,39],Sa=43,Ca=[35,8+ua],wa=fi(),Ta=[`D1`,`D2`,`D3`,`D4`,`W0`],Ea=[`N0`,`N1`,`N2`],Da=[`...v.......`,`...mn......`,`..msnn.....`,`..msonn....`,`.msoonnn...`,`.msoonnnr..`,`.soooonnr..`,`..soooonnr.`,`..msooonnr.`,`...sooonnr.`,`....sooonr.`,`....sonnr..`,`.....snnr..`,`......nr...`,`.......r...`],Oa={v:`V2`,m:`M3`,s:`N2`,o:`N1`,n:`N0`,r:`P2`,f:`E0`,F:`E1`},ka=[2,5],Aa=[[4,8],[5,9],[5,10],[6,11]],ja=[[10,10,0],[3,15,2.3]],Ma=[`..v......`,`..mn.....`,`.msnn....`,`.msonr...`,`msoonnr..`,`msoonnr..`,`.soonnnr.`,`.msoonnr.`,`..sonnnr.`,`..msonr..`,`...snnr..`,`....nr...`,`.....r...`],Na=[1,4],Pa=[[3,7],[4,8],[4,9]],Fa=[[8,9,1.1]],Ia=ei([`Fe`,`ee`],{F:`E1`,e:`E0`}),La=ei([`..`,`Fe`],{F:`E1`,e:`E0`}),Ra=ei([`..`,`nn`],{n:`N0`}),za=ei([`ms`,`sn`],{m:`M3`,s:`N2`,n:`N0`}),Ba=[`N2`,`M3`,`M3`],Va=[`N1`,`N1`,`N0`],Ha={w:28,h:34,palm:[[`N2`,[5.5,17,9.5,15.5,16,15,16,21,9,22.5]],[`M3`,[5.5,17,9,22.5,9.5,26,6.5,23]],[`N1`,[9,22.5,16,21,16,31,11,31,9.5,26]],[`N1`,[16,15,26,17,26,22.5,16,21.5]],[`N0`,[16,21.5,26,22.5,23.5,27.5,20,31,16,31]]],thumb:{p:[[9.5,24],[5.5,20.5],[2.8,16.5],[1.3,12.2]],w:[2.6,2.2,1.9,1.5],lit:-1},fingers:[{p:[[8.5,16.5],[7,11.5],[6,7.5],[5.3,4]],w:[2.1,1.9,1.7,1.4]},{p:[[13,15.5],[12.6,10],[12.3,5.5],[12,1.4]],w:[2.1,2,1.8,1.5]},{p:[[19.2,15.5],[19.5,10.5],[19.9,6.5],[20.2,3]],w:[2.1,1.9,1.7,1.4]},{p:[[23.8,17.5],[24.8,13.5],[25.5,10.5],[26,7.6]],w:[1.9,1.7,1.5,1.3]}],wrist:[[`N0`,[11,30,21,30,20,32.5,17,33,13,33,11.5,32]]],split:[[16,15],[16,16],[17,17],[16,18],[16,22],[15,23],[16,24],[16,25],[17,26],[16,27],[16,28],[15,29],[16,30],[16,31],[16,32]],heart:[16,20],bits:[[11,33,13,33,12.5,34],[18,33,20,32.5,19.5,34]],touch:[],rimRightMaxY:21},Ua={w:20,h:24,palm:[[`N2`,[3.5,13,11,11.5,11,16,6,17]],[`M3`,[3.5,13,6,17,7,19.5,4.5,17]],[`N1`,[6,17,11,16,11,22,8,22,7,19.5]],[`N1`,[11,11.5,19,13,19,16.5,11,16]],[`N0`,[11,16,19,16.5,16.5,20.5,14,22,11,22]]],thumb:{p:[[6.5,18],[4,15.5],[2,12.5],[1,9.4]],w:[2,1.7,1.5,1.2],lit:-1},fingers:[{p:[[5.5,12.5],[4.6,8.5],[4,5.5],[3.6,2.8]],w:[1.6,1.5,1.3,1.1]},{p:[[9,11.5],[8.8,7.5],[8.6,4.2],[8.5,1.2]],w:[1.6,1.5,1.4,1.1]},{p:[[13.2,11.5],[13.4,8],[13.7,5],[14,2.3]],w:[1.6,1.5,1.3,1.1]},{p:[[16.8,13],[17.6,10],[18.2,7.6],[18.6,5.4]],w:[1.4,1.3,1.2,1]}],wrist:[[`N0`,[8,21.5,15,21.5,14,23.5,9,23.5]]],split:[[11,12],[11,13],[12,14],[11,15],[11,16],[11,17],[10,18],[11,19],[11,20],[11,21]],heart:null,bits:[],touch:[],rimRightMaxY:15},Wa=[[9,14,28],[10,12,30],[11,11,31],[12,11,32],[13,10,32],[14,10,33],[15,9,33],[16,9,33],[17,8,33],[18,8,32],[19,7,32],[20,6,32],[21,6,31],[22,5,31],[23,8,30],[24,8,30],[25,9,29],[26,8,29],[27,9,28],[28,9,28],[29,9,28],[30,10,27],[31,13,27],[32,15,27],[33,15,26],[34,16,26],[35,18,24]],Ga=[14,13,12,11,10,9,10,9,8,9,11,12,12,12,11,10,9,8,9,10,9,10,11,12,14,16],Ka=e=>e<8?0:Ga[e-8]??99,qa=[`..a..`,`.aab.`,`.abb.`,`aawbc`,`.abc.`,`.bcc.`,`..c..`],Ja={a:`Y2`,b:`Y1`,c:`Y0`,w:`W0`},Ya=[ei([`ms.`,`msn`,`.nf`],{m:`M3`,s:`N2`,n:`N0`,f:`E0`}),ei([`vm`,`sn`],{v:`V2`,m:`M3`,s:`N2`,n:`N0`}),ei([`.m.`,`msn`,`snf`],{m:`M3`,s:`N2`,n:`N0`,f:`E0`}),ei([`ms`,`nf`],{m:`M3`,s:`N2`,n:`N0`,f:`E0`}),ei([`m.`,`sn`],{m:`M3`,s:`N2`,n:`N0`})],Xa=[[11,4],[15,1],[24,2],[28,5],[32,9]],Za=[[.01,.25],[0,.215],[0,.27]],Qa=(e,t,n)=>{let r=Math.max(0,Math.min(1,.5+.5*(t-e)/n));return t+(e-t)*r-n*r*(1-r)},$a=(e,t,n,r,i,a)=>(Math.hypot((e-n)/i,(t-r)/a)-1)*Math.min(i,a),eo=e=>e-Math.floor(e),to=e=>eo(Math.sin(e)*4375.85),no=(e,t)=>({k:t,f:(t,n)=>Ti(e,t,n),box:[e.x0,e.x1,e.y0,e.y1]}),ro=[Di(0),Di(1),Di(2)],io=/* @__PURE__ */ new Map,ao=(e,t,n=0)=>io.has(`${e}:${t}:${n}`),oo=/* @__PURE__ */ new Map,so={},co={},lo=3,[uo,fo]=ma,zi(`dreamer.fly`,wa.fly,8,uo,fo),zi(`dreamer.fast`,wa.fast,8,uo,fo),zi(`dreamer.slow`,wa.slow,8,uo,fo),zi(`dreamer.up`,wa.up,8,uo,fo),zi(`dreamer.down`,wa.down,8,uo,fo),zi(`dreamer.cast`,wa.cast,15,uo,fo),zi(`dreamer.spread`,wa.spread,8,uo,fo),zi(`dreamer.hurt`,wa.hurt,15,uo,fo),zi(`dreamer.land`,[0,1,2,3,4,5,6,7].map(e=>gi(e,0,0)),12,uo,fo),zi(`dreamer.death`,[0,1,2,3,4,5,6,7,8,9].map(e=>_i(e,0,0)),10,uo,fo+12),po=[5+lo,7+lo],mo=[4+lo,6+lo],zi(`glitch.hover`,[0,1,2,3].map(e=>vi(Da,ka,Aa,ja,e,Ia,[0,0],e/6,lo)),6,...po),zi(`glitch.blink`,[La,Ra].map(e=>vi(Da,ka,Aa,ja,0,e,[0,0],0,lo)),12,...po),zi(`bug.hover`,[0,1].map(e=>vi(Ma,Na,Pa,Fa,e*2+1,Ia,[0,0],e/8,lo)),8,...mo),zi(`bug.blink`,[La,Ra].map(e=>vi(Ma,Na,Pa,Fa,1,e,[0,0],0,lo)),12,...mo),zi(`error.creep`,[-1,3,2,1,0,-1].map((e,t)=>bi(Ha,e,t%3==1?-1:0)),6,16,33),zi(`spam.idle`,[-1,3,1,-1].map(e=>bi(Ua,e,0)),6,10,12),zi(`elite.idle`,[0,1,2,3,4,5].map(e=>Si(e,e%4,e/6)),6,19,21),ho={};for(let e of Object.keys(co))ho[e]=co[e].map((t,n)=>Bi(e,t,n));go={};for(let e of Object.keys(ho))go[e]=Vi(ho[e],e.length*6+2);go[`giant.creep`]=Hi(0,96),go[`giant.legacy`]=Hi(1,96),go[`giant.deadline`]=Hi(2,96),_o=/* @__PURE__ */ new Map,vo=/* @__PURE__ */ new Map,Object.keys(co),yo=9,bo=[[-23,-7,[`D3`,`D3`,`D2`,`D2`]],[-28,-2,[`D4`,`D3`,`D3`,`D2`]]]});function z(e,t,n,r){e.fillStyle=r,e.fillRect(B(t),B(n),1,1)}function So(e,t,n,r,i,a){e.fillStyle=a,e.fillRect(B(t),B(n),B(r),B(i))}function Co(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function wo(e,t=0,n=0){let r=e*374761393+t*668265263+n*2147483647|0;return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function To(e,t,n,r,i){e=B(e),t=B(t),n=B(n),r=B(r);let a=Math.abs(n-e),o=-Math.abs(r-t),s=e<n?1:-1,c=t<r?1:-1,l=Math.max(a,-o)+1,u=a+o;for(let d=0;i(e,t,d,l),e!==n||t!==r;d++){let n=2*u;n>=o&&(u+=o,e+=s),n<=a&&(u+=a,t+=c)}}function Eo(e){e=Math.max(0,B(e));let t=Ls.get(e);if(t)return t;let n=/* @__PURE__ */ new Map,r=e,i=0,a=1-e,o=(e,t)=>n.set(e+`,`+t,[e,t]);for(;r>=i;){for(let[e,t]of[[r,i],[i,r],[-i,r],[-r,i],[-r,-i],[-i,-r],[i,-r],[r,-i]])o(e,t);i++,a<0?a+=2*i+1:(r--,a+=2*(i-r)+1)}let s=[...n.values()].sort((e,t)=>Rs(e)-Rs(t));return Ls.set(e,s),s}function Do(e,t,n,r,i,a=1){t=B(t),n=B(n),e.fillStyle=i;for(let[i,o]of Eo(r))H(t+i,n+o,a,t,n)&&e.fillRect(t+i,n+o,1,1)}function Oo(e,t,n,r,i,a=1,o=1){t=B(t),n=B(n);let s=r*r+r*.6,c=Math.ceil(r*o);e.fillStyle=i;for(let i=-c;i<=c;i++)for(let c=-Math.ceil(r);c<=Math.ceil(r);c++){let r=i/o;c*c+r*r<=s&&H(t+c,n+i,a,t,n)&&e.fillRect(t+c,n+i,1,1)}}function ko(e,t,n,r,i,a,o=1,s=1,c=null,l=2){if(t=B(t),n=B(n),r<.5)return;let u=Math.ceil((r+1)*s),d=Math.ceil(r+1);for(let f=-u;f<=u;f++)for(let u=-d;u<=d;u++){let d=Math.hypot(u,f/s),p=r+.5-d;if(p<0||p>=l||!H(t+u,n+f,o,t,n))continue;let m=p<1?c??i:a;m&&(e.fillStyle=m,e.fillRect(t+u,n+f,1,1))}}function Ao(e){let t=zs.get(e);return t||(t=[],e.rows.forEach((n,r)=>{for(let i=0;i<n.length;i++){let a=n[i];if(a===`.`||a===` `)continue;let o=e.key[a];o&&t.push([i,r,o])}}),zs.set(e,t),t)}function jo(e,t,n,r,i=1,a=P,o=!1,s){let c=Fs(t),l=B(n-(t.ox??0)),u=B(r-(t.oy??0));if(i>=1&&!s)return No(e,t,n,r,a,o);for(let[n,r,d]of Ao(t)){let t=o?c-1-n:n;if(!H(t,r,i))continue;let f=s?.[d]??d;e.fillStyle=V(a,f),e.fillRect(l+t,u+r,1,1)}}function Mo(e){if(e===P)return`base`;let t=Bs.get(e);return t||Bs.set(e,t=`p`+ ++Vs),t}function No(e,t,n,r,i=P,a=!1){let o=mt(t,i,Mo(i)),s=B(n-(t.ox??0)),c=B(r-(t.oy??0));if(!a)return e.drawImage(o,s,c);e.save(),e.translate(s+o.width,c),e.scale(-1,1),e.drawImage(o,0,0),e.restore()}function Po(e,t,n=.5,r=!1){let i=Hs.get(e);i||Hs.set(e,i=/* @__PURE__ */ new Map);let a=t+n+r,o=i.get(a);if(o)return o;let s=Fs(e)+2,c=e.rows.length+2,l=(t,n)=>{let r=e.rows[n-1]?.[t-1];return!!r&&r!==`.`&&r!==` `&&!!e.key[r]},u=[];for(let e=0;e<c;e++){let t=``;for(let i=0;i<s;i++){let a=l(i-1,e)||l(i+1,e)||l(i,e-1)||l(i,e+1)||r&&(l(i-1,e-1)||l(i+1,e-1)||l(i-1,e+1)||l(i+1,e+1));t+=!l(i,e)&&a&&H(i,e,n)?`h`:`.`}u.push(t)}let d=Ps(u,{h:t},(e.ox??0)+1,(e.oy??0)+1);return i.set(a,d),d}function Fo(e,t,n,r,i,a=P,o=1,s=1){let c=Po(t,i,o);s>=1?(No(e,c,n,r,a),No(e,t,n,r,a)):(jo(e,c,n,r,s,a),jo(e,t,n,r,s,a))}function Io(e,t,n,r,i){return[e,t,n,$s(t),$s(e),r].map(e=>Ws.map(t=>Ps(e,{...Us,c:t},i,e.length-1>>1)))}function Lo(e,t,n,r,i=0,a=!1,o=P,s=1){let c=a?tc:ec,l=Math.floor(r*10*(.9+.2*i)+i*6)%6,u=Math.floor(r*8+i*4)%4,d=c[l][u];Fo(e,d,t,n,`K4`,o,1,s)}function Ro(e,t,n,r=P){e.fillStyle=V(r,`W1`),To(t.x,t.y,n.x,n.y,(t,n,r,i)=>{r>0&&(r<i*.6||(t+n)%2==0)&&e.fillRect(t,n,1,1)})}function zo(e,t,n,r,i=0,a=99,o=P){let s=Math.floor(r*2.4*2+i*2)%2,c=Math.sin((r+i)*Math.PI*2*1.2)>0?-1:0,l=a<2&&Math.floor(r*12)%2==1?.5:1;Fo(e,rc[s],t,n+c,`P1`,o,1,l)}function Bo(e,t,n,r,i=!1,a=!1,o=P,s=1){if(i)return Fo(e,sc,t,n,`Y0`,o,1,s);let c=Math.floor(r*8)%4,l=oc[+(c===1||c===2)];if(a&&Vo(e,t,n,r,o),jo(e,Po(l,`Y0`,1),t,n,s,o),c===1||c===2)for(let[r,i]of[[-4,0],[4,0],[0,-6],[0,6]])z(e,t+r,n+i,V(o,`Y1`));jo(e,l,t,n,s,o)}function Vo(e,t,n,r,i=P){let a=Math.floor(r/.12);e.fillStyle=V(i,`Y2`);for(let r=0;r<12;r++){let i=r/12*Math.PI*2+Math.PI/24*a,o=r%2?7:9;for(let a=8;a<8+o;a++){let o=B(t+Math.cos(i)*a),s=B(n+Math.sin(i)*a*1.05);(a+r)%2==0&&e.fillRect(o,s,1,1)}}}function Ho(e,t,n,r,i=`W0`,a=P){let o=r+1;if(e.fillStyle=V(a,i),!(r>2)){for(let[r,i]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.fillRect(B(t+r*o),B(n+i*o),1,1);r===0&&e.fillRect(B(t),B(n),1,1)}}function Uo(e,t,n,r){let i=n.map(([n,r])=>[n*e,r*t]),a=[r[0]*e,r[1]*t],o=i.map(([e,t])=>Math.atan2(t-a[1],e-a[0])),s=(e,t)=>{let n=!1;for(let r=0,a=i.length-1;r<i.length;a=r++){let[o,s]=i[r],[c,l]=i[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(n=!n)}return n},c=[];for(let n=0;n<t;n++){let t=``;for(let r=0;r<e;r++){let e=r+.5,c=n+.5;if(!s(e,c)){t+=`.`;continue}let l=Math.atan2(c-a[1],e-a[0]),u=0;for(let e=0;e<i.length;e++){let t=o[e],n=o[(e+1)%i.length]-t;for(;n<0;)n+=Math.PI*2;let r=l-t;for(;r<0;)r+=Math.PI*2;if(r<=n){u=e;break}}t+=String(u)}c.push(t)}return c}function Wo(e,t,n,r){let i=e[n],a=e[(n+1)%e.length],o=(i[0]+a[0])/2-t[0],s=(i[1]+a[1])/2-t[1],c=Math.hypot(o,s)||1,l=(o*.55-s*.85)/c;return r[l>.3?0:l>-.5?1:2]}function Go(e,t,n=!0){let r=`${e}/${t}/${n}`,i=pc.get(r);if(i)return i;let[a,o]=cc[t],s=uc[e%3],c=dc[e%3],l=Uo(a,o,s,c).map(e=>e.split(``));if(!n){let e=l.map((e,t)=>e.map((e,n)=>e===`.`?`.`:[[1,0],[-1,0],[0,1],[0,-1]].some(([e,r])=>(l[t+r]?.[n+e]??`.`)===`.`)&&(n+t)%2==0?`t`:`.`).join(``)),t=Ps(e,{t:`T1`},Math.floor(a/2),Math.floor(o/2));return pc.set(r,t),t}let u={p:`P4`,c:`C1`,L:`K7`,T:`W1`,r:`W0`,g:`K8`},d=[`W0`,`W1`,`IC0`,`K8`];if(s.forEach((e,t)=>u[String(t)]=Wo(s,c,t,d)),t===24||t===12){let e=t===24?.56:.5,n=Uo(a,o,s.map(([t,n])=>[c[0]+(t-c[0])*e-.02,c[1]+(n-c[1])*e-.03]),c);for(let e=0;e<o;e++)for(let t=0;t<a;t++)n[e][t]!==`.`&&l[e][t]!==`.`&&(l[e][t]=`T`);for(let e=0;e<o;e++)for(let t=0;t<a;t++){if(l[e][t]!==`T`)continue;let n=[l[e]?.[t+1],l[e]?.[t-1],l[e-1]?.[t],l[e+1]?.[t]].find(e=>e&&e!==`T`&&e!==`.`&&e!==`r`);n&&u[n]===`W1`&&(l[e][t]=`r`)}}for(let e=0;e<o;e++)for(let t=0;t<a;t++){let n=l[e][t];n===`.`||u[n]!==`IC0`||(l[e+1]?.[t]??`.`)===`.`&&(l[e][t]=`g`)}let f=t===24?2:1;for(let e of l){let t=e.findIndex(e=>e!==`.`),n=e.length-1-[...e].reverse().findIndex(e=>e!==`.`);if(!(t<0)){for(let r=0;r<f&&t+r<=n;r++)e[t+r]=`p`;for(let r=0;r<f&&n-r>t+f-1;r++)e[n-r]=`c`}}let p=t===24?11:t===12?6:3,m=fc[lc[e%3]][p],h=Math.max(...m.map(e=>e.length)),g=Math.round(c[0]*a-h/2),_=Math.round(c[1]*o-m.length/2),v=(e,t)=>m[t-_]?.[e-g]===`#`;for(let e=0;e<o;e++)for(let t=0;t<a;t++)l[e][t]===`.`||l[e][t]===`p`||l[e][t]===`c`||v(t,e)&&(l[e][t]=`L`);let y=Ps(l.map(e=>e.join(``)),u,Math.floor(a/2),Math.floor(o/2));return pc.set(r,y),y}function Ko(e,t,n,r,i,a=0,o=!0,s=P,c=1){let l=Go(t,n,o);if(jo(e,l,r,i,c,s),!o||c<1)return;let u=Math.floor(a*8)%8,[d,f]=cc[n];if(u>5)return;let p=Math.round((u+.5)/6*(d+f))-2,m=B(r-(l.ox??0)),h=B(i-(l.oy??0));e.fillStyle=V(s,`W0`);for(let[t,r,i]of Ao(l))(t+r===p||n===24&&t+r===p+1)&&i!==`P4`&&i!==`C1`&&e.fillRect(m+t,h+r,1,1)}function qo(e,t,n,r,i,a,o=!1,s=P,c=0){let l=Math.hypot(r,i)||1,u=r/l,d=i/l,f=o?3.5:2.5,p=a%3,m=Co(c*31+p*7+1>>>0),h=(o?9:6)+Math.floor(m()*(o?4:5)),g=-d,_=u;for(let r=1;r<=h;r++){let i=r/h,a=Math.round(Math.sin(r*1.7+p*2.1+c)*(i*1.2)),l=Math.max(0,(o?2.2:1.5)*(1-i));for(let o=-Math.ceil(l);o<=Math.ceil(l);o++){if(Math.abs(o)>l+.25)continue;let c=B(t-u*(r+f-1)+g*(o+a)),p=B(n-d*(r+f-1)+_*(o+a)),m=i<.35?`S5`:i<.65?`S4`:`S3`;i>=.65&&!H(c,p,.5)||z(e,c,p,V(s,m))}m()<.18&&z(e,B(t-u*(r+f+1)+g*(m()<.5?-2:2)),B(n-d*(r+f+1)+_*(m()<.5?-2:2)),V(s,`S6`))}let v=Math.ceil(f+1);for(let r=-v;r<=v;r++)for(let i=-v;i<=v;i++){let a=i,o=r,c=Math.hypot(a,o),l=(a*u+o*d)/(c||1),m=f+.45*Math.max(0,-l)*(.6+.4*Math.sin(p*2.4+Math.atan2(o,a)*3)),h=null;c<=m*.36?h=`W0`:c<=m*.62?h=`S6`:c<=m?h=l>-.2?`S5`:`E0`:c<=m+1&&H(B(t)+i,B(n)+r,.5,B(t),B(n))&&(h=`S4`),h&&z(e,B(t)+i,B(n)+r,V(s,h))}}function Jo(e,t,n,r,i=P,a=0){t=B(t),n=B(n);let o=Math.round(14+10*(1-r));for(let r=-o;r<=1;r++)for(let a=-2;a<=2;a++){let s=-r/o;s>.66&&Math.abs(a)>1||H(t+a,n+r,s>.8?0:.25,0,0)&&z(e,t+a,n+r,V(i,`S3`))}for(let o=0;o<6;o++){let s=14-11*Math.min(1,r*(.9+.1*wo(a,o))),c=o/6*Math.PI*2+r*4.2+wo(a,o,2)*.6;z(e,B(t+Math.cos(c)*s),B(n+Math.sin(c)*s*.6),V(i,`S6`))}So(e,t-1,n-1,3,3,V(i,`N0`));let s=r<.33?.25:r<.66?.5:1;Do(e,t,n,r<.66?3:2,V(i,`E0`),s),r>=.66&&z(e,t,n,V(i,`E1`))}function Yo(e,t,n,r,i,a,o=P,s=0){if(a>3)return;let c=Co(s*977+13),l=[{x:t,y:n}],u=Math.max(3,Math.round((i-n)/5));for(let e=1;e<u;e++){let a=e/u;l.push({x:B(t+(r-t)*a+(c()-.5)*7),y:B(n+(i-n)*a)})}l.push({x:r,y:i});let d=a===3?.5:1,f=a%2==0?`P4`:`E1`;for(let t=0;t<l.length-1;t++){let n=l[t],r=l[t+1];To(n.x,n.y,r.x,r.y,(t,n)=>{H(t,n,d)&&(z(e,t-1,n,V(o,f)),z(e,t+1,n,V(o,a===0?`W0`:f)),z(e,t,n,V(o,`W0`)))})}if(a<2){let t=l[Math.floor(l.length*.45)],n=t.x,r=t.y;for(let t=0;t<3;t++){let t=n+(c()<.5?-3:3),i=r+4;To(n,r,t,i,(t,n)=>z(e,t,n,V(o,f))),n=t,r=i}}Xo(e,r,i,a,o)}function Xo(e,t,n,r,i=P){t=B(t),n=B(n);let a=r<2?1:r===2?.5:.25,o=3+r*2;for(let s=-8;s<=7;s++){let c=Math.round((1-Math.abs(s+.5)/8)*(r===0?6:5-r));for(let r=0;r<c;r++){if(Math.abs(s)>o)continue;let c=t+s,l=n-r;H(c,l,r===0?a:a*.5+.01)&&z(e,c,l,V(i,r===0||(s+r)%3==0?`S6`:`P5`))}}if(r<=1)for(let[a,o]of[[-6,-4],[5,-5],[-3,-6],[2,-7]])z(e,t+a-r,n+o-r,V(i,`S6`))}function Zo(e,t,n,r,i=P,a=1){t=B(t),n=B(n),H(t,n,a)&&(z(e,t,n,V(i,`S6`)),z(e,t,n-1,V(i,`E1`)),z(e,t,n-2,V(i,`E1`)),r%2==0&&z(e,t,n-3,V(i,`S4`)))}function Qo(e,t,n,r,i=P){t=B(t),n=B(n);let a=r%2==0?[[0,-1],[1,0],[0,1],[-1,0]]:[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[r,o]of a)z(e,t+r,n+o,V(i,`S4`));z(e,t,n,V(i,`S6`))}function $o(e,t,n,r,i=P){t=B(t),n=B(n);let a=V(i,`W0`),o=V(i,`S5`);if(r===0){for(let[r,i]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])z(e,t+r,n+i,a);for(let[r,i]of[[2,0],[-2,0],[0,2],[0,-2]])z(e,t+r,n+i,o)}else if(r===1){z(e,t,n,a);for(let r=1;r<=3;r++)for(let[i,s]of[[1,0],[-1,0],[0,1],[0,-1]])z(e,t+i*r,n+s*r,r===1?a:o);for(let[r,i]of[[1,1],[-1,1],[1,-1],[-1,-1]])z(e,t+r*2,n+i*2,o)}else if(r===2){for(let[r,i]of[[4,0],[-4,0],[0,4],[0,-4]])z(e,t+r,n+i,o);for(let[r,i]of[[2,2],[-2,2],[2,-2],[-2,-2]])z(e,t+r,n+i,o)}}function es(e,t,n,r,i=P,a=`W1`){t=B(t),n=B(n);let o=V(i,a);if(r===0){for(let[r,i]of[[1,0],[-1,0],[0,1],[0,-1]])z(e,t+r,n+i,o);z(e,t,n,V(i,`W0`))}else if(r===1)for(let[r,i]of[[1,1],[-1,1],[1,-1],[-1,-1],[2,2],[-2,2],[2,-2],[-2,-2]])z(e,t+r,n+i,o);else if(r===2)for(let[r,i]of[[2,0],[-2,0],[0,2],[0,-2]])z(e,t+r,n+i,o)}function ts(e,t,n=P){for(let r of t){let t=r.age/r.life;if(t>=1)continue;let i=t<.5?1:t<.75?.5:.25,a=B(r.x+r.vx*r.age),o=B(r.y+r.vy*r.age);H(a,o,i)&&z(e,a,o,V(n,r.id))}}function ns(e,t,n,r,i,a,o=1,s=0){let c=Co(o),l=[];for(let o=0;o<n;o++){let u=(o+c()*.8)/n*Math.PI*2,d=i*(.55+.45*c());l.push({x:e,y:t,vx:Math.cos(u)*d,vy:Math.sin(u)*d,id:r[o%r.length],age:s,life:a*(.75+.25*c())})}return l}function rs(e,t,n,r,i,a,o,s=P,c=1){if(i<=0||i>=1)return;let l=1-(1-Math.min(1,i/.7))**3,u=2+(r-2)*l,d=i<.7?1:i<.8?.75:i<.9?.5:.25,f=i<.45?2:1;ko(e,t,n,u,V(s,a),V(s,o),d,c,null,f)}function is(e,t,n,r,i=P){rs(e,t,n,22,r,`D4`,`Y2`,i),r<.5&&Ho(e,t,n-6,Math.floor(r*6),`Y2`,i)}function as(e,t,n,r=1){let i=t.x-e.x,a=t.y-e.y,o=Math.hypot(i,a)||1,s=i/o,c=a/o,l=-c,u=s,d=[0,.45*o,.9*o,o+4,o+12,o+22],f=[0,16*r*n,44*r*n,0,-46*r*n,-84*r*n];return ss(os(d.map((t,n)=>({x:e.x+s*t+l*f[n],y:e.y+c*t+u*f[n]}))),.5)}function os(e){let t=[e[0],e[0],...e,e[e.length-1],e[e.length-1]],n=[];for(let e=0;e+3<t.length;e++){let[r,i,a,o]=[t[e],t[e+1],t[e+2],t[e+3]],s=Math.hypot(a.x-i.x,a.y-i.y),c=Math.max(4,Math.ceil(s*2));for(let e=0;e<c;e++){let t=e/c,s=t*t,l=s*t,u=(1-t)**3/6,d=(3*l-6*s+4)/6,f=(-3*l+3*s+3*t+1)/6,p=l/6;n.push({x:u*r.x+d*i.x+f*a.x+p*o.x,y:u*r.y+d*i.y+f*a.y+p*o.y})}}return n.push(e[e.length-1]),n}function ss(e,t=.5){if(e.length<2)return e.slice();let n=[e[0]],r=t;for(let i=1;i<e.length;i++){let a=e[i-1],o=e[i],s=Math.hypot(o.x-a.x,o.y-a.y),c=0;for(;s>=r;)c+=r/Math.hypot(o.x-a.x,o.y-a.y),n.push({x:a.x+(o.x-a.x)*c,y:a.y+(o.y-a.y)*c}),s-=r,r=t;r-=s}let i=e[e.length-1],a=n[n.length-1];return Math.hypot(i.x-a.x,i.y-a.y)>t*.3&&n.push(i),n}function cs(e,t){let n=[],r=e.length,i=n=>t?e[(n%r+r)%r]:e[Math.max(0,Math.min(r-1,n))],a=t?r:r-1;for(let e=0;e<a;e++){let t=i(e-1),r=i(e),a=i(e+1),o=i(e+2),s=Math.hypot(a.x-r.x,a.y-r.y),c=Math.max(2,Math.ceil(s*2));for(let e=0;e<c;e++){let i=e/c,s=i*i,l=s*i;n.push({x:.5*(2*r.x+(-t.x+a.x)*i+(2*t.x-5*r.x+4*a.x-o.x)*s+(-t.x+3*r.x-3*a.x+o.x)*l),y:.5*(2*r.y+(-t.y+a.y)*i+(2*t.y-5*r.y+4*a.y-o.y)*s+(-t.y+3*r.y-3*a.y+o.y)*l)})}}return t||n.push(e[r-1]),n}function ls(e,t=0,n=e.length-1){let r=[];for(let i=Math.max(0,t);i<=Math.min(e.length-1,n);i++){let t=B(e[i].x),n=B(e[i].y),a=r[r.length-1];if(!(a&&a[0]===t&&a[1]===n)){if(a&&(Math.abs(t-a[0])>1||Math.abs(n-a[1])>1)){let e=a[0],o=a[1];for(;Math.abs(t-e)>1||Math.abs(n-o)>1;)e+=Math.sign(t-e),o+=Math.sign(n-o),r.push([e,o,i])}r.push([t,n,i])}}let i=[];for(let e=0;e<r.length;e++){let t=r[e],n=i[i.length-1],a=r[e+1];n&&a&&Math.abs(n[0]-a[0])===1&&Math.abs(n[1]-a[1])===1||i.push(t)}return i}function us(e,t,n,r,i={},a=P,o=1){let s=t.length;if(s<2||r<=n)return null;let c=ls(t,Math.floor(n*(s-1)),Math.floor(r*(s-1))),l=c.length;if(!l)return null;let u=i.ramp??mc,d=u.length-1,f=i.heat??1,p=Math.round((1-f)*2),m=i.width??3,h=/* @__PURE__ */ new Map,g=(e,t)=>(t+4096)*16384+(e+4096),_=(e,t,n,r,i)=>{if(!H(e,t,i*o))return;let a=g(e,t),s=h.get(a);(!s||s[1]<r)&&h.set(a,[n,r])};for(let e=0;e<l;e++){let[t,n]=c[e],r=l===1?1:e/(l-1),a=l-1-e,o=r>.68?3:r>.3?2:1;a<=0?o=1:a<=2&&(o=Math.min(o,2)),o=Math.min(o,m);let s=r<.1?.25:r<.2?.5:r<.3?.75:1,f=Math.min(d,Math.floor(r*(d+.999)));a<=1&&(f=d),f=Math.max(0,f-p);let h=u[f];if(i.alt&&a>2&&Math.floor(e/2)%3==0&&(h=i.alt),_(t,n,h,3,s),o<2)continue;let g=c[Math.max(0,e-2)],v=c[Math.min(l-1,e+2)],[y,b]=Math.abs(v[1]-g[1])>Math.abs(v[0]-g[0])?[1,0]:[0,-1];_(t-y,n-b,u[Math.max(0,f-1)],1,s),o>=3&&_(t+y,n+b,u[Math.min(d,f+1)],2,s)}let[v,y]=c[l-1];if(f>.5&&r<1)for(let[e,t]of[[1,0],[0,-1],[0,1],[-1,0]])h.has(g(v+e,y+t))||_(v+e,y+t,u[Math.max(0,d-2)],0,.5);for(let[t,[n]]of h)e.fillStyle=V(a,n),e.fillRect(t%16384-4096,Math.floor(t/16384)-4096,1,1);let b=f>0?i.sparks??0:0;if(b>0&&l>6){let t=i.seed??1,n=Math.floor((i.t??0)*15);for(let r=0;r<b;r++){let i=Math.max(0,l-3-r*3-Math.floor(wo(t,r)*3)),[s,u]=c[i],d=c[Math.max(0,i-3)],p=c[Math.min(l-1,i+3)],m=p[0]-d[0],h=p[1]-d[1],g=Math.hypot(m,h)||1,_=-h/g,v=m/g;v>0&&(_=-_,v=-v);let y=wo(t,r,7)<.7?1:-1,b=2+r*.9+wo(t,r,n)*1.2,x=B(s+_*b*y-m/g*(r*.6)),S=B(u+v*b*y-h/g*(r*.6));H(x,S,(r<2?1:r<4?.5:.25)*o*f)&&z(e,x,S,V(a,r<2?`W0`:r%2?`C1`:`W2`))}}return{x:v,y}}function ds(e,t,n,r,i,a=P,o=1){let s=t.length;if(s<2||r<=n)return null;let c=Math.floor(n*(s-1)),l=Math.floor(r*(s-1)),u=i.width??2,d=/* @__PURE__ */ new Map,f=/* @__PURE__ */ new Set,p=(e,t)=>(t+2048)*8192+(e+2048);for(let e=c;e<=l;e++){let n=(e-c)/Math.max(1,l-c),r=Math.min(1,Math.min(n,1-n)*6+.25),a=Math.max(1,u*r),o=t[e],s=(a-1)/2;for(let t=Math.floor(o.y-s);t<=Math.ceil(o.y+s);t++)for(let n=Math.floor(o.x-s);n<=Math.ceil(o.x+s);n++)(u>2?Math.hypot(n-o.x,t-o.y)>s+.5:Math.abs(n-o.x)>s+.5||Math.abs(t-o.y)>s+.5)||d.has(p(n,t))||d.set(p(n,t),e);i.spine&&u>4&&f.add(p(B(o.x),B(o.y)))}if(i.edge){e.fillStyle=V(a,i.edge);for(let t of d.keys()){let n=t%8192-2048,r=Math.floor(t/8192)-2048,i=u>4?[[1,0],[-1,0],[0,1],[0,-1]]:[[0,1]];for(let[t,a]of i)d.has(p(n+t,r+a))||H(n+t,r+a,o)&&e.fillRect(n+t,r+a,1,1)}}for(let[t,n]of d){let r=t%8192-2048,s=Math.floor(t/8192)-2048;if(!H(r,s,o))continue;let m=i.core;u<=2&&i.lead&&n>l-(l-c)*.25&&!d.has(p(r,s-1))&&(m=`W0`),i.alt&&Math.floor(n/5)%3==0&&(m=i.alt),f.has(t)&&(m=i.spine),e.fillStyle=V(a,m),e.fillRect(r,s,1,1)}let m=t[l];return i.lead&&z(e,m.x,m.y,V(a,i.lead)),m}function fs(e,t,n,r=.34,i=.8,a=P,o=3){if(n<0||n>i+.15)return;let s=Math.min(1,n/r),c=1-(1-s)*(1-s),l=n<r?0:Math.min(1,(n-r)/(i-r)),u=Math.min(.98,l*l*.9),d=n<i?1:n<i+.05?.75:n<i+.1?.5:.25;us(e,t,u,c,{heat:1-l,sparks:n<r+.08?5:0,seed:o,t:n},a,d),n<.2&&(hc(e,t[0],a),(c>=1||n>.12)&&hc(e,t[Math.floor(c*(t.length-1))],a))}function ps(e,t,n,r,i=1,a=P,o=0){let s=[];for(let e=0;e<6;e++){let a=e/6*Math.PI*2+r*2.1,c=1+.24*Math.sin(r*(1.3+.37*e)+wo(o,e)*6.28);s.push({x:t+Math.cos(a)*27*i*c,y:n+Math.sin(a)*27*i*.82*c})}let c=ss(cs(s,!0),.5),l=c.length;e.fillStyle=V(a,`W2`);for(let t=0;t<l;t+=6)H(B(c[t].x),B(c[t].y),.5)&&e.fillRect(B(c[t].x),B(c[t].y),1,1);let u=Math.floor(l/3),d=Math.floor(r*.9%1*l);for(let t=0;t<2;t++){let n=(d+Math.floor(t*l/2))%l,r=[];for(let e=u;e>=0;e--)r.push(c[(n-e+l)%l]);us(e,r,0,1,{heat:.85,width:2,seed:o+t},a)}}function ms(e,t,n,r,i=23,a=P){if(t=B(t),n=B(n),r===0){for(let[r,i]of[[0,0],[1,0],[-1,0],[0,1],[0,-1],[2,0],[-2,0],[0,2],[0,-2],[1,1],[-1,1],[1,-1],[-1,-1]])z(e,t+r,n+i,V(a,`W0`));return}if(r>7)return;let o=[0,.4,.68,.86,1,1,1,1][r]*i,s=[1,1,1,1,.75,.5,.25,.25][r];ko(e,t,n,o,V(a,`W2`),r<3?V(a,`D3`):null,s,1,r===1?V(a,`W0`):null),r<3&&z(e,t,n,V(a,`W0`))}function hs(e,t,n,r,i,a,o,s=P,c=`G0`,l=`G2`){let u=zn.MICRO3,d=ht(u,t),f=B(n-d/2),p=B(r-2),m=Math.floor(o*60),h=Math.min(t.length,Math.floor(m/2)+1),g=Math.hypot(i,a)||1,_=-i/g,v=-a/g,y=n+_*(d/2+2.5),b=r+v*2.5;To(y,b,y+_*9,b+v*9,(t,n,r,i)=>{let a=r/Math.max(1,i-1);H(t,n,a<.4?1:a<.6?.75:a<.8?.5:.25)&&z(e,t,n,V(s,r<1?c:l))});let x=0,S=[];for(let e=0;e<h;e++){let n=t[e],r=u.glyphs[n]||u.glyphs[`?`],i=r?Math.max(...r.map(e=>e.length)):u.space;r&&r.forEach((t,n)=>{for(let r=0;r<t.length;r++)t[r]===`#`&&S.push([f+x+r,p+n,e])}),x+=i+u.gap}let C=new Set(S.map(([e,t])=>e*4096+t));e.fillStyle=V(s,l);for(let[t,n]of S)C.has(t*4096+n+1)||e.fillRect(t,n+1,1,1);e.fillStyle=V(s,c);for(let[t,n,r]of S)m-r*2<2&&!H(t,n,.5)||e.fillRect(t,n,1,1);(h<t.length||o<.35)&&Math.floor(o*4)%2==0&&So(e,f+x,p,1,5,V(s,c))}function gs(e,t,n,r,i,a=0,o=P,s=`G0`){let c=Co(a+7),l=[{x:t,y:n}];for(let e=1;e<3;e++){let a=e/3,o=-(i-n),s=r-t,u=Math.hypot(o,s)||1,d=(c()-.5)*10;l.push({x:t+(r-t)*a+o/u*d,y:n+(i-n)*a+s/u*d})}l.push({x:r,y:i}),e.fillStyle=V(o,s);for(let t=0;t<l.length-1;t++)To(l[t].x,l[t].y,l[t+1].x,l[t+1].y,(t,n)=>e.fillRect(t,n,1,1))}function _s(e,t,n,r,i,a=P){if(r>8)return;let o=Math.min(1,r/5),s=4+(i-4)*(1-(1-o)**2),c=r<=5?1:r===6?.75:r===7?.5:.25;ko(e,t,n,s,V(a,`B1`),r<3?V(a,`K6`):null,c,1,null,r<3?2:1);for(let i=0;i<8;i++){let o=i/8*Math.PI*2+r*.06,l=B(t+Math.cos(o)*s),u=B(n+Math.sin(o)*s);if(H(l,u,c)){for(let[t,n]of[[0,-1],[1,0],[0,1],[-1,0]])z(e,l+t,u+n,V(a,`W1`));r<4&&z(e,l,u,V(a,`W0`))}}}function vs(e){let t=Math.hypot(...e);return[e[0]/t,e[1]/t,e[2]/t]}function ys(e,t,n,r){let i=t,a=Math.abs(i[0])<.9?[1,0,0]:[0,0,1],o=vs(Tc(a,i)),s=Tc(o,i),c=e[0]*o[0]+e[1]*o[1]+e[2]*o[2],l=e[0]*i[0]+e[1]*i[1]+e[2]*i[2],u=e[0]*s[0]+e[1]*s[1]+e[2]*s[2],d=Math.cos(n),f=Math.sin(n);[c,u]=[c*d+u*f,-c*f+u*d];let p=Math.cos(r),m=Math.sin(r);return[l,u]=[l*p-u*m,l*m+u*p],[c,l,u]}function bs(e){let t=[...new Map(e.map(e=>[e[0]+`,`+e[1],e])).values()].sort((e,t)=>e[0]-t[0]||e[1]-t[1]);if(t.length<3)return t;let n=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]),r=[];for(let e of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],e)<=0;)r.pop();r.push(e)}let i=[];for(let e of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],e)<=0;)i.pop();i.push(e)}return r.slice(0,-1).concat(i.slice(0,-1))}function xs(e,t,n,r=`R5`,i=`Y1`,a=`W0`){let o=`${e}/${t}/${n%8}/${r}/${i}/${a}`,s=Ec.get(o);if(s)return s;let c=wc[e],l=n%8/8*c.period,u=c.v.map(e=>ys(e,c.axis,l,.38)),d=Math.max(...u.map(e=>Math.hypot(e[0],e[1]))),f=(t-1)/2/d,p=(t-1)/2,m=u.map(e=>[B(p+e[0]*f),B(p-e[1]*f),e[2]]),h=Array.from({length:t},()=>Array(t).fill(`.`)),g=bs(m.map(([e,t])=>[e,t])),_=/* @__PURE__ */ new Set;for(let e=0;e<g.length;e++){let t=g[e],n=g[(e+1)%g.length];To(t[0],t[1],n[0],n[1],(e,t)=>{_.add(t*64+e),h[t]?.[e]!==void 0&&(h[t][e]=`f`)})}for(let[e,t]of c.e)(m[e][2]+m[t][2])/2<=.05||To(m[e][0],m[e][1],m[t][0],m[t][1],(e,t)=>{h[t]?.[e]===void 0||_.has(t*64+e)||(h[t][e]=`b`)});let v=m.reduce((e,t)=>t[2]>e[2]?t:e,m[0]);h[v[1]]?.[v[0]]!==void 0&&(h[v[1]][v[0]]=`v`);let y=Ps(h.map(e=>e.join(``)),{f:r,b:i,v:a},Math.floor(t/2),Math.floor(t/2));return Ec.set(o,y),y}function Ss(e,t,n,r,i=1){let a=[1,2,2,4,3][Math.max(0,Math.min(4,n-1))],o=n>=3?3.3:2.2,s=[],c=(n,i,a,o)=>{for(let c=0;c<n;c++){let l=c/n*Math.PI*2+r*a,u=Math.sin(l);s.push({x:B(e+Math.cos(l)*i),y:B(t+u*i*.8),behind:u<0,turn:Math.floor(r*10+c*3)%8,kind:o(c)})}};return c(a,24*i,o,()=>`icosa`),n>=5&&c(3,38*i,-o*.75,e=>e%2?`octa`:`tetra`),s}function Cs(e,t,n=P,r=!1){No(e,r?Mc(t.turn):t.kind===`icosa`?Dc(t.turn):t.kind===`octa`?Oc(t.turn):kc(t.turn),t.x,t.y,n)}function ws(e,t,n,r,i=45,a=6,o=P){let s=Math.PI/8;r=Math.round(r/s)*s,t=B(t),n=B(n);let c=2.6,l=.72,u=Math.ceil(i+1),d=Math.ceil((i+1)*l),f=e=>(e%=Math.PI*2,e<0?e+Math.PI*2:e);for(let s=-d;s<=d;s++)for(let d=-u;d<=u;d++){let u=Math.hypot(d,s/l);if(u>i+.5||u<i-a-.5)continue;let p=Math.atan2(s/l,d),m=f(r-p),h=null;if(m<=c){let e=1-m/c,r=i-a*Math.sin(Math.PI*Math.min(1,e**.55*.97))**.8;if(u<r-.5||e<.3&&!H(t+d,n+s,e<.15?.25:.5))continue;h=e>.94?`W0`:u>i-.5?e>.55?`R5`:`Y1`:u<r+.5&&e>.4?`W0`:`W1`}else if(m<=3.1){if(u<i-1.5)continue;let e=m<=2.85?.5:.25;H(t+d,n+s,e)&&(h=`D3`)}h&&z(e,t+d,n+s,V(o,h))}}function Ts(e,t,n,r,i,a=P,o=0){if(i<=0||i>=1)return;let s=1-(1-Math.min(1,i/.75))**3,c=3+(r-3)*s,l=i<.75?1:i<.84?.75:i<.92?.5:.25;t=B(t),n=B(n);let u=Math.ceil(c+1),d=Math.SQRT1_2;for(let r=-u;r<=u;r++)for(let i=-u;i<=u;i++){let o=Math.max(Math.abs(i),Math.abs(r),(Math.abs(i)+Math.abs(r))*d*1.0824),s=c+.5-o;s<0||s>=2||H(t+i,n+r,l,t,n)&&z(e,t+i,n+r,V(a,s<1?`V2`:`FU4`))}let f=zn.MICRO3;for(let r=0;r<8;r++){let i=r/8*Math.PI*2+Math.PI/8,u=c+4+6*s,d=B(t+Math.cos(i)*u),p=B(n+Math.sin(i)*u);H(d,p,l)&&gt(e,f,wo(o,r)<.5?`0`:`1`,d-1,p-2,V(a,`G0`))}}function Es(e,t,n,r=P,i=.7){let a=Math.min(1,n/.3),o=n<.3?0:Math.min(.98,(n-.3)/(i-.3)*.9),s=n<i?1:n<i+.05?.75:n<i+.1?.5:.25;if(n>i+.15)return;let c=us(e,t,o,a,{alt:`G0`,heat:n<.3?1:Math.max(0,1-(n-.3)/(i-.3)),seed:9,t:n},r,s);if(c&&a<1){let i=Math.floor(a*(t.length-1)),o=t[Math.max(0,i-4)];hs(e,`0x1`,c.x+2,c.y-5,c.x-o.x,c.y-o.y,n,r)}}function Ds(e,t,n,r,i=1,a=P){rs(e,t,n,28*i,r,`C1`,`V2`,a)}function Os(e,t,n,r,i=1,a=P){rs(e,t,n,30*i,r,r<.5?`R5`:`P5`,r<.5?`P5`:`R5`,a)}function ks(e,t,n,r=P){So(e,B(t)-1,B(n)-1,3,3,V(r,`G0`)),z(e,t,n,V(r,`W0`))}function As(e,t,n,r,i=P,a=160){if(r<0||r>.9)return;let o=r/.9,s=2+(a-2)*(1-(1-o)**2.2),c=r<.6?1:r<.7?.75:r<.8?.5:.25;ko(e,t,n,s,V(i,`D4`),V(i,`P4`),c,1,r<.3?V(i,`W0`):null)}function js(e,t,n,r=1,i=P){let a=Math.min(1,n/.18),o=n<.18?0:Math.min(.98,(n-.18)/.3),s=n<.42?1:n<.46?.75:n<.5?.5:.25;n>.54||ds(e,t,o,a,{core:`W2`,edge:`D3`,width:Math.round(12*r),spine:`W1`,lead:`W0`},i,s)}function Ms(e,t,n,r,i=1,a=P){rs(e,t,n,150*i,r,`B1`,`W1`,a)}function Ns(e,t,n,r,i=-1,a=P,o=180){t=B(t),n=B(n);let s=i<0?1:Math.max(0,1-i/.25),c=i=>{if(!(s<=0))for(let o=0;o<44;o++){let c=o/44*Math.PI*2+r*2.4,l=Math.sin(c);i===l>0&&(o+Math.floor(r*12))%3!=2&&z(e,B(t+Math.cos(c)*20*s),B(n+l*5*s),V(a,o%2?`D4`:`P4`))}};if(c(!1),s>0&&(Nc(e,t,n,2,V(a,`N0`)),Do(e,t,n,4,V(a,`C1`)),z(e,t-2,n-3,V(a,`W0`)),z(e,t-3,n-2,V(a,`W0`))),c(!0),i>=.25){let r=(i-.25)/.75;ts(e,ns(t,n,24,[`W1`,`P4`],o*.4,.5,9,r*.6),a);for(let i=0;i<3;i++){let s=(r-i*.15)/.55;rs(e,t,n,o*(1+i/3),s,i===2?`P4`:`D4`,i===2?`P5`:`W1`,a)}}}var Ps,Fs,B,V,H,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc=o(()=>{mn(),qn(),Ot(),Ps=(e,t,n=0,r=0)=>({rows:e,key:t,ox:n,oy:r}),Fs=e=>Math.max(...e.rows.map(e=>e.length)),B=Math.round,V=(e,t)=>e[t]??P[t],H=(e,t,n,r=0,i=0)=>n>=1?!0:n<=0?!1:N(e-r&1023,t-i&1023,n),Is=e=>e>=.875?1:e>=.625?.75:e>=.375?.5:e>=.125?.25:0,Ls=/* @__PURE__ */ new Map,Rs=([e,t])=>{let n=Math.atan2(e,-t);return n<0?n+Math.PI*2:n},zs=/* @__PURE__ */ new WeakMap,Bs=/* @__PURE__ */ new WeakMap,Vs=0,Hs=/* @__PURE__ */ new WeakMap,Us={w:`W0`,i:`W1`,k:`K7`,c:`C1`},Ws=[`C1`,`K8`,`P4`,`Y2`],Gs=[`..w..`,`.wwi.`,`.wik.`,`cwik.`,`.wikc`,`.wik.`,`.iik.`,`.ikk.`,`..k..`],Ks=[`..w..`,`.wwi.`,`.iwk.`,`.iwk.`,`.iwk.`,`.iik.`,`.iik.`,`.kik.`,`..k..`],qs=[`..w..`,`..w..`,`..w..`,`..w..`,`..i..`,`..i..`,`..i..`,`..k..`,`..k..`],Js=[`..w..`,`..w..`,`..i..`,`..w..`,`..i..`,`..i..`,`..k..`,`..k..`,`..c..`],Ys=[`...w...`,`..wwi..`,`.wwiik.`,`.wwiik.`,`cwwiik.`,`.wwiikc`,`.wwiik.`,`.wiiik.`,`.wiikk.`,`.iiikk.`,`..ikk..`,`..ikk..`,`...k...`],Xs=[`...w...`,`..wwi..`,`.iwwik.`,`.iwwik.`,`.iwwik.`,`.iwwik.`,`.iwiik.`,`.iwiik.`,`.iwikk.`,`.iiikk.`,`..ikk..`,`..ikk..`,`...k...`],Zs=[`...w...`,`...w...`,`..wwi..`,`..wwk..`,`..wik..`,`..wik..`,`..wik..`,`..iik..`,`..iik..`,`..ikk..`,`..ikk..`,`...k...`,`...k...`],Qs=[`...w...`,`...w...`,`..iwi..`,`..iwk..`,`..iwk..`,`..iwk..`,`..iik..`,`..iik..`,`..kik..`,`..kik..`,`..kkc..`,`...k...`,`...k...`],$s=e=>e.map(e=>e.split(``).reverse().join(``)),ec=Io(Gs,Ks,qs,Js,2),tc=Io(Ys,Xs,Zs,Qs,3),nc={p:`P4`,P:`P5`,c:`W2`,X:`W0`},rc=[Ps([`.ppp.ppp.`,`pXXPpPPPp`,`pPPPcPPPp`,`pPPcPcPPp`,`.pPPcPPp.`,`..pPPPp..`,`...pPp...`,`....p....`],nc,4,4),Ps([`.ppp.ppp.`,`pXXPpPPPp`,`pXPPcPPPp`,`pPPcPcPPp`,`.pPPcPPp.`,`..pPPPp..`,`...pPp...`,`....p....`],nc,4,4)],ic={Y:`Y2`,1:`Y1`,o:`Y0`,X:`W0`},ac=e=>e?[`...Y...`,`..YY1..`,`..YY1..`,`.YYY11.`,`.YYX11.`,`YYXXX1o`,`.11X1o.`,`.111oo.`,`..11o..`,`..1oo..`,`...o...`]:[`...Y...`,`..YY1..`,`..YY1..`,`.YYY11.`,`.YYY11.`,`YYYX11o`,`.111oo.`,`.111oo.`,`..11o..`,`..1oo..`,`...o...`],oc=[Ps(ac(!1),ic,3,5),Ps(ac(!0),ic,3,5)],sc=Ps([`..Y..`,`.YY1.`,`.YX1.`,`YYX1o`,`.11o.`,`.1oo.`,`..o..`],ic,2,3),cc={24:[24,30],12:[12,20],7:[7,11],6:[7,9]},lc=[`v2`,`incepture`,`daiki`],uc=[[[.2,0],[.72,.02],[1,.2],[1,.64],[.84,.98],[.28,1],[0,.8],[0,.26]],[[.34,0],[.9,.08],[1,.42],[.78,.86],[.5,1],[.14,.86],[0,.46],[.08,.12]],[[.36,0],[.8,.06],[1,.36],[1,.72],[.78,1],[.22,1],[0,.74],[.04,.28]]],dc=[[.46,.42],[.5,.4],[.48,.44]],fc={v2:{11:[`....#....`,`..##.##..`,`.#.....#.`,`#....####`,`#...#...#`,`#...#...#`,`#...#...#`,`####....#`,`.#.....#.`,`..##.##..`,`....#....`],6:[`.###.`,`#...#`,`#..##`,`##..#`,`#...#`,`.###.`],3:[`.#.`,`#.#`,`.#.`]},incepture:{11:[`.....#.....`,`.#...#...#.`,`..#..#..#..`,`...#.#.#...`,`.....#.....`,`#####.#####`,`.....#.....`,`...#.#.#...`,`..#..#..#..`,`.#...#...#.`,`.....#.....`],6:[`#.#.#`,`.###.`,`##.##`,`.###.`,`#.#.#`],3:[`#.#`,`.#.`,`#.#`]},daiki:{11:[`###....`,`###....`,`###....`,`...###.`,`...####`,`...###.`,`###....`,`###....`,`###....`],6:[`##..`,`##..`,`..##`,`..##`,`##..`,`##..`],3:[`#.`,`.#`,`#.`]}},pc=/* @__PURE__ */ new Map,mc=[`D2`,`D3`,`C1`,`W2`,`W1`,`W0`],hc=(e,t,n)=>{let r=B(t.x),i=B(t.y);e.fillStyle=V(n,`D3`);for(let[t,n]of[[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]])e.fillRect(r+t,i+n,1,1);z(e,r,i,V(n,`W0`))},gc=[`if`,`new`,`let`,`=>`,`{}`,`fn()`,`0x1`,`;`],_c=`</>`,vc=(1+Math.sqrt(5))/2,yc=(()=>{let e=[];for(let t of[-1,1])for(let n of[-vc,vc])e.push([0,t,n],[t,n,0],[n,0,t]);return e})(),bc=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],xc=[[1,1,1],[1,-1,-1],[-1,1,-1],[-1,-1,1]],Sc=e=>{let t=1/0;for(let n=0;n<e.length;n++)for(let r=n+1;r<e.length;r++)t=Math.min(t,Cc(e[n],e[r]));let n=[];for(let r=0;r<e.length;r++)for(let i=r+1;i<e.length;i++)Math.abs(Cc(e[r],e[i])-t)<1e-6&&n.push([r,i]);return n},Cc=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),wc={icosa:{v:yc,e:Sc(yc),period:Math.PI*2/5,axis:vs([0,1,vc])},octa:{v:bc,e:Sc(bc),period:Math.PI/2,axis:[0,1,0]},tetra:{v:xc,e:Sc(xc),period:Math.PI*2/3,axis:vs([1,1,1])}},Tc=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Ec=/* @__PURE__ */ new Map,Dc=e=>xs(`icosa`,9,e),Oc=e=>xs(`octa`,7,e),kc=e=>xs(`tetra`,7,e),Ac=e=>xs(`icosa`,13,e),jc=e=>xs(`octa`,9,e,`FU5`,`G2`,`W0`),Mc=e=>xs(`icosa`,9,e,`P4`,`P2`,`R5`),Nc=(e,t,n,r,i)=>Oo(e,t,n,r,i),ec.map(e=>e[0]),ec[0],tc.map(e=>e[0]),[0,1,2].map(e=>Go(e,24)),[0,1,2].map(e=>Go(e,12)),[0,1,2].map(e=>Go(e,7)),[0,1,2].map(e=>Go(e,6)),Go(0,24,!1),Go(1,12,!1),Go(2,6,!1),[0,1,2,3,4,5,6,7].map(Dc),[0,2,4,6].map(Oc),[0,2,4,6].map(kc),[0,2,4,6].map(Ac),[0,2,4,6].map(jc),[0,2,4,6].map(Mc)});function Fc(e,t){let n=e+`/`+t,r=ml.get(n);if(r)return r;let i,a=dl[e];if(a){let e=Array.from({length:11},()=>Array(11).fill(`.`));ul[a[0]].forEach((t,n)=>t.split(``).forEach((t,r)=>t!==`.`&&(e[n][r]=t))),ul[a[1]].forEach((t,n)=>t.split(``).forEach((t,r)=>t!==`.`&&(e[n+4][r+4]=t))),i=e.map(e=>e.join(``))}else i=cl[e]||cl.keep;let o=i.map((e,t)=>e.split(``).map((e,n)=>e===`:`?(n+t)%2?`#`:`.`:e===`,`?n%2==0&&t%2==0?`#`:`.`:e).join(``)),s=Ps(o,{"#":t},5,5);return ml.set(n,s),s}function Ic(e,t){let n=e+t,r=yl.get(n);if(!r){let i=e===7?gl:e===9?_l:vl;yl.set(n,r=Ps(i,{"#":t},e>>1,e>>1))}return r}function Lc(e,t,n,r,i,a,o=P){return gt(e,t,n,r+1,i+1,V(o,`K0`)),gt(e,t,n,r,i,a)}function Rc(e,t,n,r=-1,i=P){let a=n,o=!1,s=1;r>=0&&r<1.04&&(r<.56?(a=Math.max(n,Math.min(1,n+(1-n)*Tl(r/.2))),o=!0):r<.98?(a=1,s=Is(1-(r-.56)/.42)):a=0),So(e,0,0,t,2,V(i,`K2`)),e.fillStyle=V(i,`K3`);for(let n=Math.floor(t/3);n<Math.floor(2*t/3);n++)for(let t=0;t<2;t++)H(n,t,.25)&&e.fillRect(n,t,1,1);let c=Math.floor(a*t);if(c<=0||s<=0)return;let l=Math.floor(c/3);for(let t=0;t<c;t++){let n=t>=c-4?`W0`:t<l?H(t,0,.5)?`V2`:null:`K8`;for(let r=0;r<(o?3:2);r++){if(!H(t,r,s))continue;let a=n;t<l&&(a=H(t,r,.5)?`V2`:null),a&&(o&&(a=a===`K8`?`K9`:a===`V2`?`K8`:`W0`),z(e,t,r,V(i,a)))}}if(a>.004&&a<.996&&s>=1){let t=c-1;z(e,t,1,V(i,`W0`)),z(e,t-1,1,V(i,`K8`)),z(e,t+1,1,V(i,`K8`)),z(e,t,0,V(i,`K8`)),z(e,t,2,V(i,`K8`))}}function zc(e,t,n,r,i=r,a=1,o=P){let s=wl(),c=t+Lc(e,s,`LEVEL ·`,t,n,V(o,`T1`),o)+3;if(a>=1||i===r){Lc(e,s,String(r),c,n,V(o,`W0`),o);return}let l=Tl(a);e.save(),e.beginPath(),e.rect(c-1,n,20,5),e.clip(),Lc(e,s,String(i),c,n-Math.round(7*l),V(o,`W0`),o),Lc(e,s,String(r),c,n+7-Math.round(7*l),V(o,`W0`),o),e.restore()}function Bc(e,t,n,r,i,a,o=-1,s=0,c=P){let l=Math.max(0,Math.min(1,i/Math.max(1,a))),u=l<.35;e.fillStyle=V(c,`K3`);for(let i=0;i<r;i++)for(let r=0;r<2;r++)H(t+i,n+r,.5)&&e.fillRect(t+i,n+r,1,1);let d=Math.round(l*r),f=Math.round(Math.max(l,o)*r);e.fillStyle=V(c,`P5`);for(let r=d;r<f;r++)for(let i=0;i<2;i++)H(t+r,n+i,.5)&&e.fillRect(t+r,n+i,1,1);let p=u&&s%1.1/1.1>.35&&s%1.1/1.1<.7?.75:1,m=u?`E0`:`P3`,h=u?`E1`:`P4`,g=Math.round(d*.6);for(let r=0;r<d;r++)for(let i=0;i<2;i++){if(!H(t+r,n+i,p))continue;let a=r>=d-2?`P5`:r<g?m:h;r===g&&!H(t+r,n+i,.5)&&(a=m),z(e,t+r,n+i,V(c,a))}if(l>.01){let r=t+d-1;So(e,r,n-1,1,4,V(c,`W0`));let i=u?`E0`:`P4`;z(e,r+1,n-1,V(c,i)),z(e,r+1,n+2,V(c,i)),z(e,r-1,n-1,V(c,i)),z(e,r-1,n+2,V(c,i))}}function Vc(e,t){let n=e+t,r=Ol.get(n);if(r)return r;let i=e===8?Dl:El.map(t=>e===11?t.slice(6):t);return i=i.map((e,t)=>e.split(``).map((e,n)=>e===`:`?(n+t)%2?`#`:`.`:e===`,`?n%4==0?`#`:`.`:e).join(``)),Ol.set(n,r=Ps(i,{"#":t})),r}function Hc(e,t,n,r,i=17,a=P){let o=zn.NIGHT9,s=Math.max(0,Math.floor(r)),c=String(Math.floor(s/60)).padStart(2,`0`)+`:`+String(s%60).padStart(2,`0`),l=ht(o,c),u=i===17?17:i===11?11:8,d=u+4+l+4+u,f=Math.round(t-d/2),p=f+u+4;gt(e,o,c,p,n,V(a,`W0`));let m=n+1,h=Vc(i,`T1`);return No(e,h,f,m,a),No(e,h,p+l+4,m,a,!0),{x:f,y:n,w:d,h:9}}function Uc(e,t,n,r,i=[],a=0,o=P){let s=Math.round(t-15.5);for(let t=0;t<3;t++){let c=s+t*12+3,l=i[t]??-1;if(r[t]&&l>=0&&l<6){let r=l<3?{IC0:`W0`,K8:`W1`,W1:`W0`,K7:`V2`,P4:`P5`,C1:`W0`}:{IC0:`W1`,K8:`IC0`,K7:`K8`};jo(e,Go(t,6,!0),c,n+4,1,o,!1,r)}else Ko(e,t,6,c,n+4,a+t*.37,!!r[t],o)}}function Wc(e,t,n,r,i,a,o=9,s=P,c=!1){let l=wl(),u=r.toUpperCase(),d=ht(l,u),f=Math.round(t-a/2),p=n+o;if(c){let r=d+6+a,i=Math.round(t-r/2);Lc(e,l,u,i,n,V(s,`E1`),s),f=i+d+6,p=n+2}else Lc(e,l,u,Math.round(t-d/2),n,V(s,`E1`),s);for(let t=0;t<a;t++)for(let n=0;n<2;n++)H(f+t,p+n,.25)&&z(e,f+t,p+n,V(s,`T1`));let m=Math.round(Math.max(0,Math.min(1,i))*a);for(let t=0;t<m;t++){let n=t>=m-2?`P5`:t<m*.6?`E0`:`E1`;So(e,f+t,p,1,2,V(s,n)),H(f+t,p-1,.25)&&z(e,f+t,p-1,V(s,`E0`)),H(f+t,p+2,.25)&&z(e,f+t,p+2,V(s,`E0`))}}function Gc(e,t,n,r,i=!1,a=P){e.fillStyle=V(a,i?`K2`:`K0`);for(let i=-r;i<=r;i++)for(let a=-r;a<=r;a++)a*a+i*i<=r*r-1&&e.fillRect(t+a,n+i,1,1);let o=Eo(r),s=o.length;o.forEach(([r,o],c)=>{let l=c/s*360,u=l>262&&l<352?i?`W0`:`W1`:l>118&&l<152||i?`T1`:`T0`;z(e,t+r,n+o,V(a,u))})}function Kc(e,t,n,r,i=!0,a=0,o=!1,s=!1,c=P,l=6){let u=t+l,d=n+l;Gc(e,u,d,l,o||s,c);let f=+!!s;e.fillStyle=V(c,`W0`);let p=(t,n,r)=>t.forEach((t,i)=>[...t].forEach((t,a)=>t===`#`&&e.fillRect(n+a,r+i+f,1,1)));r===`help`?p(bl,u-2,d-3):r===`pause`?p(xl,u-2,d-3):p(i?Sl[Math.floor(a*6)%3]:Cl,u-4,d-2)}function qc(e,t,n,r=!1,i=!1,a=P){let o=n+6;Jc(e,t,n,jl(),r||i,a,6);let s=+!!i,c=V(a,`W0`);e.fillStyle=c;let l=t+6;kl.forEach((t,n)=>[...t].forEach((t,r)=>t===`#`&&e.fillRect(l+r,o-2+n+s,1,1))),gt(e,wl(),Al,l+kl[0].length+3,o-2+s,c)}function Jc(e,t,n,r,i=!1,a=P,o=6){let s=n+o,c=t+o,l=t+r-1-o;e.fillStyle=V(a,i?`K2`:`K0`);for(let n=-o;n<=o;n++)for(let i=t;i<t+r;i++){let t=i<c?i-c:i>l?i-l:0;t*t+n*n<=o*o-1&&e.fillRect(i,s+n,1,1)}let u=Eo(o),d=u.length;u.forEach(([t,n],r)=>{let o=r/d*360,u=o>262&&o<352?i?`W0`:`W1`:o>118&&o<152||i?`T1`:`T0`;t<=0&&z(e,c+t,s+n,V(a,o>118&&o<152?i?`T1`:`T0`:u)),t>=0&&z(e,l+t,s+n,V(a,o>262&&o<352?i?`T1`:`T0`:u))}),e.fillStyle=V(a,i?`T1`:`T0`),e.fillRect(c+1,s-o,l-c-1,1),e.fillRect(c+1,s+o,l-c-1,1)}function Yc(e,t,n,r=!1,i=!1,a=P){Jc(e,t,n,Ll(),r||i,a,6);let o=n+6+ +!!i,s=t+1+Nl+1;for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)z(e,s+n,o+t,V(a,n===0&&t===0?`S6`:n===0||t===0?`R5`:`S5`));for(let[t,n]of[[0,-2],[2,0],[0,2],[-2,0]])z(e,s+t,o+n,V(a,`Y0`));gt(e,wl(),Ml,s+2+Pl,o-2,V(a,`W0`))}function Xc(e,t,n,r,i,a,o=1,s=0,c=P,l=8){let u=t+l+1,d=n+l+1,f=Eo(l),p=f.length,m=i&&!a;if(m){let t=s%1.4/1.4,n=l+1+Math.round(4*t),r=t<.45?.5:t<.8?.25:0;r>0&&Do(e,u,d,n,V(c,`G1`),r)}for(let[t,n]of f)z(e,u+t,d+n,V(c,`K3`));let h=Math.round(Math.max(0,Math.min(1,a?o:r))*p),g=a||i?`G1`:`W0`;for(let t=0;t<h;t++){let[n,r]=f[t];if(z(e,u+n,d+r,V(c,g)),m||a){let t=n-Math.sign(n)*+(Math.abs(n)>=Math.abs(r)),i=r-Math.sign(r)*+(Math.abs(r)>=Math.abs(n));z(e,u+t,d+i,V(c,`G1`))}}m?No(e,Ic(Math.floor(s/.375)%2==1?9:7,`W0`),u,d,c):No(e,Ic(7,a?`G1`:`T1`),u,d,c)}function Zc(e,t,n,r,i,a,o,s=1,c=0,l=!1,u=P){let d=r-1>>1,f=t+d,p=n+d;Gc(e,f,p,d,l,u);let m=d-4;Xc(e,f-m-1,p-m-1,i,a,o,s,c,u,m)}function Qc(e,t,n,r,i,a=!1,o=P){let s=fl[r]||`W0`,c=pl[s]||`T1`,l=t+6,u=n+6;No(e,Fc(r,s),l,u,o);let d=n+15;for(let t=0;t<5;t++)z(e,l-4+t*2,d,V(o,a||t<i?s:c))}function $c(e,t,n,r,i=P){No(e,Fc(`keep`,`Y2`),t+6,n+6,i),Lc(e,wl(),`×`+r,t+14,n+4,V(i,`Y2`),i)}function el(e,t,n,r=P,i=`night`){let a={word:V(r,`T1`),key:V(r,`T1`),box:V(r,`K7`),shadow:i===`night`?null:V(r,`K0`)},o=Rl.length;Rl.forEach((r,i)=>Tn(e,r,t,n+11-(o-1-i)*Bl,a))}function tl(e,t,n,r=!1,i=0,a=P){if(t=Math.round(t),n=Math.round(n),r){No(e,Ic(13,`G1`),t,n,a);let r=wl(),i=`CLICK TO OVERDRIVE`,o=ht(r,i);Lc(e,r,i,Math.max(2,Math.min(e.canvas.width-2-o,Math.round(t-o/2))),n-6-4-5,V(a,`G1`),a)}else Do(e,t,n,5,V(a,`C1`),.25),Do(e,t,n,4,V(a,`W0`)),z(e,t,n,V(a,`W0`))}function nl(e,t,n,r,i=P){if(r<.15)return;e.fillStyle=V(i,`E0`);let a=(r,i,a)=>{for(let o=0;o<n;o++)for(let s=0;s<t;s++){let c=Math.min(s,o,t-1-s,n-1-o);c<r||c>=i?c>=i&&s>i&&s<t-1-i&&(s=t-1-i):H(s,o,a)&&e.fillRect(s,o,1,1)}};r<.6?a(0,3,.25):(a(0,3,.5),a(3,6,.25))}function rl(e,t,n,r,i,a=1,o=P,s=29,c=13,l=23){if(a<=0)return;t=Math.round(t),n=Math.round(n);let u=(t,n,r,i,s)=>{e.fillStyle=V(o,`K0`);for(let o=-r;o<=r;o++)for(let s=-r;s<=r;s++)s*s+o*o<=r*r-1&&H(t+s,n+o,i*a)&&e.fillRect(t+s,n+o,1,1);let c=Eo(r),l=c.length;c.forEach(([r,i],c)=>{let u=c/l*360,d=u>262&&u<352,f=u>118&&u<152;H(t+r,n+i,(d||f?1:s)*a)&&z(e,t+r,n+i,V(o,d?`W1`:f?`T1`:`T0`))})};u(t,n,s,.25,.5);let d=Math.hypot(r,i),f=d>l?l/d:1,p=t+Math.round(r*f),m=n+Math.round(i*f);u(p,m,c,.5,1);let h=Eo(Math.max(2,c-3)),g=h.length;h.forEach(([t,n],r)=>{let i=r/g*360;i>292&&i<330&&H(p+t,m+n,a)&&z(e,p+t,m+n,V(o,`W0`))})}function il(e,t,n,r=0,i=!1,a){let o=t<200,s=n!==`pc`,c=n===`phone`?9:8,l=Math.floor(e/2),u=Ll(),d=86+ht(wl(),`×9`)+1,f=Math.floor((e-u)/2),p=(e,n=f)=>({x:n,y:t-e-13,w:u,h:13}),m=e-c-zl(),h=(t,n)=>{if(t+d+Fl<=f)return{x:f,chipsX:t,up:!1,hints:n==null&&f+u+Fl<=m};let r=n??e-c;return f+u+Fl+d<=r?{x:f,chipsX:r-d,up:!1,hints:!1}:t+d-72+Fl<=f&&f+u+Fl+72<=r?{x:f,chipsX:r-72,coreX:t,up:!1,hints:!1}:{x:f,chipsX:t,up:!0,hints:!1}};if(o){let n=s?[`pause`,`sound`]:[`help`,`pause`,`sound`],r=n.map((t,r)=>({id:t,x:e-c-13-(n.length-1-r)*17,y:2})),a=h(s?c:c+24,s?e-c-23-Fl:null);return{compact:o,touch:s,level:{x:c,y:4},life:{x:c+50,y:6,w:40,h:2},wake:{x:c,y:12,w:jl(),h:13},mode:p(s?13:11,a.x),hpNum:s?null:{x:c+50+44,y:3},timer:{cx:l-16,y:2,orn:8},strip:{cx:l+40,y:2},boss:{cx:l,y:14,w:96,oneRow:!0},coins:r,ring:s?null:{x:c,y:t-8-19},odLabel:s?null:{x:c,y:t-8-19-7},touchOD:s?{x:e-c-23,y:t-8-23,size:23}:null,chips:{x:a.chipsX,y:t-8-19-(a.up?Il:0),step:18,coreX:`coreX`in a?a.coreX:void 0},hints:a.hints?{xr:e-c,y:t-8-20}:null,hudT:i?26:18}}if(n===`phone`||n===`tabp`){let u=r,d=n===`tabp`,f=d?[`help`,`pause`,`sound`]:[`pause`,`sound`],m=f.map((t,n)=>({id:t,x:e-c-13-(f.length-1-n)*17,y:u+10})),h=d?23:31,g=t-43;return{compact:o,touch:s,level:{x:c,y:u+12},life:{x:c,y:u+21,w:d?48:30,h:2},wake:{x:c,y:u+(d?27:29),w:jl(),h:13},mode:p(a??(d?6:11)),hpNum:d?{x:c+52,y:u+18}:null,timer:{cx:l,y:u+10,orn:11},strip:{cx:l,y:u+22},boss:{cx:l,y:u+(d?36:42),w:66,oneRow:!1},coins:m,ring:null,odLabel:null,touchOD:{x:e-c-h-1,y:g-3-h,size:h},chips:{x:c,y:g-4-17,step:18},hints:null,hudT:u+(i?52:d?40:42)}}let g=[`help`,`pause`,`sound`].map((t,n)=>({id:t,x:e-c-13-(2-n)*17,y:6})),_=n===`tab`,v=h(_?c+30:c+26,_?e-c:null);return{compact:o,touch:s,level:{x:c,y:8},life:{x:c,y:17,w:48,h:2},wake:{x:c,y:25,w:jl(),h:13},mode:p(_?a??6:5,v.x),hpNum:{x:c+52,y:14},timer:{cx:l,y:7,orn:17},strip:{cx:l,y:19},boss:{cx:l,y:36,w:112,oneRow:!1},coins:g,ring:_?null:{x:c,y:t-28},odLabel:_?null:{x:c,y:t-35},touchOD:_?{x:c,y:t-8-23,size:23}:null,chips:{x:v.chipsX,y:t-27-(v.up?Il:0),step:18,coreX:`coreX`in v?v.coreX:void 0},hints:v.hints?{xr:e-c,y:t-25}:null,hudT:i?52:40}}function al(e,t){let n=Math.round(t*4),r=Ul.get(n);if(r)return r;let i=document.createElement(`canvas`);i.width=i.height=4;let a=i.getContext(`2d`);a.fillStyle=`#000`;for(let e=0;e<4;e++)for(let t=0;t<4;t++)H(t,e,n/4)&&a.fillRect(t,e,1,1);return r=e.createPattern(i,`repeat`),Ul.set(n,r),r}function ol(e,t,n,r,i,a){if(r=Is(r),r<=0)return;if(r>=1&&i===0)return a(e);(!Vl||Vl.width!==t||Vl.height!==n)&&(Vl=document.createElement(`canvas`),Vl.width=t,Vl.height=n,Hl=Vl.getContext(`2d`),Hl.imageSmoothingEnabled=!1);let o=Hl;o.globalCompositeOperation=`source-over`,o.clearRect(0,0,t,n),a(o),r<1&&(o.globalCompositeOperation=`destination-in`,o.fillStyle=al(o,r),o.fillRect(0,0,t,n),o.globalCompositeOperation=`source-over`),e.drawImage(Vl,0,Math.round(i))}function sl(e,t,n,r,i,a=P){let o=il(t,n,r,i.safeTop??0,!!i.boss,i.modeFoot),s=i.t;i.lowHp&&nl(e,t,n,i.lowHp,a);let c=i.sheet==null?1:1-i.sheet,l=0,u=(r,a)=>{let o=l++,s=c,u=0;if(i.enter!=null){let e=Math.max(0,Math.min(1,(i.enter-o*.04)/.45)),t=Tl(e);u=Math.round(8*(1-t))*r,s=Math.min(s,e<=0?0:.25+.75*t)}ol(e,t,n,s,u,a)};return u(-1,e=>Rc(e,t,i.xp,i.xpFlash??-1,a)),u(-1,e=>{zc(e,o.level.x,o.level.y,i.level,i.prevLevel??i.level,i.levelRoll??1,a),Bc(e,o.life.x,o.life.y,o.life.w,i.hp,i.maxHp,i.hpTrail??-1,s,a),o.hpNum&&Lc(e,zn.NIGHT7,String(Math.max(0,Math.ceil(i.hp))),o.hpNum.x,o.hpNum.y,V(a,i.hp/i.maxHp<.35?`P4`:`P5`),a)}),u(-1,e=>{Hc(e,o.timer.cx,o.timer.y,i.time,o.timer.orn,a),Uc(e,o.strip.cx,o.strip.y,i.memories,i.memFlash,s,a)}),u(-1,e=>{for(let t of o.coins)Kc(e,t.x,t.y,t.id,i.sound!==!1,s,i.hover===t.id,i.press===t.id,a)}),u(-1,e=>qc(e,o.wake.x,o.wake.y,i.hover===`wake`,i.press===`wake`,a)),i.boss&&u(-1,e=>Wc(e,o.boss.cx,o.boss.y,i.boss.name,i.boss.k,o.boss.w,r===`phone`?8:9,a,o.boss.oneRow)),u(1,e=>{o.ring&&(Xc(e,o.ring.x,o.ring.y,i.ring,!!i.ready,!!i.running,i.runK??1,s,a),o.odLabel&&(i.ready||i.running)&&Lc(e,wl(),i.running?`OVERDRIVE`:`CLICK TO OVERDRIVE`,o.odLabel.x,o.odLabel.y,V(a,`G1`),a)),o.touchOD&&Zc(e,o.touchOD.x,o.touchOD.y,o.touchOD.size,i.ring,!!i.ready,!!i.running,i.runK??1,s,i.press===`od`,a)}),u(1,e=>{let t=o.chips.x;for(let n of i.skills)Qc(e,t,o.chips.y,n.id,n.lv,n.fused,a),t+=o.chips.step;i.cores&&$c(e,o.chips.coreX??t,o.chips.y,i.cores,a)}),o.hints&&u(1,e=>el(e,o.hints.xr,o.hints.y,a,i.bg??(i.boss?`storm`:`night`))),u(1,e=>Yc(e,o.mode.x,o.mode.y,i.hover===`mode`,i.press===`mode`,a)),i.reticle&&r===`pc`&&c>=1&&tl(e,i.reticle.x,i.reticle.y,!!i.ready&&!i.running,s,a),i.drag&&rl(e,i.drag.x,i.drag.y,i.drag.kx,i.drag.ky,i.drag.k??1,a,i.drag.R,i.drag.r,i.drag.T),o}var cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl=o(()=>{mn(),qn(),Ot(),Pc(),cl={design:[`...........`,`...#....###`,`........#.#`,`........###`,`.......#...`,`...####....`,`..#........`,`###........`,`#.#........`,`###...#....`,`...........`],code:[`...........`,`...........`,`......#....`,`..#...#.#..`,`.#....#..#.`,`#....#....#`,`.#...#...#.`,`..#..#..#..`,`....#......`,`...........`,`...........`],motion:[`...........`,`......###..`,`.....#...#.`,`..:.#.....#`,`.:.:#.....#`,`,.:.#.....#`,`.:.:#.....#`,`..:.#.....#`,`.....#...#.`,`......###..`,`...........`],"3d":[`.....#.....`,`...##.##...`,`.##..#..##.`,`#....#....#`,`#....#....#`,`.#..#.#..#.`,`.#.#...#.#.`,`.##.....##.`,`..#######..`,`...........`,`...........`],speed:[`...........`,`..#...#....`,`...#...#...`,`....#...#..`,`.....#...#.`,`....#...#..`,`...#...#...`,`..#...#....`,`...........`,`...........`,`...........`],power:[`.....#.....`,`.....#.....`,`....#.#....`,`....#.#....`,`..##...##..`,`##.......##`,`..##...##..`,`....#.#....`,`....#.#....`,`.....#.....`,`.....#.....`],cooldown:[`.......#...`,`........#..`,`....######.`,`..##....#..`,`..#..#.#...`,`.#...#.....`,`.#...###...`,`.#.......#.`,`..#.....#..`,`..##...##..`,`....###....`],area:[`###.....###`,`#.........#`,`#.........#`,`.....#.....`,`.....#.....`,`...#####...`,`.....#.....`,`.....#.....`,`#.........#`,`#.........#`,`###.....###`],magnet:[`...........`,`...........`,`.###...###.`,`.#.#...#.#.`,`.#.#...#.#.`,`.#.#...#.#.`,`.#..###..#.`,`..#.....#..`,`...#####...`,`...........`,`...........`],recovery:[`...........`,`.##...##...`,`#..#.#..#..`,`#...#...#..`,`#.......#..`,`.#.....#...`,`..#...#....`,`...#.#.....`,`....#......`,`...........`,`...........`],charge:[`......##...`,`.....#.#...`,`....#..#...`,`...#..#....`,`..#...####.`,`.####...#..`,`....#..#...`,`...#..#....`,`...#.#.....`,`...##......`,`...........`],keep:[`.....#.....`,`....###....`,`...#.#.#...`,`..#..#..#..`,`.#...#...#.`,`###########`,`.#...#...#.`,`..#..#..#..`,`...#.#.#...`,`....###....`,`.....#.....`]},cl.rest=cl.recovery,cl.core=cl.keep,ll=(e,t)=>[...Array(t).fill(`...........`)].concat(e.slice(0,11-t)),cl.speed=ll(cl.speed,1),cl.recovery=ll(cl.recovery,1),cl.rest=cl.recovery,cl[`3d`]=(()=>{let e=Array.from({length:11},()=>Array(11).fill(`.`)),t=[[5,0],[10,4],[8,9],[2,9],[0,4]],n=(t,n,r=`#`)=>{let[i,a]=t,[o,s]=n,c=Math.abs(o-i),l=-Math.abs(s-a),u=i<o?1:-1,d=a<s?1:-1,f=c+l;for(;e[a][i]!==`#`&&(e[a][i]=r),i!==o||a!==s;){let e=2*f;e>=l&&(f+=l,i+=u),e<=c&&(f+=c,a+=d)}},r=[5,5];t.forEach((e,r)=>n(e,t[(r+1)%5]));for(let e of t)n(e,r,`:`);return e[5][5]=`#`,e.map(e=>e.join(``))})(),cl.motion=(()=>{let e=Array.from({length:11},()=>Array(11).fill(`.`)),t=(t,n,r)=>{for(let i=0;i<64;i++){let a=Math.round(t+n*Math.cos(i/64*Math.PI*2)),o=Math.round(5+n*Math.sin(i/64*Math.PI*2));a>=0&&a<11&&o>=0&&o<11&&(e[o][a]===`.`||r===`#`||r===`:`&&e[o][a]===`,`)&&(e[o][a]=r)}};return t(2.5,1.6,`,`),t(4.6,2.2,`:`),t(7.2,2.8,`#`),e.map(e=>e.join(``))})(),ul={design:[`.....##`,`.....##`,`....#..`,`..##...`,`.#.....`,`##.....`,`##.....`],code:[`.......`,`...#...`,`.#.#.#.`,`#..#..#`,`.#.#.#.`,`...#...`,`.......`],motion:[`...###.`,`..#...#`,`:.#...#`,`.:#...#`,`:.#...#`,`..#...#`,`...###.`],"3d":[`...#...`,`.##.##.`,`#..#..#`,`#.#.#.#`,`.#...#.`,`.#####.`,`.......`]},dl={algorithmic:[`design`,`code`],spline:[`design`,`motion`],reaper:[`design`,`3d`],automation:[`code`,`motion`],procedural:[`code`,`3d`],spatial:[`motion`,`3d`]},fl={design:`W2`,code:`G0`,motion:`B1`,"3d":`R5`,algorithmic:`C1`,spline:`K8`,reaper:`W1`,automation:`FU4`,procedural:`FU5`,spatial:`P4`,keep:`Y2`,core:`Y2`},pl={W2:`D3`,G0:`G2`,B1:`K6`,R5:`Y1`,C1:`D3`,K8:`M3`,W1:`K7`,FU4:`G2`,FU5:`G2`,P4:`P2`,Y2:`Y0`,W0:`T1`,G1:`G2`,V2:`M3`},ml=/* @__PURE__ */ new Map,hl=[`design`,`code`,`motion`,`3d`,`speed`,`power`,`cooldown`,`area`,`magnet`,`recovery`,`charge`,`keep`],gl=[`...#...`,`...#...`,`..###..`,`#######`,`..###..`,`...#...`,`...#...`],_l=[`....#....`,`....#....`,`...###...`,`...###...`,`#########`,`...###...`,`...###...`,`....#....`,`....#....`],vl=(()=>{let e=Array.from({length:13},()=>Array(13).fill(`.`));_l.forEach((t,n)=>t.split(``).forEach((t,r)=>t===`#`&&(e[n+2][r+2]=`#`)));for(let[t,n]of Eo(6)){let r=(Math.atan2(n,t)*180/Math.PI+360+22.5)%45;r>14&&r<31&&(e[n+6][t+6]=`#`)}return e.map(e=>e.join(``))})(),yl=/* @__PURE__ */ new Map,bl=[`.###.`,`#...#`,`....#`,`..##.`,`..#..`,`.....`,`..#..`],xl=[`#.#..`,`#.#..`,`#.#..`,`#.#..`,`#.#..`,`#.#..`].map(e=>`.`+e.slice(0,4)),Sl=[[`.##......`,`#..#.....`,`....#...#`,`.....#..#`,`......##.`].map(e=>e),[`..##.....`,`.#..#....`,`#....#..#`,`......##.`,`.........`],[`...##....`,`..#..#...`,`.#....#..`,`#......##`,`.........`]],Cl=[`.........`,`.........`,`#########`,`.........`,`.........`],wl=()=>zn.NIGHT5,Tl=e=>1-(1-Math.max(0,Math.min(1,e)))**3,El=[`...............#.`,`......:######..#.`,`..............###`,`,.:.#########.###`,`..............###`,`......:######..#.`,`...............#.`],Dl=[`.......`,`:###..#`,`.....##`,`####.##`,`.....##`,`:###..#`,`.......`].map(e=>e.padStart(8,`.`)),Ol=/* @__PURE__ */ new Map,kl=[`..#..`,`.#...`,`#####`,`.#...`,`..#..`],Al=`WAKE UP`,jl=()=>13+kl[0].length+3+ht(wl(),Al),Ml=`WAKE`,Nl=7,Pl=5,Fl=6,Il=28,Ll=()=>2+2*Nl+3+Pl+ht(wl(),Ml),Rl=[[``,`/`,``,`MOVE`],[`[CLICK]`,`/`,`[SPACE]`,`OVERDRIVE`]],zl=()=>Math.max(...Rl.map(Sn)),Bl=14,Vl=null,Hl=null,Ul=/* @__PURE__ */ new Map,hl.map(e=>Fc(e,`W0`)),[`design`,`code`,`motion`,`3d`].map(e=>Fc(e,fl[e])),Object.keys(dl).map(e=>Fc(e,fl[e])),Ic(7,`W0`),Ic(9,`W0`),Ic(13,`G1`),Vc(17,`T1`),Vc(11,`T1`),Vc(8,`T1`)});function Gl(e,t){let n=e+`:`+t,r=nu.get(n);if(r)return r;let i=ho[e]?.[t],a=[];if(!i)return[{x:10,y:0}];i.rows.forEach((e,t)=>e.split(``).forEach((e,n)=>{if(i.key[e]!==`W0`)return;let r=n-(i.ox??0),o=t-(i.oy??0);r>=-1&&r<=2&&o>=-1&&o<=2||a.push({x:r,y:o})}));let o=a.length?a.sort((e,t)=>t.x-e.x):[{x:10,y:0}];return nu.set(n,o),o}function Kl(e,t,n,r,i){let a=Math.max(1,Math.round(Math.max(Math.abs(n.x-t.x),Math.abs(n.y-t.y)))),o=Math.floor(r*30);for(let r=0;r<=a;r++){let s=Jl(t.x+(n.x-t.x)*r/a),c=Jl(t.y+(n.y-t.y)*r/a);(r-o)%3==0?z(e,s,c,V(i,`L0`)):N(s,c,.25)&&z(e,s,c,V(i,`K7`))}}function ql(e,t,n,r,i,a=!0){for(let a=0;a<r;a++){let o=1-a/r,s=a<3?`W1`:a<7?`K7`:`K6`;a>2&&!N(t+a,n,.25+.75*o)||(z(e,t+a+3,n+ +(a>r*.6),V(i,s)),z(e,t-a-3,n+ +(a>r*.6),V(i,s)))}if(a)for(let[r,a]of[[-5,-4],[-2,-7],[3,-6],[6,-3]])z(e,t+r,n+a,V(i,`W1`))}var Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou=o(()=>{mn(),Ot(),qn(),xo(),Pc(),Jl=Math.round,Yl=(e,t,n)=>e<t?t:e>n?n:e,Xl=e=>Object.fromEntries($t.map(t=>[t,e(t)])),Zl=e=>{let t=[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)/255).map(e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4);return .2126*t[0]+.7152*t[1]+.0722*t[2]},Ql={K:3,M:2,P:2,E:0},$l=e=>{let t=Xt(e,-3),n=tn[t];return n&&Ql[n]!=null&&en[n].indexOf(t)>Ql[n]&&(t=en[n][Ql[n]]),n&&![`K`,`M`,`P`,`N`,`text`,`paperA`,`paperQ`].includes(n)&&Zl(P[t])>Zl(P.K4)&&(t=`K3`),t},pn.sheetNight||(pn.sheetNight=Xl(e=>P[$l(e)])),pn.sheetDrain||(pn.sheetDrain=Xl(e=>pn.drain4[$l(e)])),pn.sheetLight||(pn.sheetLight=Xl(e=>P[Xt(e,5)])),eu=e=>pn[e]||P,tu=e=>({pn:e,pal:eu(e)}),nu=/* @__PURE__ */ new Map,ru=(e,t)=>Gl(e,t)[0],iu={x:-12,dx:10,y:-14,dy:2},au=(e,t)=>[Yl((t.x-e.x)/16,-1,1),Yl((t.y-e.y)/16,-1,1)]});function su(e,t,n,r,i){vd.noClip||(e.beginPath(),e.rect(t,n,r,i),e.clip())}function cu(e,t,n){let r=e<<16|t<<8|n,i=bd.get(r);return i===void 0&&bd.set(r,i=yd(e,t,n)),i}function lu(e,t,n,r,i,a,o,s=1,c=null){if(s<=0)return;if(n=Math.floor(n)-1,r=Math.floor(r)-1,i=Math.ceil(i)+2,a=Math.ceil(a)+2,Jd){if(e===Zd)return;if(s>=1&&!c){e.save(),e.beginPath(),e.rect(n,r,i,a),e.clip(),o(e),e.restore();return}}xd||=document.createElement(`canvas`);let l=Math.max(e.canvas.width,n+i+2),u=Math.max(e.canvas.height,r+a+2);(xd.width<l||xd.height<u)&&(xd.width=Math.max(xd.width,l),xd.height=Math.max(xd.height,u));let d=xd.getContext(`2d`,{willReadFrequently:!0});d.imageSmoothingEnabled=!1;let f=Math.max(0,n),p=Math.max(0,r),m=Math.min(xd.width,n+i)-f,h=Math.min(xd.height,r+a)-p;if(m<=0||h<=0)return;d.clearRect(f,p,m,h),d.save(),d.beginPath(),d.rect(f,p,m,h),d.clip(),o(d),d.restore();let g=d.getImageData(f,p,m,h).data,_=(e,t)=>e>=0&&t>=0&&e<m&&t<h&&g[(t*m+e)*4+3]>127;for(let n=0;n<h;n++)for(let r=0;r<m;r++){let i=(n*m+r)*4;if(g[i+3]<=127)continue;let a=f+r,o=p+n,l=c?s*c(a,o):s;if(l<=0||l<1&&!N(a,o,l))continue;let u=g[i],d=g[i+1],h=g[i+2],v=cu(u,d,h),y=u>90&&u>d*1.6&&u>h*1.25,b=!_(r,n-1),x=uu(t,v,y,b||!_(r-1,n)||!_(r+1,n)||!_(r,n+1),b,a,o);x&&F(e,a,o,x)}}function uu(e,t,n,r,i,a,o){let s=!(a+o&1),c=e=>((a+o)%e+e)%e===0;return e===`ink`?n?t>70?`A1`:`BR`:t>88?`A1`:r||t<14?`BI`:t<26?s?`BI`:null:t<42?c(3)?`BI`:null:t<62&&c(4)?`BI`:null:e===`red`?r?`BR`:t>96?`A1`:t>84?s?`BR`:`A1`:`BR`:e===`ice`?r?i?`Y1`:`Y0`:t>95?`Y2`:t>84?s?`Y2`:`W0`:t>60?`Y1`:`Y0`:r&&!i?e===`goldInk`?`BI`:`Y0`:r?t>70?`Y2`:`Y1`:t>92?`W0`:t>72?`Y2`:t>45||t>25&&s?`Y1`:`Y0`}function du(e,t){return e?t?{pt:4,ps:4,pb:6,gs:3,air:4}:{pt:3,ps:3,pb:5,gs:3,air:4}:{pt:1,ps:1,pb:3,gs:2,air:3}}function fu(e,t,n,r){if(!Fd)return void $n(e,R,t,n,r,Ed,`center`,Ad);yt(e,n,r,()=>$n(e,Md,t,0,0,Ed,`center`,Nd))}function pu(e,t,n,r,i,a,o){Fd=o;let s=du(o,a),c=e+4+s.ps,l=n-2*(4+s.ps),u=t+4+s.pt,d=kd(i,a),f=Od[i].map(e=>c+l*e),{lines:p,cent:m}=Au(d.bottom,f,c,l),h=e=>t+r-4-s.pb-zd(e),g=e=>e?Math.floor(h(e)-s.gs+1-u):r-8-2*s.pt,_=Math.max(...p.map(e=>e.length)),v=g(_)<24?0:_,y=g(v),b=h(v),x=d.top&&r>=56?Id(d.top)<=l-4?[d.top]:ku(d.top):[],S=o?t+4+s.pb:t+7,C=x.length?o?S-u+Math.ceil(zd(x.length))+4:x.length*jd+4:0,w=y<50?0:y<88?1:2,T=y>=100;if(i===4){let e=T&&l<160,t=ud(w,T,e),n=f.length-1,r=c+l-1-yf(t.rx0,t.len);if(f[n]>r){let t=Math.min(f[n]-r,vf);f[n]-=t,e&&(f[n-1]-=Math.round(t/2)),{lines:p,cent:m}=Au(d.bottom,f,c,l)}}let E=null,D=[],O=[],k=t+r-4-s.pb,A=y;if(T&&l<160&&Td[i]&&v){let e=Td[i].map(e=>Au(e.words.map(e=>d.bottom[e]),e.at.map(e=>c+l*e),c,l,e.words.length>1)),t=e.map(e=>zd(Math.max(...e.lines.map(e=>e.length)))),n=t.map(e=>Math.ceil(e)),r=e.length,a=k-u-r*(s.gs-1)-n.reduce((e,t)=>e+t,0)-(r-1)*(2*s.air+1);A=a;let o=u;E=[];let f=0;e.forEach((e,u)=>{let d=f;f+=Td[i][u].wt;let p=Math.floor(a*f+1e-6)-Math.floor(a*d+1e-6);E.push({x:c,y:o,w:l,h:p,cols:Td[i][u].at.map(e=>Math.round(c+l*e))});let m=o+p+s.gs-1+(n[u]-t[u]);D.push({lines:e.lines,cent:e.cent,y:m});let h=o+p+s.gs-1+n[u];u<r-1&&O.push(h+s.air),o=h+2*s.air+1})}let ee=[];return E?D.forEach(e=>e.lines.forEach((t,n)=>t.forEach((t,r)=>ee.push(Bd(t,e.cent[n],e.y+r*Ld()))))):p.forEach((e,t)=>e.slice(0,v).forEach((e,n)=>ee.push(Bd(e,m[t],b+n*Ld())))),x.forEach((t,r)=>ee.push(Bd(t,e+n/2,S+r*Ld()))),{pad:s,ax:c,ay:u,aw:l,ah:y,nL:v,lines:p,cent:m,capTop:b,topL:x,topY:S,tH:C,rows:E,rowWords:D,hairs:O,sceneH:A,cH:Math.max(16,E?k-u+2:y),clipH:Math.max(16,y+s.pt-1),boxes:ee,colX:f,Zc:w,large:T}}function mu(e,t,n,r,i,a,o){Fd=o;let s=du(o,a),c=Hd[i],l=c.caps(a),u=e+4+s.ps,d=e+n-4-s.ps,f=t+4+s.pt,p=t+r-4-s.pb,m=d-u,h=i===5&&r>=56?Id(Ud)<=m-4?[Ud]:ku(Ud):[],g=h.length&&r>=150?4:0,_=f+g,v=h.length?g+Math.ceil(zd(h.length))+s.gs+2:0,y=f+v,b=p-y,x=b>=110&&b>=.75*m,S=x?c.tall:c.wide,C=x?c.tallW:c.wideW,w=c.gap??(c.seq?Gd:Wd),T=S.map((e,t)=>{let n=m-(e.length-1)*w,r=0;return e.map((e,i)=>{let a=Math.round(n*r);return r+=C[t][i],Math.round(n*r)-a})}),E=S.map((e,t)=>e.map((e,n)=>Id(l[e])<=T[t][n]-2||!l[e].includes(` `)?[l[e]]:ku(l[e]))),D=E.map(e=>Math.max(...e.map(e=>e.length))),O=2*s.air+(c.seq&&x?5:1),k=e=>D[e]?Math.ceil(zd(D[e]))+s.gs-1:0,A=b-S.reduce((e,t,n)=>e+k(n),0)-(S.length-1)*O;A<24*S.length&&(D=D.map(()=>0),A=b-(S.length-1)*O);let ee=x?c.tallH:[1],j=x&&D.some(e=>e>0)?c.tallNat:null,te=j?j.reduce((e,t)=>e+t,0):0,ne=!!j&&A>te,re=e=>ne?Math.floor((A-te)*(e+1)/(S.length+1))-Math.floor((A-te)*e/(S.length+1)):0,ie=[],ae=[],oe=[],se=y+re(0),ce=0;S.forEach((e,t)=>{let n=ce;ce+=ee[t];let r=ne?j[t]:Math.floor(A*ce+1e-6)-Math.floor(A*n+1e-6),i=u;if(e.forEach((n,a)=>{let l=T[t][a],u=D[t]?E[t][a]:[],d=o?Math.round((i+l/2)*2)/2:Math.round(i+l/2);ie[n]={x:i,y:se,w:l,h:r,cap:u,cx:d,capY:se+r+s.gs-1,row:t},a<e.length-1&&!c.seq&&ae.push({x:i+l+Math.floor(w/2),y0:se+Math.round(r*.06),y1:se+r-1-Math.round(r*.04)}),i+=l+w}),se+=r+k(t),t<S.length-1){let e=O+re(t+1),n=c.seq&&x?Math.max(5,Math.min(11,e-8))|1:1;oe.push({y:se+Math.floor((e-n)/2),seq:c.seq,len:n}),se+=e}});let le=[];for(let e of ie){let t=Math.max(0,...e.cap.map(e=>Id(e)))/2;e.cx=Math.max(u+t,Math.min(d-t,e.cx)),e.cap.forEach((t,n)=>le.push(Bd(t,e.cx,e.capY+n*Ld())))}h.forEach((t,r)=>le.push(Bd(t,e+n/2,_+r*Ld())));let ue=Math.min(...ie.map(e=>e.h));return{pad:s,X0:u,X1:d,Y0:f,Y1:p,sy0:y,tall:x,zones:ie,divs:ae,seps:oe,topL:h,topY:_,tH:v,boxes:le,Zc:!o||ue<40?ue<50?0:1:ue<72&&!x?1:2}}function hu(e,t,n,r,i){let a=Fd;try{return pu(0,0,e,t,n,r,i).sceneH}finally{Fd=a}}function gu(e,t,n,r,i,a){let o=Fd;try{return mu(Math.round(e),Math.round(t),Math.round(n),Math.round(r),i,a,!0).boxes}finally{Fd=o}}function _u(e,t,n,r,i,a,o,s){t=Math.round(t),n=Math.round(n),r=Math.round(r),i=Math.round(i);let c=(a,o)=>{Rr(e,t+a,n+a,r-2*a,o),Rr(e,t+a,n+i-1-a,r-2*a,o),zr(e,t+a,n+a+1,i-2-2*a,o),zr(e,t+r-1-a,n+a+1,i-2-2*a,o)};vd.noFrame||(c(0,`Y1`),c(2,`Y2`),c(3,`Y1`));let l=Math.abs(e.getTransform().a)>=Ct-1e-6,u=mu(t,n,r,i,a,s,l),d=Math.floor(o*Sd)/Sd,f=Dd[a],p=(d%f+f)%f,m=vd.zone,h=yu(m>=0?vu():e,u,a,p,s);h.zg=u.zones.map((t,n)=>m<0||m===n?e:null),id(),vd.noCentre||(h.ox=Tu(u,a,t,n,r,i,s,l)),e.save(),su(e,t+4,n+4,r-8,i-8);let g=l?(e,t)=>u.boxes.some(([n,r,i,a])=>e>=Math.floor(n)-2&&e<Math.ceil(i)+2&&t>=Math.floor(r)-2&&t<Math.ceil(a)+2):null,_=a===0?u.zones[0]:null,v=_?_.x+(h.ox[0]||0):0;if(vd.noSun||Nu(h,t,n,r,i,(e,t)=>(g?g(e,t):!1)||!!_&&e>=v-2&&e<v+_.w+2&&t>=_.y-2&&t<_.y+_.h+2),!vd.noWords)for(let t of u.zones)t.cap.forEach((n,r)=>fu(e,n,t.cx,t.capY+r*Ld()));if(m<0)for(let t of u.divs)for(let n=t.y0;n<=t.y1;n++)n&1||F(e,t.x,n,`A0`);let y=u.X0,b=u.X1-u.X0;if(m<0)for(let t of u.seps){let n=y+Math.floor(b/2),r=t.seq?t.y+(t.len>>1):t.y;for(let i=y+Math.round(b*.06);i<=y+Math.round(b*.94);i++)!(i&1)&&(!t.seq||Math.abs(i-n)>8)&&F(e,i,r,`A0`);t.seq&&Eu(e,n,t.y,t.len,U)}if(u.topL.length&&!vd.noWords){let i=bf(h.u),a=u.topY-(n+4)+Math.ceil(zd(u.topL.length))+2;i>0&&ju(e,i,t+4,n+4,r-8,a,()=>u.topL.forEach((n,i)=>fu(e,n,t+r/2,u.topY+i*Ld())))}su(e,u.X0,u.Y0,u.X1-u.X0,u.Y1-u.Y0),vd.noScene||lf[a](h),e.restore()}function vu(){if(!Zd){let e=document.createElement(`canvas`);e.width=e.height=1,Zd=e.getContext(`2d`)}return Zd}function yu(e,t,n,r,i){let a=Dd[n];return{g:e,x:t.X0,y:t.sy0,w:t.X1-t.X0,h:t.Y1-t.sy0,t:r,T:a,u:r/a,Z:t.Zc,tall:t.tall,zones:t.zones,seps:t.seps,touch:i,band:t.tH,zg:t.zones.map(()=>e),ox:t.zones.map(()=>0),meas:!1}}function bu(e,t,n,r,i,a,o){let s=Xd(e,t,n,r,i,a,o),c=Yd.get(s);return c||Yd.set(s,c={key:s,i:e,x:t,y:n,w:r,h:i,touch:a,fine:o,P:null,gs:[],f:0}),c}function xu(e,t){let n=Fd;try{e.P||=mu(e.x,e.y,e.w,e.h,e.i,e.touch,e.fine),Fd=e.fine;let n=e.w+2*qd,r=e.h+2*qd;e.gs.length||(e.gs=e.P.zones.map(()=>{let t=document.createElement(`canvas`);t.width=n,t.height=r;let i=t.getContext(`2d`);return i.setTransform(1,0,0,1,qd-e.x,qd-e.y),i.imageSmoothingEnabled=!1,i})),id();let i=Math.round(Dd[e.i]*Sd);Jd=!0;try{for(;e.f<i&&(lf[e.i]({...yu(vu(),e.P,e.i,e.f/Sd,e.touch),zg:e.gs,meas:!0}),e.f++,!(performance.now()>t)););}finally{Jd=!1}if(e.f<i)return!1;let a=e.P,o=Hd[e.i].mark??0;return Kd.set(e.key,a.zones.map((t,i)=>{let s=e.gs[i].getImageData(0,0,n,r).data,c=1e9,l=-1e9;for(let e=0;e<r;e++)for(let t=0;t<n;t++)s[(e*n+t)*4+3]>127&&(t<c&&(c=t),t>l&&(l=t));if(l<c)return 0;c+=e.x-qd,l+=e.x-qd;let u=t.x+1+(a.tall?o:0),d=t.x+t.w-2,f=(c+l+1)/2;return l-c>d-u?Math.round((u+d+1)/2-f):hf(Math.round(t.cx-f),u-c,d-l)})),Yd.delete(e.key),e.gs=[],!0}finally{Fd=n}}function Su(){Qd=!1;let e=Yd.values().next().value;e&&(xu(e,performance.now()+4),Yd.size&&Cu())}function Cu(){Qd||(Qd=!0,setTimeout(Su,0))}function wu(e,t,n,r,i,a=!0,o=0){if(vd.noCentre)return;[e,t,n,r]=[e,t,n,r].map(Math.round);for(let[o,s]of Yd)(s.w!==n||s.h!==r||s.touch!==i||s.fine!==a||(s.x-e)%12||(s.y-t)%12)&&Yd.delete(o);let s=!1;for(let c=0;c<Dd.length;c++){let l=(o+c)%Dd.length;Kd.has(Xd(l,e,t,n,r,i,a))||(bu(l,e,t,n,r,i,a),s=!0)}s&&Cu()}function Tu(e,t,n,r,i,a,o,s){let c=Kd.get(Xd(t,n,r,i,a,o,s));if(c)return c;let l=bu(t,n,r,i,a,o,s);return l.P??=e,xu(l,1/0),wu(n,r,i,a,o,s,t+1),Kd.get(l.key)}function Eu(e,t,n,r,i,a=1){let o=n+r-1;for(let o=0;o<r;o+=2)I(e,t,n+o,i,a);for(let n of[-1,1])I(e,t+n,o-1,i,a),I(e,t+2*n,o-2,i,a)}function Du(e,t,n,r=1){let i=e.seps[t];if(!i||!i.seq||n<=0||r<=0)return;let a=e.x+Math.floor(e.w/2),o=Math.round(Pr(n)*(i.len-1));for(let t=0;t<=o;t+=2)I(e.g,a,i.y+t,t+2>o?`W0`:`Y1`,r);n>=1&&Eu(e.g,a,i.y,i.len,`Y1`,r)}function Ou(e,t,n){let r=e.zones[t],i=e.zg[t];if(!i)return;let a=e.g;e.g=i,i.save(),e.meas||su(i,r.x,r.y,r.w,r.h),e.ox[t]&&i.translate(e.ox[t],0);try{n()}finally{i.restore(),e.g=a}}function ku(e){let t=e.split(` `);if(t.length<2)return[e];let n=[e],r=1e9;for(let e=1;e<t.length;e++){let i=t.slice(0,e).join(` `),a=t.slice(e).join(` `),o=Math.max(Id(i),Id(a));o<r&&(r=o,n=[i,a])}return n}function Au(e,t,n,r,i=!1){let a=e.map(e=>i&&e.includes(` `)?ku(e):[e]),o=e=>Math.max(...a[e].map(e=>Id(e))),s=()=>a.reduce((e,t,n)=>e+o(n),0)+$d*(a.length-1);if(e.forEach((i,s)=>{let c=s===0?n:(t[s-1]+t[s])/2,l=s===e.length-1?n+r:(t[s]+t[s+1])/2,u=2*Math.min(t[s]-c,l-t[s]);e.length>1&&o(s)>u*1.02&&i.includes(` `)&&(a[s]=ku(i))}),e.length>=3&&a.some(e=>e.length>1)&&e.forEach((e,t)=>e.includes(` `)&&(a[t]=ku(e))),s()>r){let t=r/e.length-$d;for(e.forEach((e,n)=>{o(n)>t&&e.includes(` `)&&(a[n]=ku(e))});s()>r;){let t=-1,n=-1;if(a.forEach((e,r)=>{e.length===1&&e[0].includes(` `)&&o(r)>n&&(n=o(r),t=r)}),t<0)break;a[t]=ku(e[t])}}let c=a.map((e,t)=>o(t));n+=2,r-=4;let l=t.map((e,t)=>Math.max(n+c[t]/2,Math.min(n+r-c[t]/2,e)));for(let e=0;e<4;e++){for(let e=1;e<l.length;e++)l[e]=Math.max(l[e],l[e-1]+(c[e-1]+c[e])/2+$d);l[l.length-1]=Math.min(l[l.length-1],n+r-c[l.length-1]/2);for(let e=l.length-2;e>=0;e--)l[e]=Math.min(l[e],l[e+1]-(c[e+1]+c[e])/2-$d);l[0]=Math.max(l[0],n+c[0]/2)}return{lines:a,cent:l.map(e=>Fd?Math.round(e*2)/2:Math.round(e))}}function ju(e,t,n,r,i,a,o){if(t>=1)return o();t<=0||Mu(e,n,r,i,a,o,t)}function Mu(e,t,n,r,i,a,o){let s=e.getTransform(),c=s.a||1,l=s.d||1,u=Math.floor(t),d=Math.floor(n),f=Math.max(0,Math.round(u*c+s.e)),p=Math.max(0,Math.round(d*l+s.f)),m=Math.min(e.canvas.width,Math.round((u+Math.ceil(r))*c+s.e))-f,h=Math.min(e.canvas.height,Math.round((d+Math.ceil(i))*l+s.f))-p;if(m<=0||h<=0)return;let g=e.getImageData(f,p,m,h);a();let _=e.getImageData(f,p,m,h),v=_.data,y=g.data;for(let e=0;e<h;e++)for(let t=0;t<m;t++){if(N(Math.floor((f+t+.5-s.e)/c),Math.floor((p+e+.5-s.f)/l),o))continue;let n=(e*m+t)*4;v[n]=y[n],v[n+1]=y[n+1],v[n+2]=y[n+2],v[n+3]=y[n+3]}e.putImageData(_,f,p)}function Nu(e,t,n,r,i,a=null){let o=Math.min(r,i),s=t+r/2,c=n+i*1.02;for(let t=0;t<=22;t++){let n=Math.PI*(1.08+.84*t/22),r=o*.55,i=o*(t%2?.78:.95),l=cr(e=>[s+Math.cos(n)*(r+(i-r)*e),c+Math.sin(n)*(r+(i-r)*e)],24);l.forEach(([t,n],r)=>{r%4==0&&N(t,n,.75*(1-r/l.length)+.12)&&!(a&&a(Math.round(t),Math.round(n)))&&F(e.g,t,n,`A0`)})}}function Pu(e,t,n,r={}){let i=r.pose??`dreamer.fly`,a=so[i],o=r.frame??ef(e,i),s=r.od?4:2,c=Math.max(a.ox,a.w-a.ox)+s,l=Math.max(a.oy,a.h-a.oy)+s;t=Math.round(t),n=Math.round(n),lu(e.g,`goldInk`,t-c,n-l,2*c,2*l,a=>Xi(a,i,o,t,n,{t:e.t,flip:r.flip,od:r.od}),r.k??1)}function Fu(e,t,n,r){let i=ru(n,r);return[Math.round(e)+i.x,Math.round(t)+i.y]}function Iu(e,t){let n=e+`:`+t,r=tf.get(n);if(r)return r;r=[];let i=document.createElement(`canvas`);i.width=128,i.height=128;let a=i.getContext(`2d`,{willReadFrequently:!0});if(a){Xi(a,e,t,64,64,{t:0});let n=a.getImageData(0,0,128,128).data;for(let e=0;e<128;e++)for(let t=0;t<128;t++)n[(e*128+t)*4+3]>127&&r.push([t-64,e-64])}return tf.set(n,r),r}function Lu(e,t,n,r,i,a,o){let s=Math.max(0,a-o),c=t+(r-t)*a,l=n+(i-n)*a;dr(e.g,Math.round(c),Math.round(l),Math.round(t+(r-t)*s),Math.round(n+(i-n)*s),`Y1`),F(e.g,Math.round(c),Math.round(l),`W0`)}function Ru(e,t,n=18,r=16,i=null){let a=1/Sd,o=[];for(let s=1;s<=r;s++){let[r,c]=t(e.u-s*a/e.T),l=[Math.round(r-n*s*a),Math.round(c)];if(i&&(l[0]-ff.l-1<i.x+1||l[1]-10<i.y+1||l[1]+2>i.y+i.h-2))break;o.push(l)}if(o.length<2)return;let s=1e9,c=1e9,l=-1e9,u=-1e9;for(let[e,t]of o)s=Math.min(s,e-34),l=Math.max(l,e),c=Math.min(c,t-10),u=Math.max(u,t+2);lu(e.g,`gold`,s,c,l-s,u-c,e=>$i(e,o,3))}function zu(e,t,n,r,i={}){let a=rf[t],o=so[a],s=Math.max(o.ox,o.w-o.ox)+2,c=Math.max(o.oy,o.h-o.oy)+2;n=Math.round(n),r=Math.round(r),lu(e.g,`ink`,n-s,r-c,2*s,2*c,t=>Xi(t,a,ef(e,a,i.phase??0),n,r,{t:e.t+(i.phase??0),phase:i.phase??0,flip:i.flip}),i.k??1)}function Bu(e,t,n,r,i,a=1){if(r<=0||r>=1)return;t=Math.round(t),n=Math.round(n);let o=Math.floor(r*6);o<3&&lu(e.g,`gold`,t-5,n-5,10,10,e=>$o(e,t,n,o));let s=Cd(1.15-r);for(let o=0;o<9;o++){let c=(o+Jn(a,o)*.7)/9*Math.PI*2,l=i*(.35+.65*Fr(r))*(.7+.5*Jn(a+7,o)),u=Math.round(t+Math.cos(c)*l),d=Math.round(n+Math.sin(c)*l*.85+r*r*3),f=o%3==0?`BR`:U;I(e.g,u,d,f,s),o%2==0&&I(e.g,u+(Math.cos(c)>0?-1:1),d,f,s)}}function Vu(e,t,n,r,i,a=1){t=Math.round(t),n=Math.round(n),lu(e.g,`gold`,t-5,n-8,10,16,a=>Lo(a,t,n,e.t,r,i),a)}function Hu(e,t,n,r){if(r<0||r>2)return;let i=r+1;for(let[a,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])F(e.g,Math.round(t+a*i),Math.round(n+o*i),r===0?`Y2`:`Y1`);r===0&&F(e.g,Math.round(t),Math.round(n),`W0`)}function Uu(e,t,n,r=1){t=Math.round(t),n=Math.round(n),lu(e.g,`red`,t-6,n-6,12,12,r=>zo(r,t,n,e.t),r)}function Wu(e,t,n,r){[`.#.#.`,`#####`,`.###.`,`..#..`].forEach((i,a)=>{for(let o=0;o<5;o++)i[o]===`#`&&I(e.g,Math.round(t)-2+o,Math.round(n)-2+a,`BR`,r)})}function Gu(e,t,n,r,i=1){t=Math.round(t),n=Math.round(n),lu(e.g,`gold`,t-18,n-18,36,36,i=>Bo(i,t,n,e.t,!1,r),i)}function Ku(e,t,n,r,i,a,o=1){r=Math.round(r),i=Math.round(i),lu(e.g,a?`ice`:`ink`,r-15,i-18,30,36,o=>Ko(o,t,n,r,i,e.t,a),o)}function qu(e,t,n,r,i,a,o={}){n=Math.round(n),r=Math.round(r);let s=o.reveal??1,c=o.die??0,l=t===2&&s>=.5&&c<=.35;lu(e.g,`ink`,a[0],a[1],a[2],a[3],a=>Ri(a,t,n,r,i,{t:e.t,reveal:s,die:c,struck:o.struck,corona:l}),1,o.kAt??null)}function Ju(e,t,n,r,i,a,o){n+=+!!o,Yn(e.g,t+1,n+1,r-2,i-2,`A1`),Rr(e.g,t+1,n,r-2,U),Rr(e.g,t+1,n+i-1,r-2,U),zr(e.g,t,n+1,i-2,U),zr(e.g,t+r-1,n+1,i-2,U),o?Xn(e.g,t+1,n+1,r-2,i-2,`A0`,1,t,n):Rr(e.g,t+1,n+i,r-2,U);let s=a.length===1&&i>=13?kr:R,c=s===kr?7:5;$n(e.g,s,a,t+Math.floor(r/2),n+Math.floor((i-c)/2),U,`center`,a.length>1?-1:0)}function Yu(e,t,n,r,i){let a=Array.isArray(r)?r:r?sf:of,o=a[0].length,s=a.findIndex(e=>e===`#`.repeat(o));if(t=Math.round(t-o/2),n=Math.round(n),a.forEach((r,i)=>{let s=r.indexOf(`#`),c=r.lastIndexOf(`#`);if(i>0&&i<a.length-1)for(let r=s+1;r<c;r++)F(e.g,t+r,n+i,`A1`);for(let a=0;a<o;a++)r[a]===`#`&&F(e.g,t+a,n+i,U)}),i)for(let r=1;r<s;r++)for(let i=1;i<o>>1;i++)a[r][i]===`.`&&a[r].indexOf(`#`)<i&&F(e.g,t+i,n+r,`A0`)}function Xu(e,t,n,r,i=1){t=Math.round(t),n=Math.round(n);let a=r?4:3;if(i<=0){ur(e.g,fr(t,n,a),U);for(let[i,o]of fr(t,n,a-2))o<=n&&(r||i!==t)&&F(e.g,i,o,U)}else{for(let r=-a;r<=a;r++)for(let i=-a;i<=a;i++)i*i+r*r<=a*a+a*.6&&F(e.g,t+i,n+r,U);for(let[i,o]of fr(t,n,a-2))o<=n&&(r||i!==t)&&F(e.g,i,o,`A0`);if(r&&F(e.g,t,n+1,`A0`),i>0)for(let[r,o]of fr(t,n,a+3))r+o&1||I(e.g,r,o,U,Cd(i)*.75)}}function Zu(e,t,n,r,i=1,a=0,o=1){t=Math.round(t),n=Math.round(n),r=Math.round(r);let s=t+Math.round(Pr(a)*(n-t)),c=e=>a>0&&o>0&&e<=s&&N(e,r,o);for(let o=t;o<=n-2;o++)o&1||I(e.g,o,r,c(o)?o+2>s&&a<1?`W0`:`Y1`:U,i);let l=a>=1&&o>0&&N(n,r,o)?`Y1`:U;I(e.g,n,r,l,i),I(e.g,n-1,r-1,l,i),I(e.g,n-1,r+1,l,i),I(e.g,n-2,r-2,l,i),I(e.g,n-2,r+2,l,i)}function Qu(e,t,n,r){n=Math.round(n),r=Math.round(r),ur(e.g,fr(n,r,5),`Y1`),$n(e.g,R,String(t),n+1,r-2,U,`center`)}function $u(e,t,n,r){let i=cr(i=>[e+Math.sin(i*Math.PI*2)*n,t-Math.cos(i*Math.PI*2)*r],Math.ceil((n+r)*4)),a=/* @__PURE__ */ new Set,o=[];for(let e of i){let t=e[0]+`,`+e[1];a.has(t)||(a.add(t),o.push(e))}let s=([i,a])=>{let o=Math.atan2((i-e)/n,-(a-t)/r);return o<0?o+Math.PI*2:o};return o.sort((e,t)=>s(e)-s(t))}function ed(e,t,n,r,i,a,o,s=1,c=`Y1`,l=0){if(!(o<=0))for(let u=0;u<a;u++){let d=u/a*Math.PI*2+l,f=u%2?i*.8:i;for(let i=r;i<=f;i++){let r=Math.round(t+Math.cos(d)*i),a=Math.round(n+Math.sin(d)*i*s);(!(i&1)||u%4==0)&&I(e.g,r,a,i>f-2?`Y0`:c,o)}}}function td(e,t,n,r,i,a,o,s,c=1){t=Math.round(t),n=Math.round(n);let l=(t,n,r)=>I(e.g,t,n,r,c),u=s?`Y1`:U;for(let e=n+1;e<n+i-1;e++)for(let n=t+1;n<t+r-1;n++)l(n,e,`A1`);for(let e=t+1;e<t+r-1;e++)l(e,n,u),l(e,n+i-1,s?`Y0`:U);for(let e=n+1;e<n+i-1;e++)l(t,e,u),l(t+r-1,e,s?`Y0`:U);if(s){for(let e=t+2;e<t+r-2;e++)e&1||(l(e,n+2,`Y2`),l(e,n+i-3,`Y2`));for(let e=n+3;e<n+i-3;e++)e&1||(l(t+2,e,`Y2`),l(t+r-3,e,`Y2`))}let d=a?Fc(a,s?`Y0`:U):null,f=t+Math.floor(r/2),p=n+Math.round(i*.42);a&&nd(e,d,f,p,c);let m=n+i-4,h=t+Math.floor(r/2)-4;if(r>=13)for(let e=0;e<5;e++)l(h+e*2,m,e<o?s?`Y1`:U:`A0`)}function nd(e,t,n,r,i=1){let a=Math.round(n-(t.ox??0)),o=Math.round(r-(t.oy??0)),{h:s}=pt(t);for(let n=0;n<s;n++){let r=t.rows[n]||``;for(let s=0;s<r.length;s++){let c=t.key[r[s]];r[s]===`.`||!c||I(e.g,a+s,o+n,c,i)}}}function rd(e,t){let n=df.get(e);if(n)return n;let r=cr(t,720),i=r.filter((e,t)=>t===0||e[0]!==r[t-1][0]||e[1]!==r[t-1][1]);i.length>1&&i[i.length-1][0]===i[0][0]&&i[i.length-1][1]===i[0][1]&&i.pop();let a=2*Math.max(4,Math.round(i.length/6)),o=[];for(let e=0;e<a;e++){let t=Math.round(e*i.length/a)%i.length,[n,r]=i[t];o.some(([e,t])=>Math.abs(e-n)<=1&&Math.abs(t-r)<=1)||o.push([n,r,t])}let s={P:i,dots:o};return df.set(e,s),s}function id(){if(mf)return;mf=!0;let e=document.createElement(`canvas`);e.width=200,e.height=200;let t=e.getContext(`2d`,{willReadFrequently:!0});if(!t)return;let n=0,r=0,i=0,a=0;for(let[e,o,s]of[[`dreamer.fly`,4,!1],[`dreamer.up`,1,!1],[`dreamer.down`,1,!1],[`dreamer.cast`,10,!1],[`dreamer.spread`,1,!0],[`dreamer.spread`,1,!1]]){e===`dreamer.cast`&&r>0&&Object.assign(pf,{l:n,r,u:i,d:a});for(let c=0;c<o;c++)for(let o of[0,.4]){t.clearRect(0,0,200,200),Xi(t,e,c,100,100,{t:o,od:s});let l=t.getImageData(0,0,200,200).data;for(let e=0;e<200;e++)for(let t=0;t<200;t++)l[(e*200+t)*4+3]>127&&(n=Math.max(n,100-t),r=Math.max(r,t-100),i=Math.max(i,100-e),a=Math.max(a,e-100))}}r>0&&n>0&&Object.assign(ff,{l:n,r,u:i,d:a})}function ad(e){let{u:t}=e,n=e.zones[0],r=e.zones[1],i=r.h>=84?`error`:r.h>=46?`spam`:`glitch`,a=af(i),o=r.y+r.h-2-a.d,s=o-a.u,c=hf(Math.round(o-(a.u-a.d)/2),r.y+ff.u+2,r.y+r.h-ff.d-2),l=Math.max(0,Math.min(c-(r.y+ff.u+2),Math.max(c+ff.d+4-s,Math.round(r.h*.3)))),u=r.x+ff.l+4+Math.round(Math.max(0,r.w-48)*(r.h>=80?.24:.1)),d=Math.max(4,Math.min(26,Math.round((r.w-48)*.3))),f=r.x+r.w-2-a.r,p=r.x+2+a.l,m=e=>f-(f-p)*Math.min(1,uf(e)/.86),h=e=>u+d*(wd((e-.3)/.22)-wd((e-.66)/.26)),g=e=>{e=uf(e);let t=h(e),n=m(e),r=t+ff.r+10-(n-a.l),i=n+a.r+10-(t-ff.l),o=wd(r/16)*wd(i/16)*wd((n-p)/12)*wd(e/.12);return[t,c-l*o+Math.sin(e*Math.PI*4)*.8]},[_,v]=g(t),[y,b]=g(t-1/(Sd*e.T)),x=_-y,S=v-b,C=m(t),w=Cd(Math.min((f-C)/10,(C-p)/10));Ou(e,1,()=>{Ru(e,g,r.h>=80?36:14,r.h>=80?10:16,r),w>0&&zu(e,i,C,o+Math.round(Math.sin(t*Math.PI*8)*.8),{k:w}),Pu(e,_,v,{pose:S<-.5?`dreamer.up`:S>.5?`dreamer.down`:`dreamer.fly`})});let T=/* @__PURE__ */ new Set;S<-.5&&T.add(`W`),S>.5&&T.add(`S`),x>.4&&T.add(`D`),x<-.4&&T.add(`A`),Ou(e,0,()=>{let r=gf(n);if(!e.touch){let i=[[13,sf,5,3,2],[13,sf,2,3,2],[11,sf,5,3,2],[11,sf,2,3,2],[11,of,2,3,2],[9,sf,5,3,2],[9,of,5,3,2],[9,of,2,3,2],[9,of,0,3,1],[9,of,0,2,1],[9,cf,0,2,1]].find(([e,t,r,i,a])=>3*e+2<=n.w-8&&2*e+2+i+r+t.length+a<=n.h),a=!!i,[o,s,f,p]=i??[9,n.h>=32?of:cf,0,0,0],m=o,h=o*3+2,_=s[0].length,v=s.length,y=a?r-Math.round(h/2):n.x+2,b=n.y+Math.floor((n.h-(a?2*m+2+p+f+v:2*m+2))/2);Ju(e,y+o+1,b,o,m,`W`,T.has(`W`)),Ju(e,y,b+m+1,o,m,`A`,T.has(`A`)),Ju(e,y+o+1,b+m+1,o,m,`S`,T.has(`S`)),Ju(e,y+2*(o+1),b+m+1,o,m,`D`,T.has(`D`));let x=a?n.x+2+(_>>1):y+h+4+(_>>1),S=n.x+n.w-3-(_>>1),C=a?b+2*m+2+p+f:b+m-(v>>1),w=C-(a?f:0),E=Math.max(0,S-x),D=Math.min(E,28),O=x+Math.round((E-D)/2),k=e=>{let[t,n]=g(e),r=Pr((t-u)/Math.max(1,d)),i=l>0?Pr((c-n)/l):0;return[O+r*D,C-i*(C-w)]},[A,ee]=k(t),j=cr(n=>{let[r,i]=k(t-n*1.2/e.T);return[r,i+v/2]},96),te=j.filter((e,t)=>t===0||e[0]!==j[t-1][0]||e[1]!==j[t-1][1]),ne=Math.round(A-_/2)-1,re=Math.round(ee)-1;te.forEach(([t,n],r)=>{if(t>=ne&&t<=ne+_+1&&n>=re&&n<=re+v+1)return;let i=te[Math.max(0,r-1)],a=te[Math.min(te.length-1,r+1)],o=Math.abs(a[0]-i[0])>=Math.abs(a[1]-i[1])?t:n;o&1||(r<=14?F(e.g,t,n,U):(r<=26||r<=34&&!(o&2))&&F(e.g,t,n,`A0`))}),Yu(e,A,ee,s,!1);return}let i=n.h>=60,a=i?4:3,o=a+4,s=n.h>n.w*1.15,f=s?n.h:n.w,p=s?n.w:n.h,m=Math.max(8,Math.min(Math.round(f*.34),f>=160?58:46,Math.floor(f/2)-o-2)),h=Math.max(4,Math.min(Math.round(p*.3),20,Math.floor(p/2)-o-2)),_=gf(n),v=_f(n),y=rd(`${n.x},${n.y},${n.w},${n.h}:${+s}:${m},${h}`,e=>s?[_+Math.sin(e*Math.PI*4)*h,v+Math.sin(e*Math.PI*2)*m]:[_+Math.sin(e*Math.PI*2)*m,v+Math.sin(e*Math.PI*4)*h]),b=y.P.length,x=Math.floor(uf(t)*b)%b,[S,C]=y.P[x],w=a+4,E=w+12;for(let[t,n,r]of y.dots){if(Math.hypot(t-S,n-C)<=w)continue;let i=(x-r+b)%b;i<=E||F(e.g,t,n,i<=E+9?U:`Y0`)}for(let t=1;t<=E;t++){let[n,r]=y.P[(x-t+b)%b];Math.hypot(n-S,r-C)>w&&F(e.g,n,r,U)}Xu(e,S,C,i,1)})}function od(e){let t=e.zones[0],n=gf(t)+8,r=_f(t),i=e=>[n+Math.sin(e*Math.PI*2)*3,r+Math.sin(e*Math.PI*4+.6)*2],[a,o]=i(e.u),s=n-8,c=t.h>=90,l=Math.round(Math.min(t.w*(c?.35:.3),64)),u=Math.round(Math.min(t.h*.3,l*(c?.8:.75))),d={};Ou(e,0,()=>{for(let[t,n]of $u(s,r,l,u))(t+n)%3==0&&F(e.g,t,n,`A0`);let n=c?[{a:-2.45,kind:`glitch`},{a:-1.45,kind:`spam`},{a:-.6,kind:`bug`},{a:.65,kind:`spam`},{a:1.7,kind:`bug`},{a:2.5,kind:`glitch`}]:[{a:-2.45,kind:`glitch`},{a:-.6,kind:`bug`},{a:.65,kind:`bug`},{a:2.5,kind:`glitch`}],f=e.T/n.length;n.forEach((n,i)=>{let p=((e.t-i*f-.2)%e.T+e.T)%e.T,m=c?3.2:1.15;if(p>m+.55)return;let h=af(n.kind),g=e=>hf(e,t.x+h.l+3,t.x+t.w-h.r-3),_=e=>hf(e,t.y+h.u+3,t.y+t.h-h.d-3),v=g(s+Math.cos(n.a)*t.w*.5),y=_(r+Math.sin(n.a)*t.h*.5),b=g(s+Math.cos(n.a)*l*1.12),x=_(r+Math.sin(n.a)*u*1.12),S=wd(Pr(p/m)),C=Math.sin(p*3+i)*1.2*(1-S),w=v+(b-v)*S,T=_(y+(x-y)*S+C),E=Math.cos(n.a)>0,D=Math.max(4,Math.min(c?12:9,Math.floor((Math.min(w-t.x,t.x+t.w-w,T-t.y,t.y+t.h-T)-5)/1.25)));p<m?zu(e,n.kind,w,T,{k:Cd(p/.3),phase:i*1.7,flip:!E}):Bu(e,w,T,(p-m)/.55,D,i+3);let O=m-(E?.3:.34);if(p<O||p>m+.5)return;let k=p-O;if(E){let[n,r]=Fu(a,o,`dreamer.cast`,nf(a,o,w,T,!0)),s=w-n,c=T-r,l=Math.hypot(s,c)||1,u=-c/l,f=s/l,p=i%2?1:-1,m=l*.24*p,h=e=>[n+s*.45+u*e,r+c*.45+f*e];for(;Math.abs(m)>1&&(()=>{let[e,n]=h(m);return e<t.x+4||e>t.x+t.w-4||n<t.y+4||n>t.y+t.h-4})();)m*=.8;let[g,_]=h(m),v=ss(os([{x:n,y:r},{x:g,y:_},{x:w-u*m*.2,y:T-f*m*.2},{x:w+s/l*3,y:T+c/l*3}]),.5);lu(e.g,`gold`,Math.min(n,w)-l*.4-8,Math.min(r,T)-l*.4-8,Math.abs(s)+l*.8+16,Math.abs(c)+l*.8+16,e=>fs(e,v,k,.3,.75)),k<.35&&(d={pose:`dreamer.cast`,frame:nf(a,o,w,T,k<.15)})}else if(k<.34){let t=Ir(k/.34),[n,r]=Fu(a,o,`dreamer.cast`,nf(a,o,w,T,!0));k<.3&&(d={pose:`dreamer.cast`,frame:nf(a,o,w,T,k<.15)});let s=n+(w-n)*t,c=r+(T-r)*t;lu(e.g,`gold`,s-14,c-8,28,16,e=>hs(e,i%2?`fn()`:`if`,s,c,w-n,T-r,k+.25))}}),Ru(e,i,12,c?22:14,t),Pu(e,a,o,d)})}function sd(e){let{u:t}=e,n=e.zones[0],r=e.zones[1];Ou(e,0,()=>{let r=n.h>=60?`spam`:`glitch`,i=af(r),a=n.h>=80,o=n.x+ff.l+3+Math.round(Math.max(0,n.w-100)*.12),s=n.y+n.h-ff.d-3-Math.round(n.h*.1),c=hf(n.x+Math.round(n.w*.74),n.x+i.l+10,n.x+n.w-i.r-10),l=hf(n.y+Math.round(n.h*.36),n.y+i.u+3,n.y+n.h-i.d-3),u=Math.round(Math.sin(t*Math.PI*6)),d=.24,f=Math.min(c-n.x,n.x+n.w-c,l-n.y,n.y+n.h-l);t<d?zu(e,r,c,l+u,{k:Cd(Math.min(t/.07,(d-t)/.02+1)),phase:1.3}):Bu(e,c,l,(t-d)/.14,Math.max(5,Math.min(a?14:10,Math.floor((f-5)/1.25))),5);let[p,m]=(e=>[o+Math.sin(e*Math.PI*2)*2,s+Math.sin(e*Math.PI*4)*1.2])(t),h=t>.14&&t<.26;if(t>.17&&t<d){let[n,r]=Fu(p,m,`dreamer.cast`,nf(p,m,c,l,!0));Lu(e,n,r,c,l,(t-.17)/.06999999999999998,.14)}let g=a?7:5,_=Math.max(6,Math.min(a?20:13,f-9)),v=p+4,y=m-3;for(let n=0;n<g;n++){if(t<d)continue;let r=n/g*Math.PI*2+.5,i=Pr((t-d)/.1),o=.34+n*.035,s=Pr((t-o)/.17);if(s>=1){Hu(e,v,y,Math.floor((t-o-.17)*e.T*Sd));continue}let u=_*Fr(i),f=c+Math.cos(r)*u,p=l+Math.sin(r)*u*.8,m=Ir(s);Vu(e,f+(v-f)*m+Math.sin(s*Math.PI)*(n-(g-1)/2)*2,p+(y-p)*m,n/g,a,Cd(i*2))}Pu(e,p,m,h?{pose:`dreamer.cast`,frame:nf(p,m,c,l,t>.17)}:{})}),Ou(e,1,()=>{let n=uf(t-.4),i=r.h>=80,a=r.x+ff.l+3+Math.round(Math.max(0,r.w-100)*.12),o=r.y+r.h-ff.d-3-Math.round(r.h*.1),[s,c]=(e=>[a+Math.sin(e*Math.PI*2+1)*2,o+Math.sin(e*Math.PI*4+1)*1.2])(t),l=Math.round(Math.min(r.w-24,i?76:56)),u=i?5:r.h>=50?3:2,d=gf(r)-Math.round(l/2)+3,f=r.y+(i?8:5),p=wd((n-.36)/.2),m=wd((n-.8)/.18),h=.26+.74*p-.74*m;Rr(e.g,d,f-1,l,U),Rr(e.g,d,f+u,l,U),zr(e.g,d-1,f,u,U),zr(e.g,d+l,f,u,U);let g=Math.round(l*h),_=h<.4&&Math.floor(e.t*3)%2==1;if(Xn(e.g,d,f,g,u,`BR`,_?.75:1,d,f),Wu(e,d-5,f+(u>>1),1),p>0&&p<1){let t=d+g-1;zr(e.g,t,f,u,`W0`),F(e.g,t,f-2,`Y2`),F(e.g,t,f+u+1,`Y2`),F(e.g,t+1,f+(u>>1),`Y2`)}let[v,y]=Fu(s,c,`dreamer.fly`,ef(e,`dreamer.fly`)),b=v+2,x=y-1,S=r.x+r.w-8,C=Math.max(0,Math.min(Math.round(r.h*.25),x-(f+u+10)));if(n<.36){let t=wd(n/.36),r=S+(b-S)*t,i=x-C*(1-t)*(1-t)-5*Math.sin(t*Math.PI)+Math.sin(n*Math.PI*10)*1.2*(1-t);Uu(e,r,Math.max(f+u+8,i),Cd(Math.max((S-r)/8,t/.3)+.25))}if(n>=.34&&n<.64){let t=(n-.34)/.3,a=Math.max(4,Math.min(i?22:14,b-r.x-2,r.x+r.w-b-2,x-r.y-2,r.y+r.h-x-2));lu(e.g,`gold`,b-a-4,x-a-4,2*a+8,2*a+8,e=>rs(e,b,x,a,t,`D4`,`Y2`));let o=Math.max(4,Math.min(i?16:10,x-7-(f+u+5))),s=hf(b,r.x+9,r.x+r.w-10);for(let t=0;t<3;t++){let r=Pr((n-.37-t*.05)/.22);r<=0||r>=1||Wu(e,s+(t-1)*6,x-7-r*o,Cd(Math.sin(Math.PI*r)*1.3))}}Pu(e,s,c)})}function cd(e,t,n,r,i,a=1){t=Math.round(t),n=Math.round(n);let o=(t,n,r)=>I(e.g,t,n,r,a);for(let e=n+1;e<n+i-1;e++)for(let a=t+1;a<t+r-1;a++)o(a,e,a>t+1&&a<t+r-2&&e>n+1&&e<n+i-2&&(a+e)%3==0?`A0`:`A1`);for(let e=t+1;e<t+r-1;e++)o(e,n,U),o(e,n+i-1,U);for(let e=n+1;e<n+i-1;e++)o(t,e,U),o(t+r-1,e,U);let s=t+(r>>1),c=n+(i>>1);for(let[e,t]of[[0,-2],[-1,-1],[1,-1],[-2,0],[2,0],[-1,1],[1,1],[0,2]])o(s+e,c+t,`Y1`);o(s,c,`Y2`)}function ld(e){let{u:t}=e,n=e.zones,r=n.map(t=>e.tall?{x:t.x+Vd,y:t.y,w:t.w-Vd,h:t.h}:{x:t.x,y:t.y+13,w:t.w,h:t.h-13});n.forEach((t,n)=>e.tall?Qu(e,n+1,t.x+6,_f(t)):Qu(e,n+1,gf(t),t.y+6));let i=0;Ou(e,0,()=>{let n=r[0],a=hf(gf(n)+8,n.x+pf.l+2,n.x+n.w-pf.r-2),o=hf(_f(n)+3,n.y+pf.u+2,n.y+n.h-pf.d-2),s=n.h>=40&&n.w>=70;for(let r=0;r<5;r++){let c=.03+r*.075,l=(t-c)/.14;if(l>=1){i+=wd((t-c-.14)/.04),Hu(e,a+2,o-2,Math.floor((t-c-.14)*e.T*Sd));continue}if(l<=0)continue;let u=[-1.25,-.45,.25,-.85,-1.6][r],d=Math.max(8,Math.min(n.x+n.w-7-(a+2),34)),f=Math.max(6,Math.min(o-2-(n.y+9),26)),p=Ir(l);Vu(e,a+2+Math.cos(u)*d*(1-p)*(Math.cos(u)>0?1:.6),o-2+Math.sin(u)*f*(1-p),r/5,s,Cd(l*4))}Pu(e,a,o)});let a=r[1],o=Math.min(a.w,a.h)>=44?8:5,s=Math.max(9,Math.min(22,Math.floor(Math.min(a.w,a.h)/2)-o-3)),c=Math.max(3,Math.min(o,Math.floor(Math.min(a.w,a.h)/2)-s-1)),l=gf(a),u=_f(a);Ou(e,1,()=>{let n=Cd(1-(t-.9)/.06),r=Pr(i/5),a=$u(l,u,s,s),o=$u(l,u,s-1,s-1);a.forEach(([t,i],o)=>{t+i&1||F(e.g,t,i,U),(o+.5)/a.length<=r&&I(e.g,t,i,`Y1`,n)}),o.forEach(([t,i],a)=>{(a+.5)/o.length<=r&&I(e.g,t,i,`Y2`,n)}),$n(e.g,R,`LV`,l,u-6,U,`center`,Ad);let d=Cd(Math.min((t-.44)/.05,(.97-t)/.05)),f=u+1;d<1&&ju(e.g,1-d,l-3,f,7,6,()=>$n(e.g,R,`3`,l,f,U,`center`)),d>0&&ju(e.g,d,l-3,f,7,6,()=>$n(e.g,R,`4`,l,f,`BR`,`center`)),t>=.43&&t<.6&&ed(e,l,u,s+3,s+c,16,Cd(1.2-(t-.43)/.17),1,`Y1`)});let d=r[2],f=[[25,36,13],[23,33,9],[19,27,6],[15,21,4],[13,18,4]],[p,m,h]=f.find(([e,t,n])=>e+2*(e-n)+12<=d.w&&t+7+12<=d.h)||f[4],g=p-h,_=gf(d),v=_f(d)+3;Ou(e,2,()=>{let n=[`design`,`magnet`,`code`],r=e=>[_-Math.round(p/2)+(e-1)*g,v-Math.round(m/2)+(e===1?-1:2)],i=wd((t-.62)/.08),a=wd((t-.86)/.06);for(let o of[0,2,1]){let s=o===1,c=Pr((t-.47-o*.025)/.08)-Pr(s?(t-.88-o*.02)/.08:(t-.68-o*.02)/.08),l=Math.abs(1-2*c),u=Math.max(2,Math.round(p*Math.round(l*4)/4)),[d,f]=r(o),h=f-(s?Math.round(i*(1-a)*5):0),g=d+Math.round((p-u)/2);c<.5?cd(e,g,h,u,m,1):td(e,g,h,u,m,u>=p-1?n[o]:``,s?3:2,s&&i>.5&&a<.5),s&&i>.5&&t<.84&&ed(e,g+p/2,h+m/2,Math.max(p,m)/2+2,Math.max(p,m)/2+5,12,Cd(1-(t-.74)/.1),1,`Y1`)}});let y=Pr((t-.15)/.3),b=t<.15?0:Cd(1-(t-.5)/.1),x=Pr((t-.44)/.05),S=t<.44?0:Cd(1-(t-.66)/.1);e.tall?(Du(e,0,y,b),Du(e,1,x,S)):(Zu(e,n[0].x+n[0].w+2,n[1].x-3,u,1,y,b),Zu(e,n[1].x+n[1].w+2,n[2].x-3,u,1,x,S))}function ud(e,t,n){let r=t&&!n?37:e===2?31:e===1?23:17,i=t&&!n?53:e===2?45:e===1?33:24;return{cw:r,chh:i,rx0:r/2+2,ry0:i/2+2,len:t?12:e===2?10:6}}function dd(e,t,n,r,i,a,o,s,c=`Y1`){if(!(s<=0))for(let l=0;l<o;l++){let u=l/o*Math.PI*2,d=Math.cos(u),f=Math.sin(u),p=1/Math.sqrt((d/r)**2+(f/i)**2),m=l%2?Math.max(1,Math.round(a*.35)):a;for(let r=0;r<=m;r++){let i=Math.round(t+d*(p+r)),a=Math.round(n+f*(p+r));(!(r&1)||l%4==0)&&I(e.g,i,a,r>m-2?`Y0`:c,s)}}}function fd(e,t,n,r=1){t=Math.round(t),n=Math.round(n);for(let i=-2;i<=2;i++)I(e.g,t+i,n,U,r),I(e.g,t,n+i,U,r)}function pd(e){let{u:t}=e,[n,r,i]=e.zones,a=e=>Math.abs(t-e)<.07?Cd(1-Math.abs(t-e)/.07):0,o=Pr((t-.36)/.1),s=t<.36?0:Cd(1-(t-.52)/.1),c=Math.max(6,Math.min(16,Math.floor((n.w-18)/4),Math.floor((n.h-16)/2)-4)),l=c+4,u=n.y+Math.round((n.h-6)/2),d=gf(n);Ou(e,0,()=>{for(let[n,r]of[[0,`design`],[1,`code`]]){let i=d+(n?l:-l),o=u+Math.round(Math.sin(t*Math.PI*4+n*2)*1.2),s=a(.14+n*.08);s>0&&ed(e,i,o,c+2,c+4,12,s,1,`Y1`);for(let[t,n]of fr(i,o,c))F(e.g,t,n,s>.5?`Y0`:U);for(let[t,n]of fr(i,o,c-1))n>o&&!(t+n&1)&&F(e.g,t,n,`A0`);if(c>=12)for(let[t,n]of fr(i,o,c-2))n>o+2&&!(t+n&1)&&F(e.g,t,n,`A0`);nd(e,Fc(r,s>.5?`Y0`:U),i,o);for(let t=0;t<5;t++)F(e.g,i-4+t*2,o+c+3,`Y1`)}fd(e,d,u)});let f=gf(r),p=r.w>=38&&r.h>=38;Ou(e,1,()=>{let n=Math.min(u,r.y+r.h-10),i=a(.3);i>0&&ed(e,f,n,p?16:8,p?18:9,12,i,1,`Y2`),Gu(e,f,n+Math.round(Math.sin(t*Math.PI*4+1)),p)}),fd(e,n.x+n.w+Math.floor(Gd/2),u);let m=Math.min(e.tall?10:6,Math.floor((i.h-26)/4)),h=Math.max(20,Math.min(53,i.h-2*(m+3)-2,Math.floor((i.w-2*(m+3)-2)/.69))),g=Math.round(h*.69)|1,_=gf(i)-(g>>1),v=_f(i)-(h>>1);e.tall?Du(e,0,o,s):Zu(e,r.x+r.w+1,i.x+e.ox[2]+Math.max(1,Math.round(i.w/2-g/2-m-5)),u,1,o,s);let y=t>=.46&&t<.7;Ou(e,2,()=>{Yn(e.g,_+1,v,g-2,h,U),zr(e.g,_,v+1,h-2,U),zr(e.g,_+g-1,v+1,h-2,U);let n=y&&Math.floor(e.t*4)%2==0;for(let t=_+3;t<_+g-3;t++)F(e.g,t,v+2,n?`Y2`:`Y1`),F(e.g,t,v+h-3,`Y0`);for(let t=v+3;t<v+h-3;t++)F(e.g,_+2,t,n?`Y2`:`Y1`),F(e.g,_+g-3,t,`Y0`);let r=_+Math.floor(g/2)-4;for(let t=0;t<5;t++)F(e.g,r+t*2,v+5,`Y2`);if(nd(e,Fc(`algorithmic`,`Y2`),_+Math.floor(g/2),v+Math.round(h*.56)),t>=.46&&t<.66&&dd(e,_+g/2,v+h/2,g/2+2,h/2+2,m,20,Cd(1.2-(t-.46)/.2),`Y1`),t>.54&&t<.7){let n=(t-.54)/.16,r=v+3+Math.round(n*(h-7));for(let t=_+3;t<_+g-3;t++)t+r&1||F(e.g,t,r,`Y2`)}})}function md(e){let{u:t}=e,[n,r]=e.zones,i=n.h>=70,a=gf(n),o=_f(n),s=Math.max(30,Math.min(i?56:34,Math.round(n.w/2)-16)),c=Math.max(13,Math.min(Math.round(s*.72),Math.round(n.h/2)-(i?12:4))),l=[.14,.27,.4],u=[-2.45,-.6,2.55],d=0;for(let e of l)d+=wd((t-e)/.05)/3;let f=Pr((t-.62)/.3);t>.6&&(d=Math.max(0,1-f));let p=bf(t),m=(e,t,r)=>{let i=af(r);return[hf(a+Math.cos(e)*s*t,n.x+i.l+2,n.x+n.w-i.r-2),hf(o+Math.sin(e)*c*t,n.y+i.u+2,n.y+n.h-i.d-2)]},h=Math.max(s+3,Math.min(n.w/2-1,(n.h/2-1)*s/c)),g=a+4,_=o+1,v=e=>Iu(`dreamer.cast`,e).every(([e,t])=>((g+e-a)/(s-2))**2+((_+t-o)/(c-2))**2<1),y=(e,t,n)=>{let r=nf(g,_,e,t,!0)>>1;for(;r!==2&&!v(r*2+1);)r+=r<2?1:-1;return r*2+ +!!n},b={};Ou(e,0,()=>{l.forEach((n,r)=>{let i=n-.12;if(t<i||t>n+.1)return;let a=Pr((t-i)/.11),o=r===1?`bug`:`glitch`,[s,c]=m(u[r],1.5-.35*wd(a),o),l=Pr((t-(n-.035))/.035);if(t>n-.055&&t<n+.015&&(b={pose:`dreamer.cast`,frame:y(s,c,l>0)}),t<n){if(zu(e,o,s,c,{k:Cd(a*3),phase:r,flip:Math.cos(u[r])<0}),l>0){let[t,n]=Fu(g,_,`dreamer.cast`,y(s,c,!0));Lu(e,t,n,s,c,l,.12)}}else Bu(e,s,c,(t-n)/.1,7,r+11)});let n=$u(a,o,s,c),r=$u(a,o,s-1,c-1);if(n.forEach(([t,r],i)=>{(i+.5)/n.length<=d?F(e.g,t,r,`Y1`):i%2==0&&F(e.g,t,r,U)}),r.forEach(([t,n],i)=>{(i+.5)/r.length<=d&&F(e.g,t,n,`Y2`)}),t>.42&&t<.6&&Math.floor(e.t*4)%2==0&&ed(e,a,o,s+3,Math.min(s+6,h),16,1,c/s,`Y1`),p>0){let n=Pr((t-.6)/.12);n<1&&ed(e,a,o,Math.min(h-2,Math.round(s*(1.08+n*.2))),Math.min(h,Math.round(s*(1.3+n*.5))),24,Cd(1-n),c/s,`Y2`);let r=p*(.5+.25*(Math.floor(e.t*6)%2));for(let t=o-c+2;t<=o+c-2;t++)for(let n=a-s+2;n<=a+s-2;n++){let i=((n-a)/(s-2))**2+((t-o)/(c-2))**2;i<1&&N(n,t,r*.25*(1-i))&&F(e.g,n,t,`Y2`)}ed(e,a,o,s+2,Math.min(s+5,h),12,p*.75,c/s,`Y1`,e.t*.8);for(let n=0;n<2;n++){let r=.66+n*.12;if(t<r)continue;let i=Pr((t-r)/.07),a=n?-.25:3.4;if(i<1){let[t,r]=m(a,1.45-.5*wd(i),`glitch`);zu(e,`glitch`,t,r,{k:Cd(i*3),phase:5+n,flip:Math.cos(a)<0})}else{let[i,o]=m(a,.95,`glitch`);Bu(e,i,o,(t-r-.07)/.08,7,n+21)}}}Pu(e,g,_,p>0?{pose:`dreamer.spread`,od:!0}:b)});let x=gf(r),S=_f(r),C=t>.56&&t<.62;Ou(e,1,()=>{if(!e.touch){let n=r.h>=40,i=n?sf.length:of.length,a=Math.min(34,r.w-6),o=n?11:9,s=n?6:4,c=S-Math.round((i+s+o)/2);if(Yu(e,x,c+ +!!C,n,C),Ju(e,x-Math.round(a/2),c+i+s,a,o,`SPACE`,C),t>.56&&t<.68){let n=Cd(1-(t-.56)/.12),i=Math.min(6+(t-.56)*60,r.w/2-2,(c+4-r.y-1)/.8);for(let[t,r]of $u(x,c+4,i,i*.8))t+r&1||I(e.g,t,r,U,n)}return}let n=r.h>=50?4:3,i=Math.max(7,Math.min(16,Math.floor(Math.min(r.w,r.h)/2)-12));for(let[t,n]of fr(x,S,i+2))F(e.g,t,n,U);let a=$u(x,S,i-1,i-1),o=t>.42&&t<.6;a.forEach(([t,n],r)=>{(r+.5)/a.length<=d?F(e.g,t,n,`Y1`):r%2==0&&F(e.g,t,n,`A0`)}),nd(e,Ic(o||p>0?9:7,o||p>0?`Y1`:U),x,S);let s=wd((t-.46)/.1)-wd((t-.64)/.1),c=[Math.min(x+i+8,r.x+r.w-n-5),Math.min(S+i+6,r.y+r.h-n-5)];if(Xu(e,c[0]+Math.round((x+2-c[0])*s),c[1]+Math.round((S+2-c[1])*s),n===4,+!!C),t>.56&&t<.68){let n=Cd(1-(t-.56)/.12),a=Math.min(i+3+(t-.56)*50,Math.floor(Math.min(r.w,r.h)/2)-2);for(let[t,r]of fr(x,S,Math.round(a)))t+r&1||I(e.g,t,r,U,n)}})}function hd(e,t){let n=e+`:`+t,r=xf.get(n);if(!r){let i=Ai(e,t),a=1e9,o=1e9,s=-1,c=-1;for(let e=0;e<i.h;e++)for(let t=0;t<i.w;t++)i.sd[e*i.w+t]<.5&&(a=Math.min(a,t),s=Math.max(s,t),o=Math.min(o,e),c=Math.max(c,e));xf.set(n,r=[a-i.hx,o-i.hy,s-i.hx,c-i.hy])}return r}function gd(e,t,n){let r=e+`:`+t+`:`+n,i=Sf.get(r);if(i!==void 0)return i;let a=r=>{let i=hd(e,r);return i[2]-i[0]+1<=t&&i[3]-i[1]+1<=n},o=hd(e,40),s=Math.max(16,40*Math.min(t/(o[2]-o[0]+1),n/(o[3]-o[1]+1)));for(i=Math.min(150,150-2*Math.floor((150-Math.min(150,s+6))/2)),i<150&&a(i+2)&&(i=150);i>16&&!a(i);)i-=2;return Sf.set(r,i),i}function _d(e){let{u:t}=e,[n,r]=e.zones,i=Math.min(2,Math.floor(t/.25)),a=(t-i*.25)/.25,o=i,s=n.x+ff.l+3,c=n.y+n.h-ff.d-3,l={x0:n.x+4,x1:n.x+n.w-5,y0:n.y+4,y1:c-ff.u-4},u=gd(o,l.x1-l.x0+1,l.y1-l.y0+1),d=hd(o,u),f=Math.round((l.x0+l.x1)/2-(d[0]+d[2])/2),p=Math.round(l.y0+Math.max(0,(l.y1-l.y0-(d[3]-d[1]))*.35)-d[1]),m=t<.75&&a>.2&&a<.5,h=e=>(a*3.5+e*.5)%1,g=m&&a>.26&&(h(0)<.07||h(1)<.07),_=f+Math.round((d[0]+d[2])/2),v=p+Math.round((d[1]+d[3])/2),y=nf(s,c,_,v,h(0)<.22||h(1)<.22);Ou(e,0,()=>{if(t<.75){let t=Pr(a/.24),r=Pr((a-.48)/.48);if(r<1&&qu(e,o,f,p,u,[n.x,n.y,n.w,n.h],{reveal:t,die:r,struck:g}),m){let[t,n]=Fu(s,c,`dreamer.cast`,nf(s,c,_,v,!0));for(let r=0;r<2;r++)Lu(e,t,n,_,v,h(r),.07)}}Pu(e,s,c,m?{pose:`dreamer.cast`,frame:y}:{})});let b=r.w>=92&&r.h>=64?24:12,[x,S]=cc[b],C=Math.min(b===24?32:18,Math.floor((r.w-x)/2)-3),w=[-1,0,1].map(e=>gf(r)+e*C),T=r.y+Math.round(r.h*.58),E=Math.min(T+Math.ceil(S/2)+2,r.y+r.h-2);if(t<.75&&a>.54){let t=wd((a-.54)/.42),n=f+Math.round((d[0]+d[2])/2)+e.ox[0],r=p+Math.round((d[1]+d[3])/2),o=w.map(t=>t+e.ox[1]);if(t<1){let a=e.y+Math.ceil(S/2)+1,s=b===24?22:12,c=(e,t)=>r+(T-r)*e-Math.sin(Math.PI*e)*t,l=e=>{let t=1e9;for(let n=0;n<=40;n++)t=Math.min(t,c(n/40,e));return t};for(;s>0&&l(s)<a;)s--;let u=n+(o[i]-n)*t,d=e.tall?e.zones[0]:null;if(d&&d.cap.length){let r=Math.max(...d.cap.map(e=>Id(e)))/2,a=d.capY-Math.ceil(S/2)-3,l=d.capY+zd(d.cap.length)+Math.ceil(S/2)+3,f=Math.ceil(d.cx+r+x/2+3),p=Math.floor(d.cx-r-x/2-3),m=f+Math.ceil(x/2)+1<=e.x+e.w,h=p-Math.ceil(x/2)-1>=e.x,g=i===0?h?p:m?f:null:m?f:h?p:null;if(g!=null){let e=1,r=1;for(let t=0;t<=200;t++){let n=t/200,i=c(n,s);if(e===1&&i>=a&&c(Math.max(0,n-.005),s)<=i&&(e=n),i>=l){r=n;break}}e=Math.max(.08,e-.04),u=t<e?n+(g-n)*wd(t/e):t<r?g:g+(o[i]-g)*wd((t-r)/Math.max(.01,1-r))}}Ku(e,i,b,u,Math.max(a,c(t,s)),!0,Cd(t*8))}}Ou(e,1,()=>{let n=Math.min(Cd((t-.76)/.06),Cd((1-t)/.06));if(n>0){let i=wd((t-.76)/.16),a=b===24?16:10,o=Math.max(0,E-r.y-2-a-3),s=w[1];for(let t=0;t<22;t++){let c=Math.PI*(1.04+.92*t/21),l=(t%2?.7:1)*Math.min(o,i*(b===24?34:22));for(let t=a+3;t<=a+3+l;t++){let i=Math.round(s+Math.cos(c)*t),a=Math.round(E+Math.sin(c)*t);!(t&1)&&a<E&&i>r.x&&i<r.x+r.w-1&&I(e.g,i,a,`Y1`,n)}}for(let[t,r]of $u(s,E,a,a))r<E&&I(e.g,t,r,`Y2`,n)}for(let t=Math.max(r.x+1,Math.round(w[0]-C/2-4));t<=Math.min(r.x+r.w-2,w[2]+C/2+4);t++)t&1||F(e.g,t,E,`Y0`);w.forEach((n,r)=>{let o=+(t>=.75||r<i||r===i&&a>=.96),s=t>.94?Cd((1-t)/.06):1;o&&s>0?(s<1&&Ku(e,r,b,n,T,!1,1),Ku(e,r,b,n,T,!0,s)):Ku(e,r,b,n,T,!1)})})}var vd,yd,bd,xd,Sd,Cd,wd,Td,U,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf=o(()=>{Ot(),qn(),Qr(),xo(),Pc(),Wl(),ou(),vd={noClip:!1,noWords:!1,noSun:!1,noFrame:!1,zone:-1,noScene:!1,noCentre:!1},yd=(e,t,n)=>{let r=e=>(e/=255)<=.04045?e/12.92:((e+.055)/1.055)**2.4,i=.2126*r(e)+.7152*r(t)+.0722*r(n);return i>.008856?116*Math.cbrt(i)-16:903.3*i},bd=/* @__PURE__ */ new Map,xd=null,Sd=8,Cd=e=>Math.round(Pr(e)*4)/4,wd=e=>(e=Pr(e),e*e*(3-2*e)),Td={0:[{words:[0],at:[.5],wt:.5},{words:[1],at:[.5],wt:.5}],2:[{words:[0],at:[.5],wt:.5},{words:[1],at:[.5],wt:.5}],3:[{words:[0,1],at:[.27,.74],wt:.5},{words:[2],at:[.5],wt:.5}],6:[{words:[0],at:[.5],wt:.6},{words:[1],at:[.5],wt:.4}]},U=`BI`,Ed=`Y0`,Dd=[6,6,6,6,6,6,8],Od=[[.24,.72],[.5],[.26,.75],[.19,.53,.83],[.22,.53,.83],[.31,.81],[.29,.79]],kd=(e,t)=>[{bottom:[t?`DRAG TO MOVE`:`KEYS OR MOUSE`,`AVOID THE NIGHTMARES`]},{bottom:[`SKILLS FIRE ON THEIR OWN`]},{bottom:[`COLLECT STAR SHARDS`,`HEARTS RESTORE LIFE`]},{bottom:[`GATHER SHARDS`,`THE GAUGE FILLS`,`CHOOSE ONE CARD`]},{bottom:[`TWO GROWN SKILLS`,`CORE`,`FUSION`]},{bottom:[`DEFEATS FILL THE RING`,t?`TAP THE RING`:`CLICK / SPACE`],top:`AWAKENED: 5 S INVINCIBLE, EVERY SKILL AT FULL POWER`},{bottom:[`DEFEAT THE GIANTS`,`THREE SHARDS OF MEMORY`]}][e],Ad=-1,jd=7,Md=zn.NIGHT5S,Nd=-1,Pd=11,Fd=!1,Id=e=>Fd?L(Md,e,Nd)/Ct:L(R,e,Ad),Ld=()=>Fd?Pd/Ct:jd,Rd=()=>Fd?Md.h/Ct:5,zd=e=>e>0?(e-1)*Ld()+Rd():0,Bd=(e,t,n)=>[t-Id(e)/2,n,t+Id(e)/2,n+Rd()],Vd=14,Hd=[{caps:e=>[e?`DRAG TO MOVE`:`KEYS OR MOUSE`,`AVOID THE NIGHTMARES`],wide:[[0,1]],wideW:[[.44,.56]],tall:[[0],[1]],tallW:[[1],[1]],tallH:[.44,.56],tallNat:[70,92],seq:!1},{caps:()=>[`SKILLS FIRE ON THEIR OWN`],wide:[[0]],wideW:[[1]],tall:[[0]],tallW:[[1]],tallH:[1],tallNat:[168],seq:!1},{caps:()=>[`COLLECT STAR SHARDS`,`HEARTS RESTORE LIFE`],wide:[[0,1]],wideW:[[.5,.5]],tall:[[0],[1]],tallW:[[1],[1]],tallH:[.5,.5],tallNat:[82,78],seq:!1},{gap:9,mark:Vd,caps:()=>[`GATHER SHARDS`,`THE GAUGE FILLS`,`CHOOSE ONE CARD`],wide:[[0,1,2]],wideW:[[.47,.23,.3]],tall:[[0],[1],[2]],tallW:[[1],[1],[1]],tallH:[.33,.31,.36],tallNat:[48,46,54],seq:!0},{caps:()=>[`TWO GROWN SKILLS`,`CORE`,`FUSION`],wide:[[0,1,2]],wideW:[[.43,.22,.35]],tall:[[0,1],[2]],tallW:[[.66,.34],[1]],tallH:[.42,.58],tallNat:[62,86],seq:!0},{caps:e=>[`DEFEATS FILL THE RING`,e?`TAP THE RING`:`CLICK / SPACE`],wide:[[0,1]],wideW:[[.62,.38]],tall:[[0],[1]],tallW:[[1],[1]],tallH:[.6,.4],tallNat:[96,58],seq:!1},{caps:()=>[`DEFEAT THE GIANTS`,`THREE SHARDS OF MEMORY`],wide:[[0,1]],wideW:[[.56,.44]],tall:[[0],[1]],tallW:[[1],[1]],tallH:[.6,.4],tallNat:[92,64],seq:!1}],Ud=`AWAKENED: 5 S INVINCIBLE, EVERY SKILL AT FULL POWER`,Wd=9,Gd=13,Kd=/* @__PURE__ */ new Map,qd=32,Jd=!1,Yd=/* @__PURE__ */ new Map,Xd=(e,t,n,r,i,a,o)=>[e,+a,+o,r,i,(t%12+12)%12,(n%12+12)%12].join(`:`),Zd=null,Qd=!1,$d=9,ef=(e,t,n=0)=>{let r=t===`dreamer.fly`||t===`glitch.hover`?4:t===`bug.hover`?2:t===`spam.idle`?4:t===`error.creep`||t===`elite.idle`?6:1,i=so[t]?.fps??8;return(Math.floor(e.t*i+n)%r+r)%r},tf=/* @__PURE__ */ new Map,nf=(e,t,n,r,i)=>Zi(Math.atan2(r-t,n-e)*180/Math.PI,i),rf={glitch:`glitch.hover`,bug:`bug.hover`,spam:`spam.idle`,error:`error.creep`,elite:`elite.idle`},af=e=>{let t=so[rf[e]];return{l:t.ox,r:t.w-t.ox,u:t.oy,d:t.h-t.oy}},of=[`.#####.`,`#..#..#`,`#..#..#`,`#..#..#`,`#######`,`#.....#`,`#.....#`,`#.....#`,`#.....#`,`#.....#`,`.#...#.`,`..###..`],sf=[`..#####..`,`.#..#..#.`,`#..###..#`,`#..#.#..#`,`#..###..#`,`#########`,`#.......#`,`#.......#`,`#.......#`,`#.......#`,`#.......#`,`#.......#`,`.#.....#.`,`..#####..`],cf=[`.###.`,`#.#.#`,`#.#.#`,`#####`,`#...#`,`#...#`,`#...#`,`#...#`,`.###.`],lf=[ad,od,sd,ld,pd,md,_d],uf=e=>(e%1+1)%1,df=/* @__PURE__ */ new Map,ff={l:30,r:14,u:10,d:9},pf={l:30,r:14,u:10,d:9},mf=!1,hf=(e,t,n)=>Math.max(t,Math.min(n,e)),gf=e=>e.x+Math.round(e.w/2),_f=e=>e.y+Math.round(e.h/2),vf=4,yf=(e,t)=>Math.round(e+Math.floor(t)),bf=e=>Cd(Math.min((e-.6)/.04,(.94-e)/.04)),xf=/* @__PURE__ */ new Map,Sf=/* @__PURE__ */ new Map});function wf(e){let t=[];for(let n of e.match(/[\x21-\x7e]+|[^\x21-\x7e]+/g)||[])t.push({s:n,lat:/^[\x21-\x7e]/.test(n)});return t}function Tf(e){let t=wf(e);if(!t.some(e=>e.lat))return Ft(e);let n=0;return t.forEach((e,r)=>{if(!e.lat)return void(n+=Ft(e.s));n+=ht(Ep,e.s)+(r>0?Dp:0)+(r<t.length-1?Dp:0)}),n}function Ef(e,t,n,r,i){let a=wf(t);if(!a.some(e=>e.lat))return Lt(e,t,n,r,i);let o=Math.round(n);a.forEach((t,n)=>{t.lat?(n>0&&(o+=Dp),gt(e,Ep,t.s,o,Math.round(r)+1,i),o+=ht(Ep,t.s)+(n<a.length-1?Dp:0)):(Lt(e,t.s,o,r,i),o+=Ft(t.s))})}function Df(e,t,n,r,i=!1){let a=n===`ph`||n===`tab`&&t>e,o=r.top??0,s=r.bottom??0,c=t-o-s;if(a){let t=Math.min(e-25,230),n=Math.max(8,Math.min(16,Math.round(8+(c-300)*.06))),s=Math.round(t*(t<200?2.05:1.55)),l=i&&r.touch?Math.max(Math.min(c-34,276),Math.min(c-26-2*n,s,Qf(t))):Math.min(c-34,276),u=Math.round((e-(t+9))/2)+6,d=l+6+7+13,f=o+Math.max(4,Math.round((c-d)/2))+2;return{ph:a,pw:t,pH:l,xl:u,xr:u,y:f,btnY:f+l+4+7,cx:Math.floor(e/2)}}if(t<200){let n=Math.min(184,Math.floor((e-14)/2)),r=t-20,i=Math.round((e-(2*n+2))/2),o=Math.max(2,Math.round((t-(r+6+9+13))/2))+2;return{ph:a,pw:n,pH:r,xl:i,xr:i+n+2,y:o,btnY:o+r,cx:Math.floor(e/2)}}let l=8,u=Math.min(196,Math.floor((e-2*(l+3)-2)/2));for(;i&&l>4&&u<196&&!nm(u,!!r.touch,!1);)u=Math.min(196,Math.floor((e-2*(--l+3)-2)/2));let d=Math.min(236,t-9-26),f=Math.round((e-(2*u+2))/2),p=3+d+4+4+13,m=9+Math.max(0,Math.round((t-6-5-p)/2));return{ph:a,pw:u,pH:d,xl:f,xr:f+u+2,y:m,btnY:m+d+4+4,cx:Math.floor(e/2)}}function Of(e,t,n,r,i=[]){Yn(e,0,0,t,n,`A1`);let a=(e,t)=>i.some(([n,r,i,a])=>e>=n&&e<=i&&t>=r&&t<=a);for(let i=0;i<n;i++)for(let n=0;n<t;n++){let o=r===`R`?n:t-1-n;(o<5&&N(n,i,o<2?.5:.25)||Op(n,i)&&!Op(n-1,i)&&!Op(n,i-1)&&!Op(n-1,i-1)&&!Op(n+1,i-1)&&!a(n,i))&&F(e,n,i,`A0`)}zr(e,r===`R`?t-1:0,0,n,`A0`)}function kf(e,t,n,r,i=[],a=[]){let o=(e,t)=>i.some(([r,i])=>t>=n-10&&e>=r&&e<=i)||a.some(([n,r])=>t<=9&&e>=n&&e<=r),s=(t,n,r)=>{o(t,n)||F(e,t,n,r)};for(let e=3;e<t-3;e++)s(e,3,`Y1`),s(e,n-1-3,`Y1`);for(let e=3;e<n-3;e++)s(3,e,`Y1`),s(t-1-3,e,`Y1`);for(let e=8;e<t-5-3;e++)e%2==0&&s(e,5,`Y1`),e%2==0&&s(e,n-1-5,`Y1`);for(let e=8;e<n-5-3;e++)e%2==0&&s(5,e,`Y1`),e%2==0&&s(t-1-5,e,`Y1`);for(let[e,r,i,a]of[[5,5,1,1],[t-1-5,5,-1,1],[5,n-1-5,1,-1],[t-1-5,n-1-5,-1,-1]]){for(let t=0;t<=3;t++)s(e+i*3,r+a*t,`Y1`),s(e+i*t,r+a*3,`Y1`);s(e+i,r+a,`Y0`)}for(let[t,r]of i)for(let i of[t-1,r+1])for(let t=n-6;t<=n-4;t++)F(e,i,t,`Y1`);for(let[t,n]of a)for(let r of[t-1,n+1])for(let t=3;t<=5;t++)F(e,r,t,`Y1`);let c=r===`R`?[[t-1-3,3,-1,1],[t-1-3,n-1-3,-1,-1]]:[[3,3,1,1],[3,n-1-3,1,-1]];for(let[e,t,n,r]of c)for(let i=0;i<5;i++){let a=(12+i*16.5)*Math.PI/180,o=i%2?7:11;for(let i=4;i<=o;i++){let c=Math.round(e+n*Math.cos(a)*i),l=Math.round(t+r*Math.sin(a)*i);(i%2==0||i>=o-1)&&s(c,l,i>=o-1?`Y2`:`Y1`)}}}function Af(e,t,n,r=22){for(let i=4;i<r;i++)F(e,t-i,n+2,`Y1`),F(e,t+i,n+2,`Y1`),i>6&&i<r-3&&i%2==0&&(F(e,t-i,n+4,`Y1`),F(e,t+i,n+4,`Y1`));for(let i of[-1,1])F(e,t+i*r,n+1,`Y1`),F(e,t+i*(r+1),n+2,`Y1`),F(e,t+i*r,n+3,`Y1`);for(let[r,i]of[[0,0],[-1,1],[1,1],[-2,2],[2,2],[-1,3],[1,3],[0,4]])F(e,t+r,n+i,`Y1`);F(e,t,n+2,`Y2`)}function jf(e,t,n,r){for(let i=14;i<r;i++)F(e,t-i,n+2,`Y1`),F(e,t+i,n+2,`Y1`),i<r-4&&(F(e,t-i,n+4,`Y1`),F(e,t+i,n+4,`Y1`));for(let i of[-1,1]){let a=t+i*r;for(let[t,r]of[[0,1],[i,0],[2*i,1],[2*i,2],[i,3],[0,3]])F(e,a+t,n+r,`Y1`)}let i=(t,r,i)=>{for(let a=-r;a<=r;a++){let o=r-Math.abs(a);if(i)for(let i=-o;i<=o;i++)F(e,t+i,n+3+a,Math.abs(i)+Math.abs(a)<r?`Y2`:`Y1`);else F(e,t-o,n+3+a,`Y1`),F(e,t+o,n+3+a,`Y1`)}};i(t-9,2,!1),i(t+9,2,!1),i(t,4,!1),i(t,2,!0)}function Mf(e,t,n,r,i,a,o,s,c,l,u=1,d=0){for(let f=0;f<o;f++){let p=s+(f+.5)/o*(c-s),m=f%2?a:i,h=or(ar(t+Math.cos(p)*r,n+Math.sin(p)*r,t+Math.cos(p)*m,n+Math.sin(p)*m));h.forEach(([t,n],r)=>{(u>=1||N(t,n-d,u)||r>h.length-3)&&F(e,t,n,l)})}}function Nf(e,t,n,r,i,a){let o=L(t,n),s=nr(e=>gt(e,t,n,1,1,`#fff`),o+2,t.h+2),c=Math.round(r-o/2)-1,l=i-1,u=a%4/1.2*(o+t.h+8)-4;for(let t=0;t<s.h;t++)for(let n=0;n<s.w;n++){if(!Hr(s,n,t))continue;let r=`Y1`;!Hr(s,n-1,t)||!Hr(s,n,t-1)?r=`Y2`:(!Hr(s,n+1,t)||!Hr(s,n,t+1))&&(r=`Y0`);let i=n+t-u;i>=0&&i<2&&(r=`W0`),F(e,c+n,l+t,r)}}function Pf(e,t,n,r,i,a){return $n(e,R,t,n,r,i,`center`,a)}function Ff(e,t,n,r,i){Ef(e,t,Math.round(n-Tf(t)/2),r,Or(i))}function If(e,t,n,r,i,a=`left`,o=0){yt(e,n,r,()=>$n(e,Ap,t,0,0,i,a,o))}function Lf(e,t,n,r,i){if(mm!==Ct)return Ff(e,t,n,r,i);yt(e,Math.round(Ct*n-ht(kp,t)/2)/Ct,r,()=>void gt(e,kp,t,0,0,Or(i)))}function Rf(e,t,n,r,i,a=!1,o,s=!1){let c=n/176,l=Math.floor(t/2),u=Math.round(112*c),d=0;if(s){let e=Math.round(149*c)+4-u,t=((a?Rp:(o??9)+4)+n-1-Rp)/2,r=Math.ceil(t+(66-e)/2-.5);d=Math.min(0,Math.max(r,Math.min(u,88))-u)}let f=e=>Math.round(e*c)+d;Of(e,t,n,`L`,Mp(xp[r],l,f(127)));let p=L(R,`LIBER  SOMNII`);kf(e,t,n,`L`,[],a?[[l-Math.ceil(p/2)-4,l-Math.ceil(p/2)+p+3]]:[]),Pf(e,`LIBER  SOMNII`,l,a?2:o??9,`Y0`,0);let m=f(112);Mf(e,l,m,33,Math.min(66,m-22),Math.min(54,m-30),34,Math.PI,Math.PI*2,`Y1`,.5,d),ur(e,lr(l-.5,m,31,31,Math.PI,Math.PI*2),`Y2`);for(let n=Math.round(t*.2);n<Math.round(t*.8);n++)F(e,n,m,`Y1`);Nf(e,Nr,Sp[r],l,m-4-32,i),Lf(e,xp[r],l,f(127),`BR`),Pf(e,bp[r].name.toUpperCase(),l,f(139),`BI`,2);for(let t=0;t<3;t++)wr(e,`chevron`,l-7+(t-1)*18,f(149),`Y1`)}function zf(e,t,n,r){let i=n/176,a=e=>Math.round(e*i),o=Math.floor(t/2);Of(e,t,n,`L`,Mp(wp,o,a(17))),kf(e,t,n,`L`),Lf(e,wp,o,a(17),`BR`),$n(e,Mr,`How to play`,o,a(32),`BI`,`center`),jf(e,o,a(52),Math.min(46,Math.floor(t*.3)));let s=a(115),c=t<180,l=c?31:34;ur(e,fr(o,s,l),`Y1`);for(let[t,n]of fr(o,s,l-2))(t+n)%2==0&&F(e,t,n,`Y1`);for(let t=0;t<8;t++){let n=-Math.PI/2+t*Math.PI/4,r=t%2?c?18:20:c?27:30,i=t%2?3:4;for(let t=0;t<=r;t++){let a=Math.round(i*(1-t/r)*(t<6?t/6:1));for(let r=-a;r<=a;r++)F(e,Math.round(o+Math.cos(n)*t-Math.sin(n)*r),Math.round(s+Math.sin(n)*t+Math.cos(n)*r),r<0?`Y2`:`Y1`)}for(let t=2;t<=r;t++){let a=Math.round(i*(1-t/r)*(t<6?t/6:1));F(e,Math.round(o+Math.cos(n)*t-Math.sin(n)*(a+0)),Math.round(s+Math.sin(n)*t+Math.cos(n)*(a+0)),`Y0`)}}ur(e,fr(o,s,3),`Y0`),F(e,o,s,`Y2`);let u=Math.min(56,Math.floor(t/2)-30),d=[],f=(e,t)=>{let n=0;for(let r=e;r<=t;r++){let e=r-s;Math.abs(e)<=l&&(n=Math.max(n,Math.sqrt(l*l-e*e)))}return n},p=(e,n)=>{let r=-Math.PI/2+e*2*Math.PI/Tp,i=Math.ceil(L(R,bp[e].name.toUpperCase(),-1)/2),a=Pr(Math.round(o+Math.cos(r)*u),9+i,t-9-i),c=Math.sin(r)>=0?1:-1,l=Math.round(s+Math.sin(r)*46),d=0;for(;d<24;d++){let e=f(l-7,l+5),t=Math.abs(Math.cos(r))>.2,s=a-i,u=a+i;if((e===0||(t?a<o?u<=o-e-4:s>=o+e+4:u<o-e-4||s>o+e+4))&&d>=n)break;l+=c}return{lx:a,ly:l,half:i,push:d}},m=bp.map((e,t)=>p(t,0).push);for(let t=0;t<Tp;t++){let n=bp[t].name.toUpperCase(),{lx:r,ly:i,half:a}=p(t,t===0?0:Math.max(m[t],m[Tp-t]));d.push({x0:r-a,x1:r+a,y0:i-7,y1:i+5,lx:r,ly:i}),$n(e,R,Sp[t],r,i-7,`BR`,`center`),$n(e,R,n,r,i+1,`BI`,`center`,-1)}for(let t=0;t<Tp;t++){let n=-Math.PI/2+t*2*Math.PI/Tp+Math.PI/Tp,r=Math.round(o+Math.cos(n)*(u-4)),i=Math.round(s+Math.sin(n)*44);if(!d.some(e=>r>=e.x0-3&&r<=e.x1+3&&i>=e.y0-3&&i<=e.y1+3)&&!(Math.hypot(r-o,i-s)<l+4)){for(let[t,n]of[[0,-1],[-1,0],[1,0],[0,1]])F(e,r+t,i+n,`Y1`);F(e,r,i,`Y2`)}}}function Bf(e,t){let n=e.h+t,r=Wp.get(n);if(r!==void 0)return r;let i=e.glyphs[t]||e.glyphs[`?`],a=99,o=-1;if(i)for(let e of i)for(let t=0;t<e.length;t++)e[t]===`#`&&(a=Math.min(a,t),o=Math.max(o,t));return r=o<0?null:[a,o],Wp.set(n,r),r}function Vf(e,t){let n=0,r=99,i=-1;for(let a of t){if(a===` `){n+=e.space+e.gap;continue}let t=e.glyphs[a]||e.glyphs[`?`],o=Bf(e,a);o&&(r=Math.min(r,n+o[0]),i=Math.max(i,n+o[1])),n+=(t?t[0].length:e.space)+e.gap}return[r,i]}function Hf(e,t,n){let r=t.split(` `),i=r.length,a=(t,n)=>Vf(e,r.slice(t,n).join(` `))[1],o=0;for(let e=0;e<i;){let t=e+1;for(;t<i&&a(e,t+1)<=n(o);)t++;o++,e=t}let s=null,c=1/0,l=[],u=(e,t,r)=>{if(!(r>=c)){if(t===o-1){if(a(e,i)>n(t))return;let u=r+(i-e===1&&o>1?400:0);u<c&&(c=u,s=[...l]);return}for(let s=e+1;s<=i-(o-1-t);s++){let i=a(e,s);if(i>n(t))break;let o=n(t)-i,c=s-e===1?400:0;l.push(s),u(s,t+1,r+o*o*.05+c),l.pop()}}};if(u(0,0,0),!s){let t=[],i=``;for(let a of r){let r=i?i+` `+a:a;i&&Vf(e,r)[1]>n(t.length)?(t.push(i),i=a):i=r}return i&&t.push(i),t}let d=[],f=0;for(let e of[...s,i])d.push(r.slice(f,e).join(` `)),f=e;return d}function Uf(e,t,n,r){let i=bp[e],a=Fp[r.face],o=i.en[+!n],s=i.jp[+!n],c=Rp+1+r.m,l=t-1-Rp-1-r.m,u=c+2,d=Vp(r),f=u+d+Ip,p=e=>r.mode===`column`||e<2?f:u,m=Hf(a.f,o.slice(1),e=>l-(p(e)-1)),h=r.mode===`column`?f:u,g=Np(s,l-h+1),_=(m.length-1)*r.lh+a.cap+r.ej;return{en:o,lines:m,enX:p,jl:g,jx:h,jTop:_,h:Math.max(d,_+(g.length-1)*r.jl+10),boxX:u,left:c,right:l,init:d,f:a.f}}function Wf(e,t,n,r){let i=`${e}x${t}:${+n}:${+r}`,a=qp.get(i);if(a)return a;let o=Kp(t,r),s=r?[o,`compact`,`none`]:[o,`none`],c=r?Lp:6,l=[];for(let e of[`big`,`small`])for(let t of s)for(let n of[`column`,`drop`])for(let i of[13,12])if(e===`big`)for(let a of r?[19,18]:[18,17])l.push({face:e,head:t,mode:n,lh:a,ej:r?14:a===17?12:13,jl:i,m:c});else l.push({face:e,head:t,mode:n,lh:15,ej:13,jl:i,m:c});let u=r=>Math.min(...bp.map((i,a)=>Gp(a,t,r.m)-Up(r)-zp-Uf(a,e,n,r).h)),d=l.find(e=>u(e)>=Bp)||l.reduce((e,t)=>u(t)>u(e)?t:e);return qp.set(i,d),d}function Gf(e,t,n,r,i){let a=Wf(t,n,r,i),o=Uf(e,t,r,a),s=Up(a),c=Gp(e,n,a.m)-s-zp-o.h,l=i?Math.min(64,Math.round(t*.34)):56,u=c<20?0:Math.min(l,c),d=Math.max(0,c-u+(u?0:zp)),f=s+Math.round(d*(i?.3:.5));return{S:a,W:o,P:u,plateTop:f,ey:f+(u?u+zp:0)+Math.round(d*(i?.32:0))}}function Kf(e,t,n,r,i,a,o,s){Of(e,t,n,`R`);let c=bp[r],l=Math.floor(t/2),u=r===Tp-1,{S:d,W:f,P:p,plateTop:m,ey:h}=Gf(r,t,n,a,s),g=L(R,Cp,-1),_=Sp[r],v=L(jr,_),y=t-19,b=n-12,x=o?L(R,`THE SEAL`):L(R,`CONTINUE`),S=u?y-9-4-x-4:t-11-g-4,C=l+Math.ceil(v/2)+3+18+8<S,w=C?18:4,T=w+3+v+3+w,E=C?l-Math.floor(T/2):10,D=C||d.mode!==`drop`,O=D?[[E-2,E+T+1],[S,t-9]]:[[S,t-9]],k=L(R,c.name.toUpperCase(),2),A=d.head===`none`&&(s||r===0),ee=A?Tf(xp[r])-1:0,j=k+(A?ee+6:0),te=l-Math.ceil(j/2);if(kf(e,t,n,`R`,O,d.head===`none`?[[te-4,te+j+3]]:[]),d.head===`none`&&(A&&Ef(e,xp[r],te,0,Or(`BR`)),$n(e,R,c.name.toUpperCase(),te+(A?ee+6:0),2,`Y0`,`left`,2)),d.head===`tall`&&Pf(e,`LIBER  SOMNII`,l,9,`Y0`,0),d.head!==`none`&&(Ff(e,xp[r],l,d.head===`compact`?8:d.head===`short`?10:17,`BR`),$n(e,Mr,c.name,l,d.head===`compact`?19:d.head===`short`?22:30,`BI`,`center`),d.head!==`compact`&&p&&Af(e,l,m-7)),p&&ap(e,7,m,t-14,p,r,i,a),ip(e,f.boxX,h,f.en[0],f.init),f.lines.forEach((t,n)=>gt(e,f.f,t,f.enX(n)-1,h+n*d.lh,Or(`BI`))),f.jl.forEach((t,n)=>Ef(e,t,f.jx,h+f.jTop+1+n*d.jl,Or(`BI`))),D&&(Rr(e,E,n-6,w,`Y1`),Rr(e,E+T-w,n-6,w,`Y1`),$n(e,jr,_,E+w+3,n-10,`BI`)),u||$n(e,R,Cp,t-11,n-7,`Y0`,`right`,-1),!u)return null;rp(e,y+1,b+1,9,`A0`);for(let t=-10;t<=10;t++)for(let n=-10;n<=10;n++){let r=Math.hypot(n,t)+(Jn(Math.round(Math.atan2(t,n)*6),3)-.5)*.9;if(r>9.3)continue;let i=`BR`;r>6.8&&n+t<-4&&(i=`S4`),Math.abs(Math.hypot(n,t)-6)<.5&&N(y+n,b+t,.5)&&(i=`BI`),F(e,y+n,b+t,i)}for(let[t,n]of[[0,-2],[0,-1],[-2,0],[-1,0],[0,0],[1,0],[2,0],[0,1],[0,2]])((t+n)%2==0||t===0||n===0)&&I(e,y+t,b+n,`S6`,Math.abs(t)+Math.abs(n)===2?.5:1);let ne=y-9-4;return o?($n(e,R,`BREAK`,ne,b-7,`BI`,`right`),$n(e,R,`THE SEAL`,ne,b+1,`BI`,`right`)):$n(e,R,`CONTINUE`,ne,b-3,`BI`,`right`),{id:`seal`,x:y-9-2,y:b-9-2,w:23,h:23,label:o?`Break the seal`:`Continue`}}function qf(e,t,n,r,i=!1){let a=i?Yp:Jp,o=bp[e],s=o.en[+!n],c=o.jp[+!n],l=2*(Rp+1+r),u=2*(t-1-Rp-1-r)+1,d=l,f=a.LH+a.CAP,p=d+f+a.GAP,m=Jf(Xp,s.slice(1),u-(p-1)),h=u-p+1,g=Math.max(...m.map(e=>Vf(Xp,e)[1]))-1,_=Pp(c,h),v=Pp(c,Math.min(h,g+10)),y=v.length<=Math.max(2,_.length)?v:_,b=(m.length-1)*a.LH+a.EJ;return{en:s,lines:m,jl:y,left:l,right:u,boxX:d,S:f,colX:p,jY:b,h:b+(y.length-1)*a.JL+9,enEnd:b-1,fp:a}}function Jf(e,t,n){let r=t.split(` `),i=r.length,a=(t,n)=>Vf(e,r.slice(t,n).join(` `))[1],o=Hf(e,t,()=>n),s=o.length;if(s<2||s>3)return o;let c=null,l=1/0,u=(e,t,o,d)=>{if(t===s-1){let t=a(e,i);if(t>n)return;let s=[...d,t],u=Math.max(...s)*2-Math.min(...s)+(i-e===1?400:0)+o.reduce((e,t,n)=>e+((n===0?t:t-o[n-1])===1?400:0)+tm(r[t-1],r[t]),0);u<l&&(l=u,c=[...o])}else for(let r=e+1;r<=i-(s-1-t);r++){let i=a(e,r);if(i>n)break;u(r,t+1,[...o,r],[...d,i])}};if(u(0,0,[],[]),!c)return o;let d=[],f=0;for(let e of[...c,i])d.push(r.slice(f,e).join(` `)),f=e;return d}function Yf(e,t,n){let r=n?Lp:6;for(;r>6&&!nm(e,t,n,r);)r--;return r}function Xf(e,t){let n=e-19,r=t-12,i=Math.max(jp(`THE SEAL`),jp(`BREAK`),jp(`CONTINUE`));return{x0:n-9-4-i,x1:n+9+1,y0:r-9-1,y1:t-2}}function Zf(e,t,n,r){let i=`${e}x${t}:${+n}:${+r}`,a=rm.get(i);if(a)return a;let o=Yf(e,n,r),s=Rp+1,c=t-10,l=c-s,u=bp.map((t,i)=>qf(i,e,n,o,r)),d=Math.max(...u.map(e=>e.jl.length)),f=Math.max(...u.map(e=>e.h))/2,p=Math.max(...u.map(e=>e.enEnd))/2,m=l>=220?`tall`:l>=150?`short`:l>=110?`compact`:`none`,h=r&&n&&m===`tall`,g=e=>m===`tall`?[{k:`lib`,h:5},{k:`jp`,h:e},{k:`name`,h:12},{k:`orn`,h:5}]:m===`short`?[{k:`jp`,h:e},{k:`name`,h:12},{k:`orn`,h:5}]:m===`compact`?[{k:`jp`,h:e},{k:`name`,h:12}]:[],_=h?[am(t),3,3,2,4]:m===`tall`?[3,3,3,2,4]:m===`short`?[4,3,2,4]:m===`compact`?[2,2,3]:[0],v=m===`short`?Zp-1:Zp,y=Xf(e,t),b=u[Tp-1],x=b.jl.map(e=>[b.colX/2,(b.colX+Tf(e))/2]),S=/* @__PURE__ */ new Map,C=e=>{let t=S.get(e);return t!==void 0||(t=x.every(([t,n],r)=>{let i=(e+b.jY+r*b.fp.JL-1)/2;return(e+b.jY+r*b.fp.JL+9)/2+4<=y.y0||i>=y.y1+4||n+4<=y.x0||t>=y.x1+4}),S.set(e,t)),t},w=(e,t)=>{let n=(e/l-t)*100;return n*n+(Math.abs(n)>3?(Math.abs(n)-3)*40:0)},T=Math.max(6,Math.min(14,Math.round(l*.05))),E=_[_.length-1],D=e=>{let t=Math.min(e,Math.max(0,T-E)),n=e-t,r=_.map((e,t)=>e+Math.floor(n*(t+1)/_.length)-Math.floor(n*t/_.length));return r.length&&(r[r.length-1]+=t),r},O=e=>(e-T)*(e-T)*3,k=(e,t,n)=>{let r=g(e),i=s+r.reduce((e,t)=>e+t.h,0)+_.reduce((e,t)=>e+t,0),a=null;for(let e=Math.max(i,s);e<=i+30;e++){let r=D(e-i),o=m===`none`?T:r[r.length-1];for(let r=0;r<=l;r++){if(r>0&&r<Math.max(24,t))continue;let i=e+r;for(let t=2*(i+(r?v:0));t/2+f+Qp<=c;t++){if(!C(t))continue;let l=t/2+p-i,u=c-(t/2+p),d=t/2-i,m=c-(t/2+f),h=r?w(e-s,$p.title)+w(r-n,$p.plate)+w(l,$p.en)+w(u,$p.jp)+O(o)+O(d)+O(m):1e6+Math.abs(t/2-(i+c-f)/2);(!a||h<a.c)&&(a={c:h,pt:e,P:r,bt:t})}}}return{B:a||{c:0,pt:i,P:0,bt:2*i},parts:r,headMin:i}},A=e-2*(Rp+1+o),ee=()=>{let t=g(8),n=s+t.reduce((e,t)=>e+t.h,0)+_.reduce((e,t)=>e+t,0),r=om(l,T),i=n+Math.max(0,r-E),a=Math.floor(2*(c-r-f));for(;a>2*i&&!C(a);)a--;let o=Math.floor(a/2)-r-i,u=o-im(e);return u>0&&(o-=u,i+=Math.floor(u/3)),{B:{c:0,pt:i,P:o>=24?o:0,bt:a},parts:t,headMin:n}},j,te=k(10,0,0);if(r&&n)j=ee();else{let e=0;if(te.B.P){let t=bp.map((e,t)=>hu(A,te.B.P,t,n,!1));for(e=te.B.P;e<te.B.P+24&&bp.some((r,i)=>hu(A,e,i,n,!0)<t[i]);)e++}j=k(8,e,e-te.B.P);for(let t=e-1;!j.B.P&&te.B.P&&t>=te.B.P;t--)j=k(8,t,t-te.B.P);!j.B.P&&te.B.P&&(j=k(8,0,0))}let{B:ne,parts:re,headMin:ie}=j,ae=D(Math.max(0,ne.pt-ie)),oe=s,se={};re.forEach((e,t)=>{oe+=ae[t],se[e.k]=oe,oe+=e.h});let ce={m:o,head:m,libY:se.lib??null,jpY:se.jp??0,nameY:se.name??0,ornY:se.orn??null,plate:ne.P?{x:Rp+1+o,y:ne.pt,w:A,h:ne.P}:null,bt:ne.bt,top:s,foot:c,nJP:d,plate0:te.B.P?{y:te.B.pt,h:te.B.P}:null};return rm.set(i,ce),ce}function Qf(e){let t=sm.get(e);if(t)return t;let n=Yf(e,!0,!0),r=Math.max(...bp.map((t,r)=>qf(r,e,!0,n,!0).h))/2,i=340;for(let t=0;t<4;t++){let t=i-10-(Rp+1),n=Math.max(6,Math.min(14,Math.round(t*.05))),a=om(t,n),o=Rp+1+am(i)+42+Math.max(0,a-4);i=Math.ceil(o+im(e)+a+r+a)+1+10}return sm.set(e,i),i}function $f(e,t,n,r,i){let a=Zf(t,n,r,i),o=qf(e,t,r,a.m,i),s=a.foot-a.top,c=a.plate?a.plate.y:a.top,l=a.plate?a.plate.y+a.plate.h:a.top,u=(a.bt+o.enEnd)/2,d={title:c-a.top,plate:l-c,en:u-l,jp:a.foot-u},f=Object.fromEntries(Object.entries(d).map(([e,t])=>[e,Math.round(t/s*1e3)/10])),p=o.boxX-2,m=o.boxX+o.S+1;o.lines.forEach(e=>{let[t,n]=Vf(Xp,e);p=Math.min(p,o.colX-1+t),m=Math.max(m,o.colX-1+n)}),o.jl.forEach(e=>m=Math.max(m,o.colX+Tf(e)-(`、。`.includes(e[e.length-1])?6:3)));let h=a.bt-2,g=a.bt+o.h-1;return{G:a,W:o,inner:s,bands:d,pct:f,l:p,r:m,t:h,b:g,L:o.left,R:o.right,frameL:2*(Rp+1),frameR:2*(t-Rp-1)-1,footF:2*a.foot}}function ep(e){let t=Math.floor(e/2),n=jp(Cp,-1),r=e-19,i=Math.max(jp(`THE SEAL`),jp(`CONTINUE`)),a=t=>t<Tp-1?e-11-n-4:r-9-4-i-4,o=Math.max(...Sp.map(e=>jp(e,lm))),s=Math.min(...bp.map((e,t)=>a(t))),c=Math.max(4,Math.min(18,s-t-Math.ceil(o/2)-3-8)),l=c>=8,u=l?c:4,d=u+3+o+3+u;return{wide:l,rl:u,gw:d,gx:l?t-Math.floor(d/2):10,fw:o,cutOf:a,turnW:n}}function tp(e,t,n,r,i,a,o,s){let c=bp[r],l=Math.floor(t/2),u=r===Tp-1,d=Zf(t,n,a,s),f=qf(r,t,a,d.m,s),p=Sp[r],m=ep(t),h=t-19,g=n-12,_=m.cutOf(r),{rl:v,gw:y,gx:b}=m,x=(d.bt+f.h)/2+4<=n-7,S=$f(r,t,n,a,s),C=[[Math.floor(S.l/2)-2,Math.floor(S.t/2)-2,Math.ceil(S.r/2)+2,Math.ceil(S.b/2)+2]];if(d.head!==`none`&&C.push(...Mp(xp[r],l,d.jpY)),d.plate)for(let[e,t,n,i]of gu(d.plate.x,d.plate.y,d.plate.w,d.plate.h,r,a))C.push([Math.floor(e)-2,Math.floor(t)-2,Math.ceil(n)+1,Math.ceil(i)+1]);u?C.push([Xf(t,n).x0-2,g-8,h-9-2,g+6]):C.push([t-11-m.turnW-2,n-9,t-9,n-1]),x&&C.push([b+v,n-9,b+y-v,n-1]),Of(e,t,n,`R`,C);let w=x?_-(b+y+1)<20?[[b-2,t-9]]:[[b-2,b+y+1],[_,t-9]]:[[_,t-9]],T=L(R,`LIBER  SOMNII`),E=d.libY==null&&d.head!==`none`;return kf(e,t,n,`R`,w,E?[[l-Math.ceil(T/2)-4,l-Math.ceil(T/2)+T+3]]:[]),d.libY==null?E&&Pf(e,`LIBER  SOMNII`,l,2,`Y0`,0):Pf(e,`LIBER  SOMNII`,l,d.libY,`Y0`,0),d.head!==`none`&&(Lf(e,xp[r],l,d.jpY,`BR`),$n(e,Mr,c.name,l,d.nameY,`BI`,`center`),d.ornY!=null&&d.plate&&Af(e,l,d.ornY)),d.plate&&ap(e,d.plate.x,d.plate.y,d.plate.w,d.plate.h,r,i,a),yt(e,0,0,()=>{ip(e,f.boxX,d.bt,f.en[0],f.S),f.lines.forEach((t,n)=>gt(e,Xp,t,f.colX-1,d.bt+n*f.fp.LH,Or(`BI`))),f.jl.forEach((t,n)=>Ef(e,t,f.colX,d.bt+f.jY+n*f.fp.JL,Or(cm)))}),x&&(Rr(e,b,n-5,v,`Y1`),Rr(e,b+y-v,n-5,v,`Y1`),If(e,p,(Ct*(b+v+3)+Math.floor((Ct*m.fw-L(Ap,p,lm))/2))/Ct,um(n),`Y0`,`left`,lm)),u||If(e,Cp,t-11,um(n),`Y0`,`right`,-1),u?np(e,h,g,9,o):null}function np(e,t,n,r,i){rp(e,t+1,n+1,r,`A0`);for(let i=-r-1;i<=r+1;i++)for(let a=-r-1;a<=r+1;a++){let o=Math.hypot(a,i)+(Jn(Math.round(Math.atan2(i,a)*6),3)-.5)*.9;if(o>r+.3)continue;let s=`BR`;o>r-2.2&&a+i<-4&&(s=`S4`),Math.abs(Math.hypot(a,i)-6)<.5&&N(t+a,n+i,.5)&&(s=`BI`),F(e,t+a,n+i,s)}for(let[r,i]of[[0,-2],[0,-1],[-2,0],[-1,0],[0,0],[1,0],[2,0],[0,1],[0,2]])((r+i)%2==0||r===0||i===0)&&I(e,t+r,n+i,`S6`,Math.abs(r)+Math.abs(i)===2?.5:1);let a=t-r-4;return i?(If(e,`BREAK`,a,n-5.5,`BI`,`right`),If(e,`THE SEAL`,a,n+.5,`BI`,`right`)):If(e,`CONTINUE`,a,n-2.5,`BI`,`right`),{id:`seal`,x:t-r-2,y:n-r-2,w:r*2+5,h:r*2+5,label:i?`Break the seal`:`Continue`}}function rp(e,t,n,r,i){for(let a=-r;a<=r;a++)for(let o=-r;o<=r;o++)Math.hypot(o,a)<=r+.3&&F(e,t+o,n+a,i)}function ip(e,t,n,r,i=25){for(let r=2;r<i-2;r++)F(e,t+r,n,`BR`),F(e,t+r,n+i-1,`BR`),F(e,t,n+r,`BR`),F(e,t+i-1,n+r,`BR`);for(let r=3;r<i-3;r++)r%2&&(F(e,t+r,n+2,`BR`),F(e,t+r,n+i-3,`BR`),F(e,t+2,n+r,`BR`),F(e,t+i-3,n+r,`BR`));for(let[r,a]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let o=r<0?t:t+i-1,s=a<0?n:n+i-1;F(e,o-r,s,`BR`),F(e,o,s-a,`BR`),F(e,o-r,s-a,`BR`),F(e,o+r,s+a,`BR`),F(e,o+2*r,s+2*a,`BR`),F(e,o+2*r,s,`BR`),F(e,o,s+2*a,`BR`)}let a=(i>=28?pm:dm)[r.toUpperCase()];if(!a){let a=L(Mr,r);$n(e,Mr,r,t+Math.round((i-a)/2),n+Math.round((i-12)/2),`BR`);return}let o=Math.max(...a.map(e=>e.length)),s=t+Math.round((i-o)/2),c=n+Math.round((i-a.length)/2);a.forEach((t,n)=>{for(let r=0;r<t.length;r++)t[r]===`#`&&F(e,s+r,c+n,`BR`)})}function ap(e,t,n,r,i,a,o,s){_u(e,t,n,r,i,a,o,s)}function op(e,t,n,r){for(let r=0;r<n;r++)for(let i=0;i<t;i++){let a=`M1`;Jn(i,r,5)<.25&&N(i,r,.5)&&(a=`M0`),(i===t-1||r===n-1)&&(a=`M0`),i===0&&(a=`M2`),F(e,i,r,a)}let i=(r,i)=>{let a=(t,n)=>{F(e,t+1,n+1,`M0`),F(e,t,n,`V2`)};for(let e=r+i;e<t-r-i;e++)a(e,r),a(e,n-1-r);for(let e=r+i;e<n-r-i;e++)a(r,e),a(t-1-r,e);for(let[e,o,s,c]of[[r,r,1,1],[t-1-r,r,-1,1],[r,n-1-r,1,-1],[t-1-r,n-1-r,-1,-1]])for(let t=0;t<=i;t++)a(e+s*i,o+c*t),a(e+s*t,o+c*i)};i(8,4),i(11,0);for(let r=41;r<n-15-26;r++)F(e,15,r,`M3`),F(e,t-1-15,r,`M3`);for(let r of[41,n-15-27])Rr(e,15,r,4,`M3`),Rr(e,t-15-4,r,4,`M3`),zr(e,18,r+(r<n/2?-6:1),6,`M3`),zr(e,t-15-4,r+(r<n/2?-6:1),6,`M3`);let a=Math.floor(t/2),o=n/176;for(let[t,n]of[[`RULE`,26],[`BOOK`,42]]){let r=L(Mr,t,2);sp(e,t,a-Math.round(r/2),Math.round(n*o),2)}let s=Math.round(n*.56);for(let t=0;t<36;t++){let n=t/36*Math.PI*2+Math.PI/36,r=t%2?30:40;or(ar(a+Math.cos(n)*14,s+Math.sin(n)*14,a+Math.cos(n)*r,s+Math.sin(n)*r)).forEach(([n,r],i)=>{(N(n,r,.5)||i%3==0)&&F(e,n,r,t%2?`M3`:`V2`)})}rp(e,a,s,10,`M0`),ur(e,fr(a,s,9),`K7`),ur(e,fr(a,s,11),`M2`),cp(e,a-5,s-6,r);for(let[r,i,a]of[[t-9,0,1],[t-9,n-9,-1]])for(let t=0;t<9;t++)for(let n=0;n<9;n++){let o=8-n,s=a>0?t:8-t;if(o+s>9)continue;let c=o+s>7?`Y0`:(o+s)%3==0?`Y2`:`Y1`;(o===0||s===0)&&(c=`Y2`),F(e,r+n,i+t,c)}for(let r of[-.22,.22]){let i=Math.round(n/2+r*n)-6;Yn(e,t-4,i,4,12,`M0`),Yn(e,t-3,i+1,3,10,`V2`),zr(e,t-3,i+1,10,`K8`),Rr(e,t-5,i,1,`M0`)}}function sp(e,t,n,r,i){let a=n;for(let n of t)En(e,Mr,n,a,r,Or(`K9`),Or(`K8`),Or(`V2`),Or(`M0`),.5),a+=L(Mr,n)+Mr.gap+i}function cp(e,t,n,r){let i=[`.....wl....`,`...wwwll...`,`..wwwwllli.`,`.pwwwwlllic`,`pwwwwllllic`,`pwwwlllliic`,`pwwwllliiic`,`.lllllliiic`,`.lllllliii.`,`..lllliiik.`,`...lliiik..`,`.....iik...`,`......k....`],a={w:`W0`,l:`W1`,i:`IC0`,k:`K8`,p:`P4`,c:`C1`};i.forEach((r,i)=>{for(let o=0;o<r.length;o++)r[o]!==`.`&&F(e,t+o,n+i,a[r[o]])});let o=Math.floor(r*8%28);o<6&&(F(e,t+4,n+3,`W0`),o>1&&o<5&&(F(e,t+3,n+3,`W0`),F(e,t+5,n+3,`W0`),F(e,t+4,n+2,`W0`),F(e,t+4,n+4,`W0`)))}function lp(e,t,n,r,i,a,o){let s=document.createElement(`canvas`);s.width=n*mm,s.height=r*mm;let c=s.getContext(`2d`);c.imageSmoothingEnabled=!1,mm!==1&&c.setTransform(mm,0,0,mm,0,0);let l=null;if(e===`cover`)op(c,n,r,i);else if(e===`title`)zf(c,n,r,i);else if(e===`num`){let e=!o;if(mm===1)Rf(c,n,r,t,i,Wf(n,r,!!a.touch,o).head===`none`,void 0,e);else{let s=Zf(n,r,!!a.touch,o);Rf(c,n,r,t,i,s.libY==null&&s.head!==`none`,s.libY??(s.head===`none`?9:s.jpY+1),e)}}else l=mm===1?Kf(c,n,r,t,i,!!a.touch,!!a.first,o):tp(c,n,r,t,i,!!a.touch,!!a.first,o);return{c:s,seal:l}}function up(e,t,n,r,i,a){if(i<=0)return;let o=t.width/mm,s=t.height/mm,c=a===`L`?n:n+o-i;for(let n=0;n<i;){let a=Math.min(o-1,Math.floor((n+.5)*o/i)),l=1;for(;n+l<i&&Math.min(o-1,Math.floor((n+l+.5)*o/i))===a+l;)l++;e.drawImage(t,a*mm,0,l*mm,s*mm,c+n,r,l,s),n+=l}zr(e,a===`L`?c+i-1:c,r,s,`A0`)}function dp(e,t,n,r,i,a){let o=Tt(e);if(o)return fp(e,o,t,n,r,i,a);if(a.exit!=null)return xm(e,a.exit,e=>dp(e,t,n,r,i,{...a,exit:null}));Dr(a.pal),Tm(e,t,n,`night`,i,Lr(i,0,.35));let s=Df(t,n,r,a),{pw:c,pH:l,y:u}=s,d=[],f=Lr(i,0,.45),p=null;Zn(e,f,e=>{p=s.ph?gp(e,s,i,a):mp(e,s,i,a,t)}),p&&d.push(p);let m=a.spread===0&&a.open==null;d.push(s.ph||m?{id:`page`,x:m&&!s.ph?Math.round((t-c)/2):s.xr,y:u,w:c,h:l,label:`Turn the page`}:{id:`page`,x:s.xr,y:u,w:c,h:l,label:`Turn the page`});let h=a.first?`START`:`CLOSE`,g=a.touch?null:`ESC`,_=Mm(h,g),v=Math.round(s.cx-_/2),y=Lr(i,.25,.45);d.push({...jm(e,v,s.btnY,_,h,`night`,g,a.hover===`close`,y),id:`close`});let b=a.spread>0,x=a.spread<Tp;return d.push({...Fm(e,v-8-13,s.btnY,`‹`,a.hover===`prev`,`night`,b?y:y*.5),id:`prev`}),d.push({...Fm(e,v+_+8,s.btnY,`›`,a.hover===`next`,`night`,x?y:y*.5),id:`next`}),Dr(),d}function fp(e,t,n,r,i,a,o){Dr(o.pal);let s=o.exit==null?1:1-Lr(o.exit,0,.3),c=Df(n,r,i,o,!0),{pw:l,pH:u,y:d}=c,f=[],p=null,m=Zf(l,u,!!o.touch,c.ph).plate;m&&wu(m.x,m.y,m.w,m.h,!!o.touch),vt(e,t),mm=Ct;try{bt(t,Math.min(Lr(a,0,.45),s),e=>{p=c.ph?gp(e,c,a,o):mp(e,c,a,o,n)})}finally{mm=1}s<1?Zn(e,s,e=>Tm(e,n,r,`night`,a,Lr(a,0,.35))):Tm(e,n,r,`night`,a,Lr(a,0,.35));let h=e=>{let t=o.first?`START`:`CLOSE`,n=o.touch?null:`ESC`,r=Mm(t,n),i=Math.round(c.cx-r/2),s=Lr(a,.25,.45),l={...jm(e,i,c.btnY,r,t,`night`,n,o.hover===`close`,s),id:`close`},u=o.spread>0,d=o.spread<Tp;return[l,{...Fm(e,i-8-13,c.btnY,`‹`,o.hover===`prev`,`night`,u?s:s*.5),id:`prev`},{...Fm(e,i+r+8,c.btnY,`›`,o.hover===`next`,`night`,d?s:s*.5),id:`next`}]};if(s<1)return bt(t,s,e=>void h(e)),Dr(),[];let g=h(t);p&&f.push(p);let _=o.spread===0&&o.open==null;return f.push({id:`page`,x:c.ph?c.xr:_?Math.round((n-l)/2):c.xr,y:d,w:l,h:u,label:`Turn the page`}),f.push(...g),Dr(),f}function pp(e,t,n,r,i){for(let a=t-3;a<t+r+3;a++)I(e,a,n-3,`V2`,.5),I(e,a,n+i+4,`V2`,.5);for(let a=n-2;a<n+i+4;a++)I(e,t-3,a,`V2`,.5),I(e,t+r+2,a,`V2`,.5);Yn(e,t-2,n-2,r+4,i+6,`M1`),Rr(e,t-2,n-2,r+4,`M2`),Rr(e,t,n+i,r,`A1`),Rr(e,t,n+i+1,r,`V2`)}function mp(e,t,n,r,i){let{pw:a,pH:o,y:s}=t,{xl:c,xr:l}=t;if(r.spread===0||r.open!=null){let t=r.open??0,i=Math.round((1-Fr(Pr(t*1.6)))*Math.floor(a/2+1));c-=i,l-=i;let u=Math.min(7,Math.floor(t*8)),d=lp(`cover`,0,a,o,n,r,!1).c;if(u<4){let t=Math.round(a*vm[u]);return pp(e,l,s,a+0,o),u>0&&hm(e,lp(`law`,0,a,o,n,r,!1).c,l,s),up(e,d,l,s,t,`L`),null}pp(e,c,s,a*2+2,o),hm(e,lp(`law`,0,a,o,n,r,!1).c,l,s);let f=lp(`title`,0,a,o,n,r,!1).c;return up(e,f,c,s,Math.round(a*vm[7-u]),`R`),hp(e,c+a,s,o),null}pp(e,c,s,a*2+2,o);let u=r.spread,d=gm(u),f=_m(u),p=null;if(r.turn&&r.turn.to!==u){let t=r.turn.to>u,i=Math.min(7,Math.floor(r.turn.p*8)),p=gm(r.turn.to),m=_m(r.turn.to);if(t){hm(e,lp(d.kind,d.i,a,o,n,r,!1).c,c,s);let t=lp(m.kind,m.i,a,o,n,r,!1);if(hm(e,t.c,l,s),i<4){let t=Math.round(a*ym[i]);for(let n=s;n<s+o;n++)for(let r=l+t;r<Math.min(l+a,l+t+4+i*3);r++)I(e,r,n,`BI`,.25);up(e,lp(f.kind,f.i,a,o,n,r,!1).c,l,s,t,`L`)}else{let t=Math.round(a*ym[7-i]);up(e,lp(p.kind,p.i,a,o,n,r,!1).c,c,s,t,`R`)}}else if(hm(e,lp(f.kind,f.i,a,o,n,r,!1).c,l,s),hm(e,lp(p.kind,p.i,a,o,n,r,!1).c,c,s),i<4){let t=Math.round(a*ym[i]);for(let n=s;n<s+o;n++)for(let r=Math.max(c,c+a-t-4-i*3);r<c+a-t;r++)I(e,r,n,`BI`,.25);up(e,lp(d.kind,d.i,a,o,n,r,!1).c,c,s,t,`R`)}else{let t=Math.round(a*ym[7-i]);up(e,lp(m.kind,m.i,a,o,n,r,!1).c,l,s,t,`L`)}}else{hm(e,lp(d.kind,d.i,a,o,n,r,!1).c,c,s);let t=lp(f.kind,f.i,a,o,n,r,!1);hm(e,t.c,l,s),t.seal&&(p={...t.seal,x:t.seal.x+l,y:t.seal.y+s})}return hp(e,c+a,s,o),p}function hp(e,t,n,r){for(let i=n;i<n+r;i++)for(let n=t;n<t+2;n++)F(e,n,i,`A0`),I(e,n,i,`BI`,.25)}function gp(e,t,n,r){let{pw:i,pH:a,y:o,xr:s}=t;pp(e,s-3,o,i+3,a);for(let t=o;t<o+a;t++)for(let n=s-3;n<s;n++)F(e,n,t,`A1`),I(e,n,t,`A0`,n===s-1?1:.5);if(r.spread===0&&r.open==null)return hm(e,lp(`cover`,0,i,a,n,r,!0).c,s,o),null;let c=Math.max(1,r.spread);if(r.turn&&r.turn.to!==c){let t=Math.min(4,Math.floor(r.turn.p*5)),l=r.turn.to>c,u=l?c:r.turn.to,d=l?r.turn.to:c;hm(e,lp(`law`,d-1,i,a,n,r,!0).c,s,o);let f=Math.round(i*ym[l?t:4-t]);for(let t=o;t<o+a;t++)for(let n=s+f;n<Math.min(s+i,s+f+5);n++)I(e,n,t,`BI`,.25);return up(e,lp(`law`,u-1,i,a,n,r,!0).c,s,o,f,`L`),null}let l=lp(`law`,c-1,i,a,n,r,!0);return hm(e,l.c,s,o),l.seal?{...l.seal,x:l.seal.x+s,y:l.seal.y+o}:null}var _p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im,am,om,sm,cm,lm,um,dm,fm,pm,mm,hm,gm,_m,vm,ym,bm=o(()=>{qn(),Ot(),Yt(),Qr(),Kh(),Cf(),_p=Ht,vp=Ut,yp=e=>[...e].join(vp),bp=[{key:`move`,name:`Move`,jp:[`\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5\u3002\u60AA\u5922\u306B\u89E6\u308C\u308B\u3068${_p}\u4F53\u529B\u304C\u6E1B\u308A\u3001\u5C3D\u304D\u308B\u3068\u76EE\u899A\u3081\u307E\u3059\u3002`,`WASD\u304B\u30DE\u30A6\u30B9\u3067\u79FB\u52D5\u3002\u60AA\u5922\u306B\u89E6\u308C\u308B\u3068${_p}\u4F53\u529B\u304C\u6E1B\u308A\u3001\u5C3D\u304D\u308B\u3068\u76EE\u899A\u3081\u307E\u3059\u3002`],en:[`Drag to move. Nightmares cost you life; at zero, you wake.`,`Use WASD or the mouse. Nightmares cost life; at zero, you wake.`]},{key:`attack`,name:`Attack`,jp:[`\u81EA\u52D5\u3067\u767A\u52D5\u3059\u308B${_p}\u30B9\u30AD\u30EB\u304C\u3001\u8FD1\u304F\u306E\u60AA\u5922\u3092\u72D9\u3044\u307E\u3059\u3002`,`\u81EA\u52D5\u3067\u767A\u52D5\u3059\u308B${_p}\u30B9\u30AD\u30EB\u304C\u3001\u8FD1\u304F\u306E\u60AA\u5922\u3092\u72D9\u3044\u307E\u3059\u3002`],en:[`Your skills fire on their own at the nearest nightmares.`,`Your skills fire on their own at the nearest nightmares.`]},{key:`collect`,name:`Gather`,jp:[`\u5012\u3057\u305F\u60AA\u5922\u306F${_p}${yp(`星のかけら`)}\u3092\u843D\u3068\u3057\u307E\u3059\u3002\u30CF\u30FC\u30C8\u3092\u62FE\u3046\u3068\u3001\u4F53\u529B\u304C\u56DE\u5FA9\u3057\u307E\u3059\u3002`,`\u5012\u3057\u305F\u60AA\u5922\u306F${_p}${yp(`星のかけら`)}\u3092\u843D\u3068\u3057\u307E\u3059\u3002\u30CF\u30FC\u30C8\u3092\u62FE\u3046\u3068\u3001\u4F53\u529B\u304C\u56DE\u5FA9\u3057\u307E\u3059\u3002`],en:[`Fallen nightmares drop star shards. Hearts restore life.`,`Fallen nightmares drop star shards. Hearts restore life.`]},{key:`level`,name:`Grow`,jp:[`\u30B2\u30FC\u30B8\u304C\u6E80\u3061\u308B\u3068${_p}\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7\u3002
\u30B9\u30AD\u30EB\u30AB\u30FC\u30C9\u3092${_p}1\u679A\u9078\u3073\u307E\u3059\u3002`,`\u30B2\u30FC\u30B8\u304C\u6E80\u3061\u308B\u3068${_p}\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7\u3002
\u30B9\u30AD\u30EB\u30AB\u30FC\u30C9\u3092${_p}1\u679A\u9078\u3073\u307E\u3059\u3002`],en:[`Shards fill the gauge; at each level, choose one skill card.`,`Shards fill the gauge; at each level, choose one skill card.`]},{key:`fuse`,name:`Fuse`,jp:[`\u5F37\u3044\u60AA\u5922\u3092\u5012\u3059\u3068${_p}\u30B3\u30A2\u304C${yp(`手に入り`)}\u3001\u80B2\u3066\u305F${yp(`スキル2つ`)}\u3092${_p}\u5408\u4F53\u3067\u304D\u307E\u3059\u3002`,`\u5F37\u3044\u60AA\u5922\u3092\u5012\u3059\u3068${_p}\u30B3\u30A2\u304C${yp(`手に入り`)}\u3001\u80B2\u3066\u305F${yp(`スキル2つ`)}\u3092${_p}\u5408\u4F53\u3067\u304D\u307E\u3059\u3002`],en:[`Strong nightmares drop a core to fuse two grown skills.`,`Strong nightmares drop a core to fuse two grown skills.`]},{key:`overdrive`,name:`Overdrive`,jp:[`\u60AA\u5922\u3092\u5012\u3059\u3068${_p}${yp(`光の輪`)}\u304C\u305F\u307E\u308A\u3001\u305F\u307E\u3063\u305F\u3089${_p}\u8F2A\u3092\u30BF\u30C3\u30D7\u3057\u3066\u899A\u9192\u3002`,`\u60AA\u5922\u3092\u5012\u3059\u3068${_p}${yp(`光の輪`)}\u304C\u305F\u307E\u308A\u3001\u305F\u307E\u3063\u305F\u3089${_p}\u30AF\u30EA\u30C3\u30AF\u304BSpace\u3067\u899A\u9192\u3002`],en:[`Defeats fill the ring of light; when full, tap it to awaken.`,`Defeats fill the ring of light. Full, click or Space to awaken.`]},{key:`reclaim`,name:`Reclaim`,jp:[`\u5DE8\u5927\u306A\u60AA\u5922\u3092\u5012\u3057${_p}${yp(`記憶のかけら`)}\u30923\u3064${_p}\u96C6\u3081\u308B\u3068\u591C\u660E\u3051\u3002`,`\u5DE8\u5927\u306A\u60AA\u5922\u3092\u5012\u3057${_p}${yp(`記憶のかけら`)}\u30923\u3064${_p}\u96C6\u3081\u308B\u3068\u591C\u660E\u3051\u3002`],en:[`Defeat the giants; three shards of memory end the night.`,`Defeat the giants; three shards of memory end the night.`]}],xp=[`第一の掟`,`第二の掟`,`第三の掟`,`第四の掟`,`第五の掟`,`第六の掟`,`第七の掟`],Sp=[`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`],Cp=`TURN THE PAGE →`,wp=`夢の書 — 七つの掟`,Tp=bp.length,Ep=zn.NIGHT7,Dp=2,Op=(e,t)=>Jn(e,t,77)<.012,kp=zn.JP16,Ap=zn.NIGHT5S,jp=(e,t=0)=>Math.ceil(L(Ap,e,t)/Ct),Mp=(e,t,n)=>{if(mm!==Ct)return[];let r=ht(kp,e)/Ct;return[[Math.floor(t-r/2)-2,n-2,Math.ceil(t+r/2)+2,n+8+1]]},Np=(e,t)=>Nt(e,t,Tf),Pp=Np,Fp={big:{f:zn.NIGHT12I,cap:12},small:{f:zn.NIGHT10I,cap:10}},Ip=5,Lp=8,Rp=5,zp=9,Bp=28,Vp=e=>e.lh+Fp[e.face].cap,Hp={tall:51,short:42,compact:36,none:Rp+1+Lp},Up=e=>e.head===`none`?Rp+1+e.m:Hp[e.head],Wp=/* @__PURE__ */ new Map,Gp=(e,t,n=Lp)=>e===Tp-1?t-26:t-Rp-1-n,Kp=(e,t)=>t?`tall`:e<160?`compact`:e<180?`short`:`tall`,qp=/* @__PURE__ */ new Map,Jp={LH:19,CAP:12,GAP:6,EJ:28,JL:17},Yp={LH:17,CAP:12,GAP:6,EJ:25,JL:15},Xp=zn.NIGHT12I,Zp=7,Qp=6,$p={title:.2,plate:.5,en:.2,jp:.1},em=/* @__PURE__ */ new Set([`a`,`an`,`the`,`of`,`to`,`at`,`on`,`in`,`by`,`for`,`or`,`and`,`its`,`your`,`their`,`each`,`every`,`one`,`two`,`three`,`with`,`from`,`into`,`as`,`star`]),tm=(e,t)=>{let n=0;return/[.!?]$/.test(e)?n-=200:/[;:]$/.test(e)?n-=150:/,$/.test(e)&&(n-=60),em.has(e.toLowerCase())&&(n+=220),t.toLowerCase()===`of`&&(n+=120),t.toLowerCase()===`you`&&(n+=100),n},nm=(e,t,n,r=n?Lp:6)=>bp.every((i,a)=>qf(a,e,t,r,n).lines.length<=2),rm=/* @__PURE__ */ new Map,im=e=>e>=200?210:215,am=e=>e>=320?10:7,om=(e,t=14)=>Math.min(t,Math.max(6,Math.min(10,Math.round(e*.03)))),sm=/* @__PURE__ */ new Map,cm=`Y0`,lm=2,um=e=>e-6.5,dm={D:[`#########.....`,`.###....###...`,`.###.....###..`,`.###......###.`,`.###......###.`,`.###.......###`,`.###.......###`,`.###.......###`,`.###.......###`,`.###.......###`,`.###......###.`,`.###......###.`,`.###.....###..`,`.###....###...`,`#########.....`],U:[`#####....###`,`.###......#.`,`.###......#.`,`.###......#.`,`.###......#.`,`.###......#.`,`.###......#.`,`.###......#.`,`.###......#.`,`.###......#.`,`.###......#.`,`.###.....#..`,`..###....#..`,`...###..#...`,`....####....`],Y:[`#####...###`,`.###.....#.`,`.###.....#.`,`..###...#..`,`..###...#..`,`...###.#...`,`...###.#...`,`....####...`,`....###....`,`....###....`,`....###....`,`....###....`,`....###....`,`....###....`,`..#######..`],F:[`###########`,`.###.....##`,`.###......#`,`.###......#`,`.###.......`,`.###...#...`,`.###...#...`,`.#######...`,`.###...#...`,`.###...#...`,`.###.......`,`.###.......`,`.###.......`,`.###.......`,`#####......`],S:[`..#####..#`,`.##....###`,`##......##`,`##.......#`,`###.......`,`.#####....`,`..######..`,`....######`,`.......###`,`........##`,`#.......##`,`#.......##`,`##......##`,`###....##.`,`#.#####...`]},fm={D:[[3,6,8],[6,7]],U:[[3,6,9],[6]],Y:[[1,4,10],[]],F:[[3,10,12],[5]],S:[[2,4,10],[5]]},pm=Object.fromEntries(Object.entries(dm).map(([e,t])=>{let[n,r]=fm[e]||[[],[]],i=[];return t.forEach((e,t)=>{i.push(e),n.includes(t)&&i.push(e)}),[e,i.map(e=>e.split(``).map((e,t)=>r.includes(t)?e+e:e).join(``))]})),mm=1,hm=(e,t,n,r)=>e.drawImage(t,n,r,t.width/mm,t.height/mm),gm=e=>e<=1?{kind:`title`,i:0}:{kind:`num`,i:e-1},_m=e=>({kind:`law`,i:Math.max(0,e-1)}),vm=[1,.75,.5,.25,.011],ym=[1,.65,.33,.065,.011]});function xm(e,t,n){return Zn(e,1-Lr(t,0,.3),n),[]}function Sm(e,t,n,r){let i=n===`ph`||n===`tab`&&t>e,a=r.top??0,o=r.bottom??0;return{ph:i,top:a,bottom:o,m:i?6:8,cx:Math.floor(e/2),avail:t-a-o}}function Cm(e,t,n){let r=t-e.cx,i=n-e.cy,a=e.p||2,o=a===2?Math.hypot(r/e.A,i/e.B):(Math.abs(r/e.A)**+a+Math.abs(i/e.B)**+a)**(1/a);if(o<=1)return 1;let s=Math.hypot(r,i)*(1-1/o);return s<10?.75:s<13?.5:s<26?.25:0}function wm(e,t){let n=t>e;return{cx:e/2,cy:t*(n?.43:.47),A:e*(n?.58:.55),B:t*(n?.3:.5)}}function Tm(e,t,n,r,i,a=1,o){if(a<=0)return;let s=t/2,c=n/2;if(r===`night`){e.fillStyle=Or(`K0`);for(let r=0;r<n;r++)for(let i=0;i<t;i++){let o=Math.min(1,Math.hypot((i-s)/(t*.62),(r-c)/(n*.62)));N(i,r,(.5-.25*o)*a)&&e.fillRect(i,r,1,1)}Em(e,t,n,i,`K7`,.0015*a)}else if(r===`nightmare`){e.fillStyle=Or(`S1`);for(let r=0;r<n;r++)for(let n=0;n<t;n++)N(n,r,.5*a)&&e.fillRect(n,r,1,1);for(let r=0;r<n;r++)for(let i=0;i<t;i++){let o=Math.max(0,16-Math.min(i,t-1-i)),s=Math.max(0,16-Math.min(r,n-1-r)),c=16-Math.hypot(o,s);c<4?I(e,i,r,`S2`,(c<2?.5:.25)*a):c<12&&N(i+1,r,(c<8?.25:.125)*a)&&F(e,i,r,`S3`)}Em(e,t,n,i,`P4`,8e-4*a)}else{let r=o||wm(t,n);e.fillStyle=Or(`K9`);for(let i=0;i<n;i++)for(let n=0;n<t;n++)N(n,i,Cm(r,n,i)*a)&&e.fillRect(n,i,1,1)}}function Em(e,t,n,r,i,a){let o=Math.floor(r*60/4);e.fillStyle=Or(i);let s=Math.round(t*n*a);for(let r=0;r<s;r++)e.fillRect(Math.floor(Jn(r,o,7)*t),Math.floor(Jn(r,o,13)*n),1,1)}function Dm(e,t,n,r,i,a,o){let[s,c]=xh[a].arch,l=r/2,u=lr(t-.5,n+i,l,i,Math.PI,Math.PI*2);for(let[n,i]of u){let a=Math.abs(n+.5-t),u=l-a,d=u>=16?1:u>=11?.75:u>=6?.5:.25;d*=o,N(n,i,d)&&F(e,n,i,a<r*.2?s:c)}}function Om(e,t){let n=e.toUpperCase();return L(R,n,1)<=t?[n]:n.includes(` — `)?n.split(` — `).map((e,t)=>t===0?e+` —`:e):er(R,n,t,1)}function km(e,t,n,r,i,a){let o=Om(t,a);return o.forEach((t,a)=>$n(e,R,t,n,r+a*8,i,`center`,1)),o.length}function Am(e,t,n,r,i,a,o,s,c,l=!1){let u=c?90:120,d=c?6:7;Zn(e,Lr(s,0,.6),e=>Dm(e,n,r,u,d,i,1));let f=1,p=Om(a,t-16),m=bh[i];p.forEach((t,i)=>{let a=L(R,t,1);m&&Tr(e,Math.round(n-a/2)-3,r+(l?10:12)+i*8-3,a+6,11,m),Qn(e,Math.round(n-a/2)-3,r+(l?10:12)+i*8-3,a+6,11)});{let t=L(Mr,o);m&&Tr(e,Math.round(n-t/2)-3,r+(l?19:23)+(p.length-1)*8-3,t+7,21,m),Qn(e,Math.round(n-t/2),r+(l?19:23)+(p.length-1)*8,t+1,16)}Zn(e,Lr(s,.06,.6),e=>f=km(e,a,n,r+(l?10:12),xh[i].kick,t-16),[0,r+8,t,20]);let h=r+(l?19:23)+(f-1)*8,g=L(Mr,o);return Zn(e,Lr(s,.12,.6),e=>Dn(e,Mr,o,Math.round(n-g/2),h,i,Ch()),[0,h-3,t,22]),h+15}function jm(e,t,n,r,i,a,o,s,c=1){t=Math.round(t),n=Math.round(n);let l=(e,t)=>t>=0&&t<13&&e>=wh[t]&&e<r-wh[t];return Zn(e,c,e=>{for(let i=0;i<13;i++)for(let o=wh[i];o<r-wh[i];o++){let c=!l(o-1,i)||!l(o+1,i)||!l(o,i-1)||!l(o,i+1),u=t+o,d=n+i;if(a===`light`){F(e,u,d,c&&i<2?`M1`:`K0`);continue}if(c){let t=o<16&&i<7,n=o>r-17&&i>5,c=a===`nightmare`;F(e,u,d,t?s?`W0`:c?`P5`:`K8`:n?s?`K8`:c?`E1`:`K7`:s?c?`P2`:`M3`:c?`S3`:`M2`);continue}let f=a===`nightmare`,p=f?s?`P1`:`S2`:s?`M2`:`M1`,m=f?`S1`:`K0`,h=Math.min(o-wh[i],r-1-wh[i]-o),g=p;h<3&&(g=N(u,d,.5)?p:m),i===1&&o<r*.42&&(g=o<r*.3||N(u,d,.5)?f?`P2`:s?`M3`:`M2`:g),F(e,u,d,g)}let c=L(R,i,1),u=o?L(R,o)+7:0,d=c+(o?5+u:0),f=t+Math.round((r-d)/2);$n(e,R,i,f,n+4,`W0`,`left`,1),o&&vn(e,o,f+c+5,n+2,Or(a===`nightmare`?`P4`:`T1`))},[t-1,n-1,r+2,15]),{id:``,x:t,y:n,w:r,h:13,label:i}}function Mm(e,t){return 22+L(R,e,1)+(t?5+L(R,t)+7:0)}function Nm(e,t,n,r,i,a,o,s=1){let c=L(R,r,1),l=Math.round(t-c/2);return Qn(e,l,n+4,c,8),Zn(e,s,e=>{$n(e,R,r,l,n+4,a?i===`light`?`K0`:`W0`:xh[i].sec,`left`,1);let t=a?Math.round(c*Pr(o/.1)):0;for(let r=0;r<c;r++)(r<t||(l+r)%3==0)&&F(e,l+r,n+11,xh[i].ul)},[l-1,n,c+2,14]),{id:``,x:l-4,y:n-1,w:c+8,h:15,label:r}}function Pm(e,t,n,r,i,a,o,s,c){let l=[],u=Lr(s,c,.5),d=Math.round((1-Fr((s-c)/.9))*6);n+=d;let[f,...p]=a,m=o.touch?null:f.key||null,h=e=>o.hover===e;if(!r){let r=Mm(f.label.toUpperCase(),m),a=p.map(e=>L(R,e.label.toUpperCase(),1)),o=r+a.reduce((e,t)=>e+t+18,0),s=Math.round(t-o/2);return l.push({...jm(e,s,n,r,f.label.toUpperCase(),i,m,h(f.id),u),id:f.id}),s+=r+18,p.forEach((t,r)=>{l.push({...Nm(e,s+a[r]/2,n,t.label.toUpperCase(),i,h(t.id),1,u),id:t.id}),s+=a[r]+18}),{hits:l,bottom:n+13}}let g=Math.max(Mm(f.label.toUpperCase(),m),132);l.push({...jm(e,t-g/2,n,g,f.label.toUpperCase(),i,m,h(f.id),u),id:f.id});let _=p.map(e=>L(R,e.label.toUpperCase(),1)),v=_.reduce((e,t)=>e+t,0)+16*(p.length-1),y=Math.round(t-v/2);return p.forEach((t,r)=>{l.push({...Nm(e,y+_[r]/2,n+18,t.label.toUpperCase(),i,h(t.id),1,u),id:t.id}),y+=_[r]+16}),{hits:l,bottom:n+32}}function Fm(e,t,n,r,i,a=`night`,o=1){t=Math.round(t),n=Math.round(n);let s=fr(6,6,6),c=new Set(s.map(([e,t])=>t*13+e));return Zn(e,o,e=>{for(let r=0;r<13;r++)for(let o=0;o<13;o++){let s=Math.hypot(o-6,r-6),l=t+o,u=n+r;if(c.has(r*13+o)){let t=o+r<9,n=o+r>15;a===`light`?F(e,l,u,`M2`):t?F(e,l,u,i?`W0`:`K8`):n?F(e,l,u,i?`K8`:`K7`):N(l,u,i?1:.5)&&F(e,l,u,`M3`)}else s<6&&(a===`light`||N(l,u,i?.75:.5))&&F(e,l,u,`K0`)}let o={"?":[4,3,5,7],"‹":[5,4,3,5],"›":[5,4,3,5],pause:[4,4,5,6]}[r]||[4,3,5,7];wr(e,r,t+o[0],n+o[1],`W0`)},[t,n,13,13]),{id:``,x:t,y:n,w:13,h:13,label:r}}function Im(e,t,n,r,i,a,o,s,c){let l=Th(t,a),u=[],d=r+30,f=[0,1,2].map(e=>Lm(e,!!c.won[e],a,l,!!c.links,t)),p=Math.max(...f.map(e=>e.lines[0].f.base));for(let t=0;t<3;t++){let a=!!c.won[t],m=n+(t-1)*l,h=Lr(o,s+t*.08,.6);if(h<=0)continue;let g=Math.round(Math.sin(o*1.13+t*2.1)*.8+Math.sin(o*.71+t*.9)*.6),[_,v,y]=Dh[i];bh[i]&&Tr(e,m-19,r-5,38,42,bh[i]),Zn(e,h,e=>{for(let t=-16;t<=16;t++)for(let n=-16;n<=16;n++){let i=Math.hypot(n,t*1.05);i<15&&I(e,m+n,r+15+t,y,i<10?.5:.25)}for(let t=-20;t<20;t++)for(let n=-3;n<3;n++){let i=(t/20)**2+(n/3)**2;i<1&&I(e,m+t,r+30+n,i<.3?_:v,i<.3?.5:.25)}let n=hr(t,!a,Eh[i]);e.drawImage(mt(n,Ch(),`sheet`+t+(a?`w`:`l`)+jh()),m-12,r+g),a&&gr(e,m-12,r+g,t,o,n)},[m-22,r-2,44,37]);let b=r+37,x=gh.works[t],S=Lr(o,s+.12+t*.08,.6),C=f[t],w=p-C.lines[0].f.base,T=a&&c.hover===`work`+t,E=c.links&&a,D=e=>L(e.f,e.s,+(e.f===R)),O=e=>Math.round(m-(D(e)+(E?7:0))/2),k=e=>b+w+C.lines.slice(0,e).reduce((e,t)=>e+t.lh,0);bh[i]&&C.lines.forEach((t,n)=>Tr(e,O(t)-3,k(n)-3,D(t)+(E?7:0)+6,t.f.h+7,bh[i])),C.lines.forEach((t,n)=>Qn(e,O(t)-3,k(n)-3,D(t)+(E?7:0)+6,t.f.h+7)),Zn(e,S,e=>{C.lines.forEach((t,n)=>{let r=D(t),o=k(n),s=O(t),c=a?T?i===`light`?`K0`:`W0`:xh[i].name:t.f===R?xh[i].lab:xh[i].dim;if($n(e,t.f,t.s,s,o,c,`left`,+(t.f===R)),!E)return;let l=o+(t.f===jr?9:7);n===C.lines.length-1&&$n(e,R,`↗`,s+r+2+ +!!T,l-5-!!T,T?`K0`:xh[i].name);for(let n=s;n<s+r;n++)(T||n%3==0)&&F(e,n,l+(t.f===jr?4:3),T?`M1`:`M3`)})});let A=C.lines.reduce((e,t)=>e+t.lh,0);c.links&&a&&u.push({id:`work`+t,x:m-Math.floor(l/2)+2,y:r-2,w:l-4,h:39+A+3,href:x.link,label:x.title}),d=Math.max(d,b+w+A)}return{hits:u,bottom:d}}function Lm(e,t,n,r,i,a){let o=n?Math.min(r,Math.floor(a/3))-6:r-3;if(t){let t=Oh(gh.works[e].title),r=o-(i?7:0)+(n?6:0),a=[0,1,2].every(e=>!gh.works[e]||L(jr,Oh(gh.works[e].title))<=r);for(let e of a?[jr,kr]:[kr])if(L(e,t)<=r)return{lines:[{s:t,f:e,lh:e===jr?13:10}]};let s=t.replace(/ (v\d+)$/i,`\xA0$1`);return{lines:er(kr,s,r).map(e=>({s:e.replace(/\u00a0/g,` `),f:kr,lh:10}))}}let s=r-9,c=gh.bosses[e];if(L(kr,c)<=s)return{lines:[{s:c,f:kr,lh:10}]};let l=c.split(` `),u=Math.ceil(l.length/2);return{lines:[l.slice(0,u).join(` `),l.slice(u).join(` `)].filter(Boolean).map(e=>({s:e,f:kr,lh:10}))}}function Rm(e,t,n,r,i,a,o,s,c){let l=c?Fr((a-o-.2)/.9):1,u=[[`Time`,Mh(Math.round(s.time*l))],[`Level`,String(Math.max(+!c,Math.round(s.level*l)))],[`Best`,s.best==null?`--:--`:Mh(s.best)]],d=[[`Time`,Mh(s.time)],[`Level`,String(s.level)],[`Best`,u[2][1]]],f=i?9:14,p=d.map(([e,t])=>L(kr,e)+4+L(Hh,t)),m=Math.round(t-(p.reduce((e,t)=>e+t,0)+f*2)/2);return Qn(e,m,n,p.reduce((e,t)=>e+t,0)+f*2,12),Zn(e,Lr(a,o,.5),e=>u.forEach(([t,i],a)=>{$n(e,kr,t,m,n+2,xh[r].lab);let o=m+L(kr,t)+4;$n(e,Hh,i,o+L(Hh,d[a][1])-L(Hh,i),n+1,xh[r].val),m+=p[a]+f}),[0,n-1,9999,14]),n+12}function zm(e,t,n,r,i,a){if(a.exit!=null)return xm(e,a.exit,e=>zm(e,t,n,r,i,{...a,exit:null}));Dr(a.pal);let o=Sm(t,n,r,a);Tm(e,t,n,`night`,i,Lr(i,0,.35));let s=Gm(e,t,n,o,`night`,gh.sheet.paused,i,a,[{id:`continue`,label:gh.sheet.cont,key:`ESC`},{id:`restart`,label:gh.sheet.restart},{id:`wake`,label:gh.sheet.wake}],!1);return o.ph&&s.push({...Fm(e,t-19,o.top+12,`?`,a.hover===`help`,`night`,Lr(i,.2,.5)),id:`help`}),Dr(),s}function Bm(e,t,n,r,i,a){if(a.exit!=null)return xm(e,a.exit,e=>Bm(e,t,n,r,i,{...a,exit:null}));Dr(a.pal);let o=Sm(t,n,r,a);Tm(e,t,n,`nightmare`,i,Lr(i,0,.35));let s=Gm(e,t,n,o,`nightmare`,gh.sheet.over,i,a,[{id:`again`,label:gh.sheet.again,key:`ENTER`},{id:`works`,label:gh.sheet.works},{id:`wake`,label:gh.sheet.wake}],!0);return Dr(),s}function Vm(e,t,n,r,i,a){if(a.exit!=null)return xm(e,a.exit,e=>Vm(e,t,n,r,i,{...a,exit:null}));Dr(a.pal);let{fr:o,frost:s,spots:c,keep:l}=Um(t,n,r,a);Tm(e,t,n,`light`,i,Lr(i,0,.35),s),a.noDeco||Jm(e,t,n,o.ph,i,s,c,l);let u=Gm(e,t,n,o,`light`,gh.sheet.clear,i,a,[{id:`wake`,label:gh.sheet.wake,key:`ENTER`},{id:`works`,label:gh.sheet.works},{id:`again`,label:gh.sheet.again}],!0,!0);return Dr(),u}function Hm(e,t,n,r,i,a){Dr(a.pal);let{fr:o,frost:s,spots:c,keep:l}=Um(t,n,r,a);Jm(e,t,n,o.ph,i,s,c,l),Dr()}function Um(e,t,n,r){let i=Sm(e,t,n,r),a=Wm(e,i,r,!0),o=t>e,s=Om(gh.sheet.kicker,e-16).length,c=Math.max(i.ph?45:60,Math.ceil(L(Mr,gh.sheet.clear)/2)+3),l=Math.ceil(Th(e,i.ph)*1.5),u=[o?[0,a.y0,e,a.y0+Sh(s)]:[i.cx-c,a.y0,i.cx+c,a.y0+Sh(s)],[i.cx-l,a.y0+a.S.shards,i.cx+l,a.y0+a.total]],d=qm(e,t,i.ph,u),f={cx:e/2,cy:a.y0+a.total/2,A:e*(o?.6:.55),B:Math.max(a.total*(o?.78:.86),t*(o?.28:.5)),p:3};for(let n of d){let[r,i,a,s]=Ph[n.n].map(e=>e*n.L),c=Math.abs(Math.min(e,Math.max(0,n.x+(r+a)/2))-f.cx)/f.A;if(c>=.97)continue;let l=n.sy<0?n.y+i+(s-i)*.3:n.y+s-(s-i)*.3;f.B=Math.max(f.B,Math.min(t*(o?.42:.6),Math.abs(l-f.cy)/Math.cbrt(1-c*c*c)))}return{fr:i,frost:f,spots:d,keep:u}}function Wm(e,t,n,r){let i=t.ph,a=L(R,gh.sheet.kicker.toUpperCase(),1)<=e-16?1:2,o=Th(e,i),s=[0,1,2].map(t=>Lm(t,!!n.won[t],i,o,r,e)),c=Math.max(...s.map(e=>e.lines[0].f.base)),l=Math.max(...s.map(e=>c-e.lines[0].f.base+e.lines.reduce((e,t)=>e+t.lh,0))),u={shards:Sh(a)+(i?18:12),stats:0,btn:0};u.stats=u.shards+37+l+(i?18:14),u.btn=u.stats+(i?30:26);let d=u.btn+(i?32:13);return{y0:t.top+Math.max(4,Math.round((t.avail-d)/2)),total:d,S:u}}function Gm(e,t,n,r,i,a,o,s,c,l,u=!1){let d=r.ph,{y0:f,S:p}=Wm(t,r,s,u);Am(e,t,r.cx,f,i,gh.sheet.kicker,a,o,d);let m=Im(e,t,r.cx,f+p.shards,i,d,o,.15,{won:s.won,links:u,hover:s.hover});Rm(e,r.cx,f+p.stats,i,d,o,.3,s.stats,l);let h=Pm(e,r.cx,f+p.btn,d,i,c,s,o,.5);return[...m.hits,...h.hits]}function Km(e,t,n,r,i,a,o,s,c,l){let[u,d,f,p]=Ph[e].map(e=>e*a),m=f-u,h=p-d,g=(e,t)=>c.every(([n,r,i,a])=>e+f+l<=n||e+u-l>=i||t+p+l<=r||t+d-l>=a),_=e=>e+u>=-m/3&&e+f<=o+m/3,v=e=>e+d>=-h/3&&e+p<=s+h/3,y=t,b=n;for(let e=0;e<400&&!g(y,b);e++)if(v(b+i))b+=i;else if(_(y+r))y+=r;else break;return[Math.round(y),Math.round(b)]}function qm(e,t,n,r){let i=n?.72:t>e?.86:1,a=(n?22:t>e?26:16)+3,o=(n,o,s,c,l,u=a)=>{let[d,f]=Km(n,e*o,t*s,c,l,i,e,t,r,u);return{n,x:d,y:f,sx:c,sy:l,L:i}},s=t>e;return[o(`stair`,.07,s?.18:.2,-1,-1,a-10),o(`arch`,.9,s?.12:.1,1,-1),o(`column`,.955,s?.72:.78,1,1),o(`ring`,.125,s?.8:.92,-1,1)]}function Jm(e,t,n,r,i,a,o,s){let c=Lr(i,.7,.8);if(c<=0)return;let l=(e,t)=>Math.round(Math.sin(2*Math.PI*i/(3.6+2.4*Jn(e,11))+2*Math.PI*Jn(e,13))*t);Nh||=document.createElement(`canvas`),(Nh.width!==t||Nh.height!==n)&&(Nh.width=t,Nh.height=n);let u=Nh.getContext(`2d`,{willReadFrequently:!0});u.imageSmoothingEnabled=!1,u.clearRect(0,0,t,n);let[d,f,p,m]=o,h=e=>Ym(e,t,n,s),g=h(d),_=h(f),v=h(p),y=h(m);Xm(u,(e,t,n)=>Qm(e,t,n,d.L),g.x,g.y+l(2,3),Ph.stair,d.L,Fh.stair),Xm(u,(e,t,n)=>$m(e,t,n,f.L),_.x,_.y+l(4,3),Ph.arch,f.L,Fh.arch),Xm(u,(e,t,n)=>eh(e,t,n,p.L),v.x,v.y+l(6,3),Ph.column,p.L,Fh.column),Xm(u,(e,t,n)=>th(e,t,n,m.L),y.x,y.y+l(8,3),Ph.ring,m.L,Fh.ring),(r?[[.16,.14],[.84,.3],[.1,.62],[.9,.57],[.72,.88]]:[[.22,.12],[.8,.27],[.06,.55],[.93,.47],[.7,.9]]).forEach(([e,r],i)=>Xm(u,(e,t,n)=>Zm(e,t,n,i,1),Math.round(t*e),Math.round(n*r)+l(20+i,2.5),[-7,-9,7,9],1,Ih(i)));for(let e=0;e<10;e++){let r=Math.round(t*Jn(e,3)),i=Math.round(n*Jn(e,5))+l(40+e,2),a=(r-t/2)/(t/2);Math.abs(a)<.62&&i>n*.05&&i<n*.95||Xm(u,(t,n,r)=>Zm(t,n,r,10+e,0),r,i,[-1,-1,7,7],1,Ih(10+e))}let b=u.getImageData(0,0,t,n),x=b.data;for(let e=0;e<n;e++)for(let n=0;n<t;n++)x[(e*t+n)*4+3]&&Cm(a,n,e)<.75&&(x[(e*t+n)*4+3]=0);u.putImageData(b,0,0);let S=Nh;Zn(e,c,e=>e.drawImage(S,0,0))}function Ym(e,t,n,r){let[i,a,o,s]=Ph[e.n].map(t=>t*e.L),c=Fh[e.n],l=Math.abs(Math.cos(c)),u=Math.abs(Math.sin(c)),d=o-i,f=s-a,p=(d*l+f*u)/2,m=(d*u+f*l)/2,h=(i+o)/2,g=(a+s)/2,_=Math.min(Math.max(e.x+h,p/3),t-p/3),v=Math.min(Math.max(e.y+g,m/3),n-m/3),y=()=>r.some(([e,t,n,r])=>_+p+4>e&&_-p-4<n&&v+m+4>t&&v-m-4<r);for(let t=0;t<80&&y();t++)_+=e.sx,v+=e.sy;return{x:Math.round(_-h),y:Math.round(v-g)}}function Xm(e,t,n,r,i,a,o){let[s,c,l,u]=i.map(e=>e*a),d=Math.ceil(l-s)+6,f=Math.ceil(u-c)+6,p=d+`x`+f,m=Lh.get(p);m||Lh.set(p,m=document.createElement(`canvas`)),m.width=d,m.height=f;let h=m.getContext(`2d`);h.imageSmoothingEnabled=!1,h.clearRect(0,0,d,f);let g=Math.round(3-s),_=Math.round(3-c);t(h,g,_);let v=Math.round(n+(s+l)/2),y=Math.round(r+(c+u)/2);e.save(),e.imageSmoothingEnabled=!1,e.translate(v,y),e.rotate(o),e.drawImage(m,-Math.round(g+(s+l)/2),-Math.round(_+(c+u)/2)),e.restore()}function Zm(e,t,n,r,i){if(i){let i=[[`....wwl.....`,`..wwwwll....`,`.wwwwwlll...`,`wwwwwlllll..`,`wwwwllllllk.`,`wwwlllllllkk`,`.wwlllllllkk`,`.wllllllllkk`,`..lllllllkk.`,`..llllllkkk.`,`...lllllkk..`,`...lllkkk...`,`....llkk....`,`....lkk.....`,`.....k......`,`............`],[`.....wl.....`,`....wwll....`,`...wwwlll...`,`..wwwwllll..`,`.wwwwwlllll.`,`wwwwwwllllll`,`.wwwwllllll.`,`..wwllllll..`,`...wlllllk..`,`....llllk...`,`.....llk....`,`......k.....`,`............`,`............`,`............`,`............`]][r%2],a={w:`W0`,l:`W1`,k:`K8`};i.forEach((r,i)=>{for(let o=0;o<r.length;o++)r[o]!==`.`&&F(e,t-6+o,n-8+i,a[r[o]])});return}let a=3+Math.floor(Jn(r,9)*3);for(let r=0;r<a;r++)for(let i=0;i<a;i++)Math.abs(i-(a-1)/2)+Math.abs(r-(a-1)/2)>(a-1)/2+.01||F(e,t+i,n+r,i+r<a-1?`W0`:`K8`)}function Qm(e,t,n,r){let i=Math.round(16*r),a=Math.round(n-12*r),o=Math.round(n+44*r),s=17*r,c=3.6*r,l=.3,u=.6,d=e=>({ex:Math.cos(e)*s*(1+.24*Math.sin(e)),sy:o-4-(e-l)/u*c});for(let n=l;n<=l+(i-1)*u;n+=.03){if(Math.sin(n)>=0)continue;let r=d(n),i=Math.round(t+r.ex),a=Math.round(r.sy);(i+a)%2==0&&F(e,i,a,`K8`)}for(let n=0;n<i;n++){let r=l+n*u;if(Math.sin(r)>=0)continue;let i=d(r),a=Math.round(i.ex*.85),o=Math.round(i.sy);Rr(e,a>=0?t+2:t-1+a,o,Math.abs(a)+1,`K8`)}zr(e,t-2,a,o-a,`K8`),zr(e,t-1,a,o-a,`V2`),zr(e,t+1,a,o-a,`V2`);for(let n=0;n<i;n++){let r=l+n*u,i=Math.sin(r);if(i<0)continue;let a=d(r),o=Math.round(a.ex),s=Math.round(a.sy),c=o>=0?t+2:t-1+o,f=Math.abs(o)+1,p=i>.55?2:1;Rr(e,c,s,f,`V2`);for(let t=1;t<=p;t++)Rr(e,c+(o>=0?0:t),s+t,f-t,t===p?`M3`:`K8`)}for(let n=l;n<=l+(i-1)*u;n+=.02){if(Math.sin(n)<0)continue;let r=d(n);F(e,Math.round(t+r.ex),Math.round(r.sy),`V2`)}}function $m(e,t,n,r){let i=Math.round(46*r),a=Math.round(58*r),o=Math.round(7*r),s=Math.round(t-i/2),c=Math.round(n+i/2);for(let t of[s,s+i-o]){zr(e,t,c,n+a-c,`K8`),zr(e,t+o-1,c,n+a-c,`K8`),zr(e,t+o-2,c+1,n+a-c-1,`V2`);for(let r=c+8;r<n+a;r+=9)Rr(e,t,r,o,`K8`)}let l=lr(t-.5,c,i/2,i/2,Math.PI,Math.PI*1.78),u=lr(t-.5,c,i/2-o+1,i/2-o+1,Math.PI,Math.PI*1.82);ur(e,lr(t-.5,c,i/2-1,i/2-1,Math.PI,Math.PI*1.77),`V2`),ur(e,l,`K8`),ur(e,u,`K8`)}function eh(e,t,n,r){let i=Math.round(16*r),a=[14,12,13,9].map(e=>Math.round(e*r)),o=n+Math.round(40*r);a.forEach((n,r)=>{let a=r===3?2:r===2?-1:0,s=Math.round(t-i/2+a);Rr(e,s,o-n,i,`K8`),zr(e,s,o-n,n,`K8`),zr(e,s+i-1,o-n,n,`K8`),zr(e,s+Math.round(i*.35),o-n+2,n-3,`K8`),zr(e,s+i-2,o-n+1,n-1,`V2`),o-=n+1});let s=Math.round(t-i/2);Rr(e,s-3,o,i+6,`K8`),Rr(e,s-2,o-2,i+3,`K8`),Rr(e,s-2,o+1,i+4,`V2`)}function th(e,t,n,r){let i=Math.round(34*r);for(let[r,a]of[[3.4,4.3],[4.45,5.25],[5.4,6.1]]){ur(e,lr(t,n,i-1,i-1,r+.02,a-.02),`V2`),ur(e,lr(t,n,i,i,r,a),`K8`),ur(e,lr(t,n,i-6,i-6,r+.02,a-.02),`K8`);for(let o of[r,a])dr(e,t+Math.cos(o)*i,n+Math.sin(o)*i,t+Math.cos(o)*(i-6),n+Math.sin(o)*(i-6),`K8`)}}function nh(e,t,n=1){let r=_h[t]||_h.rest,i=e===`weapon`||e===`passive`,a=e===`fusion`||!!Jr[t],o=Jr[t],s=a&&o?`${_h[o[0]].tag} \xd7 ${_h[o[1]].tag}`.toUpperCase():t in vh?vh[t]:[`design`,`code`,`motion`,`3d`].includes(t)?r.tag:r.name,c=i||a?r.name:r.tag,[l,u]=yh[a?`fusion`:r.color]||yh.white;return{key:e+t,type:a?`B`:`A`,main:s,move:c,desc:r.desc(n),fill:l,edge:u,icon:t,stars:a?5:[`design`,`code`,`motion`,`3d`].includes(t)?n:void 0}}function rh(e,t,n=!1){if(e)return zh.ph;if(t>=112){let e=Math.round((t-126)/2),n=zh.pc;return{main:n.main+e,pips:n.pips+e,icon:n.icon+e,isz:n.isz,move:n.move+e}}return n?{main:10,pips:27,icon:39,isz:24,move:75}:{main:10,pips:27,icon:36,isz:24,move:71}}function ih(e,t,n,r){if(n<0||r<0||n>=e||r>=t)return!1;let i=r<3?r:r>=t-3?t-1-r:-1;if(i<0)return!0;let a=Vh[i];return n>=a&&n<e-a}function ah(e,t,n,r,i,a){let o=t-2,s=t+r+1,c=n+3,l=n+i+2;for(let u=n+1;u<=l+2;u++)for(let d=o-2;d<=s+2;d++){if(ih(r,i,d-t,u-n))continue;let f=Math.max(d<o?o-d:d>s?d-s:0,u<c?c-u:u>l?u-l:0);if(f>2)continue;let p=null;for(let e=a.length-1;e>=0&&!p;e--)ih(r,i,d-a[e].x,u-a[e].y)&&(p=a[e]);p&&I(e,d,u,p.B?`K0`:`T1`,[.75,.5,.25][f],t,n)}}function oh(e,t,n,r,i,a,o=!1,s){let c=Rh(i).w,l=s??Rh(i).h,u=rh(i,l,r.type===`B`),d=uh(r,c,u,l),f={...u,main:u.main+d.dy,pips:u.pips+d.dy,icon:u.icon+d.dy,move:u.move+d.dy};t=Math.round(t),n=Math.round(n);let p=r.type===`B`,m=(e,t)=>ih(c,l,e,t);for(let i=-1;i<=l;i++)for(let a=-1;a<=c;a++)m(a,i)||(m(a-1,i)||m(a+1,i)||m(a,i-1)||m(a,i+1))&&I(e,t+a,n+i,o?r.fill:p?`P2`:`K7`,o?1:.5,t,n);for(let i=0;i<l;i++)for(let a=0;a<c;a++){if(!m(a,i))continue;let s;if(p){let e=i/l;s=e<.5?N(a,i,e*2)?`K1`:`N0`:`K1`;let t=0,n=0;for(let[e,o,s,l]of dh(r.key,c,f.icon+f.isz/2)){let r=Math.hypot(a-e,(i-o)*.8)/s,c=Math.max(0,1-r*r);l?t+=c:n+=c}N(a,i,Math.min(.5,n*.55))?s=`M2`:N(a+2,i+1,Math.min(.5,t*.5))?s=`P1`:N(a+1,i+3,Math.min(.25,(t+n)*.2))&&(s=`M1`)}else{let e=Pr((i-l*.18)/(l*.7))*2,t=e<1?`K9`:`Q1`,n=e<1?`Q1`:`Q0`;s=N(a,i,e<1?e:e-1)?n:t,e>=2&&(s=`Q0`)}let u=!m(a-1,i)||!m(a+1,i)||!m(a,i-1)||!m(a,i+1);u&&(s=p?i<l/2?`M2`:`M1`:N(a,i,Pr((i-l*.55)/(l*.3)))?`K8`:`W0`),u&&o&&(s=r.fill),F(e,t+a,n+i,s)}let h=d,g=h.boxes,_=Math.floor(a*6);for(let i=0;i<Math.round(c*l*.005);i++){let a=5+Math.floor(Jn(i,r.key.length,31)*(c-10)),o=5+Math.floor(Jn(i,r.key.length,37)*(l-10));(_+i)%5!=0&&(g.some(([e,t,n,r])=>a>=e&&a<=n&&o>=t&&o<=r)||F(e,t+a,n+o,p?i%3?`W0`:`P4`:i%2?`W0`:`P5`))}if(p)fh(e,t,n,c,l);else{let i=o?r.fill:`Y1`;Rr(e,t+4,n+4,c-8,i),Rr(e,t+4,n+l-5,c-8,i),zr(e,t+4,n+5,l-10,i),zr(e,t+c-5,n+5,l-10,i);for(let r=0;r<c-12;r++)I(e,t+6+r,n+6,`Y2`,.5,t,n),I(e,t+6+r,n+l-7,`Y2`,.5,t,n);for(let r=0;r<l-12;r++)I(e,t+6,n+6+r,`Y2`,.5,t,n),I(e,t+c-7,n+6+r,`Y2`,.5,t,n);for(let[r,i,a,o]of[[t+4,n+4,1,1],[t+c-5,n+4,-1,1],[t+4,n+l-5,1,-1],[t+c-5,n+l-5,-1,-1]])for(let t=0;t<7;t++){let n=(7.5+t*12.5)*Math.PI/180,s=t%2?6:9;for(let c=3;c<=s;c++){let l=Math.round(r+a*Math.cos(n)*c),u=Math.round(i+o*Math.sin(n)*c);(c>s-2||c%2==0||t===3)&&F(e,l,u,c>6?`Y2`:`Y1`)}}}if(h.main.forEach(i=>{if(p){let a=L(h.mf,i.s),o=Math.round(t+c/2-a/2);gt(e,h.mf,i.s,o,n+i.y+1,Or(`P2`)),i.hang&&gt(e,h.mf,i.hang,o-L(h.mf,i.hang+` `),n+i.y+1,Or(`P2`)),gt(e,h.mf,i.s,o,n+i.y,Or(r.fill)),i.hang&&gt(e,h.mf,i.hang,o-L(h.mf,i.hang+` `),n+i.y,Or(r.fill))}else h.mf===Mr?tr(e,h.mf,i.s,t+c/2,n+i.y,r.fill,r.edge,null,.5,`center`):$n(e,h.mf,i.s,t+c/2,n+i.y,r.edge||r.fill,`center`)}),r.stars){let i=n+f.pips;for(let n=0;n<5;n++){let a=t+Math.round(c/2)-2+(n-2)*9;p?wr(e,`starFill`,a,i,n===2?`Y2`:`Y1`):n<r.stars?wr(e,`starFill`,a,i,`M1`):wr(e,`starEmpty`,a,i,`T0`)}}let v=t+Math.round((c-f.isz)/2),y=n+f.icon,b=a*8%24/4;if(p){for(let[r,i]of fr(Math.round(c/2)-1,f.icon+Math.round(f.isz/2)-1,Math.round(f.isz*.62)))I(e,t+r,n+i,`Y1`,.5,t,n);let i=f.isz+4;Cr(e,r.icon,t+Math.round((c-i)/2),n+f.icon-2,i,`X0`,`P2`,null,.5,b<1?b:-1)}else{let t=Bh[r.fill];t?Cr(e,r.icon,v,y,f.isz,t[0],t[1],null,.25,b<1?b:-1,t[2]):Cr(e,r.icon,v,y,f.isz,r.fill,r.edge,null,.25,b<1?b:-1)}h.move.forEach((r,i)=>ch(e,Uh,r,t+c/2,n+h.moveY+i*Wh,p?`K8`:`M1`))}function sh(e,t,n=1,r=3){let i=t=>e.glyphs[t]||e.glyphs[t.toUpperCase()]||e.glyphs[`?`]||null,a=e=>e.map(e=>{let t=-1,n=-1;for(let r=0;r<e.length;r++)e[r]!==`.`&&e[r]!==` `&&(t<0&&(t=r),n=r);return[t,n]}),o=[],s=null,c=!1,l=0;for(let e of t){if(e===` `){c=!0;continue}let t=i(e);if(!t)continue;let u=a(t),d=Math.min(...u.filter(([e])=>e>=0).map(([e])=>e)),f=Math.max(...u.map(([,e])=>e)),p;if(!s)p=-d;else if(c)p=s.x+s.R+1+r-d;else{p=s.x+s.R-1-d;for(let e=0;e<u.length;e++)if(!(u[e][0]<0))for(let t of[-1,0,1]){let r=s.e[e+t];!r||r[1]<0||(p=Math.max(p,s.x+r[1]+1+n-u[e][0]))}}o.push({ch:e,x:p,rows:t}),s={x:p,e:u,R:f},c=!1,l=Math.max(l,p+f+1)}return{glyphs:o,w:l}}function ch(e,t,n,r,i,a){let{glyphs:o,w:s}=sh(t,n),c=Math.round(r-s/2);e.fillStyle=Or(a);for(let{x:t,rows:n}of o)n.forEach((n,r)=>{for(let a=0;a<n.length;a++)n[a]!==`.`&&n[a]!==` `&&e.fillRect(c+t+a,Math.round(i)+r,1,1)})}function lh(e,t,n){let r=n=>{let r=[],i=``;for(let a of t.split(` `)){let t=i?i+` `+a:a;i&&sh(e,t).w>n?(r.push(i),i=a):i=t}return i&&r.push(i),r},i=r(n);if(i.length<2)return i;let a=i,o=Math.max(...i.map(t=>sh(e,t).w));for(let t=n-1;t>n*.45;t--){let n=r(t);if(n.length!==i.length)break;let s=Math.max(...n.map(t=>sh(e,t).w));s<o&&(o=s,a=n)}return a}function uh(e,t,n,r=126){let i=e.type===`B`,a=t-16,o=Mr;(L(Mr,e.main)>a||i)&&(o=L(jr,e.main)<=a&&!i?jr:kr);let s;if(i){let t=e.main.split(` × `);s=t.length>1?[{s:t[0],y:n.main-2},{s:t[1],y:n.main+8,hang:`×`}]:[{s:e.main,y:n.main+3}]}else{let r=L(o,e.main)<=t-14?[e.main]:er(o,e.main,t-14),i=o.h+2,a=e.stars?0:5,c=n.main+a+(o===Mr?0:o===jr?2:4)-(r.length-1)*Math.round(i/2);s=r.map((e,t)=>({s:e,y:c+t*i}))}let c=lh(Uh,e.move,t-24),l=n.move-Math.round((c.length-1)*Wh/2),u=Math.min(...s.map(e=>e.y)),d=l+(c.length-1)*Wh+Uh.base,f=Math.round((5+(r-6))/2-(u+d)/2);s.forEach(e=>e.y+=f),l+=f;let p=[],m=(e,t,n,r,i,a=2,o=L(t,e))=>{p.push([Math.round(n-o/2)-a,r-a,Math.round(n+o/2)+a,r+i+a])};return s.forEach(e=>m((e.hang?e.hang+` `:``)+e.s,o,t/2-(e.hang?L(o,e.hang+` `)/2:0),e.y,o.h)),c.forEach((e,n)=>m(e,Uh,t/2,l+n*Wh,Uh.h,3,sh(Uh,e).w)),{mf:o,main:s,move:c,moveY:l,boxes:p,dy:f}}function dh(e,t,n){let r=e+t,i=Gh.get(r);if(!i){i=[];let a=0;for(let t of e)a=a*31+t.charCodeAt(0)|0;for(let e=0;e<7;e++){let r=Jn(a,e,1)*Math.PI*2,o=(.1+Jn(a,e,2)*.3)*t;i.push([t/2+Math.cos(r)*o*1.1,n+Math.sin(r)*o*1.3,(.16+Jn(a,e,3)*.16)*t,+(Jn(a,e,4)<.45)])}Gh.set(r,i)}return i}function fh(e,t,n,r,i){Rr(e,t+4+9,n+4,r-26,`Y1`),Rr(e,t+4+9,n+i-1-4,r-26,`Y1`),zr(e,t+4,n+4+9,i-26,`Y1`),zr(e,t+r-1-4,n+4+9,i-26,`Y1`);for(let[a,o,s]of[[t+4,n+4,0],[t+r-1-4,n+4,Math.PI/2],[t+r-1-4,n+i-1-4,Math.PI],[t+4,n+i-1-4,Math.PI*1.5]]){ur(e,lr(a,o,9,9,s,s+Math.PI/2),`Y1`);for(let r=0;r<5;r++){let i=s+(r+.5)/5*(Math.PI/2);for(let s=2;s<=(r%2?5:7);s++)I(e,a+Math.cos(i)*s,o+Math.sin(i)*s,r%2?`Y1`:`Y2`,s%2?1:.5,t,n)}}for(let a=t+4+9+2;a<t+r-4-9-2;a++)I(e,a,n+6,`Y0`,.5,t,n),I(e,a,n+i-7,`Y0`,.5,t,n)}function ph(e,t,n,r,i,a,o=!1){if(r){let r=Rh(!0).h;return{y0:t.top+Math.max(4,Math.round((e-t.top)*.47-(n+14+r+7)/2)),gap:14,ch:r,outer:8,hintY:0}}if(a){let e=t.avail-n-9,r=6,i=Math.round(Pr(e-r-54,114,126));e-i-r<54&&(r=4);let a=e-i-r,o=Math.min(a,72),s=Math.round(o*.22),c=Math.round(o*.2),l=Math.max(6,Math.round(o*.14))+Math.floor((a-o)/2);return{y0:t.top+Math.max(2,a-s-c-l),gap:s,ch:i,outer:r,hintY:t.top+t.avail-l-9}}if(i){let e=Math.round(Pr(t.avail-n-4-Math.round(t.avail*.2),100,114)),r=t.avail-n-e-4,i=Math.max(o?11:9,Math.round(r*.2)),a=Math.round((r-i)*.4375);return{y0:t.top+Math.max(2,r-i-a),gap:i,ch:e,outer:4,hintY:0}}let s=Rh(!1).h;return{y0:t.top+Math.max(4,Math.round((t.avail-(n+14+s+6))/2)),gap:14,ch:s,outer:6,hintY:0}}function mh(e,t,n,r,i,a){if(a.exit!=null)return xm(e,a.exit,e=>mh(e,t,n,r,i,{...a,exit:null}));Dr(a.pal);let o=Sm(t,n,r,a),s=o.ph;Tm(e,t,n,`night`,i,Lr(i,0,.35));let c=a.core?`A core — two skills can become one`:`Level up \xb7 ${a.level}`,l=a.core?`Fuse two skills`:`Choose a skill`,u=!s&&n<200,d=r===`ph`,f=Rh(d).w,p=L(R,c.toUpperCase(),1)<=t-16?1:2,m=Sh(p,!d),h=d?40:s?90:94,g=!s&&!a.touch&&!u,{y0:_,gap:v,ch:y,outer:b,hintY:x}=ph(n,o,m,d,u,g,!!a.touch);Am(e,t,o.cx,_,`night`,c,l,i,s,!d);let S=_+m+v,C=[],w=a.cards.length,T=[],E=[];for(let e=0;e<w;e++)if(d){let n=Math.round((t-f)/2),r=w===3?e-1:e===0?-.5:.5;T.push(Math.max(4,Math.min(t-f-4,Math.round(n+r*h)))),E.push(S+(r===0?0:r<0?4:7))}else{let n=w===3?e-1:e-.5;T.push(Math.round(t/2-f/2+h*n)),E.push(S+(w===3&&e!==1?b:0))}let D=(w-1)/2,O=e=>d?a.raised===e?99:10-Math.round(Math.abs(e-D)*2)+ +(e>D):e,k=[...Array(w).keys()].sort((e,t)=>O(e)-O(t)),A=e=>{let t=T[e],n=T[e]+f;for(let r=0;r<w;r++){if(O(r)<=O(e))continue;let i=T[r],a=T[r]+f;i<=t&&a>t?t=Math.min(n,a):i<n&&a>=n&&(n=Math.max(t,i))}return[t,n]},ee=[-40,-22,-10,-3,1,0],j=[];for(let t of k){let n=i-.25-t*.06;if(n<0)continue;let r=ee[Math.min(ee.length-1,Math.floor(n/.05))],o=a.sel===t||a.raised===t;o&&(r-=(a.touch?6:4)+(!d&&w===3&&t!==1?b:0)),d&&a.raised!=null&&a.raised!==t&&t===1&&w===3&&(r+=4);let s=Lr(n,0,.2);if(a.chosen!=null){let e=a.chosenT||0;t===a.chosen?r-=Math.round(Pr(v-(a.touch?8:6),0,4)*Fr(e/.15)):s=Math.min(s,1-Lr(e,0,.3))}let c=T[t],l=E[t]+r,u=d?j.filter(e=>e.x<c+f&&e.x+f>c):[];Zn(e,s,e=>{u.length&&ah(e,c,l,f,y,u),oh(e,c,l,a.cards[t],d,i+t*.37,o||a.chosen===t,y)},[c-5,l-2,f+10,y+8],c,l),j.push({x:c,y:l,B:a.cards[t].type===`B`});let[p,m]=A(t);C.push({id:`card`+t,x:p,y:l,w:m-p,h:y,label:`${a.cards[t].main} \u2014 ${a.cards[t].move}. ${a.cards[t].desc}`})}if(g){let n=Math.min(Lr(i,.6,.6),a.chosen==null?1:1-Lr(a.chosenT||0,0,.3)),r=[`LR`,`/`,``,`SELECT`,`[SPACE]`,`/`,`[CLICK]`,`CONFIRM`],o=Sn(r),s=Math.round((t-o)/2);Qn(e,s,x,o,9),Zn(e,n,e=>Tn(e,r,s+o,x,{word:Or(`T1`),key:Or(`T1`),box:Or(`K7`)}))}return Dr(),C}function hh(e,t,n,r,i,a){return mh(e,t,n,r,i,{...a,core:!0})}var gh,_h,vh,yh,bh,xh,Sh,Ch,wh,Th,Eh,Dh,Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh=o(()=>{mn(),qn(),Ot(),Qr(),bm(),gh={sheet:{kicker:`Dream mode`,paused:`Paused`,over:`Game over`,clear:`Dream complete`,cont:`Continue`,restart:`Restart`,wake:`Wake up`,again:`Dream again`,works:`All works`},works:[{"title": "Outspoken", "link": "https://github.com/DarkBird10020/outspoken"}, {"title": "DENO", "link": "https://deno-web-eight.vercel.app/"}, {"title": "Kavach", "link": "https://github.com/Atul-Chahar/KAVACH_IQOO"}],bosses:[`Scope Creep`,`Legacy Code`,`The Deadline`]},_h={design:{name:`Curve Slash`,tag:`Design`,color:`design`,desc:e=>[`Slashes nearby foes`,`Slashes twice in a row`,`One curve cuts four`,`Curves circle and cut`,`Eight curves fly ahead`][Math.max(0,e-1)]},code:{name:`Auto Shot`,tag:`Code`,color:`code`,desc:e=>[`Auto-fires at the nearest`,`Fires two shots at once`,`Aims at three at once`,`Shots bounce foe to foe`,`Shots pierce and bounce`][Math.max(0,e-1)]},motion:{name:`Decoy`,tag:`Motion`,color:`motion`,desc:e=>[`A decoy lures, then bursts`,`Three decoys`,`Four decoys, luring far`,`Five decoys`,`Wider, stronger bursts`][Math.max(0,e-1)]},"3d":{name:`Orbit Shield`,tag:`3D`,color:`3d`,desc:e=>[`Orbiting shields repel foes`,`Two shields`,`Faster, stronger shields`,`Four shields`,`Six shields, two rings`][Math.max(0,e-1)]},speed:{name:`Speed Up`,tag:`Boost`,color:`white`,desc:()=>`Move 8% faster`},power:{name:`Power Up`,tag:`Boost`,color:`white`,desc:()=>`All attacks 12% stronger`},cooldown:{name:`Quick Recharge`,tag:`Boost`,color:`white`,desc:()=>`Skills recharge 7% faster`},area:{name:`Wide Range`,tag:`Boost`,color:`white`,desc:()=>`Skill range 11% wider`},magnet:{name:`Magnet`,tag:`Boost`,color:`white`,desc:()=>`Pulls shards in from afar`},recovery:{name:`Health Up`,tag:`Boost`,color:`white`,desc:()=>`More max HP and regen`},algorithmic:{name:`Seeking Curves`,tag:`Fusion · Design × Code`,color:`fusion`,desc:()=>`Homing shots that pierce`},spline:{name:`Slow Wave`,tag:`Fusion · Design × Motion`,color:`fusion`,desc:()=>`A wave that slows foes`},reaper:{name:`Twin Blades`,tag:`Fusion · Design × 3D`,color:`fusion`,desc:()=>`Two great blades circle you`},automation:{name:`Auto Pulse`,tag:`Fusion · Code × Motion`,color:`fusion`,desc:()=>`A pulse that hits all around`},procedural:{name:`Turrets`,tag:`Fusion · Code × 3D`,color:`fusion`,desc:()=>`Orbiting turrets auto-fire`},spatial:{name:`Shock Orbit`,tag:`Fusion · Motion × 3D`,color:`fusion`,desc:()=>`Six shields send shockwaves`},rest:{name:`Rest`,tag:`Recover`,color:`white`,desc:()=>`Restores 35 HP`},charge:{name:`Charge`,tag:`Overdrive`,color:`white`,desc:()=>`Fills the light ring 40%`},keep:{name:`Keep the Core`,tag:`Later`,color:`white`,desc:()=>`Save it for a later fusion`}},vh={speed:`Speed`,power:`Power`,cooldown:`Recharge`,area:`Range`,magnet:`Magnet`,recovery:`Health`},yh={design:[`W2`,`D3`],code:[`G0`,`G2`],motion:[`B1`,`K6`],"3d":[`R5`,`Y1`],white:[`V2`,`M3`],fusion:[`X0`,null]},bh={night:`K2`,nightmare:`S2`,light:null},xh={night:{kick:`T1`,arch:[`K8`,`K7`],name:`W0`,dim:`T1`,lab:`T1`,val:`W0`,pool:`V2`,sec:`K9`,ul:`T1`},nightmare:{kick:`E1`,arch:[`E1`,`H0`],name:`P5`,dim:`E1`,lab:`P4`,val:`P5`,pool:`P3`,sec:`P5`,ul:`E1`},light:{kick:`M2`,arch:[`M3`,`V2`],name:`M1`,dim:`T0`,lab:`T0`,val:`M1`,pool:`K8`,sec:`M1`,ul:`M3`}},Sh=(e,t=!1)=>(t?34:38)+(e-1)*8,Ch=()=>{let e={};for(let t in P)e[t]=Or(t);return e},wh=[4,2,1,1,0,0,0,0,0,1,1,2,4],Th=(e,t)=>t?Math.min(84,Math.round(e*.3)):Math.min(104,Math.floor((e-16)/3)),Eh={night:`T1`,nightmare:`E1`,light:`M3`},Dh={night:[`V2`,`M3`,`M1`],nightmare:[`P3`,`P2`,`P0`],light:[`K8`,`K8`,`Q0`]},Oh=e=>(e||``).replace(/\s+[—–-]\s+/g,` `).replace(/\b([A-Z])([A-Z]+)\b/g,(e,t,n)=>t+n.toLowerCase()),kh=0,Ah=null,jh=()=>{let e=Ch(),t=e.K0+e.W1+e.K8;return(!Ah||Ah.K0+Ah.W1+Ah.K8!==t)&&(Ah=e,kh++),`p`+kh},Mh=e=>`${Math.floor(Math.max(0,e)/60)}:${String(Math.floor(Math.max(0,e)%60)).padStart(2,`0`)}`,Nh=null,Ph={stair:[-22,-12,22,44],arch:[-23,0,23,58],column:[-11,-14,11,40],ring:[-34,-34,34,1]},Fh={stair:.45,arch:-.7,column:-.6,ring:-.15},Ih=e=>(Jn(e,17)-.5)*1.2,Lh=/* @__PURE__ */ new Map,Rh=e=>e?{w:88,h:136}:{w:84,h:126},zh={pc:{main:15,pips:33,icon:46,isz:32,move:93},ph:{main:16,pips:34,icon:47,isz:36,move:101}},Bh={W2:[`D3`,`D2`,`W2`],G0:[`G0`,`G2`,`G0`],B1:[`B1`,`K6`,`B1`],R5:[`R5`,`Y1`,`R5`],V2:[`V2`,`M3`,`V2`]},Vh=[3,1,1],Hh={h:8,base:8,gap:1,space:3,glyphs:{0:[`.####.`,`##..##`,`##..##`,`##..##`,`##..##`,`##..##`,`##..##`,`.####.`],1:[`..##..`,`.###..`,`..##..`,`..##..`,`..##..`,`..##..`,`..##..`,`.####.`],2:[`.####.`,`##..##`,`....##`,`...##.`,`..##..`,`.##...`,`##....`,`######`],3:[`.####.`,`##..##`,`....##`,`..###.`,`....##`,`....##`,`##..##`,`.####.`],4:[`...##.`,`..###.`,`.#.##.`,`#..##.`,`######`,`...##.`,`...##.`,`..####`],5:[`######`,`##....`,`#####.`,`....##`,`....##`,`....##`,`##..##`,`.####.`],6:[`..###.`,`.##...`,`##....`,`#####.`,`##..##`,`##..##`,`##..##`,`.####.`],7:[`######`,`##..##`,`...##.`,`...##.`,`..##..`,`..##..`,`.##...`,`.##...`],8:[`.####.`,`##..##`,`##..##`,`.####.`,`##..##`,`##..##`,`##..##`,`.####.`],9:[`.####.`,`##..##`,`##..##`,`##..##`,`.#####`,`....##`,`...##.`,`.###..`],":":[`..`,`..`,`##`,`##`,`..`,`##`,`##`,`..`],"-":[`....`,`....`,`....`,`####`,`....`,`....`,`....`,`....`]}},Uh=Ar,Wh=9,Gh=/* @__PURE__ */ new Map,hr(0,!1),hr(1,!1),hr(2,!1),hr(0,!0),hr(1,!0),hr(2,!0)});function qh(e,t){let n={n:0,cap:e,seq:0,_cols:[]};n.id=new Uint32Array(e),n._cols.push([n.id,1]);for(let r in t){let i=t[r],[a,o]=Array.isArray(i)?i:[i,1];n[r]=new a(e*o),n._cols.push([n[r],o])}return n}function Jh(e){if(e.n>=e.cap)return-1;let t=e.n++;for(let[n,r]of e._cols)n.fill(0,t*r,t*r+r);return e.id[t]=++e.seq||++e.seq,t}function Yh(e,t){let n=--e.n;if(t!==n)for(let[r,i]of e._cols)r.copyWithin(t*i,n*i,n*i+i)}function Xh(e,t){if(!t)return-1;for(let n=0;n<e.n;n++)if(e.id[n]===t)return n;return-1}function Zh(e){let t=Ag.indexOf(e);return t<0&&Ag.length<255&&(t=Ag.push(e)-1),Math.max(0,t)}function Qh(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function $h(e,t){return{W:e,H:t,gY:t-35,hY:t-65,xd:e*.82,portrait:t>e,compact:t<200,hudT:40,top:42,soft:t-58,floor:t-44,h:t-86,mid:t/2,kBand:1,xHome:e*.3,xMin:6,xMax:e*.78,xSoftL:26,xSoftR:e*.7,gateHalf:28.6}}function eg(e,t,n,r=!!n){let i=e.touch,a=K.pool,o={dev:e,L:$h(e.W,e.H),seed:t,rng:Qh(t),rngFx:Qh(t^2654435769),stepN:0,stepT:0,wt:0,t:0,gdt:0,scale:1,paused:!1,hidden:!1,phase:`play`,gameIn:r?K.start.gameInRestart:K.start.gameIn,hitStopT:0,hitStopK:K.hitStopK,deathT:0,clearT:-1,D:0,scroll:n?n.scroll:1500,V:K.V0,speedScale:1,surges:[],finK:0,look:{state:`night`,storm:0,bossX:e.W*.74,bossY:0,bolt:null,odT:0,clearT:0,landK:0,pst:`base`,shakeX:0,shakeY:0,shakeT:0,shakeA:0,shakeDur:0,flash:0},p:{x:e.W*.3,y:e.H*.45,vx:0,vy:0,hp:100,maxHp:100,iframes:K.start.iframes,regenT:0,hurtT:-1,alive:!0,deadT:-1,castA:0,castT:-1,castHot:!1,trail:[],trailTick:0,landT:-1},run:{level:1,xp:0,need:K.need1,kills:0,wpn:{design:0,code:K.start.codeLv,motion:0,"3d":0},spent:{design:!1,code:!1,motion:!1,"3d":!1},pas:{speed:0,power:0,cooldown:0,area:0,magnet:0,recovery:0},fused:[],cores:0,pending:0,choosing:!1,choiceKind:`level`,coreHand:!1,offer:[],PS:{dmg:1,cd:1,area:1,magnet:1,speed:1,regen:1.2},wcd:{...K.start.wcd},ult:0,ultT:0,ultSing:!1,ultCollapsed:!1,ultCd:{design:0,code:0,motion:0},orbA:0},en:qh(i?a.enTouch:a.en,yg),bu:qh(i?a.bulletsTouch:a.bullets,bg),sh:qh(a.shots,xg),sd:qh(a.shards,wg),he:qh(a.hearts,Tg),de:qh(a.decoys,Eg),pa:qh(i?a.partsTouch:a.parts,Dg),fx:qh(a.fx,Og),strokes:[],shields:[],boss:{i:-1,live:!1,hp:0,max:1,t:-99,x:e.W*.74,y:0,sigma:64,r:48,mask:null,eyes:0,gaze:0,ph2:!1,ph2T:-1,cd:/* @__PURE__ */ new Float32Array(5),spin:0,spiralT:0,dieT:-1,struckT:-1,barK:1,barV:0,next:0,nextAt:K.boss.at[0],down:0,downT:-99,spawnT:[],strikes:[],boltIn:2},route:{nextChunkD:0,nextGateD:K.timeline.firstGateD,nextHeartT:K.timeline.heartFirst,nextRuinX:K.ruin.every,chunks:0,gates:[],ruins:[]},gifts:[],mem:{won:[!1,!1,!1],gifts:[],keeps:[],doors:[]},sheet:{kind:`none`,t:0,exit:null,after:`none`,sel:null,raised:null,chosen:null,chosenT:0,hover:null,hits:[],spread:0,open:null,turn:null,first:!1},banners:[],hud:{xpK:0,xpFrom:0,xpTo:0,xpT:1,xpFlash:-1,shownLevel:1,prevLevel:1,levelRoll:1,hpTrail:1,hpTrailT:0,memFlash:[-1,-1,-1],hover:null,press:null,pressT:0,enter:0,sheetK:0,layout:n?n.hud.layout:null,lowShown:0},in:n?n.in:{keys:0,steer:!1,mMoved:0,mouseIn:!1,mx:0,my:0,drag:null,odDown:!1,ax:0,ay:0,q:[],lastUp:0},later:[],stats:{lvAt:[0,0,0],xpKills:0,xpRoute:0,xpGates:0,hpLost:[0,0,0,0,0,0],bossKill:[0,0,0],kills:0},persist:n?n.persist:{best:null,projects:[!1,!1,!1],rules:!1,sound:!0},sound:!n||n.sound,sfxLog:[],dbg:n?n.dbg:!1,priv:{core:{},foes:{},skills:{}}};return n&&(o.in.q.length=0),o}function tg(e,t,n,r,i=``){e.later.push({at:(n===`world`?e.wt:e.stepT)+t,clock:n,fn:r,tag:i})}function ng(e){Ig=e}function W(e,t){if(e.sfxLog.push({k:t,t:e.t}),globalThis.__rtSndLog&&console.log(`[sfx] ${t} t=${e.t.toFixed(2)}`),e.sfxLog.length>200&&e.sfxLog.shift(),Ig)try{Ig(e,t)}catch{}}function rg(e,t,n,r=2.2){e.banners=e.banners.filter(e=>e.tone!==n),e.banners.push({text:t,tone:n,t:0,dur:r})}function ig(e,t,n,r,i,a,o,s=0,c=1){let l=e.pa;for(let u=0;u<r;u++){let r=Jh(l);if(r<0){let e=0,t=-1;for(let n=0;n<l.n;n++){let r=l.age[n]/Math.max(1e-6,l.life[n]);r>t&&(t=r,e=n)}r=e,l.age[r]=0}let d=e.rngFx()*Math.PI*2,f=a*(.4+.6*e.rngFx());l.x[r]=t,l.y[r]=n,l.vx[r]=Math.cos(d)*f,l.vy[r]=Math.sin(d)*f,l.life[r]=o*(.6+.4*e.rngFx()),l.col[r]=Zh(i[u%i.length]),l.sz[r]=c,l.grav[r]=s,l.drag[r]=2}}function ag(e,t){let n=0;for(let r=0;r<e.length;r++){let i=e[r];t(i)&&(e[n++]=i)}return e.length=n,e}function og(e,t,n,r,i,a=0,o=0){let s=Jh(e.fx);return s<0?-1:(e.fx.kind[s]=t,e.fx.x[s]=n,e.fx.y[s]=r,e.fx.life[s]=i,e.fx.a[s]=a,e.fx.b[s]=o,e.fx.seed[s]=Math.floor(e.rngFx()*1e3),s)}function sg(e,t,n){let r=e.look;t<(r.shakeDur>0?r.shakeA*r.shakeT/r.shakeDur:0)||(r.shakeA=t,r.shakeDur=n,r.shakeT=n)}function cg(e,t,n,r){e.surges.push({t:0,rise:t,dur:n,amp:r})}function lg(e,t,n=K.hitStopK){e.hitStopT=Math.max(e.hitStopT,t),e.hitStopK=n}function ug(e,t){let n=K.route,r=n.routeA*Math.sin(n.routeFa*t)+n.routeB*Math.sin(n.routeFb*t+n.routePb);return e.L.mid-r/n.routeDiv*n.routeK*(e.L.h/2)}var G,K,dg,fg,pg,mg,hg,gg,q,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg,Ag,J,jg,Mg,Ng,Pg,Fg,Ig,Lg,Rg,zg,Bg=o(()=>{G=.016666666666666666,K={worldU:13,V0:60,K_W:4.615,surgeLand:115,surgeFin:300,aheadPx:6,passedPx:12,passFade:.35,genMargin:40,band:{hudT:40,hudTBoss:52,hudTCompact:18,hudTCompactBoss:26,hudTEase:.6,top:2,soft:23,hard:9,kBandDiv:136,kBandMax:1.6,xHomeL:.3,xHomeP:.25,xMin:6,xMax:.78,xSoftL:26,xSoftR:.7,bossCushion:24,bossCushionOn:!1,gateHalf:.22,gateHalfCap:136},move:{ax:317,ay:216,grav:28,dampX:1.5,dampY:1.86,cushX:14,cushXv:2.4,cushTop:12,cushTopV:2.2,cushTopPad:16,cushFloor:9,cushFloorV:2.6,vmax:240,hardLand:60,steerK:1.15,steerV:.17,steerDiv:10,steerOn:4,dragFull:70,bobA:.5,bobF:1.7,bobB:.3,bobG:1.13,bobP:.7,hurtR:4},start:{codeLv:1,wcd:{design:1,code:.6,motion:2,algorithmic:.6,spline:1,automation:.9},gameIn:2.6,gameInRestart:1.2,iframes:1.5},maxWeaponSlots:4,maxPassiveKinds:4,maxLv:5,passive:{dmg:.12,cd:.07,area:.11,magnet:.35,speed:.08,regen0:1.2,regen:.55,maxHp0:100,maxHp:12},xpK:.53,need1:12,needA:8,needB:4,needC:.32,gateXp:.12,gateXpMin:2,upgradeP:.55,restHp:35,chargeUlt:40,chooseScale:.03,fusionMax:2,fusionNeedA:5,fusionNeedB:3,regenWait:2.5,hurtK:.9,hurtIframes:1.15,card:{nextAfterFusion:1.9,next:.26,fusionAfter:.3},coreGift:{fly:1,hold:.6,settle:.7,sparks:34,w0:5,h0:7,w1:7,h1:11,giftDy:24},EK:[{name:`GLITCH`,hp:3,spd:46,r:7.2,sep:6,dmg:6,xp:1,actor:`glitch.hover`},{name:`BUG`,hp:2.2,spd:85,r:5.5,sep:5,dmg:8,xp:1,actor:`bug.hover`},{name:`ERROR`,hp:28,spd:24,r:14,sep:15,dmg:14,xp:5,actor:`error.creep`},{name:`SPAM`,hp:6,spd:52,r:8,sep:12,dmg:6,xp:2,actor:`spam.idle`},{name:`ELITE`,hp:240,spd:32,r:17,sep:17,dmg:16,xp:16,actor:`elite.idle`}],contactR:e=>.75*e+4,enHp:{k:.9,a:74,b:165},enSpeedT:480,slowK:.42,law:{swayX:6,swayY:12,swayFx:.7,swayFy:.9,swayPh:1.3,decoyK:1.35,ease:2.4,farAhead:140,farCarry:.62,funnelA:18,funnelB:.36,groundAfter:.7,groundEase:4.5,sepRate:7,sepMaxN:6},contact:{odDmg:40,pushX:160,pushXd:100,pushYd:100},spawn:{rateMax:6.75,rateMaxTouch:5,rateA:.625,rateB:.021,bossK:.45,capA:11,capB:.56,capLand:64,capPort:48,bugT:18,bugK:.006,bugMax:.32,spamT:40,spamK:.0028,spamMax:.16,errT:70,errK:.0016,errMax:.1,riserP:.74,riserX0:.88,riserXr:.25,riserDy:6,rippleLead:.5,touchODPad:12,flyerX:10,flyerXr:40,flyerYk:40,flyerYc:.6,chevron:.6,packDy:16,packDx:15,waveEvery:50,waveFirst:50,waveMax:16,waveA:7,waveG:26.5,waveSpread:2.4,waveYk:1.1,waveXk:75,waveXc:.36,waveErrAfter:140,waveErrEvery:6,eliteAt:[72,138],eliteX:30,eliteYk:.2,emerge:.95,poolEn:160,poolEnTouch:120},timeline:{firstGateD:38,heartFirst:14,heartMin:13.5,heartMax:21,stormLead:5,stormBuild:4.6,nextGap:6},design:{cd:[1.45,1.35,1.3,1.25,1.15],range:[360,360,360,360,400],dmg:[9,9,10,11,7.2],width:[.7,.7,.6,.6,.6],draw:[.34,.34,.46,.46,.46],last:[.8,.8,.85,.85,.85],along:[0,.45,.9,1,1,1],alongAdd:[0,0,0,4,12,22],across:[0,16,44,0,-46,-84],second:.13,thread:4,threadRun:.4,threadAcross:15,hitW:6,loopR:27,loopYs:.82,loopWob:.24,loopW:2.1,loopDmg:5,loopEvery:.45,fan:8,fanSpread:.9,cutR:23,cutDmg:12,cutMax:8,cutDelay:.38,cutNear:9},code:{cd:[1,.92,.86,.8,.7],dmg:[4.5,5,5.5,6,7],shots:[1,2,3,3,4],nearest:[1,1,3,3,5],chain:[0,0,0,1,2],pierce:[0,0,0,0,2],chainR:[0,0,0,160,200],chainLifeMin:.9,second:.13,speed:190,homing:7,life:2.4,hitPad:4.5,spreadX:26,spreadY:10,range:600,screenPad:16},motion:{maxN:[2,3,4,5,5],lure:[60,70,80,90,110],burst:[19,21,23,25,31],dmg:[5,6,7.5,9,13],every:.5,cdMin:.6,life:.5,drift:8,burstEnemyK:.6},shield:{count:[1,2,2,4,3],r:24,rOuter:38,outerW:-.75,outerN:3,spd:[2.2,2.2,3.3,3.3,3.3],dmg:[4,4,6,6,7],ys:.8,every:.35,push:2,pushAhead:30,bulletPad:3.5},passiveMagnetR:48,passiveMagnetRLand:40,fusion:{algorithmic:{every:.8,strokes:3,near:6,range:500,dmg:13,width:3},spline:{every:1.5,strokes:4,range:400,dmg:4,slow:2,pulses:4,pulseStep:.15,pulseR:28,pulseDmg:6},reaper:{blades:2,arc:2.6,r:45,ys:.72,w:6,spd:2.3,dmg:15,every:.4},automation:{every:1.1,ringR:130,max:14,dmg:7,chain:2,speed:300},procedural:{n:3,rx:34,ry:26,spd:.6,every:.45,range:450,dmg:7,pierce:1,speed:280},spatial:{dmg:8,every:1,ringR:30,ringDmg:6,slow:1.4}},shard:{pickR:12,magnetRate:6.5,odFrom:-30,odTo:280,odRate:4,pool:260},route:{chunks:[[.24,`string`],[.2,`helix`],[.16,`arch`],[.18,`ringzig`],[.12,`halo`],[.1,`rest`]],string:{n:9,dx:14.8,amp:8,f:.7},helix:{n:16,dx:10.2,amp:28,f:.62},arch:{n:9,dx:13.8,lift:60,base:10,tilt:24},ringzig:{ringN:5,ringR:14,ringAt:37,zigN:6,zigDx:16,zigA:18},halo:{n:10,r:32,at:37},rest:83,routeA:6.5,routeFa:.011,routeB:2.2,routeFb:.027,routePb:1.3,routeDiv:10.5,routeK:.85},heart:{placeMin:80,placeMax:110,yK:1/6,pickR:14,heal:30,healRec:4,errP:.2,errAhead:18,eliteAhead:28,bossAhead:120,pool:6},gate:{spaceA:62,spaceB:22,ring:8},ruin:{every:1292,touchR:16,burstR:90,dmg:26,knock:30,shards:4,hitStop:.11,nudge:60},bossReward:{at:1.1,shards:14,value:4,xMin:92,xMax:148,dy:25},ult:{max:100,kill:.45,dmgK:.011,dmgKBoss:.006,dur:5,openR:160,openT:.9,landRise:.18,landDur:3,landAmp:.2,landAmpSing:.3,k2Lv:.035,k2Fusion:.15,design:{every:.34,w:12,dmg:22,span:150,wanderMin:30,wanderMax:60},code:{every:.07,n:2,dmg:9,pierce:3,chain:1,speed:340},motion:{every:.5,r:150,dmg:11,slow:2,knock:60},cubes:{n:4,rx:54,ry:44,spd:6,dmg:16,every:.25,size:11},sing:{dx:120,edge:40,dy:-10,accel:220,at:.6,dmg:90,dmgBoss:60,rings:[180,240,300],ringGap:.12,sparks:120,landK:.6}},boss:{at:[60,120,180],hp:[1525,4400,10200],tier:[0,2,4],names:[`Scope Creep`,`Legacy Code`,`The Deadline`],hitR:[48,54,60],xK:.74,swayK:.035,swayF:.19,pxK:.04,pxCap:.03,yL:.36,yP:.3,yBob:.006,yBobF:.31,gazeDip:3,banner:3.2,condense:3.4,boltAt:1.2,hittable:2.7,eyesAt:2.9,attacksAt:4.4,firstCd:[1.2,2.8,6.5,9,7],ambientMin:1.4,ambientMax:4,ambientPh2:.6,death:{eyesOut:.35,hitStop:.32,hitStopK:.18,bulletsOut:.15,thin:2.6,stormClear:2.6,rewards:1.1,memory:2.1},fast:[1,.9,.85],fastPh2:.62,bulletK:.7,bulletNarrow:.8,narrowW:300,gaze:[{every:3.1,pairs:4,spd:66,dmg:8},{every:2.39,pairs:5,spd:75,dmg:10},{every:1.89,everyPh2:1.38,pairs:6,spd:83,dmg:12}],gazeEye2:.045,gazeGap:.09,gazeLead:.3,gazeJit:2.5,gazeR:3,omen:.92,strikeR:14,strikeDmg:14,walkIn:{every:5.4,n:4,gap:.3,rx:65,ry:32},hunt:{every:4.05,n:3,lead:.35,gap:.52},clockHand:{every:3.06,everyPh2:2.23,k:2,sx:22,sy:14,gap:.07},hour:{p:.5,n:8,of:9,rx:30,ry:22,gap:.04,centre:.18},rain:{every:[0,8.1,6.8],everyPh2:4.96,curtains:[0,2,3],gap:1.05,cols:7,dx:13.6,alt:6.8,gapHalf:15.5,gapR:30,top:-8,reach:16,Tmin:2.3,Tmax:2.65,r:2.5,dmg:[0,9,11],gap2Min:45,gap2Max:70},mael:{every:5.27,dur:3,step:.1,n:3,spin:6.5,spd:60,dmg:9,mix:.5,ys:.8},brood:{every:[8.5,7.65,7.2],everyPh2:5.27,n:[3,3,4],kind:[0,0,1],dx:-24,dy:30},ph2At:.5},death:{scale:.35,slow:1.2,chips:12},hitStopK:.18,memory:{rise:1.1,hold:.9,settle:.8,giftDy:24,keepW:6,keepZ:.8,slotX:-10,slotDx:-7,slotY:-10,slotDy:3,doorAfterU:64},mosaic:{blocks:[16,8,4,2,1],hold:[.26,.22,.18,.16,.14]},clear:{cleared:2.4,sound:2.8,sheet:3.3},pool:{en:160,enTouch:120,bullets:224,bulletsTouch:192,shots:200,shards:260,parts:480,partsTouch:360,fx:96,hearts:6,decoys:6},grid:{cell:24,margin:48}},dg={token:!0,slash:!0,cutBurst:!0,seekStroke:!0,seekToken:!0,slowStroke:!0,slowPulse:!0,autoToken:!0,turretShot:!0,odStroke:!0,odToken:!0,singularity:!0,orbit:!1,shockOrbit:!1,shockRing:!1,blade:!1,loop:!1,decoyBurst:!1,ruinPulse:!1,autoRing:!1,turretBody:!1,odCube:!1,odRing:!1,odOpen:!1,contact:!1},fg={orbit:0,loop:1,blade:2,odCube:3,shockOrbit:4},pg=5,mg=[`design`,`code`,`motion`,`3d`],hg=[`speed`,`power`,`cooldown`,`area`,`magnet`,`recovery`],gg=[{id:`algorithmic`,a:`design`,b:`code`},{id:`spline`,a:`design`,b:`motion`},{id:`reaper`,a:`design`,b:`3d`},{id:`automation`,a:`code`,b:`motion`},{id:`procedural`,a:`code`,b:`3d`},{id:`spatial`,a:`motion`,b:`3d`}],q=Float32Array,_g=Uint8Array,vg=Uint32Array,yg={k:_g,x:q,y:q,vx:q,vy:q,hp:q,maxHp:q,r:q,cr:q,sr:q,dmg:q,xp:q,spd:q,ph:q,spawn:q,riser:_g,flip:_g,slow:q,flash:q,passed:q,brood:_g,burn:q,hitCd:[q,pg],lastHit:vg},bg={kind:_g,x:q,y:q,vx:q,vy:q,r:q,dmg:q,age:q,life:q,fade:q,seed:q,a:q,b:q},xg={kind:_g,x:q,y:q,vx:q,vy:q,spd:q,homing:q,dmg:q,r:q,age:q,life:q,tgt:vg,pierce:_g,chain:_g,chainR:q,bossOK:_g,slow:q,text:_g,seed:q,lastHit:vg},Sg={token:0,seekToken:1,autoToken:2,turretShot:3,odToken:4},Cg=4294967295,wg={x:q,y:q,vx:q,vy:q,v:q,ph:q,big:_g,pull:_g,age:q},Tg={x:q,y:q,d:q,ph:q,src:_g,age:q},Eg={x:q,y:q,age:q,life:q,flip:_g,lure:q,burstR:q,dmg:q,burst:_g},Dg={x:q,y:q,vx:q,vy:q,age:q,life:q,col:_g,sz:_g,grav:q,drag:q},Og={kind:_g,x:q,y:q,age:q,life:q,a:q,b:q,seed:q},kg={hitStar:0,contact:1,cutBurst:2,decoyBurst:3,pulse:4,octPulse:5,slowPulse:6,shock:7,odRing:8,odOpen:9,heal:10,splash:11,muzzle:12,pickup:13,ring:14,bolt:15,ripple:16,chevron:17,heal2:18},Ag=[`W0`,`W1`,`W2`,`K8`,`K7`,`D3`,`D4`,`C1`,`G0`,`G1`,`E0`,`E1`,`P4`,`P5`,`Y1`,`Y2`,`B1`,`R5`,`M3`,`V2`],J=(e,t,n)=>e<t?t:e>n?n:e,jg=(e,t,n)=>e+(t-e)*n,Mg=(e,t,n)=>{let r=J((n-e)/(t-e),0,1);return r*r*(3-2*r)},Ng=e=>e<.5?2*e*e:1-(-2*e+2)**2/2,Pg=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,Fg=(e,t)=>1-Math.exp(-e*t),Ig=null,Lg=(e,t,n=e.L.xHome)=>n+(t-e.D)*K.K_W,Rg=(e,t)=>e.run.wpn[t]>0&&!e.run.spent[t],zg=(e,t)=>e.run.fused.includes(t)});function Vg(e,t,n={}){let r=n.portrait??t>e,i=Math.round(n.gY??(r?t-43:t-Math.round(.16*t))),a=Math.round(n.hY??i-30),o=Math.round(n.xd??(r?.7:.82)*e),s=!r&&t<200;return{W:e,H:t,gY:i,hY:a,xd:o,portrait:r,compact:s,bandTop:s?20:42,xHome:Math.round((r?.25:.3)*e)}}function Hg(e){return e|=0,e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),e^=e>>>16,(e>>>0)/4294967296}function Ug(e,t,n){let r=Math.floor(e),i=Y(x_(r,t),7,n);return i+(Y(x_(r+1,t),7,n)-i)*S_(e-r)}function Wg(e,t,n,r,i){let a=Math.floor(e),o=Math.floor(t),s=S_(e-a),c=S_(t-o),l=x_(a,n),u=x_(a+1,n),d=x_(o,r),f=x_(o+1,r),p=Y(l,d,i),m=Y(u,d,i),h=Y(l,f,i),g=Y(u,f,i);return p+(m-p)*s+(h-p)*c+(p-m-h+g)*s*c}function Gg(e,t,n,r,i,a=4){let o=0,s=.5,c=0;for(let l=0;l<a;l++)o+=s*Wg(e,t,n,r,i+l*31),c+=s,e*=2,t*=2,n*=2,r*=2,s*=.5;return o/c}function Kg(e,t,n,r){let i=n[0];for(let a=0;a<t.length;a++)i+=(n[a+1]-n[a])*w_((e-t[a]+r)/(2*r));return i}function qg(e){let t=A_.get(e);if(t)return t;let n=pn[e]||pn.base;t={};for(let e in n){let r=n[e],i=parseInt(r.slice(1,3),16),a=parseInt(r.slice(3,5),16),o=parseInt(r.slice(5,7),16);t[e]=(255<<24|o<<16|a<<8|i)>>>0}return A_.set(e,t),t}function Jg(e,t){P_===e+2*X&&F_===t+2*X&&R_||(P_=e+2*X,F_=t+2*X,R_=document.createElement(`canvas`),R_.width=P_,R_.height=F_,z_=R_.getContext(`2d`),L_=z_.createImageData(P_,F_),I_=new Uint32Array(L_.data.buffer))}function Yg(){if(ov)return;ov=new Float32Array(av),sv=new Float32Array(av);let e=(e,t,n)=>{let r=0,i=.5,a=1;for(let o=0;o<5;o++){let s=Ug(e/av*t*a,t*a,n+o*7),c=1-Math.abs(s*2-1);r+=i*c*c,a*=2,i*=.48}return r},t=(e,t,n)=>{let r=Ug(e/av*t,t,n)*.7+Ug(e/av*t*2,t*2,n+3)*.3;return .25+.75*T_(.1,.7,r)};for(let n=0;n<av;n++)ov[n]=3+34*t(n,12,5)*e(n,44,3)**1.3,sv[n]=2+14*t(n,22,13)*e(n,80,11)**1.4;cv=/* @__PURE__ */ new Float32Array(8192),lv=/* @__PURE__ */ new Float32Array(8192);for(let e=0;e<32;e++)for(let t=0;t<256;t++)cv[e*256+t]=Gg(t/32,e/9,8,97,41,4),lv[e*256+t]=Gg(t/64,e/14,4,97,77,3);uv=/* @__PURE__ */ new Float32Array(12288),dv=/* @__PURE__ */ new Float32Array(12288);for(let e=0;e<24;e++)for(let t=0;t<512;t++)uv[e*512+t]=Gg(t/32,e/5,16,97,123,4),dv[e*512+t]=Gg(t/128,e/9,4,97,321,2);fv=/* @__PURE__ */ new Float32Array(16384);for(let e=0;e<32;e++)for(let t=0;t<512;t++)fv[e*512+t]=Gg(t/16,e/6,32,97,555,4)}function Xg(){let e=`${Z}x${B_}|${V_}|${Q}|${H_}|${K_}`;if(iv&&iv.key===e)return iv;Yg();let t=Q+X+1,n=P_,r=!K_&&B_<200,i=K_?[Z<230?{cx:0,cy:58,r:58,L:[.36,.9,.28],rimA:[`K9`,`K8`],rimB:[`V2`,`M3`],ring:!1,seed:1}:{cx:24,cy:70,r:64,L:[.5,.8,.28],rimA:[`K9`,`K8`],rimB:[`V2`,`M3`],ring:!1,seed:1},{cx:Z-17,cy:Q-70,r:18,L:[-.74,.12,.3],rimA:[`P5`,`P4`],rimB:[`P2`,`P2`],ring:!0,seed:2},{cx:Math.round(.76*Z),cy:60,r:4,L:[-.7,.5,.3],rimA:[`K8`,`K8`],rimB:[`K6`,`K6`],ring:!1,seed:3}]:[{cx:Math.round(.172*Z),cy:Math.round(.19*Q),r:64,L:[.78,.48,.28],rimA:[`K9`,`K8`],rimB:[`V2`,`M3`],ring:!1,seed:1},{cx:Math.round(H_+.075*Z),cy:Math.round(.34*Q)+(r?0:8),r:20,L:[-.74,.12,.3],rimA:[`P5`,`P4`],rimB:[`P2`,`P2`],ring:!0,seed:2},{cx:Math.round(.655*Z),cy:Math.round(.2*Q)+(r?0:8),r:4,L:[-.7,.5,.3],rimA:[`K8`,`K8`],rimB:[`K6`,`K6`],ring:!1,seed:3}],a=(e,t,n)=>{for(let r of i){let i=e+.5-r.cx,a=t+.5-r.cy;if(i*i+a*a<(r.r+n)*(r.r+n))return!0;if(r.ring){let e=i*Math.cos(-.32)+a*Math.sin(-.32),t=-i*Math.sin(-.32)+a*Math.cos(-.32),n=Math.sqrt(e*e+t/.26*(t/.26));if(n<2.25*r.r&&n>1.3*r.r)return!0}}return!1},o=new Float32Array(n*t),s=new Float32Array(n*t),c=6/Q;for(let e=ev;e<=Q;e++){let t=(Q-e)/Q,r=t<.2?3-w_((t-.06)/.14):Kg(t,[.45,.7],[2,1,0],c),i=Math.max(0,Q-e)/Math.min(Q,160),a=Math.min(3+.34*Math.max(0,Q-e),54),l=3.6*Math.exp(-1.3*i)*(1-T_(.62,1.02,i));for(let t=ev;t<Z+X;t++){let i=Math.abs(t+.5-H_),c=i/a,u=l*Math.exp(-c*c),d=i/60,f=(Q-e)/34,p=d*d+f*f,m=p<1?1.25*(1-p):0,h=(e+X)*n+(t+X);o[h]=r+u+m,s[h]=u}}let l=new Float32Array(512*t);for(let e=0;e<t;e++)for(let t=0;t<512;t++)l[e*512+t]=Gg(t/64,e/3.2,8,997,909,4);let u=[];for(let e=0;e*18<Q;e++)for(let t=0;t*18<Z;t++)for(let n=0;n<2;n++){if(Y(t,e,300+n)>324/700/2+0)continue;let r=t*18+Math.floor(Y(t,e,310+n)*18),i=e*18+Math.floor(Y(t,e,320+n)*18),o=(Q-i)/Q;if(o<=.12||r>=Z)continue;let s=4+.35*(Q-i);if(Math.abs(r+.5-H_)<s/3+1&&o<.72||a(r,i,4))continue;let c=Y(t,e,330+n),l=c<.7?o<.3?`K6`:`K7`:c<.9?o<.3?`K7`:`W1`:`W0`;u.push({x:r,y:i,id:l,tw:Y(t,e,340+n)<.15,ph:Y(t,e,350+n)*9,per:1.5+Y(t,e,360+n)*2.5})}let d=[],f=K_?7:9;for(let e=0,t=0;d.length<f&&t<200;t++,e++){let t=6+Math.floor(Y(e,1,400)*(Z-12)),n=6+Math.floor(Y(e,2,400)*(Q*.7));(Q-n)/Q<.25||a(t,n,6)||Math.abs(t-H_)<10||d.some(e=>Math.abs(e.x-t)+Math.abs(e.y-n)<40)||d.push({x:t,y:n,ph:Y(e,3,400)*7,per:2+Y(e,4,400)*3})}let p=new Float32Array(512*t),m=new Float32Array(512*t);for(let e=0;e<t;e++){let t=e-X,n=(Q-t)/Q;for(let r=0;r<512;r++)for(let i=0;i<2;i++){let a=i?1700:1300,o=Gg(r/128,t/40,4,997,a+5,2)*2.2,s=Gg(r/64+o,t/20,8,997,a,3),c=Gg(r/64+o,(t+3)/20,8,997,a,3),l=T_(.36,.66,s),u=Math.max(0,s-c)*9,d=.9+2*(1-w_(n))**1.6,f=.85+.3*(1-w_(n))+l*d+u*(.6+1.2*(1-w_(n)))-(1-l)*.15*w_(n*2);(i?m:p)[e*512+r]=f}}let h=new Float32Array(512*t);for(let e=0;e<t;e++)for(let t=0;t<512;t++)h[e*512+t]=Gg(t/32,(e-X)/7,16,997,2311,3);return iv={key:e,planets:i,stars:u,sparkles:d,skyBase:o,skyCol:s,veil:l,flowA:p,flowB:m,calmN:h,stormD:new Float32Array(P_*F_),stormKey:``},iv}function Zg(e){let t=`${Y_}`;if(e.stormKey===t)return e.stormD;let n=0;for(let[e,t]of[[ev,ev],[Z+X,ev],[ev,B_+X],[Z+X,B_+X]])n=Math.max(n,Math.hypot(e-Y_,t-Q));for(let t=ev;t<B_+X;t++)for(let r=ev;r<Z+X;r++){let i=.78+.44*Gg(r/22,t/14,997,997,777,3);e.stormD[(t+X)*P_+(r+X)]=Math.hypot(r-Y_,(t-Q)*1.25)/n*i}return e.stormKey=t,e.stormD}function Qg(e,t){let n=q_===`clear`?Nv:-1,r=`${e.key}|${t}|${Q_}|${Math.floor(U_/.5)}|${n<0?-1:Math.min(5,Math.floor(n/.35))}`,i=(Q+X+1)*P_;if(_v.length!==i&&(_v=new Uint32Array(i)),vv===r)return;vv=r;let a=Math.floor(U_/.5),o=Math.floor(U_/4),s=n<0?0:Math.min(4,n/.7),c=Math.max(Z,Q)*.75;for(let t=ev;t<=Q;t++){let n=(Q-t)/Q;for(let r=ev;r<Z+X;r++){let i=(t+X)*P_+(r+X),l=e.skyBase[i];if(Q_&&(l+=w_(e.skyCol[i]/1.4)),s>0){let e=Math.hypot(r-H_,(t-Q)*1.3)/c;l+=Math.max(0,Math.min(s,s*1.6*(1-e)+(D_(r,t)-.5)))}let u=C_(k_(l,r,t),0,9),d=j_[u];if(n>.32&&n<.97&&u<3){let i=e.veil[(t+X)*512+x_(r+o,512)]-(n<.42?(.42-n)*2.5:0)-(n>.85?(n-.85)*2:0);(i>.725||i>.7&&O_(r+o,t,.5))&&(d=j_[u+1])}if(n<.16&&n>=-.01){let e=x_(r+a,256),i=C_(Math.floor((Q-t)*1.4),0,31),o=cv[i*256+e]-n/.16*.26+.05,s=lv[i*256+e]>.5,c=u>=4,l=s?c?`M3`:`M2`:c?`P2`:`P1`,f=s?c?`V2`:`M3`:c?`P4`:`P2`;o>.84?d=O_(r+a,t,.5)?f:l:(o>.74||o>.7&&O_(r+a,t,.5)||o>.67&&O_(r+a,t,.25))&&(d=l)}t>=Q-2&&t<=Q-1&&Math.abs(r-H_)<60&&O_(r,t,Math.abs(r-H_)<30?.5:.25)&&(d=`P1`),_v[i]=G_[d]}}for(let t of e.stars)s>0&&Math.hypot(t.x-H_,t.y-Q)/c>1.25-n/2.8*1.2||(_v[(t.y+X)*P_+(t.x+X)]=G_[t.id]);for(let t of e.planets)e_(t,Math.floor(U_/2))}function $g(e,t,n){e<ev||e>=Z+X||t<ev||t>Q||(_v[(t+X)*P_+(e+X)]=G_[n])}function e_(e,t){let n=Math.ceil(e.ring?e.r*2.3:e.r+4),r=Math.hypot(e.L[0],e.L[1]),i=e.L[0]/r,a=e.L[1]/r,o=Math.hypot(e.L[0],e.L[1],e.L[2]),s=Math.cos(-.32),c=Math.sin(-.32),l=(t,n,r,i)=>{if(!e.ring)return[null,!1];let a=t*s+n*c,o=-t*c+n*s,l=Math.sqrt(a*a+o/.26*(o/.26))/e.r;if(l<1.36||l>2.15)return[null,!1];let u=a*Math.sign(e.L[0])>0,d=o>0,f=null;return f=l<1.5?O_(r,i,.25)?`M3`:null:l<1.84?d?u&&O_(r,i,.25)?`P4`:`P2`:`P1`:l<1.94?null:O_(r,i,.5)?d?`P2`:`P1`:null,[f,d]};for(let r=e.cy-n;r<=e.cy+n;r++)if(!(r<ev||r>Q))for(let s=e.cx-n;s<=e.cx+n;s++){if(s<ev||s>=Z+X)continue;let n=s+.5-e.cx,c=r+.5-e.cy,u=Math.sqrt(n*n+c*c),d=u>0?(n*i+c*a)/u:0,[f,p]=l(n,c,s,r);if(u<=e.r){let i=n/e.r,a=c/e.r,l=Math.sqrt(Math.max(0,1-i*i-a*a)),m=(i*e.L[0]+a*e.L[1]+l*e.L[2])/o,h=c+1.6*Math.sin((n+t)/9+e.seed*2)+.7*Math.sin((n-t*.6)/4.1+e.seed),g=Ug(Math.floor(h+e.r*2)/4.3,997,50+e.seed)>.52&&m>.12+(O_(s,r,.5)?.1:0)&&e.r>6?2:1;m>.62&&(g+=1),m>.86&&(g+=1);let _=e.r-u,v=w_((r-1)/10),y=v>=1||O_(s,r,v);_<6&&d>.55&&(_<3.5||O_(s,r,.5))&&y&&(g+=1);let b=j_[g];y?_<1&&d>.15?b=d>.66?e.rimA[0]:e.rimA[1]:_<2&&d>.8?b=e.rimA[0]:_<2&&d>.35?b=d>.62?e.rimB[0]:e.rimB[1]:_<3&&d>.78?b=e.rimB[0]:_<3&&d>.5&&O_(s,r,.5)&&(b=e.rimB[1]):_<1&&d>.3&&(b=j_[Math.min(g+1,3)]),f&&p&&(b=f),$g(s,r,b)}else{if(f){$g(s,r,f);continue}let t=u-e.r;if(r<11&&!O_(s,r,w_((r-1)/10)))continue;(t<1&&d>.3&&O_(s,r,.5)||t<3&&d>.5&&O_(s,r,.25))&&$g(s,r,e.rimB[1])}}}function t_(e){for(let t of e.stars)t.tw&&!gv(t.x,t.y)&&(U_+t.ph)%t.per<2/60&&nv(t.x,t.y,`W0`);for(let t of e.sparkles){if(gv(t.x,t.y)||q_===`clear`&&Nv>1.2)continue;let e=(U_+t.ph)%t.per,n=Math.floor(e/.09);if(n>4){nv(t.x,t.y,`K7`);continue}let r=n===2?2:+(n===1||n===3);nv(t.x,t.y,`W0`);for(let e=1;e<=r;e++){let n=r===2&&e===2?`K8`:`W1`;nv(t.x-e,t.y,n),nv(t.x+e,t.y,n),nv(t.x,t.y-e,n),nv(t.x,t.y+e,n)}}}function n_(){if(J_>0&&gv(H_,Q-4)){for(let e=1;e<=3;e++)nv(H_,Q-e,`K8`);return}let e=3,t=13;if(q_===`clear`){let n=Nv;e=n>=1.5?9:n>=.9?7:n>=.4?5:3,t=n>=1.5?19:n>=.9?17:n>=.4?15:13}let n=e-1>>1,r=Q-t,i=Math.floor(U_/.9),a=i*.9+Y(i,5,600)*.3,o=U_-a>=0&&U_-a<3/60,s=q_===`clear`&&Nv>=.4;for(let e=r-3;e<=Q-1&&!s;e++){let t=e>=Q-4;for(let i=H_-n-3;i<=H_+n+3;i++){let a=Math.max(0,Math.abs(i-H_)-n),o=Math.max(0,r-e),s=Math.max(a,o);s!==0&&(a>=2&&o>=2||(s===1?rv(i,e,t?`P4`:`K7`,.5):s<=3&&rv(i,e,t?`P2`:`K6`,.25)))}}for(let t=r;t<=Q-1;t++)for(let i=H_-n;i<=H_+n;i++){let a=Math.abs(i-H_)===n&&n>0;t===r&&a||nv(i,t,i===H_||e>=7&&Math.abs(i-H_)<=1?`W0`:a&&o?`K8`:`K9`)}for(let e=H_-22;e<=H_+22;e++){let t=Math.abs(e-H_);t<=3+n?nv(e,Q,`P5`):t<=10+n?rv(e,Q,`P4`,.5):rv(e,Q,`P2`,.25),t<=6+n&&t>n&&rv(e,Q-1,t<=2+n?`P4`:`P2`,.5)}}function r_(e){let t=Math.floor(U_*2),n=Math.floor(U_/.6),r=Math.abs(n%16-8)/8,i=Math.floor(U_*20),a=i_(),o=(Q+X+1)*P_,s=`${e.key}|${Y_}|${X_}`;if(Cv!==s||Sv.length!==o){Cv=s,Sv=new Float32Array(o);let e=K_?4900:8100;for(let t=ev;t<=Q;t++)for(let n=ev;n<Z+X;n++){let r=n-Y_,i=(t-X_)*1.15;Sv[(t+X)*P_+(n+X)]=1.5*Math.exp(-(r*r+i*i)/e)+.9*Math.exp(-((t-Q)*(t-Q))/300)*(.6+.4*Math.exp(-(r*r)/(e*4)))}}let c=J_>=1,l=`${s}|${t}|${n}|${a?a.seed+`:`+a.f+`:`+a.x:`-`}|${Pv}`,u=Math.round(Q*.6),d=Math.round(Q*(K_?.88:.9)),f=(n,r,i)=>{if(r<u-34||r>d+30)return 0;let a=C_((e.calmN[(r+X)*512+x_(n+t,512)]-.5)*3.2,-1,1),o=C_((i-1.5)*4,-3,7),s=(r-u-a*15-o+9)/9,c=(d-r+a*12-o+8)/8;return w_(Math.min(s,c))};if(c&&xv===l&&yv.length===o)I_.set(yv,0);else{bv.length!==o&&(bv=new Int8Array(o)),bv.fill(-1);for(let n=ev;n<=Q;n++){let i=(n+X)*512;for(let o=ev;o<Z+X;o++){if(!c&&!gv(o,n))continue;let s=x_(o+t,512),l=e.flowA[i+s]*(1-r)+e.flowB[i+s]*r,u=f(o,n,l),d=l*(1-u)+1*u+Sv[(n+X)*P_+(o+X)];if(a){let e=n<a.y0?a.y0-n:n>a.y1?n-a.y1:0,t=Math.hypot(o-a.x,e*1.3)*(.7+.6*Wg(o/7,n/5,997,997,751));t<24&&(d+=(a.f<2?2:1)*(t<12?1:.5)*w_((d-1.1)/1.2))}bv[(n+X)*P_+(o+X)]=C_(Math.round(d-.15),1,6)}}for(let e=ev;e<=Q;e++)for(let n=ev;n<Z+X;n++){let r=(e+X)*P_+(n+X),i=bv[r];if(i<0)continue;let a=!1,o=!1;for(let t=-1;t<=1;t++)for(let r=-1;r<=1;r++){if(!r&&!t)continue;let s=e+t,c=n+r;if(s<ev||s>Q||c<ev||c>=Z+X)continue;let l=bv[(s+X)*P_+(c+X)];l<0||(l>i?a=!0:l<i&&(o=!0))}let s=!(n+t+e&1);a&&s?i++:o&&!a&&!s&&i--,nv(n,e,M_[C_(i,1,6)])}}c&&xv!==l&&(yv.length!==o&&(yv=new Uint32Array(o)),yv.set(I_.subarray(0,o)),xv=l);for(let e=0;e<2;e++){if(Y(i,e,700)>.12)continue;let t=Math.floor(Y(i,e,701)*Z),n=Math.floor(Y(i,e,702)*Q*.9);for(let e=n-2;e<=n+2;e++)for(let n=t-4;n<=t+4;n++){if(!gv(n,e)||e>Q)continue;let t=(e+X)*P_+(n+X),r=I_[t];r===G_.S4&&O_(n,e,.75)?I_[t]=G_.S5:r===G_.S5&&(I_[t]=G_.S6)}}a&&a_(a);for(let e=0;e<8;e++){let t=5+Y(e,1,720)*3,n=(U_+Y(e,2,720)*t)%t,r=Math.floor(Y(e,3,720)*Z+Math.sin(U_*.7+e)*3),i=Q-2-Math.floor(n*10);if(!gv(r,i))continue;let a=n/t;a>.85||nv(r,i,a<.5?`S6`:a<.7?`S5`:`S4`)}}function i_(){if(J_<1&&q_!==`storm`)return null;if(Fv!==null)return{x:Fv,y0:Math.round(Q*.12),y1:Math.round(Q*.12)+46,f:0,seed:3};let e=2.7,t=Math.floor(U_/e),n=t*e+Y(t,1,730)*1.3,r=Math.floor((U_-n)*60);if(r<0||r>3)return null;let i=Math.floor(Z*.08+Y(t,2,730)*Z*.84),a=Math.floor(Q*(.05+Y(t,3,730)*.25));return{x:i,y0:a,y1:a+20+Math.floor(Y(t,4,730)*40),f:r,seed:t}}function a_(e){if(e.f>=3)return;let t=e.f===2?.5:1,n=(e,t,n,r,i,a,o,s)=>{let c=Math.max(Math.abs(n-e),Math.abs(r-t));for(let l=0;l<=c;l++){let u=Math.round(e+(n-e)*l/Math.max(1,c)),d=Math.round(t+(r-t)*l/Math.max(1,c));rv(u,d,i,o),rv(u+s,d,a,o*.5)}},r=e.x,i=e.y0,a=0;for(;i<e.y1;){let o=Y(e.seed,a,740),s=3+Math.floor(Y(e.seed,a,741)*4),c=Math.round((o-.5)*6);if(n(r,i,r+c,i+s,`W0`,a%2?`P4`:`E1`,t,c>0?-1:1),a===3){let a=r+c,o=i+s;for(let r=0;r<3;r++){let i=(Y(e.seed,r,742)<.5?-1:1)*(2+r);n(a,o,a+i,o+4,r?`P4`:`W1`,`E1`,t*.75,1),a+=i,o+=4}}r+=c,i+=s,a++}}function o_(){let e=Z+2*X+2;wv.length!==e&&(wv=new Int16Array(e),Tv=new Int16Array(e));let t=K_?[20,90]:[30,140],n=Math.floor(W_*8/60),r=Math.floor(W_*15/60);for(let e=ev-1;e<Z+X+1;e++){let i=Math.abs(e+.5-H_),a=.08+.92*T_(t[0],t[1],i),o=.08+.92*T_(t[0],t[1],i*1.3);wv[e+X+1]=Math.round(pv(e+n)*a),Tv[e+X+1]=Math.round(mv(e+r)*o)}let i=t=>wv[C_(t+X+1,0,e-1)],a=t=>Tv[C_(t+X+1,0,e-1)];for(let e=ev;e<Z+X;e++){let t=e-H_,o=Math.abs(t),s=i(e),c=i(t<0?e+1:e-1);for(let t=Q-s;t<=Q;t++){let r=gv(e,t),i=t-(Q-s),a=Q-t,l=r?`S1`:`M1`;if(i===0&&(l=r?`S3`:`M2`),t<Q-c&&i<=Q-c-(Q-s)&&(l=r?`S4`:o<80&&!(t&1)?`V2`:`M3`),a<4){let i=(4-a)/4;O_(e+n,t,i)&&(l=r?`S2`:`K3`)}nv(e,t,l)}let l=a(e),u=a(t<0?e+1:e-1),d=o<70?`P4`:o<140?`P2`:o<220?`P1`:`M1`,f=o<70?`P2`:o<140?`P1`:`M1`;for(let t=Q-l;t<=Q;t++){let n=gv(e,t),i=n?`N0`:`M0`,a=t-(Q-l);t<Q-u?i=n?`S3`:d:a===0&&l>1&&(i=n?`S2`:f),Q-t<2&&O_(e+r,t,Q-t<1?.5:.25)&&(i=n?`S1`:`M1`),nv(e,t,i)}}}function s_(e,t,n){if(e===`arch`||e===`archChip`){let r=Math.max(5,Math.round(t*.69)),i=r-2*Math.max(1,Math.round(r*.2)),a=Math.round(t*.74)-i/2;return{w:r,h:t,f:(o,s)=>{if(o<0||o>=r||s<0||s>=t)return 0;if(e===`archChip`&&o>=Math.floor(r*.5)){let e=(o-r*.5)/(r*.5);if(s<Math.round(t*.15*e+ +(Y(o,n,830)<.4)))return 0}let c=t-1-s,l=o+.5-r/2;if(Math.abs(l)<i/2){if(c+.5<a)return 5;let e=c+.5-a;if(l*l+e*e<i/2*(i/2))return 5}return 1}}}if(e===`column`||e===`broken`){let r=Math.max(2,Math.round(t*.16))+2;return{w:r,h:t,f:(i,a)=>{if(i<0||i>=r||a<0||a>=t)return 0;let o=i>=1&&i<r-1;return a>=t-2?1:e===`broken`?a>=Math.floor(Y(i,n,820)*2.5)+(i*2>r?2:0)&&o?1:0:a<1||o?1:0}}}if(e===`stairs`){let e=Math.max(3,Math.min(7,Math.round(t/5))),n=Math.max(1,Math.round(t/e)),r=Math.max(2,Math.round(n*1.5)),i=e*r,a=e*n+2;return{w:i,h:a,f:(e,t)=>{if(e<0||e>=i||t<0||t>=a)return 0;let o=Math.floor(e/r),s=a-2-(o+1)*n,c=a-1-(e+1)/i*(a-n-3);return+(t>=s&&t<=c)}}}if(e===`spiral`){let e=Math.max(7,Math.round(t*.42)|1),r=(e-1)/2,i=Math.max(9,Math.round(t*.42)),a=e=>r*Math.sin(2*Math.PI*e/i+n);return{w:e,h:t,f:(n,i)=>{if(n<0||n>=e||i<0||i>=t)return 0;let o=n-r;if(Math.abs(o)<.5&&i>0&&i<t-1)return 1;for(let e=0;e<=4;e++)if(Math.abs(o-a(i-1+e*.4))<.6)return 1;return 0}}}let r=Math.max(4,Math.round(t*.34)),i=n%2==0;return{w:r,h:t,f:(e,n)=>{if(e<0||e>=r||n<0||n>=t)return 0;let a=i?e:r-1-e;return n<3&&a>=r-3+n||n>=t-2&&a<1+ +(t-1-n==0)?0:1}}}function c_(e,t,n,r){let i=`${e}|${t}|${n}|${r}`,a=Ev.get(i);if(a)return a;let o=s_(e,t,n),s=r<8?(r&3)*(Math.PI/2):r===8?-.38:r===9?.38:(r-100)*Math.PI/180,c=r>=4&&r<8,l=Math.round(Math.cos(s)*1e6)/1e6,u=Math.round(Math.sin(s)*1e6)/1e6,d=Math.ceil(Math.abs(o.w*l)+Math.abs(o.h*u))+2,f=Math.ceil(Math.abs(o.w*u)+Math.abs(o.h*l))+2,p=new Uint8Array(d*f);for(let e=0;e<f;e++)for(let t=0;t<d;t++){let n=(c?d-1-t:t)+.5-d/2,r=e+.5-f/2,i=n*l+r*u+o.w/2,a=-n*u+r*l+o.h/2;p[e*d+t]=o.f(Math.floor(i+1e-6),Math.floor(a+1e-6))}let m=(e,t)=>e>=0&&t>=0&&e<d&&t<f&&p[t*d+e]===1,h=new Uint8Array(d*f);for(let e=0;e<f;e++)for(let t=0;t<d;t++){let n=p[e*d+t];n===5?h[e*d+t]=5:n===1&&(h[e*d+t]=m(t,e-1)?m(t,e+1)?m(t+1,e)?m(t-1,e)?1:6:3:4:2)}let g={w:d,h:f,ox:d>>1,oy:f>>1,d:h};return Ev.set(i,g),g}function l_(){let e=[];return Dv.forEach((t,n)=>{let r=W_*t.speed/60,i=K_?t.gap*.8:t.gap,a=Math.floor((r-80)/i),o=Math.floor((r+Z+80)/i);for(let s=a;s<=o;s++){if(Y(s,n,101)<.2)continue;let a=s*i+Y(s,n,102)*i*.55,o=Math.round(a-r),c=t.kinds[x_(s*2+n+Math.floor(Y(s,n,103)*2),t.kinds.length)],l=Math.max(c===`slab`?12:0,Math.round(t.hMin+Y(s,n,104)*(t.hMax-t.hMin))),u=(c===`arch`||c===`archChip`||c===`column`||c===`broken`)&&Y(s,n,105)<.6,d=Math.floor(Y(s,n,106)*8),f=0,p,m=Q+Math.round((V_-Q)*(t.speed/60));if(u)p=m;else{let e=Math.min(100,Q-30);if(p=Math.round(Q-4-10-Y(s,n,107)**1.5*(e-10)),p+=Math.round(1.5*Math.sin(U_*(.7+Y(s,n,108)*.3)+s)+Math.sin(U_*(.43+Y(s,n,109)*.2)+s*2)),c===`stairs`||c===`spiral`){let e=.8+Y(s,n,110)*.8;f=x_(Math.floor(U_/e+Y(s,n,111)*8)*(Y(s,n,112)<.5?1:-1),8),c===`spiral`&&(f=[0,4,2,6][f&3])}else if(c===`slab`){let e=14+Math.round(Y(s,n,116)*10);f=100+(Y(s,n,114)<.5?-e:e)}else f=Y(s,n,113)<.5?0:Y(s,n,114)<.5?8:9}let h=c_(c,l,d,f),g=(c===`arch`||c===`archChip`)&&Y(s,n,115)<.65?s%2?`P4`:`K7`:null;e.push({b:h,x:o,y:p,cls:n,glow:g,standing:u,base:m,kind:c})}}),e}function u_(e,t){let n=e.b,r=e.x-n.ox,i=e.standing?e.base-n.h+1+1:e.y-n.oy;for(let a=0;a<n.h;a++)for(let o=0;o<n.w;o++){let s=n.d[a*n.w+o];if(!s)continue;let c=r+o,l=i+a;if(t){let t=2*e.base-l+1;if(t<=e.base||t>e.base+12||s===5)continue;let n=t-e.base,r=Math.round(Math.sin(.7*t+1.2*Math.floor(U_*10)/10));if((t+(c>>3))%4==0&&n>2||n>8&&!O_(c+r,t,.5))continue;let i=gv(c,t),a=e.glow&&s===4&&n<4;nv(c+r,t,i?`N0`:a?`P1`:`K1`);continue}if(e.standing&&l>e.base)continue;let u=gv(c,l),d;if(s===5){if(!e.glow)continue;let t=a/n.h,o=e.glow===`P4`,s=c-r,f=l-i;if(t>.7)d=u?O_(s,f,.5)?`S5`:`S4`:O_(s,f,.5)?e.glow:o?`P2`:`K6`;else if(t>.45){if(!O_(s,f,.5))continue;d=u?`S4`:o?`P2`:`K6`}else{if(!O_(s,f,.25))continue;d=u?`S3`:o?`P1`:`K5`}}else if(e.kind===`slab`){let t=c<H_?s===3:s===6;d=u?s===2?`S3`:t?`S4`:`S1`:s===2?e.cls===0?`M2`:`K6`:t?e.cls===0?`K5`:Math.abs(c-H_)<44?`C1`:`K7`:e.cls===0?`K2`:`M0`}else if(u)d=s===2?`E1`:s===3?`S4`:s===4?`S3`:s===6?`S2`:e.cls===0&&O_(c,l,.5)?`N0`:`S1`;else if(e.cls===0)d=s===2?`M2`:s===3?`K6`:s===4?`P1`:s===6?`K4`:`K3`;else{let e=Math.abs(c-H_)<44;d=s===2?`M3`:s===3?e?`C1`:`K7`:s===4?`P2`:s===6?`M2`:`M1`}nv(c,l,d)}}function d_(e){let t=W_*(e?45:12)/60,n=Math.floor(t),r=e?K_?210:300:K_?90:120,i=Math.floor((t-120)/r),a=Math.floor((t+Z+120)/r),o=Math.floor(U_/.7),s=e?900:800;for(let c=i;c<=a;c++){if(Y(c,1,s)<(e?.3:.15))continue;let i=Math.round(e?50+Y(c,2,s)*30:30+Y(c,2,s)*70),a=Math.round(e?10+Y(c,3,s)*8:4+Y(c,3,s)*8),l=Math.round(c*r+Y(c,4,s)*r*.5-t),u=e?V_-2-Math.round(Y(c,5,s)*8):Q-Math.round(Y(c,5,s)*2),d=Math.sin(o*.37+c*1.3)*.025,f=(t,r)=>{let o=(t-l)/(i/2),s=(u-r)/a;if(s<0||s>1||o<=-1||o>=1)return 0;let f=(1-o*o)*(1-s**1.6),p=e?Math.floor((u-r)*.6):u-r;return f*.62+fv[x_(p,32)*512+x_(Math.floor((t+n+c*37)*(e?.5:1)),512)]*.7-.2+d};for(let t=u-a;t<=u;t++)for(let r=l-(i>>1);r<=l+(i>>1);r++){if(r<ev||r>=Z+X)continue;let i=f(r,t);if(i<.5)continue;let a=gv(r,t);if(e){if(kv(r,t,4)||(t-u)%2!=0||i<.58||i<.64&&!O_(r+n,t,.5))continue;nv(r,t,a?i>.72?`S3`:`S2`:i>.74?Y(c,6,s)<.5?`P2`:`M3`:Y(c,7,s)<.5?`P1`:`M2`);continue}if(i<.62){i>.57&&O_(r+n,t,.5)&&nv(r,t,a?`S2`:`P1`);continue}let o=f(r,t-1)<.62;nv(r,t,a?o?`S4`:`S3`:o?`M3`:i>.78?`P2`:`P1`)}}}function f_(){let e=Math.floor(U_*10)/10,t=V_-Q,n=Math.max(1,B_-V_),r=Q_?2:1,i=wv.length-1,a=q_===`clear`?T_(.5,2.6,Nv):0;for(let o=Q+1;o<B_+X;o++){let s=o-Q,c=s/t,l=Math.floor(W_*c),u=Math.round(Math.sin(.7*o+1.2*e)*(1-a)),d=w_(1-c)**1.4,f=o>V_,p=f?(o-V_)/n:0,[m,h]=Ov(o),g=K_?V_-18:V_+3,_=o<=g,v=o<=g-5?1:o<=g-3?.75:o<=g-1?.5:.25,y=h*1.5+.5,b=Math.round(Math.sin(.9*o+U_*2.1)*.6+Math.sin(.37*o-U_*1.3)*.6);for(let e=ev;e<Z+X;e++){let t=e+l+u,g=gv(e,o),x;if(x=g?s<=3?O_(t,o,.5)?`S5`:`S4`:s===4?O_(t,o,.5)?`S3`:`S2`:s<=8?`S2`:s===9?O_(t,o,.5)?`S2`:`S1`:!f||p<.42||p<.56&&O_(t,o,.5)?`S1`:`N0`:s<=4?`K3`:s===5?O_(t,o,.5)?`K3`:`K2`:s<=13?`K2`:s===14?O_(t,o,.5)?`K2`:`K1`:!f||p<.3?`K1`:O_(e,o,Math.round((p-.3)/.45*4)/4)?`N0`:`K1`,s<=12){let n=e+u,r=Math.max(wv[C_(n+X+1,0,i)],Tv[C_(n+X+1,0,i)]),c=Math.round(r*.8);s<=c?(s<=8||O_(n,o,.5))&&((o+(t>>2))%5!=0||O_(n,o,a))&&(x=g?`N0`:`K1`):s===c+1&&c>1&&Y(n>>1,o,230)<.45*(1-.6*a)&&(x=g?`S3`:s<6?`K5`:`K4`)}if(d>0){let e=Math.floor(t/40),n=Y(e,o,210);if(n<d*.9*(1-.85*a)){let r=Math.floor(Y(e,o,211)*34),i=2+Math.floor(Y(e,o,212)*5),a=x_(t,40),l=Math.sin(U_*(.8+n*1.7)+n*40)>-.35;a>=r&&a<r+i&&l&&(x=g?s<6?`S4`:`S3`:Y(e,o,213)<.3&&c<.4?`K5`:`K4`)}}if(s<=10&&!g){let n=Math.abs(e+u-H_);n<2+s*.9&&Y(t>>1,o,235)<.55*(1-s/11)&&(x=s<4?n<2?`K7`:`K6`:s<7?`K5`:`K4`)}if(f){let e=o-V_,r=3+Math.round(p*9),i=26+Math.round(p*30),s=Math.floor(t/i);if(Y(s,o,240)<(.42-p*.15)*(1-.85*a)){let e=Math.floor(Y(s,o,241)*(i-r)),n=x_(t,i);n>=e&&n<e+r&&(x=g?`S2`:p<.5?`K2`:`K1`)}(e===Math.round(n*.3)||e===Math.round(n*.65))&&Ug(t/16,9973,e)>.4+.65*a&&(x=g?`S2`:`K2`)}if(_&&O_(e,o,v)){let n=Math.abs(e-m-b),i=c<.45&&(s&1)==1;if(n<=y&&!i){let e=n<=h/3+.5,i=n<=h,a=c<.4?3:c<.8?4:6,s=Math.floor(t/a),l=Y(s,o,225);if(x_(t,a)!==a-1&&l<(e?.66:i?.38:.14)&&(x=g?e?`S3`:`S2`:e&&(c<.3||l<.2)?`P2`:`P1`),i){let n=Y(t,o,220),i=(.3+.9*n)/r+2/60;(U_+n*7.31)%i<2/60&&(x=e?g?`S6`:n<.5?`W0`:`P5`:g?`P4`:N_[Math.floor(U_*8)+Math.floor(n*40)&3])}}}nv(e,o,x)}}if(!(J_>0&&gv(H_,Q+2)))for(let t=1;t<=7;t++){let n=Q+t,r=Math.round(Math.sin(.7*n+1.2*e)),i=H_+r;t<=2?(nv(i,n,t===1?`K9`:`P5`),nv(i-1,n,`P4`),nv(i+1,n,`P4`)):t<=4?(nv(i,n,`K7`),rv(i-1,n,`P2`,.5),rv(i+1,n,`P2`,.5)):rv(i,n,t<=5?`K6`:`K5`,.5)}}function p_(e){let t=V_-e;if(t<0||t>24)return;let n=Math.round(7-t/24*4),r=V_+1;for(let e=Z_-(n>>1);e<=Z_+(n>>1);e++)rv(e,r,Math.abs(e-Z_)<=1?`W1`:`C1`,.5,Math.floor(W_))}function m_(){let e=V_-Q,t=[[.64,.6],[.63,.63],[.68,.68]],n=[[`P1`,`M2`,`K4`],[`P1`,`M2`,`K4`],[`P0`,`M1`,`K3`]];for(let r=0;r<3;r++){let i=Q+2+5*r,a=.82+.09*r;for(let o=0;o<8;o++){let s=i+o,c=(s-Q)/e,l=Math.floor(W_*c*a)+r*171,u=Math.sin((o+.5)/8*Math.PI),d=C_(o*3+r,0,23);for(let e=ev;e<Z+X;e++){if(kv(e,s,5))continue;let i=x_(e+l,512),a=uv[d*512+i]*(.74+.3*u);if(a<t[r][1]||a<t[r][0]&&!O_(e+l,s,.5))continue;let o=gv(e,s),c=dv[d*512+i],f=c<.42?2:+(c<.56);nv(e,s,o?r===2?`S1`:a>.72?`S3`:`S2`:n[r][f])}}}}function h_(){let e=K_?3:4,t=0;for(let n=2;n>=0;n--){let r=W_*jv[n]/60,i=K_?[130,170,260][n]:[170,230,330][n],a=Math.floor((r-40)/i),o=Math.floor((r+Z+40)/i);for(let s=a;s<=o&&t<e;s++){if(Y(s,n,500)<.3)continue;let e=Math.round(s*i+Y(s,n,501)*i*.6-r+Math.sin(U_*.9+s)*2+Math.sin(U_*.37+s*3)*2);if(e<-20||e>Z+20)continue;let a=(3+Y(s,n,502)*4)*[.5,.75,1][n],o=(Z+20-e)/jv[n],c=V_-4-Math.round(Y(s,n,503)*26),l=Math.round(c-a*o);if(l<36)continue;let u=l<48?.25:l<52?.5:l<56?.75:1,d=U_*(1.5+.9*Y(s,n,504))+s;g_(n,e,l,Math.min(u,1),d,Math.sin(d)>.9995,Y(s,n,505)<.5,s),t++}}}function g_(e,t,n,r,i,a,o,s){let c=Av[e];a&&(c=c.filter((e,t)=>t!==2).map(e=>e.slice(0,e.length>>1)+e[e.length>>1]+e.slice(e.length>>1)));let l=t-(c[0].length>>1),u=gv(t,n),d=u?`S4`:o?`M3`:`K6`,f=u?`S5`:o?`V2`:`B1`,p=u?`P4`:N_[Math.floor(U_*6)+s&3];c.forEach((e,t)=>{for(let i=0;i<e.length;i++){let a=e[i];if(a===`.`)continue;let s=l+i,c=n+t;r<1&&!O_(i,t,r)||(a===`W`?nv(s,c,u?`S6`:`W0`):a===`r`?nv(s,c,u?`S5`:`K9`):a===`s`?nv(s,c,u?`S4`:o?`V2`:`K7`):a===`b`?rv(s,c,d,.5,-l,-n):a===`i`?rv(s,c,f,.25,-l,-n):a===`l`&&nv(s,c,p))}});let m=Mv[e],h=n+c.length,g=c[c.length-1],_=[];for(let e=0;e<g.length;e++)g[e]===`l`&&_.push(e);let v=e+2;for(let e=0;e<v;e++){let t=l+_[Math.round(e/Math.max(1,v-1)*(_.length-1))];for(let a=1;a<=m;a++){let o=Math.round(Math.sin(i*2.2-.6*a+e*1.7)*(a/3)+a*.22),s=a/m,c=u?s<.4?`S5`:`S3`:s<.3?`P4`:`H0`,d=s<.3?1:s<.65?.5:.25;r<1&&!O_(e,a,r)||rv(t+o,h+a-1,c,d,-l,-n)}}}function __(e,t,n,r,i){let a=K_?6:9;for(let i=0;i<a;i++){let a=90*(.85+Y(i,1,950)*.3),o=Z+40,s=Math.round(x_(Y(i,2,950)*o-W_*a/60,o)-20),c=Math.round(42+Y(i,3,950)*(V_-42+(B_-V_)*.6)+Math.sin(U_*.8+i*2.3)*3),l=Math.sin(U_*(2.1+Y(i,4,950)*2)+i*5);l<-.5||(e.fillStyle=t[J_>=1||J_>0&&hv!==null&&gv(C_(s,ev,Z+X-1),C_(c,ev,B_+X-1))?l>.6?i%2?`S6`:`P4`:i%2?`S4`:`S3`:l>.6?i%2?`K8`:`P4`:i%2?`K6`:`P2`],e.fillRect(s+n,c+r,1,1))}let o=Math.round(40*$_),s=[`P4`,`K6`,`W1`,`V2`];for(let a=0;a<o;a++){let o=60*(4+Y(a,1,960)*4),c=8+Math.floor(Y(a,2,960)*40),l=Z+c*2+40,u=Math.round(x_(Y(a,3,960)*l-U_*o,l)-c-20),d=Math.round(44+Y(a,4,960)*(B_-50));i!==void 0&&Math.abs(d-i)<=10||(e.fillStyle=t[s[a%4]],e.fillRect(u+n,d+r,c,1))}}function v_(e,t,n,r,i,a=`night`,o={}){let s=Vg(t,n,o);Z=t,B_=n,V_=s.gY,Q=s.hY,H_=s.xd,K_=s.portrait,U_=i,W_=Math.floor(r),q_=a,J_=C_(o.storm??+(a===`storm`),0,1),Y_=Math.round(o.bossX??.74*Z),X_=Math.round(o.bossY??Q*(K_?.62:.42)),Z_=Math.round(o.heroX??s.xHome),Q_=a===`overdrive`,$_=o.landK??(Q_?.8*w_(1-Math.max(0,(o.odT??1)-3)/2):0),Nv=a===`clear`?o.clearT??2.8:0,Fv=o.bolt??null;let c=o.pst||`base`;G_=qg(c),Pv=c;let l=o.layers||`all`,u=Math.round(o.shakeX||0),d=Math.round(o.shakeY||0);if(l!==`front`){Jg(Z,B_);let t=Xg();hv=J_>0&&J_<1?Zg(t):null,J_<1&&(Qg(t,c),I_.set(_v,0),t_(t),n_()),J_>0&&r_(t),o_(),d_(!1);let n=l_();for(let e of n)e.standing||u_(e,!1);f_(),o.heroY!==void 0&&p_(Math.round(o.heroY));for(let e of n)e.standing&&u_(e,!0);for(let e of n)e.standing&&u_(e,!1);m_(),d_(!0),h_(),z_.putImageData(L_,0,0),e.drawImage(R_,-X+u,-X+d)}l!==`back`&&__(e,pn[c]||pn.base,u,d,o.heroY)}function y_(e,t){return{rows:e,key:{r:`K9`,W:`W0`,s:t?`V2`:`K7`,b:t?`M3`:`K6`,i:t?`V2`:`B1`,l:`P4`}}}function b_(e,t,n,r){let i=c_(e,t,3,n),a=[];for(let e=0;e<i.h;e++){let t=``;for(let n=0;n<i.w;n++)t+=`.BTRUPL`[i.d[e*i.w+n]];a.push(t)}return{rows:a,key:r===0?{B:`K3`,T:`M2`,R:`K7`,U:`P1`,P:`P4`,L:`M2`}:{B:`M1`,T:`M3`,R:`C1`,U:`P2`,P:`P4`,L:`M3`}}}var Y,x_,S_,C_,w_,T_,E_,D_,O_,k_,A_,j_,M_,N_,X,P_,F_,I_,L_,R_,z_,Z,B_,V_,Q,H_,U_,W_,G_,K_,q_,J_,Y_,X_,Z_,Q_,$_,ev,tv,nv,rv,iv,av,ov,sv,cv,lv,uv,dv,fv,pv,mv,hv,gv,_v,vv,yv,bv,xv,Sv,Cv,wv,Tv,Ev,Dv,Ov,kv,Av,jv,Mv,Nv,Pv,Fv,Iv,Lv,Rv=o(()=>{mn(),Y=(e,t,n=0)=>Hg(Math.imul(e|0,2654435761)+Math.imul(t|0,2246822519)+Math.imul(n|0,3266489917)+668265263),x_=(e,t)=>(e%t+t)%t,S_=e=>e*e*(3-2*e),C_=(e,t,n)=>e<t?t:e>n?n:e,w_=e=>e<0?0:e>1?1:e,T_=(e,t,n)=>S_(w_((n-e)/(t-e))),E_=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(e=>(e+.5)/16),D_=(e,t)=>E_[(t&3)<<2|e&3],O_=(e,t,n)=>n>D_(e,t),k_=(e,t,n)=>{let r=Math.floor(e);return Math.round((e-r)*4)/4>D_(t,n)?r+1:r},A_=/* @__PURE__ */ new Map,j_=[`K0`,`K1`,`K2`,`K3`,`K4`,`K5`,`K6`,`K7`,`K8`,`K9`],M_=[`N0`,`S1`,`S2`,`S3`,`S4`,`S5`,`S6`],N_=[`P4`,`Y2`,`C1`,`K8`],X=4,P_=0,F_=0,I_=/* @__PURE__ */ new Uint32Array,L_=null,R_=null,z_=null,Z=0,B_=0,V_=0,Q=0,H_=0,U_=0,W_=0,G_={},K_=!1,q_=`night`,J_=0,Y_=0,X_=0,Z_=0,Q_=!1,$_=0,ev=-X,tv=(e,t,n)=>{let r=e+X,i=t+X;r>=0&&r<P_&&i>=0&&i<F_&&(I_[i*P_+r]=n)},nv=(e,t,n)=>tv(e,t,G_[n]),rv=(e,t,n,r,i=0,a=0)=>{O_(e+i,t+a,r)&&tv(e,t,G_[n])},iv=null,av=2048,ov=null,sv=null,cv=null,lv=null,uv=null,dv=null,fv=null,pv=e=>ov[x_(e,av)],mv=e=>sv[x_(e,av)],hv=null,gv=(e,t)=>J_<=0?!1:J_>=1||hv[(t+X)*P_+(e+X)]+(D_(e,t)-.5)*.05<J_*1.1,_v=/* @__PURE__ */ new Uint32Array,vv=``,yv=/* @__PURE__ */ new Uint32Array,bv=/* @__PURE__ */ new Int8Array,xv=``,Sv=/* @__PURE__ */ new Float32Array,Cv=``,wv=/* @__PURE__ */ new Int16Array,Tv=/* @__PURE__ */ new Int16Array,Ev=/* @__PURE__ */ new Map,Dv=[{hMin:8,hMax:14,speed:20,gap:150,kinds:[`slab`,`stairs`,`column`,`arch`,`spiral`,`broken`]},{hMin:16,hMax:28,speed:28,gap:200,kinds:[`arch`,`stairs`,`broken`,`spiral`,`slab`,`archChip`]},{hMin:30,hMax:44,speed:35,gap:340,kinds:[`arch`,`stairs`,`archChip`,`column`,`spiral`]}],Ov=e=>{let t=(e-Q)/(V_-Q);return[H_+(Z_-H_)*t+7*Math.sin(Math.PI*Math.min(1,t))*Math.sign(Z_-H_||1)*-1,1+8*Math.max(0,t)**1.3]},kv=(e,t,n)=>{if(t<Q||t>V_+12)return!1;let[r,i]=Ov(t);return Math.abs(e-r)<=i+n},Av=[[`.rWr.`,`rbibr`,`bbbbb`,`.l.l.`],[`..rWr..`,`.rbbbr.`,`rbbibbr`,`sbiiibs`,`sbbbbbs`,`.l.l.l.`],[`...rrWrr...`,`.rrbbbbbrr.`,`rbbbbibbbbr`,`sbbbiiibbbs`,`sbbiiiiibbs`,`sbbbiiibbbs`,`sbbbbbbbbbs`,`.l.l.l.l.l.`]],jv=[25,35,45],Mv=[4,6,9],Nv=0,Pv=`base`,Fv=null,Iv={rows:[`...K...`,`..kWk..`,`.gkWkg.`,`.gkWkg.`,`.gkWkg.`,`.gkWkg.`,`.gkWkg.`,`.gkWkg.`,`.gkWkg.`,`.pkWkp.`,`.pkWkp.`,`.pkWkp.`,`.pkWkp.`,`PPPPPPP`],key:{K:`K9`,k:`K9`,W:`W0`,g:`K7`,p:`P4`,P:`P5`}},Lv={jellyBlue:Av.map(e=>y_(e,!1)),jellyViolet:Av.map(e=>y_(e,!0)),door:Iv,archL:[0,8,9,2].map(e=>b_(`arch`,40,e,2)),archM:b_(`archChip`,24,0,1),archS:b_(`arch`,12,0,0),stairsM:[0,1,2,3,4,5,6,7].map(e=>b_(`stairs`,22,e,1)),spiralL:[0,4,2,6].map(e=>b_(`spiral`,36,e,2)),columnM:[b_(`column`,24,0,1),b_(`broken`,26,0,1),b_(`broken`,20,9,1)],slab:[b_(`slab`,26,0,1),b_(`slab`,26,8,1),b_(`slab`,12,0,0)]}});function zv(e){let t=qv.get(e),n=e.dev.W,r=e.dev.H;if(!t||t.W!==n||t.H!==r||t.next.length<e.en.cap){let i=Math.ceil((n+2*Yv)/Jv),a=Math.ceil((r+2*Yv)/Jv);t={W:n,H:r,cols:i,rows:a,head:new Int16Array(i*a),next:new Int16Array(e.en.cap),maxR:0},qv.set(e,t)}return t}function Bv(e){let t=zv(e);t.head.fill(-1),t.maxR=0;let n=e.en;for(let e=0;e<n.n;e++){let r=Zv(t,n.y[e])*t.cols+Xv(t,n.x[e]);t.next[e]=t.head[r],t.head[r]=e,n.r[e]>t.maxR&&(t.maxR=n.r[e]),n.cr[e]>t.maxR&&(t.maxR=n.cr[e]),n.sr[e]>t.maxR&&(t.maxR=n.sr[e])}}function Vv(e,t,n,r,i){let a=zv(e),o=r+a.maxR,s=Xv(a,t-o),c=Zv(a,n-o),l=Xv(a,t+o),u=Zv(a,n+o);for(let t=c;t<=u;t++)for(let n=s;n<=l;n++)for(let r=a.head[t*a.cols+n];r>=0;r=a.next[r])if(r<e.en.n&&i(r))return}function Hv(e,t,n=K.code.screenPad){let r=e.en,i=r.x[t],a=r.y[t];return r.hp[t]>0&&r.spawn[t]>=.5&&r.passed[t]<0&&r.burn[t]<0&&i>e.p.x+K.aheadPx&&i<=e.dev.W+n&&i>=0&&a>=0&&a<=e.dev.H}function Uv(e){let t=e.boss;return t.live&&t.dieT<0&&t.t>=K.boss.hittable&&t.hp>0}function Wv(e,t,n,r,i,a=!1,o){let s=e.en,c=i*i,l=0,u=(e,t)=>{if(l===r&&e>=Qv[l-1])return;let n=l<r?l++:l-1;for(;n>0&&Qv[n-1]>e;)Qv[n]=Qv[n-1],$v[n]=$v[n-1],n--;Qv[n]=e,$v[n]=t};if(r<=0)return[];for(let r=0;r<s.n;r++){if(!Hv(e,r)||o&&o.has(s.id[r]))continue;let i=s.x[r]-t,a=s.y[r]-n,l=i*i+a*a;l<=c&&u(l,r)}if(a&&Uv(e)){let r=e.boss.x-t,i=e.boss.y-n,a=Math.max(0,Math.hypot(r,i)-e.boss.r)**2;a<=c&&u(a,-1)}return $v.slice(0,l)}function Gv(e,t){return t<0?{x:e.boss.x,y:e.boss.y,r:e.boss.r,id:Cg}:{x:e.en.x[t],y:e.en.y[t],r:e.en.r[t],id:e.en.id[t]}}function Kv(e,t,n,r=0,i=n.length-1){let a=1/0;for(let o=Math.max(0,r);o<Math.min(n.length-1,i);o++){let r=n[o],i=n[o+1],s=i.x-r.x,c=i.y-r.y,l=s*s+c*c||1,u=Math.max(0,Math.min(1,((e-r.x)*s+(t-r.y)*c)/l)),d=Math.hypot(e-(r.x+s*u),t-(r.y+c*u));d<a&&(a=d)}return a}var qv,Jv,Yv,Xv,Zv,Qv,$v,ey=o(()=>{Bg(),qv=/* @__PURE__ */ new WeakMap,Jv=K.grid.cell,Yv=K.grid.margin,Xv=(e,t)=>Math.min(e.cols-1,Math.max(0,Math.floor((t+Yv)/Jv))),Zv=(e,t)=>Math.min(e.rows-1,Math.max(0,Math.floor((t+Yv)/Jv))),Qv=[],$v=[]});function ty(e,t,n){let i=t.in,a=e=>{i.q.length<32&&i.q.push(e)},o=()=>t.sheet.kind!==`none`&&t.sheet.exit==null,s=0,c=e=>{clearTimeout(s);let t=document.documentElement;e?t.dataset.rtPad=`1`:s=r.setTimeout(()=>delete t.dataset.rtPad,400)},l=e=>{let t=e.code;if(!ay.has(t))return;let n=e.target;if((t===`Enter`||t===`NumpadEnter`||t===`Space`)&&n?.closest?.(`.ds-toggle, .ds-retro-ui`))return;e.preventDefault(),e.stopPropagation();let r=e.type===`keydown`,s=iy[t];s?r?(i.keys|=s,i.steer=!1,i.mMoved=0,!e.repeat&&o()&&(t===`ArrowLeft`||t===`ArrowRight`)&&a({k:`hl`,v:t===`ArrowLeft`?-1:1})):i.keys&=~s:!r||e.repeat||(t===`Space`?a({k:`od`}):t===`Escape`||t===`KeyP`?a({k:`pause`}):t===`Enter`||t===`NumpadEnter`?a({k:`enter`}):t===`KeyM`?a({k:`sound`}):t===`Slash`?a({k:`help`}):/^(Digit|Numpad)[123]$/.test(t)&&a({k:`pick`,v:t.slice(-1)-1}))},u=e=>e.pointerType===`touch`||e.pointerType===`pen`||t.dev.touch,d=(e,t,n,r=0)=>e>=n.x-r&&t>=n.y-r&&e<n.x+n.w+r&&t<n.y+n.h+r,f=e=>{let[t,r]=n(e.clientX,e.clientY);if(!u(e)){let n=Math.abs(e.movementX||0)+Math.abs(e.movementY||0);i.mMoved+=n,i.keys===0&&i.mMoved>K.move.steerOn&&(i.steer=!0),i.mouseIn=!0,i.mx=t,i.my=r}i.drag&&i.drag.id===e.pointerId&&(i.drag.x=e.clientX,i.drag.y=e.clientY)},p=r=>{let[s,l]=n(r.clientX,r.clientY);if(e.setPointerCapture?.(r.pointerId),!u(r)){if(r.button!==0)return;i.mx=s,i.my=l,a({k:`click`,x:s,y:l});return}r.preventDefault();let f=t.hud.layout,p=8/t.dev.c,m=f?.touchOD,h=f?.mode,g=m&&h&&m.x-p<h.x+h.w&&m.x+m.size+p>h.x?h.y-12/t.dev.c:1/0;!o()&&m&&l<g&&d(s,l,{x:m.x,y:m.y,w:m.size,h:m.size},p)?(i.odDown=!0,c(!0),a({k:`od`})):o()||f&&(f.coins.some(e=>d(s,l,{x:e.x,y:e.y,w:13,h:13},2))||f.wake&&d(s,l,f.wake,2)||f.mode&&d(s,l,f.mode,2))?a({k:`click`,x:s,y:l}):i.drag||={id:r.pointerId,x0:r.clientX,y0:r.clientY,x:r.clientX,y:r.clientY}},m=e=>{i.lastUp=performance.now(),r.__rtLastUp=i.lastUp,i.drag&&i.drag.id===e.pointerId&&(i.drag=null),u(e)&&i.odDown&&(i.odDown=!1,c(!1))},h=e=>{u(e)||(i.mouseIn=!1)},g=()=>ny(t),_=()=>{document.hidden&&g()};return r.addEventListener(`keydown`,l,!0),r.addEventListener(`keyup`,l,!0),e.addEventListener(`pointermove`,f),e.addEventListener(`pointerdown`,p),e.addEventListener(`pointerup`,m),e.addEventListener(`pointercancel`,m),e.addEventListener(`pointerleave`,h),r.addEventListener(`blur`,g),document.addEventListener(`visibilitychange`,_),e.style.touchAction=`none`,()=>{r.removeEventListener(`keydown`,l,!0),r.removeEventListener(`keyup`,l,!0),e.removeEventListener(`pointermove`,f),e.removeEventListener(`pointerdown`,p),e.removeEventListener(`pointerup`,m),e.removeEventListener(`pointercancel`,m),e.removeEventListener(`pointerleave`,h),r.removeEventListener(`blur`,g),document.removeEventListener(`visibilitychange`,_),delete document.documentElement.dataset.rtPad}}function ny(e){let t=e.in;t.keys=0,t.drag=null,t.odDown=!1,t.ax=t.ay=0,typeof document<`u`&&delete document.documentElement.dataset.rtPad}function ry(e){let t=e.in,n=K.move,r=(t.keys&2?1:0)-(t.keys&1?1:0),i=(t.keys&8?1:0)-(t.keys&4?1:0);if(r||i)t.ax=r,t.ay=i;else if(t.drag)t.ax=J((t.drag.x-t.drag.x0)/n.dragFull,-1,1),t.ay=J((t.drag.y-t.drag.y0)/n.dragFull,-1,1);else if(t.steer&&t.mouseIn&&!e.dev.touch){let r=e.p;t.ax=J(((t.mx-r.x)*n.steerK-r.vx*n.steerV)/n.steerDiv,-1,1),t.ay=J(((t.my-r.y)*n.steerK-r.vy*n.steerV)/n.steerDiv,-1,1)}else t.ax=0,t.ay=0}var iy,ay,oy=o(()=>{Bg(),iy={ArrowLeft:1,KeyA:1,ArrowRight:2,KeyD:2,ArrowUp:4,KeyW:4,ArrowDown:8,KeyS:8},ay=/* @__PURE__ */ new Set([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`KeyA`,`KeyD`,`KeyW`,`KeyS`,`Space`,`Escape`,`KeyP`,`Enter`,`NumpadEnter`,`Digit1`,`Digit2`,`Digit3`,`Numpad1`,`Numpad2`,`Numpad3`,`KeyM`,`Slash`])}),sy={};s(sy,{FUSION_NAME:()=>Ob,canFire:()=>uy,cardOf:()=>Yy,chargeUlt:()=>zy,chooseCard:()=>Jy,dbgFast:()=>Gb,dbgFuse:()=>Sb,dbgLevel:()=>yb,dbgSet:()=>xb,dbgTargets:()=>Cb,dbgUlt:()=>bb,drawDecoys:()=>pb,drawGatesBack:()=>lb,drawGatesFront:()=>ub,drawPickups:()=>fb,drawPlayerShots:()=>vb,drawRuins:()=>db,drawShields:()=>mb,dropHeart:()=>Qy,dropShard:()=>Xy,fusionsReady:()=>Ky,gainXP:()=>Hy,giftCore:()=>$y,hudSkills:()=>ob,initSkills:()=>cy,lureOf:()=>eb,offerChoices:()=>Wy,offerFusion:()=>Gy,refreshStats:()=>Vy,remapSkills:()=>sb,stepSkills:()=>ly,tryOverdrive:()=>Ly,ultReady:()=>By});function cy(e){let t={uid:1,bossUid:0,m:1,ghostCd:0,turretCd:[.2,.35,.5],spatialCd:[0,.17,.33,.5,.67,.83],pulses:[],chains:[],singX:0,singY:0,singFold:-1,sfxShard:0,gateN:0,gateIdx:/* @__PURE__ */ new Map,ruinTurnT:0,ruinTurn:0};e.priv.skills=t,e.strokes=[],e.shields=[],e.gifts=[],Vy(e);let n=e.route;n.nextChunkD=12,n.nextGateD=K.timeline.firstGateD,n.nextHeartT=K.timeline.heartFirst,n.nextRuinX=e.scroll+K.ruin.every*(.7+.3*e.rng()),n.chunks=0,n.gates=[],n.ruins=[]}function ly(e,t){if(!Db(e))return;let n=Eb(e),r=e.p;e.run.choosing&&e.phase!==`play`&&(e.run.choosing=!1,sC(e)),r.castHot=r.castT>=.1&&r.castT<.25;let i=e.en;for(let e=0,n=i.n*pg;e<n;e++)i.hitCd[e]>0&&(i.hitCd[e]-=t);e.run.orbA+=t,uy(e)&&py(e,t),by(e,t),ky(e,t),Ey(e),Cy(e,t),wy(e),Dy(e),Iy(e,t),Ry(e,t),tb(e,t),nb(e,t),ab(e);for(let e=n.chains.length-1;e>=0;e--)(n.chains[e].t+=G)>2/60&&n.chains.splice(e,1);n.sfxShard-=G}function uy(e){return e.phase===`play`&&e.p.alive&&!e.run.choosing}function dy(e,t,n,r,i){return!dg[n]||!Uv(e)?!1:Rx(e,t,n,r,i)}function fy(e,t,n,r,i){let a=e.p,o=Math.atan2(n-a.y,t-a.x)*180/Math.PI;a.castA=o,a.castT=0,a.castHot=!1,tg(e,.1,`world`,e=>{uy(e)?r(e,Mb(e,o)):i&&e.p.alive&&e.phase===`play`&&(e.run.wcd[i]=0)})}function py(e,t){let n=e.run,r=n.PS,i=n.wcd,a=e.p;if(Rg(e,`design`)&&(i.design-=t,i.design<=0)){let t=n.wpn.design,o=K.design,s=Wv(e,a.x,a.y,1,o.range[t-1],!0);if(t>=5){i.design=o.cd[4]*r.cd;let t=s.length?Gv(e,s[0]):{x:a.x+80,y:a.y};fy(e,t.x,t.y,e=>gy(e),`design`)}else if(s.length){i.design=o.cd[t-1]*r.cd;let n=Gv(e,s[0]),a=Eb(e).m=-Eb(e).m;fy(e,n.x,n.y,(e,t)=>{hy(e,t,a),e.run.wpn.design>=2&&tg(e,o.second,`world`,e=>{uy(e)&&hy(e,Mb(e,e.p.castA),-a)})},`design`)}}if(Rg(e,`code`)&&(i.code-=t,i.code<=0)){let t=K.code,o=Wv(e,a.x,a.y,1,t.range,!0);if(o.length){i.code=t.cd[n.wpn.code-1]*r.cd;let a=Gv(e,o[0]);fy(e,a.x,a.y,(e,t)=>yy(e,t),`code`)}}if(Rg(e,`motion`)){let i=Eb(e),a=K.motion;if(i.ghostCd-=t,i.ghostCd<=0){let t=a.maxN[n.wpn.motion-1];i.ghostCd=a.every/t*Math.max(a.cdMin,r.cd),xy(e,t)}}if(zg(e,`algorithmic`)&&(i.algorithmic-=t,i.algorithmic<=0)){let t=K.fusion.algorithmic,n=Wv(e,a.x,a.y,1,t.range,!0);if(n.length){i.algorithmic=t.every*r.cd;let a=Gv(e,n[0]);fy(e,a.x,a.y,(e,t)=>Ay(e,t),`algorithmic`)}}if(zg(e,`spline`)&&(i.spline-=t,i.spline<=0&&(i.spline=K.fusion.spline.every*r.cd,jy(e))),zg(e,`automation`)&&(i.automation-=t,i.automation<=0&&(i.automation=K.fusion.automation.every*r.cd,My(e))),zg(e,`procedural`)&&Ny(e,t),zg(e,`spatial`)){let n=Eb(e),i=K.fusion.spatial,a=e.shields;for(let o=0;o<Math.min(6,a.length);o++)n.spatialCd[o]-=t,n.spatialCd[o]<=0&&(n.spatialCd[o]=i.every*r.cd,Py(e,a[o].x,a[o].y,{rmax:i.ringR*r.area,dur:.42,dmg:i.ringDmg*r.dmg,slow:i.slow,src:`shockRing`,look:`shock`}))}}function my(e,t,n,r){let i=6*r.w,a=[],o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e=0;e<n.length;e+=4)a.push(n[e]);n.length&&a[a.length-1]!==n[n.length-1]&&a.push(n[n.length-1]);for(let e of n)e.x<o&&(o=e.x),e.y<s&&(s=e.y),e.x>c&&(c=e.x),e.y>l&&(l=e.y);let u={kind:t,path:n,age:0,draw:r.draw,dur:r.dur,dmg:r.dmg,w:r.w,src:r.src,hit:/* @__PURE__ */ new Set,hitBoss:!1,seed:Math.floor(e.rngFx()*1e3),slow:r.slow||0,coarse:a,pad:i,box:[o-i-20,s-i-20,c+i+20,l+i+20],A:r.A??e.run.PS.area};return e.strokes.push(u),u}function hy(e,t,n){let r=K.design,i=e.run.wpn.design,a=i-1,o=e.run.PS.area,s=r.dmg[a]*e.run.PS.dmg,c={x:t.x+1,y:t.y+2},l=Wv(e,e.p.x,e.p.y,i>=3?r.thread:1,r.range[a],!0);if(i>=3&&l.length>1){let t=[c,...l.map(t=>Gv(e,t))],i=t[t.length-1],u=t[t.length-2],d=i.x-u.x,f=i.y-u.y,p=Math.hypot(d,f)||1;t.push({x:i.x+d*r.threadRun-f/p*r.threadAcross*n,y:i.y+f*r.threadRun+d/p*r.threadAcross*n}),my(e,`slash`,ss(cs(t,!1),.5),{draw:r.draw[a],dur:r.last[a],dmg:s,w:r.width[a]*o,src:`slash`})}else{let t=l.length?Gv(e,l[0]):{x:e.p.x+90,y:e.p.y+n*20},i=Math.min(a,1);my(e,`slash`,as(c,t,n,o*(e.L.portrait?.3:.36)),{draw:r.draw[i],dur:r.last[i],dmg:s,w:r.width[i]*o,src:`slash`})}W(e,`slash`)}function gy(e){let t=K.design,n=e.run.PS.area,r=t.dmg[4]*e.run.PS.dmg,i=e.p,[a,o]=Nb(e),s=Wv(e,i.x,i.y,t.fan,t.range[4],!0),c=[];for(let l=0;l<t.fan;l++){let u=(l/(t.fan-1)-.5)*2*t.fanSpread,d=150+l%3*35,f=l<s.length?Gv(e,s[l]):{x:i.x+Math.cos(u)*d,y:i.y+Math.sin(u)*d*.8},p=u<0?o:a,m=f.x-p.x,h=f.y-p.y,g=Math.hypot(m,h)||1,_=-u*30*n+(l%2?6:-4),v={x:jg(p.x,f.x,.35)-h/g*_,y:jg(p.y,f.y,.35)+m/g*_};c.push(my(e,`slash`,ss(cs([p,v,f],!1),.5),{draw:.38,dur:.75,dmg:r,w:.36*n,src:`slash`}))}let l=0,u=t.cutNear*t.cutNear;for(let n=0;n<c.length&&l<t.cutMax;n++)for(let r=n+1;r<c.length&&l<t.cutMax;r++){let i=c[n].path,a=c[r].path,o=-1;for(let e=Math.floor(i.length*.3);e<i.length&&o<0;e+=6)for(let t=Math.floor(a.length*.3);t<a.length;t+=6){let n=i[e].x-a[t].x,r=i[e].y-a[t].y;if(n*n+r*r<u){o=e;break}}if(o<0)continue;l++;let s=i[o];tg(e,t.cutDelay*(o/i.length),`world`,e=>_y(e,s.x,s.y))}W(e,`slash`)}function _y(e,t,n){let r=K.design,i=r.cutR*e.run.PS.area,a=r.cutDmg*e.run.PS.dmg,o=e.en;for(let r=0;r<o.n;r++){if(!Ab(e,r))continue;let s=i+o.r[r],c=o.x[r]-t,l=o.y[r]-n;c*c+l*l<s*s&&jb(e,r,a,`cutBurst`,{x:o.x[r],y:o.y[r]})}Uv(e)&&Math.hypot(e.boss.x-t,e.boss.y-n)<i+e.boss.r&&dy(e,a,`cutBurst`,t,n),og(e,kg.cutBurst,t,n,.4,i),ig(e,t,n,6,[`W0`,`W2`,`D3`],50,.35)}function vy(e,t,n,r,i,a,o={}){let s=e.sh,c=Jh(s);if(c<0)return-1;let l=Eb(e),u=o.spd??K.code.speed,d=1,f=0,p=0;if(i!=null){let t=Gv(e,i);d=t.x-n,f=t.y-r;let a=Math.hypot(d,f)||1;d/=a,f/=a,p=t.id}let m=o.across??0;return s.kind[c]=t,s.x[c]=n,s.y[c]=r,s.vx[c]=d*u-f*m,s.vy[c]=f*u+d*m-(o.up??0),s.spd[c]=u,s.homing[c]=K.code.homing,s.dmg[c]=a,s.r[c]=K.code.hitPad,s.age[c]=0,s.life[c]=o.life??K.code.life,s.tgt[c]=p,s.pierce[c]=o.pierce??0,s.chain[c]=o.chain??0,s.chainR[c]=K.code.chainR[3]||160,s.bossOK[c]=1,s.text[c]=o.text??Math.floor(e.rngFx()*gc.length),s.seed[c]=Math.floor(e.rngFx()*1e3),s.lastHit[c]=l.uid++,c}function yy(e,t){let n=K.code,r=e.run.wpn.code,i=r-1,a=n.dmg[i]*e.run.PS.dmg,o=Wv(e,t.x,t.y,n.nearest[i],n.range,!0);if(!o.length)return;let s=r>=5?n.shots[4]:r===2?2:Math.min(n.shots[i],o.length),c={pierce:n.pierce[i],chain:n.chain[i],text:r>=5?255:void 0};for(let i=0;i<s;i++){let l=o[i%o.length],u=i-(s-1)/2,d={...c,across:n.spreadX*u,up:n.spreadY*Math.abs(u)};if(r===2&&i===1){let t=Gv(e,l).id;tg(e,n.second,`world`,e=>{if(!uy(e))return;let n=null;if(t===Cg)n=Uv(e)?-1:null;else{let r=Xh(e.en,t);n=r>=0&&Ab(e,r)?r:null}let r=Mb(e,e.p.castA);vy(e,Sg.token,r.x,r.y,n,a,d)})}else vy(e,Sg.token,t.x,t.y,l,a,d)}W(e,`shoot`)}function by(e,t){let n=e.sh,r=e.en,i=Eb(e),a=e.dev.W,o=e.dev.H;for(let s=n.n-1;s>=0;s--){if(n.age[s]+=t,n.age[s]>=n.life[s]){Yh(n,s);continue}let c=NaN,l=NaN,u=n.tgt[s];if(u===Cg)Uv(e)?(c=e.boss.x,l=e.boss.y):n.tgt[s]=0;else if(u){let t=Xh(r,u);t>=0&&Ab(e,t)?(c=r.x[t],l=r.y[t]):n.tgt[s]=0}if(!n.tgt[s]&&n.age[s]>.05){let t=Wv(e,n.x[s],n.y[s],1,300,n.bossOK[s]===1);if(t.length){let r=Gv(e,t[0]);n.tgt[s]=r.id,c=r.x,l=r.y}}if(c===c){let e=c-n.x[s],r=l-n.y[s],i=Math.hypot(e,r)||1,a=Fg(n.homing[s],t);n.vx[s]+=(e/i*n.spd[s]-n.vx[s])*a,n.vy[s]+=(r/i*n.spd[s]-n.vy[s])*a}n.x[s]+=n.vx[s]*t,n.y[s]+=n.vy[s]*t;let d=n.x[s],f=n.y[s];if(d<-24||d>a+60||f<-30||f>o+30){Yh(n,s);continue}let p=n.lastHit[s],m=n.r[s],h=-2;if(Vv(e,d,f,m,t=>{if(r.lastHit[t]===p||!Ab(e,t))return;let n=r.r[t]+m,i=r.x[t]-d,a=r.y[t]-f;if(i*i+a*a<n*n)return h=t,!0}),h<-1&&n.bossOK[s]&&i.bossUid!==p&&Uv(e)&&Math.hypot(e.boss.x-d,e.boss.y-f)<e.boss.r+m&&(h=-1),h<-1)continue;let g=kb[n.kind[s]]||`token`,_=h===-1,v=/* @__PURE__ */ new Set;if(_?(i.bossUid=p,dy(e,n.dmg[s],g,d,f)):(r.lastHit[h]=p,v.add(r.id[h]),jb(e,h,n.dmg[s],g,{x:d,y:f})),ig(e,d,f,3,[`G0`,`G2`,`W0`],36,.25),n.pierce[s]>0){n.pierce[s]--;let t=Wv(e,d,f,1,200,n.bossOK[s]===1&&!_,v);n.tgt[s]=t.length?Gv(e,t[0]).id:0}else if(n.chain[s]>0){n.chain[s]--;let t=Wv(e,d,f,1,n.chainR[s],n.bossOK[s]===1&&!_,v);if(!t.length){Yh(n,s);continue}let a=Gv(e,t[0]);n.tgt[s]=a.id,n.lastHit[s]=i.uid++,_?i.bossUid=n.lastHit[s]:r.lastHit[h]=n.lastHit[s],n.life[s]=Math.max(n.life[s],n.age[s]+K.code.chainLifeMin),i.chains.push({x0:d,y0:f,x1:a.x,y1:a.y,t:0,seed:n.seed[s]+n.chain[s]})}else Yh(n,s)}}function xy(e,t){let n=e.de,r=K.motion,i=e.run.wpn.motion,a=e.run.PS.area;if(n.n>=t){let t=0;for(let e=1;e<n.n;e++)n.age[e]>n.age[t]&&(t=e);Sy(e,t),Yh(n,t)}let o=Jh(n);o<0||(n.x[o]=e.p.x,n.y[o]=e.p.y,n.age[o]=0,n.life[o]=r.life,n.lure[o]=r.lure[i-1]*a,n.burstR[o]=r.burst[i-1]*a,n.dmg[o]=r.dmg[i-1]*e.run.PS.dmg)}function Sy(e,t){let n=e.de,r=e.en,i=n.x[t],a=n.y[t],o=n.burstR[t];Vv(e,i,a,o,s=>{if(!Ab(e,s))return;let c=o+K.motion.burstEnemyK*r.r[s],l=r.x[s]-i,u=r.y[s]-a;l*l+u*u<c*c&&jb(e,s,n.dmg[t],`decoyBurst`,{x:r.x[s],y:r.y[s]})}),og(e,kg.decoyBurst,i,a,.45,o),ig(e,i,a,8,[`B1`,`W1`,`K6`],40,.4)}function Cy(e,t){let n=e.de,r=K.motion;if(!Rg(e,`motion`))n.n=0;else for(let i=n.n-1;i>=0;i--)n.age[i]+=t,n.x[i]-=r.drift/r.life*t,n.age[i]>=n.life[i]&&(Sy(e,i),Yh(n,i))}function wy(e){let t=e.run,n=t.PS,r=e.p,i=zg(e,`spatial`);if(e.shields.length=0,!Rg(e,`3d`)&&!i)return;let a=i?5:t.wpn[`3d`],o=Ss(r.x,r.y,a,t.orbA,n.area),s=Pb[a-1];for(let t=0;t<o.length;t++){let n=o[t];n.outer=t>=s,e.shields.push(n)}if(!uy(e))return;let c=K.shield,l=(i?K.fusion.spatial.dmg:c.dmg[a-1])*n.dmg,u=i?fg.shockOrbit:fg.orbit,d=i?`shockOrbit`:`orbit`,f=e.en;for(let t of e.shields){let n=t.kind===`icosa`?4.5:3.5;Vv(e,t.x,t.y,n+2,r=>{if(!Ab(e,r)||f.hitCd[r*pg+u]>0)return;let i=f.x[r]-t.x,a=f.y[r]-t.y,o=n+f.r[r]+1.5;i*i+a*a>=o*o||(f.hitCd[r*pg+u]=c.every,jb(e,r,l,d,{knockX:i*c.push+c.pushAhead,knockY:a*c.push,x:t.x,y:t.y,star:!1}),og(e,kg.contact,t.x,t.y,.15))}),Tx(e,t.x,t.y,n+c.bulletPad)}}function Ty(e,t,n,r,i=0){let a=K.design,o=[];for(let s=0;s<6;s++){let c=s/6*Tb+n*a.loopW,l=1+a.loopWob*Math.sin(n*(1.3+.37*s)+wo(i,s)*6.28);o.push({x:e+Math.cos(c)*a.loopR*r*l,y:t+Math.sin(c)*a.loopR*r*a.loopYs*l})}return cs(o,!0)}function Ey(e){if(!Rg(e,`design`)||e.run.wpn.design<4||!uy(e))return;let t=K.design,n=e.run.PS.area,r=e.p,i=Ty(r.x,r.y,e.run.orbA,n),a=e.en,o=6*.2*n,s=t.loopDmg*e.run.PS.dmg;Vv(e,r.x,r.y,t.loopR*n*1.3+o,n=>{!Ab(e,n)||a.hitCd[n*pg+fg.loop]>0||Kv(a.x[n],a.y[n],i)<a.r[n]+o&&(a.hitCd[n*pg+fg.loop]=t.loopEvery,jb(e,n,s,`loop`,{x:a.x[n],y:a.y[n]}))})}function Dy(e){if(!zg(e,`reaper`)||!uy(e))return;let t=K.fusion.reaper,n=e.run.PS.area,r=e.p,i=t.r*n,a=t.w*n,o=e.en,s=t.dmg*e.run.PS.dmg;for(let n=0;n<t.blades;n++){let c=Fb(e,n),l=[];for(let e=0;e<=12;e++){let n=c-e/12*t.arc;l.push({x:r.x+Math.cos(n)*(i-a/2),y:r.y+Math.sin(n)*(i-a/2)*t.ys})}Vv(e,r.x,r.y,i+a,n=>{if(!(!Ab(e,n)||o.hitCd[n*pg+fg.blade]>0)&&Kv(o.x[n],o.y[n],l)<o.r[n]+a*.6){o.hitCd[n*pg+fg.blade]=t.every;let i=o.x[n]-r.x,a=o.y[n]-r.y,c=Math.hypot(i,a)||1;jb(e,n,s,`blade`,{knockX:i/c*40+30,knockY:a/c*40,x:o.x[n],y:o.y[n]})}})}}function Oy(e){let t=e.age;if(e.kind===`seek`){let n=Math.min(1,t/.3);return[t<.3?0:Math.min(.98,(t-.3)/(e.dur-.3)*.9),n]}if(e.kind===`od`){let e=Math.min(1,t/.18);return[t<.18?0:Math.min(.98,(t-.18)/.3),e]}let n=Math.min(1,t/e.draw),r=1-(1-n)*(1-n),i=t<e.draw?0:Math.min(1,(t-e.draw)/(e.dur-e.draw));return[Math.min(.98,i*i*.9),r]}function ky(e,t){let n=e.en,r=e.strokes;for(let i=r.length-1;i>=0;i--){let a=r[i];if(a.age+=t,a.age>Ib(a)){r.splice(i,1);continue}if(a.age>Lb(a))continue;let[o,s]=Oy(a),c=a.coarse.length,l=Math.floor(o*(c-1)),u=Math.ceil(s*(c-1));if(u<=l)continue;let[d,f,p,m]=a.box;for(let t=0;t<n.n;t++){let r=n.x[t],i=n.y[t];r<d||r>p||i<f||i>m||a.hit.has(n.id[t])||!Ab(e,t)||Kv(r,i,a.coarse,l,u)<n.r[t]+a.pad&&(a.hit.add(n.id[t]),jb(e,t,a.dmg,a.src,{slow:a.slow||void 0,x:r,y:i}))}if(!a.hitBoss&&dg[a.src]&&Uv(e)){let t=e.boss;Kv(t.x,t.y,a.coarse,l,u)<t.r+a.pad&&(a.hitBoss=!0,dy(e,a.dmg,a.src,t.x,t.y))}}}function Ay(e,t){let n=K.fusion.algorithmic,r=e.run.PS.area,i=Wv(e,e.p.x,e.p.y,n.near,n.range,!0);if(!i.length)return;let a=Math.min(n.strokes,Math.max(1,i.length));for(let o=0;o<a;o++){let a=o%2?1:-1,s=Gv(e,i[o%i.length]),c=i[(o+3)%i.length],l=[t,{x:(t.x+s.x)/2,y:(t.y+s.y)/2+a*30*r-10},s];c!==i[o%i.length]&&l.push(Gv(e,c));let u=l[l.length-1];l.push({x:u.x+28,y:u.y-a*20+6}),my(e,`seek`,ss(cs(l,!1),.5),{draw:.3,dur:.9,dmg:n.dmg*e.run.PS.dmg,w:n.width/10*r,src:`seekStroke`})}W(e,`shoot`)}function jy(e){let t=K.fusion.spline,n=e.run.PS.area,r=e.p,i=Wv(e,r.x,r.y,t.strokes,t.range,!0);for(let a=0;a<t.strokes;a++){let o=(a/3-.5)*1.5,s=a<i.length?Gv(e,i[a]):{x:r.x+Math.cos(o)*160,y:r.y+Math.sin(o)*130},c={x:r.x+50+Math.cos(o)*10,y:r.y+Math.sin(o)*50-o*20},l=ss(cs([{x:r.x,y:r.y},c,s],!1),.5);my(e,`slow`,l,{draw:.6,dur:.95,dmg:t.dmg*e.run.PS.dmg,w:.3*n,src:`slowStroke`,slow:t.slow});for(let n=1;n<=t.pulses;n++){let r=l[Math.min(l.length-1,Math.floor(n/t.pulses*(l.length-1)))];tg(e,t.pulseStep*n,`world`,e=>Py(e,r.x,r.y,{rmax:t.pulseR*e.run.PS.area,dur:.45,dmg:t.pulseDmg*e.run.PS.dmg,slow:t.slow,src:`slowPulse`,look:`slow`}))}}W(e,`pulse`)}function My(e){let t=K.fusion.automation,n=e.run.PS.area,r=e.p,i=t.ringR*n;Py(e,r.x,r.y,{rmax:i,dur:.5,dmg:0,src:`autoRing`,look:`oct`,follow:!0});let a=Wv(e,r.x,r.y,t.max,i,!1);for(let n of a)vy(e,Sg.autoToken,r.x+4,r.y,n,t.dmg*e.run.PS.dmg,{chain:t.chain,spd:t.speed,across:(e.rng()-.5)*80,up:e.rng()*40});a.length&&W(e,`shoot`)}function Ny(e,t){let n=Eb(e),r=K.fusion.procedural;for(let i=0;i<r.n;i++){if(n.turretCd[i]-=t,n.turretCd[i]>0)continue;n.turretCd[i]=r.every*e.run.PS.cd;let a=Rb(e,i),o=Wv(e,a.x,a.y,1,r.range,!0);o.length&&(vy(e,Sg.turretShot,a.x,a.y,o[0],r.dmg*e.run.PS.dmg,{pierce:r.pierce,spd:r.speed}),og(e,kg.muzzle,a.x,a.y,2/60))}}function Py(e,t,n,r){Eb(e).pulses.push({x:t,y:n,t:0,delay:r.delay??0,dur:r.dur,rmax:r.rmax,law:r.law??`pulse`,dmg:r.dmg,slow:r.slow??0,knock:r.knock??0,clear:!!r.clear,follow:!!r.follow,src:r.src,hit:/* @__PURE__ */ new Set,hitBoss:!1,look:r.look,seed:Math.floor(e.rngFx()*1e3)})}function Fy(e){let t=e.t/e.dur;return e.law===`open`?2+(e.rmax-2)*(1-(1-Math.min(1,t))**2.2):2+(e.rmax-2)*(1-(1-Math.min(1,t/.7))**3)}function Iy(e,t){let n=Eb(e),r=e.en;for(let i=n.pulses.length-1;i>=0;i--){let a=n.pulses[i];if(a.delay>0){a.delay-=t;continue}if(a.t+=t,a.t>=a.dur){n.pulses.splice(i,1);continue}a.follow&&(a.x=e.p.x,a.y=e.p.y);let o=Fy(a);a.dmg>0&&(Vv(e,a.x,a.y,o,t=>{if(!Ab(e,t)||a.hit.has(r.id[t]))return;let n=r.x[t]-a.x,i=r.y[t]-a.y,s=Math.hypot(n,i);if(s>=o+r.r[t]*.5)return;a.hit.add(r.id[t]);let c={x:r.x[t],y:r.y[t]};a.slow&&(c.slow=a.slow),a.knock&&(c.knockX=n/(s||1)*a.knock,c.knockY=i/(s||1)*a.knock),jb(e,t,a.dmg,a.src,c)}),!a.hitBoss&&dg[a.src]&&Uv(e)&&Math.hypot(e.boss.x-a.x,e.boss.y-a.y)<o+e.boss.r*.5&&(a.hitBoss=!0,dy(e,a.dmg,a.src,e.boss.x,e.boss.y))),a.clear&&Tx(e,a.x,a.y,o)}}function Ly(e){if(!Db(e))return!1;let t=e.run;if(!By(e)||e.phase!==`play`||!e.p.alive||t.choosing||e.paused||e.sheet.kind!==`none`||e.gameIn>0)return!1;let n=K.ult,r=Eb(e),i=e.p;return t.ult=0,t.ultT=n.dur,t.ultCollapsed=!1,t.ultSing=mg.every(e=>t.wpn[e]>0||t.spent[e]),t.ultCd={design:0,code:0,motion:0},i.iframes=Math.max(i.iframes,.3),r.singX=Math.min(i.x+n.sing.dx,e.dev.W-n.sing.edge),r.singY=i.y+n.sing.dy,r.singFold=-1,cg(e,n.landRise,n.landDur,t.ultSing?n.landAmpSing:n.landAmp),rg(e,t.ultSing?`Creative Singularity`:`Creative Overdrive`,`ult`),W(e,`ult`),ig(e,i.x,i.y,24,[`D4`,`W0`,`P4`],70,.6),Py(e,i.x,i.y,{rmax:n.openR,dur:n.openT,dmg:0,src:`odOpen`,look:`odOpen`,clear:!0,follow:!0,law:`open`}),!0}function Ry(e,t){let n=e.run,r=Eb(e);if(r.singFold>=0&&(r.singFold+=t),n.ultT<=0)return;let i=K.ult,a=e.p;if(n.ultT-=t,n.ultT<=0){n.ultT=0;return}a.iframes=Math.max(a.iframes,.1);let o=n.PS.area,s=(1+i.k2Lv*zb(e)+i.k2Fusion*n.fused.length)*n.PS.dmg;if(Bb(e,`design`)&&(n.ultCd.design-=t,n.ultCd.design<=0)){n.ultCd.design=i.design.every;let t=i.design.wanderMin+(i.design.wanderMax-i.design.wanderMin)*e.rng(),r=a.y+(e.rng()-.5)*t,c=e.rng()<.5?-1:1;my(e,`od`,ss(os([-i.design.span,-60,20,i.design.span].map((n,i)=>({x:a.x+n*c,y:r+(e.rng()-.5)*t*(i===0||i===3?.6:1)}))),.5),{draw:.18,dur:.48,dmg:i.design.dmg*s,w:1.2*o,src:`odStroke`,A:o})}if(Bb(e,`code`)&&(n.ultCd.code-=t,n.ultCd.code<=0)){n.ultCd.code=i.code.every;let t=Nb(e),r=[];for(let t=0;t<e.en.n&&r.length<24;t++)Hv(e,t)&&e.en.x[t]-a.x<K.code.range&&r.push(t);for(let n=0;n<i.code.n;n++){let a=r.length?r[Math.floor(e.rng()*r.length)]:Uv(e)?-1:null;vy(e,Sg.odToken,t[n%2].x,t[n%2].y,a,i.code.dmg*s,{pierce:i.code.pierce,chain:i.code.chain,spd:i.code.speed,across:(e.rng()-.5)*120,up:e.rng()*60})}}if(Bb(e,`motion`)&&(n.ultCd.motion-=t,n.ultCd.motion<=0&&(n.ultCd.motion=i.motion.every,Py(e,a.x,a.y,{rmax:i.motion.r*o,dur:.7,dmg:i.motion.dmg*s,slow:i.motion.slow,knock:i.motion.knock,clear:!0,follow:!0,src:`odRing`,look:`odRing`}))),Bb(e,`3d`)){let t=i.cubes,r=16*(1+i.k2Lv*zb(e))*n.PS.dmg,a=e.en;for(let n of Vb(e)){let i=t.size/2+1.5;Vv(e,n.x,n.y,i,o=>{if(!Ab(e,o)||a.hitCd[o*pg+fg.odCube]>0)return;let s=a.x[o]-n.x,c=a.y[o]-n.y,l=i+a.r[o];s*s+c*c>=l*l||(a.hitCd[o*pg+fg.odCube]=t.every,jb(e,o,r,`odCube`,{x:n.x,y:n.y}))})}}if(n.ultSing){let a=i.sing,o=e.en;for(let e=0;e<o.n;e++){if(o.hp[e]<=0||o.burn[e]>=0)continue;let n=r.singX-o.x[e],i=r.singY-o.y[e],s=Math.hypot(n,i)||1;o.vx[e]+=n/s*a.accel*t,o.vy[e]+=i/s*a.accel*t}if(!n.ultCollapsed&&n.ultT<a.at){n.ultCollapsed=!0,r.singFold=0;for(let t=0;t<o.n;t++)Ab(e,t)&&jb(e,t,a.dmg*s,`singularity`,{x:o.x[t],y:o.y[t]});dy(e,a.dmgBoss*s,`singularity`,r.singX,r.singY),cg(e,i.landRise,i.landDur,a.landK),ig(e,r.singX,r.singY,a.sparks,[`W1`,`P4`,`D4`],120,.9),a.rings.forEach((t,n)=>Py(e,r.singX,r.singY,{rmax:t,dur:.9,dmg:0,clear:!0,src:`singularity`,look:`none`,delay:n*a.ringGap})),W(e,`boss`)}}}function zy(e,t){e.run.ultT>0||(e.run.ult=Math.min(K.ult.max,e.run.ult+t))}function By(e){return e.run.ult>=K.ult.max&&e.run.ultT<=0}function Vy(e){let t=K.passive,n=e.run.pas,r=e.run.PS;r.dmg=1+n.power*t.dmg,r.cd=1-n.cooldown*t.cd,r.area=1+n.area*t.area,r.magnet=1+n.magnet*t.magnet,r.speed=1+n.speed*t.speed,r.regen=t.regen0+n.recovery*t.regen;let i=t.maxHp0+n.recovery*t.maxHp;i!==e.p.maxHp&&(e.p.hp+=Math.max(0,i-e.p.maxHp),e.p.maxHp=i)}function Hy(e,t,n){let r=e.run,i=t*K.xpK;for(r.xp+=i,n===`kill`?e.stats.xpKills+=i:n===`route`?e.stats.xpRoute+=i:e.stats.xpGates+=i;r.xp>=r.need;)r.xp-=r.need,r.level++,r.need=Math.round(K.needA+K.needB*r.level+K.needC*r.level*r.level),r.pending++;r.pending>0&&!r.choosing&&e.p.alive&&e.phase===`play`&&Wy(e)}function Uy(e){let t=e.run,n=e.rng,r=[],i=Ky(e),a=mg.filter(t=>Rg(e,t)).length+t.fused.length,o=hg.filter(e=>t.pas[e]>0).length,s=[],c=[];for(let e of mg)t.spent[e]||(t.wpn[e]===0&&a<K.maxWeaponSlots?c.push({kind:`weapon`,id:e,lv:1}):t.wpn[e]>0&&t.wpn[e]<K.maxLv&&s.push({kind:`weapon`,id:e,lv:t.wpn[e]+1}));for(let e of hg)t.pas[e]===0&&o<K.maxPassiveKinds?c.push({kind:`passive`,id:e,lv:1}):t.pas[e]>0&&t.pas[e]<K.maxLv&&s.push({kind:`passive`,id:e,lv:t.pas[e]+1});i.length&&r.push({kind:`fusion`,id:i[Math.floor(n()*i.length)],lv:0});let l=e=>e.sort(()=>n()-.5);for(l(s),l(c),c.sort((e,r)=>(e.kind===`weapon`?0:1)-(r.kind===`weapon`?0:1)+(n()-.5)*(t.level>4?1.5:.6));r.length<3&&(s.length||c.length);){let e=s.length&&(!c.length||n()<K.upgradeP)?s.shift():c.shift();r.some(t=>t.id===e.id)||r.push(e)}return r.length<3&&r.push({kind:`other`,id:`rest`,lv:0}),r.length<3&&r.push({kind:`other`,id:`charge`,lv:0}),r.slice(0,3)}function Wy(e){let t=e.run;t.offer=Uy(e),t.choiceKind=`level`,t.coreHand=!1,t.choosing=!0,t.pending=Math.max(0,t.pending-1),oC(e,`levelup`),W(e,`level`)}function Gy(e){let t=Ky(e);if(!t.length)return!1;let n=e.run,r=t.slice(0,2).map(e=>({kind:`fusion`,id:e,lv:0}));return r.push({kind:`other`,id:`keep`,lv:0}),n.offer=r,n.choiceKind=`fusion`,n.coreHand=!1,n.choosing=!0,oC(e,`fusion`),W(e,`level`),!0}function Ky(e){if(e.run.cores<=0||e.run.fused.length>=K.fusionMax)return[];let t=e.run.wpn;return gg.filter(n=>Rg(e,n.a)&&Rg(e,n.b)&&Math.max(t[n.a],t[n.b])>=K.fusionNeedA&&Math.min(t[n.a],t[n.b])>=K.fusionNeedB&&!e.run.fused.includes(n.id)).map(e=>e.id)}function qy(e,t){let n=e.run;if(t.kind===`weapon`)n.wpn[t.id]=Math.min(K.maxLv,n.wpn[t.id]+1);else if(t.kind===`passive`)n.pas[t.id]=Math.min(K.maxLv,n.pas[t.id]+1);else if(t.kind===`fusion`){let e=gg.find(e=>e.id===t.id);if(e&&n.cores>0&&!n.fused.includes(e.id))return n.cores--,n.spent[e.a]=n.spent[e.b]=!0,n.fused.push(e.id),n.wcd[e.id]=K.start.wcd[e.id]??.5,!0}else t.id===`rest`?yC(e,K.restHp):t.id===`charge`&&(n.ult=Math.min(K.ult.max,n.ult+K.chargeUlt));return!1}function Jy(e,t){let n=e.run;if(!n.choosing)return;let r=n.offer[t];if(!r)return;let i=n.choiceKind,a=qy(e,r);Vy(e),n.choosing=!1;let o=e.p;o.iframes=Math.max(o.iframes,.6),a&&(rg(e,Ob[r.id],`fusion`),ig(e,o.x,o.y,40,[`C1`,`Y2`,`W0`,`D4`],90,.8),Py(e,o.x,o.y,{rmax:90,dur:.8,dmg:0,src:`autoRing`,look:`fuse`,follow:!0})),ig(e,o.x,o.y,8,[`D4`,`Y2`,`W1`],40,.5),og(e,kg.heal,o.x,o.y,.6),e.sheet.chosen=t,e.sheet.chosenT=0,sC(e),W(e,`pick`),W(e,`grace`);let s=K.card;n.pending>0?tg(e,r.kind===`fusion`?s.nextAfterFusion:s.next,`step`,e=>{!e.run.choosing&&e.p.alive&&e.phase===`play`&&e.run.pending>0&&Wy(e)},`card`):Ky(e).length&&i!==`fusion`&&r.kind!==`fusion`&&tg(e,s.fusionAfter,`step`,e=>{!e.run.choosing&&e.p.alive&&e.phase===`play`&&Gy(e)},`card`)}function Yy(e){return[e.kind,e.id,e.lv]}function Xy(e,t,n,r,i=!1){let a=e.sd,o=Jh(a);if(o<0){let e=-1,i=1/0;for(let r=0;r<a.n;r++){let o=(a.x[r]-t)**2+(a.y[r]-n)**2;o<i&&(i=o,e=r)}e>=0&&(a.v[e]+=r,a.v[e]>=4&&(a.big[e]=1))}else a.x[o]=t,a.y[o]=n,a.v[o]=r,a.ph[o]=e.rngFx(),a.big[o]=i||r>=4?1:0,a.age[o]=0}function Zy(e,t,n){let r=e.sd.n;Xy(e,t,n,1),e.sd.n>r&&(e.sd.pull[e.sd.n-1]=2)}function Qy(e,t,n){let r=e.he,i=Jh(r);i<0||(r.x[i]=t,r.y[i]=J(n,e.L.top+6,e.L.floor-4),r.d[i]=0,r.ph[i]=e.rngFx(),r.src[i]=1,r.age[i]=0)}function $y(e,t,n){e.gifts.push({x0:t,y0:n,x:t,y:n,t:0,phase:`fly`})}function eb(e,t,n){let r=e.de,i=-1,a=1/0;for(let e=0;e<r.n;e++){let o=r.x[e]-t,s=r.y[e]-n,c=o*o+s*s;c<r.lure[e]*r.lure[e]&&c<a&&(a=c,i=e)}return i<0?null:{x:r.x[i],y:r.y[i]}}function tb(e,t){let n=e.p,r=Eb(e),i=e.V,a=e.run,o=e.sd,s=K.shard,c=(e.L.portrait?K.passiveMagnetR:K.passiveMagnetRLand)*a.PS.magnet,l=a.ultT>0,u=n.alive&&(e.phase===`play`||e.phase===`clearing`);for(let a=o.n-1;a>=0;a--){o.age[a]+=t;let d=o.x[a],f=o.y[a];o.x[a]-=i*t;let p=o.x[a]-n.x,m=o.y[a]-n.y,h=l&&p>s.odFrom&&p<s.odTo;if(u&&(h||p*p+m*m<c*c)){let e=Fg(h?s.odRate:s.magnetRate,t);o.x[a]+=(n.x-o.x[a])*e,o.y[a]+=(n.y-o.y[a])*e,o.pull[a]===2?o.pull[a]=3:o.pull[a]===0&&(o.pull[a]=1)}if(o.vx[a]=(o.x[a]-d)/Math.max(1e-6,t),o.vy[a]=(o.y[a]-f)/Math.max(1e-6,t),u&&(o.x[a]-n.x)**2+(o.y[a]-n.y)**2<s.pickR*s.pickR){let t=o.pull[a]>=2,n=o.v[a],i=o.x[a],s=o.y[a];Yh(o,a),og(e,kg.pickup,i,s,.15,0,0),r.sfxShard<=0&&(W(e,`shard`),r.sfxShard=.06),Hy(e,n,t?`route`:`kill`)}else o.x[a]<-8&&Yh(o,a)}let d=e.he,f=K.heart;for(let r=d.n-1;r>=0;r--){d.age[r]+=t,d.src[r]===0?d.x[r]=Lg(e,d.d[r]):d.x[r]-=i*t;let o=d.x[r]-n.x,s=d.y[r]-n.y;u&&o*o+s*s<f.pickR*f.pickR?(yC(e,f.heal+f.healRec*a.pas.recovery),og(e,kg.heal,n.x,n.y,.6),ig(e,d.x[r],d.y[r],6,[`P4`,`P5`,`W0`],40,.5),Yh(d,r)):d.x[r]<-10&&Yh(d,r)}}function nb(e,t){if(e.phase!==`play`&&e.phase!==`clearing`)return;let n=e.route,r=e.dev.W,i=K.route,a=K.K_W,o=e.L,s=Eb(e),c=e=>J(e,o.top+6,o.floor-6);for(;Lg(e,n.nextChunkD)<r+K.genMargin;){let t=n.nextChunkD,r=Lg(e,t),o=ug(e,t),s=e.rng(),l=n.chunks===0;n.chunks++;let u=0,d=`rest`;for(let[e,t]of i.chunks)if(u+=e,s<u){d=t;break}l&&(d=`string`);let f=i.rest;if(d===`string`){let n=i.string;for(let i=0;i<n.n;i++)Zy(e,r+i*n.dx,c(ug(e,t+i*n.dx/a)+n.amp*Math.sin(n.f*i)));f=34*a}else if(d===`helix`){let n=i.helix;for(let i=0;i<n.n;i++)Zy(e,r+i*n.dx,c(ug(e,t+i*n.dx/a)+n.amp*Math.cos(n.f*i)));f=40*a}else if(d===`arch`){let n=i.arch;for(let i=0;i<n.n;i++)Zy(e,r+i*n.dx,c(ug(e,t+i*n.dx/a)+n.base-n.lift*Math.sin(Math.PI*i/8)+(i/8-.5)*n.tilt));f=32*a}else if(d===`ringzig`){let n=i.ringzig;for(let t=0;t<n.ringN;t++)Zy(e,r+n.ringAt+Math.cos(t*1.26)*n.ringR,c(o+Math.sin(t*1.26)*n.ringR));for(let i=0;i<n.zigN;i++){let o=4*a+i*n.zigDx;Zy(e,r+o,c(ug(e,t+o/a)+(i%2?n.zigA:-n.zigA)))}f=34*a}else if(d===`halo`){let t=i.halo;for(let n=0;n<t.n;n++){let i=n/t.n*Tb;Zy(e,r+t.at+Math.cos(i)*t.r,c(o+Math.sin(i)*t.r))}f=26*a}n.nextChunkD=t+f/a}for(;Lg(e,n.nextGateD)<r+K.genMargin;){let t=n.nextGateD,r={d:t,x:Lg(e,t),y:c(ug(e,t)),half:o.gateHalf,side:1,passed:!1,flash:9};n.gates.push(r),s.gateIdx.set(r,s.gateN++),n.nextGateD=t+K.gate.spaceA+K.gate.spaceB*e.rng()}let l=e.p;for(let t=n.gates.length-1;t>=0;t--){let r=n.gates[t];r.x=Lg(e,r.d),r.half=o.gateHalf,r.flash+=G;let i=Math.sign(r.x-l.x)||1;!r.passed&&r.side>0&&i<0&&l.alive&&e.phase===`play`&&Math.abs(l.y-r.y)<r.half&&(r.passed=!0,r.flash=0,W(e,`grace`),rb(e,r.x,r.y),Hy(e,Math.max(K.gateXpMin,Math.round(e.run.need*K.gateXp)),`gate`)),r.side=i,r.x<-30&&(n.gates.splice(t,1),s.gateIdx.delete(r))}if(e.phase===`play`&&e.t>=n.nextHeartT){let t=K.timeline,r=K.heart;n.nextHeartT=e.t+t.heartMin+(t.heartMax-t.heartMin)*e.rng();let i=e.D+r.placeMin+(r.placeMax-r.placeMin)*e.rng(),a=Jh(e.he);a>=0&&(e.he.d[a]=i,e.he.x[a]=Lg(e,i),e.he.y[a]=c(ug(e,i)+(e.rng()*2-1)*o.h*r.yK),e.he.ph[a]=e.rngFx(),e.he.src[a]=0,e.he.age[a]=0)}if(e.scroll>=n.nextRuinX){n.nextRuinX=e.scroll+K.ruin.every*(.8+.4*e.rng());let t=Math.floor(e.rng()*4);n.ruins.push({d:e.D+(r+24-o.xHome)/a,x:r+24,y:o.top+16+(o.h-30)*e.rng(),r:[15,16,18,17][t],kind:t,spent:!1,t:e.rngFx()*8})}s.ruinTurnT-=t,s.ruinTurnT<=0&&(s.ruinTurnT=.6+.6*e.rngFx(),s.ruinTurn=(s.ruinTurn+1)%8);for(let r=n.ruins.length-1;r>=0;r--){let i=n.ruins[r];i.x=Lg(e,i.d),i.t+=t,!i.spent&&l.alive&&e.phase===`play`&&Math.hypot(i.x-l.x,i.y-l.y)<i.r&&ib(e,i),(i.spent||i.x<-30)&&n.ruins.splice(r,1)}}function rb(e,t,n){let r=e.pa,i=K.gate.ring;for(let e=0;e<i;e++){let a=Jh(r);if(a<0)return;let o=e/i*Tb;r.x[a]=t,r.y[a]=n,r.vx[a]=Math.cos(o)*70,r.vy[a]=Math.sin(o)*70,r.life[a]=.4,r.col[a]=Zh(`W0`),r.sz[a]=1,r.grav[a]=0,r.drag[a]=3}}function ib(e,t){let n=K.ruin,r=e.p;t.spent=!0,Py(e,t.x,t.y,{rmax:n.burstR,dur:.6,dmg:n.dmg*e.run.PS.dmg,knock:n.knock,src:`ruinPulse`,look:`ruin`});for(let r=0;r<n.shards;r++)Xy(e,t.x+(e.rngFx()-.5)*16,t.y+(e.rngFx()-.5)*12,1);lg(e,n.hitStop),W(e,`pulse`),ig(e,t.x,t.y,10,[`M2`,`M3`,`N2`],60,.7,90,2),ig(e,t.x,t.y,12,[`K7`,`P4`,`W0`],50,.8);let i=r.x-t.x,a=r.y-t.y,o=Math.hypot(i,a)||1;r.vx+=i/o*n.nudge,r.vy+=a/o*n.nudge}function ab(e){let t=K.coreGift,n=e.run.choosing?0:G;for(let r=e.gifts.length-1;r>=0;r--){let i=e.gifts[r];if(i.t+=n,i.phase===`fly`){let n=Hb(e),r=Ng(Math.min(1,i.t/t.fly));i.x=jg(i.x0,n.x,r),i.y=jg(i.y0,n.y,r),i.t>=t.fly&&(i.phase=`hold`,i.t=0,W(e,`core`),ig(e,n.x,n.y,t.sparks,[`Y2`,`Y1`,`W0`],60,.7))}else if(i.phase===`hold`){let n=Hb(e);i.x=n.x,i.y=n.y,i.t>=t.hold&&(i.phase=`settle`,i.t=0,i.x0=i.x,i.y0=i.y)}else{let n=Ub(e),a=Pg(Math.min(1,i.t/t.settle));i.x=jg(i.x0,n.x,a),i.y=jg(i.y0,n.y,a),i.t>=t.settle&&(e.gifts.splice(r,1),e.run.cores++,ig(e,n.x,n.y,6,[`Y2`,`W0`],30,.4),!e.run.choosing&&e.phase===`play`&&e.p.alive&&Gy(e)&&(e.run.coreHand=!0))}}}function ob(e){let t=[];for(let n of[`design`,`code`,`motion`,`3d`])Rg(e,n)&&t.push({id:n,lv:e.run.wpn[n]});for(let n of e.run.fused)t.push({id:n,lv:5,fused:!0});return t}function sb(e,t,n){if(!Db(e))return;let r=Eb(e),i=e.L,a=(e,r,i)=>{for(let a=0;a<i;a++)e[a]=t(e[a]),r[a]=n(r[a])};a(e.sd.x,e.sd.y,e.sd.n),a(e.sh.x,e.sh.y,e.sh.n),a(e.de.x,e.de.y,e.de.n);for(let r=0;r<e.he.n;r++)e.he.src[r]===1&&(e.he.x[r]=t(e.he.x[r])),e.he.y[r]=J(n(e.he.y[r]),i.top+6,i.floor-6);for(let t of e.route.gates)t.y=J(ug(e,t.d),i.top+6,i.floor-6),t.half=i.gateHalf;for(let t of e.route.ruins)t.y=J(n(t.y),i.top+8,i.floor-8);for(let r of e.strokes){for(let e of r.path)e.x=t(e.x),e.y=n(e.y);r.coarse=r.path.filter((e,t)=>t%4==0),r.box=[-1e4,-1e4,1e4,1e4]}for(let e of r.pulses)e.x=t(e.x),e.y=n(e.y);for(let r of e.gifts)r.x0=t(r.x0),r.y0=n(r.y0),r.x=t(r.x),r.y=n(r.y);r.singX=t(r.singX),r.singY=n(r.singY)}function cb(e){let t=wb(e.x)-9,n=wb(e.y),r=wb(e.half);return{gx:t,gy:n,h:r,top:n-r-3,bot:n+r+2}}function lb(e,t,n){let r=n.pal;for(let n of t.route.gates){if(n.x<-20||n.x>t.dev.W+20)continue;let{gx:i,top:a,bot:o}=cb(n);So(e,i+12,a,3,o-a,V(r,`M1`)),So(e,i+15,a+1,1,o-a-1,V(r,`C1`)),So(e,i+11,o+1,6,3,V(r,`M1`)),z(e,i+12,o+6,V(r,`M1`)),z(e,i+15,o+8,V(r,`M2`))}}function ub(e,t,n){if(!Db(t))return;let r=n.pal,i=Eb(t);for(let n of t.route.gates){if(n.x<-20||n.x>t.dev.W+20)continue;let{gx:a,gy:o,h:s,top:c,bot:l}=cb(n),u=i.gateIdx.get(n)??0,d=n.flash,f=d<2/60?.75:d<4/60?.5:d<6/60?.25:0,p=V(r,u%2?`K7`:`P4`);for(let t=o-s;t<=o+s;t++){let n=Math.max(f,t>o+s/3?.5:.25);for(let r=a+5;r<=a+11;r++)H(r,t,n,a,0)&&z(e,r,t,p)}let m=3+u%3,h=Math.max(1,2*s);for(let n=0;n<m;n++){let i=o+s-Math.floor(t.wt*6+wo(u,n)*h)%h;z(e,a+6+(n*2+u)%5,i,V(r,n%2?`W0`:`P5`))}let g=a+2,_=a+13.5,v=(g+_)/2,y=(_-g)/2;for(let t=a;t<=a+15;t++){let n=J((t+.5-v)/(y+1),-1,1),i=c-wb(5*Math.sqrt(1-n*n));for(let n=0;n<3;n++)z(e,t,i+n,V(r,n===0?`M3`:n===1?`M2`:`N1`))}So(e,wb(v)-1,c-7,3,3,V(r,`M3`)),z(e,wb(v),c-6,V(r,`W1`));for(let t=c;t<l;t++)for(let n=a;n<=a+4;n++){let i=n===a||t===c?`M3`:t>=l-6?`P2`:(n+t)%3==0?`N1`:`M2`;z(e,n,t,V(r,i))}So(e,a-1,l+1,6,3,V(r,`M2`)),So(e,a-1,l+1,6,1,V(r,`M3`)),z(e,a+1,l+6,V(r,`M2`)),z(e,a+4,l+8,V(r,`N1`))}}function db(e,t,n){if(!Db(t))return;let r=Eb(t);for(let i of t.route.ruins){let t=Wb(i.kind,r.ruinTurn+i.kind*3);if(!t)continue;let{w:a,h:o}=pt(t),s=Math.sin(i.t*1.3+i.kind)>.4?-1:0;No(e,t,wb(i.x-a/2)+(t.ox??0),wb(i.y-o/2)+s+(t.oy??0),n.pal)}}function fb(e,t,n){if(!Db(t))return;let r=n.pal,i=t.stepT,a=t.sd;for(let n=0;n<a.n;n++){let o=wb(a.x[n]);if(o<-6||o>t.dev.W+6)continue;let s=wb(a.y[n])+(Math.sin(i*2.2+a.ph[n]*6.28)>.6?-1:0);if(a.pull[n]===1||a.pull[n]===3){let t=a.vx[n],i=a.vy[n],c=Math.hypot(t,i);c>20&&Ro(e,{x:o,y:s},{x:o-t/c*5,y:s-i/c*5},r)}Lo(e,o,s,i,a.ph[n],a.big[n]===1,r)}let o=t.he;for(let n=0;n<o.n;n++){let a=o.x[n]<t.p.x?(o.x[n]+10)/Math.max(1,t.V):99;zo(e,wb(o.x[n]),wb(o.y[n]),i,o.ph[n],a,r)}let s=K.coreGift;for(let n of t.gifts){let t=n.phase===`fly`?n.t/s.fly:1,a=wb(n.x),o=wb(n.y);t<.45?Bo(e,a,o,i,!0,!1,r):t<.7?(Bo(e,a,o,i,!0,!1,r,t<.58?.75:.25),Bo(e,a,o,i,!1,!1,r,t<.58?.25:.75)):Bo(e,a,o,i,!1,n.phase===`hold`,r)}}function pb(e,t,n){let r=t.de;for(let i=0;i<r.n;i++){let a=r.age[i]/Math.max(1e-6,r.life[i]),o=Is((1-a)**1.35*1.15);o<=0||Xi(e,`dreamer.fly`,1,wb(r.x[i]),wb(r.y[i]),{t:t.wt,decoy:!0,pal:n.pn,cover:o})}}function mb(e,t,n,r){let i=n.pal,a=zg(t,`spatial`);for(let n of t.shields)n.behind!==r&&Cs(e,n,i,a);if(zg(t,`procedural`))for(let n=0;n<K.fusion.procedural.n;n++){let a=Rb(t,n);Math.sin(a.a)<0!==r&&No(e,jc(Math.floor(t.wt*8+n*3)%8),wb(a.x),wb(a.y),i)}if(t.run.ultT>0&&Bb(t,`3d`))for(let n of Vb(t))n.behind!==r&&No(e,Ac(n.turn),wb(n.x),wb(n.y),i);let o=t.run.cores,s=Ub(t);for(let n=0;n<o;n++){let a=t.stepT*2.2+n/Math.max(1,o)*Tb;Math.sin(a)<0!==r&&Bo(e,wb(s.x+Math.cos(a)*7),wb(s.y+Math.sin(a)*7*.6),t.stepT,!0,!1,i)}}function hb(e,t,n,r,i,a,o=1,s=1,c=null,l=2){if(t=wb(t),n=wb(n),r<.5)return;let u=Math.ceil((r+1)*s),d=Math.ceil(r+1),f=r+.5,p=r+.5-l,m=(s,u,d)=>{let f=r+.5-Math.hypot(s,d);if(f<0||f>=l||!H(t+s,n+u,o,t,n))return;let p=f<1?c??i:a;p&&(e.fillStyle=p,e.fillRect(t+s,n+u,1,1))};for(let e=-u;e<=u;e++){let t=e/s,n=f*f-t*t;if(n<0)continue;let r=Math.min(d,Math.floor(Math.sqrt(n))+1),i=p>0?p*p-t*t:-1,a=i>0?Math.floor(Math.sqrt(i))-1:-1;if(a<0)for(let n=-r;n<=r;n++)m(n,e,t);else{for(let n=-r;n<=-a-1;n++)m(n,e,t);for(let n=a+1;n<=r;n++)m(n,e,t)}}}function gb(e,t,n,r,i,a,o,s,c=1){if(i<=0||i>=1)return;let l=1-(1-Math.min(1,i/.7))**3,u=2+(r-2)*l,d=i<.7?1:i<.8?.75:i<.9?.5:.25;hb(e,t,n,u,V(s,a),V(s,o),d,c,null,i<.45?2:1)}function _b(e,t,n,r,i,a=160){if(r<0||r>.9)return;let o=r/.9,s=2+(a-2)*(1-(1-o)**2.2),c=r<.6?1:r<.7?.75:r<.8?.5:.25;hb(e,t,n,s,V(i,`D4`),V(i,`P4`),c,1,r<.3?V(i,`W0`):null)}function vb(e,t,n){if(!Db(t))return;let r=Eb(t),i=n.pal,a=t.p,o=t.run.PS.area;for(let t of r.pulses){if(t.delay>0)continue;let n=t.t/t.dur,r=wb(t.x),a=wb(t.y);switch(t.look){case`ruin`:gb(e,r,a,t.rmax,n,`K7`,`P4`,i);break;case`slow`:gb(e,r,a,t.rmax,n,`C1`,`V2`,i);break;case`shock`:gb(e,r,a,t.rmax,n,n<.5?`R5`:`P5`,n<.5?`P5`:`R5`,i);break;case`odRing`:gb(e,r,a,t.rmax,n,`B1`,`W1`,i);break;case`odOpen`:_b(e,r,a,t.t,i,t.rmax);break;case`oct`:Ts(e,r,a,t.rmax,n,i,t.seed);break;case`fuse`:gb(e,r,a,t.rmax,n,`C1`,`Y2`,i)}}if(Rg(t,`design`)&&t.run.wpn.design>=4&&ps(e,a.x,a.y,t.run.orbA,o,i),zg(t,`reaper`)){let n=K.fusion.reaper;for(let r=0;r<n.blades;r++)ws(e,a.x,a.y,Fb(t,r),n.r*o,n.w*o,i)}for(let n of t.strokes)n.kind===`seek`?Es(e,n.path,n.age,i,n.dur):n.kind===`od`?js(e,n.path,n.age,n.A,i):fs(e,n.path,n.age,n.draw,n.dur,i,n.seed);let s=t.sh;for(let n=0;n<s.n;n++){let r=s.text[n]===255?_c:gc[s.text[n]%gc.length],a=s.kind[n]===Sg.odToken&&t.run.ultSing;hs(e,r,s.x[n],s.y[n],s.vx[n],s.vy[n],s.age[n],i,a?`P4`:`G0`,a?`P2`:`G2`)}for(let t of r.chains)gs(e,t.x0,t.y0,t.x1,t.y1,t.seed,i);if(t.run.ultSing&&(t.run.ultT>0||r.singFold>=0&&r.singFold<.7)){let n=r.singFold<0?-1:Math.min(1,r.singFold/K.ult.sing.at);Ns(e,r.singX,r.singY,t.wt,n,i,K.ult.sing.rings[0])}}function yb(e,t){let n=e.run;for(;n.level<t;){n.level++,n.xp=0,n.need=Math.round(K.needA+K.needB*n.level+K.needC*n.level*n.level);let t=Uy(e);t[0]&&qy(e,t[0]),Vy(e)}}function bb(e,t){e.run.ult=Math.max(0,Math.min(K.ult.max,t))}function xb(e,t){for(let n in t)n in e.run.wpn?e.run.wpn[n]=J(t[n],0,5):n in e.run.pas?e.run.pas[n]=J(t[n],0,5):n===`cores`&&(e.run.cores=t[n]);Vy(e)}function Sb(e,t){let n=gg.find(e=>e.id===t);!n||e.run.fused.includes(t)||(e.run.spent[n.a]=e.run.spent[n.b]=!0,e.run.fused.push(t),e.run.wcd[t]=.3)}function Cb(e,t,n=0){let r=e.L;for(let i=0;i<t;i++){let t=e.p.x+40+e.rng()*Math.max(10,e.dev.W-e.p.x-50),i=r.top+10+e.rng()*(r.h-20);mx(e,n|0,t,i)}}var wb,Tb,Eb,Db,Ob,kb,Ab,jb,Mb,Nb,Pb,Fb,Ib,Lb,Rb,zb,Bb,Vb,Hb,Ub,Wb,Gb,Kb=o(()=>{Bg(),ou(),ey(),GS(),XC(),Pc(),xo(),Rv(),Ot(),wb=Math.round,Tb=Math.PI*2,Eb=e=>e.priv.skills,Db=e=>!!(e.priv.skills&&e.priv.skills.pulses),Ob={algorithmic:`Seeking Curves`,spline:`Slow Wave`,reaper:`Twin Blades`,automation:`Auto Pulse`,procedural:`Turrets`,spatial:`Shock Orbit`},kb=[`token`,`seekToken`,`autoToken`,`turretShot`,`odToken`],Ab=(e,t)=>{let n=e.en;return n.hp[t]>0&&n.spawn[t]>=.5&&n.passed[t]<0&&n.burn[t]<0},jb=(e,t,n,r,i={})=>vx(e,t,n,r,i),Mb=(e,t)=>{let n=ru(`dreamer.cast`,Zi(t,!0));return{x:e.p.x+n.x,y:e.p.y+n.y}},Nb=e=>{let t=Gl(`dreamer.spread`,0),n=t[0],r=t[t.length-1];return[{x:e.p.x+n.x,y:e.p.y+n.y},{x:e.p.x+r.x,y:e.p.y+r.y}]},Pb=[1,2,2,4,3],Fb=(e,t)=>e.run.orbA*K.fusion.reaper.spd+t*Math.PI+K.fusion.reaper.arc,Ib=e=>e.kind===`od`?.54:e.dur+.15,Lb=e=>e.kind===`od`?.46:e.dur,Rb=(e,t)=>{let n=K.fusion.procedural,r=e.run.PS.area,i=e.run.orbA*n.spd+t/n.n*Tb;return{x:e.p.x+Math.cos(i)*n.rx*r,y:e.p.y+Math.sin(i)*n.ry*r,a:i}},zb=e=>mg.reduce((t,n)=>t+(e.run.spent[n]?5:e.run.wpn[n]),0),Bb=(e,t)=>e.run.wpn[t]>0||e.run.spent[t],Vb=e=>{let t=K.ult.cubes,n=e.run.PS.area,r=[];for(let i=0;i<t.n;i++){let a=e.run.orbA*t.spd+i/t.n*Tb,o=Math.sin(a);r.push({x:e.p.x+Math.cos(a)*t.rx*n,y:e.p.y+o*t.ry*n,behind:o<0,turn:Math.floor(e.wt*10+i*2)%8})}return r},Hb=e=>({x:e.dev.W/2,y:e.L.hudT+K.coreGift.giftDy}),Ub=e=>({x:e.p.x-3,y:e.p.y-7}),Wb=(e,t)=>{let n=Lv;return e===0?n.stairsM?.[t%8]??null:e===1?n.columnM?.[1]??null:e===2?n.archM??null:n.slab?.[2]??n.slab?.[0]??null},Gb={pulse:gb,odOpen:_b}});function qb(e){return Jb||=URL.createObjectURL(new Blob([`(()=>{var uu=Object.defineProperty;var Bt=(t,n)=>()=>(t&&(n=t(t=0)),n);var Dr=(t,n)=>{for(var e in n)uu(t,e,{get:n[e],enumerable:!0})};function yo(t,n){let e=gn[t];if(!e)return t;let o=Me[e],s=o.indexOf(t);return o[Math.max(0,Math.min(o.length-1,s+n))]}function wo(t){let n={};for(let e of Oe)n[e]=nt[t(e)]??nt[e];return n}function go(t){let n={};for(let e of Oe){let o=Tr(nt[e]),s=Tr(nt[Yr[e]]);n[e]=t>=4?nt[Yr[e]]:bu(o.map((r,a)=>r+(s[a]-r)*t/4))}return n}var nt,Oe,Me,gn,Tn,lu,mu,hu,da,Tr,fu,xo,Yr,bu,qt,Vn=Bt(()=>{nt={K0:"#05061A",K1:"#0A0C2C",K2:"#11153F",K3:"#191F5A",K4:"#222D7E",K5:"#3142B4",K6:"#4A5BD8",K7:"#8A8ED9",K8:"#C4B2FF",K9:"#F7F0FF",M0:"#120C34",M1:"#221A58",M2:"#342C80",M3:"#5A4CC8",V2:"#9C86FF",P0:"#24103C",P1:"#4E1B66",P2:"#9A2D8E",P3:"#FF4FA3",P4:"#FF9AD0",P5:"#FFE4F3",H0:"#B8205E",D1:"#0D2894",D2:"#1E5BE6",D3:"#1BA2E8",D4:"#5CE8CF",W0:"#FFFFFF",W1:"#DCEBFF",W2:"#A6F4FF",C1:"#7DF9FF",L0:"#CFF5E7",B1:"#8FB0FF",G0:"#46FFA6",G2:"#14A56C",G1:"#36FF9C",R5:"#FFB866",X0:"#FF4FD2",FU4:"#9DFFCB",FU5:"#C6FF8F",T0:"#5A5170",T1:"#A49CC8",N0:"#07050C",N1:"#16112C",N2:"#2C2558",E0:"#FF2A4A",E1:"#FF7D93",S1:"#2A030A",S2:"#5C0612",S3:"#9A0A10",S4:"#CC2E1C",S5:"#F06A3C",S6:"#FFD9B8",Y0:"#7A5418",Y1:"#C99634",Y2:"#FFE39A",Q0:"#DDD0F2",Q1:"#EBE0FA",A0:"#C7B28A",A1:"#EDE3CC",BI:"#211710",BR:"#8A2A20",AWP:"#ECEBE6",IC0:"#9FB2BC"},Oe=Object.keys(nt),Me={K:["K0","K1","K2","K3","K4","K5","K6","K7","K8","K9","W0"],M:["K0","M0","M1","M2","M3","V2","K8"],P:["K0","P0","P1","P2","H0","P3","P4","P5","W0"],D:["K0","D1","D2","D3","D4","W0"],rim:["D3","C1","W0"],N:["N0","N1","N2","M3"],E:["S2","E0","E1","P5"],S:["N0","S1","S2","S3","S4","S5","S6","W0"],Y:["Y0","Y1","Y2","W0"],code:["G2","G0","W0"],od:["G1","W0"],motion:["K6","B1","W1","W0"],design:["D3","W2","W1","W0"],"3d":["Y1","R5","Y2","W0"],fusion:["P2","X0","P4","W0"],ice:["M3","IC0","W2","W0"],paperA:["A0","A1","W0"],paperQ:["Q0","Q1","K9","W0"],lucid:["D4","L0","W0"],pulse:["G0","FU4","W0"],turret:["G0","FU5","W0"],text:["N2","T0","T1","K8","W0"]},gn={};for(let t of Me.K)gn[t]="K";for(let t of["M0","M1","M2","M3","V2"])gn[t]="M";for(let t of["P0","P1","P2","P3","P4","P5","H0"])gn[t]="P";for(let t of["D1","D2","D3","D4"])gn[t]="D";Object.assign(gn,{C1:"rim",N0:"N",N1:"N",N2:"N",E0:"E",E1:"E",S1:"S",S2:"S",S3:"S",S4:"S",S5:"S",S6:"S",Y0:"Y",Y1:"Y",Y2:"Y",G2:"code",G0:"code",G1:"od",B1:"motion",W1:"motion",W2:"design",R5:"3d",X0:"fusion",IC0:"ice",A0:"paperA",A1:"paperA",Q0:"paperQ",Q1:"paperQ",L0:"lucid",FU4:"pulse",FU5:"turret",T0:"text",T1:"text"});Tn=(t,n)=>wo(e=>!n||n.includes(gn[e])?yo(e,t):e),lu={K0:"N0",K1:"N0",K2:"S1",K3:"S1",K4:"S2",K5:"S3",K6:"S3",K7:"S4",K8:"S5",K9:"S6",M0:"N0",M1:"S1",M2:"S2",M3:"S4",V2:"S5",P0:"S1",P1:"S2",P2:"S3",H0:"S3",P3:"S4",P4:"P4",P5:"S6"},mu={M3:"E1",K7:"P4"},hu={N0:"K2",N1:"K6",N2:"B1"},da=Me.S,Tr=t=>[1,3,5].map(n=>parseInt(t.slice(n,n+2),16)),fu=t=>(t/=255)<=.04045?t/12.92:((t+.055)/1.055)**2.4,xo=t=>{let[n,e,o]=Tr(t).map(fu),s=.2126*n+.7152*e+.0722*o;return s>.008856?116*Math.cbrt(s)-16:903.3*s},Yr={};for(let t of Oe){let n=da[0];for(let e of da)Math.abs(xo(nt[e])-xo(nt[t]))<Math.abs(xo(nt[n])-xo(nt[t]))&&(n=e);Yr[t]=n}bu=t=>"#"+t.map(n=>Math.round(n).toString(16).padStart(2,"0")).join("").toUpperCase();qt={base:{...nt},plus1:Tn(1),plus2:Tn(2),minus1:Tn(-1),minus2:Tn(-2),dim:Tn(-2),lightning1:Tn(1),lightning2:Tn(2),overdrive:Tn(1,["K","S","D","rim"]),storm:wo(t=>lu[t]??t),stormMatter:wo(t=>mu[t]??t),slowed:wo(t=>hu[t]??t),drain1:go(1),drain2:go(2),drain3:go(3),drain4:go(4)}});var xa={};Dr(xa,{FINE:()=>Pt,bake:()=>xe,blit:()=>du,ditherOn:()=>V,ditherRect:()=>Mu,drawText:()=>dt,fineK:()=>ko,fineLayer:()=>Gr,fineMatch:()=>Fr,inFine:()=>Jn,setFineLayer:()=>xu,sizeOf:()=>Co,textWidth:()=>Ct,toFine:()=>gu});function Co(t){let n=t.rows.length,e=0;for(let o of t.rows)e=Math.max(e,o.length);return{w:t.w??e,h:t.h??n}}function xe(t,n,e="base"){let o=pa.get(t);o||pa.set(t,o=new Map);let s=o.get(e);if(s)return s;let{w:r,h:a}=Co(t),i=document.createElement("canvas");i.width=Math.max(1,r),i.height=Math.max(1,a);let u=i.getContext("2d"),c=u.createImageData(i.width,i.height),l={};for(let m in t.key){let h=t.key[m],f=h?n[h]:"";if(h&&!f)throw new Error(\`palette has no colour "\${h}" (key "\${m}")\`);l[m]=f?[parseInt(f.slice(1,3),16),parseInt(f.slice(3,5),16),parseInt(f.slice(5,7),16)]:null}for(let m=0;m<a;m++){let h=t.rows[m]||"";for(let f=0;f<r;f++){let b=h[f]??".";if(b==="."||b===" ")continue;let d=l[b];if(d===void 0)throw new Error(\`sprite key has no "\${b}" (row \${m})\`);if(!d)continue;let p=(m*r+f)*4;c.data[p]=d[0],c.data[p+1]=d[1],c.data[p+2]=d[2],c.data[p+3]=255}}return u.putImageData(c,0,0),o.set(e,i),i}function du(t,n,e,o,s,r=!1,a="base"){let i=xe(n,e,a),u=Math.round(o-(n.ox??0)),c=Math.round(s-(n.oy??0));if(!r)return t.drawImage(i,u,c);t.save(),t.translate(u+i.width,c),t.scale(-1,1),t.drawImage(i,0,0),t.restore()}function Mu(t,n,e,o,s,r,a,i){a&&(t.fillStyle=a,t.fillRect(n,e,o,s)),t.fillStyle=r;for(let u=e;u<e+s;u++)for(let c=n;c<n+o;c++)V(c,u,i)&&t.fillRect(c,u,1,1)}function Ct(t,n){let e=0;for(let o of n){if(o===" "){e+=t.space+t.gap;continue}let s=t.glyphs[o]||t.glyphs[o.toUpperCase()]||t.glyphs["?"];e+=(s?Math.max(...s.map(r=>r.length)):t.space)+t.gap}return Math.max(0,e-t.gap)}function dt(t,n,e,o,s,r,a="left"){let i=Math.round(a==="left"?o:a==="center"?o-Ct(n,e)/2:o-Ct(n,e)),u=Math.round(s);t.fillStyle=r;for(let c of e){if(c===" "){i+=n.space+n.gap;continue}let l=n.glyphs[c]||n.glyphs[c.toUpperCase()]||n.glyphs["?"];if(!l){i+=n.space+n.gap;continue}let m=0;l.forEach((h,f)=>{m=Math.max(m,h.length);for(let b=0;b<h.length;b++)h[b]!=="."&&h[b]!==" "&&t.fillRect(i+b,u+f,1,1)}),i+=m+n.gap}return i-o}function xu(t,n){if(!n)return void Ar.delete(t);n.imageSmoothingEnabled=!1,Ar.set(t,n)}function Fr(t,n,e=Pt){let o=t.getTransform();n.setTransform(o.a*e,o.b*e,o.c*e,o.d*e,o.e*e,o.f*e),n.imageSmoothingEnabled=!1}function gu(t,n,e,o=Pt){let s=t.getTransform();return[Math.round((s.a*n+s.c*e+s.e)*o),Math.round((s.b*n+s.d*e+s.f)*o)]}function Jn(t,n,e,o){let s=t.getTransform();t.save(),t.setTransform(1,0,0,1,Math.round(s.a*n+s.c*e+s.e),Math.round(s.b*n+s.d*e+s.f));try{return o()}finally{t.restore()}}function ko(t,n,e,o=Pt){if(n<=0)return;if(n>=1)return e(t);let s=t.canvas.width,r=t.canvas.height,a=Ma[Po]||(Ma[Po]=document.createElement("canvas"));(a.width!==s||a.height!==r)&&(a.width=s,a.height=r);let i=a.getContext("2d",{willReadFrequently:!0});i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,s,r),i.setTransform(t.getTransform()),i.imageSmoothingEnabled=!1,Po++;try{e(i)}finally{Po--}i.setTransform(1,0,0,1,0,0);let u=i.getImageData(0,0,s,r),c=u.data;for(let l=0;l<r;l++)for(let m=0;m<s;m++){let h=(l*s+m)*4+3;c[h]&&!V(Math.floor(m/o),Math.floor(l/o),n)&&(c[h]=0)}i.putImageData(u,0,0),t.save(),t.setTransform(1,0,0,1,0,0),t.drawImage(a,0,0),t.restore()}var pa,pu,V,Pt,Ar,Gr,Ma,Po,nn=Bt(()=>{pa=new WeakMap;pu=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],V=(t,n,e)=>(pu[(n&3)*4+(t&3)]+.5)/16<e;Pt=2,Ar=new WeakMap;Gr=t=>Ar.get(t)??null;Ma=[],Po=0});function mt(t,n,e,o){e>=0&&e<t.length&&n>=0&&n<Et(t)&&(t[e][n]=o)}function Ut(t,n,e){let o=e??Math.max(...t.map(s=>s.length));return t.map((s,r)=>{if(s.length!==o)throw new Error(\`row \${r} is \${s.length} wide, not \${o}: "\${s}"\`);return[...s].map(a=>{if(a===".")return null;let i=n[a];if(i===void 0)throw new Error(\`no key for "\${a}"\`);return i||null})})}function Do(t,n=0,e=0){let o={},s={},r=0;return{rows:t.map(i=>i.map(u=>{if(!u)return".";let c=s[u];return c||(c=wu[r++],s[u]=c,o[c]=u),c}).join("")),key:o,ox:n,oy:e}}function Pn(t,n,e,o=0,s=0){let r=e.length/2,a=1/0,i=-1/0;for(let u=0;u<r;u++)a=Math.min(a,e[2*u+1]+s),i=Math.max(i,e[2*u+1]+s);for(let u=Math.max(0,Math.floor(a));u<=Math.min(t.length-1,Math.ceil(i));u++){let c=u+.5,l=[];for(let m=0;m<r;m++){let h=e[2*m]+o,f=e[2*m+1]+s,b=e[2*((m+1)%r)]+o,d=e[2*((m+1)%r)+1]+s;(f<=c&&d>c||d<=c&&f>c)&&l.push(h+(c-f)/(d-f)*(b-h))}l.sort((m,h)=>m-h);for(let m=0;m+1<l.length;m+=2)for(let h=Math.ceil(l[m]-.5);h<Math.ceil(l[m+1]-.5);h++)mt(t,h,u,n)}}function ga(t,n,e,o,s,r){let a=Math.abs(o-n),i=-Math.abs(s-e),u=n<o?1:-1,c=e<s?1:-1,l=a+i;for(;mt(t,n,e,r),!(n===o&&e===s);){let m=2*l;m>=i&&(l+=i,n+=u),m<=a&&(l+=a,e+=c)}}function Ke(t,n,e=0,o=0){for(let s=0;s<n.length;s+=3)mt(t,n[s]+e,n[s+1]+o,n[s+2])}function zn(t,n,e=0,o=0){for(let s=0;s<n.length;s++)for(let r=0;r<n[s].length;r++)n[s][r]&&mt(t,r+e,s+o,n[s][r])}function ge(t,n,e,o,s=999){let r=Pe(t);for(let a=n;a<=e;a++){for(let i=0;i<t.length;i++)i<=s&&(r[i][a]=null);for(let i=0;i<t.length;i++)i<=s&&t[i][a]&&mt(r,a,i+o,t[i][a])}return r}function ya(t,n){let e=Math.floor(t),o=Math.floor(n),s=t-e,r=n-o,a=s*s*(3-2*s),i=r*r*(3-2*r),u=(o&63)<<6,c=(o+1&63)<<6,l=Ro[u|e&63],m=Ro[u|e+1&63],h=Ro[c|e&63],f=Ro[c|e+1&63];return l+(m-l)*a+(h-l)*i+(l-m-h+f)*a*i}function Lr(t){return t.map(n=>n.map(e=>e==="a"||e==="h"?null:e))}function Le(t,n,e={}){let o=D=>D*Math.PI/180,s=e.L1??7,r=e.L2??6,a=e.arm??"a",i=e.hand??"h",u=e.finger??a,c=n*(e.bend??.45),[l,m]=e.from??ku,h=[Math.cos(o(c)),Math.sin(o(c))],f=[Math.cos(o(n)),Math.sin(o(n))],b=l+h[0]*s,d=m+h[1]*s,p=b+f[0]*r,M=d+f[1]*r,x=[],y=(D,L,O)=>{let K=Mt(t,D,L);(!K||K==="g")&&(mt(t,D,L,O),O===a&&x.push([D,L]))},k=(D,L,O,K,N,$,j)=>{let W=O-D,H=K-L,Z=Math.hypot(W,H)||1;if(Math.abs(H)<=Math.abs(W)){let B=Math.ceil(Math.min(D,O)-.5),_=Math.ceil(Math.max(D,O)-.5)-1;for(let U=B;U<=_;U++){let X=(U+.5-D)/W,q=Math.round(L+H*X-1),ot=N+X*Z;y(U,q,a),ot<$&&y(U,q+1,a),ot<j&&y(U,q+2,a)}}else{let B=Math.ceil(Math.min(L,K)-.5),_=Math.ceil(Math.max(L,K)-.5)-1,U=H>0;for(let X=B;X<=_;X++){let q=(X+.5-L)/H,ot=Math.round(D+W*q-1),bt=N+q*Z;y(U?ot+1:ot,X,a),bt<$&&y(U?ot:ot+1,X,a),bt<j&&y(U?ot-1:ot+2,X,a)}}};k(l,m,b+h[0]*.5,d+h[1]*.5,0,99,1.5),k(b,d,p,M,s,s+r-1.5,0);let w=[f[1],-f[0]],g=(D,L)=>{let O=Mt(t,D,L);return!O||O==="g"},R=D=>(D[0]+.5-l)*f[0]+(D[1]+.5-m)*f[1],C=D=>(D[0]+.5-l)*w[0]+(D[1]+.5-m)*w[1],P=(D,L)=>!g(D,L);for(let D=0;D<6;D++){let L=t.length,O=Et(t),K=new Int32Array(O*L).fill(-1),N=[];for(let H=0;H<L;H++)for(let Z=0;Z<O;Z++){if(!P(Z,H)||K[H*O+Z]>=0)continue;let B=N.length,_=[Z,H],U=0;for(K[H*O+Z]=B;_.length;){let X=_.pop(),q=_.pop();U++;for(let[ot,bt]of[[1,0],[-1,0],[0,1],[0,-1]]){let St=q+ot,lt=X+bt;P(St,lt)&&K[lt*O+St]<0&&(K[lt*O+St]=B,_.push(St,lt))}}N.push(U)}let $=N.indexOf(Math.max(...N)),j=(H,Z)=>[[1,0],[-1,0],[0,1],[0,-1]].some(([B,_])=>Mt(t,H+B,Z+_)==="k"),W=null;for(let H of x.slice().sort((Z,B)=>R(Z)-R(B)))if(K[H[1]*O+H[0]]!==$){for(let[Z,B]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let _=H[0]+Z,U=H[1]+B;if(_<0||U<0||_>=O||U>=L||K[U*O+_]!==$)continue;let X=[[_,H[1]],[H[0],U]].filter(q=>g(q[0],q[1]));X.sort((q,ot)=>(j(q[0],q[1])?-9:0)+C(ot)-((j(ot[0],ot[1])?-9:0)+C(q))),X.length&&(W=X[0]);break}if(W)break}if(!W)break;mt(t,W[0],W[1],a),x.push([W[0],W[1]])}let S=x[0]??[Math.round(p),Math.round(M)];for(let D of x)(R(D)>R(S)+1e-6||Math.abs(R(D)-R(S))<=1e-6&&C(D)>C(S))&&(S=D);let E=[[-1,0],[-1,1],[2,0],[2,1],[0,-1],[1,-1],[0,2],[1,2]],I=[S[0]+.5+f[0]*1.5+w[0]*.5,S[1]+.5+f[1]*1.5+w[1]*.5],v=0,Y=0,G=1/0;for(let[D,L]of E){let O=S[0]-D,K=S[1]-L;if(!(g(O,K)&&g(O+1,K)&&g(O,K+1)&&g(O+1,K+1)))continue;let N=Math.hypot(O+1-I[0],K+1-I[1]);N<G&&([G,v,Y]=[N,O,K])}for(let D=0;D<2;D++)for(let L=0;L<2;L++)mt(t,v+L,Y+D,i);let F=Math.round(Math.max(-90,Math.min(90,n-(e.cock??(n>45?15:45))))/45)*45,T={"-90":[[0,-1],[1,-1],[1,-2]],"-45":[[1,-1],[2,-1],[2,-2],[3,-2]],0:[[2,0],[3,0],[2,1]],45:[[1,2],[2,2],[2,3],[3,3]],90:[[0,2],[1,2],[1,3]]};for(let[D,L]of T[String(F)])y(v+D,Y+L,u);return e.glow&&va(t,v,Y),{wrist:[p,M],palm:[v,Y]}}function va(t,n,e){for(let o=-1;o<=2;o++)for(let s=-1;s<=2;s++){if(s>=0&&s<2&&o>=0&&o<2)continue;!((s===-1||s===2)&&(o===-1||o===2))&&!Mt(t,n+s,e+o)&&mt(t,n+s,e+o,"g")}}function ln(t,n,e,o,s,r=999){let a=Pe(t);for(let i=n;i<=e;i++)for(let u=0;u<t.length;u++)u<=r&&t[u][i]&&s.includes(t[u][i])&&(a[u][i]=null);for(let i=n;i<=e;i++)for(let u=0;u<t.length;u++){let c=t[u][i];u>r||!c||!s.includes(c)||mt(a,i,u+o,c)}return a}function Ru(){let t=Pa(yu),n=[t,ln(t,qn[0],7,-1,["f"]),t,ln(t,qn[0],5,1,["m"])],e=ln(t,qn[0],11,1,["f"]);e=ln(e,qn[0],6,1,["f"]),e=ln(e,Or[0],13,-1,["m"]);for(let m=19;m<=34;m++){let h=Be-1;for(;h>0&&e[h][m]!=="m";)h--;h>12+_r&&mt(e,m,h,null)}let o=ln(e,qn[0],4,1,["m"]),s=ge(t,qn[0],8,2);s=ge(s,10,14,1),s=ln(s,we[0],we[1],-1,["k"]),s=Lr(s),Le(s,-26,{bend:.25,L1:7,L2:5.5});let r=ln(s,qn[0],5,-1,["f"]),a=(m,h)=>h>0?ge(m,Cu+2,mn-1,-h):m,i=m=>ge(a(ge(t,32,mn-1,-m),m),Or[0],13,m),u=[];for(let m of[-60,-30,0,30,60])for(let h of[0,1]){if(m===0){let d=Pe(t),p=$r(d,"h");h&&p&&va(d,p[0],p[1]),u.push(d);continue}let f=Lr(t),b=m<0?-1:m>0?1:0;b&&(f=ln(f,we[0],we[1],b,["k"])),Le(f,m===0?-6:m,{L1:7,L2:h?7:6,glow:!!h}),u.push(f)}let c=Pa(Ia(["........................................","..................................kkk...","..ffff...........................kkkkk..","..ffffff.........................kkkkk..",".....ffffffff....................kkkkk..","........fffffff.................mmkkk...","..........fffffff...........mmmmmm......","............fffffmmm.....mmmmmmmm.......","...............ffmmmmmmmmmmmwwmmm.......","..............mmmmmmmmmmmmmmwwmmm.......",".........mmmmmmmmmmmmmmmmmmmmmmm........","......mmmmmmmmmmmmmmmmmmmmmmmmmm........",".mmmmmmmmmmmmm..........................",".mmmmmm.................................",".m......................................"]));Le(c,30,{from:[34,11+Zn],bend:.5,L1:7,L2:5.5,arm:"f",hand:"q",finger:"f"}),Le(c,-36,{from:[35,8+Zn],bend:.55,L1:7,L2:5.5});let l=ge(t,Or[0],13,-1);return l=ln(l,we[0],we[1],1,["k"]),l=Lr(l),Le(l,34,{bend:.2,L1:7,L2:5.5,cock:0}),{fly:n,fast:[e,o],slow:[s,r],up:[i(1)],down:[i(-1)],cast:u,spread:[c],hurt:[l,l,l,l]}}function $r(t,n){for(let e=0;e<t.length;e++)for(let o=0;o<Et(t);o++)if(t[e][o]===n)return[o,e];return null}function Yo(t,n,e,o={}){let s=t.length,r=Et(t),a=(R,C)=>Mt(t,R,C),i=(R,C)=>{let P=a(R,C);return!!P&&P!=="g"},u=Math.floor(n*(o.od?12:6))/6,c=$r(t,"w")||Hr,l=c[0]+.5,m=c[1]+.5,h=o.od?1:0,f=o.hurt?"E1":"C1",b=99,d=-1,p=99,M=-1;for(let R=0;R<s;R++)for(let C=0;C<r;C++)a(C,R)==="k"&&(b=Math.min(b,C),d=Math.max(d,C),p=Math.min(p,R),M=Math.max(M,R));let x=Math.floor(u*6*.7+e*7.3),y=(R,C)=>((R+Math.round(.6*C)+x)%7+7)%7<2,k=(R,C)=>{let P=0;for(;i(R,C-P-1)&&a(R,C-P-1)!=="k";)P++;return P},w=(R,C)=>{let P=0;for(;i(R,C+P+1)&&a(R,C+P+1)!=="k";)P++;return P},g=en(r,s);for(let R=0;R<s;R++)for(let C=0;C<r;C++){let P=a(C,R);if(!P)continue;if(P==="g"){g[R][C]=C+R&1?"D4":"C1";continue}if(P==="w"||P==="h"){g[R][C]="W0";continue}if(P==="q"){g[R][C]="C1";continue}let S=!i(C,R-1),E=!i(C,R+1),I=!i(C+1,R),v=!i(C-1,R);if(P==="k"){let K=(W,H)=>{let Z=a(C+W,R+H);return Z==="a"||Z==="h"};if(K(1,0)||K(0,1)||K(-1,0)||K(0,-1)||K(1,1)){g[R][C]="D1";continue}let N=d-C,$=R-p,j="D3";N<=1&&$<=1&&(S||I)?j=N===0&&$<=1&&!(N===0&&$===0&&v)&&o.glint!==!1?"W0":"C1":S||I?j="C1":E||v?j=v&&E?"D1":"D2":N<=2&&$<=2&&(j="D4"),h&&j==="D3"&&(j="D4"),o.hurt&&j==="C1"&&(j="E1"),g[R][C]=j;continue}let Y=k(C,R),G=w(C,R),F=Y+G+1;if(P==="f"){let K=Y===0?3:G===0?1:Y<=G?2:1;Y>0&&y(C,R)&&(K=Math.min(3,K+1)),g[R][C]=Kr[Math.min(4,K-1+h)];continue}let T=C>=19,D;Y===0?D=T||P==="a"?5:3:G===0&&F>=3?D=0:D=Y/Math.max(1,F-1)<=.5?2:1,D>0&&D<5&&Y>0&&y(C,R)&&(D=Math.min(3,D+1)),I&&T&&D>0&&(D=5),Math.hypot(C+.5-l,(R+.5-m)*1.25)<2.4&&D<5&&(D=3),o.cast&&Math.hypot(C-o.cast[0],R-o.cast[1])<3.2&&D<5&&(D=Math.max(D,3)),D<5&&(D=Math.min(4,D+h));let O=D===5?f:D===0?"D1":Kr[D];v&&!S&&D>=2&&D<5&&(O=Kr[D-1]),g[R][C]=O}return g}function Xr(t){let n=t.map(a=>a.slice()),e=t.length,o=Et(t),s=(a,i)=>!!Mt(t,a,i),r=new Uint8Array(o*e);for(let a=0;a<e;a++)for(let i=0;i<o;i++){if(s(i,a)||!(s(i-1,a)||s(i+1,a)||s(i,a-1)||s(i,a+1))||s(i,a-1)&&s(i,a+1))continue;r[a*o+i]=1;let c=s(i,a+1)||s(i-1,a),l=i>=34&&i<=41&&a<=5+_r;n[a][i]=l&&!(i+a&1)?"C1":c&&i>=12?"K5":"K4"}return n}function Da(t,n,e){let o=Xr(Yo(fn.fly[0],n,e)),s=en(mn,Be),[r,a]=Hr,i=[0,3,7,7,6,4,0,0][t];for(let c=a-i;c<=a+i;c++)mt(s,r,c,Math.abs(c-a)<=1?"W0":"C1");t===0&&mt(s,r,a,"W0");let u=[0,0,0,6,12,19,27,99][t];if(u>0)for(let c=0;c<Be;c++)for(let l=0;l<mn;l++){let m=o[c][l];if(!m)continue;let h=Math.hypot((l-r)*.8,(c-a)*1.6),f=h<u-4?1:h<u?.5:h<u+3?.25:0;V(l,c,f)&&(s[c][l]=m)}return s}function Ta(t,n,e){let s=en(mn,Be+12),r=Yo(fn.hurt[0],n,e);if(t<=1)for(let a=0;a<Be;a++)for(let i=0;i<mn;i++){let u=r[a][i];u&&(t===0||V(i,a,.5))&&(s[a+12][i]=t===0?"W0":u)}if(t>=1){let a=["D1","D2","D3","D4","W0","C1"];for(let i=0;i<14;i++){let u=4+Math.round((i*11+3)%36*1.34),c=18+_r+i*5%4,l=(To(i*3.1)-.5)*1.6,m=-.9-To(i*1.7)*1.2,h=t-1,f=Math.round(u+l*h),b=Math.round(c+m*h+.04*h*h),d=h<4?1:h<6?.75:h<7?.5:h<8?.25:0,p=a[i%a.length],M=i%3===0?1:2;for(let x=0;x<M;x++)for(let y=0;y<M;y++)V(f+y,b+x,d)&&mt(s,f+y,b+x,p)}}return s}function ye(t,n,e,o,s,r,a,i,u){let c=Ut(t,Su),l=Et(c)+u*2,m=en(l,c.length+u*2),h=[0,-1,0,0][s%4];zn(m,c,u,u+h);let f=s%e.length;e.forEach(([b,d],p)=>mt(m,b+u,d+u+h,p===f?"E1":"E0")),zn(m,r,n[0]+a[0]+u,n[1]+a[1]+u+h);for(let[b,d,p]of o){let M=Math.round(Math.sin(i*2.1+p*2.7)*1.2),x=Math.round(Math.sin(i*1.3+p)*.6);zn(m,Eu,b+u+x,d+u+M-1)}return m}function Ca(t,n,e){let o=n.p.map(r=>[r[0],r[1]]);if(e){let[r,a]=[o[2],o[3]],i=Math.hypot(a[0]-r[0],a[1]-r[1])||1;o[3]=[a[0]-(a[0]-r[0])/i*1.3,a[1]-(a[1]-r[1])/i*1.3],o[2]=[o[2][0]-(o[2][0]-o[1][0])/6,o[2][1]-(o[2][1]-o[1][1])/6]}let s=n.lit??1;for(let r=0;r<3;r++){let[a,i]=o[r],[u,c]=o[r+1],l=u-a,m=c-i,h=Math.hypot(l,m)||1,f=m/h*s,b=-l/h*s,d=r<2?l/h*.4:l/h*.7,p=r<2?m/h*.4:m/h*.7;u+=d,c+=p;let M=n.w[r],x=n.w[r+1]*(r===2?.75:1);Pn(t,Iu[r],[a+f*M,i+b*M,u+f*x,c+b*x,u,c,a,i]),Pn(t,vu[r],[u,c,a,i,a-f*M,i-b*M,u-f*x,c-b*x])}}function Ya(t,n,e){let o=en(t.w,t.h);for(let[a,i]of t.palm)Pn(o,a,i);Ca(o,t.thumb,!1),t.fingers.forEach((a,i)=>Ca(o,a,i===n));for(let[a,i]of t.wrist)Pn(o,a,i);for(let a of t.bits)Pn(o,"N1",a,0,e);let s=Pe(o),r=s.map(a=>a.reduce((i,u,c)=>u?c:i,-1));for(let a=0;a<t.h;a++)for(let i=0;i<t.w;i++){let u=s[a][i];u&&(!Mt(s,i,a-1)&&(Nr.includes(u)||u==="M3")?o[a][i]=u==="M3"?"V2":"M3":!Mt(s,i-1,a)&&Nr.includes(u)?o[a][i]="M3":i===r[a]&&a<=t.rimRightMaxY&&u!=="M3"?o[a][i]="K7":!Mt(s,i,a+1)&&Nr.includes(u)&&a>t.h*.6&&(o[a][i]="P2"))}if(Ke(o,t.touch),t.split.forEach(([a,i],u)=>mt(o,a,i,u%5===2?"E1":"E0")),t.heart){let[a,i]=t.heart;for(let u=-1;u<=1;u++)for(let c=-1;c<=1;c++)(c===0||u===0)&&mt(o,a+c,i+u,"E0");mt(o,a,i,"E1");for(let[u,c]of[[a-1,i-1],[a+1,i-1],[a-1,i+1],[a+1,i+1],[a-2,i],[a+2,i]])Mt(o,u,c)&&Mt(o,u,c)!=="E0"&&mt(o,u,c,"H0")}return o}function Ou(t){let n=en(36,36),e={},o={};for(let[i,u,c]of Yu){e[i]=u,o[i]=c;for(let l=u;l<=c;l++)i>=So(l)&&mt(n,l,i,"N1")}let s=(i,u)=>!!Mt(n,i,u),r=i=>31-(i-11)*2/11;for(let i=0;i<36;i++)for(let u=0;u<36;u++){if(!s(u,i))continue;let c=u-e[i],l="N1";i<=So(u)+2&&u>=13&&u<=28&&(l="N2"),i<=22&&(l=c<=2||c<=5&&i<=14?"M3":c<=7&&i<=14||c===3?"N2":l),i===15&&(l=c===1?"V2":c<=9?"M3":l),i===16&&(l=c<=1?"M3":c<=10?"N0":l),i===23&&c<=2&&(l="N0"),i===24&&c<=3&&(l="M3"),i===25&&c<=3&&(l=c===0?"N2":"N0"),i===26&&c<=3&&(l="M3"),i===27&&c<=2&&(l=c===0?"M3":"N1"),i>=28&&i<=30&&c<=3&&(l=i===30?"N2":"M3"),u>=o[i]-4&&(l="N0"),i>r(u)&&u>=11&&(l="N0"),mt(n,u,i,l)}Pn(n,"N2",[10.5,18,20,18,18,22,14,25.5,11.5,24]),ga(n,11,18,18,18,"M3"),Pn(n,"N1",[11.5,24,14,25.5,18,22,22,26,21,28.5,13,30.5]),ga(n,11,31,22,29,"N0"),Pn(n,"N0",[23,16,27.5,16,28,24,24.5,24.5]),Pn(n,"N1",[24,17,27,17,27.2,23,25,23.5]),Ke(n,[24,16,"N2",25,16,"M3",26,16,"N2",25,18,"N2",25,19,"N2",25,20,"N2"]);let a=Pe(n);for(let i=0;i<36;i++)for(let u=0;u<36;u++){let c=a[i][u];c&&(!Mt(a,u-1,i)&&i>=10&&i<=29?n[i][u]=c==="V2"?"V2":"M3":!Mt(a,u+1,i)&&i>=12&&i<=27?n[i][u]="K7":!Mt(a,u,i+1)&&i>=29&&i<=33&&(n[i][u]="P2"))}Ke(n,[5,22,"V2",6,21,"V2",9,28,"V2"]),Ke(n,[10,17,"E1",11,17,"E0",14,17,"E0",15,17,"E1",16,17,"E0"]);for(let i=8;i<=33;i++){let u=So(i);s(i,u)&&mt(n,i,u,(i+t*3)%9===0?"E1":"E0"),s(i,u+1)&&So(i-1)<u-1&&s(i-1,u-1)&&mt(n,i-1,u,"E0")}return Ke(n,[22,13,"E0",22,14,"E1",23,15,"E0",23,16,"E0",24,16,"N0"]),n}function Fa(t,n,e){let o=en(36,36),s=Ou(t),r=Ut(Au,Gu);n%2&&mt(r,2,3,"Y2"),n===1&&mt(r,1,2,"W0"),n===3&&mt(r,3,1,"W0");let a=6+Math.round(Math.sin(e*2.2));zn(o,r,18,a),zn(o,s);for(let i of[18,19,20,21,22]){let u=Aa[i-8];Mt(o,i,u)&&mt(o,i,u,i===20?"Y2":"E1")}return Ga.forEach(([i,u],c)=>{let l=Math.round(Math.sin(e*4.5*(.31+c*.05)+c*2.1)*1.4),m=Math.round(Math.sin(e*4.5*(.23+c*.04)+c)*.8);zn(o,Fu[c],i+m,u+l)}),o}function Ku(t,n,e,o,s,r,a,i){let u=t-e,c=n-o,l=s-e,m=r-o,h=Math.max(0,Math.min(1,(u*l+c*m)/(l*l+m*m)));return Math.hypot(u-l*h,c-m*h)-(a+(i-a)*h)}function wn(t,n,e,o,s,r,a,i){let u=i,c=new Float64Array(26);for(let d=0;d<=12;d++){let p=d/12,M=1-p;c[2*d]=M*M*t+2*M*p*e+p*p*s,c[2*d+1]=M*M*n+2*M*p*o+p*p*r}let l=1/0,m=-1/0,h=1/0,f=-1/0;for(let d=0;d<=12;d++)l=Math.min(l,c[2*d]),m=Math.max(m,c[2*d]),h=Math.min(h,c[2*d+1]),f=Math.max(f,c[2*d+1]);u*=.6;let b=Math.max(a,u);return{pts:c,w0:a,w1:u,x0:l-b,x1:m+b,y0:h-b,y1:f+b}}function Nu(t,n,e){let o=1e3,s=t.pts;for(let r=1;r<=12;r++){let a=s[2*r-2],i=s[2*r-1],u=s[2*r]-a,c=s[2*r+1]-i,l=n-a,m=e-i,h=Math.max(0,Math.min(1,(l*u+m*c)/(u*u+c*c))),f=(r-1+h)/12;o=Math.min(o,Math.hypot(l-u*h,m-c*h)-(t.w0+(t.w1-t.w0)*Math.pow(f,.8)))}return o}function Br(t,n){return[{k:0,f:(e,o)=>La(e,o,t[0],t[1],.064*n,.05*n)},{k:.018*n,f:(e,o)=>{let s=Math.abs(e-t[0]),r=o-t[1]-.026*n;s-=.034*n;let a=.94*s+-.34*r,i=.34*s+.94*r;return(Math.hypot(a/(.05*n),i/(.022*n))-1)*.022*n}}]}function Wr(t){let n=Oa[t],e=[],o=(r,a,i,u,c)=>({k:c,f:(l,m)=>La(l,m,r,a,i,u),box:[r-i,r+i,a-u,a+u]}),s=(r,a,i,u,c,l,m)=>({k:m,f:(h,f)=>Ku(h,f,r,a,i,u,c,l),box:[Math.min(r,i)-c,Math.max(r,i)+c,Math.min(a,u)-c,Math.max(a,u)+c]});if(t===0){e.push(...Br(n,.9)),e.push(o(n[0],n[1]-.045,.1,.05,.03)),e.push(o(n[0],n[1]-.12,.095,.085,.035));for(let r=0;r<4;r++){let a=n[0],i=n[1]-.075-r*.04;e.push(s(a-.05-r*.006,i,a-.085-r*.01,i+.03,.012,0,.01))}for(let r=0;r<8;r++){let a=r<4?-1:1,i=r<4?r:r-4,u=Eo(r*91.7)-.5,c=Eo(r*37.1+3)-.5,l=[n[0]+a*(.05+.02*i),n[1]-.06-.02*i],m=[n[0]+a*(.24+.16*i+u*.05),n[1]+.13-.045*i+c*.035],h=[n[0]+a*(.4+.33*i+c*.08),-.03],f=[l[0]+(m[0]-l[0])*.35,m[1]+.012],b=[m[0]+a*(.05+.03*i),m[1]+(h[1]-m[1])*.35],d=(i<.5?1.1:1-i*.1)*(.9+u*.3);e.push(yn(wn(l[0],l[1],f[0],f[1],m[0],m[1],.024*d,.012*d),.016)),e.push(o(m[0],m[1],.016*d,.014*d,.012)),e.push(yn(wn(m[0],m[1],b[0],b[1],h[0],h[1],.012*d,.0022),.008))}}else if(t===1){e.push(...Br(n,1.05)),e.push(o(n[0],n[1]+.03,.21,.1,.05)),e.push(o(n[0],n[1]+.085,.15,.07,.05)),e.push(o(n[0],n[1]-.06,.15,.09,.05));for(let r=0;r<5;r++){let a=r-2,i=n[0]+a*.055,u=n[1]+.14-Math.abs(a)*.02;e.push(s(i,u,i+a*.012,u+.035-Math.abs(a)*.004,.016,0,.012))}for(let r=0;r<6;r++){let a=r<3?-1:1,i=r<3?r:r-3,u=Eo(r*61.7)-.5,c=Eo(r*27.1+5)-.5,l=[n[0]+a*(.12+.03*i),n[1]-.02-.03*i],m=[n[0]+a*(.3+.17*i+u*.05),n[1]+.1-.05*i+c*.03],h=[n[0]+a*(.36+.27*i+c*.06),-.03],f=[l[0]+(m[0]-l[0])*.4,m[1]+.02],b=[m[0]+a*.03,m[1]+(h[1]-m[1])*.4],d=(1-i*.12)*(.92+u*.2);e.push(yn(wn(l[0],l[1],f[0],f[1],m[0],m[1],.038*d,.02*d),.022)),e.push(o(m[0],m[1],.024*d,.02*d,.014)),e.push(yn(wn(m[0],m[1],b[0],b[1],h[0],h[1],.02*d,.004),.01))}for(let r=0;r<12;r++){let a=r%2<.5?-1:1,i=Ka(Math.sin(r*13.7)*1735.3),u=[n[0]+a*(.06+i*.16),n[1]-.07-i*.04],c=r<6?[n[0]+a*(.25+i*.34),n[1]+.03-i*.08]:[u[0]+a*(.02+i*.06),u[1]-.13-i*.11],l=[(u[0]+c[0])*.5,(u[1]+c[1])*.5-.07-i*.08];e.push(yn(wn(u[0],u[1],l[0],l[1],c[0],c[1],.0095,r<6?.008:.002),.008))}}else{e.push(...Br(n,1)),e.push(o(n[0],n[1]-.06,.17,.055,.035)),e.push(o(n[0],n[1]-.15,.1,.11,.05)),e.push(o(n[0],n[1]-.26,.075,.08,.05));for(let r=0;r<2;r++){let a=r===0?-1:1,i=[n[0]+a*.15,n[1]-.05],u=[n[0]+a*.38,n[1]+.05],c=[n[0]+a*.5,n[1]+.3];e.push(yn(wn(i[0],i[1],n[0]+a*.28,n[1]-.03,u[0],u[1],.034,.022),.03)),e.push(o(u[0],u[1],.024,.022,.015)),e.push(yn(wn(u[0],u[1],n[0]+a*.47,n[1]+.14,c[0],c[1],.022,.012),.015));for(let l=0;l<4;l++){let m=[c[0]+a*(-.06+l*.045),c[1]+.07+.02*Math.sin(l*2)];e.push(s(c[0],c[1],m[0],m[1],.01,.0015,.008))}}for(let r=0;r<4;r++){let a=r<2?-1:1,i=r<2?r:r-2,u=[n[0]+a*(.04+.03*i),n[1]-.3],c=[n[0]+a*(.22+.2*i),n[1]-.14-.03*i],l=[n[0]+a*(.34+.38*i),-.03];e.push(yn(wn(u[0],u[1],(u[0]+c[0])*.5,c[1]+.02,c[0],c[1],.03,.018),.02)),e.push(yn(wn(c[0],c[1],c[0]+a*.04,c[1]+(l[1]-c[1])*.4,l[0],l[1],.018,.003),.01))}}return e}function Wu(t,n,e,o){if(t===0&&o>0){let a=Math.abs(n),i=Math.max(0,Math.min(1,(a-.25)/.75));n/=1+o*.2*i*i*(3-2*i)}let s=Bu[t],r=s[0].f(n,e);for(let a=1;a<s.length;a++){let i=s[a];if(i.box){let u=Math.max(i.box[0]-n,0,n-i.box[1]),c=Math.max(i.box[2]-e,0,e-i.box[3]);if(Math.hypot(u,c)-r>=i.k+1e-4&&Math.hypot(u,c)>0)continue}r=i.k>0?Lu(r,i.f(n,e),i.k):Math.min(r,i.f(n,e))}return r}function Na(t,n,e){let o=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];for(let s=0;s<2;s++){let r=[];for(let a=1;a<e-1;a++)for(let i=1;i<n-1;i++){let u=t[a*n+i];if(u<0||u>.9)continue;let c=0;for(let l=0;l<8;l++){let[m,h]=o[l],[f,b]=o[(l+7)%8];t[(a+h)*n+i+m]<0&&!(t[(a+b)*n+i+f]<0)&&c++}c>=2&&r.push(a*n+i)}for(let a of r)t[a]=-.01}for(let s=0;s<2;s++){let r=[],a=[];for(let i=1;i<e-1;i++)for(let u=1;u<n-1;u++){let c=i*n+u,l=(t[c-1]<0?1:0)+(t[c+1]<0?1:0)+(t[c-n]<0?1:0)+(t[c+n]<0?1:0);if(t[c]>=0&&l>=3)r.push(c);else if(t[c]<0&&t[c]>-.6&&l===1){let m=t[c-1]<0?c-1:t[c+1]<0?c+1:t[c-n]<0?c-n:c+n;(t[m-1]<0?1:0)+(t[m+1]<0?1:0)+(t[m-n]<0?1:0)+(t[m+n]<0?1:0)>=3&&a.push(c)}}for(let i of r)t[i]=-.01;for(let i of a)t[i]=.01}}function Ce(t,n,e=0){let o=\`\${t}:\${n}:\${e}\`,s=ka.get(o);if(s)return s;let r=Math.ceil(2.9*n),a=Math.ceil(.72*n),i=new Float32Array(r*a);for(let f=0;f<a;f++){let b=.64-(f+.5)/n;for(let d=0;d<r;d++){let p=-1.45+(d+.5)/n;i[f*r+d]=Wu(t,p,b,e)*n}}let u=i.slice();Na(i,r,a);let c=new Int16Array(r).fill(-1);for(let f=0;f<r;f++)for(let b=a-1;b>=0;b--)if(i[b*r+f]<0){c[f]=b;break}let l=Oa[t],m=0;for(let f=0;f<r;f++)m=Math.max(m,c[f]);let h={kind:t,sigma:n,w:r,h:a,hx:Math.round((l[0]+1.45)*n),hy:Math.round((.64-l[1])*n),foot:m,sd:i,raw:u,bottom:c};return ka.set(o,h),h}function Ba(t,n,e,o,s,r){let a=Math.round(.11*o),i=Math.floor(s*8)/8,u=r.phase2?1:0,c=["S4","S5","S6","W0"],l=a+6,m=((r.clock??Math.floor(s*(r.phase2?4:1))/60%1)+1)%1;for(let p=-l;p<=l;p++)for(let M=-l;M<=l;M++){let x=Math.hypot(M,p),k=(Math.atan2(M,-p)/(2*Math.PI)+1)%1,w=2+Math.floor(3*ya(k*24+3.7,i*3.1)),g=Math.floor(4.5*Math.max(0,ya(k*40+11.3,i*5.3)-.35)/.65),R=a-w/2,C=a+w/2,P=null;x>=R&&x<C?P=c[Math.min(3,(x<a?0:1)+u)]:x>=C&&x<C+g&&V(M+n,p+e,.75-(x-C)/(g+1)*.5)?P=c[Math.min(3,2+u)]:x<R&&k<m&&V(M+n,p+e,.25)&&(P="S3"),P&&t(n+M,e+p,P)}for(let p=0;p<12;p++){let M=p/12*Math.PI*2,x=Math.round(n+Math.sin(M)*(a+4)),y=Math.round(e-Math.cos(M)*(a+4)),k=Math.sin(s*2.4+p*1.7)>-.2;for(let[w,g]of[[-1,-1],[0,-1],[-1,0],[0,0]])t(x+w,y+g,k?"S6":"P5")}let h=m*Math.PI*2,f=a-2;for(let p=3;p<=f;p++)t(Math.round(n+Math.sin(h)*p),Math.round(e-Math.cos(h)*p),"S6");let b=Math.round(n+Math.sin(h)*f),d=Math.round(e-Math.cos(h)*f);for(let p=-1;p<=1;p++)for(let M=-1;M<=1;M++)t(b+M,d+p,M||p?"S6":"W0")}function Wa(t,n,e,o,s,r){if(s<=0)return;let a=Math.round(.034*o),i=e+1,u=r>.5?5:3,c=s<.4?1:r>.5?3:2;for(let l of[-1,1]){let m=n+l*a-Math.floor(u/2),h=i-Math.floor(c/2);for(let f=-1;f<=c;f++)for(let b=-1;b<=u;b++){let d=b>=0&&f>=0&&b<u&&f<c,p=m+b,M=h+f;d?t(p,M,(b===0||b===u-1)&&u>1?"P5":"W0"):V(p,M,.5)&&!((b===-1||b===u)&&(f===-1||f===c))&&t(p,M,"E1")}}}function _a(t,n){let{w:e,h:o,raw:s}=t,r=o+4,a=new Float32Array(e*r);for(let i=0;i<e;i++){let u=n[i];for(let c=0;c<r;c++){let l=c-2-u,m=Math.floor(l),h=l-m,f=m>=0&&m<o?s[m*e+i]:9,b=m+1>=0&&m+1<o?s[(m+1)*e+i]:9;a[c*e+i]=f+(b-f)*h}}return Na(a,e,r),a}function Ha(t,n,e,o,s){let r=t.w,a=t.h+4,i=new Array(r*a).fill(null),u=(f,b)=>f>=0&&b>=0&&f<r&&b<a&&n[b*r+f]<0,c=new Uint8Array(r*a),l=t.foot+2,m=t.hy+2;for(let f=0;f<a;f++)for(let b=0;b<r;b++){if(!u(b,f)||u(b,f-1)&&u(b-1,f)&&u(b+1,f)&&u(b,f+1))continue;let d=n[f*r+Math.min(r-1,b+1)]-n[f*r+Math.max(0,b-1)],p=n[Math.min(a-1,f+1)*r+b]-n[Math.max(0,f-1)*r+b],M=Math.hypot(d,p)||1,x=d/M,y=p/M,k=y<-.35,w=Math.abs(x)>.5&&Math.sign(x)===Math.sign(b-t.hx)&&y<.3;if(!(k||w))continue;let g=b-(x>.4?1:x<-.4?-1:0),R=f-(y>.4?1:y<-.4?-1:0);if(u(g,R))c[f*r+b]=1;else{let C=b+(x>.4?1:x<-.4?-1:0),P=f+(y>.4?1:y<-.4?-1:0);C>=0&&P>=0&&C<r&&P<a&&!u(C,P)&&(c[P*r+C]=2)}}let h=Math.hypot(Math.max(t.hx,r-t.hx),Math.max(m,a-m));for(let f=0;f<a;f++)for(let b=0;b<r;b++){let d=n[f*r+b],p=b,M=f,x=null;if(d<0){let k=-d;x=k>6&&V(p,M,k>12?.5:.25)?"S1":"N0",c[f*r+b]?x=e?"W1":"S4":e&&k<=3&&(x="K8");let w=l-f,g=Math.max(4,Math.min(16,Math.round(.08*t.sigma)));if(w<g){let R=w/g;V(p,M,R<.3?0:R<.55?.25:R<.8?.5:.75)||(x=null)}}else if(c[f*r+b]===2&&l-f>6)x=e?"W1":"S4";else if(d<2.5){let k=(w,g)=>w>=0&&g>=0&&w<r&&g<a&&c[g*r+w]>0;(k(b,f+1)||k(b-1,f)||k(b+1,f)||k(b,f-1))&&V(p,M,.25)&&l-f>10&&(x="S3")}if(!x)continue;let y=Math.hypot(b-t.hx,f-m);if(o<1){let k=(o*(h+10)-y)/10;if(!V(p,M,k))continue}if(s>0){let k=s*(h+6);if(y<k-2)continue;y<k&&(x=y<k-1?"S6":"S5")}i[M*r+p]=x}return i}function _u(t,n,e,o,s,r){let a=Ha(t,e,o,s,r),i=t.w,u=t.h+4,c=document.createElement("canvas");c.width=i,c.height=u;let l=c.getContext("2d"),m=l.createImageData(i,u),h={};for(let f=0;f<a.length;f++){let b=a[f];if(!b)continue;let d=h[b]||(h[b]=[1,3,5].map(p=>parseInt(n[b].slice(p,p+2),16)));m.data[f*4]=d[0],m.data[f*4+1]=d[1],m.data[f*4+2]=d[2],m.data[f*4+3]=255}return l.putImageData(m,0,0),c}function $a(t,n,e,o,s,r={}){let a=r.t??0,i=r.pal&&qt[r.pal]||nt,u=r.grow??0,c=Ce(n,s,u),{w:l,h:m,sd:h}=c,f=Math.round(e)-c.hx,b=Math.round(o)-c.hy,d=r.ceil??-1e9,p=(C,P,S)=>{P<d||P<d+6&&!V(C,P,(P-d+1)/7)||(t.fillStyle=i[S],t.fillRect(C,P,1,1))};n===2&&r.corona!==!1&&Ba(p,Math.round(e),Math.round(o),s,a,r);let M=Math.floor(a*6)/6,x=new Float32Array(l);for(let C=0;C<l;C++){let P=-1.45+(C+.5)/s;x[C]=Math.round(Math.sin(.13*M+3.1*P)*.006*Math.abs(P)*s*4)/4}let y=r.reveal??1,k=r.die??0,w=y>=1&&k<=0,g=\`\${n}:\${s}:\${u}:\${r.pal||"base"}:\${r.struck?1:0}:\${M}\`,R=w?Io.get(g):void 0;if(R||(R=_u(c,i,_a(c,x),!!r.struck,y,k),w&&(Io.size>48&&Io.clear(),Io.set(g,R))),r.ceil!=null&&b-2<r.ceil+6){let C=document.createElement("canvas");C.width=R.width,C.height=R.height;let P=C.getContext("2d");P.drawImage(R,0,0);let S=P.getImageData(0,0,C.width,C.height);for(let E=0;E<C.height;E++){let I=b-2+E;if(I>=r.ceil+6)break;for(let v=0;v<C.width;v++)(I<r.ceil||!V(f+v,I,(I-r.ceil+1)/7))&&(S.data[(E*C.width+v)*4+3]=0)}P.putImageData(S,0,0),t.drawImage(C,f,b-2)}else t.drawImage(R,f,b-2);k<.35&&Wa(p,Math.round(e),Math.round(o),s,r.eyes??1,r.gaze??0)}function Yt(t,n,e,o,s){We[t]=n,Yn[t]={fps:e,ox:o,oy:s,w:Et(n[0]),h:n[0].length}}function Hu(t,n,e){let o=Yn[t];if(t.startsWith("dreamer.")&&t!=="dreamer.land"&&t!=="dreamer.death"){let s=t==="dreamer.cast"?$r(n,"h"):null,r=Yo(n,e/8,0,{cast:s,hurt:t==="dreamer.hurt"&&e>=2?1:0,glint:t!=="dreamer.spread"});return t==="dreamer.hurt"&&e<2?r=r.map(a=>a.map(i=>i?"W0":null)):r=Xr(r),Do(r,o.ox,o.oy)}return Do(n,o.ox,o.oy)}function $u(t,n=0,e=3,o=380){let s=t.map(m=>Ut(m.rows,m.key)),r=Math.max(...s.map(m=>m.length)),a=[[]],i=0;for(let m of s)i>0&&i+e+Et(m)>o&&(a.push([]),i=0),i+=(i>0?e:0)+Et(m),a[a.length-1].push(m);let u=a.map(m=>m.reduce((h,f)=>h+Et(f),0)+e*(m.length-1)),c=Math.max(n,...u),l=en(c,a.length*(r+e)-e);return a.forEach((m,h)=>{let f=0;for(let b of m)zn(l,b,f,h*(r+e)+r-b.length),f+=Et(b)+e}),Do(l)}function ns(t,n){let e=Ce(t,n),o=Ha(e,_a(e,new Float32Array(e.w)),!1,1,0),s=en(e.w,e.h+4),r=(a,i,u)=>mt(s,a,i,u);t===2&&Ba(r,e.hx,e.hy+2,n,.4,{clock:.12});for(let a=0;a<o.length;a++)o[a]&&(s[Math.floor(a/e.w)][a%e.w]=o[a]);return Wa(r,e.hx,e.hy+2,n,1,0),Do(s,e.hx,e.hy+2)}function Xu(t,n,e,o,s){if(t.startsWith("glitch.")||t.startsWith("bug.")){let r=t.startsWith("glitch."),a=s.look?Math.round(Math.max(-1,Math.min(1,s.look[0]))):0,i=s.look?Math.round(Math.max(-1,Math.min(1,s.look[1]))):0,u=t.endsWith(".blink")?n+1:s.blink??0,c=t.endsWith(".blink")?0:r?n:n*2+1,l=e+o*3.7,m=\`\${t}:\${c}:\${u}:\${a},\${i}:\`;for(let[,,h]of r?Ao:Go)m+=\`\${Math.round(Math.sin(l*1.3+h)*.6)},\${Math.round(Math.sin(l*2.1+h*2.7)*1.2)};\`;return m}if(t==="elite.idle"){let r=e+o*7.1,a=\`e\${n}:\${Math.floor(e*8)%4}:\${Math.round(Math.sin(r*2.2))}:\`;return Ga.forEach((i,u)=>a+=\`\${Math.round(Math.sin(r*4.5*(.23+u*.04)+u)*.8)},\${Math.round(Math.sin(r*4.5*(.31+u*.05)+u*2.1)*1.4)};\`),a}return null}function Sa(t,n,e){if(e){let u=Ne.get(e);if(u)return u}let o=t.length,s=Et(t),r=document.createElement("canvas");r.width=Math.max(1,s),r.height=Math.max(1,o);let a=r.getContext("2d"),i=a.createImageData(r.width,r.height);for(let u=0;u<o;u++)for(let c=0;c<s;c++){let l=t[u][c];if(!l)continue;let m=n[l],h=Ra.get(m);h||Ra.set(m,h=[parseInt(m.slice(1,3),16),parseInt(m.slice(3,5),16),parseInt(m.slice(5,7),16)]);let f=(u*s+c)*4;i.data[f]=h[0],i.data[f+1]=h[1],i.data[f+2]=h[2],i.data[f+3]=255}return a.putImageData(i,0,0),e&&(Ne.size>600&&Ne.clear(),Ne.set(e,r)),r}function ju(t,n){let e=Pe(t);for(let o=0;o<t.length;o++)for(let s=0;s<Et(t);s++){let r=t[o][s];if(!r)continue;if(n>=2){e[o][s]="W0";continue}let a=!Mt(t,s-1,o)||!Mt(t,s+1,o)||!Mt(t,s,o-1)||!Mt(t,s,o+1);e[o][s]=a?"W0":r==="N0"?"N1":r==="N1"?"N2":r==="N2"?"M3":r}return e}function Uu(t,n){let e=t.length,o=Et(t),s=en(o+4,e+4),r=(i,u)=>!!Mt(t,i,u),a=(i,u,c)=>{for(let l=-c;l<=c;l++)for(let m=-c;m<=c;m++)if(Math.abs(m)+Math.abs(l)<=c&&r(i+m,u+l))return!0;return!1};for(let i=-2;i<e+2;i++)for(let u=-2;u<o+2;u++)r(u,i)||(a(u,i,1)?V(u,i,.5)&&(s[i+2][u+2]="D4"):a(u,i,2)&&n>.5&&V(u,i,.25)&&(s[i+2][u+2]="W0"));return s}function Vu(t){let n=t.length,e=Et(t),o=en(e+vo,n),s=(r,a)=>!!Mt(t,r,a);for(let[r,a]of[[8,.25],[4,.5]])for(let i=0;i<n;i++)for(let u=0;u<e;u++){if(!s(u,i))continue;let c=!s(u,i-1)||!s(u+1,i)&&u>=16,l=u+vo-r;c&&V(l,i,a)&&(o[i][l]="K6")}for(let r=0;r<n;r++)for(let a=0;a<e;a++){let i=t[r][a];if(!i)continue;let u=a+vo,c=!s(a,r-1),l=!s(a,r+1),m=!s(a+1,r)||!s(a-1,r),h;i==="W0"||c?h="B1":l||m||i==="D4"||i==="C1"?h="K6":i==="D3"?h=V(u,r,.5)?"K6":null:h=V(u,r,.25)?"K6":null,o[r][u]=h}return o}function Ju(t){for(let n=0;n<t.length;n++)for(let e=0;e<Et(t);e++)if(t[n][e]==="h")return[e,n];return null}function He(t,n,e,o,s,r={}){let a=We[n];if(!a)return;let i=Yn[n],u=(e%a.length+a.length)%a.length,c=r.t??0,l=r.phase??0,m=r.pal||"base",h=qt[m]||nt,f,b=null,d=0,p=r.cache?Xu(n,u,c,l,r):null;if(p){let P=\`\${m}:\${p}\`;r.flash&&(P+=\`:fl\${r.flash}\`),r.tint&&(P+=\`:t\${r.tint}\`),(r.cover??1)<1&&(P+=\`:c\${Math.round((r.cover??1)*4)/4}\`),r.flip&&(P+=":fx");let S=Ne.get(P);if(S){let E=S.width,I=S.height,v=Math.round(o-(r.flip?E-1-i.ox:i.ox)),Y=Math.round(s-i.oy);if(r.clipY!==void 0){let G=Math.max(0,Math.min(I,Math.round(r.clipY)-Y));G>0&&t.drawImage(S,0,0,E,G,v,Y,E,G)}else t.drawImage(S,v,Y);return}}let M=n.startsWith("dreamer.");if(M&&n!=="dreamer.land"&&n!=="dreamer.death"){let P=n==="dreamer.cast"?Ju(a[u]):null;f=Yo(a[u],c,l,{od:r.od,cast:P,hurt:r.hurt?1:0,glint:n!=="dreamer.spread"}),r.decoy?(f=Vu(f),d=vo):f=Xr(f)}else if(n==="dreamer.land")f=Da(u,c,l);else if(n==="dreamer.death")f=Ta(u,c,l);else if(n.startsWith("glitch.")||n.startsWith("bug.")){let P=n.startsWith("glitch."),S=r.look?[Math.round(Math.max(-1,Math.min(1,r.look[0]))),Math.round(Math.max(-1,Math.min(1,r.look[1])))]:[0,0],E=n.endsWith(".blink")?u+1:r.blink??0,I=E===1?Qr:E===2?ts:Zr,v=n.endsWith(".blink")?0:P?u:u*2+1;f=P?ye(jr,Ur,Vr,Ao,v,I,S,c+l*3.7,hn):ye(Jr,qr,zr,Go,v,I,S,c+l*3.7,hn),b=p}else n==="elite.idle"?(f=Fa(u,Math.floor(c*8)%4,c+l*7.1),b=p):(f=a[u],b=\`\${n}:\${u}\`);if(r.flash&&(f=ju(f,r.flash),b=b&&\`\${b}:fl\${r.flash}\`),r.tint){let P=r.tint;f=f.map(S=>S.map(E=>E?P:null)),b=b&&\`\${b}:t\${P}\`}let x=!!r.flip,y=Et(f),k=f.length,w=Math.round(o-(x?y-1-i.ox-d:i.ox+d)),g=Math.round(s-i.oy);if(r.od&&M){let P=Uu(f,Math.sin(c*Math.PI*3)>0?1:0);t.drawImage(Sa(x?wa(P):P,h,null),w-2,g-2)}let R=r.cover??1;if(R<1){let P=Math.round(R*4)/4;f=f.map((S,E)=>S.map((I,v)=>I&&V(v,E,P)?I:null)),b=b&&\`\${b}:c\${P}\`}x&&(f=wa(f),b=b&&\`\${b}:fx\`);let C=Sa(f,h,b&&\`\${m}:\${b}\`);if(r.clipY!==void 0){let P=Math.max(0,Math.min(k,Math.round(r.clipY)-g));P>0&&t.drawImage(C,0,0,y,P,w,g,y,P);return}t.drawImage(C,w,g)}function Ua(t,n){return Math.max(0,Math.min(4,Math.round((t+60)/30)))*2+(n?1:0)}function Va(t,n,e=0,o="base"){let s=qt[o]||nt;if(n.length<2)return;let r=2*n[0][0]-n[1][0],a=2*n[0][1]-n[1][1],i=Math.min(n.length,20);for(let[u,c,l]of qu){let m=[],h=Math.round(r+u),f=Math.round(a+c);for(let d=0;d<Math.min(i,c<-4?6:8);d++){let p=Math.round(n[d][0]+u),M=Math.round(n[d][1]+c);for(;h!==p||f!==M;){let x=Math.abs(p-h),y=Math.abs(M-f);x>=y*2||y===0?h+=Math.sign(p-h):(y>=x*2||x===0||(h+=Math.sign(p-h)),f+=Math.sign(M-f)),m.push([h,f])}}let b=m.length;m.forEach(([d,p],M)=>{let x=M/Math.max(1,b-1),y=x<.35?1:x<.55?.75:x<.75?.5:.25;V(d,p,y)&&(t.fillStyle=s[l[Math.min(l.length-1,Math.floor(x*l.length))]],t.fillRect(d,p,1,1))});for(let d=c<-4?i:9;d<i;d+=2){let p=Math.round((To(e+d*1.37+c)-.5)*2.4),M=Math.round((To(e+d*2.71+u)-.5)*2.4),x=Math.round(n[d][0]+u)+p,y=Math.round(n[d][1]+c)+M,k=d<13?1:d<17?.5:.25;V(x,y,k)&&(t.fillStyle=s[d%4===1?"C1":"D4"],t.fillRect(x,y,1,1))}}}var en,Et,Pe,Mt,wu,wa,Ro,To,mn,Zn,Ea,Be,_r,Hr,Ia,yu,Pu,Pa,qn,Or,we,Cu,ku,fn,Kr,Nr,jr,Su,Ur,Vr,Ao,Jr,qr,zr,Go,Zr,Qr,ts,Eu,Iu,vu,Du,Tu,Yu,Aa,So,Au,Gu,Fu,Ga,Oa,Lu,La,Ka,Eo,yn,Bu,ka,Io,Yn,We,hn,bn,dn,Xa,ja,_e,Fo,Ne,Ra,lh,vo,qu,Oo=Bt(()=>{Vn();nn();en=(t,n)=>Array.from({length:n},()=>Array(t).fill(null)),Et=t=>t[0]?t[0].length:0,Pe=t=>t.map(n=>n.slice()),Mt=(t,n,e)=>e>=0&&e<t.length&&n>=0&&n<Et(t)?t[e][n]:null;wu="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+=?@^~";wa=t=>t.map(n=>n.slice().reverse());Ro=(()=>{let t=new Float32Array(4096),n=49723857;for(let e=0;e<t.length;e++)n=n*1664525+1013904223>>>0,t[e]=n/4294967296;return t})();To=t=>{let n=Math.sin(t*127.1+311.7)*43758.5453;return n-Math.floor(n)},mn=56,Zn=7,Ea=7,Be=Zn+15+Ea,_r=Zn-2,Hr=[30,8+Zn],Ia=t=>[...Array.from({length:Zn},()=>".".repeat(mn)),...t.map(n=>".."+n+".".repeat(mn-2-n.length)),...Array.from({length:Ea},()=>".".repeat(mn))],yu=Ia(["........................................",".....fff..........................kkk...","......fff........................kkkkk..",".......fff.......................kkkkk..","........ffff.....................kkkkk..........aa",".........fffffff................mmkkk..........aa.","mmmmmm....fffffff...........mmmmmm............hh.","..mmmmmmmm..fffffmmm.....mmmmmmmmaaaaa...aaaaahh",".....mmmmmmmmmmmmmmmmmmmmmmmwwmmmaaaaaaaaaaaa",".......mmmmmmmmmmmmmmmmmmmmmwwmmmaaaaaaaa","..........mmmmmmmmmmmmmmmmmmmmmmm",".............mmmmmmmm....mmmmmm","","",""]),Pu={m:"m",f:"f",a:"a",h:"h",w:"w",k:"k",g:"g",q:"q"},Pa=t=>Ut(t,Pu,mn),qn=[2,9],Or=[2,18],we=[35,39],Cu=43,ku=[35,8+Zn];fn=Ru(),Kr=["D1","D2","D3","D4","W0"];Nr=["N0","N1","N2"],jr=["...v.......","...mn......","..msnn.....","..msonn....",".msoonnn...",".msoonnnr..",".soooonnr..","..soooonnr.","..msooonnr.","...sooonnr.","....sooonr.","....sonnr..",".....snnr..","......nr...",".......r..."],Su={v:"V2",m:"M3",s:"N2",o:"N1",n:"N0",r:"P2",f:"E0",F:"E1"},Ur=[2,5],Vr=[[4,8],[5,9],[5,10],[6,11]],Ao=[[10,10,0],[3,15,2.3]],Jr=["..v......","..mn.....",".msnn....",".msonr...","msoonnr..","msoonnr..",".soonnnr.",".msoonnr.","..sonnnr.","..msonr..","...snnr..","....nr...",".....r..."],qr=[1,4],zr=[[3,7],[4,8],[4,9]],Go=[[8,9,1.1]],Zr=Ut(["Fe","ee"],{F:"E1",e:"E0"}),Qr=Ut(["..","Fe"],{F:"E1",e:"E0"}),ts=Ut(["..","nn"],{n:"N0"}),Eu=Ut(["ms","sn"],{m:"M3",s:"N2",n:"N0"});Iu=["N2","M3","M3"],vu=["N1","N1","N0"];Du={w:28,h:34,palm:[["N2",[5.5,17,9.5,15.5,16,15,16,21,9,22.5]],["M3",[5.5,17,9,22.5,9.5,26,6.5,23]],["N1",[9,22.5,16,21,16,31,11,31,9.5,26]],["N1",[16,15,26,17,26,22.5,16,21.5]],["N0",[16,21.5,26,22.5,23.5,27.5,20,31,16,31]]],thumb:{p:[[9.5,24],[5.5,20.5],[2.8,16.5],[1.3,12.2]],w:[2.6,2.2,1.9,1.5],lit:-1},fingers:[{p:[[8.5,16.5],[7,11.5],[6,7.5],[5.3,4]],w:[2.1,1.9,1.7,1.4]},{p:[[13,15.5],[12.6,10],[12.3,5.5],[12,1.4]],w:[2.1,2,1.8,1.5]},{p:[[19.2,15.5],[19.5,10.5],[19.9,6.5],[20.2,3]],w:[2.1,1.9,1.7,1.4]},{p:[[23.8,17.5],[24.8,13.5],[25.5,10.5],[26,7.6]],w:[1.9,1.7,1.5,1.3]}],wrist:[["N0",[11,30,21,30,20,32.5,17,33,13,33,11.5,32]]],split:[[16,15],[16,16],[17,17],[16,18],[16,22],[15,23],[16,24],[16,25],[17,26],[16,27],[16,28],[15,29],[16,30],[16,31],[16,32]],heart:[16,20],bits:[[11,33,13,33,12.5,34],[18,33,20,32.5,19.5,34]],touch:[],rimRightMaxY:21},Tu={w:20,h:24,palm:[["N2",[3.5,13,11,11.5,11,16,6,17]],["M3",[3.5,13,6,17,7,19.5,4.5,17]],["N1",[6,17,11,16,11,22,8,22,7,19.5]],["N1",[11,11.5,19,13,19,16.5,11,16]],["N0",[11,16,19,16.5,16.5,20.5,14,22,11,22]]],thumb:{p:[[6.5,18],[4,15.5],[2,12.5],[1,9.4]],w:[2,1.7,1.5,1.2],lit:-1},fingers:[{p:[[5.5,12.5],[4.6,8.5],[4,5.5],[3.6,2.8]],w:[1.6,1.5,1.3,1.1]},{p:[[9,11.5],[8.8,7.5],[8.6,4.2],[8.5,1.2]],w:[1.6,1.5,1.4,1.1]},{p:[[13.2,11.5],[13.4,8],[13.7,5],[14,2.3]],w:[1.6,1.5,1.3,1.1]},{p:[[16.8,13],[17.6,10],[18.2,7.6],[18.6,5.4]],w:[1.4,1.3,1.2,1]}],wrist:[["N0",[8,21.5,15,21.5,14,23.5,9,23.5]]],split:[[11,12],[11,13],[12,14],[11,15],[11,16],[11,17],[10,18],[11,19],[11,20],[11,21]],heart:null,bits:[],touch:[],rimRightMaxY:15},Yu=[[9,14,28],[10,12,30],[11,11,31],[12,11,32],[13,10,32],[14,10,33],[15,9,33],[16,9,33],[17,8,33],[18,8,32],[19,7,32],[20,6,32],[21,6,31],[22,5,31],[23,8,30],[24,8,30],[25,9,29],[26,8,29],[27,9,28],[28,9,28],[29,9,28],[30,10,27],[31,13,27],[32,15,27],[33,15,26],[34,16,26],[35,18,24]],Aa=[14,13,12,11,10,9,10,9,8,9,11,12,12,12,11,10,9,8,9,10,9,10,11,12,14,16],So=t=>t<8?0:Aa[t-8]??99,Au=["..a..",".aab.",".abb.","aawbc",".abc.",".bcc.","..c.."],Gu={a:"Y2",b:"Y1",c:"Y0",w:"W0"},Fu=[Ut(["ms.","msn",".nf"],{m:"M3",s:"N2",n:"N0",f:"E0"}),Ut(["vm","sn"],{v:"V2",m:"M3",s:"N2",n:"N0"}),Ut([".m.","msn","snf"],{m:"M3",s:"N2",n:"N0",f:"E0"}),Ut(["ms","nf"],{m:"M3",s:"N2",n:"N0",f:"E0"}),Ut(["m.","sn"],{m:"M3",s:"N2",n:"N0"})],Ga=[[11,4],[15,1],[24,2],[28,5],[32,9]];Oa=[[.01,.25],[0,.215],[0,.27]],Lu=(t,n,e)=>{let o=Math.max(0,Math.min(1,.5+.5*(n-t)/e));return n+(t-n)*o-e*o*(1-o)},La=(t,n,e,o,s,r)=>(Math.hypot((t-e)/s,(n-o)/r)-1)*Math.min(s,r);Ka=t=>t-Math.floor(t),Eo=t=>Ka(Math.sin(t)*4375.85);yn=(t,n)=>({k:n,f:(e,o)=>Nu(t,e,o),box:[t.x0,t.x1,t.y0,t.y1]});Bu=[Wr(0),Wr(1),Wr(2)];ka=new Map;Io=new Map;Yn={},We={};hn=3,[bn,dn]=Hr;Yt("dreamer.fly",fn.fly,8,bn,dn);Yt("dreamer.fast",fn.fast,8,bn,dn);Yt("dreamer.slow",fn.slow,8,bn,dn);Yt("dreamer.up",fn.up,8,bn,dn);Yt("dreamer.down",fn.down,8,bn,dn);Yt("dreamer.cast",fn.cast,15,bn,dn);Yt("dreamer.spread",fn.spread,8,bn,dn);Yt("dreamer.hurt",fn.hurt,15,bn,dn);Yt("dreamer.land",[0,1,2,3,4,5,6,7].map(t=>Da(t,0,0)),12,bn,dn);Yt("dreamer.death",[0,1,2,3,4,5,6,7,8,9].map(t=>Ta(t,0,0)),10,bn,dn+12);Xa=[5+hn,7+hn],ja=[4+hn,6+hn];Yt("glitch.hover",[0,1,2,3].map(t=>ye(jr,Ur,Vr,Ao,t,Zr,[0,0],t/6,hn)),6,...Xa);Yt("glitch.blink",[Qr,ts].map(t=>ye(jr,Ur,Vr,Ao,0,t,[0,0],0,hn)),12,...Xa);Yt("bug.hover",[0,1].map(t=>ye(Jr,qr,zr,Go,t*2+1,Zr,[0,0],t/8,hn)),8,...ja);Yt("bug.blink",[Qr,ts].map(t=>ye(Jr,qr,zr,Go,1,t,[0,0],0,hn)),12,...ja);Yt("error.creep",[-1,3,2,1,0,-1].map((t,n)=>Ya(Du,t,n%3===1?-1:0)),6,16,33);Yt("spam.idle",[-1,3,1,-1].map(t=>Ya(Tu,t,0)),6,10,12);Yt("elite.idle",[0,1,2,3,4,5].map(t=>Fa(t,t%4,t/6)),6,19,21);_e={};for(let t of Object.keys(We))_e[t]=We[t].map((n,e)=>Hu(t,n,e));Fo={};for(let t of Object.keys(_e))Fo[t]=$u(_e[t],t.length*6+2);Fo["giant.creep"]=ns(0,96);Fo["giant.legacy"]=ns(1,96);Fo["giant.deadline"]=ns(2,96);Ne=new Map,Ra=new Map;lh=Object.keys(We);vo=9;qu=[[-23,-7,["D3","D3","D2","D2"]],[-28,-2,["D4","D3","D3","D2"]]]});var zu={};var Ja,qa=Bt(()=>{Oo();Ja=self;Ja.onmessage=t=>{let{kind:n,sigma:e,grow:o}=t.data,s=performance.now(),r=Ce(n,e,o),a=r.sd.slice(),i=r.raw.slice(),u=r.bottom.slice();Ja.postMessage({grow:o,ms:performance.now()-s,m:{...r,sd:a,raw:i,bottom:u}},[a.buffer,i.buffer,u.buffer])}});function Cn(t,n){let e={},o="",s=0,r=[],a=()=>{if(!o)return;let i=Math.max(...r.map(c=>c.length)),u=[];for(let c=0;c<t;c++)u.push((r[c-s]??"").padEnd(i,"."));if(r.length+s>t)throw new Error(\`glyph \${o} runs past h \${t}\`);e[o]=u};for(let i of n.split(\`
\`)){let u=i.trim();if(u)if(u[0]==="@"){a();let c=u.lastIndexOf(" ");o=u.slice(1,c),s=parseInt(u.slice(c+1)),r=[]}else r.push(u)}return a(),e}function Qa(t,n){let e={},o=0,s=0;for(let r=0;r<t.h;r++)o=Math.max(o,n(r)),s=Math.min(s,n(r));for(let[r,a]of Object.entries(t.glyphs)){let i=a[0].length,u=o-s,c=a.map((f,b)=>{let d=n(b)-s;return".".repeat(d)+f+".".repeat(u-d)}),l=f=>c.some(b=>b[f]!=="."),m=0,h=i+u-1;for(;m<h&&!l(m)&&m<u;)m++;for(;h>m&&!l(h)&&h>i-1;)h--;c.some(f=>f.includes("#"))||(m=0,h=i-1),c=c.map(f=>f.slice(m,h+1)),e[r]=c}return{...t,glyphs:e}}function ti(t,n,e){let o={},s=0,r=0;for(let l=0;l<t;l++)s=Math.min(s,e(l)),r=Math.max(r,e(l));let a=r-s,i=null,u=[],c=()=>{if(!i)return;let[l,m,h="0",f=""]=i,b=parseInt(m),d=parseInt(h),p=Math.max(...u.map(x=>x.length));if(u.length+b>t)throw new Error(\`glyph \${l} runs past h \${t}\`);let M=[];for(let x=0;x<t;x++){let y=(u[x-b]??"").padEnd(p,"."),k=(f==="u"?0:e(x))-s-d;if(k<0){if(y.slice(0,-k).includes("#"))throw new Error(\`glyph \${l}: its overhang meets row \${x}\`);y=y.slice(-k)}else y=".".repeat(k)+y;M.push(y.padEnd(p-d+a,"."))}o[l]=M};for(let l of n.split(\`
\`)){let m=l.trim();m&&(m[0]==="@"?(c(),i=m.slice(1).split(" "),u=[]):u.push(m))}return c(),o}function ni(t,n,e,o,s){let r=ut.KEYS9.glyphs[n];if(r)return dt(t,ut.KEYS9,n,e,o,s),r[0].length;let a=ut.NIGHT5,i=Ct(a,n)+7;return e=Math.round(e),o=Math.round(o),t.fillStyle=s,t.fillRect(e+1,o,i-2,1),t.fillRect(e+1,o+8,i-2,1),t.fillRect(e,o+1,1,7),t.fillRect(e+i-1,o+1,1,7),dt(t,a,n,e+4,o+2,s),i}function es(t){let n=ut.NIGHT5;return Ct({...n,gap:ei},t)}function $e(t,n,e,o,s){dt(t,{...ut.NIGHT5,gap:ei},n,e,o,s)}function os(t,n,e,o,s,r){for(let a=1;a<o-1;a++)t(n+a,e,r),t(n+a,e+s-1,r);for(let a=1;a<s-1;a++)t(n,e+a,r),t(n+o-1,e+a,r)}function Ko(t){let n=0;return t.forEach((e,o)=>{n+=oi(e),o<t.length-1&&(n+=ri(e,t[o+1]))}),n}function oi(t){return t==="\\uE000"?23:t==="\\uE001"?5:t==="LR"?14:t==="/"?es("/"):t[0]==="["?es(t.slice(1,-1))+4:es(t)}function ri(t,n){return t==="/"||n==="/"?2:Lo(t)&&!Lo(n)?4:!Lo(t)&&Lo(n)?11:3}function rs(t,n,e,o,s,r=!1){let a=Math.round(r?e:e-Ko(n));o=Math.round(o);let i=(u,c,l)=>{t.fillStyle=l,t.fillRect(u,c,1,1)};n.forEach((u,c)=>{let l=oi(u);if(u==="\\uE000"){let m=[[8,-3,"u"],[0,4,"l"],[8,4,"d"],[16,4,"r"]],h={u:[[3,2],[2,3],[3,3],[4,3]],d:[[2,2],[3,2],[4,2],[3,3]],l:[[2,2],[3,1],[3,2],[3,3]],r:[[4,2],[3,1],[3,2],[3,3]]};for(let[f,b,d]of m){os(i,a+f,o+b,7,6,s.box);for(let[p,M]of h[d])i(a+f+p,o+b+M,s.key)}}else if(u==="\\uE001"){let m=ut.KEYS9.glyphs[u],h=c1[u]||[];m.forEach((f,b)=>{for(let d=0;d<f.length;d++)f[d]==="#"&&i(a+d,o+b,h.some(([p,M])=>p===d&&M===b)?s.key:s.box)})}else u==="LR"?(os(i,a,o,l,9,s.box),u1.forEach((m,h)=>{for(let f=0;f<m.length;f++)m[f]!=="."&&i(a+2+f,o+2+h,s.key)})):u[0]==="["&&u.length>2?(os(i,a,o,l,9,s.box),s.shadow&&$e(t,u.slice(1,-1),a+3,o+3,s.shadow),$e(t,u.slice(1,-1),a+2,o+2,s.key)):u==="/"?$e(t,"/",a,o+2,s.box):(s.shadow&&$e(t,u,a+1,o+3,s.shadow),$e(t,u,a,o+2,s.word));a+=l+(c<n.length-1?ri(u,n[c+1]):0)})}function No(t,n,e,o,s,r,a,i,u,c=.5){let l=Ct(n,e)+4,m=n.h+4,h=document.createElement("canvas");h.width=l,h.height=m;let f=h.getContext("2d");dt(f,n,e,2,2,"#fff");let b=f.getImageData(0,0,l,m).data,d=(x,y)=>x>=0&&y>=0&&x<l&&y<m&&b[(y*l+x)*4+3]>0,p=i1[l1(n)].cap,M=2+Math.round(p/2)-1;o=Math.round(o)-2,s=Math.round(s)-2;for(let x=0;x<m;x++)for(let y=0;y<l;y++){if(!d(y,x)){u&&d(y-1,x-1)?(t.fillStyle=u,t.fillRect(o+y,s+x,1,1)):i&&(d(y-1,x)||d(y+1,x)||d(y,x-1)||d(y,x+1))&&V(o+y,s+x,c)&&(t.fillStyle=i,t.fillRect(o+y,s+x,1,1));continue}let k=x<=M?r:a;t.fillStyle=k,t.fillRect(o+y,s+x,1,1)}}function si(t,n,e,o,s,r,a,i=.5){let[u,c,l,m]=m1[r];No(t,n,e,o,s,a[u],a[c],l?a[l]:null,m?a[m]:null,i)}var Zu,za,Za,Qu,t1,n1,e1,o1,r1,s1,a1,ut,i1,ei,c1,u1,Lo,l1,m1,An=Bt(()=>{nn();Zu=Cn(5,\`
@A 0
.##.
#..#
####
#..#
#..#
@B 0
###.
#..#
###.
#..#
###.
@C 0
.###
#...
#...
#...
.###
@D 0
###.
#..#
#..#
#..#
###.
@E 0
###
#..
##.
#..
###
@F 0
###
#..
##.
#..
#..
@G 0
.###
#...
#.##
#..#
.###
@H 0
#..#
#..#
####
#..#
#..#
@I 0
#
#
#
#
#
@J 0
...#
...#
...#
#..#
.##.
@K 0
#..#
#.#.
##..
#.#.
#..#
@L 0
#..
#..
#..
#..
###
@M 0
#...#
##.##
#.#.#
#...#
#...#
@N 0
#..#
##.#
#.##
#..#
#..#
@O 0
.##.
#..#
#..#
#..#
.##.
@P 0
###.
#..#
###.
#...
#...
@Q 0
.##.
#..#
#..#
#.#.
.#.#
@R 0
###.
#..#
###.
#.#.
#..#
@S 0
.###
#...
.##.
...#
###.
@T 0
###
.#.
.#.
.#.
.#.
@U 0
#..#
#..#
#..#
#..#
.##.
@V 0
#...#
#...#
.#.#.
.#.#.
..#..
@W 0
#...#
#...#
#.#.#
##.##
#...#
@X 0
#...#
.#.#.
..#..
.#.#.
#...#
@Y 0
#...#
.#.#.
..#..
..#..
..#..
@Z 0
####
...#
.##.
#...
####
@0 0
.#.
#.#
#.#
#.#
.#.
@1 0
.#.
##.
.#.
.#.
###
@2 0
##.
..#
.#.
#..
###
@3 0
##.
..#
.#.
..#
##.
@4 0
#.#
#.#
###
..#
..#
@5 0
###
#..
##.
..#
##.
@6 0
.##
#..
##.
#.#
.#.
@7 0
###
..#
..#
.#.
.#.
@8 0
.#.
#.#
.#.
#.#
.#.
@9 0
.#.
#.#
.##
..#
##.
@\\xB7 2
#
@\\u2022 1
.#.
###
.#.
@: 1
#
.
#
@. 4
#
@, 3
#
#
@/ 0
..#
..#
.#.
#..
#..
@\\u2192 0
..#..
...#.
#####
...#.
..#..
@\\u2190 0
..#..
.#...
#####
.#...
..#..
@\\u2191 0
..#..
.#.#.
#.#.#
..#..
..#..
@\\u2193 0
..#..
..#..
#.#.#
.#.#.
..#..
@\\u2197 0
..###
...##
..#.#
.#...
#....
@\\xD7 1
#.#
.#.
#.#
@+ 1
.#.
###
.#.
@= 1
###
...
###
@- 2
###
@\\u2014 2
#####
@( 0
.#
#.
#.
#.
.#
@) 0
#.
.#
.#
.#
#.
@[ 0
##
#.
#.
#.
##
@] 0
##
.#
.#
.#
##
@' 0
#
#
@! 0
#
#
#
.
#
@? 0
##.
..#
.#.
...
.#.
@% 0
#...#
...#.
..#..
.#...
#...#
@& 0
.#...
#.#..
.#.#.
#..#.
.##.#
@\\u2726 0
..#..
.###.
#####
.###.
..#..
@\\u2727 0
..#..
.#.#.
#...#
.#.#.
..#..
\`),za=Cn(9,\`
@A 0
.###.
#...#
#...#
#####
#...#
#...#
#...#
@B 0
####.
#...#
#...#
####.
#...#
#...#
####.
@C 0
.###.
#...#
#....
#....
#....
#...#
.###.
@D 0
####.
#...#
#...#
#...#
#...#
#...#
####.
@E 0
#####
#....
#....
####.
#....
#....
#####
@F 0
#####
#....
#....
####.
#....
#....
#....
@G 0
.###.
#...#
#....
#.###
#...#
#...#
.####
@H 0
#...#
#...#
#...#
#####
#...#
#...#
#...#
@I 0
#
#
#
#
#
#
#
@J 0
...#
...#
...#
...#
...#
#..#
.##.
@K 0
#...#
#..#.
#.#..
##...
#.#..
#..#.
#...#
@L 0
#....
#....
#....
#....
#....
#....
#####
@M 0
#...#
##.##
#.#.#
#.#.#
#...#
#...#
#...#
@N 0
#...#
#...#
##..#
#.#.#
#..##
#...#
#...#
@O 0
.###.
#...#
#...#
#...#
#...#
#...#
.###.
@P 0
####.
#...#
#...#
####.
#....
#....
#....
@Q 0
.###.
#...#
#...#
#...#
#.#.#
#..#.
.##.#
@R 0
####.
#...#
#...#
####.
#.#..
#..#.
#...#
@S 0
.###.
#...#
#....
.###.
....#
#...#
.###.
@T 0
#####
..#..
..#..
..#..
..#..
..#..
..#..
@U 0
#...#
#...#
#...#
#...#
#...#
#...#
.###.
@V 0
#...#
#...#
#...#
#...#
.#.#.
.#.#.
..#..
@W 0
#...#
#...#
#...#
#.#.#
#.#.#
#.#.#
.#.#.
@X 0
#...#
#...#
.#.#.
..#..
.#.#.
#...#
#...#
@Y 0
#...#
#...#
.#.#.
..#..
..#..
..#..
..#..
@Z 0
#####
....#
...#.
..#..
.#...
#....
#####
@a 2
.##.
...#
.###
#..#
.###
@b 0
#...
#...
###.
#..#
#..#
#..#
###.
@c 2
.###
#...
#...
#...
.###
@d 0
...#
...#
.###
#..#
#..#
#..#
.###
@e 2
.##.
#..#
####
#...
.###
@f 0
.##
#..
###
#..
#..
#..
#..
@g 2
.###
#..#
#..#
#..#
.###
...#
.##.
@h 0
#...
#...
###.
#..#
#..#
#..#
#..#
@i 0
#
.
#
#
#
#
#
@j 0
.#
..
.#
.#
.#
.#
.#
.#
#.
@k 0
#...
#...
#..#
#.#.
##..
#.#.
#..#
@l 0
#
#
#
#
#
#
#
@m 2
####.
#.#.#
#.#.#
#.#.#
#.#.#
@n 2
###.
#..#
#..#
#..#
#..#
@o 2
.##.
#..#
#..#
#..#
.##.
@p 2
###.
#..#
#..#
#..#
###.
#...
#...
@q 2
.###
#..#
#..#
#..#
.###
...#
...#
@r 2
#.#
##.
#..
#..
#..
@s 2
.###
#...
.##.
...#
###.
@t 1
#..
###
#..
#..
#..
.##
@u 2
#..#
#..#
#..#
#..#
.###
@v 2
#...#
#...#
.#.#.
.#.#.
..#..
@w 2
#...#
#...#
#.#.#
#.#.#
.#.#.
@x 2
#...#
.#.#.
..#..
.#.#.
#...#
@y 2
#..#
#..#
#..#
#..#
.###
...#
.##.
@z 2
####
...#
.##.
#...
####
@0 0
.##.
#..#
#..#
#..#
#..#
#..#
.##.
@1 0
.#.
##.
.#.
.#.
.#.
.#.
###
@2 0
.##.
#..#
...#
..#.
.#..
#...
####
@3 0
###.
...#
...#
.##.
...#
...#
###.
@4 0
...#
..##
.#.#
#..#
####
...#
...#
@5 0
####
#...
###.
...#
...#
#..#
.##.
@6 0
.##.
#...
#...
###.
#..#
#..#
.##.
@7 0
####
...#
...#
..#.
..#.
.#..
.#..
@8 0
.##.
#..#
#..#
.##.
#..#
#..#
.##.
@9 0
.##.
#..#
#..#
.###
...#
...#
.##.
@. 6
#
@, 6
.#
#.
@; 2
.#
..
..
..
.#
#.
@: 2
#
.
.
.
#
@! 0
#
#
#
#
#
.
#
@? 0
.##.
#..#
...#
..#.
.#..
....
.#..
@' 0
#
#
@" 0
#.#
#.#
@\\u2019 0
.#
.#
#.
@\\u2018 0
.#
#.
#.
@\\u201C 0
.#.#
#.#.
#.#.
@\\u201D 0
.#.#
.#.#
#.#.
@- 4
###
@\\u2013 4
####
@\\u2014 4
#######
@( 0
.#
#.
#.
#.
#.
#.
#.
#.
.#
@) 0
#.
.#
.#
.#
.#
.#
.#
.#
#.
@/ 0
...#
...#
..#.
..#.
.#..
.#..
#...
#...
@% 0
##..#
##.#.
...#.
..#..
.#...
.#.##
#..##
@& 0
.##..
#..#.
#.#..
.#...
#.#.#
#..#.
.##.#
@+ 2
..#..
..#..
#####
..#..
..#..
@\\xD7 3
#.#
.#.
#.#
@\\u2192 2
...#..
....#.
######
....#.
...#..
@\\u2190 2
..#...
.#....
######
.#....
..#...
@\\u2197 2
..###
...##
..#.#
.#...
#....
@\\xB7 4
#
@\\u2026 6
#.#.#
@\\u25B6 0
#...
##..
###.
####
###.
##..
#...
\`),Za=Cn(12,\`
@0 0
..###..
.##.##.
##...##
##...##
##...##
##...##
##...##
.##.##.
..###..
@1 0
...##..
.####..
...##..
...##..
...##..
...##..
...##..
...##..
.######
@2 0
.####..
##..##.
....##.
...##..
..##...
.##....
##.....
##...##
#######
@3 0
.#####.
##...##
.....##
...###.
.....##
.....##
.....##
##...##
.#####.
@4 0
....##.
...###.
..#.##.
.#..##.
#...##.
#######
....##.
....##.
...####
@5 0
#######
##.....
##.....
######.
.....##
.....##
.....##
##...##
.#####.
@6 0
..####.
.##....
##.....
######.
##...##
##...##
##...##
##...##
.#####.
@7 0
#######
##...##
....##.
....##.
...##..
...##..
..##...
..##...
..##...
@8 0
.#####.
##...##
##...##
.#####.
##...##
##...##
##...##
##...##
.#####.
@9 0
.#####.
##...##
##...##
##...##
.######
.....##
.....##
....##.
.####..
@: 2
##.
##.
...
...
##.
##.
@A 0
...##...
...##...
..#.##..
..#.##..
.#...##.
.######.
.#...##.
#.....##
##...###
@B 0
######.
.##..##
.##..##
.##.##.
.#####.
.##..##
.##..##
.##..##
######.
@C 0
..####.
.##...#
##.....
##.....
##.....
##.....
##.....
.##...#
..####.
@D 0
#####..
.##.##.
.##..##
.##..##
.##..##
.##..##
.##..##
.##.##.
#####..
@E 0
#######
.##...#
.##....
.##.#..
.####..
.##.#..
.##....
.##...#
#######
@F 0
#######
.##...#
.##....
.##.#..
.####..
.##.#..
.##....
.##....
####...
@G 0
..####.
.##...#
##.....
##.....
##..###
##...##
##...##
.##..##
..####.
@H 0
####.####
.##...##.
.##...##.
.##...##.
.#######.
.##...##.
.##...##.
.##...##.
####.####
@I 0
####
.##.
.##.
.##.
.##.
.##.
.##.
.##.
####
@J 0
..####
...##.
...##.
...##.
...##.
...##.
...##.
#..##.
.###..
@K 0
####.###
.##...#.
.##..#..
.##.#...
.####...
.##.##..
.##..##.
.##...##
####.###
@L 0
####...
.##....
.##....
.##....
.##....
.##....
.##....
.##...#
#######
@M 0
###.....###
.##.....##.
.###...###.
.##.#.#.##.
.##..#..##.
.##.....##.
.##.....##.
.##.....##.
####...####
@N 0
###...###
.##....#.
.###...#.
.#.##..#.
.#..##.#.
.#...###.
.#....##.
.#.....#.
###....#.
@O 0
..####..
.##..##.
##....##
##....##
##....##
##....##
##....##
.##..##.
..####..
@P 0
######.
.##..##
.##..##
.##..##
.#####.
.##....
.##....
.##....
####...
@Q 0
..####..
.##..##.
##....##
##....##
##....##
##....##
##....##
.##..##.
..####..
....##..
.....###
@R 0
######..
.##..##.
.##..##.
.##..##.
.#####..
.##.##..
.##..##.
.##..##.
####..##
@S 0
.####.
##...#
##....
.##...
..##..
...##.
....##
#...##
.####.
@T 0
########
#..##..#
...##...
...##...
...##...
...##...
...##...
...##...
..####..
@U 0
####.###
.##...#.
.##...#.
.##...#.
.##...#.
.##...#.
.##...#.
.##..#..
..###...
@V 0
####..###
.##....#.
.##....#.
..##..#..
..##..#..
...##.#..
...###...
....#....
....#....
@W 0
####..#..###
.##...#...#.
.##..###..#.
..##.#.##.#.
..##.#.##.#.
...###..##..
...##...##..
...##...#...
...#....#...
@X 0
###..###
.##...#.
..##.#..
...##...
...##...
...###..
..#..##.
.#....##
###..###
@Y 0
###..###
.##...#.
..##.#..
...##...
...##...
...##...
...##...
...##...
..####..
@Z 0
#######
#....##
....##.
...##..
..##...
.##....
##.....
##....#
#######
@a 3
.####.
....##
.#####
##..##
##..##
.###.#
@b 0
###....
.##....
.##....
.#####.
.##..##
.##..##
.##..##
.##..##
######.
@c 3
.####
##..#
##...
##...
##..#
.###.
@d 0
....###
.....##
.....##
.######
##...##
##...##
##...##
##...##
.######
@e 3
.####.
##..##
######
##....
##...#
.####.
@f 0
..###
.##.#
.##..
####.
.##..
.##..
.##..
.##..
####.
@g 3
.######
##..##.
##..##.
.####..
##.....
.#####.
##...##
.#####.
@h 0
###.....
.##.....
.##.....
.#####..
.##..##.
.##..##.
.##..##.
.##..##.
###..###
@i 0
.##.
....
....
###.
.##.
.##.
.##.
.##.
####
@j 0
..##
....
....
.###
..##
..##
..##
..##
..##
..##
#.##
.##.
@k 0
###....
.##....
.##....
.##.###
.##..#.
.####..
.##.##.
.##..##
###.###
@l 0
###.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
####
@m 3
#####..##...
.##..##..##.
.##..##..##.
.##..##..##.
.##..##..##.
###..##..###
@n 3
#####...
.##..##.
.##..##.
.##..##.
.##..##.
###..###
@o 3
.####.
##..##
##..##
##..##
##..##
.####.
@p 3
######.
.##..##
.##..##
.##..##
.##..##
.#####.
.##....
.##....
####...
@q 3
.######.
##...##.
##...##.
##...##.
##...##.
.######.
.....##.
.....##.
....####
@r 3
###.##
.###.#
.##...
.##...
.##...
####..
@s 3
.####
##..#
.##..
...##
#..##
####.
@t 1
.##..
.##..
#####
.##..
.##..
.##..
.##..
..###
@u 3
###.###
.##..##
.##..##
.##..##
.##..##
..###.#
@v 3
###..###
.##...#.
.##...#.
..##.#..
..##.#..
...##...
@w 3
###...##...#
.##...##...#
..##.#.##.#.
..##.#.##.#.
...###..###.
...##...##..
@x 3
###.###
.##..#.
..###..
..###..
.#..##.
###.###
@y 3
###..###
.##...#.
..##.#..
..##.#..
...##...
...##...
...#....
#.#.....
.#......
@z 3
######
#...##
...##.
..##..
.##..#
######
@\\xB7 4
##
@\\xD7 3
#...#
.#.#.
..#..
.#.#.
#...#
@' 0
##
##
.#
@\\u2019 0
##
##
.#
@- 5
####
@. 7
##
##
@, 7
##
##
.#
#.
@! 0
##
##
##
##
##
..
..
##
##
@? 0
.####.
##..##
....##
...##.
..##..
..##..
......
..##..
..##..
@\\u2197 1
..#####
....###
...#.##
..#..##
.#.....
#......
@& 0
..##...
.##.#..
.##.#..
..##...
.###.##
##.##.#
##..##.
##..##.
.###.##
\`),Qu=Cn(15,\`
@A 0
.....#.....
....###....
....###....
...#.###...
...#.###...
..#...###..
..#...###..
..#######..
.#.....###.
.#.....###.
.#......###
###....####
@B 0
#######..
.##...##.
.##....##
.##....##
.##...##.
.######..
.##...##.
.##....##
.##....##
.##....##
.##...##.
#######..
@C 0
...####.#
..##...##
.##.....#
##.......
##.......
##.......
##.......
##.......
##.......
.##.....#
..##...#.
...####..
@D 0
######...
.##..##..
.##...##.
.##....##
.##....##
.##....##
.##....##
.##....##
.##....##
.##...##.
.##..##..
######...
@E 0
########
.##....#
.##....#
.##.....
.##..#..
.#####..
.##..#..
.##.....
.##.....
.##....#
.##....#
########
@F 0
########
.##....#
.##....#
.##.....
.##..#..
.#####..
.##..#..
.##.....
.##.....
.##.....
.##.....
####....
@G 0
...####.#
..##...##
.##.....#
##.......
##.......
##.......
##...####
##.....##
##.....##
.##....##
..##...##
...####..
@H 0
####..####
.##....##.
.##....##.
.##....##.
.##....##.
.########.
.##....##.
.##....##.
.##....##.
.##....##.
.##....##.
####..####
@I 0
####
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
####
@J 0
..#####
...##..
...##..
...##..
...##..
...##..
...##..
...##..
...##..
#..##..
##.##..
.###...
@K 0
####..####
.##....#..
.##...#...
.##..#....
.##.#.....
.####.....
.##.##....
.##..##...
.##...##..
.##....##.
.##.....##
####...###
@L 0
####....
.##.....
.##.....
.##.....
.##.....
.##.....
.##.....
.##.....
.##.....
.##....#
.##....#
########
@M 0
###.......###
.##.......##.
.###.....###.
.#.##...#.##.
.#.##...#.##.
.#..##.#..##.
.#..##.#..##.
.#...###..##.
.#...###..##.
.#....#...##.
.#........##.
###......####
@N 0
###.....###
.##......#.
.###.....#.
.#.##....#.
.#.##....#.
.#..##...#.
.#...##..#.
.#....##.#.
.#....##.#.
.#.....###.
.#......##.
###......#.
@O 0
...####...
..##..##..
.##....##.
##......##
##......##
##......##
##......##
##......##
##......##
.##....##.
..##..##..
...####...
@P 0
#######..
.##...##.
.##....##
.##....##
.##....##
.##...##.
.######..
.##......
.##......
.##......
.##......
####.....
@Q 0
...####...
..##..##..
.##....##.
##......##
##......##
##......##
##......##
##......##
##......##
.##....##.
..##..##..
...####...
.....##...
......####
@R 0
#######...
.##...##..
.##....##.
.##....##.
.##....##.
.##...##..
.#####....
.##.##....
.##..##...
.##...##..
.##....##.
####...###
@S 0
..####.#
.##...##
##.....#
##......
.##.....
..####..
.....##.
......##
#.....##
##....##
##...##.
#.####..
@T 0
##########
#...##...#
#...##...#
....##....
....##....
....##....
....##....
....##....
....##....
....##....
....##....
...####...
@U 0
####...###
.##.....#.
.##.....#.
.##.....#.
.##.....#.
.##.....#.
.##.....#.
.##.....#.
.##.....#.
.##.....#.
..##...#..
...####...
@V 0
####...###
.##.....#.
.##.....#.
..##...#..
..##...#..
..##...#..
...##.#...
...##.#...
...##.#...
....###...
....##....
....#.....
@W 0
####...###...###
.##.....#.....#.
.##....###....#.
..##...#.##..#..
..##...#.##..#..
..##..#..##..#..
...##.#...##.#..
...##.#...##.#..
...####...####..
....##.....##...
....##.....##...
....#......#....
@X 0
####...###
.##.....#.
..##...#..
..##..#...
...##.#...
....##....
....##....
...#.##...
..#...##..
..#...##..
.#.....##.
###...####
@Y 0
####...###
.##.....#.
..##...#..
..##...#..
...##.#...
...##.#...
....##....
....##....
....##....
....##....
....##....
...####...
@Z 0
#########
#......##
......##.
.....##..
.....##..
....##...
...##....
..##.....
..##.....
.##......
##......#
#########
@a 4
.#####..
##...##.
.....##.
..#####.
.##..##.
##...##.
##..###.
.###.###
@b 0
###......
.##......
.##......
.##......
.##.###..
.###..##.
.##....##
.##....##
.##....##
.##....##
.###..##.
##.####..
@c 4
..####.
.##...#
##....#
##.....
##.....
##.....
.##...#
..####.
@d 0
.....###.
......##.
......##.
......##.
..###.##.
.##..###.
##....##.
##....##.
##....##.
##....##.
.##..###.
..###.###
@e 4
..####.
.##..##
##....#
#######
##.....
##.....
.##...#
..####.
@f 0
...####
..##..#
..##...
..##...
######.
..##...
..##...
..##...
..##...
..##...
..##...
.####..
@g 4
..###.##
.##..###
##....##
##....##
##....##
##....##
.##..###
..###.##
......##
#....##.
.#####..
@h 0
###.....
.##.....
.##.....
.##.....
.##.###.
.###..##
.##...##
.##...##
.##...##
.##...##
.##...##
####.###
@i 0
....
.##.
.##.
....
###.
.##.
.##.
.##.
.##.
.##.
.##.
####
@j 0
....
..##
..##
....
.###
..##
..##
..##
..##
..##
..##
..##
..##
#.##
.##.
@k 0
###......
.##......
.##......
.##......
.##..####
.##...#..
.##..#...
.##.#....
.####....
.##.##...
.##..##..
####.####
@l 0
###.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
####
@m 4
###.###..###.
.###..###..##
.##...##...##
.##...##...##
.##...##...##
.##...##...##
.##...##...##
####.###.####
@n 4
###.###.
.###..##
.##...##
.##...##
.##...##
.##...##
.##...##
####.###
@o 4
..####..
.##..##.
##....##
##....##
##....##
##....##
.##..##.
..####..
@p 4
###.###..
.###..##.
.##....##
.##....##
.##....##
.##....##
.###..##.
.##.###..
.##......
.##......
####.....
@q 4
..###.##.
.##..###.
##....##.
##....##.
##....##.
##....##.
.##..###.
..###.##.
......##.
......##.
.....####
@r 4
###.###
.###..#
.##....
.##....
.##....
.##....
.##....
####...
@s 4
.####.#
##...##
##.....
.####..
....##.
.....##
##...##
#.####.
@t 1
..#...
..#...
.##...
######
.##...
.##...
.##...
.##...
.##...
.##..#
..###.
@u 4
###..###.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##..###.
..###.###
@v 4
####..###
.##....#.
.##....#.
..##..#..
..##..#..
...##.#..
...###...
....#....
@w 4
####..#...###
.##..###...#.
.##..#.##..#.
..##.#.##.#..
..##.#.##.#..
...###..###..
...##....##..
....#....#...
@x 4
###..###
.##...#.
..##.#..
...##...
...##...
..#.##..
.#...##.
###.####
@y 4
####..###
.##....#.
.##....#.
..##..#..
..##..#..
...##.#..
...###...
....##...
....#....
#..#.....
.##......
@z 4
#######
#....##
....##.
...##..
..##...
.##....
##....#
#######
@0 0
...###...
..##.##..
.##...##.
##.....##
##.....##
##.....##
##.....##
##.....##
##.....##
.##...##.
..##.##..
...###...
@1 0
..##..
####..
..##..
..##..
..##..
..##..
..##..
..##..
..##..
..##..
..##..
######
@2 0
..####..
.##..##.
##....##
......##
.....##.
....##..
...##...
..##....
.##.....
##......
##.....#
########
@3 0
.#####..
##...##.
......##
......##
.....##.
...###..
.....##.
......##
......##
......##
##...##.
.#####..
@4 0
.....##.
....###.
...#.##.
...#.##.
..#..##.
.#...##.
#....##.
########
.....##.
.....##.
.....##.
....####
@5 0
#######.
##......
##......
##......
######..
.....##.
......##
......##
......##
......##
##...##.
.#####..
@6 0
...####.
..##....
.##.....
##......
######..
##...##.
##....##
##....##
##....##
##....##
.##..##.
..####..
@7 0
########
##....##
......##
.....##.
.....##.
....##..
....##..
...##...
...##...
..##....
..##....
..##....
@8 0
..####..
.##..##.
##....##
##....##
.##..##.
..####..
.##..##.
##....##
##....##
##....##
.##..##.
..####..
@9 0
..####..
.##..##.
##....##
##....##
##....##
##....##
.##...##
..######
......##
.....##.
....##..
.####...
@: 4
##
##
..
..
..
..
##
##
@\\xB7 6
##
##
@\\xD7 5
#...#
.#.#.
..#..
.#.#.
#...#
@' 0
##
##
.#
@\\u2019 0
##
##
.#
#.
@- 7
#####
@. 10
##
##
@, 10
##
##
.#
#.
@! 0
##
##
##
##
##
##
##
.#
..
..
##
##
@? 0
.####.
##..##
##..##
....##
....##
...##.
..##..
..##..
......
......
..##..
..##..
@\\u2197 2
...#####
.....###
....#.##
...#..##
..#....#
.#......
#.......
@& 0
..###....
.##.##...
.##.##...
.##.#....
..##.....
.###..###
##.##..#.
##..##.#.
##...##..
##....##.
.##..####
..###...#
\`),t1=Cn(32,\`
@I 0
##########
##########
..######..
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
...####...
..######..
##########
##########
@V 0
##########....#######
##########....#######
..######.......####..
...####.........##...
...####.........##...
....####........##...
....####........##...
....####.......##....
....####.......##....
....####.......##....
.....####......##....
.....####......##....
.....####.....##.....
.....####.....##.....
.....####.....##.....
......####....##.....
......####....##.....
......####...##......
......####...##......
.......####..##......
.......####..##......
.......####..##......
.......####.##.......
.......####.##.......
........######.......
........######.......
........######.......
........#####........
........#####........
.........####........
.........####........
.........####........
\`),n1=Cn(5,\`
@a 1
.##
#.#
#.#
.##
@b 0
#..
##.
#.#
#.#
##.
@c 1
.##
#..
#..
.##
@d 0
..#
.##
#.#
#.#
.##
@e 1
.#.
###
#..
.##
@f 0
.##
.#.
###
.#.
.#.
@g 1
.##
#.#
.##
##.
@h 0
#..
##.
#.#
#.#
#.#
@i 0
.#.
...
##.
.#.
###
@j 0
..#
...
..#
#.#
.#.
@k 0
#..
#.#
##.
#.#
#.#
@l 0
##.
.#.
.#.
.#.
.##
@m 1
####.
#.#.#
#.#.#
#.#.#
@n 1
##.
#.#
#.#
#.#
@o 1
.#.
#.#
#.#
.#.
@p 1
##.
#.#
##.
#..
@q 1
.##
#.#
.##
..#
@r 1
#.#
##.
#..
#..
@s 1
.##
##.
..#
##.
@t 0
.#.
###
.#.
.#.
..#
@u 1
#.#
#.#
#.#
.##
@v 1
#.#
#.#
#.#
.#.
@w 1
#...#
#.#.#
#.#.#
.#.#.
@x 1
#.#
.#.
.#.
#.#
@y 1
#.#
#.#
.##
##.
@z 1
###
.##
#..
###
@0 0
###
#.#
#.#
#.#
###
@1 0
.#.
##.
.#.
.#.
###
@2 0
##.
..#
.#.
#..
###
@3 0
##.
..#
.#.
..#
##.
@4 0
#.#
#.#
###
..#
..#
@5 0
###
#..
##.
..#
##.
@6 0
.##
#..
###
#.#
###
@7 0
###
..#
.#.
.#.
.#.
@8 0
###
#.#
###
#.#
###
@9 0
###
#.#
###
..#
##.
@= 1
###
...
###
@> 0
#..
.#.
..#
.#.
#..
@< 0
..#
.#.
#..
.#.
..#
@{ 0
.##
.#.
#..
.#.
.##
@} 0
##.
.#.
..#
.#.
##.
@( 0
.#.
#..
#..
#..
.#.
@) 0
.#.
..#
..#
..#
.#.
@[ 0
##.
#..
#..
#..
##.
@] 0
.##
..#
..#
..#
.##
@; 1
.#.
...
.#.
#..
@: 1
.#.
...
.#.
@. 4
.#.
@, 3
.#.
#..
@/ 0
..#
..#
.#.
#..
#..
@| 0
.#.
.#.
.#.
.#.
.#.
@+ 1
.#.
###
.#.
@- 2
###
@* 1
#.#
.#.
#.#
@_ 4
###
@! 0
.#.
.#.
.#.
...
.#.
@? 0
##.
..#
.#.
...
.#.
@" 0
#.#
#.#
@' 0
.#.
.#.
@# 0
#.#
###
#.#
###
#.#
@& 0
.#.
#.#
.#.
#.#
.##
@% 0
#.#
..#
.#.
#..
#.#
@$ 0
.##
##.
.#.
.##
##.
\`),e1=Cn(9,\`
@\\uE000 0
.......###.......
......#.#.#......
......#...#......
.......###.......
.................
.###...###...###.
#...#.#...#.#...#
##..#.#.#.#.#..##
.###...###...###.
@\\uE001 0
.###.
#.#.#
#.#.#
#...#
#...#
#...#
#...#
#...#
.###.
\`);o1=ti(13,\`
@a 3
.#####.
##..##.
##..##.
##..##.
##..##.
##..##.
.###.##
@b 0 1
###.....
.##.....
.##.....
.#####..
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
.#####..
@c 3
.####..
##..##.
##.....
##.....
##.....
##...#.
.####..
@d 0
...###.
....##.
....##.
.#####.
##..##.
##..##.
##..##.
##..##.
##..##.
.###.##
@e 3
.####..
##..##.
##..##.
######.
##.....
##...#.
.####..
@f 0
..###.
.##..#
.##...
#####.
.##...
.##...
.##...
.##...
.##...
.##...
.##...
.##...
##....
@g 3
.#####.
##..##.
##..##.
##..##.
##..##.
##..##.
.#####.
....##.
....##.
.####..
@h 0 1
###.....
.##.....
.##.....
.#####..
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
.##...##
@i 0 1
....
.##.
....
###.
.##.
.##.
.##.
.##.
.##.
..##
@j 0
....
..##
....
.###
..##
..##
..##
..##
..##
..##
..##
..##
##..
@k 0 1
###.....
.##.....
.##.....
.##..##.
.##.##..
.####...
.##.##..
.##..##.
.##..##.
.##...##
@l 0 1
###.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
..##
@m 3 1
#####.###...
.##..##..##.
.##..##..##.
.##..##..##.
.##..##..##.
.##..##..##.
.##..##...##
@n 3 1
#####...
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
.##...##
@o 3
.####..
##..##.
##..##.
##..##.
##..##.
##..##.
.####..
@p 3 1
#####...
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
.#####..
.##.....
.##.....
.##.....
@q 3
.#####.
##..##.
##..##.
##..##.
##..##.
##..##.
.#####.
....##.
....##.
....##.
@r 3 1
###.##
.####.
.##...
.##...
.##...
.##...
.##...
@s 3
.###..
##..#.
##....
.###..
...##.
#..##.
.###..
@t 1 1
.##..
.##..
#####
.##..
.##..
.##..
.##..
.##..
..##.
@u 3 1
###..##.
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
..###.##
@v 3
##...#.
##...#.
##..#..
.##.#..
..##.#.
...##..
...#...
@w 3 1
###..#...#.
.##..#...#.
.##..#..#..
.##..##.#..
..##.##.#..
..###.###..
...#...#...
@x 3
##...#.
.##.#..
..##...
..##...
..#.##.
.#..##.
#....##
@y 3 1
###..##.
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
..#####.
.....##.
.....##.
..####..
@z 3
######.
#...##.
...##..
..##...
.##....
##...#.
######.
@A 0
....##....
....##....
...#.##...
...#.##...
..#...##..
..#...##..
.#######..
.#.....##.
#......##.
##....###.
@B 0
######...
.##..##..
.##..##..
.##..##..
.#####...
.##..##..
.##...##.
.##...##.
.##..##..
######...
@C 0
..####..
.##...#.
##......
##......
##......
##......
##......
##......
.##...#.
..####..
@D 0
#####...
.##.##..
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
.##..##.
.##.##..
#####...
@E 0
#######.
.##...#.
.##.....
.##.#...
.####...
.##.#...
.##.....
.##.....
.##...#.
#######.
@F 0
#######.
.##...#.
.##.....
.##.#...
.####...
.##.#...
.##.....
.##.....
.##.....
####....
@G 0
..####..
.##...#.
##......
##......
##..###.
##...##.
##...##.
##...##.
.##..##.
..####..
@H 0
####.####.
.##...##..
.##...##..
.##...##..
.#######..
.##...##..
.##...##..
.##...##..
.##...##..
####.####.
@I 0
####.
.##..
.##..
.##..
.##..
.##..
.##..
.##..
.##..
####.
@J 0
..####.
...##..
...##..
...##..
...##..
...##..
...##..
#..##..
#..##..
.###...
@K 0
####.###.
.##...#..
.##..#...
.##.#....
.####....
.##.##...
.##..##..
.##..##..
.##...##.
####.###.
@L 0
####....
.##.....
.##.....
.##.....
.##.....
.##.....
.##.....
.##.....
.##...#.
#######.
@M 0
###.....###.
.##.....##..
.###...###..
.###...###..
.##.#.#.##..
.##.#.#.##..
.##..#..##..
.##..#..##..
.##.....##..
####...####.
@N 0
###...###.
.##....#..
.###...#..
.#.##..#..
.#.##..#..
.#..##.#..
.#..##.#..
.#...###..
.#....##..
###....#..
@O 0
..####...
.##..##..
##....##.
##....##.
##....##.
##....##.
##....##.
##....##.
.##..##..
..####...
@P 0
######..
.##..##.
.##..##.
.##..##.
.#####..
.##.....
.##.....
.##.....
.##.....
####....
@Q 0
..####...
.##..##..
##....##.
##....##.
##....##.
##....##.
##....##.
##....##.
.##..##..
..####...
....##...
.....###.
@R 0
######...
.##..##..
.##..##..
.##..##..
.#####...
.##.##...
.##..##..
.##..##..
.##..##..
####..##.
@S 0
.####..
##...#.
##.....
.##....
..##...
...##..
....##.
....##.
#...##.
.####..
@T 0
########.
#..##..#.
...##....
...##....
...##....
...##....
...##....
...##....
...##....
..####...
@U 0
####.###.
.##...#..
.##...#..
.##...#..
.##...#..
.##...#..
.##...#..
.##...#..
.##..#...
..###....
@V 0
####..####
.##.....#.
.##.....#.
..##...#..
..##...#..
..##..#...
...##.#...
...####...
....##....
....#.....
@W 0
####..##..####
.##....#....#.
.##....#....#.
..##..###..#..
..##..#.##.#..
..##.#..##.#..
...###...###..
...##....##...
....#....#....
....#....#....
@X 0
###...###.
.##....#..
..##..#...
..##.#....
...##.....
...##.....
...#.##...
..#..##...
.#....##..
###..####.
@Y 0
###...###.
.##....#..
..##..#...
..##..#...
...##.#...
....##....
....##....
....##....
....##....
...####...
@Z 0
#######.
#....##.
....##..
....##..
...##...
..##....
..##....
.##.....
##....#.
#######.
@0 0
..###...
.##.##..
##...##.
##...##.
##...##.
##...##.
##...##.
##...##.
.##.##..
..###...
@1 0
.##..
###..
.##..
.##..
.##..
.##..
.##..
.##..
.##..
####.
@2 0
.####..
##..##.
....##.
....##.
...##..
..##...
.##....
##.....
##...#.
######.
@3 0
.####..
##..##.
....##.
....##.
..###..
....##.
....##.
....##.
##..##.
.####..
@4 0
....##..
...###..
..#.##..
..#.##..
.#..##..
#...##..
#######.
....##..
....##..
...####.
@5 0
######.
##.....
##.....
#####..
....##.
....##.
....##.
....##.
##..##.
.####..
@6 0
..###..
.##....
##.....
#####..
##..##.
##..##.
##..##.
##..##.
##..##.
.####..
@7 0
######.
#...##.
....##.
...##..
...##..
..##...
..##...
..##...
.##....
.##....
@8 0
.####..
##..##.
##..##.
##..##.
.####..
##..##.
##..##.
##..##.
##..##.
.####..
@9 0
.####..
##..##.
##..##.
##..##.
##..##.
.#####.
....##.
....##.
...##..
.###...
@. 8
##.
##.
@, 8
##.
##.
.#.
#..
@; 3
##.
##.
...
...
...
##.
##.
.#.
#..
@: 3
##.
##.
...
...
...
##.
##.
@' 0
##.
##.
.#.
#..
@\\u2019 0
##.
##.
.#.
#..
@\\u2018 0
..#
.#.
.##
.##
@" 0
##.##.
##.##.
.#..#.
#..#..
@\\u201D 0
##.##.
##.##.
.#..#.
#..#..
@\\u201C 0
..#..#
.#..#.
.##.##
.##.##
@- 6
####.
@\\u2013 6
#######.
@\\u2014 6
############.
@\\u2192 4 0 u
....#...
.....#..
#######.
.....#..
....#...
@\\u2190 4 0 u
...#....
..#.....
#######.
..#.....
...#....
@! 0
##.
##.
##.
##.
##.
##.
##.
...
##.
##.
@? 0
.####..
##..##.
....##.
...##..
..##...
..##...
..##...
.......
..##...
..##...
@( 0
...#.
..#..
.##..
.##..
##...
##...
##...
##...
.##..
.##..
..#..
...#.
@) 0
.#...
..#..
..##.
..##.
...##
...##
...##
...##
..##.
..##.
..#..
.#...
@/ 0 0 u
......#
.....#.
.....#.
....#..
....#..
...#...
...#...
..#....
..#....
.#.....
.#.....
#......
@& 0
..###....
.##.##...
.##.##...
..###....
.###..##.
##.##.#..
##..##...
##..##...
##...###.
.####..#.
@\\xB7 5 0 u
##.
##.
@+ 4
..#...
..#...
#####.
..#...
..#...
@\\xD7 4 0 u
#...#.
.#.#..
..#...
.#.#..
#...#.
\`,t=>t<=2?2:t<=6?1:t<=9?0:-1),r1=ti(15,\`
@a 4
.######.
##...##.
##...##.
##...##.
##...##.
##...##.
##...##.
.####.##
@b 0 1
###......
.##......
.##......
.##......
.######..
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.######..
@c 4
.#####..
##...##.
##......
##......
##......
##......
##....#.
.#####..
@d 0
....###.
.....##.
.....##.
.....##.
.######.
##...##.
##...##.
##...##.
##...##.
##...##.
##...##.
.####.##
@e 4
.#####..
##...##.
##...##.
#######.
##......
##......
##....#.
.#####..
@f 0
...####
..##..#
..##...
..##...
######.
..##...
..##...
..##...
..##...
..##...
..##...
..##...
..##...
..##...
.##....
@g 4
.######.
##...##.
##...##.
##...##.
##...##.
##...##.
##...##.
.######.
.....##.
.....##.
.#####..
@h 0 1
###......
.##......
.##......
.##......
.######..
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##....##
@i 0 1
....
.##.
.##.
....
###.
.##.
.##.
.##.
.##.
.##.
.##.
..##
@j 0
.....
..##.
..##.
.....
.###.
..##.
..##.
..##.
..##.
..##.
..##.
..##.
..##.
..##.
##...
@k 0 1
###......
.##......
.##......
.##......
.##...##.
.##..##..
.##.##...
.####....
.##.##...
.##..##..
.##...##.
.##....##
@l 0 1
###.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
.##.
..##
@m 4 1
######.####...
.##...##...##.
.##...##...##.
.##...##...##.
.##...##...##.
.##...##...##.
.##...##...##.
.##...##....##
@n 4 1
######...
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##....##
@o 4
.#####..
##...##.
##...##.
##...##.
##...##.
##...##.
##...##.
.#####..
@p 4 1
######...
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.######..
.##......
.##......
.##......
@q 4
.######.
##...##.
##...##.
##...##.
##...##.
##...##.
##...##.
.######.
.....##.
.....##.
.....##.
@r 4 1
###.###
.####..
.##....
.##....
.##....
.##....
.##....
.##....
@s 4
.#####.
##...#.
##.....
.###...
...###.
.....##
#....##
.#####.
@t 1 1
.##...
.##...
.##...
######
.##...
.##...
.##...
.##...
.##...
.##...
..###.
@u 4 1
###...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
..####.##
@v 4
##....##
##....##
.##...#.
.##..##.
..##.#..
..####..
...##...
...#....
@w 4
##...##...#.
##...##...#.
##...##...#.
.##.#.##.#..
.##.#.##.#..
..###..###..
..##...##...
..#....#....
@x 4
##...##.
.##..#..
..##.#..
...##...
...##...
..#.##..
.#...##.
##...##.
@y 4 1
###...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
..######.
......##.
......##.
..#####..
@z 4
#######.
#....##.
....##..
...##...
..##....
.##.....
##....#.
#######.
@A 0
.....##....
.....##....
....#.##...
....#.##...
...#..##...
...#...##..
..#....##..
..#######..
.#......##.
.#......##.
#.......##.
###....####
@D 0
######...
.##..##..
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##...##.
.##..##..
######...
@F 0
########.
.##....#.
.##....#.
.##......
.##..#...
.#####...
.##..#...
.##......
.##......
.##......
.##......
####.....
@H 0
####..####.
.##....##..
.##....##..
.##....##..
.##....##..
.########..
.##....##..
.##....##..
.##....##..
.##....##..
.##....##..
####..####.
@N 0
###....###.
.##.....#..
.###....#..
.#.##...#..
.#.##...#..
.#..##..#..
.#..##..#..
.#...##.#..
.#...##.#..
.#....###..
.#.....##..
###.....#..
@S 0
..#####.
.##...##
##.....#
##......
.###....
..####..
....###.
......##
......##
#.....##
##...##.
#.####..
@W 0
####..###..####
.##....#.....#.
.##....#.....#.
.##....#.....#.
..##..###...#..
..##..#.##..#..
..##..#.##..#..
..##.#...##.#..
...###...###...
...##.....##...
....#.....#....
....#.....#....
@. 10
##.
##.
@, 10
##.
##.
.#.
#..
@; 4
##.
##.
...
...
...
...
##.
##.
.#.
#..
@: 4
##.
##.
...
...
...
...
##.
##.
@' 0
##.
##.
.#.
#..
@\\u2019 0
##.
##.
.#.
#..
@- 8
#####.
@? 0
.#####.
##...##
.....##
.....##
....##.
...##..
..##...
..##...
.......
.......
..##...
..##...
@! 0
##.
##.
##.
##.
##.
##.
##.
##.
...
...
##.
##.
\`,t=>t<=3?3:t<=6?2:t<=9?1:t<=11?0:-1),s1=Cn(8,\`
@A 0
.#####.
##...##
##...##
##...##
#######
##...##
##...##
##...##
@B 0
######.
##...##
##...##
######.
##...##
##...##
##...##
######.
@C 0
.######
##.....
##.....
##.....
##.....
##.....
##.....
.######
@D 0
######.
##...##
##...##
##...##
##...##
##...##
##...##
######.
@E 0
#####
##...
##...
####.
##...
##...
##...
#####
@F 0
#####
##...
##...
####.
##...
##...
##...
##...
@G 0
.######
##.....
##.....
##..###
##...##
##...##
##...##
.######
@H 0
##...##
##...##
##...##
#######
##...##
##...##
##...##
##...##
@I 0
##
##
##
##
##
##
##
##
@J 0
.....##
.....##
.....##
.....##
.....##
##...##
##...##
.#####.
@K 0
##...##
##..##.
##.##..
####...
##.##..
##..##.
##...##
##...##
@L 0
##...
##...
##...
##...
##...
##...
##...
#####
@M 0
##....##
###..###
##.##.##
##....##
##....##
##....##
##....##
##....##
@N 0
##...##
###..##
####.##
##.####
##..###
##...##
##...##
##...##
@O 0
.#####.
##...##
##...##
##...##
##...##
##...##
##...##
.#####.
@P 0
######.
##...##
##...##
######.
##.....
##.....
##.....
##.....
@Q 0
.#####.
##...##
##...##
##...##
##...##
##.####
##..##.
.###.##
@R 0
######.
##...##
##...##
######.
##.##..
##..##.
##...##
##...##
@S 0
.######
##.....
##.....
.#####.
.....##
.....##
.....##
######.
@T 0
######
..##..
..##..
..##..
..##..
..##..
..##..
..##..
@U 0
##...##
##...##
##...##
##...##
##...##
##...##
##...##
.#####.
@V 0
##...##
##...##
##...##
.##.##.
.##.##.
.##.##.
..###..
..###..
@W 0
##....##
##....##
##....##
##....##
##.##.##
##.##.##
###..###
##....##
@X 0
##...##
##...##
.##.##.
..###..
..###..
.##.##.
##...##
##...##
@Y 0
##..##
##..##
##..##
.####.
..##..
..##..
..##..
..##..
@Z 0
#######
.....##
....##.
...##..
..##...
.##....
##.....
#######
@0 0
.####.
##..##
##..##
##..##
##..##
##..##
##..##
.####.
@1 0
..##..
####..
..##..
..##..
..##..
..##..
..##..
######
@2 0
#####.
....##
....##
...##.
..##..
.##...
##....
######
@3 0
#####.
....##
....##
..###.
....##
....##
....##
#####.
@4 0
##..##
##..##
##..##
##..##
######
....##
....##
....##
@5 0
######
##....
##....
#####.
....##
....##
....##
#####.
@6 0
.#####
##....
##....
#####.
##..##
##..##
##..##
.####.
@7 0
######
....##
....##
...##.
..##..
..##..
..##..
..##..
@8 0
.####.
##..##
##..##
.####.
##..##
##..##
##..##
.####.
@9 0
.####.
##..##
##..##
##..##
.#####
....##
....##
#####.
@\\xB7 3
##
##
@: 1
##
##
..
..
##
##
@. 6
##
##
@, 5
##
##
#.
@' 0
##
##
##
@! 0
##
##
##
##
##
..
##
##
@? 0
#####.
....##
....##
..###.
..##..
......
..##..
..##..
@/ 0
...##
...##
..##.
..##.
.##..
.##..
##...
##...
@- 4
#####
@\\u2013 4
######
@\\u2014 4
########
@( 0
.##
##.
##.
##.
##.
##.
##.
.##
@) 0
##.
.##
.##
.##
.##
.##
.##
##.
@+ 1
..##..
..##..
..##..
######
..##..
..##..
@\\u2192 0
...##...
....##..
.....##.
########
########
.....##.
....##..
...##...
@\\u2190 0
...##...
..##....
.##.....
########
########
.##.....
..##....
...##...
\`),a1=Cn(16,\`
@\\u7B2C 0
..##.....##....
.#####..######.
##..##.##..##..
.....##.....##.
...............
.#############.
.......##...##.
.......##...##.
.#############.
.##....##......
.##....##......
.##############
....##.##....##
...##..##....##
.##....##....##
##.....##..##..
@\\u4E00 7
###############
###############
@\\u4E8C 3
..###########..
..###########..
...............
...............
...............
...............
...............
...............
###############
###############
@\\u4E09 1
..###########..
..###########..
...............
...............
...............
...............
...#########...
...#########...
...............
...............
...............
...............
###############
###############
@\\u56DB 2
###############
###############
##...##..##..##
##...##..##..##
##...##..##..##
##..##...##..##
##.##....##..##
####.....######
##...........##
##...........##
##...........##
###############
###############
##...........##
@\\u4E94 1
.#############.
.#############.
.....##........
.....##........
.....##........
....#########..
....#########..
....##.....##..
....##.....##..
...##......##..
...##......##..
...##......##..
###############
###############
@\\u516D 0
......##.......
.......##......
.......##......
...............
###############
###############
...............
...............
....##...##....
....##...##....
...##.....##...
...##.....##...
..##.......##..
..##.......##..
.##.........##.
##...........##
@\\u4E03 0
....##.........
....##.........
....##.........
....##.........
....##.........
....##....#####
....###########
##########.....
######.........
....##.........
....##.........
....##.........
....##.......##
....##.......##
....###########
.....##########
@\\u306E 3
.....######....
...###.##.###..
..##...##...##.
.##....##....##
.##...##.....##
##....##.....##
##...##......##
##...##......##
##..##.......##
##.##........##
.###........##.
..........###..
........###....
@\\u3064 4
......#####....
...####...###..
####........##.
.............##
.............##
.............##
.............##
............##.
..........###..
......#####....
...####........
@\\u639F 0
.##.......##...
.##.......##...
.##...#########
.##...##.....##
#####.##.....##
.##............
.##....#######.
.##.##....##...
.####.....##...
###...##..#####
.##...##..##...
.##...##..##...
.##...##..##...
.##...######...
.##.........##.
##...........##
@\\u5922 0
....##....##...
###############
....##....##...
###############
##..##...##..##
##..##...##..##
###############
...............
###############
##....##.....##
.....#######...
....##.....##..
...##..##.##...
........###....
......###......
..#####........
@\\u66F8 0
..###########..
.......##..##..
###############
.......##..##..
..###########..
.......##......
.#############.
.......##......
###############
###############
...............
..###########..
..##.......##..
..###########..
..##.......##..
..###########..
@\\u2014 7
###############
###############
\`),ut={NIGHT5:{h:5,base:5,gap:2,space:3,glyphs:Zu},NIGHT7:{h:9,base:7,gap:1,space:3,glyphs:za},NIGHT7I:Qa({h:9,base:7,gap:0,space:4,glyphs:za},t=>t<=3?1:t<=6?0:-1),NIGHT9:{h:12,base:9,gap:1,space:4,glyphs:Za},NIGHT9I:Qa({h:12,base:9,gap:1,space:4,glyphs:Za},t=>t<=2?2:t<=5?1:t<=8?0:-1),NIGHT12:{h:15,base:12,gap:1,space:4,glyphs:Qu},NIGHT10I:{h:13,base:10,gap:-2,space:5,glyphs:o1},NIGHT12I:{h:15,base:12,gap:-3,space:6,glyphs:r1},NUMERAL32:{h:32,base:32,gap:3,space:8,glyphs:t1},MICRO3:{h:5,base:5,gap:1,space:3,glyphs:n1},KEYS9:{h:9,base:9,gap:1,space:3,glyphs:e1},NIGHT5S:{h:8,base:8,gap:3,space:4,glyphs:s1},JP16:{h:16,base:16,gap:1,space:7,glyphs:a1}},i1={NIGHT5:{cap:5,xh:5,desc:0,line:8},NIGHT7:{cap:7,xh:5,desc:2,line:10},NIGHT7I:{cap:7,xh:5,desc:2,line:10},NIGHT9:{cap:9,xh:6,desc:3,line:13},NIGHT9I:{cap:9,xh:6,desc:3,line:13},NIGHT12:{cap:12,xh:8,desc:3,line:17},NIGHT10I:{cap:10,xh:7,desc:3,line:15},NIGHT12I:{cap:12,xh:8,desc:3,line:18},NUMERAL32:{cap:32,xh:32,desc:0,line:32},MICRO3:{cap:5,xh:4,desc:0,line:6},KEYS9:{cap:9,xh:9,desc:0,line:10},NIGHT5S:{cap:8,xh:8,desc:0,line:11},JP16:{cap:16,xh:16,desc:0,line:16}};ei=1;c1={"\\uE000":[[8,1],[1,7],[8,7],[15,7]],"\\uE001":[[2,1],[2,2]]},u1=["..a....a..",".a......a.","a........a",".a......a.","..a....a.."];Lo=t=>t==="\\uE000"||t==="\\uE001"||t==="LR"||t[0]==="["&&t.length>2;l1=t=>Object.keys(ut).find(n=>ut[n]===t)||"NIGHT12",m1={night:["K9","K8",null,"K0"],nightmare:["P5","E1",null,"S1"],light:["M3","M2",null,"W0"],ult:["P5","P4","P3",null],fusion:["W1","C1","D3",null]}});function pt(t,n=0,e=0){let o=Math.imul(t|0,374761393)+Math.imul(n|0,668265263)+Math.imul(e|0,2147483647)|0;return o=Math.imul(o^o>>>13,1274126177),o^=o>>>16,(o>>>0)/4294967296}function A(t,n,e,o){t.fillStyle=rt(o),t.fillRect(Math.round(n),Math.round(e),1,1)}function rn(t,n,e,o,s,r){o<=0||s<=0||(t.fillStyle=rt(r),t.fillRect(Math.round(n),Math.round(e),Math.round(o),Math.round(s)))}function is(t,n,e,o,s,r,a,i=0,u=0){if(!(a<=0)){if(a>=1)return rn(t,n,e,o,s,r);t.fillStyle=rt(r),n=Math.round(n),e=Math.round(e);for(let c=e;c<e+s;c++)for(let l=n;l<n+o;l++)V(l-i,c-u,a)&&t.fillRect(l,c,1,1)}}function J(t,n,e,o,s,r=0,a=0){(s>=1||s>0&&V(Math.round(n)-r,Math.round(e)-a,s))&&A(t,n,e,o)}function Gt(t,n,e,o,s=0,r=0){if(n<=0)return;if(n>=1)return e(t);let a=t.canvas.width,i=t.canvas.height,u=ai[Bo]||(ai[Bo]=document.createElement("canvas"));(u.width!==a||u.height!==i)&&(u.width=a,u.height=i);let c=u.getContext("2d",{willReadFrequently:!0});c.imageSmoothingEnabled=!1,c.clearRect(0,0,a,i),Bo++;try{e(c)}finally{Bo--}let[l,m,h,f]=o||[0,0,a,i];if(l=Math.max(0,Math.floor(l)),m=Math.max(0,Math.floor(m)),h=Math.min(a-l,Math.ceil(h)),f=Math.min(i-m,Math.ceil(f)),h<=0||f<=0)return;let b=c.getImageData(l,m,h,f),d=b.data;for(let p=0;p<f;p++)for(let M=0;M<h;M++){let x=(p*h+M)*4+3;d[x]&&!V(l+M-s,m+p-r,n)&&(d[x]=0)}c.putImageData(b,l,m),t.drawImage(u,l,m,h,f,l,m,h,f)}function Qn(t,n,e,o,s,r=26){let a=t.canvas.width,i=t.canvas.height,u=Math.max(1,Math.floor(n)-1),c=Math.max(1,Math.floor(e)-1),l=Math.min(a-1,Math.ceil(n+o)+1),m=Math.min(i-1,Math.ceil(e+s)+1);if(l<=u||m<=c)return;let h=l-u+2,f=m-c+2,b=t.getImageData(u-1,c-1,h,f),d=b.data,p=new Uint8ClampedArray(d),M=new Float32Array(h*f);for(let y=0;y<h*f;y++)M[y]=d[y*4+3]<128?-999:.3*d[y*4]+.59*d[y*4+1]+.11*d[y*4+2];let x=!1;for(let y=1;y<f-1;y++)for(let k=1;k<h-1;k++){let w=y*h+k;if(M[w]<0)continue;let g=0,R=[];for(let I=-1;I<=1;I++)for(let v=-1;v<=1;v++){if(!v&&!I)continue;let Y=(y+I)*h+k+v;R.push(Y),Math.abs(M[Y]-M[w])<r&&g++}if(g>=2)continue;let C=R.map(I=>M[I]).sort((I,v)=>I-v)[4];if(Math.abs(M[w]-C)<r)continue;let P=new Map,S=R[0],E=0;for(let I of R){let v=d[I*4]<<16|d[I*4+1]<<8|d[I*4+2],Y=(P.get(v)||0)+1;P.set(v,Y),Y>E&&d[I*4+3]>=128&&(E=Y,S=I)}for(let I=0;I<4;I++)p[w*4+I]=d[S*4+I];x=!0}x&&(b.data.set(p),t.putImageData(b,u-1,c-1))}function z(t,n,e=0){return n?Ct(t,n)+e*Math.max(0,Array.from(n).length-1):0}function it(t,n,e,o,s,r,a="left",i=0){let u=z(n,e,i),c=Math.round(a==="left"?o:a==="center"?o-u/2:o-u),l=c;if(!i)return dt(t,n,e,c,s,rt(r)),{x:l,w:u};for(let m of e){if(m===" "){c+=n.space+n.gap+i;continue}dt(t,n,m,c,s,rt(r)),c+=Ct(n,m)+n.gap+i}return{x:l,w:u}}function Ho(t,n,e,o=0){let s=[];for(let r of n.split(\`
\`)){let a="";for(let i of r.split(" ")){let u=a?a+" "+i:i;a&&z(t,u,o)>e?(s.push(a),a=i):a=u}a&&s.push(a)}return s}function di(t,n,e,o,s,r,a,i=null,u=.5,c="left"){let l=z(n,e),m=Math.round(c==="center"?o-l/2:o),h=Math.round(s),f=cs(b=>dt(b,n,e,2,2,"#fff"),l+4,n.h+4);return h1(t,f,m-2,h-2,r,a,i,u),{x:m,w:l}}function cs(t,n,e){let o=document.createElement("canvas");o.width=Math.max(1,n),o.height=Math.max(1,e);let s=o.getContext("2d",{willReadFrequently:!0});s.imageSmoothingEnabled=!1,t(s);let r=s.getImageData(0,0,o.width,o.height).data,a=new Uint8Array(o.width*o.height);for(let i=0;i<a.length;i++)a[i]=r[i*4+3]>127?1:0;return{w:o.width,h:o.height,d:a}}function h1(t,n,e,o,s,r,a=null,i=.5,u=!1){for(let c=-2;c<n.h+2;c++)for(let l=-2;l<n.w+2;l++){if(kt(n,l,c)){A(t,e+l,o+c,s);continue}let m=kt(n,l-1,c)||kt(n,l+1,c)||kt(n,l,c-1)||kt(n,l,c+1),h=m||kt(n,l-1,c-1)||kt(n,l+1,c-1)||kt(n,l-1,c+1)||kt(n,l+1,c+1);r&&(u?h:m)?A(t,e+l,o+c,r):a&&(r?h||f1(n,l,c):m||h)&&J(t,e+l,o+c,a,i)}}function f1(t,n,e){return kt(t,n-2,e)||kt(t,n+2,e)||kt(t,n,e-2)||kt(t,n,e+2)}function Gn(t,n,e,o,s=[]){t=Math.round(t),n=Math.round(n),e=Math.round(e),o=Math.round(o);let r=Math.abs(e-t),a=-Math.abs(o-n),i=t<e?1:-1,u=n<o?1:-1,c=r+a;for(;;){let l=s[s.length-1];if((!l||l[0]!==t||l[1]!==n)&&s.push([t,n]),t===e&&n===o)break;let m=2*c;m>=a&&(c+=a,t+=i),m<=r&&(c+=r,n+=u)}return s}function te(t){if(t.length<3)return t;let n=[t[0]];for(let e=1;e<t.length-1;e++){let o=n[n.length-1],s=t[e+1];Math.abs(o[0]-s[0])===1&&Math.abs(o[1]-s[1])===1||n.push(t[e])}return n.push(t[t.length-1]),n}function ii(t,n=!1){let e=[],o=t.length/2;for(let s=0;s<o-1+(n?1:0);s++){let r=(s+1)%o;Gn(t[s*2],t[s*2+1],t[r*2],t[r*2+1],e)}return e}function Fn(t,n){let e=[],o=null;for(let s=0;s<=n;s++){let r=t(s/n);o&&Gn(o[0],o[1],r[0],r[1],e),o=r}return te(e)}function Zt(t,n,e,o,s,r){let a=Math.max(12,Math.ceil(Math.abs(r-s)*Math.max(e,o)*1.5));return Fn(i=>{let u=s+(r-s)*i;return[t+Math.cos(u)*e,n+Math.sin(u)*o]},a)}function It(t,n,e,o=0,s=0){t.fillStyle=rt(e);for(let[r,a]of n)t.fillRect(o+r,s+a,1,1)}function $o(t,n,e,o,s,r){It(t,Gn(n,e,o,s),r)}function xt(t,n,e){let o=[],s=e,r=0,a=1-e,i=new Set,u=(c,l)=>{let m=(c+512)*2048+l+512;i.has(m)||(i.add(m),o.push([c,l]))};for(;s>=r;){for(let[c,l]of[[s,r],[r,s],[-r,s],[-s,r],[-s,-r],[-r,-s],[r,-s],[s,-r]])u(t+c,n+l);r++,a<0?a+=2*r+1:(s--,a+=2*(r-s)+1)}return o}function M1(t,n,e){let o=!1,s=t.length/2;for(let r=0,a=s-1;r<s;a=r++){let i=t[r*2],u=t[r*2+1],c=t[a*2],l=t[a*2+1];u>e!=l>e&&n<(c-i)*(e-u)/(l-u)+i&&(o=!o)}return o}function x1(t,n=!1,e="T1"){let r=b1[t%3],a=(x,y)=>x>=0&&y>=0&&x<24&&y<30&&M1(r,x+.5,y+.5),i=24*.48,u=30*.46,c=d1[t%3].map(x=>[r[x*2],r[x*2+1]]),l=c.map(([x,y])=>Math.atan2(y-u,x-i)).sort((x,y)=>x-y),m=(x,y)=>{let k=Math.atan2(y+.5-u,x+.5-i),w=0;for(;w<l.length&&k>l[w];)w++;return w%l.length},h=new Set;for(let[x,y]of c)for(let[k,w]of te(Gn(i-.5,u-.5,x-.5+(x>i?-1:1),y-.5+(y>u?-1:1))))h.add(w*24+k);let f=[],b=p1[t%3],d=Math.round(i-5.5),p=Math.round(u-5.5)+1,M=(x,y)=>{let k=b[y-p];return!!k&&k[x-d]==="#"};for(let x=0;x<30;x++){let y="",k=-1,w=-1;for(let g=0;g<24;g++)a(g,x)&&(k<0&&(k=g),w=g);for(let g=0;g<24;g++){if(!a(g,x)){y+=".";continue}let R=!a(g-1,x)||!a(g+1,x)||!a(g,x-1)||!a(g,x+1);if(n){y+=R&&(g+x)%2===0?"o":".";continue}if(M(g,x)){y+="m";continue}if(M(g-1,x)||M(g+1,x)||M(g,x-1)||M(g,x+1)){y+="w";continue}let P=x>3&&x<26;if(g===k&&P){y+="p";continue}if(g===w&&P){y+="c";continue}if(R&&!a(g,x-1)){y+="w";continue}if(R&&!a(g,x+1)){y+=x>30*.8?"k":"i";continue}if(h.has(x*24+g)){y+=x<u?"w":"l";continue}let S=m(g,x),E=l[(S+l.length-1)%l.length],I=l[S],v=(E+I)/2;I<E&&(v+=Math.PI);let G=Math.cos(v- -2.2)+(pt(t*97+S)-.5)*.5;y+=G>.55?"w":G>-.35?"l":S%2?"i":"k"}f.push(y)}return n?{rows:f,key:{o:e}}:{rows:f,key:{w:"W0",l:"W1",i:"IC0",k:"K8",p:"P4",c:"C1",m:"K7"}}}function On(t,n,e="T1"){let o=\`\${t}\${n?"L"+e:"W"}\`,s=ci.get(o);return s||ci.set(o,s=x1(t,n,e)),s}function pi(t,n,e,o,s,r){let a=3.4+o*.7,i=Math.floor((s+o*1.3)%a*8);if(i>=8)return;let u=i/7,c=Math.round(4+u*15),l=Math.round(5+u*14),m=(f,b)=>{let d=r.rows[b];return!!d&&d[f]!==void 0&&d[f]!=="."},h=i<2||i>5?1:2;m(c,l)&&A(t,n+c,e+l,"W0");for(let f=1;f<=h;f++)for(let[b,d]of[[f,0],[-f,0],[0,f],[0,-f]])m(c+b,l+d)&&A(t,n+c+b,e+l+d,f===1?"W0":"W1")}function on(t,n,e,o){if(n<0||e<0||n>=t.w||e>=t.h)return;let s=e*t.w+n;ui[o]>ui[t.d[s]]&&(t.d[s]=o)}function ss(t){let n=(o,s)=>o>=0&&s>=0&&o<t.w&&s<t.h?t.d[s*t.w+o]:0,e=[];for(let o=0;o<t.h;o++)for(let s=0;s<t.w;s++){if(n(s,o)!==1)continue;let r=n(s,o-1)===1||n(s,o+1)===1;n(s,o+1)!==1&&e.push([s,o+1]),r&&n(s+1,o)!==1&&e.push([s+1,o])}for(let[o,s]of e)on(t,o,s,3)}function li(t,n,e,o){let s=n-Math.floor((o-1)/2),r=e-Math.floor((o-1)/2);for(let a=0;a<o;a++)for(let i=0;i<o;i++){let u=s+i,c=r+a;if(u<0||c<0||u>=t.w||c>=t.h)continue;let l=i===0||a===0||i===o-1||a===o-1;t.d[c*t.w+u]=l?1:0}}function mi(t,n,e,o){for(let s=0;s<o;s++)for(let r=0;r<o;r++){let a=(r===0||r===o-1)&&(s===0||s===o-1);o>=4&&a||on(t,n-Math.floor((o-1)/2)+r,e-Math.floor((o-1)/2)+s,1)}}function g1(t,n){if(n<(t==="cooldown"?11:14)||!["design","code","motion","cooldown"].includes(t))return null;let e={w:n,h:n,d:new Uint8Array(n*n)},o=n/24;if(t==="code"){let s=Math.max(3,Math.round(5*o)),r=Math.floor((n-1)/2),a=Math.max(1,Math.round(2*o));for(let h=0;h<=s;h++)on(e,a+h,r-h,1),on(e,a+h,r+h,1),on(e,n-1-a-h,r-h,1),on(e,n-1-a-h,r+h,1);let i=n>=28?5:n>=20?4:3,c=i*4,l=r-Math.floor((c-1)/2),m=Math.floor(n/2)+1;for(let h=0;h<c;h++)on(e,m-Math.floor(h/i),l+h,1)}else if(t==="design"){let s=y=>y*o-.5,r=[3,18,7,3,17,21,21,6].map(s),a=[3,18,5.5,-3,18.5,27,21,6].map(s),i=Fn(y=>{let k=(1-y)**3,w=3*(1-y)**2*y,g=3*(1-y)*y*y,R=y**3;return[k*a[0]+w*a[2]+g*a[4]+R*a[6],k*a[1]+w*a[3]+g*a[5]+R*a[7]]},90);for(let[y,k]of i)on(e,y,k,1);let u=n>=28?5:n>=20?4:3,c=n>=30?3:2,[l,m,h,f,b,d,p,M]=r.map(y=>Math.round(y));ss(e);let x=(y,k,w,g)=>{let R=te(Gn(y,k,w,g));R.forEach(([C,P],S)=>{S<2||S>R.length-3||on(e,C,P,2)})};return x(l,m,h,f),x(p,M,b,d),li(e,l,m,u),li(e,p,M,u),mi(e,h,f,c),mi(e,b,d,c),e}else if(t==="cooldown"){let s=Math.max(4,Math.round(7.5*o)),r=n>=28?4:n>=20?3:2,a=n>=16,i=[];for(let E=1;E<=Math.max(2,s-(a?4:3));E++)i.push([0,-E]);for(let E=0;E<=Math.max(2,Math.round(s*.4));E++)i.push([E,0]);let u=(E,I)=>E*1024+I,c=E=>{if(!a)return E;let I=new Set(E.map(([Y,G])=>u(Y,G))),v=[...E];for(let[Y,G]of E)I.has(u(Y,G+1))||v.push([Y,G+1]),(I.has(u(Y,G-1))||I.has(u(Y,G+1)))&&!I.has(u(Y+1,G))&&v.push([Y+1,G]);return v},l=(E,I,v)=>E.every(([Y,G])=>I.every(([F,T])=>Math.max(Math.abs(Y-F),Math.abs(G-T))>=v)),m=c(i),h=E=>{let I=[];for(let v=1;v<=r;v++)I.push([E+r-v,-s+v]);return I},f=0;for(;f<12&&!l(c(h(f)),m,a?3:2);)f++;let b=f+r,d=[];for(let E=1;E<=b;E++)d.push([E,-s]);for(let E=1;E<=r;E++)d.push([b-E,-s-E],[b-E,-s+E]);let p=xt(0,0,s),M=([E,I])=>(Math.atan2(I,E)*180/Math.PI+90+720)%360,x=E=>d.some(([I,v])=>I===E[0]&&v===E[1])||l([E],d,3),y=10;for(;y<180&&!p.every(E=>M(E)>180||M(E)<y||x(E));)y++;let k=[];for(let E of p)(M(E)<.5||M(E)>=y)&&k.push(E);k.push(...d,...i);let w=99,g=-99,R=99,C=-99;for(let[E,I]of k)w=Math.min(w,E),g=Math.max(g,E),R=Math.min(R,I),C=Math.max(C,I);let P=Math.floor((n-(g-w+1))/2)-w,S=Math.floor((n-(C-R+1))/2)-R;for(let[E,I]of k)on(e,E+P,I+S,1);if(!a)return e}else{let s=Math.max(4,Math.round(6*o-.01)),r=Math.max(3,Math.round(5*o-.01)),a=2*s+1+2*r,i=Math.floor((n-a)/2)+s,u=Math.floor((n-1)/2);for(let c=0;c<3;c++)for(let[l,m]of xt(i+c*r,u,s))on(e,l,m,c<2?4:1)}return ss(e),e}function as(t,n){let e=t+"@"+n,o=Wo.get(e);if(o)return o;let s=g1(t,n);if(s)return Wo.set(e,s),s;let r={w:n,h:n,d:new Uint8Array(n*n)},a=Xo[t];if(a){let l=Math.max(12,Math.round(n*.58)),m=as(a[0],l),h=as(a[1],l),f=(n>=30?3:n>=24?2:1)+(n>=24&&a.includes("code")?1:0),b=(P,S)=>P>=0&&S>=0&&P<l&&S<l&&m.d[S*l+P]>0,d=P=>{for(let S=0;S<l;S++)for(let E=0;E<l;E++)if(h.d[S*l+E]){for(let I=-f;I<=f;I++)for(let v=-f;v<=f;v++)if(b(E+P+v,S+P+I))return!0}return!1},p=Math.round(l*.3);for(;p<n-l&&d(p);)p++;let M=l+p,x=new Uint8Array(M*M);for(let P=0;P<l;P++)for(let S=0;S<l;S++)m.d[P*l+S]&&(x[P*M+S]=m.d[P*l+S]),h.d[P*l+S]&&(x[(P+p)*M+S+p]=h.d[P*l+S]);let y=M,k=-1,w=M,g=-1;for(let P=0;P<M;P++)for(let S=0;S<M;S++)x[P*M+S]&&(S<y&&(y=S),S>k&&(k=S),P<w&&(w=P),P>g&&(g=P));let R=Math.floor((n-(k-y+1))/2)-y,C=Math.floor((n-(g-w+1))/2)-w;for(let P=0;P<M;P++)for(let S=0;S<M;S++){let E=x[P*M+S],I=S+R,v=P+C;E&&I>=0&&v>=0&&I<n&&v<n&&(r.d[v*n+I]=E)}return Wo.set(e,r),r}let i=n/24,u=l=>l*i-.5,c=(l,m)=>{for(let[h,f]of l)h>=0&&f>=0&&h<n&&f<n&&(r.d[f*n+h]===0||m===1)&&(r.d[f*n+h]=m)};for(let l of ke[t]||ke.keep){let m=l.dim?2:1;if(l.k==="l"||l.k==="L"){let h=[];for(let f=0;f<l.p.length;f++)h.push(u(l.p[f]));c(te(ii(h,l.k==="L")),m)}else if(l.k==="b"){let[h,f,b,d,p,M,x,y]=l.p.map(u);c(Fn(k=>{let w=(1-k)**3,g=3*(1-k)**2*k,R=3*(1-k)*k*k,C=k**3;return[w*h+g*b+R*p+C*x,w*f+g*d+R*M+C*y]},40),m)}else if(l.k==="a"){let[h,f,b,d,p]=l.c;c(Zt(u(h),u(f),b*i,b*i,d,p),m)}else if(l.k==="r"){let[h,f,b,d]=l.p,p=Math.round(u(h)),M=Math.round(u(f)),x=Math.round(u(h+b)),y=Math.round(u(f+d));c(ii([p,M,x,M,x,y,p,y],!0),1)}else if(l.k==="d"){let[h,f,b]=l.p,d=Math.max(.9,b*i),p=[];for(let M=Math.floor(u(f)-d);M<=Math.ceil(u(f)+d);M++)for(let x=Math.floor(u(h)-d);x<=Math.ceil(u(h)+d);x++)Math.hypot(x-u(h),M-u(f))<=d+.15&&p.push([x,M]);c(p,1)}}return n>=22&&ss(r),Wo.set(e,r),r}function jo(t,n,e,o,s,r,a,i,u=.25,c=-1,l=r){let m=as(n,s),h={w:m.w,h:m.h,d:m.d.map(b=>b===1?1:0)},f=(b,d)=>b>=0&&d>=0&&b<m.w&&d<m.h?m.d[d*m.w+b]:0;if(i)for(let b=-1;b<=m.h;b++)for(let d=-1;d<=m.w;d++)f(d,b)||(f(d-1,b)||f(d+1,b)||f(d,b-1)||f(d,b+1))&&J(t,e+d,o+b,i,u);for(let b=0;b<m.h;b++)for(let d=0;d<m.w;d++){let p=m.d[b*m.w+d];p===1?A(t,e+d,o+b,r):p===2?A(t,e+d,o+b,l):p===3&&a?A(t,e+d,o+b,a):p===4&&A(t,e+d,o+b,a||r)}if(c>=0){let b=0;for(let d=0;d<h.d.length;d++)h.d[d]&&b++;if(b){let d=Math.floor(c*b)%b;for(let p=0;p<h.d.length;p++)if(h.d[p]&&d--===0){A(t,e+p%m.w,o+Math.floor(p/m.w),"W0");break}}}}function ne(t,n,e,o,s){let r=w1[n];if(r){t.fillStyle=rt(s);for(let a=0;a<r.length;a++)for(let i=0;i<r[a].length;i++)r[a][i]==="#"&&t.fillRect(Math.round(e)+i,Math.round(o)+a,1,1)}}function Xe(t,n,e,o,s,r){let a=t.canvas.width,i=t.canvas.height,u=Math.max(0,Math.floor(n)),c=Math.max(0,Math.floor(e)),l=Math.min(a,Math.ceil(n+o)),m=Math.min(i,Math.ceil(e+s));if(l<=u||m<=c)return;let h=t.getImageData(u,c,l-u,m-c),f=h.data,b=R=>.3*f[R]+.59*f[R+1]+.11*f[R+2],d=rt(r),p=.3*parseInt(d.slice(1,3),16)+.59*parseInt(d.slice(3,5),16)+.11*parseInt(d.slice(5,7),16),M=-1,x=1e9;for(let R=0;R<f.length;R+=4)f[R+3]>127&&b(R)<x&&(x=b(R),M=R);if(M<0)return;let[y,k,w]=[f[M],f[M+1],f[M+2]],g=!1;for(let R=0;R<f.length;R+=4)f[R+3]>127&&b(R)>p+.5&&(f[R]=y,f[R+1]=k,f[R+2]=w,g=!0);g&&t.putImageData(h,u,c)}var hi,At,rt,tt,Wt,fi,zt,Rt,bi,xh,et,kn,_o,ht,at,ct,ai,Bo,kt,b1,d1,p1,ci,ke,Xo,Wo,ui,w1,Uo=Bt(()=>{Vn();An();nn();hi=nt,At=t=>hi=t||nt,rt=t=>hi[t]??nt[t]??t,tt=ut.NIGHT5,Wt=ut.NIGHT7,fi=ut.NIGHT7I,zt=ut.NIGHT9,Rt=ut.NIGHT12,bi=ut.NUMERAL32,xh=ut.KEYS9,et=(t,n=0,e=1)=>t<n?n:t>e?e:t,kn=t=>1-Math.pow(1-et(t),3),_o=t=>et(t)*et(t),ht=(t,n,e)=>et(Math.floor((t-n)/e*4+1e-6)/4);at=(t,n,e,o,s)=>rn(t,n,e,o,1,s),ct=(t,n,e,o,s)=>rn(t,n,e,1,o,s);ai=[],Bo=0;kt=(t,n,e)=>n>=0&&e>=0&&n<t.w&&e<t.h?t.d[e*t.w+n]:0;b1=[[6,2,13,0,17,1,18,3,21,3,23,7,23.5,20,21.5,26,16,29.5,7,29.5,2.5,26.5,.5,18,1,8],[1,8,6,3,14,.5,19.5,1.5,23,5.5,23.5,11,20.5,18.5,14.5,25.5,10.5,29.5,7.5,27.5,3,19.5,.5,13],[5.5,4,12,1,18.5,2,22.5,6.5,23.5,14,22.5,22,18.5,27.5,11,29.5,4.5,27.5,1,21.5,.5,11]],d1=[[1,5,7,10,12],[1,4,6,9,11],[1,3,5,8,10]],p1=[[".....#.....","...##.##...",".##.....##.","#......####","#.....#...#","#....#....#","#...#.....#","####......#",".##.....##.","...##.##...",".....#....."],[".....#.....","..#..#..#..","...#.#.#...",".#..###..#.","..#.###.#..","###########","..#.###.#..",".#..###..#.","...#.#.#...","..#..#..#..",".....#....."],["..####.....","..####.....","..####.....","..####.....","......##...","......###..","......##...","..####.....","..####.....","..####.....","..####....."]];ci=new Map;ke={design:[{k:"b",p:[3,18,7,3,17,21,21,6]},{k:"l",p:[3,18,7,3],dim:!0},{k:"l",p:[21,6,17,21],dim:!0},{k:"r",p:[1.6,16.6,2.8,2.8]},{k:"r",p:[19.6,4.6,2.8,2.8]},{k:"d",p:[7,3,1.1]},{k:"d",p:[17,21,1.1]}],code:[{k:"l",p:[8,7,3,12,8,17]},{k:"l",p:[16,7,21,12,16,17]},{k:"l",p:[14,4.5,10,19.5]}],motion:[{k:"a",c:[5.6,12,3.4,0,6.2832],dim:!0},{k:"a",c:[10.4,12,4.4,0,6.2832]},{k:"a",c:[16.4,12,5.4,0,6.2832]}],"3d":[{k:"L",p:[12,2.5,20.5,8,18,19.5,6,19.5,3.5,8]},{k:"l",p:[12,2.5,12,12.5]},{k:"l",p:[3.5,8,12,12.5,20.5,8]},{k:"l",p:[6,19.5,12,12.5,18,19.5]}],speed:[{k:"l",p:[4.5,6,10.5,12,4.5,18]},{k:"l",p:[12,6,18,12,12,18]}],power:[{k:"L",p:[12,2.5,13.8,10.2,21.5,12,13.8,13.8,12,21.5,10.2,13.8,2.5,12,10.2,10.2]}],cooldown:[{k:"a",c:[12,13.5,7.5,-.35,4.7124]},{k:"l",p:[12,6,18,6]},{k:"l",p:[15,3,18,6,15,9]},{k:"l",p:[12,9.5,12,13.5,15,13.5]}],area:[{k:"l",p:[3,8,3,3,8,3]},{k:"l",p:[16,3,21,3,21,8]},{k:"l",p:[21,16,21,21,16,21]},{k:"l",p:[8,21,3,21,3,16]},{k:"l",p:[9,12,15,12]},{k:"l",p:[12,9,12,15]}],magnet:[{k:"l",p:[6,3.5,6,12]},{k:"a",c:[12,12,6,3.1416,0]},{k:"l",p:[18,12,18,3.5]},{k:"l",p:[6,3.5,9.5,3.5,9.5,12]},{k:"a",c:[12,12,2.5,3.1416,0]},{k:"l",p:[14.5,12,14.5,3.5,18,3.5]},{k:"l",p:[6,7.5,9.5,7.5]},{k:"l",p:[14.5,7.5,18,7.5]}],recovery:[{k:"b",p:[12,20,5,15,3,11,4.5,8]},{k:"b",p:[4.5,8,6,5,10,5,12,8.5]},{k:"b",p:[12,8.5,14,5,18,5,19.5,8]},{k:"b",p:[19.5,8,21,11,19,15,12,20]}],charge:[{k:"L",p:[13.5,2.5,5.5,13.5,11.5,13.5,10.5,21.5,18.5,10.5,12.5,10.5]}],keep:[{k:"L",p:[12,2.5,19.5,12,12,21.5,4.5,12]},{k:"l",p:[4.5,12,19.5,12]},{k:"L",p:[12,2.5,9.5,12,12,21.5,14.5,12]}]};ke.rest=ke.recovery;ke.core=ke.keep;Xo={algorithmic:["design","code"],spline:["design","motion"],reaper:["design","3d"],automation:["code","motion"],procedural:["code","3d"],spatial:["motion","3d"]},Wo=new Map,ui=[0,4,2,3,1];w1={"?":[".###.","#...#","....#","..##.","..#..",".....","..#.."],"\\u2039":["..#",".#.","#..",".#.","..#"],"\\u203A":["#..",".#.","..#",".#.","#.."],pause:["##.##","##.##","##.##","##.##","##.##","##.##"],starFill:["..#..",".###.","#####",".###.","..#.."],starEmpty:["..#..",".#.#.","#...#",".#.#.","..#.."],star4:["..#..","..#..","##.##","..#..","..#.."],chevron:["#.............#",".##.........##.","...##.....##...",".....##.##.....",".......#......."],arrowNE:["..###","...##","..#.#",".#...","#...."]}});var gi={};Dr(gi,{JP_FAM:()=>Rn,JP_GLUE:()=>qo,JP_HINT:()=>Jo,JP_PX:()=>y1,jpBreak:()=>zo,jpLayout:()=>xi,jpLine:()=>je,jpText:()=>A1,jpWidth:()=>ee,loadJP:()=>k1});async function k1(){if(!Mi){Mi=!0;let t=new FontFace(Rn,\`url(\${P1})\`);document.fonts.add(await t.load())}await document.fonts.load(\`10px "\${Rn}"\`,"\\u5922\\u306E\\u66F8\\u639F"),await document.fonts.load(\`\${10*8}px "\${Rn}"\`,"\\u5922\\u306E\\u66F8\\u639F")}function R1(){let t=document.createElement("canvas").getContext("2d");return t.font=\`\${10*8}px "\${Rn}"\`,t}function xi(t,n){return zo(t,n,ee)}function I1(t){let n=[],e=!1,o=!1;for(let s of t){if(s===Jo){e=!0;continue}if(s===qo){o=!0;continue}let r=S1(s),a=n[n.length-1];if(a&&o){o=!1,a.s+=s,a.ke=r;continue}if(a&&C1.includes(s)){a.s+=s,r!=="other"&&(a.ke=r);continue}if(a&&E1.includes(a.s[a.s.length-1])&&!e){a.s+=s,a.k=a.ke=r;continue}if(!!a&&!e&&(r!=="hira"&&r!=="other"&&a.ke===r&&!/[、。！？]$/.test(a.s)||a.ke==="lat"&&/^[0-9]+$/.test(a.s)&&(r==="kanji"||s==="\\u3064"))){a.s+=s,a.ke=r;continue}n.push({s,k:r,ke:r,hint:e}),e=!1}return n}function D1(t,n,e){let o=t.s[t.s.length-1],s=t.s.length>1?t.s[t.s.length-2]:e,r=Vo.includes(o)&&!("\\u3068\\u3067".includes(o)&&v1(s)),a=0;if(/[。！？]/.test(o)?a-=120:o==="\\u3001"&&(a-=70),n.hint&&(a-=90),/[。！？、]/.test(o)||n.hint)return a;let i=n.s[0];return t.ke==="hira"&&n.k==="hira"?a+=r&&!Vo.includes(i)?15:Vo.includes(i)?300:250:t.ke==="hira"?a+=r||o==="\\u3089"?-35:-10:n.k==="hira"?a+=Vo.includes(i)?300:400:a+=10,a}function zo(t,n,e=ee){let o=[];for(let s of t.split(\`
\`))o.push(...T1(s,n,e));return o}function T1(t,n,e){let o=I1(t),s=o.length;if(!s)return[];let r=new Map,a=(d,p)=>{let M=d*1e3+p,x=r.get(M);return x===void 0&&r.set(M,x=e(o.slice(d,p).map(y=>y.s).join(""))),x},i=(d,p)=>{let M=o[p-1].s;return p-d===1||a(d,p)<=n+1||"\\u3001\\u3002".includes(M[M.length-1])&&a(d,p)<=n+5},u=0;for(let d=0;d<s;){let p=d+1;for(;p<s&&i(d,p+1);)p++;u++,d=p}let c=(d,p)=>[...o.slice(d,p).map(M=>M.s).join("")].length,l=d=>{let p=[],M=1/0,x=0,y=[],k=(w,g,R,C)=>{if(!(R-300>=M)){if(g===d-1){if(!i(w,s))return;let P=[...y,s],S=P.map((Y,G)=>a(G?P[G-1]:0,Y)),E=S[S.length-1],I=R+(S.length>1?.45*(Math.max(...S)-Math.min(...S.slice(0,-1),E+12)):0),v=c(w,s);d>1&&v<=2?I+=600:d>1&&v<=4&&(I+=120),I<M&&(M=I,p=[...y],x=C);return}for(let P=w+1;P<=s-(d-1-g)&&i(w,P);P++){y.push(P);let S=o[P-2],E=D1(o[P-1],o[P],S?S.s[S.s.length-1]:"");k(P,g+1,R+E,Math.max(C,E)),y.pop()}}};return k(0,0,0,0),{best:p,bestC:M,worst:x}},{best:m,bestC:h,worst:f}=l(u);if(f>=200&&u+1<=s){let d=l(u+1);d.bestC+150<h&&({best:m,bestC:h,worst:f}=d)}let b=[...m,s];return b.map((d,p)=>o.slice(p?b[p-1]:0,d).map(M=>M.s).join(""))}function ee(t){return Math.ceil(R1().measureText(t).width/8)}function Y1(){if(us)return us;let t="\\u7B2C\\u4E00\\u306E\\u639F\\u30FC\\u30B2\\u30FC\\u30B8\\u5922WASD",n=document.createElement("canvas"),e=n.getContext("2d");e.font=\`\${10*8}px "\${Rn}"\`;let o=Math.ceil(e.measureText(t).width/8)+3,s=Math.ceil(10*1.6);n.width=o*8,n.height=s*8,e=n.getContext("2d");let r=[0,0],a=1/0;for(let i=0;i<8;i++)for(let u=0;u<8;u++){e.clearRect(0,0,n.width,n.height),e.font=\`\${10*8}px "\${Rn}"\`,e.fillStyle="#000",e.fillText(t,u,Math.round(10*1.1)*8+i);let c=e.getImageData(0,0,n.width,n.height).data,l=0;for(let m=0;m<s;m++)for(let h=0;h<o;h++){let f=c[((m*8+4)*n.width+h*8+4)*4+3];l+=Math.min(f,255-f)}l<a&&(a=l,r=[u,i])}return us=r}function je(t,n,e,o,s){let[r,a]=Y1(),i=document.createElement("canvas"),u=i.getContext("2d");u.font=\`\${10*8}px "\${Rn}"\`;let c=Math.ceil(u.measureText(n).width/8)+2,l=Math.ceil(10*1.5);i.width=c*8,i.height=l*8,u=i.getContext("2d"),u.font=\`\${10*8}px "\${Rn}"\`,u.fillStyle="#000";let m=Math.round(10*1.1);u.fillText(n,r,m*8+a);let h=u.getImageData(0,0,i.width,i.height).data;t.fillStyle=s;let f=Math.round(10*.25);for(let b=0;b<l;b++)for(let d=0;d<c;d++)h[((b*8+4)*i.width+d*8+4)*4+3]>=128&&t.fillRect(Math.round(e)+d,Math.round(o)+b-f,1,1)}function A1(t,n,e,o,s,r,a=15){let i=xi(n,r);return i.forEach((u,c)=>je(t,u,e,o+c*a,s)),i.length}var Rn,y1,P1,C1,Mi,Jo,qo,Vo,S1,E1,v1,us,ls=Bt(()=>{Rn="PixelMplus10",y1=10,P1="data:font/woff2;base64,d09GMgABAAAAACNEAAwAAAAAhwQAACLvAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYAilwIBBEICoHwBIG2EwuFOAABNgIkA4cIBCAFgxYHIBuIZkUHYtg4AAiRhxpwh2HjAMoMOsz+vyU3RUSXgWD7r1BjOJxOxBKZIuTgGnJ3dHFq0v7YiGX+ZUrGRrK7yO5VCNNHXonGHcObYtv1TmwQfv338d8I7CSo0Xu+R2n4gHzLMRoTz+QaNdZWTv8dj6YliCaGrMlLs0oOpiUwnf7w8IzLE/HPE5IQGusi3KG00PbWxXhxq5cG19VNrbUHQtTIkcyy+rm+KS6SRDcSMokhJA7H0T1Zje5kNInbQxbxX7P//6zfHWHUqJmRjyek7emhDz1Qc4lXIubLtRk/Yh5qIWiu4vn3b+e+X1sGieWBfLCEoyjQRBJv3iLMl9L5PUke2FXxhPM99lBSsIeSZkh+d9AUZ+R6bmTl89dBBoCgTsQLE8qVmdL+D/DnD8/DudZiExzZgEY6lLgoi6L/LjpoN6h5LjHzX/zlq2b7FyQo0RG4lHkxFJ1DKi9UTkXp/vDe7r7D7n//m4c0wBeAGZFQAAXJY0rHS7T2k7TnE9RYgCMlJ55DiNWlFF20OVSeq650SGUoKo+bvnRdexnq2u/bjRMrImYsSyNDmp5lTGsubXtrVKFKFRUhIMbIYf99E8v9hCPh+ueWc+lsgxGpGzReVfsqVI3w9+8NAPOfBCSgo7oBHsxd5Yd/CWGpasYqWco34H4iWzUCE3qOb7AG+vUC5y9K4N2EUUDqF80LhPMjvWWfkYx7/+OIawDZvjb7mrRq12udKKUVt7Y26BGPeXKSlyNhnbwh56TiNOIeeRC99+P7abGiQf6x0geBgIYZOy58VNNILyOMMc0hx5xywTV3PPLEGy2EPkMmzFiwZc+RBz9+hgEOTAmLwK3wFpwCdyHa6noajFifprmmlaa95hkW46S4qlY2vkp8SXKSmhykp/SC9TlmLsTFuZxoFNulb8VRasqxWqW16comfwaZkW/JsXRaaa1s1h6LJ+uHTdA2Y5nlZfJuVCm4bNZYtRK1g+5OHj4e/h5hdXd1v/rbxn+Tj69wa6PjMKgpWDf4r6d9YBANoyxUjs6GHEOz8fHjTxMLCb+TB6meqcOpyWlj85P/admfqSgiANiVC7TcdcCV9NSAKj5vrUqD6dNNOQwKBlaceKmigTb6ix2n2MyeczXwIBqiNzAe2Bxw5sv3S0Lx382uENopm/y/AeH/UEGjenUqJWwlqSfpn+qfqp/Kn/KD8sXP3uGe/cK1iJw5psuTz632xs1jO600UEc5ZRRTQD555JJNO81UKFMCwoQIEsCPFw92LBjRUMgkIgECIZdYftFj0/3V71X96rrJtsnclH151JjfcHV+Up9Zn16fUs98rqz7q+uos61LP7WeCmv+apSq0o7yB5vlz+V3+7/777uikvXt7ObL5vPmXIEv35z3veZbs62uZ3dnW2aHLouzDpeKS9nF/8yhxZ1k2qSquOOxidiY4b/o4+GHoXPciuuxHM5FpZEZfXcRNKFGQdtBOPCi3fUnbHipb6uvqM+pN/AUqXuusgPzTot+z7HTteoqu0pO5LiLJ9IopVIo+ZIiFCf485vjblPl7TD8kSy7K9EN4sa0UICVq1y2yjqtjTJeRiSgx9wgPJIYAcvnakcx9lRahkOSLEVAMrKIgOGIwxvUGBffQicRGFWSKak3jmmgsNoxIYqSYFTkTPIa2CcbS1vLAdZbSnb1JsZiZg+0dpKlvLGzYYBotspCHFtIWCNVJKBAZzMdS5k2ENFHPbGykrCuOKJSGaakCJBes0G6sfNqB1VziGvOaTHkcjHjOspyzYsjWyRLMWvgOyQ+JAM7ILCMZSailVzubQvUQm0Aa8WsLqLHShmYtqWxHMCYvdUAqlr29ttYxORmSaCEeKPfOO7VxwyvmJAvp174+x4Q+MZKDEFtKqNPBKxsZeXTe+BQxknDNvgtFika0+gxBOPHvr7EVyMj1cYNawRMJkhSy7Ne2SiEYCX8kD3yry2H9EPFWbTBJJAESYv0LZggjFhW/95Ry+vOMmGq2fVUFUjAqMZMOg6wXMrkepsut3woLzXtK2fCQhx185TfnZ3RwNMyWJE7U6g9gTYLAWhlJRYzHT3hmyWhS3/RxGplwNC1i6VXn7DRWMtrjTIMdraqILKzDcrDuqnQ8E4VBZyqQOruZrvaaLw8OtG5mlD3CWWGkmpBqlI5k4KSE/blaxo/9bORHasffSQmkxyOBFbHqIW2GGB94PEU7lKQrc9daQ9BudehZlksZmHu2WUaca6oAY0iGPbDUD/uuiAOTm20cMw3nE6iFVY1JGuy4TzRCrMWKI5gY3RKNVxd4NShM4Lo43LNdm6rseta4U1mhkd5FapLZd59sqxQcpVm7Hy3oB6K5q1M8zmKSqHuvaGfBxhvaC8ruc1Ks6oMtav3qSQpy9+UzczX9ePd73iaQWhiFqS6HbPGEnC5JFMMX63W0IyDxWHz7YzGhpEhscoNhI4QGemwYb9GSdEqCCxEoAAFdzeKoTV9l6vA5GstCG8e1fuKLcBqIaINwgSZquAAAvY7QsZYs2QCghRX3uH3KVYgWF2p40dCgXP5cy1r4mAlaSvMlWS8HX8yGXapXGuT4egbkyNL5YVxc0b1hz1RKNWKijYea9IFmhhvnYDD4kbG3lSh5ckkroHuwjjkE64UWZmBFIvGG1+UxFaBEtZGnp6lhKkTZAIj2sQThTFHSBVme0mvCl0ZTpGwPT4iTD7oVXjPDZNJBmij8HQ7gK/TECjL2I7CeQ4VRK11cit24esZdyw7Gd0zgEkRxtjEtkEroLyItWSNNqC96cMqZ1rovF+V7ABJFoxcEFdkWhKtaHH4gKPoW3hqkBa6GFrK9mwWpAhAo0pS7qnAG5Vd1GjiWU1mYBtVYT9VY1TCAv75NdCpy8nfwWFQzm9qrIr/HC7gYlQbfO4KhUA7qcOFgywpxULIUDXI7y2gJ8Dv1IDMjeKzSFeGaTWLjg0yuWzZCvJCNF5XWxK+PX6+mC1D/YFyNAIKk7oWjaH0Aec2jQrjggIBQnntM9uYjzW0YCGkm1nVF7bF55QJiutDEEE9Jwy0pJpoBE+tND5sh7xByGpy/ZUXm+jUtXOis3KqmSfPUwR/sO0EVc3OL6Pt0hv1OvJGgcjnkupSyW0DCQOT9Jt/dhhqmrw0SJ9LMEZs8hd3IZzZFRXZvE2K7ULndqevWgxBpvAlK4TVZ26XcDeC71rOLblS1NGWsRT3N1ZWXGqxeWLwta/eC9kY3cWA89lKKIOJck1s8FWg5Pz5sZb5oOg6sAUO4XHyKMMCamYd51IAKnL1hEVZAYSbWfHJASCC3HQddRS31J5MtDijbZcL/l58An5wycV5q/xgsckgakt66Kya3IYu3C5M+au/wijX8rlOzuIkIyFTcqxoHNEalFo1Z2JJXsUQ7RmzGN9pLFv+EPMwZ8qKj0SMHmm26g2H9yW4ezZdaIVS6PLRTC8omPxnCEM6SAlZp1NxnEehr/eZDdi1kwkzUqNFsMpNLVYXnRW6DVbrVq1ZJ3KZx4MNbtSVPFtz0DlKcTS3kNkdHT3d1SdY17PZzZvJIxIvNfXZ/18xlu/U76Txpelm/DdlsWXpBbqBxktiGvhhAwL8g9DTWcLbDGNY/IeS2AiaPORygWshSwQyNlil7TDWsmTX/EeIJ5FhFz6llmCtW67Uayzypx4xk9WJjopuoudB5HvMopS+OwZcLa7JwkGKnQ0q3EmEWj14Zt+CAb2gJJpvscG5loJqZ/WRN4Edih0pF6OU7Ew7RkE1l0vagJ10wHlXm++5drsmiZgpup35bOmBJgZ+akm3I6m9YqXjkQEyqK6b/EX7+GeKxhHgY3LyYhtrVhTu9s5vS/5RRBe8IYp7xyBOdo2G3wQFS1cQ/Xq0LKgveb1uZG2vPlNspzYjo9/pSTYiyxTBNHF9nlzQQoFqx+KPxg8nQNCn2V6NIJopNvGsyrYWHI0BU44qJHzVMy0q5khWEgU+6neWYk/RgpmtTp3ofWDtMIWJY6qgKoVkshqJze/qc5suzL4zURbX4cYerGEb4E5tGzPqoBRxdXTnGJyYt7WiOPmPeY+xDeWahdC1wDfDBuSZnA3D+0ib1VwLPVJ4Z36ycwJtwJrKLeBPgBwzggRGrNl6yN9dknc2xGdxuLf4VWIZSXixNmFyj8EhzhMOSiLQTWTv4oahGGy/Rd5kr+xhhn/6VYp4UzAk6rhDO7EfFeSno9jEldoozxtmQR3AUTKWk2Y3f0rlPYLkbtH7aDGgzwvHJJ4V2+E/8aCjyKHF+uRTctUuKaRMv42n0imXkPBbWppSxEfj2rLuIGGsFEDJZQbRmZyjlvesRanD+vAXOzvmcz44pT3HHT+J+aX34ZKpnZGLKTTOEzcIAso6g8JDS3JNtABUJ7ijHX81QHbEKcPnDwqHjipPksig6USj4osl8HBFTXWVzjGC464nEwcBfLCgLZjknXSRTAkkvmms91KENOO2jbK0lBfQYq8UgDPR0fmoJvWhoSYN1xnj8cqnELBovO9yntFLYNXizRKFmoaIYNLTnLQkmcLXGkRFzJmmnsOlsVWaMXa7HUrmlt6UPKZClzN27knwe96e1hEYMF/0xtOBJbR1TNKa7nXfLA9NaqZ2fTi+Hlw7NWKB1gvFx05tRoKqDOAl/44+YV5o12X4W+O4uniiotLxRXH1Rl/8DkrtgFHs6zF3bgrXZMolWVTnFnOks76FMt1jiyajy7BrNG23AIY0Xk0aULXb1oSd5eNLW0Oaoyg5Lalmu71C6BrBYUJ2duKQqyjw22cktEroUMTGIzJeAGZc934YNNMCsSyPopaRS7jH2rHiBwghB696VMexLVXxvytURL0EZIStBhrCq7l1fDYdG8WgcpNY5OpOG4coUaMyCFPH1cdhMhgxMz/6yEns0hY/ep+zGh17THJzW+WtHs/s/QfsSEgizxpwmbz6XFxEAM1bzmPo4rglRChyIuKUfMoY3ru73f4bjpvaJbj9qCAdegn47yjY5w8L8cc6r9Jgep/82enk11+DaBts/meqLJ4lIjK+NCjNYESyT4BzTenzqPsCHLCpLI1WLexTgHbaCB0Vmv1HjKTtFHex4cpUm9gCZjoMIwvV/YYzDq7hc40UB64f51ME14PbEDRNMzCgmtzJn4WPCDR0OegS+c7Ar84ttQtdrv45cSCb+ePeQtd8XXMMy1wUk6FV0QNWZ53/ef/etL+JhfgoKj7YLE7+uQP53550XLDdI8bCi1Cnof5knrQX6hM0OPeQ5uqUhF3/o7e+TePsrfud8Hitptjd7CK1gCMtcVb5iWOIspAT1hZFD5BLA2j9yfw7uXazxCWgh2kMVgqZFa9NJV1WSpBLuxaNzJD/4TIAhfbkGfXn3widh777KA3vbIFQIUbA4lb83P2uWvAljdxUQT94FEr/zKBKkTQDqIc+NG6xzbYeOifuFwTdx0VhBvVduFmPtnu6QFBYrM6/8x2m81eD7XeCsWtNKEw8ZDd1IE80t6+AowsnxiFCyhn0YDsam42oSXb5FezOL3cBQ++ZiBLFZ7PirRXR9y9GyfIGDH9nMKmqN5TOaKihHOVx9Xy+d+iuSfrEvUWDOSnFYvQYGgTKO4gw0EWQGhdRdKiG7LSeu2sxgtqvNCOzqihvcH9E8x8n9WSTeBG6VyJ5PoaiCLJVorTXnfwhn44k3a6Cqvulw3MGagG6lSSSEzPL2EOA6Nwbj+UPIFeUYQxl0AhXcMkLw2+pgVw8N/McVjxCCyP4VfeeeIBZbtnUotNUgTR1ac1dx/Jhv27fO9jGRepChp9h+e9d4z+ZzMC+2Mp2iRbylIQhwJOv6iPguN6WsWj77x56vUfYA1ejWKGMrm0vWLwy5pk8WJfLkZO1YRQPGHyyJic7xJbo7DgjY9g9IT0FnyDh+lGx9glLksaDVVi5hEacrprUoorQi3oMKtLwklQJL27rZ6a5ALCHH13769ES6KdGxBScxqVT1wdlTwiVmu+qHz/3yf8E5QQlSJNtJTpZXl0KGt9IoSCK0I6gkSwqhVZ+SwXOwc8hNOnkwAN5fEcMNHbAUrgd7+tl6uCTGbmwjmGmtH5YAKyxzvjBRlTwUKquCt+k80jPkyC3rKp0r/p/PfBCobcIUFSsXcY/jMTojTvQUhI9hnAlXEVvgF4K0OOg0YN1pLI6NNWZEQSjI/BGlC0kZ8UYjUS6NKoPO1TFyCpwxdwHCK4+AQxKa9pNHUx3PI88lB4iwNftRJeTrqaCvgjKdDJiFfzJefwpGqpI5Al5TVOWskIGHswTZNNjkwxr6I1uzJkOtD4iYtB/TP8MAW4ErmhuBLkcH4gql8SQQQaPWCqqSfRC+fqiv7L8h0irUA7ALigF3VGxcAlE8HIeHZE352LUccNKGJ3I6pjQg5eRQBYhAfdsBU0xt2QjR7Fy6EwFO8zY34UOcY5/heKGnhrEvRauXhqKIDpbDjZJhPiJUwd8UuIIlinTRAsdFag20JeRLMonHqTkgZfVwyhqsJpNwiOjtyEWjreoY6eD6SxyWhNGLX12KLclAUpCi4BKPunihPCwiyYns6WiB1AtXD2xuoCLWCA4J2xWe5dYchnR3KXSQ+HDlPfJpRrQvFnGHmb7f68X13mdJW3mOgbPnNcc3aCLiJ2Iod4NTSFSez1ux/+98cGz7fGXf/y0dI8RBuI/LxuviTG2JJ3QV5n71ATHSjJnZGDNJOOYABLWFDAi+aj9+b8/VQ9UJ6i8px8D/kKaHaJElIw5sVaNdppLeVTZHEb921nagCFjRyTrwqjzZxZiC9jzjYzGOh4bxsbxdqiWdSJztVqKpNfdjkPXjCOvnNq+RMP5HZSaR1UrKUaqbIUsoSsu3fJ1JTAUo7QZPwLtvntlH0tJZKyJeWBA37+DJfnFGtHupY2BefJQ51/ZuhUBGd2IP5DjTiGYR2Tc56VSLklGZFQ9RRBJIin6cQGOG70lO6P7aZVIasyjfL5dYx3SJVnLVqXG/X1UytNxBjalO3KHyxWNexl9ozxX6cC+ii4hExudHeGH6Fy9fnsQN7btktNzhXPFUxRrprIXXG1jTq7oPkpK4ByIl5Gh4FlANujrXrZcrvp71xUkj8uAbYvyXE1V62jr1vaRKGMbK2MxTka0T9LsnmpI6QLGPeun5Mm4Z2QIghjkifoZG8eE1wufE4M2jrNIzGFA11ctRtUjoSRlAkOF32xqvoFE3kZCylmyhXSs4nF0v5JO7/aMq2vcd+u0R2KgSLO+GBHzlMsuDGZTE4+W+IOjLdd4ham0uZvwRbu4tbbIrgxi+H2odmjQ0SbLM3Uox8G1NnPMUqObeccj1OiSdtzaSLY2oJTJXbFIlYqyDuU3kZhXcZV1Me06lja6yVyQ2GQU7BfS9joiPv2CfvwM4k+hnwyPfJoyNpYiRzBGJ2K2jfChNOc7af5tHvdwN2lo932pfjQfETytAkOP7bje3ayxhkJh+D6/nzohNe5DGdf184QN8a7IscTxlpqdsb6udurkmB11xc9+rKX8+b8/CIysQbRt30fhqPPGea8rce/7QU0iXGQeGGuWemepgVbuVepdQKXL3l4vfGF23vCp8t4MXh6/iXcmLpXjwOgIaZSCRFCASo+P/G8S2a3LA/hVXjH8RvvXSNIKtfk+jwKPB9m/4MZ5ZHRYh0vNFN+1fM+TkZ/LdUVUvsj0c16uwSVysM75PVzIViqOSG9/bb83xvHK1se57YEL17Y/tgffiXduexyvqoiqWMx7TPE6jNpzXWX5f6PDDxHJa5lRZmd4W/dxUpmzOtqkD5XzJ3Scs1QC70rwzlIf5YF8V4J7lRoA455uvb1jSSrpseL7PUIL4ExwS6Rx9h8pGH/1H5/L08Zc6vKMc9ZnV+a9o65xrl3ZdX/rsjN+jfR/NkQJxlw+j+n/HKrQsBOD8QB95Ytf9dNvcJwT5ytorTTl5yOMUf/WxzvF96si21YQp8kqMJ35hpQqMzhtuUoNr1UZvbXGVwMnvx9W+U5ZEYHdxd6HmIc234luvVSOuP2+qVtfbOvMozXZPM1t48R11qfR0gYxXxeQUsSqOxFpPyjrKJFIvQImcReXkpXekxK0bJujWE8HzPmh71hGrrvSpsDUtrXqZg2oC6q0JpRPs1N9Uq8in1pasX6BdQMaFsa5YyA5JAbbHe8rmzjmyIutHFwow28A+r4jwzYi+cdD31wV9J1f7inrtD3eqBnD5X/XBhodubRRarynxDApmBOjXcC6A187UmoDSSJEZnB0QuPXCNtgvW3Yo3d527i3TbNG4emiU+O9td//Nep3CjcL51eoap+5mSq/BtFwj0G8ZzE/zMndCzuVcyoUtPo5ycQ5W3NlvHfTOmxOvZ46sl28lft2Nj25m7qV+wzErtYAcSnjPdRPSkuSg/M2Bnq4iF/DtrcI6VuIIbfGpZpOCNXr1WwrMlSPHGS8D/OpXa2vSIlj2Y4D9xEZ7xSwI/vRq+TULbfacExVGnS17lzOD8wpkIZzeb14nXT0LVLzFUzdZuepSVyvRlk/KnXRBk8l8fqig/seXLbg5DzNvLUNa7c8pWtN9wE1v2PxV//x0Z1Sl76KGp5OVeN7Aj4qgpbWrvJ27lMLRyx1Qc9D25ScJDV/yjxUyonqpTtQ6nbzC+ciqRowg3XqWTfOJS5WLqeVvDzMbYMx5MdF0Y/1mAusmiFsTm779QddVp1ZygUmuth8rKn95R8/SDcBqU2nRNtsGOqZOBri7d55yMSlYhodY9cDFQ1yVE/usJX/hcjFl1HqXlizj/jizkbtUOAsn2fwKzPLFYEodYWRSG8y54o/4KtVT/PG6WulxFwxpWysP2DvcoXjLjXmFMeN8/AJ8J7Qeqwl1tqa0KRWHIfFKVWgZtPxerhSqsIqTRTPL7miqlRX++2rji1dxtC7PGq38U4CEZSOoMc5xQMjJ/VlV/Fka2S8dcHB9rNCn/D2V9MjqYI1Leoxc/nesp4Iti4pqQtkBY+p4aHw1y+o9lazHZZrXx6awnyQREZuv0LTLsrvlONlvny8drv9tWuKWHd16yXzdfUFUVWXKHZOquhDJd5BKrINlQS4NF4/MaYvXMdhI/0nHPf2M9rsPN4vMXR/8yf9/m/VGtC+mfAe5V2/y7+Gy3X56Mg9I9FUs2Rdcn99ek/ffQdfm4T8HuRPujn5+fQ3NjclGBvebtZMccraze/Q6Bk72a0jra934ZyAB+cJROvfwzok4bJSOh4fpeJcF51tV2tqnDO+u1VKqxKVQVfpjrGm+BfvIGHJ61NQ+STn4TJUtu/vtknv+h8fo7HmWUeXS2/gn3OB3sRAf+Lx+78/Hy4+87z25StSVbraSaOvpCrqWIeeMU8vMghaizSgJGN89o1PlOZ9dgdG+ZBRautS3VGbktbKurLvbTtvj0H/MBUM+N3N3h3pfc+quo+qGnRKpf28Nf7+v36qt6PEFb/+cJVWrJLRPE8TzTuL6xn6ggJ19y8rr/X8WB0HNZVK8/PBiQNEj+29S6O//Ct9j3hElLRSKuV8xfhOPn6+B9LJcVyXuh6SrCMiwZxIBrFuve1WFdItIAe0xR4ezId1JMS25DhoVXp0gXGaSt/G+k63lh/fcqQACXWoRy+HlecMn228q2LzB4WTesXdi98pZzlgcHF8tr1xCInOe0v2uEDPW4mILRm//6ufkuoqSetEVVeMdwrxLHZ5tLDktZdzSfhOGBH1P6Xb9fu/PxIJyjsvwjXvyHu0vlfkvTHeqXzEOjUaiuhRWZyYWcqWVZpM47Kpcu88KCFRIakkfv3Vn4Cd3leBXF09Gt/36ec8dva7tg1wTmxd3Zr12tYZnufj5+dPoZ/d+z4qNXUXpbuPI8k63nrOlXeH/+Pzw8PP/D6pFvDOVO6DFD/l57jbrz9+nsx57sx914YxaAwc3ln6nRXvcSGRIrg67LFKzalG7MZBZqPmPXxXtI/cbgLIYeEs0tCwCnOqpGJ7IMVKiKhTGZtP6lW3snjiFwcfNOKTV1P36rBF6zhSMl3FPLg878S5GGLRCf4uzzQiUezwM0htez3d4HZqZ2vgPD8/H4+rrzxfUNDCwkRVEtcw6ZDhdKu3TuclEOAa/wAhehMof/8kUgnyU2p4Ynjijaf4SxnH3wpEZDeUbnhfHITrv2dEeWoqys+bThodBq6gw070Jzu2ZXbFhjr4p7r1DL3ucqWjrOvu1Xr+xLMJddoz+vUynC7/+b/jMhX6/KJj2xLUY0GVecddZ+Gug7P0AxtG3GdFhYEzM3uleqWeRFt+6IXTl9/EKLHZsVlQVZwEpW/e4dbnlaaCimT9pXqR6VZNhL+8fQkRT/+8q68+3iTvTLJjfeWDFlER+9lKnPB9t1SWsmGnnpqyofDwipPIkcUuxfo8fvnJ4mz5OJdF7PTM84/PpVEm/rCWQgWY91PPubZ9HBGRQdwLXFBpO6DzRLuctvwpgeKYdZholkR0L4aNsWUqUNSfGlHu3jHfgPf6Uok7Vpx/bKaPxq8/XOMuTn0F8bnateqqCJIyqbGMbVu8tGitKiV8DIVJ2/31W+8veHAmbJmw6k0E+pd/7GVcWbnnn2Jvna5BOlUiHbq66O2zfy6C2AGuFbmojJGxqly7rvaqxua6MI9GjqEBo7+c33j8aNl7R4Gm/Dyu53IG8h0sbLkpS+zolGA/G9cXPCLH3OjGXFyEfpqkP1gU5iy15m7JAzJcr4oMKmtVZdmpZbFK59w+Sa7QxkLgwLk+wf6eVy4QrnaJ02nv/bmOq9h9iaSkn19DEpHxa3h+nr//r8/Ott7NHs/5oZTsa4+xZ/3Z+nOullJU5mqDouwWttbUCdhpJHOARM98jmPbuC/8k5BEgqhzJRigRECyDgRRoPPOyKCVR2m/fmuxq0RCOtIhIWoqztkkpKFTUmykJ0UgGjWX1QWjFvpp94K4SJCtm9KxQPkFPlgL7/AEpEBtoPtkKr2hcM2Sy5XD2J0WoURh4r1n2ex5bCkaHIDhguqKLZuU2pbIlnK2P5AIpcvGvp/2Cfr8nkGKMNI9TIPCd5pIRSI3fbvGH09Zu89uZylFoqN0ybz5r98KtjFz9fY9FvmscaZcEu/ysgnn6sAOc7/DhEtUPDEHD4GXpz/ZeFCuzhuJ3ZSMF7pDUY4ZmBZ/Df0nvhODTsXH6CZvv3CCHLHavu+0XB03+LfBsZS57O6uqH11PsqnqubCKFdKKRVBEiVCqypy38o6kxwHxiWIItveBvQNO9Yr08zLZPVF3Ef179IqwoswGr+C8yiV2EH73C9hHEtQciHDPS3F5XJ1VTlvCVuFLfQ7ujGKEEylGWC0a0/Vxp5SWO/dqrsRSCq9atUPtEjZLVotPbgQbUSChk1VpC9T77uEzEPhmrXHwEXJbzntp1v3z31grcg7N7k7m7vx9Oipb5fjPvmOD+wqiEeU7FvSU41gAk6Nezern5+nzW+pd257b9v7DI8OPlTsZ4hgG5Es07djy5NS1g9tEkYnGZKdxk55rB2fNV9Rx5+LHpZ+5O3WswG2JUyFCmRWvw9CfrvWj+9FTKGTfCWn8h8G8LZgbczrB6LIcoftgUKHAsF7gYAIl26/SZ7xOnai82KAiDA05op1Y14Wg2Te0iC8vMfWIPufIo23QkK4XFXAaZm0aRY3jm2SBGYRNvxCEmfiTACHdfxHQEcnHKfGK5JMmx0nCSA0R+CzWoMF6ALJg3hpkALP5rz1UW+9s7etciZW4rkUFuRy6DpIAoIjsPMLFcoSd16TfNzsUAgOtb7l3x5EE54Pko7vg+xUzUHBosGDolmJfOouTYADDg0s3Cr5L+dWq1oaZI0jVZvabq2mCu1Uq1QTz+jjBSmCUi3JmWoV7pYFZF5UwBbxbU2dr8KsRQpE3k8BLZ0iri3KqoJOJh6e267ay+dWG1WFzmhjVwOSQJJxeeUD9GaCQKqQVL7K5p07a2iLx9FBKHm2EgAAAA==",C1="\\u3001\\u3002\\uFF0C\\uFF0E\\u30FB\\uFF1A\\uFF1B\\uFF01\\uFF1F\\u30FC\\u300D\\u300F\\uFF09\\u3015\\u3011\\u3041\\u3043\\u3045\\u3047\\u3049\\u3063\\u3083\\u3085\\u3087\\u308E\\u30A1\\u30A3\\u30A5\\u30A7\\u30A9\\u30C3\\u30E3\\u30E5\\u30E7\\u30EE\\u3005\\u2026",Mi=!1;Jo="\\u200B",qo="\\u2060",Vo="\\u3092\\u304C\\u306B\\u3068\\u306F\\u3067\\u306E\\u3082\\u3078",S1=t=>/[A-Za-z0-9]/.test(t)?"lat":/[ァ-ヺー]/.test(t)?"kata":/[一-鿿々〆]/.test(t)?"kanji":/[ぁ-ゖ]/.test(t)?"hira":"other",E1="\\u300C\\u300E\\uFF08\\u3014\\u3010";v1=t=>/[一-鿿々〆]/.test(t);us=null});function Vt(t,n,e,o){t.fillStyle=o,t.fillRect(st(n),st(e),1,1)}function Li(t,n,e,o,s,r){t.fillStyle=r,t.fillRect(st(n),st(e),st(o),st(s))}function ms(t,n=0,e=0){let o=t*374761393+n*668265263+e*2147483647|0;return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296}function bs(t,n,e,o,s){t=st(t),n=st(n),e=st(e),o=st(o);let r=Math.abs(e-t),a=-Math.abs(o-n),i=t<e?1:-1,u=n<o?1:-1,c=Math.max(r,-a)+1,l=r+a;for(let m=0;s(t,n,m,c),!(t===e&&n===o);m++){let h=2*l;h>=a&&(l+=a,t+=i),h<=r&&(l+=r,n+=u)}}function Ki(t){t=Math.max(0,st(t));let n=wi.get(t);if(n)return n;let e=new Map,o=t,s=0,r=1-t,a=(u,c)=>e.set(u+","+c,[u,c]);for(;o>=s;){for(let[u,c]of[[o,s],[s,o],[-s,o],[-o,s],[-o,-s],[-s,-o],[s,-o],[o,-s]])a(u,c);s++,r<0?r+=2*s+1:(o--,r+=2*(s-o)+1)}let i=[...e.values()].sort((u,c)=>yi(u)-yi(c));return wi.set(t,i),i}function G1(t,n,e,o,s,r,a=1,i=1,u=null,c=2){if(n=st(n),e=st(e),o<.5)return;let l=Math.ceil((o+1)*i),m=Math.ceil(o+1);for(let h=-l;h<=l;h++)for(let f=-m;f<=m;f++){let b=Math.hypot(f,h/i),d=o+.5-b;if(d<0||d>=c||!Ln(n+f,e+h,a,n,e))continue;let p=d<1?u??s:r;p&&(t.fillStyle=p,t.fillRect(n+f,e+h,1,1))}}function Ni(t){let n=Pi.get(t);return n||(n=[],t.rows.forEach((e,o)=>{for(let s=0;s<e.length;s++){let r=e[s];if(r==="."||r===" ")continue;let a=t.key[r];a&&n.push([s,o,a])}}),Pi.set(t,n),n)}function Re(t,n,e,o,s=1,r=nt,a=!1,i){let u=Oi(n),c=st(e-(n.ox??0)),l=st(o-(n.oy??0));if(s>=1&&!i)return Zo(t,n,e,o,r,a);for(let[m,h,f]of Ni(n)){let b=a?u-1-m:m;if(!Ln(b,h,s))continue;let d=i?.[f]??f;t.fillStyle=vt(r,d),t.fillRect(c+b,l+h,1,1)}}function O1(t){if(t===nt)return"base";let n=Ci.get(t);return n||Ci.set(t,n="p"+ ++F1),n}function Zo(t,n,e,o,s=nt,r=!1){let a=xe(n,s,O1(s)),i=st(e-(n.ox??0)),u=st(o-(n.oy??0));if(!r)return t.drawImage(a,i,u);t.save(),t.translate(i+a.width,u),t.scale(-1,1),t.drawImage(a,0,0),t.restore()}function Bi(t,n,e=.5,o=!1){let s=ki.get(t);s||ki.set(t,s=new Map);let r=n+e+o,a=s.get(r);if(a)return a;let i=Oi(t)+2,u=t.rows.length+2,c=(h,f)=>{let d=t.rows[f-1]?.[h-1];return!!d&&d!=="."&&d!==" "&&!!t.key[d]},l=[];for(let h=0;h<u;h++){let f="";for(let b=0;b<i;b++){let d=c(b-1,h)||c(b+1,h)||c(b,h-1)||c(b,h+1)||o&&(c(b-1,h-1)||c(b+1,h-1)||c(b-1,h+1)||c(b+1,h+1));f+=!c(b,h)&&d&&Ln(b,h,e)?"h":"."}l.push(f)}let m=Ht(l,{h:n},(t.ox??0)+1,(t.oy??0)+1);return s.set(r,m),m}function gs(t,n,e,o,s,r=nt,a=1,i=1){let u=Bi(n,s,a);i>=1?(Zo(t,u,e,o,r),Zo(t,n,e,o,r)):(Re(t,u,e,o,i,r),Re(t,n,e,o,i,r))}function Wi(t,n,e,o,s){return[t,n,e,Ri(n),Ri(t),o].map(r=>K1.map(a=>Ht(r,{...L1,c:a},s,r.length-1>>1)))}function Hi(t,n,e,o,s=0,r=!1,a=nt,i=1){let u=r?_i:ds,c=Math.floor(o*10*(.9+.2*s)+s*6)%6,l=Math.floor(o*8+s*4)%4,m=u[c][l];gs(t,m,n,e,"K4",a,1,i)}function Xi(t,n,e,o,s=0,r=99,a=nt){let i=Math.floor(o*2.4*2+s*2)%2,u=Math.sin((o+s)*Math.PI*2*1.2)>0?-1:0,c=r<2&&Math.floor(o*12)%2===1?.5:1;gs(t,$i[i],n,e+u,"P1",a,1,c)}function Vi(t,n,e,o,s=!1,r=!1,a=nt,i=1){if(s)return gs(t,Ui,n,e,"Y0",a,1,i);let u=Math.floor(o*8)%4,l=ji[u===1||u===2?1:0];if(r&&U1(t,n,e,o,a),Re(t,Bi(l,"Y0",1),n,e,i,a),u===1||u===2)for(let[m,h]of[[-4,0],[4,0],[0,-6],[0,6]])Vt(t,n+m,e+h,vt(a,"Y1"));Re(t,l,n,e,i,a)}function U1(t,n,e,o,s=nt){let r=Math.floor(o/.12);t.fillStyle=vt(s,"Y2");for(let a=0;a<12;a++){let i=a/12*Math.PI*2+r*(Math.PI/24),u=a%2?7:9;for(let c=8;c<8+u;c++){let l=st(n+Math.cos(i)*c),m=st(e+Math.sin(i)*c*1.05);(c+a)%2===0&&t.fillRect(l,m,1,1)}}}function Ii(t,n,e,o){let s=e.map(([c,l])=>[c*t,l*n]),r=[o[0]*t,o[1]*n],a=s.map(([c,l])=>Math.atan2(l-r[1],c-r[0])),i=(c,l)=>{let m=!1;for(let h=0,f=s.length-1;h<s.length;f=h++){let[b,d]=s[h],[p,M]=s[f];d>l!=M>l&&c<(p-b)*(l-d)/(M-d)+b&&(m=!m)}return m},u=[];for(let c=0;c<n;c++){let l="";for(let m=0;m<t;m++){let h=m+.5,f=c+.5;if(!i(h,f)){l+=".";continue}let b=Math.atan2(f-r[1],h-r[0]),d=0;for(let p=0;p<s.length;p++){let M=a[p],y=a[(p+1)%s.length]-M;for(;y<0;)y+=Math.PI*2;let k=b-M;for(;k<0;)k+=Math.PI*2;if(k<=y){d=p;break}}l+=String(d)}u.push(l)}return u}function z1(t,n,e,o){let s=t[e],r=t[(e+1)%t.length],a=(s[0]+r[0])/2-n[0],i=(s[1]+r[1])/2-n[1],u=Math.hypot(a,i)||1,c=(a*.55-i*.85)/u,l=c>.3?0:c>-.5?1:2;return o[l]}function Sn(t,n,e=!0){let o=\`\${t}/\${n}/\${e}\`,s=hs.get(o);if(s)return s;let[r,a]=Qo[n],i=J1[t%3],u=q1[t%3],l=Ii(r,a,i,u).map(w=>w.split(""));if(!e){let w=l.map((R,C)=>R.map((P,S)=>P==="."?".":[[1,0],[-1,0],[0,1],[0,-1]].some(([I,v])=>(l[C+v]?.[S+I]??".")===".")&&(S+C)%2===0?"t":".").join("")),g=Ht(w,{t:"T1"},Math.floor(r/2),Math.floor(a/2));return hs.set(o,g),g}let m={p:"P4",c:"C1",L:"K7",T:"W1",r:"W0",g:"K8"},h=["W0","W1","IC0","K8"];if(i.forEach((w,g)=>m[String(g)]=z1(i,u,g,h)),n===24||n===12){let w=n===24?.56:.5,g=i.map(([C,P])=>[u[0]+(C-u[0])*w-.02,u[1]+(P-u[1])*w-.03]),R=Ii(r,a,g,u);for(let C=0;C<a;C++)for(let P=0;P<r;P++)R[C][P]!=="."&&l[C][P]!=="."&&(l[C][P]="T");for(let C=0;C<a;C++)for(let P=0;P<r;P++){if(l[C][P]!=="T")continue;let S=[l[C]?.[P+1],l[C]?.[P-1],l[C-1]?.[P],l[C+1]?.[P]].find(E=>E&&E!=="T"&&E!=="."&&E!=="r");S&&m[S]==="W1"&&(l[C][P]="r")}}for(let w=0;w<a;w++)for(let g=0;g<r;g++){let R=l[w][g];R==="."||m[R]!=="IC0"||(l[w+1]?.[g]??".")==="."&&(l[w][g]="g")}let f=n===24?2:1;for(let w of l){let g=w.findIndex(C=>C!=="."),R=w.length-1-[...w].reverse().findIndex(C=>C!==".");if(!(g<0)){for(let C=0;C<f&&g+C<=R;C++)w[g+C]="p";for(let C=0;C<f&&R-C>g+f-1;C++)w[R-C]="c"}}let b=n===24?11:n===12?6:3,d=Z1[V1[t%3]][b],p=Math.max(...d.map(w=>w.length)),M=Math.round(u[0]*r-p/2),x=Math.round(u[1]*a-d.length/2),y=(w,g)=>d[g-x]?.[w-M]==="#";for(let w=0;w<a;w++)for(let g=0;g<r;g++)l[w][g]==="."||l[w][g]==="p"||l[w][g]==="c"||y(g,w)&&(l[w][g]="L");let k=Ht(l.map(w=>w.join("")),m,Math.floor(r/2),Math.floor(a/2));return hs.set(o,k),k}function ws(t,n,e,o,s,r=0,a=!0,i=nt,u=1){let c=Sn(n,e,a);if(Re(t,c,o,s,u,i),!a||u<1)return;let l=Math.floor(r*8)%8,[m,h]=Qo[e];if(l>5)return;let f=Math.round((l+.5)/6*(m+h))-2,b=st(o-(c.ox??0)),d=st(s-(c.oy??0));t.fillStyle=vt(i,"W0");for(let[p,M,x]of Ni(c))(p+M===f||e===24&&p+M===f+1)&&x!=="P4"&&x!=="C1"&&t.fillRect(b+p,d+M,1,1)}function Ji(t,n,e,o,s=nt){n=st(n),e=st(e);let r=vt(s,"W0"),a=vt(s,"S5");if(o===0){for(let[i,u]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])Vt(t,n+i,e+u,r);for(let[i,u]of[[2,0],[-2,0],[0,2],[0,-2]])Vt(t,n+i,e+u,a)}else if(o===1){Vt(t,n,e,r);for(let i=1;i<=3;i++)for(let[u,c]of[[1,0],[-1,0],[0,1],[0,-1]])Vt(t,n+u*i,e+c*i,i===1?r:a);for(let[i,u]of[[1,1],[-1,1],[1,-1],[-1,-1]])Vt(t,n+i*2,e+u*2,a)}else if(o===2){for(let[i,u]of[[4,0],[-4,0],[0,4],[0,-4]])Vt(t,n+i,e+u,a);for(let[i,u]of[[2,2],[-2,2],[2,-2],[-2,-2]])Vt(t,n+i,e+u,a)}}function qi(t,n,e,o,s,r,a,i=nt,u=1){if(s<=0||s>=1)return;let c=1-Math.pow(1-Math.min(1,s/.7),3),l=2+(o-2)*c,m=s<.7?1:s<.8?.75:s<.9?.5:.25,h=s<.45?2:1;G1(t,n,e,l,vt(i,r),vt(i,a),m,u,null,h)}function zi(t){let n=[t[0],t[0],...t,t[t.length-1],t[t.length-1]],e=[];for(let o=0;o+3<n.length;o++){let[s,r,a,i]=[n[o],n[o+1],n[o+2],n[o+3]],u=Math.hypot(a.x-r.x,a.y-r.y),c=Math.max(4,Math.ceil(u*2));for(let l=0;l<c;l++){let m=l/c,h=m*m,f=h*m,b=(1-m)**3/6,d=(3*f-6*h+4)/6,p=(-3*f+3*h+3*m+1)/6,M=f/6;e.push({x:b*s.x+d*r.x+p*a.x+M*i.x,y:b*s.y+d*r.y+p*a.y+M*i.y})}}return e.push(t[t.length-1]),e}function Zi(t,n=.5){if(t.length<2)return t.slice();let e=[t[0]],o=n;for(let a=1;a<t.length;a++){let i=t[a-1],u=t[a],c=Math.hypot(u.x-i.x,u.y-i.y),l=0;for(;c>=o;)l+=o/Math.hypot(u.x-i.x,u.y-i.y),e.push({x:i.x+(u.x-i.x)*l,y:i.y+(u.y-i.y)*l}),c-=o,o=n;o-=c}let s=t[t.length-1],r=e[e.length-1];return Math.hypot(s.x-r.x,s.y-r.y)>n*.3&&e.push(s),e}function Q1(t,n=0,e=t.length-1){let o=[];for(let r=Math.max(0,n);r<=Math.min(t.length-1,e);r++){let a=st(t[r].x),i=st(t[r].y),u=o[o.length-1];if(!(u&&u[0]===a&&u[1]===i)){if(u&&(Math.abs(a-u[0])>1||Math.abs(i-u[1])>1)){let c=u[0],l=u[1];for(;Math.abs(a-c)>1||Math.abs(i-l)>1;)c+=Math.sign(a-c),l+=Math.sign(i-l),o.push([c,l,r])}o.push([a,i,r])}}let s=[];for(let r=0;r<o.length;r++){let a=o[r],i=s[s.length-1],u=o[r+1];i&&u&&Math.abs(i[0]-u[0])===1&&Math.abs(i[1]-u[1])===1||s.push(a)}return s}function nl(t,n,e,o,s={},r=nt,a=1){let i=n.length;if(i<2||o<=e)return null;let u=Math.floor(e*(i-1)),c=Math.floor(o*(i-1)),l=Q1(n,u,c),m=l.length;if(!m)return null;let h=s.ramp??tl,f=h.length-1,b=s.heat??1,d=Math.round((1-b)*2),p=s.width??3,M=new Map,x=(R,C)=>(C+4096)*16384+(R+4096),y=(R,C,P,S,E)=>{if(!Ln(R,C,E*a))return;let I=x(R,C),v=M.get(I);(!v||v[1]<S)&&M.set(I,[P,S])};for(let R=0;R<m;R++){let[C,P]=l[R],S=m===1?1:R/(m-1),E=m-1-R,I=S>.68?3:S>.3?2:1;E<=0?I=1:E<=2&&(I=Math.min(I,2)),I=Math.min(I,p);let v=S<.1?.25:S<.2?.5:S<.3?.75:1,Y=Math.min(f,Math.floor(S*(f+.999)));E<=1&&(Y=f),Y=Math.max(0,Y-d);let G=h[Y];if(s.alt&&E>2&&Math.floor(R/2)%3===0&&(G=s.alt),y(C,P,G,3,v),I<2)continue;let F=l[Math.max(0,R-2)],T=l[Math.min(m-1,R+2)],D=Math.abs(T[1]-F[1])>Math.abs(T[0]-F[0]),[L,O]=D?[1,0]:[0,-1];y(C-L,P-O,h[Math.max(0,Y-1)],1,v),I>=3&&y(C+L,P+O,h[Math.min(f,Y+1)],2,v)}let[k,w]=l[m-1];if(b>.5&&o<1)for(let[R,C]of[[1,0],[0,-1],[0,1],[-1,0]])M.has(x(k+R,w+C))||y(k+R,w+C,h[Math.max(0,f-2)],0,.5);for(let[R,[C]]of M)t.fillStyle=vt(r,C),t.fillRect(R%16384-4096,Math.floor(R/16384)-4096,1,1);let g=b>0?s.sparks??0:0;if(g>0&&m>6){let R=s.seed??1,C=Math.floor((s.t??0)*15);for(let P=0;P<g;P++){let S=Math.max(0,m-3-P*3-Math.floor(ms(R,P)*3)),[E,I]=l[S],v=l[Math.max(0,S-3)],Y=l[Math.min(m-1,S+3)],G=Y[0]-v[0],F=Y[1]-v[1],T=Math.hypot(G,F)||1,D=-F/T,L=G/T;L>0&&(D=-D,L=-L);let O=ms(R,P,7)<.7?1:-1,K=2+P*.9+ms(R,P,C)*1.2,N=st(E+D*K*O-G/T*(P*.6)),$=st(I+L*K*O-F/T*(P*.6)),j=P<2?1:P<4?.5:.25;Ln(N,$,j*a*b)&&Vt(t,N,$,vt(r,P<2?"W0":P%2?"C1":"W2"))}}return{x:k,y:w}}function Qi(t,n,e,o=.34,s=.8,r=nt,a=3){if(e<0||e>s+.15)return;let i=Math.min(1,e/o),u=1-(1-i)*(1-i),c=e<o?0:Math.min(1,(e-o)/(s-o)),l=Math.min(.98,c*c*.9),m=e<s?1:e<s+.05?.75:e<s+.1?.5:.25;nl(t,n,l,u,{heat:1-c,sparks:e<o+.08?5:0,seed:a,t:e},r,m),e<.2&&(vi(t,n[0],r),(u>=1||e>.12)&&vi(t,n[Math.floor(u*(n.length-1))],r))}function tc(t,n,e,o,s,r,a,i=nt,u="G0",c="G2"){let l=ut.MICRO3,m=Ct(l,n),h=st(e-m/2),f=st(o-2),b=Math.floor(a*60),d=Math.min(n.length,Math.floor(b/2)+1),p=Math.hypot(s,r)||1,M=-s/p,x=-r/p,y=e+M*(m/2+2.5),k=o+x*2.5,w=9;bs(y,k,y+M*w,k+x*w,(P,S,E,I)=>{let v=E/Math.max(1,I-1),Y=v<.4?1:v<.6?.75:v<.8?.5:.25;Ln(P,S,Y)&&Vt(t,P,S,vt(i,E<1?u:c))});let g=0,R=[];for(let P=0;P<d;P++){let S=n[P],E=l.glyphs[S]||l.glyphs["?"],I=E?Math.max(...E.map(v=>v.length)):l.space;E&&E.forEach((v,Y)=>{for(let G=0;G<v.length;G++)v[G]==="#"&&R.push([h+g+G,f+Y,P])}),g+=I+l.gap}let C=new Set(R.map(([P,S])=>P*4096+S));t.fillStyle=vt(i,c);for(let[P,S]of R)C.has(P*4096+S+1)||t.fillRect(P,S+1,1,1);t.fillStyle=vt(i,u);for(let[P,S,E]of R)b-E*2<2&&!Ln(P,S,.5)||t.fillRect(P,S,1,1);(d<n.length||a<.35)&&Math.floor(a*4)%2===0&&Li(t,h+g,f,1,5,vt(i,u))}function xs(t){let n=Math.hypot(...t);return[t[0]/n,t[1]/n,t[2]/n]}function ol(t,n,e,o){let s=n,r=Math.abs(s[0])<.9?[1,0,0]:[0,0,1],a=xs(Gi(r,s)),i=Gi(a,s),u=t[0]*a[0]+t[1]*a[1]+t[2]*a[2],c=t[0]*s[0]+t[1]*s[1]+t[2]*s[2],l=t[0]*i[0]+t[1]*i[1]+t[2]*i[2],m=Math.cos(e),h=Math.sin(e);[u,l]=[u*m+l*h,-u*h+l*m];let f=Math.cos(o),b=Math.sin(o);return[c,l]=[c*f-l*b,c*b+l*f],[u,c,l]}function rl(t){let n=[...new Map(t.map(r=>[r[0]+","+r[1],r])).values()].sort((r,a)=>r[0]-a[0]||r[1]-a[1]);if(n.length<3)return n;let e=(r,a,i)=>(a[0]-r[0])*(i[1]-r[1])-(a[1]-r[1])*(i[0]-r[0]),o=[];for(let r of n){for(;o.length>=2&&e(o[o.length-2],o[o.length-1],r)<=0;)o.pop();o.push(r)}let s=[];for(let r of[...n].reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return o.slice(0,-1).concat(s.slice(0,-1))}function Se(t,n,e,o="R5",s="Y1",r="W0"){let a=\`\${t}/\${n}/\${e%8}/\${o}/\${s}/\${r}\`,i=Fi.get(a);if(i)return i;let u=el[t],c=e%8/8*u.period,l=u.v.map(k=>ol(k,u.axis,c,.38)),m=Math.max(...l.map(k=>Math.hypot(k[0],k[1]))),h=(n-1)/2/m,f=(n-1)/2,b=l.map(k=>[st(f+k[0]*h),st(f-k[1]*h),k[2]]),d=Array.from({length:n},()=>Array(n).fill(".")),p=rl(b.map(([k,w])=>[k,w])),M=new Set;for(let k=0;k<p.length;k++){let w=p[k],g=p[(k+1)%p.length];bs(w[0],w[1],g[0],g[1],(R,C)=>{M.add(C*64+R),d[C]?.[R]!==void 0&&(d[C][R]="f")})}for(let[k,w]of u.e)(b[k][2]+b[w][2])/2<=.05||bs(b[k][0],b[k][1],b[w][0],b[w][1],(R,C)=>{d[C]?.[R]===void 0||M.has(C*64+R)||(d[C][R]="b")});let x=b.reduce((k,w)=>w[2]>k[2]?w:k,b[0]);d[x[1]]?.[x[0]]!==void 0&&(d[x[1]][x[0]]="v");let y=Ht(d.map(k=>k.join("")),{f:o,b:s,v:r},Math.floor(n/2),Math.floor(n/2));return Fi.set(a,y),y}var Ht,Oi,st,vt,Ln,wi,yi,Pi,Ci,F1,ki,L1,K1,N1,B1,W1,_1,H1,$1,X1,j1,Ri,ds,_i,Si,$i,ps,Ei,ji,Ui,Qo,V1,J1,q1,Z1,hs,tl,vi,Ms,Di,Ti,Yi,fs,Ai,el,Gi,Fi,sl,al,il,cl,ul,ll,Ch,tr=Bt(()=>{Vn();An();nn();Ht=(t,n,e=0,o=0)=>({rows:t,key:n,ox:e,oy:o}),Oi=t=>Math.max(...t.rows.map(n=>n.length)),st=Math.round,vt=(t,n)=>t[n]??nt[n];Ln=(t,n,e,o=0,s=0)=>e>=1?!0:e<=0?!1:V(t-o&1023,n-s&1023,e);wi=new Map;yi=([t,n])=>{let e=Math.atan2(t,-n);return e<0?e+Math.PI*2:e};Pi=new WeakMap;Ci=new WeakMap,F1=0;ki=new WeakMap;L1={w:"W0",i:"W1",k:"K7",c:"C1"},K1=["C1","K8","P4","Y2"],N1=["..w..",".wwi.",".wik.","cwik.",".wikc",".wik.",".iik.",".ikk.","..k.."],B1=["..w..",".wwi.",".iwk.",".iwk.",".iwk.",".iik.",".iik.",".kik.","..k.."],W1=["..w..","..w..","..w..","..w..","..i..","..i..","..i..","..k..","..k.."],_1=["..w..","..w..","..i..","..w..","..i..","..i..","..k..","..k..","..c.."],H1=["...w...","..wwi..",".wwiik.",".wwiik.","cwwiik.",".wwiikc",".wwiik.",".wiiik.",".wiikk.",".iiikk.","..ikk..","..ikk..","...k..."],$1=["...w...","..wwi..",".iwwik.",".iwwik.",".iwwik.",".iwwik.",".iwiik.",".iwiik.",".iwikk.",".iiikk.","..ikk..","..ikk..","...k..."],X1=["...w...","...w...","..wwi..","..wwk..","..wik..","..wik..","..wik..","..iik..","..iik..","..ikk..","..ikk..","...k...","...k..."],j1=["...w...","...w...","..iwi..","..iwk..","..iwk..","..iwk..","..iik..","..iik..","..kik..","..kik..","..kkc..","...k...","...k..."],Ri=t=>t.map(n=>n.split("").reverse().join(""));ds=Wi(N1,B1,W1,_1,2),_i=Wi(H1,$1,X1,j1,3);Si={p:"P4",P:"P5",c:"W2",X:"W0"},$i=[Ht([".ppp.ppp.","pXXPpPPPp","pPPPcPPPp","pPPcPcPPp",".pPPcPPp.","..pPPPp..","...pPp...","....p...."],Si,4,4),Ht([".ppp.ppp.","pXXPpPPPp","pXPPcPPPp","pPPcPcPPp",".pPPcPPp.","..pPPPp..","...pPp...","....p...."],Si,4,4)];ps={Y:"Y2",1:"Y1",o:"Y0",X:"W0"},Ei=t=>t?["...Y...","..YY1..","..YY1..",".YYY11.",".YYX11.","YYXXX1o",".11X1o.",".111oo.","..11o..","..1oo..","...o..."]:["...Y...","..YY1..","..YY1..",".YYY11.",".YYY11.","YYYX11o",".111oo.",".111oo.","..11o..","..1oo..","...o..."],ji=[Ht(Ei(!1),ps,3,5),Ht(Ei(!0),ps,3,5)],Ui=Ht(["..Y..",".YY1.",".YX1.","YYX1o",".11o.",".1oo.","..o.."],ps,2,3);Qo={24:[24,30],12:[12,20],7:[7,11],6:[7,9]},V1=["v2","incepture","daiki"];J1=[[[.2,0],[.72,.02],[1,.2],[1,.64],[.84,.98],[.28,1],[0,.8],[0,.26]],[[.34,0],[.9,.08],[1,.42],[.78,.86],[.5,1],[.14,.86],[0,.46],[.08,.12]],[[.36,0],[.8,.06],[1,.36],[1,.72],[.78,1],[.22,1],[0,.74],[.04,.28]]],q1=[[.46,.42],[.5,.4],[.48,.44]];Z1={v2:{11:["....#....","..##.##..",".#.....#.","#....####","#...#...#","#...#...#","#...#...#","####....#",".#.....#.","..##.##..","....#...."],6:[".###.","#...#","#..##","##..#","#...#",".###."],3:[".#.","#.#",".#."]},incepture:{11:[".....#.....",".#...#...#.","..#..#..#..","...#.#.#...",".....#.....","#####.#####",".....#.....","...#.#.#...","..#..#..#..",".#...#...#.",".....#....."],6:["#.#.#",".###.","##.##",".###.","#.#.#"],3:["#.#",".#.","#.#"]},daiki:{11:["###....","###....","###....","...###.","...####","...###.","###....","###....","###...."],6:["##..","##..","..##","..##","##..","##.."],3:["#.",".#","#."]}},hs=new Map;tl=["D2","D3","C1","W2","W1","W0"];vi=(t,n,e)=>{let o=st(n.x),s=st(n.y);t.fillStyle=vt(e,"D3");for(let[r,a]of[[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]])t.fillRect(o+r,s+a,1,1);Vt(t,o,s,vt(e,"W0"))};Ms=(1+Math.sqrt(5))/2,Di=(()=>{let t=[];for(let n of[-1,1])for(let e of[-Ms,Ms])t.push([0,n,e],[n,e,0],[e,0,n]);return t})(),Ti=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Yi=[[1,1,1],[1,-1,-1],[-1,1,-1],[-1,-1,1]],fs=t=>{let n=1/0;for(let o=0;o<t.length;o++)for(let s=o+1;s<t.length;s++)n=Math.min(n,Ai(t[o],t[s]));let e=[];for(let o=0;o<t.length;o++)for(let s=o+1;s<t.length;s++)Math.abs(Ai(t[o],t[s])-n)<1e-6&&e.push([o,s]);return e},Ai=(t,n)=>Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2]),el={icosa:{v:Di,e:fs(Di),period:Math.PI*2/5,axis:xs([0,1,Ms])},octa:{v:Ti,e:fs(Ti),period:Math.PI/2,axis:[0,1,0]},tetra:{v:Yi,e:fs(Yi),period:Math.PI*2/3,axis:xs([1,1,1])}};Gi=(t,n)=>[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]],Fi=new Map;sl=t=>Se("icosa",9,t),al=t=>Se("octa",7,t),il=t=>Se("tetra",7,t),cl=t=>Se("icosa",13,t),ul=t=>Se("octa",9,t,"FU5","G2","W0"),ll=t=>Se("icosa",9,t,"P4","P2","R5"),Ch={xp:ds.map(t=>t[0]),xpCycle:ds[0],xpBig:_i.map(t=>t[0]),heart:$i,core:ji,coreSmall:Ui,mem24:[0,1,2].map(t=>Sn(t,24)),mem12:[0,1,2].map(t=>Sn(t,12)),mem7:[0,1,2].map(t=>Sn(t,7)),memStrip:[0,1,2].map(t=>Sn(t,6)),memLocked:[Sn(0,24,!1),Sn(1,12,!1),Sn(2,6,!1)],shield:[0,1,2,3,4,5,6,7].map(sl),octa:[0,2,4,6].map(al),tetra:[0,2,4,6].map(il),odCube:[0,2,4,6].map(cl),turret:[0,2,4,6].map(ul),shock:[0,2,4,6].map(ll)}});function oe(t,n){let e=t+"/"+n,o=oc.get(e);if(o)return o;let s,r=ic[t];if(r){let u=Array.from({length:11},()=>Array(11).fill("."));nc[r[0]].forEach((c,l)=>c.split("").forEach((m,h)=>m!=="."&&(u[l][h]=m))),nc[r[1]].forEach((c,l)=>c.split("").forEach((m,h)=>m!=="."&&(u[l+4][h+4]=m))),s=u.map(c=>c.join(""))}else s=$t[t]||$t.keep;let a=s.map((u,c)=>u.split("").map((l,m)=>l===":"?(m+c)%2?"#":".":l===","?m%2===0&&c%2===0?"#":".":l).join("")),i=Ht(a,{"#":n},5,5);return oc.set(e,i),i}function Ue(t,n){let e=t+n,o=rc.get(e);if(!o){let s=t===7?fl:t===9?cc:bl;rc.set(e,o=Ht(s,{"#":n},t>>1,t>>1))}return o}function ys(t,n){let e=t+n,o=sc.get(e);if(o)return o;let s=t===8?pl:dl.map(r=>t===11?r.slice(6):r);return s=s.map((r,a)=>r.split("").map((i,u)=>i===":"?(u+a)%2?"#":".":i===","?u%4===0?"#":".":i).join("")),sc.set(e,o=Ht(s,{"#":n})),o}var $t,ac,nc,ic,ec,oc,hl,fl,cc,bl,rc,Th,Yh,dl,pl,sc,Ah,uc=Bt(()=>{Vn();An();nn();tr();$t={design:["...........","...#....###","........#.#","........###",".......#...","...####....","..#........","###........","#.#........","###...#....","..........."],code:["...........","...........","......#....","..#...#.#..",".#....#..#.","#....#....#",".#...#...#.","..#..#..#..","....#......","...........","..........."],motion:["...........","......###..",".....#...#.","..:.#.....#",".:.:#.....#",",.:.#.....#",".:.:#.....#","..:.#.....#",".....#...#.","......###..","..........."],"3d":[".....#.....","...##.##...",".##..#..##.","#....#....#","#....#....#",".#..#.#..#.",".#.#...#.#.",".##.....##.","..#######..","...........","..........."],speed:["...........","..#...#....","...#...#...","....#...#..",".....#...#.","....#...#..","...#...#...","..#...#....","...........","...........","..........."],power:[".....#.....",".....#.....","....#.#....","....#.#....","..##...##..","##.......##","..##...##..","....#.#....","....#.#....",".....#.....",".....#....."],cooldown:[".......#...","........#..","....######.","..##....#..","..#..#.#...",".#...#.....",".#...###...",".#.......#.","..#.....#..","..##...##..","....###...."],area:["###.....###","#.........#","#.........#",".....#.....",".....#.....","...#####...",".....#.....",".....#.....","#.........#","#.........#","###.....###"],magnet:["...........","...........",".###...###.",".#.#...#.#.",".#.#...#.#.",".#.#...#.#.",".#..###..#.","..#.....#..","...#####...","...........","..........."],recovery:["...........",".##...##...","#..#.#..#..","#...#...#..","#.......#..",".#.....#...","..#...#....","...#.#.....","....#......","...........","..........."],charge:["......##...",".....#.#...","....#..#...","...#..#....","..#...####.",".####...#..","....#..#...","...#..#....","...#.#.....","...##......","..........."],keep:[".....#.....","....###....","...#.#.#...","..#..#..#..",".#...#...#.","###########",".#...#...#.","..#..#..#..","...#.#.#...","....###....",".....#....."]};$t.rest=$t.recovery;$t.core=$t.keep;ac=(t,n)=>[...Array(n).fill("...........")].concat(t.slice(0,11-n));$t.speed=ac($t.speed,1);$t.recovery=ac($t.recovery,1);$t.rest=$t.recovery;$t["3d"]=(()=>{let t=Array.from({length:11},()=>Array(11).fill(".")),n=[[5,0],[10,4],[8,9],[2,9],[0,4]],e=(s,r,a="#")=>{let[i,u]=s,[c,l]=r,m=Math.abs(c-i),h=-Math.abs(l-u),f=i<c?1:-1,b=u<l?1:-1,d=m+h;for(;t[u][i]!=="#"&&(t[u][i]=a),!(i===c&&u===l);){let p=2*d;p>=h&&(d+=h,i+=f),p<=m&&(d+=m,u+=b)}},o=[5,5];n.forEach((s,r)=>e(s,n[(r+1)%5]));for(let s of n)e(s,o,":");return t[5][5]="#",t.map(s=>s.join(""))})();$t.motion=(()=>{let t=Array.from({length:11},()=>Array(11).fill(".")),n=(e,o,s)=>{for(let r=0;r<64;r++){let a=Math.round(e+o*Math.cos(r/64*Math.PI*2)),i=Math.round(5+o*Math.sin(r/64*Math.PI*2));a>=0&&a<11&&i>=0&&i<11&&(t[i][a]==="."||(s==="#"||s===":"&&t[i][a]===","))&&(t[i][a]=s)}};return n(2.5,1.6,","),n(4.6,2.2,":"),n(7.2,2.8,"#"),t.map(e=>e.join(""))})();nc={design:[".....##",".....##","....#..","..##...",".#.....","##.....","##....."],code:[".......","...#...",".#.#.#.","#..#..#",".#.#.#.","...#...","......."],motion:["...###.","..#...#",":.#...#",".:#...#",":.#...#","..#...#","...###."],"3d":["...#...",".##.##.","#..#..#","#.#.#.#",".#...#.",".#####.","......."]},ic={algorithmic:["design","code"],spline:["design","motion"],reaper:["design","3d"],automation:["code","motion"],procedural:["code","3d"],spatial:["motion","3d"]},ec={design:"W2",code:"G0",motion:"B1","3d":"R5",algorithmic:"C1",spline:"K8",reaper:"W1",automation:"FU4",procedural:"FU5",spatial:"P4",keep:"Y2",core:"Y2"},oc=new Map;hl=["design","code","motion","3d","speed","power","cooldown","area","magnet","recovery","charge","keep"],fl=["...#...","...#...","..###..","#######","..###..","...#...","...#..."],cc=["....#....","....#....","...###...","...###...","#########","...###...","...###...","....#....","....#...."],bl=(()=>{let t=Array.from({length:13},()=>Array(13).fill("."));cc.forEach((n,e)=>n.split("").forEach((o,s)=>o==="#"&&(t[e+2][s+2]="#")));for(let[n,e]of Ki(6)){let o=(Math.atan2(e,n)*180/Math.PI+360+22.5)%45;o>14&&o<31&&(t[e+6][n+6]="#")}return t.map(n=>n.join(""))})(),rc=new Map;Th=["#.#..","#.#..","#.#..","#.#..","#.#..","#.#.."].map(t=>"."+t.slice(0,4)),Yh=[[".##......","#..#.....","....#...#",".....#..#","......##."].map(t=>t),["..##.....",".#..#....","#....#..#","......##.","........."],["...##....","..#..#...",".#....#..","#......##","........."]],dl=["...............#.","......:######..#.","..............###",",.:.#########.###","..............###","......:######..#.","...............#."],pl=[".......",":###..#",".....##","####.##",".....##",":###..#","......."].map(t=>t.padStart(8,".")),sc=new Map;Ah={icons:hl.map(t=>oe(t,"W0")),weapons:["design","code","motion","3d"].map(t=>oe(t,ec[t])),fusions:Object.keys(ic).map(t=>oe(t,ec[t])),od:[Ue(7,"W0"),Ue(9,"W0"),Ue(13,"G1")],ornament:[ys(17,"T1"),ys(11,"T1"),ys(8,"T1")]}});function Ml(t,n){let e=t+":"+n,o=mc.get(e);if(o)return o;let s=_e[t]?.[n],r=[];if(!s)return[{x:10,y:0}];s.rows.forEach((i,u)=>i.split("").forEach((c,l)=>{if(s.key[c]!=="W0")return;let m=l-(s.ox??0),h=u-(s.oy??0);m>=-1&&m<=2&&h>=-1&&h<=2||r.push({x:m,y:h})}));let a=r.length?r.sort((i,u)=>u.x-i.x):[{x:10,y:0}];return mc.set(e,a),a}var Cs,lc,Ps,hc,mc,fc,bc=Bt(()=>{Vn();nn();An();Oo();tr();Cs=t=>Object.fromEntries(Oe.map(n=>[n,t(n)])),lc=t=>{let n=[1,3,5].map(e=>parseInt(t.slice(e,e+2),16)/255).map(e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4);return .2126*n[0]+.7152*n[1]+.0722*n[2]},Ps={K:3,M:2,P:2,E:0},hc=t=>{let n=yo(t,-3),e=gn[n];return e&&Ps[e]!=null&&Me[e].indexOf(n)>Ps[e]&&(n=Me[e][Ps[e]]),e&&!["K","M","P","N","text","paperA","paperQ"].includes(e)&&lc(nt[n])>lc(nt.K4)&&(n="K3"),n};qt.sheetNight||(qt.sheetNight=Cs(t=>nt[hc(t)]));qt.sheetDrain||(qt.sheetDrain=Cs(t=>qt.drain4[hc(t)]));qt.sheetLight||(qt.sheetLight=Cs(t=>nt[yo(t,5)]));mc=new Map;fc=(t,n)=>Ml(t,n)[0]});function Ss(t,n,e,o,s){En.noClip||(t.beginPath(),t.rect(n,e,o,s),t.clip())}function gl(t,n,e){let o=t<<16|n<<8|e,s=dc.get(o);return s===void 0&&dc.set(o,s=xl(t,n,e)),s}function Qt(t,n,e,o,s,r,a,i=1,u=null){if(i<=0)return;if(e=Math.floor(e)-1,o=Math.floor(o)-1,s=Math.ceil(s)+2,r=Math.ceil(r)+2,Is){if(t===rr)return;if(i>=1&&!u){t.save(),t.beginPath(),t.rect(e,o,s,r),t.clip(),a(t),t.restore();return}}sn||(sn=document.createElement("canvas"));let c=Math.max(t.canvas.width,e+s+2),l=Math.max(t.canvas.height,o+r+2);(sn.width<c||sn.height<l)&&(sn.width=Math.max(sn.width,c),sn.height=Math.max(sn.height,l));let m=sn.getContext("2d",{willReadFrequently:!0});m.imageSmoothingEnabled=!1;let h=Math.max(0,e),f=Math.max(0,o),b=Math.min(sn.width,e+s)-h,d=Math.min(sn.height,o+r)-f;if(b<=0||d<=0)return;m.clearRect(h,f,b,d),m.save(),m.beginPath(),m.rect(h,f,b,d),m.clip(),a(m),m.restore();let p=m.getImageData(h,f,b,d).data,M=(x,y)=>x>=0&&y>=0&&x<b&&y<d&&p[(y*b+x)*4+3]>127;for(let x=0;x<d;x++)for(let y=0;y<b;y++){let k=(x*b+y)*4;if(p[k+3]<=127)continue;let w=h+y,g=f+x,R=u?i*u(w,g):i;if(R<=0||R<1&&!V(w,g,R))continue;let C=p[k],P=p[k+1],S=p[k+2],E=gl(C,P,S),I=C>90&&C>P*1.6&&C>S*1.25,v=!M(y,x-1),Y=v||!M(y-1,x)||!M(y+1,x)||!M(y,x+1),G=wl(n,E,I,Y,v,w,g);G&&A(t,w,g,G)}}function wl(t,n,e,o,s,r,a){let i=(r+a&1)===0,u=c=>((r+a)%c+c)%c===0;return t==="ink"?e?n>70?"A1":"BR":n>88?"A1":o||n<14?"BI":n<26?i?"BI":null:n<42?u(3)?"BI":null:n<62&&u(4)?"BI":null:t==="red"?o?"BR":n>96?"A1":n>84?i?"BR":"A1":"BR":t==="ice"?o?s?"Y1":"Y0":n>95?"Y2":n>84?i?"Y2":"W0":n>60?"Y1":"Y0":o&&!s?t==="goldInk"?"BI":"Y0":o?n>70?"Y2":"Y1":n>92?"W0":n>72?"Y2":n>45||n>25&&i?"Y1":"Y0"}function vc(t,n){return t?n?{pt:4,ps:4,pb:6,gs:3,air:4}:{pt:3,ps:3,pb:5,gs:3,air:4}:{pt:1,ps:1,pb:3,gs:2,air:3}}function Mc(t,n,e,o){if(!jt)return void it(t,tt,n,e,o,pc,"center",Gs);Jn(t,e,o,()=>it(t,Fs,n,0,0,pc,"center",Ic))}function kl(t,n,e,o,s,r,a){jt=a;let i=vc(a,r),u=t+4+i.ps,c=e-2*(4+i.ps),l=n+4+i.pt,m=Pl(s,r),h=yl[s].map(F=>u+c*F),{lines:f,cent:b}=Rs(m.bottom,h,u,c),d=F=>n+o-4-i.pb-se(F),p=F=>F?Math.floor(d(F)-i.gs+1-l):o-8-2*i.pt,M=Math.max(...f.map(F=>F.length)),x=p(M)<24?0:M,y=p(x),k=d(x),w=m.top&&o>=56?pn(m.top)<=c-4?[m.top]:Nn(m.top):[],g=a?n+4+i.pb:n+7,R=w.length?a?g-l+Math.ceil(se(w.length))+4:w.length*Ec+4:0,C=y<50?0:y<88?1:2,P=y>=100;if(s===4){let F=P&&c<160,T=Wl(C,P,F),D=h.length-1,L=u+c-1-Hl(T.rx0,T.len);if(h[D]>L){let O=Math.min(h[D]-L,_l);h[D]-=O,F&&(h[D-1]-=Math.round(O/2)),{lines:f,cent:b}=Rs(m.bottom,h,u,c)}}let S=null,E=[],I=[],v=n+o-4-i.pb,Y=y;if(P&&c<160&&nr[s]&&x){let F=nr[s].map($=>Rs($.words.map(j=>m.bottom[j]),$.at.map(j=>u+c*j),u,c,$.words.length>1)),T=F.map($=>se(Math.max(...$.lines.map(j=>j.length)))),D=T.map($=>Math.ceil($)),L=F.length,O=v-l-L*(i.gs-1)-D.reduce(($,j)=>$+j,0)-(L-1)*(2*i.air+1);Y=O;let K=l;S=[];let N=0;F.forEach(($,j)=>{let W=N;N+=nr[s][j].wt;let H=Math.floor(O*N+1e-6)-Math.floor(O*W+1e-6);S.push({x:u,y:K,w:c,h:H,cols:nr[s][j].at.map(_=>Math.round(u+c*_))});let Z=K+H+i.gs-1+(D[j]-T[j]);E.push({lines:$.lines,cent:$.cent,y:Z});let B=K+H+i.gs-1+D[j];j<L-1&&I.push(B+i.air),K=B+2*i.air+1})}let G=[];return S?E.forEach(F=>F.lines.forEach((T,D)=>T.forEach((L,O)=>G.push(qe(L,F.cent[D],F.y+O*Wn()))))):f.forEach((F,T)=>F.slice(0,x).forEach((D,L)=>G.push(qe(D,b[T],k+L*Wn())))),w.forEach((F,T)=>G.push(qe(F,t+e/2,g+T*Wn()))),{pad:i,ax:u,ay:l,aw:c,ah:y,nL:x,lines:f,cent:b,capTop:k,topL:w,topY:g,tH:R,rows:S,rowWords:E,hairs:I,sceneH:Y,cH:Math.max(16,S?v-l+2:y),clipH:Math.max(16,y+i.pt-1),boxes:G,colX:h,Zc:C,large:P}}function Os(t,n,e,o,s,r,a){jt=a;let i=vc(a,r),u=Tc[s],c=u.caps(r),l=t+4+i.ps,m=t+e-4-i.ps,h=n+4+i.pt,f=n+o-4-i.pb,b=m-l,d=s===5&&o>=56?pn(ks)<=b-4?[ks]:Nn(ks):[],p=d.length&&o>=150?4:0,M=h+p,x=d.length?p+Math.ceil(se(d.length))+i.gs+2:0,y=h+x,k=f-y,w=k>=110&&k>=.75*b,g=w?u.tall:u.wide,R=w?u.tallW:u.wideW,C=u.gap??(u.seq?Yc:Rl),P=g.map((B,_)=>{let U=b-(B.length-1)*C,X=0;return B.map((q,ot)=>{let bt=Math.round(U*X);return X+=R[_][ot],Math.round(U*X)-bt})}),S=g.map((B,_)=>B.map((U,X)=>pn(c[U])<=P[_][X]-2||!c[U].includes(" ")?[c[U]]:Nn(c[U]))),E=S.map(B=>Math.max(...B.map(_=>_.length))),I=2*i.air+(u.seq&&w?5:1),v=B=>E[B]?Math.ceil(se(E[B]))+i.gs-1:0,Y=k-g.reduce((B,_,U)=>B+v(U),0)-(g.length-1)*I;Y<24*g.length&&(E=E.map(()=>0),Y=k-(g.length-1)*I);let G=w?u.tallH:[1],F=w&&E.some(B=>B>0)?u.tallNat:null,T=F?F.reduce((B,_)=>B+_,0):0,D=!!F&&Y>T,L=B=>D?Math.floor((Y-T)*(B+1)/(g.length+1))-Math.floor((Y-T)*B/(g.length+1)):0,O=[],K=[],N=[],$=y+L(0),j=0;g.forEach((B,_)=>{let U=j;j+=G[_];let X=D?F[_]:Math.floor(Y*j+1e-6)-Math.floor(Y*U+1e-6),q=l;if(B.forEach((ot,bt)=>{let St=P[_][bt],lt=E[_]?S[_][bt]:[],fe=a?Math.round((q+St/2)*2)/2:Math.round(q+St/2);O[ot]={x:q,y:$,w:St,h:X,cap:lt,cx:fe,capY:$+X+i.gs-1,row:_},bt<B.length-1&&!u.seq&&K.push({x:q+St+Math.floor(C/2),y0:$+Math.round(X*.06),y1:$+X-1-Math.round(X*.04)}),q+=St+C}),$+=X+v(_),_<g.length-1){let ot=I+L(_+1),bt=u.seq&&w?Math.max(5,Math.min(11,ot-8))|1:1;N.push({y:$+Math.floor((ot-bt)/2),seq:u.seq,len:bt}),$+=ot}});let W=[];for(let B of O){let _=Math.max(0,...B.cap.map(U=>pn(U)))/2;B.cx=Math.max(l+_,Math.min(m-_,B.cx)),B.cap.forEach((U,X)=>W.push(qe(U,B.cx,B.capY+X*Wn())))}d.forEach((B,_)=>W.push(qe(B,t+e/2,M+_*Wn())));let H=Math.min(...O.map(B=>B.h)),Z=!a||H<40?H<50?0:1:H<72&&!w?1:2;return{pad:i,X0:l,X1:m,Y0:h,Y1:f,sy0:y,tall:w,zones:O,divs:K,seps:N,topL:d,topY:M,tH:x,boxes:W,Zc:Z}}function Ls(t,n,e,o,s){let r=jt;try{return kl(0,0,t,n,e,o,s).sceneH}finally{jt=r}}function Ac(t,n,e,o,s,r){let a=jt;try{return Os(Math.round(t),Math.round(n),Math.round(e),Math.round(o),s,r,!0).boxes}finally{jt=a}}function Gc(t,n,e,o,s,r,a,i){n=Math.round(n),e=Math.round(e),o=Math.round(o),s=Math.round(s);let u=(g,R)=>{at(t,n+g,e+g,o-2*g,R),at(t,n+g,e+s-1-g,o-2*g,R),ct(t,n+g,e+g+1,s-2-2*g,R),ct(t,n+o-1-g,e+g+1,s-2-2*g,R)};En.noFrame||(u(0,"Y1"),u(2,"Y2"),u(3,"Y1"));let c=Math.abs(t.getTransform().a)>=Pt-1e-6,l=Os(n,e,o,s,r,i,c),m=Math.floor(a*_n)/_n,h=ze[r],f=(m%h+h)%h,b=En.zone,d=Oc(b>=0?Fc():t,l,r,f,i);d.zg=l.zones.map((g,R)=>b<0||b===R?t:null),Vc(),En.noCentre||(d.ox=El(l,r,n,e,o,s,i,c)),t.save(),Ss(t,n+4,e+4,o-8,s-8);let p=c?(g,R)=>l.boxes.some(([C,P,S,E])=>g>=Math.floor(C)-2&&g<Math.ceil(S)+2&&R>=Math.floor(P)-2&&R<Math.ceil(E)+2):null,M=r===0?l.zones[0]:null,x=M?M.x+(d.ox[0]||0):0,y=(g,R)=>(p?p(g,R):!1)||!!M&&g>=x-2&&g<x+M.w+2&&R>=M.y-2&&R<M.y+M.h+2;if(En.noSun||vl(d,n,e,o,s,y),!En.noWords)for(let g of l.zones)g.cap.forEach((R,C)=>Mc(t,R,g.cx,g.capY+C*Wn()));if(b<0)for(let g of l.divs)for(let R=g.y0;R<=g.y1;R++)R&1||A(t,g.x,R,"A0");let k=l.X0,w=l.X1-l.X0;if(b<0)for(let g of l.seps){let R=k+Math.floor(w/2),C=g.seq?g.y+(g.len>>1):g.y;for(let P=k+Math.round(w*.06);P<=k+Math.round(w*.94);P++)!(P&1)&&(!g.seq||Math.abs(P-R)>8)&&A(t,P,C,"A0");g.seq&&Bc(t,R,g.y,g.len,Q)}if(l.topL.length&&!En.noWords){let g=Jc(d.u),R=l.topY-(e+4)+Math.ceil(se(l.topL.length))+2;g>0&&Ts(t,g,n+4,e+4,o-8,R,()=>l.topL.forEach((C,P)=>Mc(t,C,n+o/2,l.topY+P*Wn())))}Ss(t,l.X0,l.Y0,l.X1-l.X0,l.Y1-l.Y0),En.noScene||Uc[r](d),t.restore()}function Fc(){if(!rr){let t=document.createElement("canvas");t.width=t.height=1,rr=t.getContext("2d")}return rr}function Oc(t,n,e,o,s){let r=ze[e];return{g:t,x:n.X0,y:n.sy0,w:n.X1-n.X0,h:n.Y1-n.sy0,t:o,T:r,u:o/r,Z:n.Zc,tall:n.tall,zones:n.zones,seps:n.seps,touch:s,band:n.tH,zg:n.zones.map(()=>t),ox:n.zones.map(()=>0),meas:!1}}function Lc(t,n,e,o,s,r,a){let i=Ks(t,n,e,o,s,r,a),u=ie.get(i);return u||ie.set(i,u={key:i,i:t,x:n,y:e,w:o,h:s,touch:r,fine:a,P:null,gs:[],f:0}),u}function Kc(t,n){let e=jt;try{t.P||(t.P=Os(t.x,t.y,t.w,t.h,t.i,t.touch,t.fine)),jt=t.fine;let o=t.w+2*Ee,s=t.h+2*Ee;t.gs.length||(t.gs=t.P.zones.map(()=>{let u=document.createElement("canvas");u.width=o,u.height=s;let c=u.getContext("2d");return c.setTransform(1,0,0,1,Ee-t.x,Ee-t.y),c.imageSmoothingEnabled=!1,c})),Vc();let r=Math.round(ze[t.i]*_n);Is=!0;try{for(;t.f<r&&(Uc[t.i]({...Oc(Fc(),t.P,t.i,t.f/_n,t.touch),zg:t.gs,meas:!0}),t.f++,!(performance.now()>n)););}finally{Is=!1}if(t.f<r)return!1;let a=t.P,i=Tc[t.i].mark??0;return ar.set(t.key,a.zones.map((u,c)=>{let l=t.gs[c].getImageData(0,0,o,s).data,m=1e9,h=-1e9;for(let p=0;p<s;p++)for(let M=0;M<o;M++)l[(p*o+M)*4+3]>127&&(M<m&&(m=M),M>h&&(h=M));if(h<m)return 0;m+=t.x-Ee,h+=t.x-Ee;let f=u.x+1+(a.tall?i:0),b=u.x+u.w-2,d=(m+h+1)/2;return h-m>b-f?Math.round((f+b+1)/2-d):an(Math.round(u.cx-d),f-m,b-h)})),ie.delete(t.key),t.gs=[],!0}finally{jt=e}}function Sl(){vs=!1;let t=ie.values().next().value;t&&(Kc(t,performance.now()+4),ie.size&&Nc())}function Nc(){vs||(vs=!0,setTimeout(Sl,0))}function Ns(t,n,e,o,s,r=!0,a=0){if(En.noCentre)return;[t,n,e,o]=[t,n,e,o].map(Math.round);for(let[u,c]of ie)(c.w!==e||c.h!==o||c.touch!==s||c.fine!==r||(c.x-t)%12||(c.y-n)%12)&&ie.delete(u);let i=!1;for(let u=0;u<ze.length;u++){let c=(a+u)%ze.length;ar.has(Ks(c,t,n,e,o,s,r))||(Lc(c,t,n,e,o,s,r),i=!0)}i&&Nc()}function El(t,n,e,o,s,r,a,i){let u=ar.get(Ks(n,e,o,s,r,a,i));if(u)return u;let c=Lc(n,e,o,s,r,a,i);return c.P??(c.P=t),Kc(c,1/0),Ns(e,o,s,r,a,i,n+1),ar.get(c.key)}function Bc(t,n,e,o,s,r=1){let a=e+o-1;for(let i=0;i<o;i+=2)J(t,n,e+i,s,r);for(let i of[-1,1])J(t,n+i,a-1,s,r),J(t,n+2*i,a-2,s,r)}function Ds(t,n,e,o=1){let s=t.seps[n];if(!s||!s.seq||e<=0||o<=0)return;let r=t.x+Math.floor(t.w/2),a=Math.round(et(e)*(s.len-1));for(let i=0;i<=a;i+=2)J(t.g,r,s.y+i,i+2>a?"W0":"Y1",o);e>=1&&Bc(t.g,r,s.y,s.len,"Y1",o)}function _t(t,n,e){let o=t.zones[n],s=t.zg[n];if(!s)return;let r=t.g;t.g=s,s.save(),t.meas||Ss(s,o.x,o.y,o.w,o.h),t.ox[n]&&s.translate(t.ox[n],0);try{e()}finally{s.restore(),t.g=r}}function Nn(t){let n=t.split(" ");if(n.length<2)return[t];let e=[t],o=1e9;for(let s=1;s<n.length;s++){let r=n.slice(0,s).join(" "),a=n.slice(s).join(" "),i=Math.max(pn(r),pn(a));i<o&&(o=i,e=[r,a])}return e}function Rs(t,n,e,o,s=!1){let r=t.map(l=>s&&l.includes(" ")?Nn(l):[l]),a=l=>Math.max(...r[l].map(m=>pn(m))),i=()=>r.reduce((l,m,h)=>l+a(h),0)+er*(r.length-1);if(t.forEach((l,m)=>{let h=m===0?e:(n[m-1]+n[m])/2,f=m===t.length-1?e+o:(n[m]+n[m+1])/2,b=2*Math.min(n[m]-h,f-n[m]);t.length>1&&a(m)>b*1.02&&l.includes(" ")&&(r[m]=Nn(l))}),t.length>=3&&r.some(l=>l.length>1)&&t.forEach((l,m)=>l.includes(" ")&&(r[m]=Nn(l))),i()>o){let l=o/t.length-er;for(t.forEach((m,h)=>{a(h)>l&&m.includes(" ")&&(r[h]=Nn(m))});i()>o;){let m=-1,h=-1;if(r.forEach((f,b)=>{f.length===1&&f[0].includes(" ")&&a(b)>h&&(h=a(b),m=b)}),m<0)break;r[m]=Nn(t[m])}}let u=r.map((l,m)=>a(m));e+=2,o-=4;let c=n.map((l,m)=>Math.max(e+u[m]/2,Math.min(e+o-u[m]/2,l)));for(let l=0;l<4;l++){for(let m=1;m<c.length;m++)c[m]=Math.max(c[m],c[m-1]+(u[m-1]+u[m])/2+er);c[c.length-1]=Math.min(c[c.length-1],e+o-u[c.length-1]/2);for(let m=c.length-2;m>=0;m--)c[m]=Math.min(c[m],c[m+1]-(u[m+1]+u[m])/2-er);c[0]=Math.max(c[0],e+u[0]/2)}return{lines:r,cent:c.map(l=>jt?Math.round(l*2)/2:Math.round(l))}}function Ts(t,n,e,o,s,r,a){if(n>=1)return a();n<=0||Il(t,e,o,s,r,a,n)}function Il(t,n,e,o,s,r,a){let i=t.getTransform(),u=i.a||1,c=i.d||1,l=Math.floor(n),m=Math.floor(e),h=Math.max(0,Math.round(l*u+i.e)),f=Math.max(0,Math.round(m*c+i.f)),b=Math.min(t.canvas.width,Math.round((l+Math.ceil(o))*u+i.e))-h,d=Math.min(t.canvas.height,Math.round((m+Math.ceil(s))*c+i.f))-f;if(b<=0||d<=0)return;let p=t.getImageData(h,f,b,d);r();let M=t.getImageData(h,f,b,d),x=M.data,y=p.data;for(let k=0;k<d;k++)for(let w=0;w<b;w++){if(V(Math.floor((h+w+.5-i.e)/u),Math.floor((f+k+.5-i.f)/c),a))continue;let g=(k*b+w)*4;x[g]=y[g],x[g+1]=y[g+1],x[g+2]=y[g+2],x[g+3]=y[g+3]}t.putImageData(M,h,f)}function vl(t,n,e,o,s,r=null){let a=Math.min(o,s),i=n+o/2,u=e+s*1.02,c=22;for(let l=0;l<=c;l++){let m=Math.PI*(1.08+.84*l/c),h=a*.55,f=a*(l%2?.78:.95),b=Fn(d=>[i+Math.cos(m)*(h+(f-h)*d),u+Math.sin(m)*(h+(f-h)*d)],24);b.forEach(([d,p],M)=>{M%4===0&&V(d,p,.75*(1-M/b.length)+.12)&&!(r&&r(Math.round(d),Math.round(p)))&&A(t.g,d,p,"A0")})}}function ce(t,n,e,o={}){let s=o.pose??"dreamer.fly",r=Yn[s],a=o.frame??Bs(t,s),i=o.od?4:2,u=Math.max(r.ox,r.w-r.ox)+i,c=Math.max(r.oy,r.h-r.oy)+i;n=Math.round(n),e=Math.round(e),Qt(t.g,"goldInk",n-u,e-c,2*u,2*c,l=>He(l,s,a,n,e,{t:t.t,flip:o.flip,od:o.od}),o.k??1)}function Ie(t,n,e,o){let s=fc(e,o);return[Math.round(t)+s.x,Math.round(n)+s.y]}function Dl(t,n){let e=t+":"+n,o=xc.get(e);if(o)return o;o=[];let s=128,r=64,a=64,i=document.createElement("canvas");i.width=s,i.height=s;let u=i.getContext("2d",{willReadFrequently:!0});if(u){He(u,t,n,r,a,{t:0});let c=u.getImageData(0,0,s,s).data;for(let l=0;l<s;l++)for(let m=0;m<s;m++)c[(l*s+m)*4+3]>127&&o.push([m-r,l-a])}return xc.set(e,o),o}function Ws(t,n,e,o,s,r,a){let i=Math.max(0,r-a),u=n+(o-n)*r,c=e+(s-e)*r;$o(t.g,Math.round(u),Math.round(c),Math.round(n+(o-n)*i),Math.round(e+(s-e)*i),"Y1"),A(t.g,Math.round(u),Math.round(c),"W0")}function Wc(t,n,e=18,o=16,s=null){let r=1/_n,a=[];for(let m=1;m<=o;m++){let[h,f]=n(t.u-m*r/t.T),b=[Math.round(h-e*m*r),Math.round(f)];if(s&&(b[0]-Lt.l-1<s.x+1||b[1]-10<s.y+1||b[1]+2>s.y+s.h-2))break;a.push(b)}if(a.length<2)return;let i=1e9,u=1e9,c=-1e9,l=-1e9;for(let[m,h]of a)i=Math.min(i,m-34),c=Math.max(c,m),u=Math.min(u,h-10),l=Math.max(l,h+2);Qt(t.g,"gold",i,u,c-i,l-u,m=>Va(m,a,3))}function Ze(t,n,e,o,s={}){let r=_c[n],a=Yn[r],i=Math.max(a.ox,a.w-a.ox)+2,u=Math.max(a.oy,a.h-a.oy)+2;e=Math.round(e),o=Math.round(o),Qt(t.g,"ink",e-i,o-u,2*i,2*u,c=>He(c,r,Bs(t,r,s.phase??0),e,o,{t:t.t+(s.phase??0),phase:s.phase??0,flip:s.flip}),s.k??1)}function ir(t,n,e,o,s,r=1){if(o<=0||o>=1)return;n=Math.round(n),e=Math.round(e);let a=Math.floor(o*6);a<3&&Qt(t.g,"gold",n-5,e-5,10,10,c=>Ji(c,n,e,a));let i=9,u=ft(1.15-o);for(let c=0;c<i;c++){let l=(c+pt(r,c)*.7)/i*Math.PI*2,m=s*(.35+.65*kn(o))*(.7+.5*pt(r+7,c)),h=Math.round(n+Math.cos(l)*m),f=Math.round(e+Math.sin(l)*m*.85+o*o*3),b=c%3===0?"BR":Q;J(t.g,h,f,b,u),c%2===0&&J(t.g,h+(Math.cos(l)>0?-1:1),f,b,u)}}function Hc(t,n,e,o,s,r=1){n=Math.round(n),e=Math.round(e),Qt(t.g,"gold",n-5,e-8,10,16,a=>Hi(a,n,e,t.t,o,s),r)}function $c(t,n,e,o){if(o<0||o>2)return;let s=o+1;for(let[r,a]of[[-1,-1],[1,-1],[1,1],[-1,1]])A(t.g,Math.round(n+r*s),Math.round(e+a*s),o===0?"Y2":"Y1");o===0&&A(t.g,Math.round(n),Math.round(e),"W0")}function Tl(t,n,e,o=1){n=Math.round(n),e=Math.round(e),Qt(t.g,"red",n-6,e-6,12,12,s=>Xi(s,n,e,t.t),o)}function gc(t,n,e,o){[".#.#.","#####",".###.","..#.."].forEach((r,a)=>{for(let i=0;i<5;i++)r[i]==="#"&&J(t.g,Math.round(n)-2+i,Math.round(e)-2+a,"BR",o)})}function Yl(t,n,e,o,s=1){n=Math.round(n),e=Math.round(e),Qt(t.g,"gold",n-18,e-18,36,36,r=>Vi(r,n,e,t.t,!1,o),s)}function or(t,n,e,o,s,r,a=1){o=Math.round(o),s=Math.round(s),Qt(t.g,r?"ice":"ink",o-15,s-18,30,36,i=>ws(i,n,e,o,s,t.t,r),a)}function Al(t,n,e,o,s,r,a={}){e=Math.round(e),o=Math.round(o);let i=a.reveal??1,u=a.die??0,c=n===2&&i>=.5&&u<=.35;Qt(t.g,"ink",r[0],r[1],r[2],r[3],l=>$a(l,n,e,o,s,{t:t.t,reveal:i,die:u,struck:a.struck,corona:c}),1,a.kAt??null)}function Ve(t,n,e,o,s,r,a){e+=a?1:0,rn(t.g,n+1,e+1,o-2,s-2,"A1"),at(t.g,n+1,e,o-2,Q),at(t.g,n+1,e+s-1,o-2,Q),ct(t.g,n,e+1,s-2,Q),ct(t.g,n+o-1,e+1,s-2,Q),a?is(t.g,n+1,e+1,o-2,s-2,"A0",1,n,e):at(t.g,n+1,e+s,o-2,Q);let i=r.length===1&&s>=13?Wt:tt,u=i===Wt?7:5;it(t.g,i,r,n+Math.floor(o/2),e+Math.floor((s-u)/2),Q,"center",r.length>1?-1:0)}function Xc(t,n,e,o,s){let r=Array.isArray(o)?o:o?re:Kn,a=r[0].length,i=r.findIndex(u=>u==="#".repeat(a));if(n=Math.round(n-a/2),e=Math.round(e),r.forEach((u,c)=>{let l=u.indexOf("#"),m=u.lastIndexOf("#");if(c>0&&c<r.length-1)for(let h=l+1;h<m;h++)A(t.g,n+h,e+c,"A1");for(let h=0;h<a;h++)u[h]==="#"&&A(t.g,n+h,e+c,Q)}),s)for(let u=1;u<i;u++)for(let c=1;c<a>>1;c++)r[u][c]==="."&&r[u].indexOf("#")<c&&A(t.g,n+c,e+u,"A0")}function jc(t,n,e,o,s=1){n=Math.round(n),e=Math.round(e);let r=o?4:3;if(s<=0){It(t.g,xt(n,e,r),Q);for(let[a,i]of xt(n,e,r-2))i<=e&&(o||a!==n)&&A(t.g,a,i,Q);return}for(let a=-r;a<=r;a++)for(let i=-r;i<=r;i++)i*i+a*a<=r*r+r*.6&&A(t.g,n+i,e+a,Q);for(let[a,i]of xt(n,e,r-2))i<=e&&(o||a!==n)&&A(t.g,a,i,"A0");if(o&&A(t.g,n,e+1,"A0"),s>0)for(let[a,i]of xt(n,e,r+3))a+i&1||J(t.g,a,i,Q,ft(s)*.75)}function Ys(t,n,e,o,s=1,r=0,a=1){n=Math.round(n),e=Math.round(e),o=Math.round(o);let i=n+Math.round(et(r)*(e-n)),u=l=>r>0&&a>0&&l<=i&&V(l,o,a);for(let l=n;l<=e-2;l++)l&1||J(t.g,l,o,u(l)?l+2>i&&r<1?"W0":"Y1":Q,s);let c=r>=1&&a>0&&V(e,o,a)?"Y1":Q;J(t.g,e,o,c,s),J(t.g,e-1,o-1,c,s),J(t.g,e-1,o+1,c,s),J(t.g,e-2,o-2,c,s),J(t.g,e-2,o+2,c,s)}function yc(t,n,e,o){e=Math.round(e),o=Math.round(o),It(t.g,xt(e,o,5),"Y1"),it(t.g,tt,String(n),e+1,o-2,Q,"center")}function Bn(t,n,e,o){let s=Fn(u=>[t+Math.sin(u*Math.PI*2)*e,n-Math.cos(u*Math.PI*2)*o],Math.ceil((e+o)*4)),r=new Set,a=[];for(let u of s){let c=u[0]+","+u[1];r.has(c)||(r.add(c),a.push(u))}let i=([u,c])=>{let l=Math.atan2((u-t)/e,-(c-n)/o);return l<0?l+Math.PI*2:l};return a.sort((u,c)=>i(u)-i(c))}function ae(t,n,e,o,s,r,a,i=1,u="Y1",c=0){if(!(a<=0))for(let l=0;l<r;l++){let m=l/r*Math.PI*2+c,h=l%2?s*.8:s;for(let f=o;f<=h;f++){let b=Math.round(n+Math.cos(m)*f),d=Math.round(e+Math.sin(m)*f*i);(!(f&1)||l%4===0)&&J(t.g,b,d,f>h-2?"Y0":u,a)}}}function Gl(t,n,e,o,s,r,a,i,u=1){n=Math.round(n),e=Math.round(e);let c=(M,x,y)=>J(t.g,M,x,y,u),l=i?"Y1":Q;for(let M=e+1;M<e+s-1;M++)for(let x=n+1;x<n+o-1;x++)c(x,M,"A1");for(let M=n+1;M<n+o-1;M++)c(M,e,l),c(M,e+s-1,i?"Y0":Q);for(let M=e+1;M<e+s-1;M++)c(n,M,l),c(n+o-1,M,i?"Y0":Q);if(i){for(let M=n+2;M<n+o-2;M++)M&1||(c(M,e+2,"Y2"),c(M,e+s-3,"Y2"));for(let M=e+3;M<e+s-3;M++)M&1||(c(n+2,M,"Y2"),c(n+o-3,M,"Y2"))}let m=r?oe(r,i?"Y0":Q):null,h=n+Math.floor(o/2),f=e+Math.round(s*.42);r&&cr(t,m,h,f,u);let b=e+s-4,d=5,p=n+Math.floor(o/2)-(d-1);if(o>=2*d+3)for(let M=0;M<d;M++)c(p+M*2,b,M<a?i?"Y1":Q:"A0")}function cr(t,n,e,o,s=1){let r=Math.round(e-(n.ox??0)),a=Math.round(o-(n.oy??0)),{h:i}=Co(n);for(let u=0;u<i;u++){let c=n.rows[u]||"";for(let l=0;l<c.length;l++){let m=n.key[c[l]];c[l]==="."||!m||J(t.g,r+l,a+u,m,s)}}}function Fl(t,n){let e=Pc.get(t);if(e)return e;let o=Fn(n,720),s=o.filter((u,c)=>c===0||u[0]!==o[c-1][0]||u[1]!==o[c-1][1]);s.length>1&&s[s.length-1][0]===s[0][0]&&s[s.length-1][1]===s[0][1]&&s.pop();let r=2*Math.max(4,Math.round(s.length/6)),a=[];for(let u=0;u<r;u++){let c=Math.round(u*s.length/r)%s.length,[l,m]=s[c];a.some(([h,f])=>Math.abs(h-l)<=1&&Math.abs(f-m)<=1)||a.push([l,m,c])}let i={P:s,dots:a};return Pc.set(t,i),i}function Vc(){if(Cc)return;Cc=!0;let t=200,n=100,e=100,o=document.createElement("canvas");o.width=t,o.height=t;let s=o.getContext("2d",{willReadFrequently:!0});if(!s)return;let r=0,a=0,i=0,u=0;for(let[c,l,m]of[["dreamer.fly",4,!1],["dreamer.up",1,!1],["dreamer.down",1,!1],["dreamer.cast",10,!1],["dreamer.spread",1,!0],["dreamer.spread",1,!1]]){c==="dreamer.cast"&&a>0&&Object.assign(Je,{l:r,r:a,u:i,d:u});for(let h=0;h<l;h++)for(let f of[0,.4]){s.clearRect(0,0,t,t),He(s,c,h,n,e,{t:f,od:m});let b=s.getImageData(0,0,t,t).data;for(let d=0;d<t;d++)for(let p=0;p<t;p++)b[(d*t+p)*4+3]>127&&(r=Math.max(r,n-p),a=Math.max(a,p-n),i=Math.max(i,e-d),u=Math.max(u,d-e))}}a>0&&r>0&&Object.assign(Lt,{l:r,r:a,u:i,d:u})}function Ol(t){let{u:n}=t,e=t.zones[0],o=t.zones[1],s=o.h>=84?"error":o.h>=46?"spam":"glitch",r=ur(s),a=o.y+o.h-2-r.d,i=a-r.u,u=an(Math.round(a-(r.u-r.d)/2),o.y+Lt.u+2,o.y+o.h-Lt.d-2),c=Math.max(0,Math.min(u-(o.y+Lt.u+2),Math.max(u+Lt.d+4-i,Math.round(o.h*.3)))),l=o.x+Lt.l+4+Math.round(Math.max(0,o.w-48)*(o.h>=80?.24:.1)),m=Math.max(4,Math.min(26,Math.round((o.w-48)*.3))),h=o.x+o.w-2-r.r,f=o.x+2+r.l,b=S=>h-(h-f)*Math.min(1,sr(S)/.86),d=S=>l+m*(gt((S-.3)/.22)-gt((S-.66)/.26)),p=S=>{S=sr(S);let E=d(S),I=b(S),v=E+Lt.r+10-(I-r.l),Y=I+r.r+10-(E-Lt.l),G=gt(v/16)*gt(Y/16)*gt((I-f)/12)*gt(S/.12);return[E,u-c*G+Math.sin(S*Math.PI*4)*.8]},[M,x]=p(n),[y,k]=p(n-1/(_n*t.T)),w=M-y,g=x-k,R=b(n),C=ft(Math.min((h-R)/10,(R-f)/10));_t(t,1,()=>{Wc(t,p,o.h>=80?36:14,o.h>=80?10:16,o),C>0&&Ze(t,s,R,a+Math.round(Math.sin(n*Math.PI*8)*.8),{k:C}),ce(t,M,x,{pose:g<-.5?"dreamer.up":g>.5?"dreamer.down":"dreamer.fly"})});let P=new Set;g<-.5&&P.add("W"),g>.5&&P.add("S"),w>.4&&P.add("D"),w<-.4&&P.add("A"),_t(t,0,()=>{let S=Xt(e);if(!t.touch){let U=[[13,re,5,3,2],[13,re,2,3,2],[11,re,5,3,2],[11,re,2,3,2],[11,Kn,2,3,2],[9,re,5,3,2],[9,Kn,5,3,2],[9,Kn,2,3,2],[9,Kn,0,3,1],[9,Kn,0,2,1],[9,wc,0,2,1]].find(([Ft,Ot,tn,de,pe])=>3*Ft+2<=e.w-8&&2*Ft+2+de+tn+Ot.length+pe<=e.h),X=!!U,[q,ot,bt,St]=U??[9,e.h>=2*9+2+12?Kn:wc,0,0,0],lt=q,fe=q*3+2,jn=ot[0].length,be=ot.length,Un=X?S-Math.round(fe/2):e.x+2,xn=e.y+Math.floor((e.h-(X?2*lt+2+St+bt+be:2*lt+2))/2);Ve(t,Un+q+1,xn,q,lt,"W",P.has("W")),Ve(t,Un,xn+lt+1,q,lt,"A",P.has("A")),Ve(t,Un+q+1,xn+lt+1,q,lt,"S",P.has("S")),Ve(t,Un+2*(q+1),xn+lt+1,q,lt,"D",P.has("D"));let aa=X?e.x+2+(jn>>1):Un+fe+4+(jn>>1),au=e.x+e.w-3-(jn>>1),Ir=X?xn+2*lt+2+St+bt:xn+lt-(be>>1),iu=Ir-(X?bt:0),ia=Math.max(0,au-aa),ca=Math.min(ia,28),cu=aa+Math.round((ia-ca)/2),ua=Ft=>{let[Ot,tn]=p(Ft),de=et((Ot-l)/Math.max(1,m)),pe=c>0?et((u-tn)/c):0;return[cu+de*ca,Ir-pe*(Ir-iu)]},[la,ma]=ua(n),vr=Fn(Ft=>{let[Ot,tn]=ua(n-Ft*1.2/t.T);return[Ot,tn+be/2]},96),Mo=vr.filter((Ft,Ot)=>Ot===0||Ft[0]!==vr[Ot-1][0]||Ft[1]!==vr[Ot-1][1]),ha=Math.round(la-jn/2)-1,fa=Math.round(ma)-1;Mo.forEach(([Ft,Ot],tn)=>{if(Ft>=ha&&Ft<=ha+jn+1&&Ot>=fa&&Ot<=fa+be+1)return;let de=Mo[Math.max(0,tn-1)],pe=Mo[Math.min(Mo.length-1,tn+1)],ba=Math.abs(pe[0]-de[0])>=Math.abs(pe[1]-de[1])?Ft:Ot;ba&1||(tn<=14?A(t.g,Ft,Ot,Q):tn<=26?A(t.g,Ft,Ot,"A0"):tn<=34&&!(ba&2)&&A(t.g,Ft,Ot,"A0"))}),Xc(t,la,ma,ot,!1);return}let E=e.h>=60,I=E?4:3,v=I+4,Y=e.h>e.w*1.15,G=Y?e.h:e.w,F=Y?e.w:e.h,T=Math.max(8,Math.min(Math.round(G*.34),G>=160?58:46,Math.floor(G/2)-v-2)),D=Math.max(4,Math.min(Math.round(F*.3),20,Math.floor(F/2)-v-2)),L=Xt(e),O=vn(e),K=_=>Y?[L+Math.sin(_*Math.PI*4)*D,O+Math.sin(_*Math.PI*2)*T]:[L+Math.sin(_*Math.PI*2)*T,O+Math.sin(_*Math.PI*4)*D],N=Fl(\`\${e.x},\${e.y},\${e.w},\${e.h}:\${+Y}:\${T},\${D}\`,K),$=N.P.length,j=Math.floor(sr(n)*$)%$,[W,H]=N.P[j],Z=I+4,B=Z+12;for(let[_,U,X]of N.dots){if(Math.hypot(_-W,U-H)<=Z)continue;let q=(j-X+$)%$;q<=B||A(t.g,_,U,q<=B+9?Q:"Y0")}for(let _=1;_<=B;_++){let[U,X]=N.P[(j-_+$)%$];Math.hypot(U-W,X-H)>Z&&A(t.g,U,X,Q)}jc(t,W,H,E,1)})}function Ll(t){let n=t.zones[0],e=Xt(n)+8,o=vn(n),s=h=>[e+Math.sin(h*Math.PI*2)*3,o+Math.sin(h*Math.PI*4+.6)*2],[r,a]=s(t.u),i=e-8,u=n.h>=90,c=Math.round(Math.min(n.w*(u?.35:.3),64)),l=Math.round(Math.min(n.h*.3,c*(u?.8:.75))),m={};_t(t,0,()=>{for(let[b,d]of Bn(i,o,c,l))(b+d)%3===0&&A(t.g,b,d,"A0");let h=u?[{a:-2.45,kind:"glitch"},{a:-1.45,kind:"spam"},{a:-.6,kind:"bug"},{a:.65,kind:"spam"},{a:1.7,kind:"bug"},{a:2.5,kind:"glitch"}]:[{a:-2.45,kind:"glitch"},{a:-.6,kind:"bug"},{a:.65,kind:"bug"},{a:2.5,kind:"glitch"}],f=t.T/h.length;h.forEach((b,d)=>{let p=((t.t-d*f-.2)%t.T+t.T)%t.T,M=u?3.2:1.15,x=M+.55;if(p>x)return;let y=ur(b.kind),k=D=>an(D,n.x+y.l+3,n.x+n.w-y.r-3),w=D=>an(D,n.y+y.u+3,n.y+n.h-y.d-3),g=k(i+Math.cos(b.a)*n.w*.5),R=w(o+Math.sin(b.a)*n.h*.5),C=k(i+Math.cos(b.a)*c*1.12),P=w(o+Math.sin(b.a)*l*1.12),S=gt(et(p/M)),E=Math.sin(p*3+d)*1.2*(1-S),I=g+(C-g)*S,v=w(R+(P-R)*S+E),Y=Math.cos(b.a)>0,G=Math.max(4,Math.min(u?12:9,Math.floor((Math.min(I-n.x,n.x+n.w-I,v-n.y,n.y+n.h-v)-5)/1.25)));p<M?Ze(t,b.kind,I,v,{k:ft(p/.3),phase:d*1.7,flip:!Y}):ir(t,I,v,(p-M)/.55,G,d+3);let F=M-(Y?.3:.34);if(p<F||p>M+.5)return;let T=p-F;if(Y){let[D,L]=Ie(r,a,"dreamer.cast",In(r,a,I,v,!0)),O=I-D,K=v-L,N=Math.hypot(O,K)||1,$=-K/N,j=O/N,W=d%2?1:-1,H=N*.24*W,Z=X=>[D+O*.45+$*X,L+K*.45+j*X];for(;Math.abs(H)>1&&(()=>{let[X,q]=Z(H);return X<n.x+4||X>n.x+n.w-4||q<n.y+4||q>n.y+n.h-4})();)H*=.8;let[B,_]=Z(H),U=Zi(zi([{x:D,y:L},{x:B,y:_},{x:I-$*H*.2,y:v-j*H*.2},{x:I+O/N*3,y:v+K/N*3}]),.5);Qt(t.g,"gold",Math.min(D,I)-N*.4-8,Math.min(L,v)-N*.4-8,Math.abs(O)+N*.8+16,Math.abs(K)+N*.8+16,X=>Qi(X,U,T,.3,.75)),T<.35&&(m={pose:"dreamer.cast",frame:In(r,a,I,v,T<.15)})}else if(T<.34){let D=_o(T/.34),[L,O]=Ie(r,a,"dreamer.cast",In(r,a,I,v,!0));T<.3&&(m={pose:"dreamer.cast",frame:In(r,a,I,v,T<.15)});let K=L+(I-L)*D,N=O+(v-O)*D;Qt(t.g,"gold",K-14,N-8,28,16,$=>tc($,d%2?"fn()":"if",K,N,I-L,v-O,T+.25))}}),Wc(t,s,12,u?22:14,n),ce(t,r,a,m)})}function Kl(t){let{u:n}=t,e=t.zones[0],o=t.zones[1];_t(t,0,()=>{let s=e.h>=60?"spam":"glitch",r=ur(s),a=e.h>=80,i=e.x+Lt.l+3+Math.round(Math.max(0,e.w-100)*.12),u=e.y+e.h-Lt.d-3-Math.round(e.h*.1),c=an(e.x+Math.round(e.w*.74),e.x+r.l+10,e.x+e.w-r.r-10),l=an(e.y+Math.round(e.h*.36),e.y+r.u+3,e.y+e.h-r.d-3),m=Math.round(Math.sin(n*Math.PI*6)),h=.24,f=Math.min(c-e.x,e.x+e.w-c,l-e.y,e.y+e.h-l);n<h?Ze(t,s,c,l+m,{k:ft(Math.min(n/.07,(h-n)/.02+1)),phase:1.3}):ir(t,c,l,(n-h)/.14,Math.max(5,Math.min(a?14:10,Math.floor((f-5)/1.25))),5);let b=g=>[i+Math.sin(g*Math.PI*2)*2,u+Math.sin(g*Math.PI*4)*1.2],[d,p]=b(n),M=n>.14&&n<.26;if(n>.17&&n<h){let[g,R]=Ie(d,p,"dreamer.cast",In(d,p,c,l,!0));Ws(t,g,R,c,l,(n-.17)/(h-.17),.14)}let x=a?7:5,y=Math.max(6,Math.min(a?20:13,f-9)),k=d+4,w=p-3;for(let g=0;g<x;g++){if(n<h)continue;let R=g/x*Math.PI*2+.5,C=et((n-h)/.1),P=.34+g*.035,S=et((n-P)/.17);if(S>=1){$c(t,k,w,Math.floor((n-P-.17)*t.T*_n));continue}let E=y*kn(C),I=c+Math.cos(R)*E,v=l+Math.sin(R)*E*.8,Y=_o(S),G=I+(k-I)*Y+Math.sin(S*Math.PI)*(g-(x-1)/2)*2,F=v+(w-v)*Y;Hc(t,G,F,g/x,a,ft(C*2))}ce(t,d,p,M?{pose:"dreamer.cast",frame:In(d,p,c,l,n>.17)}:{})}),_t(t,1,()=>{let s=sr(n-.4),r=o.h>=80,a=o.x+Lt.l+3+Math.round(Math.max(0,o.w-100)*.12),i=o.y+o.h-Lt.d-3-Math.round(o.h*.1),u=S=>[a+Math.sin(S*Math.PI*2+1)*2,i+Math.sin(S*Math.PI*4+1)*1.2],[c,l]=u(n),m=Math.round(Math.min(o.w-24,r?76:56)),h=r?5:o.h>=50?3:2,f=Xt(o)-Math.round(m/2)+3,b=o.y+(r?8:5),d=gt((s-.36)/.2),p=gt((s-.8)/.18),M=.26+.74*d-.74*p;at(t.g,f,b-1,m,Q),at(t.g,f,b+h,m,Q),ct(t.g,f-1,b,h,Q),ct(t.g,f+m,b,h,Q);let x=Math.round(m*M),y=M<.4&&Math.floor(t.t*3)%2===1;if(is(t.g,f,b,x,h,"BR",y?.75:1,f,b),gc(t,f-5,b+(h>>1),1),d>0&&d<1){let S=f+x-1;ct(t.g,S,b,h,"W0"),A(t.g,S,b-2,"Y2"),A(t.g,S,b+h+1,"Y2"),A(t.g,S+1,b+(h>>1),"Y2")}let[k,w]=Ie(c,l,"dreamer.fly",Bs(t,"dreamer.fly")),g=k+2,R=w-1,C=o.x+o.w-8,P=Math.max(0,Math.min(Math.round(o.h*.25),R-(b+h+10)));if(s<.36){let S=gt(s/.36),E=C+(g-C)*S,I=R-P*(1-S)*(1-S)-5*Math.sin(S*Math.PI)+Math.sin(s*Math.PI*10)*1.2*(1-S);Tl(t,E,Math.max(b+h+8,I),ft(Math.max((C-E)/8,S/.3)+.25))}if(s>=.34&&s<.64){let S=(s-.34)/.3,E=Math.max(4,Math.min(r?22:14,g-o.x-2,o.x+o.w-g-2,R-o.y-2,o.y+o.h-R-2));Qt(t.g,"gold",g-E-4,R-E-4,2*E+8,2*E+8,Y=>qi(Y,g,R,E,S,"D4","Y2"));let I=Math.max(4,Math.min(r?16:10,R-7-(b+h+5))),v=an(g,o.x+9,o.x+o.w-10);for(let Y=0;Y<3;Y++){let G=et((s-.37-Y*.05)/.22);G<=0||G>=1||gc(t,v+(Y-1)*6,R-7-G*I,ft(Math.sin(Math.PI*G)*1.3))}}ce(t,c,l)})}function Nl(t,n,e,o,s,r=1){n=Math.round(n),e=Math.round(e);let a=(c,l,m)=>J(t.g,c,l,m,r);for(let c=e+1;c<e+s-1;c++)for(let l=n+1;l<n+o-1;l++)a(l,c,l>n+1&&l<n+o-2&&c>e+1&&c<e+s-2&&(l+c)%3===0?"A0":"A1");for(let c=n+1;c<n+o-1;c++)a(c,e,Q),a(c,e+s-1,Q);for(let c=e+1;c<e+s-1;c++)a(n,c,Q),a(n+o-1,c,Q);let i=n+(o>>1),u=e+(s>>1);for(let[c,l]of[[0,-2],[-1,-1],[1,-1],[-2,0],[2,0],[-1,1],[1,1],[0,2]])a(i+c,u+l,"Y1");a(i,u,"Y2")}function Bl(t){let{u:n}=t,e=t.zones,o=e.map(C=>t.tall?{x:C.x+Es,y:C.y,w:C.w-Es,h:C.h}:{x:C.x,y:C.y+13,w:C.w,h:C.h-13});e.forEach((C,P)=>t.tall?yc(t,P+1,C.x+6,vn(C)):yc(t,P+1,Xt(C),C.y+6));let s=5,r=0;_t(t,0,()=>{let C=o[0],P=an(Xt(C)+8,C.x+Je.l+2,C.x+C.w-Je.r-2),S=an(vn(C)+3,C.y+Je.u+2,C.y+C.h-Je.d-2),E=C.h>=40&&C.w>=70;for(let I=0;I<s;I++){let v=.03+I*.075,Y=(n-v)/.14;if(Y>=1){r+=gt((n-v-.14)/.04),$c(t,P+2,S-2,Math.floor((n-v-.14)*t.T*_n));continue}if(Y<=0)continue;let G=[-1.25,-.45,.25,-.85,-1.6][I],F=Math.max(8,Math.min(C.x+C.w-7-(P+2),34)),T=Math.max(6,Math.min(S-2-(C.y+9),26)),D=_o(Y),L=P+2+Math.cos(G)*F*(1-D)*(Math.cos(G)>0?1:.6),O=S-2+Math.sin(G)*T*(1-D);Hc(t,L,O,I/s,E,ft(Y*4))}ce(t,P,S)});let a=o[1],i=Math.min(a.w,a.h)>=44?8:5,u=Math.max(9,Math.min(22,Math.floor(Math.min(a.w,a.h)/2)-i-3)),c=Math.max(3,Math.min(i,Math.floor(Math.min(a.w,a.h)/2)-u-1)),l=Xt(a),m=vn(a);_t(t,1,()=>{let C=ft(1-(n-.9)/.06),P=et(r/s),S=Bn(l,m,u,u),E=Bn(l,m,u-1,u-1);S.forEach(([Y,G],F)=>{Y+G&1||A(t.g,Y,G,Q),(F+.5)/S.length<=P&&J(t.g,Y,G,"Y1",C)}),E.forEach(([Y,G],F)=>{(F+.5)/E.length<=P&&J(t.g,Y,G,"Y2",C)}),it(t.g,tt,"LV",l,m-6,Q,"center",Gs);let I=ft(Math.min((n-.44)/.05,(.97-n)/.05)),v=m+1;I<1&&Ts(t.g,1-I,l-3,v,7,6,()=>it(t.g,tt,"3",l,v,Q,"center")),I>0&&Ts(t.g,I,l-3,v,7,6,()=>it(t.g,tt,"4",l,v,"BR","center")),n>=.43&&n<.6&&ae(t,l,m,u+3,u+c,16,ft(1.2-(n-.43)/.17),1,"Y1")});let h=o[2],f=[[25,36,13],[23,33,9],[19,27,6],[15,21,4],[13,18,4]],[b,d,p]=f.find(([C,P,S])=>C+2*(C-S)+12<=h.w&&P+7+12<=h.h)||f[4],M=b-p,x=Xt(h),y=vn(h)+3;_t(t,2,()=>{let C=["design","magnet","code"],P=I=>[x-Math.round(b/2)+(I-1)*M,y-Math.round(d/2)+(I===1?-1:2)],S=gt((n-.62)/.08),E=gt((n-.86)/.06);for(let I of[0,2,1]){let v=I===1,Y=et((n-.47-I*.025)/.08)-(v?et((n-.88-I*.02)/.08):et((n-.68-I*.02)/.08)),G=Math.abs(1-2*Y),F=Math.max(2,Math.round(b*Math.round(G*4)/4)),[T,D]=P(I),L=D-(v?Math.round(S*(1-E)*5):0),O=T+Math.round((b-F)/2);Y<.5?Nl(t,O,L,F,d,1):Gl(t,O,L,F,d,F>=b-1?C[I]:"",v?3:2,v&&S>.5&&E<.5),v&&S>.5&&n<.84&&ae(t,O+b/2,L+d/2,Math.max(b,d)/2+2,Math.max(b,d)/2+5,12,ft(1-(n-.74)/.1),1,"Y1")}});let k=et((n-.15)/.3),w=n<.15?0:ft(1-(n-.5)/.1),g=et((n-.44)/.05),R=n<.44?0:ft(1-(n-.66)/.1);t.tall?(Ds(t,0,k,w),Ds(t,1,g,R)):(Ys(t,e[0].x+e[0].w+2,e[1].x-3,m,1,k,w),Ys(t,e[1].x+e[1].w+2,e[2].x-3,m,1,g,R))}function Wl(t,n,e){let o=n&&!e?37:t===2?31:t===1?23:17,s=n&&!e?53:t===2?45:t===1?33:24;return{cw:o,chh:s,rx0:o/2+2,ry0:s/2+2,len:n?12:t===2?10:6}}function $l(t,n,e,o,s,r,a,i,u="Y1"){if(!(i<=0))for(let c=0;c<a;c++){let l=c/a*Math.PI*2,m=Math.cos(l),h=Math.sin(l),f=1/Math.sqrt((m/o)**2+(h/s)**2),b=c%2?Math.max(1,Math.round(r*.35)):r;for(let d=0;d<=b;d++){let p=Math.round(n+m*(f+d)),M=Math.round(e+h*(f+d));(!(d&1)||c%4===0)&&J(t.g,p,M,d>b-2?"Y0":u,i)}}}function kc(t,n,e,o=1){n=Math.round(n),e=Math.round(e);for(let s=-2;s<=2;s++)J(t.g,n+s,e,Q,o),J(t.g,n,e+s,Q,o)}function Xl(t){let{u:n}=t,[e,o,s]=t.zones,r=k=>Math.abs(n-k)<.07?ft(1-Math.abs(n-k)/.07):0,a=et((n-.36)/.1),i=n<.36?0:ft(1-(n-.52)/.1),u=Math.max(6,Math.min(16,Math.floor((e.w-18)/4),Math.floor((e.h-16)/2)-4)),c=u+4,l=e.y+Math.round((e.h-6)/2),m=Xt(e);_t(t,0,()=>{for(let[k,w]of[[0,"design"],[1,"code"]]){let g=m+(k?c:-c),R=l+Math.round(Math.sin(n*Math.PI*4+k*2)*1.2),C=r(.14+k*.08);C>0&&ae(t,g,R,u+2,u+4,12,C,1,"Y1");for(let[P,S]of xt(g,R,u))A(t.g,P,S,C>.5?"Y0":Q);for(let[P,S]of xt(g,R,u-1))S>R&&!(P+S&1)&&A(t.g,P,S,"A0");if(u>=12)for(let[P,S]of xt(g,R,u-2))S>R+2&&!(P+S&1)&&A(t.g,P,S,"A0");cr(t,oe(w,C>.5?"Y0":Q),g,R);for(let P=0;P<5;P++)A(t.g,g-4+P*2,R+u+3,"Y1")}kc(t,m,l)});let h=Xt(o),f=o.w>=38&&o.h>=38;_t(t,1,()=>{let k=Math.min(l,o.y+o.h-10),w=r(.3);w>0&&ae(t,h,k,f?16:8,f?18:9,12,w,1,"Y2"),Yl(t,h,k+Math.round(Math.sin(n*Math.PI*4+1)),f)}),kc(t,e.x+e.w+Math.floor(Yc/2),l);let b=Math.min(t.tall?10:6,Math.floor((s.h-26)/4)),d=Math.max(20,Math.min(53,s.h-2*(b+3)-2,Math.floor((s.w-2*(b+3)-2)/.69))),p=Math.round(d*.69)|1,M=Xt(s)-(p>>1),x=vn(s)-(d>>1);t.tall?Ds(t,0,a,i):Ys(t,o.x+o.w+1,s.x+t.ox[2]+Math.max(1,Math.round(s.w/2-p/2-b-5)),l,1,a,i);let y=n>=.46&&n<.7;_t(t,2,()=>{rn(t.g,M+1,x,p-2,d,Q),ct(t.g,M,x+1,d-2,Q),ct(t.g,M+p-1,x+1,d-2,Q);let k=y&&Math.floor(t.t*4)%2===0;for(let g=M+3;g<M+p-3;g++)A(t.g,g,x+2,k?"Y2":"Y1"),A(t.g,g,x+d-3,"Y0");for(let g=x+3;g<x+d-3;g++)A(t.g,M+2,g,k?"Y2":"Y1"),A(t.g,M+p-3,g,"Y0");let w=M+Math.floor(p/2)-4;for(let g=0;g<5;g++)A(t.g,w+g*2,x+5,"Y2");if(cr(t,oe("algorithmic","Y2"),M+Math.floor(p/2),x+Math.round(d*.56)),n>=.46&&n<.66&&$l(t,M+p/2,x+d/2,p/2+2,d/2+2,b,20,ft(1.2-(n-.46)/.2),"Y1"),n>.54&&n<.7){let g=(n-.54)/.16,R=x+3+Math.round(g*(d-7));for(let C=M+3;C<M+p-3;C++)C+R&1||A(t.g,C,R,"Y2")}})}function jl(t){let{u:n}=t,[e,o]=t.zones,s=e.h>=70,r=Xt(e),a=vn(e),i=Math.max(30,Math.min(s?56:34,Math.round(e.w/2)-16)),u=Math.max(13,Math.min(Math.round(i*.72),Math.round(e.h/2)-(s?12:4))),c=[.14,.27,.4],l=[-2.45,-.6,2.55],m=0;for(let C of c)m+=gt((n-C)/.05)/3;let h=et((n-.62)/.3);n>.6&&(m=Math.max(0,1-h));let f=Jc(n),b=(C,P,S)=>{let E=ur(S);return[an(r+Math.cos(C)*i*P,e.x+E.l+2,e.x+e.w-E.r-2),an(a+Math.sin(C)*u*P,e.y+E.u+2,e.y+e.h-E.d-2)]},d=Math.max(i+3,Math.min(e.w/2-1,(e.h/2-1)*i/u)),p=r+4,M=a+1,x=C=>Dl("dreamer.cast",C).every(([P,S])=>((p+P-r)/(i-2))**2+((M+S-a)/(u-2))**2<1),y=(C,P,S)=>{let E=In(p,M,C,P,!0)>>1;for(;E!==2&&!x(E*2+1);)E+=E<2?1:-1;return E*2+(S?1:0)},k={};_t(t,0,()=>{c.forEach((E,I)=>{let v=E-.12;if(n<v||n>E+.1)return;let Y=et((n-v)/.11),G=I===1?"bug":"glitch",[F,T]=b(l[I],1.5-.35*gt(Y),G),D=et((n-(E-.035))/.035);if(n>E-.055&&n<E+.015&&(k={pose:"dreamer.cast",frame:y(F,T,D>0)}),n<E){if(Ze(t,G,F,T,{k:ft(Y*3),phase:I,flip:Math.cos(l[I])<0}),D>0){let[L,O]=Ie(p,M,"dreamer.cast",y(F,T,!0));Ws(t,L,O,F,T,D,.12)}}else ir(t,F,T,(n-E)/.1,7,I+11)});let C=Bn(r,a,i,u),P=Bn(r,a,i-1,u-1);if(C.forEach(([E,I],v)=>{(v+.5)/C.length<=m?A(t.g,E,I,"Y1"):v%2===0&&A(t.g,E,I,Q)}),P.forEach(([E,I],v)=>{(v+.5)/P.length<=m&&A(t.g,E,I,"Y2")}),n>.42&&n<.6&&Math.floor(t.t*4)%2===0&&ae(t,r,a,i+3,Math.min(i+6,d),16,1,u/i,"Y1"),f>0){let E=et((n-.6)/.12);E<1&&ae(t,r,a,Math.min(d-2,Math.round(i*(1.08+E*.2))),Math.min(d,Math.round(i*(1.3+E*.5))),24,ft(1-E),u/i,"Y2");let I=f*(.5+.25*(Math.floor(t.t*6)%2));for(let v=a-u+2;v<=a+u-2;v++)for(let Y=r-i+2;Y<=r+i-2;Y++){let G=((Y-r)/(i-2))**2+((v-a)/(u-2))**2;G<1&&V(Y,v,I*.25*(1-G))&&A(t.g,Y,v,"Y2")}ae(t,r,a,i+2,Math.min(i+5,d),12,f*.75,u/i,"Y1",t.t*.8);for(let v=0;v<2;v++){let Y=.66+v*.12;if(n<Y)continue;let G=et((n-Y)/.07),F=v?-.25:3.4;if(G<1){let[T,D]=b(F,1.45-.5*gt(G),"glitch");Ze(t,"glitch",T,D,{k:ft(G*3),phase:5+v,flip:Math.cos(F)<0})}else{let[T,D]=b(F,.95,"glitch");ir(t,T,D,(n-Y-.07)/.08,7,v+21)}}}ce(t,p,M,f>0?{pose:"dreamer.spread",od:!0}:k)});let w=Xt(o),g=vn(o),R=n>.56&&n<.62;_t(t,1,()=>{if(!t.touch){let F=o.h>=40,T=F?re.length:Kn.length,D=Math.min(34,o.w-6),L=F?11:9,O=F?6:4,K=g-Math.round((T+O+L)/2);if(Xc(t,w,K+(R?1:0),F,R),Ve(t,w-Math.round(D/2),K+T+O,D,L,"SPACE",R),n>.56&&n<.68){let N=ft(1-(n-.56)/.12),$=Math.min(6+(n-.56)*60,o.w/2-2,(K+4-o.y-1)/.8);for(let[j,W]of Bn(w,K+4,$,$*.8))j+W&1||J(t.g,j,W,Q,N)}return}let C=o.h>=50?4:3,P=Math.max(7,Math.min(16,Math.floor(Math.min(o.w,o.h)/2)-12));for(let[F,T]of xt(w,g,P+2))A(t.g,F,T,Q);let S=Bn(w,g,P-1,P-1),E=n>.42&&n<.6;S.forEach(([F,T],D)=>{(D+.5)/S.length<=m?A(t.g,F,T,"Y1"):D%2===0&&A(t.g,F,T,"A0")}),cr(t,Ue(E||f>0?9:7,E||f>0?"Y1":Q),w,g);let I=gt((n-.46)/.1)-gt((n-.64)/.1),v=[Math.min(w+P+8,o.x+o.w-C-5),Math.min(g+P+6,o.y+o.h-C-5)],Y=v[0]+Math.round((w+2-v[0])*I),G=v[1]+Math.round((g+2-v[1])*I);if(jc(t,Y,G,C===4,R?1:0),n>.56&&n<.68){let F=ft(1-(n-.56)/.12),T=Math.min(P+3+(n-.56)*50,Math.floor(Math.min(o.w,o.h)/2)-2);for(let[D,L]of xt(w,g,Math.round(T)))D+L&1||J(t.g,D,L,Q,F)}})}function As(t,n){let e=t+":"+n,o=Rc.get(e);if(!o){let s=Ce(t,n),r=1e9,a=1e9,i=-1,u=-1;for(let c=0;c<s.h;c++)for(let l=0;l<s.w;l++)s.sd[c*s.w+l]<.5&&(r=Math.min(r,l),i=Math.max(i,l),a=Math.min(a,c),u=Math.max(u,c));Rc.set(e,o=[r-s.hx,a-s.hy,i-s.hx,u-s.hy])}return o}function Ul(t,n,e){let o=t+":"+n+":"+e,s=Sc.get(o);if(s!==void 0)return s;let r=u=>{let c=As(t,u);return c[2]-c[0]+1<=n&&c[3]-c[1]+1<=e},a=As(t,40),i=Math.max(16,40*Math.min(n/(a[2]-a[0]+1),e/(a[3]-a[1]+1)));for(s=Math.min(150,150-2*Math.floor((150-Math.min(150,i+6))/2)),s<150&&r(s+2)&&(s=150);s>16&&!r(s);)s-=2;return Sc.set(o,s),s}function Vl(t){let{u:n}=t,[e,o]=t.zones,s=Math.min(2,Math.floor(n/.25)),r=(n-s*.25)/.25,a=s,i=e.x+Lt.l+3,u=e.y+e.h-Lt.d-3,c={x0:e.x+4,x1:e.x+e.w-5,y0:e.y+4,y1:u-Lt.u-4},l=Ul(a,c.x1-c.x0+1,c.y1-c.y0+1),m=As(a,l),h=Math.round((c.x0+c.x1)/2-(m[0]+m[2])/2),f=Math.round(c.y0+Math.max(0,(c.y1-c.y0-(m[3]-m[1]))*.35)-m[1]),b=n<.75&&r>.2&&r<.5,d=E=>(r*3.5+E*.5)%1,p=b&&r>.26&&(d(0)<.07||d(1)<.07),M=h+Math.round((m[0]+m[2])/2),x=f+Math.round((m[1]+m[3])/2),y=In(i,u,M,x,d(0)<.22||d(1)<.22);_t(t,0,()=>{if(n<.75){let E=et(r/.24),I=et((r-.48)/.48);if(I<1&&Al(t,a,h,f,l,[e.x,e.y,e.w,e.h],{reveal:E,die:I,struck:p}),b){let[v,Y]=Ie(i,u,"dreamer.cast",In(i,u,M,x,!0));for(let G=0;G<2;G++)Ws(t,v,Y,M,x,d(G),.07)}}ce(t,i,u,b?{pose:"dreamer.cast",frame:y}:{})});let k=o.w>=3*24+2*10&&o.h>=64?24:12,[w,g]=Qo[k],R=Math.min(k===24?32:18,Math.floor((o.w-w)/2)-3),C=[-1,0,1].map(E=>Xt(o)+E*R),P=o.y+Math.round(o.h*.58),S=Math.min(P+Math.ceil(g/2)+2,o.y+o.h-2);if(n<.75&&r>.54){let E=gt((r-.54)/.42),I=h+Math.round((m[0]+m[2])/2)+t.ox[0],v=f+Math.round((m[1]+m[3])/2),Y=C.map(G=>G+t.ox[1]);if(E<1){let G=t.y+Math.ceil(g/2)+1,F=k===24?22:12,T=(K,N)=>v+(P-v)*K-Math.sin(Math.PI*K)*N,D=K=>{let N=1e9;for(let $=0;$<=40;$++)N=Math.min(N,T($/40,K));return N};for(;F>0&&D(F)<G;)F--;let L=I+(Y[s]-I)*E,O=t.tall?t.zones[0]:null;if(O&&O.cap.length){let K=Math.max(...O.cap.map(_=>pn(_)))/2,N=O.capY-Math.ceil(g/2)-3,$=O.capY+se(O.cap.length)+Math.ceil(g/2)+3,j=Math.ceil(O.cx+K+w/2+3),W=Math.floor(O.cx-K-w/2-3),H=j+Math.ceil(w/2)+1<=t.x+t.w,Z=W-Math.ceil(w/2)-1>=t.x,B=s===0?Z?W:H?j:null:H?j:Z?W:null;if(B!=null){let _=1,U=1;for(let X=0;X<=200;X++){let q=X/200,ot=T(q,F);if(_===1&&ot>=N&&T(Math.max(0,q-.005),F)<=ot&&(_=q),ot>=$){U=q;break}}_=Math.max(.08,_-.04),L=E<_?I+(B-I)*gt(E/_):E<U?B:B+(Y[s]-B)*gt((E-U)/Math.max(.01,1-U))}}or(t,s,k,L,Math.max(G,T(E,F)),!0,ft(E*8))}}_t(t,1,()=>{let E=Math.min(ft((n-.76)/.06),ft((1-n)/.06));if(E>0){let I=gt((n-.76)/.16),v=k===24?16:10,Y=Math.max(0,S-o.y-2-v-3),G=C[1];for(let F=0;F<22;F++){let T=Math.PI*(1.04+.92*F/21),D=(F%2?.7:1)*Math.min(Y,I*(k===24?34:22));for(let L=v+3;L<=v+3+D;L++){let O=Math.round(G+Math.cos(T)*L),K=Math.round(S+Math.sin(T)*L);!(L&1)&&K<S&&O>o.x&&O<o.x+o.w-1&&J(t.g,O,K,"Y1",E)}}for(let[F,T]of Bn(G,S,v,v))T<S&&J(t.g,F,T,"Y2",E)}for(let I=Math.max(o.x+1,Math.round(C[0]-R/2-4));I<=Math.min(o.x+o.w-2,C[2]+R/2+4);I++)I&1||A(t.g,I,S,"Y0");C.forEach((I,v)=>{let Y=n>=.75||v<s||v===s&&r>=.96?1:0,G=n>.94?ft((1-n)/.06):1;Y&&G>0?(G<1&&or(t,v,k,I,P,!1,1),or(t,v,k,I,P,!0,G)):or(t,v,k,I,P,!1)})})}var En,xl,dc,sn,_n,ft,gt,nr,Q,pc,ze,yl,Pl,Gs,Ec,Fs,Ic,Cl,jt,pn,Wn,Dc,se,qe,Es,Tc,ks,Rl,Yc,ar,Ee,Is,ie,Ks,rr,vs,er,Bs,xc,In,_c,ur,Kn,re,wc,Uc,sr,Pc,Lt,Je,Cc,an,Xt,vn,_l,Hl,Jc,Rc,Sc,qc=Bt(()=>{nn();An();Uo();Oo();tr();uc();bc();En={noClip:!1,noWords:!1,noSun:!1,noFrame:!1,zone:-1,noScene:!1,noCentre:!1};xl=(t,n,e)=>{let o=r=>(r/=255)<=.04045?r/12.92:((r+.055)/1.055)**2.4,s=.2126*o(t)+.7152*o(n)+.0722*o(e);return s>.008856?116*Math.cbrt(s)-16:903.3*s},dc=new Map;sn=null;_n=8,ft=t=>Math.round(et(t)*4)/4,gt=t=>(t=et(t),t*t*(3-2*t)),nr={0:[{words:[0],at:[.5],wt:.5},{words:[1],at:[.5],wt:.5}],2:[{words:[0],at:[.5],wt:.5},{words:[1],at:[.5],wt:.5}],3:[{words:[0,1],at:[.27,.74],wt:.5},{words:[2],at:[.5],wt:.5}],6:[{words:[0],at:[.5],wt:.6},{words:[1],at:[.5],wt:.4}]},Q="BI",pc="Y0",ze=[6,6,6,6,6,6,8],yl=[[.24,.72],[.5],[.26,.75],[.19,.53,.83],[.22,.53,.83],[.31,.81],[.29,.79]],Pl=(t,n)=>[{bottom:[n?"DRAG TO MOVE":"KEYS OR MOUSE","AVOID THE NIGHTMARES"]},{bottom:["SKILLS FIRE ON THEIR OWN"]},{bottom:["COLLECT STAR SHARDS","HEARTS RESTORE LIFE"]},{bottom:["GATHER SHARDS","THE GAUGE FILLS","CHOOSE ONE CARD"]},{bottom:["TWO GROWN SKILLS","CORE","FUSION"]},{bottom:["DEFEATS FILL THE RING",n?"TAP THE RING":"CLICK / SPACE"],top:"AWAKENED: 5 S INVINCIBLE, EVERY SKILL AT FULL POWER"},{bottom:["DEFEAT THE GIANTS","THREE SHARDS OF MEMORY"]}][t],Gs=-1,Ec=7,Fs=ut.NIGHT5S,Ic=-1,Cl=11;jt=!1,pn=t=>jt?z(Fs,t,Ic)/Pt:z(tt,t,Gs),Wn=()=>jt?Cl/Pt:Ec,Dc=()=>jt?Fs.h/Pt:5,se=t=>t>0?(t-1)*Wn()+Dc():0;qe=(t,n,e)=>[n-pn(t)/2,e,n+pn(t)/2,e+Dc()];Es=14,Tc=[{caps:t=>[t?"DRAG TO MOVE":"KEYS OR MOUSE","AVOID THE NIGHTMARES"],wide:[[0,1]],wideW:[[.44,.56]],tall:[[0],[1]],tallW:[[1],[1]],tallH:[.44,.56],tallNat:[70,92],seq:!1},{caps:()=>["SKILLS FIRE ON THEIR OWN"],wide:[[0]],wideW:[[1]],tall:[[0]],tallW:[[1]],tallH:[1],tallNat:[168],seq:!1},{caps:()=>["COLLECT STAR SHARDS","HEARTS RESTORE LIFE"],wide:[[0,1]],wideW:[[.5,.5]],tall:[[0],[1]],tallW:[[1],[1]],tallH:[.5,.5],tallNat:[82,78],seq:!1},{gap:9,mark:Es,caps:()=>["GATHER SHARDS","THE GAUGE FILLS","CHOOSE ONE CARD"],wide:[[0,1,2]],wideW:[[.47,.23,.3]],tall:[[0],[1],[2]],tallW:[[1],[1],[1]],tallH:[.33,.31,.36],tallNat:[48,46,54],seq:!0},{caps:()=>["TWO GROWN SKILLS","CORE","FUSION"],wide:[[0,1,2]],wideW:[[.43,.22,.35]],tall:[[0,1],[2]],tallW:[[.66,.34],[1]],tallH:[.42,.58],tallNat:[62,86],seq:!0},{caps:t=>["DEFEATS FILL THE RING",t?"TAP THE RING":"CLICK / SPACE"],wide:[[0,1]],wideW:[[.62,.38]],tall:[[0],[1]],tallW:[[1],[1]],tallH:[.6,.4],tallNat:[96,58],seq:!1},{caps:()=>["DEFEAT THE GIANTS","THREE SHARDS OF MEMORY"],wide:[[0,1]],wideW:[[.56,.44]],tall:[[0],[1]],tallW:[[1],[1]],tallH:[.6,.4],tallNat:[92,64],seq:!1}],ks="AWAKENED: 5 S INVINCIBLE, EVERY SKILL AT FULL POWER",Rl=9,Yc=13;ar=new Map,Ee=32,Is=!1,ie=new Map,Ks=(t,n,e,o,s,r,a)=>[t,+r,+a,o,s,(n%12+12)%12,(e%12+12)%12].join(":"),rr=null;vs=!1;er=9;Bs=(t,n,e=0)=>{let o=n==="dreamer.fly"||n==="glitch.hover"?4:n==="bug.hover"?2:n==="spam.idle"?4:n==="error.creep"||n==="elite.idle"?6:1,s=Yn[n]?.fps??8;return(Math.floor(t.t*s+e)%o+o)%o};xc=new Map;In=(t,n,e,o,s)=>Ua(Math.atan2(o-n,e-t)*180/Math.PI,s);_c={glitch:"glitch.hover",bug:"bug.hover",spam:"spam.idle",error:"error.creep",elite:"elite.idle"};ur=t=>{let n=Yn[_c[t]];return{l:n.ox,r:n.w-n.ox,u:n.oy,d:n.h-n.oy}};Kn=[".#####.","#..#..#","#..#..#","#..#..#","#######","#.....#","#.....#","#.....#","#.....#","#.....#",".#...#.","..###.."],re=["..#####..",".#..#..#.","#..###..#","#..#.#..#","#..###..#","#########","#.......#","#.......#","#.......#","#.......#","#.......#","#.......#",".#.....#.","..#####.."],wc=[".###.","#.#.#","#.#.#","#####","#...#","#...#","#...#","#...#",".###."];Uc=[Ol,Ll,Kl,Bl,Xl,jl,Vl],sr=t=>(t%1+1)%1,Pc=new Map;Lt={l:30,r:14,u:10,d:9},Je={l:30,r:14,u:10,d:9},Cc=!1;an=(t,n,e)=>Math.max(n,Math.min(e,t)),Xt=t=>t.x+Math.round(t.w/2),vn=t=>t.y+Math.round(t.h/2);_l=4,Hl=(t,n)=>Math.round(t+Math.floor(n));Jc=t=>ft(Math.min((t-.6)/.04,(.94-t)/.04));Rc=new Map;Sc=new Map});function l0(t){let n=[];for(let e of t.match(/[\\x21-\\x7e]+|[^\\x21-\\x7e]+/g)||[])n.push({s:e,lat:/^[\\x21-\\x7e]/.test(e)});return n}function so(t){let n=l0(t);if(!n.some(o=>o.lat))return ee(t);let e=0;return n.forEach((o,s)=>{if(!o.lat)return void(e+=ee(o.s));e+=Ct(_s,o.s)+(s>0?br:0)+(s<n.length-1?br:0)}),e}function dr(t,n,e,o,s){let r=l0(n);if(!r.some(i=>i.lat))return je(t,n,e,o,s);let a=Math.round(e);r.forEach((i,u)=>{if(!i.lat){je(t,i.s,a,o,s),a+=ee(i.s);return}u>0&&(a+=br),dt(t,_s,i.s,a,Math.round(o)+1,s),a+=Ct(_s,i.s)+(u<r.length-1?br:0)})}function m0(t,n,e,o,s=!1){let r=e==="ph"||e==="tab"&&n>t,a=o.top??0,i=o.bottom??0,u=n-a-i;if(r){let k=Math.min(t-25,230),w=Math.max(8,Math.min(16,Math.round(8+(u-300)*.06))),g=Math.round(k*(k<200?2.05:1.55)),R=s&&o.touch?Math.max(Math.min(u-34,276),Math.min(u-26-2*w,g,bm(k))):Math.min(u-34,276),C=Math.round((t-(k+9))/2)+6,P=R+6+7+13,S=a+Math.max(4,Math.round((u-P)/2))+2;return{ph:r,pw:k,pH:R,xl:C,xr:C,y:S,btnY:S+R+4+7,cx:Math.floor(t/2)}}if(n<200){let k=Math.min(184,Math.floor((t-14)/2)),w=n-20,g=Math.round((t-(2*k+2))/2),R=Math.max(2,Math.round((n-(w+6+9+13))/2))+2;return{ph:r,pw:k,pH:w,xl:g,xr:g+k+2,y:R,btnY:R+w,cx:Math.floor(t/2)}}let l=8,m=6,h=5,f=4,b=l,d=Math.min(196,Math.floor((t-2*(b+3)-2)/2));for(;s&&b>4&&d<196&&!y0(d,!!o.touch,!1);)d=Math.min(196,Math.floor((t-2*(--b+3)-2)/2));let p=Math.min(236,n-(m+3)-(4+f+13+h)),M=Math.round((t-(2*d+2))/2),x=3+p+4+f+13,y=m+3+Math.max(0,Math.round((n-m-h-x)/2));return{ph:r,pw:d,pH:p,xl:M,xr:M+d+2,y,btnY:y+p+4+f,cx:Math.floor(t/2)}}function Mr(t,n,e,o,s=[]){rn(t,0,0,n,e,"A1");let r=(a,i)=>s.some(([u,c,l,m])=>a>=u&&a<=l&&i>=c&&i<=m);for(let a=0;a<e;a++)for(let i=0;i<n;i++){let u=o==="R"?i:n-1-i;u<5&&V(i,a,u<2?.5:.25)?A(t,i,a,"A0"):Qe(i,a)&&!Qe(i-1,a)&&!Qe(i,a-1)&&!Qe(i-1,a-1)&&!Qe(i+1,a-1)&&!r(i,a)&&A(t,i,a,"A0")}ct(t,o==="R"?n-1:0,0,e,"A0")}function xr(t,n,e,o,s=[],r=[]){let a=(h,f)=>s.some(([b,d])=>f>=e-10&&h>=b&&h<=d)||r.some(([b,d])=>f<=9&&h>=b&&h<=d),i=(h,f,b)=>{a(h,f)||A(t,h,f,b)};for(let h=3;h<n-3;h++)i(h,3,"Y1"),i(h,e-1-3,"Y1");for(let h=3;h<e-3;h++)i(3,h,"Y1"),i(n-1-3,h,"Y1");let l=3;for(let h=5+l;h<n-5-l;h++)h%2===0&&i(h,5,"Y1"),h%2===0&&i(h,e-1-5,"Y1");for(let h=5+l;h<e-5-l;h++)h%2===0&&i(5,h,"Y1"),h%2===0&&i(n-1-5,h,"Y1");for(let[h,f,b,d]of[[5,5,1,1],[n-1-5,5,-1,1],[5,e-1-5,1,-1],[n-1-5,e-1-5,-1,-1]]){for(let p=0;p<=l;p++)i(h+b*l,f+d*p,"Y1"),i(h+b*p,f+d*l,"Y1");i(h+b,f+d,"Y0")}for(let[h,f]of s)for(let b of[h-1,f+1])for(let d=e-6;d<=e-4;d++)A(t,b,d,"Y1");for(let[h,f]of r)for(let b of[h-1,f+1])for(let d=3;d<=5;d++)A(t,b,d,"Y1");let m=o==="R"?[[n-1-3,3,-1,1],[n-1-3,e-1-3,-1,-1]]:[[3,3,1,1],[3,e-1-3,1,-1]];for(let[h,f,b,d]of m)for(let p=0;p<5;p++){let M=(12+p*16.5)*Math.PI/180,x=p%2?7:11;for(let y=4;y<=x;y++){let k=Math.round(h+b*Math.cos(M)*y),w=Math.round(f+d*Math.sin(M)*y);(y%2===0||y>=x-1)&&i(k,w,y>=x-1?"Y2":"Y1")}}}function h0(t,n,e,o=22){for(let s=4;s<o;s++)A(t,n-s,e+2,"Y1"),A(t,n+s,e+2,"Y1"),s>6&&s<o-3&&s%2===0&&(A(t,n-s,e+4,"Y1"),A(t,n+s,e+4,"Y1"));for(let s of[-1,1])A(t,n+s*o,e+1,"Y1"),A(t,n+s*(o+1),e+2,"Y1"),A(t,n+s*o,e+3,"Y1");for(let[s,r]of[[0,0],[-1,1],[1,1],[-2,2],[2,2],[-1,3],[1,3],[0,4]])A(t,n+s,e+r,"Y1");A(t,n,e+2,"Y2")}function ql(t,n,e,o){for(let r=14;r<o;r++)A(t,n-r,e+2,"Y1"),A(t,n+r,e+2,"Y1"),r<o-4&&(A(t,n-r,e+4,"Y1"),A(t,n+r,e+4,"Y1"));for(let r of[-1,1]){let a=n+r*o;for(let[i,u]of[[0,1],[r,0],[2*r,1],[2*r,2],[r,3],[0,3]])A(t,a+i,e+u,"Y1")}let s=(r,a,i)=>{for(let u=-a;u<=a;u++){let c=a-Math.abs(u);if(i)for(let l=-c;l<=c;l++)A(t,r+l,e+3+u,Math.abs(l)+Math.abs(u)<a?"Y2":"Y1");else A(t,r-c,e+3+u,"Y1"),A(t,r+c,e+3+u,"Y1")}};s(n-9,2,!1),s(n+9,2,!1),s(n,4,!1),s(n,2,!0)}function zl(t,n,e,o,s,r,a,i,u,c,l=1,m=0){for(let h=0;h<a;h++){let f=i+(h+.5)/a*(u-i),b=h%2?r:s,d=te(Gn(n+Math.cos(f)*o,e+Math.sin(f)*o,n+Math.cos(f)*b,e+Math.sin(f)*b));d.forEach(([p,M],x)=>{(l>=1||V(p,M-m,l)||x>d.length-3)&&A(t,p,M,c)})}}function Zl(t,n,e,o,s,r){let a=z(n,e),i=cs(m=>dt(m,n,e,1,1,"#fff"),a+2,n.h+2),u=Math.round(o-a/2)-1,c=s-1,l=r%4/1.2*(a+n.h+8)-4;for(let m=0;m<i.h;m++)for(let h=0;h<i.w;h++){if(!kt(i,h,m))continue;let f="Y1";!kt(i,h-1,m)||!kt(i,h,m-1)?f="Y2":(!kt(i,h+1,m)||!kt(i,h,m+1))&&(f="Y0");let b=h+m-l;b>=0&&b<2&&(f="W0"),A(t,u+h,c+m,f)}}function eo(t,n,e,o,s,r){return it(t,tt,n,e,o,s,"center",r)}function f0(t,n,e,o,s){dr(t,n,Math.round(e-so(n)/2),o,rt(s))}function no(t,n,e,o,s,r="left",a=0){Jn(t,e,o,()=>it(t,Xs,n,0,0,s,r,a))}function js(t,n,e,o,s){if(Tt!==Pt)return f0(t,n,e,o,s);let r=Math.round(Pt*e-Ct(Hs,n)/2)/Pt;Jn(t,r,o,()=>void dt(t,Hs,n,0,0,rt(s)))}function Qc(t,n,e,o,s,r=!1,a,i=!1){let u=e/176,c=Math.floor(n/2),l=Math.round(112*u),m=0;if(i){let d=Math.round(149*u)+4-l,p=((r?Nt:(a??9)+4)+e-1-Nt)/2,M=Math.ceil(p+(66-d)/2-.5);m=Math.min(0,Math.max(M,Math.min(l,88))-l)}let h=d=>Math.round(d*u)+m;Mr(t,n,e,"L",Us(me[o],c,h(127)));let f=z(tt,"LIBER  SOMNII");xr(t,n,e,"L",[],r?[[c-Math.ceil(f/2)-4,c-Math.ceil(f/2)+f+3]]:[]),eo(t,"LIBER  SOMNII",c,r?2:a??9,"Y0",0);let b=h(112);zl(t,c,b,33,Math.min(66,b-22),Math.min(54,b-30),34,Math.PI,Math.PI*2,"Y1",.5,m),It(t,Zt(c-.5,b,31,31,Math.PI,Math.PI*2),"Y2");for(let d=Math.round(n*.2);d<Math.round(n*.8);d++)A(t,d,b,"Y1");Zl(t,bi,ro[o],c,b-4-32,s),js(t,me[o],c,h(127),"BR"),eo(t,Kt[o].name.toUpperCase(),c,h(139),"BI",2);for(let d=0;d<3;d++)ne(t,"chevron",c-7+(d-1)*18,h(149),"Y1")}function Ql(t,n,e,o){let s=e/176,r=p=>Math.round(p*s),a=Math.floor(n/2);Mr(t,n,e,"L",Us(zc,a,r(17))),xr(t,n,e,"L"),js(t,zc,a,r(17),"BR"),it(t,Rt,"How to play",a,r(32),"BI","center"),ql(t,a,r(52),Math.min(46,Math.floor(n*.3)));let i=r(115),u=n<180,c=u?31:34;It(t,xt(a,i,c),"Y1");for(let[p,M]of xt(a,i,c-2))(p+M)%2===0&&A(t,p,M,"Y1");for(let p=0;p<8;p++){let M=-Math.PI/2+p*Math.PI/4,x=p%2?u?18:20:u?27:30,y=p%2?3:4;for(let k=0;k<=x;k++){let w=Math.round(y*(1-k/x)*(k<6?k/6:1));for(let g=-w;g<=w;g++){let R=Math.round(a+Math.cos(M)*k-Math.sin(M)*g),C=Math.round(i+Math.sin(M)*k+Math.cos(M)*g);A(t,R,C,g<0?"Y2":"Y1")}}for(let k=2;k<=x;k++){let w=Math.round(y*(1-k/x)*(k<6?k/6:1));A(t,Math.round(a+Math.cos(M)*k-Math.sin(M)*(w+0)),Math.round(i+Math.sin(M)*k+Math.cos(M)*(w+0)),"Y0")}}It(t,xt(a,i,3),"Y0"),A(t,a,i,"Y2");let l=Math.min(56,Math.floor(n/2)-30),m=46,h=[],f=(p,M)=>{let x=0;for(let y=p;y<=M;y++){let k=y-i;Math.abs(k)<=c&&(x=Math.max(x,Math.sqrt(c*c-k*k)))}return x},b=(p,M)=>{let x=-Math.PI/2+p*2*Math.PI/Jt,y=Math.ceil(z(tt,Kt[p].name.toUpperCase(),-1)/2),k=et(Math.round(a+Math.cos(x)*l),9+y,n-9-y),w=Math.sin(x)>=0?1:-1,g=Math.round(i+Math.sin(x)*m),R=0;for(;R<24;R++){let C=f(g-7,g+5),P=Math.abs(Math.cos(x))>.2,S=k-y,E=k+y;if((C===0||(P?k<a?E<=a-C-4:S>=a+C+4:E<a-C-4||S>a+C+4))&&R>=M)break;g+=w}return{lx:k,ly:g,half:y,push:R}},d=Kt.map((p,M)=>b(M,0).push);for(let p=0;p<Jt;p++){let M=Kt[p].name.toUpperCase(),{lx:x,ly:y,half:k}=b(p,p===0?0:Math.max(d[p],d[Jt-p]));h.push({x0:x-k,x1:x+k,y0:y-7,y1:y+5,lx:x,ly:y}),it(t,tt,ro[p],x,y-7,"BR","center"),it(t,tt,M,x,y+1,"BI","center",-1)}for(let p=0;p<Jt;p++){let M=-Math.PI/2+p*2*Math.PI/Jt+Math.PI/Jt,x=Math.round(a+Math.cos(M)*(l-4)),y=Math.round(i+Math.sin(M)*(m-2));if(!h.some(k=>x>=k.x0-3&&x<=k.x1+3&&y>=k.y0-3&&y<=k.y1+3)&&!(Math.hypot(x-a,y-i)<c+4)){for(let[k,w]of[[0,-1],[-1,0],[1,0],[0,1]])A(t,x+k,y+w,"Y1");A(t,x,y,"Y2")}}}function rm(t,n){let e=t.h+n,o=t0.get(e);if(o!==void 0)return o;let s=t.glyphs[n]||t.glyphs["?"],r=99,a=-1;if(s)for(let i of s)for(let u=0;u<i.length;u++)i[u]==="#"&&(r=Math.min(r,u),a=Math.max(a,u));return o=a<0?null:[r,a],t0.set(e,o),o}function oo(t,n){let e=0,o=99,s=-1;for(let r of n){if(r===" "){e+=t.space+t.gap;continue}let a=t.glyphs[r]||t.glyphs["?"],i=rm(t,r);i&&(o=Math.min(o,e+i[0]),s=Math.max(s,e+i[1])),e+=(a?a[0].length:t.space)+t.gap}return[o,s]}function M0(t,n,e){let o=n.split(" "),s=o.length,r=(f,b)=>oo(t,o.slice(f,b).join(" "))[1],a=0;for(let f=0;f<s;){let b=f+1;for(;b<s&&r(f,b+1)<=e(a);)b++;a++,f=b}let i=null,u=1/0,c=[],l=(f,b,d)=>{if(!(d>=u)){if(b===a-1){if(r(f,s)>e(b))return;let M=s-f===1&&a>1?400:0,x=d+M;x<u&&(u=x,i=[...c]);return}for(let p=f+1;p<=s-(a-1-b);p++){let M=r(f,p);if(M>e(b))break;let x=e(b)-M,y=p-f===1?400:0;c.push(p),l(p,b+1,d+x*x*.05+y),c.pop()}}};if(l(0,0,0),!i){let f=[],b="";for(let d of o){let p=b?b+" "+d:d;b&&oo(t,p)[1]>e(f.length)?(f.push(b),b=d):b=p}return b&&f.push(b),f}let m=[],h=0;for(let f of[...i,s])m.push(o.slice(h,f).join(" ")),h=f;return m}function x0(t,n,e,o){let s=Kt[t],r=d0[o.face],a=s.en[e?0:1],i=s.jp[e?0:1],u=Nt+1+o.m,c=n-1-Nt-1-o.m,l=u+2,m=em(o),h=l+m+tm,f=y=>o.mode==="column"||y<2?h:l,b=M0(r.f,a.slice(1),y=>c-(f(y)-1)),d=o.mode==="column"?h:l,p=b0(i,c-d+1),M=(b.length-1)*o.lh+r.cap+o.ej,x=Math.max(m,M+(p.length-1)*o.jl+10);return{en:a,lines:b,enX:f,jl:p,jx:d,jTop:M,h:x,boxX:l,left:u,right:c,init:m,f:r.f}}function w0(t,n,e,o){let s=\`\${t}x\${n}:\${+e}:\${+o}\`,r=n0.get(s);if(r)return r;let a=sm(n,o),i=o?[a,"compact","none"]:[a,"none"],u=o?ao:6,c=[];for(let h of["big","small"])for(let f of i)for(let b of["column","drop"])for(let d of[13,12])if(h==="big")for(let p of o?[19,18]:[18,17])c.push({face:h,head:f,mode:b,lh:p,ej:o?14:p===17?12:13,jl:d,m:u});else c.push({face:h,head:f,mode:b,lh:15,ej:13,jl:d,m:u});let l=h=>Math.min(...Kt.map((f,b)=>g0(b,n,h.m)-p0(h)-mr-x0(b,t,e,h).h)),m=c.find(h=>l(h)>=nm)||c.reduce((h,f)=>l(f)>l(h)?f:h);return n0.set(s,m),m}function am(t,n,e,o,s){let r=w0(n,e,o,s),a=x0(t,n,o,r),i=p0(r),u=g0(t,e,r.m)-i-mr-a.h,c=s?Math.min(64,Math.round(n*.34)):56,l=u<20?0:Math.min(c,u),m=Math.max(0,u-l+(l?0:mr)),h=i+Math.round(m*(s?.3:.5)),f=h+(l?l+mr:0)+Math.round(m*(s?.32:0));return{S:r,W:a,P:l,plateTop:h,ey:f}}function im(t,n,e,o,s,r,a,i){Mr(t,n,e,"R");let u=Kt[o],c=Math.floor(n/2),l=o===Jt-1,{S:m,W:h,P:f,plateTop:b,ey:d}=am(o,n,e,r,i),p=z(tt,fr,-1),M=ro[o],x=z(zt,M),y=n-19,k=e-12,w=9,g=a?z(tt,"THE SEAL"):z(tt,"CONTINUE"),R=l?y-w-4-g-4:n-11-p-4,C=c+Math.ceil(x/2)+3+18+8<R,P=C?18:4,S=P+3+x+3+P,E=C?c-Math.floor(S/2):10,I=C||m.mode!=="drop",v=I?[[E-2,E+S+1],[R,n-9]]:[[R,n-9]],Y=z(tt,u.name.toUpperCase(),2),G=m.head==="none"&&(i||o===0),F=G?so(me[o])-1:0,T=Y+(G?F+6:0),D=c-Math.ceil(T/2),L=m.head==="none"?[[D-4,D+T+3]]:[];if(xr(t,n,e,"R",v,L),m.head==="none"&&(G&&dr(t,me[o],D,0,rt("BR")),it(t,tt,u.name.toUpperCase(),D+(G?F+6:0),2,"Y0","left",2)),m.head==="tall"&&eo(t,"LIBER  SOMNII",c,9,"Y0",0),m.head!=="none"&&(f0(t,me[o],c,m.head==="compact"?8:m.head==="short"?10:17,"BR"),it(t,Rt,u.name,c,m.head==="compact"?19:m.head==="short"?22:30,"BI","center"),m.head!=="compact"&&f&&h0(t,c,b-7)),f&&v0(t,7,b,n-14,f,o,s,r),I0(t,h.boxX,d,h.en[0],h.init),h.lines.forEach((K,N)=>dt(t,h.f,K,h.enX(N)-1,d+N*m.lh,rt("BI"))),h.jl.forEach((K,N)=>dr(t,K,h.jx,d+h.jTop+1+N*m.jl,rt("BI"))),I&&(at(t,E,e-6,P,"Y1"),at(t,E+S-P,e-6,P,"Y1"),it(t,zt,M,E+P+3,e-10,"BI")),l||it(t,tt,fr,n-11,e-7,"Y0","right",-1),!l)return null;Vs(t,y+1,k+1,w,"A0");for(let K=-w-1;K<=w+1;K++)for(let N=-w-1;N<=w+1;N++){let $=Math.hypot(N,K)+(pt(Math.round(Math.atan2(K,N)*6),3)-.5)*.9;if($>w+.3)continue;let j="BR";$>w-2.2&&N+K<-4&&(j="S4"),Math.abs(Math.hypot(N,K)-6)<.5&&V(y+N,k+K,.5)&&(j="BI"),A(t,y+N,k+K,j)}for(let[K,N]of[[0,-2],[0,-1],[-2,0],[-1,0],[0,0],[1,0],[2,0],[0,1],[0,2]])((K+N)%2===0||K===0||N===0)&&J(t,y+K,k+N,"S6",Math.abs(K)+Math.abs(N)===2?.5:1);let O=y-w-4;return a?(it(t,tt,"BREAK",O,k-7,"BI","right"),it(t,tt,"THE SEAL",O,k+1,"BI","right")):it(t,tt,"CONTINUE",O,k-3,"BI","right"),{id:"seal",x:y-w-2,y:k-w-2,w:w*2+5,h:w*2+5,label:a?"Break the seal":"Continue"}}function io(t,n,e,o,s=!1){let r=s?um:cm,a=Kt[t],i=a.en[e?0:1],u=a.jp[e?0:1],c=2*(Nt+1+o),l=2*(n-1-Nt-1-o)+1,m=c,h=r.LH+r.CAP,f=m+h+r.GAP,b=fm(pr,i.slice(1),l-(f-1)),d=l-f+1,p=Math.max(...b.map(g=>oo(pr,g)[1]))-1,M=Zc(u,d),x=Zc(u,Math.min(d,p+10)),y=x.length<=Math.max(2,M.length)?x:M,k=(b.length-1)*r.LH+r.EJ,w=k+(y.length-1)*r.JL+9;return{en:i,lines:b,jl:y,left:c,right:l,boxX:m,S:h,colX:f,jY:k,h:w,enEnd:k-1,fp:r}}function fm(t,n,e){let o=n.split(" "),s=o.length,r=(f,b)=>oo(t,o.slice(f,b).join(" "))[1],a=M0(t,n,()=>e),i=a.length;if(i<2||i>3)return a;let u=null,c=1/0,l=(f,b,d,p)=>{if(b===i-1){let M=r(f,s);if(M>e)return;let x=[...p,M],y=Math.max(...x)*2-Math.min(...x)+(s-f===1?400:0)+d.reduce((k,w,g)=>k+((g===0?w:w-d[g-1])===1?400:0)+hm(o[w-1],o[w]),0);y<c&&(c=y,u=[...d]);return}for(let M=f+1;M<=s-(i-1-b);M++){let x=r(f,M);if(x>e)break;l(M,b+1,[...d,M],[...p,x])}};if(l(0,0,[],[]),!u)return a;let m=[],h=0;for(let f of[...u,s])m.push(o.slice(h,f).join(" ")),h=f;return m}function P0(t,n,e){let o=e?ao:6;for(;o>6&&!y0(t,n,e,o);)o--;return o}function C0(t,n){let e=t-19,o=n-12,s=9,r=Math.max(le("THE SEAL"),le("BREAK"),le("CONTINUE"));return{x0:e-s-4-r,x1:e+s+1,y0:o-s-1,y1:n-2}}function gr(t,n,e,o){let s=\`\${t}x\${n}:\${+e}:\${+o}\`,r=o0.get(s);if(r)return r;let a=P0(t,e,o),i=Nt+1,u=n-10,c=u-i,l=Kt.map((W,H)=>io(H,t,e,a,o)),m=Math.max(...l.map(W=>W.jl.length)),h=Math.max(...l.map(W=>W.h))/2,f=Math.max(...l.map(W=>W.enEnd))/2,b=c>=220?"tall":c>=150?"short":c>=110?"compact":"none",d=o&&e&&b==="tall",p=W=>b==="tall"?[{k:"lib",h:5},{k:"jp",h:W},{k:"name",h:12},{k:"orn",h:5}]:b==="short"?[{k:"jp",h:W},{k:"name",h:12},{k:"orn",h:5}]:b==="compact"?[{k:"jp",h:W},{k:"name",h:12}]:[],M=d?[R0(n),3,3,2,4]:b==="tall"?[3,3,3,2,4]:b==="short"?[4,3,2,4]:b==="compact"?[2,2,3]:[0],x=b==="short"?e0-1:e0,y=C0(t,n),k=l[Jt-1],w=k.jl.map(W=>[k.colX/2,(k.colX+so(W))/2]),g=new Map,R=W=>{let H=g.get(W);return H!==void 0||(H=w.every(([Z,B],_)=>{let U=(W+k.jY+_*k.fp.JL-1)/2;return(W+k.jY+_*k.fp.JL+9)/2+4<=y.y0||U>=y.y1+4||B+4<=y.x0||Z>=y.x1+4}),g.set(W,H)),H},C=(W,H)=>{let Z=(W/c-H)*100;return Z*Z+(Math.abs(Z)>3?(Math.abs(Z)-3)*40:0)},P=Math.max(6,Math.min(14,Math.round(c*.05))),S=M[M.length-1],E=W=>{let H=Math.min(W,Math.max(0,P-S)),Z=W-H,B=M.map((_,U)=>_+Math.floor(Z*(U+1)/M.length)-Math.floor(Z*U/M.length));return B.length&&(B[B.length-1]+=H),B},I=W=>(W-P)*(W-P)*3,v=(W,H,Z)=>{let B=p(W),_=i+B.reduce((X,q)=>X+q.h,0)+M.reduce((X,q)=>X+q,0),U=null;for(let X=Math.max(_,i);X<=_+30;X++){let q=E(X-_),ot=b==="none"?P:q[q.length-1];for(let bt=0;bt<=c;bt++){if(bt>0&&bt<Math.max(24,H))continue;let St=X+bt;for(let lt=2*(St+(bt?x:0));lt/2+h+lm<=u;lt++){if(!R(lt))continue;let fe=lt/2+f-St,jn=u-(lt/2+f),be=lt/2-St,Un=u-(lt/2+h),xn=bt?C(X-i,lr.title)+C(bt-Z,lr.plate)+C(fe,lr.en)+C(jn,lr.jp)+I(ot)+I(be)+I(Un):1e6+Math.abs(lt/2-(St+u-h)/2);(!U||xn<U.c)&&(U={c:xn,pt:X,P:bt,bt:lt})}}}return{B:U||{c:0,pt:_,P:0,bt:2*_},parts:B,headMin:_}},Y=t-2*(Nt+1+a),G=()=>{let W=p(8),H=i+W.reduce((q,ot)=>q+ot.h,0)+M.reduce((q,ot)=>q+ot,0),Z=S0(c,P),B=H+Math.max(0,Z-S),_=Math.floor(2*(u-Z-h));for(;_>2*B&&!R(_);)_--;let U=Math.floor(_/2)-Z-B,X=U-k0(t);return X>0&&(U-=X,B+=Math.floor(X/3)),{B:{c:0,pt:B,P:U>=24?U:0,bt:_},parts:W,headMin:H}},F,T=v(10,0,0);if(o&&e)F=G();else{let W=0;if(T.B.P){let H=Kt.map((Z,B)=>Ls(Y,T.B.P,B,e,!1));for(W=T.B.P;W<T.B.P+24&&Kt.some((Z,B)=>Ls(Y,W,B,e,!0)<H[B]);)W++}F=v(8,W,W-T.B.P);for(let H=W-1;!F.B.P&&T.B.P&&H>=T.B.P;H--)F=v(8,H,H-T.B.P);!F.B.P&&T.B.P&&(F=v(8,0,0))}let{B:D,parts:L,headMin:O}=F,K=E(Math.max(0,D.pt-O)),N=i,$={};L.forEach((W,H)=>{N+=K[H],$[W.k]=N,N+=W.h});let j={m:a,head:b,libY:$.lib??null,jpY:$.jp??0,nameY:$.name??0,ornY:$.orn??null,plate:D.P?{x:Nt+1+a,y:D.pt,w:Y,h:D.P}:null,bt:D.bt,top:i,foot:u,nJP:m,plate0:T.B.P?{y:T.B.pt,h:T.B.P}:null};return o0.set(s,j),j}function bm(t){let n=r0.get(t);if(n)return n;let e=P0(t,!0,!0),o=Math.max(...Kt.map((a,i)=>io(i,t,!0,e,!0).h))/2,s=42,r=340;for(let a=0;a<4;a++){let i=r-10-(Nt+1),u=Math.max(6,Math.min(14,Math.round(i*.05))),c=S0(i,u),l=Nt+1+R0(r)+s+Math.max(0,c-4);r=Math.ceil(l+k0(t)+c+o+c)+1+10}return r0.set(t,r),r}function dm(t,n,e,o,s){let r=gr(n,e,o,s),a=io(t,n,o,r.m,s),i=r.foot-r.top,u=r.plate?r.plate.y:r.top,c=r.plate?r.plate.y+r.plate.h:r.top,l=(r.bt+a.enEnd)/2,m={title:u-r.top,plate:c-u,en:l-c,jp:r.foot-l},h=Object.fromEntries(Object.entries(m).map(([M,x])=>[M,Math.round(x/i*1e3)/10])),f=a.boxX-2,b=a.boxX+a.S+1;a.lines.forEach(M=>{let[x,y]=oo(pr,M);f=Math.min(f,a.colX-1+x),b=Math.max(b,a.colX-1+y)}),a.jl.forEach(M=>b=Math.max(b,a.colX+so(M)-("\\u3001\\u3002".includes(M[M.length-1])?6:3)));let d=r.bt-2,p=r.bt+a.h-1;return{G:r,W:a,inner:i,bands:m,pct:h,l:f,r:b,t:d,b:p,L:a.left,R:a.right,frameL:2*(Nt+1),frameR:2*(n-Nt-1)-1,footF:2*r.foot}}function Mm(t){let n=Math.floor(t/2),e=le(fr,-1),o=t-19,s=9,r=Math.max(le("THE SEAL"),le("CONTINUE")),a=f=>f<Jt-1?t-11-e-4:o-s-4-r-4,i=Math.max(...ro.map(f=>le(f,$s))),u=Math.min(...Kt.map((f,b)=>a(b))),c=Math.max(4,Math.min(18,u-n-Math.ceil(i/2)-3-8)),l=c>=8,m=l?c:4,h=m+3+i+3+m;return{wide:l,rl:m,gw:h,gx:l?n-Math.floor(h/2):10,fw:i,cutOf:a,turnW:e}}function xm(t,n,e,o,s,r,a,i){let u=Kt[o],c=Math.floor(n/2),l=o===Jt-1,m=gr(n,e,r,i),h=io(o,n,r,m.m,i),f=ro[o],b=Mm(n),d=n-19,p=e-12,M=9,x=b.cutOf(o),{rl:y,gw:k,gx:w}=b,g=(m.bt+h.h)/2+4<=e-7,R=dm(o,n,e,r,i),C=[[Math.floor(R.l/2)-2,Math.floor(R.t/2)-2,Math.ceil(R.r/2)+2,Math.ceil(R.b/2)+2]];if(m.head!=="none"&&C.push(...Us(me[o],c,m.jpY)),m.plate)for(let[v,Y,G,F]of Ac(m.plate.x,m.plate.y,m.plate.w,m.plate.h,o,r))C.push([Math.floor(v)-2,Math.floor(Y)-2,Math.ceil(G)+1,Math.ceil(F)+1]);l?C.push([C0(n,e).x0-2,p-8,d-M-2,p+6]):C.push([n-11-b.turnW-2,e-9,n-9,e-1]),g&&C.push([w+y,e-9,w+k-y,e-1]),Mr(t,n,e,"R",C);let P=g?x-(w+k+1)<20?[[w-2,n-9]]:[[w-2,w+k+1],[x,n-9]]:[[x,n-9]],S=z(tt,"LIBER  SOMNII"),E=m.libY==null&&m.head!=="none",I=E?[[c-Math.ceil(S/2)-4,c-Math.ceil(S/2)+S+3]]:[];if(xr(t,n,e,"R",P,I),m.libY!=null?eo(t,"LIBER  SOMNII",c,m.libY,"Y0",0):E&&eo(t,"LIBER  SOMNII",c,2,"Y0",0),m.head!=="none"&&(js(t,me[o],c,m.jpY,"BR"),it(t,Rt,u.name,c,m.nameY,"BI","center"),m.ornY!=null&&m.plate&&h0(t,c,m.ornY)),m.plate&&v0(t,m.plate.x,m.plate.y,m.plate.w,m.plate.h,o,s,r),Jn(t,0,0,()=>{I0(t,h.boxX,m.bt,h.en[0],h.S),h.lines.forEach((v,Y)=>dt(t,pr,v,h.colX-1,m.bt+Y*h.fp.LH,rt("BI"))),h.jl.forEach((v,Y)=>dr(t,v,h.colX,m.bt+h.jY+Y*h.fp.JL,rt(pm)))}),g){at(t,w,e-5,y,"Y1"),at(t,w+k-y,e-5,y,"Y1");let v=Pt*(w+y+3)+Math.floor((Pt*b.fw-z(Xs,f,$s))/2);no(t,f,v/Pt,s0(e),"Y0","left",$s)}return l||no(t,fr,n-11,s0(e),"Y0","right",-1),l?gm(t,d,p,M,a):null}function gm(t,n,e,o,s){Vs(t,n+1,e+1,o,"A0");for(let a=-o-1;a<=o+1;a++)for(let i=-o-1;i<=o+1;i++){let u=Math.hypot(i,a)+(pt(Math.round(Math.atan2(a,i)*6),3)-.5)*.9;if(u>o+.3)continue;let c="BR";u>o-2.2&&i+a<-4&&(c="S4"),Math.abs(Math.hypot(i,a)-6)<.5&&V(n+i,e+a,.5)&&(c="BI"),A(t,n+i,e+a,c)}for(let[a,i]of[[0,-2],[0,-1],[-2,0],[-1,0],[0,0],[1,0],[2,0],[0,1],[0,2]])((a+i)%2===0||a===0||i===0)&&J(t,n+a,e+i,"S6",Math.abs(a)+Math.abs(i)===2?.5:1);let r=n-o-4;return s?(no(t,"BREAK",r,e-5.5,"BI","right"),no(t,"THE SEAL",r,e+.5,"BI","right")):no(t,"CONTINUE",r,e-2.5,"BI","right"),{id:"seal",x:n-o-2,y:e-o-2,w:o*2+5,h:o*2+5,label:s?"Break the seal":"Continue"}}function Vs(t,n,e,o,s){for(let r=-o;r<=o;r++)for(let a=-o;a<=o;a++)Math.hypot(a,r)<=o+.3&&A(t,n+a,e+r,s)}function I0(t,n,e,o,s=25){for(let c=2;c<s-2;c++)A(t,n+c,e,"BR"),A(t,n+c,e+s-1,"BR"),A(t,n,e+c,"BR"),A(t,n+s-1,e+c,"BR");for(let c=3;c<s-3;c++)c%2&&(A(t,n+c,e+2,"BR"),A(t,n+c,e+s-3,"BR"),A(t,n+2,e+c,"BR"),A(t,n+s-3,e+c,"BR"));for(let[c,l]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let m=c<0?n:n+s-1,h=l<0?e:e+s-1;A(t,m-c,h,"BR"),A(t,m,h-l,"BR"),A(t,m-c,h-l,"BR"),A(t,m+c,h+l,"BR"),A(t,m+2*c,h+2*l,"BR"),A(t,m+2*c,h,"BR"),A(t,m,h+2*l,"BR")}let r=(s>=28?ym:E0)[o.toUpperCase()];if(!r){let c=z(Rt,o);it(t,Rt,o,n+Math.round((s-c)/2),e+Math.round((s-12)/2),"BR");return}let a=Math.max(...r.map(c=>c.length)),i=n+Math.round((s-a)/2),u=e+Math.round((s-r.length)/2);r.forEach((c,l)=>{for(let m=0;m<c.length;m++)c[m]==="#"&&A(t,i+m,u+l,"BR")})}function v0(t,n,e,o,s,r,a,i){Gc(t,n,e,o,s,r,a,i)}function Pm(t,n,e,o){for(let c=0;c<e;c++)for(let l=0;l<n;l++){let m="M1";pt(l,c,5)<.25&&V(l,c,.5)&&(m="M0"),(l===n-1||c===e-1)&&(m="M0"),l===0&&(m="M2"),A(t,l,c,m)}let s=(c,l)=>{let m=(h,f)=>{A(t,h+1,f+1,"M0"),A(t,h,f,"V2")};for(let h=c+l;h<n-c-l;h++)m(h,c),m(h,e-1-c);for(let h=c+l;h<e-c-l;h++)m(c,h),m(n-1-c,h);for(let[h,f,b,d]of[[c,c,1,1],[n-1-c,c,-1,1],[c,e-1-c,1,-1],[n-1-c,e-1-c,-1,-1]])for(let p=0;p<=l;p++)m(h+b*l,f+d*p),m(h+b*p,f+d*l)};s(8,4),s(11,0);let r=15;for(let c=r+26;c<e-r-26;c++)A(t,r,c,"M3"),A(t,n-1-r,c,"M3");for(let c of[r+26,e-r-27])at(t,r,c,4,"M3"),at(t,n-r-4,c,4,"M3"),ct(t,r+3,c+(c<e/2?-6:1),6,"M3"),ct(t,n-r-4,c+(c<e/2?-6:1),6,"M3");let a=Math.floor(n/2),i=e/176;for(let[c,l]of[["RULE",26],["BOOK",42]]){let m=z(Rt,c,2);Cm(t,c,a-Math.round(m/2),Math.round(l*i),2)}let u=Math.round(e*.56);for(let c=0;c<36;c++){let l=c/36*Math.PI*2+Math.PI/36,m=c%2?30:40;te(Gn(a+Math.cos(l)*14,u+Math.sin(l)*14,a+Math.cos(l)*m,u+Math.sin(l)*m)).forEach(([h,f],b)=>{(V(h,f,.5)||b%3===0)&&A(t,h,f,c%2?"M3":"V2")})}Vs(t,a,u,10,"M0"),It(t,xt(a,u,9),"K7"),It(t,xt(a,u,11),"M2"),km(t,a-5,u-6,o);for(let[c,l,m]of[[n-9,0,1],[n-9,e-9,-1]])for(let h=0;h<9;h++)for(let f=0;f<9;f++){let b=8-f,d=m>0?h:8-h;if(b+d>9)continue;let p=b+d>7?"Y0":(b+d)%3===0?"Y2":"Y1";(b===0||d===0)&&(p="Y2"),A(t,c+f,l+h,p)}for(let c of[-.22,.22]){let l=Math.round(e/2+c*e)-6;rn(t,n-4,l,4,12,"M0"),rn(t,n-3,l+1,3,10,"V2"),ct(t,n-3,l+1,10,"K8"),at(t,n-5,l,1,"M0")}}function Cm(t,n,e,o,s){let r=e;for(let a of n)No(t,Rt,a,r,o,rt("K9"),rt("K8"),rt("V2"),rt("M0"),.5),r+=z(Rt,a)+Rt.gap+s}function km(t,n,e,o){let s=[".....wl....","...wwwll...","..wwwwllli.",".pwwwwlllic","pwwwwllllic","pwwwlllliic","pwwwllliiic",".lllllliiic",".lllllliii.","..lllliiik.","...lliiik..",".....iik...","......k...."],r={w:"W0",l:"W1",i:"IC0",k:"K8",p:"P4",c:"C1"};s.forEach((i,u)=>{for(let c=0;c<i.length;c++)i[c]!=="."&&A(t,n+c,e+u,r[i[c]])});let a=Math.floor(o*8%28);a<6&&(A(t,n+4,e+3,"W0"),a>1&&a<5&&(A(t,n+3,e+3,"W0"),A(t,n+5,e+3,"W0"),A(t,n+4,e+2,"W0"),A(t,n+4,e+4,"W0")))}function Dt(t,n,e,o,s,r,a){let i=document.createElement("canvas");i.width=e*Tt,i.height=o*Tt;let u=i.getContext("2d");u.imageSmoothingEnabled=!1,Tt!==1&&u.setTransform(Tt,0,0,Tt,0,0);let c=null;if(t==="cover")Pm(u,e,o,s);else if(t==="title")Ql(u,e,o,s);else if(t==="num"){let l=!a;if(Tt===1)Qc(u,e,o,n,s,w0(e,o,!!r.touch,a).head==="none",void 0,l);else{let m=gr(e,o,!!r.touch,a);Qc(u,e,o,n,s,m.libY==null&&m.head!=="none",m.libY??(m.head==="none"?9:m.jpY+1),l)}}else c=Tt===1?im(u,e,o,n,s,!!r.touch,!!r.first,a):xm(u,e,o,n,s,!!r.touch,!!r.first,a);return{c:i,seal:c}}function ue(t,n,e,o,s,r){if(s<=0)return;let a=n.width/Tt,i=n.height/Tt,u=r==="L"?e:e+a-s;for(let c=0;c<s;){let l=Math.min(a-1,Math.floor((c+.5)*a/s)),m=1;for(;c+m<s&&Math.min(a-1,Math.floor((c+m+.5)*a/s))===l+m;)m++;t.drawImage(n,l*Tt,0,m*Tt,i*Tt,u+c,o,m,i),c+=m}ct(t,r==="L"?u+s-1:u,o,i,"A0")}function wr(t,n,e,o,s,r){let a=Gr(t);if(a)return Rm(t,a,n,e,o,s,r);if(r.exit!=null)return De(t,r.exit,g=>wr(g,n,e,o,s,{...r,exit:null}));At(r.pal),Hn(t,n,e,"night",s,ht(s,0,.35));let i=m0(n,e,o,r),{pw:u,pH:c,y:l}=i,m=[],h=ht(s,0,.45),f=null;Gt(t,h,g=>{i.ph?f=T0(g,i,s,r):f=D0(g,i,s,r,n)}),f&&m.push(f);let b=r.spread===0&&r.open==null;m.push(i.ph||b?{id:"page",x:b&&!i.ph?Math.round((n-u)/2):i.xr,y:l,w:u,h:c,label:"Turn the page"}:{id:"page",x:i.xr,y:l,w:u,h:c,label:"Turn the page"});let d=r.first?"START":"CLOSE",p=r.touch?null:"ESC",M=uo(d,p),x=Math.round(i.cx-M/2),y=ht(s,.25,.45);m.push({...co(t,x,i.btnY,M,d,"night",p,r.hover==="close",y),id:"close"});let k=r.spread>0,w=r.spread<Jt;return m.push({...ve(t,x-8-13,i.btnY,"\\u2039",r.hover==="prev","night",k?y:y*.5),id:"prev"}),m.push({...ve(t,x+M+8,i.btnY,"\\u203A",r.hover==="next","night",w?y:y*.5),id:"next"}),At(),m}function Rm(t,n,e,o,s,r,a){At(a.pal);let i=a.exit!=null?1-ht(a.exit,0,.3):1,u=m0(e,o,s,a,!0),{pw:c,pH:l,y:m}=u,h=[],f=null,b=gr(c,l,!!a.touch,u.ph).plate;b&&Ns(b.x,b.y,b.w,b.h,!!a.touch),Fr(t,n),Tt=Pt;try{ko(n,Math.min(ht(r,0,.45),i),x=>{f=u.ph?T0(x,u,r,a):D0(x,u,r,a,e)})}finally{Tt=1}i<1?Gt(t,i,x=>Hn(x,e,o,"night",r,ht(r,0,.35))):Hn(t,e,o,"night",r,ht(r,0,.35));let d=x=>{let y=a.first?"START":"CLOSE",k=a.touch?null:"ESC",w=uo(y,k),g=Math.round(u.cx-w/2),R=ht(r,.25,.45),C={...co(x,g,u.btnY,w,y,"night",k,a.hover==="close",R),id:"close"},P=a.spread>0,S=a.spread<Jt,E={...ve(x,g-8-13,u.btnY,"\\u2039",a.hover==="prev","night",P?R:R*.5),id:"prev"},I={...ve(x,g+w+8,u.btnY,"\\u203A",a.hover==="next","night",S?R:R*.5),id:"next"};return[C,E,I]};if(i<1)return ko(n,i,x=>void d(x)),At(),[];let p=d(n);f&&h.push(f);let M=a.spread===0&&a.open==null;return h.push({id:"page",x:u.ph?u.xr:M?Math.round((e-c)/2):u.xr,y:m,w:c,h:l,label:"Turn the page"}),h.push(...p),At(),h}function hr(t,n,e,o,s){for(let r=n-3;r<n+o+3;r++)J(t,r,e-3,"V2",.5),J(t,r,e+s+4,"V2",.5);for(let r=e-2;r<e+s+4;r++)J(t,n-3,r,"V2",.5),J(t,n+o+2,r,"V2",.5);rn(t,n-2,e-2,o+4,s+6,"M1"),at(t,n-2,e-2,o+4,"M2"),at(t,n,e+s,o,"A1"),at(t,n,e+s+1,o,"V2")}function D0(t,n,e,o,s){let{pw:r,pH:a,y:i}=n,{xl:u,xr:c}=n;if(o.spread===0||o.open!=null){let b=o.open??0,d=Math.round((1-kn(et(b*1.6)))*Math.floor(r/2+1));u-=d,c-=d;let p=Math.min(7,Math.floor(b*8)),M=Dt("cover",0,r,a,e,o,!1).c;if(p<4){let y=Math.round(r*c0[p]);return hr(t,c,i,r+(p>0,0),a),p>0&&cn(t,Dt("law",0,r,a,e,o,!1).c,c,i),ue(t,M,c,i,y,"L"),null}hr(t,u,i,r*2+2,a),cn(t,Dt("law",0,r,a,e,o,!1).c,c,i);let x=Dt("title",0,r,a,e,o,!1).c;return ue(t,x,u,i,Math.round(r*c0[7-p]),"R"),u0(t,u+r,i,a),null}hr(t,u,i,r*2+2,a);let l=o.spread,m=a0(l),h=i0(l),f=null;if(o.turn&&o.turn.to!==l){let b=o.turn.to>l,d=Math.min(7,Math.floor(o.turn.p*8)),p=a0(o.turn.to),M=i0(o.turn.to);if(b){cn(t,Dt(m.kind,m.i,r,a,e,o,!1).c,u,i);let x=Dt(M.kind,M.i,r,a,e,o,!1);if(cn(t,x.c,c,i),d<4){let y=Math.round(r*to[d]);for(let k=i;k<i+a;k++)for(let w=c+y;w<Math.min(c+r,c+y+4+d*3);w++)J(t,w,k,"BI",.25);ue(t,Dt(h.kind,h.i,r,a,e,o,!1).c,c,i,y,"L")}else{let y=Math.round(r*to[7-d]);ue(t,Dt(p.kind,p.i,r,a,e,o,!1).c,u,i,y,"R")}}else if(cn(t,Dt(h.kind,h.i,r,a,e,o,!1).c,c,i),cn(t,Dt(p.kind,p.i,r,a,e,o,!1).c,u,i),d<4){let x=Math.round(r*to[d]);for(let y=i;y<i+a;y++)for(let k=Math.max(u,u+r-x-4-d*3);k<u+r-x;k++)J(t,k,y,"BI",.25);ue(t,Dt(m.kind,m.i,r,a,e,o,!1).c,u,i,x,"R")}else{let x=Math.round(r*to[7-d]);ue(t,Dt(M.kind,M.i,r,a,e,o,!1).c,c,i,x,"L")}}else{cn(t,Dt(m.kind,m.i,r,a,e,o,!1).c,u,i);let b=Dt(h.kind,h.i,r,a,e,o,!1);cn(t,b.c,c,i),b.seal&&(f={...b.seal,x:b.seal.x+c,y:b.seal.y+i})}return u0(t,u+r,i,a),f}function u0(t,n,e,o){for(let s=e;s<e+o;s++)for(let r=n;r<n+2;r++)A(t,r,s,"A0"),J(t,r,s,"BI",.25)}function T0(t,n,e,o){let{pw:s,pH:r,y:a,xr:i}=n;hr(t,i-3,a,s+3,r);for(let l=a;l<a+r;l++)for(let m=i-3;m<i;m++)A(t,m,l,"A1"),J(t,m,l,"A0",m===i-1?1:.5);if(o.spread===0&&o.open==null)return cn(t,Dt("cover",0,s,r,e,o,!0).c,i,a),null;let u=Math.max(1,o.spread);if(o.turn&&o.turn.to!==u){let l=Math.min(4,Math.floor(o.turn.p*5)),m=o.turn.to>u,h=m?u:o.turn.to,f=m?o.turn.to:u;cn(t,Dt("law",f-1,s,r,e,o,!0).c,i,a);let b=Math.round(s*to[m?l:4-l]);for(let d=a;d<a+r;d++)for(let p=i+b;p<Math.min(i+s,i+b+5);p++)J(t,p,d,"BI",.25);return ue(t,Dt("law",h-1,s,r,e,o,!0).c,i,a,b,"L"),null}let c=Dt("law",u-1,s,r,e,o,!0);return cn(t,c.c,i,a),c.seal?{...c.seal,x:c.seal.x+i,y:c.seal.y+a}:null}var wt,Jl,Mn,Kt,me,ro,fr,zc,Jt,_s,br,Qe,Hs,Xs,le,Us,b0,Zc,d0,tm,ao,Nt,mr,nm,em,om,p0,t0,g0,sm,n0,cm,um,pr,e0,lm,lr,mm,hm,y0,o0,k0,R0,S0,r0,pm,$s,s0,E0,wm,ym,Tt,cn,a0,i0,c0,to,Y0=Bt(()=>{An();nn();ls();Uo();Js();qc();wt=Jo,Jl=qo,Mn=t=>[...t].join(Jl),Kt=[{key:"move",name:"Move",jp:[\`\\u30C9\\u30E9\\u30C3\\u30B0\\u3067\\u79FB\\u52D5\\u3002\\u60AA\\u5922\\u306B\\u89E6\\u308C\\u308B\\u3068\${wt}\\u4F53\\u529B\\u304C\\u6E1B\\u308A\\u3001\\u5C3D\\u304D\\u308B\\u3068\\u76EE\\u899A\\u3081\\u307E\\u3059\\u3002\`,\`WASD\\u304B\\u30DE\\u30A6\\u30B9\\u3067\\u79FB\\u52D5\\u3002\\u60AA\\u5922\\u306B\\u89E6\\u308C\\u308B\\u3068\${wt}\\u4F53\\u529B\\u304C\\u6E1B\\u308A\\u3001\\u5C3D\\u304D\\u308B\\u3068\\u76EE\\u899A\\u3081\\u307E\\u3059\\u3002\`],en:["Drag to move. Nightmares cost you life; at zero, you wake.","Use WASD or the mouse. Nightmares cost life; at zero, you wake."]},{key:"attack",name:"Attack",jp:[\`\\u81EA\\u52D5\\u3067\\u767A\\u52D5\\u3059\\u308B\${wt}\\u30B9\\u30AD\\u30EB\\u304C\\u3001\\u8FD1\\u304F\\u306E\\u60AA\\u5922\\u3092\\u72D9\\u3044\\u307E\\u3059\\u3002\`,\`\\u81EA\\u52D5\\u3067\\u767A\\u52D5\\u3059\\u308B\${wt}\\u30B9\\u30AD\\u30EB\\u304C\\u3001\\u8FD1\\u304F\\u306E\\u60AA\\u5922\\u3092\\u72D9\\u3044\\u307E\\u3059\\u3002\`],en:["Your skills fire on their own at the nearest nightmares.","Your skills fire on their own at the nearest nightmares."]},{key:"collect",name:"Gather",jp:[\`\\u5012\\u3057\\u305F\\u60AA\\u5922\\u306F\${wt}\${Mn("\\u661F\\u306E\\u304B\\u3051\\u3089")}\\u3092\\u843D\\u3068\\u3057\\u307E\\u3059\\u3002\\u30CF\\u30FC\\u30C8\\u3092\\u62FE\\u3046\\u3068\\u3001\\u4F53\\u529B\\u304C\\u56DE\\u5FA9\\u3057\\u307E\\u3059\\u3002\`,\`\\u5012\\u3057\\u305F\\u60AA\\u5922\\u306F\${wt}\${Mn("\\u661F\\u306E\\u304B\\u3051\\u3089")}\\u3092\\u843D\\u3068\\u3057\\u307E\\u3059\\u3002\\u30CF\\u30FC\\u30C8\\u3092\\u62FE\\u3046\\u3068\\u3001\\u4F53\\u529B\\u304C\\u56DE\\u5FA9\\u3057\\u307E\\u3059\\u3002\`],en:["Fallen nightmares drop star shards. Hearts restore life.","Fallen nightmares drop star shards. Hearts restore life."]},{key:"level",name:"Grow",jp:[\`\\u30B2\\u30FC\\u30B8\\u304C\\u6E80\\u3061\\u308B\\u3068\${wt}\\u30EC\\u30D9\\u30EB\\u30A2\\u30C3\\u30D7\\u3002
\\u30B9\\u30AD\\u30EB\\u30AB\\u30FC\\u30C9\\u3092\${wt}1\\u679A\\u9078\\u3073\\u307E\\u3059\\u3002\`,\`\\u30B2\\u30FC\\u30B8\\u304C\\u6E80\\u3061\\u308B\\u3068\${wt}\\u30EC\\u30D9\\u30EB\\u30A2\\u30C3\\u30D7\\u3002
\\u30B9\\u30AD\\u30EB\\u30AB\\u30FC\\u30C9\\u3092\${wt}1\\u679A\\u9078\\u3073\\u307E\\u3059\\u3002\`],en:["Shards fill the gauge; at each level, choose one skill card.","Shards fill the gauge; at each level, choose one skill card."]},{key:"fuse",name:"Fuse",jp:[\`\\u5F37\\u3044\\u60AA\\u5922\\u3092\\u5012\\u3059\\u3068\${wt}\\u30B3\\u30A2\\u304C\${Mn("\\u624B\\u306B\\u5165\\u308A")}\\u3001\\u80B2\\u3066\\u305F\${Mn("\\u30B9\\u30AD\\u30EB2\\u3064")}\\u3092\${wt}\\u5408\\u4F53\\u3067\\u304D\\u307E\\u3059\\u3002\`,\`\\u5F37\\u3044\\u60AA\\u5922\\u3092\\u5012\\u3059\\u3068\${wt}\\u30B3\\u30A2\\u304C\${Mn("\\u624B\\u306B\\u5165\\u308A")}\\u3001\\u80B2\\u3066\\u305F\${Mn("\\u30B9\\u30AD\\u30EB2\\u3064")}\\u3092\${wt}\\u5408\\u4F53\\u3067\\u304D\\u307E\\u3059\\u3002\`],en:["Strong nightmares drop a core to fuse two grown skills.","Strong nightmares drop a core to fuse two grown skills."]},{key:"overdrive",name:"Overdrive",jp:[\`\\u60AA\\u5922\\u3092\\u5012\\u3059\\u3068\${wt}\${Mn("\\u5149\\u306E\\u8F2A")}\\u304C\\u305F\\u307E\\u308A\\u3001\\u305F\\u307E\\u3063\\u305F\\u3089\${wt}\\u8F2A\\u3092\\u30BF\\u30C3\\u30D7\\u3057\\u3066\\u899A\\u9192\\u3002\`,\`\\u60AA\\u5922\\u3092\\u5012\\u3059\\u3068\${wt}\${Mn("\\u5149\\u306E\\u8F2A")}\\u304C\\u305F\\u307E\\u308A\\u3001\\u305F\\u307E\\u3063\\u305F\\u3089\${wt}\\u30AF\\u30EA\\u30C3\\u30AF\\u304BSpace\\u3067\\u899A\\u9192\\u3002\`],en:["Defeats fill the ring of light; when full, tap it to awaken.","Defeats fill the ring of light. Full, click or Space to awaken."]},{key:"reclaim",name:"Reclaim",jp:[\`\\u5DE8\\u5927\\u306A\\u60AA\\u5922\\u3092\\u5012\\u3057\${wt}\${Mn("\\u8A18\\u61B6\\u306E\\u304B\\u3051\\u3089")}\\u30923\\u3064\${wt}\\u96C6\\u3081\\u308B\\u3068\\u591C\\u660E\\u3051\\u3002\`,\`\\u5DE8\\u5927\\u306A\\u60AA\\u5922\\u3092\\u5012\\u3057\${wt}\${Mn("\\u8A18\\u61B6\\u306E\\u304B\\u3051\\u3089")}\\u30923\\u3064\${wt}\\u96C6\\u3081\\u308B\\u3068\\u591C\\u660E\\u3051\\u3002\`],en:["Defeat the giants; three shards of memory end the night.","Defeat the giants; three shards of memory end the night."]}],me=["\\u7B2C\\u4E00\\u306E\\u639F","\\u7B2C\\u4E8C\\u306E\\u639F","\\u7B2C\\u4E09\\u306E\\u639F","\\u7B2C\\u56DB\\u306E\\u639F","\\u7B2C\\u4E94\\u306E\\u639F","\\u7B2C\\u516D\\u306E\\u639F","\\u7B2C\\u4E03\\u306E\\u639F"],ro=["I","II","III","IV","V","VI","VII"],fr="TURN THE PAGE \\u2192",zc="\\u5922\\u306E\\u66F8 \\u2014 \\u4E03\\u3064\\u306E\\u639F",Jt=Kt.length,_s=ut.NIGHT7,br=2;Qe=(t,n)=>pt(t,n,77)<.012;Hs=ut.JP16,Xs=ut.NIGHT5S,le=(t,n=0)=>Math.ceil(z(Xs,t,n)/Pt);Us=(t,n,e)=>{if(Tt!==Pt)return[];let o=Ct(Hs,t)/Pt;return[[Math.floor(n-o/2)-2,e-2,Math.ceil(n+o/2)+2,e+8+1]]},b0=(t,n)=>zo(t,n,so),Zc=b0;d0={big:{f:ut.NIGHT12I,cap:12},small:{f:ut.NIGHT10I,cap:10}},tm=5,ao=8,Nt=5,mr=9,nm=28,em=t=>t.lh+d0[t.face].cap,om={tall:51,short:42,compact:36,none:Nt+1+ao},p0=t=>t.head==="none"?Nt+1+t.m:om[t.head],t0=new Map;g0=(t,n,e=ao)=>t===Jt-1?n-26:n-Nt-1-e,sm=(t,n)=>n?"tall":t<160?"compact":t<180?"short":"tall",n0=new Map;cm={LH:19,CAP:12,GAP:6,EJ:28,JL:17},um={LH:17,CAP:12,GAP:6,EJ:25,JL:15},pr=ut.NIGHT12I,e0=7,lm=6,lr={title:.2,plate:.5,en:.2,jp:.1};mm=new Set(["a","an","the","of","to","at","on","in","by","for","or","and","its","your","their","each","every","one","two","three","with","from","into","as","star"]),hm=(t,n)=>{let e=0;return/[.!?]$/.test(t)?e-=200:/[;:]$/.test(t)?e-=150:/,$/.test(t)&&(e-=60),mm.has(t.toLowerCase())&&(e+=220),n.toLowerCase()==="of"&&(e+=120),n.toLowerCase()==="you"&&(e+=100),e};y0=(t,n,e,o=e?ao:6)=>Kt.every((s,r)=>io(r,t,n,o,e).lines.length<=2);o0=new Map;k0=t=>t>=200?210:215,R0=t=>t>=320?10:7,S0=(t,n=14)=>Math.min(n,Math.max(6,Math.min(10,Math.round(t*.03)))),r0=new Map;pm="Y0",$s=2,s0=t=>t-6.5;E0={D:["#########.....",".###....###...",".###.....###..",".###......###.",".###......###.",".###.......###",".###.......###",".###.......###",".###.......###",".###.......###",".###......###.",".###......###.",".###.....###..",".###....###...","#########....."],U:["#####....###",".###......#.",".###......#.",".###......#.",".###......#.",".###......#.",".###......#.",".###......#.",".###......#.",".###......#.",".###......#.",".###.....#..","..###....#..","...###..#...","....####...."],Y:["#####...###",".###.....#.",".###.....#.","..###...#..","..###...#..","...###.#...","...###.#...","....####...","....###....","....###....","....###....","....###....","....###....","....###....","..#######.."],F:["###########",".###.....##",".###......#",".###......#",".###.......",".###...#...",".###...#...",".#######...",".###...#...",".###...#...",".###.......",".###.......",".###.......",".###.......","#####......"],S:["..#####..#",".##....###","##......##","##.......#","###.......",".#####....","..######..","....######",".......###","........##","#.......##","#.......##","##......##","###....##.","#.#####..."]},wm={D:[[3,6,8],[6,7]],U:[[3,6,9],[6]],Y:[[1,4,10],[]],F:[[3,10,12],[5]],S:[[2,4,10],[5]]},ym=Object.fromEntries(Object.entries(E0).map(([t,n])=>{let[e,o]=wm[t]||[[],[]],s=[];return n.forEach((r,a)=>{s.push(r),e.includes(a)&&s.push(r)}),[t,s.map(r=>r.split("").map((a,i)=>o.includes(i)?a+a:a).join(""))]}));Tt=1;cn=(t,n,e,o)=>t.drawImage(n,e,o,n.width/Tt,n.height/Tt),a0=t=>t<=1?{kind:"title",i:0}:{kind:"num",i:t-1},i0=t=>({kind:"law",i:Math.max(0,t-1)});c0=[1,.75,.5,.25,.011],to=[1,.65,.33,.065,.011]});function De(t,n,e){return Gt(t,1-ht(n,0,.3),e),[]}function Rr(t,n,e,o){let s=e==="ph"||e==="tab"&&n>t,r=o.top??0,a=o.bottom??0;return{ph:s,top:r,bottom:a,m:s?6:8,cx:Math.floor(t/2),avail:n-r-a}}function $0(t,n,e){let o=n-t.cx,s=e-t.cy,r=t.p||2,a=r===2?Math.hypot(o/t.A,s/t.B):Math.pow(Math.pow(Math.abs(o/t.A),r)+Math.pow(Math.abs(s/t.B),r),1/r);if(a<=1)return 1;let i=Math.hypot(o,s)*(1-1/a);return i<10?.75:i<13?.5:i<26?.25:0}function Sm(t,n){let e=n>t;return{cx:t/2,cy:n*(e?.43:.47),A:t*(e?.58:.55),B:n*(e?.3:.5)}}function Hn(t,n,e,o,s,r=1,a){if(r<=0)return;let i=n/2,u=e/2;if(o==="night"){t.fillStyle=rt("K0");for(let c=0;c<e;c++)for(let l=0;l<n;l++){let m=Math.min(1,Math.hypot((l-i)/(n*.62),(c-u)/(e*.62)));V(l,c,(.5-.25*m)*r)&&t.fillRect(l,c,1,1)}F0(t,n,e,s,"K7",.0015*r)}else if(o==="nightmare"){t.fillStyle=rt("S1");for(let c=0;c<e;c++)for(let l=0;l<n;l++)V(l,c,.5*r)&&t.fillRect(l,c,1,1);for(let c=0;c<e;c++)for(let l=0;l<n;l++){let m=Math.max(0,16-Math.min(l,n-1-l)),h=Math.max(0,16-Math.min(c,e-1-c)),f=16-Math.hypot(m,h);f<4?J(t,l,c,"S2",(f<2?.5:.25)*r):f<12&&V(l+1,c,(f<8?.25:.125)*r)&&A(t,l,c,"S3")}F0(t,n,e,s,"P4",8e-4*r)}else{let c=a||Sm(n,e);t.fillStyle=rt("K9");for(let l=0;l<e;l++)for(let m=0;m<n;m++)V(m,l,$0(c,m,l)*r)&&t.fillRect(m,l,1,1)}}function F0(t,n,e,o,s,r){let a=Math.floor(o*60/4);t.fillStyle=rt(s);let i=Math.round(n*e*r);for(let u=0;u<i;u++)t.fillRect(Math.floor(pt(u,a,7)*n),Math.floor(pt(u,a,13)*e),1,1)}function Em(t,n,e,o,s,r,a){let[i,u]=un[r].arch,c=o/2,l=Zt(n-.5,e+s,c,s,Math.PI,Math.PI*2);for(let[m,h]of l){let f=Math.abs(m+.5-n),b=c-f,d=b>=16?1:b>=11?.75:b>=6?.5:.25;d*=a,V(m,h,d)&&A(t,m,h,f<o*.2?i:u)}}function Zs(t,n){let e=t.toUpperCase();return z(tt,e,1)<=n?[e]:e.includes(" \\u2014 ")?e.split(" \\u2014 ").map((o,s)=>s===0?o+" \\u2014":o):Ho(tt,e,n,1)}function Im(t,n,e,o,s,r){let a=Zs(n,r);return a.forEach((i,u)=>it(t,tt,i,e,o+u*8,s,"center",1)),a.length}function X0(t,n,e,o,s,r,a,i,u,c=!1){let l=u?90:120,m=u?6:7;Gt(t,ht(i,0,.6),M=>Em(M,e,o,l,m,s,1));let h=1,f=Zs(r,n-16),b=mo[s];f.forEach((M,x)=>{let y=z(tt,M,1);b&&Xe(t,Math.round(e-y/2)-3,o+(c?10:12)+x*8-3,y+6,11,b),Qn(t,Math.round(e-y/2)-3,o+(c?10:12)+x*8-3,y+6,11)});{let M=z(Rt,a);b&&Xe(t,Math.round(e-M/2)-3,o+(c?19:23)+(f.length-1)*8-3,M+7,21,b),Qn(t,Math.round(e-M/2),o+(c?19:23)+(f.length-1)*8,M+1,16)}Gt(t,ht(i,.06,.6),M=>h=Im(M,r,e,o+(c?10:12),un[s].kick,n-16),[0,o+8,n,20]);let d=o+(c?19:23)+(h-1)*8,p=z(Rt,a);return Gt(t,ht(i,.12,.6),M=>si(M,Rt,a,Math.round(e-p/2),d,s,Qs()),[0,d-3,n,22]),d+15}function co(t,n,e,o,s,r,a,i,u=1){n=Math.round(n),e=Math.round(e);let c=(l,m)=>m>=0&&m<13&&l>=Te[m]&&l<o-Te[m];return Gt(t,u,l=>{for(let d=0;d<13;d++)for(let p=Te[d];p<o-Te[d];p++){let M=!c(p-1,d)||!c(p+1,d)||!c(p,d-1)||!c(p,d+1),x=n+p,y=e+d;if(r==="light"){A(l,x,y,M&&d<2?"M1":"K0");continue}if(M){let P=p<16&&d<7,S=p>o-17&&d>5,E=r==="nightmare";A(l,x,y,P?i?"W0":E?"P5":"K8":S?i?"K8":E?"E1":"K7":i?E?"P2":"M3":E?"S3":"M2");continue}let k=r==="nightmare",w=k?i?"P1":"S2":i?"M2":"M1",g=k?"S1":"K0",R=Math.min(p-Te[d],o-1-Te[d]-p),C=w;R<3&&(C=V(x,y,.5)?w:g),d===1&&p<o*.42&&(C=p<o*.3||V(x,y,.5)?k?"P2":i?"M3":"M2":C),A(l,x,y,C)}let m=z(tt,s,1),h=a?z(tt,a)+7:0,f=m+(a?5+h:0),b=n+Math.round((o-f)/2);it(l,tt,s,b,e+4,"W0","left",1),a&&ni(l,a,b+m+5,e+2,rt(r==="nightmare"?"P4":"T1"))},[n-1,e-1,o+2,15]),{id:"",x:n,y:e,w:o,h:13,label:s}}function uo(t,n){return 22+z(tt,t,1)+(n?5+z(tt,n)+7:0)}function O0(t,n,e,o,s,r,a,i=1){let u=z(tt,o,1),c=Math.round(n-u/2);return Qn(t,c,e+4,u,8),Gt(t,i,l=>{it(l,tt,o,c,e+4,r?s==="light"?"K0":"W0":un[s].sec,"left",1);let m=r?Math.round(u*et(a/.1)):0;for(let h=0;h<u;h++)h<m?A(l,c+h,e+11,un[s].ul):(c+h)%3===0&&A(l,c+h,e+11,un[s].ul)},[c-1,e,u+2,14]),{id:"",x:c-4,y:e-1,w:u+8,h:15,label:o}}function vm(t,n,e,o,s,r,a,i,u){let c=[],l=ht(i,u,.5),m=Math.round((1-kn((i-u)/.9))*6);e+=m;let[h,...f]=r,b=a.touch?null:h.key||null,d=w=>a.hover===w;if(!o){let w=uo(h.label.toUpperCase(),b),g=f.map(S=>z(tt,S.label.toUpperCase(),1)),R=18,C=w+g.reduce((S,E)=>S+E+R,0),P=Math.round(n-C/2);return c.push({...co(t,P,e,w,h.label.toUpperCase(),s,b,d(h.id),l),id:h.id}),P+=w+R,f.forEach((S,E)=>{c.push({...O0(t,P+g[E]/2,e,S.label.toUpperCase(),s,d(S.id),1,l),id:S.id}),P+=g[E]+R}),{hits:c,bottom:e+13}}let M=Math.max(uo(h.label.toUpperCase(),b),132);c.push({...co(t,n-M/2,e,M,h.label.toUpperCase(),s,b,d(h.id),l),id:h.id});let x=f.map(w=>z(tt,w.label.toUpperCase(),1)),y=x.reduce((w,g)=>w+g,0)+16*(f.length-1),k=Math.round(n-y/2);return f.forEach((w,g)=>{c.push({...O0(t,k+x[g]/2,e+18,w.label.toUpperCase(),s,d(w.id),1,l),id:w.id}),k+=x[g]+16}),{hits:c,bottom:e+32}}function ve(t,n,e,o,s,r="night",a=1){n=Math.round(n),e=Math.round(e);let i=xt(6,6,6),u=new Set(i.map(([c,l])=>l*13+c));return Gt(t,a,c=>{for(let m=0;m<13;m++)for(let h=0;h<13;h++){let f=Math.hypot(h-6,m-6),b=n+h,d=e+m;if(u.has(m*13+h)){let p=h+m<9,M=h+m>15;r==="light"?A(c,b,d,"M2"):p?A(c,b,d,s?"W0":"K8"):M?A(c,b,d,s?"K8":"K7"):V(b,d,s?1:.5)&&A(c,b,d,"M3")}else f<6&&(r==="light"?A(c,b,d,"K0"):V(b,d,s?.75:.5)&&A(c,b,d,"K0"))}let l={"?":[4,3,5,7],"\\u2039":[5,4,3,5],"\\u203A":[5,4,3,5],pause:[4,4,5,6]}[o]||[4,3,5,7];ne(c,o,n+l[0],e+l[1],"W0")},[n,e,13,13]),{id:"",x:n,y:e,w:13,h:13,label:o}}function Dm(t,n,e,o,s,r,a,i,u){let c=ta(n,r),l=[],m=o+30,h=[0,1,2].map(b=>j0(b,!!u.won[b],r,c,!!u.links,n)),f=Math.max(...h.map(b=>b.lines[0].f.base));for(let b=0;b<3;b++){let d=!!u.won[b],p=e+(b-1)*c,M=ht(a,i+b*.08,.6);if(M<=0)continue;let x=Math.round(Math.sin(a*1.13+b*2.1)*.8+Math.sin(a*.71+b*.9)*.6),[y,k,w]=Ym[s];mo[s]&&Xe(t,p-19,o-5,38,42,mo[s]),Gt(t,M,T=>{for(let L=-16;L<=16;L++)for(let O=-16;O<=16;O++){let K=Math.hypot(O,L*1.05);K<15&&J(T,p+O,o+15+L,w,K<10?.5:.25)}for(let L=-20;L<20;L++)for(let O=-3;O<3;O++){let K=(L/20)**2+(O/3)**2;K<1&&J(T,p+L,o+30+O,K<.3?y:k,K<.3?.5:.25)}let D=On(b,!d,Tm[s]);T.drawImage(xe(D,Qs(),"sheet"+b+(d?"w":"l")+Am()),p-12,o+x),d&&pi(T,p-12,o+x,b,a,D)},[p-22,o-2,44,37]);let g=o+37,R=yt.works[b],C=ht(a,i+.12+b*.08,.6),P=h[b],S=f-P.lines[0].f.base,E=d&&u.hover==="work"+b,I=u.links&&d,v=T=>z(T.f,T.s,T.f===tt?1:0),Y=T=>Math.round(p-(v(T)+(I?7:0))/2),G=T=>g+S+P.lines.slice(0,T).reduce((D,L)=>D+L.lh,0);mo[s]&&P.lines.forEach((T,D)=>Xe(t,Y(T)-3,G(D)-3,v(T)+(I?7:0)+6,T.f.h+7,mo[s])),P.lines.forEach((T,D)=>Qn(t,Y(T)-3,G(D)-3,v(T)+(I?7:0)+6,T.f.h+7)),Gt(t,C,T=>{P.lines.forEach((D,L)=>{let O=v(D),K=G(L),N=Y(D),$=d?E?s==="light"?"K0":"W0":un[s].name:D.f===tt?un[s].lab:un[s].dim;if(it(T,D.f,D.s,N,K,$,"left",D.f===tt?1:0),!I)return;let j=K+(D.f===zt?9:7);L===P.lines.length-1&&it(T,tt,"\\u2197",N+O+2+(E?1:0),j-5-(E?1:0),E?"K0":un[s].name);for(let W=N;W<N+O;W++)(E||W%3===0)&&A(T,W,j+(D.f===zt?4:3),E?"M1":"M3")})});let F=P.lines.reduce((T,D)=>T+D.lh,0);u.links&&d&&l.push({id:"work"+b,x:p-Math.floor(c/2)+2,y:o-2,w:c-4,h:39+F+3,href:R.link,label:R.title}),m=Math.max(m,g+S+F)}return{hits:l,bottom:m}}function j0(t,n,e,o,s,r){let a=e?Math.min(o,Math.floor(r/3))-6:o-3;if(n){let h=L0(yt.works[t].title),f=a-(s?7:0)+(e?6:0),b=[0,1,2].every(p=>!yt.works[p]||z(zt,L0(yt.works[p].title))<=f);for(let p of b?[zt,Wt]:[Wt])if(z(p,h)<=f)return{lines:[{s:h,f:p,lh:p===zt?13:10}]};let d=h.replace(/ (v\\d+)$/i,"\\xA0$1");return{lines:Ho(Wt,d,f).map(p=>({s:p.replace(/\\u00a0/g," "),f:Wt,lh:10}))}}let i=o-9,u=yt.bosses[t];if(z(Wt,u)<=i)return{lines:[{s:u,f:Wt,lh:10}]};let c=u.split(" "),l=Math.ceil(c.length/2);return{lines:[c.slice(0,l).join(" "),c.slice(l).join(" ")].filter(Boolean).map(h=>({s:h,f:Wt,lh:10}))}}function Gm(t,n,e,o,s,r,a,i,u){let c=u?kn((r-a-.2)/.9):1,l=[["Time",qs(Math.round(i.time*c))],["Level",String(Math.max(u?0:1,Math.round(i.level*c)))],["Best",i.best==null?"--:--":qs(i.best)]],m=[["Time",qs(i.time)],["Level",String(i.level)],["Best",l[2][1]]],h=s?9:14,f=m.map(([d,p])=>z(Wt,d)+4+z(Pr,p)),b=Math.round(n-(f.reduce((d,p)=>d+p,0)+h*2)/2);return Qn(t,b,e,f.reduce((d,p)=>d+p,0)+h*2,12),Gt(t,ht(r,a,.5),d=>l.forEach(([p,M],x)=>{it(d,Wt,p,b,e+2,un[o].lab);let y=b+z(Wt,p)+4;it(d,Pr,M,y+z(Pr,m[x][1])-z(Pr,M),e+1,un[o].val),b+=f[x]+h}),[0,e-1,9999,14]),e+12}function Sr(t,n,e,o,s,r){if(r.exit!=null)return De(t,r.exit,u=>Sr(u,n,e,o,s,{...r,exit:null}));At(r.pal);let a=Rr(n,e,o,r);Hn(t,n,e,"night",s,ht(s,0,.35));let i=oa(t,n,e,a,"night",yt.sheet.paused,s,r,[{id:"continue",label:yt.sheet.cont,key:"ESC"},{id:"restart",label:yt.sheet.restart},{id:"wake",label:yt.sheet.wake}],!1);return a.ph&&i.push({...ve(t,n-19,a.top+12,"?",r.hover==="help","night",ht(s,.2,.5)),id:"help"}),At(),i}function na(t,n,e,o,s,r){if(r.exit!=null)return De(t,r.exit,u=>na(u,n,e,o,s,{...r,exit:null}));At(r.pal);let a=Rr(n,e,o,r);Hn(t,n,e,"nightmare",s,ht(s,0,.35));let i=oa(t,n,e,a,"nightmare",yt.sheet.over,s,r,[{id:"again",label:yt.sheet.again,key:"ENTER"},{id:"works",label:yt.sheet.works},{id:"wake",label:yt.sheet.wake}],!0);return At(),i}function ea(t,n,e,o,s,r){if(r.exit!=null)return De(t,r.exit,m=>ea(m,n,e,o,s,{...r,exit:null}));At(r.pal);let{fr:a,frost:i,spots:u,keep:c}=V0(n,e,o,r);Hn(t,n,e,"light",s,ht(s,0,.35),i),r.noDeco||q0(t,n,e,a.ph,s,i,u,c);let l=oa(t,n,e,a,"light",yt.sheet.clear,s,r,[{id:"wake",label:yt.sheet.wake,key:"ENTER"},{id:"works",label:yt.sheet.works},{id:"again",label:yt.sheet.again}],!0,!0);return At(),l}function U0(t,n,e,o,s,r){At(r.pal);let{fr:a,frost:i,spots:u,keep:c}=V0(n,e,o,r);q0(t,n,e,a.ph,s,i,u,c),At()}function V0(t,n,e,o){let s=Rr(t,n,e,o),r=J0(t,s,o,!0),a=n>t,i=Zs(yt.sheet.kicker,t-16).length,u=Math.max(s.ph?45:60,Math.ceil(z(Rt,yt.sheet.clear)/2)+3),c=Math.ceil(ta(t,s.ph)*1.5),l=[a?[0,r.y0,t,r.y0+kr(i)]:[s.cx-u,r.y0,s.cx+u,r.y0+kr(i)],[s.cx-c,r.y0+r.S.shards,s.cx+c,r.y0+r.total]],m=Om(t,n,s.ph,l),h={cx:t/2,cy:r.y0+r.total/2,A:t*(a?.6:.55),B:Math.max(r.total*(a?.78:.86),n*(a?.28:.5)),p:3};for(let f of m){let[b,d,p,M]=he[f.n].map(k=>k*f.L),x=Math.abs(Math.min(t,Math.max(0,f.x+(b+p)/2))-h.cx)/h.A;if(x>=.97)continue;let y=f.sy<0?f.y+d+(M-d)*.3:f.y+M-(M-d)*.3;h.B=Math.max(h.B,Math.min(n*(a?.42:.6),Math.abs(y-h.cy)/Math.cbrt(1-x*x*x)))}return{fr:s,frost:h,spots:m,keep:l}}function J0(t,n,e,o){let s=n.ph,r=z(tt,yt.sheet.kicker.toUpperCase(),1)<=t-16?1:2,a=ta(t,s),i=[0,1,2].map(b=>j0(b,!!e.won[b],s,a,o,t)),u=Math.max(...i.map(b=>b.lines[0].f.base)),c=Math.max(...i.map(b=>u-b.lines[0].f.base+b.lines.reduce((d,p)=>d+p.lh,0))),m={shards:kr(r)+(s?18:12),stats:0,btn:0};m.stats=m.shards+37+c+(s?18:14),m.btn=m.stats+(s?30:26);let h=m.btn+(s?32:13);return{y0:n.top+Math.max(4,Math.round((n.avail-h)/2)),total:h,S:m}}function oa(t,n,e,o,s,r,a,i,u,c,l=!1){let m=o.ph,{y0:h,S:f}=J0(n,o,i,l);X0(t,n,o.cx,h,s,yt.sheet.kicker,r,a,m);let b=Dm(t,n,o.cx,h+f.shards,s,m,a,.15,{won:i.won,links:l,hover:i.hover});Gm(t,o.cx,h+f.stats,s,m,a,.3,i.stats,c);let d=vm(t,o.cx,h+f.btn,m,s,u,i,a,.5);return[...b.hits,...d.hits]}function Fm(t,n,e,o,s,r,a,i,u,c){let[l,m,h,f]=he[t].map(w=>w*r),b=h-l,d=f-m,p=(w,g)=>u.every(([R,C,P,S])=>w+h+c<=R||w+l-c>=P||g+f+c<=C||g+m-c>=S),M=w=>w+l>=-b/3&&w+h<=a+b/3,x=w=>w+m>=-d/3&&w+f<=i+d/3,y=n,k=e;for(let w=0;w<400&&!p(y,k);w++)if(x(k+s))k+=s;else if(M(y+o))y+=o;else break;return[Math.round(y),Math.round(k)]}function Om(t,n,e,o){let s=e?.72:n>t?.86:1,r=(e?22:n>t?26:16)+3,a=(u,c,l,m,h,f=r)=>{let[b,d]=Fm(u,t*c,n*l,m,h,s,t,n,o,f);return{n:u,x:b,y:d,sx:m,sy:h,L:s}},i=n>t;return[a("stair",.07,i?.18:.2,-1,-1,r-10),a("arch",.9,i?.12:.1,1,-1),a("column",.955,i?.72:.78,1,1),a("ring",.125,i?.8:.92,-1,1)]}function q0(t,n,e,o,s,r,a,i){let u=ht(s,.7,.8);if(u<=0)return;let c=(C,P)=>Math.round(Math.sin(2*Math.PI*s/(3.6+2.4*pt(C,11))+2*Math.PI*pt(C,13))*P);$n||($n=document.createElement("canvas")),($n.width!==n||$n.height!==e)&&($n.width=n,$n.height=e);let l=$n.getContext("2d",{willReadFrequently:!0});l.imageSmoothingEnabled=!1,l.clearRect(0,0,n,e);let[m,h,f,b]=a,d=C=>Lm(C,n,e,i),p=d(m),M=d(h),x=d(f),y=d(b);Ye(l,(C,P,S)=>Km(C,P,S,m.L),p.x,p.y+c(2,3),he.stair,m.L,ho.stair),Ye(l,(C,P,S)=>Nm(C,P,S,h.L),M.x,M.y+c(4,3),he.arch,h.L,ho.arch),Ye(l,(C,P,S)=>Bm(C,P,S,f.L),x.x,x.y+c(6,3),he.column,f.L,ho.column),Ye(l,(C,P,S)=>Wm(C,P,S,b.L),y.x,y.y+c(8,3),he.ring,b.L,ho.ring),(o?[[.16,.14],[.84,.3],[.1,.62],[.9,.57],[.72,.88]]:[[.22,.12],[.8,.27],[.06,.55],[.93,.47],[.7,.9]]).forEach(([C,P],S)=>Ye(l,(E,I,v)=>W0(E,I,v,S,1),Math.round(n*C),Math.round(e*P)+c(20+S,2.5),[-7,-9,7,9],1,N0(S)));for(let C=0;C<10;C++){let P=Math.round(n*pt(C,3)),S=Math.round(e*pt(C,5))+c(40+C,2),E=(P-n/2)/(n/2);Math.abs(E)<.62&&S>e*.05&&S<e*.95||Ye(l,(I,v,Y)=>W0(I,v,Y,10+C,0),P,S,[-1,-1,7,7],1,N0(10+C))}let w=l.getImageData(0,0,n,e),g=w.data;for(let C=0;C<e;C++)for(let P=0;P<n;P++)g[(C*n+P)*4+3]&&$0(r,P,C)<.75&&(g[(C*n+P)*4+3]=0);l.putImageData(w,0,0);let R=$n;Gt(t,u,C=>C.drawImage(R,0,0))}function Lm(t,n,e,o){let[s,r,a,i]=he[t.n].map(k=>k*t.L),u=ho[t.n],c=Math.abs(Math.cos(u)),l=Math.abs(Math.sin(u)),m=a-s,h=i-r,f=(m*c+h*l)/2,b=(m*l+h*c)/2,d=(s+a)/2,p=(r+i)/2,M=Math.min(Math.max(t.x+d,f/3),n-f/3),x=Math.min(Math.max(t.y+p,b/3),e-b/3),y=()=>o.some(([k,w,g,R])=>M+f+4>k&&M-f-4<g&&x+b+4>w&&x-b-4<R);for(let k=0;k<80&&y();k++)M+=t.sx,x+=t.sy;return{x:Math.round(M-d),y:Math.round(x-p)}}function Ye(t,n,e,o,s,r,a){let[i,u,c,l]=s.map(k=>k*r),m=Math.ceil(c-i)+6,h=Math.ceil(l-u)+6,f=m+"x"+h,b=B0.get(f);b||B0.set(f,b=document.createElement("canvas")),b.width=m,b.height=h;let d=b.getContext("2d");d.imageSmoothingEnabled=!1,d.clearRect(0,0,m,h);let p=Math.round(3-i),M=Math.round(3-u);n(d,p,M);let x=Math.round(e+(i+c)/2),y=Math.round(o+(u+l)/2);t.save(),t.imageSmoothingEnabled=!1,t.translate(x,y),t.rotate(a),t.drawImage(b,-Math.round(p+(i+c)/2),-Math.round(M+(u+l)/2)),t.restore()}function W0(t,n,e,o,s){if(s){let a=[["....wwl.....","..wwwwll....",".wwwwwlll...","wwwwwlllll..","wwwwllllllk.","wwwlllllllkk",".wwlllllllkk",".wllllllllkk","..lllllllkk.","..llllllkkk.","...lllllkk..","...lllkkk...","....llkk....","....lkk.....",".....k......","............"],[".....wl.....","....wwll....","...wwwlll...","..wwwwllll..",".wwwwwlllll.","wwwwwwllllll",".wwwwllllll.","..wwllllll..","...wlllllk..","....llllk...",".....llk....","......k.....","............","............","............","............"]][o%2],i={w:"W0",l:"W1",k:"K8"};a.forEach((u,c)=>{for(let l=0;l<u.length;l++)u[l]!=="."&&A(t,n-6+l,e-8+c,i[u[l]])});return}let r=3+Math.floor(pt(o,9)*3);for(let a=0;a<r;a++)for(let i=0;i<r;i++)Math.abs(i-(r-1)/2)+Math.abs(a-(r-1)/2)>(r-1)/2+.01||A(t,n+i,e+a,i+a<r-1?"W0":"K8")}function Km(t,n,e,o){let s=Math.round(16*o),r=Math.round(e-12*o),a=Math.round(e+44*o),i=17*o,u=3.6*o,c=.3,l=.6,m=h=>({ex:Math.cos(h)*i*(1+.24*Math.sin(h)),sy:a-4-(h-c)/l*u});for(let h=c;h<=c+(s-1)*l;h+=.03){if(Math.sin(h)>=0)continue;let f=m(h),b=Math.round(n+f.ex),d=Math.round(f.sy);(b+d)%2===0&&A(t,b,d,"K8")}for(let h=0;h<s;h++){let f=c+h*l;if(Math.sin(f)>=0)continue;let b=m(f),d=Math.round(b.ex*.85),p=Math.round(b.sy);at(t,d>=0?n+2:n-1+d,p,Math.abs(d)+1,"K8")}ct(t,n-2,r,a-r,"K8"),ct(t,n-1,r,a-r,"V2"),ct(t,n+1,r,a-r,"V2");for(let h=0;h<s;h++){let f=c+h*l,b=Math.sin(f);if(b<0)continue;let d=m(f),p=Math.round(d.ex),M=Math.round(d.sy),x=p>=0?n+2:n-1+p,y=Math.abs(p)+1,k=b>.55?2:1;at(t,x,M,y,"V2");for(let w=1;w<=k;w++)at(t,x+(p>=0?0:w),M+w,y-w,w===k?"M3":"K8")}for(let h=c;h<=c+(s-1)*l;h+=.02){if(Math.sin(h)<0)continue;let f=m(h);A(t,Math.round(n+f.ex),Math.round(f.sy),"V2")}}function Nm(t,n,e,o){let s=Math.round(46*o),r=Math.round(58*o),a=Math.round(7*o),i=Math.round(n-s/2),u=Math.round(e+s/2);for(let m of[i,i+s-a]){ct(t,m,u,e+r-u,"K8"),ct(t,m+a-1,u,e+r-u,"K8"),ct(t,m+a-2,u+1,e+r-u-1,"V2");for(let h=u+8;h<e+r;h+=9)at(t,m,h,a,"K8")}let c=Zt(n-.5,u,s/2,s/2,Math.PI,Math.PI*1.78),l=Zt(n-.5,u,s/2-a+1,s/2-a+1,Math.PI,Math.PI*1.82);It(t,Zt(n-.5,u,s/2-1,s/2-1,Math.PI,Math.PI*1.77),"V2"),It(t,c,"K8"),It(t,l,"K8")}function Bm(t,n,e,o){let s=Math.round(16*o),r=[14,12,13,9].map(u=>Math.round(u*o)),a=e+Math.round(40*o);r.forEach((u,c)=>{let l=c===3?2:c===2?-1:0,m=Math.round(n-s/2+l);at(t,m,a-u,s,"K8"),ct(t,m,a-u,u,"K8"),ct(t,m+s-1,a-u,u,"K8"),ct(t,m+Math.round(s*.35),a-u+2,u-3,"K8"),ct(t,m+s-2,a-u+1,u-1,"V2"),a-=u+1});let i=Math.round(n-s/2);at(t,i-3,a,s+6,"K8"),at(t,i-2,a-2,s+3,"K8"),at(t,i-2,a+1,s+4,"V2")}function Wm(t,n,e,o){let s=Math.round(34*o),r=[[3.4,4.3],[4.45,5.25],[5.4,6.1]];for(let[a,i]of r){It(t,Zt(n,e,s-1,s-1,a+.02,i-.02),"V2"),It(t,Zt(n,e,s,s,a,i),"K8"),It(t,Zt(n,e,s-6,s-6,a+.02,i-.02),"K8");for(let u of[a,i])$o(t,n+Math.cos(u)*s,e+Math.sin(u)*s,n+Math.cos(u)*(s-6),e+Math.sin(u)*(s-6),"K8")}}function z0(t,n,e=1){let o=yr[n]||yr.rest,s=t==="weapon"||t==="passive",r=t==="fusion"||!!Xo[n],a=Xo[n],i=r&&a?\`\${yr[a[0]].tag} \\xD7 \${yr[a[1]].tag}\`.toUpperCase():n in A0?A0[n]:["design","code","motion","3d"].includes(n)?o.tag:o.name,u=s||r?o.name:o.tag,[c,l]=G0[r?"fusion":o.color]||G0.white;return{key:t+n,type:r?"B":"A",main:i,move:u,desc:o.desc(e),fill:c,edge:l,icon:n,stars:r?5:["design","code","motion","3d"].includes(n)?e:void 0}}function _m(t,n,e=!1){if(t)return _0.ph;if(n>=112){let o=Math.round((n-126)/2),s=_0.pc;return{main:s.main+o,pips:s.pips+o,icon:s.icon+o,isz:s.isz,move:s.move+o}}return e?{main:10,pips:27,icon:39,isz:24,move:75}:{main:10,pips:27,icon:36,isz:24,move:71}}function zs(t,n,e,o){if(e<0||o<0||e>=t||o>=n)return!1;let s=o<3?o:o>=n-3?n-1-o:-1;if(s<0)return!0;let r=$m[s];return e>=r&&e<t-r}function Xm(t,n,e,o,s,r){let a=n-2,i=n+o+1,u=e+3,c=e+s+2;for(let l=e+1;l<=c+2;l++)for(let m=a-2;m<=i+2;m++){if(zs(o,s,m-n,l-e))continue;let h=Math.max(m<a?a-m:m>i?m-i:0,l<u?u-l:l>c?l-c:0);if(h>2)continue;let f=null;for(let b=r.length-1;b>=0&&!f;b--)zs(o,s,m-r[b].x,l-r[b].y)&&(f=r[b]);f&&J(t,m,l,f.B?"K0":"T1",[.75,.5,.25][h],n,e)}}function jm(t,n,e,o,s,r,a=!1,i){let u=bo(s).w,c=i??bo(s).h,l=_m(s,c,o.type==="B"),m=Jm(o,u,l,c),h={...l,main:l.main+m.dy,pips:l.pips+m.dy,icon:l.icon+m.dy,move:l.move+m.dy};n=Math.round(n),e=Math.round(e);let f=o.type==="B",b=(w,g)=>zs(u,c,w,g);for(let w=-1;w<=c;w++)for(let g=-1;g<=u;g++)b(g,w)||(b(g-1,w)||b(g+1,w)||b(g,w-1)||b(g,w+1))&&J(t,n+g,e+w,a?o.fill:f?"P2":"K7",a?1:.5,n,e);for(let w=0;w<c;w++)for(let g=0;g<u;g++){if(!b(g,w))continue;let R;if(f){let P=w/c;R=P<.5?V(g,w,P*2)?"K1":"N0":"K1";let S=0,E=0;for(let[I,v,Y,G]of qm(o.key,u,h.icon+h.isz/2)){let F=Math.hypot(g-I,(w-v)*.8)/Y,T=Math.max(0,1-F*F);G?S+=T:E+=T}V(g,w,Math.min(.5,E*.55))?R="M2":V(g+2,w+1,Math.min(.5,S*.5))?R="P1":V(g+1,w+3,Math.min(.25,(S+E)*.2))&&(R="M1")}else{let P=et((w-c*.18)/(c*.7))*2,S=P<1?"K9":"Q1",E=P<1?"Q1":"Q0";R=V(g,w,P<1?P:P-1)?E:S,P>=2&&(R="Q0")}let C=!b(g-1,w)||!b(g+1,w)||!b(g,w-1)||!b(g,w+1);C&&(R=f?w<c/2?"M2":"M1":V(g,w,et((w-c*.55)/(c*.3)))?"K8":"W0"),C&&a&&(R=o.fill),A(t,n+g,e+w,R)}let d=m,p=d.boxes,M=Math.floor(r*6);for(let w=0;w<Math.round(u*c*.005);w++){let g=5+Math.floor(pt(w,o.key.length,31)*(u-10)),R=5+Math.floor(pt(w,o.key.length,37)*(c-10));(M+w)%5!==0&&(p.some(([C,P,S,E])=>g>=C&&g<=S&&R>=P&&R<=E)||A(t,n+g,e+R,f?w%3?"W0":"P4":w%2?"W0":"P5"))}if(f)zm(t,n,e,u,c);else{let w=a?o.fill:"Y1";at(t,n+4,e+4,u-8,w),at(t,n+4,e+c-5,u-8,w),ct(t,n+4,e+5,c-10,w),ct(t,n+u-5,e+5,c-10,w);for(let g=0;g<u-12;g++)J(t,n+6+g,e+6,"Y2",.5,n,e),J(t,n+6+g,e+c-7,"Y2",.5,n,e);for(let g=0;g<c-12;g++)J(t,n+6,e+6+g,"Y2",.5,n,e),J(t,n+u-7,e+6+g,"Y2",.5,n,e);for(let[g,R,C,P]of[[n+4,e+4,1,1],[n+u-5,e+4,-1,1],[n+4,e+c-5,1,-1],[n+u-5,e+c-5,-1,-1]])for(let S=0;S<7;S++){let E=(7.5+S*12.5)*Math.PI/180,I=S%2?6:9;for(let v=3;v<=I;v++){let Y=Math.round(g+C*Math.cos(E)*v),G=Math.round(R+P*Math.sin(E)*v);(v>I-2||v%2===0||S===3)&&A(t,Y,G,v>6?"Y2":"Y1")}}}if(d.main.forEach(w=>{if(f){let g=z(d.mf,w.s),R=Math.round(n+u/2-g/2);dt(t,d.mf,w.s,R,e+w.y+1,rt("P2")),w.hang&&dt(t,d.mf,w.hang,R-z(d.mf,w.hang+" "),e+w.y+1,rt("P2")),dt(t,d.mf,w.s,R,e+w.y,rt(o.fill)),w.hang&&dt(t,d.mf,w.hang,R-z(d.mf,w.hang+" "),e+w.y,rt(o.fill))}else d.mf===Rt?di(t,d.mf,w.s,n+u/2,e+w.y,o.fill,o.edge,null,.5,"center"):it(t,d.mf,w.s,n+u/2,e+w.y,o.edge||o.fill,"center")}),o.stars){let w=e+h.pips;for(let g=0;g<5;g++){let R=n+Math.round(u/2)-2+(g-2)*9;f?ne(t,"starFill",R,w,g===2?"Y2":"Y1"):g<o.stars?ne(t,"starFill",R,w,"M1"):ne(t,"starEmpty",R,w,"T0")}}let x=n+Math.round((u-h.isz)/2),y=e+h.icon,k=r*8%24/4;if(f){for(let[g,R]of xt(Math.round(u/2)-1,h.icon+Math.round(h.isz/2)-1,Math.round(h.isz*.62)))J(t,n+g,e+R,"Y1",.5,n,e);let w=h.isz+4;jo(t,o.icon,n+Math.round((u-w)/2),e+h.icon-2,w,"X0","P2",null,.5,k<1?k:-1)}else{let w=Hm[o.fill];w?jo(t,o.icon,x,y,h.isz,w[0],w[1],null,.25,k<1?k:-1,w[2]):jo(t,o.icon,x,y,h.isz,o.fill,o.edge,null,.25,k<1?k:-1)}d.move.forEach((w,g)=>Um(t,Ae,w,n+u/2,e+d.moveY+g*Cr,f?"K8":"M1"))}function fo(t,n,e=1,o=3){let s=l=>t.glyphs[l]||t.glyphs[l.toUpperCase()]||t.glyphs["?"]||null,r=l=>l.map(m=>{let h=-1,f=-1;for(let b=0;b<m.length;b++)m[b]!=="."&&m[b]!==" "&&(h<0&&(h=b),f=b);return[h,f]}),a=[],i=null,u=!1,c=0;for(let l of n){if(l===" "){u=!0;continue}let m=s(l);if(!m)continue;let h=r(m),f=Math.min(...h.filter(([p])=>p>=0).map(([p])=>p)),b=Math.max(...h.map(([,p])=>p)),d;if(!i)d=-f;else if(u)d=i.x+i.R+1+o-f;else{d=i.x+i.R-1-f;for(let p=0;p<h.length;p++)if(!(h[p][0]<0))for(let M of[-1,0,1]){let x=i.e[p+M];!x||x[1]<0||(d=Math.max(d,i.x+x[1]+1+e-h[p][0]))}}a.push({ch:l,x:d,rows:m}),i={x:d,e:h,R:b},u=!1,c=Math.max(c,d+b+1)}return{glyphs:a,w:c}}function Um(t,n,e,o,s,r){let{glyphs:a,w:i}=fo(n,e),u=Math.round(o-i/2);t.fillStyle=rt(r);for(let{x:c,rows:l}of a)l.forEach((m,h)=>{for(let f=0;f<m.length;f++)m[f]!=="."&&m[f]!==" "&&t.fillRect(u+c+f,Math.round(s)+h,1,1)})}function Vm(t,n,e){let o=i=>{let u=[],c="";for(let l of n.split(" ")){let m=c?c+" "+l:l;c&&fo(t,m).w>i?(u.push(c),c=l):c=m}return c&&u.push(c),u},s=o(e);if(s.length<2)return s;let r=s,a=Math.max(...s.map(i=>fo(t,i).w));for(let i=e-1;i>e*.45;i--){let u=o(i);if(u.length!==s.length)break;let c=Math.max(...u.map(l=>fo(t,l).w));c<a&&(a=c,r=u)}return r}function Jm(t,n,e,o=126){let s=t.type==="B",r=n-16,a=Rt;(z(Rt,t.main)>r||s)&&(a=z(zt,t.main)<=r&&!s?zt:Wt);let i;if(s){let d=t.main.split(" \\xD7 ");i=d.length>1?[{s:d[0],y:e.main-2},{s:d[1],y:e.main+8,hang:"\\xD7"}]:[{s:t.main,y:e.main+3}]}else{let d=z(a,t.main)<=n-14?[t.main]:Ho(a,t.main,n-14),p=a.h+2,M=t.stars?0:5,x=e.main+M+(a===Rt?0:a===zt?2:4)-(d.length-1)*Math.round(p/2);i=d.map((y,k)=>({s:y,y:x+k*p}))}let u=Vm(Ae,t.move,n-24),c=e.move-Math.round((u.length-1)*Cr/2),l=Math.min(...i.map(d=>d.y)),m=c+(u.length-1)*Cr+Ae.base,h=Math.round((5+(o-6))/2-(l+m)/2);i.forEach(d=>d.y+=h),c+=h;let f=[],b=(d,p,M,x,y,k=2,w=z(p,d))=>{f.push([Math.round(M-w/2)-k,x-k,Math.round(M+w/2)+k,x+y+k])};return i.forEach(d=>b((d.hang?d.hang+" ":"")+d.s,a,n/2-(d.hang?z(a,d.hang+" ")/2:0),d.y,a.h)),u.forEach((d,p)=>b(d,Ae,n/2,c+p*Cr,Ae.h,3,fo(Ae,d).w)),{mf:a,main:i,move:u,moveY:c,boxes:f,dy:h}}function qm(t,n,e){let o=t+n,s=H0.get(o);if(!s){s=[];let r=0;for(let a of t)r=r*31+a.charCodeAt(0)|0;for(let a=0;a<7;a++){let i=pt(r,a,1)*Math.PI*2,u=(.1+pt(r,a,2)*.3)*n;s.push([n/2+Math.cos(i)*u*1.1,e+Math.sin(i)*u*1.3,(.16+pt(r,a,3)*.16)*n,pt(r,a,4)<.45?1:0])}H0.set(o,s)}return s}function zm(t,n,e,o,s){at(t,n+4+9,e+4,o-2*13,"Y1"),at(t,n+4+9,e+s-1-4,o-2*13,"Y1"),ct(t,n+4,e+4+9,s-2*13,"Y1"),ct(t,n+o-1-4,e+4+9,s-2*13,"Y1");for(let[i,u,c]of[[n+4,e+4,0],[n+o-1-4,e+4,Math.PI/2],[n+o-1-4,e+s-1-4,Math.PI],[n+4,e+s-1-4,Math.PI*1.5]]){It(t,Zt(i,u,9,9,c,c+Math.PI/2),"Y1");for(let l=0;l<5;l++){let m=c+(l+.5)/5*(Math.PI/2);for(let h=2;h<=(l%2?5:7);h++)J(t,i+Math.cos(m)*h,u+Math.sin(m)*h,l%2?"Y1":"Y2",h%2?1:.5,n,e)}}for(let i=n+4+9+2;i<n+o-4-9-2;i++)J(t,i,e+6,"Y0",.5,n,e),J(t,i,e+s-7,"Y0",.5,n,e)}function Zm(t,n,e,o,s,r,a=!1){if(o){let l=bo(!0).h,m=14;return{y0:n.top+Math.max(4,Math.round((t-n.top)*.47-(e+m+l+7)/2)),gap:m,ch:l,outer:8,hintY:0}}if(r){let m=n.avail-e-9,h=6,f=Math.round(et(m-h-54,114,126));m-f-h<54&&(h=4);let b=m-f-h,d=Math.min(b,72),p=Math.round(d*.22),M=Math.round(d*.2),x=Math.max(6,Math.round(d*.14))+Math.floor((b-d)/2);return{y0:n.top+Math.max(2,b-p-M-x),gap:p,ch:f,outer:h,hintY:n.top+n.avail-x-9}}if(s){let m=Math.round(et(n.avail-e-4-Math.round(n.avail*.2),100,114)),h=n.avail-e-m-4,f=Math.max(a?11:9,Math.round(h*.2)),b=Math.round((h-f)*.4375);return{y0:n.top+Math.max(2,h-f-b),gap:f,ch:m,outer:4,hintY:0}}let i=bo(!1).h,u=14,c=6;return{y0:n.top+Math.max(4,Math.round((n.avail-(e+u+i+c))/2)),gap:u,ch:i,outer:c,hintY:0}}function Er(t,n,e,o,s,r){if(r.exit!=null)return De(t,r.exit,T=>Er(T,n,e,o,s,{...r,exit:null}));At(r.pal);let a=Rr(n,e,o,r),i=a.ph;Hn(t,n,e,"night",s,ht(s,0,.35));let u=r.core?"A core \\u2014 two skills can become one":\`Level up \\xB7 \${r.level}\`,c=r.core?"Fuse two skills":"Choose a skill",l=!i&&e<200,m=o==="ph",h=bo(m).w,f=z(tt,u.toUpperCase(),1)<=n-16?1:2,b=kr(f,!m),d=m?40:i?90:94,p=!i&&!r.touch&&!l,{y0:M,gap:x,ch:y,outer:k,hintY:w}=Zm(e,a,b,m,l,p,!!r.touch);X0(t,n,a.cx,M,"night",u,c,s,i,!m);let g=M+b+x,R=[],C=r.cards.length,P=[],S=[];for(let T=0;T<C;T++)if(m){let D=Math.round((n-h)/2),L=C===3?T-1:T===0?-.5:.5;P.push(Math.max(4,Math.min(n-h-4,Math.round(D+L*d)))),S.push(g+(L===0?0:L<0?4:7))}else{let D=C===3?T-1:T-.5;P.push(Math.round(n/2-h/2+d*D)),S.push(g+(C===3&&T!==1?k:0))}let E=(C-1)/2,I=T=>m?r.raised===T?99:10-Math.round(Math.abs(T-E)*2)+(T>E?1:0):T,v=[...Array(C).keys()].sort((T,D)=>I(T)-I(D)),Y=T=>{let D=P[T],L=P[T]+h;for(let O=0;O<C;O++){if(I(O)<=I(T))continue;let K=P[O],N=P[O]+h;K<=D&&N>D?D=Math.min(L,N):K<L&&N>=L&&(L=Math.max(D,K))}return[D,L]},G=[-40,-22,-10,-3,1,0],F=[];for(let T of v){let D=s-.25-T*.06;if(D<0)continue;let L=Math.min(G.length-1,Math.floor(D/.05)),O=G[L],K=r.sel===T||r.raised===T;K&&(O-=(r.touch?6:4)+(!m&&C===3&&T!==1?k:0)),m&&r.raised!=null&&r.raised!==T&&T===1&&C===3&&(O+=4);let N=ht(D,0,.2);if(r.chosen!=null){let B=r.chosenT||0;T===r.chosen?O-=Math.round(et(x-(r.touch?8:6),0,4)*kn(B/.15)):N=Math.min(N,1-ht(B,0,.3))}let $=P[T],j=S[T]+O,W=m?F.filter(B=>B.x<$+h&&B.x+h>$):[];Gt(t,N,B=>{W.length&&Xm(B,$,j,h,y,W),jm(B,$,j,r.cards[T],m,s+T*.37,K||r.chosen===T,y)},[$-5,j-2,h+10,y+8],$,j),F.push({x:$,y:j,B:r.cards[T].type==="B"});let[H,Z]=Y(T);R.push({id:"card"+T,x:H,y:j,w:Z-H,h:y,label:\`\${r.cards[T].main} \\u2014 \${r.cards[T].move}. \${r.cards[T].desc}\`})}if(p){let T=Math.min(ht(s,.6,.6),r.chosen!=null?1-ht(r.chosenT||0,0,.3):1),D=["LR","/","\\uE001","SELECT","[SPACE]","/","[CLICK]","CONFIRM"],L=Ko(D),O=Math.round((n-L)/2);Qn(t,O,w,L,9),Gt(t,T,K=>rs(K,D,O+L,w,{word:rt("T1"),key:rt("T1"),box:rt("K7")}))}return At(),R}function Z0(t,n,e,o,s,r){return Er(t,n,e,o,s,{...r,core:!0})}var yt,yr,A0,G0,mo,un,kr,Qs,Te,ta,Tm,Ym,L0,K0,lo,Am,qs,$n,he,ho,N0,B0,bo,_0,Hm,$m,Pr,Ae,Cr,H0,hf,Js=Bt(()=>{Vn();An();nn();Uo();Y0();yt={sheet:{kicker:"Dream mode",paused:"Paused",over:"Game over",clear:"Dream complete",cont:"Continue",restart:"Restart",wake:"Wake up",again:"Dream again",works:"All works"},works:[{"title": "Outspoken", "link": "https://github.com/DarkBird10020/outspoken"}, {"title": "DENO", "link": "https://deno-web-eight.vercel.app/"}, {"title": "Kavach", "link": "https://github.com/Atul-Chahar/KAVACH_IQOO"}],bosses:["Scope Creep","Legacy Code","The Deadline"]},yr={design:{name:"Curve Slash",tag:"Design",color:"design",desc:t=>["Slashes nearby foes","Slashes twice in a row","One curve cuts four","Curves circle and cut","Eight curves fly ahead"][Math.max(0,t-1)]},code:{name:"Auto Shot",tag:"Code",color:"code",desc:t=>["Auto-fires at the nearest","Fires two shots at once","Aims at three at once","Shots bounce foe to foe","Shots pierce and bounce"][Math.max(0,t-1)]},motion:{name:"Decoy",tag:"Motion",color:"motion",desc:t=>["A decoy lures, then bursts","Three decoys","Four decoys, luring far","Five decoys","Wider, stronger bursts"][Math.max(0,t-1)]},"3d":{name:"Orbit Shield",tag:"3D",color:"3d",desc:t=>["Orbiting shields repel foes","Two shields","Faster, stronger shields","Four shields","Six shields, two rings"][Math.max(0,t-1)]},speed:{name:"Speed Up",tag:"Boost",color:"white",desc:()=>"Move 8% faster"},power:{name:"Power Up",tag:"Boost",color:"white",desc:()=>"All attacks 12% stronger"},cooldown:{name:"Quick Recharge",tag:"Boost",color:"white",desc:()=>"Skills recharge 7% faster"},area:{name:"Wide Range",tag:"Boost",color:"white",desc:()=>"Skill range 11% wider"},magnet:{name:"Magnet",tag:"Boost",color:"white",desc:()=>"Pulls shards in from afar"},recovery:{name:"Health Up",tag:"Boost",color:"white",desc:()=>"More max HP and regen"},algorithmic:{name:"Seeking Curves",tag:"Fusion \\xB7 Design \\xD7 Code",color:"fusion",desc:()=>"Homing shots that pierce"},spline:{name:"Slow Wave",tag:"Fusion \\xB7 Design \\xD7 Motion",color:"fusion",desc:()=>"A wave that slows foes"},reaper:{name:"Twin Blades",tag:"Fusion \\xB7 Design \\xD7 3D",color:"fusion",desc:()=>"Two great blades circle you"},automation:{name:"Auto Pulse",tag:"Fusion \\xB7 Code \\xD7 Motion",color:"fusion",desc:()=>"A pulse that hits all around"},procedural:{name:"Turrets",tag:"Fusion \\xB7 Code \\xD7 3D",color:"fusion",desc:()=>"Orbiting turrets auto-fire"},spatial:{name:"Shock Orbit",tag:"Fusion \\xB7 Motion \\xD7 3D",color:"fusion",desc:()=>"Six shields send shockwaves"},rest:{name:"Rest",tag:"Recover",color:"white",desc:()=>"Restores 35 HP"},charge:{name:"Charge",tag:"Overdrive",color:"white",desc:()=>"Fills the light ring 40%"},keep:{name:"Keep the Core",tag:"Later",color:"white",desc:()=>"Save it for a later fusion"}},A0={speed:"Speed",power:"Power",cooldown:"Recharge",area:"Range",magnet:"Magnet",recovery:"Health"},G0={design:["W2","D3"],code:["G0","G2"],motion:["B1","K6"],"3d":["R5","Y1"],white:["V2","M3"],fusion:["X0",null]},mo={night:"K2",nightmare:"S2",light:null},un={night:{kick:"T1",arch:["K8","K7"],name:"W0",dim:"T1",lab:"T1",val:"W0",pool:"V2",sec:"K9",ul:"T1"},nightmare:{kick:"E1",arch:["E1","H0"],name:"P5",dim:"E1",lab:"P4",val:"P5",pool:"P3",sec:"P5",ul:"E1"},light:{kick:"M2",arch:["M3","V2"],name:"M1",dim:"T0",lab:"T0",val:"M1",pool:"K8",sec:"M1",ul:"M3"}};kr=(t,n=!1)=>(n?34:38)+(t-1)*8,Qs=()=>{let t={};for(let n in nt)t[n]=rt(n);return t},Te=[4,2,1,1,0,0,0,0,0,1,1,2,4];ta=(t,n)=>n?Math.min(84,Math.round(t*.3)):Math.min(104,Math.floor((t-16)/3)),Tm={night:"T1",nightmare:"E1",light:"M3"},Ym={night:["V2","M3","M1"],nightmare:["P3","P2","P0"],light:["K8","K8","Q0"]},L0=t=>(t||"").replace(/\\s+[—–-]\\s+/g," ").replace(/\\b([A-Z])([A-Z]+)\\b/g,(n,e,o)=>e+o.toLowerCase()),K0=0,lo=null,Am=()=>{let t=Qs(),n=t.K0+t.W1+t.K8;return(!lo||lo.K0+lo.W1+lo.K8!==n)&&(lo=t,K0++),"p"+K0},qs=t=>\`\${Math.floor(Math.max(0,t)/60)}:\${String(Math.floor(Math.max(0,t)%60)).padStart(2,"0")}\`;$n=null,he={stair:[-22,-12,22,44],arch:[-23,0,23,58],column:[-11,-14,11,40],ring:[-34,-34,34,1]};ho={stair:.45,arch:-.7,column:-.6,ring:-.15};N0=t=>(pt(t,17)-.5)*1.2,B0=new Map;bo=t=>t?{w:88,h:136}:{w:84,h:126},_0={pc:{main:15,pips:33,icon:46,isz:32,move:93},ph:{main:16,pips:34,icon:47,isz:36,move:101}};Hm={W2:["D3","D2","W2"],G0:["G0","G2","G0"],B1:["B1","K6","B1"],R5:["R5","Y1","R5"],V2:["V2","M3","V2"]},$m=[3,1,1];Pr={h:8,base:8,gap:1,space:3,glyphs:{0:[".####.","##..##","##..##","##..##","##..##","##..##","##..##",".####."],1:["..##..",".###..","..##..","..##..","..##..","..##..","..##..",".####."],2:[".####.","##..##","....##","...##.","..##..",".##...","##....","######"],3:[".####.","##..##","....##","..###.","....##","....##","##..##",".####."],4:["...##.","..###.",".#.##.","#..##.","######","...##.","...##.","..####"],5:["######","##....","#####.","....##","....##","....##","##..##",".####."],6:["..###.",".##...","##....","#####.","##..##","##..##","##..##",".####."],7:["######","##..##","...##.","...##.","..##..","..##..",".##...",".##..."],8:[".####.","##..##","##..##",".####.","##..##","##..##","##..##",".####."],9:[".####.","##..##","##..##","##..##",".#####","....##","...##.",".###.."],":":["..","..","##","##","..","##","##",".."],"-":["....","....","....","####","....","....","....","...."]}};Ae=fi,Cr=9;H0=new Map;hf={shards:[On(0,!1),On(1,!1),On(2,!1)],shardsLocked:[On(0,!0),On(1,!0),On(2,!0)]}});var Q0={};Dr(Q0,{drawSheetArt:()=>th,drawSheetDeco:()=>Qm});function Qm(t,n){n.kind==="clear"&&U0(t,n.W,n.H,n.scr,n.t,{stats:n.stats,won:n.won,touch:n.touch,hover:null,exit:null})}function th(t,n){let{W:e,H:o,scr:s,t:r,touch:a,exit:i}=n,u=a?null:n.hover;switch(n.kind){case"levelup":case"fusion":{let c=n.cards.map(m=>z0(m[0],m[1],m[2])),l={level:n.level,cards:c,sel:a?null:n.sel,raised:a?n.raised:null,chosen:n.chosen,chosenT:n.chosenT,touch:a,exit:i,core:n.kind==="fusion"};return c.length?n.kind==="fusion"?Z0(t,e,o,s,r,l):Er(t,e,o,s,r,l):[]}case"pause":return Sr(t,e,o,s,r,{stats:n.stats,won:n.won,touch:a,hover:u,exit:i});case"gameover":return na(t,e,o,s,r,{stats:n.stats,won:n.won,touch:a,hover:u,exit:i});case"clear":return ea(t,e,o,s,r,{stats:n.stats,won:n.won,touch:a,hover:u,exit:i,noDeco:n.noDeco});case"rulebook":return n.after==="pause"&&(r<.4||i!=null)&&Sr(t,e,o,s,9,{stats:n.stats,won:n.won,touch:a,hover:null,exit:null}),wr(t,e,o,s,r,{spread:n.spread,first:n.first,open:n.open,turn:n.turn,touch:a,hover:u,exit:i})}return[]}var tu=Bt(()=>{Js()});var rh={};async function eh(){for(sa=!0,await nh;Dn;){let t=Dn;Dn=null;try{oh(t)}catch(n){Fe.postMessage({id:t.id,kind:t.req.kind,err:String(n?.stack||n)})}}sa=!1}function oh(t){if(ou)throw new Error("no Japanese face in the Worker");let{W:n,H:e}=t.req,o=ra.FINE;(!Ge||Ge.width!==n||Ge.height!==e)&&(Ge=new OffscreenCanvas(n,e),nu=Ge.getContext("2d",{willReadFrequently:!0}),po=null),(!Xn||Xn.width!==n*o||Xn.height!==e*o)&&(Xn=new OffscreenCanvas(n*o,e*o),eu=Xn.getContext("2d"));let s=nu;if(s.setTransform(1,0,0,1,0,0),s.globalCompositeOperation="source-over",s.globalAlpha=1,s.imageSmoothingEnabled=!1,t.world)s.clearRect(0,0,n,e),s.drawImage(t.world,0,0),t.world.close(),po=s.getImageData(0,0,n,e);else if(po)s.putImageData(po,0,0);else return;let r=eu;r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,Xn.width,Xn.height),r.imageSmoothingEnabled=!1;let a=performance.now();ra.setFineLayer(s,t.fine?r:null);let i=ru.drawSheetArt(s,t.req);s.setTransform(1,0,0,1,0,0);let u=s.getImageData(0,0,n,e),c=new Uint32Array(u.data.buffer),l=new Uint32Array(po.data.buffer);for(let b=0;b<c.length;b++)c[b]===l[b]&&(c[b]=0);s.putImageData(u,0,0);let m=performance.now()-a,h=Ge.transferToImageBitmap(),f=t.fine?Xn.transferToImageBitmap():null;Fe.postMessage({id:t.id,kind:t.req.kind,hits:i,ov:h,fb:f,ms:m},f?[h,f]:[h])}var Fe,ou,ru,ra,nh,Ge,nu,Xn,eu,po,Dn,sa,su=Bt(()=>{Fe=self;Fe.document||(Fe.document={createElement:()=>new OffscreenCanvas(1,1),fonts:Fe.fonts});ou=!1,ru=null,ra=null,nh=(async()=>{ra=await Promise.resolve().then(()=>(nn(),xa)),ru=await Promise.resolve().then(()=>(tu(),Q0));try{await(await Promise.resolve().then(()=>(ls(),gi))).loadJP()}catch{ou=!0}})(),Ge=null,nu=null,Xn=null,eu=null,po=null,Dn=null,sa=!1;Fe.onmessage=t=>{Dn&&Dn.world&&!t.data.world?t.data.world=Dn.world:Dn?.world&&Dn.world.close(),Dn=t.data,sa||eh()}});var sh=self.name;sh==="giant"?Promise.resolve().then(()=>(qa(),zu)):Promise.resolve().then(()=>(su(),rh));})();
`],{type:`text/javascript`})),new Worker(Jb,{name:e})}var Jb,Yb=o(()=>{Jb=``});function Xb(){if(rx!==void 0)return rx;if($b.__rtNoBakeWorker||typeof Worker>`u`)return rx=null;try{let e=qb(`giant`);e.onmessage=e=>{let{grow:t,ms:n,m:r}=e.data;ji(r,t),tx.delete(ex(r.kind,r.sigma,t)),nx.push({key:ex(r.kind,r.sigma,t),ms:Math.round(n),where:`worker`})},e.onerror=e=>{e.preventDefault?.(),rx=null;for(let e of tx){let[t,n,r]=e.split(`:`).map(Number);ix.push([t,n,r])}tx.clear(),Zb()},rx=e}catch{rx=null}return rx}function Zb(){!ax&&ix.length&&(ax=!0,($b.requestIdleCallback?e=>$b.requestIdleCallback(e,{timeout:2e3}):e=>setTimeout(e,60))(()=>{ax=!1;let e=ix.shift();if(e&&!ao(e[0],e[1],e[2])){let t=performance.now();Ai(e[0],e[1],e[2]),nx.push({key:ex(e[0],e[1],e[2]),ms:Math.round(performance.now()-t),where:`idle`})}e&&tx.delete(ex(e[0],e[1],e[2])),Zb()}))}function Qb(e){let t=Xb();for(let n of e){let e=ex(n[0],n[1],n[2]);tx.has(e)||ao(n[0],n[1],n[2])||(tx.add(e),t?t.postMessage({kind:n[0],sigma:n[1],grow:n[2]}):ix.push(n))}t||Zb()}var $b,ex,tx,nx,rx,ix,ax,ox=o(()=>{xo(),Yb(),$b=r,ex=(e,t,n)=>`${e}:${t}:${n}`,tx=/* @__PURE__ */ new Set,nx=$b.__rtBakes=$b.__rtBakes||[],ix=[],ax=!1}),sx={};s(sx,{bossHud:()=>Hx,clearBullets:()=>Tx,dbgBossAt:()=>uS,dbgKillAll:()=>dS,dbgUnderCeil:()=>WS,dbgUnlock:()=>fS,dissolveAll:()=>Dx,drawDoorways:()=>nS,drawEnemies:()=>oS,drawEnemyFire:()=>cS,drawGiantLayer:()=>tS,drawKeeps:()=>sS,drawMemoryCaption:()=>lS,drawTelegraphs:()=>aS,giantBakeJobs:()=>kx,hurtBoss:()=>Rx,hurtEnemy:()=>vx,initFoes:()=>cx,killEnemy:()=>yx,nearestDoorway:()=>qx,remapFoes:()=>Xx,slowBoss:()=>zx,spawnEnemy:()=>mx,stepFoes:()=>fx,sweepDead:()=>bx});function cx(e){let t={acc:0,nextWave:K.spawn.waveFirst,eliteNext:0,wave:/* @__PURE__ */ new Set,killSfx:-9,flashes:[],boltHold:0,lx:0,gazeHold:0,clock:0,grow:0,stage:0,stageFrom:-1,stageT:0,struckAt:-9,maelAcc:0,ghost:null,stormOut:-1,wtPrev:e.wt,warm:[],warmedFor:-1,cleared:!1};e.priv.foes=t,e.look.storm=0,e.look.bolt=null,e.look.bossX=e.dev.W*$.xK,e.look.bossY=AS(e)}function lx(e){let t=OS(e);t.flashes=t.flashes.filter(t=>e.stepT-t<1),!(t.flashes.length>=3)&&(t.flashes.push(e.stepT),e.look.flash=4)}function ux(e,t){e.look.bolt=pS(J(t,4,e.dev.W-4)),OS(e).boltHold=3,lx(e)}function dx(e){let t=e.en,n=0;for(let r=0;r<t.n;r++)kS(e,r)&&n++;return n}function fx(e,t){let n=OS(e);n&&(Vx(e),n.boltHold>0&&--n.boltHold<=0&&(e.look.bolt=null),!(t<=0)&&(px(e,t),hx(e,t),Bv(e),gx(e,t),_x(e),Sx(e,t),wx(e,t),Px(e,t),Gx(e,t),Kx(e,t),Jx(e,t)))}function px(e,t){let n=OS(e),r=K.spawn,i=e.L,a=e.dev.W,o=e.t;if(e.phase!==`play`||!e.p.alive||n.cleared||e.gameIn>0)return;let s=e.boss,c=s.live,l=e.dev.touch;s.i<0&&s.next<3&&(n.warmedFor!==s.next&&o>=s.nextAt-15&&Ax(e,s.next),o>=s.nextAt-K.timeline.stormLead&&jx(e,s.next));let u=Math.min(l?r.rateMaxTouch:r.rateMax,r.rateA+r.rateB*o)*(c?r.bossK:1),d=Math.min(r.capA+r.capB*o,i.portrait?r.capPort:r.capLand,e.en.cap-12);n.acc+=u*t;let f=dx(e);for(;n.acc>=1&&(--n.acc,!(f>=d));){let t=o>r.bugT?Math.min(r.bugMax,(o-r.bugT)*r.bugK):0,n=o>r.spamT?Math.min(r.spamMax,(o-r.spamT)*r.spamK):0,s=o>r.errT?Math.min(r.errMax,(o-r.errT)*r.errK):0,c=e.rng(),u=e.rng()<r.riserP,d,p;if(u){d=a*(r.riserX0+r.riserXr*e.rng());let t=e.hud.layout?.touchOD;l&&t&&d<=a&&(d=Math.min(d,a-(t.size+r.touchODPad))),p=i.gY+r.riserDy}else d=a+r.flyerX+r.flyerXr*e.rng(),p=J(e.p.y+(e.rng()-r.flyerYc)*r.flyerYk,i.top+6,i.floor-6);let m=u?r.rippleLead:r.chevron,h=(t,n,i)=>{let a=mx(e,t,n,i,{riser:u});return a>=0&&(e.en.spawn[a]=-m*r.emerge,f++),a};if(c<s)h(2,d,p);else if(c<s+n)h(3,d,p);else if(c<s+n+t)for(let t=0;t<3;t++)h(1,d+(e.rng()*2-1)*r.packDx,u?p:J(p+(t-1)*r.packDy,i.top+4,i.floor-4));else h(0,d,p)}if(o>n.nextWave&&!c){n.nextWave+=r.waveEvery;let t=Math.min(r.waveMax,r.waveA+Math.floor(o/r.waveG));for(let s=0;s<t;s++){let c=((s+.5)/t-.5)*r.waveSpread,l=J(e.p.y+Math.sin(c)*(i.h/2)*r.waveYk,i.top+6,i.floor-6),u=a+r.flyerX+(Math.cos(c)-r.waveXc)*r.waveXk,d=mx(e,o>r.waveErrAfter&&s%r.waveErrEvery===0?2:0,u,l);d>=0&&(e.en.spawn[d]=-r.chevron*r.emerge,n.wave.add(e.en.id[d]))}W(e,`wave`)}if(n.eliteNext<r.eliteAt.length&&o>=r.eliteAt[n.eliteNext]&&!c){n.eliteNext++;let t=J(i.mid+(e.rng()*2-1)*r.eliteYk*i.h,i.top+18,i.floor-18);mx(e,4,a+r.eliteX,t)}}function mx(e,t,n,r,i={}){let a=e.en,o=Jh(a);if(o<0)return-1;let s=hS[t],c=K.enHp,l=e.t;return a.k[o]=t,a.x[o]=n,a.y[o]=r,a.hp[o]=a.maxHp[o]=s.hp*c.k*(1+l/c.a+l/c.b*(l/c.b)),a.r[o]=s.r,a.cr[o]=K.contactR(s.r),a.sr[o]=s.sep,a.dmg[o]=s.dmg,a.xp[o]=s.xp,a.spd[o]=s.spd,a.ph[o]=e.rng()*mS,a.spawn[o]=0,a.riser[o]=+!!i.riser,a.flip[o]=i.flip??(t===3&&e.rngFx()<.5)?1:0,a.passed[o]=-1,a.burn[o]=-1,a.brood[o]=+!!i.brood,o}function hx(e,t){let n=e.en,r=e.p,i=e.L,a=K.law,o=K.spawn,s=1+e.t/K.enSpeedT,c=Fg(a.ease,t),l=Fg(a.groundEase,t),u=e.wt,d=OS(e);for(let f=0;f<n.n;f++){if(n.flash[f]>0&&(n.flash[f]=Math.max(0,n.flash[f]-t)),n.hp[f]<=0){n.burn[f]>=0&&(n.burn[f]+=t);continue}if(n.spawn[f]<0){let r=n.spawn[f];n.spawn[f]+=o.emerge*t,r<0&&n.spawn[f]>=0&&n.riser[f]&&(ig(e,n.x[f],i.gY,4,[`W1`],46,.5,150),og(e,kg.splash,n.x[f],i.gY,.25));continue}if(n.spawn[f]<1&&(n.spawn[f]=Math.min(1,n.spawn[f]+o.emerge*t)),n.slow[f]>0&&(n.slow[f]=Math.max(0,n.slow[f]-t)),n.passed[f]>=0){n.passed[f]+=t,n.x[f]-=e.V*t,n.passed[f]>=K.passFade&&yx(e,f,`passed`);continue}let p=r.x-n.x[f],m=r.y-n.y[f],h=Math.hypot(p,m)||1,g=n.spd[f]*s*(n.slow[f]>0?K.slowK:1),_=p/h*g,v=m/h*g;if(!d.wave.has(n.id[f])){let e=n.ph[f];_+=a.swayX*Math.cos(a.swayFx*u+a.swayPh*e),v+=a.swayY*Math.sin(a.swayFy*u+e)}let y=eb(e,n.x[f],n.y[f]);if(y){let e=y.x-n.x[f],t=y.y-n.y[f],r=Math.hypot(e,t)||1;_=e/r*g*a.decoyK,v=t/r*g*a.decoyK}if(n.vx[f]+=(_-n.vx[f])*c,n.vy[f]+=(v-n.vy[f])*c,n.x[f]+=n.vx[f]*t,n.y[f]+=n.vy[f]*t,n.x[f]-r.x>a.farAhead&&(n.x[f]-=a.farCarry*e.V*t),n.x[f]>r.x){let e=a.funnelA+a.funnelB*(n.x[f]-r.x);n.y[f]+=(J(n.y[f],r.y-e,r.y+e)-n.y[f])*c}let b=i.gY-ES[n.k[f]];n.spawn[f]>a.groundAfter&&n.y[f]>b&&(n.y[f]+=(b-n.y[f])*l,n.vy[f]>0&&(n.vy[f]*=Math.exp(-6*t))),n.y[f]=J(n.y[f],i.top-6,i.gY+24),n.x[f]<r.x-K.passedPx&&(n.passed[f]=0)}}function gx(e,t){let n=e.en,r=Math.min(1,K.law.sepRate*t)*.5,i=K.law.sepMaxN,a=e=>n.hp[e]>0&&n.spawn[e]>=0&&n.passed[e]<0&&n.burn[e]<0;for(let t=0;t<n.n;t++){if(!a(t))continue;let o=n.sr[t],s=0;Vv(e,n.x[t],n.y[t],o,e=>{if(e<=t||!a(e))return;let c=n.x[e]-n.x[t],l=n.y[e]-n.y[t],u=o+n.sr[e],d=c*c+l*l;if(d>=u*u)return;let f=Math.sqrt(d),p=f>1e-4?c/f:0,m=f>1e-4?l/f:1,h=(u-f)*r;if(n.x[t]-=p*h,n.y[t]-=m*h,n.x[e]+=p*h,n.y[e]+=m*h,++s>=i)return!0})}}function _x(e){let t=e.p;if(!t.alive||e.phase!==`play`)return;let n=e.en,r=K.contact;Vv(e,t.x,t.y,4,i=>{if(!kS(e,i)||n.spawn[i]<.5)return;let a=n.x[i]-t.x,o=n.y[i]-t.y,s=a*a+o*o;if(!(s>=n.cr[i]*n.cr[i])&&(e.run.ultT>0?vx(e,i,r.odDmg,`contact`,{star:!1}):t.iframes<=0&&vC(e,n.dmg[i],n.x[i],n.y[i])&&og(e,kg.contact,(t.x+n.x[i])/2,(t.y+n.y[i])/2,.25),n.hp[i]>0)){let e=Math.sqrt(s)||1;n.vx[i]+=r.pushX+r.pushXd*a/e,n.vy[i]+=r.pushYd*o/e}})}function vx(e,t,n,r,i={}){let a=e.en;return t<0||t>=a.n||!kS(e,t)||a.spawn[t]<0?!1:(a.hp[t]-=n,a.flash[t]=2/60,i.slow&&(a.slow[t]=Math.max(a.slow[t],i.slow)),i.knockX&&(a.vx[t]+=i.knockX),i.knockY&&(a.vy[t]+=i.knockY),zy(e,n*K.ult.dmgK),(i.star??!!MS[r])&&og(e,kg.hitStar,i.x??a.x[t],i.y??a.y[t],.2),a.hp[t]<=0&&(yx(e,t,r),!0))}function yx(e,t,n){let r=e.en;if(t<0||t>=r.n||r.burn[t]>=0)return;let i=r.k[t],a=r.x[t],o=r.y[t];if(r.hp[t]=Math.min(r.hp[t],0)-.001,OS(e).wave.delete(r.id[t]),n===`passed`){r.burn[t]=vS;return}if(r.burn[t]=0,ig(e,a,o,CS[i],[`N1`,`N2`],60,.7,200),ig(e,a,o-2,i>=2?6:3,[`S6`,`E1`],24,.55,-40),n===`burn`)return;e.run.kills++,e.stats.kills++,zy(e,K.ult.kill),ig(e,a,o,6,[`W1`,`K8`,`D4`],40,.42),og(e,kg.hitStar,a,o,.2);let s=K.heart;Xy(e,a,o,r.xp[t],r.xp[t]>=4),i===4?($y(e,a,o),Qy(e,a+s.eliteAhead,o)):i===2&&e.rng()<s.errP&&Qy(e,a+s.errAhead,o);let c=OS(e);e.stepT-c.killSfx>=xS&&(c.killSfx=e.stepT,W(e,`kill`))}function bx(e){let t=e.en;for(let n=t.n-1;n>=0;n--)t.hp[n]>0||t.burn[n]>=0&&t.burn[n]<vS||(OS(e)?.wave.delete(t.id[n]),Yh(t,n))}function xx(e,t,n,r,i,a,o,s,c=5){let l=e.bu,u=Jh(l);if(u<0){let e=-1;for(let t=0;t<l.n;t++)l.fade[t]<0&&l.age[t]>e&&(e=l.age[t],u=t);if(u<0)return-1;l.age[u]=0,l.a[u]=0,l.b[u]=0}return l.kind[u]=t,l.x[u]=n,l.y[u]=r,l.vx[u]=i,l.vy[u]=a,l.r[u]=o,l.dmg[u]=s,l.life[u]=c,l.fade[u]=-1,l.seed[u]=Math.floor(e.rngFx()*997),u}function Sx(e,t){let n=e.bu,r=e.p,i=e.dev.W,a=e.L.gY,o=K.move.hurtR,s=r.alive&&e.phase===`play`;for(let c=n.n-1;c>=0;c--){if(n.fade[c]>=0){n.fade[c]+=t,n.fade[c]>=yS&&Yh(n,c);continue}n.age[c]+=t,n.x[c]+=n.vx[c]*t,n.y[c]+=n.vy[c]*t;let l=n.x[c],u=n.y[c];if(n.age[c]>=n.life[c]||l<-14||l>i+14||u>a+1||u<-30){n.kind[c]===1&&u>a+1&&l>-4&&l<i+4&&og(e,kg.splash,l,a,.25),Yh(n,c);continue}if(!s)continue;let d=l-r.x,f=u-r.y,p=n.r[c]+o;if(d*d+f*f<p*p){let t=n.dmg[c];Yh(n,c),vC(e,t,l,u)}}}function Cx(e,t,n){let r=e.L,i=e.boss.strikes;i.length>=16||i.push({x:J(t,4,e.dev.W-4),y:J(n,r.top+2,r.floor),t:$.omen,age:-1,dmg:$.strikeDmg,r:$.strikeR,hit:!1,seed:Math.floor(e.rngFx()*997)})}function wx(e,t){let n=e.boss.strikes,r=e.p;for(let i of n)i.hit?i.age+=t:(i.t-=t,i.t<=0&&(i.hit=!0,i.age=0,r.alive&&e.phase===`play`&&Math.hypot(r.x-i.x,r.y-i.y)<i.r&&vC(e,i.dmg,i.x,i.y),ig(e,i.x,i.y,8,[`S6`,`P5`,`W1`],70,.45,60),lx(e),W(e,`thunder`)));ag(n,e=>!e.hit||e.age<bS)}function Tx(e,t,n,r){let i=e.bu,a=0;for(let o=0;o<i.n;o++){if(i.fade[o]>=0)continue;let s=i.x[o]-t,c=i.y[o]-n,l=r+i.r[o];s*s+c*c>l*l||(i.fade[o]=0,i.vx[o]=i.vy[o]=0,ig(e,i.x[o],i.y[o],3,[`W1`],30,.3),a++)}let o=e.boss.strikes.length;return ag(e.boss.strikes,e=>e.hit||Math.hypot(e.x-t,e.y-n)>r),a+o-e.boss.strikes.length}function Ex(e){let t=e.bu;for(let n=0;n<t.n;n++)t.fade[n]<0&&(t.fade[n]=0,t.vx[n]=t.vy[n]=0,e.rngFx()<.4&&ig(e,t.x[n],t.y[n],2,[`S6`,`W1`],30,.3));e.boss.strikes=e.boss.strikes.filter(e=>e.hit)}function Dx(e){let t=e.en;for(let n=0;n<t.n;n++)t.hp[n]<=0||(t.passed[n]>=0?yx(e,n,`passed`):yx(e,n,`burn`));Ex(e);let n=OS(e);n&&(n.cleared=!0)}function Ox(e,t){return Mi(NS(t),e.dev.W,AS(e),e.L.hY,e.L.portrait)}function kx(e,t){let n=[];for(let r=0;r<3;r++){if(t!=null&&r!==t)continue;let i=Ox(e,r);n.push([NS(r),i,0]),r===0&&n.push([0,i,.5],[0,i,1])}return n}function Ax(e,t){let n=OS(e);n.warmedFor=t,Qb(kx(e,t))}function jx(e,t){let n=e.boss,r=OS(e);r.warmedFor!==t&&Ax(e,t),n.i=t,n.live=!1,n.t=Math.min(0,e.t-n.nextAt),n.hp=n.max=$.hp[t],n.r=$.hitR[t],n.dieT=-1,n.eyes=0,n.gaze=0,n.ph2=!1,n.ph2T=-1,n.strikes=[],r.lx=0,r.grow=0,r.stage=0,r.stageFrom=-1,r.clock=0,Nx(e,1),W(e,`storm`)}function Mx(e){let t=e.boss,n=OS(e),r=t.i;t.live=!0,t.t=Math.max(0,t.t),t.hp=t.max=$.hp[r],t.r=$.hitR[r];for(let e=0;e<5;e++)t.cd[e]=$.firstCd[e];t.eyes=0,t.gaze=0,t.ph2=!1,t.ph2T=-1,t.spin=0,t.spiralT=0,t.dieT=-1,t.struckT=-1,t.barK=1,t.barV=0,t.spawnT[r]=e.t,t.strikes=[],n.gazeHold=0,n.maelAcc=0,rg(e,$.names[r],`nightmare`,$.banner),W(e,`boss`),tg(e,$.boltAt,`world`,e=>{e.boss.i!==r||!e.boss.live||(ux(e,e.boss.x+.07*e.boss.sigma),W(e,`thunder`))},`boss-bolt`)}function Nx(e,t){let n=e.boss,r=OS(e),i=e.dev.W,a=e.dev.H,o=$.tier[Math.max(0,n.i)],s=$.swayK*Math.sin($.swayF*e.wt+o)+J((e.p.x-i/2)/i*$.pxK,-$.pxCap,$.pxCap);r.lx+=(s-r.lx)*t,n.x=i*$.xK+i*r.lx,n.y=AS(e)+$.yBob*a*Math.sin($.yBobF*e.wt)+$.gazeDip*Math.min(1,n.gaze),n.sigma=Ox(e,n.i)}function Px(e,t){let n=e.boss,r=OS(e);if(r.ghost){let e=r.ghost;e.dieT+=t,e.gaze*=Math.exp(-2.2*t),e.dieT>$.death.eyesOut&&(e.eyes=Math.max(0,e.eyes-t/.45)),e.dieT>$.death.thin+.1&&(r.ghost=null)}if(r.stormOut>=0&&(r.stormOut+=t,r.stormOut>$.death.thin+$.death.stormClear&&(r.stormOut=-1)),n.i<0)return;if(!n.live){n.t+=t,Nx(e,Fg(.8,t)),n.t>=0&&e.phase===`play`&&Mx(e);return}let i=n.i;if(n.t+=t,i===2&&!n.ph2&&n.hp<n.max*$.ph2At&&Fx(e),n.ph2&&(n.ph2T+=t),r.gazeHold>0?(r.gazeHold-=t,n.gaze=Math.max(n.gaze,Math.min(1,n.gaze+t/.4))):n.gaze*=Math.exp(-2.2*t),n.t>=$.eyesAt&&(n.eyes=Math.min(1,n.eyes+t/.35)),n.struckT>=0&&(n.struckT+=t),r.clock+=t*(n.ph2?4:1),i===0){r.grow+=(1-n.hp/n.max-r.grow)*Fg(1.5,t);let e=r.grow<.25?0:r.grow<.75?.5:1;e!==r.stage&&(r.stageFrom=r.stage,r.stage=e,r.stageT=0)}r.stageFrom>=0&&(r.stageT+=t,r.stageT>=.36&&(r.stageFrom=-1)),Nx(e,Fg(.8,t)),!(n.t<$.attacksAt||e.phase!==`play`)&&Ix(e,t)}function Fx(e){let t=e.boss;t.ph2=!0,t.ph2T=0,W(e,`boss`),t.gaze=Math.max(t.gaze,1),OS(e).gazeHold=Math.max(OS(e).gazeHold,.6),ux(e,t.x-.3*t.sigma*.5),tg(e,.2,`world`,e=>e.boss.live&&ux(e,e.boss.x+.32*e.boss.sigma*.5),`ph2-bolt`),t.cd[3]=Math.min(t.cd[3],1.2)}function Ix(e,t){let n=e.boss,r=OS(e),i=n.i,a=n.ph2,o=e.p,s=jS(e);for(let e=0;e<5;e++)n.cd[e]-=t;if(n.cd[0]<=0){let t=$.gaze[i];n.cd[0]=a&&t.everyPh2?t.everyPh2:t.every,r.gazeHold=_S+t.pairs*$.gazeGap+.2,W(e,`gaze`);for(let n=0;n<t.pairs;n++)for(let r=0;r<2;r++)tg(e,_S+n*$.gazeGap+r*$.gazeEye2,`world`,e=>{let n=e.boss;if(!n.live||n.i!==i)return;let a=Qi(n.x,n.y,n.sigma)[r],o=e.p,s=o.x+o.vx*$.gazeLead+(e.rng()*2-1)*$.gazeJit,c=o.y+o.vy*$.gazeLead+(e.rng()*2-1)*$.gazeJit,l=s-a[0],u=c-a[1],d=Math.hypot(l,u)||1,f=t.spd*jS(e);xx(e,0,a[0],a[1],l/d*f,u/d*f,$.gazeR,t.dmg)},`gaze`)}if(n.cd[1]<=0){if(i===0){let t=$.walkIn;n.cd[1]=t.every;let r=e.rng()*mS,a=o.x+Math.cos(r)*t.rx,s=o.y+Math.sin(r)*t.ry;for(let n=0;n<t.n;n++)tg(e,n*t.gap,`world`,e=>{if(!e.boss.live||e.boss.i!==i)return;let r=n/(t.n-1);Cx(e,a+(e.p.x-a)*r,s+(e.p.y-s)*r)},`strike`)}else if(i===1){let t=$.hunt;n.cd[1]=t.every;for(let n=0;n<t.n;n++)tg(e,n*t.gap,`world`,e=>{!e.boss.live||e.boss.i!==i||Cx(e,e.p.x+e.p.vx*t.lead,e.p.y+e.p.vy*t.lead)},`strike`)}else{let t=$.clockHand;if(n.cd[1]=a?t.everyPh2:t.every,a&&e.rng()<$.hour.p){let t=$.hour,n=Math.floor(e.rng()*t.of),r=o.x,a=o.y;for(let o=0;o<t.of;o++)o!==n&&tg(e,o*t.gap,`world`,e=>{e.boss.live&&e.boss.i===i&&Cx(e,r+Math.cos(o/t.of*mS)*t.rx,a+Math.sin(o/t.of*mS)*t.ry)},`strike`);tg(e,t.centre,`world`,e=>e.boss.live&&e.boss.i===i&&Cx(e,r,a),`strike`)}else{let n=Lx(r.clock),a=Math.sin(n),o=-Math.cos(n);for(let n=-t.k;n<=t.k;n++)tg(e,Math.abs(n)*t.gap,`world`,e=>{e.boss.live&&e.boss.i===i&&Cx(e,e.p.x+a*n*t.sx,e.p.y+o*n*t.sy)},`strike`)}}}let c=$.rain;if(c.curtains[i]>0&&n.cd[2]<=0){n.cd[2]=a?c.everyPh2:c.every[i];let t=[o.x+(e.rng()-.5)*2*c.gapR];i===2&&t.push(t[0]+(e.rng()<.5?-1:1)*(c.gap2Min+e.rng()*(c.gap2Max-c.gap2Min))),W(e,`rain`);for(let n=0;n<c.curtains[i];n++)tg(e,n*c.gap,`world`,e=>{if(!e.boss.live||e.boss.i!==i)return;let r=n%2*c.alt,a=e.L.top+c.top;for(let n=-c.cols;n<=c.cols;n++){let o=e.p.x+n*c.dx+r+(e.rng()-.5)*3;if(t.some(e=>Math.abs(o-e)<c.gapHalf)||o<1||o>e.dev.W-1)continue;let s=a-e.rng()*6,l=c.Tmin+e.rng()*(c.Tmax-c.Tmin);xx(e,1,o,s,0,(e.p.y+(e.rng()*2-1)*c.reach-s)/l,c.r,c.dmg[i],8)}},`rain`)}if(i===2&&a){let i=$.mael;if(n.cd[3]<=0&&(n.cd[3]=i.every,n.spiralT=i.dur,r.maelAcc=0,n.gaze=Math.max(n.gaze,1),r.gazeHold=Math.max(r.gazeHold,i.dur)),n.spiralT>0)for(n.spiralT-=t,n.spin+=t*i.spin,r.maelAcc+=t;r.maelAcc>=i.step;){r.maelAcc-=i.step;let t=o.x-n.x,a=o.y-n.y,c=Math.hypot(t,a)||1;for(let r=0;r<i.n;r++){let o=n.spin+r/i.n*mS,l=t/c+Math.cos(o)*i.mix,u=a/c+Math.sin(o)*i.mix*i.ys,d=Math.hypot(l,u)||1;l=l/d*i.spd*s,u=u/d*i.spd*s,xx(e,2,n.x,n.y+4,l,u,2.5,i.dmg)}}}let l=$.brood;if(n.cd[4]<=0){n.cd[4]=a?l.everyPh2:l.every[i];let t=l.n[i],r=e.L,s=Math.max(n.x+l.dx,o.x+18),c=o.x+18>n.x+l.dx,u=[];for(let n=0;n<t;n++){let a;if(!c)a=J(o.y+(n-(t-1)/2)*l.dy,r.top+8,r.floor-6);else{let e=(n%2?1:-1)*(40+30*Math.floor(n/2));if(a=J(o.y+e,r.top+8,r.floor-6),Math.abs(a-o.y)<24&&(a=J(o.y-e,r.top+8,r.floor-6)),Math.abs(a-o.y)<24||u.some(e=>Math.abs(e-a)<12))continue}u.push(a);let d=mx(e,l.kind[i],s+(e.rng()-.5)*6,a,{brood:!0});d>=0&&(e.en.spawn[d]=0)}}}function Lx(e){return(Math.floor(e)+Mg(0,.14,e%1))*(mS/60)}function Rx(e,t,n,r,i){if(!dg[n])return!1;let a=e.boss;if(!a.live||a.dieT>=0||a.t<$.hittable||a.hp<=0)return!1;a.hp-=t,zy(e,t*K.ult.dmgKBoss);let o=OS(e);if(e.stepT-o.struckAt>SS){o.struckAt=e.stepT,a.struckT=0;let t=r??a.x+(e.rngFx()-.5)*24,n=i??a.y+(e.rngFx()-.5)*16;ig(e,t,n,6,[`W1`,`K8`,`C1`],60,.4),og(e,kg.ring,t,n,.32,2,12),og(e,kg.hitStar,t,n,.2)}return a.hp<=0&&Bx(e),!0}function zx(e,t){let n=e.boss;if(n.live)for(let e=0;e<5;e++)n.cd[e]+=t*(1-K.slowK)}function Bx(e){let t=e.boss,n=OS(e),r=t.i,i=$.death;t.hp=0,e.stats.bossKill[r]=e.t-(t.spawnT[r]??e.t),n.ghost={kind:NS(r),x:t.x,y:t.y,sigma:t.sigma,grow:n.stage,ph2:t.ph2,clock:n.clock,dieT:0,eyes:Math.max(t.eyes,1),gaze:1.4};let a=t.x,o=t.y,s=t.sigma;t.live=!1,t.i=-1,t.dieT=-1,t.down++,t.downT=e.t,t.next=r+1,t.nextAt=t.next<3?Math.max($.at[t.next],e.t+K.timeline.nextGap):1/0,n.stormOut=0,n.gazeHold=0,Ex(e),ig(e,a,o,40,[`S6`,`S5`,`W1`,`E1`],110,.9),ux(e,a-.1*s),tg(e,.25,`world`,e=>ux(e,a+.12*s),`die-bolt`),tg(e,.6,`world`,e=>ux(e,a+.03*s),`die-bolt`),W(e,`thunder`),W(e,`bossDown`),lg(e,i.hitStop,i.hitStopK),tg(e,i.rewards,`world`,e=>{let t=K.bossReward,n=e.L;for(let r=0;r<t.shards;r++)Xy(e,e.p.x+t.xMin+e.rng()*(t.xMax-t.xMin),J(e.p.y+(e.rng()-.5)*2*t.dy,n.top+6,n.floor-6),t.value,!0);Qy(e,e.p.x+K.heart.bossAhead,J(e.p.y,n.top+6,n.floor-6))},`boss-reward`),tg(e,i.memory,`world`,e=>Ux(e,r,a,o),`memory`),r===2&&(Dx(e),xC(e))}function Vx(e){let t=e.boss,n=160*((t.live?Math.max(0,t.hp)/Math.max(1,t.max):0)-t.barK)-24*t.barV;t.barV+=n*G,t.barK=J(t.barK+t.barV*G,0,1)}function Hx(e){let t=e.boss;return t.live&&t.i>=0?{name:K.boss.names[t.i],k:t.barK}:null}function Ux(e,t,n,r){if(e.mem.won[t]||e.mem.gifts.some(e=>e.i===t))return;let i=e.mem.gifts.filter(e=>!e.landed).length*.5;e.mem.gifts.push({i:t,t:-i,x0:n,y0:r,x:n,y:r,landed:!1}),t<2&&e.mem.doors.push({i:t,d:e.D+K.memory.doorAfterU,x:e.dev.W+40,y:e.L.mid,t:-1,near:!1})}function Wx(e,t){t.landed=!0,e.mem.won[t.i]=!0,e.mem.keeps.push({i:t.i,x:t.x,y:t.y,vx:0,vy:0,ph:e.rngFx()*mS}),W(e,`memory`)}function Gx(e,t){let n=K.memory,r=e.mem,i=e.run.choosing?0:t,a=e.sheet.kind===`clear`||e.sheet.kind===`gameover`;for(let t of r.gifts){if(t.landed)continue;let o=t.t;t.t+=i,o<n.rise&&t.t>=n.rise&&W(e,`unlock`);let s=PS(e);if(t.t<0)t.x=t.x0,t.y=t.y0;else if(t.t<n.rise){let e=Ng(t.t/n.rise);t.x=t.x0+(s.x-t.x0)*e,t.y=t.y0+(s.y-t.y0)*e}else if(t.t<n.rise+n.hold)t.x=s.x,t.y=s.y;else{let i=r.keeps.length,a=FS(e,i),o=Pg(J((t.t-n.rise-n.hold)/n.settle,0,1));t.x=s.x+(a.x-s.x)*o,t.y=s.y+(a.y-s.y)*o,t.t>=n.rise+n.hold+n.settle&&Wx(e,t)}a&&!t.landed&&Wx(e,t)}ag(r.gifts,e=>!e.landed);let o=.8;r.keeps.forEach((n,r)=>{let i=FS(e,r),a=36*(i.x-n.x)-2*o*6*n.vx,s=36*(i.y-n.y)-2*o*6*n.vy;n.vx+=a*t,n.vy+=s*t,n.x+=n.vx*t,n.y+=n.vy*t})}function Kx(e,t){let n=e.mem;if(!n.doors.length)return;let r=e.dev.W,i=IS(e),a=e.L;for(let o of n.doors)o.x=Lg(e,o.d),o.y=J(ug(e,o.d),a.top+i.h/2-6,a.floor-i.h/2+6),o.t<0&&o.x-i.w/2<r?o.t=0:o.t>=0&&(o.t+=t),o.near=!1;ag(n.doors,e=>e.x>-i.w);let o=qx(e);o&&(o.near=!0)}function qx(e){let t=null,n=1/0;for(let r of e.mem.doors){if(r.x<10||r.x>e.dev.W-10)continue;let i=Math.abs(r.x-e.p.x);i<n&&(n=i,t=r)}return t}function Jx(e,t){let n=e.boss,r=OS(e),i=e.look,a=$.death,o=0;if(n.i>=0&&(o=n.live?1:J((n.t+K.timeline.stormLead)/K.timeline.stormBuild,0,1)),r.stormOut>=0&&(o=Math.max(o,r.stormOut<a.thin?1:J(1-(r.stormOut-a.thin)/a.stormClear,0,1))),i.storm=o,n.i>=0?(i.bossX=n.x,i.bossY=n.y):r.ghost&&(i.bossX=r.ghost.x,i.bossY=r.ghost.y),o>0){let t=Math.floor(e.wt/2.7),n=t*2.7+LS(t,1,730)*1.3;r.wtPrev<n&&e.wt>=n&&LS(t,5,731)<.5&&W(e,`thunder`)}r.wtPrev=e.wt}function Yx(e){return e|=0,e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),e^=e>>>16,(e>>>0)/4294967296}function Xx(e,t,n,r){let i=e.en,a=e.L.gY;for(let e=0;e<i.n;e++){let o=i.riser[e]&&(i.spawn[e]<1||i.y[e]+ES[i.k[e]]>a-2);i.x[e]=t(i.x[e]),i.y[e]=o?r(i.y[e]):n(i.y[e])}e.bu.n=0,e.boss.strikes=[];for(let r of e.mem.keeps)r.x=t(r.x),r.y=n(r.y);for(let r of e.mem.gifts)r.x0=t(r.x0),r.y0=n(r.y0),r.x=t(r.x),r.y=n(r.y);let o=OS(e);o?.ghost&&(o.ghost.x=t(o.ghost.x),o.ghost.y=AS(e),o.ghost.sigma=Ox(e,o.ghost.kind)),e.boss.i>=0&&Nx(e,1)}function Zx(e,t){if(!zS){let e=document.createElement(`canvas`);zS={c:e,g:e.getContext(`2d`)}}return(zS.c.width!==e||zS.c.height!==t)&&(zS.c.width=e,zS.c.height=t),zS.g.imageSmoothingEnabled=!1,zS.g.setTransform(1,0,0,1,0,0),zS.g.clearRect(0,0,e,t),zS}function Qx(e,t,n,r,i){if(r<=0)return;if(r>=1)return i(e);let a=Zx(t,n);i(a.g),a.g.setTransform(1,0,0,1,0,0),a.g.globalCompositeOperation=`destination-out`,a.g.fillStyle=$x(a.g,r),a.g.fillRect(0,0,t,n),a.g.globalCompositeOperation=`source-over`,e.drawImage(a.c,0,0)}function $x(e,t){let n=J(Math.ceil(t*16-.5),0,16),r=VS.get(n);if(r)return r;let i=document.createElement(`canvas`);i.width=i.height=4;let a=i.getContext(`2d`);a.fillStyle=`#000`;for(let e=0;e<4;e++)for(let n=0;n<4;n++)N(n,e,t)||a.fillRect(n,e,1,1);return r=e.createPattern(i,`repeat`),VS.set(n,r),r}function eS(e,t,n,r,i){if(!BS){let e=document.createElement(`canvas`);BS={c:e,g:e.getContext(`2d`)}}let a=BS;(a.c.width!==t||a.c.height!==n)&&(a.c.width=t,a.c.height=n);let o=a.g;o.setTransform(1,0,0,1,0,0),o.imageSmoothingEnabled=!1,o.globalCompositeOperation=`source-over`,o.clearRect(0,0,t,n),i(o);let s=Math.ceil(r);s>0&&o.clearRect(0,0,t,Math.min(n,s)),o.globalCompositeOperation=`destination-out`;for(let e=Math.max(0,s);e<r+6&&e<n;e++)o.fillStyle=$x(o,(e-r+1)/7),o.fillRect(0,e,t,1);o.globalCompositeOperation=`source-over`,e.drawImage(a.c,0,0)}function tS(e,t,n){let r=OS(t);if(!r)return;let i=RS(n),a=t.L.hudT+6,o=t.dev.W,s=t.dev.H,c=r.ghost;c&&eS(e,o,s,a,e=>Ri(e,c.kind,pS(c.x),pS(c.y),c.sigma,{t:t.wt,grow:c.grow,eyes:c.eyes,gaze:c.gaze,die:Math.min(1,c.dieT/$.death.thin),phase2:c.ph2,clock:Lx(c.clock)/mS%1,pal:i}));let l=t.boss;if(l.i<0||!l.live)return;let u=NS(l.i),d={t:t.wt,eyes:l.eyes,gaze:l.gaze,reveal:Math.min(1,l.t/$.condense),struck:l.struckT>=0&&l.struckT<2/60,phase2:l.ph2||l.ph2T>=0&&l.ph2T<2/60,clock:Lx(r.clock)/mS%1,pal:i},f=pS(l.x),p=pS(l.y);if(u===0&&r.stageFrom>=0){let t=r.stageT<.12?.25:r.stageT<.24?.5:.75;eS(e,o,s,a,e=>{Ri(e,u,f,p,l.sigma,{...d,grow:r.stageFrom}),Qx(e,o,s,t,e=>Ri(e,u,f,p,l.sigma,{...d,grow:r.stage}))})}else eS(e,o,s,a,e=>Ri(e,u,f,p,l.sigma,{...d,grow:u===0?r.stage:0}))}function nS(e,t,n){if(!t.mem.doors.length)return;let r=IS(t);for(let i of t.mem.doors)i.x+r.w/2<0||i.x-r.w/2>t.dev.W||iS(e,t,i,r,n)}function rS(e){let t=0;for(let n=0;n<HS.blocks.length;n++)if(t+=HS.hold[n],e<t)return HS.blocks[n];return 1}function iS(e,t,n,r,i){let a=i.pal,o=e=>V(a,e),s=pS(n.x-r.w/2),c=pS(n.y-r.h/2),{w:l,h:u,pw:d,ph:f}=r;US||={a:document.createElement(`canvas`),b:document.createElement(`canvas`),c:document.createElement(`canvas`)};let p=US.a;p.width=d,p.height=f;let m=p.getContext(`2d`);m.imageSmoothingEnabled=!1;for(let e=0;e<f;e++){let t=e/f;for(let n=0;n<d;n++)m.fillStyle=o(t<.55?N(n,e,.5+t)?`K2`:`K1`:N(n,e,(t-.55)*2)?`M1`:`K2`),m.fillRect(n,e,1,1)}Ko(m,n.i,24,pS(d/2),pS(f/2),t.wt,!0,a);let h=rS(Math.max(0,n.t)),g=p;if(h>1){let e=US.b;e.width=Math.ceil(d/h),e.height=Math.ceil(f/h);let t=e.getContext(`2d`);t.imageSmoothingEnabled=!1,t.drawImage(p,0,0,d,f,0,0,e.width,e.height);let n=US.c;n.width=d,n.height=f;let r=n.getContext(`2d`);r.imageSmoothingEnabled=!1,r.drawImage(e,0,0,e.width,e.height,0,0,e.width*h,e.height*h),g=n}let _=Math.floor(t.wt*8)/8,v=s+pS((l-d)/2),y=c+(u-f)-3,b=d/2;for(let t=0;t<f;t++){let n=0,r=d;if(t<b){let e=b-t-.5,i=Math.sqrt(Math.max(0,b*b-e*e));n=pS(b-i),r=pS(b+i)}if(r<=n)continue;let i=pS(Math.sin(.5*t+2*_));e.drawImage(g,n,t,r-n,1,v+n+i,y+t,r-n,1)}let x=l/2,S=(e,t)=>{if(e<0||e>=l||t<0||t>=u)return!1;if(t<x){let n=e+.5-x,r=x-t-.5;return n*n+r*r<=x*x}return!0},C=(e,t)=>{let n=e-(v-s),r=t-(y-c);if(n<0||n>=d||r<0||r>=f)return!1;if(r<b){let e=n+.5-b,t=b-r-.5;return e*e+t*t<=b*b}return!0},w=(e,t)=>S(e,t)&&!C(e,t)&&!(e>l-12&&t<14&&wo(e*7+n.i,t*3)<.55+(t<6?.3:0));for(let t=0;t<u;t++)for(let n=0;n<l;n++){if(!w(n,t))continue;let r=!w(n,t-1),i=!w(n-1,t),a=!w(n+1,t),l=!w(n,t+1),u=r||i?`M3`:a||l||(n+t*3)%7==0?`N1`:`M1`;z(e,s+n,c+t,o(u))}for(let[t,n]of[[3,u+2],[l-8,u+3],[l/2-2,u+5]])So(e,pS(s+t),pS(c+n),3,2,o(`N1`))}function aS(e,t,n){let r=t.en,i=K.spawn,a=t.dev.W;for(let o=0;o<r.n;o++)if(!(r.spawn[o]>=0||r.hp[o]<=0)){if(r.riser[o]){let s=1+r.spawn[o]/(i.rippleLead*i.emerge);if(r.x[o]>a+12)continue;ql(e,pS(r.x[o]),t.L.gY,pS(4+8*s),n.pal,s>.7)}else{let i=pS(J(r.y[o],t.L.top+3,t.L.floor-3)),s=Math.floor(t.stepT*8)%2==1,c=V(n.pal,`E0`),l=a-4;for(let[t,n]of[[2,-2],[1,-1],[2,-1],[0,0],[1,0],[2,0],[1,1],[2,1],[2,2]])s&&!N(l+t,i+n,.5)||z(e,l+t,i+n,c)}}}function oS(e,t,n){let r=t.en;if(!r.n)return;let i=t.wt,a=t.L.gY,o={x:t.p.x,y:t.p.y},s=n.pn;for(let n of wS)for(let c=0;c<r.n;c++){if(r.k[c]!==n||r.spawn[c]<0)continue;let l=r.burn[c]>=0;if(r.hp[c]<=0&&(!l||r.burn[c]>=vS))continue;let u=pS(r.x[c]),d=pS(r.y[c]),f=r.ph[c],p=r.slow[c]>0,m=TS[n],h=p?i*.5:i,g={t:h,phase:f,flip:!!r.flip[c],cache:!0};if(g.pal=r.brood[c]?`stormMatter`:p&&s===`base`?`slowed`:s,n!==2&&n!==3){let e=eb(t,r.x[c],r.y[c]);g.look=au({x:u,y:d},e??o)}if(n<=1){let e=3+2*(f*.618%1),t=(i+f*1.7)%e;t<2/12&&(g.blink=t<1/12?1:2)}if(l){let e=r.burn[c]/vS;g.cover=e<.25?.75:e<.5?.5:.25,g.flash=e<.34?1:void 0}else if(r.passed[c]>=0){let e=r.passed[c]/K.passFade;g.cover=e<.33?.75:e<.66?.5:.25}else if(r.spawn[c]<1){let e=Math.floor(r.spawn[c]*4);g.cover=(e+1)/4,e===0&&(g.tint=`M3`)}r.flash[c]>0&&!l&&(g.flash=1),r.riser[c]&&d+ES[n]+2>a&&(g.clipY=a+1);let _=Gi(m,h,f);Xi(e,m,_,u,pS(r.y[c]+DS[n]),g),l&&Xi(e,m,_,u,pS(r.y[c]+DS[n]),{...g,cover:.25,tint:r.burn[c]<vS/2?`S6`:`E1`,flash:void 0})}}function sS(e,t,n){let r=t.mem,i=n.pal,a=t.wt,o=t.p,s=K.move,c=s.bobA*Math.sin(s.bobF*a)+s.bobB*Math.sin(s.bobG*a+s.bobP),l=pS(o.x),u=pS(o.y+c);o.alive&&r.keeps.forEach((t,n)=>{let r=pS(t.x)+pS(Math.sin(a*1.3+n*2.1)),o=pS(t.y)+pS(.8*Math.sin(a*1.7+n)+.5*Math.sin(a*.61+n*3));Kl(e,{x:r,y:o+4},{x:l-1,y:u},a+n*.3,i),Ko(e,t.i,7,r,o,a+n*.31,!0,i)});let d=K.memory;for(let t of r.gifts){if(t.landed||t.t<0)continue;let n=pS(t.x),r=pS(t.y);if(t.t<d.rise){let o=t.t/d.rise;if(o<.16)z(e,n,r,V(i,`W0`));else if(o<.32){z(e,n,r,V(i,`W0`));for(let[t,a]of[[1,0],[-1,0],[0,1],[0,-1]])z(e,n+t,r+a,V(i,`L0`))}else if(o<.5)Ko(e,t.i,7,n,r,a,!0,i,o<.38?.25:o<.44?.5:.75);else if(o<.62)Ko(e,t.i,7,n,r,a,!0,i);else if(o<.8){let s=o<.68?.25:o<.74?.5:.75;Ko(e,t.i,7,n,r,a,!0,i,1-s),Ko(e,t.i,12,n,r,a,!0,i,s)}else Ko(e,t.i,12,n,r,a,!0,i)}else if(t.t<d.rise+d.hold)Ko(e,t.i,12,n,r,a,!0,i);else{let o=(t.t-d.rise-d.hold)/d.settle;if(o<.3)Ko(e,t.i,12,n,r,a,!0,i);else if(o<.6){let s=o<.4?.25:o<.5?.5:.75;Ko(e,t.i,12,n,r,a,!0,i,1-s),Ko(e,t.i,7,n,r,a,!0,i,s)}else Ko(e,t.i,7,n,r,a,!0,i)}}}function cS(e,t,n){let r=n.pal;for(let n of t.boss.strikes)if(!n.hit)Jo(e,n.x,n.y,J(1-n.t/$.omen,0,1),r,n.seed);else{let t=Math.floor(n.age*60);t<=3&&Yo(e,pS(n.x+(n.seed%7-3)),0,pS(n.x),pS(n.y),t,r,n.seed)}let i=t.bu;for(let t=0;t<i.n;t++){let n=i.x[t],a=i.y[t],o=i.fade[t];if(o>=0&&(Math.floor(o*60)%2==1||o>yS*.66))continue;let s=i.age[t];switch(i.kind[t]){case 0:qo(e,n,a,i.vx[t]||1,i.vy[t],Math.floor(s*12)%3,!0,r,i.seed[t]);break;case 1:{let o=Math.min(1,s/.3);Zo(e,n,a,Math.floor(s*10+i.seed[t])%2,r,o<.25?.25:o<.5?.5:o<.75?.75:1);break}default:Qo(e,n,a,Math.floor(s*10)%2,r)}}}function lS(e,t,n){let r=K.memory;for(let i of t.mem.gifts){if(i.landed||i.t<r.rise)continue;let a=i.t-r.rise,o=1;if(a<.15)o=a<.05?.25:a<.1?.5:.75;else if(a>r.hold){let e=a-r.hold;if(e>=.15)continue;o=e<.05?.75:e<.1?.5:.25}let s=t.dev.kind===`ph`&&t.L.portrait?zn.NIGHT7:zn.NIGHT9,c=(gh.works[i.i]?.title??``).toUpperCase(),l=ht(s,c),u=pS(t.dev.W/2-l/2),d=pS(i.y+10+6),f=t.dev.W,p=t.dev.H;Qx(e,f,p,o,e=>{gt(e,s,c,u,d+1,V(n.pal,`K0`)),gt(e,s,c,u+1,d+1,V(n.pal,`K0`)),gt(e,s,c,u,d,V(n.pal,`W0`))})}}function uS(e,t){let n=e.boss,r=OS(e);t=J(Math.floor(t),0,2),n.next=t,n.nextAt=e.t,e.gameIn=0;for(let[n,r,i]of kx(e,t))Ai(n,r,i);r.warmedFor=t,jx(e,t),n.t=0,Mx(e)}function dS(e){let t=e.en;for(let n=0;n<t.n;n++)kS(e,n)&&t.spawn[n]>=0&&yx(e,n,`token`)}function fS(e,t){if(t=J(Math.floor(t),0,2),e.mem.won[t]||e.mem.gifts.some(e=>e.i===t))return;let n=e.boss;n.i===t&&(n.live=!1,n.i=-1,OS(e).stormOut=0),n.next<=t&&(n.next=t+1,n.nextAt=n.next<3?Math.max($.at[n.next],e.t+K.timeline.nextGap):1/0),Ux(e,t,e.dev.W*$.xK,AS(e)),[0,1,2].every(t=>e.mem.won[t]||e.mem.gifts.some(e=>e.i===t))&&e.phase===`play`&&(Dx(e),xC(e))}var pS,mS,hS,$,gS,_S,vS,yS,bS,xS,SS,CS,wS,TS,ES,DS,OS,kS,AS,jS,MS,NS,PS,FS,IS,LS,RS,zS,BS,VS,HS,US,WS,GS=o(()=>{Bg(),ou(),ey(),XC(),Kb(),xo(),ox(),Pc(),qn(),Ot(),Kh(),pS=Math.round,mS=Math.PI*2,hS=K.EK,$=K.boss,gS={land:.42,port:.33},_S=.5,vS=.3,yS=.15,bS=.35,xS=.07,SS=.14,CS=[6,4,14,8,28],wS=[4,2,3,0,1],TS=[`glitch.hover`,`bug.hover`,`error.creep`,`spam.idle`,`elite.idle`],ES=[7.5,6.5,17,12,18],DS=TS.map(e=>{let t=so[e];return t?t.oy-(t.h-1)/2:0}),OS=e=>e.priv.foes,kS=(e,t)=>e.en.hp[t]>0&&e.en.burn[t]<0&&e.en.passed[t]<0,AS=e=>pS(e.dev.H*(e.L.portrait?gS.port:gS.land)),jS=e=>e.dev.W<$.narrowW?$.bulletNarrow:1,MS={token:!0,seekToken:!0,autoToken:!0,turretShot:!0,odToken:!0},NS=e=>J(e,0,2),PS=e=>({x:e.dev.W/2,y:e.L.hudT+K.memory.giftDy}),FS=(e,t)=>({x:e.p.x+iu.x-iu.dx*t,y:e.p.y+iu.y+iu.dy*t}),IS=e=>e.dev.kind===`ph`&&e.L.portrait?{w:38,h:56,pw:30,ph:44}:{w:44,h:64,pw:36,ph:52},LS=(e,t,n=0)=>Yx(Math.imul(e|0,2654435761)+Math.imul(t|0,2246822519)+Math.imul(n|0,3266489917)+668265263),RS=e=>e.pn===`base`?void 0:e.pn,zS=null,BS=null,VS=/* @__PURE__ */ new Map,HS=K.mosaic,US=null,WS=(e,t,n,r,i)=>eS(e,t,n,r,i)}),KS={};s(KS,{beginClear:()=>xC,beginDeath:()=>bC,closeSheet:()=>sC,exitBegin:()=>MC,exitStep:()=>NC,firstRules:()=>PC,healPlayer:()=>yC,hurtPlayer:()=>vC,layout:()=>YS,loadPersist:()=>OC,newRun:()=>JS,onHidden:()=>FC,onShown:()=>IC,openRulebook:()=>uC,openSheet:()=>oC,resize:()=>LC,sheetAct:()=>rC,sheetOpen:()=>zC,stepGame:()=>ZS,timeScale:()=>XS,toggleSound:()=>kC,touchesPlayer:()=>_C,wonShown:()=>WC});function qS(){return{rbOpenT:0,pmx:-1,pmy:-1,uiT:-1,trailT:99,trailFrom:1,lastHp:-1,xpTo:0,wonPrev:[!1,!1,!1],dragK:0,dragAt:null,bolts:[],clearSfx:!1,readyWas:!1,handBack:null}}function JS(e,t,n=e.seed*1664525+1013904223>>>0){let r=eg(e.dev,t?n:e.seed,e,t);Object.assign(e,r),ny(e),YS(e,!0),e.p.x=e.L.xHome,e.p.y=e.L.mid,e.priv.core=qS(),cx(e),cy(e),Qb(kx(e)),e.p.hp=e.p.maxHp,e.hud.hpTrail=1,RC(e).lastHp=e.p.hp,RC(e).wonPrev=e.mem.won.slice()}function YS(e,t=!1){let n=e.dev.W,r=e.dev.H,i=K.band,a=Vg(n,r),o=il(n,r,e.dev.hud,0,e.boss.live),s=e.L,c=o.hudT;s.hudT=t?c:s.hudT+J(c-s.hudT,-(12/i.hudTEase)*G,12/i.hudTEase*G),s.W=n,s.H=r,s.gY=a.gY,s.hY=a.hY,s.xd=a.xd,s.portrait=a.portrait,s.compact=a.compact,s.top=Math.round(s.hudT)+i.top,s.soft=a.gY-i.soft,s.floor=a.gY-i.hard,s.h=s.floor-s.top,s.mid=Math.round((s.top+s.floor)/2),s.kBand=J(s.h/i.kBandDiv,1,i.kBandMax),s.xHome=a.xHome,s.xMin=i.xMin,s.xMax=i.xMax*n,s.xSoftL=i.xSoftL,s.xSoftR=i.xSoftR*n,s.gateHalf=i.gateHalf*Math.min(s.h,i.gateHalfCap)}function XS(e){if(e.paused)return 0;let t=1,n=e.sheet;if(e.run.choosing)t*=K.chooseScale;else if(BC(n.kind)&&n.exit!=null){let e=K.chooseScale;t*=n.exit<0?e:e+(1-e)*Mg(0,.3,n.exit)}return e.hitStopT>0&&(t*=e.hitStopK),e.deathT>0&&(t*=K.death.scale),(e.sheet.kind===`gameover`||e.sheet.kind===`clear`)&&e.sheet.exit==null&&(t=K.chooseScale),t}function ZS(e){QS(e),mC(e),lC(e);let t=e.sheet;if(e.paused=e.hidden||(t.kind===`pause`||t.kind===`rulebook`)&&t.exit==null,e.paused){e.gdt=0,e.scale=0,DC(e);return}e.stepN++,e.stepT+=G;let n=XS(e),r=G*n;e.scale=n,e.gdt=r,e.wt+=r;let i=e.t;e.gameIn<=0&&(e.phase===`play`||e.phase===`clearing`&&e.clearT<K.clear.cleared)&&!e.run.choosing&&(e.t+=r);for(let t=0;t<3;t++)i<60*(t+1)&&e.t>=60*(t+1)&&(e.stats.lvAt[t]=e.run.level);e.hitStopT>0&&(e.hitStopT-=G),e.deathT>0&&(e.deathT-=G),e.gameIn>0&&(e.gameIn-=r),CC(e),YS(e),wC(e,r),ry(e),hC(e,r),gC(e,r),fx(e,r),Bv(e),ly(e,r),bx(e),TC(e,r),EC(e,r),DC(e),SC(e)}function QS(e){let t=e.in.q;for(;t.length;){let n=t.shift();n.k===`click`?tC(e,n.x,n.y):n.k===`sound`?kC(e):e.sheet.kind===`none`?$S(e,n):zC(e)&&eC(e,n)}}function $S(e,t){let n=e.phase===`play`||e.phase===`clearing`;if(t.k===`pause`)n&&oC(e,`pause`);else if(t.k===`od`)e.phase===`play`&&Ly(e);else if(t.k===`help`)n&&uC(e,!1);else if(t.k===`enter`){let t=e.phase===`play`?qx(e):null;t&&gh.works[t.i]}}function eC(e,t){let n=e.sheet;if(BC(n.kind)){let r=e.run.offer.length;if(t.k===`pick`)t.v<r&&iC(e,t.v);else if(t.k===`hl`){let i=Math.floor((r-1)/2),a=n.sel==null?i:J(n.sel+t.v,0,Math.max(0,r-1));a!==n.sel&&W(e,`cardup`),n.sel=a,e.dev.touch&&(n.raised=a)}else if(t.k===`enter`||t.k===`od`){let t=e.dev.touch?n.raised:n.sel;t!=null&&t<r?iC(e,t):(n.sel=Math.floor((r-1)/2),e.dev.touch&&(n.raised=n.sel),W(e,`cardup`))}else t.k===`pause`&&e.phase===`play`&&(RC(e).handBack=n.kind,sC(e,`pause`))}else if(n.kind===`rulebook`){if(t.k===`pause`||t.k===`help`)pC(e);else if(t.k===`hl`)fC(e,t.v);else if(t.k===`enter`||t.k===`od`){if(n.open!=null)return;n.spread>=HC?pC(e):fC(e,1)}}else if(t.k===`hl`){let r=VC(e);if(!r.length)return;let i=n.hover?r.indexOf(n.hover):-1,a=i<0?t.v>0?0:r.length-1:(i+t.v+r.length)%r.length;r[a]!==n.hover&&W(e,`uihover`),n.hover=r[a],RC(e).pmx=e.in.mx,RC(e).pmy=e.in.my}else n.kind===`pause`?t.k===`pause`?nC(e,`continue`):t.k===`help`?nC(e,`help`):t.k===`enter`&&nC(e,n.hover&&VC(e).includes(n.hover)?n.hover:`continue`):(n.kind===`gameover`||n.kind===`clear`)&&t.k===`enter`&&n.t>.5&&nC(e,n.hover&&VC(e).includes(n.hover)?n.hover:n.kind===`gameover`?`again`:`wake`)}function tC(e,t,n){let i=e.sheet,a=e=>t>=e.x&&n>=e.y&&t<e.x+e.w&&n<e.y+e.h;if(i.kind!==`none`){if(!zC(e))return;let t=null;for(let e=i.hits.length-1;e>=0;e--)if(a(i.hits[e])){t=i.hits[e];break}t&&nC(e,t.id,t.href);return}let o=e.hud.layout,s=e.dev.touch?2:1,c=o?.coins.find(e=>a({x:e.x-s,y:e.y-s,w:13+2*s,h:13+2*s}));for(let t of[`wake`,`mode`]){let n=o?.[t];if(n&&a({x:n.x-s,y:n.y-s,w:n.w+2*s,h:n.h+2*s})){e.hud.press=t,e.hud.pressT=0,W(e,`uiclick`),r.dispatchEvent(new CustomEvent(`retro:wake`));return}}c?(e.hud.press=c.id,e.hud.pressT=0,c.id===`pause`?$S(e,{k:`pause`}):c.id===`help`?$S(e,{k:`help`}):kC(e)):!e.dev.touch&&e.phase===`play`&&Ly(e)}function nC(e,t,n){/^(card\d|page|seal|prev|next)$/.test(t)||W(e,`uiclick`),rC(e,t,n)}function rC(e,t,n){let i=e.sheet;if(i.exit==null){if(/^card\d$/.test(t)){let n=+t.slice(4);e.dev.touch&&i.raised!==n?(i.raised=n,W(e,`cardup`)):iC(e,n)}else t===`continue`?sC(e):t===`restart`||t===`again`?aC(e):t===`help`?uC(e,!1):t===`wake`||t===`works`?jC(e,t):n?r.open(n,`_blank`,`noopener`):t===`close`||t===`seal`?pC(e):t===`page`?i.open==null?fC(e,1):RC(e).rbOpenT=Math.max(RC(e).rbOpenT,.6):t===`prev`?fC(e,-1):t===`next`&&fC(e,1)}}function iC(e,t){let n=e.sheet;!BC(n.kind)||n.exit!=null||n.t<.35||t>=e.run.offer.length||(e.dev.touch||(n.sel=t),Jy(e,t))}function aC(e){let t=e.sheet,n=t.snap??{time:e.t,level:e.run.level,best:e.persist.best,won:WC(e)};JS(e,!0),e.sheet={...t,exit:0,after:`none`,hits:[],hover:null,snap:n},ny(e)}function oC(e,t){let n=e.sheet,r=n.kind===`pause`&&t===`rulebook`?`pause`:`none`;e.sheet={kind:t,t:BC(t)&&BC(n.kind)&&n.exit!=null?.3:0,exit:null,after:r,sel:null,raised:null,chosen:null,chosenT:0,hover:null,hits:[],spread:0,open:t===`rulebook`?0:null,turn:null,first:!1,snap:null},t===`rulebook`&&(RC(e).rbOpenT=0),RC(e).pmx=-1,ny(e),t===`pause`?W(e,`pause`):t===`rulebook`&&W(e,`book`)}function sC(e,t){let n=e.sheet;if(n.kind===`none`||n.exit!=null)return;n.exit=BC(n.kind)&&n.chosen!=null?-.3:0,t&&(n.after=t);let r=RC(e);n.kind===`pause`&&n.after===`none`&&r&&r.handBack&&e.run.choosing&&e.phase===`play`&&(n.after=r.handBack),n.kind===`pause`&&(r&&(r.handBack=null),W(e,`resume`))}function cC(e){let t=e.sheet.kind,n=e.sheet.after;if(e.sheet={...e.sheet,kind:`none`,exit:null,hits:[],after:`none`,hover:null,snap:null},n!==`none`){let r=RC(e)?.handBack??null;oC(e,n),n===`pause`?e.sheet.t=t===`rulebook`?1:.35:BC(n)&&(e.sheet.t=.35),n===`pause`&&r&&RC(e)&&(RC(e).handBack=r)}}function lC(e){let t=e.sheet;t.kind!==`none`&&(t.t+=G,t.chosen!=null&&(t.chosenT+=G),t.kind===`rulebook`&&dC(e),t.exit!=null&&(t.exit+=G,t.exit>=.3&&cC(e)))}function uC(e,t){let n=e.sheet;n.kind!==`none`&&n.kind!==`pause`||n.kind===`pause`&&n.exit!=null||(oC(e,`rulebook`),e.sheet.first=t)}function dC(e){let t=e.sheet;if(t.open!=null){let n=RC(e);n.rbOpenT+=G;let r=J((n.rbOpenT-.6)/1.8,0,1);t.open=Pg(r),r>=1&&(t.open=null,t.spread=1)}t.turn&&(t.turn.p+=G/.3,t.turn.p>=1&&(t.spread=t.turn.to,t.turn=null))}function fC(e,t){let n=e.sheet;if(n.kind!==`rulebook`)return;if(n.open!=null){if(n.open<.98)return;n.open=null,n.spread=1}n.turn&&=(n.spread=n.turn.to,null);let r=n.spread+t;r<1||r>HC||(n.turn={to:r,p:0},W(e,`page`))}function pC(e){let t=e.sheet;t.kind!==`rulebook`||t.exit!=null||(t.first&&(e.persist.rules=!0,AC(e,`rules`)),W(e,`cover`),sC(e))}function mC(e){if(e.dev.touch)return;let t=e.in,n=RC(e);if(t.mx===n.pmx&&t.my===n.pmy&&t.mouseIn)return;let r=e.sheet;if(r.kind!==`none`&&!r.hits.length)return;n.pmx=t.mx,n.pmy=t.my;let i=e=>t.mx>=e.x&&t.my>=e.y&&t.mx<e.x+e.w&&t.my<e.y+e.h,a=(t,i)=>{t&&t!==i&&e.stepT-n.uiT>.07&&(W(e,BC(r.kind)&&/^card/.test(t)?`cardup`:`uihover`),n.uiT=e.stepT)};if(r.kind!==`none`){if(e.hud.hover=null,!zC(e)||!t.mouseIn)return;let n=null;for(let e=r.hits.length-1;e>=0;e--)if(i(r.hits[e])){n=r.hits[e].id;break}a(n,r.hover),r.hover=n,BC(r.kind)&&n&&/^card\d$/.test(n)&&(r.sel=+n.slice(4));return}let o=e.hud.layout,s=t.mouseIn&&o?o.coins.find(e=>i({x:e.x-1,y:e.y-1,w:15,h:15})):void 0,c=e=>t.mouseIn&&e&&i({x:e.x-1,y:e.y-1,w:e.w+2,h:e.h+2}),l=c(o?.wake)?`wake`:c(o?.mode)?`mode`:s?.id??null;a(l,e.hud.hover),e.hud.hover=l}function hC(e,t){let n=e.p,r=e.L,i=K.move;if(!n.alive)return;let a=e.run.PS.speed,o=e.phase===`play`||e.phase===`clearing`,s=o?e.in.ax:0,c=o?e.in.ay:0;n.vx+=s*i.ax*a*t,n.vy+=c*i.ay*r.kBand*a*t+i.grav*t,n.vx*=Math.exp(-i.dampX*t),n.vy*=Math.exp(-i.dampY*t),n.x>r.xSoftR&&(n.vx-=((n.x-r.xSoftR)*i.cushX+Math.max(0,n.vx)*i.cushXv)*t),n.x<r.xSoftL&&(n.vx+=((r.xSoftL-n.x)*i.cushX-Math.min(0,n.vx)*i.cushXv)*t),K.band.bossCushionOn&&e.boss.live&&n.x>e.boss.x-K.band.bossCushion&&(n.vx-=(n.x-(e.boss.x-K.band.bossCushion))*i.cushX*t),n.y<r.top+i.cushTopPad&&(n.vy+=((r.top+i.cushTopPad-n.y)*i.cushTop-Math.min(0,n.vy)*i.cushTopV)*t),n.y>r.soft&&(n.vy-=((n.y-r.soft)*i.cushFloor+Math.max(0,n.vy)*i.cushFloorV)*t);let l=i.vmax*a,u=Math.hypot(n.vx,n.vy);u>l&&(n.vx*=l/u,n.vy*=l/u),n.x+=n.vx*t,n.y+=n.vy*t,n.x<r.xMin&&(n.x=r.xMin,n.vx=Math.max(0,n.vx)),n.x>r.xMax&&(n.x=r.xMax,n.vx=Math.min(0,n.vx)),n.y<r.top&&(n.y=r.top,n.vy=Math.max(0,n.vy)),n.y>r.floor&&(n.vy>i.hardLand&&(ig(e,n.x,n.y+4,4,[`W1`,`C1`],50,.35,120),n.landT=0),n.y=r.floor,n.vy=Math.min(0,n.vy));for(let r of n.trail)r.x-=e.V*t;++n.trailTick%2==0&&(n.trail.unshift({x:n.x,y:n.y}),n.trail.length>20&&(n.trail.length=20)),n.castT>=0&&(n.castT+=t),n.hurtT>=0&&(n.hurtT+=t),n.landT>=0&&(n.landT+=t)}function gC(e,t){let n=e.p;n.alive?(n.iframes=Math.max(0,n.iframes-t),n.regenT+=t,e.phase===`play`&&e.gameIn<=0&&n.regenT>K.regenWait&&n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+e.run.PS.regen*t))):n.deadT+=G}function _C(e,t,n,r){let i=e.p,a=K.move.hurtR+r,o=t-i.x,s=n-i.y;return i.alive&&o*o+s*s<a*a}function vC(e,t,n,i){let a=e.p;if(!a.alive||a.iframes>0||e.run.ultT>0||e.phase!==`play`)return!1;let o=t*K.hurtK;return a.hp-=o,a.iframes=K.hurtIframes,a.regenT=0,a.hurtT=0,e.stats.hpLost[Math.min(5,Math.floor(e.t/60))]+=o,ig(e,a.x,a.y,7,[`E0`,`P5`,`E1`],55,.35),n!=null&&i!=null&&ig(e,(n+a.x)/2,(i+a.y)/2,3,[`W0`,`E1`],40,.25),sg(e,1,.15),W(e,`hurt`),a.hp<=0&&r.__rtGod&&(a.hp=1),a.hp<=0&&(a.hp=0,bC(e)),!0}function yC(e,t){e.p.hp=Math.min(e.p.maxHp,e.p.hp+t),W(e,`heal`)}function bC(e){let t=e.p;t.alive&&(t.alive=!1,t.deadT=0,t.vx=t.vy=0,e.phase=`dying`,e.deathT=K.death.slow,BC(e.sheet.kind)&&(e.run.choosing=!1,e.sheet.chosen=null,sC(e)),W(e,`over`))}function xC(e){e.phase===`play`&&(e.phase=`clearing`,e.clearT=0)}function SC(e){if(e.phase===`dying`&&e.deathT<=0&&e.sheet.kind===`none`&&(e.phase=`over`,oC(e,`gameover`)),e.phase===`clearing`){e.clearT+=e.gdt;let t=K.clear,n=e.clearT-t.cleared;n>=t.sound&&!RC(e).clearSfx&&(RC(e).clearSfx=!0,W(e,`clear`)),n>=t.sheet&&(e.sheet.kind===`none`||BC(e.sheet.kind))&&(BC(e.sheet.kind)&&(e.run.choosing=!1,e.sheet={...e.sheet,kind:`none`,exit:null}),e.phase=`clear`,e.persist.best=e.persist.best==null?e.t:Math.min(e.persist.best,e.t),AC(e,`best`),oC(e,`clear`))}}function CC(e){let t=e.later;if(!t.length)return;let n=0;for(let r=0;r<t.length;r++){let i=t[r];(i.clock===`world`?e.wt:e.stepT)>=i.at?UC.push(i):t[n++]=i}if(!UC.length)return;t.length=n;let r=UC.length;for(let t=0;t<r;t++)UC[t].fn(e);UC.length=0}function wC(e,t){let n=0;for(let r of e.surges){r.t+=t;let e=Mg(0,r.rise,r.t)*(1-Mg(r.rise+.3,r.dur,r.t))**1.6*r.amp;e>n&&(n=e)}ag(e.surges,e=>e.t<e.dur);let r=e.clearT-K.clear.cleared;e.finK=(e.phase===`clearing`||e.phase===`clear`)&&r>0?Mg(.6,2.9,r):0;let i=(K.worldU+K.surgeLand*n+K.surgeFin*e.finK*e.finK)/K.worldU;e.look.landK=Math.max(n,e.finK*.95),e.V=K.V0*e.speedScale*i,e.D+=K.worldU*e.speedScale*i*t,e.scroll+=e.V*t}function TC(e,t){let n=e.pa,r=e.V*t;for(let e=n.n-1;e>=0;e--){if(n.age[e]+=t,n.age[e]>=n.life[e]){Yh(n,e);continue}let i=Math.exp(-n.drag[e]*t);n.vx[e]*=i,n.vy[e]=n.vy[e]*i+n.grav[e]*t,n.x[e]+=n.vx[e]*t-r,n.y[e]+=n.vy[e]*t}let i=e.fx;for(let e=i.n-1;e>=0;e--)i.age[e]+=t,i.age[e]>=i.life[e]&&Yh(i,e);for(let t of e.banners)t.t+=G;ag(e.banners,e=>e.t<e.dur+1.2)}function EC(e,t){let n=e.look,r=RC(e);if(n.odT=e.run.ultT>0?n.odT+t:0,n.clearT=e.clearT>=K.clear.cleared?e.clearT-K.clear.cleared:0,n.state=n.clearT>0?`clear`:e.run.ultT>0?`overdrive`:n.storm>0?`storm`:`night`,n.flash>=4&&(r.bolts.length===0||r.bolts[r.bolts.length-1]!==e.stepT)&&(r.bolts=r.bolts.filter(t=>e.stepT-t<1),r.bolts.length>=3?n.flash=0:r.bolts.push(e.stepT)),n.pst=e.phase===`dying`||e.phase===`over`?`drain`+Math.min(4,1+Math.floor(e.p.deadT/K.death.slow*4)):n.flash>2?`lightning2`:n.flash>0?`lightning1`:`base`,n.flash>0&&n.flash--,n.shakeT>0){n.shakeT=Math.max(0,n.shakeT-G);let t=n.shakeA*n.shakeT/Math.max(1e-6,n.shakeDur),r=e.stepT*38;n.shakeX=Math.round(t*(.62*Math.sin(r)+.38*Math.sin(r*1.73+1.1))),n.shakeY=Math.round(t*(.62*Math.sin(r*1.21+2.3)+.38*Math.sin(r*.83+.4)))}else n.shakeX=n.shakeY=0}function DC(e){let t=e.hud,n=RC(e),r=e.run;r.level!==t.shownLevel&&(r.level>t.shownLevel&&(t.xpFlash=0,t.xpFrom=0,t.xpT=-1.04),t.prevLevel=t.shownLevel,t.shownLevel=r.level,t.levelRoll=0),t.levelRoll<1&&(t.levelRoll=Math.min(1,t.levelRoll+G/.6)),t.xpFlash>=0&&(t.xpFlash+=G,t.xpFlash>1.04&&(t.xpFlash=-1));let i=r.need>0?J(r.xp/r.need,0,1):0;Math.abs(i-n.xpTo)>1e-6&&(t.xpT>=0&&(t.xpFrom=i<t.xpK?i:t.xpK,t.xpT=0),n.xpTo=i),t.xpTo=n.xpTo,t.xpT+=G,t.xpT>=0&&(t.xpK=t.xpFrom+(t.xpTo-t.xpFrom)*GC(t.xpT/.55));let a=e.p.maxHp>0?J(e.p.hp/e.p.maxHp,0,1):0;n.lastHp>=0&&e.p.hp<n.lastHp-1e-6&&(n.trailT=0,n.trailFrom=Math.max(t.hpTrail,n.lastHp/e.p.maxHp),t.hpTrail=n.trailFrom),n.lastHp=e.p.hp,n.trailT+=G,n.trailT>.35&&(t.hpTrail=Math.max(a,n.trailFrom+(a-n.trailFrom)*J((n.trailT-.35)/1,0,1))),t.hpTrail<a&&(t.hpTrail=a);let o=e.p.alive&&e.phase===`play`&&a<=.25?.85+.15*(1-a/.25):0;t.lowShown+=(o-t.lowShown)*Fg(o>t.lowShown?3:1.5,G);for(let r=0;r<3;r++)e.mem.won[r]&&!n.wonPrev[r]?(t.memFlash[r]=0,e.persist.projects[r]||(e.persist.projects[r]=!0,AC(e,`projects`))):t.memFlash[r]>=0&&(t.memFlash[r]++,t.memFlash[r]>=6&&(t.memFlash[r]=-1)),n.wonPrev[r]=e.mem.won[r];t.enter!=null&&(t.enter+=G,t.enter>1&&(t.enter=void 0)),t.press&&t.press!==`od`&&(t.pressT+=G,t.pressT>2/60&&(t.press=null)),e.in.odDown?t.press=`od`:t.press===`od`&&(t.press=null);let s=By(e);s&&!n.readyWas&&W(e,`ready`),n.readyWas=s,t.sheetK=e.sheet.kind!==`none`&&(e.sheet.exit==null||e.sheet.exit<0)?Math.min(1,t.sheetK+G/.26):Math.max(0,t.sheetK-G/.7);let c=e.in;if(c.drag&&e.dev.touch&&(n.dragAt||Math.hypot(c.drag.x-c.drag.x0,c.drag.y-c.drag.y0)>=4)){let t=e.dev,r=t.kind===`ph`?.75:1;n.dragAt={x:Math.round((c.drag.x0-t.ox)/t.c),y:Math.round((c.drag.y0-t.oy)/t.c),kx:(c.drag.x-c.drag.x0)/t.c,ky:(c.drag.y-c.drag.y0)/t.c,R:Math.round(58*r/t.c),r:Math.round(27*r/t.c),T:Math.round(46*r/t.c)},n.dragK=Math.min(1,n.dragK+G/.12)}else n.dragK=Math.max(0,n.dragK-G/.2),!c.drag&&n.dragK<=0&&(n.dragAt=null)}function OC(e){try{let t=r.localStorage,n=t.getItem(KC.best);e.persist.best=n!=null&&isFinite(+n)?+n:null;let i=JSON.parse(t.getItem(KC.projects)||`null`);Array.isArray(i)&&(e.persist.projects=[0,1,2].map(e=>!!i[e])),e.persist.rules=t.getItem(KC.rules)===`1`,e.sound=e.persist.sound=t.getItem(KC.sound)!==`0`}catch{}}function kC(e){let t=e.sound=e.persist.sound=!e.sound;if(!r.__rtNoSave)try{r.localStorage.setItem(KC.sound,t?`1`:`0`)}catch{}setTimeout(()=>r.dispatchEvent(new CustomEvent(`ds:sound`,{detail:{on:t,from:`retro`}})),0)}function AC(e,t){if(!r.__rtNoSave)try{let n=r.localStorage;t===`best`&&e.persist.best!=null?n.setItem(KC.best,String(Math.round(e.persist.best*100)/100)):t===`projects`?n.setItem(KC.projects,JSON.stringify(e.persist.projects)):t===`rules`&&n.setItem(KC.rules,`1`)}catch{}}function jC(e,t){if(e.later.some(e=>e.tag===`leave`))return;sC(e);let n=++JC;tg(e,qC,`step`,()=>{n===JC&&r.dispatchEvent(new CustomEvent(t===`wake`?`retro:wake`:`retro:works`))},`leave`)}function MC(e){let t=e.priv.core;t.exitT=0,t.exitV=e.V||K.V0,ny(e)}function NC(e){let t=e.priv.core,n=t.exitT=(t.exitT??0)+G;e.stepN++,e.stepT+=G,lC(e),e.V=(t.exitV??K.V0)*(1+4.5*YC(.4,0,.2,1,J(n/1.6,0,1))),e.scroll+=e.V*G,e.wt+=G,e.hud.sheetK=Math.max(e.hud.sheetK,n<1/30?.25:n<2/30?.5:n<.1?.75:1),e.paused=!1,e.gdt=0}function PC(e){e.persist.rules||tg(e,1.7,`step`,e=>{e.sheet.kind===`none`&&e.phase===`play`&&uC(e,!0)},`rules`)}function FC(e){e.hidden=!0,ny(e)}function IC(e){e.hidden=!1,e.sheet.kind===`none`&&(e.phase===`play`||e.phase===`clearing`)&&oC(e,`pause`)}function LC(e,t){let n=e.dev.W,r=e.dev.H,i=e.L.top,a=e.L.h,o=e.L.gY;if(e.dev=t,t.W===n&&t.H===r)return;YS(e,!0);let s=e.L,c=e=>e*t.W/n,l=e=>e>o-K.band.hard?s.gY+(e-o):s.top+(e-i)*s.h/Math.max(1,a),u=e=>s.gY+(e-o),d=e.p;d.x=J(c(d.x),s.xMin,s.xMax),d.y=J(l(d.y),s.top,s.floor);for(let e of d.trail)e.x=c(e.x),e.y=l(e.y);for(let t=0;t<e.pa.n;t++)e.pa.x[t]=c(e.pa.x[t]),e.pa.y[t]=l(e.pa.y[t]);for(let t=0;t<e.fx.n;t++)e.fx.x[t]=c(e.fx.x[t]),e.fx.y[t]=l(e.fx.y[t]);Xx(e,c,l,u),sb(e,c,l),Tx(e,t.W/2,t.H/2,1e6),e.hud.layout=null,Qb(kx(e)),e.sheet.kind===`none`&&(e.phase===`play`||e.phase===`clearing`)&&oC(e,`pause`)}var RC,zC,BC,VC,HC,UC,WC,GC,KC,qC,JC,YC,XC=o(()=>{Rv(),Wl(),Kh(),Bg(),ey(),oy(),GS(),Kb(),ox(),RC=e=>e.priv.core,zC=e=>e.sheet.kind!==`none`&&e.sheet.exit==null,BC=e=>e===`levelup`||e===`fusion`,VC=e=>e.sheet.hits.filter(e=>!/^(card\d|work\d|page|seal|help|prev|next)$/.test(e.id)).map(e=>e.id),HC=7,UC=[],WC=e=>e.mem.won.map((t,n)=>t||!!e.persist.projects[n]),GC=e=>1-(1-J(e,0,1))**3.2,KC={best:`dreamshift:retro:v1:best`,projects:`dreamshift:retro:v1:projects`,rules:`dreamshift:retro:v1:rules`,sound:`dreamshift:sound:v1`},qC=.15,JC=0,YC=(e,t,n,r,i)=>{let a=i;for(let t=0;t<8;t++){let t=3*e*a*(1-a)**2+3*n*a*a*(1-a)+a**3-i,r=3*e*(1-a)**2+6*(n-e)*a*(1-a)+3*(1-n)*a*a;if(Math.abs(r)<1e-6)break;a=J(a-t/r,0,1)}return 3*t*a*(1-a)**2+3*r*a*a*(1-a)+a**3}});function ZC(e,t){t.kind===`clear`&&Hm(e,t.W,t.H,t.scr,t.t,{stats:t.stats,won:t.won,touch:t.touch,hover:null,exit:null})}function QC(e,t){let{W:n,H:r,scr:i,t:a,touch:o,exit:s}=t,c=o?null:t.hover;switch(t.kind){case`levelup`:case`fusion`:{let c=t.cards.map(e=>nh(e[0],e[1],e[2])),l={level:t.level,cards:c,sel:o?null:t.sel,raised:o?t.raised:null,chosen:t.chosen,chosenT:t.chosenT,touch:o,exit:s,core:t.kind===`fusion`};return c.length?t.kind===`fusion`?hh(e,n,r,i,a,l):mh(e,n,r,i,a,l):[]}case`pause`:return zm(e,n,r,i,a,{stats:t.stats,won:t.won,touch:o,hover:c,exit:s});case`gameover`:return Bm(e,n,r,i,a,{stats:t.stats,won:t.won,touch:o,hover:c,exit:s});case`clear`:return Vm(e,n,r,i,a,{stats:t.stats,won:t.won,touch:o,hover:c,exit:s,noDeco:t.noDeco});case`rulebook`:return t.after===`pause`&&(a<.4||s!=null)&&zm(e,n,r,i,9,{stats:t.stats,won:t.won,touch:o,hover:null,exit:null}),dp(e,n,r,i,a,{spread:t.spread,first:t.first,open:t.open,turn:t.turn,touch:o,hover:c,exit:s})}return[]}var $C=o(()=>{Kh()});function ew(e){let t=e.kind===`levelup`||e.kind===`fusion`,n=`${e.kind}|${e.W}x${e.H}|${e.scr}|${+!!e.touch}`;if(t)return`${n}|${e.touch?`r`+e.raised:`s`+e.sel}|${e.chosen}|${e.level}|${e.cards.join(`;`)}`;let r=`${e.stats.time}|${e.stats.level}|${e.stats.best}|${e.won.join()}`;return e.kind===`rulebook`?`${n}|${e.hover}|${e.spread}|${+!!e.first}|${e.after}|${r}`:`${n}|${e.hover}|${r}`}function tw(e,t){return e.kind===`levelup`||e.kind===`fusion`?[null,...e.cards.map((e,t)=>t)].map(t=>e.touch?{...e,raised:t}:{...e,sel:t}):e.touch?[]:[null,...t.map(e=>e.id)].map(t=>({...e,hover:t}))}function nw(){if(pw!==void 0)return pw;if(uw||typeof Worker>`u`||typeof OffscreenCanvas>`u`)return pw=null;try{let e=qb(`sheet`);e.onmessage=t=>{let n=t.data;if(n.id===mw&&(gw=!1),n.err){Ow.err=n.err,console.warn(`[retro] sheet worker:`,n.err),pw=null,e.terminate();return}let r=kw.get(n.id);if(kw.delete(n.id),n.id<hw||r==null)return rw(n);n.sig=r,n.at=performance.now();let i=bw.get(r);i&&rw(i),bw.set(r,n),Ow.ms=Ow.ms*.8+(n.ms||0)*.2,Ow.hist.push(Math.round(n.ms||0)),Ow.hist.length>40&&Ow.hist.shift()},e.onerror=e=>{e.preventDefault?.(),Ow.err=String(e.message||`worker error`),pw=null},pw=e}catch{pw=null}return pw}function rw(e){e.ov?.close(),e.fb?.close()}function iw(){if(xw||bw.size){for(let e of bw.values())rw(e);bw.clear(),kw.clear(),hw=mw+1,gw=!1,yw=!1,xw=``,Cw=``,Sw=[]}}function aw(e,t,n,r,i){let a=++mw;kw.set(a,r),gw=!0,_w=performance.now(),Ow.sent++;let o={id:a,req:n,world:null,fine:n.kind===`rulebook`};i?(vw=_w,yw=!0,Ow.worlds++,createImageBitmap(e.canvas).then(e=>{pw?pw.postMessage({...o,world:e},[e]):e.close()},()=>gw=!1)):t.postMessage(o)}function ow(e,t,n){let r=e.canvas.width,i=e.canvas.height;Tw||=document.createElement(`canvas`),(Tw.width!==r||Tw.height!==i)&&(Tw.width=r,Tw.height=i);let a=Tw.getContext(`2d`);if(a.clearRect(0,0,r,i),a.drawImage(e.canvas,0,0),Dw=!!t&&n===`rulebook`,Dw&&t){Ew||=document.createElement(`canvas`),(Ew.width!==t.canvas.width||Ew.height!==t.canvas.height)&&(Ew.width=t.canvas.width,Ew.height=t.canvas.height);let e=Ew.getContext(`2d`);e.clearRect(0,0,Ew.width,Ew.height),e.drawImage(t.canvas,0,0)}}function sw(e,t,n,r){e.save(),e.setTransform(1,0,0,1,0,0),e.drawImage(n,0,0),e.restore(),r&&t&&(t.save(),t.setTransform(1,0,0,1,0,0),t.drawImage(r,0,0),t.restore())}function cw(e,t,n){let r=lw.__retroDt!=null,i=Tt(e),a=ew(t),o=t.t<(dw[t.kind]??1.6)||t.exit!=null||t.chosen!=null||t.turn!=null||t.open!=null,s=!o&&fw[t.kind]&&t.kind===`clear`?t:null;!o&&fw[t.kind]&&(t={...t,t:dw[t.kind],noDeco:t.kind===`clear`});let c=r?null:nw();if(a!==xw){if(xw&&xw.split(`|`,2).join()!==a.split(`|`,2).join()){for(let e of bw.values())rw(e);bw.clear(),yw=!1}xw=a,Sw=[]}let l=!o&&c?bw.get(a):void 0;if(r||o||!l&&Cw!==a||!c&&++ww%6==0){let n=QC(e,t);return Ow.page++,s?(r||(ow(e,i,t.kind),Cw=a),lw.__rtNoLiveDeco||ZC(e,s),Sw=n,n):(lw.__rtPipeDbg&&lw.__rtPipeDbg.push([+t.t.toFixed(2),o,!!l,Cw===a,a.slice(0,120)]),Sw=n,!r&&!o?(ow(e,i,t.kind),Cw=a):Cw=``,n)}let u=performance.now();if(c&&!gw&&u-_w>=16){let r=!yw||n&&u-vw>250,i=bw.get(a),o=null;if(!i)o=t;else{for(let e of tw(t,Sw)){let t=ew(e);if(!bw.has(t)&&![...kw.values()].includes(t)){o=e,Ow.ahead++;break}}!o&&u-(i.at||0)>=66&&(o=t)}o&&aw(e,c,o,ew(o),r)}let d=bw.get(a);return d?.ov?(sw(e,i,d.ov,d.fb||null),Ow.laid++,d.hits&&(Sw=d.hits)):Tw&&Cw===a&&(sw(e,i,Tw,Dw?Ew:null),Ow.kept++),s&&!lw.__rtNoLiveDeco&&ZC(e,s),Sw}var lw,uw,dw,fw,pw,mw,hw,gw,_w,vw,yw,bw,xw,Sw,Cw,ww,Tw,Ew,Dw,Ow,kw,Aw=o(()=>{Ot(),$C(),Yb(),lw=r,uw=new URLSearchParams(location.search).get(`sheetw`)===`0`,dw={pause:1.45,gameover:1.65,clear:1.65,levelup:1.25,fusion:1.25,rulebook:.5},fw={pause:!0,gameover:!0,clear:!0},mw=0,hw=0,gw=!1,_w=-1e9,vw=-1e9,yw=!1,bw=/* @__PURE__ */ new Map,xw=``,Sw=[],Cw=``,ww=0,Tw=null,Ew=null,Dw=!1,Ow=lw.__rtSheetPipe={page:0,kept:0,laid:0,sent:0,worlds:0,ahead:0,ms:0,hist:[],err:``},kw=/* @__PURE__ */ new Map});function jw(e,t){let n=document.createElement(`canvas`);n.width=Math.max(1,e),n.height=Math.max(1,t);let r=n.getContext(`2d`);return r.imageSmoothingEnabled=!1,[n,r]}function Mw(e,t,n,r,i,a,o,s,c,l){let u=`${e}:${t}:${n}:${r}:${i}:${a}:${o}:${s}:${c}:${l}`,d=zw.get(u);if(d)return d;let f=Math.max(0,Iw(n-i)),p=Math.max(0,o-4-2),m=Math.min(e,Iw(n+i))-f,h=Math.min(t,o+s+4+2)-p,g=new Uint8Array(Math.max(0,m)*Math.max(0,h));for(let e=0;e<h;e++)for(let t=0;t<m;t++)((f+t-n)/i)**2+((p+e-r)/a)**2>1||!N(f+t,p+e,c)||(g[e*m+t]=1);let _=Math.floor(n-i),v=Math.floor(r-a),y=Math.ceil(n+i)-_+1,b=Math.ceil(r+a)-v+1,[x,S]=jw(y,b),C=S.createImageData(y,b),w=parseInt(l.slice(1,3),16),T=parseInt(l.slice(3,5),16),E=parseInt(l.slice(5,7),16);for(let o=Math.floor(r-a);o<=Math.ceil(r+a);o++)for(let s=Math.floor(n-i);s<=Math.ceil(n+i);s++){if(s<0||s>=e||o<0||o>=t)continue;let l=((s-n)/i)**2+((o-r)/a)**2;if(!(l>1)&&N(s,o,(l<.6?.75:.5)*c)){let e=((o-v)*y+(s-_))*4;C.data[e]=w,C.data[e+1]=T,C.data[e+2]=E,C.data[e+3]=255}}return S.putImageData(C,0,0),d={bx:f,by:p,bw:m,bh:h,mask:g,layer:x,lx:_,ly:v},zw.size>64&&zw.clear(),zw.set(u,d),d}function Nw(e,t,n,r,i){let a=`${e}:${t}:${n}:${r}:${i}`,o=Hw.get(a);if(o)return o;let s=zn.NIGHT12,[c,l]=jw(ht(s,t)+8,s.h+8);if(e===`out`)for(let[e,r]of[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1],[0,2]])gt(l,s,t,4+e,4+r,n);else En(l,s,t,4,4,r,i,null,n);return o={c,ox:4,oy:4},Hw.set(a,o),o}function Pw(e,t,n,r,i,a,o,s=1,c=Iw(n*.27)){let l=zn.NIGHT12,u=ht(l,r),d=t/2,f=u*.85+8,p=Iw(d-u/2),m=Iw(c-6);if(s<=0)return;let h=V(o,`K0`),g=V(o,`K2`),_=Rw(g),v=Mw(t,n,d,c,f,17.25,m,15,s,h);if(v.bw>0&&v.bh>0){let t=V(o,`K1`),n=`${r}|${t}|${_}`,i=Bw.get(n);if(!i||i.ink!==v||++i.n>=3||Vw.__retroDt!=null){let r=e.getImageData(v.bx,v.by,v.bw,v.bh),a=r.data,o=parseInt(t.slice(1,3),16),s=parseInt(t.slice(3,5),16),c=parseInt(t.slice(5,7),16),l=v.mask;for(let e=0;e<l.length;e++){let t=e*4;l[e]&&.3*a[t]+.59*a[t+1]+.11*a[t+2]>_?(a[t]=o,a[t+1]=s,a[t+2]=c,a[t+3]=255):a[t+3]=0}if(!i){let[e,t]=jw(v.bw,v.bh);i={c:e,cg:t,ink:v,n:0},Bw.size>16&&Bw.clear(),Bw.set(n,i)}(i.c.width!==v.bw||i.c.height!==v.bh)&&(i.c.width=v.bw,i.c.height=v.bh),i.cg.putImageData(r,0,0),i.ink=v,i.n=0}e.drawImage(i.c,v.bx,v.by)}e.drawImage(v.layer,v.lx,v.ly);let[y,b]=i===`ult`?[`P5`,`P4`]:i===`fusion`?[`W1`,`C1`]:[`P5`,`E1`],x=u/Lw(Iw(r.length/5),1,3),S=[],C=0;for(let e of r){let t=ht(l,e);S.push({ch:e,x:C,dy:Iw(2*Math.sin(2*Math.PI*(C+t/2)/x-.8*a))}),C+=e===` `?l.space+l.gap:t+l.gap}let w=V(o,y),T=V(o,b);for(let t of S){if(t.ch===` `)continue;let n=Nw(`out`,t.ch,h,w,T);e.drawImage(n.c,p+t.x-n.ox,m+t.dy-n.oy)}for(let t of S){if(t.ch===` `)continue;let n=Nw(`face`,t.ch,h,w,T);e.drawImage(n.c,p+t.x-n.ox,m+t.dy-n.oy)}}function Fw(e,t){let n=V(t,`K0`),r=[];for(let[i,a]of e.map(e=>e.split(`|`))){let[e,o]=i===`ult`?[`P5`,`P4`]:i===`fusion`?[`W1`,`C1`]:[`P5`,`E1`];for(let i of new Set(a))i!==` `&&r.push([i,n,V(t,e),V(t,o)])}let i=()=>{let e=performance.now();for(;r.length&&performance.now()-e<4;){let[e,t,n,i]=r.shift();Nw(`out`,e,t,n,i),Nw(`face`,e,t,n,i)}r.length&&setTimeout(i,30)};setTimeout(i,200)}var Iw,Lw,Rw,zw,Bw,Vw,Hw,Uw=o(()=>{Ot(),qn(),Pc(),Iw=Math.round,Lw=(e,t,n)=>e<t?t:e>n?n:e,Rw=e=>.3*parseInt(e.slice(1,3),16)+.59*parseInt(e.slice(3,5),16)+.11*parseInt(e.slice(5,7),16),zw=/* @__PURE__ */ new Map,Bw=/* @__PURE__ */ new Map,Vw=r,Hw=/* @__PURE__ */ new Map});function Ww(e,t){let n=oT.get(t);if(n)return n;let r=document.createElement(`canvas`);r.width=r.height=4;let i=r.getContext(`2d`);i.fillStyle=`#000`;for(let e=0;e<4;e++)for(let n=0;n<4;n++)N(n,e,t)&&i.fillRect(n,e,1,1);return n=e.createPattern(r,`repeat`),oT.set(t,n),n}function Gw(e,t,n,r,i){if(r=rT(r),r<=0)return;if(r>=1)return i(e);(!iT||iT.width!==t||iT.height!==n)&&(iT=document.createElement(`canvas`),iT.width=t,iT.height=n,aT=iT.getContext(`2d`),aT.imageSmoothingEnabled=!1);let a=aT;a.setTransform(1,0,0,1,0,0),a.globalCompositeOperation=`source-over`,a.clearRect(0,0,t,n),i(a),a.globalCompositeOperation=`destination-in`,a.fillStyle=Ww(a,r),a.fillRect(0,0,t,n),a.globalCompositeOperation=`source-over`,e.drawImage(iT,0,0)}function Kw(e){let t=e.sheet;if(t.kind===`none`)return null;let n=sT[t.kind===`gameover`?`drain`:t.kind===`clear`?`light`:`night`];if(t.exit!=null&&t.exit>=0){if(t.after!==`none`)return n.in[2];let e=t.exit;return e<.1?n.out[2]:e<.2?n.out[1]:n.out[0]}if(t.kind===`rulebook`&&t.after===`pause`)return n.in[2];let r=t.t;return r<.09?n.in[0]:r<.18?n.in[1]:n.in[2]}function qw(e){let t=e.sheet;return t.kind===`none`?1:(t.kind===`levelup`||t.kind===`fusion`)&&t.exit!=null&&t.after===`none`?t.exit<0?.25+.25*J((t.exit+.3)/.3,0,1):.5+.5*J(t.exit/.3,0,1):t.exit!=null&&t.exit>=0?t.after===`none`?t.exit/.3:0:t.kind===`rulebook`&&t.after===`pause`?0:1-J((t.t-.05)/.25,0,1)}function Jw(e){let t=r.__rtProf;if(!t)return;let n=performance.now();e&&(t[e]=(t[e]??0)*.9+(n-cT)*.1),cT=n}function Yw(e,t){Jw(null);let n=t.dev.W,r=t.dev.H,i=Tt(e);i&&(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,i.canvas.width,i.canvas.height)),e.setTransform(1,0,0,1,0,0);let a=t.sheet,o=t.look,s=t.p,c=Kw(t),l=c??o.pst,u=c??(o.pst.startsWith(`drain`)?o.pst:`base`),d=tu(l),f=tu(u),p=qw(t),m={pst:l===`base`?void 0:l,heroX:nT(s.x),heroY:nT(s.y),storm:o.storm,bossX:nT(o.bossX),bossY:nT(o.bossY),odT:o.odT,clearT:o.clearT,landK:o.landK,bolt:o.bolt??void 0,shakeX:o.shakeX,shakeY:o.shakeY};v_(e,n,r,t.scroll,t.wt,o.state,{...m,layers:`back`}),Jw(`worldBack`),Gw(e,n,r,p,e=>{tS(e,t,d),Jw(`giant`),lb(e,t,f),nS(e,t,f),db(e,t,f),fb(e,t,f),aS(e,t,f),oS(e,t,f)}),Jw(`entsBack`),sS(e,t,f),Gw(e,n,r,p,e=>{s.alive&&s.trail.length>1&&$i(e,s.trail.map(e=>[nT(e.x),nT(e.y)]),3,u),pb(e,t,f),mb(e,t,f,!1)}),Zw(e,t,f),Jw(`dreamer`),Gw(e,n,r,p,e=>{mb(e,t,f,!0),ub(e,t,f),vb(e,t,f),cS(e,t,f),Qw(e,t,f),$w(e,t,f),lS(e,t,f)}),Jw(`entsFront`),v_(e,n,r,t.scroll,t.wt,o.state,{...m,layers:`front`}),Jw(`worldFront`);let h=eT(t),g=o.pst.startsWith(`drain`)&&pn[o.pst]||P;if(t.hud.layout=sl(e,n,r,t.dev.hud,h,g),Jw(`hud`),h.reticle==null&&Xw(t)&&By(t)){let r=nT(t.in.mx),i=nT(t.in.my);Xc(e,r-9,i-9,1,!0,!1,1,t.stepT,P);let a=`CLICK TO OVERDRIVE`,o=ht(zn.NIGHT5,a);Lc(e,zn.NIGHT5,a,J(nT(r-o/2),2,n-2-o),i-18,V(P,`G1`),P)}if(a.kind===`none`||a.exit!=null&&a.exit>=0)for(let i of t.banners){let t=i.t-.6-i.dur,o=rT(i.t/.3),s=t>0?1-Math.min(1,Math.ceil(t/.6*3)/3):1,c=Math.min(o,s,a.kind===`none`?1:(a.exit??0)/.3),l=t>0?nT(6*(1-(1-Math.min(1,t/.6))**3)):0;c>0&&Pw(e,n,r,i.text,i.tone,i.t,P,c,nT(r*.27)-l)}if(Jw(`banners`),a.kind===`clear`){let t=Math.min(Lr(a.t,.35,.6),a.exit!=null&&a.exit>=0?1-Lr(a.exit,0,.3):1);t>0&&Zn(e,t,e=>{e.fillStyle=V(P,`K4`),e.fillRect(0,0,n,r)})}tT(e,t),Jw(`sheet`)}function Xw(e){let t=e.in;return!e.dev.touch&&t.mouseIn&&e.sheet.kind===`none`&&!e.hud.hover&&(e.phase===`play`||e.phase===`clearing`)}function Zw(e,t,n){let r=t.p,i=t.wt,a=K.move,o=a.bobA*Math.sin(a.bobF*i)+a.bobB*Math.sin(a.bobG*i+a.bobP),s=nT(r.x),c=nT(r.y+o);if(!r.alive){Xi(e,`dreamer.death`,Math.min(9,Math.floor(r.deadT/(K.death.slow/10))),s,c,{t:t.stepT,pal:n.pn});return}let l=`dreamer.fly`,u=-1,d=t.run.ultT>0;d?l=`dreamer.spread`:r.hurtT>=0&&r.hurtT<4/15?(l=`dreamer.hurt`,u=Math.floor(r.hurtT*15)):r.castT>=0&&r.castT<.25?(l=`dreamer.cast`,u=Zi(r.castA,r.castHot&&r.castT<.15)):r.vx>60?l=`dreamer.fast`:r.vx<-40?l=`dreamer.slow`:r.vy<-50?l=`dreamer.up`:r.vy>60&&(l=`dreamer.down`),u<0&&(u=Gi(l,i));let f=!d&&r.hurtT>=0&&r.hurtT<.65&&r.iframes>0&&Math.floor(r.hurtT*10)%2==1,p=l===`dreamer.hurt`;Xi(e,l,u,s,c,{t:i,pal:n.pn,od:d,cover:f?.5:1,flash:p&&u<2?2:void 0,hurt:p&&u>=2}),r.hp<r.maxHp-.01&&t.phase===`play`&&ea(e,s,c,r.hp/r.maxHp,1,n.pn)}function Qw(e,t,n){let r=t.pa;for(let t=0;t<r.n;t++){let i=nT(r.x[t]),a=nT(r.y[t]),o=r.age[t]/Math.max(1e-6,r.life[t]);if(o>.66&&!N(i&1023,a&1023,o>.85?.25:.5))continue;e.fillStyle=V(n.pal,Ag[r.col[t]]);let s=r.sz[t]||1;e.fillRect(i,a,s,s)}}function $w(e,t,n){let r=t.fx,i=n.pal;for(let n=0;n<r.n;n++){let a=nT(r.x[n]),o=nT(r.y[n]),s=r.age[n],c=s/Math.max(1e-6,r.life[n]),l=e=>Math.min(e-1,Math.floor(c*e)),u=r.a[n],d=r.b[n];switch(r.kind[n]){case kg.hitStar:$o(e,a,o,l(3),i);break;case kg.contact:es(e,a,o,l(3),i);break;case kg.cutBurst:ms(e,a,o,l(8),u||23,i);break;case kg.decoyBurst:_s(e,a,o,l(9),u||19,i);break;case kg.pulse:{let[t,n]=lT[J(d|0,0,lT.length-1)];rs(e,a,o,u||22,c,t,n,i);break}case kg.octPulse:Ts(e,a,o,u||130,c,i,r.seed[n]);break;case kg.slowPulse:Ds(e,a,o,c,u||1,i);break;case kg.shock:Os(e,a,o,c,u||1,i);break;case kg.odRing:Ms(e,a,o,c,u||1,i);break;case kg.odOpen:As(e,a,o,s,i,u||160);break;case kg.heal:case kg.heal2:is(e,a,o,c,i);break;case kg.splash:Xo(e,a,o,l(4),i);break;case kg.muzzle:c<.5&&ks(e,a,o,i);break;case kg.pickup:Ho(e,a,o,l(3),uT[J(d|0,0,2)],i);break;case kg.ring:Do(e,a,o,nT((u||2)+((d||u+10)-(u||2))*(1-(1-c)**2)),V(i,`W0`),c<.6?1:c<.75?.75:c<.9?.5:.25);break;case kg.bolt:Yo(e,a+(r.seed[n]%13-6),0,a,o,l(4),i,r.seed[n]);break;case kg.ripple:ql(e,a,o,nT(4+8*Math.min(1,c*1.4)),i,c>.35);break;case kg.chevron:{if(Math.floor(s*8)%2==1)break;let n=Math.min(a,t.dev.W-3),r=V(i,`E0`);for(let t=0;t<3;t++)for(let i=-t;i<=t;i++)z(e,n-1+t,o+i,r);break}}}}function eT(e){let t=e.run,n=e.hud,r=e.priv.core,i=By(e),a=Xw(e),o=n.lowShown<.002?0:n.lowShown*(.66+.34*(.5+.5*Math.sin(e.stepT*5.2))**3),s=r&&r.dragK>0&&r.dragAt?{...r.dragAt,k:rT(r.dragK)}:null;return{t:e.stepT,level:n.shownLevel,prevLevel:n.prevLevel,levelRoll:n.levelRoll,xp:n.xpK,xpFlash:n.xpFlash,hp:e.p.hp,maxHp:e.p.maxHp,hpTrail:n.hpTrail,time:e.t,memories:WC(e),memFlash:n.memFlash,boss:Hx(e),ring:t.ult/K.ult.max,ready:i,running:t.ultT>0,runK:t.ultT/K.ult.dur,skills:ob(e),cores:t.cores,sound:e.sound,hover:n.hover,press:n.press,reticle:a&&!(i&&t.ultT<=0)?{x:nT(e.in.mx),y:nT(e.in.my)}:null,lowHp:o,enter:n.enter,sheet:n.sheetK>0?n.sheetK:void 0,drag:s&&s.k>0?s:null,bg:e.look.state===`storm`?`storm`:e.look.state===`clear`?`light`:`night`,modeFoot:Math.round((e.dev.kind===`ph`?22:19)/e.dev.c)}}function tT(e,t){let n=t.sheet;if(n.kind===`none`){iw();return}let r=t.dev,i=n.exit!=null&&n.exit>=0?n.exit:null,a=n.snap,o=a?{time:Math.floor(a.time),level:a.level,best:a.best}:{time:Math.floor(t.t),level:t.run.level,best:t.persist.best},s=cw(e,{kind:n.kind,W:r.W,H:r.H,scr:r.scr,t:n.t,touch:r.touch,hover:r.touch?null:n.hover,sel:n.sel,raised:n.raised,chosen:n.chosen,chosenT:n.chosenT,exit:i,stats:o,won:a?a.won:WC(t),level:t.run.level,cards:t.run.offer.map(e=>[e.kind,e.id,e.lv]),spread:n.spread,first:n.first,open:n.open,turn:n.turn?{to:n.turn.to,p:n.turn.p}:null,after:n.after},t.scale>0);n.hits=n.exit==null?s:[]}var nT,rT,iT,aT,oT,sT,cT,lT,uT,dT=o(()=>{mn(),Ot(),qn(),Rv(),xo(),Pc(),Wl(),Aw(),Bg(),ou(),Qr(),Uw(),XC(),GS(),Kb(),nT=Math.round,rT=e=>J(Math.round(e*4)/4,0,1),iT=null,aT=null,oT=/* @__PURE__ */ new Map,sT={night:{in:[`minus1`,`minus2`,`sheetNight`],out:[`minus1`,`minus2`,`sheetNight`]},drain:{in:[`drain4`,`drain4`,`sheetDrain`],out:[`drain1`,`drain3`,`sheetDrain`]},light:{in:[`plus1`,`plus2`,`sheetLight`],out:[`plus1`,`plus2`,`sheetLight`]}},cT=0,lT=[[`W1`,`C1`],[`K7`,`P4`],[`D4`,`Y2`],[`C1`,`V2`],[`R5`,`P5`]],uT=[`W0`,`Y2`,`P5`]});function fT(e){let t=0,n=0,i=-1,a=!0,o=r,s=o.__retroPerf=o.__retroPerf||{sim:0,draw:0,frame:0,steps:0},c=(e,t)=>e+(t-e)*.1;function l(r){if(!a)return;t=requestAnimationFrame(l);let u=Math.max(1,Math.min(8,(o.__retroSteps??o.__dreamSteps)|0||1)),d=o.__retroDt??o.__dreamDt,f=0;if(d!=null)f=Math.max(1,Math.round(d/G))*u;else{let e=i<0?G:Math.min(.1,Math.max(0,(r-i)/1e3));for(Math.abs(e-G)<.0015&&(e=G),n+=e;n>=G&&f<4;)n-=G,f++;f===4&&(n=Math.min(n,G)),f*=u}i=r;let p=performance.now();for(let t=0;t<f;t++)e.step();let m=performance.now();f>0&&!o.__retroFreeze&&e.draw();let h=performance.now();f>0&&(s.sim=c(s.sim,m-p),s.draw=c(s.draw,h-m),s.frame=c(s.frame,h-p),s.steps=c(s.steps,f))}let u=()=>{document.hidden?(cancelAnimationFrame(t),t=0,e.onHidden?.()):a&&!t&&(n=0,i=-1,t=requestAnimationFrame(l),e.onShown?.())};return document.addEventListener(`visibilitychange`,u),t=requestAnimationFrame(l),{stop(){a=!1,cancelAnimationFrame(t),document.removeEventListener(`visibilitychange`,u)},running:()=>a}}var pT=o(()=>{Bg()});function mT(e,t){let n=r,i=[];t.get(`god`)===`1`&&(n.__rtGod=!0,i.push(`god`));let a=+(t.get(`fast`)||0);a>1&&(n.__retroSteps=Math.min(8,Math.round(a)),i.push(`fast\xd7${n.__retroSteps}`));let o=t.get(`t0`)==null?0:Math.max(0,Math.min(400,+t.get(`t0`))),s=t.get(`lv`)==null?0:Math.max(1,Math.min(40,Math.round(+t.get(`lv`))));o>0&&(hT(e,o),i.push(`t0=${o}`));let c=s||(o>0?Math.round(1+o/14.5):0);c>1&&(yb(e,c),e.p.hp=e.p.maxHp,i.push(`lv=${c}`)),t.get(`ult`)===`1`&&(bb(e,K.ult.max),i.push(`ult`));let l=e.priv.core;return l&&(l.wonPrev=e.mem.won.slice(),l.lastHp=e.p.hp,l.xpTo=0),e.hud.hpTrail=1,e.hud.shownLevel=e.hud.prevLevel=e.run.level,e.hud.levelRoll=1,e.hud.xpFlash=-1,i.length&&console.log(`[retro] debug flags:`,i.join(` `)),i}function hT(e,t){let n=K.spawn,r=K.boss.at,i=e.priv.foes;e.t=t;let a=e.boss;for(let n=0;n<3;n++)t>r[n]&&(e.mem.won[n]=!0,a.next=n+1,a.down=n+1,a.downT=t-1,a.nextAt=n+1<3?r[n+1]:1/0);if(i){for(;i.nextWave<=t;)i.nextWave+=n.waveEvery;let r=0;for(;i.eliteNext<n.eliteAt.length&&n.eliteAt[i.eliteNext]<t;)i.eliteNext++,r++;e.run.cores+=r}}var gT=o(()=>{Bg(),Kb()});function _T(e,t=Math.random){for(let n=0;n<20;n++){let n=4+3*t();if(Math.abs(n-e)>=.4)return n}return e>5.5?4.2:6.8}function vT(e,t=Math.random){for(let n=0;n<20;n++){let n=t(),r=n<.5?`A`:n<.8?`B`:`C`;if(r!==e)return r}return e===`A`?`B`:`A`}function yT(){let e=typeof n<`u`?n.userActivation:null;return!!e&&e.hasBeenActive===!1}function bT(e,t={}){let n=t.rnd??Math.random,i={...Ie,...t.trims||{}},a=t.clock??(()=>typeof performance<`u`?performance.now()/1e3:0),o=!!t.clock,s=-1e9,c=-1e9;function l(t,a,s=0){if(!o&&TT())return!1;let c=null;try{c=e()}catch{}if(!c)return!1;try{let e=c.ctx,l=e.state===`running`||o;if(!l){if(yT())return!1;try{c.wake?c.wake():e.resume?.().catch(()=>{})}catch{}}let u=(l?e.currentTime+.01:e.currentTime+.12)+Math.max(0,s),d=e.createBiquadFilter();d.type=`lowpass`,d.frequency.value=9e3,d.Q.value=.5,d.connect(c.input);let f=e.createGain();f.gain.value=xT((i[t]??0)+ke),f.connect(d);let p=null;c.conv&&(p=e.createGain(),p.gain.value=.25,f.connect(p),p.connect(c.conv));let m=w(e,f,n,Math.max(-ST,Math.min(ST,a||0)));return Fe[t](m,u,n),!o&&typeof r<`u`&&r.setTimeout(()=>{try{f.disconnect(),p?.disconnect(),d.disconnect()}catch{}},(m.end-e.currentTime)*1e3+3e3),!0}catch{return!1}}let u=0,d=!1,f=0,p=``,m=null;function h(e){clearTimeout(u),u=r.setTimeout(g,e*1e3)}function g(){if(!d||!m)return;let e=CT-(a()-s);if(e>0)return h(e);let t=!1;try{t=!!m.ok()&&!TT()}catch{}t&&_.idle(m.pan()),f=_T(f,n),h(f)}let _={spill(e,t=0){s=a()+t,l(`shard.spill`,e,t)},peek(e,t=0){s=a()+t,l(`shard.peek`,e,t)},idle(e,t){let r=a();if(!t&&(r-s<CT||r-c<wT))return!1;let i=t??vT(p,n);return l(`shard.idle`+i,e)?(p=i,c=r,!0):!1},idleLoop:{start(e){m=e,d=!0,s=Math.max(s,a()),h(CT)},stop(){d=!1,m=null,clearTimeout(u)},running:()=>d}};return _}var xT,ST,CT,wT,TT,ET=o(()=>{ee(),ze(),xT=e=>10**(e/20),ST=.8,CT=2.5,wT=3.5,TT=()=>typeof document<`u`&&!!document.hidden}),DT=o(()=>{ft(),ET(),ze()}),OT={};s(OT,{META:()=>Le,TARGET:()=>YT,analyse:()=>PT,awPort:()=>LT,calibrate:()=>VT,hfJump:()=>qT,hfShare:()=>KT,levels:()=>zT,maxOverlap:()=>WT,offlineEngine:()=>IT,pcm16b64:()=>GT,renderBed:()=>BT,renderKey:()=>RT,renderRun:()=>UT,seeded:()=>kT,snap:()=>HT,view:()=>FT,win:()=>JT});function kT(e){let t=e>>>0||1;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function AT(e){let t=1681.974450955533,n=.7071752369554196,r=Math.tan(Math.PI*t/e),i=10**(3.999843853973347/20),a=i**.4996667741545416,o=1+r/n+r*r,s={b:[(i+a*r/n+r*r)/o,2*(r*r-i)/o,(i-a*r/n+r*r)/o],a:[1,2*(r*r-1)/o,(1-r/n+r*r)/o]};return t=38.13547087602444,n=.5003270373238773,r=Math.tan(Math.PI*t/e),o=1+r/n+r*r,[s,{b:[1,-2,1],a:[1,2*(r*r-1)/o,(1-r/n+r*r)/o]}]}function jT(e,t,n){let r=new Float64Array(e.length),i=0,a=0,o=0,s=0;for(let c=0;c<e.length;c++){let l=t[0]*e[c]+t[1]*i+t[2]*a-n[1]*o-n[2]*s;a=i,i=e[c],s=o,o=l,r[c]=l}return r}function MT(e,t){let n=2*Math.PI*t/e,r=Math.sin(n)/1.4142,i=Math.cos(n),a=1+r;return{b:[(1+i)/2/a,-(1+i)/a,(1+i)/2/a],a:[1,-2*i/a,(1-r)/a]}}function NT(e){let t=e.length,n=Float64Array.from(e),r=new Float64Array(t);for(let e=1,r=0;e<t;e++){let i=t>>1;for(;r&i;i>>=1)r^=i;if(r^=i,e<r){let t=n[e];n[e]=n[r],n[r]=t}}for(let e=2;e<=t;e<<=1){let i=-2*Math.PI/e,a=Math.cos(i),o=Math.sin(i);for(let i=0;i<t;i+=e){let t=1,s=0;for(let c=0;c<e/2;c++){let l=n[i+c],u=r[i+c],d=n[i+c+e/2]*t-r[i+c+e/2]*s,f=n[i+c+e/2]*s+r[i+c+e/2]*t;n[i+c]=l+d,r[i+c]=u+f,n[i+c+e/2]=l-d,r[i+c+e/2]=u-f;let p=t*a-s*o;s=t*o+s*a,t=p}}}let i=new Float64Array(t/2);for(let e=0;e<t/2;e++)i[e]=Math.hypot(n[e],r[e]);return i}function PT(e,t=0,n=null){let r=e.sampleRate,i=[];for(let a=0;a<e.numberOfChannels;a++)i.push(e.getChannelData(a).subarray(Math.floor(t*r),n==null?void 0:Math.floor(n*r)));let a=i[0].length,o=0;for(let e of i)for(let t=0;t<a;t++)o=Math.max(o,Math.abs(e[t]));let[s,c]=AT(r),l=new Float64Array(a+1);{let e=new Float64Array(a);for(let t of i){let n=jT(jT(t,s.b,s.a),c.b,c.a);for(let t=0;t<a;t++)e[t]+=n[t]*n[t]}for(let t=0;t<a;t++)l[t+1]=l[t]+e[t]}let u=(e,t)=>-.691+10*Math.log10((l[t]-l[e])/Math.max(1,t-e)+1e-20),d=Math.floor(.4*r),f=Math.floor(.05*r),p=-999;for(let e=0;e+d<=Math.max(d,a);e+=f)p=Math.max(p,u(e,Math.min(a,e+d)));let m=-999,h=Math.floor(3*r);for(let e=0;e+h<=a;e+=Math.floor(.1*r))m=Math.max(m,u(e,e+h));a<h&&(m=u(0,a));let g=[];for(let e=0;e+d<=a;e+=Math.floor(.1*r))g.push(u(e,e+d));let _=e=>10**((e+.691)/10),v=g.filter(e=>e>-70),y=-999;if(v.length){let e=-.691+10*Math.log10(v.reduce((e,t)=>e+_(t),0)/v.length),t=v.filter(t=>t>e-10);t.length&&(y=-.691+10*Math.log10(t.reduce((e,t)=>e+_(t),0)/t.length))}let b=u(0,a),x=Math.floor(.05*r),S=Math.floor(x/5),C=0,w=[];for(let e=0;e+x<=a;e+=S){let t=0;for(let n of i)for(let r=e;r<e+x;r++)t+=n[r]*n[r];let n=Math.sqrt(t/(x*i.length));w.push([e/r,n]),n>C&&(C=n)}let T=0,E=-1;for(let[e,t]of w)t>=C*.01&&(T=e+.05,E<0&&(E=e));let D=16384,O=Math.max(0,Math.floor((E<0?0:E)*r)),k=new Float64Array(D);for(let e=0;e<D&&O+e<a;e++){let t=0;for(let n of i)t+=n[O+e];k[e]=t/i.length*(.5-.5*Math.cos(2*Math.PI*e/16383))}let A=NT(k),ee=0,j=0,te=0,ne=0;for(let e=1;e<D/2;e++)ee+=e*r/D*A[e],j+=A[e],ne+=A[e]*A[e],e*r/D>6e3&&(te+=A[e]*A[e]);let re=-1,ie=-1,ae=-1,oe=-1,se=e=>{let t=0;for(let n of i)t=Math.max(t,Math.abs(n[e]));return t};for(let e=0;e<a;e++){let t=se(e);if(ae<0&&t>1e-6&&(ae=e),re<0&&t>o*.001&&(re=e),ie<0&&t>o*.5){ie=e;break}}for(let e=a-1;e>=0;e--)if(se(e)>1e-6){oe=e;break}let ce=0,le=0,ue=Math.max(1,Math.ceil(1e-4*r)),de=Math.max(1,Math.ceil(.001*r));if(ae>=0)for(let e=ae;e<Math.min(a,ae+ue);e++)ce=Math.max(ce,se(e));if(oe>=0)for(let e=Math.max(0,oe-de);e<=oe;e++)le=Math.max(le,se(e));let fe=0;{let e=MT(r,12e3),t=i.map(t=>jT(jT(t,e.b,e.a),e.b,e.a)),n=de,s=[];for(let e=0;e+n<=a;e+=n){let r=0,a=0;for(let o=0;o<i.length;o++)for(let s=e;s<e+n;s++)r+=t[o][s]*t[o][s],a+=i[o][s]*i[o][s];Math.sqrt(a/(n*i.length))>o*.00316&&s.push(r/(a+1e-30))}if(s.length>4){let e=s.slice().sort((e,t)=>e-t),t=e[Math.floor(e.length/2)]+1e-12;fe=10*Math.log10(e[e.length-1]/t)}}return{peak:QT(ZT(o)),lufsM:QT(p),lufsS:QT(m),lufsI:QT(y),lufsIu:QT(b),rms50:QT(ZT(C)),dur:Math.round((T-Math.max(0,E))*100)/100,cent:Math.round(ee/(j||1)),att:re<0||ie<0?0:QT((ie-re)/r*1e3),onDb:QT(ZT(ce)-ZT(o)),tailDb:QT(ZT(le)-ZT(o)),hfOut:QT(fe),hf6:QT(10*Math.log10((te+1e-30)/(ne+1e-30)))}}function FT(e={}){return{sound:!0,paused:!1,phase:`play`,clearT:-1,stepN:0,sheet:{kind:e.sheetKind??`none`,exit:null},boss:{live:!1,x:270},run:{ultT:0},p:{x:180},dev:{W:360,touch:!1},...e}}function IT(e){let t=e.sr??44100,n=new OfflineAudioContext(2,Math.ceil(t*e.dur),t),r=0;return{c:n,au:rt({port:{ctx:n,input:n.destination},enabled:!0,clock:()=>r,rnd:kT(e.seed??1),trims:e.trims,trace:e.trace,lp:e.lp,bgm:e.bgm}),setT:e=>r=e}}function LT(e){let t=e.sampleRate,n=e.createDynamicsCompressor();n.threshold.value=-12,n.knee.value=10,n.ratio.value=4,n.attack.value=.003,n.release.value=.25,n.connect(e.destination);let r=e.createGain();r.gain.value=2,r.connect(n);let i=e.createConvolver(),a=Math.floor(t*2.6),o=e.createBuffer(2,a,t),s=kT(5);for(let e=0;e<2;e++){let t=o.getChannelData(e);for(let e=0;e<a;e++)t[e]=(s()*2-1)*(1-e/a)**3}i.buffer=o;let c=e.createGain();c.gain.value=.45,i.connect(c),c.connect(r);let l=e.createGain();return l.gain.value=1,l.connect(n),{ctx:e,input:l,conv:i}}async function RT(e,t={}){let n=t.sr??44100;if(Re.includes(e)){let r=new OfflineAudioContext(2,Math.ceil(n*(t.dur??3)),n),i=LT(r),a=bT(()=>i,{rnd:kT(t.seed??1),trims:t.trims,clock:()=>0}),o=t.pan??.6;return e===`shard.spill`?a.spill(o):e===`shard.peek`?a.peek(o):a.idle(o,e.slice(-1)),r.startRendering()}let r=IT({sr:n,dur:t.dur??(XT.test(e)?6.5:2.5)+(t.muffle==null?0:1.5),seed:t.seed,trims:t.trims,lp:t.lp});if(t.muffle!=null){let n=FT({sheetKind:t.muffle?`levelup`:`none`});r.setT(0),r.au.bed(!1,.01),r.au.sync(n),r.setT(1.5),r.au.sfx(e,n)}else r.setT(.04),r.au.play(e,t.pan??0);return r.c.startRendering()}async function zT(e,t={}){let n=[];for(let r of[1,2,3])n.push(PT(await RT(e,{...t,seed:r})));return{...n.reduce((e,t)=>t.lufsM>e.lufsM?t:e),peak:Math.max(...n.map(e=>e.peak)),att:Math.min(...n.map(e=>e.att)),onDb:Math.max(...n.map(e=>e.onDb)),tailDb:Math.max(...n.map(e=>e.tailDb)),hfOut:Math.max(...n.map(e=>e.hfOut)),hf6:Math.max(...n.map(e=>e.hf6))}}async function BT(e={}){let t=e.dur??16,n=IT({sr:e.sr,dur:t,seed:e.seed,trims:e.trims,bgm:e.bgm});for(let r=0;r<t-.5;r+=.1)n.setT(r),n.au.sync(FT(e.v));return n.c.startRendering()}async function VT(e=Object.keys(YT),t={}){let n={...Ie},r={};for(let i of e){let e=YT[i],a=null;for(let r=0;r<(t.passes??3)&&(a=i===`__bed`?PT(await BT({sr:t.sr,trims:n}),2):await zT(i,{sr:t.sr,trims:n}),!(Math.abs(e-a.lufsM)<.05));r++)n[i]=Math.round((n[i]+e-a.lufsM)*10)/10;r[i]={trim:n[i],lufsM:a.lufsM,target:e}}return{trims:n,out:r}}function HT(e){return{sound:e.sound,paused:e.paused,phase:e.phase,clearT:e.clearT,stepN:e.stepN,sheet:{kind:e.sheet.kind,exit:e.sheet.exit},boss:{live:e.boss.live,x:e.boss.x},run:{ultT:e.run.ultT},p:{x:e.p.x},dev:{W:e.dev.W,touch:e.dev.touch}}}async function UT(e,t,n,r={}){let i=r.lead??.25,a=IT({sr:r.sr,dur:i+(n-t)/60+3,seed:r.seed??7,trace:!0,bgm:r.bgm,trims:r.trims}),o=/* @__PURE__ */ new Map;for(let r of e.events)r.i>=t&&r.i<n&&(o.get(r.i)||o.set(r.i,[]).get(r.i)).push(r);for(let r=t;r<n;r++){a.setT(i+(r-t)/60);for(let e of o.get(r)||[])a.au.sfx(e.k,e.s);a.au.sync(e.frames[r])}return{buf:await a.c.startRendering(),stats:a.au.stats()}}function WT(e){let t=[];for(let[n,r]of e)t.push([n,1]),t.push([r,-1]);t.sort((e,t)=>e[0]-t[0]||e[1]-t[1]);let n=0,r=0;for(let[,e]of t)n+=e,n>r&&(r=n);return r}function GT(e,t=3){let n=kT(t),r=e[0].length,i=e.length,a=new Uint8Array(r*i*2),o=new DataView(a.buffer);for(let t=0;t<r;t++)for(let r=0;r<i;r++){let a=Math.max(-1,Math.min(1,e[r][t]))*32767+(n()-n());o.setInt16((t*i+r)*2,Math.max(-32768,Math.min(32767,Math.round(a))),!0)}let s=``;for(let e=0;e<a.length;e+=32768)s+=String.fromCharCode.apply(null,a.subarray(e,e+32768));return btoa(s)}function KT(e,t=6e3,n=0,r=null){let i=e.sampleRate,a=8192,o=Math.floor(n*i),s=r==null?e.length:Math.min(e.length,Math.floor(r*i)),c=new Float64Array(a/2);for(let t=0;t<e.numberOfChannels;t++){let n=e.getChannelData(t);for(let e=o;e+a<=s;e+=a/2){let t=new Float64Array(a);for(let r=0;r<a;r++)t[r]=n[e+r]*(.5-.5*Math.cos(2*Math.PI*r/8191));let r=NT(t);for(let e=0;e<a/2;e++)c[e]+=r[e]*r[e]}}let l=0,u=0;for(let e=1;e<a/2;e++)u+=c[e],e*i/a>t&&(l+=c[e]);return QT(10*Math.log10((l+1e-30)/(u+1e-30)))}function qT(e,t){let n=e.sampleRate,r=MT(n,12e3),i=[0,1].slice(0,e.numberOfChannels).map(t=>jT(jT(e.getChannelData(t),r.b,r.a),r.b,r.a)),a=(e,t)=>{let r=1e-12;for(let a of i)for(let i=Math.max(0,Math.floor(e*n));i<Math.min(a.length,Math.floor(t*n));i++)r=Math.max(r,Math.abs(a[i]));return r},o=-999,s=0;for(let e of t){let t=ZT(a(e,e+.012))-ZT(a(e-.06,e));ZT(a(e,e+.012))>-90&&ZT(a(e-.06,e))>-90&&t>o&&(o=t,s=e)}return{worst:QT(o),at:Math.round(s*1e3)/1e3}}function JT(e,t,n){let r=e.sampleRate,i=0,a=0,o=0;for(let s=0;s<e.numberOfChannels;s++){let c=e.getChannelData(s);for(let e=Math.max(0,Math.floor(t*r));e<Math.min(c.length,Math.floor(n*r));e++)i=Math.max(i,Math.abs(c[e])),a+=c[e]*c[e],o++}return{peak:QT(ZT(i)),rms:QT(ZT(Math.sqrt(a/Math.max(1,o))))}}var YT,XT,ZT,QT,$T=o(()=>{ft(),ET(),ze(),YT={shard:-40,kill:-44,shoot:-51,slash:-49,pulse:-43,hurt:-38,heal:-32,level:-32,cardup:-51,pick:-37,grace:-34,ready:-36,ult:-28,core:-35,unlock:-28,memory:-40,boss:-30,storm:-36,thunder:-36,gaze:-50,rain:-52,wave:-50,bossDown:-34,over:-30,clear:-24.5,book:-38,cover:-44,page:-43,uihover:-54,pause:-40,resume:-40,"in.tap":-42,"in.crack":-54,"in.burst":-33,"in.gate":-30,"out.press":-42,"out.point":-52,"out.reform":-39,"shard.spill":-38,"shard.peek":-42,"shard.idleA":-46,"shard.idleB":-46,"shard.idleC":-46,__bed:-27.6},XT=/^(clear|storm|boss|over|unlock|in\.gate|bossDown|out\.press|thunder|grace)$/,ZT=e=>e>0?20*Math.log10(e):-999,QT=e=>Math.round(e*10)/10}),eE={};s(eE,{mountRetro:()=>nE});function tE(e){return`#${e}c,#${e}cf{position:absolute;left:0;top:0;image-rendering:pixelated;image-rendering:crisp-edges}
#${e}c{cursor:none;touch-action:none;outline:none}#${e}cf{pointer-events:none;z-index:1}
#${e}ov{position:absolute;inset:0;pointer-events:none;z-index:5;overflow:hidden}
.rt-note{position:absolute;left:50%;top:14px;transform:translateX(-50%);padding:8px 14px;border-radius:999px;background:rgba(14,12,24,.82);border:1px solid rgba(220,210,255,.25);color:#F1EEF6;font:500 12px/1.4 "Helvetica Neue",Helvetica,Arial,sans-serif;white-space:nowrap;opacity:0;transition:opacity .4s}
.rt-door{position:absolute;display:none;align-items:center;justify-content:center;pointer-events:auto;border-radius:50%;background:rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.5);color:#fff;text-decoration:none;font-family:monospace}
.rt-a11y{position:absolute;left:0;top:0;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;pointer-events:auto}`}function nE(e,t={}){let i=t.idPrefix??``,a=!!t.deferStart,o=t.q??new URLSearchParams(location.search),s=r;function c(){let e=innerWidth,t=innerHeight,i=Math.max(1,r.devicePixelRatio||1),a=Math.min(e,t),c=e=>{try{return matchMedia(e).matches}catch{return!1}},l=(n.maxTouchPoints||0)>0,u=/iPhone|iPod|iPad|Android|Mobile/i.test(n.userAgent||``),d=c(`(hover: none)`),f=o.get(`touch`)===`1`||c(`(pointer:coarse)`)||c(`(any-pointer:coarse)`)&&d||l&&(d||u)||!!s.__forceTouch,p=o.get(`dev`)||(a<600&&f?`ph`:f&&a<1100?`tab`:`pc`);[`pc`,`tab`,`ph`].includes(p)||(p=`pc`),!o.get(`dev`)&&p===`pc`&&e<600&&t>e&&(p=`ph`);let m=p!==`pc`||f,h;if(o.get(`s`))h=Math.max(1,parseFloat(o.get(`s`)));else{let n=Math.round(t*i),r=Math.round(e*i),a=p===`ph`?Math.max(2,Math.round(2*i)):p===`tab`?Math.max(2,Math.round(3*i)):Math.max(2,Math.round(n/216));for(;Math.ceil(r/a)>480;)a++;h=a/i}let g=Math.ceil(e/h),_=Math.ceil(t/h),v=_>g;return{kind:p,touch:m,hud:p===`pc`?`pc`:v?p===`ph`?`phone`:`tabp`:`tab`,scr:p===`ph`&&v?`ph`:m?`tab`:`pc`,W:g,H:_,S:h*i,dpr:i,c:h,portrait:v,compact:_<200,cssW:e,cssH:t,ox:Math.round((e-g*h)/2),oy:Math.round((t-_*h)/2)}}let l=document.createElement(`style`);l.textContent=tE(i),document.head.appendChild(l);let u=!t.canvases,d=t.canvases?.c??document.createElement(`canvas`);u&&(d.id=i+`c`,e.appendChild(d));let f=d.getContext(`2d`),p=t.canvases?.cf??document.createElement(`canvas`);u&&(p.id=i+`cf`,e.appendChild(p));let m=p.getContext(`2d`);_t(f,m);let h=t.canvases?.ov??document.createElement(`div`);u&&(h.id=i+`ov`,e.appendChild(h));let g=document.createElement(`div`);g.className=`rt-note`,h.appendChild(g);let _=0;function v(e){g.textContent=e,g.style.opacity=`1`,clearTimeout(_),_=r.setTimeout(()=>g.style.opacity=`0`,2600)}let y=document.createElement(`a`);y.className=`ds-retro-ui rt-door`,y.target=`_blank`,y.rel=`noopener`,y.textContent=`↗`,h.appendChild(y);let b=document.createElement(`button`);b.type=`button`,b.className=`ds-retro-ui rt-a11y`,b.dataset.act=`wake`,b.textContent=`Wake up`,b.tabIndex=a?-1:0,b.addEventListener(`click`,()=>r.dispatchEvent(new CustomEvent(`retro:wake`))),h.appendChild(b),d.setAttribute(`aria-label`,`Retro mode — a small game`),d.tabIndex=-1;function x(e){(d.width!==e.W||d.height!==e.H)&&(d.width=e.W,d.height=e.H,p.width=e.W*Ct,p.height=e.H*Ct);for(let t of[d,p])t.style.width=`${e.W*e.c}px`,t.style.height=`${e.H*e.c}px`,t.style.left=`${e.ox}px`,t.style.top=`${e.oy}px`;f.imageSmoothingEnabled=!1,m.imageSmoothingEnabled=!1}let S=(+(o.get(`seed`)||s.__retroSeed||0)||Math.random()*2**31|0)>>>0,C=t.dev??c();a?(p.width!==C.W*Ct||p.height!==C.H*Ct)&&(p.width=C.W*Ct,p.height=C.H*Ct,m.imageSmoothingEnabled=!1):x(C);let w=eg(C,S);w.dbg=o.get(`debug`)===`1`||!!s.__dreamDebug,o.get(`snd`)===`log`&&(s.__rtSndLog=!0),o.get(`fresh`)===`1`?s.__rtNoSave=!0:OC(w),JS(w,!1),mT(w,o),!a&&o.get(`rules`)!==`0`&&PC(w);let T=tt(t.audio),E=o.get(`snd`)===`0`?null:T?t.audio:rt({port:t.audio??null,enabled:w.sound});ng(E?(e,t)=>E.sfx(t,e):null);let D=E?it(E):()=>{},O=e=>{let t=e.detail;t&&t.from!==`retro`&&typeof t.on==`boolean`&&(w.sound=w.persist.sound=t.on)};addEventListener(`ds:sound`,O);let k=(e,t)=>[(e-C.ox)/C.c,(t-C.oy)/C.c],A=()=>{};a||(A=ty(d,w,k)),kt().catch(()=>{}),Fw([...K.boss.names.map(e=>`nightmare|`+e),`ult|Creative Overdrive`,`ult|Creative Singularity`,...Object.values(Ob).map(e=>`fusion|`+e)],P);function ee(){let e=w.sheet;if(!w.dev.touch){let t=e.kind===`none`?w.hud.hover?`pointer`:w.phase===`play`||w.phase===`clearing`?`none`:`default`:e.hover?`pointer`:`default`;d.style.cursor!==t&&(d.style.cursor=t)}y.style.display!==`none`&&(y.style.display=`none`)}let j=!a,te=!a,ne=0,re=null,ie={step:()=>ne?NC(w):ZS(w),draw:()=>{te&&(Yw(f,w),ee()),E?.sync(w)},onHidden:()=>{E?.setHidden(!0),FC(w)},onShown:()=>{E?.setHidden(!1),ne?w.hidden=!1:IC(w)}},ae=a?null:fT(ie),oe=0,se=()=>{cancelAnimationFrame(oe),oe=requestAnimationFrame(()=>{let e=c();(e.W!==C.W||e.H!==C.H||e.c!==C.c||e.ox!==C.ox||e.oy!==C.oy||e.cssW!==C.cssW||e.cssH!==C.cssH)&&(C=e,x(e),LC(w,e))})},ce=r.visualViewport,le=!1,ue=()=>{le||(le=!0,addEventListener(`resize`,se),ce?.addEventListener(`resize`,se))};a||ue();let de=()=>{if(t.onWake)return t.onWake();console.log(`[retro] wake up (prototype: no Awake page here)`),v(`WAKE UP — この試作にはAwakeページがありません`)},fe=()=>{if(t.onWorks)return t.onWorks();console.log(`[retro] all works (prototype: no works page here)`),v(`ALL WORKS — 試作では作品一覧へは移動しません`)};addEventListener(`retro:wake`,de),addEventListener(`retro:works`,fe),s.__retro={s:w,get loop(){return ae},mods:{CO:KS,FO:sx,SK:sy},debug:()=>({state:()=>({phase:w.phase,t:w.t,hp:w.p.hp,maxHp:w.p.maxHp,level:w.run.level,xp:w.run.xp,need:w.run.need,sheet:w.sheet.kind,exit:w.sheet.exit,en:w.en.n,boss:w.boss.i,live:w.boss.live,ult:w.run.ult,ultT:w.run.ultT,mem:w.mem.won.slice(),x:w.p.x,y:w.p.y,vx:w.p.vx,vy:w.p.vy,gameIn:w.gameIn,scroll:w.scroll,V:w.V,choosing:w.run.choosing,paused:w.paused,spread:w.sheet.spread,open:w.sheet.open,hover:w.sheet.hover,sel:w.sheet.sel,hits:w.sheet.hits.map(e=>e.id),coins:w.hud.layout?.coins,touchOD:w.hud.layout?.touchOD,started:j,owned:te,exiting:!!ne,exitTo:re}),hp:e=>{e<=0?(w.p.iframes=0,w.run.ultT=0,vC(w,1e9)):w.p.hp=Math.min(w.p.maxHp,e)},pick:e=>Jy(w,e),bossAt:e=>uS(w,e),ult:e=>bb(w,e),skip:e=>{for(let t=0;t<Math.round(e*60);t++)ZS(w)},kill:()=>dS(w),level:e=>yb(w,e),unlock:e=>fS(w,e),clear:()=>{for(let e=0;e<3;e++)fS(w,e);w.phase===`play`&&xC(w)},over:()=>{w.p.iframes=0,w.run.ultT=0,vC(w,1e9)},rules:(e=!1)=>uC(w,e),sheet:e=>oC(w,e),en:w.en,stats:()=>({...w.stats,level:w.run.level,kills:w.run.kills,sfx:w.sfxLog.slice(-20)})})},s.__retroAudio=E?{au:E,stats:()=>E.stats(),levels:e=>Promise.resolve().then(()=>($T(),OT)).then(t=>t.levels(e))}:null,s.__retroReady=!0;let pe=w.scroll;function me(e){let t=w.p,n=t.alive,r=t.deadT;t.alive=!1,t.deadT=1e9;try{e()}finally{t.alive=n,t.deadT=r}}function he(){let e=K.move,t=w.wt;return w.p.y+e.bobA*Math.sin(e.bobF*t)+e.bobB*Math.sin(e.bobG*t+e.bobP)}let ge=null,_e={paintWorld(e,t){let n=w.scroll;w.scroll=pe+Math.min(0,t.t)*K.V0*(1+.6*Math.max(0,t.surge));try{me(()=>Yw(e,w))}finally{w.scroll=n}},paintFull(e,t){t&&t.dreamer===!1?me(()=>Yw(e,w)):Yw(e,w)},paintDreamer(e,t,n,r){let i=w.look,a=i.pst.startsWith(`drain`)?i.pst:`base`;r>=1?Xi(e,`dreamer.fly`,Gi(`dreamer.fly`,w.wt),Math.round(t),Math.round(n),{t:w.wt,pal:tu(a).pn}):Xi(e,`dreamer.land`,Math.max(0,Math.min(7,3+Math.floor((r-.5)/.5*5))),Math.round(t),Math.round(n),{t:w.wt,pal:tu(a).pn})},dreamerAt:()=>({x:Math.round(w.p.x),y:Math.round(he())}),start(){if(!(j||ne)){j=!0,ge=document.activeElement,A=ty(d,w,k),o.get(`rules`)!==`0`&&PC(w),b.tabIndex=0;try{d.focus({preventScroll:!0})}catch{}ae=fT(ie)}},takeOver(){!j||ne||te||(te=!0,ue(),se())},exit(e){if(ne)return;ne=performance.now(),re=e,te=!1,A(),A=()=>{},b.tabIndex=-1,(document.activeElement===b||document.activeElement===d)&&document.activeElement.blur(),MC(w),ae||=fT(ie);let t=ge;ge=null,r.setTimeout(()=>{try{t&&t.isConnected&&!t.disabled&&t.offsetParent!==null&&t.focus({preventScroll:!0})}catch{}},0)},exiting:()=>!!ne,destroy:()=>ve()};function ve(){ae?.stop(),ae=null,A(),cancelAnimationFrame(oe),clearTimeout(_),removeEventListener(`resize`,se),ce?.removeEventListener(`resize`,se),removeEventListener(`retro:wake`,de),removeEventListener(`retro:works`,fe),ng(null),D(),removeEventListener(`ds:sound`,O),E&&T?E.bed(!1,.6):E?.dispose(),s.__retroAudio?.au===E&&delete s.__retroAudio;for(let e of u?[d,p,h,l]:[g,y,b,l])e.remove();s.__retro?.s===w&&delete s.__retro,s.__retroReady=!1}return Object.assign(ve,_e)}var rE=o(()=>{Ot(),Yt(),Kh(),Bg(),XC(),dT(),oy(),pT(),GS(),Kb(),XC(),gT(),Uw(),mn(),xo(),ou(),DT()}),iE={};s(iE,{createAudio:()=>dE,mountRetro:()=>cE,warm:()=>uE,warmSound:()=>sE});var aE=null,oE=null;function sE(){return oE||=Promise.resolve().then(()=>(ft(),$e)).then(e=>{aE=e},()=>{oE=null}),oE}function cE(e,t){return Promise.all([Promise.resolve().then(()=>(rE(),eE)),sE()]).then(([n])=>n.mountRetro(e,t))}var lE=null;function uE(){return lE||=Promise.all([Promise.resolve().then(()=>(rE(),eE)),sE()]).then(()=>{}),lE}function dE(e){return aE?aE.createRetroAudio({port:e.port,enabled:e.enabled}):(sE(),null)}return l(iE)})(),o=a,s=`2026-11-03T14:19:34Z-19e9fe76`})))()}c();export{s as RT_BUILD,o as RT_GAME};
//# sourceMappingURL=RetroGame.Cv6EecMf.v47e250c0.mjs.map