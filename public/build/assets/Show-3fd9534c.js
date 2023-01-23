import{_ as i}from"./AuthenticatedLayout-8c729e12.js";import{a as m,c as p,b as w,d as _,e as o,F as n,H as x,f as t,t as e,i as a,v as g,h}from"./app-c45e5045.js";import{_ as r}from"./LinkComponent-71ac7bbf.js";import"./use-outside-click-e9b65556.js";import"./use-tracked-pointer-2e0f61f0.js";const u={class:"tw-bg-white tw-shadow sm:tw-rounded-lg tw-mb-5"},y=t("dl",{class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},[t("h3",{class:"tw-text-lg tw-font-black tw-leading-6 tw-text-gray-900"},"Subject Information")],-1),b={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},f=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Course Code",-1),j={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},k={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},v=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Descriptive Title",-1),B={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},S={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},C=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Units",-1),D={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},N={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},V=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Lecture",-1),$={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},q={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},A=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Laboratory",-1),F={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},H={class:"tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},I=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Prerequisite Subject ID",-1),L={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},T={class:"tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6 tw-border-b-2"},U=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Date Added",-1),z={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0 tw-capitalize"},E={class:"tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-py-6 sm:tw-px-6 tw-px-4"},Q={__name:"Show",props:{model:Object},setup(c){const s=c,d="subjects";return(l,O)=>(m(),p(n,null,[w(_(x),{title:"Subjects"}),w(i,null,{default:o(()=>[t("div",u,[t("div",null,[y,t("dl",b,[f,t("dd",j,e(s.model.course_code),1)]),t("dl",k,[v,t("dd",B,e(s.model.descriptive_title),1)]),t("dl",S,[C,t("dd",D,e(s.model.unit),1)]),t("dl",N,[V,t("dd",$,e(s.model.lecture),1)]),t("dl",q,[A,t("dd",F,e(s.model.laboratory),1)]),t("dl",H,[I,t("dd",L,e(s.model.prerequisite_subject_id),1)]),t("dl",T,[U,t("dd",z,e(s.model.date_added),1)])]),t("div",E,[w(r,{href:"/"+d,type:"secondary"},{default:o(()=>[a(" Back ")]),_:1},8,["href"]),l.$page.props.auth.user.roles[0].name=="Admin"?(m(),g(r,{key:0,href:"/"+d+"/"+s.model.id+"/edit",type:"primary"},{default:o(()=>[a(" Update ")]),_:1},8,["href"])):h("",!0)])])]),_:1})],64))}};export{Q as default};
