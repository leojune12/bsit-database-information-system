import{r as p,u as _,a as c,c as m,e as t,b as e,d as r,w as i,T as g,f as y,g as v,B as V}from"./app-59b56124.js";import{_ as l}from"./InputError-f040ad7f.js";import{_ as n}from"./InputLabel-afe9f46f.js";import{_ as x}from"./PrimaryButton-b904e6d8.js";import{_ as d}from"./TextInput-3203dc66.js";const b=t("header",null,[t("h2",{class:"tw-text-lg tw-font-medium tw-text-gray-900"},"Update Password"),t("p",{class:"tw-mt-1 tw-text-sm tw-text-gray-600"}," Ensure your account is using a long, random password to stay secure. ")],-1),k=["onSubmit"],P={class:"tw-flex tw-items-center tw-gap-4"},S={key:0,class:"tw-text-sm tw-text-gray-600"},E={__name:"UpdatePasswordForm",setup(N){const u=p(null),w=p(null),s=_({current_password:"",password:"",password_confirmation:""}),f=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),w.value.focus())}})};return(U,o)=>(c(),m("section",null,[b,t("form",{onSubmit:y(f,["prevent"]),class:"tw-mt-6 tw-space-y-6"},[t("div",null,[e(n,{for:"current_password",value:"Current Password"}),e(d,{id:"current_password",ref_key:"currentPasswordInput",ref:w,modelValue:r(s).current_password,"onUpdate:modelValue":o[0]||(o[0]=a=>r(s).current_password=a),type:"password",class:"tw-mt-1 tw-block w-full",autocomplete:"current-password"},null,8,["modelValue"]),e(l,{message:r(s).errors.current_password,class:"tw-mt-2"},null,8,["message"])]),t("div",null,[e(n,{for:"password",value:"New Password"}),e(d,{id:"password",ref_key:"passwordInput",ref:u,modelValue:r(s).password,"onUpdate:modelValue":o[1]||(o[1]=a=>r(s).password=a),type:"password",class:"tw-mt-1 tw-block tw-w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{message:r(s).errors.password,class:"tw-mt-2"},null,8,["message"])]),t("div",null,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(d,{id:"password_confirmation",modelValue:r(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=a=>r(s).password_confirmation=a),type:"password",class:"tw-mt-1 tw-block tw-w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{message:r(s).errors.password_confirmation,class:"tw-mt-2"},null,8,["message"])]),t("div",P,[e(x,{disabled:r(s).processing},{default:i(()=>[v("Save")]),_:1},8,["disabled"]),e(g,{"enter-from-class":"tw-opacity-0","leave-to-class":"tw-opacity-0",class:"tw-transition tw-ease-in-out"},{default:i(()=>[r(s).recentlySuccessful?(c(),m("p",S,"Saved.")):V("",!0)]),_:1})])],40,k)]))}};export{E as default};
