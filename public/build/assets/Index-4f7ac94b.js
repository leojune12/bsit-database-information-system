import{_ as v}from"./AuthenticatedLayout-8c729e12.js";import{P as C}from"./Pagination-a17869f0.js";import{r as k,u as P,a as n,c as w,b as o,d as c,e as p,F as d,H as B,f as e,i as f,x as m,y as D,t as a,L as x}from"./app-c45e5045.js";import{S as u}from"./sweetalert2.all-d0fd727a.js";import{_ as N}from"./LinkComponent-71ac7bbf.js";import{r as S}from"./PlusIcon-1106bb17.js";import"./use-outside-click-e9b65556.js";import"./use-tracked-pointer-2e0f61f0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ChevronRightIcon-f5b83047.js";const E={class:"tw-flex tw-flex-col md:tw-flex-row tw-mb-4 md:tw-justify-between md:tw-items-center tw-gap-y-4"},V=e("h3",{class:"tw-text-xl tw-font-bold tw-leading-6 tw-text-gray-700"}," Users ",-1),A={class:"tw-overflow-x-auto tw-mb-4"},F={class:"tw-min-w-full"},L={class:"tw-border tw-bg-rose-800 tw-text-sm tw-font-medium tw-text-white"},j={class:"border"},H={class:"tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900"},I={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},U={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},$={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},O={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},T={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},z={class:"tw-flex tw-gap-2"},R=["onClick"],et={__name:"Index",props:{response:Object},setup(_){const r=_,h=k([{title:"ID",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"First Name",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Last Name",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Email",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Role",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Actions",class:"tw-py-3 tw-px-6 tw-text-left"}]),l="users",g=P({});function y(s){u.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#d33",confirmButtonText:"Delete"}).then(i=>{i.isConfirmed&&b(s)})}function b(s){let i=Array.isArray(s)?Object.keys(s).map(t=>s[t].id):[s];g.transform(()=>({id_array:i})).delete(route(l+".destroy",s),{preserveScroll:!0,onSuccess:()=>{u.fire({title:"Deleted successfully",confirmButtonColor:"#16a34a"})},onError:t=>{u.fire({title:"Something went wrong",text:"Please refresh the page.",icon:"error",confirmButtonColor:"#d33"})}})}return(s,i)=>(n(),w(d,null,[o(c(B),{title:"Users"}),o(v,null,{default:p(()=>[e("div",E,[V,o(N,{href:l+"/create",type:"success-outlined",class:""},{default:p(()=>[o(c(S),{class:"tw-block tw-h-5 tw-w-5","aria-hidden":"true"}),f(" New User ")]),_:1},8,["href"])]),e("div",A,[e("table",F,[e("thead",L,[e("tr",null,[(n(!0),w(d,null,m(h.value,t=>(n(),w("th",{key:t.title,class:D(t.class)},a(t.title),3))),128))])]),e("tbody",j,[(n(!0),w(d,null,m(r.response.data,t=>(n(),w("tr",{key:t.id,class:"tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"},[e("td",H,a(t.id),1),e("td",I,a(t.first_name),1),e("td",U,a(t.last_name),1),e("td",$,a(t.email),1),e("td",O,a(t.role),1),e("td",T,[e("div",z,[o(c(x),{href:l+"/"+t.id,class:"tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out",title:"View"},{default:p(()=>[f(" View ")]),_:2},1032,["href"]),o(c(x),{href:l+"/"+t.id+"/edit",class:"tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out",title:"Edit"},{default:p(()=>[f(" Edit ")]),_:2},1032,["href"]),e("a",{href:"#",class:"tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out",title:"Delete",onClick:q=>y(t.id)}," Delete ",8,R)])])]))),128))])])]),o(C,{totalPages:r.response.last_page,perPage:r.response.per_page,currentPage:r.response.current_page,from:r.response.from,to:r.response.to,total:r.response.total,url:l},null,8,["totalPages","perPage","currentPage","from","to","total"])]),_:1})],64))}};export{et as default};
