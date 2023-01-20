import{u as n,a as u,c,b as t,d as r,e as m,F as _,H as f,f as e,g as w,h as i,i as p}from"./app-9d0c95cc.js";import{_ as b}from"./AuthenticatedLayout-f795d83f.js";import{_ as g}from"./InputError-fa2429d5.js";import{_ as h,a as v}from"./TextInput-a8a5cff1.js";import{_ as x}from"./PrimaryButton-a48b6c0d.js";import{_ as y}from"./LinkComponent-30784dcb.js";import{S as $}from"./sweetalert2.all-f530f184.js";import"./use-outside-click-dc434eac.js";import"./use-tracked-pointer-6251704b.js";const N={class:"tw-bg-white tw-shadow-lg sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8"},S=e("div",{class:"md:tw-grid md:tw-grid-cols-2"},[e("header",null,[e("h2",{class:"tw-text-lg tw-font-medium tw-text-gray-900"},"Create ID Number")])],-1),V={class:""},B={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},C={class:"tw-flex tw-flex-col md:tw-flex-row tw-gap-4"},z={__name:"Create",setup(k){const o="id-numbers",s=n({id_number:null});function d(){s.post(route(o+".store"),{preserveScroll:!0,onSuccess:()=>{$.fire({title:"Created successfully",confirmButtonColor:"#16a34a"}).then(()=>{p.Inertia.get("/"+o)})}})}return(F,a)=>(u(),c(_,null,[t(r(f),{title:"ID Number"}),t(b,null,{default:m(()=>[e("div",N,[S,e("div",V,[e("form",{onSubmit:a[1]||(a[1]=w(l=>d(),["prevent"])),class:"tw-mt-6 tw-space-y-6"},[e("div",B,[e("div",null,[t(h,{for:"id_number",value:"ID Number"}),t(v,{id:"id_number",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:r(s).id_number,"onUpdate:modelValue":a[0]||(a[0]=l=>r(s).id_number=l),required:"",autocomplete:"id_number"},null,8,["modelValue"]),t(g,{class:"tw-mt-2",message:r(s).errors.id_number},null,8,["message"])])]),e("div",C,[t(y,{href:"/"+o,type:"secondary"},{default:m(()=>[i(" Back ")]),_:1},8,["href"]),t(x,{disabled:r(s).processing},{default:m(()=>[i(" Save ")]),_:1},8,["disabled"])])],32)])])]),_:1})],64))}};export{z as default};