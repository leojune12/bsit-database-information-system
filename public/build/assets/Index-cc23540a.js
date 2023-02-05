import{_ as S}from"./AuthenticatedLayout-53a79dcd.js";import{r as V,P as A}from"./Pagination-9e1eca32.js";import{r as g,u as N,a as r,c as l,b as a,d as i,w as c,F as p,H as $,e,q as x,g as m,B as f,v as y,x as D,t as u,L as b}from"./app-c77c7403.js";import{S as h}from"./sweetalert2.all-2f24bfa7.js";import{_ as v}from"./LinkComponent-914b6c2a.js";import{_ as j}from"./TextInput-fd354bde.js";import{r as E}from"./PlusIcon-5af7fc9f.js";import"./use-outside-click-de4d3e2a.js";import"./use-tracked-pointer-bed7fbaa.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ChevronRightIcon-290e04b4.js";const F={class:"tw-flex tw-flex-col md:tw-flex-row tw-mb-4 md:tw-justify-between md:tw-items-center tw-gap-y-4"},H=e("h3",{class:"tw-text-xl tw-font-bold tw-leading-6 tw-text-gray-700"}," Curriculums ",-1),I={class:"tw-flex tw-gap-3"},L={class:"tw-flex"},q={class:"tw-overflow-x-auto tw-mb-4"},O={class:"tw-min-w-full"},T={class:"tw-border tw-bg-indigo-500 tw-text-sm tw-font-medium tw-text-white"},z={class:"border"},U={class:"tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900"},G={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},J={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},K={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap"},M={class:"tw-flex tw-gap-2"},Q=["onClick"],R={key:1,class:"tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"},W=["colspan"],it={__name:"Index",props:{response:Object},setup(k){const o=k,_=g([{title:"ID",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Name",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Subjects",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Actions",class:"tw-py-3 tw-px-6 tw-text-left"}]),n="curriculums",d=g(""),C=N({});function B(s){h.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#d33",confirmButtonText:"Delete"}).then(w=>{w.isConfirmed&&P(s)})}function P(s){let w=Array.isArray(s)?Object.keys(s).map(t=>s[t].id):[s];C.transform(()=>({id_array:w})).delete(route(n+".destroy",s),{preserveScroll:!0,onSuccess:()=>{h.fire({title:"Deleted successfully",confirmButtonColor:"#16a34a"})},onError:t=>{h.fire({title:"Something went wrong",text:"Please refresh the page.",icon:"error",confirmButtonColor:"#d33"})}})}return(s,w)=>(r(),l(p,null,[a(i($),{title:"Alumni"}),a(S,null,{default:c(()=>[e("div",F,[H,e("div",I,[e("div",L,[a(j,{id:"id_number",type:"text",class:"tw-block tw-w-full tw-border-r-0 tw-rounded-r-none tw-ring-0 tw-rounded-lg tw-border-2",modelValue:d.value,"onUpdate:modelValue":w[0]||(w[0]=t=>d.value=t),required:"",autocomplete:"id_number",placeholder:"Search Name"},null,8,["modelValue"]),a(v,{href:d.value?"/"+n+"/?search="+d.value:"/"+n,type:"success-outlined",class:"tw-h-11 tw-rounded-l-none",title:"Search"},{default:c(()=>[a(i(V),{class:"tw-h-6 tw-w-6"})]),_:1},8,["href"])]),["Admin"].includes(s.$page.props.auth.user.roles[0].name)?(r(),x(v,{key:0,href:n+"/create",type:"success-outlined",class:"tw-h-11"},{default:c(()=>[a(i(E),{class:"tw-block tw-h-5 tw-w-5","aria-hidden":"true"}),m(" New Curriculum ")]),_:1},8,["href"])):f("",!0)])]),e("div",q,[e("table",O,[e("thead",T,[e("tr",null,[(r(!0),l(p,null,y(_.value,t=>(r(),l("th",{key:t.title,class:D(t.class)},u(t.title),3))),128))])]),e("tbody",z,[o.response.data.length?(r(!0),l(p,{key:0},y(o.response.data,t=>(r(),l("tr",{key:t.id,class:"tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"},[e("td",U,u(t.id),1),e("td",G,u(t.name),1),e("td",J,u(t.subjects.length),1),e("td",K,[e("div",M,[a(i(b),{href:n+"/"+t.id,class:"tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out",title:"View"},{default:c(()=>[m(" View ")]),_:2},1032,["href"]),s.$page.props.auth.user.roles[0].name=="Admin"?(r(),x(i(b),{key:0,href:n+"/"+t.id+"/edit",class:"tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out",title:"Edit"},{default:c(()=>[m(" Edit ")]),_:2},1032,["href"])):f("",!0),s.$page.props.auth.user.roles[0].name=="Admin"?(r(),l("a",{key:1,href:"#",class:"tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out",title:"Delete",onClick:X=>B(t.id)}," Delete ",8,Q)):f("",!0)])])]))),128)):(r(),l("tr",R,[e("td",{colspan:_.value.length,class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center"}," No records ",8,W)]))])])]),a(A,{totalPages:o.response.last_page??0,perPage:o.response.per_page??0,currentPage:o.response.current_page??0,from:o.response.from??0,to:o.response.to??0,total:o.response.total??0,url:n},null,8,["totalPages","perPage","currentPage","from","to","total"])]),_:1})],64))}};export{it as default};
