var un=Array.isArray,on=Array.prototype.indexOf,zn=Array.from,Jn=Object.defineProperty,K=Object.getOwnPropertyDescriptor,_n=Object.getOwnPropertyDescriptors,cn=Object.prototype,vn=Array.prototype,Ct=Object.getPrototypeOf,Nt=Object.isExtensible;function Wn(t){return typeof t=="function"}const Xn=()=>{};function Qn(t){return t()}function Ft(t){for(var e=0;e<t.length;e++)t[e]()}const O=2,Mt=4,it=8,mt=16,D=32,U=64,et=128,A=256,rt=512,E=1024,P=2048,L=4096,H=8192,ot=16384,hn=32768,Lt=65536,te=1<<17,pn=1<<19,qt=1<<20,wt=1<<21,Z=Symbol("$state"),ne=Symbol("legacy props"),ee=Symbol("");function Yt(t){return t===this.v}function dn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function jt(t){return!dn(t,this.v)}function wn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function yn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function En(t){throw new Error("https://svelte.dev/e/effect_orphan")}function gn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function re(){throw new Error("https://svelte.dev/e/hydration_failed")}function ae(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Tn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function mn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function An(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let _t=!1;function le(){_t=!0}const se=1,fe=2,ue=4,ie=8,oe=16,_e=1,ce=2,ve=4,he=8,pe=16,de=1,we=2,ye=4,Ee=1,ge=2,xn="[",In="[!",Rn="]",Ht={},g=Symbol(),Te="http://www.w3.org/1999/xhtml";function Bt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let p=null;function Dt(t){p=t}function me(t,e=!1,n){var r=p={p,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};_t&&!e&&(p.l={s:null,u:null,r1:[],r2:At(!1)}),kn(()=>{r.d=!0})}function Ae(t){const e=p;if(e!==null){const _=e.e;if(_!==null){var n=h,r=v;e.e=null;try{for(var l=0;l<_.length;l++){var a=_[l];st(a.effect),B(a.reaction),zt(a.fn)}}finally{st(n),B(r)}}p=e.p,e.m=!0}return{}}function ct(){return!_t||p!==null&&p.l===null}function Y(t,e){if(typeof t!="object"||t===null||Z in t)return t;const n=Ct(t);if(n!==cn&&n!==vn)return t;var r=new Map,l=un(t),a=S(0),_=v,c=u=>{var s=v;B(_);var f;return f=u(),B(s),f};return l&&r.set("length",S(t.length)),new Proxy(t,{defineProperty(u,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Tn();var i=r.get(s);return i===void 0?(i=c(()=>S(f.value)),r.set(s,i)):N(i,c(()=>Y(f.value))),!0},deleteProperty(u,s){var f=r.get(s);if(f===void 0)s in u&&r.set(s,c(()=>S(g)));else{if(l&&typeof s=="string"){var i=r.get("length"),o=Number(s);Number.isInteger(o)&&o<i.v&&N(i,o)}N(f,g),bt(a)}return!0},get(u,s,f){var b;if(s===Z)return t;var i=r.get(s),o=s in u;if(i===void 0&&(!o||(b=K(u,s))!=null&&b.writable)&&(i=c(()=>S(Y(o?u[s]:g))),r.set(s,i)),i!==void 0){var d=j(i);return d===g?void 0:d}return Reflect.get(u,s,f)},getOwnPropertyDescriptor(u,s){var f=Reflect.getOwnPropertyDescriptor(u,s);if(f&&"value"in f){var i=r.get(s);i&&(f.value=j(i))}else if(f===void 0){var o=r.get(s),d=o==null?void 0:o.v;if(o!==void 0&&d!==g)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return f},has(u,s){var d;if(s===Z)return!0;var f=r.get(s),i=f!==void 0&&f.v!==g||Reflect.has(u,s);if(f!==void 0||h!==null&&(!i||(d=K(u,s))!=null&&d.writable)){f===void 0&&(f=c(()=>S(i?Y(u[s]):g)),r.set(s,f));var o=j(f);if(o===g)return!1}return i},set(u,s,f,i){var Ot;var o=r.get(s),d=s in u;if(l&&s==="length")for(var b=f;b<o.v;b+=1){var Q=r.get(b+"");Q!==void 0?N(Q,g):b in u&&(Q=c(()=>S(g)),r.set(b+"",Q))}o===void 0?(!d||(Ot=K(u,s))!=null&&Ot.writable)&&(o=c(()=>S(void 0)),N(o,c(()=>Y(f))),r.set(s,o)):(d=o.v!==g,N(o,c(()=>Y(f))));var tt=Reflect.getOwnPropertyDescriptor(u,s);if(tt!=null&&tt.set&&tt.set.call(i,f),!d){if(l&&typeof s=="string"){var Rt=r.get("length"),dt=Number(s);Number.isInteger(dt)&&dt>=Rt.v&&N(Rt,dt+1)}bt(a)}return!0},ownKeys(u){j(a);var s=Reflect.ownKeys(u).filter(o=>{var d=r.get(o);return d===void 0||d.v!==g});for(var[f,i]of r)i.v!==g&&!(f in u)&&s.push(f);return s},setPrototypeOf(){mn()}})}function bt(t,e=1){N(t,t.v+e)}const z=new Map;function At(t,e){var n={f:0,v:t,reactions:null,equals:Yt,rv:0,wv:0};return n}function S(t,e){const n=At(t);return en(n),n}function xe(t,e=!1){var r;const n=At(t);return e||(n.equals=jt),_t&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(n),n}function N(t,e,n=!1){v!==null&&!R&&ct()&&(v.f&(O|mt))!==0&&!(y!=null&&y.includes(t))&&An();let r=n?Y(e):e;return On(t,r)}function On(t,e){if(!t.equals(e)){var n=t.v;X?z.set(t,e):z.set(t,n),t.v=e,t.wv=an(),Ut(t,P),ct()&&h!==null&&(h.f&E)!==0&&(h.f&(D|U))===0&&(m===null?Yn([t]):m.push(t))}return e}function Ut(t,e){var n=t.reactions;if(n!==null)for(var r=ct(),l=n.length,a=0;a<l;a++){var _=n[a],c=_.f;(c&P)===0&&(!r&&_===h||(I(_,e),(c&(E|A))!==0&&((c&O)!==0?Ut(_,L):pt(_))))}}let F=!1;function Ie(t){F=t}let x;function J(t){if(t===null)throw Bt(),Ht;return x=t}function Re(){return J(q(x))}function Oe(t){if(F){if(q(x)!==null)throw Bt(),Ht;x=t}}function Ne(t=1){if(F){for(var e=t,n=x;e--;)n=q(n);x=n}}function De(){for(var t=0,e=x;;){if(e.nodeType===8){var n=e.data;if(n===Rn){if(t===0)return e;t-=1}else(n===xn||n===In)&&(t+=1)}var r=q(e);e.remove(),e=r}}var St,Nn,Vt,Gt;function be(){if(St===void 0){St=window,Nn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Vt=K(e,"firstChild").get,Gt=K(e,"nextSibling").get,Nt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Nt(n)&&(n.__t=void 0)}}function yt(t=""){return document.createTextNode(t)}function Et(t){return Vt.call(t)}function q(t){return Gt.call(t)}function Se(t,e){if(!F)return Et(t);var n=Et(x);if(n===null)n=x.appendChild(yt());else if(e&&n.nodeType!==3){var r=yt();return n==null||n.before(r),J(r),r}return J(n),n}function ke(t,e){if(!F){var n=Et(t);return n instanceof Comment&&n.data===""?q(n):n}return x}function Pe(t,e=1,n=!1){let r=F?x:t;for(var l;e--;)l=r,r=q(r);if(!F)return r;var a=r==null?void 0:r.nodeType;if(n&&a!==3){var _=yt();return r===null?l==null||l.after(_):r.before(_),J(_),_}return J(r),r}function Ce(t){t.textContent=""}function xt(t){var e=O|P,n=v!==null&&(v.f&O)!==0?v:null;return h===null||n!==null&&(n.f&A)!==0?e|=A:h.f|=qt,{ctx:p,deps:null,effects:null,equals:Yt,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??h}}function Fe(t){const e=xt(t);return en(e),e}function Me(t){const e=xt(t);return e.equals=jt,e}function Kt(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)M(e[n])}}function Dn(t){for(var e=t.parent;e!==null;){if((e.f&O)===0)return e;e=e.parent}return null}function bn(t){var e,n=h;st(Dn(t));try{Kt(t),e=sn(t)}finally{st(n)}return e}function Zt(t){var e=bn(t),n=(k||(t.f&A)!==0)&&t.deps!==null?L:E;I(t,n),t.equals(e)||(t.v=e,t.wv=an())}function $t(t){h===null&&v===null&&En(),v!==null&&(v.f&A)!==0&&h===null&&yn(),X&&wn()}function Sn(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function V(t,e,n,r=!0){var l=h,a={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:t|P,first:null,fn:e,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(n)try{ht(a),a.f|=hn}catch(u){throw M(a),u}else e!==null&&pt(a);var _=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(qt|et))===0;if(!_&&r&&(l!==null&&Sn(a,l),v!==null&&(v.f&O)!==0)){var c=v;(c.effects??(c.effects=[])).push(a)}return a}function kn(t){const e=V(it,null,!1);return I(e,E),e.teardown=t,e}function Le(t){$t();var e=h!==null&&(h.f&D)!==0&&p!==null&&!p.m;if(e){var n=p;(n.e??(n.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=zt(t);return r}}function qe(t){return $t(),It(t)}function Ye(t){const e=V(U,t,!0);return(n={})=>new Promise(r=>{n.outro?Fn(e,()=>{M(e),r(void 0)}):(M(e),r(void 0))})}function zt(t){return V(Mt,t,!1)}function je(t,e){var n=p,r={effect:null,ran:!1};n.l.r1.push(r),r.effect=It(()=>{t(),!r.ran&&(r.ran=!0,N(n.l.r2,!0),Zn(e))})}function He(){var t=p;It(()=>{if(j(t.l.r2)){for(var e of t.l.r1){var n=e.effect;(n.f&E)!==0&&I(n,L),G(n)&&ht(n),e.ran=!1}t.l.r2.v=!1}})}function It(t){return V(it,t,!0)}function Be(t,e=[],n=xt){const r=e.map(n);return Pn(()=>t(...r.map(j)))}function Pn(t,e=0){return V(it|mt|e,t,!0)}function Ue(t,e=!0){return V(it|D,t,!0,e)}function Jt(t){var e=t.teardown;if(e!==null){const n=X,r=v;Pt(!0),B(null);try{e.call(null)}finally{Pt(n),B(r)}}}function Wt(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&U)!==0?n.parent=null:M(n,e),n=r}}function Cn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&D)===0&&M(e),e=n}}function M(t,e=!0){var n=!1;if((e||(t.f&pn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,l=t.nodes_end;r!==null;){var a=r===l?null:q(r);r.remove(),r=a}n=!0}Wt(t,e&&!n),ut(t,0),I(t,ot);var _=t.transitions;if(_!==null)for(const u of _)u.stop();Jt(t);var c=t.parent;c!==null&&c.first!==null&&Xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Xt(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Fn(t,e){var n=[];Qt(t,n,!0),Mn(n,()=>{M(t),e&&e()})}function Mn(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var l of t)l.out(r)}else e()}function Qt(t,e,n){if((t.f&H)===0){if(t.f^=H,t.transitions!==null)for(const _ of t.transitions)(_.is_global||n)&&e.push(_);for(var r=t.first;r!==null;){var l=r.next,a=(r.f&Lt)!==0||(r.f&D)!==0;Qt(r,e,a?n:!1),r=l}}}function Ve(t){tn(t,!0)}function tn(t,e){if((t.f&H)!==0){t.f^=H,(t.f&E)===0&&(t.f^=E),G(t)&&(I(t,P),pt(t));for(var n=t.first;n!==null;){var r=n.next,l=(n.f&Lt)!==0||(n.f&D)!==0;tn(n,l?e:!1),n=r}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||e)&&a.in()}}let W=[],gt=[];function nn(){var t=W;W=[],Ft(t)}function Ln(){var t=gt;gt=[],Ft(t)}function Ge(t){W.length===0&&queueMicrotask(nn),W.push(t)}function kt(){W.length>0&&nn(),gt.length>0&&Ln()}let nt=!1,at=!1,lt=null,C=!1,X=!1;function Pt(t){X=t}let $=[];let v=null,R=!1;function B(t){v=t}let h=null;function st(t){h=t}let y=null;function qn(t){y=t}function en(t){v!==null&&v.f&wt&&(y===null?qn([t]):y.push(t))}let w=null,T=0,m=null;function Yn(t){m=t}let rn=1,ft=0,k=!1;function an(){return++rn}function G(t){var i;var e=t.f;if((e&P)!==0)return!0;if((e&L)!==0){var n=t.deps,r=(e&A)!==0;if(n!==null){var l,a,_=(e&rt)!==0,c=r&&h!==null&&!k,u=n.length;if(_||c){var s=t,f=s.parent;for(l=0;l<u;l++)a=n[l],(_||!((i=a==null?void 0:a.reactions)!=null&&i.includes(s)))&&(a.reactions??(a.reactions=[])).push(s);_&&(s.f^=rt),c&&f!==null&&(f.f&A)===0&&(s.f^=A)}for(l=0;l<u;l++)if(a=n[l],G(a)&&Zt(a),a.wv>t.wv)return!0}(!r||h!==null&&!k)&&I(t,E)}return!1}function jn(t,e){for(var n=e;n!==null;){if((n.f&et)!==0)try{n.fn(t);return}catch{n.f^=et}n=n.parent}throw nt=!1,t}function Hn(t){return(t.f&ot)===0&&(t.parent===null||(t.parent.f&et)===0)}function vt(t,e,n,r){if(nt){if(n===null&&(nt=!1),Hn(e))throw t;return}n!==null&&(nt=!0);{jn(t,e);return}}function ln(t,e,n=!0){var r=t.reactions;if(r!==null)for(var l=0;l<r.length;l++){var a=r[l];y!=null&&y.includes(t)||((a.f&O)!==0?ln(a,e,!1):e===a&&(n?I(a,P):(a.f&E)!==0&&I(a,L),pt(a)))}}function sn(t){var d;var e=w,n=T,r=m,l=v,a=k,_=y,c=p,u=R,s=t.f;w=null,T=0,m=null,k=(s&A)!==0&&(R||!C||v===null),v=(s&(D|U))===0?t:null,y=null,Dt(t.ctx),R=!1,ft++,t.f|=wt;try{var f=(0,t.fn)(),i=t.deps;if(w!==null){var o;if(ut(t,T),i!==null&&T>0)for(i.length=T+w.length,o=0;o<w.length;o++)i[T+o]=w[o];else t.deps=i=w;if(!k)for(o=T;o<i.length;o++)((d=i[o]).reactions??(d.reactions=[])).push(t)}else i!==null&&T<i.length&&(ut(t,T),i.length=T);if(ct()&&m!==null&&!R&&i!==null&&(t.f&(O|L|P))===0)for(o=0;o<m.length;o++)ln(m[o],t);return l!==null&&(ft++,m!==null&&(r===null?r=m:r.push(...m))),f}finally{w=e,T=n,m=r,v=l,k=a,y=_,Dt(c),R=u,t.f^=wt}}function Bn(t,e){let n=e.reactions;if(n!==null){var r=on.call(n,t);if(r!==-1){var l=n.length-1;l===0?n=e.reactions=null:(n[r]=n[l],n.pop())}}n===null&&(e.f&O)!==0&&(w===null||!w.includes(e))&&(I(e,L),(e.f&(A|rt))===0&&(e.f^=rt),Kt(e),ut(e,0))}function ut(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Bn(t,n[r])}function ht(t){var e=t.f;if((e&ot)===0){I(t,E);var n=h,r=p,l=C;h=t,C=!0;try{(e&mt)!==0?Cn(t):Wt(t),Jt(t);var a=sn(t);t.teardown=typeof a=="function"?a:null,t.wv=rn;var _=t.deps,c}catch(u){vt(u,t,n,r||t.ctx)}finally{C=l,h=n}}}function Un(){try{gn()}catch(t){if(lt!==null)vt(t,lt,null);else throw t}}function fn(){var t=C;try{var e=0;for(C=!0;$.length>0;){e++>1e3&&Un();var n=$,r=n.length;$=[];for(var l=0;l<r;l++){var a=Gn(n[l]);Vn(a)}}}finally{at=!1,C=t,lt=null,z.clear()}}function Vn(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(ot|H))===0)try{G(r)&&(ht(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Xt(r):r.fn=null))}catch(l){vt(l,r,null,r.ctx)}}}function pt(t){at||(at=!0,queueMicrotask(fn));for(var e=lt=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(U|D))!==0){if((n&E)===0)return;e.f^=E}}$.push(e)}function Gn(t){for(var e=[],n=t;n!==null;){var r=n.f,l=(r&(D|U))!==0,a=l&&(r&E)!==0;if(!a&&(r&H)===0){if((r&Mt)!==0)e.push(n);else if(l)n.f^=E;else{var _=v;try{v=n,G(n)&&ht(n)}catch(s){vt(s,n,null,n.ctx)}finally{v=_}}var c=n.first;if(c!==null){n=c;continue}}var u=n.parent;for(n=n.next;n===null&&u!==null;)n=u.next,u=u.parent}return e}function Kn(t){var e;for(kt();$.length>0;)at=!0,fn(),kt();return e}async function Ke(){await Promise.resolve(),Kn()}function j(t){var e=t.f,n=(e&O)!==0;if(v!==null&&!R){if(!(y!=null&&y.includes(t))){var r=v.deps;t.rv<ft&&(t.rv=ft,w===null&&r!==null&&r[T]===t?T++:w===null?w=[t]:(!k||!w.includes(t))&&w.push(t))}}else if(n&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&A)===0&&(l.f^=A)}return n&&(l=t,G(l)&&Zt(l)),X&&z.has(t)?z.get(t):t.v}function Zn(t){var e=R;try{return R=!0,t()}finally{R=e}}const $n=-7169;function I(t,e){t.f=t.f&$n|e}function Ze(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Z in t)Tt(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&Z in n&&Tt(n)}}}function Tt(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{Tt(t[r],e)}catch{}const n=Ct(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=_n(n);for(let l in r){const a=r[l].get;if(a)try{a.call(t)}catch{}}}}}export{h as $,Ue as A,Fn as B,x as C,zt as D,Lt as E,It as F,Ge as G,xn as H,K as I,ae as J,Me as K,te as L,jt as M,Y as N,N as O,ve as P,he as Q,ne as R,Z as S,ce as T,g as U,_e as V,xe as W,pe as X,B as Y,st as Z,v as _,Re as a,kn as a0,Jn as a1,un as a2,be as a3,Et as a4,q as a5,Ht as a6,Rn as a7,Bt as a8,re as a9,mt as aA,hn as aB,ye as aC,Wn as aD,Xn as aE,de as aF,we as aG,je as aH,He as aI,Ne as aJ,dn as aK,Ce as aa,zn as ab,Ye as ac,yt as ad,Nn as ae,Ee as af,ge as ag,Kn as ah,S as ai,Ke as aj,Fe as ak,ue as al,H as am,se as an,On as ao,fe as ap,At as aq,ie as ar,Qt as as,Mn as at,M as au,oe as av,ee as aw,Te as ax,Ct as ay,_n as az,Le as b,p as c,Zn as d,Qn as e,Ze as f,j as g,F as h,xt as i,le as j,ke as k,_t as l,Ae as m,Se as n,Oe as o,me as p,Pn as q,Ft as r,Pe as s,Be as t,qe as u,In as v,De as w,J as x,Ie as y,Ve as z};
