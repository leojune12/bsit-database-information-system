import{_ as v}from"./AuthenticatedLayout-f795d83f.js";import{r as C,P as k}from"./Pagination-6788b6b5.js";import{r as P,u as S,a as w,c as l,b as r,d as c,e as p,F as d,H as B,f as e,h as u,t as x,v as D,x as a,L as m}from"./app-9d0c95cc.js";import{S as f}from"./sweetalert2.all-f530f184.js";import{_ as N}from"./LinkComponent-30784dcb.js";import"./use-outside-click-dc434eac.js";import"./use-tracked-pointer-6251704b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ChevronRightIcon-5834b492.js";const E={class:"tw-flex tw-flex-col md:tw-flex-row tw-mb-4 md:tw-justify-between md:tw-items-center tw-gap-y-4"},V=e("h3",{class:"tw-text-xl tw-font-bold tw-leading-6 tw-text-gray-700"}," Students ",-1),A={class:"tw-overflow-x-auto tw-mb-4"},F={class:"tw-min-w-full"},I={class:"tw-border tw-bg-rose-800 tw-text-sm tw-font-medium tw-text-white"},L={class:"border"},j={class:"tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900"},H={class:"tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900"},$={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},O={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},T={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},z={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},R={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},q={class:"tw-flex tw-gap-2"},G=["onClick"],et={__name:"Index",props:{response:Object},setup(_){const o=_,h=P([{title:"ID",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"ID Number",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"First Name",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Last Name",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Email",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Role",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Actions",class:"tw-py-3 tw-px-6 tw-text-left"}]),n="students",y=S({});function g(s){f.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#d33",confirmButtonText:"Delete"}).then(i=>{i.isConfirmed&&b(s)})}function b(s){let i=Array.isArray(s)?Object.keys(s).map(t=>s[t].id):[s];y.transform(()=>({id_array:i})).delete(route(n+".destroy",s),{preserveScroll:!0,onSuccess:()=>{f.fire({title:"Deleted successfully",confirmButtonColor:"#16a34a"})},onError:t=>{f.fire({title:"Something went wrong",text:"Please refresh the page.",icon:"error",confirmButtonColor:"#d33"})}})}return(s,i)=>(w(),l(d,null,[r(c(B),{title:"Students"}),r(v,null,{default:p(()=>[e("div",E,[V,r(N,{href:n+"/create",type:"success-outlined",class:""},{default:p(()=>[r(c(C),{class:"tw-block tw-h-5 tw-w-5","aria-hidden":"true"}),u(" New Student ")]),_:1},8,["href"])]),e("div",A,[e("table",F,[e("thead",I,[e("tr",null,[(w(!0),l(d,null,x(h.value,t=>(w(),l("th",{key:t.title,class:D(t.class)},a(t.title),3))),128))])]),e("tbody",L,[(w(!0),l(d,null,x(o.response.data,t=>(w(),l("tr",{key:t.id,class:"tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"},[e("td",j,a(t.id),1),e("td",H,a(t.id_number),1),e("td",$,a(t.first_name),1),e("td",O,a(t.last_name),1),e("td",T,a(t.email),1),e("td",z,a(t.role),1),e("td",R,[e("div",q,[r(c(m),{href:n+"/"+t.id,class:"tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out",title:"View"},{default:p(()=>[u(" View ")]),_:2},1032,["href"]),r(c(m),{href:n+"/"+t.id+"/edit",class:"tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out",title:"Edit"},{default:p(()=>[u(" Edit ")]),_:2},1032,["href"]),e("a",{href:"#",class:"tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out",title:"Delete",onClick:J=>g(t.id)}," Delete ",8,G)])])]))),128))])])]),r(k,{totalPages:o.response.last_page,perPage:o.response.per_page,currentPage:o.response.current_page,from:o.response.from,to:o.response.to,total:o.response.total,url:n},null,8,["totalPages","perPage","currentPage","from","to","total"])]),_:1})],64))}};export{et as default};