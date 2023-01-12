import{D as U,y as A,i as _,A as z,l as D,j as L,C as H,G as W,E as $,o as M,g as P,d as w,a as m,w as h,b as g,c as q,T as X,L as R,e as j,F as ee,I as te,n as K,t as ae,r as ce}from"./app-f68d2f37.js";import{m as we,u as V,o as b,c as re,l as C,P as T,t as E,p as ne,R as N,a as y,y as pe,S as fe,h as ve,D as me,N as G,g as se,I as he}from"./use-outside-click-62be9979.js";import{b as le,u as ge,x as be,a as S}from"./use-tracked-pointer-b064caa3.js";function ye({container:t,accept:o,walk:s,enabled:p}){U(()=>{let e=t.value;if(!e||p!==void 0&&!p.value)return;let l=we(t);if(!l)return;let u=Object.assign(d=>o(d),{acceptNode:o}),i=l.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,u,!1);for(;i.nextNode();)s(i.currentNode)})}var xe=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(xe||{});let oe=Symbol("DisclosureContext");function Q(t){let o=W(oe,null);if(o===null){let s=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,Q),s}return o}let ue=Symbol("DisclosurePanelContext");function _e(){return W(ue,null)}let ke=A({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:o,attrs:s}){let p=_(t.defaultOpen?0:1),e=_(null),l=_(null),u={buttonId:_(null),panelId:_(null),disclosureState:p,panel:e,button:l,toggleDisclosure(){p.value=V(p.value,{[0]:1,[1]:0})},closeDisclosure(){p.value!==1&&(p.value=1)},close(i){u.closeDisclosure();let d=(()=>i?i instanceof HTMLElement?i:i.value instanceof HTMLElement?b(i):b(u.button):b(u.button))();d==null||d.focus()}};return z(oe,u),re(D(()=>V(p.value,{[0]:C.Open,[1]:C.Closed}))),()=>{let{defaultOpen:i,...d}=t,c={open:p.value===0,close:u.close};return T({theirProps:d,ourProps:{},slot:c,slots:o,attrs:s,name:"Disclosure"})}}}),Ie=A({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${E()}`}},setup(t,{attrs:o,slots:s,expose:p}){let e=Q("DisclosureButton");L(()=>{e.buttonId.value=t.id}),H(()=>{e.buttonId.value=null});let l=_e(),u=D(()=>l===null?!1:l.value===e.panelId.value),i=_(null);p({el:i,$el:i}),u.value||U(()=>{e.button.value=i.value});let d=le(D(()=>({as:t.as,type:o.type})),i);function c(){var r;t.disabled||(u.value?(e.toggleDisclosure(),(r=b(e.button))==null||r.focus()):e.toggleDisclosure())}function a(r){var f;if(!t.disabled)if(u.value)switch(r.key){case y.Space:case y.Enter:r.preventDefault(),r.stopPropagation(),e.toggleDisclosure(),(f=b(e.button))==null||f.focus();break}else switch(r.key){case y.Space:case y.Enter:r.preventDefault(),r.stopPropagation(),e.toggleDisclosure();break}}function x(r){switch(r.key){case y.Space:r.preventDefault();break}}return()=>{let r={open:e.disclosureState.value===0},{id:f,...n}=t,v=u.value?{ref:i,type:d.value,onClick:c,onKeydown:a}:{id:f,ref:i,type:d.value,"aria-expanded":t.disabled?void 0:e.disclosureState.value===0,"aria-controls":b(e.panel)?e.panelId.value:void 0,disabled:t.disabled?!0:void 0,onClick:c,onKeydown:a,onKeyup:x};return T({ourProps:v,theirProps:n,slot:r,attrs:o,slots:s,name:"DisclosureButton"})}}}),Se=A({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${E()}`}},setup(t,{attrs:o,slots:s,expose:p}){let e=Q("DisclosurePanel");L(()=>{e.panelId.value=t.id}),H(()=>{e.panelId.value=null}),p({el:e.panel,$el:e.panel}),z(ue,e.panelId);let l=ne(),u=D(()=>l!==null?l.value===C.Open:e.disclosureState.value===0);return()=>{let i={open:e.disclosureState.value===0,close:e.close},{id:d,...c}=t,a={id:d,ref:e.panel};return T({ourProps:a,theirProps:c,slot:i,attrs:o,slots:s,features:N.RenderStrategy|N.Static,visible:u.value,name:"DisclosurePanel"})}}});var De=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(De||{}),Me=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(Me||{});function Pe(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let ie=Symbol("MenuContext");function F(t){let o=W(ie,null);if(o===null){let s=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,F),s}return o}let J=A({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:o,attrs:s}){let p=_(1),e=_(null),l=_(null),u=_([]),i=_(""),d=_(null),c=_(1);function a(r=f=>f){let f=d.value!==null?u.value[d.value]:null,n=he(r(u.value.slice()),k=>b(k.dataRef.domRef)),v=f?n.indexOf(f):null;return v===-1&&(v=null),{items:n,activeItemIndex:v}}let x={menuState:p,buttonRef:e,itemsRef:l,items:u,searchQuery:i,activeItemIndex:d,activationTrigger:c,closeMenu:()=>{p.value=1,d.value=null},openMenu:()=>p.value=0,goToItem(r,f,n){let v=a(),k=be(r===S.Specific?{focus:S.Specific,id:f}:{focus:r},{resolveItems:()=>v.items,resolveActiveIndex:()=>v.activeItemIndex,resolveId:O=>O.id,resolveDisabled:O=>O.dataRef.disabled});i.value="",d.value=k,c.value=n??1,u.value=v.items},search(r){let f=i.value!==""?0:1;i.value+=r.toLowerCase();let n=(d.value!==null?u.value.slice(d.value+f).concat(u.value.slice(0,d.value+f)):u.value).find(k=>k.dataRef.textValue.startsWith(i.value)&&!k.dataRef.disabled),v=n?u.value.indexOf(n):-1;v===-1||v===d.value||(d.value=v,c.value=1)},clearSearch(){i.value=""},registerItem(r,f){let n=a(v=>[...v,{id:r,dataRef:f}]);u.value=n.items,d.value=n.activeItemIndex,c.value=1},unregisterItem(r){let f=a(n=>{let v=n.findIndex(k=>k.id===r);return v!==-1&&n.splice(v,1),n});u.value=f.items,d.value=f.activeItemIndex,c.value=1}};return pe([e,l],(r,f)=>{var n;x.closeMenu(),fe(f,ve.Loose)||(r.preventDefault(),(n=b(e))==null||n.focus())},D(()=>p.value===0)),z(ie,x),re(D(()=>V(p.value,{[0]:C.Open,[1]:C.Closed}))),()=>{let r={open:p.value===0,close:x.closeMenu};return T({ourProps:{},theirProps:t,slot:r,slots:o,attrs:s,name:"Menu"})}}}),Y=A({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${E()}`}},setup(t,{attrs:o,slots:s,expose:p}){let e=F("MenuButton");p({el:e.buttonRef,$el:e.buttonRef});function l(c){switch(c.key){case y.Space:case y.Enter:case y.ArrowDown:c.preventDefault(),c.stopPropagation(),e.openMenu(),$(()=>{var a;(a=b(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(S.First)});break;case y.ArrowUp:c.preventDefault(),c.stopPropagation(),e.openMenu(),$(()=>{var a;(a=b(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(S.Last)});break}}function u(c){switch(c.key){case y.Space:c.preventDefault();break}}function i(c){t.disabled||(e.menuState.value===0?(e.closeMenu(),$(()=>{var a;return(a=b(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(c.preventDefault(),e.openMenu(),Pe(()=>{var a;return(a=b(e.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let d=le(D(()=>({as:t.as,type:o.type})),e.buttonRef);return()=>{var c;let a={open:e.menuState.value===0},{id:x,...r}=t,f={ref:e.buttonRef,id:x,type:d.value,"aria-haspopup":"menu","aria-controls":(c=b(e.itemsRef))==null?void 0:c.id,"aria-expanded":t.disabled?void 0:e.menuState.value===0,onKeydown:l,onKeyup:u,onClick:i};return T({ourProps:f,theirProps:r,slot:a,attrs:o,slots:s,name:"MenuButton"})}}}),Z=A({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${E()}`}},setup(t,{attrs:o,slots:s,expose:p}){let e=F("MenuItems"),l=_(null);p({el:e.itemsRef,$el:e.itemsRef}),ye({container:D(()=>b(e.itemsRef)),enabled:D(()=>e.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function u(a){var x;switch(l.value&&clearTimeout(l.value),a.key){case y.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case y.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeItemIndex.value!==null){let r=e.items.value[e.activeItemIndex.value];(x=b(r.dataRef.domRef))==null||x.click()}e.closeMenu(),se(b(e.buttonRef));break;case y.ArrowDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(S.Next);case y.ArrowUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(S.Previous);case y.Home:case y.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(S.First);case y.End:case y.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(S.Last);case y.Escape:a.preventDefault(),a.stopPropagation(),e.closeMenu(),$(()=>{var r;return(r=b(e.buttonRef))==null?void 0:r.focus({preventScroll:!0})});break;case y.Tab:a.preventDefault(),a.stopPropagation(),e.closeMenu(),$(()=>me(b(e.buttonRef),a.shiftKey?G.Previous:G.Next));break;default:a.key.length===1&&(e.search(a.key),l.value=setTimeout(()=>e.clearSearch(),350));break}}function i(a){switch(a.key){case y.Space:a.preventDefault();break}}let d=ne(),c=D(()=>d!==null?d.value===C.Open:e.menuState.value===0);return()=>{var a,x;let r={open:e.menuState.value===0},{id:f,...n}=t,v={"aria-activedescendant":e.activeItemIndex.value===null||(a=e.items.value[e.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(x=b(e.buttonRef))==null?void 0:x.id,id:f,onKeydown:u,onKeyup:i,role:"menu",tabIndex:0,ref:e.itemsRef};return T({ourProps:v,theirProps:n,slot:r,attrs:o,slots:s,features:N.RenderStrategy|N.Static,visible:c.value,name:"MenuItems"})}}}),B=A({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${E()}`}},setup(t,{slots:o,attrs:s,expose:p}){let e=F("MenuItem"),l=_(null);p({el:l,$el:l});let u=D(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===t.id:!1),i=D(()=>({disabled:t.disabled,textValue:"",domRef:l}));L(()=>{var n,v;let k=(v=(n=b(l))==null?void 0:n.textContent)==null?void 0:v.toLowerCase().trim();k!==void 0&&(i.value.textValue=k)}),L(()=>e.registerItem(t.id,i)),H(()=>e.unregisterItem(t.id)),U(()=>{e.menuState.value===0&&(!u.value||e.activationTrigger.value!==0&&$(()=>{var n,v;return(v=(n=b(l))==null?void 0:n.scrollIntoView)==null?void 0:v.call(n,{block:"nearest"})}))});function d(n){if(t.disabled)return n.preventDefault();e.closeMenu(),se(b(e.buttonRef))}function c(){if(t.disabled)return e.goToItem(S.Nothing);e.goToItem(S.Specific,t.id)}let a=ge();function x(n){a.update(n)}function r(n){!a.wasMoved(n)||t.disabled||u.value||e.goToItem(S.Specific,t.id,0)}function f(n){!a.wasMoved(n)||t.disabled||!u.value||e.goToItem(S.Nothing)}return()=>{let{disabled:n}=t,v={active:u.value,disabled:n,close:e.closeMenu},{id:k,...O}=t;return T({ourProps:{id:k,ref:l,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,onClick:d,onFocus:c,onPointerenter:x,onMouseenter:x,onPointermove:r,onMousemove:r,onPointerleave:f,onMouseleave:f},theirProps:O,slot:v,attrs:s,slots:o,name:"MenuItem"})}}});function Re(t,o){return M(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function de(t,o){return M(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"})])}function I(t,o){return M(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})])}function Ae(t,o){return M(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const Te={class:"tw-bg-white tw-border-gray-200 tw-px-4 lg:tw-px-6 tw-py-2.5 dark:tw-bg-gray-800 md:tw-h-16 tw-h-auto tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-shadow"},$e={class:"md:tw-hidden tw-flex tw-justify-start tw-items-center tw-w-full"},Ce={class:"tw-px-2s sm:tw-px-6 lg:tw-px-8 tw-w-full"},Oe={class:"tw-relative tw-flex tw-items-center tw-justify-between tw-w-full"},je={class:"tw-flex tw-items-center"},Ee=w("span",{class:"tw-sr-only"},"Open main menu",-1),Be=w("span",{class:"tw-sr-only"},"Open user menu",-1),Le=["src"],Ne={class:"tw-space-y-1 tw-px-0 tw-pt-2 tw-pb-3"},Fe={class:"tw-hidden md:tw-flex tw-items-center tw-justify-end lg:tw-order-2 tw-w-full"},Ke=w("span",{class:"tw-sr-only"},"Open user menu",-1),Ve=["src"],Ue={__name:"DashboardHeader",setup(t){const o=[{name:"Dashboard",href:"/dashboard",icon:de,for:null},{name:"Users",href:"/users",icon:I,for:"Admin"},{name:"Students",href:"/students",icon:I,for:"Admin"},{name:"Subjects",href:"/subjects",icon:I,for:"Admin"},{name:"Certificates and Awards",href:"/certificates-and-awards",icon:I,for:"Admin"},{name:"Alumni",href:"/alumni",icon:I,for:"Admin"},{name:"ID Numbers",href:"/id-numbers",icon:I,for:"Admin"}];return(s,p)=>(M(),P("header",null,[w("nav",Te,[w("div",$e,[m(g(ke),{as:"div",class:"tw-bg-white tw-w-full"},{default:h(({open:e})=>[w("div",Ce,[w("div",Oe,[w("div",je,[m(g(Ie),{class:"tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400 hover:tw-bg-gray-700 hover:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-white"},{default:h(()=>[Ee,e?(M(),q(g(Ae),{key:1,class:"tw-block tw-h-6 tw-w-6","aria-hidden":"true"})):(M(),q(g(Re),{key:0,class:"tw-block tw-h-6 tw-w-6","aria-hidden":"true"}))]),_:2},1024)]),m(g(J),{as:"div",class:"tw-relative"},{default:h(()=>[w("div",null,[m(g(Y),{class:"tw-flex tw-items-center tw-gap-x-2 tw-rounded-full tw-text-sm hover:tw-text-gray-600 tw-text-gray-800 focus:tw-outline-none"},{default:h(()=>[Be,w("img",{class:"tw-h-8 tw-w-8 tw-rounded-full hover:tw-brightness-95",src:"https://ui-avatars.com/api/?name="+s.$page.props.auth.user.first_name+" "+s.$page.props.auth.user.last_name+"&background=random",alt:""},null,8,Le)]),_:1})]),m(X,{"enter-active-class":"tw-transition tw-ease-out tw-duration-100","enter-from-class":"tw-transform tw-opacity-0 tw-scale-95","enter-to-class":"tw-transform tw-opacity-100 tw-scale-100","leave-active-class":"tw-transition tw-ease-in tw-duration-75","leave-from-class":"tw-transform tw-opacity-100 tw-scale-100","leave-to-class":"tw-transform tw-opacity-0 tw-scale-95"},{default:h(()=>[m(g(Z),{class:"tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none"},{default:h(()=>[m(g(B),null,{default:h(({active:l})=>[m(g(R),{href:s.route("profile.edit"),class:"tw-block tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white"},{default:h(()=>[j(" Account settings ")]),_:1},8,["href"])]),_:1}),m(g(B),null,{default:h(({active:l})=>[m(g(R),{href:s.route("logout"),method:"post",as:"button",class:"tw-flex tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white tw-w-full"},{default:h(()=>[j(" Log Out ")]),_:1},8,["href"])]),_:1})]),_:1})]),_:1})]),_:1})])]),m(g(Se),{class:""},{default:h(()=>[w("div",Ne,[(M(),P(ee,null,te(o,l=>m(g(R),{key:l.name,as:"a",href:l.href,class:K([s.$page.url.startsWith(l.href)?"tw-bg-rose-800 tw-text-white":"tw-text-gray-700 hover:tw-bg-rose-50",l.for==null||l.for==s.$page.props.auth.user.roles[0].name?"":"tw-hidden","tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium tw-flex tw-items-center"]),"aria-current":l.current?"page":void 0},{default:h(()=>[j(ae(l.name),1)]),_:2},1032,["href","class","aria-current"])),64))])]),_:1})]),_:1})]),w("div",Fe,[m(g(J),{as:"div",class:"tw-relative"},{default:h(()=>[w("div",null,[m(g(Y),{class:"tw-flex tw-items-center tw-gap-x-2 tw-rounded-full tw-text-sm hover:tw-text-gray-600 tw-text-gray-800 focus:tw-outline-none"},{default:h(()=>[Ke,w("img",{class:"tw-h-8 tw-w-8 tw-rounded-full hover:tw-brightness-95",src:"https://ui-avatars.com/api/?name="+s.$page.props.auth.user.first_name+" "+s.$page.props.auth.user.last_name+"&background=random",alt:""},null,8,Ve)]),_:1})]),m(X,{"enter-active-class":"tw-transition tw-ease-out tw-duration-100","enter-from-class":"tw-transform tw-opacity-0 tw-scale-95","enter-to-class":"tw-transform tw-opacity-100 tw-scale-100","leave-active-class":"tw-transition tw-ease-in tw-duration-75","leave-from-class":"tw-transform tw-opacity-100 tw-scale-100","leave-to-class":"tw-transform tw-opacity-0 tw-scale-95"},{default:h(()=>[m(g(Z),{class:"tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none"},{default:h(()=>[m(g(B),null,{default:h(({active:e})=>[m(g(R),{href:s.route("profile.edit"),class:"tw-block tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white"},{default:h(()=>[j(" Account settings ")]),_:1},8,["href"])]),_:1}),m(g(B),null,{default:h(({active:e})=>[m(g(R),{href:s.route("logout"),method:"post",as:"button",class:"tw-flex tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white tw-w-full"},{default:h(()=>[j(" Log Out ")]),_:1},8,["href"])]),_:1})]),_:1})]),_:1})]),_:1})])])]))}},ze={class:"tw-fixed md:tw-block tw-hidden tw-top-0 tw-left-0 tw-w-72 tw-h-full","aria-label":"Sidenav"},He={class:"tw-overflow-y-auto tw-py-b tw-h-full tw-bg-gradient-to-b tw-from-pink-900 tw-to-pink-700 tw-border-r tw-border-gray-200 dark:tw-bg-gray-800 dark:tw-border-gray-700"},We={class:"tw-flex tw-justify-center tw-h-16"},Qe=w("img",{src:"/capsu_logo.png",class:"tw-h-6 sm:tw-h-12",alt:"Flowbite Logo"},null,-1),qe=w("img",{src:"/it_logo.jpeg",class:"tw-h-6 sm:tw-h-12",alt:"Flowbite Logo"},null,-1),Xe={class:"tw-pt-5 tw-space-y-2 tw-border-gray-200 dark:tw-border-gray-700 tw-px-3"},Ge={class:"tw-ml-3"},Je={__name:"SideNav",setup(t){const o=[{name:"Dashboard",href:"/dashboard",icon:de,for:null},{name:"Users",href:"/users",icon:I,for:"Admin"},{name:"Students",href:"/students",icon:I,for:"Admin"},{name:"Subjects",href:"/subjects",icon:I,for:"Admin"},{name:"Certificates and Awards",href:"/certificates-and-awards",icon:I,for:"Admin"},{name:"Alumni",href:"/alumni",icon:I,for:"Admin"},{name:"ID Numbers",href:"/id-numbers",icon:I,for:"Admin"}];return(s,p)=>(M(),P("aside",ze,[w("div",He,[w("div",We,[m(g(R),{href:s.route("dashboard"),class:"tw-flex tw-items-center tw-gap-x-3"},{default:h(()=>[Qe,qe]),_:1},8,["href"])]),w("ul",Xe,[(M(),P(ee,null,te(o,e=>w("li",{key:e.name,class:K(e.for==null||e.for==s.$page.props.auth.user.roles[0].name?"":"tw-hidden")},[m(g(R),{href:e.href,class:K([s.$page.url.startsWith(e.href)?"tw-bg-white hover:tw-bg-gray-50 tw-text-pink-900":"tw-text-white hover:tw-bg-pink-900","tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg tw-transition tw-duration-75 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 dark:tw-text-white tw-group"])},{default:h(()=>[w("span",Ge,ae(e.name),1)]),_:2},1032,["href","class"])],2)),64))])])]))}},Ye={class:"tw-min-h-screen"},Ze={class:"tw-flex"},et=w("div",{class:"tw-hidden md:tw-block tw-w-72 tw-shrink-0"},null,-1),tt={class:"tw-grow"},at={class:"tw-px-4 sm:tw-px-6 lg:tw-px-12 tw-py-10"},lt={__name:"AuthenticatedLayout",setup(t){return(o,s)=>(M(),P("div",Ye,[w("div",null,[m(Je)]),w("div",Ze,[et,w("div",tt,[m(Ue),w("main",at,[ce(o.$slots,"default")])])])]))}};export{lt as _};
