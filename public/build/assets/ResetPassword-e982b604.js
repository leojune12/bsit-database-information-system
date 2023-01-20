import{u as p,a as c,s as f,e as n,b as o,d as e,H as _,f as r,h as V,v as g,g as b}from"./app-9d0c95cc.js";import{_ as v}from"./GuestLayout-b1830fe5.js";import{_ as l}from"./InputError-fa2429d5.js";import{_ as m,a as i}from"./TextInput-a8a5cff1.js";import{_ as k}from"./PrimaryButton-a48b6c0d.js";const x=["onSubmit"],y={class:"tw-mt-4"},P={class:"tw-mt-4"},$={class:"tw-flex tw-items-center tw-justify-end tw-mt-4"},R={__name:"ResetPassword",props:{email:String,token:String},setup(w){const d=w,s=p({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,a)=>(c(),f(v,null,{default:n(()=>[o(e(_),{title:"Reset Password"}),r("form",{onSubmit:b(u,["prevent"])},[r("div",null,[o(m,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"tw-mt-1 tw-block tw-w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=t=>e(s).email=t),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(l,{class:"tw-mt-2",message:e(s).errors.email},null,8,["message"])]),r("div",y,[o(m,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"tw-mt-1 tw-block tw-w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).password=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"tw-mt-2",message:e(s).errors.password},null,8,["message"])]),r("div",P,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"tw-mt-1 tw-block tw-w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>e(s).password_confirmation=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"tw-mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),r("div",$,[o(k,{class:g({"tw-opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{R as default};