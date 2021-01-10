"use strict";const e=e=>e.join("|"),r=e(["active","any-link","blank","checked","current","default","defined","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","host","hover","indeterminate","in-range","invalid","last-child","last-of-type","left","link","local-link","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited"]),n=e(["center","start","end","flex-start","flex-end","left","right","space-between","between","space-around","around","space-evenly","evenly","stretch","inherit","initial","unset","normal"]),t=e(["baseline","center","end","flex-end","flex-start","inherit","initial","normal","self-end","self-start","start","stretch","unset"]),i=e(["auto","default","none","context-menu","help","pointer","progress","wait","cell","crosshair","text","vertical-text","alias","copy","move","no-drop","not-allowed","e-resize","n-resize","ne-resize","nw-resize","s-resize","se-resize","sw-resize","w-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","col-resize","row-resize","all-scroll","zoom-in","zoom-out","grab","grabbing"]),s=e(["cm","mm","in","px","pt","pc","em","ex","ch","rem","vw","vh","vmin","vmax","p"]),o=e(["baseline","sub","super","text-top","text-bottom","middle","top","bottom","inherit","initial","unset"]);let u="";u+='@charset "UTF-8";\n',u+="/* https://github.com/macheteHot/css-generator-plugin/\n",u+="   version: v2.0.5-beta\n",u+="   this file will auto generate and update\n",u+="   DO NOT EDIT THIS FILE!\n",u+="   DO NOT EDIT THIS FILE!\n",u+="   DO NOT EDIT THIS FILE!\n",u+="*/\n\n";const a={sm:"(min-width: 640px)",md:"(min-width: 768px)",lg:"(min-width: 1024px)",xl:"(min-width: 1280px)"},l=Object.keys(a),c=new Map;c.set(void 0,[""]),c.set("x",["left","right"]),c.set("y",["top","bottom"]),c.set("t",["top"]),c.set("r",["right"]),c.set("b",["bottom"]),c.set("l",["left"]),c.set("top",["top"]),c.set("right",["right"]),c.set("bottom",["bottom"]),c.set("left",["left"]);var d={regExp:new RegExp(`^align-items-(?<align>${t})$`),render({groups:e}){const{align:r}=e;return{name:"alignItems",order:220,css:["align-items: "+r]}}};let p={modifyRules:{}};const m={vue:{extNames:["vue"],reg:/((?<=class=(["']))[\s\S]*?(?=\2))|((?<=class={)[\s\S]*?(?=}))/gi},react:{extNames:["tsx","jsx"],reg:/((?<=className=(["']))[\s\S]*?(?=\2))|((?<=className={)[\s\S]*?(?=}))/gi},"d-mini-program":{extNames:["axml"],reg:/((?<=class=")|(?<=classname="))[\s\S]+?(?=")/gi},"wx-mini-program":{extNames:["wxml"],reg:/((?<=class=")|(?<=classname="))[\s\S]+?(?=")/gi},html:{extNames:["html"],reg:/((?<=class=(["']))[\s\S]*?(?=\2))/gi}};function g(e){switch(e){case"extNames":return m[p.type].extNames;case"globReg":return m[p.type].reg;case"colors":return p.colors||{};case"unit":return p.unit||"px";case"meidaQuerys":return p.meidaQuerys||{};case"important":return void 0===p.important||p.important;default:return p[e]}}function x(e){return"p"===e?"%":e||(p.unit||"px")}const h=()=>({red:"#f00",white:"#fff",black:"#000",blue:"#00f",transparent:"transparent",...g("colors")});function f(e){return parseInt(e,16)}function b(e,r=1){const n=/^#?([a-fA-F0-9]{8}|[a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(e)?e.replace(/^#/,""):h()[e].replace(/^#/,"");if("transparent"===n)return"transparent";if(6===n.length){const e=/[a-fA-F0-9]{2}/g;return"rgba("+n.match(e).map(f).join(",")+`,${r})`}if(3===n.length)return"rgba("+n.split("").map(e=>f(e.repeat(2))).join(",")+`,${r})`;if(8===n.length){const e=/[a-fA-F0-9]{2}/g;let[r,t,i,s]=n.match(e);return s=Number(Number(Math.round(parseInt(s,16))/255).toFixed(2)),"rgba("+[r,t,i].map(f).join(",")+`,${s})`}return""}function $(e){let r=460;return"x"===e&&(r+=10),"y"===e&&(r+=20),"t"===e&&(r+=30),"b"===e&&(r+=40),"r"===e&&(r+=50),"l"===e&&(r+=60),r}function w(e,r,n){return c.get(e).reduce((e,t)=>t?[...e,`border-${t}-width: ${r}${n}`,`border-${t}-style: solid`,`border-${t}-color: ${b("000")}`]:[...e,`border-width: ${r}${n}`,"border-style: solid","border-color: "+b("000")],[])}var v={regExp:new RegExp(`^(border|border-width|border-w)-((?<direction>[trblxy])-)?(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?$`),render({groups:e}){let{direction:r,num:n,unit:t}=e;return t=0===Number(n)?"":x(t),{name:"border",order:$(r),num:n,css:w(r,n,t)}}},y={regExp:new RegExp(`^(border-radius|br)-(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?$`),render({groups:e}){let{num:r,unit:n}=e;return n=x(n),{name:"borderRadius",order:530,num:r,css:0===Number(r)?["border-radius: 0"]:[`border-radius: ${r}${n}`]}}},E={regExp:/^border-style-(?<value>none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit)$/,render({groups:e}){const{value:r}=e;return{name:"borderStyle",order:550,css:["border-style: "+r]}}},k={regExp:/^box-sizing-(?<value>content-box|border-box)$/,render({groups:e}){const{value:r}=e;return{name:"boxSizing",order:560,css:["box-sizing: "+r]}}},N={regExp:/^circle$/,render:()=>({name:"circle",order:540,css:["border-radius: 50%"]})},j={regExp:()=>new RegExp(`^(?<type>color|c|text|bg|background|border-color|border-c)-(?<color>(#?([a-fA-F0-9]{8}$|[a-fA-F0-9]{6}|[a-fA-F0-9]{3}))|${Object.keys(h()).join("|")})(-(?<opacity>1|([1-9]\\d{0,1})))?$`),render({groups:e}){let{type:r,color:n,opacity:t}=e;t=void 0===t?1:(.01*t).toFixed(2),n=b(n,t);let i="";switch(r){case"c":case"color":case"text":i="color";break;case"bg":case"background":i="background-color";break;case"border-c":case"border-color":i="border-color";break;default:i=r}return{name:"color",order:1/0,css:[`${i}: ${n}`]}}},S={regExp:new RegExp(`^cursor-(?<value>${i})$`),render({groups:e}){const{value:r}=e;return{name:"cursor",order:340,css:["cursor: "+r]}}},z={regExp:/^(display|d)-(?<value>none|inline|block|inline-block|flex)$/,render({groups:e}){const{value:r}=e;return{name:"display",order:1/0,css:["display: "+r]}}},R={regExp:new RegExp(`^flex-basis-(?<value>((?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?)|initial|inherit|auto)$`),render({groups:e}){let{value:r,num:n,unit:t}=e;return n&&(t=x(t),r=`${n}${t}`),{name:"flexBasis",order:280,css:["flex-basis: "+r]}}},O={regExp:/^(flex-direction|flex)-(?<value>row|row-reverse|column|column-reverse)$/,render({groups:e}){const{value:r}=e;return{name:"flexDirection",order:230,css:["flex-direction: "+r]}}},I={regExp:new RegExp(`^flex-(?<justify>${n})-(?<align>${t})$`),render({groups:e}){let{justify:r,align:n}=e;return"between"===r&&(r="space-between"),"around"===r&&(r="space-around"),"evenly"===r&&(r="space-evenly"),{name:"flexJustAli",order:200,css:["display: flex","justify-content: "+r,"align-items: "+n]}}},F={regExp:/^flex-(?<value>null|auto|none|(0|[1-9]\d*))$/,render({groups:e}){const{value:r}=e;return{name:"flex",order:250,css:["flex: "+r]}}},A={regExp:/^flex-(?<type>shrink|grow)-(?<value>(0|[1-9]\d*)|initial|inherit)$/,render({groups:e}){const{type:r,value:n}=e;return{name:"shrink"===r?"flexShrink":"flexGrow",order:"shrink"===r?260:270,css:[`flex-${r}: ${n}`]}}},T={regExp:/^flex-wrap-(?<value>inherit|initial|nowrap|wrap|wrap-reverse)$/,render({groups:e}){const{value:r}=e;return{name:"flexDirection",order:240,css:["flex-wrap: "+r]}}},D={regExp:new RegExp(`^(font-size|fs)-(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?$`),render({groups:e}){let{num:r,unit:n}=e;n=x(n);const t={name:"fontSize",order:370,num:r};return 0===Number(r)?{...t,css:["font-size: 0"]}:{...t,css:[`font-size: ${r}${n}`]}}},q={regExp:/^(font-weight|fw)-(?<value>[1-9]00|normal|bold|bolder|inherit|initial|lighter|normal|unset)$/,render({groups:e}){const{value:r}=e;return{name:"fontWeight",order:360,css:["font-weight: "+r]}}},H={regExp:new RegExp(`^(h|height)-(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?$`),render({groups:e}){const{num:r,unit:n}=e,t={name:"height",order:20,num:r};return 0===Number(r)?{...t,css:["height: 0"]}:{...t,css:[`height: ${r}${x(n)}`]}}},M={regExp:new RegExp(`^justify-content-(?<justify>${n})$`),render({groups:e}){const{justify:r}=e;return{name:"justifyContent",order:210,css:["justify-content: "+r]}}},L={regExp:new RegExp(`^letter-spacing-(?<isMinus>m-)?(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?$`),render({groups:e}){let{isMinus:r,num:n,unit:t}=e;r&&(n=0-n),t=x(t);return{...{name:"letterSpacing",order:410,num:n},css:0!==Number(n)?[`letter-spacing: ${n}${t}`]:["letter-spacing: 0"]}}},P={regExp:new RegExp(`^(lh|line-height)-(?<value>((?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?)|normal|unset|inherit|initial)$`),render({groups:e}){let{value:r,num:n,unit:t}=e;const i={name:"lineHeight",order:330};return 0===Number(n)?{...i,num:n,css:["line-height: 0"]}:void 0!==n?(t=x(t),{...i,num:n,css:[`line-height: ${n}${t}`]}):{...i,num:1/0,css:["line-height: "+r]}}};var _={regExp:new RegExp(`^(?<type>m|margin|p|padding)-((?<direction>[trblxy])-)?((?<auto>auto)|(?<isMinus>m-)?(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?)$`),render({groups:e}){let{type:r,direction:n,isMinus:t,num:i,unit:s,auto:o}=e;o?(s="",i="auto"):s=0===Number(i)?"":x(s),t&&(i=0-i);const u=function(e,r){let n,t="";return"m"!==e&&"margin"!==e||(n=50,t+="margin"),"p"!==e&&"padding"!==e||(n=110,t+="padding"),"x"===r&&(n+=10),"y"===r&&(n+=20),"t"===r&&(n+=30),"b"===r&&(n+=40),"r"===r&&(n+=50),"l"===r&&(n+=60),r&&(t+="-"+r),{name:t,order:n}}(r,n);return"m"===r&&(r="margin"),"p"===r&&(r="padding"),{...u,num:i,css:c.get(n).reduce((e,n)=>[...e,n?`${r}-${n}: ${i}${s}`:`${r}: ${i}${s}`],[])}}},W={regExp:new RegExp(`^(max-h|max-height)-(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?$`),render({groups:e}){let{num:r,unit:n}=e;n=x(n);const t={name:"max-height",order:31,num:r};return Number(0===r)?{...t,css:["max-height: 0"]}:{...t,css:[`max-height: ${r}${n}`]}}},B={regExp:new RegExp(`^(max-w|max-width)-(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?$`),render({groups:e}){let{num:r,unit:n}=e;n=x(n);const t={name:"max-width",order:31,num:r};return Number(0===r)?{...t,css:["max-width: 0"]}:{...t,css:[`max-width: ${r}${n}`]}}},Q={regExp:new RegExp(`^(min-h|min-height)-(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?$`),render({groups:e}){let{num:r,unit:n}=e;n=x(n);const t={name:"min-height",order:40,num:r};return Number(0===r)?{...t,css:["min-height: 0"]}:{...t,css:[`min-height: ${r}${n}`]}}},J={regExp:new RegExp(`^(min-w|min-width)-(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?$`),render({groups:e}){let{num:r,unit:n}=e;n=x(n);const t={name:"min-width",order:41,num:r};return Number(0===r)?{...t,css:["min-width: 0"]}:{...t,css:[`min-width: ${r}${n}`]}}},U={regExp:/^opacity-(?<num>([1-9]?\d|100))$/,render({groups:e}){const{num:r}=e;return{name:"opacity",order:1/0,num:r,css:["opacity: "+Number((r/100).toFixed(2))]}}},C={regExp:new RegExp(`^(?<direction>[trbl]|top|right|bottom|left)-(?<isMinus>m-)?(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?$`),render({groups:e}){let{direction:r,isMinus:n,num:t,unit:i}=e;n&&(t=0-t),i=x(i),"t"===r&&(r="top"),"r"===r&&(r="right"),"b"===r&&(r="bottom"),"l"===r&&(r="left");const s={name:"orientation",order:310,num:t};return 0===t?{...s,css:[r+": 0"]}:{...s,css:[`${r}: ${t}${i}`]}}},G={regExp:/^overflow(-(?<direction>x|y))?-(?<value>hidden|auto|visible|scroll|inherit)$/,render({groups:e}){const{direction:r,value:n}=e,t={name:"overflow"};return r?"x"===r?{...t,order:390,css:["overflow-x: "+n]}:"y"===r?{...t,order:400,css:["overflow-y: "+n]}:void 0:{...t,order:380,css:["overflow: "+n]}}},V={regExp:/^position-(?<value>static|relative|sticky|unset|absolute|fixed|inherit|initial)$/,render({groups:e}){const{value:r}=e;return{name:"position",order:300,css:["position: "+r]}}},Z={className:"square",regExp:new RegExp(`^square-(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?$`),render({groups:e}){let{num:r,unit:n}=e;n=x(n);const t={name:"square",order:50,num:r};return Number(0===r)?{...t,css:["width: 0","height: 0"]}:{...t,css:[`width: ${r}${n}`,`height: ${r}${n}`]}}},K={regExp:/^(text-align|text)-(?<value>start|end|left|right|center|justify|match-parent)$/,render({groups:e}){const{value:r}=e;return{name:"textAlign",order:320,css:["text-align: "+r]}}},X={regExp:/^(text-align-last|text-last)-(?<value>auto|left|right|center|justify|start|end|initial|inherit)$/,render({groups:e}){const{value:r}=e;return{name:"textAlignLast",order:440,css:["text-align-last: "+r]}}},Y={regExp:/^(text-decoration|text)-(?<value>none|underline|overline|line-through|blink|inherit)$/,render({groups:e}){const{value:r}=e;return{name:"textDecoration",order:420,css:["text-decoration: "+r]}}},ee={regExp:/^(text-)?ellipsis(-(?<num>[1-9]\d*))?$/,render({groups:e}){let{num:r}=e;const n={name:"ellipsis",order:450};return 1===Number(r)&&(r=void 0),void 0===r?{...n,num:0,css:["display: inline-block","overflow: hidden","text-overflow: ellipsis","white-space: nowrap"]}:{...n,num:r,css:["overflow: hidden","text-overflow: ellipsis","display: -webkit-box","-webkit-line-clamp: "+r,"-webkit-box-orient: vertical"]}}},re={regExp:/^(user-)?select-(?<value>none|auto|text|all|contain|element)$/,render({groups:e}){const{value:r}=e;return{name:"userSelect",order:430,css:["user-select: "+r]}}},ne={regExp:new RegExp(`^vertical-align-(?<value>((?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?)|${o})$`),render({groups:e}){let{value:r,num:n,unit:t}=e;return n&&(t=x(t),r=`${n}${t}`),{name:"verticalAlign",order:570,css:["vertical-align: "+r]}}},te={regExp:new RegExp(`^(w|width)-(?<num>(0|([1-9]\\d*))(\\.\\d*[1-9])?)(?<unit>${s})?$`),render({groups:e}){const{num:r,unit:n}=e,t={name:"width",order:10,num:r};return 0===Number(r)?{...t,css:["width: 0"]}:{...t,css:[`width: ${r}${x(n)}`]}}},ie={regExp:/^word-break-(?<value>normal|break-all|keep-all|break-word|inherit|initial|unset)$/,render({groups:e}){const{value:r}=e;return{name:"wordBreak",order:350,css:["word-break: "+r]}}},se={regExp:/^z-index-(?<isMinus>m-)?(?<num>0|[1-9]\d*)$/,render({groups:e}){let{isMinus:r,num:n}=e;return r&&(n=0-n),{name:"zIndex",order:190,num:n,css:["z-index: "+n]}}},oe=Object.freeze({__proto__:null,alignItems:d,border:v,borderRadius:y,borderStyle:E,boxSizing:k,circle:N,color:j,cursor:S,display:z,flexBasis:R,flexDirection:O,flexJustAli:I,flexNum:F,flexShrinkAndGrow:A,flexWrap:T,fontSize:D,fontWeight:q,height:H,justifyContent:M,letterSpacing:L,lineHeight:P,marginAndPadding:_,maxHeight:W,maxWidth:B,minHeight:Q,minWidth:J,opacity:U,orientation:C,overflow:G,position:V,square:Z,textAlign:K,textAlignLast:X,textDecoration:Y,textEllipsis:ee,userSelect:re,verticalAlign:ne,width:te,wordBreak:ie,zIndex:se});function ue(e){return"function"==typeof e}let ae=[];const le={};function ce(e){return ae.push(e)}function de({classStr:e,css:r,pseudo:n}){return e=e.replace(/(@|:|#|\.)/g,"\\$1"),n&&(e=e+":"+n),r.reduce((e,r,n)=>e+(g("important")?r+" !important; ":r+"; "),`.${e}{ `)+"}"}function pe(e,r){return void 0!==e&&void 0!==r?Number(e.num)-Number(r.num):0}function me(e){let r="";const n=function(e,r){const n={};return e.forEach((function(e){const t=JSON.stringify(e[r]);n[t]=n[t]||[],n[t].push(e)})),Object.keys(n).map((function(e){return n[e]}))}(e.sort((e,r)=>e.order-r.order),"name");for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r+=`/* ${n[e][0].name||"unknow name"} order ${n[e][0].order} */\n`,r+=n[e].sort(pe).map(de).join("\n"),r+="\n\n");return r}const ge=new Set;function xe(e){const r=e.match(g("globReg"));return r&&r.forEach(e=>{e.replace(/[^a-zA-Z0-9-@:#.]/g," ").split(" ").forEach(he)}),""}function he(e){if(ge.has(e))return null;let n,t,i=e;const s=[...l,...Object.keys(g("meidaQuerys"))];if(/[@:]/.test(e)){const o=new RegExp(`^(?:(?<query>${s.join("|")})@)?(?:(?<pseudo>${r}):)?(?<source>[^:@]+)$`),u=e.match(o);if(!u)return null;const{groups:a=null}=u;if(!a)return null;({query:n,pseudo:t,source:i}=a)}ge.add(e);const o=Object.values({...oe,...g("modifyRules")});for(let r=0;r<o.length;r++){let s=o[r];s=ue(s)?s({getUnit:x}):s;const l=ue(s.regExp)?s.regExp():s.regExp,c=i.match(l);if(null!==c){const r={classStr:e,...s.render(c),pseudo:t};n?(u=n,a=r,Object.prototype.hasOwnProperty.call(le,u)?le[u].push(a):le[u]=[a]):ce(r);break}}var u,a}const{performance:fe}=require("perf_hooks"),be=require("fs"),$e=require("path"),we=require("chokidar"),ve=require("glob"),ye=require("shelljs");let Ee=!1,ke=0,Ne=0;const je=()=>{ke=fe.now()},Se=()=>{Ne=fe.now()};function ze(){const e=$e.resolve(g("generate")),r=$e.resolve(g("generate"),"..");be.existsSync(r)||ye.mkdir("-p",r),be.writeFileSync(e,`@charset "UTF-8";\n/* https://github.com/macheteHot/css-generator-plugin/\n   version: v2.0.5-beta\n   this file will auto generate and update\n   DO NOT EDIT THIS FILE!\n   DO NOT EDIT THIS FILE!\n   DO NOT EDIT THIS FILE!\n*/\n\n${function(){let e="";e+=me(ae);const r={...a,...g("meidaQuerys")};for(const n in le)Object.prototype.hasOwnProperty.call(le,n)&&(e+=`@media ${r[n]}{\n`,e+=me(le[n]),e+="}");return e}()}\n`)}function Re(e){return $e.resolve(process.cwd(),e)}function Oe(){console.log(`css generator ${Ee?"reload":"init"} done use time ${(Ne-ke).toFixed(2)}ms`)}function Ie(e){je(),xe(function(){const e=g("extNames").join("|");return ve.sync($e.join(process.cwd(),`./${g("dirPath")}/**/*.@(${e})`)).reduce((e,r)=>e+be.readFileSync($e.resolve(r),"utf8"),"")}()),ze(),Se(),e?e.hooks.done.tap("css-generator-done",Oe):Oe()}function Fe(e){Ee=!0;const r=g("extNames").join("|");we.watch($e.resolve(g("dirPath")),{ignored:new RegExp(`^\\/([^/]+\\/)*[^/]*\\.((?!${r}).)+$`),persistent:!0}).on("change",r=>{je(),ke=fe.now(),xe(function(e){return be.readFileSync(e,"utf8")}(r)),ze(),Se(),e||Oe()})}module.exports=class{constructor(e){void 0===e&&(e=function(){let e=null;if(!be.existsSync(Re("css.generator.config.js")))throw new Error("you dont have any config!!! see https://github.com/macheteHot/css-generator-plugin/blob/master/README.md");return e=require(Re("css.generator.config.js")),e}()),p=e}apply(e){e.hooks.afterPlugins.tap("vue-generate-css",()=>{Ie(e),"development"===process.env.NODE_ENV&&Fe(e)})}};
