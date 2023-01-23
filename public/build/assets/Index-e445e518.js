import{_ as C}from"./AuthenticatedLayout-8c729e12.js";import{P as B}from"./Pagination-a17869f0.js";import{r as P,u as S,a as r,c as a,b as w,d as c,e as p,F as d,H as D,f as e,v as h,i as u,h as m,x,y as N,t as n,L as _}from"./app-c45e5045.js";import{S as f}from"./sweetalert2.all-d0fd727a.js";import{_ as A}from"./LinkComponent-71ac7bbf.js";import{r as V}from"./PlusIcon-1106bb17.js";import"./use-outside-click-e9b65556.js";import"./use-tracked-pointer-2e0f61f0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ChevronRightIcon-f5b83047.js";const $={class:"tw-flex tw-flex-col md:tw-flex-row tw-mb-4 md:tw-justify-between md:tw-items-center tw-gap-y-4"},E=e("h3",{class:"tw-text-xl tw-font-bold tw-leading-6 tw-text-gray-700"}," Students ",-1),F={class:"tw-overflow-x-auto tw-mb-4"},I={class:"tw-min-w-full"},L={class:"tw-border tw-bg-rose-800 tw-text-sm tw-font-medium tw-text-white"},j={class:"border"},H={class:"tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900"},O={class:"tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900"},T={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},z={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},q={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},G={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},J={class:"tw-flex tw-gap-2"},K=["onClick"],rt={__name:"Index",props:{response:Object},setup(y){const o=y,g=P([{title:"ID",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"ID Number",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"First Name",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Last Name",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Email",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Actions",class:"tw-py-3 tw-px-6 tw-text-left"}]),l="students",b=S({});function k(s){f.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#d33",confirmButtonText:"Delete"}).then(i=>{i.isConfirmed&&v(s)})}function v(s){let i=Array.isArray(s)?Object.keys(s).map(t=>s[t].id):[s];b.transform(()=>({id_array:i})).delete(route(l+".destroy",s),{preserveScroll:!0,onSuccess:()=>{f.fire({title:"Deleted successfully",confirmButtonColor:"#16a34a"})},onError:t=>{f.fire({title:"Something went wrong",text:"Please refresh the page.",icon:"error",confirmButtonColor:"#d33"})}})}return(s,i)=>(r(),a(d,null,[w(c(D),{title:"Students"}),w(C,null,{default:p(()=>[e("div",$,[E,s.$page.props.auth.user.roles[0].name=="Admin"?(r(),h(A,{key:0,href:l+"/create",type:"success-outlined",class:""},{default:p(()=>[w(c(V),{class:"tw-block tw-h-5 tw-w-5","aria-hidden":"true"}),u(" New Student ")]),_:1},8,["href"])):m("",!0)]),e("div",F,[e("table",I,[e("thead",L,[e("tr",null,[(r(!0),a(d,null,x(g.value,t=>(r(),a("th",{key:t.title,class:N(t.class)},n(t.title),3))),128))])]),e("tbody",j,[(r(!0),a(d,null,x(o.response.data,t=>(r(),a("tr",{key:t.id,class:"tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"},[e("td",H,n(t.id),1),e("td",O,n(t.id_number),1),e("td",T,n(t.first_name),1),e("td",z,n(t.last_name),1),e("td",q,n(t.email),1),e("td",G,[e("div",J,[w(c(_),{href:l+"/"+t.id,class:"tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out",title:"View"},{default:p(()=>[u(" View ")]),_:2},1032,["href"]),s.$page.props.auth.user.roles[0].name=="Admin"?(r(),h(c(_),{key:0,href:l+"/"+t.id+"/edit",class:"tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out",title:"Edit"},{default:p(()=>[u(" Edit ")]),_:2},1032,["href"])):m("",!0),s.$page.props.auth.user.roles[0].name=="Admin"?(r(),a("a",{key:1,href:"#",class:"tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out",title:"Delete",onClick:M=>k(t.id)}," Delete ",8,K)):m("",!0)])])]))),128))])])]),w(B,{totalPages:o.response.last_page,perPage:o.response.per_page,currentPage:o.response.current_page,from:o.response.from,to:o.response.to,total:o.response.total,url:l},null,8,["totalPages","perPage","currentPage","from","to","total"])]),_:1})],64))}};export{rt as default};
