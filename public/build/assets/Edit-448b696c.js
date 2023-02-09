import{u as f,a as u,c as p,b as e,d as a,w as r,F as w,H as _,e as t,f as g,g as i,h as x}from"./app-1fe73349.js";import{_ as h}from"./AuthenticatedLayout-aa77d5a0.js";import{_ as b}from"./InputError-5c354eaa.js";import{_ as v}from"./InputLabel-0c576b08.js";import{_ as y}from"./TextInput-ee62d92c.js";import{_ as $}from"./PrimaryButton-ceb907cc.js";import{_ as S}from"./LinkComponent-1230a278.js";import{S as V}from"./sweetalert2.all-13a2ae52.js";import"./use-outside-click-5041383f.js";import"./use-tracked-pointer-1b6e502f.js";const B={class:"tw-bg-white tw-shadow-lg sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8"},k=t("h3",{class:"tw-text-xl tw-font-bold tw-text-gray-600"}," Academic Year Information ",-1),F={class:"tw-space-y-6"},N={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},q={class:"tw-flex tw-flex-col md:tw-flex-row tw-gap-4"},z={__name:"Edit",props:{model:Object},setup(n){const l=n,m="academic-years",s=f({name:l.model.name});function c(){s.put(route(m+".update",l.model.id),{preserveScroll:!0,onSuccess:()=>{V.fire({title:"Updated successfully",confirmButtonColor:"#16a34a"}).then(()=>{x.Inertia.get("/"+m)})}})}return(A,o)=>(u(),p(w,null,[e(a(_),{title:"Academic Years"}),e(h,null,{default:r(()=>[t("div",B,[t("form",{onSubmit:o[1]||(o[1]=g(d=>c(),["prevent"])),class:"tw-mt-6 tw-space-y-6 md:tw-col-span-1"},[k,t("div",F,[t("div",N,[t("div",null,[e(v,{for:"name",value:"Name",required:""}),e(y,{id:"name",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:a(s).name,"onUpdate:modelValue":o[0]||(o[0]=d=>a(s).name=d),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(b,{class:"tw-mt-2",message:a(s).errors.name},null,8,["message"])])])]),t("div",q,[e(S,{href:"/"+m,type:"secondary"},{default:r(()=>[i(" Back ")]),_:1},8,["href"]),e($,{disabled:a(s).processing},{default:r(()=>[i(" Save ")]),_:1},8,["disabled"])])],32)])]),_:1})],64))}};export{z as default};