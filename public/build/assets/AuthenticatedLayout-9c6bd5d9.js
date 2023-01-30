import{i as H,j as A,r as x,p as W,k as I,o as j,l as q,m as z,n as $,a as D,c as M,e as u,b as g,w as y,d as m,q as X,T as Y,t as P,L as C,g as N,F as te,s as ae,v as V,x as E,y as ce}from"./app-59b56124.js";import{m as de,u as U,o as h,c as se,l as T,P as R,t as F,p as re,R as B,a as b,y as we,S as pe,h as fe,D as ve,N as G,g as le,I as me}from"./use-outside-click-a33fe8c4.js";import{b as ne,u as he,x as ge,a as S}from"./use-tracked-pointer-8a03dc1b.js";function be({container:t,accept:i,walk:l,enabled:p}){H(()=>{let e=t.value;if(!e||p!==void 0&&!p.value)return;let n=de(t);if(!n)return;let o=Object.assign(d=>i(d),{acceptNode:i}),c=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;c.nextNode();)l(c.currentNode)})}var ye=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ye||{});let oe=Symbol("DisclosureContext");function Q(t){let i=z(oe,null);if(i===null){let l=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,Q),l}return i}let ue=Symbol("DisclosurePanelContext");function _e(){return z(ue,null)}let xe=A({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:i,attrs:l}){let p=x(t.defaultOpen?0:1),e=x(null),n=x(null),o={buttonId:x(null),panelId:x(null),disclosureState:p,panel:e,button:n,toggleDisclosure(){p.value=U(p.value,{[0]:1,[1]:0})},closeDisclosure(){p.value!==1&&(p.value=1)},close(c){o.closeDisclosure();let d=(()=>c?c instanceof HTMLElement?c:c.value instanceof HTMLElement?h(c):h(o.button):h(o.button))();d==null||d.focus()}};return W(oe,o),se(I(()=>U(p.value,{[0]:T.Open,[1]:T.Closed}))),()=>{let{defaultOpen:c,...d}=t,w={open:p.value===0,close:o.close};return R({theirProps:d,ourProps:{},slot:w,slots:i,attrs:l,name:"Disclosure"})}}}),ke=A({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${F()}`}},setup(t,{attrs:i,slots:l,expose:p}){let e=Q("DisclosureButton");j(()=>{e.buttonId.value=t.id}),q(()=>{e.buttonId.value=null});let n=_e(),o=I(()=>n===null?!1:n.value===e.panelId.value),c=x(null);p({el:c,$el:c}),o.value||H(()=>{e.button.value=c.value});let d=ne(I(()=>({as:t.as,type:i.type})),c);function w(){var s;t.disabled||(o.value?(e.toggleDisclosure(),(s=h(e.button))==null||s.focus()):e.toggleDisclosure())}function a(s){var f;if(!t.disabled)if(o.value)switch(s.key){case b.Space:case b.Enter:s.preventDefault(),s.stopPropagation(),e.toggleDisclosure(),(f=h(e.button))==null||f.focus();break}else switch(s.key){case b.Space:case b.Enter:s.preventDefault(),s.stopPropagation(),e.toggleDisclosure();break}}function _(s){switch(s.key){case b.Space:s.preventDefault();break}}return()=>{let s={open:e.disclosureState.value===0},{id:f,...r}=t,v=o.value?{ref:c,type:d.value,onClick:w,onKeydown:a}:{id:f,ref:c,type:d.value,"aria-expanded":t.disabled?void 0:e.disclosureState.value===0,"aria-controls":h(e.panel)?e.panelId.value:void 0,disabled:t.disabled?!0:void 0,onClick:w,onKeydown:a,onKeyup:_};return R({ourProps:v,theirProps:r,slot:s,attrs:i,slots:l,name:"DisclosureButton"})}}}),Se=A({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${F()}`}},setup(t,{attrs:i,slots:l,expose:p}){let e=Q("DisclosurePanel");j(()=>{e.panelId.value=t.id}),q(()=>{e.panelId.value=null}),p({el:e.panel,$el:e.panel}),W(ue,e.panelId);let n=re(),o=I(()=>n!==null?n.value===T.Open:e.disclosureState.value===0);return()=>{let c={open:e.disclosureState.value===0,close:e.close},{id:d,...w}=t,a={id:d,ref:e.panel};return R({ourProps:a,theirProps:w,slot:c,attrs:i,slots:l,features:B.RenderStrategy|B.Static,visible:o.value,name:"DisclosurePanel"})}}});var Ie=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Ie||{}),De=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(De||{});function Pe(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let ie=Symbol("MenuContext");function L(t){let i=z(ie,null);if(i===null){let l=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,L),l}return i}let J=A({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:i,attrs:l}){let p=x(1),e=x(null),n=x(null),o=x([]),c=x(""),d=x(null),w=x(1);function a(s=f=>f){let f=d.value!==null?o.value[d.value]:null,r=me(s(o.value.slice()),k=>h(k.dataRef.domRef)),v=f?r.indexOf(f):null;return v===-1&&(v=null),{items:r,activeItemIndex:v}}let _={menuState:p,buttonRef:e,itemsRef:n,items:o,searchQuery:c,activeItemIndex:d,activationTrigger:w,closeMenu:()=>{p.value=1,d.value=null},openMenu:()=>p.value=0,goToItem(s,f,r){let v=a(),k=ge(s===S.Specific?{focus:S.Specific,id:f}:{focus:s},{resolveItems:()=>v.items,resolveActiveIndex:()=>v.activeItemIndex,resolveId:O=>O.id,resolveDisabled:O=>O.dataRef.disabled});c.value="",d.value=k,w.value=r??1,o.value=v.items},search(s){let f=c.value!==""?0:1;c.value+=s.toLowerCase();let r=(d.value!==null?o.value.slice(d.value+f).concat(o.value.slice(0,d.value+f)):o.value).find(k=>k.dataRef.textValue.startsWith(c.value)&&!k.dataRef.disabled),v=r?o.value.indexOf(r):-1;v===-1||v===d.value||(d.value=v,w.value=1)},clearSearch(){c.value=""},registerItem(s,f){let r=a(v=>[...v,{id:s,dataRef:f}]);o.value=r.items,d.value=r.activeItemIndex,w.value=1},unregisterItem(s){let f=a(r=>{let v=r.findIndex(k=>k.id===s);return v!==-1&&r.splice(v,1),r});o.value=f.items,d.value=f.activeItemIndex,w.value=1}};return we([e,n],(s,f)=>{var r;_.closeMenu(),pe(f,fe.Loose)||(s.preventDefault(),(r=h(e))==null||r.focus())},I(()=>p.value===0)),W(ie,_),se(I(()=>U(p.value,{[0]:T.Open,[1]:T.Closed}))),()=>{let s={open:p.value===0,close:_.closeMenu};return R({ourProps:{},theirProps:t,slot:s,slots:i,attrs:l,name:"Menu"})}}}),Z=A({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${F()}`}},setup(t,{attrs:i,slots:l,expose:p}){let e=L("MenuButton");p({el:e.buttonRef,$el:e.buttonRef});function n(w){switch(w.key){case b.Space:case b.Enter:case b.ArrowDown:w.preventDefault(),w.stopPropagation(),e.openMenu(),$(()=>{var a;(a=h(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(S.First)});break;case b.ArrowUp:w.preventDefault(),w.stopPropagation(),e.openMenu(),$(()=>{var a;(a=h(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(S.Last)});break}}function o(w){switch(w.key){case b.Space:w.preventDefault();break}}function c(w){t.disabled||(e.menuState.value===0?(e.closeMenu(),$(()=>{var a;return(a=h(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(w.preventDefault(),e.openMenu(),Pe(()=>{var a;return(a=h(e.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let d=ne(I(()=>({as:t.as,type:i.type})),e.buttonRef);return()=>{var w;let a={open:e.menuState.value===0},{id:_,...s}=t,f={ref:e.buttonRef,id:_,type:d.value,"aria-haspopup":"menu","aria-controls":(w=h(e.itemsRef))==null?void 0:w.id,"aria-expanded":t.disabled?void 0:e.menuState.value===0,onKeydown:n,onKeyup:o,onClick:c};return R({ourProps:f,theirProps:s,slot:a,attrs:i,slots:l,name:"MenuButton"})}}}),ee=A({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${F()}`}},setup(t,{attrs:i,slots:l,expose:p}){let e=L("MenuItems"),n=x(null);p({el:e.itemsRef,$el:e.itemsRef}),be({container:I(()=>h(e.itemsRef)),enabled:I(()=>e.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function o(a){var _;switch(n.value&&clearTimeout(n.value),a.key){case b.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case b.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeItemIndex.value!==null){let s=e.items.value[e.activeItemIndex.value];(_=h(s.dataRef.domRef))==null||_.click()}e.closeMenu(),le(h(e.buttonRef));break;case b.ArrowDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(S.Next);case b.ArrowUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(S.Previous);case b.Home:case b.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(S.First);case b.End:case b.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(S.Last);case b.Escape:a.preventDefault(),a.stopPropagation(),e.closeMenu(),$(()=>{var s;return(s=h(e.buttonRef))==null?void 0:s.focus({preventScroll:!0})});break;case b.Tab:a.preventDefault(),a.stopPropagation(),e.closeMenu(),$(()=>ve(h(e.buttonRef),a.shiftKey?G.Previous:G.Next));break;default:a.key.length===1&&(e.search(a.key),n.value=setTimeout(()=>e.clearSearch(),350));break}}function c(a){switch(a.key){case b.Space:a.preventDefault();break}}let d=re(),w=I(()=>d!==null?d.value===T.Open:e.menuState.value===0);return()=>{var a,_;let s={open:e.menuState.value===0},{id:f,...r}=t,v={"aria-activedescendant":e.activeItemIndex.value===null||(a=e.items.value[e.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(_=h(e.buttonRef))==null?void 0:_.id,id:f,onKeydown:o,onKeyup:c,role:"menu",tabIndex:0,ref:e.itemsRef};return R({ourProps:v,theirProps:r,slot:s,attrs:i,slots:l,features:B.RenderStrategy|B.Static,visible:w.value,name:"MenuItems"})}}}),K=A({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${F()}`}},setup(t,{slots:i,attrs:l,expose:p}){let e=L("MenuItem"),n=x(null);p({el:n,$el:n});let o=I(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===t.id:!1),c=I(()=>({disabled:t.disabled,textValue:"",domRef:n}));j(()=>{var r,v;let k=(v=(r=h(n))==null?void 0:r.textContent)==null?void 0:v.toLowerCase().trim();k!==void 0&&(c.value.textValue=k)}),j(()=>e.registerItem(t.id,c)),q(()=>e.unregisterItem(t.id)),H(()=>{e.menuState.value===0&&(!o.value||e.activationTrigger.value!==0&&$(()=>{var r,v;return(v=(r=h(n))==null?void 0:r.scrollIntoView)==null?void 0:v.call(r,{block:"nearest"})}))});function d(r){if(t.disabled)return r.preventDefault();e.closeMenu(),le(h(e.buttonRef))}function w(){if(t.disabled)return e.goToItem(S.Nothing);e.goToItem(S.Specific,t.id)}let a=he();function _(r){a.update(r)}function s(r){!a.wasMoved(r)||t.disabled||o.value||e.goToItem(S.Specific,t.id,0)}function f(r){!a.wasMoved(r)||t.disabled||!o.value||e.goToItem(S.Nothing)}return()=>{let{disabled:r}=t,v={active:o.value,disabled:r,close:e.closeMenu},{id:k,...O}=t;return R({ourProps:{id:k,ref:n,role:"menuitem",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,onClick:d,onFocus:w,onPointerenter:_,onMouseenter:_,onPointermove:s,onMousemove:s,onPointerleave:f,onMouseleave:f},theirProps:O,slot:v,attrs:l,slots:i,name:"MenuItem"})}}});function Me(t,i){return D(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Ae(t,i){return D(),M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const Re={class:"tw-bg-white tw-border-gray-200 tw-px-4 lg:tw-px-6 tw-py-2.5 dark:tw-bg-gray-800 md:tw-h-16 tw-h-auto tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-shadow"},$e={class:"md:tw-hidden tw-flex tw-justify-start tw-items-center tw-w-full"},Te={class:"tw-px-2s sm:tw-px-6 lg:tw-px-8 tw-w-full"},Oe={class:"tw-relative tw-flex tw-items-center tw-justify-between tw-w-full"},Ce={class:"tw-flex tw-items-center"},Fe=u("span",{class:"tw-sr-only"},"Open main menu",-1),Ee=u("span",{class:"tw-sr-only"},"Open user menu",-1),je=["src"],Be=u("img",{src:"",alt:""},null,-1),Le={class:"tw-block tw-px-4 tw-py-2"},Ne={class:"tw-font-bold tw-text-gray-500"},Ke={class:"tw-text-xs tw-font-bold tw-text-gray-400"},Ve={class:"tw-space-y-1 tw-px-0 tw-pt-2 tw-pb-3"},Ue={class:"tw-hidden md:tw-flex tw-items-center tw-justify-end lg:tw-order-2 tw-w-full"},He={class:"tw-block tw-px-4 tw-py-2 tw-text-right"},We={class:"tw-font-bold tw-text-gray-500"},qe={class:"tw-text-xs tw-font-bold tw-text-gray-400"},ze=u("span",{class:"tw-sr-only"},"Open user menu",-1),Qe=["src"],Xe={key:1,class:"tw-h-8 tw-w-8 tw-rounded-full hover:tw-brightness-95 tw-bg-blue-300 tw-text-white tw-flex tw-items-center tw-justify-center"},Ye={__name:"DashboardHeader",setup(t){const i=[{name:"Dashboard",href:"/home",for:["Admin","Faculty"]},{name:"Users",href:"/users",for:["Admin"]},{name:"Students",href:"/students",for:["Admin","Faculty"]},{name:"Alumni",href:"/alumni",for:["Admin","Faculty"]},{name:"Grades",href:"/grades",for:["Student","Alumnus"]},{name:"Curriculums",href:"/curriculums",for:["Admin","Faculty"]},{name:"Academic Years",href:"/academic-years",for:["Admin","Faculty"]},{name:"Subjects",href:"/subjects",for:["Admin"]},{name:"Sections",href:"/sections",for:["Admin"]},{name:"Profile",href:"/user-profile",for:[]},{name:"Accout Settings",href:"/profile",for:[]}];return(l,p)=>(D(),M("header",null,[u("nav",Re,[u("div",$e,[g(m(xe),{as:"div",class:"tw-bg-white tw-w-full"},{default:y(({open:e})=>[u("div",Te,[u("div",Oe,[u("div",Ce,[g(m(ke),{class:"tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400 hover:tw-bg-gray-700 hover:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-white"},{default:y(()=>[Fe,e?(D(),X(m(Ae),{key:1,class:"tw-block tw-h-6 tw-w-6","aria-hidden":"true"})):(D(),X(m(Me),{key:0,class:"tw-block tw-h-6 tw-w-6","aria-hidden":"true"}))]),_:2},1024)]),g(m(J),{as:"div",class:"tw-relative"},{default:y(()=>[u("div",null,[g(m(Z),{class:"tw-flex tw-items-center tw-gap-x-2 tw-rounded-full tw-text-sm hover:tw-text-gray-600 tw-text-gray-800 focus:tw-outline-none"},{default:y(()=>[Ee,u("img",{class:"tw-h-8 tw-w-8 tw-rounded-full hover:tw-brightness-95",src:"https://ui-avatars.com/api/?name="+l.$page.props.auth.user.first_name+" "+l.$page.props.auth.user.last_name+"&background=random",alt:""},null,8,je),Be]),_:1})]),g(Y,{"enter-active-class":"tw-transition tw-ease-out tw-duration-100","enter-from-class":"tw-transform tw-opacity-0 tw-scale-95","enter-to-class":"tw-transform tw-opacity-100 tw-scale-100","leave-active-class":"tw-transition tw-ease-in tw-duration-75","leave-from-class":"tw-transform tw-opacity-100 tw-scale-100","leave-to-class":"tw-transform tw-opacity-0 tw-scale-95"},{default:y(()=>[g(m(ee),{class:"tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-py-1 tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none"},{default:y(()=>[g(m(K),null,{default:y(({active:n})=>[u("div",Le,[u("div",Ne,P(l.$page.props.auth.user.first_name)+" "+P(l.$page.props.auth.user.last_name),1),u("div",Ke,P(l.$page.props.auth.user.roles[0].name),1)])]),_:1}),g(m(K),null,{default:y(({active:n})=>[g(m(C),{href:l.route("logout"),method:"post",as:"button",class:"tw-flex tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white tw-w-full"},{default:y(()=>[N(" Log Out ")]),_:1},8,["href"])]),_:1})]),_:1})]),_:1})]),_:1})])]),g(m(Se),{class:""},{default:y(()=>[u("div",Ve,[(D(),M(te,null,ae(i,n=>g(m(C),{key:n.name,as:"a",href:n.href,class:V([l.$page.url.startsWith(n.href)?"tw-bg-rose-800 tw-text-white":"tw-text-gray-700 hover:tw-bg-rose-50",!n.for.length||n.for.includes(l.$page.props.auth.user.roles[0].name)?"":"tw-hidden","tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium tw-flex tw-items-center"]),"aria-current":n.current?"page":void 0},{default:y(()=>[N(P(n.name),1)]),_:2},1032,["href","class","aria-current"])),64))])]),_:1})]),_:1})]),u("div",Ue,[g(m(J),{as:"div",class:"tw-relative"},{default:y(()=>[u("div",null,[g(m(Z),{class:"tw-flex tw-items-center tw-gap-x-2 tw-rounded-full tw-text-sm hover:tw-text-gray-600 tw-text-gray-800 focus:tw-outline-none"},{default:y(()=>[u("div",He,[u("div",We,P(l.$page.props.auth.user.first_name)+" "+P(l.$page.props.auth.user.last_name),1),u("div",qe,P(l.$page.props.auth.user.roles[0].name),1)]),ze,m(E)().props.value.auth.photo_url!=""?(D(),M("img",{key:0,class:"tw-h-8 tw-w-8 tw-rounded-full hover:tw-brightness-95",src:m(E)().props.value.auth.photo_url,alt:""},null,8,Qe)):(D(),M("div",Xe,P(m(E)().props.value.auth.user.first_name.charAt(0)+m(E)().props.value.auth.user.last_name.charAt(0)),1))]),_:1})]),g(Y,{"enter-active-class":"tw-transition tw-ease-out tw-duration-100","enter-from-class":"tw-transform tw-opacity-0 tw-scale-95","enter-to-class":"tw-transform tw-opacity-100 tw-scale-100","leave-active-class":"tw-transition tw-ease-in tw-duration-75","leave-from-class":"tw-transform tw-opacity-100 tw-scale-100","leave-to-class":"tw-transform tw-opacity-0 tw-scale-95"},{default:y(()=>[g(m(ee),{class:"tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-48 tw-origin-top-right tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none tw-divide-y tw-divide-gray-100 tw-py-1"},{default:y(()=>[g(m(K),null,{default:y(({active:e})=>[g(m(C),{href:l.route("logout"),method:"post",as:"button",class:"tw-flex tw-py-2 tw-px-4 tw-text-sm hover:tw-bg-gray-100 dark:tw-hover:bg-gray-600 dark:tw-text-gray-400 dark:hover:tw-text-white tw-w-full"},{default:y(()=>[N(" Log Out ")]),_:1},8,["href"])]),_:1})]),_:1})]),_:1})]),_:1})])])]))}},Ge={class:"tw-fixed md:tw-block tw-hidden tw-top-0 tw-left-0 tw-w-72 tw-h-full","aria-label":"Sidenav"},Je={class:"tw-overflow-y-auto tw-py-b tw-h-full tw-bg-gradient-to-b tw-from-pink-900 tw-to-pink-700 tw-border-r tw-border-gray-200 dark:tw-bg-gray-800 dark:tw-border-gray-700"},Ze={class:"tw-flex tw-justify-center tw-h-16"},et=u("img",{src:"/capsu_logo.png",class:"tw-h-6 sm:tw-h-12",alt:"Flowbite Logo"},null,-1),tt=u("img",{src:"/it_logo.png",class:"tw-h-6 sm:tw-h-12",alt:"Flowbite Logo"},null,-1),at={class:"tw-pt-5 tw-space-y-2 tw-border-gray-200 dark:tw-border-gray-700 tw-px-3"},st={class:"tw-ml-3"},rt={__name:"SideNav",setup(t){const i=[{name:"Dashboard",href:"/home",for:["Admin","Faculty"]},{name:"Users",href:"/users",for:["Admin"]},{name:"Students",href:"/students",for:["Admin","Faculty"]},{name:"Alumni",href:"/alumni",for:["Admin","Faculty"]},{name:"Grades",href:"/grades",for:["Student","Alumnus"]},{name:"Curriculums",href:"/curriculums",for:["Admin","Faculty"]},{name:"Academic Years",href:"/academic-years",for:["Admin","Faculty"]},{name:"Subjects",href:"/subjects",for:["Admin"]},{name:"Sections",href:"/sections",for:["Admin"]},{name:"Profile",href:"/user-profile",for:[]},{name:"Accout Settings",href:"/profile",for:[]}];return(l,p)=>(D(),M("aside",Ge,[u("div",Je,[u("div",Ze,[g(m(C),{href:l.route("dashboard"),class:"tw-flex tw-items-center tw-gap-x-3"},{default:y(()=>[et,tt]),_:1},8,["href"])]),u("ul",at,[(D(),M(te,null,ae(i,e=>u("li",{key:e.name,class:V(!e.for.length||e.for.includes(l.$page.props.auth.user.roles[0].name)?"":"tw-hidden")},[g(m(C),{href:e.href,class:V([l.$page.url.startsWith(e.href)?"tw-bg-white hover:tw-bg-gray-50 tw-text-pink-900":"tw-text-white hover:tw-bg-pink-900","tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg tw-transition tw-duration-75 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700 dark:tw-text-white tw-group"])},{default:y(()=>[u("span",st,P(e.name),1)]),_:2},1032,["href","class"])],2)),64))])])]))}},lt={class:"tw-min-h-screen"},nt={class:"tw-flex"},ot=u("div",{class:"tw-hidden md:tw-block tw-w-72 tw-shrink-0"},null,-1),ut={class:"tw-grow"},it={class:"tw-px-4 sm:tw-px-6 lg:tw-px-12 tw-py-10"},pt={__name:"AuthenticatedLayout",setup(t){return(i,l)=>(D(),M("div",lt,[u("div",null,[g(rt)]),u("div",nt,[ot,u("div",ut,[g(Ye),u("main",it,[ce(i.$slots,"default")])])])]))}};export{xe as Q,ke as V,Se as X,pt as _};
