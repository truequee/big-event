System.register(["./PageContainer-legacy-DGBkihaA.js","./index-legacy-Dl0494LT.js","./el-col-legacy-C6FpiSUN.js","./el-form-item-legacy-DNkf0Rue.js","./_plugin-vue_export-helper-legacy-BP_FzKP6.js","./el-input-legacy-Bb9dSCAQ.js","./el-message-legacy-DbZFL1hS.js"],(function(e,l){"use strict";var a,u,r,t,n,i,s,m,d,o,c,g,f,p,_,y;return{setters:[e=>{a=e._},e=>{u=e.r,r=e.u,t=e.o,n=e.c,i=e.b,s=e.d,m=e.f,d=e.bL,o=e.E},e=>{c=e.a,g=e.E},e=>{f=e.E,p=e.a},e=>{_=e.E},e=>{y=e.E},null],execute:function(){e("default",{__name:"UserProfile",setup(e){const l=u(),{user:{username:b,nickname:v,email:k,id:V},getUser:j}=r(),E=u({username:b,nickname:v,email:k,id:V}),U=async()=>{await l.value.validate()&&(await d(E.value),await j(),o.success("修改成功"))},w={nickname:[{required:!0,message:"请输入用户昵称",trigger:"blur"},{pattern:/^\S{2,10}$/,message:"昵称必须是2-10位的非空字符串",trigger:"blur"}],email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]};return(e,u)=>{const r=y,d=f,o=_,b=p,v=c,k=g,V=a;return t(),n(V,{title:"基本资料"},{default:i((()=>[s(k,null,{default:i((()=>[s(v,{span:12},{default:i((()=>[s(b,{model:E.value,rules:w,ref_key:"formRef",ref:l,"label-width":"100px",size:"large"},{default:i((()=>[s(d,{label:"登录名称"},{default:i((()=>[s(r,{modelValue:E.value.username,"onUpdate:modelValue":u[0]||(u[0]=e=>E.value.username=e),disabled:""},null,8,["modelValue"])])),_:1}),s(d,{label:"用户昵称",prop:"nickname"},{default:i((()=>[s(r,{modelValue:E.value.nickname,"onUpdate:modelValue":u[1]||(u[1]=e=>E.value.nickname=e)},null,8,["modelValue"])])),_:1}),s(d,{label:"用户邮箱",prop:"email"},{default:i((()=>[s(r,{modelValue:E.value.email,"onUpdate:modelValue":u[2]||(u[2]=e=>E.value.email=e)},null,8,["modelValue"])])),_:1}),s(d,null,{default:i((()=>[s(o,{onClick:U,type:"primary"},{default:i((()=>[m("提交修改")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1})}}})}}}));