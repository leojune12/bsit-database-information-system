import{u as w,a as l,q as n,w as m,b as s,d as e,H as u,e as a,c,t as _,B as f,f as p,g,v as b}from"./app-59b56124.js";import{_ as y}from"./GuestLayout-e0bc85b2.js";import{_ as k}from"./InputError-f040ad7f.js";import{_ as x}from"./InputLabel-afe9f46f.js";import{_ as h}from"./PrimaryButton-b904e6d8.js";import{_ as v}from"./TextInput-3203dc66.js";const V={class:"tw-flex-grow tw-w-full tw-bg-white tw-rounded-lg dark:tw-border md:tw-mt-0 sm:tw-max-w-lg tw-p-6 sm:tw-p-8 dark:tw-bg-gray-800 dark:tw-border-gray-700"},B=a("div",{class:"tw-mb-4 tw-text-sm tw-text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"tw-mb-4 tw-font-medium tw-text-sm tw-text-green-600"},$=["onSubmit"],F={class:"tw-flex tw-items-center tw-justify-end tw-mt-4"},z={__name:"ForgotPassword",props:{status:String},setup(o){const t=w({email:""}),i=()=>{t.post(route("password.email"))};return(S,r)=>(l(),n(y,null,{default:m(()=>[s(e(u),{title:"Forgot Password"}),a("div",V,[B,o.status?(l(),c("div",N,_(o.status),1)):f("",!0),a("form",{onSubmit:p(i,["prevent"])},[a("div",null,[s(x,{for:"email",value:"Email"}),s(v,{id:"email",type:"email",class:"tw-mt-1 tw-block tw-w-full",modelValue:e(t).email,"onUpdate:modelValue":r[0]||(r[0]=d=>e(t).email=d),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),s(k,{class:"tw-mt-2",message:e(t).errors.email},null,8,["message"])]),a("div",F,[s(h,{class:b({"tw-opacity-25":e(t).processing}),disabled:e(t).processing},{default:m(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)])]),_:1}))}};export{z as default};