import{i as O,l as x,y as z,z as I,A as ae,j as N,s as U,B as G,F as X,C as oe,D as ne,E as T,G as ie,o as A,g as q,d as P,c as W,w as E,a as M,b as k,t as $,T as ue,I as se,n as H,k as re,p as de}from"./app-f68d2f37.js";import{u as D,y as ve,S as pe,h as ce,o as g,c as fe,l as Q,V as be,P as j,w as we,t as K,p as me,R as J,I as xe,a as m}from"./use-outside-click-62be9979.js";import{x as ge,a as y,b as he,u as ye}from"./use-tracked-pointer-b064caa3.js";import{f as Se,a as Oe}from"./hidden-d591ec10.js";function Y(t={},i=null,o=[]){for(let[f,e]of Object.entries(t))ee(o,Z(i,f),e);return o}function Z(t,i){return t?t+"["+i+"]":i}function ee(t,i,o){if(Array.isArray(o))for(let[f,e]of o.entries())ee(t,Z(i,f.toString()),e);else o instanceof Date?t.push([i,o.toISOString()]):typeof o=="boolean"?t.push([i,o?"1":"0"]):typeof o=="string"?t.push([i,o]):typeof o=="number"?t.push([i,`${o}`]):o==null?t.push([i,""]):Y(o,i,t)}function Re(t,i,o){let f=O(o==null?void 0:o.value),e=x(()=>t.value!==void 0);return[x(()=>e.value?t.value:f.value),function(s){return e.value||(f.value=s),i==null?void 0:i(s)}]}function Le(t,i){return t===i}var Ie=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Ie||{}),Ve=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(Ve||{}),ke=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(ke||{});function Pe(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let te=Symbol("ListboxContext");function F(t){let i=ie(te,null);if(i===null){let o=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,F),o}return i}let _e=z({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Le},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:i,attrs:o,emit:f}){let e=O(1),s=O(null),b=O(null),p=O(null),d=O([]),l=O(""),a=O(null),R=O(1);function S(n=u=>u){let u=a.value!==null?d.value[a.value]:null,v=xe(n(d.value.slice()),h=>g(h.dataRef.domRef)),c=u?v.indexOf(u):null;return c===-1&&(c=null),{options:v,activeOptionIndex:c}}let V=x(()=>t.multiple?1:0),[L,B]=Re(x(()=>t.modelValue===void 0?D(V.value,{[1]:[],[0]:void 0}):t.modelValue),n=>f("update:modelValue",n),x(()=>t.defaultValue)),r={listboxState:e,value:L,mode:V,compare(n,u){if(typeof t.by=="string"){let v=t.by;return(n==null?void 0:n[v])===(u==null?void 0:u[v])}return t.by(n,u)},orientation:x(()=>t.horizontal?"horizontal":"vertical"),labelRef:s,buttonRef:b,optionsRef:p,disabled:x(()=>t.disabled),options:d,searchQuery:l,activeOptionIndex:a,activationTrigger:R,closeListbox(){t.disabled||e.value!==1&&(e.value=1,a.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(n,u,v){if(t.disabled||e.value===1)return;let c=S(),h=ge(n===y.Specific?{focus:y.Specific,id:u}:{focus:n},{resolveItems:()=>c.options,resolveActiveIndex:()=>c.activeOptionIndex,resolveId:C=>C.id,resolveDisabled:C=>C.dataRef.disabled});l.value="",a.value=h,R.value=v??1,d.value=c.options},search(n){if(t.disabled||e.value===1)return;let u=l.value!==""?0:1;l.value+=n.toLowerCase();let v=(a.value!==null?d.value.slice(a.value+u).concat(d.value.slice(0,a.value+u)):d.value).find(h=>h.dataRef.textValue.startsWith(l.value)&&!h.dataRef.disabled),c=v?d.value.indexOf(v):-1;c===-1||c===a.value||(a.value=c,R.value=1)},clearSearch(){t.disabled||e.value!==1&&l.value!==""&&(l.value="")},registerOption(n,u){let v=S(c=>[...c,{id:n,dataRef:u}]);d.value=v.options,a.value=v.activeOptionIndex},unregisterOption(n){let u=S(v=>{let c=v.findIndex(h=>h.id===n);return c!==-1&&v.splice(c,1),v});d.value=u.options,a.value=u.activeOptionIndex,R.value=1},select(n){t.disabled||B(D(V.value,{[0]:()=>n,[1]:()=>{let u=I(r.value.value).slice(),v=I(n),c=u.findIndex(h=>r.compare(v,I(h)));return c===-1?u.push(v):u.splice(c,1),u}}))}};ve([b,p],(n,u)=>{var v;r.closeListbox(),pe(u,ce.Loose)||(n.preventDefault(),(v=g(b))==null||v.focus())},x(()=>e.value===0)),ae(te,r),fe(x(()=>D(e.value,{[0]:Q.Open,[1]:Q.Closed})));let w=x(()=>{var n;return(n=g(b))==null?void 0:n.closest("form")});return N(()=>{U([w],()=>{if(!w.value||t.defaultValue===void 0)return;function n(){r.select(t.defaultValue)}return w.value.addEventListener("reset",n),()=>{var u;(u=w.value)==null||u.removeEventListener("reset",n)}},{immediate:!0})}),()=>{let{name:n,modelValue:u,disabled:v,...c}=t,h={open:e.value===0,disabled:v,value:L.value};return G(X,[...n!=null&&L.value!=null?Y({[n]:L.value}).map(([C,le])=>G(Se,be({features:Oe.Hidden,key:C,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:C,value:le}))):[],j({ourProps:{},theirProps:{...o,...we(c,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:h,slots:i,attrs:o,name:"Listbox"})])}}});z({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-listbox-label-${K()}`}},setup(t,{attrs:i,slots:o}){let f=F("ListboxLabel");function e(){var s;(s=g(f.buttonRef))==null||s.focus({preventScroll:!0})}return()=>{let s={open:f.listboxState.value===0,disabled:f.disabled.value},{id:b,...p}=t,d={id:b,ref:f.labelRef,onClick:e};return j({ourProps:d,theirProps:p,slot:s,attrs:i,slots:o,name:"ListboxLabel"})}}});let De=z({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${K()}`}},setup(t,{attrs:i,slots:o,expose:f}){let e=F("ListboxButton");f({el:e.buttonRef,$el:e.buttonRef});function s(l){switch(l.key){case m.Space:case m.Enter:case m.ArrowDown:l.preventDefault(),e.openListbox(),T(()=>{var a;(a=g(e.optionsRef))==null||a.focus({preventScroll:!0}),e.value.value||e.goToOption(y.First)});break;case m.ArrowUp:l.preventDefault(),e.openListbox(),T(()=>{var a;(a=g(e.optionsRef))==null||a.focus({preventScroll:!0}),e.value.value||e.goToOption(y.Last)});break}}function b(l){switch(l.key){case m.Space:l.preventDefault();break}}function p(l){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),T(()=>{var a;return(a=g(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(l.preventDefault(),e.openListbox(),Pe(()=>{var a;return(a=g(e.optionsRef))==null?void 0:a.focus({preventScroll:!0})})))}let d=he(x(()=>({as:t.as,type:i.type})),e.buttonRef);return()=>{var l,a;let R={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:S,...V}=t,L={ref:e.buttonRef,id:S,type:d.value,"aria-haspopup":"listbox","aria-controls":(l=g(e.optionsRef))==null?void 0:l.id,"aria-expanded":e.disabled.value?void 0:e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(a=g(e.labelRef))==null?void 0:a.id,S].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:s,onKeyup:b,onClick:p};return j({ourProps:L,theirProps:V,slot:R,attrs:i,slots:o,name:"ListboxButton"})}}}),Te=z({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${K()}`}},setup(t,{attrs:i,slots:o,expose:f}){let e=F("ListboxOptions"),s=O(null);f({el:e.optionsRef,$el:e.optionsRef});function b(l){switch(s.value&&clearTimeout(s.value),l.key){case m.Space:if(e.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),e.search(l.key);case m.Enter:if(l.preventDefault(),l.stopPropagation(),e.activeOptionIndex.value!==null){let a=e.options.value[e.activeOptionIndex.value];e.select(a.dataRef.value)}e.mode.value===0&&(e.closeListbox(),T(()=>{var a;return(a=g(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})}));break;case D(e.orientation.value,{vertical:m.ArrowDown,horizontal:m.ArrowRight}):return l.preventDefault(),l.stopPropagation(),e.goToOption(y.Next);case D(e.orientation.value,{vertical:m.ArrowUp,horizontal:m.ArrowLeft}):return l.preventDefault(),l.stopPropagation(),e.goToOption(y.Previous);case m.Home:case m.PageUp:return l.preventDefault(),l.stopPropagation(),e.goToOption(y.First);case m.End:case m.PageDown:return l.preventDefault(),l.stopPropagation(),e.goToOption(y.Last);case m.Escape:l.preventDefault(),l.stopPropagation(),e.closeListbox(),T(()=>{var a;return(a=g(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})});break;case m.Tab:l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(e.search(l.key),s.value=setTimeout(()=>e.clearSearch(),350));break}}let p=me(),d=x(()=>p!==null?p.value===Q.Open:e.listboxState.value===0);return()=>{var l,a,R,S;let V={open:e.listboxState.value===0},{id:L,...B}=t,r={"aria-activedescendant":e.activeOptionIndex.value===null||(l=e.options.value[e.activeOptionIndex.value])==null?void 0:l.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(S=(a=g(e.labelRef))==null?void 0:a.id)!=null?S:(R=g(e.buttonRef))==null?void 0:R.id,"aria-orientation":e.orientation.value,id:L,onKeydown:b,role:"listbox",tabIndex:0,ref:e.optionsRef};return j({ourProps:r,theirProps:B,slot:V,attrs:i,slots:o,features:J.RenderStrategy|J.Static,visible:d.value,name:"ListboxOptions"})}}}),Be=z({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${K()}`}},setup(t,{slots:i,attrs:o,expose:f}){let e=F("ListboxOption"),s=O(null);f({el:s,$el:s});let b=x(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t.id:!1),p=x(()=>D(e.mode.value,{[0]:()=>e.compare(I(e.value.value),I(t.value)),[1]:()=>I(e.value.value).some(r=>e.compare(I(r),I(t.value)))})),d=x(()=>D(e.mode.value,{[1]:()=>{var r;let w=I(e.value.value);return((r=e.options.value.find(n=>w.some(u=>e.compare(I(u),I(n.dataRef.value)))))==null?void 0:r.id)===t.id},[0]:()=>p.value})),l=x(()=>({disabled:t.disabled,value:t.value,textValue:"",domRef:s}));N(()=>{var r,w;let n=(w=(r=g(s))==null?void 0:r.textContent)==null?void 0:w.toLowerCase().trim();n!==void 0&&(l.value.textValue=n)}),N(()=>e.registerOption(t.id,l)),oe(()=>e.unregisterOption(t.id)),N(()=>{U([e.listboxState,p],()=>{e.listboxState.value===0&&(!p.value||D(e.mode.value,{[1]:()=>{d.value&&e.goToOption(y.Specific,t.id)},[0]:()=>{e.goToOption(y.Specific,t.id)}}))},{immediate:!0})}),ne(()=>{e.listboxState.value===0&&(!b.value||e.activationTrigger.value!==0&&T(()=>{var r,w;return(w=(r=g(s))==null?void 0:r.scrollIntoView)==null?void 0:w.call(r,{block:"nearest"})}))});function a(r){if(t.disabled)return r.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),T(()=>{var w;return(w=g(e.buttonRef))==null?void 0:w.focus({preventScroll:!0})}))}function R(){if(t.disabled)return e.goToOption(y.Nothing);e.goToOption(y.Specific,t.id)}let S=ye();function V(r){S.update(r)}function L(r){!S.wasMoved(r)||t.disabled||b.value||e.goToOption(y.Specific,t.id,0)}function B(r){!S.wasMoved(r)||t.disabled||!b.value||e.goToOption(y.Nothing)}return()=>{let{disabled:r}=t,w={active:b.value,selected:p.value,disabled:r},{id:n,value:u,disabled:v,...c}=t,h={id:n,ref:s,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":p.value,disabled:void 0,onClick:a,onFocus:R,onPointerenter:V,onMouseenter:V,onPointermove:L,onMousemove:L,onPointerleave:B,onMouseleave:B};return j({ourProps:h,theirProps:c,slot:w,attrs:o,slots:i,name:"ListboxOption"})}}});function Ce(t,i){return A(),q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[P("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule":"evenodd"})])}function Ae(t,i){return A(),q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[P("path",{"fill-rule":"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z","clip-rule":"evenodd"})])}const Ee={class:"tw-relative tw-mt-1"},Me={class:"tw-flex tw-items-center"},ze={class:"tw-block tw-truncate"},je={class:"tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-ml-3 tw-flex tw-items-center tw-pr-2"},Fe={class:"tw-flex tw-items-center"},He={__name:"ListBox",props:{items:{type:Array,required:!0,default:[]},modelValue:null,resetIndex:{type:Boolean,default:!1}},emits:["update:modelValue","update:resetIndex"],setup(t,{emit:i}){const o=t,f=[{id:null,name:"Select"}],e=x(()=>[...f,...o.items]);let s=O(e.value[0]);if(o.modelValue){const b=e.value.findIndex(p=>p.id==parseInt(o.modelValue));s.value=b<1?e.value[0]:e.value[b]}return U(()=>_.cloneDeep(o.items),(b,p)=>{if(o.modelValue){const d=e.value.findIndex(l=>l.id==parseInt(o.modelValue));s.value=d<1?e.value[0]:e.value[d]}}),U(()=>_.cloneDeep(o.resetIndex),(b,p)=>{s.value=e.value[0],i("update:resetIndex",!1)}),(b,p)=>(A(),W(k(_e),{as:"div",modelValue:k(s),"onUpdate:modelValue":[p[0]||(p[0]=d=>de(s)?s.value=d:s=d),p[1]||(p[1]=d=>i("update:modelValue",d))]},{default:E(()=>[P("div",Ee,[M(k(De),{class:"tw-relative tw-w-full tw-cursor-default tw-rounded-md tw-border tw-border-gray-300 tw-bg-white tw-pl-3 tw-pr-10 tw-text-left tw-shadow-sm focus:tw-border-pink-800 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-pink-800 sm:tw-text-sm tw-h-11"},{default:E(()=>[P("span",Me,[P("span",ze,$(k(s).name),1)]),P("span",je,[M(k(Ae),{class:"tw-h-5 tw-w-5 tw-text-gray-400","aria-hidden":"true"})])]),_:1}),M(ue,{"leave-active-class":"tw-transition tw-ease-in tw-duration-100","leave-from-class":"tw-opacity-100","leave-to-class":"tw-opacity-0"},{default:E(()=>[M(k(Te),{class:"tw-absolute tw-z-10 tw-mt-1 tw-max-h-56 tw-w-full tw-overflow-auto tw-rounded-md tw-bg-white tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm"},{default:E(()=>[(A(!0),q(X,null,se(k(e),d=>(A(),W(k(Be),{as:"template",key:d.id,value:d},{default:E(({active:l,selected:a})=>[P("li",{class:H([l?"tw-text-white tw-bg-blue-600":"tw-text-gray-900","tw-relative tw-cursor-default tw-select-none tw-py-2 tw-pl-3 tw-pr-9"])},[P("div",Fe,[P("span",{class:H([a?"tw-font-semibold":"tw-font-normal","tw-block tw-truncate"])},$(d.name),3)]),a?(A(),q("span",{key:0,class:H([l?"tw-text-white":"tw-text-blue-600","tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-4"])},[M(k(Ce),{class:"tw-h-5 tw-w-5","aria-hidden":"true"})],2)):re("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"]))}};export{He as _};