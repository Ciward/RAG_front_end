import{Y as r}from"./index-BgCptZ8v.js";const h=r({id:"useBotsChat",state:()=>({QA_List:[],showModal:!1}),actions:{clearQAList(){this.QA_List=[]},setQaList(o){this.QA_List=o},async handleSource(o){const e=await Promise.all(o.map(async a=>{if(!a.pdf_source_info)return console.log("handleSource",a),a;const s=await(await fetch(a.pdf_source_info.chunks_nos_url)).json(),{chunks:t,pageSizes:i}=this.formatChunks(s);return{...a,chunks:t,pageSizes:i}}));this.QA_List[this.QA_List.length-1].source=e},formatChunks(o){console.log("formatChunks",o);let e=[],a=[];return o.forEach(n=>{n.chunk_type==="normal"?n.locations.forEach(s=>{e[s.page_id]||(e[+s.page_id]={page_w:s.page_w,page_h:s.page_h}),a[s.page_id]||(a[s.page_id]=[]),a[s.page_id].push({chunkId:n.chunk_id,lines_box:s.lines,bbox:s.bbox})}):n.locations.forEach(s=>{e[s.page_id]||(e[+s.page_id]={page_w:s.page_w,page_h:s.page_h})})}),{chunks:[...a],pageSizes:[...e]}}}});export{h as u};
