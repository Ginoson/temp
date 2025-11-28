import{c as a,z as I,n as A,I as B,g as c,h as e,A as b,t as u,K as D,F as C,C as T,E as M,l as k,B as E,J as V,q as N,s as z,o as r}from"./vendor-B2U1-d1_.js";import{M as J}from"./markdown-chunk-BUA4SXMw.js";import{g as j,l as q}from"./markdownService-Csiwztuz.js";import{_ as K}from"./index-BVnGSuzO.js";import"./highlight-chunk-CyEpNBec.js";const o=_=>(N("data-v-f00e6da6"),_=_(),z(),_),O={class:"markdown-test"},W=o(()=>e("h1",null,"Markdown加载测试",-1)),G={class:"test-section"},P=o(()=>e("h2",null,"测试1：直接渲染字符串",-1)),Q=["innerHTML"],X={class:"test-section"},Y=o(()=>e("h2",null,"测试2：从文件加载",-1)),Z={class:"file-controls"},ee={class:"env-info"},se=["value"],te={class:"debug-url"},le=o(()=>e("strong",null,"尝试的URL:",-1)),oe={key:0,class:"loading"},ne=o(()=>e("div",{class:"spinner"},null,-1)),ae=o(()=>e("p",null,"加载中...",-1)),ce=[ne,ae],ue={key:1,class:"error"},re=o(()=>e("h3",null,"❌ 加载失败",-1)),ie={key:0,class:"error-details"},de=o(()=>e("p",null,[e("strong",null,"错误详情:")],-1)),ve=["innerHTML"],_e={class:"debug-info"},he=o(()=>e("h2",null,"调试信息",-1)),me=o(()=>e("strong",null,"基础路径 (BASE_URL):",-1)),pe=o(()=>e("strong",null,"文件路径:",-1)),ge=o(()=>e("strong",null,"文件内容长度:",-1)),ke=o(()=>e("strong",null,"缓存状态:",-1)),fe={class:"manual-test"},we=o(()=>e("h3",null,"手动测试URL",-1)),ye={key:0},Me={__name:"TestMarkdownView",setup(_){const $=a(!1),h=a("./"),U=new J,L=a(U.render(`
# 直接渲染测试

- ✅ Markdown渲染正常
- ✅ 环境配置正确
- ✅ 依赖包安装成功

\`\`\`javascript
// 代码高亮测试
function test() {
  console.log('Hello World!');
  return true;
}
\`\`\`

## 图片测试

![测试图片](https://picsum.photos/200/300?random=1)

## 表格测试

| 名称 | 年龄 | 城市 |
|------|------|------|
| 张三 | 25   | 北京 |
| 李四 | 30   | 上海 |
`)),d=a(["test.md"]),n=a("test.md"),f=a(""),w=a(!1),m=a(null),p=a(null),g=a([]),y=a(""),i=a(null),F=async()=>{try{d.value=await j(),console.log("📁 可用文件列表:",d.value),d.value.includes("test.md")?n.value="test.md":d.value.length>0&&(n.value=d.value[0])}catch(s){console.error("获取文件列表失败:",s),d.value=["test.md"]}},x=async()=>{g.value=[];const s=[`/src/assets/md/${n.value}`,`/assets/md/${n.value}`,`${h.value}src/assets/md/${n.value}`,`${h.value}assets/md/${n.value}`];for(const t of s){g.value.push(t);try{const l=await fetch(t,{method:"HEAD"});if(console.log(`🔍 检查 ${t}:`,l.status),l.ok){alert(`✅ 文件存在: ${t}
状态: ${l.status}`);return}}catch(l){console.log(`❌ 检查 ${t} 失败:`,l.message)}}alert("❌ 所有路径都不存在该文件")},S=async()=>{i.value=null;try{const s=await fetch(y.value),t=await s.text();i.value={success:s.ok,message:`状态: ${s.status} ${s.statusText}`,content:t}}catch(s){i.value={success:!1,message:`请求失败: ${s.message}`,content:null}}},v=async()=>{w.value=!0,m.value=null,p.value=null,g.value=[];try{console.log("🎯 开始加载文件:",n.value),f.value=await q(n.value),console.log("✅ 文件加载成功")}catch(s){m.value=`加载失败: ${s.message||"未知错误"}`,p.value=s.stack||JSON.stringify(s),console.error("❌ 文件加载失败:",s)}finally{w.value=!1}},H=I(()=>0);return A(async()=>{console.log("监听页面挂载"),console.log("当前环境:",$.value?"开发环境":"生产环境"),console.log("基础路径:",h.value),await F(),await v()}),B(n,(s,t)=>{s!==t&&(console.log("📁 文件选择变化:",t,"->",s),v())}),(s,t)=>(r(),c("div",O,[W,e("div",G,[P,e("div",{class:"markdown-container",innerHTML:L.value},null,8,Q)]),e("div",X,[Y,e("div",Z,[e("div",ee,"当前环境: "+u($.value?"开发环境":"生产环境"),1),b(e("select",{"onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l),onChange:v},[(r(!0),c(C,null,T(d.value,l=>(r(),c("option",{key:l,value:l},u(l),9,se))),128))],544),[[D,n.value]]),e("button",{onClick:v},"重新加载"),e("button",{onClick:x,class:"check-btn"},"检查文件是否存在")]),e("div",te,[le,e("ul",null,[(r(!0),c(C,null,T(g.value,(l,R)=>(r(),c("li",{key:R},u(l),1))),128))])]),w.value?(r(),c("div",oe,ce)):m.value?(r(),c("div",ue,[re,e("p",null,u(m.value),1),p.value?(r(),c("div",ie,[de,e("pre",null,u(p.value),1)])):M("",!0),e("button",{onClick:v},"重试")])):(r(),c("div",{key:2,class:"markdown-container",innerHTML:f.value},null,8,ve))]),e("div",_e,[he,e("ul",null,[e("li",null,[me,k(' "'+u(h.value)+'"',1)]),e("li",null,[pe,k(' "'+u(n.value)+'"',1)]),e("li",null,[ge,k(" "+u(f.value.length)+" 字符",1)]),e("li",null,[ke,k(" "+u(H.value)+" 个文件已缓存",1)])]),e("div",fe,[we,b(e("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>y.value=l),placeholder:"输入要测试的URL",class:"url-input"},null,512),[[E,y.value]]),e("button",{onClick:S,class:"test-btn"},"测试URL"),i.value?(r(),c("div",{key:0,class:V(["url-result",i.value.success?"success":"error"])},[e("p",null,u(i.value.message),1),i.value.content?(r(),c("pre",ye,u(i.value.content.substring(0,200))+"...",1)):M("",!0)],2)):M("",!0)])])]))}},Le=K(Me,[["__scopeId","data-v-f00e6da6"]]);export{Le as default};
