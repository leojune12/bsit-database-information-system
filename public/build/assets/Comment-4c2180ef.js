import{u as f,r as x,o as _,a as u,c,e as t,t as o,f as v,z as g,O as b,d as a,F as y,s as h,v as d,b as l,g as i}from"./app-59b56124.js";import{S as k}from"./sweetalert2.all-0d0469c4.js";import C from"./CommentComponent-17543c07.js";import{r as $,a as S,c as z,b as F}from"./ChevronRightIcon-1eea4b61.js";const V={id:"comments",class:"tw-bg-white dark:tw-bg-gray-900 tw-py-8 lg:tw-py-16"},B={class:"tw-max-w-screen-md tw-mx-auto tw-px-4"},N={class:"tw-flex tw-justify-between tw-items-center tw-mb-6"},D={class:"tw-text-lg lg:tw-text-2xl tw-font-bold tw-text-gray-900 dark:tw-text-white"},L=t("label",{for:"username",class:"tw-sr-only"},"Your username",-1),M={class:""},Y=t("label",{for:"comment",class:"tw-sr-only"},"Your comment",-1),j=t("button",{type:"submit",class:"tw-inline-flex tw-items-center tw-py-2.5 tw-px-4 tw-text-xs tw-font-medium tw-text-center tw-text-white tw-bg-blue-700 tw-rounded-lg focus:tw-ring-4 focus:tw-ring-blue-200 dark:focus:tw-ring-blue-900 hover:tw-bg-blue-800"}," Post comment ",-1),q={class:"tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-y-3"},P={class:"tw-flex tw-gap-x-6 tw-flex-col md:tw-flex-row tw-gap-y-3"},T={class:"tw-flex tw-items-center"},U={class:"tw-flex tw-items-center"},E=["disabled"],O={class:"tw-flex tw-items-center"},R=["disabled"],W={class:"tw-flex tw-items-center"},A=["disabled"],G={class:"tw-flex tw-items-center"},H=["disabled"],I={class:"tw-text-sm tw-text-gray-700 dark:tw-text-white"},J={class:"tw-font-medium"},K={class:"tw-font-medium"},Q={class:"tw-font-medium"},ot={__name:"Comment",setup(X){const n=f({username:"",comment:""}),e=x([]);_(()=>{w()});function p(){n.post("/comments",{preserveScroll:!0,onSuccess:()=>{k.fire({title:"Success",text:"Comment posted.",icon:"success",confirmButtonColor:"#16a34a"}),n.reset(),w()}})}function w(m=null){axios.get(m??"/comments").then(function(r){e.value=r.data})}return(m,r)=>(u(),c("section",V,[t("div",B,[t("div",N,[t("h2",D,"Discussion ("+o(e.value.total)+")",1)]),t("form",{onSubmit:r[2]||(r[2]=v(s=>p(),["prevent"])),class:"tw-mb-6 tw-space-y-4"},[t("div",null,[L,g(t("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>a(n).username=s),id:"username",type:"text",class:"tw-px-4 tw-shadow-sm tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500 dark:tw-shadow-sm-light",placeholder:"Your username",required:""},null,512),[[b,a(n).username]])]),t("div",M,[Y,g(t("textarea",{"onUpdate:modelValue":r[1]||(r[1]=s=>a(n).comment=s),id:"comment",rows:"6",class:"tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-rounded-lg tw-shadow-sm tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500",placeholder:"Write a comment...",required:""},null,512),[[b,a(n).comment]])]),j],32),(u(!0),c(y,null,h(e.value.data,s=>(u(),c("div",{key:s.id},[l(C,{comment:s,onRefreshComments:r[3]||(r[3]=Z=>w(e.value.path+"?page="+e.value.current_page))},null,8,["comment"])]))),128)),t("div",q,[t("div",P,[t("ul",T,[t("li",U,[t("button",{type:"button",onClick:r[4]||(r[4]=s=>w(e.value.first_page_url)),disabled:e.value.current_page==1,class:d([e.value.current_page==1?"tw-pointer-events-none tw-text-gray-500":"tw-text-gray-700","tw-relative tw-inline-flex tw-items-center tw-rounded-l-md tw-border tw-border-gray-300 dark:tw-border-gray-500 dark:tw-border-gray-500 tw-bg-white dark:tw-bg-gray-700 tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20"]),title:"Last"},[l(a($),{class:"tw-block tw-h-4 tw-w-4","aria-hidden":"true"})],10,E)]),t("li",O,[t("button",{type:"button",onClick:r[5]||(r[5]=s=>w(e.value.prev_page_url)),disabled:e.value.current_page==1,class:d([e.value.current_page==1?"tw-pointer-events-none tw-text-gray-500":"tw-text-gray-700","tw-relative tw-inline-flex tw-items-center tw-border tw-border-gray-300 dark:tw-border-gray-500 tw-bg-white dark:tw-bg-gray-700 tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20"]),title:"Previous"},[l(a(S),{class:"tw-block tw-h-4 tw-w-4","aria-hidden":"true"})],10,R)]),t("li",W,[t("button",{type:"button",onClick:r[6]||(r[6]=s=>w(e.value.next_page_url)),disabled:e.value.current_page==e.value.last_page,class:d([e.value.current_page==e.value.last_page?"tw-pointer-events-none tw-text-gray-500":"tw-text-gray-700","tw-relative tw-inline-flex tw-items-center tw-border tw-border-gray-300 dark:tw-border-gray-500 tw-bg-white dark:tw-bg-gray-700 tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20"]),title:"Next"},[l(a(z),{class:"tw-block tw-h-4 tw-w-4","aria-hidden":"true"})],10,A)]),t("li",G,[t("button",{type:"button",onClick:r[7]||(r[7]=s=>w(e.value.last_page_url)),disabled:e.value.current_page==e.value.last_page,class:d([e.value.current_page==e.value.last_page?"tw-pointer-events-none tw-text-gray-500":"tw-text-gray-700","tw-relative tw-inline-flex tw-items-center tw-rounded-r-md tw-border tw-border-gray-300 dark:tw-border-gray-500 tw-bg-white dark:tw-bg-gray-700 tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20"]),title:"Last"},[l(a(F),{class:"tw-block tw-h-4 tw-w-4","aria-hidden":"true"})],10,H)])])]),t("div",null,[t("p",I,[i(" Showing "+o(" ")+" "),t("span",J,o(e.value.from??"0"),1),i(" "+o(" ")+" to "+o(" ")+" "),t("span",K,o(e.value.to??"0"),1),i(" "+o(" ")+" of "+o(" ")+" "),t("span",Q,o(e.value.total),1),i(" "+o(" ")+" results ")])])])])]))}};export{ot as default};
