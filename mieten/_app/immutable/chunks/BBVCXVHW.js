import{Y as b,Z as E,_ as k,$ as A,a0 as C,a1 as M,a2 as P,G as W,a3 as S,a4 as $,H as q,a5 as B,a6 as T,y as w,x as D,a as j,C as p,a7 as G,a8 as Z,a9 as x,aa as z,ab as F,ac as J,ad as K,A as Q,h as L,p as U,c as X,m as rr}from"./B8FVfT0j.js";import{b as tr}from"./BolJ4g0J.js";const ar=["touchstart","touchmove"];function er(r){return ar.includes(r)}function nr(r){var t=k,e=A;b(null),E(null);try{return r()}finally{b(t),E(e)}}const H=new Set,N=new Set;function sr(r,t,e,o={}){function s(a){if(o.capture||y.call(t,a),!a.cancelBubble)return nr(()=>e==null?void 0:e.call(this,a))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?W(()=>{t.addEventListener(r,s,o)}):t.addEventListener(r,s,o),s}function fr(r,t,e,o,s){var a={capture:o,passive:s},u=sr(r,t,e,a);(t===document.body||t===window||t===document)&&P(()=>{t.removeEventListener(r,u,a)})}function cr(r){for(var t=0;t<r.length;t++)H.add(r[t]);for(var e of N)e(r)}function y(r){var O;var t=this,e=t.ownerDocument,o=r.type,s=((O=r.composedPath)==null?void 0:O.call(r))||[],a=s[0]||r.target,u=0,_=r.__root;if(_){var l=s.indexOf(_);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var h=s.indexOf(t);if(h===-1)return;l<=h&&(u=l)}if(a=s[u]||r.target,a!==t){C(r,"currentTarget",{configurable:!0,get(){return a||e}});var m=k,f=A;b(null),E(null);try{for(var n,i=[];a!==null;){var c=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+o];if(d!=null&&(!a.disabled||r.target===a))if(M(d)){var[V,...Y]=d;V.apply(a,[r,...Y])}else d.call(a,r)}catch(g){n?i.push(g):n=g}if(r.cancelBubble||c===t||c===null)break;a=c}if(n){for(let g of i)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=t,delete r.currentTarget,b(m),E(f)}}}function lr(r,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e+"")}function ir(r,t){return I(r,t)}function dr(r,t){S(),t.intro=t.intro??!1;const e=t.target,o=L,s=p;try{for(var a=$(e);a&&(a.nodeType!==8||a.data!==q);)a=B(a);if(!a)throw T;w(!0),D(a),j();const u=I(r,{...t,anchor:a});if(p===null||p.nodeType!==8||p.data!==G)throw Z(),T;return w(!1),u}catch(u){if(u===T)return t.recover===!1&&x(),S(),z(e),w(!1),ir(r,t);throw u}finally{w(o),D(s)}}const v=new Map;function I(r,{target:t,anchor:e,props:o={},events:s,context:a,intro:u=!0}){S();var _=new Set,l=f=>{for(var n=0;n<f.length;n++){var i=f[n];if(!_.has(i)){_.add(i);var c=er(i);t.addEventListener(i,y,{passive:c});var d=v.get(i);d===void 0?(document.addEventListener(i,y,{passive:c}),v.set(i,1)):v.set(i,d+1)}}};l(F(H)),N.add(l);var h=void 0,m=J(()=>{var f=e??t.appendChild(K());return Q(()=>{if(a){U({});var n=X;n.c=a}s&&(o.$$events=s),L&&tr(f,null),h=r(f,o)||{},L&&(A.nodes_end=p),a&&rr()}),()=>{var c;for(var n of _){t.removeEventListener(n,y);var i=v.get(n);--i===0?(document.removeEventListener(n,y),v.delete(n)):v.set(n,i)}N.delete(l),f!==e&&((c=f.parentNode)==null||c.removeChild(f))}});return R.set(h,m),h}let R=new WeakMap;function _r(r,t){const e=R.get(r);return e?(R.delete(r),e(t)):Promise.resolve()}export{cr as d,fr as e,dr as h,ir as m,lr as s,_r as u};
