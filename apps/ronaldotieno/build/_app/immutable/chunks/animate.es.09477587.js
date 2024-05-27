function Dt(t,e){t.indexOf(e)===-1&&t.push(e)}const gt=(t,e,n)=>Math.min(Math.max(n,t),e),m={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},P=t=>typeof t=="number",L=t=>Array.isArray(t)&&!P(t[0]),Wt=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function Mt(t,e){return L(t)?t[Wt(0,t.length,e)]:t}const mt=(t,e,n)=>-n*t+n*e+t,yt=()=>{},w=t=>t,G=(t,e,n)=>e-t===0?1:(n-t)/(e-t);function vt(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=G(0,e,i);t.push(mt(n,1,s))}}function wt(t){const e=[0];return vt(e,t-1),e}function Et(t,e=wt(t.length),n=w){const i=t.length,s=i-e.length;return s>0&&vt(e,s),r=>{let o=0;for(;o<i-2&&!(r<e[o+1]);o++);let c=gt(0,1,G(e[o],e[o+1],r));return c=Mt(n,o)(c),mt(t[o],t[o+1],c)}}const St=t=>Array.isArray(t)&&P(t[0]),J=t=>typeof t=="object"&&!!t.createAnimation,O=t=>typeof t=="function",et=t=>typeof t=="string",H={ms:t=>t*1e3,s:t=>t/1e3};function Rt(t,e){return e?t*(1e3/e):0}const bt=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Ht=1e-7,It=12;function Ft(t,e,n,i,s){let r,o,c=0;do o=e+(n-e)/2,r=bt(o,i,s)-t,r>0?n=o:e=o;while(Math.abs(r)>Ht&&++c<It);return o}function R(t,e,n,i){if(t===e&&n===i)return w;const s=r=>Ft(r,0,1,t,n);return r=>r===0||r===1?r:bt(s(r),e,i)}const _t=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const i=n*t,s=e==="end"?Math.floor(i):Math.ceil(i);return gt(0,1,s/t)},st={ease:R(.25,.1,.25,1),"ease-in":R(.42,0,1,1),"ease-in-out":R(.42,0,.58,1),"ease-out":R(0,0,.58,1)},Vt=/\((.*?)\)/;function rt(t){if(O(t))return t;if(St(t))return R(...t);if(st[t])return st[t];if(t.startsWith("steps")){const e=Vt.exec(t);if(e){const n=e[1].split(",");return _t(parseFloat(n[0]),n[1].trim())}}return w}class Ot{constructor(e,n=[0,1],{easing:i,duration:s=m.duration,delay:r=m.delay,endDelay:o=m.endDelay,repeat:c=m.repeat,offset:d,direction:l="normal",autoplay:h=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=w,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((a,v)=>{this.resolve=a,this.reject=v}),i=i||m.easing,J(i)){const a=i.createAnimation(n);i=a.easing,n=a.keyframes||n,s=a.duration||s}this.repeat=c,this.easing=L(i)?w:rt(i),this.updateDuration(s);const p=Et(n,d,L(i)?i.map(rt):w);this.tick=a=>{var v;r=r;let g=0;this.pauseTime!==void 0?g=this.pauseTime:g=(a-this.startTime)*this.rate,this.t=g,g/=1e3,g=Math.max(g-r,0),this.playState==="finished"&&this.pauseTime===void 0&&(g=this.totalDuration);const A=g/this.duration;let _=Math.floor(A),E=A%1;!E&&A>=1&&(E=1),E===1&&_--;const V=_%2;(l==="reverse"||l==="alternate"&&V||l==="alternate-reverse"&&!V)&&(E=1-E);const D=g>=this.totalDuration?1:Math.min(E,1),x=p(this.easing(D));e(x),this.pauseTime===void 0&&(this.playState==="finished"||g>=this.totalDuration+o)?(this.playState="finished",(v=this.resolve)===null||v===void 0||v.call(this,x)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},h&&this.play()}play(){const e=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=e-this.pauseTime:this.startTime||(this.startTime=e),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var e;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(e=this.reject)===null||e===void 0||e.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(e){this.duration=e,this.totalDuration=e*(this.repeat+1)}get currentTime(){return this.t}set currentTime(e){this.pauseTime!==void 0||this.rate===0?this.pauseTime=e:this.startTime=performance.now()-e/this.rate}get playbackRate(){return this.rate}set playbackRate(e){this.rate=e}}class jt{setAnimation(e){this.animation=e,e==null||e.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const K=new WeakMap;function Tt(t){return K.has(t)||K.set(t,{transforms:[],values:new Map}),K.get(t)}function $t(t,e){return t.has(e)||t.set(e,new jt),t.get(e)}const Bt=["","X","Y","Z"],qt=["translate","scale","rotate","skew"],U={x:"translateX",y:"translateY",z:"translateZ"},ot={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},Ct={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:ot,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:w},skew:ot},F=new Map,nt=t=>`--motion-${t}`,N=["x","y","z"];qt.forEach(t=>{Bt.forEach(e=>{N.push(t+e),F.set(nt(t+e),Ct[t])})});const Ut=(t,e)=>N.indexOf(t)-N.indexOf(e),Nt=new Set(N),At=t=>Nt.has(t),Gt=(t,e)=>{U[e]&&(e=U[e]);const{transforms:n}=Tt(t);Dt(n,e),t.style.transform=Kt(n)},Kt=t=>t.sort(Ut).reduce(kt,"").trim(),kt=(t,e)=>`${t} ${e}(var(${nt(e)}))`,Q=t=>t.startsWith("--"),at=new Set;function Xt(t){if(!at.has(t)){at.add(t);try{const{syntax:e,initialValue:n}=F.has(t)?F.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch{}}}const k=(t,e)=>document.createElement("div").animate(t,e),ct={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{k({opacity:[1]})}catch{return!1}return!0},finished:()=>!!k({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{k({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},X={},z={};for(const t in ct)z[t]=()=>(X[t]===void 0&&(X[t]=ct[t]()),X[t]);const Zt=.015,Jt=(t,e)=>{let n="";const i=Math.round(e/Zt);for(let s=0;s<i;s++)n+=t(G(0,i-1,s))+", ";return n.substring(0,n.length-2)},lt=(t,e)=>O(t)?z.linearEasing()?`linear(${Jt(t,e)})`:m.easing:St(t)?Qt(t):t,Qt=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`;function Yt(t,e){for(let n=0;n<t.length;n++)t[n]===null&&(t[n]=n?t[n-1]:e());return t}const te=t=>Array.isArray(t)?t:[t];function Y(t){return U[t]&&(t=U[t]),At(t)?nt(t):t}const B={get:(t,e)=>{e=Y(e);let n=Q(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&n!==0){const i=F.get(e);i&&(n=i.initialValue)}return n},set:(t,e,n)=>{e=Y(e),Q(e)?t.style.setProperty(e,n):t.style[e]=n}};function xt(t,e=!0){if(!(!t||t.playState==="finished"))try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch{}}function ee(t,e){var n;let i=(e==null?void 0:e.toDefaultUnit)||w;const s=t[t.length-1];if(et(s)){const r=((n=s.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";r&&(i=o=>o+r)}return i}function ne(){return window.__MOTION_DEV_TOOLS_RECORD}function ie(t,e,n,i={},s){const r=ne(),o=i.record!==!1&&r;let c,{duration:d=m.duration,delay:l=m.delay,endDelay:h=m.endDelay,repeat:p=m.repeat,easing:a=m.easing,persist:v=!1,direction:g,offset:A,allowWebkitAcceleration:_=!1,autoplay:E=!0}=i;const V=Tt(t),D=At(e);let x=z.waapi();D&&Gt(t,e);const y=Y(e),j=$t(V.values,y),S=F.get(y);return xt(j.animation,!(J(a)&&j.generator)&&i.record!==!1),()=>{const $=()=>{var f,W;return(W=(f=B.get(t,y))!==null&&f!==void 0?f:S==null?void 0:S.initialValue)!==null&&W!==void 0?W:0};let u=Yt(te(n),$);const it=ee(u,S);if(J(a)){const f=a.createAnimation(u,e!=="opacity",$,y,j);a=f.easing,u=f.keyframes||u,d=f.duration||d}if(Q(y)&&(z.cssRegisterProperty()?Xt(y):x=!1),D&&!z.linearEasing()&&(O(a)||L(a)&&a.some(O))&&(x=!1),x){S&&(u=u.map(T=>P(T)?S.toDefaultUnit(T):T)),u.length===1&&(!z.partialKeyframes()||o)&&u.unshift($());const f={delay:H.ms(l),duration:H.ms(d),endDelay:H.ms(h),easing:L(a)?void 0:lt(a,d),direction:g,iterations:p+1,fill:"both"};c=t.animate({[y]:u,offset:A,easing:L(a)?a.map(T=>lt(T,d)):void 0},f),c.finished||(c.finished=new Promise((T,Pt)=>{c.onfinish=T,c.oncancel=Pt}));const W=u[u.length-1];c.finished.then(()=>{v||(B.set(t,y,W),c.cancel())}).catch(yt),_||(c.playbackRate=1.000001)}else if(s&&D)u=u.map(f=>typeof f=="string"?parseFloat(f):f),u.length===1&&u.unshift(parseFloat($())),c=new s(f=>{B.set(t,y,it?it(f):f)},u,Object.assign(Object.assign({},i),{duration:d,easing:a}));else{const f=u[u.length-1];B.set(t,y,S&&P(f)?S.toDefaultUnit(f):f)}return o&&r(t,e,u,{duration:d,delay:l,easing:a,repeat:p,offset:A},"motion-one"),j.setAnimation(c),c&&!E&&c.pause(),c}}const se=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function zt(t,e){var n;return typeof t=="string"?e?((n=e[t])!==null&&n!==void 0||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const re=t=>t(),Lt=(t,e,n=m.duration)=>new Proxy({animations:t.map(re).filter(Boolean),duration:n,options:e},ae),oe=t=>t.animations[0],ae={get:(t,e)=>{const n=oe(t);switch(e){case"duration":return t.duration;case"currentTime":return H.s((n==null?void 0:n[e])||0);case"playbackRate":case"playState":return n==null?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(ce)).catch(yt)),t.finished;case"stop":return()=>{t.animations.forEach(i=>xt(i))};case"forEachNative":return i=>{t.animations.forEach(s=>i(s,t))};default:return typeof(n==null?void 0:n[e])>"u"?void 0:()=>t.animations.forEach(i=>i[e]())}},set:(t,e,n)=>{switch(e){case"currentTime":n=H.ms(n);case"playbackRate":for(let i=0;i<t.animations.length;i++)t.animations[i][e]=n;return!0}return!1}},ce=t=>t.finished;function le(t,e,n){return O(t)?t(e,n):t}function fe(t){return function(n,i,s={}){n=zt(n);const r=n.length,o=[];for(let c=0;c<r;c++){const d=n[c];for(const l in i){const h=se(s,l);h.delay=le(h.delay,c,r);const p=ie(d,l,i[l],h,t);o.push(p)}}return Lt(o,s,s.duration)}}const ue=fe(Ot);function de(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}const q=new WeakMap;let b;function he(t,e){if(e){const{inlineSize:n,blockSize:i}=e[0];return{width:n,height:i}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function pe({target:t,contentRect:e,borderBoxSize:n}){var i;(i=q.get(t))===null||i===void 0||i.forEach(s=>{s({target:t,contentSize:e,get size(){return he(t,n)}})})}function ge(t){t.forEach(pe)}function me(){typeof ResizeObserver>"u"||(b=new ResizeObserver(ge))}function ye(t,e){b||me();const n=zt(t);return n.forEach(i=>{let s=q.get(i);s||(s=new Set,q.set(i,s)),s.add(e),b==null||b.observe(i)}),()=>{n.forEach(i=>{const s=q.get(i);s==null||s.delete(e),s!=null&&s.size||b==null||b.unobserve(i)})}}const C=new Set;let I;function ve(){I=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};C.forEach(n=>n(e))},window.addEventListener("resize",I)}function we(t){return C.add(t),I||ve(),()=>{C.delete(t),!C.size&&I&&(I=void 0)}}function Ee(t,e){return O(t)?we(t):ye(t,e)}const Se=50,ft=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),be=()=>({time:0,x:ft(),y:ft()}),Oe={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function ut(t,e,n,i){const s=n[e],{length:r,position:o}=Oe[e],c=s.current,d=n.time;s.current=t["scroll"+o],s.scrollLength=t["scroll"+r]-t["client"+r],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=G(0,s.scrollLength,s.current);const l=i-d;s.velocity=l>Se?0:Rt(s.current-c,l)}function Te(t,e,n){ut(t,"x",e,n),ut(t,"y",e,n),e.time=n}function Ae(t,e){let n={x:0,y:0},i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i instanceof SVGGraphicsElement&&"getBBox"in i){const{top:s,left:r}=i.getBBox();for(n.x+=r,n.y+=s;i&&i.tagName!=="svg";)i=i.parentNode}return n}const xe={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},tt={start:0,center:.5,end:1};function dt(t,e,n=0){let i=0;if(tt[t]!==void 0&&(t=tt[t]),et(t)){const s=parseFloat(t);t.endsWith("px")?i=s:t.endsWith("%")?t=s/100:t.endsWith("vw")?i=s/100*document.documentElement.clientWidth:t.endsWith("vh")?i=s/100*document.documentElement.clientHeight:t=s}return P(t)&&(i=e*t),n+i}const ze=[0,0];function Le(t,e,n,i){let s=Array.isArray(t)?t:ze,r=0,o=0;return P(t)?s=[t,t]:et(t)&&(t=t.trim(),t.includes(" ")?s=t.split(" "):s=[t,tt[t]?t:"0"]),r=dt(s[0],n,i),o=dt(s[1],e),r-o}const Pe={x:0,y:0};function De(t,e,n){let{offset:i=xe.All}=n;const{target:s=t,axis:r="y"}=n,o=r==="y"?"height":"width",c=s!==t?Ae(s,t):Pe,d=s===t?{width:t.scrollWidth,height:t.scrollHeight}:{width:s.clientWidth,height:s.clientHeight},l={width:t.clientWidth,height:t.clientHeight};e[r].offset.length=0;let h=!e[r].interpolate;const p=i.length;for(let a=0;a<p;a++){const v=Le(i[a],l[o],d[o],c[r]);!h&&v!==e[r].interpolatorOffsets[a]&&(h=!0),e[r].offset[a]=v}h&&(e[r].interpolate=Et(wt(p),e[r].offset),e[r].interpolatorOffsets=[...e[r].offset]),e[r].progress=e[r].interpolate(e[r].current)}function We(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!=t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function Me(t,e,n,i={}){const s=i.axis||"y";return{measure:()=>We(t,i.target,n),update:r=>{Te(t,n,r),(i.offset||i.target)&&De(t,n,i)},notify:O(e)?()=>e(n):Re(e,n[s])}}function Re(t,e){return t.pause(),t.forEachNative((n,{easing:i})=>{var s,r;if(n.updateDuration)i||(n.easing=w),n.updateDuration(1);else{const o={duration:1e3};i||(o.easing="linear"),(r=(s=n.effect)===null||s===void 0?void 0:s.updateTiming)===null||r===void 0||r.call(s,o)}}),()=>{t.currentTime=e.progress}}const M=new WeakMap,ht=new WeakMap,Z=new WeakMap,pt=t=>t===document.documentElement?window:t;function Ie(t,e={}){var{container:n=document.documentElement}=e,i=de(e,["container"]);let s=Z.get(n);s||(s=new Set,Z.set(n,s));const r=be(),o=Me(n,t,r,i);if(s.add(o),!M.has(n)){const l=()=>{const p=performance.now();for(const a of s)a.measure();for(const a of s)a.update(p);for(const a of s)a.notify()};M.set(n,l);const h=pt(n);window.addEventListener("resize",l,{passive:!0}),n!==document.documentElement&&ht.set(n,Ee(n,l)),h.addEventListener("scroll",l,{passive:!0})}const c=M.get(n),d=requestAnimationFrame(c);return()=>{var l;typeof t!="function"&&t.stop(),cancelAnimationFrame(d);const h=Z.get(n);if(!h||(h.delete(o),h.size))return;const p=M.get(n);M.delete(n),p&&(pt(n).removeEventListener("scroll",p),(l=ht.get(n))===null||l===void 0||l(),window.removeEventListener("resize",p))}}function He(t,e={}){return Lt([()=>{const n=new Ot(t,[0,1],e);return n.finished.catch(()=>{}),n}],e,e.duration)}function Fe(t,e,n){return(O(t)?He:ue)(t,e,n)}export{xe as S,Fe as a,Ie as s};
