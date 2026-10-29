import{t as e}from"./Tag-C47n_nSU.js";import{a as t,b as n,h as r,l as i,n as a,s as o,t as s}from"./ApiTable-CMaXdLlV.js";import{t as c}from"./floating-__mp8I0T.js";import{t as l}from"./Overlay-B8C-6DYA.js";import{A as u,E as d,F as f,G as p,H as m,I as h,J as g,K as _,L as v,M as y,N as b,O as x,R as S,S as C,T as w,V as T,W as E,Y as D,_ as O,a as k,b as A,c as ee,d as j,f as M,g as N,j as P,k as F,m as I,n as L,o as R,p as z,q as te,s as B,t as ne,u as V,v as H,w as U,x as W,y as re}from"./index-CILakwI7.js";import{a as G,i as K,t as ie}from"./shared-DuhUujBE.js";var ae={key:0,class:`at-popover__title`},oe={class:`at-popover__content`},q=H({__name:`Popover`,props:{content:{},title:{},arrow:{type:Boolean,default:!0},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean},disabled:{type:Boolean},trigger:{default:`click`},placement:{default:`bottom`},overlayClassName:{},mouseEnterDelay:{},mouseLeaveDelay:{}},emits:[`update:open`],setup(e,{emit:t}){let n=t;return(t,r)=>(x(),M(l,{class:`at-popover__trigger`,open:e.open,"default-open":e.defaultOpen,disabled:e.disabled,trigger:e.trigger,placement:e.placement,"mouse-enter-delay":e.mouseEnterDelay,"mouse-leave-delay":e.mouseLeaveDelay,"panel-class":[`at-popover__panel`,e.arrow?`at-popover__panel--arrow`:``,e.overlayClassName].filter(Boolean).join(` `),"onUpdate:open":r[0]||=e=>n(`update:open`,e)},{content:S(n=>[e.title||t.$slots.title?(x(),I(`strong`,ae,[P(t.$slots,`title`,{},()=>[N(D(e.title),1)])])):z(``,!0),j(`div`,oe,[P(t.$slots,`content`,te(A(n)),()=>[N(D(e.content),1)])])]),default:S(()=>[P(t.$slots,`default`)]),_:3},8,[`open`,`default-open`,`disabled`,`trigger`,`placement`,`mouse-enter-delay`,`mouse-leave-delay`,`panel-class`]))}}),se={class:`at-popconfirm__body`},ce={class:`at-popconfirm__text`},le={class:`at-popconfirm__title`},ue={key:0,class:`at-popconfirm__description`},de={key:1,class:`at-popconfirm__error`,role:`alert`},fe={class:`at-popconfirm__actions`},J=H({__name:`Popconfirm`,props:{title:{},description:{},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean},disabled:{type:Boolean},placement:{default:`top`},okText:{default:`确定`},cancelText:{default:`取消`},okType:{default:`primary`},showCancel:{type:Boolean,default:!0},errorText:{default:`操作失败，请重试。`},onConfirm:{}},emits:[`update:open`,`cancel`],setup(e,{emit:t}){let n=e,r=m(!1),i=m(!1),a=t;async function o(e,t){if(!r.value){r.value=!0,i.value=!1;try{await n.onConfirm?.(e),t()}catch{i.value=!0}finally{r.value=!1}}}return(t,n)=>(x(),M(l,{class:`at-popconfirm__trigger`,open:e.open,"default-open":e.defaultOpen,disabled:e.disabled,placement:e.placement,"panel-class":`at-popconfirm__panel`,role:`alertdialog`,"onUpdate:open":n[0]||=e=>a(`update:open`,e)},{content:S(({close:s})=>[j(`div`,se,[j(`span`,{class:_([`at-popconfirm__icon`,{"at-popconfirm__icon--danger":e.okType===`danger`}]),"aria-hidden":`true`},[P(t.$slots,`icon`,{},()=>[n[1]||=N(`!`,-1)])],2),j(`div`,ce,[j(`strong`,le,[P(t.$slots,`title`,{},()=>[N(D(e.title),1)])]),e.description?(x(),I(`span`,ue,D(e.description),1)):z(``,!0),i.value?(x(),I(`span`,de,D(e.errorText),1)):z(``,!0)])]),j(`div`,fe,[e.showCancel?(x(),M(L,{key:0,size:`sm`,disabled:r.value,onClick:e=>{a(`cancel`,e),s()}},{default:S(()=>[N(D(e.cancelText),1)]),_:1},8,[`disabled`,`onClick`])):z(``,!0),O(L,{size:`sm`,variant:e.okType,loading:r.value,onClick:e=>o(e,s)},{default:S(()=>[N(D(e.okText),1)]),_:1},8,[`variant`,`loading`,`onClick`])])]),default:S(()=>[P(t.$slots,`default`)]),_:3},8,[`open`,`default-open`,`disabled`,`placement`]))}}),pe=H({__name:`Affix`,props:{offsetTop:{},offsetBottom:{},target:{type:Function}},emits:[`change`],setup(e,{emit:t}){let n=e,r=t,i=m(null),a=m(null),o=m(),s=m(),c;function l(){if(!i.value||!a.value)return;let e=n.target?.()??window,t=e===window?{top:0,bottom:innerHeight}:e.getBoundingClientRect(),c=i.value.getBoundingClientRect(),l=a.value.getBoundingClientRect().height,u;if(n.offsetBottom!==void 0){let e=t.bottom-n.offsetBottom;c.top+l>e&&(u={position:`fixed`,bottom:`${innerHeight-e}px`,left:`${c.left}px`,width:`${c.width}px`,zIndex:10})}else{let e=t.top+(n.offsetTop??0);c.top<e&&(u={position:`fixed`,top:`${e}px`,left:`${c.left}px`,width:`${c.width}px`,zIndex:10})}!!u!=!!o.value&&r(`change`,!!u),o.value=u,s.value=u?{height:`${l}px`}:void 0}function u(){c?.(),l();let e=n.target?.()??window;e.addEventListener(`scroll`,l,{passive:!0}),window.addEventListener(`resize`,l);let t=typeof ResizeObserver>`u`?void 0:new ResizeObserver(l);a.value&&t?.observe(a.value),c=()=>{e.removeEventListener(`scroll`,l),window.removeEventListener(`resize`,l),t?.disconnect()}}return d(()=>{u(),h(()=>[n.offsetTop,n.offsetBottom,n.target],u)}),w(()=>c?.()),(e,t)=>(x(),I(`div`,{ref_key:`root`,ref:i,class:_([`at-affix`,{"at-affix--fixed":o.value}]),style:g(s.value)},[j(`div`,{ref_key:`content`,ref:a,class:`at-affix__content`,style:g(o.value)},[P(e.$slots,`default`)],4)],6))}}),me=Symbol(`AtelierFloatGroup`),he={class:`at-float-button__body`},ge={class:`at-float-button__icon`},_e={key:0,class:`at-float-button__description`},Y=H({__name:`FloatButton`,props:{description:{},shape:{},type:{default:`default`},htmlType:{default:`button`},tooltip:{},href:{},target:{},badge:{},inline:{type:Boolean,default:void 0},disabled:{type:Boolean}},setup(e){let t=e,n=C(me,null),r=V(()=>t.shape??n?.shape??`circle`),i=V(()=>t.inline??n?.inline??!1);return(t,n)=>(x(),M(b(e.href?`a`:`button`),{href:e.disabled?void 0:e.href,target:e.target,rel:e.target===`_blank`?`noreferrer`:void 0,type:e.href?void 0:e.htmlType,disabled:e.disabled,"aria-disabled":e.disabled||void 0,class:_([`at-float-button`,`at-float-button--${r.value}`,`at-float-button--${e.type}`,{"at-float-button--inline":i.value,"at-float-button--with-description":e.description}]),title:e.tooltip,"aria-label":e.tooltip??e.description},{default:S(()=>[j(`span`,he,[j(`span`,ge,[P(t.$slots,`icon`,{},()=>[P(t.$slots,`default`,{},()=>[n[0]||=N(`↑`,-1)])])]),e.description?(x(),I(`span`,_e,D(e.description),1)):z(``,!0)]),e.badge&&(e.badge.dot||(e.badge.count??0)>0)?(x(),I(`span`,{key:0,class:_([`at-float-button__badge`,{"at-float-button__badge--dot":e.badge.dot}]),"aria-hidden":`true`},D(e.badge.dot?``:(e.badge.count??0)>(e.badge.overflowCount??99)?`${e.badge.overflowCount??99}+`:e.badge.count),3)):z(``,!0)]),_:3},8,[`href`,`target`,`rel`,`type`,`disabled`,`aria-disabled`,`class`,`title`,`aria-label`]))}}),ve=[`role`,`aria-hidden`,`inert`],ye=H({__name:`FloatButtonGroup`,props:{shape:{default:`circle`},type:{default:`default`},trigger:{},open:{type:Boolean,default:void 0},description:{},tooltip:{},placement:{default:`top`},inline:{type:Boolean}},emits:[`update:open`],setup(e,{emit:t}){let n=e,a=t,o=m(!1),s=m(null),c=V(()=>n.open??o.value),l=V(()=>!n.trigger||c.value);F(me,T({get shape(){return n.shape},inline:!0}));function u(e){n.open===void 0&&(o.value=e),a(`update:open`,e)}v(e=>{if(!c.value||typeof document>`u`)return;let t=e=>{s.value?.contains(e.target)||u(!1)},n=e=>{e.key===`Escape`&&u(!1)};document.addEventListener(`pointerdown`,t),document.addEventListener(`keydown`,n),e(()=>{document.removeEventListener(`pointerdown`,t),document.removeEventListener(`keydown`,n)})});let d;w(()=>clearTimeout(d));function f(){clearTimeout(d),n.trigger===`hover`&&u(!0)}function h(){n.trigger===`hover`&&(d=setTimeout(()=>u(!1),100))}return(t,n)=>(x(),I(`div`,{ref_key:`root`,ref:s,class:_([`at-float-button-group`,`at-float-button-group--${e.shape}`,`at-float-button-group--${e.placement}`,{"at-float-button-group--menu":e.trigger,"at-float-button-group--open":l.value,"at-float-button-group--inline":e.inline}]),onMouseenter:f,onMouseleave:h},[j(`div`,{class:`at-float-button-group__items`,role:e.trigger?`menu`:void 0,"aria-hidden":!l.value,inert:!l.value},[P(t.$slots,`default`)],8,ve),e.trigger?(x(),M(Y,{key:0,type:e.type,shape:e.shape,inline:``,description:c.value?void 0:e.description,tooltip:e.tooltip,"aria-expanded":c.value,"aria-haspopup":`menu`,class:`at-float-button-group__trigger`,onClick:n[0]||=e=>u(!c.value)},{default:S(()=>[c.value?P(t.$slots,`closeIcon`,{},()=>[O(p(i),{size:20})],void 0,0):P(t.$slots,`icon`,{},()=>[O(p(r),{size:22})],void 0,1)]),_:3},8,[`type`,`shape`,`description`,`tooltip`,`aria-expanded`])):z(``,!0)],34))}}),be=H({__name:`BackTop`,props:{visibilityHeight:{default:400},target:{},duration:{default:450},tooltip:{default:`回到顶部`}},emits:[`click`],setup(e,{emit:t}){let n=e,r=t,i=m(!1),a,o=0;function s(){a?.();let e=n.target?.()??window,t=()=>{i.value=(e===window?window.scrollY:e.scrollTop)>n.visibilityHeight};t(),e.addEventListener(`scroll`,t,{passive:!0}),a=()=>e.removeEventListener(`scroll`,t)}d(()=>{s(),h(()=>[n.target,n.visibilityHeight],s)}),w(()=>{a?.(),cancelAnimationFrame(o)});function c(){let e=n.target?.()??window;if(cancelAnimationFrame(o),matchMedia(`(prefers-reduced-motion: reduce)`).matches||n.duration<=0)e.scrollTo({top:0});else{let t=e===window?scrollY:e.scrollTop,r=performance.now(),i=a=>{let s=Math.min(1,(a-r)/n.duration);e.scrollTo({top:t*(1-s)**3}),s<1&&(o=requestAnimationFrame(i))};o=requestAnimationFrame(i)}r(`click`)}return(t,n)=>(x(),M(Y,{tooltip:e.tooltip,class:_([`at-back-top`,{"at-back-top--visible":i.value}]),"aria-hidden":!i.value,tabindex:i.value?0:-1,onClick:c},{default:S(()=>[P(t.$slots,`icon`,{},()=>[n[0]||=j(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[j(`path`,{d:`M12 19V6M5 12l7-7 7 7`})],-1)])]),_:3},8,[`tooltip`,`class`,`aria-hidden`,`tabindex`]))}}),xe=H({name:`Anchor`,props:{items:{type:Array,required:!0},offsetTop:{type:Number,default:0},bounds:{type:Number,default:5},targetOffset:Number,direction:{type:String,default:`vertical`},affix:{type:Boolean,default:!0},getContainer:Function,replace:Boolean},emits:[`change`,`click`],setup(e,{emit:t,slots:n}){let r=m(null),i=m(``),a=m(),o=0,s,c=e=>e.flatMap(e=>[e,...c(e.children??[])]);function l(e){if(!e.startsWith(`#`))return null;try{return document.getElementById(decodeURIComponent(e.slice(1)))}catch{return null}}function u(){let t=r.value?.querySelector(`.at-anchor__link--active`);a.value=t?e.direction===`vertical`?{top:`${t.offsetTop}px`,height:`${t.offsetHeight}px`}:{left:`${t.offsetLeft}px`,width:`${t.offsetWidth}px`}:void 0}function f(e){i.value!==e&&(i.value=e,t(`change`,e)),U(u)}function p(){if(Date.now()<o)return;let t=e.getContainer?.()??window,n=t===window?0:t.getBoundingClientRect().top,r=``,i=-1/0;c(e.items).forEach(t=>{let a=l(t.href);if(!a)return;let o=a.getBoundingClientRect().top-n;o<=e.offsetTop+e.bounds&&o>i&&(r=t.href,i=o)}),f(r),u()}function g(){s?.();let t=e.getContainer?.()??window;p(),t.addEventListener(`scroll`,p,{passive:!0}),window.addEventListener(`resize`,p),s=()=>{t.removeEventListener(`scroll`,p),window.removeEventListener(`resize`,p)}}d(()=>{g(),h(()=>[e.items,e.offsetTop,e.bounds,e.getContainer,e.direction],g,{deep:!0})}),w(()=>s?.());function _(n,r){if(t(`click`,n,r),n.defaultPrevented)return;let i=l(r.href);if(!i)return;n.preventDefault();let a=e.getContainer?.()??window,s=i.getBoundingClientRect().top-(a===window?0:a.getBoundingClientRect().top)+(a===window?scrollY:a.scrollTop)-(e.targetOffset??e.offsetTop),c=matchMedia(`(prefers-reduced-motion: reduce)`).matches;a.scrollTo({top:s,behavior:c?`auto`:`smooth`}),o=Date.now()+(c?0:500),f(r.href),e.replace?history.replaceState(null,``,r.href):history.pushState(null,``,r.href)}function v(t,r=0){return W(`ul`,{class:`at-anchor__list`,role:r?`group`:void 0},t.map(t=>W(`li`,{key:t.key??t.href,class:`at-anchor__item`},[W(`a`,{href:t.href,class:[`at-anchor__link`,i.value===t.href&&`at-anchor__link--active`],style:e.direction===`vertical`?{paddingLeft:`${14+r*14}px`}:void 0,"aria-current":i.value===t.href?`location`:void 0,onClick:e=>_(e,t)},n.title?.({item:t})??t.title),t.children?.length?v(t.children,r+1):null])))}return()=>W(`nav`,{ref:r,"aria-label":`页面锚点`,class:[`at-anchor`,`at-anchor--${e.direction}`,e.affix&&`at-anchor--affix`],style:e.affix?{top:`${e.offsetTop}px`}:void 0},[W(`span`,{class:[`at-anchor__ink`,a.value&&`at-anchor__ink--visible`],style:a.value,"aria-hidden":!0}),v(e.items)])}}),Se=[`onKeydown`],Ce=[`role`,`aria-disabled`,`tabindex`,`onMouseenter`,`onClick`],we={key:0,class:`at-dropdown__icon`},Te={class:`at-dropdown__label`},Ee={key:1,class:`at-dropdown__extra`},X=H({__name:`Dropdown`,props:{items:{},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean},disabled:{type:Boolean},trigger:{default:`click`},placement:{default:`bottom-start`},showArrow:{type:Boolean},matchTriggerWidth:{type:Boolean},menuClassName:{},overlayClassName:{}},emits:[`update:open`,`select`],setup(e,{emit:r}){let i=e,a=r,o=m(i.open??i.defaultOpen??!1),s=m(null),c=m(null),d=m(-1),f=V(()=>{let e=[];function t(n){n.forEach(n=>{n.type===`group`?(e.push({...n,group:n.label}),t(n.children??[])):e.push(n)})}return t(i.items),e}),h=V(()=>f.value.map((e,t)=>e.disabled||e.type===`divider`||e.type===`group`?-1:t).filter(e=>e>=0));function g(e,t){e.disabled||e.type===`divider`||e.type===`group`||(e.onClick?.(e),a(`select`,e.key,e),t())}async function v(e){[`ArrowDown`,`ArrowUp`].includes(e.key)&&!i.disabled&&(e.preventDefault(),s.value?.open(),d.value=e.key===`ArrowUp`?h.value.at(-1)??-1:h.value[0]??-1,await U(),c.value?.focus())}function y(e,t){let n=h.value.indexOf(d.value);[`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)&&(e.preventDefault(),d.value=e.key===`Home`?h.value[0]:e.key===`End`?h.value.at(-1)??-1:h.value[(n+(e.key===`ArrowDown`?1:-1)+h.value.length)%h.value.length]??-1),[`Enter`,` `].includes(e.key)&&f.value[d.value]&&(e.preventDefault(),g(f.value[d.value],t)),e.key===`Tab`&&t()}return(r,i)=>(x(),M(l,{ref_key:`overlay`,ref:s,class:`at-dropdown__trigger-wrap`,open:e.open,"default-open":e.defaultOpen,disabled:e.disabled,trigger:e.trigger,placement:e.placement,"panel-class":[`at-dropdown__panel`,e.overlayClassName].filter(Boolean).join(` `),role:`menu`,onKeydown:v,"onUpdate:open":i[0]||=e=>{o.value=e,a(`update:open`,e)}},{content:S(({close:t})=>[j(`ul`,{ref_key:`menu`,ref:c,class:_([`at-dropdown__menu`,e.menuClassName]),role:`menu`,tabindex:`-1`,onKeydown:e=>y(e,t)},[(x(!0),I(B,null,u(f.value,(e,i)=>(x(),I(`li`,{key:e.key,role:e.type===`divider`?`separator`:e.type===`group`?`presentation`:`menuitem`,"aria-disabled":e.disabled,class:_(e.type===`divider`?`at-dropdown__divider`:e.type===`group`?`at-dropdown__group-label`:[`at-dropdown__item`,{"at-dropdown__item--active":d.value===i,"at-dropdown__item--disabled":e.disabled,"at-dropdown__item--danger":e.danger}]),tabindex:e.type===`divider`||e.type===`group`||e.disabled?void 0:-1,onMouseenter:t=>!e.disabled&&(d.value=i),onClick:n=>g(e,t)},[e.type===`divider`?z(``,!0):P(r.$slots,`item`,{item:e},()=>[e.icon?(x(),I(`span`,we,[O(p(n),{content:e.icon},null,8,[`content`])])):z(``,!0),j(`span`,Te,[O(p(n),{content:e.label},null,8,[`content`])]),e.extra?(x(),I(`span`,Ee,[O(p(n),{content:e.extra},null,8,[`content`])])):z(``,!0)],void 0,0)],42,Ce))),128))],42,Se)]),default:S(()=>[j(`span`,{class:_([`at-dropdown__trigger-arrow`,{"at-dropdown__trigger-arrow--open":e.open??o.value}])},[P(r.$slots,`default`),e.showArrow?(x(),M(p(t),{key:0,size:14})):z(``,!0)],2)]),_:3},8,[`open`,`default-open`,`disabled`,`trigger`,`placement`,`panel-class`]))}}),De=Symbol(`AtelierMenu`),Oe={key:0,role:`separator`,class:`at-menu__divider`},ke={key:1,role:`presentation`,class:`at-menu__group`},Ae={class:`at-menu__group-label`},je={role:`group`,class:`at-menu__group-list`},Me={key:0,class:`at-menu__icon`},Ne={class:`at-menu__label`},Pe={key:1,class:`at-menu__arrow`},Fe=[`aria-hidden`,`inert`],Ie=H({__name:`MenuNode`,props:{item:{},depth:{default:0},nested:{type:Boolean},onActivate:{}},setup(e){let r=e,i=C(De),a=V(()=>r.item.type!==`group`&&!!r.item.children?.length),s=V(()=>i.mode===`inline`&&!i.collapsed),l=m(!1),d=V(()=>s.value?i.openKeys.includes(r.item.key):l.value),f=V(()=>{function e(t){return t.key===i.selectedKey||!!t.children?.some(e)}return e(r.item)}),{anchor:h,panel:v,position:T}=c(()=>d.value&&!s.value,()=>i.mode===`horizontal`&&!r.nested?`bottom-start`:`right-start`,()=>{l.value=!1}),E=m(null);function k(){r.item.disabled||(s.value?i.toggle(r.item.key):l.value=!l.value)}let A;function N(e){clearTimeout(A),!s.value&&!r.item.disabled&&(A=setTimeout(()=>{l.value=e},e?60:160))}w(()=>clearTimeout(A));function P(){l.value=!1,r.onActivate?.()}function F(e){r.item.disabled?e.preventDefault():(i.select(r.item),r.onActivate?.())}async function L(e){r.item.disabled||a.value&&(e.key===`ArrowRight`||i.mode===`horizontal`&&e.key===`ArrowDown`)&&(e.preventDefault(),e.stopPropagation(),d.value||k(),await U(),E.value?.querySelector(`[role=menuitem]:not(:disabled)`)?.focus())}function R(e){e.key===`Escape`||e.key===`ArrowLeft`?(e.stopPropagation(),e.preventDefault(),s.value?i.toggle(r.item.key):l.value=!1,h.value?.focus()):i.keydown(e)}return(r,c)=>{let l=y(`MenuNode`,!0);return e.item.type===`divider`?(x(),I(`li`,Oe)):e.item.type===`group`?(x(),I(`li`,ke,[j(`div`,Ae,D(e.item.label),1),j(`ul`,je,[(x(!0),I(B,null,u(e.item.children,t=>(x(),M(l,{key:t.key,item:t,depth:e.depth,nested:e.nested,"on-activate":e.onActivate},null,8,[`item`,`depth`,`nested`,`on-activate`]))),128))])])):(x(),I(`li`,{key:2,role:`none`,class:_([`at-menu__li`,{"at-menu__submenu":a.value,"at-menu__submenu--open":d.value}]),onMouseenter:c[3]||=e=>a.value&&N(!0),onMouseleave:c[4]||=e=>a.value&&N(!1)},[(x(),M(b(e.item.href&&!a.value?`a`:`button`),{ref_key:`anchor`,ref:h,href:e.item.disabled?void 0:e.item.href,type:e.item.href?void 0:`button`,role:`menuitem`,tabindex:`-1`,"aria-disabled":e.item.disabled,disabled:e.item.disabled,"aria-current":p(i).selectedKey===e.item.key?`page`:void 0,"aria-haspopup":a.value?!0:void 0,"aria-expanded":a.value?d.value:void 0,title:p(i).collapsed?e.item.label:void 0,class:_([`at-menu__item`,{"at-menu__title":a.value,"at-menu__title--active":a.value&&f.value,"at-menu__item--selected":!a.value&&f.value,"at-menu__item--disabled":e.item.disabled,"at-menu__item--danger":e.item.danger}]),style:g(s.value?{paddingLeft:`${12+e.depth*p(i).inlineIndent}px`}:void 0),onClick:c[0]||=e=>a.value?k():F(e),onKeydown:L},{default:S(()=>[e.item.icon||p(i).collapsed?(x(),I(`span`,Me,[O(p(n),{content:e.item.icon??(typeof e.item.label==`string`?e.item.label.slice(0,1):``)},null,8,[`content`])])):z(``,!0),j(`span`,Ne,[(x(),M(b(()=>p(i).render(e.item))))]),a.value?(x(),I(`span`,Pe,[s.value||p(i).mode===`horizontal`&&!e.nested?(x(),M(p(t),{key:0,size:14})):(x(),M(p(o),{key:1,size:14}))])):z(``,!0)]),_:1},40,[`href`,`type`,`aria-disabled`,`disabled`,`aria-current`,`aria-haspopup`,`aria-expanded`,`title`,`class`,`style`])),a.value&&s.value?(x(),I(`div`,{key:0,class:`at-menu__inline-panel`,"aria-hidden":!d.value,inert:!d.value},[j(`ul`,{ref_key:`list`,ref:E,role:`menu`,class:`at-menu__inline-list`},[(x(!0),I(B,null,u(e.item.children,t=>(x(),M(l,{key:t.key,item:t,depth:e.depth+1,"on-activate":e.onActivate},null,8,[`item`,`depth`,`on-activate`]))),128))],512)],8,Fe)):z(``,!0),a.value&&!s.value?(x(),M(ee,{key:1,to:`body`},[d.value?(x(),I(`div`,{key:0,ref_key:`panel`,ref:v,class:`at-popup at-menu__flyout`,style:g(p(T)),onMouseenter:c[1]||=e=>N(!0),onMouseleave:c[2]||=e=>N(!1)},[j(`ul`,{ref_key:`list`,ref:E,role:`menu`,class:`at-menu__flyout-list`,onKeydown:R},[(x(!0),I(B,null,u(e.item.children,t=>(x(),M(l,{key:t.key,item:t,depth:e.depth+1,nested:``,"on-activate":P},null,8,[`item`,`depth`]))),128))],544)],36)):z(``,!0)])):z(``,!0)],34))}}}),Le=[`aria-label`],Z=H({__name:`Menu`,props:{items:{},mode:{default:`inline`},selectedKey:{},defaultSelectedKey:{},openKeys:{},defaultOpenKeys:{},collapsed:{type:Boolean},theme:{default:`light`},inlineIndent:{default:20},selectable:{type:Boolean,default:!0},label:{default:`导航菜单`}},emits:[`update:selectedKey`,`select`,`update:openKeys`,`openChange`],setup(e,{emit:t}){let n=e,r=t,i=m(n.defaultSelectedKey),a=m(n.defaultOpenKeys??[]),o=m(null),s=V(()=>n.selectedKey??i.value),c=V(()=>n.openKeys??a.value),l=f();function d(e){let t=e.target.closest(`[role=menu]`);if(!t)return;let r=Array.from(t.querySelectorAll(`[role=menuitem]:not([aria-disabled=true])`)).filter(e=>e.getClientRects().length);if(!r.length)return;let i=r.indexOf(e.target),a;e.key===(n.mode===`horizontal`&&t===o.value?`ArrowRight`:`ArrowDown`)&&(a=(i+1)%r.length),e.key===(n.mode===`horizontal`&&t===o.value?`ArrowLeft`:`ArrowUp`)&&(a=(i-1+r.length)%r.length),e.key===`Home`&&(a=0),e.key===`End`&&(a=r.length-1),a!==void 0&&(e.preventDefault(),r[a]?.focus())}F(De,T({get mode(){return n.mode},get collapsed(){return n.collapsed},get selectedKey(){return s.value},get openKeys(){return c.value},get inlineIndent(){return n.inlineIndent},select(e){e.disabled||(e.onClick?.(e),n.selectable&&(n.selectedKey===void 0&&(i.value=e.key),r(`update:selectedKey`,e.key),r(`select`,e.key,e)))},toggle(e){let t=c.value.includes(e)?c.value.filter(t=>t!==e):[...c.value,e];n.openKeys===void 0&&(a.value=t),r(`update:openKeys`,t),r(`openChange`,t)},render:e=>l.item?.({item:e})??e.label,keydown:d}));function p(e){e.target===o.value&&o.value?.querySelector(`[role=menuitem]:not([aria-disabled=true])`)?.focus()}return(t,n)=>(x(),I(`ul`,{ref_key:`root`,ref:o,role:`menu`,tabindex:`0`,"aria-label":e.label,class:_([`at-menu`,`at-menu--${e.mode}`,`at-menu--${e.theme}`,{"at-menu--collapsed":e.collapsed}]),style:g({"--at-menu-indent":`${e.inlineIndent}px`}),onKeydown:d,onFocus:p},[(x(!0),I(B,null,u(e.items,e=>(x(),M(Ie,{key:e.key,item:e},null,8,[`item`]))),128))],46,Le))}}),Re=6,Q=12;function ze(e){let[t,n]=e.split(`-`);return{side:t,align:n??`center`}}var Be={top:`bottom`,bottom:`top`,left:`right`,right:`left`};function Ve(e,t,n,r=Re){let{side:i,align:a}=ze(n),o={top:e.top-Q,bottom:window.innerHeight-e.bottom-Q,left:e.left-Q,right:window.innerWidth-e.right-Q},s=i===`top`||i===`bottom`?t.height+r:t.width+r,c=Be[i],l=o[i]>=s?i:o[c]>=s?c:o[i]>=o[c]?i:c,u,d;return l===`top`||l===`bottom`?(u=l===`top`?e.top-t.height-r:e.bottom+r,d=a===`start`?e.left:a===`end`?e.right-t.width:e.left+(e.width-t.width)/2):(d=l===`left`?e.left-t.width-r:e.right+r,u=a===`start`?e.top:a===`end`?e.bottom-t.height:e.top+(e.height-t.height)/2),{top:Math.max(Q,Math.min(u,window.innerHeight-t.height-Q)),left:Math.max(Q,Math.min(d,window.innerWidth-t.width-Q)),placement:a===`center`?l:`${l}-${a}`}}var He={key:0,class:`at-tour__mask`,"aria-hidden":`true`},Ue=[`id`],We=[`x`,`y`,`width`,`height`,`rx`],Ge=[`mask`],Ke=[`aria-labelledby`,`aria-describedby`,`data-placement`],qe={key:1,class:`at-tour__cover`},Je={class:`at-tour__body`},Ye=[`id`],Xe=[`id`],Ze={class:`at-tour__footer`},Qe=[`aria-label`],$e={class:`at-tour__actions`},et=H({__name:`Tour`,props:{steps:{},open:{type:Boolean},current:{},defaultCurrent:{default:0},mask:{type:Boolean,default:!0},type:{default:`default`},arrow:{type:Boolean,default:!0},gap:{default:6},radius:{default:10},closable:{type:Boolean,default:!0},zIndex:{default:1200},scrollIntoViewOptions:{type:Boolean,default:()=>({block:`center`,behavior:`smooth`})}},emits:[`update:open`,`close`,`finish`,`update:current`,`change`],setup(e,{emit:t}){let r=e,a=t,o=m(r.defaultCurrent),s=V(()=>Math.min(Math.max(r.current??o.value,0),Math.max(0,r.steps.length-1))),c=V(()=>r.steps[s.value]),l=m(null),d=m(null),f=m(null),v=`at-tour-${re()?.uid}`;function y(){a(`update:open`,!1),a(`close`,s.value)}function b(e){r.current===void 0&&(o.value=e),a(`update:current`,e),a(`change`,e)}function C(){c.value?.nextButtonProps?.onClick?.(),s.value>=r.steps.length-1?(a(`finish`),y()):b(s.value+1)}function T(){c.value?.prevButtonProps?.onClick?.(),b(Math.max(0,s.value-1))}ne(()=>!!r.open&&!!c.value,l,y,()=>!0);function E(){let e=c.value?.target;return typeof e==`function`?e():e&&`value`in e?e.value:e}function A(){let e=E();if(!e){d.value=null,f.value=null;return}let t=e.getBoundingClientRect(),n={top:t.top-r.gap,left:t.left-r.gap,width:t.width+r.gap*2,height:t.height+r.gap*2,right:t.right+r.gap,bottom:t.bottom+r.gap};d.value=n,l.value&&(f.value=Ve(n,l.value.getBoundingClientRect(),c.value?.placement??`bottom`,r.arrow?14:8))}let F;return h([()=>r.open,s],async([e],t,n)=>{if(F?.(),F=void 0,!e||typeof window>`u`)return;let i=!1;if(n(()=>{i=!0}),await U(),i)return;let a=E();a&&r.scrollIntoViewOptions&&a.scrollIntoView(typeof r.scrollIntoViewOptions==`object`?{...r.scrollIntoViewOptions,behavior:matchMedia(`(prefers-reduced-motion: reduce)`).matches?`auto`:r.scrollIntoViewOptions.behavior}:void 0),A(),l.value?.focus();let o=requestAnimationFrame(A),s=typeof ResizeObserver>`u`?void 0:new ResizeObserver(A);l.value&&s?.observe(l.value),a&&s?.observe(a),window.addEventListener(`resize`,A),window.addEventListener(`scroll`,A,!0),F=()=>{cancelAnimationFrame(o),s?.disconnect(),window.removeEventListener(`resize`,A),window.removeEventListener(`scroll`,A,!0)}},{immediate:!0,flush:`post`}),h(()=>r.open,e=>{e&&r.current===void 0&&(o.value=r.defaultCurrent)}),w(()=>F?.()),(t,r)=>(x(),M(ee,{to:`body`},[e.open&&c.value?(x(),I(`div`,{key:0,class:_([`at-tour`,`at-tour--${e.type}`]),style:g({zIndex:e.zIndex})},[c.value.mask??e.mask?(x(),I(`svg`,He,[j(`defs`,null,[j(`mask`,{id:`${v}-mask`},[r[2]||=j(`rect`,{x:`0`,y:`0`,width:`100%`,height:`100%`,fill:`#fff`},null,-1),d.value?(x(),I(`rect`,{key:0,x:d.value.left,y:d.value.top,width:d.value.width,height:d.value.height,rx:e.radius,fill:`#000`,class:`at-tour__hole`},null,8,We)):z(``,!0)],8,Ue)]),j(`rect`,{x:`0`,y:`0`,width:`100%`,height:`100%`,fill:`rgb(20 22 45 / 55%)`,mask:`url(#${v}-mask)`},null,8,Ge)])):z(``,!0),d.value?(x(),I(`div`,{key:1,class:`at-tour__spotlight`,style:g({top:`${d.value.top}px`,left:`${d.value.left}px`,width:`${d.value.width}px`,height:`${d.value.height}px`,borderRadius:`${e.radius}px`}),"aria-hidden":`true`},null,4)):z(``,!0),j(`div`,{ref_key:`card`,ref:l,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`${v}-title`,"aria-describedby":c.value.description?`${v}-description`:void 0,tabindex:`-1`,class:_([`at-tour__card`,{"at-tour__card--arrow":d.value&&e.arrow,"at-tour__card--centered":!d.value}]),"data-placement":f.value?.placement??c.value.placement??`bottom`,style:g(d.value?{top:`${f.value?.top??-9999}px`,left:`${f.value?.left??-9999}px`}:{top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`}),onKeydown:[r[0]||=k(R(t=>s.value<e.steps.length-1&&C(),[`prevent`]),[`right`]),r[1]||=k(R(e=>s.value>0&&T(),[`prevent`]),[`left`])]},[e.closable?(x(),I(`button`,{key:0,type:`button`,class:`at-tour__close`,"aria-label":`关闭引导`,onClick:y},[O(p(i),{size:14})])):z(``,!0),c.value.cover||t.$slots.cover?(x(),I(`div`,qe,[P(t.$slots,`cover`,{step:c.value},()=>[O(p(n),{content:c.value.cover},null,8,[`content`])])])):z(``,!0),j(`div`,Je,[j(`h3`,{id:`${v}-title`,class:`at-tour__title`},[O(p(n),{content:c.value.title},null,8,[`content`])],8,Ye),c.value.description?(x(),I(`p`,{key:0,id:`${v}-description`,class:`at-tour__description`},[O(p(n),{content:c.value.description},null,8,[`content`])],8,Xe)):z(``,!0)]),j(`footer`,Ze,[j(`div`,{class:`at-tour__indicators`,"aria-label":`第 ${s.value+1} 步，共 ${e.steps.length} 步`},[P(t.$slots,`indicators`,{current:s.value,total:e.steps.length},()=>[(x(!0),I(B,null,u(e.steps,(e,t)=>(x(),I(`span`,{key:t,class:_([`at-tour__dot`,{"at-tour__dot--active":t===s.value}])},null,2))),128))])],8,Qe),j(`div`,$e,[s.value>0?(x(),M(L,{key:0,size:`sm`,variant:e.type===`primary`?`ghost`:`secondary`,class:`at-tour__button`,onClick:T},{default:S(()=>[N(D(c.value.prevButtonProps?.children??`上一步`),1)]),_:1},8,[`variant`])):z(``,!0),O(L,{size:`sm`,variant:`primary`,class:`at-tour__button at-tour__button--next`,onClick:C},{default:S(()=>[N(D(c.value.nextButtonProps?.children??(s.value===e.steps.length-1?`完成`:`下一步`)),1)]),_:1})])])],46,Ke)],6)):z(``,!0)]))}}),tt=H({name:`BasicDropdown`,props:[],setup:(e,{slots:t})=>{let n=E(``),r=K(n);return()=>G(`div`,{class:`component-row`,style:{gap:18}},[G(X,{items:bt,onSelect:e=>r(e)},{default:()=>[G(L,{},{default:()=>[`更多操作`]})]}),G(X,{items:bt.filter(e=>e.type!==`group`&&e.key!==`divider-2`),trigger:`hover`,placement:`bottom-end`,showArrow:!0,onSelect:e=>r(e)},{default:()=>[G(`span`,{class:`demo-link-trigger`},[`悬停展开`])]}),G(X,{items:[{key:`rename`,label:`重命名`},{key:`move`,label:`移动到…`},{key:`divider`,type:`divider`},{key:`remove`,label:`移除`,danger:!0}],trigger:`contextMenu`,onSelect:e=>r(e)},{default:()=>[G(`div`,{class:`demo-context-area`},[`右键点击此区域`])]}),G(`span`,{class:`demo-hint`},[n.value?`最近选择：${n.value}`:`选择一项后会显示在这里`])])}}),nt=H({name:`InlineMenu`,props:[],setup:(e,{slots:t})=>{let n=E(`mine`),r=K(n),i=E(!1),a=K(i);return()=>G(`div`,{class:`demo-menu-row`},[G(`div`,{class:`demo-menu-frame`},[G(Z,{items:$,selectedKey:n.value,onSelect:r,defaultOpenKeys:[`projects`],collapsed:i.value,label:`工作区导航`},{})]),G(`div`,{class:`demo-menu-side`},[G(L,{size:`sm`,onClick:()=>a(e=>!e)},{default:()=>[i.value?`展开菜单`:`收起菜单`]}),G(`span`,{class:`demo-hint`},[`当前选中：`,n.value])])])}}),rt=H({name:`HorizontalMenu`,props:[],setup:(e,{slots:t})=>{let n=E(`home`),r=K(n);return()=>G(`div`,{class:`demo-stack`,style:{display:`grid`,gap:18}},[G(`div`,{class:`demo-menu-bar`},[G(Z,{mode:`horizontal`,items:$.filter(e=>e.type!==`divider`),selectedKey:n.value,onSelect:r,label:`顶部导航`},{})]),G(`div`,{class:`demo-menu-row`},[G(`div`,{class:`demo-menu-frame`},[G(Z,{mode:`vertical`,items:$,defaultSelectedKey:`home`,label:`侧边导航（弹出子菜单）`},{})]),G(Z,{theme:`dark`,items:$,defaultSelectedKey:`design`,defaultOpenKeys:[`members`],label:`深色菜单`},{})])])}}),it=H({name:`ScrollSpyAnchor`,props:[`direction`],setup:(e,{slots:t})=>{let{direction:n=`vertical`}=e,r=E(null),i=n===`vertical`?`anchor`:`hanchor`,a=[{id:`${i}-overview`,title:`项目概览`,children:n===`vertical`?[{id:`${i}-goals`,title:`目标`},{id:`${i}-scope`,title:`范围`}]:void 0},{id:`${i}-members`,title:`项目成员`},{id:`${i}-activity`,title:`最近动态`},{id:`${i}-files`,title:`文件`}],o=a.map(e=>({href:`#${e.id}`,title:e.title,children:e.children?.map(e=>({href:`#${e.id}`,title:e.title}))})),s=G(xe,{items:o,direction:n,getContainer:()=>r.value??window,offsetTop:12,replace:!0,affix:!1},{});return()=>G(`div`,{class:n===`vertical`?`demo-anchor-layout`:`demo-anchor-layout demo-anchor-layout--horizontal`},[n===`horizontal`&&s,G(`div`,{ref:r,class:`demo-anchor-scroll`},[a.flatMap(e=>[e,...e.children??[]]).map(e=>G(`section`,{key:e.id,id:e.id,class:`demo-anchor-section`},[G(`h4`,{},[e.title]),G(`p`,{},[`滚动内容时，锚点会自动高亮对应区块；点击锚点可平滑定位。`])]))]),n===`vertical`&&s])}}),at=H({name:`ScrollAffix`,props:[],setup:(e,{slots:t})=>{let n=E(null),r=E(!1),i=K(r);return()=>G(`div`,{class:`demo-stack`,style:{display:`grid`,gap:10}},[G(`div`,{ref:n,class:`demo-affix-scroll`},[G(`p`,{class:`demo-affix-filler`},[`向下滚动这个容器，操作栏会固定在容器顶部。`]),G(pe,{target:()=>n.value,offsetTop:0,onChange:i},{default:()=>[G(`div`,{class:`demo-affix-bar ${r.value?`demo-affix-bar--pinned`:``}`},[G(`strong`,{},[`项目设置`]),G(L,{size:`sm`,variant:`primary`},{default:()=>[`保存更改`]})])]}),Array.from({length:8},(e,t)=>G(`p`,{key:t,class:`demo-affix-filler`},[`内容段落 `,t+1,` · 固钉在滚动时保持可见。`]))]),G(`span`,{class:`demo-hint`},[`当前状态：`,r.value?`已固定`:`未固定`])])}}),ot=H({name:`OnboardingTour`,props:[],setup:(e,{slots:t})=>{let n=E(!1),r=K(n),i=E(`default`),a=K(i),o=E(null),s=E(null),c=E(null),l=[{title:`欢迎使用 Atelier`,description:`花 30 秒了解工作区的三个核心区域。`},{title:`新建项目`,description:`从这里创建项目，所有协作都从一个清晰的项目开始。`,target:()=>o.value,placement:`bottom-start`},{title:`全局搜索`,description:`输入名称、成员或标签即可快速定位，也可以用 ⌘K 打开。`,target:s,placement:`bottom`},{title:`成员与权限`,description:`邀请成员并分配角色，权限变更会实时生效。`,target:c,placement:`top`}];return()=>G(`div`,{class:`demo-stack`,style:{display:`grid`,gap:16}},[G(`div`,{class:`demo-tour-toolbar`},[G(L,{ref:o,variant:`primary`},{default:()=>[`＋ 新建项目`]}),G(`div`,{ref:s,class:`demo-tour-search`},[`⌕ 搜索项目、成员…`]),G(`div`,{ref:c,class:`demo-tour-members`},[G(`span`,{},[`林`]),G(`span`,{},[`陈`]),G(`span`,{},[`周`]),G(`em`,{},[`+3`])])]),G(`div`,{class:`component-row`},[G(L,{onClick:()=>{a(`default`),r(!0)}},{default:()=>[`开始引导`]}),G(L,{onClick:()=>{a(`primary`),r(!0)}},{default:()=>[`主色风格`]})]),G(et,{open:n.value,steps:l,type:i.value,onClose:()=>r(!1),onFinish:()=>console.info(`tour finished`)},{})])}}),st=H({name:`FloatButtons`,props:[],setup:(e,{slots:t})=>{let n=E(!1),r=K(n);return()=>G(`div`,{class:`demo-float-stage`},[G(`div`,{class:`demo-float-cell`},[G(Y,{inline:!0,tooltip:`帮助`},{icon:()=>G(yt,{},{})}),G(`span`,{class:`demo-hint`},[`默认`])]),G(`div`,{class:`demo-float-cell`},[G(Y,{inline:!0,type:`primary`,shape:`square`,description:`反馈`,badge:{count:5}},{icon:()=>G(vt,{},{})}),G(`span`,{class:`demo-hint`},[`主色 · 方形 · 徽标`])]),G(`div`,{class:`demo-float-cell`},[G(ye,{inline:!0,shape:`square`},{default:()=>[G(Y,{tooltip:`帮助`},{icon:()=>G(yt,{},{})}),G(Y,{tooltip:`反馈`,badge:{dot:!0}},{icon:()=>G(vt,{},{})}),G(Y,{tooltip:`设置`},{icon:()=>G(_t,{},{})})]}),G(`span`,{class:`demo-hint`},[`静态分组`])]),G(`div`,{class:`demo-float-cell demo-float-cell--tall`},[G(ye,{inline:!0,trigger:`click`,type:`primary`,open:n.value,"onUpdate:open":r,tooltip:`快捷操作`},{default:()=>[G(Y,{tooltip:`新建文档`},{icon:()=>G(dt,{},{})}),G(Y,{tooltip:`邀请成员`},{icon:()=>G(gt,{},{})}),G(Y,{tooltip:`发起讨论`},{icon:()=>G(vt,{},{})})]}),G(`span`,{class:`demo-hint`},[`点击展开菜单`])]),G(be,{visibilityHeight:200,tooltip:`回到顶部`},{})])}}),ct=H({name:`PopoverExamples`,props:[],setup:(e,{slots:t})=>{let n=E(!1),r=K(n);return()=>G(`div`,{class:`component-row`,style:{gap:18}},[G(q,{title:`分享项目`,content:`复制链接并邀请团队成员加入。`},{default:()=>[G(L,{},{default:()=>[`点击触发`]})]}),G(q,{trigger:`hover`,placement:`top`,content:`悬停时显示，离开后延迟关闭。`},{default:()=>[G(L,{variant:`tertiary`},{default:()=>[`悬停触发`]})]}),G(q,{trigger:`focus`,placement:`right`,arrow:!1,content:`聚焦输入框时显示提示。`},{default:()=>[G(`input`,{class:`demo-plain-input`,placeholder:`聚焦触发`,"aria-label":`聚焦触发示例`},[])]}),G(q,{open:n.value,"onUpdate:open":r,placement:`bottom-end`,title:`受控弹层`},{content:()=>G(`div`,{class:`demo-popover-body`},[G(`p`,{},[`可以在内容中放置任意交互元素。`]),G(`div`,{class:`component-row`},[G(L,{size:`sm`,onClick:()=>r(!1)},{default:()=>[`关闭`]}),G(L,{size:`sm`,variant:`primary`,onClick:()=>r(!1)},{default:()=>[`知道了`]})])]),default:()=>[G(L,{variant:`primary`},{default:()=>[`受控 · 富内容`]})]})])}}),lt=H({name:`PopconfirmExamples`,props:[],setup:(t,{slots:n})=>{let r=E(``),i=K(r);return()=>G(`div`,{class:`component-row`,style:{gap:18}},[G(J,{title:`归档这个项目？`,description:`你之后仍可以从归档列表恢复。`,onConfirm:()=>i(`已归档`),onCancel:()=>i(`已取消`)},{default:()=>[G(L,{},{default:()=>[`归档项目`]})]}),G(J,{title:`删除项目`,description:`删除后不可恢复，确定继续吗？`,okText:`删除`,okType:`danger`,placement:`bottom`,onConfirm:()=>new Promise(e=>setTimeout(()=>{i(`已删除（异步 800ms）`),e()},800))},{default:()=>[G(L,{variant:`danger`},{default:()=>[`删除项目`]})]}),G(J,{title:`发布到生产环境`,description:`本示例会模拟一次失败的请求。`,okText:`发布`,placement:`right`,onConfirm:()=>new Promise((e,t)=>setTimeout(()=>t(Error(`network`)),600))},{default:()=>[G(L,{variant:`tertiary`},{default:()=>[`模拟失败`]})]}),G(e,{},{default:()=>[r.value||`等待操作`]})])}}),ut=H({name:`NavigationPage`,props:[`id`],setup:(e,{slots:t})=>{let{id:n}=e,r=xt.find(e=>e.id===n);return r?()=>G(B,null,[G(ie,{eyebrow:r.eyebrow,title:r.title,description:r.description,badge:r.badge},{}),r.examples.map(e=>G(a,{key:e.title,title:e.title,description:e.description,code:e.code},{default:()=>[e.preview]})),G(s,{rows:r.rows},{})]):()=>null}}),dt=()=>G(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[G(`path`,{d:`M12 20h9`},[]),G(`path`,{d:`M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z`},[])]),ft=()=>G(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[G(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`},[]),G(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`},[])]),pt=()=>G(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[G(`path`,{d:`M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6`},[])]),mt=()=>G(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[G(`path`,{d:`m3 11 9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1Z`},[])]),ht=()=>G(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[G(`path`,{d:`M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z`},[])]),gt=()=>G(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[G(`circle`,{cx:`9`,cy:`8`,r:`3.5`},[]),G(`path`,{d:`M2.5 20a6.5 6.5 0 0 1 13 0`},[]),G(`path`,{d:`M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4.5-6.2`},[])]),_t=()=>G(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[G(`circle`,{cx:`12`,cy:`12`,r:`3`},[]),G(`path`,{d:`M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z`},[])]),vt=()=>G(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[G(`path`,{d:`M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z`},[])]),yt=()=>G(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[G(`circle`,{cx:`12`,cy:`12`,r:`9`},[]),G(`path`,{d:`M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01`},[])]),bt=[{key:`edit`,label:`编辑项目`,icon:G(dt,{},{}),extra:`⌘E`},{key:`duplicate`,label:`复制项目`,icon:G(ft,{},{}),extra:`⌘D`},{key:`divider-1`,type:`divider`},{key:`share`,type:`group`,label:`分享`,children:[{key:`link`,label:`复制链接`},{key:`invite`,label:`邀请成员`}]},{key:`divider-2`,type:`divider`},{key:`archive`,label:`归档项目`,disabled:!0},{key:`delete`,label:`删除项目`,icon:G(pt,{},{}),danger:!0}],$=[{key:`home`,label:`工作台`,icon:G(mt,{},{})},{key:`projects`,label:`项目`,icon:G(ht,{},{}),children:[{key:`all`,label:`全部项目`},{key:`mine`,label:`我负责的`},{key:`archived`,label:`已归档`,disabled:!0}]},{key:`members`,label:`成员`,icon:G(gt,{},{}),children:[{key:`group-teams`,type:`group`,label:`团队`,children:[{key:`design`,label:`设计部`},{key:`engineering`,label:`工程部`}]},{key:`invite`,label:`邀请成员`}]},{key:`divider`,type:`divider`},{key:`settings`,label:`设置`,icon:G(_t,{},{})}],xt=[{id:`dropdown`,title:`Dropdown 下拉菜单`,icon:`⌄`,group:`导航组件`,eyebrow:`NAVIGATION`,badge:`Dropdown`,description:`在触发器旁展示一组操作，支持图标、快捷键提示、分组、分割线、危险项与键盘导航。`,examples:[{title:`触发方式与菜单结构`,description:`点击、悬停与右键三种触发；菜单项支持 icon / extra / group / divider / danger / disabled。`,preview:G(tt,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Button } from "atelier-ui-vue/button";
import { Dropdown, type DropdownItem } from "atelier-ui-vue/dropdown";
export const ProjectActions = defineComponent({
    "name": "ProjectActions",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Fragment, null, [
            vnode(Dropdown, {
                "items": items,
                "onSelect": (key: string) => console.log(key)
            }, {
                "default": () => [
                    vnode(Button, {}, {
                        "default": () => [
                            "更多操作"
                        ]
                    })
                ]
            }),
            vnode(Dropdown, {
                "items": items,
                "trigger": "hover",
                "placement": "bottom-end",
                "showArrow": true
            }, {
                "default": () => [
                    vnode("span", {}, [
                        "悬停展开"
                    ])
                ]
            }),
            vnode(Dropdown, {
                "items": items,
                "trigger": "contextMenu"
            }, {
                "default": () => [
                    vnode("div", {
                        "style": { padding: 24, border: '1px dashed #ccc' }
                    }, [
                        "右键点击此区域"
                    ])
                ]
            })
        ]));
    }
});
const items: DropdownItem[] = [
    { key: 'edit', label: '编辑项目', extra: '⌘E' },
    { key: 'duplicate', label: '复制项目', extra: '⌘D' },
    { key: 'divider', type: 'divider' },
    { key: 'share', type: 'group', label: '分享', children: [{ key: 'link', label: '复制链接' }, { key: 'invite', label: '邀请成员' }] },
    { key: 'delete', label: '删除项目', danger: true },
];
`}],rows:[[`items`,`DropdownItem[]`,`required`],[`onSelect`,`(key, item) => void`,`—`],[`trigger`,`'click' | 'hover' | 'contextMenu' | 数组`,`'click'`],[`placement`,`PopupPlacement`,`'bottom-start'`],[`open / defaultOpen / onOpenChange`,`boolean / boolean / (open) => void`,`—`],[`showArrow`,`boolean`,`false`],[`matchTriggerWidth`,`boolean`,`false`],[`disabled`,`boolean`,`false`],[`overlayClassName / overlayStyle`,`string / CSSProperties`,`—`],[`menuClassName`,`string`,`—`],[`DropdownItem`,`{ key, label, icon?, extra?, disabled?, danger?, type?, children?, onClick? }`,`—`]]},{id:`menu`,title:`Menu 导航菜单`,icon:`☰`,group:`导航组件`,eyebrow:`NAVIGATION`,badge:`Menu`,description:`支持内嵌展开、水平与垂直弹出三种模式，可折叠为图标栏，提供深色主题与完整键盘导航。`,examples:[{title:`内嵌模式与折叠`,description:`子菜单以动画展开；折叠后仅显示图标，子菜单改为悬浮弹出。`,preview:G(nt,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Menu, type MenuItem } from "atelier-ui-vue/menu";
export const WorkspaceMenu = defineComponent({
    "name": "WorkspaceMenu",
    "props": [],
    "setup": (props, { slots }) => {
        const selected = vueRef('mine');
        const setSelected = refSetter(selected);
        const collapsed = vueRef(false);
        const setCollapsed = refSetter(collapsed);
        return () => (vnode(Fragment, null, [
            vnode(Menu, {
                "items": items,
                "selectedKey": selected.value,
                "onSelect": setSelected,
                "defaultOpenKeys": ['projects'],
                "collapsed": collapsed.value
            }, {}),
            vnode("button", {
                "type": "button",
                "onClick": () => setCollapsed((value: boolean) => !value)
            }, [
                "切换折叠"
            ])
        ]));
    }
});
const SettingsIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("circle", {
        "cx": "12",
        "cy": "12",
        "r": "3"
    }, []),
    vnode("path", {
        "d": "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"
    }, [])
]);
const FolderIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
    }, [])
]);
const HomeIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "m3 11 9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1Z"
    }, [])
]);
const items: MenuItem[] = [
    { key: 'home', label: '工作台', icon: vnode(HomeIcon, {}, {}) },
    { key: 'projects', label: '项目', icon: vnode(FolderIcon, {}, {}), children: [
            { key: 'all', label: '全部项目' },
            { key: 'mine', label: '我负责的' },
        ] },
    { key: 'divider', type: 'divider' },
    { key: 'settings', label: '设置', icon: vnode(SettingsIcon, {}, {}) },
];
`},{title:`水平、垂直弹出与深色主题`,description:`horizontal 适合顶栏；vertical 的子菜单向右弹出；theme="dark" 适配深色侧栏。`,preview:G(rt,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Menu } from "atelier-ui-vue/menu";
export const Navigations = defineComponent({
    "name": "Navigations",
    "props": [
        "items"
    ],
    "setup": (props, { slots }) => {
        const { items } = props;
        return () => (vnode(Fragment, null, [
            vnode(Menu, {
                "mode": "horizontal",
                "items": items,
                "defaultSelectedKey": "home"
            }, {}),
            vnode(Menu, {
                "mode": "vertical",
                "items": items,
                "defaultSelectedKey": "home"
            }, {}),
            vnode(Menu, {
                "theme": "dark",
                "items": items,
                "defaultSelectedKey": "design",
                "defaultOpenKeys": ['members']
            }, {})
        ]));
    }
});
`}],rows:[[`items`,`MenuItem[]`,`required`],[`mode`,`'inline' | 'vertical' | 'horizontal'`,`'inline'`],[`selectedKey / defaultSelectedKey`,`string`,`—`],[`onSelect`,`(key, item) => void`,`—`],[`openKeys / defaultOpenKeys`,`string[]`,`— / []`],[`onOpenChange`,`(openKeys) => void`,`—`],[`collapsed`,`boolean`,`false`],[`theme`,`'light' | 'dark'`,`'light'`],[`inlineIndent`,`number`,`20`],[`selectable`,`boolean`,`true`],[`label`,`string`,`'菜单'`],[`MenuItem`,`{ key, label, icon?, disabled?, danger?, type?, children?, href?, onClick? }`,`—`]]},{id:`anchor`,title:`Anchor 锚点`,icon:`⚓`,group:`导航组件`,eyebrow:`NAVIGATION`,badge:`Anchor`,description:`页内导航：滚动时自动高亮当前区块，点击平滑定位，支持嵌套层级与水平布局。`,examples:[{title:`滚动监听`,description:`通过 getContainer 指定滚动容器；滚动时墨条跟随高亮项移动。`,preview:G(it,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Anchor } from "atelier-ui-vue/anchor";
export const PageNavigation = defineComponent({
    "name": "PageNavigation",
    "props": [],
    "setup": (props, { slots }) => {
        const containerRef = vueRef<(HTMLDivElement | null) | null>(null);
        return () => (vnode("div", {
            "style": { display: 'flex', gap: 24 }
        }, [
            vnode("div", {
                "ref": containerRef,
                "style": { height: 320, overflow: 'auto' }
            }, [
                vnode("section", {
                    "id": "overview"
                }, [
                    "项目概览"
                ]),
                vnode("section", {
                    "id": "members"
                }, [
                    "项目成员"
                ]),
                vnode("section", {
                    "id": "activity"
                }, [
                    "最近动态"
                ])
            ]),
            vnode(Anchor, {
                "getContainer": () => containerRef.value ?? window,
                "offsetTop": 12,
                "items": [
                    { href: '#overview', title: '项目概览', children: [{ href: '#goals', title: '目标' }] },
                    { href: '#members', title: '项目成员' },
                    { href: '#activity', title: '最近动态' },
                ],
                "onChange": (href: string) => console.log(href)
            }, {})
        ]));
    }
});
`},{title:`水平方向`,description:`direction="horizontal" 适合放在内容区顶部作为小节导航。`,preview:G(it,{direction:`horizontal`},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Anchor } from "atelier-ui-vue/anchor";
export const SectionTabs = defineComponent({
    "name": "SectionTabs",
    "props": [],
    "setup": (props, { slots }) => {
        const containerRef = vueRef<(HTMLDivElement | null) | null>(null);
        return () => (vnode(Fragment, null, [
            vnode(Anchor, {
                "direction": "horizontal",
                "affix": false,
                "getContainer": () => containerRef.value ?? window,
                "items": [{ href: '#overview', title: '概览' }, { href: '#members', title: '成员' }, { href: '#files', title: '文件' }]
            }, {}),
            vnode("div", {
                "ref": containerRef,
                "style": { height: 300, overflow: 'auto' }
            }, [
                vnode("section", {
                    "id": "overview"
                }, [
                    "概览"
                ]),
                vnode("section", {
                    "id": "members"
                }, [
                    "成员"
                ]),
                vnode("section", {
                    "id": "files"
                }, [
                    "文件"
                ])
            ])
        ]));
    }
});
`}],rows:[[`items`,`AnchorItem[]`,`required`],[`offsetTop`,`number`,`0`],[`bounds`,`number`,`5`],[`targetOffset`,`number`,`offsetTop`],[`direction`,`'vertical' | 'horizontal'`,`'vertical'`],[`affix`,`boolean`,`true`],[`getContainer`,`() => HTMLElement | Window`,`window`],[`replace`,`boolean`,`false`],[`onChange`,`(activeHref) => void`,`—`],[`onClick`,`(event, item) => void`,`—`],[`AnchorItem`,`{ key?, href, title, children? }`,`—`]]},{id:`affix`,title:`Affix 固钉`,icon:`⌖`,group:`布局组件`,eyebrow:`LAYOUT`,badge:`Affix`,description:`当元素滚动到指定位置时将其固定，并以占位元素保持原有布局，支持自定义滚动容器。`,examples:[{title:`在滚动容器中固定`,description:`target 指定滚动容器，onChange 返回固定状态。`,preview:G(at,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Affix } from "atelier-ui-vue/affix";
import { Button } from "atelier-ui-vue/button";
export const StickyToolbar = defineComponent({
    "name": "StickyToolbar",
    "props": [],
    "setup": (props, { slots }) => {
        const containerRef = vueRef<(HTMLDivElement | null) | null>(null);
        const pinned = vueRef(false);
        const setPinned = refSetter(pinned);
        return () => (vnode("div", {
            "ref": containerRef,
            "style": { height: 260, overflow: 'auto' }
        }, [
            vnode("p", {}, [
                "向下滚动…"
            ]),
            vnode(Affix, {
                "target": () => containerRef.value,
                "offsetTop": 0,
                "onChange": setPinned
            }, {
                "default": () => [
                    vnode("div", {
                        "class": pinned.value ? 'toolbar toolbar--pinned' : 'toolbar'
                    }, [
                        vnode("strong", {}, [
                            "项目设置"
                        ]),
                        vnode(Button, {
                            "size": "sm",
                            "variant": "primary"
                        }, {
                            "default": () => [
                                "保存更改"
                            ]
                        })
                    ])
                ]
            })
        ]));
    }
});
`}],rows:[[`offsetTop`,`number`,`0`],[`offsetBottom`,`number`,`—`],[`target`,`() => HTMLElement | Window`,`window`],[`onChange`,`(affixed: boolean) => void`,`—`],[`#default`,`VNodeChild / slot`,`required`]]},{id:`tour`,title:`Tour 漫游式引导`,icon:`✧`,group:`反馈组件`,eyebrow:`FEEDBACK`,badge:`Tour`,description:`聚光遮罩高亮目标元素，卡片自动定位并带箭头，支持步骤指示、键盘切换与主色风格。`,examples:[{title:`分步引导`,description:`第一步无目标时居中展示；后续步骤跟随目标元素并平滑过渡。`,preview:G(ot,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Button } from "atelier-ui-vue/button";
import { Tour, type TourStep } from "atelier-ui-vue/tour";
export const Onboarding = defineComponent({
    "name": "Onboarding",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        const createRef = vueRef<(HTMLButtonElement | null) | null>(null);
        const searchRef = vueRef<(HTMLDivElement | null) | null>(null);
        const steps: TourStep[] = [
            { title: '欢迎使用 Atelier', description: '花 30 秒了解工作区。' },
            { title: '新建项目', description: '从这里创建项目。', target: () => createRef.value, placement: 'bottom-start' },
            { title: '全局搜索', description: '也可以用 ⌘K 打开。', target: searchRef, placement: 'bottom' },
        ];
        return () => (vnode(Fragment, null, [
            vnode(Button, {
                "ref": createRef,
                "variant": "primary"
            }, {
                "default": () => [
                    "＋ 新建项目"
                ]
            }),
            vnode("div", {
                "ref": searchRef
            }, [
                "⌕ 搜索项目、成员…"
            ]),
            vnode(Button, {
                "onClick": () => setOpen(true)
            }, {
                "default": () => [
                    "开始引导"
                ]
            }),
            vnode(Tour, {
                "open": open.value,
                "steps": steps,
                "onClose": () => setOpen(false),
                "onFinish": () => console.log('done')
            }, {})
        ]));
    }
});
`}],rows:[[`steps`,`TourStep[]`,`required`],[`open`,`boolean`,`false`],[`onClose`,`(current) => void`,`—`],[`onFinish`,`() => void`,`—`],[`current / defaultCurrent`,`number`,`— / 0`],[`onChange`,`(current) => void`,`—`],[`mask`,`boolean`,`true`],[`type`,`'default' | 'primary'`,`'default'`],[`arrow`,`boolean`,`true`],[`gap / radius`,`number`,`6 / 10`],[`closable`,`boolean`,`true`],[`indicatorsRender`,`(current, total) => VNodeChild`,`圆点`],[`zIndex`,`number`,`1200`],[`scrollIntoViewOptions`,`boolean | ScrollIntoViewOptions`,`{ block: 'center', behavior: 'smooth' }`],[`TourStep`,`{ title, description?, cover?, target?, placement?, mask?, nextButtonProps?, prevButtonProps? }`,`—`]]},{id:`floatButton`,title:`FloatButton 悬浮按钮`,icon:`↗`,group:`基础组件`,eyebrow:`GENERAL`,badge:`FloatButton`,description:`固定在视口角落的快捷操作，支持主色与方形样式、徽标、分组展开菜单以及回到顶部。`,examples:[{title:`形态、分组与回到顶部`,description:`示例以 inline 方式内嵌展示；页面滚动超过 200px 后右下角会出现 BackTop。`,preview:G(st,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { BackTop, FloatButton, FloatButtonGroup } from "atelier-ui-vue/float-button";
export const QuickActions = defineComponent({
    "name": "QuickActions",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Fragment, null, [
            vnode(FloatButton, {
                "tooltip": "帮助"
            }, {
                "icon": () => vnode(HelpIcon, {}, {})
            }),
            vnode(FloatButton, {
                "type": "primary",
                "shape": "square",
                "description": "反馈",
                "badge": { count: 5 }
            }, {
                "icon": () => vnode(ChatIcon, {}, {})
            }),
            vnode(FloatButtonGroup, {
                "shape": "square"
            }, {
                "default": () => [
                    vnode(FloatButton, {
                        "tooltip": "帮助"
                    }, {
                        "icon": () => vnode(HelpIcon, {}, {})
                    }),
                    vnode(FloatButton, {
                        "tooltip": "反馈",
                        "badge": { dot: true }
                    }, {
                        "icon": () => vnode(ChatIcon, {}, {})
                    })
                ]
            }),
            vnode(FloatButtonGroup, {
                "trigger": "click",
                "type": "primary",
                "tooltip": "快捷操作"
            }, {
                "default": () => [
                    vnode(FloatButton, {
                        "tooltip": "新建文档"
                    }, {
                        "icon": () => vnode(EditIcon, {}, {})
                    }),
                    vnode(FloatButton, {
                        "tooltip": "邀请成员"
                    }, {
                        "icon": () => vnode(UsersIcon, {}, {})
                    })
                ]
            }),
            vnode(BackTop, {
                "visibilityHeight": 200
            }, {})
        ]));
    }
});
const UsersIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("circle", {
        "cx": "9",
        "cy": "8",
        "r": "3.5"
    }, []),
    vnode("path", {
        "d": "M2.5 20a6.5 6.5 0 0 1 13 0"
    }, []),
    vnode("path", {
        "d": "M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4.5-6.2"
    }, [])
]);
const EditIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "M12 20h9"
    }, []),
    vnode("path", {
        "d": "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"
    }, [])
]);
const ChatIcon = () => vnode("svg", {
    "width": "20",
    "height": "20",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z"
    }, [])
]);
const HelpIcon = () => vnode("svg", {
    "width": "20",
    "height": "20",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("circle", {
        "cx": "12",
        "cy": "12",
        "r": "9"
    }, []),
    vnode("path", {
        "d": "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01"
    }, [])
]);
`}],rows:[[`icon`,`VNodeChild / slot`,`↑`],[`description`,`VNodeChild / slot`,`—`],[`shape`,`'circle' | 'square'`,`'circle'`],[`type`,`'default' | 'primary'`,`'default'`],[`tooltip`,`string`,`—`],[`href / target`,`string`,`—`],[`badge`,`{ count?, dot?, overflowCount? }`,`—`],[`inline`,`boolean`,`false`],[`FloatButtonGroup.trigger`,`'click' | 'hover'`,`—`],[`FloatButtonGroup.open / onOpenChange`,`boolean / (open) => void`,`—`],[`FloatButtonGroup.placement`,`'top' | 'bottom' | 'left' | 'right'`,`'top'`],[`BackTop.visibilityHeight`,`number`,`400`],[`BackTop.target`,`() => HTMLElement | Window`,`window`],[`BackTop.duration`,`number`,`450`]]},{id:`popover`,title:`Popover 气泡卡片`,icon:`▱`,group:`反馈组件`,eyebrow:`FEEDBACK`,badge:`Popover`,description:`在触发元素附近展示带标题的浮层，支持点击 / 悬停 / 聚焦触发、八种位置、箭头与受控模式。`,examples:[{title:`触发方式与位置`,preview:G(ct,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Button } from "atelier-ui-vue/button";
import { Popover } from "atelier-ui-vue/popover";
export const ShareDetails = defineComponent({
    "name": "ShareDetails",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        return () => (vnode(Fragment, null, [
            vnode(Popover, {
                "title": "分享项目",
                "content": "复制链接并邀请团队成员加入。"
            }, {
                "default": () => [
                    vnode(Button, {}, {
                        "default": () => [
                            "点击触发"
                        ]
                    })
                ]
            }),
            vnode(Popover, {
                "trigger": "hover",
                "placement": "top",
                "content": "悬停时显示。"
            }, {
                "default": () => [
                    vnode(Button, {
                        "variant": "tertiary"
                    }, {
                        "default": () => [
                            "悬停触发"
                        ]
                    })
                ]
            }),
            vnode(Popover, {
                "trigger": "focus",
                "placement": "right",
                "arrow": false,
                "content": "聚焦时显示。"
            }, {
                "default": () => [
                    vnode("input", {
                        "placeholder": "聚焦触发"
                    }, [])
                ]
            }),
            vnode(Popover, {
                "open": open.value,
                "onUpdate:open": setOpen,
                "placement": "bottom-end",
                "title": "受控弹层"
            }, {
                "content": () => vnode(Button, {
                    "size": "sm",
                    "onClick": () => setOpen(false)
                }, {
                    "default": () => [
                        "知道了"
                    ]
                }),
                "default": () => [
                    vnode(Button, {
                        "variant": "primary"
                    }, {
                        "default": () => [
                            "受控 · 富内容"
                        ]
                    })
                ]
            })
        ]));
    }
});
`}],rows:[[`content`,`VNodeChild / slot`,`required`],[`title`,`VNodeChild / slot`,`—`],[`trigger`,`'click' | 'hover' | 'focus' | 'contextMenu' | 数组`,`'click'`],[`placement`,`PopupPlacement`,`'bottom'`],[`arrow`,`boolean`,`true`],[`open / defaultOpen / onOpenChange`,`boolean / boolean / (open) => void`,`—`],[`mouseEnterDelay / mouseLeaveDelay`,`number (ms)`,`80 / 120`],[`disabled`,`boolean`,`false`],[`overlayClassName / overlayStyle`,`string / CSSProperties`,`—`],[`#default`,`VNodeChild / slot`,`required`]]},{id:`popconfirm`,title:`Popconfirm 气泡确认框`,icon:`✓`,group:`反馈组件`,eyebrow:`FEEDBACK`,badge:`Popconfirm`,description:`就地请求确认，支持异步确认（自动 loading）、失败提示、危险操作样式与自定义文案。`,examples:[{title:`基础、异步与失败处理`,preview:G(lt,{},{}),code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Button } from "atelier-ui-vue/button";
import { Popconfirm } from "atelier-ui-vue/popconfirm";
export const ProjectDanger = defineComponent({
    "name": "ProjectDanger",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Fragment, null, [
            vnode(Popconfirm, {
                "title": "归档这个项目？",
                "description": "你之后仍可以从归档列表恢复。",
                "onConfirm": () => console.log('归档')
            }, {
                "default": () => [
                    vnode(Button, {}, {
                        "default": () => [
                            "归档项目"
                        ]
                    })
                ]
            }),
            vnode(Popconfirm, {
                "title": "删除项目",
                "description": "删除后不可恢复，确定继续吗？",
                "okText": "删除",
                "okType": "danger",
                "onConfirm": () => fetch('/api/projects/1', { method: 'DELETE' }).then(() => undefined)
            }, {
                "default": () => [
                    vnode(Button, {
                        "variant": "danger"
                    }, {
                        "default": () => [
                            "删除项目"
                        ]
                    })
                ]
            })
        ]));
    }
});
`}],rows:[[`title`,`VNodeChild / slot`,`required`],[`description`,`VNodeChild / slot`,`—`],[`icon`,`VNodeChild / slot`,`警示图标`],[`onConfirm`,`(event) => void | Promise<void>`,`—`],[`onCancel`,`(event) => void`,`—`],[`okText / cancelText`,`VNodeChild / slot`,`'确定' / '取消'`],[`okType`,`'primary' | 'danger'`,`'primary'`],[`showCancel`,`boolean`,`true`],[`errorText`,`VNodeChild / slot`,`'操作失败，请重试。'`],[`placement`,`PopupPlacement`,`'top'`],[`open / defaultOpen / onOpenChange`,`boolean / boolean / (open) => void`,`—`],[`disabled`,`boolean`,`false`],[`overlayClassName / overlayStyle`,`string / CSSProperties`,`—`]]}];export{ut as NavigationPage};