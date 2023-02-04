import{_ as S}from"./AuthenticatedLayout-1623c223.js";import{r as P,P as V}from"./Pagination-4be6078d.js";import{r as h,u as A,a as l,c as w,b as r,d as c,w as d,F as p,H as D,e,g as m,v as _,x as N,t as i,L as x,q as $,B as g}from"./app-00980844.js";import{S as f}from"./sweetalert2.all-aae87526.js";import{_ as y}from"./LinkComponent-0cedf903.js";import{_ as E}from"./TextInput-0c948040.js";import{r as j}from"./PlusIcon-1d33c615.js";import"./use-outside-click-d2289df3.js";import"./use-tracked-pointer-56029cb5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ChevronRightIcon-14420ced.js";const F={class:"tw-flex tw-flex-col md:tw-flex-row tw-mb-4 md:tw-justify-between md:tw-items-center tw-gap-y-4"},H=e("h3",{class:"tw-text-xl tw-font-bold tw-leading-6 tw-text-gray-700"}," Sections ",-1),I={class:"tw-flex tw-gap-3"},L={class:"tw-flex"},q={class:"tw-overflow-x-auto tw-mb-4"},O={class:"tw-min-w-full"},T={class:"tw-border tw-bg-rose-800 tw-text-sm tw-font-medium tw-text-white"},Y={class:"border"},z={class:"tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900"},U={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},G={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},J={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},K={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},M={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},Q={class:"tw-flex tw-gap-2"},R=["onClick"],it={__name:"Index",props:{response:Object},setup(b){const o=b,v=h([{title:"ID",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Academic Year",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Curriculum",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Name",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Year",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Actions",class:"tw-py-3 tw-px-6 tw-text-left"}]),a="sections",u=h(""),k=A({});function C(s){f.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#d33",confirmButtonText:"Delete"}).then(n=>{n.isConfirmed&&B(s)})}function B(s){let n=Array.isArray(s)?Object.keys(s).map(t=>s[t].id):[s];k.transform(()=>({id_array:n})).delete(route(a+".destroy",s),{preserveScroll:!0,onSuccess:()=>{f.fire({title:"Deleted successfully",confirmButtonColor:"#16a34a"})},onError:t=>{f.fire({title:"Something went wrong",text:"Please refresh the page.",icon:"error",confirmButtonColor:"#d33"})}})}return(s,n)=>(l(),w(p,null,[r(c(D),{title:"Alumni"}),r(S,null,{default:d(()=>[e("div",F,[H,e("div",I,[e("div",L,[r(E,{id:"id_number",type:"text",class:"tw-block tw-w-full tw-border-r-0 tw-rounded-r-none tw-ring-0 tw-rounded-lg tw-border-2",modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=t=>u.value=t),required:"",autocomplete:"id_number",placeholder:"Search Name"},null,8,["modelValue"]),r(y,{href:u.value?"/"+a+"/?search="+u.value:"/"+a,type:"success-outlined",class:"tw-h-11 tw-rounded-l-none",title:"Search"},{default:d(()=>[r(c(P),{class:"tw-h-6 tw-w-6"})]),_:1},8,["href"])]),r(y,{href:a+"/create",type:"success-outlined",class:"tw-h-11"},{default:d(()=>[r(c(j),{class:"tw-block tw-h-5 tw-w-5","aria-hidden":"true"}),m(" New Section ")]),_:1},8,["href"])])]),e("div",q,[e("table",O,[e("thead",T,[e("tr",null,[(l(!0),w(p,null,_(v.value,t=>(l(),w("th",{key:t.title,class:N(t.class)},i(t.title),3))),128))])]),e("tbody",Y,[(l(!0),w(p,null,_(o.response.data,t=>(l(),w("tr",{key:t.id,class:"tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"},[e("td",z,i(t.id),1),e("td",U,i(t.academic_year.name),1),e("td",G,i(t.curriculum.name),1),e("td",J,i(t.name),1),e("td",K,i(t.year),1),e("td",M,[e("div",Q,[r(c(x),{href:a+"/"+t.id,class:"tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out",title:"View"},{default:d(()=>[m(" View ")]),_:2},1032,["href"]),s.$page.props.auth.user.roles[0].name=="Admin"?(l(),$(c(x),{key:0,href:a+"/"+t.id+"/edit",class:"tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out",title:"Edit"},{default:d(()=>[m(" Edit ")]),_:2},1032,["href"])):g("",!0),s.$page.props.auth.user.roles[0].name=="Admin"?(l(),w("a",{key:1,href:"#",class:"tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out",title:"Delete",onClick:W=>C(t.id)}," Delete ",8,R)):g("",!0)])])]))),128))])])]),r(V,{totalPages:o.response.last_page??0,perPage:o.response.per_page??0,currentPage:o.response.current_page??0,from:o.response.from??0,to:o.response.to??0,total:o.response.total??0,url:a},null,8,["totalPages","perPage","currentPage","from","to","total"])]),_:1})],64))}};export{it as default};