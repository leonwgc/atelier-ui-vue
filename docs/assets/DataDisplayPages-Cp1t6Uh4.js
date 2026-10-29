import{t as e}from"./Tag-C47n_nSU.js";import{i as t,n,r,t as i}from"./Empty-CCaeJDEK.js";import{b as a,d as o,f as s,g as c,i as l,l as u,n as d,o as f,p,r as m,s as h,t as g,u as _,v,y}from"./ApiTable-CMaXdLlV.js";import{t as b}from"./Tree-DrfyginC.js";import{A as x,D as S,E as C,G as w,H as T,I as E,J as D,K as O,L as ee,O as k,S as te,T as A,W as j,Y as M,_ as N,c as ne,d as P,f as re,g as F,j as I,k as ie,l as ae,m as L,n as R,o as oe,p as z,s as B,t as se,u as V,v as H,w as ce,x as U,y as le}from"./index-CILakwI7.js";import{a as W,i as G,t as ue}from"./shared-DuhUujBE.js";function de(e,{precision:t,groupSeparator:n=`,`,decimalSeparator:r=`.`}){if(typeof e!=`number`||!Number.isFinite(e))return{integer:String(e),decimal:``};let[i,a=``]=(t==null?String(Math.abs(e)):Math.abs(e).toFixed(t)).split(`.`),o=i.replace(/\B(?=(\d{3})+(?!\d))/g,n);return{integer:`${e<0?`-`:``}${o}`,decimal:a?`${r}${a}`:``}}var K=(e,t=2)=>String(e).padStart(t,`0`);function fe(e,t=`HH:mm:ss`){let n=Math.max(0,e),r=/D/.test(t),i=/H/.test(t),a=/m/.test(t),o=r?Math.floor(n/864e5):0;n-=o*864e5;let s=i?Math.floor(n/36e5):0;n-=s*36e5;let c=a?Math.floor(n/6e4):0;n-=c*6e4;let l=Math.floor(n/1e3),u=n-l*1e3;return t.replace(/D+/g,e=>K(o,e.length)).replace(/H+/g,e=>K(s,e.length)).replace(/m+/g,e=>K(c,e.length)).replace(/s+/g,e=>K(l,e.length)).replace(/S+/g,e=>K(u,3).slice(0,e.length))}var pe={key:0,class:`at-statistic__title`},me={key:1,class:`at-statistic__skeleton`,"aria-busy":`true`,"aria-label":`加载中`},he={key:0,class:`at-statistic__prefix`},ge=[`aria-label`],_e={class:`at-statistic__value`},ve={class:`at-statistic__int`},ye={key:0,class:`at-statistic__decimal`},be={key:2,class:`at-statistic__suffix`},xe={key:3,class:`at-statistic__trend-label`},q=H({__name:`Statistic`,props:{title:{},value:{},precision:{},groupSeparator:{},decimalSeparator:{},prefix:{},suffix:{},formatter:{},loading:{type:Boolean},valueStyle:{},trend:{},trendLabel:{},size:{default:`md`}},setup(e){let t=e,n=V(()=>de(t.value,t));return(t,r)=>(k(),L(`div`,{class:O([`at-statistic`,`at-statistic--${e.size}`,e.trend&&`at-statistic--${e.trend}`])},[e.title||t.$slots.title?(k(),L(`div`,pe,[I(t.$slots,`title`,{},()=>[F(M(e.title),1)])])):z(``,!0),e.loading?(k(),L(`div`,me)):(k(),L(`div`,{key:2,class:`at-statistic__content`,style:D(e.valueStyle)},[e.prefix||t.$slots.prefix?(k(),L(`span`,he,[I(t.$slots,`prefix`,{},()=>[F(M(e.prefix),1)])])):z(``,!0),e.trend?(k(),L(`span`,{key:1,class:`at-statistic__trend`,"aria-label":e.trend===`up`?`上升`:`下降`},M(e.trend===`up`?`↑`:`↓`),9,ge)):z(``,!0),P(`span`,_e,[I(t.$slots,`formatter`,{value:e.value},()=>[e.formatter?(k(),L(B,{key:0},[F(M(e.formatter(e.value)),1)],64)):(k(),L(B,{key:1},[P(`span`,ve,M(n.value.integer),1),n.value.decimal?(k(),L(`span`,ye,M(n.value.decimal),1)):z(``,!0)],64))])]),e.suffix||t.$slots.suffix?(k(),L(`span`,be,[I(t.$slots,`suffix`,{},()=>[F(M(e.suffix),1)])])):z(``,!0)],4)),e.trendLabel&&!e.loading?(k(),L(`div`,xe,M(e.trendLabel),1)):z(``,!0)],2))}}),Se=H({__name:`Countdown`,props:{value:{},format:{default:`HH:mm:ss`},title:{},prefix:{},suffix:{},loading:{type:Boolean}},emits:[`finish`,`change`],setup(e,{emit:t}){let n=e,r=T(Math.max(0,Number(n.value)-Date.now())),i=t,a;function o(){clearInterval(a);let e=!1,t=()=>{r.value=Math.max(0,Number(n.value)-Date.now()),i(`change`,r.value),r.value===0&&!e&&(e=!0,i(`finish`),clearInterval(a))};t(),r.value>0&&(a=setInterval(t,/S/.test(n.format)?50:1e3/30))}return C(()=>{o(),E(()=>[n.value,n.format],o)}),A(()=>clearInterval(a)),(t,n)=>(k(),re(q,{class:`at-statistic--countdown`,title:e.title,value:w(fe)(r.value,e.format),prefix:e.prefix,suffix:e.suffix,loading:e.loading},null,8,[`title`,`value`,`prefix`,`suffix`,`loading`]))}}),Ce={L:1,M:0,Q:3,H:2},we={L:[0,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],M:[0,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],Q:[0,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],H:[0,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]},Te={L:[0,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],M:[0,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],Q:[0,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],H:[0,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]};function Ee(e){let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function De(e,t){return Math.floor(Ee(e)/8)-we[t][e]*Te[t][e]}function Oe(e){if(e===1)return[];let t=Math.floor(e/7)+2,n=e*4+17,r=e===32?26:Math.ceil((e*4+4)/(t*2-2))*2,i=[6];for(let e=n-7;i.length<t;e-=r)i.splice(1,0,e);return i}function ke(e,t){let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n&255}function Ae(e){let t=Array(e).fill(0);t[e-1]=1;let n=1;for(let r=0;r<e;r++){for(let r=0;r<e;r++)t[r]=ke(t[r],n),r+1<e&&(t[r]^=t[r+1]);n=ke(n,2)}return t}function je(e,t){let n=Array(t.length).fill(0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>{n[r]^=ke(t,e)})}return n}function J(e,t,n){for(let r=n-1;r>=0;r--)e.push(t>>>r&1)}function Me(e,t=`M`,n=1,r=40,i){let a=Array.from(new TextEncoder().encode(e)),o=Math.max(1,n),s=0;for(;;o++){let e=4+(o<10?8:16)+a.length*8;if(s=De(o,t)*8,e<=s)break;if(o>=Math.min(40,r))throw Error(`QRCode: content too long`)}let c=[];J(c,4,4),J(c,a.length,o<10?8:16),a.forEach(e=>J(c,e,8)),J(c,0,Math.min(4,s-c.length)),J(c,0,(8-c.length%8)%8);for(let e=236;c.length<s;e^=253)J(c,e,8);let l=[];c.forEach((e,t)=>{l[t>>>3]=(l[t>>>3]??0)|e<<7-(t&7)});let u=Ne(l,o,t),d=o*4+17,f=Array.from({length:d},()=>Array(d).fill(!1)),p=Array.from({length:d},()=>Array(d).fill(!1)),m=(e,t,n)=>{f[t][e]=n,p[t][e]=!0},h=(e,t)=>{for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<d&&o>=0&&o<d&&m(a,o,i!==2&&i!==4)}},g=(e,t)=>{for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)m(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1)},_=e=>{let n=Ce[t]<<3|e,r=n;for(let e=0;e<10;e++)r=r<<1^(r>>>9)*1335;let i=(n<<10|r)^21522,a=e=>(i>>>e&1)==1;for(let e=0;e<=5;e++)m(8,e,a(e));m(8,7,a(6)),m(8,8,a(7)),m(7,8,a(8));for(let e=9;e<15;e++)m(14-e,8,a(e));for(let e=0;e<8;e++)m(d-1-e,8,a(e));for(let e=8;e<15;e++)m(8,d-15+e,a(e));m(8,d-8,!0)},v=()=>{if(o<7)return;let e=o;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=o<<12|e;for(let e=0;e<18;e++){let n=(t>>>e&1)==1,r=d-11+e%3,i=Math.floor(e/3);m(r,i,n),m(i,r,n)}};for(let e=0;e<d;e++)m(6,e,e%2==0),m(e,6,e%2==0);h(3,3),h(d-4,3),h(3,d-4);let y=Oe(o);y.forEach((e,t)=>y.forEach((n,r)=>{t===0&&r===0||t===0&&r===y.length-1||t===y.length-1&&r===0||g(n,e)})),_(0),v();let b=0;for(let e=d-1;e>=1;e-=2){e===6&&(e=5);for(let t=0;t<d;t++)for(let n=0;n<2;n++){let r=e-n,i=e+1&2?t:d-1-t;!p[i][r]&&b<u.length*8&&(f[i][r]=(u[b>>>3]>>>7-(b&7)&1)==1,b++)}}let x=e=>{for(let t=0;t<d;t++)for(let n=0;n<d;n++){if(p[t][n])continue;let r=!1;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0}r&&(f[t][n]=!f[t][n])}},S=i??0,C=1/0;for(let e=0;e<8&&i==null;e++){x(e),_(e);let t=Pe(f,d);t<C&&(C=t,S=e),x(e)}return x(S),_(S),{size:d,version:o,modules:f}}function Ne(e,t,n){let r=Te[n][t],i=we[n][t],a=Math.floor(Ee(t)/8),o=r-a%r,s=Math.floor(a/r),c=Ae(i),l=[];for(let t=0,n=0;t<r;t++){let r=s-i+(t<o?0:1),a=e.slice(n,n+r);n+=r;let u=je(a,c);t<o&&a.push(0),l.push(a.concat(u))}let u=[];for(let e=0;e<l[0].length;e++)l.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}function Pe(e,t){let n=0,r=e=>{let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)},i=(e,n)=>{n[0]===0&&(e+=t),n.pop(),n.unshift(e)},a=(e,n,a)=>(e&&(i(n,a),n=0),i(n+t,a),r(a)),o=e=>{let o=!1,s=0,c=[0,0,0,0,0,0,0];for(let a=0;a<t;a++){let t=e(a);t===o?(s++,s===5?n+=3:s>5&&n++):(i(s,c),o||(n+=r(c)*40),o=t,s=1)}n+=a(o,s,c)*40};for(let n=0;n<t;n++)o(t=>e[n][t]);for(let n=0;n<t;n++)o(t=>e[t][n]);for(let r=0;r<t-1;r++)for(let i=0;i<t-1;i++){let t=e[r][i];t===e[r][i+1]&&t===e[r+1][i]&&t===e[r+1][i+1]&&(n+=3)}let s=0;e.forEach(e=>e.forEach(e=>{e&&s++}));let c=t*t,l=Math.ceil(Math.abs(s*20-c*10)/c)-1;return n+=l*10,n}var Fe=[`aria-label`],Ie={key:0,class:`at-qrcode__error`},Le=[`viewBox`,`width`,`height`],Re=[`width`,`height`,`fill`],ze=[`d`,`fill`],Be=[`x`,`y`,`width`,`height`,`rx`,`fill`],Ve=[`href`,`x`,`y`,`width`,`height`],He={class:`at-qrcode__status`,role:`status`},Ue=H({__name:`QRCode`,props:{value:{},size:{default:160},type:{default:`svg`},errorLevel:{},color:{default:`#222438`},bgColor:{default:`#ffffff`},icon:{},iconSize:{},bordered:{type:Boolean,default:!0},margin:{default:2},status:{default:`active`},title:{default:`二维码`}},emits:[`refresh`],setup(e,{emit:t}){let n=e,r=t,i=T(null),a=V(()=>{try{return Me(n.value,n.errorLevel??(n.icon?`H`:`M`))}catch{return null}}),o=V(()=>(a.value?.size??0)+n.margin*2),s=V(()=>n.iconSize??Math.round(n.size*.22)),c=V(()=>s.value*o.value/n.size),l=V(()=>(s.value+8)*o.value/n.size),u=V(()=>{let e=[];return a.value?.modules.forEach((t,r)=>{let i=0;for(;i<t.length;){if(!t[i]){i++;continue}let a=0;for(;t[i+a];)a++;e.push(`M${i+n.margin} ${r+n.margin}h${a}v1h-${a}z`),i+=a}}),e.join(``)}),d=0;function f(){let e=++d;if(n.type!==`canvas`||!i.value||!a.value)return;let t=i.value,r=devicePixelRatio||1;t.width=n.size*r,t.height=n.size*r;let c=t.getContext(`2d`);if(!c)return;let l=n.size/o.value*r;if(c.fillStyle=n.bgColor,c.fillRect(0,0,t.width,t.height),c.fillStyle=n.color,a.value.modules.forEach((e,t)=>e.forEach((e,r)=>{e&&c.fillRect(Math.floor((r+n.margin)*l),Math.floor((t+n.margin)*l),Math.ceil(l),Math.ceil(l))})),n.icon){let i=new window.Image;i.crossOrigin=`anonymous`,i.onload=()=>{if(d!==e)return;let a=s.value*r,o=(t.width-a)/2;c.fillStyle=n.bgColor,c.fillRect(o-4*r,o-4*r,a+8*r,a+8*r),c.drawImage(i,o,o,a,a)},i.src=n.icon}}return C(()=>{f(),E(()=>[n.value,n.type,n.size,n.errorLevel,n.color,n.bgColor,n.icon,n.iconSize,n.margin],f,{flush:`post`})}),(t,n)=>(k(),L(`div`,{class:O([`at-qrcode`,{"at-qrcode--bordered":e.bordered,"at-qrcode--masked":e.status!==`active`}]),style:D({width:`${e.size}px`,height:`${e.size}px`,backgroundColor:e.bgColor}),role:`img`,"aria-label":`${e.title}：${e.value}`},[a.value?e.type===`svg`?(k(),L(`svg`,{key:1,class:`at-qrcode__svg`,viewBox:`0 0 ${o.value} ${o.value}`,width:e.size,height:e.size,"shape-rendering":`crispEdges`,"aria-hidden":`true`},[P(`rect`,{width:o.value,height:o.value,fill:e.bgColor},null,8,Re),P(`path`,{d:u.value,fill:e.color},null,8,ze),e.icon?(k(),L(B,{key:0},[P(`rect`,{x:(o.value-l.value)/2,y:(o.value-l.value)/2,width:l.value,height:l.value,rx:o.value/e.size*3,fill:e.bgColor},null,8,Be),P(`image`,{href:e.icon,x:(o.value-c.value)/2,y:(o.value-c.value)/2,width:c.value,height:c.value,preserveAspectRatio:`xMidYMid slice`},null,8,Ve)],64)):z(``,!0)],8,Le)):(k(),L(`canvas`,{key:2,ref_key:`canvas`,ref:i,class:`at-qrcode__canvas`,style:D({width:`${e.size}px`,height:`${e.size}px`}),"aria-hidden":`true`},null,4)):(k(),L(`div`,Ie,`内容过长，无法生成`)),e.status===`active`?z(``,!0):I(t.$slots,`status`,{status:e.status,onRefresh:()=>r(`refresh`)},()=>[P(`div`,He,[e.status===`loading`?(k(),L(B,{key:0},[n[1]||=P(`span`,{class:`at-qrcode__spinner`,"aria-hidden":`true`},null,-1),n[2]||=P(`span`,null,`加载中…`,-1)],64)):z(``,!0),e.status===`expired`?(k(),L(B,{key:1},[n[3]||=P(`span`,null,`二维码已过期`,-1),P(`button`,{type:`button`,class:`at-qrcode__refresh`,onClick:n[0]||=e=>r(`refresh`)},`点击刷新`)],64)):z(``,!0),e.status===`scanned`?(k(),L(B,{key:2},[n[4]||=P(`span`,{class:`at-qrcode__check`,"aria-hidden":`true`},`✓`,-1),n[5]||=P(`span`,null,`已扫描`,-1)],64)):z(``,!0)])],void 0,3)],14,Fe))}}),We={key:0,class:`at-list__header`},Ge={key:0,class:`at-list__skeletons`,"aria-busy":`true`,"aria-label":`加载中`},Ke={key:1,class:`at-list__empty`},qe={key:3,class:`at-list__footer`},Je=H({__name:`List`,props:{dataSource:{},rowKey:{},header:{},footer:{},bordered:{type:Boolean},split:{type:Boolean,default:!0},size:{default:`md`},loading:{type:Boolean},loadingRows:{default:3},emptyText:{default:`暂无数据`},grid:{},pagination:{type:[Boolean,Object]},height:{}},emits:[`endReached`,`pageChange`],setup(e,{emit:t}){let o=e,s=t,c=T(null),l=T(0),u;C(()=>{typeof ResizeObserver<`u`&&(u=new ResizeObserver(([e])=>{l.value=e.contentRect.width}),c.value&&u.observe(c.value))}),A(()=>u?.disconnect());let d=V(()=>o.pagination?o.pagination===!0?{}:o.pagination:null),f=T(d.value?.defaultCurrent??1),p=T(d.value?.pageSize??10),m=V(()=>d.value?.current??f.value),h=V(()=>d.value?o.dataSource.slice((m.value-1)*p.value,m.value*p.value):o.dataSource),g=V(()=>{let e=o.grid;return e?l.value?l.value<576?e.xs??e.column??1:l.value<768?e.sm??e.xs??e.column??1:l.value<992?e.md??e.sm??e.xs??e.column??1:e.lg??e.md??e.sm??e.xs??e.column??1:e.column??1:1});function _(e,t){return typeof o.rowKey==`function`?o.rowKey(e,t):o.rowKey&&e&&typeof e==`object`?String(e[o.rowKey]):t}function v(e,t){d.value?.current===void 0&&(f.value=e),p.value=t,d.value?.onChange?.(e,t),s(`pageChange`,e,t)}function y(e){let t=e.currentTarget;t.scrollTop+t.clientHeight>=t.scrollHeight-24&&s(`endReached`)}return(t,o)=>(k(),L(`div`,{ref_key:`root`,ref:c,class:O([`at-list`,`at-list--${e.size}`,{"at-list--bordered":e.bordered,"at-list--split":e.split&&!e.grid,"at-list--grid":e.grid}])},[e.header||t.$slots.header?(k(),L(`div`,We,[I(t.$slots,`header`,{},()=>[N(w(a),{content:e.header},null,8,[`content`])])])):z(``,!0),d.value&&e.dataSource.length&&(d.value.position===`top`||d.value.position===`both`)?(k(),L(`div`,{key:1,class:O([`at-list__pagination`,`at-list__pagination--${d.value.align??`end`}`])},[N(r,{current:m.value,"page-size":p.value,total:e.dataSource.length,"show-size-changer":d.value.showSizeChanger,"page-size-options":d.value.pageSizeOptions,onChange:v},null,8,[`current`,`page-size`,`total`,`show-size-changer`,`page-size-options`])],2)):z(``,!0),P(`div`,{class:`at-list__body`,style:D(e.height?{maxHeight:`${e.height}px`,overflowY:`auto`}:void 0),onScroll:y},[e.loading?(k(),L(`div`,Ge,[(k(!0),L(B,null,x(e.loadingRows,e=>(k(),L(`div`,{key:e,class:`at-list__item`},[N(n,{active:``,avatar:``,title:``,paragraph:{rows:1}})]))),128))])):h.value.length?(k(),L(`ul`,{key:2,class:O([`at-list__items`,{"at-list__items--grid":e.grid}]),style:D(e.grid?{gridTemplateColumns:`repeat(${g.value}, minmax(0, 1fr))`,gap:`${e.grid.gutter??16}px`}:void 0)},[(k(!0),L(B,null,x(h.value,(e,n)=>(k(),L(`li`,{key:_(e,n),class:`at-list__cell`},[I(t.$slots,`default`,{item:e,index:n},()=>[F(M(e),1)])]))),128))],6)):(k(),L(`div`,Ke,[N(i,{description:e.emptyText},null,8,[`description`])]))],36),d.value&&e.dataSource.length&&(!d.value.position||d.value.position===`bottom`||d.value.position===`both`)?(k(),L(`div`,{key:2,class:O([`at-list__pagination`,`at-list__pagination--${d.value.align??`end`}`])},[N(r,{current:m.value,"page-size":p.value,total:e.dataSource.length,"show-size-changer":d.value.showSizeChanger,"page-size-options":d.value.pageSizeOptions,onChange:v},null,8,[`current`,`page-size`,`total`,`show-size-changer`,`page-size-options`])],2)):z(``,!0),e.footer||t.$slots.footer?(k(),L(`div`,qe,[I(t.$slots,`footer`,{},()=>[N(w(a),{content:e.footer},null,8,[`content`])])])):z(``,!0)],2))}}),Ye={class:`at-list__item`},Xe={class:`at-list__item-main`},Ze={class:`at-list__item-content`},Qe={key:0,class:`at-list__actions`},$e={key:0,class:`at-list__item-extra`},et=H({__name:`ListItem`,props:{actions:{},extra:{}},setup(e){return(t,n)=>(k(),L(`div`,Ye,[P(`div`,Xe,[P(`div`,Ze,[I(t.$slots,`default`)]),e.actions?.length||t.$slots.actions?(k(),L(`ul`,Qe,[I(t.$slots,`actions`,{},()=>[(k(!0),L(B,null,x(e.actions,(e,t)=>(k(),L(`li`,{key:t,class:`at-list__action`},[N(w(a),{content:e},null,8,[`content`])]))),128))])])):z(``,!0)]),e.extra||t.$slots.extra?(k(),L(`div`,$e,[I(t.$slots,`extra`,{},()=>[N(w(a),{content:e.extra},null,8,[`content`])])])):z(``,!0)]))}}),tt={class:`at-list__meta`},nt={key:0,class:`at-list__meta-avatar`},rt={class:`at-list__meta-body`},it={key:0,class:`at-list__meta-title`},at={key:1,class:`at-list__meta-description`},ot=H({__name:`ListItemMeta`,props:{title:{},description:{}},setup(e){return(t,n)=>(k(),L(`div`,tt,[t.$slots.avatar?(k(),L(`div`,nt,[I(t.$slots,`avatar`)])):z(``,!0),P(`div`,rt,[e.title||t.$slots.title?(k(),L(`div`,it,[I(t.$slots,`title`,{},()=>[F(M(e.title),1)])])):z(``,!0),e.description||t.$slots.description?(k(),L(`div`,at,[I(t.$slots,`description`,{},()=>[F(M(e.description),1)])])):z(``,!0)])]))}}),st={key:0,class:`at-listy__empty`},ct=[`data-index`],lt={key:2,class:`at-listy__footer`},ut=H({__name:`Listy`,props:{items:{},itemKey:{},height:{default:320},itemHeight:{default:44},dynamicHeight:{type:Boolean},overscan:{default:4},endReachedThreshold:{default:120},emptyText:{default:`暂无数据`},footer:{},split:{type:Boolean,default:!0}},emits:[`endReached`,`visibleRangeChange`],setup(e,{expose:t,emit:n}){let r=e,i=n,a=T(null),o=T(0),s=T({}),c=!1,l,u=V(()=>{let e=[0];return r.items.forEach((t,n)=>{e[n+1]=e[n]+(r.dynamicHeight?s.value[n]??r.itemHeight:r.itemHeight)}),e});function d(e){let t=0,n=r.items.length-1;for(;t<n;){let r=t+n>>1;u.value[r+1]<=e?t=r+1:n=r}return t}let f=V(()=>Math.max(0,d(o.value)-r.overscan)),p=V(()=>Math.min(r.items.length,d(o.value+r.height)+1+r.overscan));E([f,p],([e,t])=>i(`visibleRangeChange`,{start:e,end:t}),{immediate:!0}),E(()=>r.items,()=>{s.value={},c=!1}),E(()=>r.items.length,()=>{c=!1});function m(){let e=a.value;e&&(o.value=e.scrollTop,!c&&e.scrollTop+e.clientHeight>=e.scrollHeight-r.endReachedThreshold&&(c=!0,i(`endReached`)))}async function h(){await ce(),l?.disconnect(),r.dynamicHeight&&a.value&&a.value.querySelectorAll(`[data-index]`).forEach(e=>l?.observe(e))}C(()=>{typeof ResizeObserver<`u`&&(l=new ResizeObserver(e=>{let t={...s.value},n=!1;e.forEach(e=>{let i=e.target,a=Number(i.dataset.index),o=i.getBoundingClientRect().height;Math.abs((t[a]??r.itemHeight)-o)>=.5&&(t[a]=o,n=!0)}),n&&(s.value=t)})),h()}),E([f,p,()=>r.dynamicHeight],h),A(()=>l?.disconnect());function g(e,t=`start`){e=Math.max(0,Math.min(e,r.items.length-1));let n=u.value[e]??0,i=(u.value[e+1]??n+r.itemHeight)-n;a.value?.scrollTo({top:Math.max(0,t===`center`?n-(r.height-i)/2:t===`end`?n-r.height+i:n)})}return t({scrollTo:g,scrollToTop:()=>a.value?.scrollTo({top:0})}),(t,n)=>(k(),L(`div`,{class:O([`at-listy`,{"at-listy--split":e.split}]),style:D({height:`${e.height}px`})},[P(`div`,{ref_key:`viewport`,ref:a,class:`at-listy__viewport`,role:`list`,onScroll:m},[e.items.length?(k(),L(`div`,{key:1,class:`at-listy__spacer`,style:D({height:`${u.value[e.items.length]}px`})},[(k(!0),L(B,null,x(e.items.slice(f.value,p.value),(n,r)=>(k(),L(`div`,{key:e.itemKey?.(n,f.value+r)??f.value+r,role:`listitem`,class:`at-listy__item`,"data-index":f.value+r,style:D({transform:`translateY(${u.value[f.value+r]}px)`,height:e.dynamicHeight?void 0:`${e.itemHeight}px`})},[I(t.$slots,`default`,{item:n,index:f.value+r},()=>[F(M(n),1)])],12,ct))),128))],4)):(k(),L(`div`,st,[I(t.$slots,`empty`,{},()=>[F(M(e.emptyText),1)])])),e.footer||t.$slots.footer?(k(),L(`div`,lt,[I(t.$slots,`footer`,{},()=>[F(M(e.footer),1)])])):z(``,!0)],544)],6))}}),dt=H({name:`Masonry`,props:{items:Array,dataSource:Array,itemKey:Function,columns:{type:[Number,Object],default:3},gap:{type:[Number,Array],default:16},sequential:Boolean},emits:[`layout`],setup(e,{slots:t,emit:n}){let r=T(null),i=T([]),a=T(0),o,s=!1,c=()=>{if(!r.value)return;let t=r.value.clientWidth,o=e.columns,s=typeof o==`number`?o:o[Math.min(...Object.keys(o).map(Number))]??1;typeof o!=`number`&&Object.keys(o).map(Number).sort((e,t)=>e-t).forEach(e=>{t>=e&&(s=o[e])}),s=Math.max(1,s);let[c,l]=Array.isArray(e.gap)?e.gap:[e.gap,e.gap],u=Math.max(0,(t-c*(s-1))/s),d=Array(s).fill(0),f=Array.from(r.value.children).map((t,n)=>{let r=t;r.style.width=`${u}px`;let i=e.sequential?n%s:d.indexOf(Math.min(...d)),a={transform:`translate(${i*(u+c)}px, ${d[i]}px)`,width:`${u}px`};return d[i]+=r.getBoundingClientRect().height+l,a}),p=Math.max(0,Math.max(...d)-l);JSON.stringify(f)!==JSON.stringify(i.value)&&(i.value=f),a.value!==p&&(a.value=p,n(`layout`,{columns:s,height:p}))};return C(()=>{s=!0,typeof ResizeObserver<`u`&&(o=new ResizeObserver(c)),r.value&&o?.observe(r.value),c()}),S(()=>{s&&ce(()=>{Array.from(r.value?.children??[]).forEach(e=>o?.observe(e)),c()})}),A(()=>{s=!1,o?.disconnect()}),()=>{let n=e.dataSource??e.items,o=n?n.map((e,n)=>t.item?.({item:e,index:n})??String(e)):t.default?.()??[];return U(`div`,{ref:r,class:[`at-masonry`,i.value.length&&`at-masonry--ready`],style:{height:`${a.value}px`}},o.map((t,r)=>U(`div`,{key:n?e.itemKey?.(n[r],r)??r:r,class:`at-masonry__item`,style:i.value[r]??{width:`100%`,visibility:`hidden`}},[t])))}}});function ft(e){return e.flatMap(e=>e.type===B&&Array.isArray(e.children)?ft(e.children):[e])}var pt=H({name:`Carousel`,props:{items:Array,autoplay:Boolean,autoplaySpeed:{type:Number,default:4e3},pauseOnHover:{type:Boolean,default:!0},effect:{type:String,default:`slide`},dots:{type:Boolean,default:!0},dotPosition:{type:String,default:`bottom`},arrows:Boolean,infinite:{type:Boolean,default:!0},draggable:{type:Boolean,default:!0},speed:{type:Number,default:450},current:Number,defaultCurrent:{type:Number,default:0},aspectRatio:Number,label:{type:String,default:`轮播`}},emits:[`update:current`,`change`,`beforeChange`,`afterChange`],setup(e,{slots:t,emit:n,expose:r}){let i=T(e.defaultCurrent),a=T(!1),o=T(0),s=T(!1),c=T(null),l=V(()=>e.current??i.value),u=[],d=T(0),p=()=>e.items?.map((e,n)=>t.item?.({item:e,index:n})??e)??ft(t.default?.()??[]),m=V(()=>e.dotPosition===`left`||e.dotPosition===`right`),g,_,v;function y(t){let r=u.length;if(!r)return;let a=e.infinite?(t%r+r)%r:Math.max(0,Math.min(t,r-1));a!==l.value&&(n(`beforeChange`,l.value,a),e.current===void 0&&(i.value=a),n(`update:current`,a),n(`change`,a))}let b=()=>y(l.value+1),x=()=>y(l.value-1);r({next:b,prev:x,goTo:y});function S(){if(clearInterval(g),!e.autoplay||a.value||u.length<2)return;let t=matchMedia(`(prefers-reduced-motion: reduce)`).matches;g=setInterval(b,Math.max(t?6e3:1e3,e.autoplaySpeed))}C(()=>{S(),E(()=>[e.autoplay,e.autoplaySpeed,a.value,e.items?.length,d.value],S)}),E(l,t=>{clearTimeout(_),_=setTimeout(()=>n(`afterChange`,t),e.speed)}),A(()=>{clearTimeout(_),clearInterval(g)});function w(t){if(!e.draggable||t.button!==0)return;let n=t.currentTarget;v={point:m.value?t.clientY:t.clientX,width:m.value?n.offsetHeight:n.offsetWidth},s.value=!0,n.setPointerCapture(t.pointerId)}function D(e){v&&(o.value=(m.value?e.clientY:e.clientX)-v.point)}function O(){v&&=(o.value<-v.width*.18?b():o.value>v.width*.18&&x(),o.value=0,s.value=!1,void 0)}return()=>{let t=p();u=t,d.value=t.length;let n=e.speed;return U(`div`,{ref:c,class:[`at-carousel`,`at-carousel--${e.effect}`,`at-carousel--dots-${e.dotPosition}`,m.value&&`at-carousel--vertical`,s.value&&`at-carousel--dragging`],style:{"--at-carousel-ratio":e.aspectRatio?String(e.aspectRatio):void 0},role:`region`,"aria-roledescription":`carousel`,"aria-label":e.label,onMouseenter:()=>{e.pauseOnHover&&(a.value=!0)},onMouseleave:()=>{e.pauseOnHover&&(a.value=!1)},onFocusin:()=>{e.pauseOnHover&&(a.value=!0)},onFocusout:e=>{c.value?.contains(e.relatedTarget)||(a.value=!1)},onKeydown:e=>{e.key===(m.value?`ArrowDown`:`ArrowRight`)&&(e.preventDefault(),b()),e.key===(m.value?`ArrowUp`:`ArrowLeft`)&&(e.preventDefault(),x())}},[U(`div`,{class:`at-carousel__viewport`,onPointerdown:w,onPointermove:D,onPointerup:O,onPointercancel:O},[U(`div`,{class:`at-carousel__track`,"aria-live":e.autoplay&&!a.value?`off`:`polite`,style:e.effect===`slide`?{transform:`${m.value?`translateY`:`translateX`}(calc(${-l.value*100}% + ${o.value}px))`,transition:s.value?`none`:`transform ${n}ms var(--at-ease-emphasized)`}:{}},t.map((r,i)=>U(`div`,{key:i,class:[`at-carousel__slide`,i===l.value&&`at-carousel__slide--active`],role:`group`,"aria-roledescription":`slide`,"aria-label":`${i+1} / ${t.length}`,"aria-hidden":i!==l.value,inert:i===l.value?void 0:``,style:e.effect===`fade`?{transition:`opacity ${n}ms var(--at-ease-standard)`}:void 0},[r])))]),e.arrows&&t.length>1?[U(`button`,{type:`button`,class:`at-carousel__arrow at-carousel__arrow--prev`,"aria-label":`上一张`,disabled:!e.infinite&&l.value<=0,onClick:x},[U(f,{size:20})]),U(`button`,{type:`button`,class:`at-carousel__arrow at-carousel__arrow--next`,"aria-label":`下一张`,disabled:!e.infinite&&l.value>=t.length-1,onClick:b},[U(h,{size:20})])]:null,e.dots&&t.length>1?U(`div`,{class:`at-carousel__dots`,role:`tablist`,"aria-label":`选择幻灯片`},t.map((t,n)=>U(`button`,{type:`button`,role:`tab`,"aria-selected":n===l.value,"aria-label":`第 ${n+1} 张`,class:[`at-carousel__dot`,n===l.value&&`at-carousel__dot--active`],onClick:()=>y(n)},e.autoplay&&n===l.value&&!a.value?[U(`span`,{class:`at-carousel__progress`,style:{animationDuration:`${e.autoplaySpeed}ms`}})]:[]))):null])}}}),mt=Symbol(`AtelierImageGroup`),ht={class:`at-image-preview__header`},gt={key:0,class:`at-image-preview__counter`},_t={class:`at-image-preview__tools`,role:`toolbar`,"aria-label":`图片操作`},vt=[`disabled`],yt=[`disabled`],bt={class:`at-image-preview__scale`,"aria-live":`polite`},xt=[`src`],St=H({__name:`PreviewLayer`,props:{items:{},index:{}},emits:[`change`,`close`],setup(e,{emit:t}){let n=e,r=t,i=T(null),a=T(1),o=T(0),s=T(1),l=T(1),d=T(0),m=T(0),g=T(!1),_=T(!1),b;function x(){a.value=1,o.value=0,s.value=l.value=1,d.value=m.value=0}E(()=>n.index,()=>{x(),g.value=!1}),se(()=>!0,i,()=>r(`close`),()=>!0);function S(e){a.value=Math.max(.25,Math.min(5,Number((a.value+e).toFixed(2))))}function C(e){r(`change`,(n.index+e+n.items.length)%n.items.length)}function ee(e){if(e.key===`ArrowLeft`)C(-1);else if(e.key===`ArrowRight`)C(1);else if([`+`,`=`].includes(e.key))S(.25);else if(e.key===`-`)S(-.25);else if(e.key===`r`)o.value+=90;else if(e.key===`0`)x();else return;e.preventDefault()}function te(e){a.value<=1||(e.preventDefault(),b={x:e.clientX,y:e.clientY,ox:d.value,oy:m.value},_.value=!0,e.currentTarget.setPointerCapture(e.pointerId))}function A(e){b&&(d.value=b.ox+e.clientX-b.x,m.value=b.oy+e.clientY-b.y)}function j(){b=void 0,_.value=!1}return(t,n)=>(k(),re(ne,{to:`body`},[P(`div`,{ref_key:`layer`,ref:i,class:`at-image-preview`,role:`dialog`,"aria-modal":`true`,"aria-label":`图片预览`,tabindex:`-1`,onKeydown:ee,onWheel:n[12]||=oe(e=>S(e.deltaY<0?.1:-.1),[`prevent`])},[P(`div`,{class:`at-image-preview__backdrop`,onClick:n[0]||=e=>r(`close`)}),P(`header`,ht,[e.items.length>1?(k(),L(`span`,gt,M(e.index+1)+` / `+M(e.items.length),1)):z(``,!0),P(`div`,_t,[P(`button`,{type:`button`,class:`at-image-preview__tool`,"aria-label":`放大`,disabled:a.value>=5,onClick:n[1]||=e=>S(.25)},[N(w(v))],8,vt),P(`button`,{type:`button`,class:`at-image-preview__tool`,"aria-label":`缩小`,disabled:a.value<=.25,onClick:n[2]||=e=>S(-.25)},[N(w(y))],8,yt),P(`button`,{type:`button`,class:`at-image-preview__tool`,"aria-label":`向左旋转`,onClick:n[3]||=e=>o.value-=90},[N(w(c))]),P(`button`,{type:`button`,class:`at-image-preview__tool`,"aria-label":`向右旋转`,onClick:n[4]||=e=>o.value+=90},[N(w(c),{style:{transform:`scaleX(-1)`}})]),P(`button`,{type:`button`,class:`at-image-preview__tool`,"aria-label":`水平翻转`,onClick:n[5]||=e=>s.value*=-1},[N(w(p))]),P(`button`,{type:`button`,class:`at-image-preview__tool`,"aria-label":`垂直翻转`,onClick:n[6]||=e=>l.value*=-1},[N(w(p),{style:{transform:`rotate(90deg)`}})]),P(`span`,bt,M(Math.round(a.value*100))+`%`,1),P(`button`,{type:`button`,class:`at-image-preview__tool`,"aria-label":`重置`,onClick:x},`1:1`)]),P(`button`,{type:`button`,class:`at-image-preview__close`,"aria-label":`关闭预览`,onClick:n[7]||=e=>r(`close`)},[N(w(u),{size:22})])]),e.items.length>1?(k(),L(B,{key:0},[P(`button`,{type:`button`,class:`at-image-preview__nav at-image-preview__nav--prev`,"aria-label":`上一张`,onClick:n[8]||=e=>C(-1)},[N(w(f),{size:28})]),P(`button`,{type:`button`,class:`at-image-preview__nav at-image-preview__nav--next`,"aria-label":`下一张`,onClick:n[9]||=e=>C(1)},[N(w(h),{size:28})])],64)):z(``,!0),e.items[e.index]?(k(),L(`img`,{key:e.items[e.index].id,src:e.items[e.index].previewSrc??e.items[e.index].src,alt:``,draggable:!1,class:O([`at-image-preview__img`,{"at-image-preview__img--dragging":_.value,"at-image-preview__img--loaded":g.value,"at-image-preview__img--zoomable":a.value>1}]),style:D({transform:`translate(${d.value}px, ${m.value}px) scale(${a.value*s.value}, ${a.value*l.value}) rotate(${o.value}deg)`}),onLoad:n[10]||=e=>g.value=!0,onPointerdown:te,onPointermove:A,onPointerup:j,onPointercancel:j,onClick:n[11]||=oe(()=>{},[`stop`])},null,46,xt)):z(``,!0)],544)]))}}),Ct={key:0,class:`at-image__placeholder`,"aria-hidden":`true`},wt=[`src`,`alt`,`width`,`height`,`loading`],Tt=[`aria-label`],Et=[`aria-label`],Dt={class:`at-image__mask-content`},Ot=H({__name:`Image`,props:{src:{},alt:{default:``},preview:{type:[Boolean,Object],default:!0},fallback:{},placeholder:{type:Boolean,default:!0},fit:{default:`cover`},rounded:{type:[Boolean,Number],default:!0},width:{},height:{},loading:{default:`lazy`}},emits:[`previewOpen`,`load`,`error`,`update:visible`],setup(e,{emit:t}){let n=e,r=t,i=`image-${le()?.uid}`,a=te(mt,null),o=V(()=>n.preview?n.preview===!0?{}:n.preview:null),c=T(`loading`),l=T(!1),u=T(!1),d=V(()=>o.value?.visible??u.value);ee(()=>{n.src,c.value=`loading`,l.value=!1}),E([()=>n.src,()=>o.value?.src,()=>!!o.value],(e,t,r)=>{a&&o.value&&r(a.register({id:i,src:n.src,previewSrc:o.value.src}))},{immediate:!0});function f(e){o.value?.visible===void 0&&(u.value=e),o.value?.onVisibleChange?.(e),r(`update:visible`,e)}function p(){o.value&&!l.value&&c.value===`loaded`&&(r(`previewOpen`),a?a.open(i):f(!0))}function h(e){r(`error`,e),n.fallback&&!l.value?(l.value=!0,c.value=`loading`):c.value=`error`}return(t,n)=>(k(),L(`span`,{class:O([`at-image`,{"at-image--previewable":o.value&&c.value===`loaded`&&!l.value,"at-image--loading":c.value===`loading`,"at-image--error":c.value===`error`,"at-image--square":e.rounded===!1}]),style:D({width:typeof e.width==`number`?`${e.width}px`:e.width,height:typeof e.height==`number`?`${e.height}px`:e.height,borderRadius:typeof e.rounded==`number`?`${e.rounded}px`:e.rounded===!1?`0`:void 0})},[c.value===`loading`&&e.placeholder?(k(),L(`span`,Ct,[I(t.$slots,`placeholder`,{},()=>[n[2]||=P(`span`,{class:`at-image__skeleton`},null,-1)])])):z(``,!0),P(`img`,{src:l.value&&e.fallback?e.fallback:e.src,alt:e.alt,width:e.width,height:e.height,loading:e.loading,class:`at-image__img`,style:D({objectFit:e.fit}),onLoad:n[0]||=e=>{c.value=`loaded`,r(`load`,e)},onError:h},null,44,wt),c.value===`error`?(k(),L(`span`,{key:1,class:`at-image__broken`,role:`img`,"aria-label":e.alt||`图片加载失败`},[N(w(m))],8,Tt)):z(``,!0),o.value&&c.value===`loaded`&&!l.value?(k(),L(`button`,{key:2,type:`button`,class:`at-image__mask`,"aria-label":`预览${e.alt?`：${e.alt}`:`图片`}`,onClick:p},[P(`span`,Dt,[I(t.$slots,`mask`,{},()=>[N(w(s)),F(M(o.value.mask??`预览`),1)])])],8,Et)):z(``,!0),d.value&&!w(a)?(k(),re(St,{key:3,items:[{id:i,src:e.src,previewSrc:o.value?.src}],index:0,onClose:n[1]||=e=>f(!1)},null,8,[`items`])):z(``,!0)],6))}}),kt=H({__name:`ImagePreviewGroup`,props:{items:{},current:{},visible:{type:Boolean,default:void 0}},emits:[`update:current`,`change`,`update:visible`],setup(e,{emit:t}){let n=e,r=t,i=T([]),a=T(0),o=T(!1),s=V(()=>n.items?.map((e,t)=>typeof e==`string`?{id:`item-${t}`,src:e}:{id:`item-${t}`,...e})??i.value),c=V(()=>Math.min(n.current??a.value,Math.max(0,s.value.length-1))),l=V(()=>n.visible??o.value);function u(e){n.current===void 0&&(a.value=e),r(`update:current`,e),r(`change`,e)}function d(e){n.visible===void 0&&(o.value=e),r(`update:visible`,e)}return ie(mt,{register(e){let t=i.value.findIndex(t=>t.id===e.id);return t<0?i.value.push(e):i.value[t]=e,()=>{i.value=i.value.filter(t=>t.id!==e.id)}},open(e){u(Math.max(0,i.value.findIndex(t=>t.id===e))),d(!0)}}),(e,t)=>(k(),L(B,null,[I(e.$slots,`default`),l.value&&s.value.length?(k(),re(St,{key:0,items:s.value,index:c.value,onChange:u,onClose:t[0]||=e=>d(!1)},null,8,[`items`,`index`])):z(``,!0)],64))}}),At={type:String,strong:Boolean,italic:Boolean,underline:Boolean,delete:Boolean,code:Boolean,keyboard:Boolean,mark:Boolean,disabled:Boolean,copyable:[Boolean,Object],editable:[Boolean,Object],ellipsis:[Boolean,Object],level:{type:Number,default:1},href:String,target:String};function jt(e,t){return H({name:e,props:At,emits:[`change`,`copy`,`editStart`,`editEnd`,`editCancel`,`expand`],setup(n,{slots:r,emit:i}){let a=T(null),s=T(null),c=T(!1),u=T(!1),d=T(!1),f=T(``),p,m=!1,h=V(()=>n.editable?n.editable===!0?{}:n.editable:null),g=V(()=>n.copyable?n.copyable===!0?{}:n.copyable:null),v=V(()=>n.ellipsis?n.ellipsis===!0?{rows:1}:n.ellipsis:null);function y(){n.disabled||(f.value=a.value?.querySelector(`.at-typography__text`)?.textContent??a.value?.textContent??``,m=!1,h.value?.onStart?.(),i(`editStart`),h.value?.editing===void 0&&(c.value=!0),ce(()=>{s.value?.focus(),s.value?.setSelectionRange(f.value.length,f.value.length)}))}function b(e=!1){m||(m=!0,e?(h.value?.onCancel?.(),i(`editCancel`)):(h.value?.onChange?.(f.value),i(`change`,f.value)),h.value?.onEnd?.(),i(`editEnd`),c.value=!1)}async function x(){if(n.disabled)return;let e=g.value?.text??a.value?.querySelector(`.at-typography__text`)?.textContent??``;try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement(`textarea`);t.value=e,document.body.appendChild(t),t.select(),document.execCommand(`copy`),t.remove()}d.value=!0,g.value?.onCopy?.(),i(`copy`),clearTimeout(p),p=setTimeout(()=>{d.value=!1},2e3)}return A(()=>clearTimeout(p)),()=>{let p=v.value,m=p&&!u.value,S=[`at-typography`,n.type&&`at-typography--${n.type}`,n.disabled&&`at-typography--disabled`,m&&((p.rows??1)>1?`at-typography--clamp`:`at-typography--ellipsis`),e===`Paragraph`&&`at-typography--paragraph`,e===`Title`&&[`at-typography--title`,`at-typography--h${n.level}`],e===`Link`&&`at-typography--link`];if(h.value?.editing??c.value)return U(t===`a`?`span`:t,{ref:a,class:[...S,`at-typography--editing`]},[U(`textarea`,{ref:s,class:`at-typography__editor`,"aria-label":`编辑文本`,value:f.value,maxlength:h.value?.maxLength,rows:1,onInput:e=>{f.value=e.target.value},onBlur:()=>b(),onKeydown:e=>{(e.key===`Enter`&&!e.shiftKey||e.key===`Escape`)&&(e.preventDefault(),b(e.key===`Escape`))}})]);let C=r.default?.()??[];for(let[e,t,r]of[[n.code,`code`,`at-typography__code`],[n.keyboard,`kbd`,`at-typography__kbd`],[n.mark,`mark`,`at-typography__mark`],[n.delete,`del`,``],[n.underline,`u`,``],[n.italic,`i`,``],[n.strong,`strong`,``]])e&&(C=U(t,{class:r},[C]));let w=p?.expandable&&!u.value?U(`button`,{type:`button`,class:`at-typography__expand`,onClick:()=>{u.value=!0,p.onExpand?.(),i(`expand`)}},p.symbol??`展开`):null,T=h.value||g.value?U(`span`,{class:`at-typography__actions`},[h.value?U(`button`,{type:`button`,class:`at-typography__action`,"aria-label":`编辑`,disabled:n.disabled,onClick:y},[U(o)]):null,g.value?U(`button`,{type:`button`,class:[`at-typography__action`,d.value&&`at-typography__action--done`],"aria-label":g.value.tooltips?.[+!!d.value]??(d.value?`已复制`:`复制`),disabled:n.disabled,onClick:x},[U(d.value?l:_,{size:14})]):null]):null,E=U(`span`,{class:`at-typography__text`},[C]),D=m&&(p.rows??1)>1?{WebkitLineClamp:p.rows}:void 0;return U(e===`Title`?`h${n.level}`:t,{ref:a,class:S,style:D,href:n.disabled?void 0:n.href,target:n.target,rel:n.target===`_blank`?`noopener noreferrer`:void 0,"aria-disabled":n.disabled||void 0,tabindex:n.disabled&&t===`a`?-1:void 0,onClick:e=>{n.disabled&&t===`a`&&e.preventDefault()}},e===`Paragraph`?[U(`p`,{class:`at-typography__paragraph-text`,style:D},[E,w]),T]:[E,w,T])}}})}var Y=jt(`Text`,`span`),Mt=jt(`Title`,`h1`),Nt=jt(`Paragraph`,`div`),Pt=jt(`Link`,`a`),Ft=H({name:`Typography`,props:{as:{type:String,default:`article`}},setup:(e,{slots:t})=>()=>U(e.as,{class:`at-typography-root`},t.default?.())}),It={color:`rgba(0, 0, 0, 0.12)`,fontSize:16,fontWeight:`normal`,fontFamily:`sans-serif`,fontStyle:`normal`,textAlign:`center`};function Lt(e){return new Promise(t=>{let n=new window.Image;n.crossOrigin=`anonymous`,n.onload=()=>t(n),n.onerror=()=>t(null),n.src=e})}async function Rt({content:e,image:t,width:n,height:r,rotate:i,gap:a,font:o}){let s=window.devicePixelRatio||1,c=document.createElement(`canvas`),l=c.getContext(`2d`);if(!l)return null;let u={...It,...o},d=Array.isArray(e)?e:e?[e]:[],f=t?await Lt(t):null;l.font=`${u.fontStyle} normal ${u.fontWeight} ${u.fontSize}px/${u.fontSize*1.5}px ${u.fontFamily}`;let p=u.fontSize*1.5,m=n??0,h=r??0;f?(m=n??f.width,h=r??(n?f.height/f.width*n:f.height)):(n||(m=Math.max(...d.map(e=>l.measureText(e).width),0)),r||(h=p*d.length));let g=i*Math.PI/180,_=Math.abs(m*Math.cos(g))+Math.abs(h*Math.sin(g)),v=Math.abs(m*Math.sin(g))+Math.abs(h*Math.cos(g)),y=Math.ceil(_+a[0]),b=Math.ceil(v+a[1]);if(c.width=y*s,c.height=b*s,l.scale(s,s),l.translate(y/2,b/2),l.rotate(g),f)l.drawImage(f,-m/2,-h/2,m,h);else{l.font=`${u.fontStyle} normal ${u.fontWeight} ${u.fontSize}px/${p}px ${u.fontFamily}`,l.fillStyle=u.color,l.textAlign=u.textAlign,l.textBaseline=`middle`;let e=-((d.length-1)*p)/2;d.forEach((t,n)=>l.fillText(t,u.textAlign===`left`?-m/2:u.textAlign===`right`?m/2:0,e+n*p))}return{url:c.toDataURL(),tileWidth:y,tileHeight:b}}var zt=H({__name:`Watermark`,props:{content:{},image:{},width:{},height:{},rotate:{default:-22},zIndex:{default:9},gap:{default:()=>[100,100]},offset:{},font:{default:()=>({})},fullscreen:{type:Boolean}},setup(e){let t=e,n=T(null),r=T(null),i=T(null),a=0,o,s=V(()=>({position:`absolute`,inset:`0`,pointerEvents:`none`,display:`block`,opacity:`1`,visibility:`visible`,zIndex:String(t.zIndex),backgroundImage:i.value?`url(${i.value.url})`:``,backgroundSize:i.value?`${i.value.tileWidth}px ${i.value.tileHeight}px`:``,backgroundPosition:i.value?`${(t.offset?.[0]??t.gap[0]/2)-i.value.tileWidth/2}px ${(t.offset?.[1]??t.gap[1]/2)-i.value.tileHeight/2}px`:``,backgroundRepeat:`repeat`}));async function c(){let e=++a,n=await Rt(t);e===a&&(i.value=n)}function l(){n.value&&r.value&&typeof MutationObserver<`u`&&(o?.disconnect(),o=new MutationObserver(e=>{r.value&&n.value&&e.some(e=>Array.from(e.removedNodes).includes(r.value)||e.type===`attributes`&&e.target===r.value)&&(o?.disconnect(),r.value.className=`at-watermark__mark`,r.value.removeAttribute(`hidden`),Object.assign(r.value.style,s.value),n.value.contains(r.value)||n.value.appendChild(r.value),o?.observe(n.value,{childList:!0,attributes:!0,subtree:!0,attributeFilter:[`style`,`class`,`hidden`]}))}),o.observe(n.value,{childList:!0,attributes:!0,subtree:!0,attributeFilter:[`style`,`class`,`hidden`]}))}return C(()=>{c(),l(),E(()=>[t.content,t.image,t.width,t.height,t.rotate,t.gap,t.font],c,{deep:!0}),E(s,async()=>{o?.disconnect(),await ce(),l()})}),A(()=>{a++,o?.disconnect()}),(t,i)=>(k(),L(`div`,{ref_key:`root`,ref:n,class:O([`at-watermark`,{"at-watermark--fullscreen":e.fullscreen}])},[I(t.$slots,`default`),P(`div`,{ref_key:`mark`,ref:r,class:`at-watermark__mark`,style:D(s.value),"aria-hidden":`true`},null,4)],2))}}),Bt={class:`at-calendar__header`},Vt={class:`at-calendar__nav`},Ht=[`id`],Ut={class:`at-calendar__actions`},Wt={class:`at-calendar__mode`,role:`radiogroup`,"aria-label":`视图`},Gt=[`aria-checked`,`onClick`],Kt=[`aria-labelledby`],qt={class:`at-calendar__weekdays`,role:`row`},Jt=[`tabindex`,`aria-selected`,`aria-disabled`,`aria-current`,`aria-label`,`onClick`,`onFocus`],Yt={class:`at-calendar__date`},Xt={key:0,class:`at-calendar__content`},Zt={key:1,class:`at-calendar__dot-hint`,"aria-hidden":`true`},Qt=[`tabindex`,`aria-selected`,`aria-disabled`,`aria-label`,`onClick`,`onFocus`],$t={class:`at-calendar__date`},en={key:0,class:`at-calendar__content`},tn=H({__name:`Calendar`,props:{modelValue:{},defaultValue:{},mode:{},defaultMode:{default:`month`},fullscreen:{type:Boolean,default:!0},disabledDate:{},validRange:{},firstDayOfWeek:{default:1},weekdayLabels:{default:()=>[`日`,`一`,`二`,`三`,`四`,`五`,`六`]},showToday:{type:Boolean,default:!0}},emits:[`update:modelValue`,`change`,`update:mode`,`panelChange`,`select`],setup(e,{emit:t}){let n=e,r=t,i=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()),a=i(new Date),o=T(n.defaultValue??a),s=T(n.defaultMode),c=V(()=>n.modelValue??o.value),l=V(()=>n.mode??s.value),u=T(new Date(c.value.getFullYear(),c.value.getMonth(),1)),d=T(c.value),p=T(null),m=`at-calendar-${le()?.uid}`,g=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),_=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth(),v=(e,t)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+t),y=(e,t)=>new Date(e.getFullYear(),e.getMonth()+t,Math.min(e.getDate(),new Date(e.getFullYear(),e.getMonth()+t+1,0).getDate()));E(c,e=>{u.value=new Date(e.getFullYear(),e.getMonth(),1),d.value=e});function b(e){return!!n.disabledDate?.(e)||!!(n.validRange&&(i(e)<i(n.validRange[0])||i(e)>i(n.validRange[1])))}function S(e,t=l.value){u.value=new Date(e.getFullYear(),e.getMonth(),1),n.mode===void 0&&(s.value=t),r(`update:mode`,t),r(`panelChange`,e,t)}function C(e,t){b(e)||(n.modelValue===void 0&&(o.value=e),d.value=e,r(`update:modelValue`,e),r(`change`,e),r(`select`,e,{source:t}),_(e,u.value)||S(e))}let D=V(()=>{let e=new Date(u.value.getFullYear(),u.value.getMonth(),1),t=v(e,-((e.getDay()-n.firstDayOfWeek+7)%7));return Array.from({length:6},(e,n)=>Array.from({length:7},(e,r)=>v(t,n*7+r)))}),ee=V(()=>Array.from({length:12},(e,t)=>new Date(u.value.getFullYear(),t,1)));function te(e,t){return{type:t,today:t===`date`?g(e,a):_(e,a),selected:t===`date`?g(e,c.value):_(e,c.value),outside:t===`date`&&!_(e,u.value),disabled:b(e)}}async function A(e){let t,i=d.value;if(e.key===`Enter`||e.key===` `)e.preventDefault(),l.value===`year`?(S(i,`month`),r(`select`,i,{source:`month`})):C(i,`keyboard`);else{if([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key)){let n={ArrowLeft:-1,ArrowRight:1,ArrowUp:l.value===`month`?-7:-3,ArrowDown:l.value===`month`?7:3}[e.key]??0;t=l.value===`month`?v(i,n):y(i,n)}(e.key===`PageUp`||e.key===`PageDown`)&&(t=y(i,(e.key===`PageUp`?-1:1)*(l.value===`year`||e.shiftKey?12:1))),l.value===`month`&&(e.key===`Home`||e.key===`End`)&&(t=v(i,-((i.getDay()-n.firstDayOfWeek+7)%7)+(e.key===`End`?6:0))),t&&(e.preventDefault(),d.value=t,_(t,u.value)||S(t),await ce(),p.value?.querySelector(`[tabindex="0"]`)?.focus())}}return(t,n)=>(k(),L(`div`,{class:O([`at-calendar`,e.fullscreen?`at-calendar--fullscreen`:`at-calendar--card`,`at-calendar--${l.value}`])},[I(t.$slots,`header`,{value:u.value,mode:l.value,onChange:S,onModeChange:e=>S(u.value,e)},()=>[P(`header`,Bt,[P(`div`,Vt,[P(`button`,{type:`button`,class:`at-calendar__nav-button`,"aria-label":`上一年`,onClick:n[0]||=e=>S(y(u.value,-12))},[N(w(f),{size:16}),N(w(f),{size:16,class:`at-calendar__nav-double`})]),l.value===`month`?(k(),L(`button`,{key:0,type:`button`,class:`at-calendar__nav-button`,"aria-label":`上个月`,onClick:n[1]||=e=>S(y(u.value,-1))},[N(w(f),{size:16})])):z(``,!0),P(`strong`,{id:`${m}-label`,class:`at-calendar__label`,"aria-live":`polite`},M(u.value.getFullYear())+` 年`+M(l.value===`month`?` ${u.value.getMonth()+1} 月`:``),9,Ht),l.value===`month`?(k(),L(`button`,{key:1,type:`button`,class:`at-calendar__nav-button`,"aria-label":`下个月`,onClick:n[2]||=e=>S(y(u.value,1))},[N(w(h),{size:16})])):z(``,!0),P(`button`,{type:`button`,class:`at-calendar__nav-button`,"aria-label":`下一年`,onClick:n[3]||=e=>S(y(u.value,12))},[N(w(h),{size:16}),N(w(h),{size:16,class:`at-calendar__nav-double`})])]),P(`div`,Ut,[e.showToday?(k(),L(`button`,{key:0,type:`button`,class:`at-calendar__today`,onClick:n[4]||=e=>{C(w(a),`today`),S(w(a),`month`)}},`今天`)):z(``,!0),P(`div`,Wt,[(k(),L(B,null,x([`month`,`year`],e=>P(`button`,{key:e,type:`button`,role:`radio`,"aria-checked":l.value===e,class:O([`at-calendar__mode-option`,{"at-calendar__mode-option--active":l.value===e}]),onClick:t=>S(u.value,e)},M(e===`month`?`月`:`年`),11,Gt)),64))])])])]),l.value===`month`?(k(),L(`div`,{key:0,ref_key:`grid`,ref:p,class:`at-calendar__grid`,role:`grid`,"aria-labelledby":`${m}-label`,onKeydown:A},[P(`div`,qt,[(k(),L(B,null,x(7,t=>P(`span`,{key:t,class:`at-calendar__weekday`,role:`columnheader`},M(e.weekdayLabels[(t-1+e.firstDayOfWeek)%7]),1)),64))]),(k(!0),L(B,null,x(D.value,(n,r)=>(k(),L(`div`,{key:r,class:`at-calendar__week`,role:`row`},[(k(!0),L(B,null,x(n,n=>(k(),L(`div`,{key:n.getTime(),role:`gridcell`,tabindex:g(n,d.value)?0:-1,"aria-selected":g(n,c.value),"aria-disabled":b(n),"aria-current":g(n,w(a))?`date`:void 0,"aria-label":`${n.getFullYear()}年${n.getMonth()+1}月${n.getDate()}日`,class:O([`at-calendar__cell`,{"at-calendar__cell--selected":g(n,c.value),"at-calendar__cell--today":g(n,w(a)),"at-calendar__cell--outside":!_(n,u.value),"at-calendar__cell--disabled":b(n)}]),onClick:e=>C(n,`date`),onFocus:e=>d.value=n},[P(`span`,Yt,M(n.getDate()),1),e.fullscreen&&t.$slots.cell?(k(),L(`div`,Xt,[I(t.$slots,`cell`,{date:n,info:te(n,`date`)})])):t.$slots.cell?(k(),L(`span`,Zt)):z(``,!0)],42,Jt))),128))]))),128))],40,Kt)):(k(),L(`div`,{key:1,ref_key:`grid`,ref:p,class:`at-calendar__months`,role:`grid`,onKeydown:A},[(k(!0),L(B,null,x(ee.value,n=>(k(),L(`div`,{key:n.getMonth(),role:`gridcell`,tabindex:_(n,d.value)?0:-1,"aria-selected":_(n,c.value),"aria-disabled":b(n),"aria-label":`${n.getFullYear()}年${n.getMonth()+1}月`,class:O([`at-calendar__cell`,`at-calendar__cell--month`,{"at-calendar__cell--selected":_(n,c.value),"at-calendar__cell--today":_(n,w(a)),"at-calendar__cell--disabled":b(n)}]),onClick:e=>!b(n)&&(S(n,`month`),r(`select`,n,{source:`month`})),onFocus:e=>d.value=n},[P(`span`,$t,M([`一月`,`二月`,`三月`,`四月`,`五月`,`六月`,`七月`,`八月`,`九月`,`十月`,`十一月`,`十二月`][n.getMonth()]),1),e.fullscreen&&t.$slots.cell?(k(),L(`div`,en,[I(t.$slots,`cell`,{date:n,info:te(n,`month`)})])):z(``,!0)],42,Qt))),128))],544))],2))}}),X=H({name:`SplitterPanel`,props:{size:[Number,String],defaultSize:[Number,String],min:[Number,String],max:[Number,String],resizable:{type:Boolean,default:!0},collapsible:[Boolean,Object]},setup:(e,{slots:t})=>()=>U(`div`,{class:`at-splitter__panel`},t.default?.())});function nn(e){return e.flatMap(e=>e.type===B&&Array.isArray(e.children)?nn(e.children):e.type===X?[e]:[])}function Z(e){let t=e?.props??{};return{size:t.size,defaultSize:t.defaultSize??t[`default-size`],min:t.min,max:t.max,resizable:t.resizable!==!1,collapsible:t.collapsible}}var Q=(e,t)=>e===void 0?void 0:typeof e==`number`?e:e.endsWith(`%`)?parseFloat(e)/100*t:parseFloat(e),rn=H({name:`Splitter`,props:{layout:{type:String,default:`horizontal`},lazy:Boolean},emits:[`resizeStart`,`resize`,`resizeEnd`],setup(e,{slots:t,emit:n}){let r=T(null),i=T(0),a=T([]),o=T(null),s=T(null),c=T({}),l,u,d=[],p=()=>d,m=()=>e.layout===`horizontal`;function g(){if(!r.value)return;let e=p(),t=(m()?r.value.clientWidth:r.value.clientHeight)-8*Math.max(0,e.length-1);if(!(!t||i.value===t&&a.value.length===e.length)){if(i.value=t,a.value.length===e.length&&a.value.some(e=>e>0)){let e=a.value.reduce((e,t)=>e+t,0)||1;a.value=a.value.map(n=>n/e*t)}else{let n=e.map(e=>Q(Z(e).size??Z(e).defaultSize,t)),r=n.reduce((e,t)=>e+(t??0),0),i=n.filter(e=>e===void 0).length;a.value=n.map(e=>e??Math.max(0,t-r)/(i||1))}}}let _=()=>p().map((e,t)=>Q(Z(e).size,i.value)??a.value[t]??0);function v(e,t,n){let r=p(),a=Z(r[e]),o=Z(r[e+1]),s=n[e]+n[e+1],c=Math.max(Q(a.min,i.value)??0,s-(Q(o.max,i.value)??1/0)),l=Math.min(Q(a.max,i.value)??1/0,s-(Q(o.min,i.value)??0)),u=[...n];return u[e]=Math.max(c,Math.min(l,n[e]+t)),u[e+1]=s-u[e],u}function y(e){a.value=e,c.value={},n(`resize`,e)}function b(t,r){let i=p();if(t.button!==0||!Z(i[r]).resizable||!Z(i[r+1]).resizable)return;t.preventDefault(),u?.();let a=m()?t.clientX:t.clientY,c=_();s.value=r,n(`resizeStart`,c);let l=e=>v(r,(m()?e.clientX:e.clientY)-a,c),d=t=>{e.lazy?o.value=l(t):y(l(t))},f=e=>{let t=l(e);u?.(),o.value=null,s.value=null,y(t),n(`resizeEnd`,t)};u=()=>{window.removeEventListener(`pointermove`,d),window.removeEventListener(`pointerup`,f),window.removeEventListener(`pointercancel`,f)},window.addEventListener(`pointermove`,d),window.addEventListener(`pointerup`,f),window.addEventListener(`pointercancel`,f)}function x(e,t){let r=m()?`ArrowRight`:`ArrowDown`;if(![r,m()?`ArrowLeft`:`ArrowUp`].includes(e.key))return;e.preventDefault();let i=v(t,(e.key===r?1:-1)*(e.shiftKey?40:10),_());y(i),n(`resizeEnd`,i)}function w(e,t){let r=t===`start`?e:e+1,i=t===`start`?e+1:e,o=_(),s=c.value[r];if(s!==void 0){let e=Math.min(s,o[i]);o[r]=e,o[i]-=e;let t={...c.value};delete t[r],c.value=t}else c.value={...c.value,[r]:o[r]},o[i]+=o[r],o[r]=0;a.value=o,n(`resize`,o),n(`resizeEnd`,o)}return C(()=>{g(),typeof ResizeObserver<`u`&&(l=new ResizeObserver(g),r.value&&l.observe(r.value))}),S(g),A(()=>{u?.(),l?.disconnect()}),()=>{d=nn(t.default?.()??[]);let n=p(),a=o.value??_();return U(`div`,{ref:r,class:[`at-splitter`,`at-splitter--${e.layout}`,s.value!==null&&`at-splitter--resizing`]},n.flatMap((e,t)=>{let r=Z(e),o=Z(n[t+1]),l=r.collapsible===!0||typeof r.collapsible==`object`&&r.collapsible.end,u=o.collapsible===!0||typeof o.collapsible==`object`&&o.collapsible.start,d=r.resizable&&o.resizable,p=a[t]??0,g=ae(e,{key:e.key??t,class:c.value[t]===void 0?void 0:`at-splitter__panel--collapsed`,style:{flex:`0 0 ${p}px`,[m()?`width`:`height`]:`${p}px`}}),_=t<n.length-1?U(`div`,{class:[`at-splitter__bar`,s.value===t&&`at-splitter__bar--active`,!d&&`at-splitter__bar--static`],role:`separator`,"aria-orientation":m()?`vertical`:`horizontal`,"aria-valuenow":i.value?Math.round(p/i.value*100):0,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`调整第 ${t+1} 与第 ${t+2} 个面板`,tabindex:d?0:-1,onPointerdown:d?e=>b(e,t):void 0,onKeydown:d?e=>x(e,t):void 0},l||u?[U(`span`,{class:`at-splitter__collapse`},[l?U(`button`,{type:`button`,class:`at-splitter__collapse-button`,"aria-label":c.value[t]===void 0?`收起左侧面板`:`展开面板`,onPointerdown:e=>e.stopPropagation(),onClick:()=>w(t,`start`)},[U(f,{size:12,style:m()?void 0:{transform:`rotate(90deg)`}})]):null,u?U(`button`,{type:`button`,class:`at-splitter__collapse-button`,"aria-label":c.value[t+1]===void 0?`收起右侧面板`:`展开面板`,onPointerdown:e=>e.stopPropagation(),onClick:()=>w(t,`end`)},[U(h,{size:12,style:m()?void 0:{transform:`rotate(90deg)`}})]):null])]:[U(`span`,{class:`at-splitter__grip`,"aria-hidden":!0})]):null;return _?[g,_]:[g]}))}}}),an=H({name:`TypographyDemo`,props:[],setup:(e,{slots:t})=>{let n=j(`Atelier 设计系统`),r=G(n);return()=>W(Ft,{},{default:()=>[W(Mt,{level:2},{default:()=>[n.value]}),W(Nt,{},{default:()=>[`一套`,W(Y,{strong:!0},{default:()=>[`强调细节`]}),`的 React 组件库。`,W(Y,{type:`secondary`},{default:()=>[`次要文本`]}),`、`,W(Y,{type:`success`},{default:()=>[`成功`]}),`、`,W(Y,{type:`warning`},{default:()=>[`警告`]}),`、`,W(Y,{type:`danger`},{default:()=>[`危险`]}),`、`,W(Y,{code:!0},{default:()=>[`code`]}),`、`,W(Y,{keyboard:!0},{default:()=>[`⌘K`]}),`、`,W(Y,{mark:!0},{default:()=>[`高亮`]}),`、`,W(Y,{delete:!0},{default:()=>[`删除`]}),`、`,W(Y,{underline:!0},{default:()=>[`下划线`]}),`、`,W(Y,{italic:!0},{default:()=>[`斜体`]}),`与 `,W(Pt,{href:`#typography`},{default:()=>[`链接`]}),`。`]}),W(Nt,{copyable:!0},{default:()=>[`这段文本可以一键复制，点击右侧图标试试。`]}),W(Y,{editable:{onChange:r}},{default:()=>[n.value]}),W(Nt,{ellipsis:{rows:2,expandable:!0},type:`secondary`},{default:()=>[`Atelier UI 以可访问性为先：所有交互控件都具备语义角色、可见焦点与键盘操作。组件之间共享同一套主题变量、动效时长与缓动曲线，因此在不同页面之间切换时，界面保持一致的节奏感。你可以通过 ConfigProvider 覆盖主题 token，也可以直接使用 CSS 变量进行细粒度定制。这段文字默认折叠为两行，点击“展开”可以查看全部内容。`]}),W(Y,{ellipsis:!0,style:{maxWidth:240}},{default:()=>[`单行省略：这是一段很长很长的文本内容，超出宽度后会显示省略号。`]})]})}}),on=H({name:`StatisticDemo`,props:[],setup:(e,{slots:t})=>{let n=j(Date.now()+936e5+45e3).value;return()=>W(`div`,{class:`demo-stat-grid`},[W(q,{title:`活跃成员`,value:128430},{suffix:()=>`人`}),W(q,{title:`月度营收`,value:2395120.5,precision:2,trend:`up`,trendLabel:`较上月 +12.4%`},{prefix:()=>`¥`}),W(q,{title:`跳出率`,value:32.18,precision:2,trend:`down`,trendLabel:`较上周 -3.2%`},{suffix:()=>`%`}),W(q,{title:`加载中`,value:0,loading:!0},{}),W(Se,{title:`活动倒计时`,value:n,format:`D 天 HH:mm:ss`},{}),W(Se,{title:`毫秒级`,value:n,format:`HH:mm:ss.SS`,size:`sm`},{})])}}),sn=H({name:`ImageDemo`,props:[],setup:(e,{slots:t})=>()=>W(`div`,{class:`demo-stack`,style:{display:`grid`,gap:20}},[W(`div`,{class:`component-row`,style:{gap:16,alignItems:`flex-start`}},[W(Ot,{src:$[0],alt:`Aurora 项目封面`,width:240,height:150},{}),W(Ot,{src:`https://invalid.example/broken.png`,alt:`加载失败示例`,width:160,height:150},{}),W(Ot,{src:`https://invalid.example/broken-2.png`,fallback:$[3],alt:`失败后回退`,width:240,height:150},{})]),W(kt,{},{default:()=>[W(`div`,{class:`component-row`,style:{gap:12}},[$.map((e,t)=>W(Ot,{key:e,src:e,alt:`相册图片 ${t+1}`,width:120,height:80},{}))])]})])}),cn=H({name:`CarouselDemo`,props:[],setup:(e,{slots:t})=>{let n=j(null),r=j(0),i=G(r);return()=>W(`div`,{class:`demo-stack`,style:{display:`grid`,gap:18}},[W(pt,{ref:n,autoplay:!0,arrows:!0,aspectRatio:16/7,onChange:i,style:{maxWidth:640}},{default:()=>[$.map((e,t)=>W(`img`,{key:e,src:e,alt:`幻灯片 ${t+1}`},[]))]}),W(`div`,{class:`component-row`},[W(R,{size:`sm`,onClick:()=>n.value?.prev()},{default:()=>[`上一张`]}),W(R,{size:`sm`,onClick:()=>n.value?.next()},{default:()=>[`下一张`]}),W(`span`,{class:`demo-hint`},[`当前：`,r.value+1,` / `,$.length])]),W(`div`,{class:`demo-carousel-row`},[W(pt,{effect:`fade`,dotPosition:`right`,aspectRatio:4/3,style:{maxWidth:300}},{default:()=>[[`设计评审`,`发布计划`,`周会纪要`].map(e=>W(`div`,{key:e,class:`demo-slide`},[e]))]}),W(pt,{dotPosition:`top`,infinite:!1,arrows:!0,aspectRatio:4/3,style:{maxWidth:300}},{default:()=>[[`不循环`,`第二页`,`最后一页`].map(e=>W(`div`,{key:e,class:`demo-slide demo-slide--alt`},[e]))]})])])}}),ln=H({name:`CalendarDemo`,props:[],setup:(e,{slots:t})=>{let n=j(new Date(2026,9,27)),r=G(n),i={"2026-10-08":[`设计评审`],"2026-10-15":[`发布 v0.2`,`周会`],"2026-10-27":[`组件走查`]},a=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`;return()=>W(`div`,{class:`demo-stack`,style:{display:`grid`,gap:20}},[W(tn,{modelValue:n.value,onChange:r},{cell:e=>((e,t)=>t.type===`date`&&i[a(e)]?W(`ul`,{class:`demo-calendar-events`},[i[a(e)].map(e=>W(`li`,{key:e},[e]))]):null)(e.date,e.info)}),W(`div`,{class:`component-row`,style:{alignItems:`flex-start`,gap:20}},[W(tn,{fullscreen:!1,modelValue:n.value,onChange:r,disabledDate:e=>e.getDay()===0},{cell:e=>((e,t)=>t.type===`date`&&i[a(e)]?!0:null)(e.date,e.info)}),W(`span`,{class:`demo-hint`},[`已选择：`,n.value.toLocaleDateString(`zh-CN`),`（周日不可选）`])])])}}),un=H({name:`TreeDemo`,props:[],setup:(e,{slots:t})=>{let n=j([`logo`]),r=G(n),i=j([`tokens`]),a=G(i),o=j(``),s=G(o),c=j(yn),l=G(c),u=e=>new Promise(t=>setTimeout(()=>{l(t=>t.map(t=>t.key===e.key?{...t,children:[{key:`${e.key}-1`,title:`2024 年归档`},{key:`${e.key}-2`,title:`2025 年归档`}]}:t)),t()},700));return()=>W(`div`,{class:`demo-tree-row`},[W(`div`,{class:`demo-tree-frame`},[W(b,{treeData:yn,checkable:!0,defaultExpandAll:!0,checkedKeys:n.value,onCheck:e=>r(e),selectedKeys:i.value,onSelect:e=>a(e),label:`文件树（可勾选）`},{}),W(`span`,{class:`demo-hint`},[`已勾选：`,n.value.join(`, `)||`无`])]),W(`div`,{class:`demo-tree-frame`},[W(`input`,{class:`demo-plain-input`,placeholder:`搜索节点…`,value:o.value,onInput:e=>s(e.target.value),"aria-label":`搜索树节点`},[]),W(b,{treeData:c.value,showLine:!0,showIcon:!0,filterValue:o.value,loadData:u,defaultExpandedKeys:[`design`],blockNode:!0,label:`文件树（连线 + 异步加载）`},{icon:e=>((e,t)=>W(`span`,{"aria-hidden":`true`},[t.leaf?`📄`:t.expanded?`📂`:`📁`]))(e.node,{expanded:e.expanded,leaf:e.leaf})})])])}}),dn=H({name:`ListDemo`,props:[],setup:(n,{slots:r})=>{let i=j(!1),a=G(i);return()=>W(`div`,{class:`demo-stack`,style:{display:`grid`,gap:20}},[W(Je,{dataSource:bn,rowKey:`id`,bordered:!0,header:W(`div`,{class:`component-row`,style:{justifyContent:`space-between`}},[W(`span`,{},[`团队成员`]),W(R,{size:`sm`,onClick:()=>{a(!0),setTimeout(()=>a(!1),900)}},{default:()=>[`刷新`]})]),footer:`共 ${bn.length} 人`,loading:i.value,pagination:{pageSize:3}},{default:n=>(n=>W(et,{actions:[W(`button`,{key:`edit`,type:`button`},[`编辑`]),W(`button`,{key:`remove`,type:`button`},[`移除`])]},{extra:()=>W(e,{},{default:()=>[n.role]}),default:()=>[W(ot,{title:n.name,description:n.email},{avatar:()=>W(t,{name:n.name},{})})]}))(n.item)}),W(Je,{dataSource:bn.slice(0,4),rowKey:`id`,grid:{column:4,gutter:14,xs:1,sm:2}},{default:e=>(e=>W(et,{},{default:()=>[W(ot,{title:e.name,description:e.role},{avatar:()=>W(t,{name:e.name},{})})]}))(e.item)}),W(Je,{dataSource:[],bordered:!0,emptyText:`还没有成员，点击右上角邀请`},{default:e=>null})])}}),fn=H({name:`ListyDemo`,props:[],setup:(e,{slots:n})=>{let r=j(null),i=j(2e3),a=G(i),o=Array.from({length:i.value},(e,t)=>({id:t+1,name:`成员 ${t+1}`,note:t%7==0?`这一行内容更长一些，用于演示动态高度测量时不同行高的排版效果。`:`普通成员`}));return()=>W(`div`,{class:`demo-stack`,style:{display:`grid`,gap:14}},[W(`div`,{class:`component-row`},[W(R,{size:`sm`,onClick:()=>r.value?.scrollTo(999,`center`)},{default:()=>[`跳到第 1000 行`]}),W(R,{size:`sm`,onClick:()=>r.value?.scrollToTop()},{default:()=>[`回到顶部`]}),W(`span`,{class:`demo-hint`},[`共 `,i.value.toLocaleString(),` 行，仅渲染可见区域`])]),W(ut,{ref:r,items:o,itemKey:e=>e.id,height:300,itemHeight:48,dynamicHeight:!0,onEndReached:()=>a(e=>Math.min(e+500,1e4)),footer:i.value>=1e4?`已加载全部`:`滚动到底部自动加载更多`},{default:e=>(e=>W(`div`,{class:`demo-listy-row`},[W(t,{name:e.name,size:`sm`},{}),W(`div`,{},[W(`strong`,{},[e.name]),W(`div`,{class:`demo-hint`},[e.note])])]))(e.item)})])}}),pn=H({name:`MasonryDemo`,props:[],setup:(e,{slots:t})=>{let n=j(Array.from({length:9},(e,t)=>({id:t+1,height:80+t*53%120,color:$[t%$.length]}))),r=G(n);return()=>W(`div`,{class:`demo-stack`,style:{display:`grid`,gap:14}},[W(`div`,{class:`component-row`},[W(R,{size:`sm`,onClick:()=>r(e=>[...e,{id:e.length+1,height:80+e.length*53%120,color:$[e.length%$.length]}])},{default:()=>[`添加卡片`]}),W(R,{size:`sm`,onClick:()=>r(e=>e.slice(0,-1)),disabled:n.value.length===0},{default:()=>[`移除最后一张`]})]),W(dt,{dataSource:n.value,itemKey:e=>e.id,columns:{0:1,480:2,760:3},gap:14},{default:e=>(e=>W(`div`,{class:`demo-masonry-card`,style:{height:e.height,backgroundImage:`url(${e.color})`}},[W(`span`,{},[`卡片 `,e.id])]))(e.item)})])}}),mn=H({name:`QRCodeDemo`,props:[],setup:(e,{slots:t})=>{let n=j(`active`),r=G(n),i=j(`https://atelier.design/invite/team-aurora`),a=G(i);return()=>W(`div`,{class:`demo-stack`,style:{display:`grid`,gap:16}},[W(`input`,{class:`demo-plain-input`,style:{maxWidth:420},value:i.value,onInput:e=>a(e.target.value),"aria-label":`二维码内容`},[]),W(`div`,{class:`component-row`,style:{gap:20,alignItems:`flex-start`}},[W(Ue,{value:i.value},{}),W(Ue,{value:i.value,size:160,color:`#685cf6`},{icon:()=>$[0]}),W(Ue,{value:i.value,type:`canvas`,size:160,color:`#1d1f33`,bgColor:`#f7f8fb`,bordered:!1},{}),W(Ue,{value:i.value,status:n.value,onRefresh:()=>r(`active`),size:160},{})]),W(`div`,{class:`component-row`},[[`active`,`loading`,`expired`,`scanned`].map(e=>W(R,{key:e,size:`sm`,variant:n.value===e?`primary`:`secondary`,onClick:()=>r(e)},{default:()=>[e]}))])])}}),hn=H({name:`WatermarkDemo`,props:[],setup:(e,{slots:t})=>{let n=j(`Atelier · 内部预览`),r=G(n);return()=>W(`div`,{class:`demo-stack`,style:{display:`grid`,gap:14}},[W(`input`,{class:`demo-plain-input`,style:{maxWidth:320},value:n.value,onInput:e=>r(e.target.value),"aria-label":`水印文字`},[]),W(zt,{content:[n.value,`lin@atelier.design`],font:{color:`rgba(104, 92, 246, 0.16)`,fontSize:14},gap:[80,70]},{default:()=>[W(`div`,{class:`demo-watermark-body`},[W(Mt,{level:4},{default:()=>[`项目设置`]}),W(Nt,{type:`secondary`},{default:()=>[`水印由 canvas 生成并平铺在内容之上；通过开发者工具删除或隐藏水印节点时会被自动恢复。`]}),W(`div`,{class:`component-row`},[W(R,{variant:`primary`},{default:()=>[`保存`]}),W(R,{},{default:()=>[`取消`]})])])]})])}}),gn=H({name:`SplitterDemo`,props:[],setup:(e,{slots:t})=>{let n=j([]),r=G(n);return()=>W(`div`,{class:`demo-stack`,style:{display:`grid`,gap:14}},[W(rn,{style:{height:240},onResizeEnd:r},{default:()=>[W(X,{defaultSize:`30%`,min:`18%`,max:`50%`,collapsible:!0},{default:()=>[W(`strong`,{},[`导航`]),W(`p`,{class:`demo-hint`},[`可拖拽、可折叠，最小 18%，最大 50%。`])]}),W(X,{},{default:()=>[W(`strong`,{},[`内容区`]),W(`p`,{class:`demo-hint`},[`按住分隔条拖动，或聚焦分隔条后使用方向键（Shift 加速）。`])]}),W(X,{defaultSize:200,min:120,resizable:!1},{default:()=>[W(`strong`,{},[`属性面板`]),W(`p`,{class:`demo-hint`},[`resizable=false，宽度固定。`])]})]}),W(rn,{layout:`vertical`,style:{height:260},lazy:!0},{default:()=>[W(X,{defaultSize:`40%`,min:60},{default:()=>[W(`strong`,{},[`编辑器`]),W(`p`,{class:`demo-hint`},[`垂直布局，lazy 模式在松开时才应用新尺寸。`])]}),W(X,{collapsible:!0},{default:()=>[W(`strong`,{},[`控制台`]),W(`p`,{class:`demo-hint`},[`可折叠面板。`])]})]}),W(`span`,{class:`demo-hint`},[n.value.length?`当前宽度：${n.value.map(e=>Math.round(e)).join(` / `)} px`:`拖动上方分隔条查看尺寸回调`])])}}),_n=H({name:`DataDisplayPage`,props:[`id`],setup:(e,{slots:t})=>{let{id:n}=e,r=xn.find(e=>e.id===n);return r?()=>W(B,null,[W(ue,{eyebrow:r.eyebrow,title:r.title,description:r.description,badge:r.badge},{}),r.examples.map(e=>W(d,{key:e.title,title:e.title,description:e.description,code:e.code},{default:()=>[e.preview]})),W(g,{rows:r.rows},{})]):()=>null}}),vn=(e,t,n)=>`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400"><rect width="640" height="400" fill="${e}"/><circle cx="500" cy="120" r="70" fill="${t}" opacity=".85"/><path d="M0 320 170 170l130 110 100-80 240 190H0Z" fill="${t}"/><text x="32" y="60" fill="#fff" font-family="sans-serif" font-size="28" font-weight="700">${n}</text></svg>`)}`,$=[vn(`#685cf6`,`#b6b0ff`,`Aurora`),vn(`#2f9472`,`#9fdcc5`,`Meadow`),vn(`#c98a29`,`#f3d8a3`,`Dune`),vn(`#222438`,`#6f78a8`,`Night`)],yn=[{key:`design`,title:`设计部`,children:[{key:`brand`,title:`品牌项目`,children:[{key:`logo`,title:`Logo 规范.fig`},{key:`poster`,title:`海报模板.fig`}]},{key:`ux`,title:`体验规范`,children:[{key:`tokens`,title:`设计 Token.json`},{key:`motion`,title:`动效指南.md`,disabled:!0}]}]},{key:`engineering`,title:`工程部`,children:[{key:`web`,title:`Web 前端`},{key:`mobile`,title:`移动端`}]},{key:`archive`,title:`归档（空）`,isLeaf:!1}],bn=[{id:`lin`,name:`林知夏`,role:`产品设计师`,email:`lin@atelier.design`},{id:`chen`,name:`陈一川`,role:`前端工程师`,email:`chen@atelier.design`},{id:`zhou`,name:`周禾`,role:`产品经理`,email:`zhou@atelier.design`},{id:`shen`,name:`沈星河`,role:`后端工程师`,email:`shen@atelier.design`},{id:`su`,name:`苏晚`,role:`测试工程师`,email:`su@atelier.design`}],xn=[{id:`typography`,title:`Typography 排版`,icon:`T`,group:`基础组件`,eyebrow:`GENERAL`,badge:`Typography`,description:`标题、段落、文本与链接的统一排版，支持复制、编辑、省略展开与多种语义样式。`,examples:[{title:`标题、文本样式、复制、编辑与省略`,preview:W(an,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Link, Paragraph, Text, Title, Typography } from "atelier-ui-vue/typography";
export const Intro = defineComponent({
    "name": "Intro",
    "props": [],
    "setup": (props, { slots }) => {
        const name = vueRef('Atelier 设计系统');
        const setName = refSetter(name);
        return () => (vnode(Typography, {}, {
            "default": () => [
                vnode(Title, {
                    "level": 2
                }, {
                    "default": () => [
                        name.value
                    ]
                }),
                vnode(Paragraph, {}, {
                    "default": () => [
                        "一套",
                        vnode(Text, {
                            "strong": true
                        }, {
                            "default": () => [
                                "强调细节"
                            ]
                        }),
                        "的组件库。",
                        vnode(Text, {
                            "type": "secondary"
                        }, {
                            "default": () => [
                                "次要"
                            ]
                        }),
                        "、",
                        vnode(Text, {
                            "code": true
                        }, {
                            "default": () => [
                                "code"
                            ]
                        }),
                        "、",
                        vnode(Text, {
                            "keyboard": true
                        }, {
                            "default": () => [
                                "⌘K"
                            ]
                        }),
                        "、",
                        vnode(Text, {
                            "mark": true
                        }, {
                            "default": () => [
                                "高亮"
                            ]
                        }),
                        " 与 ",
                        vnode(Link, {
                            "href": "#"
                        }, {
                            "default": () => [
                                "链接"
                            ]
                        }),
                        "。"
                    ]
                }),
                vnode(Paragraph, {
                    "copyable": true
                }, {
                    "default": () => [
                        "这段文本可以一键复制。"
                    ]
                }),
                vnode(Text, {
                    "editable": { onChange: setName }
                }, {
                    "default": () => [
                        name.value
                    ]
                }),
                vnode(Paragraph, {
                    "ellipsis": { rows: 2, expandable: true }
                }, {
                    "default": () => [
                        "很长的段落……"
                    ]
                }),
                vnode(Text, {
                    "ellipsis": true,
                    "style": { maxWidth: 240 }
                }, {
                    "default": () => [
                        "单行省略文本"
                    ]
                })
            ]
        }));
    }
});
`}],rows:[[`Title.level`,`1 | 2 | 3 | 4 | 5`,`1`],[`type`,`'secondary' | 'success' | 'warning' | 'danger'`,`—`],[`strong / italic / underline / delete`,`boolean`,`false`],[`code / keyboard / mark`,`boolean`,`false`],[`disabled`,`boolean`,`false`],[`copyable`,`boolean | { text?, onCopy?, tooltips? }`,`false`],[`editable`,`boolean | { editing?, onStart?, onChange?, onCancel?, onEnd?, maxLength? }`,`false`],[`ellipsis`,`boolean | { rows?, expandable?, symbol?, onExpand?, tooltip? }`,`false`],[`Link.href / target`,`string`,`—`],[`Typography.as`,`'article' | 'section' | 'div'`,`'article'`]]},{id:`statistic`,title:`Statistic 统计数值`,icon:`↗`,group:`数据展示`,eyebrow:`DATA DISPLAY`,badge:`Statistic`,description:`突出展示关键指标，支持千分位、精度、前后缀、趋势标识、加载骨架以及倒计时。`,examples:[{title:`数值、趋势与倒计时`,preview:W(on,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Countdown, Statistic } from "atelier-ui-vue/statistic";
export const Metrics = defineComponent({
    "name": "Metrics",
    "props": [],
    "setup": (props, { slots }) => {
        const deadline = Date.now() + 1000 * 60 * 60 * 26;
        return () => (vnode(Fragment, null, [
            vnode(Statistic, {
                "title": "活跃成员",
                "value": 128430
            }, {
                "suffix": () => "人"
            }),
            vnode(Statistic, {
                "title": "月度营收",
                "value": 2395120.5,
                "precision": 2,
                "trend": "up",
                "trendLabel": "较上月 +12.4%"
            }, {
                "prefix": () => "¥"
            }),
            vnode(Statistic, {
                "title": "跳出率",
                "value": 32.18,
                "precision": 2,
                "trend": "down"
            }, {
                "suffix": () => "%"
            }),
            vnode(Statistic, {
                "title": "加载中",
                "value": 0,
                "loading": true
            }, {}),
            vnode(Countdown, {
                "title": "活动倒计时",
                "value": deadline,
                "format": "D 天 HH:mm:ss",
                "onFinish": () => console.log('结束')
            }, {})
        ]));
    }
});
`}],rows:[[`title`,`VNodeChild / slot`,`—`],[`value`,`number | string`,`required`],[`precision`,`number`,`—`],[`groupSeparator / decimalSeparator`,`string`,`',' / '.'`],[`prefix / suffix`,`VNodeChild / slot`,`—`],[`formatter`,`(value) => VNodeChild`,`—`],[`loading`,`boolean`,`false`],[`trend`,`'up' | 'down'`,`—`],[`trendLabel`,`VNodeChild / slot`,`—`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`valueStyle`,`CSSProperties`,`—`],[`Countdown.value`,`number | Date`,`required`],[`Countdown.format`,`string（D / H / m / s / S）`,`'HH:mm:ss'`],[`Countdown.onFinish / onChange`,`() => void / (ms) => void`,`—`]]},{id:`image`,title:`Image 图片`,icon:`▧`,group:`数据展示`,eyebrow:`DATA DISPLAY`,badge:`Image`,description:`带骨架占位、失败回退与全屏预览的图片组件，预览支持缩放、旋转、翻转、拖拽与相册切换。`,examples:[{title:`占位、回退与相册预览`,description:`点击任意图片打开预览层；相册内可用 ← → 切换，滚轮缩放，Esc 关闭。`,preview:W(sn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Image, ImagePreviewGroup } from "atelier-ui-vue/image";
export const Gallery = defineComponent({
    "name": "Gallery",
    "props": [
        "covers"
    ],
    "setup": (props, { slots }) => {
        const { covers } = props;
        return () => (vnode(Fragment, null, [
            vnode(Image, {
                "src": covers[0],
                "alt": "项目封面",
                "width": 240,
                "height": 150
            }, {}),
            vnode(Image, {
                "src": "/broken.png",
                "fallback": covers[1],
                "alt": "失败后回退",
                "width": 240,
                "height": 150
            }, {}),
            vnode(ImagePreviewGroup, {}, {
                "default": () => [
                    covers.map((cover: string, index: number) => vnode(Image, {
                        "key": cover,
                        "src": cover,
                        "alt": \`图片 \${index + 1}\`,
                        "width": 120,
                        "height": 80
                    }, {}))
                ]
            })
        ]));
    }
});
`}],rows:[[`src`,`string`,`required`],[`alt`,`string`,`''`],[`preview`,`boolean | { src?, mask?, visible?, onVisibleChange? }`,`true`],[`fallback`,`string`,`—`],[`placeholder`,`boolean | VNodeChild`,`true`],[`fit`,`CSS object-fit`,`'cover'`],[`rounded`,`boolean | number`,`true`],[`loading`,`'lazy' | 'eager'`,`'lazy'`],[`onPreviewOpen`,`() => void`,`—`],[`PreviewGroup.items`,`Array<string | { src, previewSrc? }>`,`子元素自动收集`],[`PreviewGroup.current / onChange`,`number / (index) => void`,`—`],[`PreviewGroup.visible / onVisibleChange`,`boolean / (visible) => void`,`—`]]},{id:`carousel`,title:`Carousel 走马灯`,icon:`▭`,group:`数据展示`,eyebrow:`DATA DISPLAY`,badge:`Carousel`,description:`滑动 / 淡入两种切换效果，支持自动播放（悬停暂停）、拖拽、箭头、指示点位置与命令式控制。`,examples:[{title:`自动播放、拖拽、淡入与非循环`,preview:W(cn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Carousel, type CarouselRef } from "atelier-ui-vue/carousel";
export const Banner = defineComponent({
    "name": "Banner",
    "props": [
        "covers"
    ],
    "setup": (props, { slots }) => {
        const { covers } = props;
        const ref = vueRef<CarouselRef | null>(null);
        return () => (vnode(Fragment, null, [
            vnode(Carousel, {
                "ref": ref,
                "autoplay": true,
                "arrows": true,
                "aspectRatio": 16 / 7,
                "onChange": (index: number) => console.log(index)
            }, {
                "default": () => [
                    covers.map((cover: string) => vnode("img", {
                        "key": cover,
                        "src": cover,
                        "alt": ""
                    }, []))
                ]
            }),
            vnode("button", {
                "type": "button",
                "onClick": () => ref.value?.next()
            }, [
                "下一张"
            ]),
            vnode(Carousel, {
                "effect": "fade",
                "dotPosition": "right",
                "aspectRatio": 4 / 3
            }, {
                "default": () => [
                    vnode("div", {}, [
                        "设计评审"
                    ]),
                    vnode("div", {}, [
                        "发布计划"
                    ])
                ]
            })
        ]));
    }
});
`}],rows:[[`children / items`,`VNodeChild / VNodeChild[]`,`—`],[`autoplay`,`boolean`,`false`],[`autoplaySpeed`,`number (ms)`,`4000`],[`pauseOnHover`,`boolean`,`true`],[`effect`,`'slide' | 'fade'`,`'slide'`],[`dots`,`boolean`,`true`],[`dotPosition`,`'bottom' | 'top' | 'left' | 'right'`,`'bottom'`],[`arrows`,`boolean`,`false`],[`infinite`,`boolean`,`true`],[`draggable`,`boolean`,`true`],[`speed`,`number (ms)`,`450`],[`current / defaultCurrent`,`number`,`— / 0`],[`onChange / beforeChange / afterChange`,`(index) => void`,`—`],[`aspectRatio`,`number`,`—`],[`ref`,`{ next, prev, goTo }`,`—`]]},{id:`calendar`,title:`Calendar 日历`,icon:`▦`,group:`数据展示`,eyebrow:`DATA DISPLAY`,badge:`Calendar`,description:`月 / 年两种面板，支持全屏日程单元格、紧凑卡片、禁用日期、有效范围与完整键盘导航。`,examples:[{title:`全屏日程与紧凑卡片`,description:`方向键移动焦点，PageUp / PageDown 切换月份，Enter 选择。`,preview:W(ln,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import type { CalendarCellInfo } from 'atelier-ui-vue';
import { Calendar } from "atelier-ui-vue/calendar";
export const Schedule = defineComponent({
    "name": "Schedule",
    "props": [],
    "setup": (props, { slots }) => {
        const date = vueRef(new Date(2026, 9, 27));
        const setDate = refSetter(date);
        return () => (vnode(Fragment, null, [
            vnode(Calendar, {
                "modelValue": date.value,
                "onChange": setDate
            }, {
                "cell": (scope: {
                    date: Date;
                    info: CalendarCellInfo;
                }) => ((value: Date, info: CalendarCellInfo) => info.type === 'date' && events[key(value)] ? vnode("ul", {}, [
                    events[key(value)].map((item: string) => vnode("li", {
                        "key": item
                    }, [
                        item
                    ]))
                ]) : null)(scope.date, scope.info)
            }),
            vnode(Calendar, {
                "fullscreen": false,
                "modelValue": date.value,
                "onChange": setDate,
                "disabledDate": (value: Date) => value.getDay() === 0
            }, {})
        ]));
    }
});
const events: Record<string, string[]> = { '2026-10-15': ['发布 v0.2', '周会'] };
const key = (date: Date) => date.toISOString().slice(0, 10);
`}],rows:[[`value / defaultValue`,`Date`,`— / 今天`],[`onChange`,`(date) => void`,`—`],[`onSelect`,`(date, { source }) => void`,`—`],[`onPanelChange`,`(date, mode) => void`,`—`],[`mode / defaultMode`,`'month' | 'year'`,`— / 'month'`],[`fullscreen`,`boolean`,`true`],[`cellRender`,`(date, info) => VNodeChild`,`—`],[`disabledDate`,`(date) => boolean`,`—`],[`validRange`,`[Date, Date]`,`—`],[`firstDayOfWeek`,`0 | 1`,`1`],[`weekdayLabels`,`string[]`,`日一二三四五六`],[`showToday`,`boolean`,`true`],[`headerRender`,`(info) => VNodeChild`,`—`]]},{id:`tree`,title:`Tree 树形控件`,icon:`⋮`,group:`数据展示`,eyebrow:`DATA DISPLAY`,badge:`Tree`,description:`层级数据的展开、选择与级联勾选，支持连线、图标、搜索高亮、异步加载与键盘导航。`,examples:[{title:`可勾选、连线 + 图标、搜索与异步加载`,description:`左侧为级联勾选；右侧输入关键字会高亮并自动展开，“归档”节点在展开时异步加载子节点。`,preview:W(un,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Tree, type TreeNode } from "atelier-ui-vue/tree";
export const FolderTree = defineComponent({
    "name": "FolderTree",
    "props": [],
    "setup": (props, { slots }) => {
        const checked = vueRef<string[]>([]);
        const setChecked = refSetter(checked);
        const tree = vueRef(data);
        const setTree = refSetter(tree);
        const loadData = (node: TreeNode) => fetch(\`/api/folders/\${node.key}\`).then((res: Response) => res.json()).then((children) => {
            setTree((current: TreeNode[]) => current.map((item: TreeNode) => (item.key === node.key ? { ...item, children } : item)));
        });
        return () => (vnode(Fragment, null, [
            vnode(Tree, {
                "treeData": tree.value,
                "checkable": true,
                "defaultExpandAll": true,
                "checkedKeys": checked.value,
                "onCheck": (keys: string[]) => setChecked(keys)
            }, {}),
            vnode(Tree, {
                "treeData": tree.value,
                "showLine": true,
                "showIcon": true,
                "loadData": loadData,
                "filterValue": "品牌",
                "blockNode": true
            }, {})
        ]));
    }
});
const data: TreeNode[] = [
    { key: 'design', title: '设计部', children: [{ key: 'brand', title: '品牌项目' }, { key: 'ux', title: '体验规范' }] },
    { key: 'archive', title: '归档', isLeaf: false },
];
`}],rows:[[`treeData`,`TreeNode[]`,`required`],[`checkable / checkStrictly`,`boolean`,`false`],[`selectable / multiple`,`boolean`,`true / false`],[`expandedKeys / defaultExpandedKeys / defaultExpandAll`,`string[] / string[] / boolean`,`—`],[`onExpand`,`(keys, { expanded, node }) => void`,`—`],[`selectedKeys / defaultSelectedKeys`,`string[]`,`—`],[`onSelect`,`(keys, { selected, node }) => void`,`—`],[`checkedKeys / defaultCheckedKeys`,`string[]`,`—`],[`onCheck`,`(keys, { checked, node, halfCheckedKeys }) => void`,`—`],[`showLine / showIcon`,`boolean`,`false`],[`icon`,`VNodeChild | (node, { expanded, leaf }) => VNodeChild`,`—`],[`switcherIcon`,`VNodeChild / slot`,`›`],[`titleRender`,`(node) => VNodeChild`,`—`],[`filterValue`,`string`,`—`],[`loadData`,`(node) => Promise<void>`,`—`],[`expandAction`,`'click' | false`,`false`],[`blockNode`,`boolean`,`false`],[`TreeNode`,`{ key, title, children?, disabled?, disableCheckbox?, selectable?, checkable?, icon?, isLeaf? }`,`—`]]},{id:`list`,title:`List 列表`,icon:`☰`,group:`数据展示`,eyebrow:`DATA DISPLAY`,badge:`List`,description:`通用列表容器：头尾、分割线、尺寸、加载骨架、分页、栅格布局与空状态。`,examples:[{title:`分页列表、栅格与空状态`,preview:W(dn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Avatar } from "atelier-ui-vue/avatar";
import { List, ListItem, ListItemMeta } from "atelier-ui-vue/list";
import { Tag } from "atelier-ui-vue/tag";
export const Members = defineComponent({
    "name": "Members",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Fragment, null, [
            vnode(List, {
                "dataSource": members,
                "rowKey": "id",
                "bordered": true,
                "header": "团队成员",
                "pagination": { pageSize: 3 }
            }, {
                "default": (scope: {
                    item: { id: string; name: string; role: string; email: string; };
                }) => ((member: { id: string; name: string; role: string; email: string; }) => (vnode(ListItem, {
                    "actions": [vnode("button", {
                            "key": "edit",
                            "type": "button"
                        }, [
                            "编辑"
                        ])]
                }, {
                    "extra": () => vnode(Tag, {}, {
                        "default": () => [
                            member.role
                        ]
                    }),
                    "default": () => [
                        vnode(ListItemMeta, {
                            "title": member.name,
                            "description": member.email
                        }, {
                            "avatar": () => vnode(Avatar, {
                                "name": member.name
                            }, {})
                        })
                    ]
                })))(scope.item)
            }),
            vnode(List, {
                "dataSource": members,
                "rowKey": "id",
                "grid": { column: 4, gutter: 14, xs: 1, sm: 2 }
            }, {
                "default": (scope: {
                    item: { id: string; name: string; role: string; email: string; };
                }) => ((member: { id: string; name: string; role: string; email: string; }) => vnode(ListItem, {}, {
                    "default": () => [
                        member.name
                    ]
                }))(scope.item)
            })
        ]));
    }
});
const members = [{ id: 'lin', name: '林知夏', role: '产品设计师', email: 'lin@atelier.design' }];
`}],rows:[[`dataSource`,`T[]`,`required`],[`renderItem`,`(item, index) => VNodeChild`,`required`],[`rowKey`,`keyof T | (item, index) => Key`,`index`],[`header / footer`,`VNodeChild / slot`,`—`],[`bordered / split`,`boolean`,`false / true`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`loading / loadingRows`,`boolean / number`,`false / 3`],[`emptyText`,`VNodeChild / slot`,`'暂无数据'`],[`grid`,`{ column?, gutter?, xs?, sm?, md?, lg? }`,`—`],[`pagination`,`boolean | { pageSize?, current?, onChange?, position?, align? }`,`false`],[`height / onEndReached`,`number / () => void`,`—`],[`ListItem.actions / extra`,`VNodeChild[] / VNodeChild`,`—`],[`ListItemMeta.avatar / title / description`,`VNodeChild / slot`,`—`]]},{id:`listy`,title:`Listy 虚拟列表`,icon:`≡`,group:`数据展示`,eyebrow:`DATA DISPLAY`,badge:`Listy`,description:`只渲染可视区域的长列表，支持固定 / 动态行高、滚动到指定行、触底加载与页脚。`,examples:[{title:`一万行数据的虚拟滚动`,preview:W(fn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Listy, type ListyRef } from "atelier-ui-vue/listy";
export const BigList = defineComponent({
    "name": "BigList",
    "props": [],
    "setup": (props, { slots }) => {
        const ref = vueRef<ListyRef | null>(null);
        const count = vueRef(2000);
        const setCount = refSetter(count);
        const items = Array.from({ length: count.value }, (_: unknown, index: number) => ({ id: index + 1, name: \`成员 \${index + 1}\` }));
        return () => (vnode(Fragment, null, [
            vnode("button", {
                "type": "button",
                "onClick": () => ref.value?.scrollTo(999, 'center')
            }, [
                "跳到第 1000 行"
            ]),
            vnode(Listy, {
                "ref": ref,
                "items": items,
                "itemKey": (item: { id: number; name: string; }) => item.id,
                "height": 300,
                "itemHeight": 48,
                "dynamicHeight": true,
                "onEndReached": () => setCount((value: number) => value + 500)
            }, {
                "default": (scope: {
                    item: { id: number; name: string; };
                }) => ((item: { id: number; name: string; }) => vnode("strong", {}, [
                    item.name
                ]))(scope.item)
            })
        ]));
    }
});
`}],rows:[[`items`,`T[]`,`required`],[`renderItem`,`(item, index) => VNodeChild`,`required`],[`itemKey`,`(item, index) => Key`,`index`],[`height`,`number`,`320`],[`itemHeight`,`number`,`44`],[`dynamicHeight`,`boolean`,`false`],[`overscan`,`number`,`4`],[`onEndReached / endReachedThreshold`,`() => void / number`,`— / 120`],[`onVisibleRangeChange`,`({ start, end }) => void`,`—`],[`emptyText / footer`,`VNodeChild / slot`,`—`],[`split`,`boolean`,`true`],[`ref`,`{ scrollTo(index, align), scrollToTop() }`,`—`]]},{id:`masonry`,title:`Masonry 瀑布流`,icon:`▤`,group:`数据展示`,eyebrow:`DATA DISPLAY`,badge:`Masonry`,description:`基于测量的真正瀑布流：按最短列放置，响应式列数，增删卡片时平滑重排。`,examples:[{title:`响应式列数与动态增删`,preview:W(pn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Masonry } from "atelier-ui-vue/masonry";
export const Gallery = defineComponent({
    "name": "Gallery",
    "props": [
        "cards"
    ],
    "setup": (props, { slots }) => {
        const { cards } = props;
        return () => (vnode(Masonry, {
            "dataSource": cards,
            "itemKey": (card: { id: number; height: number; }) => card.id,
            "columns": { 0: 1, 480: 2, 760: 3 },
            "gap": 14
        }, {
            "default": (scope: {
                item: { id: number; height: number; };
            }) => ((card: { id: number; height: number; }) => vnode("div", {
                "style": { height: card.height }
            }, [
                "卡片 ",
                card.id
            ]))(scope.item)
        }));
    }
});
`}],rows:[[`children / dataSource + renderItem`,`VNodeChild / T[] + (item, index) => VNodeChild`,`—`],[`itemKey`,`(item, index) => Key`,`index`],[`columns`,`number | Record<minWidth, number>`,`3`],[`gap`,`number | [column, row]`,`16`],[`sequential`,`boolean`,`false`],[`onLayout`,`({ columns, height }) => void`,`—`]]},{id:`qrcode`,title:`QRCode 二维码`,icon:`▣`,group:`数据展示`,eyebrow:`DATA DISPLAY`,badge:`QRCode`,description:`内置零依赖的 QR 编码器（Byte 模式，1–40 版本，L/M/Q/H 纠错），支持 SVG / Canvas 渲染、中心 Logo 与状态遮罩。`,examples:[{title:`渲染方式、Logo 与状态`,description:`修改输入框内容会即时重新编码，可直接用手机扫描验证。`,preview:W(mn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { QRCode } from "atelier-ui-vue/qrcode";
export const Invite = defineComponent({
    "name": "Invite",
    "props": [
        "url",
        "logo"
    ],
    "setup": (props, { slots }) => {
        const { url, logo } = props;
        return () => (vnode(Fragment, null, [
            vnode(QRCode, {
                "value": url
            }, {}),
            vnode(QRCode, {
                "value": url,
                "color": "#685cf6"
            }, {
                "icon": () => logo
            }),
            vnode(QRCode, {
                "value": url,
                "type": "canvas",
                "bgColor": "#f7f8fb",
                "bordered": false
            }, {}),
            vnode(QRCode, {
                "value": url,
                "status": "expired",
                "onRefresh": () => console.log('refresh')
            }, {})
        ]));
    }
});
`}],rows:[[`value`,`string`,`required`],[`size`,`number`,`160`],[`type`,`'svg' | 'canvas'`,`'svg'`],[`errorLevel`,`'L' | 'M' | 'Q' | 'H'`,`'M'（有 icon 时 'H'）`],[`color / bgColor`,`string`,`'#222438' / '#ffffff'`],[`icon / iconSize`,`string / number`,`— / size × 0.22`],[`bordered`,`boolean`,`true`],[`margin`,`number（模块数）`,`2`],[`status`,`'active' | 'expired' | 'loading' | 'scanned'`,`'active'`],[`onRefresh`,`() => void`,`—`],[`statusRender`,`(status, { onRefresh }) => VNodeChild`,`—`],[`encodeQR (独立导出)`,`(text, level?) => { size, version, modules }`,`—`]]},{id:`watermark`,title:`Watermark 水印`,icon:`▧`,group:`反馈组件`,eyebrow:`FEEDBACK`,badge:`Watermark`,description:`基于 canvas 的文字 / 图片平铺水印，支持多行、旋转、间距、字体配置、全屏模式与防篡改。`,examples:[{title:`多行文字水印与防篡改`,preview:W(hn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Watermark } from "atelier-ui-vue/watermark";
export const ProtectedPreview = defineComponent({
    "name": "ProtectedPreview",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Watermark, {
            "content": ['Atelier · 内部预览', 'lin@atelier.design'],
            "font": { color: 'rgba(104, 92, 246, 0.16)', fontSize: 14 },
            "gap": [80, 70]
        }, {
            "default": () => [
                vnode("div", {
                    "style": { minHeight: 200 }
                }, [
                    "受保护的内容"
                ])
            ]
        }));
    }
});
`}],rows:[[`content`,`string | string[]`,`—`],[`image`,`string`,`—`],[`width / height`,`number`,`按内容测量`],[`rotate`,`number`,`-22`],[`gap`,`[number, number]`,`[100, 100]`],[`offset`,`[number, number]`,`gap / 2`],[`font`,`{ color?, fontSize?, fontWeight?, fontFamily?, fontStyle?, textAlign? }`,`rgba(0,0,0,.12) / 16px`],[`zIndex`,`number`,`9`],[`fullscreen`,`boolean`,`false`]]},{id:`splitter`,title:`Splitter 分隔面板`,icon:`◫`,group:`布局组件`,eyebrow:`LAYOUT`,badge:`Splitter`,description:`可拖拽调整的多面板布局，支持水平 / 垂直、最小最大尺寸、折叠、禁止调整与延迟应用。`,examples:[{title:`水平三栏与垂直两栏`,preview:W(gn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Splitter, SplitterPanel } from "atelier-ui-vue/splitter";
export const Workbench = defineComponent({
    "name": "Workbench",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Fragment, null, [
            vnode(Splitter, {
                "style": { height: 240 },
                "onResizeEnd": (sizes: number[]) => console.log(sizes)
            }, {
                "default": () => [
                    vnode(SplitterPanel, {
                        "defaultSize": "30%",
                        "min": "18%",
                        "max": "50%",
                        "collapsible": true
                    }, {
                        "default": () => [
                            "导航"
                        ]
                    }),
                    vnode(SplitterPanel, {}, {
                        "default": () => [
                            "内容区"
                        ]
                    }),
                    vnode(SplitterPanel, {
                        "defaultSize": 200,
                        "resizable": false
                    }, {
                        "default": () => [
                            "属性面板"
                        ]
                    })
                ]
            }),
            vnode(Splitter, {
                "layout": "vertical",
                "style": { height: 260 },
                "lazy": true
            }, {
                "default": () => [
                    vnode(SplitterPanel, {
                        "defaultSize": "40%",
                        "min": 60
                    }, {
                        "default": () => [
                            "编辑器"
                        ]
                    }),
                    vnode(SplitterPanel, {
                        "collapsible": true
                    }, {
                        "default": () => [
                            "控制台"
                        ]
                    })
                ]
            })
        ]));
    }
});
`}],rows:[[`layout`,`'horizontal' | 'vertical'`,`'horizontal'`],[`lazy`,`boolean`,`false`],[`onResizeStart / onResize / onResizeEnd`,`(sizes: number[]) => void`,`—`],[`Panel.size / defaultSize`,`number | string（px 或 %）`,`平均分配`],[`Panel.min / max`,`number | string`,`—`],[`Panel.resizable`,`boolean`,`true`],[`Panel.collapsible`,`boolean | { start?, end? }`,`false`]]}];export{_n as DataDisplayPage};