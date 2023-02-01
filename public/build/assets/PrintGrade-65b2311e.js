import{r as n,a,c as i,b as r,d as _,e as t,t as s,F as c,v as l,Q as m,H as h,x}from"./app-00980844.js";const f={class:"tw-max-w-4xl tw-mx-auto tw-px-4"},p=m('<div class="tw-flex tw-justify-around tw-mb-6"><div class="tw-flex tw-w-28 tw-h-28 tw-justify-center tw-items-center"><img src="/capsu_logo.png" alt="" class="tw-h-16"></div><h1 class="tw-text-xl tw-font-extrabold tw-tracking-tight tw-leading-none tw-text-gray-700 dark:tw-text-white tw-flex tw-items-center">Database Information System for BSIT Student</h1><div class="tw-flex tw-w-28 tw-h-28 tw-justify-center tw-items-center"><img src="/it_logo.png" alt="" class="tw-h-16"></div></div>',1),u={class:"tw-mb-8"},v={class:"tw-flex"},b=t("div",{class:"tw-mr-3"}," Name: ",-1),g={class:"tw-font-bold"},y={class:"tw-flex"},S=t("div",{class:"tw-mr-3"}," Year: ",-1),j={class:"tw-font-bold"},k={class:"tw-flex"},N=t("div",{class:"tw-mr-3"}," Section: ",-1),B={class:"tw-font-bold"},D={class:"tw-flex"},G=t("div",{class:"tw-mr-3"}," Semester: ",-1),H={class:"tw-font-bold"},O={class:"tw-flex"},V=t("div",{class:"tw-mr-3"}," Academic Year: ",-1),C={class:"tw-font-bold"},F={class:"tw-overflow-x-auto tw-mb-4"},I={class:"tw-min-w-full tw-border"},T={class:"tw-font-medium tw-border-b"},Y={class:"border"},z={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3"},A={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3"},E={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3"},q={__name:"PrintGrade",props:{model:Object,subjects:Object,year:String,semester:String,section:Object},setup(d){const e=d,w=n([{title:"Course Number",class:"tw-py-2 tw-px-6 tw-text-left tw-whitespace-nowrap"},{title:"Descriptive Title",class:"tw-py-2 tw-px-6 tw-text-left tw-whitespace-nowrap"},{title:"Grade",class:"tw-py-2 tw-px-6 tw-text-left tw-whitespace-nowrap"}]);return(L,P)=>(a(),i(c,null,[r(_(h),{title:"Grades"}),t("div",f,[p,t("div",u,[t("div",v,[b,t("div",g,s(e.model.first_name)+s(e.model.middle_name?" "+e.model.middle_name+" ":" ")+s(e.model.last_name),1)]),t("div",y,[S,t("div",j,s(e.section.year),1)]),t("div",k,[N,t("div",B,s(e.section.name),1)]),t("div",D,[G,t("div",H,s(e.semester),1)]),t("div",O,[V,t("div",C,s(e.section.academic_year.name),1)])]),t("div",F,[t("table",I,[t("thead",T,[t("tr",null,[(a(!0),i(c,null,l(w.value,o=>(a(),i("th",{key:o.title,class:x(o.class)},s(o.title),3))),128))])]),t("tbody",Y,[(a(!0),i(c,null,l(e.subjects,o=>(a(),i("tr",{key:o.id,class:"tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"},[t("td",z,s(o.course_code),1),t("td",A,s(o.descriptive_title),1),t("td",E,s(o.pivot.grade),1)]))),128))])])])])],64))}};export{q as default};
