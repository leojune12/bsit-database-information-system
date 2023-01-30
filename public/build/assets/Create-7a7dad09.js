import{r as g,u as y,o as b,a as V,c as q,b as e,d as l,w as c,F as x,H as j,e as r,f as S,g as w,h as U}from"./app-59b56124.js";import{_ as k}from"./AuthenticatedLayout-9c6bd5d9.js";import{_ as o}from"./InputError-f040ad7f.js";import{_ as a}from"./InputLabel-afe9f46f.js";import{_ as i}from"./TextInput-3203dc66.js";import{_ as C}from"./PrimaryButton-b904e6d8.js";import{_ as $}from"./LinkComponent-f80632ad.js";import{S as B}from"./sweetalert2.all-0d0469c4.js";import{_ as n}from"./ListBox-32b51b49.js";import"./use-outside-click-a33fe8c4.js";import"./use-tracked-pointer-8a03dc1b.js";import"./hidden-23a282eb.js";const F={class:"tw-bg-white tw-shadow-lg sm:tw-rounded-lg tw-mb-5 tw-p-4 sm:tw-p-8"},N=r("h3",{class:"tw-text-xl tw-font-bold tw-text-gray-600"}," Create Subject ",-1),h={class:""},D={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},E={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},H={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},I={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},L={class:"md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-6 tw-space-y-6 md:tw-space-y-0"},M={class:"tw-flex tw-flex-col md:tw-flex-row tw-gap-4"},X={__name:"Create",props:{curriculums:Array},setup(_){const f=_,d="subjects",p=g([]),t=y({curriculum_id:[],course_code:null,descriptive_title:null,unit:null,lecture:null,laboratory:null,prerequisite_subject_id:null,year:null,semester:null});b(()=>{f.curriculums.forEach(m=>{p.value.push({id:m.id,name:m.name})})});function v(){t.post(route(d+".store"),{preserveScroll:!0,onSuccess:()=>{B.fire({title:"Created successfully",confirmButtonColor:"#16a34a"}).then(()=>{U.Inertia.get("/"+d)})}})}return(m,s)=>(V(),q(x,null,[e(l(j),{title:"Subjects"}),e(k,null,{default:c(()=>[r("div",F,[N,r("div",h,[r("form",{onSubmit:s[9]||(s[9]=S(u=>v(),["prevent"])),class:"tw-mt-6 tw-space-y-6"},[r("div",D,[r("div",null,[e(a,{for:"curriculum_id",value:"Curriculum",required:""}),e(n,{id:"curriculum_id",items:p.value,"onUpdate:modelValue":s[0]||(s[0]=u=>l(t).curriculum_id=u.id),"model-value":l(t).curriculum_id},null,8,["items","model-value"]),e(o,{class:"mt-2",message:l(t).errors.curriculum_id},null,8,["message"])])]),r("div",E,[r("div",null,[e(a,{for:"course_code",value:"Course Code",required:""}),e(i,{id:"course_code",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).course_code,"onUpdate:modelValue":s[1]||(s[1]=u=>l(t).course_code=u),required:"",autocomplete:"course_code"},null,8,["modelValue"]),e(o,{class:"tw-mt-2",message:l(t).errors.course_code},null,8,["message"])]),r("div",null,[e(a,{for:"descriptive_title",value:"Descriptive Title",required:""}),e(i,{id:"descriptive_title",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).descriptive_title,"onUpdate:modelValue":s[2]||(s[2]=u=>l(t).descriptive_title=u),required:"",autocomplete:"descriptive_title"},null,8,["modelValue"]),e(o,{class:"tw-mt-2",message:l(t).errors.descriptive_title},null,8,["message"])])]),r("div",H,[r("div",null,[e(a,{for:"unit",value:"Units",required:""}),e(i,{id:"unit",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).unit,"onUpdate:modelValue":s[3]||(s[3]=u=>l(t).unit=u),required:"",autocomplete:"unit"},null,8,["modelValue"]),e(o,{class:"tw-mt-2",message:l(t).errors.unit},null,8,["message"])]),r("div",null,[e(a,{for:"lecture",value:"Lecture",required:""}),e(i,{id:"lecture",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).lecture,"onUpdate:modelValue":s[4]||(s[4]=u=>l(t).lecture=u),required:"",autocomplete:"lecture"},null,8,["modelValue"]),e(o,{class:"tw-mt-2",message:l(t).errors.lecture},null,8,["message"])])]),r("div",I,[r("div",null,[e(a,{for:"laboratory",value:"Laboratory",required:""}),e(i,{id:"laboratory",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).laboratory,"onUpdate:modelValue":s[5]||(s[5]=u=>l(t).laboratory=u),required:"",autocomplete:"laboratory"},null,8,["modelValue"]),e(o,{class:"tw-mt-2",message:l(t).errors.laboratory},null,8,["message"])]),r("div",null,[e(a,{for:"prerequisite_subject_id",value:"Prerequisite Subject ID"}),e(i,{id:"prerequisite_subject_id",type:"text",class:"tw-mt-1 tw-block tw-w-full",modelValue:l(t).prerequisite_subject_id,"onUpdate:modelValue":s[6]||(s[6]=u=>l(t).prerequisite_subject_id=u),autocomplete:"prerequisite_subject_id"},null,8,["modelValue"]),e(o,{class:"tw-mt-2",message:l(t).errors.prerequisite_subject_id},null,8,["message"])])]),r("div",L,[r("div",null,[e(a,{for:"year",value:"Year",required:""}),e(n,{id:"year",items:[{id:1,name:"1st"},{id:2,name:"2nd"},{id:3,name:"3rd"},{id:4,name:"4th"}],"onUpdate:modelValue":s[7]||(s[7]=u=>l(t).year=u.id),"model-value":l(t).year},null,8,["model-value"]),e(o,{class:"tw-mt-2",message:l(t).errors.year},null,8,["message"])]),r("div",null,[e(a,{for:"semester",value:"Semester",required:""}),e(n,{id:"semester",items:[{id:1,name:"1st"},{id:2,name:"2nd"}],"onUpdate:modelValue":s[8]||(s[8]=u=>l(t).semester=u.id),"model-value":l(t).semester},null,8,["model-value"]),e(o,{class:"tw-mt-2",message:l(t).errors.semester},null,8,["message"])])]),r("div",M,[e($,{href:"/"+d,type:"secondary"},{default:c(()=>[w(" Back ")]),_:1},8,["href"]),e(C,{disabled:l(t).processing},{default:c(()=>[w(" Save ")]),_:1},8,["disabled"])])],32)])])]),_:1})],64))}};export{X as default};
