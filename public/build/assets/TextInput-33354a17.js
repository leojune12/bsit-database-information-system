import{a,c as s,i as r,t as c,h as d,A as i,r as p,o as m}from"./app-c45e5045.js";const f={class:"tw-block tw-font-medium tw-text-sm tw-text-gray-700"},_={key:0},w={key:0,class:"tw-font-black tw-text-red-500"},k={key:1},y={__name:"InputLabel",props:{value:{type:String},required:{default:!1,type:Boolean}},setup(e){return(o,t)=>(a(),s("label",f,[e.value?(a(),s("span",_,[r(c(e.value)+" ",1),e.required?(a(),s("span",w,"*")):d("",!0)])):(a(),s("span",k,[i(o.$slots,"default")]))]))}},h=["value"],b={__name:"TextInput",props:["modelValue"],emits:["update:modelValue"],setup(e,{expose:o}){const t=p(null);return m(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),o({focus:()=>t.value.focus()}),(n,u)=>(a(),s("input",{class:"tw-border-gray-300 focus:tw-border-pink-800 focus:tw-ring-pink-800 tw-rounded-md tw-shadow-sm tw-h-11",value:e.modelValue,onInput:u[0]||(u[0]=l=>n.$emit("update:modelValue",l.target.value)),ref_key:"input",ref:t},null,40,h))}};export{y as _,b as a};
