import{v as f,aq as z,aI as H,aJ as B,r as Q,d as R,aB as b,o as C,f as w,G as t,B as U,u as l,F as M,af as N,j as g,y as m,D as A,aE as q,aF as P,$ as j}from"./index-C5ueqVSw.js";import{g as h,u as I}from"./index-Dazi2bDt.js";import{r as T}from"./router-CBmUEq_U.js";import{_ as D}from"./index-D_4vnk7Z.js";var G={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"}}]},name:"line-chart",theme:"outlined"};function k(n){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),o.forEach(function(r){K(n,r,a[r])})}return n}function K(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var v=function(e,a){var o=k({},e,a.attrs);return f(z,k({},o,{icon:G}),null)};v.displayName="LineChartOutlined";v.inheritAttrs=!1;const V="/qanything/assets/logo-small-B0GuUw6T.png",W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEzSURBVFiF7Zc9TsNAEEZfAgfIEVxQUyFRp6bkALmBCx+AIgdIsTeBmibUHMIlTaREQiJCAdPM4NFqiXetEEfKftLIkrU78+bbH8ujpmkuGFDjIYtngJMCuAa2wO5I8QncWoA74PK/ugxoDEwtwJc3YA1UAnWIqCSn1bcFUL0ADpgAC4lJzy4J5HFS41c+wIfQKnEJvAJFj+KFzC1pHa2kxp8AKgfcALWXKFYWvJZcLjRw3zG0E2OXJGS5NhJU1z1gretakoKw5f7mSwJQdS1JtOW+Us6+Jn6QggtaJxTGAXM6uu4LAK21tQHR93Miuw4BbOT5HjnPAU/As8y9Z89G8/Qmz5UF2CYCIAWvEsb72sEJfQ0zQAY4XwD/JpxJHE3qwJKE+/sAqoFHgFH+NcsAQwP8AMm5aVdq5fsTAAAAAElFTkSuQmCC",y=H("useHeader",()=>{const n=B(),e=new Map([["statistics",-1],["home",0],["bot",1],["quickstart",2]]),o=Q((()=>{const i=n.currentRoute.value.path;return console.log("zj-route",i.split("/")),e.get(i.split("/")[1])})());return{navIndex:o,setNavIndex:i=>{o.value=i}}}),p=n=>(q("data-v-0a5eb4b0"),n=n(),P(),n),X={class:"header"},Y={class:"logo"},$={class:"header-navs"},Z=["onClick"],tt={class:"toggle-button"},et=p(()=>t("span",{class:"line"},null,-1)),nt=p(()=>t("p",null,"010-82558901（商务）",-1)),at=p(()=>t("p",null,"qanything@rd.netease.com（技术）",-1)),st=p(()=>t("p",null,"Aldoud_Business@corp.youdao.com（商务）",-1)),ot={class:"myspan"},ct=p(()=>t("img",{src:W,alt:"问题反馈"},null,-1)),lt=R({__name:"Head",setup(n){const e=h().header,{language:a}=b(I()),{navIndex:o}=b(y()),{setLanguage:r}=I(),{setNavIndex:i}=y(),{changePage:d}=T(),E=[{name:h().header.quickStart,value:2},{name:h().header.knowledge,value:0},{name:"Bots",value:1}],_=s=>{r(s),window.location.reload()},S=s=>{console.log(s),window.location.href=s},x=s=>{o.value!==s&&(i(s),s===0?d("/home"):s===1?d("/bots"):s===2&&d("/quickstart"))},J=new Map([[0,"knowledge-icon"],[1,"bot-icon"],[2,"quick-icon"]]),L=s=>J.get(s),O=()=>{i(-1),d("/statistics")};return(s,u)=>{const F=D;return C(),w("div",X,[t("div",Y,[t("img",{src:V,style:U({marginTop:l(o)===-1?"":"14px"}),alt:"logo",onClick:u[0]||(u[0]=c=>S("https://ai.youdao.com/"))},null,4)]),t("div",$,[(C(),w(M,null,N(E,c=>t("div",{key:c.name,class:g(["nav-item",l(o)===c.value?"nav-item-active":""]),onClick:rt=>x(c.value)},[t("div",{class:g(["item-icon",L(c.value)])},null,2),t("span",null,A(c.name),1)],10,Z)),64))]),t("ul",null,[t("li",tt,[t("span",{class:g([l(a)==="zh"?"active":""]),onClick:u[1]||(u[1]=c=>_("zh"))},"中",2),et,t("span",{class:g([l(a)==="en"?"active":""]),onClick:u[2]||(u[2]=c=>_("en"))},"En",2)]),t("li",null,[f(F,{placement:"bottomRight"},{content:m(()=>[nt,at,st]),title:m(()=>[t("span",null,A(l(e).cooperationMore),1)]),default:m(()=>[t("div",ot,[ct,t("span",null,A(l(e).cooperation),1)])]),_:1})]),t("li",null,[t("div",{class:"myspan",onClick:O},[f(l(v),{style:{"margin-right":"5px"}}),t("span",null,A(l(e).statistics),1)])])])])}}}),gt=j(lt,[["__scopeId","data-v-0a5eb4b0"]]);export{gt as H,y as u};