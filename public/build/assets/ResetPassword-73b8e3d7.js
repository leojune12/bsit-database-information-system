import{u as p,o as c,c as f,w as n,a as o,b as e,H as _,d as r,e as V,n as b,f as g}from"./app-edaa05cc.js";import{_ as k}from"./GuestLayout-f9a0b407.js";import{_ as l,a as i,b as m}from"./TextInput-bc7d6811.js";import{_ as v}from"./PrimaryButton-8bb4968e.js";import"./_plugin-vue_export-helper-c27b6911.js";const x=["onSubmit"],y={class:"tw-mt-4"},P={class:"tw-mt-4"},$={class:"tw-flex tw-items-center tw-justify-end tw-mt-4"},U={__name:"ResetPassword",props:{email:String,token:String},setup(w){const d=w,s=p({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,a)=>(c(),f(k,null,{default:n(()=>[o(e(_),{title:"Reset Password"}),r("form",{onSubmit:g(u,["prevent"])},[r("div",null,[o(l,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"tw-mt-1 tw-block tw-w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=t=>e(s).email=t),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(m,{class:"tw-mt-2",message:e(s).errors.email},null,8,["message"])]),r("div",y,[o(l,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"tw-mt-1 tw-block tw-w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).password=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"tw-mt-2",message:e(s).errors.password},null,8,["message"])]),r("div",P,[o(l,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"tw-mt-1 tw-block tw-w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>e(s).password_confirmation=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"tw-mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),r("div",$,[o(v,{class:b({"tw-opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{U as default};