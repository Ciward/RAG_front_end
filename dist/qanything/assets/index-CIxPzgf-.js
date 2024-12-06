import{H as ie}from"./Head-CFJbmNEu.js";import{i as le,m as se,j as y,k as $,d as l,u as I,l as de,p as q,q as ce,I as ue,s as ge,t as L,v as D,x as fe,y as pe,z as W,A as F,P as p,B as X,a as me,o as he,c as ve,w,_ as xe}from"./index-BgCptZ8v.js";import{S as J,a as ye}from"./injectionKey-DGYNie3Z.js";import{i as be}from"./initDefaultProps-DXmK0m_U.js";import{R as Z}from"./RightOutlined-zHKSEaIw.js";import{L as G}from"./LeftOutlined-CHYgrnuE.js";import"./index-C3b_4KEV.js";import"./router-Bh5PURDf.js";const Se=e=>!isNaN(parseFloat(e))&&isFinite(e),$e=e=>{const{componentCls:o,colorBgContainer:t,colorBgBody:a,colorText:r}=e;return{[`${o}-sider-light`]:{background:t,[`${o}-sider-trigger`]:{color:r,background:t},[`${o}-sider-zero-width-trigger`]:{color:r,background:t,border:`1px solid ${a}`,borderInlineStart:0}}}},Ce=e=>{const{antCls:o,componentCls:t,colorText:a,colorTextLightSolid:r,colorBgHeader:f,colorBgBody:c,colorBgTrigger:s,layoutHeaderHeight:u,layoutHeaderPaddingInline:h,layoutHeaderColor:v,layoutFooterPadding:n,layoutTriggerHeight:d,layoutZeroTriggerSize:x,motionDurationMid:S,motionDurationSlow:i,fontSize:m,borderRadius:g}=e;return{[t]:y(y({display:"flex",flex:"auto",flexDirection:"column",color:a,minHeight:0,background:c,"&, *":{boxSizing:"border-box"},[`&${t}-has-sider`]:{flexDirection:"row",[`> ${t}, > ${t}-content`]:{width:0}},[`${t}-header, &${t}-footer`]:{flex:"0 0 auto"},[`${t}-header`]:{height:u,paddingInline:h,color:v,lineHeight:`${u}px`,background:f,[`${o}-menu`]:{lineHeight:"inherit"}},[`${t}-footer`]:{padding:n,color:a,fontSize:m,background:c},[`${t}-content`]:{flex:"auto",minHeight:0},[`${t}-sider`]:{position:"relative",minWidth:0,background:f,transition:`all ${S}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${o}-menu${o}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:d},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:d,color:r,lineHeight:`${d}px`,textAlign:"center",background:s,cursor:"pointer",transition:`all ${S}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:u,insetInlineEnd:-x,zIndex:1,width:x,height:x,color:r,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:f,borderStartStartRadius:0,borderStartEndRadius:g,borderEndEndRadius:g,borderEndStartRadius:0,cursor:"pointer",transition:`background ${i} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${i}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-x,borderStartStartRadius:g,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:g}}}}},$e(e)),{"&-rtl":{direction:"rtl"}})}},we=le("Layout",e=>{const{colorText:o,controlHeightSM:t,controlHeight:a,controlHeightLG:r,marginXXS:f}=e,c=r*1.25,s=se(e,{layoutHeaderHeight:a*2,layoutHeaderPaddingInline:c,layoutHeaderColor:o,layoutFooterPadding:`${t}px ${c}px`,layoutTriggerHeight:r+f*2,layoutZeroTriggerSize:r});return[Ce(s)]},e=>{const{colorBgLayout:o}=e;return{colorBgHeader:"#001529",colorBgBody:o,colorBgTrigger:"#002140"}}),A=()=>({prefixCls:String,hasSider:{type:Boolean,default:void 0},tagName:String});function H(e){let{suffixCls:o,tagName:t,name:a}=e;return r=>$({compatConfig:{MODE:3},name:a,props:A(),setup(c,s){let{slots:u}=s;const{prefixCls:h}=I(o,c);return()=>{const v=y(y({},c),{prefixCls:h.value,tagName:t});return l(r,v,u)}}})}const N=$({compatConfig:{MODE:3},props:A(),setup(e,o){let{slots:t}=o;return()=>l(e.tagName,{class:e.prefixCls},t)}}),_e=$({compatConfig:{MODE:3},inheritAttrs:!1,props:A(),setup(e,o){let{slots:t,attrs:a}=o;const{prefixCls:r,direction:f}=I("",e),[c,s]=we(r),u=de([]);q(J,{addSider:n=>{u.value=[...u.value,n]},removeSider:n=>{u.value=u.value.filter(d=>d!==n)}});const v=ce(()=>{const{prefixCls:n,hasSider:d}=e;return{[s.value]:!0,[`${n}`]:!0,[`${n}-has-sider`]:typeof d=="boolean"?d:u.value.length>0,[`${n}-rtl`]:f.value==="rtl"}});return()=>{const{tagName:n}=e;return c(l(n,y(y({},a),{class:[v.value,a.class]}),t))}}}),z=H({suffixCls:"layout",tagName:"section",name:"ALayout"})(_e),T=H({suffixCls:"layout-header",tagName:"header",name:"ALayoutHeader"})(N),P=H({suffixCls:"layout-footer",tagName:"footer",name:"ALayoutFooter"})(N),_=H({suffixCls:"layout-content",tagName:"main",name:"ALayoutContent"})(N);var He={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};function U(e){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?Object(arguments[o]):{},a=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.forEach(function(r){ke(e,r,t[r])})}return e}function ke(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var R=function(o,t){var a=U({},o,t.attrs);return l(ue,U({},a,{icon:He}),null)};R.displayName="BarsOutlined";R.inheritAttrs=!1;const V={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1999.98px"},Be=()=>({prefixCls:String,collapsible:{type:Boolean,default:void 0},collapsed:{type:Boolean,default:void 0},defaultCollapsed:{type:Boolean,default:void 0},reverseArrow:{type:Boolean,default:void 0},zeroWidthTriggerStyle:{type:Object,default:void 0},trigger:p.any,width:p.oneOfType([p.number,p.string]),collapsedWidth:p.oneOfType([p.number,p.string]),breakpoint:p.oneOf(X("xs","sm","md","lg","xl","xxl","xxxl")),theme:p.oneOf(X("light","dark")).def("dark"),onBreakpoint:Function,onCollapse:Function}),Oe=(()=>{let e=0;return function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,`${o}${e}`}})(),E=$({compatConfig:{MODE:3},name:"ALayoutSider",inheritAttrs:!1,props:be(Be(),{collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80}),emits:["breakpoint","update:collapsed","collapse"],setup(e,o){let{emit:t,attrs:a,slots:r}=o;const{prefixCls:f}=I("layout-sider",e),c=ge(J,void 0),s=L(!!(e.collapsed!==void 0?e.collapsed:e.defaultCollapsed)),u=L(!1);D(()=>e.collapsed,()=>{s.value=!!e.collapsed}),q(ye,s);const h=(i,m)=>{e.collapsed===void 0&&(s.value=i),t("update:collapsed",i),t("collapse",i,m)},v=L(i=>{u.value=i.matches,t("breakpoint",i.matches),s.value!==i.matches&&h(i.matches,"responsive")});let n;function d(i){return v.value(i)}const x=Oe("ant-sider-");c&&c.addSider(x),fe(()=>{D(()=>e.breakpoint,()=>{try{n==null||n.removeEventListener("change",d)}catch{n==null||n.removeListener(d)}if(typeof window<"u"){const{matchMedia:i}=window;if(i&&e.breakpoint&&e.breakpoint in V){n=i(`(max-width: ${V[e.breakpoint]})`);try{n.addEventListener("change",d)}catch{n.addListener(d)}d(n)}}},{immediate:!0})}),pe(()=>{try{n==null||n.removeEventListener("change",d)}catch{n==null||n.removeListener(d)}c&&c.removeSider(x)});const S=()=>{h(!s.value,"clickTrigger")};return()=>{var i,m;const g=f.value,{collapsedWidth:M,width:K,reverseArrow:k,zeroWidthTriggerStyle:Q,trigger:C=(i=r.trigger)===null||i===void 0?void 0:i.call(r),collapsible:j,theme:Y}=e,B=s.value?M:K,b=Se(B)?`${B}px`:String(B),O=parseFloat(String(M||0))===0?l("span",{onClick:S,class:W(`${g}-zero-width-trigger`,`${g}-zero-width-trigger-${k?"right":"left"}`),style:Q},[C||l(R,null,null)]):null,ee={expanded:k?l(Z,null,null):l(G,null,null),collapsed:k?l(G,null,null):l(Z,null,null)},te=s.value?"collapsed":"expanded",oe=ee[te],ne=C!==null?O||l("div",{class:`${g}-trigger`,onClick:S,style:{width:b}},[C||oe]):null,re=[a.style,{flex:`0 0 ${b}`,maxWidth:b,minWidth:b,width:b}],ae=W(g,`${g}-${Y}`,{[`${g}-collapsed`]:!!s.value,[`${g}-has-trigger`]:j&&C!==null&&!O,[`${g}-below`]:!!u.value,[`${g}-zero-width`]:parseFloat(b)===0},a.class);return l("aside",F(F({},a),{},{class:ae,style:re}),[l("div",{class:`${g}-children`},[(m=r.default)===null||m===void 0?void 0:m.call(r)]),j||u.value&&O?ne:null])}}}),Le=_,ze=y(z,{Header:T,Footer:P,Content:_,Sider:E,install:e=>(e.component(z.name,z),e.component(T.name,T),e.component(P.name,P),e.component(E.name,E),e.component(_.name,_),e)}),Te=$({__name:"index",setup(e){return(o,t)=>{const a=me("router-view"),r=Le,f=ze;return he(),ve(f,null,{default:w(()=>[l(ie),l(f,null,{default:w(()=>[l(f,{class:"blacker"},{default:w(()=>[l(r,{class:"main"},{default:w(()=>[l(a)]),_:1})]),_:1})]),_:1})]),_:1})}}}),De=xe(Te,[["__scopeId","data-v-11f7fa6a"]]);export{De as default};