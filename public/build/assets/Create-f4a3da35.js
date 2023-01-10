import{u as f,o as _,g,a as s,b as t,w as i,F as v,H as y,d as a,f as V,e as u,O as x}from"./app-edaa05cc.js";import{_ as b}from"./AuthenticatedLayout-8c4eb43c.js";import{_ as r,a as m,b as d}from"./TextInput-bc7d6811.js";import{_ as k}from"./PrimaryButton-8bb4968e.js";import{_ as S}from"./LinkComponent-bb26a4f6.js";import{S as $}from"./sweetalert2.all-e3db1560.js";const C={class:"tw-bg-white tw-shadow sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8"},U=a("div",{class:"md:tw-grid md:tw-grid-cols-2"},[a("header",null,[a("h2",{class:"tw-text-lg tw-font-medium tw-text-gray-900"},"User Information"),a("p",{class:"tw-mt-1 tw-text-sm tw-text-gray-600"}," Create user's profile information and email address. ")])],-1),q={class:""},B={class:"md:tw-grid md:tw-grid-cols-3 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},F={class:"md:tw-grid md:tw-grid-cols-3 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},N={class:"md:tw-grid md:tw-grid-cols-3 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},h={class:"tw-flex tw-flex-col md:tw-flex-row tw-gap-4"},O={__name:"Create",props:{roles:Array},setup(w){const c=w,n="/users",e=f({first_name:null,last_name:null,email:null,password:null,password_confirmation:null});function p(){e.post(route("users.store"),{preserveScroll:!0,onSuccess:()=>{$.fire({title:"Success",text:"Created successfully.",icon:"success",confirmButtonColor:"#16a34a"}).then(()=>{x.Inertia.get(n)})}})}return(E,l)=>(_(),g(v,null,[s(t(y),{title:c.module},null,8,["title"]),s(b,null,{default:i(()=>[a("div",C,[U,a("div",q,[a("form",{onSubmit:l[5]||(l[5]=V(o=>p(),["prevent"])),class:"tw-mt-6 tw-space-y-6"},[a("div",B,[a("div",null,[s(r,{for:"first_name",value:"First Name"}),s(m,{id:"first_name",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:t(e).first_name,"onUpdate:modelValue":l[0]||(l[0]=o=>t(e).first_name=o),required:"",autofocus:"",autocomplete:"first_name"},null,8,["modelValue"]),s(d,{class:"tw-mt-2",message:t(e).errors.first_name},null,8,["message"])]),a("div",null,[s(r,{for:"last_name",value:"Last Name"}),s(m,{id:"last_name",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:t(e).last_name,"onUpdate:modelValue":l[1]||(l[1]=o=>t(e).last_name=o),required:"",autocomplete:"last_name"},null,8,["modelValue"]),s(d,{class:"tw-mt-2",message:t(e).errors.last_name},null,8,["message"])])]),a("div",F,[a("div",null,[s(r,{for:"email",value:"Email"}),s(m,{id:"email",type:"email",class:"tw-mt-1 tw-block tw-w-full",modelValue:t(e).email,"onUpdate:modelValue":l[2]||(l[2]=o=>t(e).email=o),required:"",autocomplete:"email"},null,8,["modelValue"]),s(d,{class:"mt-2",message:t(e).errors.email},null,8,["message"])])]),a("div",N,[a("div",null,[s(r,{for:"password",value:"Password"}),s(m,{id:"password",type:"password",class:"tw-mt-1 tw-block tw-w-full",modelValue:t(e).password,"onUpdate:modelValue":l[3]||(l[3]=o=>t(e).password=o),required:"",autocomplete:"password"},null,8,["modelValue"]),s(d,{class:"tw-mt-2",message:t(e).errors.password},null,8,["message"])]),a("div",null,[s(r,{for:"password_confirmation",value:"Confirm Password"}),s(m,{id:"password_confirmation",type:"password",class:"tw-mt-1 tw-block tw-w-full",modelValue:t(e).password_confirmation,"onUpdate:modelValue":l[4]||(l[4]=o=>t(e).password_confirmation=o),required:"",autocomplete:"password_confirmation"},null,8,["modelValue"]),s(d,{class:"tw-mt-2",message:t(e).errors.password_confirmation},null,8,["message"])])]),a("div",h,[s(S,{href:n,type:"secondary"},{default:i(()=>[u(" Back ")]),_:1}),s(k,{disabled:t(e).processing},{default:i(()=>[u(" Save ")]),_:1},8,["disabled"])])],32)])])]),_:1})],64))}};export{O as default};