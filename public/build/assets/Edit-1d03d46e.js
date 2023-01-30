import{r as g,u as y,o as b,a as V,c as x,b as e,d as l,w as n,F as q,H as j,e as o,f as U,g as _,h as S}from"./app-59b56124.js";import{_ as k}from"./AuthenticatedLayout-9c6bd5d9.js";import{_ as u}from"./InputError-f040ad7f.js";import{_ as a}from"./InputLabel-afe9f46f.js";import{_ as i}from"./TextInput-3203dc66.js";import{_ as $}from"./PrimaryButton-b904e6d8.js";import{_ as B}from"./LinkComponent-f80632ad.js";import{S as C}from"./sweetalert2.all-0d0469c4.js";import{_ as p}from"./ListBox-32b51b49.js";import"./use-outside-click-a33fe8c4.js";import"./use-tracked-pointer-8a03dc1b.js";import"./hidden-23a282eb.js";const F={class:"tw-bg-white tw-shadow-lg sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8"},E=o("h3",{class:"tw-text-xl tw-font-bold tw-text-gray-600"}," Update Subject ",-1),N={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},h={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},D={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},H={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},I={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},L={class:"tw-flex tw-flex-col md:tw-flex-row tw-gap-4"},W={__name:"Edit",props:{model:Object,curriculums:Array},setup(f){const d=f,m="subjects",w=g([]),t=y({curriculum_id:d.model.curriculum_id,course_code:d.model.course_code,descriptive_title:d.model.descriptive_title,unit:d.model.unit,lecture:d.model.lecture,laboratory:d.model.laboratory,prerequisite_subject_id:d.model.prerequisite_subject_id,year:d.model.year,semester:d.model.semester});b(()=>{d.curriculums.forEach(c=>{w.value.push({id:c.id,name:c.name})})});function v(){t.patch(route(m+".update",d.model.id),{preserveScroll:!0,onSuccess:()=>{C.fire({title:"Updated successfully",confirmButtonColor:"#16a34a"}).then(()=>{S.Inertia.get("/"+m)})}})}return(c,s)=>(V(),x(q,null,[e(l(j),{title:"Subjects"}),e(k,null,{default:n(()=>[o("div",F,[E,o("form",{onSubmit:s[9]||(s[9]=U(r=>v(),["prevent"])),class:"tw-mt-6 tw-space-y-6 md:tw-col-span-1"},[o("div",N,[o("div",null,[e(a,{for:"curriculumn_id",value:"Curriculum",required:""}),e(p,{id:"curriculumn_id",items:w.value,"onUpdate:modelValue":s[0]||(s[0]=r=>l(t).curriculum_id=r.id),"model-value":l(t).curriculum_id},null,8,["items","model-value"]),e(u,{class:"mt-2",message:l(t).errors.curriculumn_id},null,8,["message"])])]),o("div",h,[o("div",null,[e(a,{for:"course_code",value:"Course Code"}),e(i,{id:"course_code",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).course_code,"onUpdate:modelValue":s[1]||(s[1]=r=>l(t).course_code=r),required:"",autocomplete:"course_code"},null,8,["modelValue"]),e(u,{class:"tw-mt-2",message:l(t).errors.course_code},null,8,["message"])]),o("div",null,[e(a,{for:"descriptive_title",value:"Descriptive Title"}),e(i,{id:"descriptive_title",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).descriptive_title,"onUpdate:modelValue":s[2]||(s[2]=r=>l(t).descriptive_title=r),required:"",autocomplete:"descriptive_title"},null,8,["modelValue"]),e(u,{class:"tw-mt-2",message:l(t).errors.descriptive_title},null,8,["message"])])]),o("div",D,[o("div",null,[e(a,{for:"unit",value:"Units"}),e(i,{id:"unit",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).unit,"onUpdate:modelValue":s[3]||(s[3]=r=>l(t).unit=r),required:"",autocomplete:"unit"},null,8,["modelValue"]),e(u,{class:"tw-mt-2",message:l(t).errors.unit},null,8,["message"])]),o("div",null,[e(a,{for:"lecture",value:"Lecture"}),e(i,{id:"lecture",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).lecture,"onUpdate:modelValue":s[4]||(s[4]=r=>l(t).lecture=r),required:"",autocomplete:"lecture"},null,8,["modelValue"]),e(u,{class:"tw-mt-2",message:l(t).errors.lecture},null,8,["message"])])]),o("div",H,[o("div",null,[e(a,{for:"laboratory",value:"Laboratory"}),e(i,{id:"laboratory",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).laboratory,"onUpdate:modelValue":s[5]||(s[5]=r=>l(t).laboratory=r),required:"",autocomplete:"laboratory"},null,8,["modelValue"]),e(u,{class:"tw-mt-2",message:l(t).errors.laboratory},null,8,["message"])]),o("div",null,[e(a,{for:"prerequisite_subject_id",value:"Prerequisite Subject ID"}),e(i,{id:"prerequisite_subject_id",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).prerequisite_subject_id,"onUpdate:modelValue":s[6]||(s[6]=r=>l(t).prerequisite_subject_id=r),required:"",autocomplete:"prerequisite_subject_id"},null,8,["modelValue"]),e(u,{class:"tw-mt-2",message:l(t).errors.prerequisite_subject_id},null,8,["message"])])]),o("div",I,[o("div",null,[e(a,{for:"year",value:"Year",required:""}),e(p,{id:"year",items:[{id:1,name:"1st"},{id:2,name:"2nd"},{id:3,name:"3rd"},{id:4,name:"4th"}],"onUpdate:modelValue":s[7]||(s[7]=r=>l(t).year=r.id),"model-value":l(t).year},null,8,["model-value"]),e(u,{class:"tw-mt-2",message:l(t).errors.year},null,8,["message"])]),o("div",null,[e(a,{for:"semester",value:"Semester",required:""}),e(p,{id:"semester",items:[{id:1,name:"1st"},{id:2,name:"2nd"}],"onUpdate:modelValue":s[8]||(s[8]=r=>l(t).semester=r.id),"model-value":l(t).semester},null,8,["model-value"]),e(u,{class:"tw-mt-2",message:l(t).errors.semester},null,8,["message"])])]),o("div",L,[e(B,{href:"/"+m,type:"secondary"},{default:n(()=>[_(" Back ")]),_:1},8,["href"]),e($,{disabled:l(t).processing},{default:n(()=>[_(" Save ")]),_:1},8,["disabled"])])],32)])]),_:1})],64))}};export{W as default};