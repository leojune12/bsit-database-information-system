import{h as c,v as i,o as s,g as a,d,t as n,r as m,i as _,j as p}from"./app-c5964ec3.js";const f={class:"tw-text-sm tw-text-red-600"},x={__name:"InputError",props:["message"],setup(e){return(o,t)=>c((s(),a("div",null,[d("p",f,n(e.message),1)],512)),[[i,e.message]])}},w={class:"tw-block tw-font-medium tw-text-sm tw-text-gray-700"},v={key:0},g={key:1},k={__name:"InputLabel",props:["value"],setup(e){return(o,t)=>(s(),a("label",w,[e.value?(s(),a("span",v,n(e.value),1)):(s(),a("span",g,[m(o.$slots,"default")]))]))}},h=["value"],y={__name:"TextInput",props:["modelValue"],emits:["update:modelValue"],setup(e,{expose:o}){const t=_(null);return p(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),o({focus:()=>t.value.focus()}),(r,u)=>(s(),a("input",{class:"tw-border-gray-300 focus:tw-border-indigo-500 focus:tw-ring-indigo-500 tw-rounded-md tw-shadow-sm",value:e.modelValue,onInput:u[0]||(u[0]=l=>r.$emit("update:modelValue",l.target.value)),ref_key:"input",ref:t},null,40,h))}};export{k as _,y as a,x as b};
