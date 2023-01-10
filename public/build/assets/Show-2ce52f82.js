import{_ as c}from"./AuthenticatedLayout-8c4eb43c.js";import{o as l,g as r,a as e,b as n,w,F as _,H as p,d as t,t as a,e as m}from"./app-edaa05cc.js";import{_ as o}from"./LinkComponent-bb26a4f6.js";const x={class:"tw-bg-white tw-shadow sm:tw-rounded-lg tw-mb-5"},g=t("div",{class:"tw-px-4 tw-py-5 sm:tw-px-6"},[t("h3",{class:"tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"},"User Information"),t("p",{class:"tw-mt-1 tw-max-w-2xl tw-text-sm tw-text-gray-500"},"User details and application.")],-1),h={class:"tw-border-t tw-border-gray-200"},f={class:"tw-bg-gray-50 tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6"},y=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"First name",-1),u={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},b={class:"tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6"},v=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Last name",-1),B={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},k={class:"tw-bg-gray-50 tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6"},E=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Email address",-1),F={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0"},N={class:"tw-bg-white tw-px-4 tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6"},U=t("dt",{class:"tw-text-sm tw-font-medium tw-text-gray-500"},"Date Added",-1),V={class:"tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-col-span-2 sm:tw-mt-0 tw-capitalize"},D={class:"tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-py-6 sm:tw-px-6 tw-px-4"},A={__name:"Show",props:{model:Object},setup(i){const s=i,d="/users";return(H,S)=>(l(),r(_,null,[e(n(p),{title:"Users"}),e(c,null,{default:w(()=>[t("div",x,[g,t("div",h,[t("dl",null,[t("div",f,[y,t("dd",u,a(s.model.first_name),1)]),t("div",b,[v,t("dd",B,a(s.model.last_name),1)]),t("div",k,[E,t("dd",F,a(s.model.email),1)]),t("div",N,[U,t("dd",V,a(s.model.date_added),1)])])]),t("div",D,[e(o,{href:d,type:"secondary"},{default:w(()=>[m(" Back ")]),_:1}),e(o,{href:d+"/"+s.model.id+"/edit",type:"primary"},{default:w(()=>[m(" Edit ")]),_:1},8,["href"])])])]),_:1})],64))}};export{A as default};