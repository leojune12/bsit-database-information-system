import{s as Se,x as Ie,F as q,y as H,z as K,i as _,j as L,A as F,B as P,l as I,C as T,D as Q,o as D,g as E,d as p,a as g,w as b,b as y,c as te,T as ne,L as M,e as R,E as ue,n as ie,t as ce,r as De}from"./app-edaa05cc.js";function j(e,n,...r){if(e in n){let t=n[e];return typeof t=="function"?t(...r):t}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(t=>`"${t}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,j),l}var C=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(C||{}),Ee=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Ee||{});function $({visible:e=!0,features:n=0,ourProps:r,theirProps:l,...t}){var u;let o=Me(l,r),s=Object.assign(t,{props:o});if(e||n&2&&o.static)return W(s);if(n&1){let c=(u=o.unmount)==null||u?0:1;return j(c,{[0](){return null},[1](){return W({...t,props:{...o,hidden:!0,style:{display:"none"}}})}})}return W(s)}function W({props:e,attrs:n,slots:r,slot:l,name:t}){var u;let{as:o,...s}=Pe(e,["unmount","static"]),c=(u=r.default)==null?void 0:u.call(r,l),f={};if(l){let a=!1,h=[];for(let[i,w]of Object.entries(l))typeof w=="boolean"&&(a=!0),w===!0&&h.push(i);a&&(f["data-headlessui-state"]=h.join(" "))}if(o==="template"){if(c=de(c??[]),Object.keys(s).length>0||Object.keys(n).length>0){let[a,...h]=c??[];if(!Oe(a)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${t} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(n)).sort((i,w)=>i.localeCompare(w)).map(i=>`  - ${i}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(i=>`  - ${i}`).join(`
`)].join(`
`));return Se(a,Object.assign({},s,f))}return Array.isArray(c)&&c.length===1?c[0]:c}return Ie(o,Object.assign({},s,f),{default:()=>c})}function de(e){return e.flatMap(n=>n.type===q?de(n.children):[n])}function Me(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},r={};for(let l of e)for(let t in l)t.startsWith("on")&&typeof l[t]=="function"?(r[t]!=null||(r[t]=[]),r[t].push(l[t])):n[t]=l[t];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(r).map(l=>[l,void 0])));for(let l in r)Object.assign(n,{[l](t,...u){let o=r[l];for(let s of o){if(t instanceof Event&&t.defaultPrevented)return;s(t,...u)}}});return n}function Pe(e,n=[]){let r=Object.assign({},e);for(let l of n)l in r&&delete r[l];return r}function Oe(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Te=0;function $e(){return++Te}function B(){return $e()}var x=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(x||{});function Ae(e){throw new Error("Unexpected object: "+e)}var S=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(S||{});function je(e,n){let r=n.resolveItems();if(r.length<=0)return null;let l=n.resolveActiveIndex(),t=l??-1,u=(()=>{switch(e.focus){case 0:return r.findIndex(o=>!n.resolveDisabled(o));case 1:{let o=r.slice().reverse().findIndex((s,c,f)=>t!==-1&&f.length-c-1>=t?!1:!n.resolveDisabled(s));return o===-1?o:r.length-1-o}case 2:return r.findIndex((o,s)=>s<=t?!1:!n.resolveDisabled(o));case 3:{let o=r.slice().reverse().findIndex(s=>!n.resolveDisabled(s));return o===-1?o:r.length-1-o}case 4:return r.findIndex(o=>n.resolveId(o)===e.id);case 5:return null;default:Ae(e)}})();return u===-1?l:u}function m(e){var n;return e==null||e.value==null?null:(n=e.value.$el)!=null?n:e.value}let fe=Symbol("Context");var O=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(O||{});function we(){return H(fe,null)}function pe(e){K(fe,e)}function re(e,n){if(e)return e;let r=n??"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function ve(e,n){let r=_(re(e.value.type,e.value.as));return L(()=>{r.value=re(e.value.type,e.value.as)}),F(()=>{var l;r.value||!m(n)||m(n)instanceof HTMLButtonElement&&!((l=m(n))!=null&&l.hasAttribute("type"))&&(r.value="button")}),r}const me=typeof window>"u"||typeof document>"u";function Y(e){if(me)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let n=m(e);if(n)return n.ownerDocument}return document}function Ne({container:e,accept:n,walk:r,enabled:l}){F(()=>{let t=e.value;if(!t||l!==void 0&&!l.value)return;let u=Y(e);if(!u)return;let o=Object.assign(c=>n(c),{acceptNode:n}),s=u.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,o,!1);for(;s.nextNode();)r(s.currentNode)})}let X=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var G=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(G||{}),Re=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Re||{}),Le=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Le||{});function he(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(X)).sort((n,r)=>Math.sign((n.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var J=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(J||{});function Z(e,n=0){var r;return e===((r=Y(e))==null?void 0:r.body)?!1:j(n,{[0](){return e.matches(X)},[1](){let l=e;for(;l!==null;){if(l.matches(X))return!0;l=l.parentElement}return!1}})}function ge(e){let n=Y(e);P(()=>{n&&!Z(n.activeElement,0)&&Ce(e)})}function Ce(e){e==null||e.focus({preventScroll:!0})}let Fe=["textarea","input"].join(",");function Be(e){var n,r;return(r=(n=e==null?void 0:e.matches)==null?void 0:n.call(e,Fe))!=null?r:!1}function be(e,n=r=>r){return e.slice().sort((r,l)=>{let t=n(r),u=n(l);if(t===null||u===null)return 0;let o=t.compareDocumentPosition(u);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ue(e,n){return He(he(),n,{relativeTo:e})}function He(e,n,{sorted:r=!0,relativeTo:l=null,skipElements:t=[]}={}){var u;let o=(u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?u:document,s=Array.isArray(e)?r?be(e):e:he(e);t.length>0&&(s=s.filter(d=>!t.includes(d))),l=l??o.activeElement;let c=(()=>{if(n&5)return 1;if(n&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=(()=>{if(n&1)return 0;if(n&2)return Math.max(0,s.indexOf(l))-1;if(n&4)return Math.max(0,s.indexOf(l))+1;if(n&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=n&32?{preventScroll:!0}:{},h=0,i=s.length,w;do{if(h>=i||h+i<=0)return 0;let d=f+h;if(n&16)d=(d+i)%i;else{if(d<0)return 3;if(d>=i)return 1}w=s[d],w==null||w.focus(a),h+=c}while(w!==o.activeElement);return n&6&&Be(w)&&w.select(),w.hasAttribute("tabindex")||w.setAttribute("tabindex","0"),2}function z(e,n,r){me||F(l=>{document.addEventListener(e,n,r),l(()=>document.removeEventListener(e,n,r))})}function Ke(e,n,r=I(()=>!0)){function l(u,o){if(!r.value||u.defaultPrevented)return;let s=o(u);if(s===null||!s.getRootNode().contains(s))return;let c=function f(a){return typeof a=="function"?f(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e);for(let f of c){if(f===null)continue;let a=f instanceof HTMLElement?f:m(f);if(a!=null&&a.contains(s)||u.composed&&u.composedPath().includes(a))return}return!Z(s,J.Loose)&&s.tabIndex!==-1&&u.preventDefault(),n(u,s)}let t=_(null);z("mousedown",u=>{var o,s;r.value&&(t.value=((s=(o=u.composedPath)==null?void 0:o.call(u))==null?void 0:s[0])||u.target)},!0),z("click",u=>{!t.value||(l(u,()=>t.value),t.value=null)},!0),z("blur",u=>l(u,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ae(e){return[e.screenX,e.screenY]}function Ve(){let e=_([-1,-1]);return{wasMoved(n){let r=ae(n);return e.value[0]===r[0]&&e.value[1]===r[1]?!1:(e.value=r,!0)},update(n){e.value=ae(n)}}}var We=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(We||{});let ye=Symbol("DisclosureContext");function ee(e){let n=H(ye,null);if(n===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ee),r}return n}let xe=Symbol("DisclosurePanelContext");function ze(){return H(xe,null)}let Xe=T({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:n,attrs:r}){let l=_(e.defaultOpen?0:1),t=_(null),u=_(null),o={buttonId:_(null),panelId:_(null),disclosureState:l,panel:t,button:u,toggleDisclosure(){l.value=j(l.value,{[0]:1,[1]:0})},closeDisclosure(){l.value!==1&&(l.value=1)},close(s){o.closeDisclosure();let c=(()=>s?s instanceof HTMLElement?s:s.value instanceof HTMLElement?m(s):m(o.button):m(o.button))();c==null||c.focus()}};return K(ye,o),pe(I(()=>j(l.value,{[0]:O.Open,[1]:O.Closed}))),()=>{let{defaultOpen:s,...c}=e,f={open:l.value===0,close:o.close};return $({theirProps:c,ourProps:{},slot:f,slots:n,attrs:r,name:"Disclosure"})}}}),Ge=T({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${B()}`}},setup(e,{attrs:n,slots:r,expose:l}){let t=ee("DisclosureButton");L(()=>{t.buttonId.value=e.id}),Q(()=>{t.buttonId.value=null});let u=ze(),o=I(()=>u===null?!1:u.value===t.panelId.value),s=_(null);l({el:s,$el:s}),o.value||F(()=>{t.button.value=s.value});let c=ve(I(()=>({as:e.as,type:n.type})),s);function f(){var i;e.disabled||(o.value?(t.toggleDisclosure(),(i=m(t.button))==null||i.focus()):t.toggleDisclosure())}function a(i){var w;if(!e.disabled)if(o.value)switch(i.key){case x.Space:case x.Enter:i.preventDefault(),i.stopPropagation(),t.toggleDisclosure(),(w=m(t.button))==null||w.focus();break}else switch(i.key){case x.Space:case x.Enter:i.preventDefault(),i.stopPropagation(),t.toggleDisclosure();break}}function h(i){switch(i.key){case x.Space:i.preventDefault();break}}return()=>{let i={open:t.disclosureState.value===0},{id:w,...d}=e,v=o.value?{ref:s,type:c.value,onClick:f,onKeydown:a}:{id:w,ref:s,type:c.value,"aria-expanded":e.disabled?void 0:t.disclosureState.value===0,"aria-controls":m(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:f,onKeydown:a,onKeyup:h};return $({ourProps:v,theirProps:d,slot:i,attrs:n,slots:r,name:"DisclosureButton"})}}}),qe=T({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${B()}`}},setup(e,{attrs:n,slots:r,expose:l}){let t=ee("DisclosurePanel");L(()=>{t.panelId.value=e.id}),Q(()=>{t.panelId.value=null}),l({el:t.panel,$el:t.panel}),K(xe,t.panelId);let u=we(),o=I(()=>u!==null?u.value===O.Open:t.disclosureState.value===0);return()=>{let s={open:t.disclosureState.value===0,close:t.close},{id:c,...f}=e,a={id:c,ref:t.panel};return $({ourProps:a,theirProps:f,slot:s,attrs:n,slots:r,features:C.RenderStrategy|C.Static,visible:o.value,name:"DisclosurePanel"})}}});var Qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Qe||{}),Ye=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ye||{});function Je(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let _e=Symbol("MenuContext");function V(e){let n=H(_e,null);if(n===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,V),r}return n}let le=T({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:r}){let l=_(1),t=_(null),u=_(null),o=_([]),s=_(""),c=_(null),f=_(1);function a(i=w=>w){let w=c.value!==null?o.value[c.value]:null,d=be(i(o.value.slice()),k=>m(k.dataRef.domRef)),v=w?d.indexOf(w):null;return v===-1&&(v=null),{items:d,activeItemIndex:v}}let h={menuState:l,buttonRef:t,itemsRef:u,items:o,searchQuery:s,activeItemIndex:c,activationTrigger:f,closeMenu:()=>{l.value=1,c.value=null},openMenu:()=>l.value=0,goToItem(i,w,d){let v=a(),k=je(i===S.Specific?{focus:S.Specific,id:w}:{focus:i},{resolveItems:()=>v.items,resolveActiveIndex:()=>v.activeItemIndex,resolveId:N=>N.id,resolveDisabled:N=>N.dataRef.disabled});s.value="",c.value=k,f.value=d??1,o.value=v.items},search(i){let w=s.value!==""?0:1;s.value+=i.toLowerCase();let d=(c.value!==null?o.value.slice(c.value+w).concat(o.value.slice(0,c.value+w)):o.value).find(k=>k.dataRef.textValue.startsWith(s.value)&&!k.dataRef.disabled),v=d?o.value.indexOf(d):-1;v===-1||v===c.value||(c.value=v,f.value=1)},clearSearch(){s.value=""},registerItem(i,w){let d=a(v=>[...v,{id:i,dataRef:w}]);o.value=d.items,c.value=d.activeItemIndex,f.value=1},unregisterItem(i){let w=a(d=>{let v=d.findIndex(k=>k.id===i);return v!==-1&&d.splice(v,1),d});o.value=w.items,c.value=w.activeItemIndex,f.value=1}};return Ke([t,u],(i,w)=>{var d;h.closeMenu(),Z(w,J.Loose)||(i.preventDefault(),(d=m(t))==null||d.focus())},I(()=>l.value===0)),K(_e,h),pe(I(()=>j(l.value,{[0]:O.Open,[1]:O.Closed}))),()=>{let i={open:l.value===0,close:h.closeMenu};return $({ourProps:{},theirProps:e,slot:i,slots:n,attrs:r,name:"Menu"})}}}),oe=T({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${B()}`}},setup(e,{attrs:n,slots:r,expose:l}){let t=V("MenuButton");l({el:t.buttonRef,$el:t.buttonRef});function u(f){switch(f.key){case x.Space:case x.Enter:case x.ArrowDown:f.preventDefault(),f.stopPropagation(),t.openMenu(),P(()=>{var a;(a=m(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(S.First)});break;case x.ArrowUp:f.preventDefault(),f.stopPropagation(),t.openMenu(),P(()=>{var a;(a=m(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(S.Last)});break}}function o(f){switch(f.key){case x.Space:f.preventDefault();break}}function s(f){e.disabled||(t.menuState.value===0?(t.closeMenu(),P(()=>{var a;return(a=m(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(f.preventDefault(),t.openMenu(),Je(()=>{var a;return(a=m(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let c=ve(I(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var f;let a={open:t.menuState.value===0},{id:h,...i}=e,w={ref:t.buttonRef,id:h,type:c.value,"aria-haspopup":"menu","aria-controls":(f=m(t.itemsRef))==null?void 0:f.id,"aria-expanded":e.disabled?void 0:t.menuState.value===0,onKeydown:u,onKeyup:o,onClick:s};return $({ourProps:w,theirProps:i,slot:a,attrs:n,slots:r,name:"MenuButton"})}}}),se=T({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${B()}`}},setup(e,{attrs:n,slots:r,expose:l}){let t=V("MenuItems"),u=_(null);l({el:t.itemsRef,$el:t.itemsRef}),Ne({container:I(()=>m(t.itemsRef)),enabled:I(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function o(a){var h;switch(u.value&&clearTimeout(u.value),a.key){case x.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case x.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let i=t.items.value[t.activeItemIndex.value];(h=m(i.dataRef.domRef))==null||h.click()}t.closeMenu(),ge(m(t.buttonRef));break;case x.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(S.Next);case x.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(S.Previous);case x.Home:case x.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(S.First);case x.End:case x.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(S.Last);case x.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),P(()=>{var i;return(i=m(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})});break;case x.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),P(()=>Ue(m(t.buttonRef),a.shiftKey?G.Previous:G.Next));break;default:a.key.length===1&&(t.search(a.key),u.value=setTimeout(()=>t.clearSearch(),350));break}}function s(a){switch(a.key){case x.Space:a.preventDefault();break}}let c=we(),f=I(()=>c!==null?c.value===O.Open:t.menuState.value===0);return()=>{var a,h;let i={open:t.menuState.value===0},{id:w,...d}=e,v={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(h=m(t.buttonRef))==null?void 0:h.id,id:w,onKeydown:o,onKeyup:s,role:"menu",tabIndex:0,ref:t.itemsRef};return $({ourProps:v,theirProps:d,slot:i,attrs:n,slots:r,features:C.RenderStrategy|C.Static,visible:f.value,name:"MenuItems"})}}}),U=T({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${B()}`}},setup(e,{slots:n,attrs:r,expose:l}){let t=V("MenuItem"),u=_(null);l({el:u,$el:u});let o=I(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),s=I(()=>({disabled:e.disabled,textValue:"",domRef:u}));L(()=>{var d,v;let k=(v=(d=m(u))==null?void 0:d.textContent)==null?void 0:v.toLowerCase().trim();k!==void 0&&(s.value.textValue=k)}),L(()=>t.registerItem(e.id,s)),Q(()=>t.unregisterItem(e.id)),F(()=>{t.menuState.value===0&&(!o.value||t.activationTrigger.value!==0&&P(()=>{var d,v;return(v=(d=m(u))==null?void 0:d.scrollIntoView)==null?void 0:v.call(d,{block:"nearest"})}))});function c(d){if(e.disabled)return d.preventDefault();t.closeMenu(),ge(m(t.buttonRef))}function f(){if(e.disabled)return t.goToItem(S.Nothing);t.goToItem(S.Specific,e.id)}let a=Ve();function h(d){a.update(d)}function i(d){!a.wasMoved(d)||e.disabled||o.value||t.goToItem(S.Specific,e.id,0)}function w(d){!a.wasMoved(d)||e.disabled||!o.value||t.goToItem(S.Nothing)}return()=>{let{disabled:d}=e,v={active:o.value,disabled:d,close:t.closeMenu},{id:k,...N}=e;return $({ourProps:{id:k,ref:u,role:"menuitem",tabIndex:d===!0?void 0:-1,"aria-disabled":d===!0?!0:void 0,onClick:c,onFocus:f,onPointerenter:h,onMouseenter:h,onPointermove:i,onMousemove:i,onPointerleave:w,onMouseleave:w},theirProps:N,slot:v,attrs:r,slots:n,name:"MenuItem"})}}});function Ze(e,n){return D(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function ke(e,n){return D(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"})])}function A(e,n){return D(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})])}function et(e,n){return D(),E("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const tt={class:"tw-bg-white tw-border-gray-200 tw-px-4 lg:tw-px-6 tw-py-2.5 dark:tw-bg-gray-800 md:tw-h-16 tw-h-auto tw-flex tw-flex-wrap tw-justify-between tw-items-center"},nt={class:"md:tw-hidden tw-flex tw-justify-start tw-items-center tw-w-full"},rt={class:"tw-px-2s sm:tw-px-6 lg:tw-px-8 tw-w-full"},at={class:"tw-relative tw-flex tw-items-center tw-justify-between tw-w-full"},lt={class:"tw-flex tw-items-center"},ot=p("span",{class:"tw-sr-only"},"Open main menu",-1),st=p("span",{class:"tw-sr-only"},"Open user menu",-1),ut=["src"],it={class:"tw-space-y-1 tw-px-0 tw-pt-2 tw-pb-3"},ct={class:"tw-hidden md:tw-flex tw-items-center tw-justify-end lg:tw-order-2 tw-w-full"},dt=p("span",{class:"tw-sr-only"},"Open user menu",-1),ft=["src"],wt={__name:"DashboardHeader",setup(e){const n=[{name:"Dashboard",href:"/dashboard",icon:ke},{name:"Subjects",href:"/students",icon:A},{name:"Students",href:"/students",icon:A},{name:"Users",href:"/users",icon:A}];return(r,l)=>(D(),E("header",null,[p("nav",tt,[p("div",nt,[g(y(Xe),{as:"div",class:"tw-bg-white tw-w-full"},{default:b(({open:t})=>[p("div",rt,[p("div",at,[p("div",lt,[g(y(Ge),{class:"tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400 hover:tw-bg-gray-700 hover:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-white"},{default:b(()=>[ot,t?(D(),te(y(et),{key:1,class:"tw-block tw-h-6 tw-w-6","aria-hidden":"true"})):(D(),te(y(Ze),{key:0,class:"tw-block tw-h-6 tw-w-6","aria-hidden":"true"}))]),_:2},1024)]),g(y(le),{as:"div",class:"tw-relative"},{default:b(()=>[p("div",null,[g(y(oe),{class:"tw-flex tw-items-center tw-gap-x-2 tw-rounded-full tw-text-sm hover:tw-text-gray-600 tw-text-gray-800 focus:tw-outline-none"},{default:b(()=>[st,p("img",{class:"tw-h-8 tw-w-8 tw-rounded-full hover:tw-brightness-95",src:"https://ui-avatars.com/api/?name="+r.$page.props.auth.user.first_name+" "+r.$page.props.auth.user.last_name+"&background=random",alt:""},null,8,ut)]),_:1})]),g(ne,{"enter-active-class":"tw-transition tw-ease-out tw-duration-100","enter-from-class":"tw-transform tw-opacity-0 tw-scale-95","enter-to-class":"tw-transform tw-opacity-100 tw-scale-100","leave-active-class":"tw-transition tw-ease-in tw-duration-75","leave-from-class":"tw-transform tw-opacity-100 tw-scale-100","leave-to-class":"tw-transform tw-opacity-0 tw-scale-95"},{default:b(()=>[g(y(se),{class:"tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none"},{default:b(()=>[g(y(U),null,{default:b(({active:u})=>[g(y(M),{href:r.route("profile.edit"),class:"tw-block tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white"},{default:b(()=>[R(" Account settings ")]),_:1},8,["href"])]),_:1}),g(y(U),null,{default:b(({active:u})=>[g(y(M),{href:r.route("logout"),method:"post",as:"button",class:"tw-flex tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white tw-w-full"},{default:b(()=>[R(" Log Out ")]),_:1},8,["href"])]),_:1})]),_:1})]),_:1})]),_:1})])]),g(y(qe),{class:""},{default:b(()=>[p("div",it,[(D(),E(q,null,ue(n,u=>g(y(M),{key:u.name,as:"a",href:u.href,class:ie([r.$page.url.startsWith(u.href)?"tw-bg-rose-800 tw-text-white":"tw-text-gray-700 hover:tw-bg-rose-50","tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium tw-flex tw-items-center"]),"aria-current":u.current?"page":void 0},{default:b(()=>[R(ce(u.name),1)]),_:2},1032,["href","class","aria-current"])),64))])]),_:1})]),_:1})]),p("div",ct,[g(y(le),{as:"div",class:"tw-relative"},{default:b(()=>[p("div",null,[g(y(oe),{class:"tw-flex tw-items-center tw-gap-x-2 tw-rounded-full tw-text-sm hover:tw-text-gray-600 tw-text-gray-800 focus:tw-outline-none"},{default:b(()=>[dt,p("img",{class:"tw-h-8 tw-w-8 tw-rounded-full hover:tw-brightness-95",src:"https://ui-avatars.com/api/?name="+r.$page.props.auth.user.first_name+" "+r.$page.props.auth.user.last_name+"&background=random",alt:""},null,8,ft)]),_:1})]),g(ne,{"enter-active-class":"tw-transition tw-ease-out tw-duration-100","enter-from-class":"tw-transform tw-opacity-0 tw-scale-95","enter-to-class":"tw-transform tw-opacity-100 tw-scale-100","leave-active-class":"tw-transition tw-ease-in tw-duration-75","leave-from-class":"tw-transform tw-opacity-100 tw-scale-100","leave-to-class":"tw-transform tw-opacity-0 tw-scale-95"},{default:b(()=>[g(y(se),{class:"tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none"},{default:b(()=>[g(y(U),null,{default:b(({active:t})=>[g(y(M),{href:r.route("profile.edit"),class:"tw-block tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white"},{default:b(()=>[R(" Account settings ")]),_:1},8,["href"])]),_:1}),g(y(U),null,{default:b(({active:t})=>[g(y(M),{href:r.route("logout"),method:"post",as:"button",class:"tw-flex tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white tw-w-full"},{default:b(()=>[R(" Log Out ")]),_:1},8,["href"])]),_:1})]),_:1})]),_:1})]),_:1})])])]))}},pt={class:"tw-fixed md:tw-block tw-hidden tw-top-0 tw-left-0 tw-w-72 tw-h-full","aria-label":"Sidenav"},vt={class:"tw-overflow-y-auto tw-py-b tw-h-full tw-bg-gradient-to-b tw-from-pink-900 tw-to-pink-700 tw-border-r tw-border-gray-200 dark:tw-bg-gray-800 dark:tw-border-gray-700"},mt={class:"tw-flex tw-justify-center tw-h-16"},ht=p("img",{src:"/capsu_logo.png",class:"tw-h-6 sm:tw-h-12",alt:"Flowbite Logo"},null,-1),gt={class:"tw-pt-5 tw-space-y-2 tw-border-gray-200 dark:tw-border-gray-700 tw-px-3"},bt={class:"tw-ml-3"},yt={__name:"SideNav",setup(e){const n=[{name:"Dashboard",href:"/dashboard",icon:ke},{name:"Subjects",href:"/students",icon:A},{name:"Students",href:"/students",icon:A},{name:"Users",href:"/users",icon:A}];return(r,l)=>(D(),E("aside",pt,[p("div",vt,[p("div",mt,[g(y(M),{href:r.route("dashboard"),class:"tw-flex tw-items-center"},{default:b(()=>[ht]),_:1},8,["href"])]),p("ul",gt,[(D(),E(q,null,ue(n,t=>p("li",{key:t.name},[g(y(M),{href:t.href,class:ie([r.$page.url.startsWith(t.href)?"tw-bg-white hover:tw-bg-gray-50 tw-text-pink-900":"tw-text-white hover:tw-bg-pink-900","tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg tw-transition tw-duration-75 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 dark:tw-text-white tw-group"])},{default:b(()=>[p("span",bt,ce(t.name),1)]),_:2},1032,["href","class"])])),64))])])]))}},xt={class:"tw-min-h-screen tw-bg-gray-100"},_t={class:"tw-flex"},kt=p("div",{class:"tw-hidden md:tw-block tw-w-72"},null,-1),St={class:"tw-grow"},It={class:"tw-px-4 sm:tw-px-6 lg:tw-px-12 tw-py-10"},Et={__name:"AuthenticatedLayout",setup(e){return(n,r)=>(D(),E("div",null,[p("div",xt,[p("div",null,[g(yt)]),p("div",_t,[kt,p("div",St,[g(wt),p("main",It,[De(n.$slots,"default")])])])])]))}};export{Et as _};
