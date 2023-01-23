import{u as _,a as f,c as b,b as e,d as l,e as c,F as g,H as v,f as s,g as y,i as n,j as V}from"./app-c45e5045.js";import{_ as x}from"./AuthenticatedLayout-8c729e12.js";import{_ as i}from"./InputError-f2c7a331.js";import{_ as d,a as u}from"./TextInput-33354a17.js";import{_ as q}from"./PrimaryButton-fce8e4fc.js";import{_ as j}from"./LinkComponent-71ac7bbf.js";import{S as k}from"./sweetalert2.all-d0fd727a.js";import"./use-outside-click-e9b65556.js";import"./use-tracked-pointer-2e0f61f0.js";const S={class:"tw-bg-white tw-shadow-lg sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8"},U=s("div",{class:"md:tw-grid md:tw-grid-cols-2"},[s("header",null,[s("h2",{class:"tw-text-lg tw-font-medium tw-text-gray-900"},"ID Number Information")])],-1),$={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},B={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},C={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},F={class:"tw-flex tw-flex-col md:tw-flex-row tw-gap-4"},O={__name:"Edit",props:{model:Object,roles:Array},setup(p){const a=p,m="subjects",t=_({course_code:a.model.course_code,descriptive_title:a.model.descriptive_title,unit:a.model.unit,lecture:a.model.lecture,laboratory:a.model.laboratory,prerequisite_subject_id:a.model.prerequisite_subject_id});function w(){t.patch(route(m+".update",a.model.id),{preserveScroll:!0,onSuccess:()=>{k.fire({title:"Updated successfully",confirmButtonColor:"#16a34a"}).then(()=>{V.Inertia.get("/"+m)})}})}return(I,o)=>(f(),b(g,null,[e(l(v),{title:"Subjects"}),e(x,null,{default:c(()=>[s("div",S,[U,s("form",{onSubmit:o[6]||(o[6]=y(r=>w(),["prevent"])),class:"tw-mt-6 tw-space-y-6 md:tw-col-span-1"},[s("div",$,[s("div",null,[e(d,{for:"course_code",value:"Course Code"}),e(u,{id:"course_code",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).course_code,"onUpdate:modelValue":o[0]||(o[0]=r=>l(t).course_code=r),required:"",autofocus:"",autocomplete:"course_code"},null,8,["modelValue"]),e(i,{class:"tw-mt-2",message:l(t).errors.course_code},null,8,["message"])]),s("div",null,[e(d,{for:"descriptive_title",value:"Descriptive Title"}),e(u,{id:"descriptive_title",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).descriptive_title,"onUpdate:modelValue":o[1]||(o[1]=r=>l(t).descriptive_title=r),required:"",autocomplete:"descriptive_title"},null,8,["modelValue"]),e(i,{class:"tw-mt-2",message:l(t).errors.descriptive_title},null,8,["message"])])]),s("div",B,[s("div",null,[e(d,{for:"unit",value:"Units"}),e(u,{id:"unit",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).unit,"onUpdate:modelValue":o[2]||(o[2]=r=>l(t).unit=r),required:"",autocomplete:"unit"},null,8,["modelValue"]),e(i,{class:"tw-mt-2",message:l(t).errors.unit},null,8,["message"])]),s("div",null,[e(d,{for:"lecture",value:"Lecture"}),e(u,{id:"lecture",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).lecture,"onUpdate:modelValue":o[3]||(o[3]=r=>l(t).lecture=r),required:"",autocomplete:"lecture"},null,8,["modelValue"]),e(i,{class:"tw-mt-2",message:l(t).errors.lecture},null,8,["message"])])]),s("div",C,[s("div",null,[e(d,{for:"laboratory",value:"Laboratory"}),e(u,{id:"laboratory",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).laboratory,"onUpdate:modelValue":o[4]||(o[4]=r=>l(t).laboratory=r),required:"",autocomplete:"laboratory"},null,8,["modelValue"]),e(i,{class:"tw-mt-2",message:l(t).errors.laboratory},null,8,["message"])]),s("div",null,[e(d,{for:"prerequisite_subject_id",value:"Prerequisite Subject ID"}),e(u,{id:"prerequisite_subject_id",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).prerequisite_subject_id,"onUpdate:modelValue":o[5]||(o[5]=r=>l(t).prerequisite_subject_id=r),required:"",autocomplete:"prerequisite_subject_id"},null,8,["modelValue"]),e(i,{class:"tw-mt-2",message:l(t).errors.prerequisite_subject_id},null,8,["message"])])]),s("div",F,[e(j,{href:"/"+m,type:"secondary"},{default:c(()=>[n(" Back ")]),_:1},8,["href"]),e(q,{disabled:l(t).processing},{default:c(()=>[n(" Save ")]),_:1},8,["disabled"])])],32)])]),_:1})],64))}};export{O as default};
