import{k as T,p as we,q as m,s as Ie,P as $,l as Ce,af as Se,d as v,A as c,z as Q,t as b,v as be,j as W,aa as s,O as xe}from"./index-BgCptZ8v.js";import{R as ae,J as re}from"./index-BeP7JuK_.js";import{a as te,r as ne}from"./class-DeKWk5pD.js";const oe=Symbol("OverflowContextProviderKey"),G=T({compatConfig:{MODE:3},name:"OverflowContextProvider",inheritAttrs:!1,props:{value:{type:Object}},setup(e,o){let{slots:t}=o;return we(oe,m(()=>e.value)),()=>{var n;return(n=t.default)===null||n===void 0?void 0:n.call(t)}}}),Re=()=>Ie(oe,m(()=>null));var Ke=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)o.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const E=void 0,L=T({compatConfig:{MODE:3},name:"Item",props:{prefixCls:String,item:$.any,renderItem:Function,responsive:Boolean,itemKey:{type:[String,Number]},registerSize:Function,display:Boolean,order:Number,component:$.any,invalidate:Boolean},setup(e,o){let{slots:t,expose:n}=o;const a=m(()=>e.responsive&&!e.display),d=Ce();n({itemNodeRef:d});function h(l){e.registerSize(e.itemKey,l)}return Se(()=>{h(null)}),()=>{var l;const{prefixCls:I,invalidate:x,item:g,renderItem:p,responsive:y,registerSize:F,itemKey:R,display:U,order:K,component:j="div"}=e,C=Ke(e,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","display","order","component"]),z=(l=t.default)===null||l===void 0?void 0:l.call(t),X=p&&g!==E?p(g):z;let w;x||(w={opacity:a.value?0:1,height:a.value?0:E,overflowY:a.value?"hidden":E,order:y?K:E,pointerEvents:a.value?"none":E,position:a.value?"absolute":E});const M={};return a.value&&(M["aria-hidden"]=!0),v(ae,{disabled:!y,onResize:N=>{let{offsetWidth:Y}=N;h(Y)}},{default:()=>v(j,c(c(c({class:Q(!x&&I),style:w},M),C),{},{ref:d}),{default:()=>[X]})})}}});var H=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)o.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Me=T({compatConfig:{MODE:3},name:"RawItem",inheritAttrs:!1,props:{component:$.any,title:$.any,id:String,onMouseenter:{type:Function},onMouseleave:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onFocus:{type:Function},role:String,tabindex:Number},setup(e,o){let{slots:t,attrs:n}=o;const a=Re();return()=>{var d;if(!a.value){const{component:p="div"}=e,y=H(e,["component"]);return v(p,c(c({},y),n),{default:()=>[(d=t.default)===null||d===void 0?void 0:d.call(t)]})}const h=a.value,{className:l}=h,I=H(h,["className"]),{class:x}=n,g=H(n,["class"]);return v(G,{value:null},{default:()=>[v(L,c(c(c({class:Q(l,x)},I),g),e),t)]})}}});var Ee=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)o.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ie="responsive",se="invalidate";function $e(e){return`+ ${e.length} ...`}const Ne=()=>({id:String,prefixCls:String,data:Array,itemKey:[String,Number,Function],itemWidth:{type:Number,default:10},renderItem:Function,renderRawItem:Function,maxCount:[Number,String],renderRest:Function,renderRawRest:Function,suffix:$.any,component:String,itemComponent:$.any,onVisibleChange:Function,ssr:String,onMousedown:Function,role:String}),q=T({name:"Overflow",inheritAttrs:!1,props:Ne(),emits:["visibleChange"],setup(e,o){let{attrs:t,emit:n,slots:a}=o;const d=m(()=>e.ssr==="full"),h=b(null),l=m(()=>h.value||0),I=b(new Map),x=b(0),g=b(0),p=b(0),y=b(null),F=b(null),R=m(()=>F.value===null&&d.value?Number.MAX_SAFE_INTEGER:F.value||0),U=b(!1),K=m(()=>`${e.prefixCls}-item`),j=m(()=>Math.max(x.value,g.value)),C=m(()=>!!(e.data.length&&e.maxCount===ie)),z=m(()=>e.maxCount===se),X=m(()=>C.value||typeof e.maxCount=="number"&&e.data.length>e.maxCount),w=m(()=>{let r=e.data;return C.value?h.value===null&&d.value?r=e.data:r=e.data.slice(0,Math.min(e.data.length,l.value/e.itemWidth)):typeof e.maxCount=="number"&&(r=e.data.slice(0,e.maxCount)),r}),M=m(()=>C.value?e.data.slice(R.value+1):e.data.slice(w.value.length)),N=(r,i)=>{var u;return typeof e.itemKey=="function"?e.itemKey(r):(u=e.itemKey&&(r==null?void 0:r[e.itemKey]))!==null&&u!==void 0?u:i},Y=m(()=>e.renderItem||(r=>r)),A=(r,i)=>{F.value=r,i||(U.value=r<e.data.length-1,n("visibleChange",r))},le=(r,i)=>{h.value=i.clientWidth},J=(r,i)=>{const u=new Map(I.value);i===null?u.delete(r):u.set(r,i),I.value=u},ue=(r,i)=>{x.value=g.value,g.value=i},ce=(r,i)=>{p.value=i},V=r=>I.value.get(N(w.value[r],r));return be([l,I,g,p,()=>e.itemKey,w],()=>{if(l.value&&j.value&&w.value){let r=p.value;const i=w.value.length,u=i-1;if(!i){A(0),y.value=null;return}for(let O=0;O<i;O+=1){const _=V(O);if(_===void 0){A(O-1,!0);break}if(r+=_,u===0&&r<=l.value||O===u-1&&r+V(u)<=l.value){A(u),y.value=null;break}else if(r+j.value>l.value){A(O-1),y.value=r-_-p.value+g.value;break}}e.suffix&&V(0)+p.value>l.value&&(y.value=null)}}),()=>{const r=U.value&&!!M.value.length,{itemComponent:i,renderRawItem:u,renderRawRest:O,renderRest:_,prefixCls:fe="rc-overflow",suffix:Z,component:me="div",id:de,onMousedown:ve}=e,{class:ye,style:ge}=t,pe=Ee(t,["class","style"]);let k={};y.value!==null&&C.value&&(k={position:"absolute",left:`${y.value}px`,top:0});const P={prefixCls:K.value,responsive:C.value,component:i,invalidate:z.value},Oe=u?(f,S)=>{const D=N(f,S);return v(G,{key:D,value:W(W({},P),{order:S,item:f,itemKey:D,registerSize:J,display:S<=R.value})},{default:()=>[u(f,S)]})}:(f,S)=>{const D=N(f,S);return v(L,c(c({},P),{},{order:S,key:D,item:f,renderItem:Y.value,itemKey:D,registerSize:J,display:S<=R.value}),null)};let B=()=>null;const ee={order:r?R.value:Number.MAX_SAFE_INTEGER,className:`${K.value} ${K.value}-rest`,registerSize:ue,display:r};if(O)O&&(B=()=>v(G,{value:W(W({},P),ee)},{default:()=>[O(M.value)]}));else{const f=_||$e;B=()=>v(L,c(c({},P),ee),{default:()=>typeof f=="function"?f(M.value):f})}const he=()=>{var f;return v(me,c({id:de,class:Q(!z.value&&fe,ye),style:ge,onMousedown:ve,role:e.role},pe),{default:()=>[w.value.map(Oe),X.value?B():null,Z&&v(L,c(c({},P),{},{order:R.value,class:`${K.value}-suffix`,registerSize:ce,display:!0,style:k}),{default:()=>Z}),(f=a.default)===null||f===void 0?void 0:f.call(a)]})};return v(ae,{disabled:!C.value,onResize:le},{default:he})}}});q.Item=Me;q.RESPONSIVE=ie;q.INVALIDATE=se;const _e=new s("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),Pe=new s("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),De=new s("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),Fe=new s("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),je=new s("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),ze=new s("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),Ae=new s("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),We=new s("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),Le={"move-up":{inKeyframes:Ae,outKeyframes:We},"move-down":{inKeyframes:_e,outKeyframes:Pe},"move-left":{inKeyframes:De,outKeyframes:Fe},"move-right":{inKeyframes:je,outKeyframes:ze}},ke=(e,o)=>{const{antCls:t}=e,n=`${t}-${o}`,{inKeyframes:a,outKeyframes:d}=Le[o];return[re(n,a,d,e.motionDurationMid),{[`
        ${n}-enter,
        ${n}-appear
      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${n}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]},Te=new s("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),Ue=new s("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),Xe=new s("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),Ye=new s("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),Ve=new s("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),Be=new s("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),He=new s("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),Ge=new s("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),Qe={"slide-up":{inKeyframes:Te,outKeyframes:Ue},"slide-down":{inKeyframes:Xe,outKeyframes:Ye},"slide-left":{inKeyframes:Ve,outKeyframes:Be},"slide-right":{inKeyframes:He,outKeyframes:Ge}},et=(e,o)=>{const{antCls:t}=e,n=`${t}-${o}`,{inKeyframes:a,outKeyframes:d}=Qe[o];return[re(n,a,d,e.motionDurationMid),{[`
      ${n}-enter,
      ${n}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint},[`${n}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]},tt=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}}),nt=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant-motion-collapse",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{name:e,appear:o,css:!0,onBeforeEnter:t=>{t.style.height="0px",t.style.opacity="0",te(t,e)},onEnter:t=>{xe(()=>{t.style.height=`${t.scrollHeight}px`,t.style.opacity="1"})},onAfterEnter:t=>{t&&(ne(t,e),t.style.height=null,t.style.opacity=null)},onBeforeLeave:t=>{te(t,e),t.style.height=`${t.offsetHeight}px`,t.style.opacity=null},onLeave:t=>{setTimeout(()=>{t.style.height="0px",t.style.opacity="0"})},onAfterLeave:t=>{t&&(ne(t,e),t.style&&(t.style.height=null,t.style.opacity=null))}}};export{q as O,Te as a,Ye as b,nt as c,Ue as d,ke as e,tt as g,et as i,Xe as s};