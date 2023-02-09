import{_ as x}from"./AuthenticatedLayout-aa77d5a0.js";import{a as w,c as o,b as d,d as l,w as m,F as i,H as g,e as t,v as u,L as h,g as a,t as e,q as y,B as b}from"./app-1fe73349.js";import{_ as n}from"./LinkComponent-1230a278.js";import"./use-outside-click-5041383f.js";import"./use-tracked-pointer-1b6e502f.js";const f={class:"tw-bg-white tw-shadow sm:tw-rounded-lg tw-mb-5"},k=t("dl",{class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},[t("h3",{class:"tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900"},"Subject Information")],-1),v={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},j=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Curriculums",-1),B={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},S={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},C=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Course Code",-1),L={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},D={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},N=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Descriptive Title",-1),V={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},q={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},$=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Units",-1),A={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},F={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},H=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Lecture",-1),I={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},T={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},U=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Laboratory",-1),z={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},E={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},O=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Prerequisite Subject ID",-1),P={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},Y={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},G=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Year",-1),J={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},K={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},M=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Semester",-1),Q={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},R={class:"tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},W=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Date Added",-1),X={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0 tw-capitalize"},Z={class:"tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-py-6 sm:tw-px-6 tw-px-4"},ot={__name:"Show",props:{model:Object},setup(_){const s=_,r="subjects";return(p,tt)=>(w(),o(i,null,[d(l(g),{title:"Subjects"}),d(x,null,{default:m(()=>[t("div",f,[t("div",null,[k,t("dl",v,[j,t("dd",B,[t("ul",null,[(w(!0),o(i,null,u(s.model.curriculums,c=>(w(),o("li",null,[d(l(h),{href:"/curriculums/"+c.id,class:"tw-text-blue-600 hover:tw-underline"},{default:m(()=>[a(e(c.name),1)]),_:2},1032,["href"])]))),256))])])]),t("dl",S,[C,t("dd",L,e(s.model.course_code),1)]),t("dl",D,[N,t("dd",V,e(s.model.descriptive_title),1)]),t("dl",q,[$,t("dd",A,e(s.model.unit),1)]),t("dl",F,[H,t("dd",I,e(s.model.lecture),1)]),t("dl",T,[U,t("dd",z,e(s.model.laboratory),1)]),t("dl",E,[O,t("dd",P,e(s.model.prerequisite_subject_ids),1)]),t("dl",Y,[G,t("dd",J,e(s.model.year),1)]),t("dl",K,[M,t("dd",Q,e(s.model.semester),1)]),t("dl",R,[W,t("dd",X,e(s.model.date_added),1)])]),t("div",Z,[d(n,{href:"/"+r,type:"secondary"},{default:m(()=>[a(" Back ")]),_:1},8,["href"]),p.$page.props.auth.user.roles[0].name=="Admin"?(w(),y(n,{key:0,href:"/"+r+"/"+s.model.id+"/edit",type:"primary"},{default:m(()=>[a(" Update ")]),_:1},8,["href"])):b("",!0)])])]),_:1})],64))}};export{ot as default};