import{o as h,P as A,w as U,t as C,R as L,a as b,T as k,m as z,O as T,N as m,u as K}from"./use-outside-click-de4d3e2a.js";import{b as M}from"./use-tracked-pointer-bed7fbaa.js";import{a as H,f as N}from"./hidden-50d99975.js";import{j as O,r as g,E as $,k as f,p as R,o as E,i as J,F as Q,l as W,m as j}from"./app-c77c7403.js";import{t as V}from"./micro-task-89dcd6af.js";let X=O({props:{onFocus:{type:Function,required:!0}},setup(a){let u=g(!0);return()=>u.value?$(N,{as:"button",type:"button",features:H.Focusable,onFocus(i){i.preventDefault();let s,t=50;function l(){var o;if(t--<=0){s&&cancelAnimationFrame(s);return}if((o=a.onFocus)!=null&&o.call(a)){u.value=!1,cancelAnimationFrame(s);return}s=requestAnimationFrame(l)}s=requestAnimationFrame(l)}}):null}}),q=Symbol("TabsContext");function w(a){let u=j(q,null);if(u===null){let i=new Error(`<${a} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,w),i}return u}let B=Symbol("TabsSSRContext"),ae=O({name:"TabGroup",emits:{change:a=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(a,{slots:u,attrs:i,emit:s}){let t=g(null),l=g([]),o=g([]),P=f(()=>a.selectedIndex!==null),x=f(()=>P.value?a.selectedIndex:t.value),v={selectedIndex:f(()=>{var r,n;return(n=(r=t.value)!=null?r:a.defaultIndex)!=null?n:null}),orientation:f(()=>a.vertical?"vertical":"horizontal"),activation:f(()=>a.manual?"manual":"auto"),tabs:l,panels:o,setSelectedIndex(r){x.value!==r&&s("change",r),P.value||(t.value=r)},registerTab(r){l.value.includes(r)||l.value.push(r)},unregisterTab(r){let n=l.value.indexOf(r);n!==-1&&l.value.splice(n,1)},registerPanel(r){o.value.includes(r)||o.value.push(r)},unregisterPanel(r){let n=o.value.indexOf(r);n!==-1&&o.value.splice(n,1)}};R(q,v);let d=g({tabs:[],panels:[]}),I=g(!1);return E(()=>{I.value=!0}),R(B,f(()=>I.value?null:d.value)),J(()=>{var r;if(v.tabs.value.length<=0||a.selectedIndex===null&&t.value!==null)return;let n=v.tabs.value.map(e=>h(e)).filter(Boolean),c=n.filter(e=>!e.hasAttribute("disabled")),S=(r=a.selectedIndex)!=null?r:a.defaultIndex;if(S<0)t.value=n.indexOf(c[0]);else if(S>v.tabs.value.length)t.value=n.indexOf(c[c.length-1]);else{let e=n.slice(0,S),p=[...n.slice(S),...e].find(y=>c.includes(y));if(!p)return;t.value=n.indexOf(p)}}),()=>{let r={selectedIndex:t.value};return $(Q,[l.value.length<=0&&$(X,{onFocus:()=>{for(let n of l.value){let c=h(n);if((c==null?void 0:c.tabIndex)===0)return c.focus(),!0}return!1}}),A({theirProps:{...i,...U(a,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:r,slots:u,attrs:i,name:"TabGroup"})])}}}),le=O({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(a,{attrs:u,slots:i}){let s=w("TabList");return()=>{let t={selectedIndex:s.selectedIndex.value},l={role:"tablist","aria-orientation":s.orientation.value};return A({ourProps:l,theirProps:a,slot:t,attrs:u,slots:i,name:"TabList"})}}}),re=O({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${C()}`}},setup(a,{attrs:u,slots:i,expose:s}){let t=w("Tab"),l=g(null);s({el:l,$el:l}),E(()=>t.registerTab(l)),W(()=>t.unregisterTab(l));let o=j(B),P=f(()=>{if(o.value){let e=o.value.tabs.indexOf(a.id);return e===-1?o.value.tabs.push(a.id)-1:e}return-1}),x=f(()=>{let e=t.tabs.value.indexOf(l);return e===-1?P.value:e}),v=f(()=>x.value===t.selectedIndex.value);function d(e){var p;let y=e();if(y===k.Success&&t.activation.value==="auto"){let D=(p=z(l))==null?void 0:p.activeElement,F=t.tabs.value.findIndex(G=>h(G)===D);F!==-1&&t.setSelectedIndex(F)}return y}function I(e){let p=t.tabs.value.map(y=>h(y)).filter(Boolean);if(e.key===b.Space||e.key===b.Enter){e.preventDefault(),e.stopPropagation(),t.setSelectedIndex(x.value);return}switch(e.key){case b.Home:case b.PageUp:return e.preventDefault(),e.stopPropagation(),d(()=>T(p,m.First));case b.End:case b.PageDown:return e.preventDefault(),e.stopPropagation(),d(()=>T(p,m.Last))}if(d(()=>K(t.orientation.value,{vertical(){return e.key===b.ArrowUp?T(p,m.Previous|m.WrapAround):e.key===b.ArrowDown?T(p,m.Next|m.WrapAround):k.Error},horizontal(){return e.key===b.ArrowLeft?T(p,m.Previous|m.WrapAround):e.key===b.ArrowRight?T(p,m.Next|m.WrapAround):k.Error}}))===k.Success)return e.preventDefault()}let r=g(!1);function n(){var e;r.value||(r.value=!0,!a.disabled&&((e=h(l))==null||e.focus(),t.setSelectedIndex(x.value),V(()=>{r.value=!1})))}function c(e){e.preventDefault()}let S=M(f(()=>({as:a.as,type:u.type})),l);return()=>{var e;let p={selected:v.value},{id:y,...D}=a,F={ref:l,onKeydown:I,onMousedown:c,onClick:n,id:y,role:"tab",type:S.value,"aria-controls":(e=h(t.panels.value[x.value]))==null?void 0:e.id,"aria-selected":v.value,tabIndex:v.value?0:-1,disabled:a.disabled?!0:void 0};return A({ourProps:F,theirProps:D,slot:p,attrs:u,slots:i,name:"Tab"})}}}),ne=O({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(a,{slots:u,attrs:i}){let s=w("TabPanels");return()=>{let t={selectedIndex:s.selectedIndex.value};return A({theirProps:a,ourProps:{},slot:t,attrs:i,slots:u,name:"TabPanels"})}}}),ue=O({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${C()}`}},setup(a,{attrs:u,slots:i,expose:s}){let t=w("TabPanel"),l=g(null);s({el:l,$el:l}),E(()=>t.registerPanel(l)),W(()=>t.unregisterPanel(l));let o=j(B),P=f(()=>{if(o.value){let d=o.value.panels.indexOf(a.id);return d===-1?o.value.panels.push(a.id)-1:d}return-1}),x=f(()=>{let d=t.panels.value.indexOf(l);return d===-1?P.value:d}),v=f(()=>x.value===t.selectedIndex.value);return()=>{var d;let I={selected:v.value},{id:r,...n}=a,c={ref:l,id:r,role:"tabpanel","aria-labelledby":(d=h(t.tabs.value[x.value]))==null?void 0:d.id,tabIndex:v.value?0:-1};return!v.value&&a.unmount&&!a.static?$(N,{as:"span",...c}):A({ourProps:c,theirProps:n,slot:I,attrs:u,slots:i,features:L.Static|L.RenderStrategy,visible:v.value,name:"TabPanel"})}}});export{ne as b,re as c,ae as d,le as f,ue as p};
