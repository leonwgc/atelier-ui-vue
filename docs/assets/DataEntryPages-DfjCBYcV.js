import{t as e}from"./Input-DBOg5Aup.js";import{_ as t,a as n,b as r,c as i,h as a,l as o,m as s,n as c,o as l,s as u,t as d}from"./ApiTable-CMaXdLlV.js";import{n as f,t as p}from"./Select-COEuXdTf.js";import{t as m}from"./floating-__mp8I0T.js";import{t as h}from"./Tree-DrfyginC.js";import{A as g,C as _,E as v,G as y,H as b,I as x,J as S,K as C,O as w,P as T,R as E,T as D,W as O,Y as k,_ as A,a as j,c as M,d as N,f as P,g as F,h as I,i as L,j as R,m as z,o as B,p as V,s as H,u as U,v as W,w as G,y as ee,z as K}from"./index-CILakwI7.js";import{a as q,i as J,t as te}from"./shared-DuhUujBE.js";var ne=[`for`],re=[`disabled`],ie=[`id`,`inputmode`,`aria-label`,`aria-valuenow`,`aria-valuemin`,`aria-valuemax`,`aria-invalid`,`disabled`,`readonly`,`placeholder`],ae=[`disabled`],oe={key:2,class:`at-input-number__handlers`},se=[`aria-label`,`disabled`,`onPointerdown`,`onClick`],ce={key:1,class:`at-field__error`,role:`alert`},le={key:2,class:`at-field__hint`},ue=W({inheritAttrs:!1,__name:`InputNumber`,props:{modelValue:{},defaultValue:{default:null},min:{default:-1/0},max:{default:1/0},step:{default:1},precision:{},size:{default:`md`},status:{},label:{},hint:{},error:{},controls:{type:[Boolean,String],default:`stacked`},keyboard:{type:Boolean,default:!0},formatter:{},parser:{},disabled:{type:Boolean},readOnly:{type:Boolean},placeholder:{}},emits:[`update:modelValue`,`change`],setup(e,{emit:t}){let r=T(),i=`at-field-${ee()?.uid}`,o=U(()=>typeof r.id==`string`?r.id:i),c=e,l=b(c.defaultValue),u=U(()=>c.modelValue===void 0?l.value:c.modelValue),d=U(()=>c.precision??String(c.step).split(`.`)[1]?.length??0);function f(e){return e===null?``:c.formatter?c.formatter(e):e.toFixed(d.value)}let p=b(f(u.value)),m=b(!1);x([u,d],()=>{m.value||(p.value=f(u.value))});let h=t;function v(e){let t=e===null||!Number.isFinite(e)?null:Number(Math.max(c.min,Math.min(c.max,e)).toFixed(d.value));c.modelValue===void 0&&(l.value=t),p.value=f(t),h(`update:modelValue`,t),h(`change`,t)}function E(){let e=p.value.replace(/[^\d.-]/g,``);v(c.parser?c.parser(p.value):e===``||e===`-`||e===`.`?null:Number(e))}function O(e){c.disabled||c.readOnly||v((u.value??(Number.isFinite(c.min)&&c.min>0?c.min:0))+e*c.step)}let j;function M(){clearTimeout(j)}function P(e,t){e.preventDefault(),M(),O(t);let n=e=>{j=setTimeout(()=>{O(t),n(Math.max(40,e*.85))},e)};n(400)}D(M);function F(e){e.key===`Enter`&&E(),c.keyboard&&(e.key===`ArrowUp`||e.key===`ArrowDown`)&&(e.preventDefault(),O(e.key===`ArrowUp`?1:-1))}return(t,i)=>(w(),z(`div`,{class:C([`at-field`,y(r).class]),style:S(y(r).style)},[e.label?(w(),z(`label`,{key:0,for:o.value,class:`at-field__label`},k(e.label),9,ne)):V(``,!0),N(`div`,{class:C([`at-input-wrap`,`at-input-wrap--${e.size}`,`at-input-number`,e.controls&&`at-input-number--${e.controls===!0?`stacked`:e.controls}`,{"at-input-wrap--error":e.error||e.status===`error`,"at-input-wrap--warning":e.status===`warning`,"at-input-wrap--disabled":e.disabled}])},[e.controls===`inline`?(w(),z(`button`,{key:0,type:`button`,class:`at-input-number__step at-input-number__step--inline`,"aria-label":`减少`,disabled:e.disabled||e.readOnly||u.value!==null&&u.value<=e.min,onPointerdown:i[0]||=e=>P(e,-1),onPointerup:M,onPointerleave:M,onPointercancel:M,onClick:i[1]||=e=>!e.detail&&O(-1)},[A(y(s),{size:14})],40,re)):V(``,!0),R(t.$slots,`prefix`),K(N(`input`,_({id:o.value,"onUpdate:modelValue":i[2]||=e=>p.value=e},{...y(r),class:void 0,style:void 0},{class:`at-input at-input-number__input`,type:`text`,inputmode:d.value>0?`decimal`:`numeric`,role:`spinbutton`,"aria-label":e.label,"aria-valuenow":u.value??void 0,"aria-valuemin":Number.isFinite(e.min)?e.min:void 0,"aria-valuemax":Number.isFinite(e.max)?e.max:void 0,"aria-invalid":!!e.error||e.status===`error`,autocomplete:`off`,disabled:e.disabled,readonly:e.readOnly,placeholder:e.placeholder,onFocus:i[3]||=e=>m.value=!0,onBlur:i[4]||=e=>{m.value=!1,E()},onKeydown:F}),null,16,ie),[[L,p.value]]),R(t.$slots,`suffix`),e.controls===`inline`?(w(),z(`button`,{key:1,type:`button`,class:`at-input-number__step at-input-number__step--inline`,"aria-label":`增加`,disabled:e.disabled||e.readOnly||u.value!==null&&u.value>=e.max,onPointerdown:i[5]||=e=>P(e,1),onPointerup:M,onPointerleave:M,onPointercancel:M,onClick:i[6]||=e=>!e.detail&&O(1)},[A(y(a),{size:14})],40,ae)):V(``,!0),e.controls===`stacked`||e.controls===!0?(w(),z(`span`,oe,[(w(),z(H,null,g([1,-1],t=>N(`button`,{key:t,type:`button`,class:`at-input-number__step`,tabindex:`-1`,"aria-label":t===1?`增加`:`减少`,disabled:e.disabled||e.readOnly||u.value!==null&&(t===1?u.value>=e.max:u.value<=e.min),onPointerdown:e=>P(e,t),onPointerup:M,onPointerleave:M,onPointercancel:M,onClick:e=>!e.detail&&O(t)},[A(y(n),{size:12,style:S(t===1?{transform:`rotate(180deg)`}:void 0)},null,8,[`style`])],40,se)),64))])):V(``,!0)],2),e.error?(w(),z(`span`,ce,k(e.error),1)):e.hint?(w(),z(`span`,le,k(e.hint),1)):V(``,!0)],6))}}),de=[`tabindex`,`aria-label`,`aria-valuemax`,`aria-valuenow`,`aria-valuetext`,`aria-disabled`],fe=[`aria-label`,`aria-pressed`,`disabled`,`onPointermove`,`onPointerdown`,`onClick`],pe={class:`at-rate__base`},me=[`width`,`height`],he=[`width`,`height`],ge={key:0,class:`at-rate__caption`,"aria-live":`polite`},_e=W({__name:`Rate`,props:{modelValue:{},defaultValue:{default:0},count:{default:5},allowHalf:{type:Boolean},allowClear:{type:Boolean,default:!0},disabled:{type:Boolean},size:{default:`md`},tooltips:{},label:{default:`评分`},character:{}},emits:[`update:modelValue`,`change`,`hoverChange`],setup(e,{emit:t}){let n=e,i=b(n.defaultValue),a=b(null),o=U(()=>n.modelValue??i.value),s=t;function c(e){n.disabled||(n.modelValue===void 0&&(i.value=e),s(`update:modelValue`,e),s(`change`,e))}function l(e,t){let r=e.currentTarget.getBoundingClientRect();return n.allowHalf&&e.clientX-r.left<r.width/2?t-.5:t}function u(e){n.disabled||(a.value=e,s(`hoverChange`,e))}function d(e,t){let r=l(e,t);c(n.allowClear&&r===o.value?0:r)}function f(e){let t=n.allowHalf?.5:1,r;[`ArrowRight`,`ArrowUp`].includes(e.key)&&(r=Math.min(n.count,o.value+t)),[`ArrowLeft`,`ArrowDown`].includes(e.key)&&(r=Math.max(0,o.value-t)),e.key===`Home`&&(r=t),e.key===`End`&&(r=n.count),r!==void 0&&(e.preventDefault(),c(r))}return(t,n)=>(w(),z(`div`,{class:C([`at-rate`,`at-rate--${e.size}`,{"at-rate--disabled":e.disabled}])},[N(`div`,{class:`at-rate__stars`,role:`slider`,tabindex:e.disabled?-1:0,"aria-label":e.label,"aria-valuemin":0,"aria-valuemax":e.count,"aria-valuenow":o.value,"aria-valuetext":e.tooltips?.[Math.ceil(o.value)-1]??`${o.value} 星`,"aria-disabled":e.disabled,onKeydown:f,onMouseleave:n[0]||=e=>u(null)},[(w(!0),z(H,null,g(e.count,i=>(w(),z(`button`,{key:i,type:`button`,tabindex:`-1`,class:C([`at-rate__star`,{"at-rate__star--active":(a.value??o.value)>=i,"at-rate__star--half":(a.value??o.value)>i-1&&(a.value??o.value)<i,"at-rate__star--hover":a.value!==null&&a.value>i-1}]),"aria-label":e.tooltips?.[i-1]??`${i} 星`,"aria-pressed":o.value>i-1,disabled:e.disabled,onPointermove:e=>u(l(e,i)),onPointerdown:e=>d(e,i),onClick:t=>!t.detail&&c(e.allowClear&&o.value===i?0:i)},[N(`span`,pe,[R(t.$slots,`character`,{index:i},()=>[e.character?(w(),P(y(r),{key:0,content:typeof e.character==`function`?e.character(i):e.character},null,8,[`content`])):(w(),z(`svg`,{key:1,width:e.size===`sm`?18:e.size===`lg`?32:26,height:e.size===`sm`?18:e.size===`lg`?32:26,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,focusable:`false`},[...n[1]||=[N(`path`,{d:`M12 2.5l2.95 6.26 6.85.84-5.05 4.72 1.3 6.78L12 17.77 5.95 21.1l1.3-6.78L2.2 9.6l6.85-.84L12 2.5z`},null,-1)]],8,me))])]),N(`span`,{class:`at-rate__fill`,style:S({width:`${Math.max(0,Math.min(1,(a.value??o.value)-i+1))*100}%`}),"aria-hidden":`true`},[R(t.$slots,`character`,{index:i},()=>[e.character?(w(),P(y(r),{key:0,content:typeof e.character==`function`?e.character(i):e.character},null,8,[`content`])):(w(),z(`svg`,{key:1,width:e.size===`sm`?18:e.size===`lg`?32:26,height:e.size===`sm`?18:e.size===`lg`?32:26,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,focusable:`false`},[...n[2]||=[N(`path`,{d:`M12 2.5l2.95 6.26 6.85.84-5.05 4.72 1.3 6.78L12 17.77 5.95 21.1l1.3-6.78L2.2 9.6l6.85-.84L12 2.5z`},null,-1)]],8,he))])],4)],42,fe))),128))],40,de),e.tooltips?(w(),z(`span`,ge,k(e.tooltips[Math.ceil(a.value??o.value)-1]??``),1)):V(``,!0)],2))}}),Y=e=>String(e).padStart(2,`0`);function X(e){if(!e)return null;let t=/^(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/.exec(e.trim());if(!t)return null;let[n,r,i=0]=[Number(t[1]),Number(t[2]),Number(t[3]??0)];return n>23||r>59||i>59?null:{hour:n,minute:r,second:i}}function ve(e,t=`HH:mm`){return t===`HH:mm:ss`?`${Y(e.hour)}:${Y(e.minute)}:${Y(e.second)}`:`${Y(e.hour)}:${Y(e.minute)}`}var ye=(e,t,n)=>Math.min(n,Math.max(t,e)),be=e=>Math.round(ye(e,0,255)).toString(16).padStart(2,`0`);function Z(e){let t=e.trim(),n=/^#?([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i.exec(t);if(n){let e=n[1];e.length<=4&&(e=e.split(``).map(e=>e+e).join(``));let t=parseInt(e.slice(0,6),16),r=e.length===8?parseInt(e.slice(6,8),16)/255:1;return{r:t>>16&255,g:t>>8&255,b:t&255,a:r}}let r=/^rgba?\(\s*(\d{1,3})\s*[, ]\s*(\d{1,3})\s*[, ]\s*(\d{1,3})\s*(?:[,/]\s*([\d.]+%?)\s*)?\)$/i.exec(t);if(r){let e=r[4]?r[4].endsWith(`%`)?Number(r[4].slice(0,-1))/100:Number(r[4]):1;return{r:Number(r[1]),g:Number(r[2]),b:Number(r[3]),a:ye(e,0,1)}}let i=/^hsla?\(\s*([\d.]+)\s*[, ]\s*([\d.]+)%\s*[, ]\s*([\d.]+)%\s*(?:[,/]\s*([\d.]+%?)\s*)?\)$/i.exec(t);if(i){let e=Number(i[1])/360,t=Number(i[2])/100,n=Number(i[3])/100,r=i[4]?i[4].endsWith(`%`)?Number(i[4].slice(0,-1))/100:Number(i[4]):1,a=n<.5?n*(1+t):n+t-n*t,o=2*n-a,s=e=>(e=(e+1)%1,e<1/6?o+(a-o)*6*e:e<1/2?a:e<2/3?o+(a-o)*(2/3-e)*6:o);return{r:Math.round(s(e+1/3)*255),g:Math.round(s(e)*255),b:Math.round(s(e-1/3)*255),a:ye(r,0,1)}}return null}function xe({r:e,g:t,b:n,a:r}){let i=e/255,a=t/255,o=n/255,s=Math.max(i,a,o),c=s-Math.min(i,a,o),l=0;return c&&(l=s===i?(a-o)/c%6:s===a?(o-i)/c+2:(i-a)/c+4,l=(l*60+360)%360),{h:l,s:s?c/s:0,v:s,a:r}}function Se({h:e,s:t,v:n,a:r}){let i=n*t,a=i*(1-Math.abs(e/60%2-1)),o=n-i,[s,c,l]=e<60?[i,a,0]:e<120?[a,i,0]:e<180?[0,i,a]:e<240?[0,a,i]:e<300?[a,0,i]:[i,0,a];return{r:Math.round((s+o)*255),g:Math.round((c+o)*255),b:Math.round((l+o)*255),a:r}}function Q(e,t=e.a<1){return`#${be(e.r)}${be(e.g)}${be(e.b)}${t?be(e.a*255):``}`}function $(e,t){if(t===`hex`)return Q(e);if(t===`rgb`)return e.a<1?`rgba(${e.r}, ${e.g}, ${e.b}, ${Number(e.a.toFixed(2))})`:`rgb(${e.r}, ${e.g}, ${e.b})`;let{h:n,s:r,v:i,a}=xe(e),o=i*(1-r/2),s=o===0||o===1?0:(i-o)/Math.min(o,1-o),c=`${Math.round(n)}, ${Math.round(s*100)}%, ${Math.round(o*100)}%`;return a<1?`hsla(${c}, ${Number(a.toFixed(2))})`:`hsl(${c})`}function Ce(e){let t=Se(e);return{hex:Q(t),rgb:t,hsv:e,toString:(e=`hex`)=>$(t,e)}}var we=[`for`],Te=[`tabindex`,`aria-label`,`aria-expanded`],Ee={key:1,class:`at-field__error`,role:`alert`},De={key:2,class:`at-field__hint`},Oe=[`data-placement`,`aria-label`],ke={class:`at-time-picker__columns`},Ae=[`aria-label`,`onKeydown`],je=[`aria-selected`,`aria-disabled`,`onClick`],Me={class:`at-popup__footer at-time-picker__footer`},Ne={key:1},Pe=W({inheritAttrs:!1,__name:`TimePicker`,props:{modelValue:{},defaultValue:{default:null},format:{default:`HH:mm`},hourStep:{default:1},minuteStep:{default:1},secondStep:{default:1},disabledHours:{},disabledMinutes:{},disabledSeconds:{},minTime:{},maxTime:{},placeholder:{default:`选择时间`},size:{default:`md`},label:{},hint:{},error:{},status:{},popupClassName:{},popupStyle:{},disabled:{type:Boolean},allowClear:{type:Boolean,default:!0},showNow:{type:Boolean,default:!0},open:{type:Boolean,default:void 0},placement:{default:`bottom-start`}},emits:[`update:modelValue`,`change`,`update:open`],setup(e,{emit:t}){let n=T(),r=`at-field-${ee()?.uid}`,a=U(()=>typeof n.id==`string`?n.id:r),o=e,s=t,c=b(o.defaultValue),l=b(!1),u=U(()=>o.modelValue===void 0?c.value:o.modelValue),d=U(()=>(o.open??l.value)&&!o.disabled),f=b(X(u.value)??{hour:0,minute:0,second:0});function p(e){o.disabled||(o.open===void 0&&(l.value=e),s(`update:open`,e))}let{anchor:h,panel:v,position:E,resolvedPlacement:D}=m(()=>d.value,()=>o.placement,()=>p(!1));x(d,e=>{e&&(f.value=X(u.value)??{hour:0,minute:0,second:0})});let O=e=>e.hour*3600+e.minute*60+e.second;function F(e){let t=X(o.minTime),n=X(o.maxTime);return!!(t&&O(e)<O(t)||n&&O(e)>O(n))}function I(e,t){if(e===`hour`){let e=X(o.minTime),n=X(o.maxTime);return!!o.disabledHours?.().includes(t)||!!(e&&t<e.hour||n&&t>n.hour)}return e===`minute`?!!o.disabledMinutes?.(f.value.hour).includes(t)||F({...f.value,minute:t,second:0})&&F({...f.value,minute:t,second:59}):!!o.disabledSeconds?.(f.value.hour,f.value.minute).includes(t)||F({...f.value,second:t})}let L=U(()=>[{key:`hour`,label:`时`,count:24,step:o.hourStep},{key:`minute`,label:`分`,count:60,step:o.minuteStep},...o.format===`HH:mm:ss`?[{key:`second`,label:`秒`,count:60,step:o.secondStep}]:[]].map(e=>({...e,values:Array.from({length:Math.ceil(e.count/Math.max(1,e.step))},(t,n)=>n*Math.max(1,e.step))})));function R(e){o.modelValue===void 0&&(c.value=e),s(`update:modelValue`,e),s(`change`,e,X(e))}function W(e,t=!1){F(e)||o.disabledHours?.().includes(e.hour)||o.disabledMinutes?.(e.hour).includes(e.minute)||o.disabledSeconds?.(e.hour,e.minute).includes(e.second)||(f.value=e,R(ve(e,o.format)),t&&(p(!1),h.value?.focus()))}function G(){let e=new Date;W({hour:e.getHours(),minute:e.getMinutes(),second:o.format===`HH:mm:ss`?e.getSeconds():0},!0)}function K(e,t){let n=t.values.filter(e=>!I(t.key,e)),r=n.indexOf(f.value[t.key]),i;e.key===`ArrowDown`&&(i=n[Math.min(r+1,n.length-1)]),e.key===`ArrowUp`&&(i=n[Math.max(0,r-1)]),e.key===`Home`&&(i=n[0]),e.key===`End`&&(i=n.at(-1)),e.key===`Enter`&&(e.preventDefault(),W(f.value,!0)),i!==void 0&&(e.preventDefault(),W({...f.value,[t.key]:i}))}return(t,r)=>(w(),z(`div`,{class:C([`at-field`,y(n).class]),style:S(y(n).style)},[e.label?(w(),z(`label`,{key:0,for:a.value,class:`at-field__label`},k(e.label),9,we)):V(``,!0),N(`div`,_({ref_key:`anchor`,ref:h},{...y(n),class:void 0,style:void 0},{class:[`at-selector`,`at-selector--${e.size}`,`at-time-picker`,{"at-selector--open":d.value,"at-selector--disabled":e.disabled,"at-selector--error":e.error||e.status===`error`,"at-selector--warning":e.status===`warning`}],role:`combobox`,tabindex:e.disabled?-1:0,"aria-haspopup":`dialog`,"aria-label":e.label??e.placeholder,"aria-expanded":d.value,onClick:r[1]||=e=>p(!d.value),onKeydown:[r[2]||=j(B(e=>d.value?W(f.value,!0):p(!0),[`prevent`]),[`enter`]),r[3]||=j(B(e=>p(!d.value),[`prevent`]),[`space`]),r[4]||=j(B(e=>p(!0),[`prevent`]),[`down`])]}),[N(`span`,{class:C([`at-selector__value`,{"at-selector__placeholder":!u.value}])},k(u.value??e.placeholder),3),e.allowClear&&u.value&&!e.disabled?(w(),z(`button`,{key:0,type:`button`,class:`at-selector__clear`,"aria-label":`清空时间`,onClick:r[0]||=B(e=>R(null),[`stop`])},`×`)):V(``,!0),A(y(i),{size:16})],16,Te),e.error?(w(),z(`span`,Ee,k(e.error),1)):e.hint?(w(),z(`span`,De,k(e.hint),1)):V(``,!0),(w(),P(M,{to:`body`},[d.value?(w(),z(`div`,{key:0,ref_key:`panel`,ref:v,class:C([`at-popup`,`at-time-picker__popup`,e.popupClassName]),style:S([y(E),e.popupStyle]),"data-placement":y(D),role:`dialog`,"aria-label":e.label??e.placeholder},[N(`div`,ke,[(w(!0),z(H,null,g(L.value,e=>(w(),z(`ul`,{key:e.key,class:`at-time-picker__column`,role:`listbox`,"aria-label":e.label,tabindex:`0`,onKeydown:t=>K(t,e)},[(w(!0),z(H,null,g(e.values,t=>(w(),z(`li`,{key:t,role:`option`,"aria-selected":f.value[e.key]===t,"aria-disabled":I(e.key,t),class:C([`at-time-picker__cell`,{"at-time-picker__cell--selected":f.value[e.key]===t,"at-time-picker__cell--disabled":I(e.key,t)}]),onClick:n=>!I(e.key,t)&&W({...f.value,[e.key]:t})},k(String(t).padStart(2,`0`)),11,je))),128))],40,Ae))),128))]),N(`div`,Me,[e.showNow?(w(),z(`button`,{key:0,type:`button`,class:`at-time-picker__link`,onClick:G},`此刻`)):(w(),z(`span`,Ne)),N(`button`,{type:`button`,class:`at-time-picker__ok`,onClick:r[5]||=e=>W(f.value,!0)},`确定`)])],14,Oe)):V(``,!0)]))],6))}}),Fe=[`aria-label`,`aria-disabled`],Ie=[`aria-checked`,`tabindex`,`disabled`,`onClick`],Le={class:`at-segmented__label`},Re=W({__name:`Segmented`,props:{options:{},modelValue:{},defaultValue:{},size:{default:`md`},block:{type:Boolean},disabled:{type:Boolean},vertical:{type:Boolean},shape:{default:`default`},label:{default:`视图切换`}},emits:[`update:modelValue`,`change`],setup(e,{emit:t}){let n=e,r=U(()=>n.options.map(e=>typeof e==`string`?{label:e,value:e}:e)),i=b(n.defaultValue??r.value.find(e=>!e.disabled)?.value),a=U(()=>n.modelValue??i.value),o=b(null),s=b(),c=t;function l(e){n.disabled||r.value.find(t=>t.value===e)?.disabled||(n.modelValue===void 0&&(i.value=e),c(`update:modelValue`,e),c(`change`,e))}function u(){let e=o.value?.querySelector(`[aria-checked=true]`);s.value=e?{transform:`translate(${e.offsetLeft}px, ${e.offsetTop}px)`,width:`${e.offsetWidth}px`,height:`${e.offsetHeight}px`}:void 0}let d;v(()=>{u(),d=new ResizeObserver(u),o.value&&d.observe(o.value)}),D(()=>d?.disconnect()),x(()=>[a.value,n.size,n.vertical,n.options],async()=>{await G(),u()});function f(e){if(n.disabled||![`ArrowLeft`,`ArrowRight`,`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return;e.preventDefault();let t=r.value.filter(e=>!e.disabled),i=t.findIndex(e=>e.value===a.value),s=e.key===`Home`?0:e.key===`End`?t.length-1:(i+([`ArrowRight`,`ArrowDown`].includes(e.key)?1:-1)+t.length)%t.length,c=t[s];c&&(l(c.value),o.value?.querySelectorAll(`button:not(:disabled)`)[s]?.focus())}return(t,n)=>(w(),z(`div`,{ref_key:`root`,ref:o,role:`radiogroup`,"aria-label":e.label,"aria-disabled":e.disabled,class:C([`at-segmented`,`at-segmented--${e.size}`,{"at-segmented--block":e.block,"at-segmented--disabled":e.disabled,"at-segmented--vertical":e.vertical,"at-segmented--round":e.shape===`round`}]),onKeydown:f},[s.value?(w(),z(`span`,{key:0,class:`at-segmented__thumb`,style:S(s.value),"aria-hidden":`true`},null,4)):V(``,!0),(w(!0),z(H,null,g(r.value,(n,r)=>(w(),z(`button`,{key:n.value,type:`button`,role:`radio`,"aria-checked":n.value===a.value,tabindex:n.value===a.value||!a.value&&r===0?0:-1,disabled:e.disabled||n.disabled,class:C([`at-segmented__option`,{"at-segmented__option--active":n.value===a.value}]),onClick:e=>l(n.value)},[R(t.$slots,`option`,{option:n},()=>[N(`span`,Le,k(n.label),1)])],10,Ie))),128))],42,Fe))}}),ze=[`id`],Be=[`id`,`aria-labelledby`,`tabindex`,`aria-expanded`,`aria-label`],Ve={key:0,class:`at-selector__value at-color-picker__text`},He={key:1,class:`at-field__error`,role:`alert`},Ue={key:2,class:`at-field__hint`},We=[`data-placement`,`aria-label`],Ge=[`aria-valuenow`,`aria-valuetext`],Ke={class:`at-color-picker__sliders`},qe={class:`at-color-picker__tracks`},Je=[`aria-valuenow`],Ye=[`aria-valuenow`],Xe={class:`at-color-picker__inputs`},Ze={class:`at-color-picker__format`},Qe=[`onKeydown`],$e={key:0,class:`at-color-picker__alpha-text`},et={class:`at-popup__group`},tt={class:`at-color-picker__preset-grid`},nt=[`aria-label`,`aria-pressed`,`onClick`],rt=W({inheritAttrs:!1,__name:`ColorPicker`,props:{modelValue:{},defaultValue:{default:`#685cf6`},format:{default:`hex`},showAlpha:{type:Boolean},showText:{type:Boolean,default:!0},presets:{},disabled:{type:Boolean},allowClear:{type:Boolean},size:{default:`md`},label:{},hint:{},error:{},status:{},popupClassName:{},popupStyle:{},placeholder:{default:`选择颜色`},open:{type:Boolean,default:void 0},placement:{default:`bottom-start`}},emits:[`update:modelValue`,`change`,`changeComplete`,`update:open`],setup(e,{emit:t}){let n=T(),r=`at-field-${ee()?.uid}`,i=U(()=>typeof n.id==`string`?n.id:r),a=e,o=t,s=b(a.defaultValue),c=b(!1),l=U(()=>a.modelValue??s.value),u=U(()=>(a.open??c.value)&&!a.disabled),d=b(xe(Z(l.value)??{r:104,g:92,b:246,a:1})),f=U(()=>Ce(d.value)),p=b($(f.value.rgb,a.format)),h=U(()=>Q(Se({h:d.value.h,s:1,v:1,a:1})));x([l,()=>a.format],()=>{let e=Z(l.value);e?(d.value=xe(e),p.value=$(e,a.format)):p.value=``});let v=U(()=>a.presets?typeof a.presets[0]==`string`?[{label:`预设颜色`,colors:a.presets}]:a.presets:[]),E=l.value;function O(){o(`changeComplete`,E,f.value)}function A(e){a.disabled||(a.open===void 0&&(c.value=e),o(`update:open`,e),e||O())}let{anchor:F,panel:I,position:R,resolvedPlacement:W}=m(()=>u.value,()=>a.placement,()=>A(!1)),G=e=>Math.max(0,Math.min(1,e));function q(e){d.value={...e,a:a.showAlpha?G(e.a):1,s:G(e.s),v:G(e.v)},E=Q(Se(d.value)),a.modelValue===void 0&&(s.value=E),p.value=$(f.value.rgb,a.format),o(`update:modelValue`,E),o(`change`,E,f.value)}let J;function te(e,t){if(a.disabled)return;e.preventDefault(),J?.();let n=e.currentTarget.getBoundingClientRect(),r=e=>{let r=G((e.clientX-n.left)/n.width),i=G((e.clientY-n.top)/n.height);q(t===`area`?{...d.value,s:r,v:1-i}:t===`hue`?{...d.value,h:r*360}:{...d.value,a:r})},i=()=>{J?.(),O()};J=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i),window.removeEventListener(`pointercancel`,i)},r(e),window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i),window.addEventListener(`pointercancel`,i)}D(()=>J?.());function ne(e,t){if(![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key))return;e.preventDefault();let n=[`ArrowLeft`,`ArrowDown`].includes(e.key)?-1:1,r=e.shiftKey?.1:.01;t===`hue`?q({...d.value,h:(d.value.h+n*r*100+360)%360}):t===`alpha`?q({...d.value,a:d.value.a+n*r}):[`ArrowLeft`,`ArrowRight`].includes(e.key)?q({...d.value,s:d.value.s+n*r}):q({...d.value,v:d.value.v+n*r}),O()}function re(){let e=Z(p.value);e?q(xe(e)):p.value=$(f.value.rgb,a.format),O()}function ie(e){let t=Z(e);t&&(q(xe(t)),O())}function ae(){E=``,a.modelValue===void 0&&(s.value=``),o(`update:modelValue`,``)}return(t,r)=>(w(),z(`div`,{class:C([`at-field`,y(n).class]),style:S(y(n).style)},[e.label?(w(),z(`label`,{key:0,id:`${i.value}-label`,class:`at-field__label`},k(e.label),9,ze)):V(``,!0),N(`div`,_({id:i.value,"aria-labelledby":e.label?`${i.value}-label`:void 0,ref_key:`anchor`,ref:F},{...y(n),class:void 0,style:void 0},{class:[`at-selector`,`at-selector--${e.size}`,`at-color-picker`,{"at-color-picker--compact":!e.showText,"at-selector--disabled":e.disabled,"at-selector--error":e.error||e.status===`error`,"at-selector--warning":e.status===`warning`}],role:`combobox`,tabindex:e.disabled?-1:0,"aria-haspopup":`dialog`,"aria-expanded":u.value,"aria-label":e.label??e.placeholder,onClick:r[0]||=e=>A(!u.value),onKeydown:[r[1]||=j(B(e=>A(!u.value),[`prevent`]),[`enter`]),r[2]||=j(B(e=>A(!u.value),[`prevent`]),[`space`])]}),[N(`span`,{class:C([`at-color-picker__swatch`,{"at-color-picker__swatch--empty":!l.value}]),style:S({"--at-swatch":l.value}),"aria-hidden":`true`},null,6),e.showText?(w(),z(`span`,Ve,k(l.value?y($)(y(Z)(l.value)??f.value.rgb,e.format):e.placeholder),1)):V(``,!0),e.allowClear&&l.value&&!e.disabled?(w(),z(`button`,{key:1,type:`button`,class:`at-selector__clear`,"aria-label":`清空颜色`,onClick:B(ae,[`stop`])},`×`)):V(``,!0)],16,Be),e.error?(w(),z(`span`,He,k(e.error),1)):e.hint?(w(),z(`span`,Ue,k(e.hint),1)):V(``,!0),(w(),P(M,{to:`body`},[u.value?(w(),z(`div`,{key:0,ref_key:`panel`,ref:I,class:C([`at-popup`,`at-color-picker__popup`,e.popupClassName]),style:S([y(R),e.popupStyle]),"data-placement":y(W),role:`dialog`,"aria-label":e.label??e.placeholder},[N(`div`,{class:`at-color-picker__area`,style:S({backgroundColor:h.value}),onPointerdown:r[4]||=e=>te(e,`area`)},[N(`span`,{class:`at-color-picker__area-handle`,style:S({left:`${d.value.s*100}%`,top:`${(1-d.value.v)*100}%`,backgroundColor:y(Q)({...f.value.rgb,a:1})}),role:`slider`,tabindex:`0`,"aria-label":`饱和度与明度`,"aria-valuenow":Math.round(d.value.v*100),"aria-valuetext":`饱和度 ${Math.round(d.value.s*100)}%，明度 ${Math.round(d.value.v*100)}%`,onKeydown:r[3]||=e=>ne(e,`area`)},null,44,Ge)],36),N(`div`,Ke,[N(`div`,{class:`at-color-picker__preview`,style:S({"--at-swatch":y($)(f.value.rgb,`rgb`)}),"aria-hidden":`true`},null,4),N(`div`,qe,[N(`div`,{class:`at-color-picker__hue`,onPointerdown:r[6]||=e=>te(e,`hue`)},[N(`span`,{class:`at-color-picker__slider-handle`,style:S({left:`${d.value.h/360*100}%`,backgroundColor:h.value}),role:`slider`,tabindex:`0`,"aria-label":`色相`,"aria-valuemin":0,"aria-valuemax":360,"aria-valuenow":Math.round(d.value.h),onKeydown:r[5]||=e=>ne(e,`hue`)},null,44,Je)],32),e.showAlpha?(w(),z(`div`,{key:0,class:`at-color-picker__alpha`,style:S({"--at-swatch":y(Q)({...f.value.rgb,a:1})}),onPointerdown:r[8]||=e=>te(e,`alpha`)},[N(`span`,{class:`at-color-picker__slider-handle`,style:S({left:`${d.value.a*100}%`,backgroundColor:y($)(f.value.rgb,`rgb`)}),role:`slider`,tabindex:`0`,"aria-label":`透明度`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(d.value.a*100),onKeydown:r[7]||=e=>ne(e,`alpha`)},null,44,Ye)],36)):V(``,!0)])]),N(`div`,Xe,[N(`span`,Ze,k(e.format.toUpperCase()),1),K(N(`input`,{"onUpdate:modelValue":r[9]||=e=>p.value=e,class:`at-color-picker__input`,"aria-label":`颜色值`,spellcheck:`false`,onBlur:re,onKeydown:j(B(re,[`prevent`]),[`enter`])},null,40,Qe),[[L,p.value]]),e.showAlpha?(w(),z(`span`,$e,k(Math.round(d.value.a*100))+`%`,1)):V(``,!0)]),(w(!0),z(H,null,g(v.value,e=>(w(),z(`div`,{key:e.label,class:`at-color-picker__presets`},[N(`span`,et,k(e.label),1),N(`div`,tt,[(w(!0),z(H,null,g(e.colors,e=>(w(),z(`button`,{key:e,type:`button`,class:`at-color-picker__preset`,style:S({"--at-swatch":e}),"aria-label":e,"aria-pressed":e===l.value,onClick:t=>ie(e)},null,12,nt))),128))])]))),128))],14,We)):V(``,!0)]))],6))}}),it={key:0,class:`at-slider__header`},at=[`tabindex`,`aria-label`,`aria-valuemin`,`aria-valuemax`,`aria-valuenow`,`aria-valuetext`,`aria-orientation`,`aria-disabled`,`onPointerdown`,`onKeydown`],ot={key:0,class:`at-slider__marks`},st=[`onClick`],ct=W({__name:`Slider`,props:{modelValue:{},defaultValue:{},min:{default:0},max:{default:100},step:{default:1},range:{type:Boolean},marks:{},tooltip:{default:`auto`},tooltipFormatter:{},disabled:{type:Boolean},vertical:{type:Boolean},size:{default:`md`},label:{default:`数值`},showValue:{type:Boolean},included:{type:Boolean,default:!0}},emits:[`update:modelValue`,`change`,`changeComplete`],setup(e,{emit:t}){let n=e,r=t,i=b(n.defaultValue??(n.range?[n.min,n.min]:n.min)),a=U(()=>n.modelValue??i.value),o=U(()=>Array.isArray(a.value)?[...a.value].sort((e,t)=>e-t):[a.value]),s=U(()=>Object.keys(n.marks??{}).map(Number).filter(e=>e>=n.min&&e<=n.max).sort((e,t)=>e-t)),c=b(null),l=b(null),u=b(!1),d=a.value,f=e=>(e-n.min)/(n.max-n.min||1)*100,p=U(()=>n.range?o.value[0]:n.included?n.min:o.value[0]),m=U(()=>n.range?o.value[1]:o.value[0]);function h(e){let t=Math.max(n.min,Math.min(n.max,e));if(n.step===null)return s.value.length?s.value.reduce((e,n)=>Math.abs(n-t)<Math.abs(e-t)?n:e):t;let r=Math.max(2**-52,n.step);return Number(Math.max(n.min,Math.min(n.max,Math.round((t-n.min)/r)*r+n.min)).toFixed(String(r).split(`.`)[1]?.length??0))}function _(e,t){if(n.disabled)return;let a=t;if(n.range){let n=[...o.value];n[e]=t,n.sort((e,t)=>e-t),a=[n[0],n[1]]}d=a,n.modelValue===void 0&&(i.value=a),r(`update:modelValue`,a),r(`change`,a)}let v;function x(e,t){if(n.disabled||e.button!==0||!c.value)return;e.preventDefault(),v?.();let i=c.value.getBoundingClientRect(),a=e=>h(n.min+(n.vertical?1-(e.clientY-i.top)/i.height:(e.clientX-i.left)/i.width)*(n.max-n.min)),s=a(e),u=t??(n.range&&Math.abs(s-o.value[1])<Math.abs(s-o.value[0])?1:0);l.value=u,t===void 0&&_(u,s),c.value.querySelectorAll(`[role=slider]`)[u]?.focus();let f=e=>_(u,a(e)),p=()=>{v?.(),l.value=null,r(`changeComplete`,d)};v=()=>{window.removeEventListener(`pointermove`,f),window.removeEventListener(`pointerup`,p),window.removeEventListener(`pointercancel`,p)},window.addEventListener(`pointermove`,f),window.addEventListener(`pointerup`,p),window.addEventListener(`pointercancel`,p)}D(()=>v?.());function T(e,t){if(n.disabled)return;let i=o.value[t],a=n.step??1,c,l=[`ArrowRight`,`ArrowUp`].includes(e.key)?1:-1;[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key)&&(c=n.step===null&&s.value.length?s.value[Math.max(0,Math.min(s.value.length-1,s.value.indexOf(i)+l))]:h(i+l*a)),e.key===`Home`&&(c=n.min),e.key===`End`&&(c=n.max),e.key===`PageUp`&&(c=h(i+(n.max-n.min)/10)),e.key===`PageDown`&&(c=h(i-(n.max-n.min)/10)),c!==void 0&&(e.preventDefault(),_(t,c),r(`changeComplete`,d))}return(t,n)=>(w(),z(`div`,{class:C([`at-slider`,`at-slider--${e.size}`,{"at-slider--vertical":e.vertical,"at-slider--disabled":e.disabled,"at-slider--dragging":l.value!==null,"at-slider--with-marks":s.value.length}])},[e.showValue?(w(),z(`span`,it,[N(`span`,null,k(e.label),1),N(`output`,null,k(o.value.join(` – `)),1)])):V(``,!0),N(`div`,{class:`at-slider__control`,onMouseenter:n[1]||=e=>u.value=!0,onMouseleave:n[2]||=e=>u.value=!1},[N(`div`,{ref_key:`rail`,ref:c,class:`at-slider__rail`,onPointerdown:n[0]||=e=>x(e)},[e.included?(w(),z(`div`,{key:0,class:`at-slider__track`,style:S(e.vertical?{bottom:`${f(p.value)}%`,height:`${f(m.value)-f(p.value)}%`}:{left:`${f(p.value)}%`,width:`${f(m.value)-f(p.value)}%`})},null,4)):V(``,!0),(w(!0),z(H,null,g(s.value,t=>(w(),z(`span`,{key:t,class:C([`at-slider__dot`,{"at-slider__dot--active":t>=p.value&&t<=m.value&&e.included}]),style:S(e.vertical?{bottom:`${f(t)}%`}:{left:`${f(t)}%`})},null,6))),128)),(w(!0),z(H,null,g(o.value,(t,n)=>(w(),z(`div`,{key:n,class:C([`at-slider__handle`,{"at-slider__handle--active":l.value===n}]),style:S(e.vertical?{bottom:`${f(t)}%`}:{left:`${f(t)}%`}),role:`slider`,tabindex:e.disabled?-1:0,"aria-label":e.range?`${e.label}${n===0?`起始`:`结束`}`:e.label,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":t,"aria-valuetext":e.tooltipFormatter?.(t),"aria-orientation":e.vertical?`vertical`:`horizontal`,"aria-disabled":e.disabled,onPointerdown:B(e=>x(e,n),[`stop`]),onKeydown:e=>T(e,n)},[N(`span`,{class:C([`at-slider__tooltip`,{"at-slider__tooltip--visible":e.tooltip===`always`||e.tooltip===`auto`&&(u.value||l.value!==null)}])},k(e.tooltipFormatter?.(t)??t),3)],46,at))),128))],544),e.marks?(w(),z(`div`,ot,[(w(!0),z(H,null,g(s.value,t=>(w(),z(`span`,{key:t,class:`at-slider__mark`,style:S([e.vertical?{bottom:`${f(t)}%`}:{left:`${f(t)}%`},typeof e.marks[t]==`object`?e.marks[t].style:void 0]),onClick:e=>{_(0,t),r(`changeComplete`,y(d))}},k(typeof e.marks[t]==`object`?e.marks[t].label:e.marks[t]),13,st))),128))])):V(``,!0)],32)],2))}}),lt={class:`at-tree-select__popup`},ut={key:0,class:`at-tree-select__empty`},dt=W({__name:`TreeSelect`,props:{treeData:{},modelValue:{},defaultValue:{},multiple:{type:Boolean},treeCheckable:{type:Boolean},showSearch:{type:Boolean},treeDefaultExpandAll:{type:Boolean},treeDefaultExpandedKeys:{},placeholder:{default:`请选择…`},notFoundContent:{default:`暂无匹配选项`},disabled:{type:Boolean},allowClear:{type:Boolean,default:!0},maxTagCount:{},size:{default:`md`},label:{},hint:{},error:{},status:{},placement:{},popupClassName:{},popupStyle:{},popupMatchSelectWidth:{type:Boolean,default:!0},open:{type:Boolean,default:void 0}},emits:[`update:modelValue`,`change`,`update:open`],setup(e,{emit:t}){let n=e,r=t,i=b(n.defaultValue??(n.multiple||n.treeCheckable?[]:``)),a=b(!1),o=b(``),s=U(()=>n.modelValue??i.value),c=U(()=>n.multiple||n.treeCheckable),l=U(()=>Array.isArray(s.value)?s.value:s.value?[s.value]:[]);function u(e){return e.flatMap(e=>[e,...u(e.children??[])])}let d=U(()=>u(n.treeData)),f=U(()=>d.value.map(e=>({label:e.label,value:e.value,disabled:e.disabled||e.selectable===!1})));function m(e){return e.map(e=>({key:e.value,title:e.label,disabled:e.disabled,selectable:e.selectable,children:e.children?m(e.children):void 0}))}let g=U(()=>m(n.treeData));function _(e){n.modelValue===void 0&&(i.value=e),r(`update:modelValue`,e),r(`change`,e,Array.isArray(e)?d.value.filter(t=>e.includes(t.value)):d.value.find(t=>t.value===e))}function v(e){n.open===void 0&&(a.value=e),r(`update:open`,e),e||(o.value=``)}function y(e,t){n.treeCheckable||(c.value?_(t.selected?[...new Set([...l.value,t.node.key])]:l.value.filter(e=>e!==t.node.key)):(_(e[0]??``),v(!1)))}return(t,n)=>(w(),P(p,{status:e.status,placement:e.placement,"popup-class-name":e.popupClassName,"popup-style":e.popupStyle,"popup-match-select-width":e.popupMatchSelectWidth,searchable:e.showSearch,onSearch:n[1]||=e=>o.value=e,options:f.value,"model-value":s.value,multiple:c.value,disabled:e.disabled,"allow-clear":e.allowClear,"max-tag-count":e.maxTagCount,size:e.size,label:e.label,hint:e.hint,error:e.error,placeholder:e.placeholder,open:e.open??a.value,"onUpdate:open":v,"onUpdate:modelValue":_},{popup:E(()=>[N(`div`,lt,[A(h,{"tree-data":g.value,checkable:e.treeCheckable,multiple:c.value,"selected-keys":l.value,"checked-keys":l.value,"filter-value":o.value,"default-expand-all":e.treeDefaultExpandAll,"default-expanded-keys":e.treeDefaultExpandedKeys,onSelect:y,onCheck:n[0]||=e=>_(e)},{title:E(({node:e})=>[R(t.$slots,`title`,{node:d.value.find(t=>t.value===e.key)},()=>[F(k(e.title),1)])]),_:3},8,[`tree-data`,`checkable`,`multiple`,`selected-keys`,`checked-keys`,`filter-value`,`default-expand-all`,`default-expanded-keys`]),d.value.length?V(``,!0):(w(),z(`span`,ut,k(e.notFoundContent),1))])]),_:3},8,[`status`,`placement`,`popup-class-name`,`popup-style`,`popup-match-select-width`,`searchable`,`options`,`model-value`,`multiple`,`disabled`,`allow-clear`,`max-tag-count`,`size`,`label`,`hint`,`error`,`placeholder`,`open`]))}}),ft={class:`at-cascader__popup`},pt={key:0,class:`at-cascader__search-list`,role:`listbox`},mt=[`aria-selected`,`aria-disabled`,`onClick`],ht={key:1,class:`at-cascader__columns`},gt=[`aria-label`],_t=[`aria-selected`,`aria-disabled`,`tabindex`,`onClick`,`onKeydown`,`onMouseenter`],vt={key:0,"aria-hidden":`true`},yt=W({__name:`Cascader`,props:{options:{},modelValue:{},defaultValue:{},placeholder:{default:`请选择…`},expandTrigger:{default:`click`},changeOnSelect:{type:Boolean},showSearch:{type:Boolean},notFoundContent:{default:`暂无匹配选项`},disabled:{type:Boolean},allowClear:{type:Boolean,default:!0},size:{default:`md`},label:{},hint:{},error:{},status:{},placement:{},popupClassName:{},popupStyle:{},popupMatchSelectWidth:{type:Boolean},open:{type:Boolean,default:void 0}},emits:[`update:modelValue`,`change`,`update:open`],setup(e,{emit:t}){let n=e,r=t,i=b(n.defaultValue??[]),a=b(n.modelValue??n.defaultValue??[]),o=b(!1),s=b(``),c=U(()=>n.modelValue??i.value);function l(e){let t=[],r=n.options;for(let n of e){let e=r.find(e=>e.value===n);if(!e)break;t.push(e),r=e.children??[]}return t}let u=U(()=>{let e=[n.options],t=n.options;for(let n of a.value){let r=t.find(e=>e.value===n);if(!r?.children?.length)break;e.push(r.children),t=r.children}return e});function d(e,t=[]){return e.flatMap(e=>{let r=[...t,e];return[...!e.children?.length||n.changeOnSelect?[r]:[],...d(e.children??[],r)]})}let f=U(()=>d(n.options)),m=U(()=>f.value.map(e=>({label:e.map(e=>e.label).join(` / `),value:JSON.stringify(e.map(e=>e.value)),disabled:e.some(e=>e.disabled)}))),h=U(()=>c.value.length?JSON.stringify(c.value):``);function _(e){n.open===void 0&&(o.value=e),e?a.value=[...c.value]:s.value=``,r(`update:open`,e)}function v(e){n.modelValue===void 0&&(i.value=e),r(`update:modelValue`,e),r(`change`,e,l(e))}function y(e,t,r=!1){e.disabled||(a.value=[...a.value.slice(0,t),e.value],!r&&(n.changeOnSelect||!e.children?.length||e.isLeaf)&&(v(a.value),(!e.children?.length||e.isLeaf)&&_(!1)))}function x(e){typeof e==`string`&&v(e?JSON.parse(e):[])}return(t,n)=>(w(),P(p,{status:e.status,placement:e.placement,"popup-class-name":e.popupClassName,"popup-style":e.popupStyle,"popup-match-select-width":e.popupMatchSelectWidth,searchable:e.showSearch,onSearch:n[0]||=e=>s.value=e,options:m.value,"model-value":h.value,placeholder:e.placeholder,disabled:e.disabled,"allow-clear":e.allowClear,size:e.size,label:e.label,hint:e.hint,error:e.error,open:e.open??o.value,"onUpdate:open":_,"onUpdate:modelValue":x},{label:E(()=>[R(t.$slots,`display`,{labels:l(c.value).map(e=>e.label),selectedOptions:l(c.value)},()=>[F(k(l(c.value).map(e=>e.label).join(` / `)),1)])]),popup:E(()=>[N(`div`,ft,[s.value?(w(),z(`ul`,pt,[(w(!0),z(H,null,g(m.value.filter(e=>e.label.toLocaleLowerCase().includes(s.value.toLocaleLowerCase())),e=>(w(),z(`li`,{key:e.value,role:`option`,"aria-selected":e.value===h.value,"aria-disabled":e.disabled,class:`at-option`,onClick:t=>!e.disabled&&(x(e.value),_(!1))},k(e.label),9,mt))),128))])):(w(),z(`div`,ht,[(w(!0),z(H,null,g(u.value,(n,r)=>(w(),z(`ul`,{key:r,class:`at-cascader__column`,role:`listbox`,"aria-label":`第 ${r+1} 级`},[(w(!0),z(H,null,g(n,n=>(w(),z(`li`,{key:n.value,role:`option`,"aria-selected":a.value[r]===n.value,"aria-disabled":n.disabled,class:C([`at-cascader__option`,`at-option`,{"at-option--selected":a.value[r]===n.value,"at-option--disabled":n.disabled}]),tabindex:n.disabled?-1:0,onClick:e=>y(n,r),onKeydown:j(B(e=>y(n,r),[`prevent`]),[`enter`]),onMouseenter:t=>e.expandTrigger===`hover`&&n.children?.length&&y(n,r,!0)},[R(t.$slots,`option`,{option:n},()=>[F(k(n.label),1),n.children?.length?(w(),z(`span`,vt,`›`)):V(``,!0)])],42,_t))),128))],8,gt))),128))]))])]),_:3},8,[`status`,`placement`,`popup-class-name`,`popup-style`,`popup-match-select-width`,`searchable`,`options`,`model-value`,`placeholder`,`disabled`,`allow-clear`,`size`,`label`,`hint`,`error`,`open`]))}}),bt=[`id`],xt=[`id`,`aria-selected`,`aria-disabled`,`onClick`,`onMouseenter`],St={class:`at-option__label`},Ct={key:0,class:`at-option__description`},wt={key:0,class:`at-popup__empty`},Tt=W({inheritAttrs:!1,__name:`AutoComplete`,props:{options:{},modelValue:{},defaultValue:{default:``},filterOption:{type:[Boolean,Function],default:!0},highlight:{type:Boolean,default:!0},size:{default:`md`},label:{},hint:{},error:{},allowClear:{type:Boolean},notFoundContent:{},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean},placement:{default:`bottom-start`},popupMatchSelectWidth:{type:Boolean,default:!0},popupClassName:{},popupStyle:{},popupRender:{},status:{},disabled:{type:Boolean},placeholder:{default:`输入以搜索…`}},emits:[`update:modelValue`,`change`,`select`,`search`,`update:open`],setup(t,{emit:n}){let i=T(),a=t,o=n,s=b(a.defaultValue),c=b(a.defaultOpen??!1),l=b(-1),u=U(()=>a.modelValue??s.value),d=U(()=>a.options.map(e=>typeof e==`string`?{value:e,label:e}:e)),p=U(()=>d.value.filter(e=>a.filterOption===!1||!u.value||(typeof a.filterOption==`function`?a.filterOption(u.value,e):`${e.value} ${typeof e.label==`string`?e.label:``}`.toLocaleLowerCase().includes(u.value.toLocaleLowerCase())))),h=U(()=>(a.open??c.value)&&!a.disabled&&(!!p.value.length||!!a.notFoundContent));function v(e){a.disabled||(a.open===void 0&&(c.value=e),o(`update:open`,e))}let{anchor:x,panel:D,position:O,id:j}=m(()=>h.value,()=>a.placement,()=>v(!1),a.popupMatchSelectWidth);function F(e){a.modelValue===void 0&&(s.value=e),o(`update:modelValue`,e),o(`change`,e),o(`search`,e),l.value=-1,v(!0)}function L(e){e.disabled||(a.modelValue===void 0&&(s.value=e.value),o(`update:modelValue`,e.value),o(`change`,e.value),o(`select`,e.value,e),v(!1),x.value?.querySelector(`input`)?.focus())}function W(e){let t=p.value.map((e,t)=>e.disabled?-1:t).filter(e=>e>=0);if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){if(e.preventDefault(),v(!0),!t.length)return;let n=t.indexOf(l.value);l.value=e.key===`Home`?t[0]:e.key===`End`?t.at(-1)??-1:t[(n+(e.key===`ArrowDown`?1:-1)+t.length)%t.length]??-1}e.key===`Enter`&&h.value&&p.value[l.value]&&!p.value[l.value].disabled&&(e.preventDefault(),L(p.value[l.value])),e.key===`Tab`&&v(!1)}return(n,a)=>(w(),z(H,null,[N(`div`,{ref_key:`anchor`,ref:x,class:C([y(i).class,`at-autocomplete`,{"at-autocomplete--open":h.value}]),style:S(y(i).style),onKeydown:W},[A(e,_({...y(i),class:void 0,style:void 0},{"model-value":u.value,size:t.size,label:t.label,hint:t.hint,error:t.error,status:t.status,clearable:t.allowClear,disabled:t.disabled,placeholder:t.placeholder,role:`combobox`,autocomplete:`off`,"aria-expanded":h.value,"aria-controls":y(j),"aria-activedescendant":l.value>=0?`${y(j)}-${l.value}`:void 0,"onUpdate:modelValue":F,onFocusin:a[0]||=e=>v(!0)}),I({_:2},[n.$slots.prefix?{name:`prefix`,fn:E(()=>[R(n.$slots,`prefix`)]),key:`0`}:void 0,n.$slots.suffix?{name:`suffix`,fn:E(()=>[R(n.$slots,`suffix`)]),key:`1`}:void 0]),1040,[`model-value`,`size`,`label`,`hint`,`error`,`status`,`clearable`,`disabled`,`placeholder`,`aria-expanded`,`aria-controls`,`aria-activedescendant`])],38),(w(),P(M,{to:`body`},[h.value?(w(),z(`div`,{key:0,ref_key:`panel`,ref:D,class:C([`at-popup`,`at-autocomplete__popup`,t.popupClassName]),style:S([y(O),t.popupStyle])},[A(y(f),{render:t.popupRender},{default:E(()=>[R(n.$slots,`popup`,{},()=>[N(`ul`,{id:y(j),role:`listbox`,class:`at-popup__list at-autocomplete__list`},[(w(!0),z(H,null,g(p.value,(e,t)=>(w(),z(`li`,{id:`${y(j)}-${t}`,key:e.value,role:`option`,"aria-selected":l.value===t,"aria-disabled":e.disabled,class:C([`at-option`,{"at-option--active":l.value===t,"at-option--disabled":e.disabled}]),onMousedown:a[1]||=B(()=>{},[`prevent`]),onClick:t=>L(e),onMouseenter:e=>l.value=t},[R(n.$slots,`option`,{option:e,active:l.value===t,query:u.value},()=>[N(`span`,St,[N(`span`,null,[A(y(r),{content:e.label??e.value},null,8,[`content`])]),e.description?(w(),z(`small`,Ct,[A(y(r),{content:e.description},null,8,[`content`])])):V(``,!0)])])],42,xt))),128)),p.value.length?V(``,!0):(w(),z(`li`,wt,k(t.notFoundContent),1))],8,bt)])]),_:3},8,[`render`])],6)):V(``,!0)]))],64))}}),Et=[`fontFamily`,`fontSize`,`fontWeight`,`letterSpacing`,`lineHeight`,`paddingTop`,`paddingLeft`,`paddingRight`,`borderTopWidth`,`borderLeftWidth`,`boxSizing`,`textTransform`,`wordSpacing`,`tabSize`];function Dt(e,t){let n=document.createElement(`div`),r=window.getComputedStyle(e);Et.forEach(e=>{n.style[e]=r[e]}),Object.assign(n.style,{position:`absolute`,visibility:`hidden`,whiteSpace:`pre-wrap`,wordWrap:`break-word`,overflow:`hidden`,width:`${e.clientWidth}px`,top:`0`,left:`0`}),n.textContent=e.value.slice(0,t);let i=document.createElement(`span`);i.textContent=`​`,n.appendChild(i),e.parentElement?.appendChild(n);let a=i.offsetTop-e.scrollTop,o=i.offsetLeft-e.scrollLeft,s=parseFloat(r.lineHeight)||i.offsetHeight;return n.remove(),{top:a,left:o,height:s}}var Ot=[`for`],kt=[`id`,`value`,`disabled`,`rows`,`placeholder`,`aria-label`,`aria-expanded`,`aria-controls`],At={key:1,class:`at-field__error`,role:`alert`},jt={key:2,class:`at-field__hint`},Mt=[`id`],Nt=[`aria-selected`,`aria-disabled`,`onMouseenter`,`onClick`],Pt={key:0,class:`at-mentions__avatar`},Ft={key:1,class:`at-mentions__avatar at-mentions__avatar--initial`},It={class:`at-option__label`},Lt={key:0},Rt={key:0,class:`at-popup__empty`},zt=W({inheritAttrs:!1,__name:`Mentions`,props:{options:{},modelValue:{},defaultValue:{default:``},prefix:{default:`@`},split:{default:` `},filterOption:{type:[Boolean,Function],default:!0},notFoundContent:{default:`没有匹配的成员`},size:{default:`md`},label:{},hint:{},error:{},status:{},popupClassName:{},popupStyle:{},autoSize:{type:[Boolean,Object]},placement:{default:`bottom-start`},disabled:{type:Boolean},rows:{default:3},placeholder:{default:`输入 @ 提及成员`}},emits:[`update:modelValue`,`change`,`select`,`search`],setup(e,{emit:t}){let n=T(),i=`at-field-${ee()?.uid}`,a=U(()=>typeof n.id==`string`?n.id:i),o=e,s=t,c=b(o.defaultValue),l=b(null),u=b(0),d=b(null),f=b(),p=U(()=>o.modelValue??c.value),h=U(()=>o.options.map(e=>typeof e==`string`?{value:e,label:e}:e)),v=U(()=>h.value.filter(e=>!l.value||o.filterOption===!1||(typeof o.filterOption==`function`?o.filterOption(l.value.query,e):`${e.value} ${typeof e.label==`string`?e.label:``}`.toLocaleLowerCase().includes(l.value.query.toLocaleLowerCase())))),{anchor:x,panel:E,position:D,id:O,measure:F}=m(()=>!!l.value&&!o.disabled,()=>o.placement,()=>{l.value=null});function I(e){o.modelValue===void 0&&(c.value=e),s(`update:modelValue`,e),s(`change`,e)}function L(){if(!d.value)return;let e=d.value.selectionStart,t=d.value.value.slice(0,e),n=Array.isArray(o.prefix)?o.prefix:[o.prefix],r=null;for(let i of n){let n=t.lastIndexOf(i);n>=0&&(n===0||/\s/.test(t[n-1]))&&!/\s/.test(t.slice(n+i.length))&&(!r||n>r.start)&&(r={start:n,end:e,prefix:i,query:t.slice(n+i.length)})}l.value=r,u.value=0,r&&(s(`search`,r.query,r.prefix),f.value=Dt(d.value,e),G(F))}function W(e){if(I(e.target.value),L(),o.autoSize&&d.value){let e=typeof o.autoSize==`object`?o.autoSize:{},t=parseFloat(getComputedStyle(d.value).lineHeight)||24;d.value.style.height=`auto`,d.value.style.height=`${Math.min((e.maxRows??1/0)*t+20,Math.max((e.minRows??o.rows)*t+20,d.value.scrollHeight))}px`}}async function K(e){let t=l.value;if(!t||e.disabled||o.disabled)return;let n=`${t.prefix}${e.value}${o.split}`;I(p.value.slice(0,t.start)+n+p.value.slice(t.end)),l.value=null,s(`select`,e,t.prefix),await G(),d.value?.focus(),d.value?.setSelectionRange(t.start+n.length,t.start+n.length)}function q(e){if(!l.value)return;let t=v.value.map((e,t)=>e.disabled?-1:t).filter(e=>e>=0);[`ArrowDown`,`ArrowUp`].includes(e.key)&&(e.preventDefault(),u.value=t[(t.indexOf(u.value)+(e.key===`ArrowDown`?1:-1)+t.length)%t.length]??-1),e.key===`Enter`&&v.value[u.value]&&(e.preventDefault(),K(v.value[u.value])),e.key===`Escape`&&(l.value=null)}return(t,i)=>(w(),z(`div`,{class:C([`at-field`,y(n).class]),style:S(y(n).style)},[e.label?(w(),z(`label`,{key:0,for:a.value,class:`at-field__label`},k(e.label),9,Ot)):V(``,!0),N(`div`,{class:C([`at-mentions`,`at-mentions--${e.size}`,{"at-mentions--open":l.value,"at-mentions--error":e.error||e.status===`error`,"at-mentions--warning":e.status===`warning`,"at-mentions--disabled":e.disabled}])},[N(`span`,{ref_key:`anchor`,ref:x,class:`at-mentions__caret`,style:S(f.value?{top:`${f.value.top}px`,left:`${f.value.left}px`,height:`${f.value.height}px`}:void 0)},null,4),N(`textarea`,_({id:a.value,ref_key:`input`,ref:d},{...y(n),class:void 0,style:void 0},{class:`at-mentions__input`,value:p.value,disabled:e.disabled,rows:e.rows,placeholder:e.placeholder,"aria-label":e.label??e.placeholder,"aria-expanded":!!l.value,"aria-controls":l.value?y(O):void 0,onInput:W,onClick:L,onKeyup:[j(L,[`left`]),j(L,[`right`])],onKeydown:q}),null,16,kt)],2),e.error?(w(),z(`span`,At,k(e.error),1)):e.hint?(w(),z(`span`,jt,k(e.hint),1)):V(``,!0),(w(),P(M,{to:`body`},[l.value&&!e.disabled?(w(),z(`div`,{key:0,ref_key:`panel`,ref:E,class:C([`at-popup`,`at-mentions__popup`,e.popupClassName]),style:S([y(D),e.popupStyle])},[N(`ul`,{id:y(O),role:`listbox`,class:`at-popup__list`},[(w(!0),z(H,null,g(v.value,(e,n)=>(w(),z(`li`,{key:e.value,role:`option`,"aria-selected":u.value===n,"aria-disabled":e.disabled,class:C([`at-option`,{"at-option--active":u.value===n,"at-option--disabled":e.disabled}]),onMousedown:i[0]||=B(()=>{},[`prevent`]),onMouseenter:e=>u.value=n,onClick:t=>K(e)},[R(t.$slots,`option`,{option:e,active:u.value===n,query:l.value.query},()=>[e.avatar?(w(),z(`span`,Pt,[A(y(r),{content:e.avatar},null,8,[`content`])])):(w(),z(`span`,Ft,k(e.value.slice(0,1).toUpperCase()),1)),N(`span`,It,[N(`span`,null,[A(y(r),{content:e.label??e.value},null,8,[`content`])]),e.description?(w(),z(`small`,Lt,[A(y(r),{content:e.description},null,8,[`content`])])):V(``,!0)])])],42,Nt))),128)),v.value.length?V(``,!0):(w(),z(`li`,Rt,k(e.notFoundContent),1))],8,Mt)],6)):V(``,!0)]))],6))}}),Bt=[`aria-label`],Vt={class:`at-transfer__header`},Ht=[`aria-label`,`checked`,`indeterminate`,`disabled`,`onChange`],Ut={class:`at-transfer__count`},Wt={key:0,class:`at-transfer__search`},Gt={"aria-hidden":`true`},Kt=[`onUpdate:modelValue`,`placeholder`,`aria-label`,`disabled`],qt=[`onClick`],Jt={class:`at-transfer__list`,role:`list`},Yt={key:0,class:`at-transfer__empty`},Xt={class:`at-transfer__option`},Zt=[`checked`,`disabled`,`onChange`],Qt={class:`at-transfer__text`},$t={key:0},en=[`aria-label`,`disabled`,`onClick`],tn={key:1,class:`at-transfer__footer`},nn={key:0,class:`at-transfer__actions`},rn=[`disabled`,`aria-label`],an={key:0,class:`at-transfer__move-count`},on=[`disabled`,`aria-label`],sn={key:0,class:`at-transfer__move-count`},cn=W({__name:`Transfer`,props:{dataSource:{},targetKeys:{},defaultTargetKeys:{default:()=>[]},selectedKeys:{},titles:{default:()=>[`可选项目`,`已选项目`]},operations:{default:()=>[`移至已选`,`移回可选`]},showSearch:{type:Boolean},searchPlaceholder:{default:`搜索…`},filterOption:{},showSelectAll:{type:Boolean,default:!0},oneWay:{type:Boolean},disabled:{type:Boolean},listStyle:{},notFoundContent:{default:`暂无数据`}},emits:[`update:targetKeys`,`change`,`update:selectedKeys`,`selectChange`],setup(e,{emit:n}){let i=e,a=n,s=b(i.defaultTargetKeys),c=b([]),d=b({left:``,right:``}),f=U(()=>i.targetKeys??s.value),p=U(()=>i.selectedKeys??c.value),m=U(()=>({left:i.dataSource.filter(e=>!f.value.includes(e.key)),right:f.value.map(e=>i.dataSource.find(t=>t.key===e)).filter(e=>!!e)}));function h(e){let t=d.value[e].trim();return m.value[e].filter(e=>!t||(i.filterOption?i.filterOption(t,e):e.title.toLocaleLowerCase().includes(t.toLocaleLowerCase())))}function _(e){return m.value[e].filter(e=>!e.disabled&&p.value.includes(e.key)).map(e=>e.key)}function v(e){i.selectedKeys===void 0&&(c.value=e),a(`update:selectedKeys`,e),a(`selectChange`,e.filter(e=>!f.value.includes(e)),e.filter(e=>f.value.includes(e)))}function x(e,t){let n=t.target.checked;v(n?[...new Set([...p.value,e])]:p.value.filter(t=>t!==e))}function T(e,t){let n=h(e).filter(e=>!e.disabled).map(e=>e.key);v(t.target.checked?[...new Set([...p.value,...n])]:p.value.filter(e=>!n.includes(e)))}function E(e){let t=h(e).filter(e=>!e.disabled);return t.length>0&&t.every(e=>p.value.includes(e.key))}function D(e,t){if(i.disabled)return;let n=t.filter(e=>!i.dataSource.find(t=>t.key===e)?.disabled);if(!n.length)return;let r=e===`right`?[...new Set([...f.value,...n])]:f.value.filter(e=>!n.includes(e));i.targetKeys===void 0&&(s.value=r),a(`update:targetKeys`,r),a(`change`,r,e,n),v(p.value.filter(e=>!n.includes(e)))}return(n,i)=>(w(),z(`div`,{class:C([`at-transfer`,{"at-transfer--one-way":e.oneWay}])},[(w(),z(H,null,g([`left`,`right`],(a,s)=>(w(),z(H,{key:a},[N(`section`,{class:C([`at-transfer__panel`,{"at-transfer__panel--disabled":e.disabled}]),style:S(e.listStyle),"aria-label":typeof e.titles[s]==`string`?e.titles[s]:a===`left`?`可选项目`:`已选项目`},[N(`header`,Vt,[e.showSelectAll&&!(e.oneWay&&a===`right`)?(w(),z(`input`,{key:0,type:`checkbox`,class:`at-transfer__checkbox`,"aria-label":`全选${e.titles[s]}`,checked:E(a),indeterminate:_(a).length>0&&!E(a),disabled:e.disabled||!h(a).some(e=>!e.disabled),onChange:e=>T(a,e)},null,40,Ht)):V(``,!0),N(`strong`,null,[A(y(r),{content:e.titles[s]},null,8,[`content`])]),N(`span`,Ut,k(_(a).length?`${_(a).length}/${m.value[a].length}`:m.value[a].length)+` 项`,1)]),e.showSearch?(w(),z(`label`,Wt,[N(`span`,Gt,[A(y(t),{size:14})]),K(N(`input`,{"onUpdate:modelValue":e=>d.value[a]=e,placeholder:e.searchPlaceholder,"aria-label":`搜索${e.titles[s]}`,disabled:e.disabled},null,8,Kt),[[L,d.value[a]]]),d.value[a]?(w(),z(`button`,{key:0,type:`button`,"aria-label":`清空搜索`,onClick:e=>d.value[a]=``},[A(y(o),{size:14})],8,qt)):V(``,!0)])):V(``,!0),N(`ul`,Jt,[h(a).length?V(``,!0):(w(),z(`li`,Yt,k(e.notFoundContent),1)),(w(!0),z(H,null,g(h(a),t=>(w(),z(`li`,{key:t.key,class:C([`at-transfer__item`,{"at-transfer__item--checked":p.value.includes(t.key),"at-transfer__item--disabled":t.disabled}])},[N(`label`,Xt,[e.oneWay&&a===`right`?V(``,!0):(w(),z(`input`,{key:0,type:`checkbox`,class:`at-transfer__checkbox`,checked:p.value.includes(t.key),disabled:e.disabled||t.disabled,onChange:e=>x(t.key,e)},null,40,Zt)),N(`span`,Qt,[R(n.$slots,`item`,{item:t},()=>[F(k(t.title),1)]),t.description?(w(),z(`small`,$t,[A(y(r),{content:t.description},null,8,[`content`])])):V(``,!0)])]),e.oneWay&&a===`right`?(w(),z(`button`,{key:0,type:`button`,class:`at-transfer__remove`,"aria-label":`移除 ${t.title}`,disabled:e.disabled||t.disabled,onClick:e=>D(`left`,[t.key])},[A(y(o),{size:14})],8,en)):V(``,!0)],2))),128))]),n.$slots.footer?(w(),z(`footer`,tn,[R(n.$slots,`footer`,{direction:a,total:m.value[a].length,selected:_(a).length})])):V(``,!0)],14,Bt),a===`left`?(w(),z(`div`,nn,[N(`button`,{type:`button`,class:`at-transfer__move`,disabled:e.disabled||!_(`left`).length,"aria-label":e.operations[0],onClick:i[0]||=e=>D(`right`,_(`left`))},[A(y(u),{size:16}),_(`left`).length?(w(),z(`span`,an,k(_(`left`).length),1)):V(``,!0)],8,rn),e.oneWay?V(``,!0):(w(),z(`button`,{key:0,type:`button`,class:`at-transfer__move`,disabled:e.disabled||!_(`right`).length,"aria-label":e.operations[1],onClick:i[1]||=e=>D(`left`,_(`right`))},[A(y(l),{size:16}),_(`right`).length?(w(),z(`span`,sn,k(_(`right`).length),1)):V(``,!0)],8,on))])):V(``,!0)],64))),64))],2))}}),ln=W({name:`ControlledSelect`,props:[],setup:(e,{slots:t})=>{let n=O(`frontend`),r=J(n);return()=>q(`div`,{class:`input-demo-grid`},[q(p,{label:`团队角色`,options:Tn,modelValue:n.value,onChange:e=>r(e),hint:`当前值：${n.value||`未选择`}`,allowClear:!0},{}),q(p,{label:`禁用状态`,options:Tn,defaultValue:`pm`,disabled:!0},{})])}}),un=W({name:`MultipleSelect`,props:[],setup:(e,{slots:t})=>{let n=O([`email`,`in-app`]),r=J(n);return()=>q(`div`,{class:`input-demo-grid`},[q(p,{label:`通知渠道`,options:En,multiple:!0,searchable:!0,modelValue:n.value,onChange:e=>r(e),placeholder:`选择通知渠道`},{}),q(p,{label:`折叠超出的标签`,options:En,multiple:!0,defaultValue:[`email`,`in-app`,`slack`,`wecom`],maxTagCount:2},{})])}}),dn=W({name:`CustomSelect`,props:[],setup:(e,{slots:t})=>()=>q(`div`,{class:`input-demo-grid`},[q(p,{label:`分组 + 搜索`,options:Dn,searchable:!0,placeholder:`搜索角色`},{}),q(p,{label:`自定义选项渲染`,options:Tn,defaultValue:`designer`,popupClassName:`demo-select-popup`,popupRender:e=>q(H,null,[e,q(`div`,{class:`at-popup__footer demo-popup-footer`},[q(`span`,{},[`找不到合适的角色？`]),q(`button`,{type:`button`,onClick:()=>window.alert(`新建角色`)},[`新建角色`])])])},{option:e=>((e,{selected:t})=>q(`span`,{class:`demo-option`},[q(`span`,{class:`demo-option__avatar`,"aria-hidden":`true`},[e.label.slice(0,1)]),q(`span`,{class:`demo-option__body`},[q(`strong`,{},[e.label]),e.description&&q(`small`,{},[e.description])]),t&&q(`span`,{class:`demo-option__mark`},[`✓`])]))(e.option,{active:e.active,selected:e.selected,query:e.query})})])}),fn=W({name:`BasicAutoComplete`,props:[],setup:(e,{slots:t})=>{let n=O(``),r=J(n);return()=>q(`div`,{class:`input-demo-grid`},[q(Tt,{label:`负责人`,options:[`林知夏`,`陈一川`,`周禾`,`沈星河`],modelValue:n.value,onChange:r,placeholder:`搜索或输入姓名`,allowClear:!0,hint:n.value?`当前输入：${n.value}`:`支持键盘 ↑ ↓ 选择，Enter 确认`},{}),q(Tt,{label:`邮箱后缀补全`,options:n.value.includes(`@`)?[]:[`gmail.com`,`outlook.com`,`atelier.design`].map(e=>`${n.value||`name`}@${e}`),filterOption:!1,placeholder:`输入邮箱前缀`,onSelect:e=>r(e)},{})])}}),pn=W({name:`StyledAutoComplete`,props:[],setup:(e,{slots:t})=>()=>q(`div`,{class:`input-demo-grid`},[q(Tt,{label:`自定义弹层风格`,options:On,placeholder:`搜索团队成员`,popupClassName:`demo-dark-popup`,popupMatchSelectWidth:!1,popupStyle:{minWidth:320},popupRender:e=>q(H,null,[q(`div`,{class:`demo-dark-popup__title`},[`团队成员`]),e,q(`div`,{class:`demo-dark-popup__footer`},[`↑ ↓ 切换 · Enter 选择 · Esc 关闭`])])},{option:e=>((e,{active:t})=>q(`span`,{class:`demo-member ${t?`demo-member--active`:``}`},[q(`span`,{class:`demo-member__avatar`},[e.value.slice(0,1)]),q(`span`,{class:`demo-member__body`},[q(`strong`,{},[e.value]),q(`small`,{},[e.description])])]))(e.option,{active:e.active,query:e.query})}),q(Tt,{label:`不匹配时的提示`,options:[`设计评审`,`发布计划`,`周会纪要`],notFoundContent:`没有找到相关文档`,placeholder:`搜索文档`,status:`warning`,hint:`status=warning 时边框会变为警示色`},{})])}),mn=W({name:`BasicInputNumber`,props:[],setup:(e,{slots:t})=>{let n=O(8),r=J(n);return()=>q(`div`,{class:`input-demo-grid`},[q(ue,{label:`团队人数`,min:1,max:100,modelValue:n.value,onChange:r,hint:`当前：${n.value??`空`} 人`},{}),q(ue,{label:`预算（万元）`,min:0,step:.5,precision:1,defaultValue:12.5,controls:`inline`},{prefix:()=>`¥`}),q(ue,{label:`折扣`,min:0,max:100,defaultValue:85,formatter:e=>`${e}%`,parser:e=>Number(e.replace(`%`,``))},{}),q(ue,{label:`禁用`,defaultValue:3,disabled:!0},{})])}}),hn=W({name:`BasicRate`,props:[],setup:(e,{slots:t})=>{let n=O(4),r=J(n);return()=>q(`div`,{class:`component-row component-row--align-end`,style:{gap:36}},[q(`div`,{},[q(`span`,{class:`demo-hint`},[`基础评分 · 当前 `,n.value,` 分`]),q(`br`,{},[]),q(_e,{modelValue:n.value,onChange:r},{})]),q(`div`,{},[q(`span`,{class:`demo-hint`},[`半星 + 文案`]),q(`br`,{},[]),q(_e,{allowHalf:!0,defaultValue:3.5,tooltips:[`很差`,`较差`,`一般`,`不错`,`很棒`]},{})]),q(`div`,{},[q(`span`,{class:`demo-hint`},[`只读 / 小尺寸`]),q(`br`,{},[]),q(_e,{defaultValue:5,disabled:!0,size:`sm`,label:`历史评分`,tooltips:[`1 分`,`2 分`,`3 分`,`4 分`,`5 分`]},{})]),q(`div`,{},[q(`span`,{class:`demo-hint`},[`自定义字符`]),q(`br`,{},[]),q(_e,{defaultValue:2,label:`喜爱程度`,tooltips:[`一颗心`,`两颗心`,`三颗心`,`四颗心`,`五颗心`],character:q(`span`,{style:{fontSize:24,lineHeight:1}},[`♥`])},{})])])}}),gn=W({name:`BasicSlider`,props:[],setup:(e,{slots:t})=>{let n=O(72),r=J(n),i=O([20,60]),a=J(i);return()=>q(`div`,{class:`demo-stack`,style:{display:`grid`,gap:28,maxWidth:520}},[q(ct,{label:`透明度`,showValue:!0,modelValue:n.value,onChange:r,tooltipFormatter:e=>`${e}%`},{}),q(ct,{label:`预算区间`,showValue:!0,range:!0,modelValue:i.value,onChange:a,min:0,max:100,step:5},{}),q(ct,{label:`满意度`,marks:{0:`很差`,25:`较差`,50:`一般`,75:`不错`,100:`很棒`},step:null,defaultValue:75,tooltip:`none`},{}),q(ct,{label:`禁用`,defaultValue:40,disabled:!0},{})])}}),_n=W({name:`BasicSegmented`,props:[],setup:(e,{slots:t})=>{let n=O(`list`),r=J(n);return()=>q(`div`,{class:`demo-stack`,style:{display:`grid`,gap:18,justifyItems:`start`}},[q(Re,{options:[{label:`列表`,value:`list`},{label:`看板`,value:`board`},{label:`日历`,value:`calendar`}],modelValue:n.value,onChange:r},{}),q(Re,{options:[{label:`周`,value:`week`,icon:`▤`},{label:`月`,value:`month`,icon:`▦`},{label:`季度`,value:`quarter`,icon:`▧`,disabled:!0}],defaultValue:`month`,size:`sm`,shape:`round`},{}),q(Re,{options:[`全部`,`进行中`,`已完成`],block:!0,style:{width:360},size:`lg`},{}),q(`span`,{class:`demo-hint`},[`当前视图：`,n.value])])}}),vn=W({name:`BasicTimePicker`,props:[],setup:(e,{slots:t})=>{let n=O(`14:30`),r=J(n);return()=>q(`div`,{class:`input-demo-grid`},[q(Pe,{label:`会议时间`,modelValue:n.value,onChange:r,minTime:`09:00`,maxTime:`18:00`,hint:n.value?`已选择 ${n.value}`:`09:00 – 18:00 之间`},{}),q(Pe,{label:`精确到秒`,format:`HH:mm:ss`,defaultValue:`08:15:30`,secondStep:15},{}),q(Pe,{label:`15 分钟间隔`,minuteStep:15,placeholder:`选择时段`,showNow:!1},{}),q(Pe,{label:`禁用`,defaultValue:`10:00`,disabled:!0},{})])}}),yn=W({name:`BasicColorPicker`,props:[],setup:(e,{slots:t})=>{let n=O(`#685cf6`),r=J(n);return()=>q(`div`,{class:`input-demo-grid`},[q(rt,{label:`品牌主色`,modelValue:n.value,onChange:r,presets:[`#685cf6`,`#2f9472`,`#c98a29`,`#d94d64`,`#222438`,`#9298aa`],hint:`当前：${n.value}`},{}),q(rt,{label:`带透明度 · RGB`,defaultValue:`#2f947299`,showAlpha:!0,format:`rgb`},{}),q(`div`,{class:`component-row component-row--align-end`},[q(rt,{label:`仅色块`,defaultValue:`#c98a29`,showText:!1},{}),q(rt,{label:`可清除`,defaultValue:`#d94d64`,allowClear:!0,size:`sm`},{})]),q(`div`,{class:`at-field`},[q(`span`,{class:`at-field__label`},[`实时预览`]),q(`div`,{class:`demo-color-preview`,style:{background:n.value},"aria-hidden":`true`},[])])])}}),bn=W({name:`BasicMentions`,props:[],setup:(e,{slots:t})=>{let n=O(`@林知夏 请确认设计稿`),r=J(n);return()=>q(`div`,{class:`textarea-demo demo-stack`,style:{display:`grid`,gap:18}},[q(zt,{label:`项目留言`,options:On.map(e=>({value:e.value,description:e.description})),modelValue:n.value,onChange:r,autoSize:{minRows:3,maxRows:6},hint:`输入 @ 选择成员`},{}),q(zt,{label:`多种触发符`,options:[`林知夏`,`陈一川`,`周禾`],placeholder:`@ 提及成员，# 关联话题`,rows:2,filterOption:(e,t)=>t.value.includes(e)},{prefix:()=>[`@`,`#`]})])}}),xn=W({name:`BasicCascader`,props:[],setup:(e,{slots:t})=>{let n=O([`cn`,`sh`,`xuhui`]),r=J(n);return()=>q(`div`,{class:`input-demo-grid`},[q(yt,{label:`所在地区`,options:kn,modelValue:n.value,onChange:r,hint:`已选：${n.value.join(` / `)||`无`}`},{}),q(yt,{label:`悬停展开 + 搜索`,options:kn,expandTrigger:`hover`,showSearch:!0,placeholder:`搜索城市或区县`},{}),q(yt,{label:`允许选择任意一级`,options:kn,changeOnSelect:!0,defaultValue:[`cn`,`hz`]},{display:e=>(e=>e.join(` › `))(e.labels)}),q(yt,{label:`禁用`,options:kn,defaultValue:[`sg`,`central`],disabled:!0},{})])}}),Sn=W({name:`BasicTreeSelect`,props:[],setup:(e,{slots:t})=>{let n=O(`web`),r=J(n),i=O([`ux`]),a=J(i);return()=>q(`div`,{class:`input-demo-grid`},[q(dt,{label:`所属团队`,treeData:An,modelValue:n.value,onChange:e=>r(e),showSearch:!0,hint:`当前：${n.value}`},{}),q(dt,{label:`多选可勾选`,treeData:An,treeCheckable:!0,modelValue:i.value,onChange:e=>a(e),treeDefaultExpandAll:!0,placeholder:`选择参与团队`},{}),q(dt,{label:`默认展开指定节点`,treeData:An,treeDefaultExpandedKeys:[`engineering`],placeholder:`请选择团队`,size:`sm`},{}),q(dt,{label:`禁用`,treeData:An,defaultValue:`brand`,disabled:!0},{})])}}),Cn=W({name:`BasicTransfer`,props:[],setup:(e,{slots:t})=>{let n=O([`lin`]),r=J(n);return()=>q(`div`,{class:`demo-stack`,style:{display:`grid`,gap:24}},[q(cn,{dataSource:jn,targetKeys:n.value,onChange:(e,t,n)=>{r(e),console.info(t,n)},titles:[`可选成员`,`项目成员`]},{}),q(cn,{dataSource:jn,defaultTargetKeys:[`chen`,`zhou`],showSearch:!0,oneWay:!0,titles:[`成员库`,`已加入`],operations:[`加入项目`,`移出项目`]},{item:e=>(e=>q(`span`,{},[e.title,q(`span`,{class:`demo-hint`},[` · `,e.description??`未分组`])]))(e.item),footer:e=>((e,t)=>`${e===`left`?`可选`:`已选`} ${t.total} 人`)(e.direction,e)})])}}),wn=W({name:`DataEntryPage`,props:[`id`],setup:(e,{slots:t})=>{let{id:n}=e,r=Mn.find(e=>e.id===n);return r?()=>q(H,null,[q(te,{eyebrow:`DATA ENTRY`,title:r.title,description:r.description,badge:r.badge},{}),r.examples.map(e=>q(c,{key:e.title,title:e.title,description:e.description,code:e.code},{default:()=>[e.preview]})),q(d,{rows:r.rows},{})]):()=>null}}),Tn=[{label:`产品设计师`,value:`designer`,description:`负责界面与体验`},{label:`前端工程师`,value:`frontend`,description:`负责组件与页面实现`},{label:`后端工程师`,value:`backend`},{label:`产品经理`,value:`pm`},{label:`访客（只读）`,value:`guest`,disabled:!0}],En=[{label:`邮件通知`,value:`email`},{label:`站内消息`,value:`in-app`},{label:`Slack`,value:`slack`},{label:`企业微信`,value:`wecom`},{label:`短信`,value:`sms`}],Dn=[{label:`设计`,options:[{label:`产品设计师`,value:`designer`},{label:`品牌设计师`,value:`brand`}]},{label:`研发`,options:[{label:`前端工程师`,value:`frontend`},{label:`后端工程师`,value:`backend`},{label:`测试工程师`,value:`qa`}]}],On=[{value:`林知夏`,description:`lin@atelier.design · 设计`},{value:`陈一川`,description:`chen@atelier.design · 前端`},{value:`周禾`,description:`zhou@atelier.design · 产品`},{value:`沈星河`,description:`shen@atelier.design · 后端`}],kn=[{label:`中国`,value:`cn`,children:[{label:`上海`,value:`sh`,children:[{label:`徐汇区`,value:`xuhui`},{label:`长宁区`,value:`changning`},{label:`浦东新区`,value:`pudong`}]},{label:`杭州`,value:`hz`,children:[{label:`西湖区`,value:`xihu`},{label:`余杭区`,value:`yuhang`}]},{label:`成都`,value:`cd`,disabled:!0}]},{label:`新加坡`,value:`sg`,children:[{label:`中央区`,value:`central`}]}],An=[{label:`设计部`,value:`design`,children:[{label:`品牌组`,value:`brand`},{label:`体验组`,value:`ux`}]},{label:`工程部`,value:`engineering`,children:[{label:`前端组`,value:`frontend`,children:[{label:`Web 小组`,value:`web`},{label:`移动端小组`,value:`mobile`}]},{label:`后端组`,value:`backend`}]},{label:`市场部`,value:`marketing`,disabled:!0}],jn=[{key:`lin`,title:`林知夏`,description:`设计`},{key:`chen`,title:`陈一川`,description:`前端`},{key:`zhou`,title:`周禾`,description:`产品`},{key:`shen`,title:`沈星河`,description:`后端`},{key:`guest`,title:`访客账号`,disabled:!0}],Mn=[{id:`select`,title:`Select 选择器`,icon:`⌄`,group:`数据录入`,badge:`Select`,description:`自绘的下拉选择器，支持搜索、多选、分组、自定义选项与弹层内容。`,examples:[{title:`基础用法`,description:`受控与非受控、清除与禁用。`,preview:q(ln,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { SelectValue } from 'atelier-ui-vue';
import { Select } from "atelier-ui-vue/select";
export const RolePicker = defineComponent({
    "name": "RolePicker",
    "props": [],
    "setup": (props, { slots }) => {
        const role = vueRef('frontend');
        const setRole = refSetter(role);
        return () => (vnode(Fragment, null, [
            vnode(Select, {
                "label": "团队角色",
                "options": roles,
                "modelValue": role.value,
                "onChange": (value: SelectValue) => setRole(value as string),
                "allowClear": true
            }, {}),
            vnode(Select, {
                "label": "禁用状态",
                "options": roles,
                "defaultValue": "pm",
                "disabled": true
            }, {})
        ]));
    }
});
const roles = [
    { label: '产品设计师', value: 'designer', description: '负责界面与体验' },
    { label: '前端工程师', value: 'frontend' },
    { label: '产品经理', value: 'pm' },
    { label: '访客（只读）', value: 'guest', disabled: true },
];
`},{title:`多选与标签折叠`,description:`多选以标签呈现，可配合搜索与 maxTagCount。`,preview:q(un,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { SelectValue } from 'atelier-ui-vue';
import { Select } from "atelier-ui-vue/select";
export const ChannelPicker = defineComponent({
    "name": "ChannelPicker",
    "props": [],
    "setup": (props, { slots }) => {
        const selected = vueRef<string[]>(['email', 'in-app']);
        const setSelected = refSetter(selected);
        return () => (vnode(Fragment, null, [
            vnode(Select, {
                "label": "通知渠道",
                "options": channels,
                "multiple": true,
                "searchable": true,
                "modelValue": selected.value,
                "onChange": (value: SelectValue) => setSelected(value as string[])
            }, {}),
            vnode(Select, {
                "label": "折叠超出的标签",
                "options": channels,
                "multiple": true,
                "defaultValue": ['email', 'in-app', 'slack'],
                "maxTagCount": 2
            }, {})
        ]));
    }
});
const channels = [
    { label: '邮件通知', value: 'email' },
    { label: '站内消息', value: 'in-app' },
    { label: 'Slack', value: 'slack' },
    { label: '企业微信', value: 'wecom' },
];
`},{title:`分组、自定义选项与弹层`,description:`通过 #option 插槽与 popupRender 定制下拉内容。`,preview:q(dn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { SelectOption } from 'atelier-ui-vue';
import { Select } from "atelier-ui-vue/select";
export const GroupedRoles = defineComponent({
    "name": "GroupedRoles",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Fragment, null, [
            vnode(Select, {
                "label": "分组 + 搜索",
                "options": grouped,
                "searchable": true
            }, {}),
            vnode(Select, {
                "label": "自定义选项渲染",
                "options": grouped[1].options,
                "popupRender": (menu: VNodeChild) => (vnode(Fragment, null, [
                    menu,
                    vnode("div", {
                        "class": "at-popup__footer"
                    }, [
                        vnode("button", {
                            "type": "button"
                        }, [
                            "新建角色"
                        ])
                    ])
                ]))
            }, {
                "option": (scope: {
                    option: SelectOption;
                    active: boolean;
                    selected: boolean;
                    query: string;
                }) => ((option: SelectOption, { selected }: { active: boolean; selected: boolean; query: string; }) => (vnode("span", {
                    "class": "option"
                }, [
                    vnode("strong", {}, [
                        option.label
                    ]),
                    selected && vnode("span", {}, [
                        "✓"
                    ])
                ])))(scope.option, { "active": scope.active, "selected": scope.selected, "query": scope.query })
            })
        ]));
    }
});
const grouped = [
    { label: '设计', options: [{ label: '产品设计师', value: 'designer' }, { label: '品牌设计师', value: 'brand' }] },
    { label: '研发', options: [{ label: '前端工程师', value: 'frontend' }, { label: '后端工程师', value: 'backend' }] },
];
`}],rows:[[`options`,`Array<SelectOption | SelectOptionGroup>`,`required`],[`value / defaultValue`,`string | string[]`,`—`],[`onChange`,`(value, option) => void`,`—`],[`multiple / searchable`,`boolean`,`false`],[`allowClear`,`boolean`,`false`],[`maxTagCount`,`number`,`—`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`status`,`'error' | 'warning'`,`—`],[`label / hint / error`,`string`,`—`],[`placeholder`,`string`,`'请选择…'`],[`notFoundContent`,`VNodeChild / slot`,`'暂无匹配选项'`],[`open / onOpenChange`,`boolean / (open) => void`,`—`],[`placement`,`PopupPlacement`,`'bottom-start'`],[`popupClassName / popupStyle`,`string / CSSProperties`,`—`],[`popupMatchSelectWidth`,`boolean`,`true`],[`popupRender`,`(menu) => VNodeChild`,`—`],[`optionRender`,`(option, { active, selected, query }) => VNodeChild`,`—`],[`labelRender`,`(option) => VNodeChild`,`—`]]},{id:`autoComplete`,title:`AutoComplete 自动完成`,icon:`⌕`,group:`数据录入`,badge:`AutoComplete`,description:`输入时提供匹配建议，弹层完全自绘，可自由定制风格与内容。`,examples:[{title:`基础用法`,description:`本地过滤、关键字高亮与键盘导航。`,preview:q(fn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { AutoComplete } from "atelier-ui-vue/auto-complete";
export const OwnerSearch = defineComponent({
    "name": "OwnerSearch",
    "props": [],
    "setup": (props, { slots }) => {
        const value = vueRef('');
        const setValue = refSetter(value);
        return () => (vnode(Fragment, null, [
            vnode(AutoComplete, {
                "label": "负责人",
                "options": ['林知夏', '陈一川', '周禾'],
                "modelValue": value.value,
                "onChange": setValue,
                "allowClear": true,
                "placeholder": "搜索或输入姓名"
            }, {}),
            vnode(AutoComplete, {
                "label": "邮箱后缀补全",
                "filterOption": false,
                "options": value.value.includes('@') ? [] : ['gmail.com', 'outlook.com'].map((domain: string) => \`\${value.value || 'name'}@\${domain}\`),
                "onSelect": (selected: string) => setValue(selected)
            }, {})
        ]));
    }
});
`},{title:`自定义弹层风格`,description:`popupClassName、popupStyle、optionRender 与 popupRender 组合出完全不同的视觉。`,preview:q(pn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { AutoCompleteOption } from 'atelier-ui-vue';
import { AutoComplete } from "atelier-ui-vue/auto-complete";
export const MemberSearch = defineComponent({
    "name": "MemberSearch",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(AutoComplete, {
            "label": "搜索团队成员",
            "options": members,
            "popupClassName": "member-popup",
            "popupMatchSelectWidth": false,
            "popupStyle": { minWidth: 320 },
            "popupRender": (menu: VNodeChild) => (vnode(Fragment, null, [
                vnode("div", {
                    "class": "member-popup__title"
                }, [
                    "团队成员"
                ]),
                menu,
                vnode("div", {
                    "class": "member-popup__footer"
                }, [
                    "↑ ↓ 切换 · Enter 选择"
                ])
            ]))
        }, {
            "option": (scope: {
                option: AutoCompleteOption;
                active: boolean;
                query: string;
            }) => ((option: AutoCompleteOption, { active }: { active: boolean; query: string; }) => (vnode("span", {
                "class": active ? 'member member--active' : 'member'
            }, [
                vnode("span", {
                    "class": "member__avatar"
                }, [
                    option.value.slice(0, 1)
                ]),
                vnode("span", {}, [
                    vnode("strong", {}, [
                        option.value
                    ]),
                    vnode("small", {}, [
                        option.description
                    ])
                ])
            ])))(scope.option, { "active": scope.active, "query": scope.query })
        }));
    }
});
const members = [
    { value: '林知夏', description: 'lin@atelier.design · 设计' },
    { value: '陈一川', description: 'chen@atelier.design · 前端' },
];
`}],rows:[[`options`,`Array<string | AutoCompleteOption>`,`required`],[`value / defaultValue`,`string`,`— / ''`],[`onChange`,`(value: string) => void`,`—`],[`onSelect`,`(value, option) => void`,`—`],[`onSearch`,`(query) => void`,`—`],[`filterOption`,`boolean | (query, option) => boolean`,`true`],[`highlight`,`boolean`,`true`],[`allowClear`,`boolean`,`false`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`status`,`'error' | 'warning'`,`—`],[`label / hint / error`,`string`,`—`],[`prefix / suffix`,`VNodeChild / slot`,`—`],[`notFoundContent`,`VNodeChild / slot`,`null`],[`open / defaultOpen / onOpenChange`,`boolean / boolean / (open) => void`,`—`],[`placement`,`PopupPlacement`,`'bottom-start'`],[`popupClassName / popupStyle`,`string / CSSProperties`,`—`],[`popupMatchSelectWidth`,`boolean`,`true`],[`popupRender`,`(menu) => VNodeChild`,`—`],[`optionRender`,`(option, { active, query }) => VNodeChild`,`—`]]},{id:`inputNumber`,title:`InputNumber 数字输入框`,icon:`#`,group:`数据录入`,badge:`InputNumber`,description:`按范围、步长与精度录入数值，支持长按步进、键盘调节与格式化显示。`,examples:[{title:`基础用法`,description:`受控数值、精度、前缀、格式化与禁用。`,preview:q(mn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { InputNumber } from "atelier-ui-vue/input-number";
export const TeamCapacity = defineComponent({
    "name": "TeamCapacity",
    "props": [],
    "setup": (props, { slots }) => {
        const count = vueRef<number | null>(8);
        const setCount = refSetter(count);
        return () => (vnode(Fragment, null, [
            vnode(InputNumber, {
                "label": "团队人数",
                "min": 1,
                "max": 100,
                "modelValue": count.value,
                "onChange": setCount
            }, {}),
            vnode(InputNumber, {
                "label": "预算（万元）",
                "min": 0,
                "step": 0.5,
                "precision": 1,
                "defaultValue": 12.5,
                "controls": "inline"
            }, {
                "prefix": () => "¥"
            }),
            vnode(InputNumber, {
                "label": "折扣",
                "min": 0,
                "max": 100,
                "defaultValue": 85,
                "formatter": (value: number) => \`\${value}%\`,
                "parser": (text: string) => Number(text.replace('%', ''))
            }, {})
        ]));
    }
});
`}],rows:[[`value / defaultValue`,`number | null`,`— / null`],[`onChange`,`(value: number | null) => void`,`—`],[`min / max`,`number`,`-∞ / ∞`],[`step`,`number`,`1`],[`precision`,`number`,`由 step 推断`],[`controls`,`boolean | 'stacked' | 'inline'`,`'stacked'`],[`keyboard`,`boolean`,`true`],[`formatter / parser`,`(value) => string / (text) => number | null`,`—`],[`prefix / suffix`,`VNodeChild / slot`,`—`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`status`,`'error' | 'warning'`,`—`],[`label / hint / error`,`string`,`—`],[`disabled / readOnly`,`boolean`,`false`]]},{id:`rate`,title:`Rate 评分`,icon:`★`,group:`数据录入`,badge:`Rate`,description:`以星级收集评分，支持半星、文案提示、自定义字符与键盘操作。`,examples:[{title:`基础用法`,description:`受控评分、半星、只读与自定义字符。`,preview:q(hn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Rate } from "atelier-ui-vue/rate";
export const Satisfaction = defineComponent({
    "name": "Satisfaction",
    "props": [],
    "setup": (props, { slots }) => {
        const score = vueRef(4);
        const setScore = refSetter(score);
        return () => (vnode(Fragment, null, [
            vnode(Rate, {
                "modelValue": score.value,
                "onChange": setScore
            }, {}),
            vnode(Rate, {
                "allowHalf": true,
                "defaultValue": 3.5,
                "tooltips": ['很差', '较差', '一般', '不错', '很棒']
            }, {}),
            vnode(Rate, {
                "defaultValue": 5,
                "disabled": true,
                "size": "sm"
            }, {}),
            vnode(Rate, {
                "defaultValue": 2,
                "character": vnode("span", {}, [
                    "♥"
                ])
            }, {})
        ]));
    }
});
`}],rows:[[`value / defaultValue`,`number`,`— / 0`],[`onChange`,`(value: number) => void`,`—`],[`onHoverChange`,`(value: number | null) => void`,`—`],[`count`,`number`,`5`],[`allowHalf`,`boolean`,`false`],[`allowClear`,`boolean`,`true`],[`disabled`,`boolean`,`false`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`character`,`VNodeChild | (index) => VNodeChild`,`★`],[`tooltips`,`string[]`,`—`],[`label`,`string`,`'评分'`]]},{id:`slider`,title:`Slider 滑动输入条`,icon:`━`,group:`数据录入`,badge:`Slider`,description:`在数值区间内拖动取值，支持双滑块范围、刻度标记、提示气泡与键盘微调。`,examples:[{title:`基础用法`,description:`单值、范围、刻度吸附与禁用。`,preview:q(gn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Slider } from "atelier-ui-vue/slider";
export const OpacitySetting = defineComponent({
    "name": "OpacitySetting",
    "props": [],
    "setup": (props, { slots }) => {
        const opacity = vueRef(72);
        const setOpacity = refSetter(opacity);
        const range = vueRef<[
            number,
            number
        ]>([20, 60]);
        const setRange = refSetter(range);
        return () => (vnode(Fragment, null, [
            vnode(Slider, {
                "label": "透明度",
                "showValue": true,
                "modelValue": opacity.value,
                "onChange": setOpacity,
                "tooltipFormatter": (value: number) => \`\${value}%\`
            }, {}),
            vnode(Slider, {
                "label": "预算区间",
                "showValue": true,
                "range": true,
                "modelValue": range.value,
                "onChange": setRange,
                "step": 5
            }, {}),
            vnode(Slider, {
                "label": "满意度",
                "marks": { 0: '很差', 50: '一般', 100: '很棒' },
                "step": null,
                "defaultValue": 50,
                "tooltip": "none"
            }, {})
        ]));
    }
});
`}],rows:[[`value / defaultValue`,`number | [number, number]`,`— / min`],[`onChange`,`(value) => void`,`—`],[`onChangeComplete`,`(value) => void`,`—`],[`min / max`,`number`,`0 / 100`],[`step`,`number | null`,`1`],[`range`,`boolean`,`false`],[`marks`,`Record<number, VNodeChild | { label, style }>`,`—`],[`tooltip`,`'auto' | 'always' | 'none'`,`'auto'`],[`tooltipFormatter`,`(value) => VNodeChild`,`—`],[`vertical`,`boolean`,`false`],[`showValue`,`boolean`,`false`],[`included`,`boolean`,`true`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`disabled`,`boolean`,`false`]]},{id:`segmented`,title:`Segmented 分段控制器`,icon:`◧`,group:`数据录入`,badge:`Segmented`,description:`在少量互斥选项间切换，带平滑滑动的指示块与方向键导航。`,examples:[{title:`基础用法`,description:`受控切换、图标、尺寸、圆角与通栏布局。`,preview:q(_n,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Segmented } from "atelier-ui-vue/segmented";
export const ViewSwitch = defineComponent({
    "name": "ViewSwitch",
    "props": [],
    "setup": (props, { slots }) => {
        const view = vueRef<'list' | 'board' | 'calendar'>('list');
        const setView = refSetter(view);
        return () => (vnode(Fragment, null, [
            vnode(Segmented, {
                "options": [{ label: '列表', value: 'list' }, { label: '看板', value: 'board' }, { label: '日历', value: 'calendar' }],
                "modelValue": view.value,
                "onChange": setView
            }, {}),
            vnode(Segmented, {
                "options": [{ label: '周', value: 'week', icon: '▤' }, { label: '月', value: 'month', icon: '▦' }],
                "defaultValue": "month",
                "size": "sm",
                "shape": "round"
            }, {}),
            vnode(Segmented, {
                "options": ['全部', '进行中', '已完成'],
                "block": true,
                "size": "lg"
            }, {})
        ]));
    }
});
`}],rows:[[`options`,`Array<string | { label, value, icon?, disabled? }>`,`required`],[`value / defaultValue`,`string`,`— / 首个可用项`],[`onChange`,`(value) => void`,`—`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`block`,`boolean`,`false`],[`vertical`,`boolean`,`false`],[`shape`,`'default' | 'round'`,`'default'`],[`disabled`,`boolean`,`false`],[`label`,`string`,`'视图切换'`]]},{id:`timePicker`,title:`TimePicker 时间选择`,icon:`◷`,group:`数据录入`,badge:`TimePicker`,description:`通过时 / 分 / 秒滚动列选择时间，支持步长、禁用区间与“此刻”快捷操作。`,examples:[{title:`基础用法`,description:`受控值、秒级精度、分钟步长与范围限制。`,preview:q(vn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { TimePicker } from "atelier-ui-vue/time-picker";
export const MeetingTime = defineComponent({
    "name": "MeetingTime",
    "props": [],
    "setup": (props, { slots }) => {
        const time = vueRef<string | null>('14:30');
        const setTime = refSetter(time);
        return () => (vnode(Fragment, null, [
            vnode(TimePicker, {
                "label": "会议时间",
                "modelValue": time.value,
                "onChange": setTime,
                "minTime": "09:00",
                "maxTime": "18:00"
            }, {}),
            vnode(TimePicker, {
                "label": "精确到秒",
                "format": "HH:mm:ss",
                "defaultValue": "08:15:30",
                "secondStep": 15
            }, {}),
            vnode(TimePicker, {
                "label": "15 分钟间隔",
                "minuteStep": 15,
                "showNow": false
            }, {})
        ]));
    }
});
`}],rows:[[`value / defaultValue`,`string | null`,`— / null`],[`onChange`,`(value: string | null, parts) => void`,`—`],[`format`,`'HH:mm' | 'HH:mm:ss'`,`'HH:mm'`],[`hourStep / minuteStep / secondStep`,`number`,`1`],[`minTime / maxTime`,`string ('HH:mm')`,`—`],[`disabledHours / disabledMinutes / disabledSeconds`,`() => number[] 等`,`—`],[`showNow`,`boolean`,`true`],[`allowClear`,`boolean`,`true`],[`placeholder`,`string`,`'选择时间'`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`status`,`'error' | 'warning'`,`—`],[`label / hint / error`,`string`,`—`],[`open / onOpenChange`,`boolean / (open) => void`,`—`],[`popupClassName / popupStyle`,`string / CSSProperties`,`—`]]},{id:`colorPicker`,title:`ColorPicker 颜色选择器`,icon:`◉`,group:`数据录入`,badge:`ColorPicker`,description:`自绘的 HSV 取色面板，支持透明度、多种格式、预设色板与手动输入。`,examples:[{title:`基础用法`,description:`受控颜色、透明度通道、不同输出格式与仅色块模式。`,preview:q(yn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { ColorPicker } from "atelier-ui-vue/color-picker";
export const BrandColor = defineComponent({
    "name": "BrandColor",
    "props": [],
    "setup": (props, { slots }) => {
        const color = vueRef('#685cf6');
        const setColor = refSetter(color);
        return () => (vnode(Fragment, null, [
            vnode(ColorPicker, {
                "label": "品牌主色",
                "modelValue": color.value,
                "onChange": setColor,
                "presets": ['#685cf6', '#2f9472', '#c98a29', '#d94d64']
            }, {}),
            vnode(ColorPicker, {
                "label": "带透明度 · RGB",
                "defaultValue": "#2f947299",
                "showAlpha": true,
                "format": "rgb"
            }, {}),
            vnode(ColorPicker, {
                "label": "仅色块",
                "defaultValue": "#c98a29",
                "showText": false
            }, {})
        ]));
    }
});
`}],rows:[[`value / defaultValue`,`string`,`— / '#685cf6'`],[`onChange`,`(hex, color: ColorValue) => void`,`—`],[`onChangeComplete`,`(hex, color) => void`,`—`],[`format`,`'hex' | 'rgb' | 'hsl'`,`'hex'`],[`showAlpha`,`boolean`,`false`],[`showText`,`boolean`,`true`],[`presets`,`string[] | Array<{ label, colors }>`,`—`],[`allowClear`,`boolean`,`false`],[`disabled`,`boolean`,`false`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`label / hint / error`,`string`,`—`],[`open / onOpenChange`,`boolean / (open) => void`,`—`],[`popupClassName / popupStyle`,`string / CSSProperties`,`—`]]},{id:`mentions`,title:`Mentions 提及`,icon:`@`,group:`数据录入`,badge:`Mentions`,description:`在多行文本中输入触发符后弹出候选成员，弹层跟随光标位置。`,examples:[{title:`基础用法`,description:`自动高度、多触发符与自定义过滤。`,preview:q(bn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Mentions } from "atelier-ui-vue/mentions";
export const TeamNote = defineComponent({
    "name": "TeamNote",
    "props": [],
    "setup": (props, { slots }) => {
        const text = vueRef('@林知夏 请确认设计稿');
        const setText = refSetter(text);
        return () => (vnode(Fragment, null, [
            vnode(Mentions, {
                "label": "项目留言",
                "options": members,
                "modelValue": text.value,
                "onChange": setText,
                "autoSize": { minRows: 3, maxRows: 6 }
            }, {}),
            vnode(Mentions, {
                "label": "多种触发符",
                "options": ['林知夏', '陈一川'],
                "rows": 2
            }, {
                "prefix": () => ['@', '#']
            })
        ]));
    }
});
const members = [
    { value: '林知夏', description: 'lin@atelier.design · 设计' },
    { value: '陈一川', description: 'chen@atelier.design · 前端' },
];
`}],rows:[[`options`,`Array<string | MentionOption>`,`required`],[`value / defaultValue`,`string`,`— / ''`],[`onChange`,`(value: string) => void`,`—`],[`onSelect`,`(option, prefix) => void`,`—`],[`onSearch`,`(query, prefix) => void`,`—`],[`prefix`,`string | string[]`,`'@'`],[`split`,`string`,`' '`],[`filterOption`,`boolean | (query, option) => boolean`,`true`],[`autoSize`,`boolean | { minRows, maxRows }`,`false`],[`rows`,`number`,`3`],[`notFoundContent`,`VNodeChild / slot`,`'没有匹配的成员'`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`status`,`'error' | 'warning'`,`—`],[`label / hint / error`,`string`,`—`],[`popupClassName / popupStyle`,`string / CSSProperties`,`—`],[`optionRender`,`(option, { active, query }) => VNodeChild`,`—`]]},{id:`cascader`,title:`Cascader 级联选择`,icon:`⋯`,group:`数据录入`,badge:`Cascader`,description:`多列级联面板按层级选择路径，支持悬停展开、任意层级选择与路径搜索。`,examples:[{title:`基础用法`,description:`受控路径、悬停展开 + 搜索、任意层级选择与禁用。`,preview:q(xn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Cascader } from "atelier-ui-vue/cascader";
export const RegionPicker = defineComponent({
    "name": "RegionPicker",
    "props": [],
    "setup": (props, { slots }) => {
        const path = vueRef<string[]>(['cn', 'sh', 'xuhui']);
        const setPath = refSetter(path);
        return () => (vnode(Fragment, null, [
            vnode(Cascader, {
                "label": "所在地区",
                "options": regions,
                "modelValue": path.value,
                "onChange": setPath
            }, {}),
            vnode(Cascader, {
                "label": "悬停展开 + 搜索",
                "options": regions,
                "expandTrigger": "hover",
                "showSearch": true
            }, {}),
            vnode(Cascader, {
                "label": "允许选择任意一级",
                "options": regions,
                "changeOnSelect": true
            }, {
                "display": (scope: {
                    labels: string[];
                }) => ((labels: string[]) => labels.join(' › '))(scope.labels)
            })
        ]));
    }
});
const regions = [
    { label: '中国', value: 'cn', children: [
            { label: '上海', value: 'sh', children: [{ label: '徐汇区', value: 'xuhui' }, { label: '浦东新区', value: 'pudong' }] },
            { label: '杭州', value: 'hz', children: [{ label: '西湖区', value: 'xihu' }] },
        ] },
];
`}],rows:[[`options`,`CascaderOption[]`,`required`],[`value / defaultValue`,`string[]`,`— / []`],[`onChange`,`(path, selectedOptions) => void`,`—`],[`expandTrigger`,`'click' | 'hover'`,`'click'`],[`changeOnSelect`,`boolean`,`false`],[`showSearch`,`boolean`,`false`],[`displayRender`,`(labels, selectedOptions) => VNodeChild`,`labels.join(' / ')`],[`allowClear`,`boolean`,`true`],[`notFoundContent`,`VNodeChild / slot`,`'暂无匹配选项'`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`status`,`'error' | 'warning'`,`—`],[`label / hint / error`,`string`,`—`],[`disabled`,`boolean`,`false`],[`open / onOpenChange`,`boolean / (open) => void`,`—`],[`popupClassName / popupStyle`,`string / CSSProperties`,`—`]]},{id:`treeSelect`,title:`TreeSelect 树选择`,icon:`⌥`,group:`数据录入`,badge:`TreeSelect`,description:`以树形面板从层级数据中选择，支持搜索、单选 / 多选与级联勾选。`,examples:[{title:`基础用法`,description:`单选搜索、可勾选多选、默认展开与禁用。`,preview:q(Sn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { TreeSelectValue } from 'atelier-ui-vue';
import { TreeSelect } from "atelier-ui-vue/tree-select";
export const TeamSelect = defineComponent({
    "name": "TeamSelect",
    "props": [],
    "setup": (props, { slots }) => {
        const team = vueRef('web');
        const setTeam = refSetter(team);
        const checked = vueRef<string[]>(['ux']);
        const setChecked = refSetter(checked);
        return () => (vnode(Fragment, null, [
            vnode(TreeSelect, {
                "label": "所属团队",
                "treeData": teams,
                "modelValue": team.value,
                "onChange": (value: TreeSelectValue) => setTeam(value as string),
                "showSearch": true
            }, {}),
            vnode(TreeSelect, {
                "label": "多选可勾选",
                "treeData": teams,
                "treeCheckable": true,
                "modelValue": checked.value,
                "onChange": (value: TreeSelectValue) => setChecked(value as string[]),
                "treeDefaultExpandAll": true
            }, {})
        ]));
    }
});
const teams = [
    { label: '设计部', value: 'design', children: [{ label: '品牌组', value: 'brand' }, { label: '体验组', value: 'ux' }] },
    { label: '工程部', value: 'engineering', children: [
            { label: '前端组', value: 'frontend', children: [{ label: 'Web 小组', value: 'web' }] },
            { label: '后端组', value: 'backend' },
        ] },
];
`}],rows:[[`treeData`,`TreeSelectNode[]`,`required`],[`value / defaultValue`,`string | string[]`,`—`],[`onChange`,`(value, nodes) => void`,`—`],[`multiple`,`boolean`,`false`],[`treeCheckable`,`boolean`,`false`],[`showSearch`,`boolean`,`false`],[`treeDefaultExpandAll`,`boolean`,`false`],[`treeDefaultExpandedKeys`,`string[]`,`—`],[`maxTagCount`,`number`,`—`],[`allowClear`,`boolean`,`true`],[`notFoundContent`,`VNodeChild / slot`,`'暂无匹配选项'`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`status`,`'error' | 'warning'`,`—`],[`label / hint / error`,`string`,`—`],[`disabled`,`boolean`,`false`],[`popupClassName / popupStyle`,`string / CSSProperties`,`—`],[`popupMatchSelectWidth`,`boolean`,`true`]]},{id:`transfer`,title:`Transfer 穿梭框`,icon:`⇄`,group:`数据录入`,badge:`Transfer`,description:`在两个列表间批量移动条目，支持全选、搜索、单向模式与自定义渲染。`,examples:[{title:`基础用法`,description:`受控目标列表、搜索、单向移除与自定义条目 / 页脚。`,preview:q(Cn,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { TransferDirection, TransferItem } from 'atelier-ui-vue';
import { Transfer } from "atelier-ui-vue/transfer";
export const MemberTransfer = defineComponent({
    "name": "MemberTransfer",
    "props": [],
    "setup": (props, { slots }) => {
        const targets = vueRef<string[]>(['lin']);
        const setTargets = refSetter(targets);
        return () => (vnode(Fragment, null, [
            vnode(Transfer, {
                "dataSource": members,
                "targetKeys": targets.value,
                "onChange": (keys: string[]) => setTargets(keys),
                "titles": ['可选成员', '项目成员']
            }, {}),
            vnode(Transfer, {
                "dataSource": members,
                "defaultTargetKeys": ['chen'],
                "showSearch": true,
                "oneWay": true
            }, {
                "item": (scope: {
                    item: TransferItem;
                }) => ((item: TransferItem) => vnode("span", {}, [
                    item.title,
                    " · ",
                    item.description
                ]))(scope.item),
                "footer": (scope: {
                    direction: TransferDirection;
                    total: number;
                    selected: number;
                }) => ((direction: TransferDirection, info: { total: number; selected: number; }) => \`\${direction === 'left' ? '可选' : '已选'} \${info.total} 人\`)(scope.direction, scope)
            })
        ]));
    }
});
const members = [
    { key: 'lin', title: '林知夏', description: '设计' },
    { key: 'chen', title: '陈一川', description: '前端' },
    { key: 'zhou', title: '周禾', description: '产品' },
    { key: 'guest', title: '访客账号', disabled: true },
];
`}],rows:[[`dataSource`,`TransferItem[]`,`required`],[`targetKeys / defaultTargetKeys`,`string[]`,`— / []`],[`onChange`,`(targetKeys, direction, moveKeys) => void`,`—`],[`selectedKeys / onSelectChange`,`string[] / (source, target) => void`,`—`],[`titles`,`[VNodeChild, VNodeChild]`,`['可选项目', '已选项目']`],[`operations`,`[string, string]`,`['移至已选', '移回可选']`],[`showSearch`,`boolean`,`false`],[`filterOption`,`(query, item) => boolean`,`按标题包含`],[`render`,`(item) => VNodeChild`,`item.title`],[`footer`,`(direction, { total, selected }) => VNodeChild`,`—`],[`showSelectAll`,`boolean`,`true`],[`oneWay`,`boolean`,`false`],[`disabled`,`boolean`,`false`],[`listStyle`,`CSSProperties`,`—`],[`notFoundContent`,`VNodeChild / slot`,`'暂无数据'`]]}];export{wn as DataEntryPage};