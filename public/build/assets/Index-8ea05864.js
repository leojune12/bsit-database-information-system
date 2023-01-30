import{_ as v}from"./AuthenticatedLayout-9c6bd5d9.js";import{P as B}from"./Pagination-09cbc451.js";import{r as P,u as A,a as r,c as a,b as l,d as w,w as c,F as p,H as D,e,q as h,g as d,B as m,s as _,v as S,t as u,L as x}from"./app-59b56124.js";import{S as f}from"./sweetalert2.all-0d0469c4.js";import{_ as N}from"./LinkComponent-f80632ad.js";import{r as V}from"./PlusIcon-23378a29.js";import"./use-outside-click-a33fe8c4.js";import"./use-tracked-pointer-8a03dc1b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ChevronRightIcon-1eea4b61.js";const $={class:"tw-flex tw-flex-col md:tw-flex-row tw-mb-4 md:tw-justify-between md:tw-items-center tw-gap-y-4"},j=e("h3",{class:"tw-text-xl tw-font-bold tw-leading-6 tw-text-gray-700"}," Curriculums ",-1),E={class:"tw-overflow-x-auto tw-mb-4"},F={class:"tw-min-w-full"},H={class:"tw-border tw-bg-rose-800 tw-text-sm tw-font-medium tw-text-white"},I={class:"border"},L={class:"tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900"},O={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},T={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},q={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},z={class:"tw-flex tw-gap-2"},G=["onClick"],et={__name:"Index",props:{response:Object},setup(g){const o=g,y=P([{title:"ID",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Name",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Subjects",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Actions",class:"tw-py-3 tw-px-6 tw-text-left"}]),n="curriculums",b=A({});function k(s){f.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#d33",confirmButtonText:"Delete"}).then(i=>{i.isConfirmed&&C(s)})}function C(s){let i=Array.isArray(s)?Object.keys(s).map(t=>s[t].id):[s];b.transform(()=>({id_array:i})).delete(route(n+".destroy",s),{preserveScroll:!0,onSuccess:()=>{f.fire({title:"Deleted successfully",confirmButtonColor:"#16a34a"})},onError:t=>{f.fire({title:"Something went wrong",text:"Please refresh the page.",icon:"error",confirmButtonColor:"#d33"})}})}return(s,i)=>(r(),a(p,null,[l(w(D),{title:"Alumni"}),l(v,null,{default:c(()=>[e("div",$,[j,s.$page.props.auth.user.roles[0].name=="Admin"?(r(),h(N,{key:0,href:n+"/create",type:"success-outlined",class:""},{default:c(()=>[l(w(V),{class:"tw-block tw-h-5 tw-w-5","aria-hidden":"true"}),d(" New Curriculum ")]),_:1},8,["href"])):m("",!0)]),e("div",E,[e("table",F,[e("thead",H,[e("tr",null,[(r(!0),a(p,null,_(y.value,t=>(r(),a("th",{key:t.title,class:S(t.class)},u(t.title),3))),128))])]),e("tbody",I,[(r(!0),a(p,null,_(o.response.data,t=>(r(),a("tr",{key:t.id,class:"tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"},[e("td",L,u(t.id),1),e("td",O,u(t.name),1),e("td",T,u(t.subjects.length),1),e("td",q,[e("div",z,[l(w(x),{href:n+"/"+t.id,class:"tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out",title:"View"},{default:c(()=>[d(" View ")]),_:2},1032,["href"]),s.$page.props.auth.user.roles[0].name=="Admin"?(r(),h(w(x),{key:0,href:n+"/"+t.id+"/edit",class:"tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out",title:"Edit"},{default:c(()=>[d(" Edit ")]),_:2},1032,["href"])):m("",!0),s.$page.props.auth.user.roles[0].name=="Admin"?(r(),a("a",{key:1,href:"#",class:"tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out",title:"Delete",onClick:J=>k(t.id)}," Delete ",8,G)):m("",!0)])])]))),128))])])]),l(B,{totalPages:o.response.last_page,perPage:o.response.per_page,currentPage:o.response.current_page,from:o.response.from,to:o.response.to,total:o.response.total,url:n},null,8,["totalPages","perPage","currentPage","from","to","total"])]),_:1})],64))}};export{et as default};