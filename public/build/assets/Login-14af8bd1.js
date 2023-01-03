import{l as h,h as m,m as x,b as s,o as l,g,p as k,u as y,t as _,k as b,d as t,a as n,w as i,f as v,q as p,c as C,n as S,e as c,F as V,L as u}from"./app-c58f8fff.js";const B=["value"],F={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(a,{emit:e}){const d=a,w=h({get(){return d.checked},set(r){e("update:checked",r)}});return(r,o)=>m((l(),g("input",{type:"checkbox",value:a.value,"onUpdate:modelValue":o[0]||(o[0]=f=>k(w)?w.value=f:null),class:"tw-rounded tw-border-gray-300 tw-text-indigo-600 tw-shadow-sm focus:tw-ring-indigo-500"},null,8,B)),[[x,s(w)]])}},R={key:0,class:"tw-mb-4 tw-font-medium tw-text-sm tw-text-green-600"},P={class:"tw-bg-gray-50 dark:tw-bg-gray-900"},q={class:"tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-6 tw-py-8 tw-mx-auto tw-h-screen lg:tw-py-0"},D=t("img",{src:"/capsu_logo.png",class:"tw-mr-3 tw-h-8s tw-w-10",alt:"Flowbite Logo"},null,-1),L=t("span",{class:"tw-self-center tw-text-2xl tw-font-semibold tw-whitespace-nowrap dark:tw-text-white tw-text-gray-900"},"Capsu Pilar DRRM",-1),M={class:"tw-w-full tw-bg-white tw-rounded-lg tw-shadow dark:tw-border md:tw-mt-0 sm:tw-max-w-md xl:tw-p-0 dark:tw-bg-gray-800 dark:tw-border-gray-700"},N={class:"tw-p-6 tw-space-y-4 md:tw-space-y-6 sm:tw-p-8"},U=t("h1",{class:"tw-text-xl tw-font-bold tw-leading-tight tw-tracking-tight tw-text-gray-900 md:tw-text-2xl dark:tw-text-white"}," Sign in to your account ",-1),j=["onSubmit"],E=t("label",{for:"email",class:"tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"},"Your email",-1),T=t("label",{for:"password",class:"tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"},"Password",-1),$={class:"tw-flex tw-items-center tw-justify-between"},z={class:"tw-flex tw-items-center"},A={class:"tw-block"},Y={class:"tw-flex tw-items-center"},G=t("span",{class:"tw-ml-2 tw-text-sm tw-text-gray-600"},"Remember me",-1),H=["disabled"],I={class:"tw-text-sm tw-font-light tw-text-gray-500 dark:tw-text-gray-400"},K={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(a){const e=y({email:"",password:"",remember:!1}),d=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(w,r)=>(l(),g(V,null,[a.status?(l(),g("div",R,_(a.status),1)):b("",!0),t("section",P,[t("div",q,[n(s(u),{href:"/",class:"tw-flex tw-items-center tw-mb-6"},{default:i(()=>[D,L]),_:1}),t("div",M,[t("div",N,[U,t("form",{onSubmit:v(d,["prevent"]),class:"tw-space-y-4 md:tw-space-y-6",action:"#"},[t("div",null,[E,m(t("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":r[0]||(r[0]=o=>s(e).email=o),class:"tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-blue-600 focus:tw-border-blue-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500",placeholder:"Email",required:""},null,512),[[p,s(e).email]])]),t("div",null,[T,m(t("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":r[1]||(r[1]=o=>s(e).password=o),placeholder:"Password",class:"tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-blue-600 focus:tw-border-blue-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500",required:""},null,512),[[p,s(e).password]])]),t("div",$,[t("div",z,[t("div",A,[t("label",Y,[n(F,{name:"remember",checked:s(e).remember,"onUpdate:checked":r[2]||(r[2]=o=>s(e).remember=o)},null,8,["checked"]),G])])]),a.canResetPassword?(l(),C(s(u),{key:0,href:w.route("password.request"),class:"tw-underline tw-text-sm tw-text-gray-600 hover:tw-text-gray-900 tw-rounded-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500"},{default:i(()=>[c(" Forgot your password? ")]),_:1},8,["href"])):b("",!0)]),t("button",{type:"submit",class:S([s(e).processing?"tw-opacity-25":"","tw-w-full tw-text-white tw-bg-blue-600 hover:tw-bg-blue-700 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 dark:focus:tw-ring-blue-800"]),disabled:s(e).processing}," Sign in ",10,H),t("p",I,[c(" Don’t have an account yet? "),n(s(u),{href:"/register",class:"tw-font-medium tw-text-blue-600 hover:tw-underline dark:tw-text-blue-500"},{default:i(()=>[c("Sign up")]),_:1})])],40,j)])])])])],64))}};export{K as default};
