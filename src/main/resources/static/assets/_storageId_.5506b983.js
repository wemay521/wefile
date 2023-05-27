import{bv as x,bw as N,r as Z,bf as A,A as G}from"./base.f9e60852.js";/* empty css                *//* empty css               *//* empty css              *//* empty css            */import{E as $,a as J}from"./select.1f41b943.js";import"./scrollbar.0cfecbae.js";import{E as O}from"./popper.819708f8.js";import"./tooltip.f118fcb0.js";import{E as Q}from"./alert.1018083d.js";import{_ as W}from"./SvgIcon.74b03ee4.js";import{Z as S,a as H}from"./ZFormItem.91aded87.js";import{j as K,k as P,e as X}from"./admin-storage.f9fc3949.js";import{u as Y,r as ee}from"./common.b94bcc08.js";import{r as y,I as te,V as ae,o as oe,a8 as le,J as ie,u as t,a as k,b as z,e as o,m as a,j as e,t as re,L as r,f as se,F as ne,v as de,Q as me,R as pe}from"./index.f20a2340.js";import{E as ce}from"./request.29c9df35.js";import{E as ue}from"./index.e487e6de.js";import{b as B}from"./route-block.9b0645f8.js";import{_ as fe}from"./plugin-vue_export-helper.21dcd24c.js";import{r as _e}from"./BadgeCheckIcon.9b23bce0.js";import{E as he}from"./index.2085544e.js";import{v as ge}from"./directive.eb3ba7ee.js";import"./index.01b1d12e.js";import"./event.776e7e11.js";import"./scroll.5771f43f.js";import"./index.ad110273.js";import"./_Uint8Array.9f77a197.js";import"./debounce.0dcbc4e4.js";import"./validator.02bde218.js";import"./focus-trap.7aeb3cb3.js";import"./index.5cf4e3bb.js";import"./index.b60e2a18.js";let i=y([]),I=y(!1);function ve(s,c){let m=c.params.storageId;const h=()=>{K(m).then(n=>{i.value=n.data,i.value.length===0&&u()})},g=()=>{i.value.find(p=>{if(Y.isEmpty(p.expression))return ce.warning("\u8BF7\u68C0\u67E5\u6570\u636E\u586B\u5199\u662F\u5426\u5B8C\u6574"),!0})||(I.value=!0,P(m,i.value).then(()=>{ue.confirm("\u4FDD\u5B58\u6210\u529F, \u662F\u5426\u8FD4\u56DE\u5B58\u50A8\u6E90\u5217\u8868\uFF1F","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"success",callback:p=>{p==="confirm"&&s.push("/admin/storage-list")}})}).finally(()=>{I.value=!1}))},u=()=>{i.value.push({mode:"hidden",expression:"",storageId:m,description:"\u8868\u8FBE\u5F0F - "+i.value.length})};return{loading:I,loadFilterData:h,filterList:i,addFilterItem:u,deleteFilterItem:n=>{i.value.splice(n,1)},saveFilterData:g}}const _=s=>(me("data-v-df4d609c"),s=s(),pe(),s),be={class:"flex justify-items-center"},we=_(()=>a("div",{class:"rules-tips"},"Glob \u8868\u8FBE\u5F0F\u89C4\u5219\uFF1A",-1)),xe=_(()=>a("div",{class:"rules-tips"},[a("b",null,"*"),r("\uFF1A\u5355\u7EA7\u8DEF\u5F84\u901A\u914D\u7B26\uFF0C\u5982\u8868\u8FBE\u5F0F "),a("span",{class:"select-all code"},"/*.jpg"),r(" \u53EF\u4EE5\u5339\u914D\u6839\u8DEF\u5F84\u4E0B\u6240\u6709\u7684 jpg \u540E\u7F00\u7684\u6587\u4EF6")],-1)),ke=_(()=>a("div",{class:"rules-tips"},[a("b",null,"**"),r("\uFF1A\u591A\u7EA7\u8DEF\u5F84\u901A\u914D\u7B26\uFF0C\u5982\u8868\u8FBE\u5F0F "),a("span",{class:"select-all code"},"/**.jpg"),r(" \u53EF\u4EE5\u5339\u914D\u6240\u6709\u8DEF\u5F84\u4E0B\u7684 jpg \u540E\u7F00\u7684\u6587\u4EF6")],-1)),Ie={class:"rules-tips-link"},ye={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},Fe=_(()=>a("span",null,"\u53C2\u8003\u6587\u7AE0 (Wikipedia)",-1)),Ee={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},Ve={target:"_blank",class:"link",href:"https://github.com/whinc/blog/issues/18"},Se={class:"sm:flex sm:space-x-2 sm:border-b-0 sm:pb-0 border-b pb-2"},C={__name:"[storageId]",setup(s){let c=te(),m=ae(),h=c.params.storageId;const{loading:g,loadFilterData:u,filterList:v,addFilterItem:n,deleteFilterItem:p,saveFilterData:j}=ve(m,c);oe(()=>{u(),D()});const F=y(),D=()=>{X(h).then(f=>{f.data.type=f.data.type.key,F.value=f.data})};return(f,ze)=>{const R=W,U=le("router-link"),L=Q,E=he,q=O,b=$,M=J,w=G,T=ge;return ie((k(),z(H,{model:t(v),class:"zfile-admin-filter-form"},{"form-title":o(()=>{var l;return[a("div",be,[e(U,{to:"/admin/storage-list"},{default:o(()=>[e(R,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})]),_:1}),a("span",null,"\u8FC7\u6EE4\u6587\u4EF6\uFF08"+re((l=t(F))==null?void 0:l.name)+"\uFF09",1)])]}),"form-sub-title":o(()=>[e(L,{closable:!1,type:"info"},{default:o(()=>[we,xe,ke,a("div",Ie,[a("a",ye,[e(t(x),{class:"inline mr-1"}),Fe]),a("a",Ee,[e(t(x),{class:"inline mr-1"}),r("\u53C2\u8003\u6587\u7AE0 (\u962E\u4E00\u5CF0)")]),a("a",Ve,[e(t(x),{class:"inline mr-1"}),r("\u53C2\u8003\u6587\u7AE0 (Github)")])])]),_:1})]),footer:o(()=>[e(w,{type:"primary",size:"default",icon:t(_e),onClick:t(j)},{default:o(()=>[r("\u4FDD\u5B58\u8BBE\u7F6E")]),_:1},8,["icon","onClick"])]),default:o(()=>[(k(!0),se(ne,null,de(t(v),(l,V)=>(k(),z(S,{required:!0,key:V,class:"expression-item"},{default:o(()=>[a("div",Se,[e(q,{content:"\u6B64\u5904\u53EF\u586B\u5199\u8868\u8FBE\u4E66\u63CF\u8FF0\uFF0C\u7528\u4E8E\u8F85\u52A9\u8BB0\u5FC6\uFF0C\u9632\u6B62\u65F6\u95F4\u8FC7\u957F\u540E\u4E0D\u77E5\u9053\u8868\u8FBE\u5F0F\u542B\u4E49.",placement:"top"},{default:o(()=>[e(E,{"prefix-icon":t(N),placeholder:"\u8BF7\u8F93\u5165\u8868\u8FBE\u5F0F\u63CF\u8FF0",modelValue:l.description,"onUpdate:modelValue":d=>l.description=d},null,8,["prefix-icon","modelValue","onUpdate:modelValue"])]),_:2},1024),e(E,{"prefix-icon":t(ee),placeholder:"\u8BF7\u8F93\u5165\u8868\u8FBE\u5F0F",modelValue:l.expression,"onUpdate:modelValue":d=>l.expression=d,modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),e(M,{class:"editor-input",modelValue:l.mode,"onUpdate:modelValue":d=>l.mode=d},{default:o(()=>[e(b,{label:"\u4EC5\u9690\u85CF",value:"hidden"}),e(b,{label:"\u9690\u85CF\u5E76\u4E0D\u53EF\u8BBF\u95EE(\u9488\u5BF9\u76EE\u5F55)",value:"inaccessible"}),e(b,{label:"\u9690\u85CF\u5E76\u4E0D\u53EF\u8BBF\u95EE\u4E0D\u53EF\u4E0B\u8F7D(\u9488\u5BF9\u6587\u4EF6)",value:"disable_download"})]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(w,{type:"danger",onClick:d=>t(p)(V),icon:t(Z)},null,8,["onClick","icon"])])]),_:2},1024))),128)),e(S,null,{default:o(()=>[e(w,{type:"primary",size:"default",icon:t(A),onClick:t(n)},{default:o(()=>[r("\u6DFB\u52A0\u66F4\u591A")]),_:1},8,["icon","onClick"])]),_:1})]),_:1},8,["model"])),[[T,t(g)]])}}};typeof B=="function"&&B(C);var nt=fe(C,[["__scopeId","data-v-df4d609c"]]);export{nt as default};