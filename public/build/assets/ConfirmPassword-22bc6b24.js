import{u as n,a as d,v as l,e as r,b as o,d as a,H as c,f as e,i as f,y as u,g as p}from"./app-c45e5045.js";import{_}from"./GuestLayout-663fc717.js";import{_ as w}from"./InputError-f2c7a331.js";import{_ as b,a as g}from"./TextInput-33354a17.js";import{_ as h}from"./PrimaryButton-fce8e4fc.js";const x=e("div",{class:"tw-mb-4 tw-text-sm tw-text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),v=["onSubmit"],y={class:"tw-flex tw-justify-end tw-mt-4"},F={__name:"ConfirmPassword",setup(V){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(C,t)=>(d(),l(_,null,{default:r(()=>[o(a(c),{title:"Confirm Password"}),x,e("form",{onSubmit:p(i,["prevent"])},[e("div",null,[o(b,{for:"password",value:"Password"}),o(g,{id:"password",type:"password",class:"tw-mt-1 tw-block w-full",modelValue:a(s).password,"onUpdate:modelValue":t[0]||(t[0]=m=>a(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(w,{class:"tw-mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",y,[o(h,{class:u(["tw-ml-4",{"tw-opacity-25":a(s).processing}]),disabled:a(s).processing},{default:r(()=>[f(" Confirm ")]),_:1},8,["class","disabled"])])],40,v)]),_:1}))}};export{F as default};