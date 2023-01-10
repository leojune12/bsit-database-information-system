import{_ as C}from"./AuthenticatedLayout-8c4eb43c.js";import{o as w,g as c,d as t,P as b,n as h,a as i,F as _,E as v,t as n,h as I,Q as L,e as d,i as q,u as N,b as x,w as p,H as D,L as k}from"./app-edaa05cc.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{r as B,a as F,c as T,b as V}from"./ChevronRightIcon-3d9a250c.js";import{S as P}from"./sweetalert2.all-e3db1560.js";import{_ as j}from"./LinkComponent-bb26a4f6.js";function z(a,e){return w(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})])}const E={components:{ChevronDoubleLeftIcon:B,ChevronLeftIcon:F,ChevronDoubleRightIcon:T,ChevronRightIcon:V},props:{maxVisibleButtons:{type:Number,required:!1,default:3},totalPages:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0},from:{type:Number,required:!0},to:{type:Number,required:!0},total:{type:Number,required:!0},url:{type:String,required:!0}},computed:{startPage(){if(this.currentPage===1)return 1;if(this.currentPage===this.totalPages){const a=this.totalPages-(this.maxVisibleButtons-1);return a===0?1:a}return this.currentPage-1},pages(){const a=[];for(let e=this.startPage;e<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);e++)a.push({name:e,isDisabled:e===this.currentPage});return a},isInFirstPage(){return this.currentPage===1},isInLastPage(){return this.currentPage===this.totalPages}},data(){return{currentPerPage:{value:10},queryString:""}},mounted(){this.currentPerPage.value=JSON.parse(JSON.stringify(this.perPage))},methods:{onClickFirstPage(){this.queryTable(1)},onClickPreviousPage(){this.queryTable(this.currentPage-1)},onClickPage(a){this.queryTable(a)},onClickNextPage(){this.queryTable(this.currentPage+1)},onClickLastPage(){this.queryTable(this.totalPages)},queryTable(a=!1,e=!1){a||(a=this.currentPage),e&&(a=1),this.queryString="?page="+a+"&perPage="+this.currentPerPage.value;let u=this.url+this.queryString;this.$inertia.get(u,{},{preserveScroll:!0})}}},R={class:"tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-y-3"},A={class:"tw-flex tw-gap-x-6 tw-flex-col md:tw-flex-row tw-gap-y-3"},O={class:"tw-flex tw-items-center"},$={class:"tw-flex tw-items-center"},H=["disabled"],M={class:"tw-flex tw-items-center"},U=["disabled"],J=["disabled","onClick"],Q={class:"tw-lex tw-items-center"},Y=["disabled"],G={class:"tw-flex tw-items-center"},K=["disabled"],W={class:"tw-flex tw-items-center tw-justify-center tw-gap-x-2"},X=t("label",{for:"per_page",class:"tw-block tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-white tw-whitespace-nowrap"},"Per Page",-1),Z=t("option",{value:"10"},"10",-1),tt=t("option",{value:"25"},"25",-1),et=t("option",{value:"50"},"50",-1),rt=[Z,tt,et],st={class:"tw-text-sm tw-text-gray-700 dark:tw-text-white"},ot={class:"tw-font-medium"},at={class:"tw-font-medium"},nt={class:"tw-font-medium"};function it(a,e,u,m,f,r){const y=b("ChevronDoubleLeftIcon"),l=b("ChevronLeftIcon"),g=b("ChevronRightIcon"),s=b("ChevronDoubleRightIcon");return w(),c("div",R,[t("div",A,[t("ul",O,[t("li",$,[t("button",{type:"button",onClick:e[0]||(e[0]=(...o)=>r.onClickFirstPage&&r.onClickFirstPage(...o)),disabled:r.isInFirstPage,class:h([r.isInFirstPage?"tw-pointer-events-none tw-text-gray-500":"tw-text-gray-700","tw-relative tw-inline-flex tw-items-center tw-rounded-l-md tw-border tw-border-gray-300 tw-bg-white dark:tw-bg-gray-700 tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20"]),title:"Last"},[i(y,{class:"tw-block tw-h-4 tw-w-4","aria-hidden":"true"})],10,H)]),t("li",M,[t("button",{type:"button",onClick:e[1]||(e[1]=(...o)=>r.onClickPreviousPage&&r.onClickPreviousPage(...o)),disabled:r.isInFirstPage,class:h([r.isInFirstPage?"tw-pointer-events-none tw-text-gray-500":"tw-text-gray-700","tw-relative tw-inline-flex tw-items-center tw-border tw-border-gray-300 tw-bg-white dark:tw-bg-gray-700 tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20"]),title:"Previous"},[i(l,{class:"tw-block tw-h-4 tw-w-4","aria-hidden":"true"})],10,U)]),(w(!0),c(_,null,v(r.pages,o=>(w(),c("li",{key:o.name},[t("button",{type:"button",disabled:o.isDisabled,onClick:Pt=>r.onClickPage(o.name),class:h([o.isDisabled?"tw-border-blue-500 tw-bg-blue-50 tw-text-blue-600 tw-z-20":"tw-bg-white dark:tw-bg-gray-700 tw-text-gray-700 hover:tw-bg-gray-100 tw-border-gray-300","tw-relative tw-inline-flex tw-items-center tw-border tw-px-4 tw-h-10 tw-text-sm tw-font-medium tw-m-0"])},n(o.name),11,J)]))),128)),t("li",Q,[t("button",{type:"button",onClick:e[2]||(e[2]=(...o)=>r.onClickNextPage&&r.onClickNextPage(...o)),disabled:r.isInLastPage,class:h([r.isInLastPage?"tw-pointer-events-none tw-text-gray-500":"tw-text-gray-700","tw-relative tw-inline-flex tw-items-center tw-border tw-border-gray-300 tw-bg-white dark:tw-bg-gray-700 tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20"]),title:"Next"},[i(g,{class:"tw-block tw-h-4 tw-w-4","aria-hidden":"true"})],10,Y)]),t("li",G,[t("button",{type:"button",onClick:e[3]||(e[3]=(...o)=>r.onClickLastPage&&r.onClickLastPage(...o)),disabled:r.isInLastPage,class:h([r.isInLastPage?"tw-pointer-events-none tw-text-gray-500":"tw-text-gray-700","tw-relative tw-inline-flex tw-items-center tw-rounded-r-md tw-border tw-border-gray-300 tw-bg-white dark:tw-bg-gray-700 tw-px-3 tw-h-10 tw-text-sm tw-font-medium hover:tw-bg-gray-100 focus:tw-z-20"]),title:"Last"},[i(s,{class:"tw-block tw-h-4 tw-w-4","aria-hidden":"true"})],10,K)])]),t("div",W,[X,I(t("select",{"onUpdate:modelValue":e[4]||(e[4]=o=>f.currentPerPage.value=o),id:"per_page",name:"per_page",autocomplete:"per_page",class:"tw-block tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-bg-white dark:tw-bg-gray-700 tw-h-10 tw-pl-3 tw-pr-8 tw-shadow-sm focus:tw-border-blue-500 focus:tw-outline-none focus:tw-ring-blue-500 sm:tw-text-sm tw-text-gray-700 dark:tw-text-white md:tw-w-16",onChange:e[5]||(e[5]=o=>r.queryTable(!1,!0))},rt,544),[[L,f.currentPerPage.value]])])]),t("div",null,[t("p",st,[d(" Showing "+n(" ")+" "),t("span",ot,n(u.from),1),d(" "+n(" ")+" to "+n(" ")+" "),t("span",at,n(u.to),1),d(" "+n(" ")+" of "+n(" ")+" "),t("span",nt,n(u.total),1),d(" "+n(" ")+" results ")])])])}const lt=S(E,[["render",it]]),wt={class:"tw-flex tw-flex-col md:tw-flex-row tw-mb-4 md:tw-justify-between md:tw-items-center tw-gap-y-4"},ct=t("h3",{class:"tw-text-xl tw-font-bold tw-leading-6 tw-text-gray-700"}," Users ",-1),ut={class:"tw-overflow-x-auto tw-mb-4"},dt={class:"tw-min-w-full"},gt={class:"tw-border tw-bg-rose-800 tw-text-sm tw-font-medium tw-text-white"},ht={class:"border"},mt={class:"tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-sm tw-font-medium tw-text-gray-900"},ft={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},bt={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},xt={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},pt={class:"tw-text-sm tw-text-gray-900 tw-font-light tw-px-6 py-3 tw-whitespace-nowrap"},_t={class:"tw-flex tw-gap-2"},yt=["onClick"],Nt={__name:"Index",props:{response:Object},setup(a){const e=a,u=q([{title:"ID",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"First Name",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Last Name",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Email",class:"tw-py-3 tw-px-6 tw-text-left"},{title:"Actions",class:"tw-py-3 tw-px-6 tw-text-left"}]),m="/users",f=N({});function r(l){P.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",confirmButtonText:"Delete"}).then(g=>{g.isConfirmed&&y(l)})}function y(l){let g=Array.isArray(l)?Object.keys(l).map(s=>l[s].id):[l];f.transform(()=>({id_array:g})).delete(route("users.destroy",l),{preserveScroll:!0,onSuccess:()=>{P.fire({title:"Success",text:"Deleted successfully.",icon:"success",confirmButtonColor:"#16a34a"})},onError:s=>{P.fire({title:"Something went wrong",text:"Please refresh the page.",icon:"error",confirmButtonColor:"#d33"})}})}return(l,g)=>(w(),c(_,null,[i(x(D),{title:"Users"}),i(C,null,{default:p(()=>[t("div",wt,[ct,i(j,{href:m+"/create",type:"success",class:""},{default:p(()=>[i(x(z),{class:"tw-block tw-h-5 tw-w-5","aria-hidden":"true"}),d(" Create ")]),_:1},8,["href"])]),t("div",ut,[t("table",dt,[t("thead",gt,[t("tr",null,[(w(!0),c(_,null,v(u.value,s=>(w(),c("th",{key:s.title,class:h(s.class)},n(s.title),3))),128))])]),t("tbody",ht,[(w(!0),c(_,null,v(e.response.data,s=>(w(),c("tr",{key:s.id,class:"tw-bg-white tw-border-b tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-100"},[t("td",mt,n(s.id),1),t("td",ft,n(s.first_name),1),t("td",bt,n(s.last_name),1),t("td",xt,n(s.email),1),t("td",pt,[t("div",_t,[i(x(k),{href:m+"/"+s.id,class:"tw-text-green-500 hover:tw-text-green-600 tw-transition tw-duration-300 tw-ease-in-out",title:"View"},{default:p(()=>[d(" View ")]),_:2},1032,["href"]),i(x(k),{href:m+"/"+s.id+"/edit",class:"tw-text-blue-600 hover:tw-text-blue-700 tw-transition tw-duration-300 tw-ease-in-out",title:"Edit"},{default:p(()=>[d(" Edit ")]),_:2},1032,["href"]),t("a",{href:"#",class:"tw-text-red-500 hover:tw-text-red-600 tw-transition tw-duration-300 tw-ease-in-out",title:"Delete",onClick:o=>r(s.id)}," Delete ",8,yt)])])]))),128))])])]),i(lt,{totalPages:e.response.last_page,perPage:e.response.per_page,currentPage:e.response.current_page,from:e.response.from,to:e.response.to,total:e.response.total,url:m},null,8,["totalPages","perPage","currentPage","from","to","total"])]),_:1})],64))}};export{Nt as default};
