import{o}from"./use-outside-click-62be9979.js";import{i as f,j as b,D as p}from"./app-f68d2f37.js";function x(e){throw new Error("Unexpected object: "+e)}var h=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(h||{});function m(e,r){let t=r.resolveItems();if(t.length<=0)return null;let l=r.resolveActiveIndex(),s=l??-1,i=(()=>{switch(e.focus){case 0:return t.findIndex(n=>!r.resolveDisabled(n));case 1:{let n=t.slice().reverse().findIndex((u,v,d)=>s!==-1&&d.length-v-1>=s?!1:!r.resolveDisabled(u));return n===-1?n:t.length-1-n}case 2:return t.findIndex((n,u)=>u<=s?!1:!r.resolveDisabled(n));case 3:{let n=t.slice().reverse().findIndex(u=>!r.resolveDisabled(u));return n===-1?n:t.length-1-n}case 4:return t.findIndex(n=>r.resolveId(n)===e.id);case 5:return null;default:x(e)}})();return i===-1?l:i}function a(e,r){if(e)return e;let t=r??"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function w(e,r){let t=f(a(e.value.type,e.value.as));return b(()=>{t.value=a(e.value.type,e.value.as)}),p(()=>{var l;t.value||!o(r)||o(r)instanceof HTMLButtonElement&&!((l=o(r))!=null&&l.hasAttribute("type"))&&(t.value="button")}),t}function c(e){return[e.screenX,e.screenY]}function D(){let e=f([-1,-1]);return{wasMoved(r){let t=c(r);return e.value[0]===t[0]&&e.value[1]===t[1]?!1:(e.value=t,!0)},update(r){e.value=c(r)}}}export{h as a,w as b,D as u,m as x};
