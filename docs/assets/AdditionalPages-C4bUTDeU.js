import{A as e,E as t,H as n,J as r,K as i,O as a,T as o,U as s,V as c,W as l,Y as u,d,g as f,j as p,k as m,m as h,n as g,p as _,r as v,s as y,u as b,v as x,x as S}from"./index-DlCzkO8C.js";import{a as C,i as ee,n as te,r as w}from"./shared-CipAiedf.js";var ne=x({__name:`Flex`,props:{vertical:{type:Boolean},gap:{default:12},align:{default:`center`},justify:{default:`flex-start`},wrap:{type:Boolean}},setup(e){return(t,n)=>(a(),h(`div`,{class:`at-flex`,style:r({display:`flex`,flexDirection:e.vertical?`column`:`row`,gap:typeof e.gap==`number`?`${e.gap}px`:e.gap,alignItems:e.align,justifyContent:e.justify,flexWrap:e.wrap?`wrap`:`nowrap`})},[p(t.$slots,`default`)],4))}}),re=x({__name:`Space`,props:{size:{default:12},direction:{default:`horizontal`},wrap:{type:Boolean}},setup(e){return(t,n)=>(a(),h(`div`,{class:i([`at-space`,`at-space--${e.direction}`]),style:r({gap:typeof e.size==`number`?`${e.size}px`:e.size,flexWrap:e.wrap?`wrap`:`nowrap`})},[p(t.$slots,`default`)],6))}}),ie=x({__name:`Grid`,props:{columns:{default:24},gap:{default:16}},setup(e){return(t,n)=>(a(),h(`div`,{class:`at-grid`,style:r({gridTemplateColumns:`repeat(${e.columns}, minmax(0, 1fr))`,gap:typeof e.gap==`number`?`${e.gap}px`:e.gap})},[p(t.$slots,`default`)],4))}}),T=x({__name:`GridCol`,props:{span:{default:12}},setup(e){return(t,n)=>(a(),h(`div`,{class:`at-grid__col`,style:r({gridColumn:`span ${e.span}`})},[p(t.$slots,`default`)],4))}}),ae={class:`at-layout`},E=x({__name:`Layout`,setup(e){return(e,t)=>(a(),h(`div`,ae,[p(e.$slots,`default`)]))}}),oe={class:`at-layout__header`},se=x({__name:`LayoutHeader`,setup(e){return(e,t)=>(a(),h(`header`,oe,[p(e.$slots,`default`)]))}}),ce={class:`at-layout__content`},D=x({__name:`LayoutContent`,setup(e){return(e,t)=>(a(),h(`main`,ce,[p(e.$slots,`default`)]))}}),O={class:`at-layout__footer`},k=x({__name:`LayoutFooter`,setup(e){return(e,t)=>(a(),h(`footer`,O,[p(e.$slots,`default`)]))}}),A=x({__name:`LayoutSider`,props:{width:{default:220}},setup(e){return(t,n)=>(a(),h(`aside`,{class:`at-layout__sider`,style:r({width:typeof e.width==`number`?`${e.width}px`:e.width})},[p(t.$slots,`default`)],4))}}),j={class:`at-result__icon`,"aria-hidden":`true`},M={key:0},N={key:1,class:`at-result__extra`},P=x({__name:`Result`,props:{status:{default:`info`},title:{},subTitle:{}},setup(e){let t={success:`✓`,error:`×`,info:`i`,warning:`!`,404:`404`,500:`500`};return(n,r)=>(a(),h(`section`,{class:i([`at-result`,`at-result--${e.status}`])},[d(`span`,j,[p(n.$slots,`icon`,{},()=>[f(u(t[e.status]),1)])]),d(`h2`,null,[p(n.$slots,`title`,{},()=>[f(u(e.title),1)])]),e.subTitle||n.$slots.subTitle?(a(),h(`p`,M,[p(n.$slots,`subTitle`,{},()=>[f(u(e.subTitle),1)])])):_(``,!0),n.$slots.extra?(a(),h(`div`,N,[p(n.$slots,`extra`)])):_(``,!0)],2))}}),F=[`width`,`height`,`role`,`aria-hidden`],I={key:0},L=[`d`],R={key:2,cx:`11`,cy:`11`,r:`7`},z={key:3,cx:`12`,cy:`12`,r:`9`},B=[`cx`],V=x({__name:`Icon`,props:{name:{},size:{default:20},title:{}},setup(t){let n={plus:`M12 5v14M5 12h14`,search:`m20 20-4-4`,check:`m5 12 4 4L19 6`,close:`m6 6 12 12M18 6 6 18`,"arrow-right":`M5 12h14m-6-6 6 6-6 6`,info:`M12 11v5M12 8h.01`,more:``};return(r,i)=>(a(),h(`svg`,{class:`at-icon`,width:t.size,height:t.size,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"stroke-linecap":`round`,"stroke-linejoin":`round`,role:t.title?`img`:void 0,"aria-hidden":!t.title||void 0},[t.title?(a(),h(`title`,I,u(t.title),1)):_(``,!0),n[t.name]?(a(),h(`path`,{key:1,d:n[t.name]},null,8,L)):_(``,!0),t.name===`search`?(a(),h(`circle`,R)):_(``,!0),t.name===`info`?(a(),h(`circle`,z)):_(``,!0),t.name===`more`?(a(),h(y,{key:4},e([5,12,19],e=>d(`circle`,{key:e,cx:e,cy:`12`,r:`1`},null,8,B)),64)):_(``,!0)],8,F))}}),H=[`aria-label`],le=[`autocomplete`,`aria-label`,`value`,`disabled`,`onInput`,`onKeydown`],U=x({__name:`InputOTP`,props:{length:{default:6},modelValue:{},defaultValue:{default:``},disabled:{type:Boolean},autoFocus:{type:Boolean},ariaLabel:{default:`验证码`}},emits:[`update:modelValue`,`change`,`complete`],setup(r,{emit:i}){let o=r,s=n(null),c=n(o.defaultValue),l=b(()=>Math.max(1,Math.floor(o.length))),u=b(()=>(o.modelValue??c.value).replace(/\D/g,``).slice(0,l.value)),d=i;function f(e){e=e.replace(/\D/g,``).slice(0,l.value),o.modelValue===void 0&&(c.value=e),d(`update:modelValue`,e),d(`change`,e),e.length===l.value&&d(`complete`,e)}function p(e){s.value?.querySelectorAll(`input`)[Math.max(0,Math.min(e,l.value-1))]?.focus()}function m(e,t){if(o.disabled)return;let n=t.replace(/\D/g,``);if(!n)return;let r=u.value.split(``);n.slice(0,l.value-e).split(``).forEach((t,n)=>{r[e+n]=t}),f(r.join(``)),p(e+n.length)}function g(e,t){m(t,e.target.value)}function _(e,t){if(!o.disabled&&((e.key===`ArrowLeft`||e.key===`ArrowRight`)&&(e.preventDefault(),p(t+(e.key===`ArrowLeft`?-1:1))),e.key===`Backspace`||e.key===`Delete`)){e.preventDefault();let n=e.key===`Backspace`&&!u.value[t]?t-1:t;if(n>=0){let e=u.value.split(``);e[n]=``,f(e.join(``)),p(n)}}}function v(e){e.preventDefault();let t=Array.from(s.value?.querySelectorAll(`input`)??[]).findIndex(e=>e===document.activeElement);m(Math.max(0,t),e.clipboardData?.getData(`text`)??``)}return t(()=>{o.autoFocus&&p(0)}),(t,n)=>(a(),h(`div`,{ref_key:`root`,ref:s,class:`at-input-otp`,role:`group`,"aria-label":r.ariaLabel,onPaste:v},[(a(!0),h(y,null,e(l.value,e=>(a(),h(`input`,{key:e,class:`at-input-otp__cell`,type:`text`,inputmode:`numeric`,pattern:`[0-9]*`,autocomplete:e===1?`one-time-code`:`off`,"aria-label":`${r.ariaLabel}第 ${e} 位`,value:u.value[e-1]??``,disabled:r.disabled,onInput:t=>g(t,e-1),onKeydown:t=>_(t,e-1)},null,40,le))),128))],40,H))}}),W=Symbol(`AtelierConfig`),ue=[`dir`,`lang`,`data-size`],de=x({__name:`ConfigProvider`,props:{prefixCls:{default:`at`},direction:{default:`ltr`},size:{default:`middle`},locale:{default:`zh-CN`},theme:{default:()=>({})}},setup(e){let t=e;m(W,c({get prefixCls(){return t.prefixCls},get direction(){return t.direction},get size(){return t.size},get locale(){return t.locale},get theme(){return t.theme}}));let n=b(()=>({"--at-control-height":t.size===`small`?`32px`:t.size===`large`?`48px`:`40px`,"--at-color-primary":t.theme.primaryColor,"--at-color-primary-hover":t.theme.primaryColor?`color-mix(in srgb, ${t.theme.primaryColor} 88%, black)`:void 0,"--at-color-primary-soft":t.theme.primaryColor?`color-mix(in srgb, ${t.theme.primaryColor} 10%, white)`:void 0,"--at-radius-md":t.theme.borderRadius,"--at-color-surface":t.theme.colorBgContainer,"--at-color-text":t.theme.colorText,"--at-color-border":t.theme.colorBorder}));return(t,o)=>(a(),h(`div`,{class:i(`${e.prefixCls}-config`),dir:e.direction,lang:e.locale,"data-size":e.size,style:r(n.value)},[p(t.$slots,`default`)],14,ue))}}),fe=x({name:`Message`,props:{type:{type:String,default:`info`},content:[String,Number,Object,Array],duration:{type:Number,default:4e3}},emits:[`close`],setup(e,{emit:r,slots:i}){let a=n(!0),s,c=()=>{a.value&&(a.value=!1,r(`close`))};return t(()=>{e.duration>0&&(s=setTimeout(c,e.duration))}),o(()=>clearTimeout(s)),()=>a.value?S(`div`,{class:[`at-message`,`at-message--${e.type}`],role:e.type===`error`?`alert`:`status`},[S(`span`,{"aria-hidden":!0},e.type===`success`?`✓`:e.type===`error`?`!`:`·`),i.default?.()??e.content,S(`button`,{type:`button`,"aria-label":`关闭提示`,onClick:c},`×`)]):null}}),pe=x({name:`Notification`,props:{title:[String,Number,Object,Array],description:[String,Number,Object,Array],type:{type:String,default:`info`},placement:{type:String,default:`top-right`}},emits:[`close`],setup(e,{emit:t,slots:n}){return()=>S(`aside`,{class:[`at-notification`,`at-notification--${e.placement}`,`at-notification--${e.type}`],role:`status`},[S(`div`,[S(`strong`,[n.title?.()??e.title]),e.description||n.default?S(`p`,[n.default?.()??e.description]):null]),S(`button`,{type:`button`,"aria-label":`关闭通知`,onClick:()=>t(`close`)},`×`)])}}),G=s([]),me=0,K,q,J=new Map;function Y(e){let t=G.findIndex(t=>t.id===e);if(t<0)return;let n=G[t];clearTimeout(J.get(e)),J.delete(e),G.splice(t,1);try{n.onClose?.()}finally{G.length||(K?.unmount(),q?.remove(),K=void 0,q=void 0)}}function X(e){if(typeof document>`u`)return{close(){}};let t=++me;return G.push({...e,id:t}),K||(q=document.createElement(`div`),q.dataset.atFeedbackHost=``,document.body.appendChild(q),K=v({setup:()=>()=>G.map((e,t)=>S(e.kind===`message`?fe:pe,{...e,key:e.id,duration:0,style:e.kind===`message`?{top:`${22+G.filter((e,n)=>n<t&&e.kind===`message`).length*64}px`}:{[e.placement?.startsWith(`bottom`)?`bottom`:`top`]:`${20+G.filter((n,r)=>r<t&&n.kind===`notification`&&n.placement===e.placement).length*110}px`},onClose:()=>Y(e.id)}))}),K.mount(q)),(e.duration??0)>0&&J.set(t,setTimeout(()=>Y(t),e.duration)),{close:()=>Y(t)}}function Z(e,t,n={}){return X({kind:`message`,title:``,content:t,type:e,duration:n.duration??4e3,onClose:n.onClose})}var he={open:(e,t)=>Z(`info`,e,t),success:(e,t)=>Z(`success`,e,t),info:(e,t)=>Z(`info`,e,t),warning:(e,t)=>Z(`warning`,e,t),error:(e,t)=>Z(`error`,e,t),destroy(){[...G].filter(e=>e.kind===`message`).forEach(e=>Y(e.id))}};function Q(e){return X({...e,kind:`notification`,type:e.type??`info`,placement:e.placement??`top-right`,duration:e.duration??4500})}var ge={open:Q,success:e=>Q({...e,type:`success`}),info:e=>Q({...e,type:`info`}),warning:e=>Q({...e,type:`warning`}),error:e=>Q({...e,type:`error`}),destroy(){[...G].filter(e=>e.kind===`notification`).forEach(e=>Y(e.id))}},$=x({name:`TagLike`,props:[],setup:(e,{slots:t})=>{let n=()=>t.default?.();return()=>C(`span`,{class:`additional-tag-like`},[n()])}}),_e=x({name:`AdditionalComponentPage`,props:[`id`],setup:(e,{slots:t})=>{let{id:n}=e,r=l(!1),i=ee(r),a=ve.find(e=>e.id===n);return a?()=>C(y,null,[C(`div`,{class:`page-heading`},[C(`div`,{class:`eyebrow`},[C(`span`,{class:`eyebrow__dot`},[]),a.group.toLocaleUpperCase()]),C(`div`,{class:`page-heading__row`},[C(`div`,{},[C(`h1`,{},[a.title]),C(`p`,{},[a.description])]),C(`span`,{class:`heading-badge`},[a.title.split(` `)[0]])])]),C(`section`,{class:`example-card`},[C(`div`,{class:`example-card__heading`},[C(`div`,{},[C(`h3`,{},[`交互示例`]),C(`p`,{},[`在下方体验组件，再展开查看可直接使用的 TypeScript 示例。`])]),C(`button`,{type:`button`,class:`code-toggle ${r.value?`code-toggle--active`:``}`,onClick:()=>i(e=>!e)},[C(`span`,{},[`</>`]),r.value?`收起代码`:`查看完整代码`])]),C(`div`,{class:`example-card__preview`},[a.preview]),r.value&&C(`pre`,{class:`code-panel`},[C(`code`,{innerHTML:{__html:te(a.code)}.__html},[])])]),C(`section`,{class:`api-table-section`},[C(`div`,{class:`eyebrow`},[C(`span`,{class:`eyebrow__dot`},[]),` API REFERENCE`]),C(`h2`,{},[`组件属性`]),C(`div`,{class:`api-table-wrap`},[C(`table`,{class:`api-table`},[C(`thead`,{},[C(`tr`,{},[C(`th`,{},[`属性`]),C(`th`,{},[`类型`]),C(`th`,{},[`默认值`])])]),C(`tbody`,{},[a.rows.map(([e,t,n])=>C(`tr`,{key:e},[C(`td`,{},[C(`code`,{},[w(e,a.rows)])]),C(`td`,{},[t]),C(`td`,{},[n])]))])])])])]):()=>null}}),ve=[{id:`icon`,title:`Icon 图标`,icon:`✦`,group:`基础组件`,description:`使用轻量的内联 SVG 图标表达清晰、可访问的操作含义。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Icon } from "atelier-ui-vue/icon";
export const ActionIcons = defineComponent({
    "name": "ActionIcons",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode("div", {}, [
            vnode(Icon, {
                "name": "search",
                "title": "搜索"
            }, {}),
            vnode(Icon, {
                "name": "plus",
                "size": 24
            }, {})
        ]);
    }
});
`,rows:[[`name`,`'plus' | 'search' | 'check' | 'close' | 'arrow-right' | 'info' | 'more'`,`required`],[`size`,`number`,`20`],[`title`,`string`,`—`]],preview:C(`div`,{class:`additional-icon-preview`},[C(V,{name:`search`,title:`搜索`},{}),C(V,{name:`plus`,size:24},{}),C(V,{name:`check`,size:24},{}),C(V,{name:`arrow-right`,size:24},{})])},{id:`flex`,title:`Flex 弹性布局`,icon:`↔`,group:`布局组件`,description:`使用常见的 Flexbox 属性快速对齐和排列内容。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Flex } from "atelier-ui-vue/flex";
export const Toolbar = defineComponent({
    "name": "Toolbar",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Flex, {
            "gap": 12,
            "justify": "space-between"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "项目"
                ]),
                vnode("button", {
                    "type": "button"
                }, [
                    "筛选"
                ])
            ]
        }));
    }
});
`,rows:[[`vertical`,`boolean`,`false`],[`gap`,`number | string`,`12`],[`align`,`CSSProperties[alignItems]`,`center`],[`justify`,`CSSProperties[justifyContent]`,`flex-start`],[`wrap`,`boolean`,`false`]],preview:C(ne,{class:`additional-flex-preview`,justify:`space-between`},{default:()=>[C(`strong`,{},[`项目工作区`]),C(g,{size:`sm`},{default:()=>[`筛选`]}),C($,{},{default:()=>[`全部项目`]})]})},{id:`space`,title:`Space 间距`,icon:`↔`,group:`布局组件`,description:`为一组相邻元素提供统一、可换行的间距。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Space } from "atelier-ui-vue/space";
export const Actions = defineComponent({
    "name": "Actions",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Space, {
            "size": 12
        }, {
            "default": () => [
                vnode(Button, {}, {
                    "default": () => [
                        "保存草稿"
                    ]
                }),
                vnode(Button, {
                    "variant": "primary"
                }, {
                    "default": () => [
                        "发布"
                    ]
                })
            ]
        });
    }
});
`,rows:[[`size`,`number | string`,`12`],[`direction`,`'horizontal' | 'vertical'`,`horizontal`],[`wrap`,`boolean`,`false`],[`#default`,`VNodeChild / slot`,`required`]],preview:C(re,{wrap:!0},{default:()=>[C(g,{},{default:()=>[`保存草稿`]}),C(g,{variant:`primary`},{default:()=>[`发布`]}),C(g,{variant:`tertiary`},{default:()=>[`更多`]})]})},{id:`layout`,title:`Layout 布局`,icon:`▤`,group:`布局组件`,description:`组合页头、侧栏、内容区和页脚，搭建常见页面骨架。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Layout, LayoutContent, LayoutFooter, LayoutHeader, LayoutSider } from "atelier-ui-vue/layout";
export const ProjectLayout = defineComponent({
    "name": "ProjectLayout",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Layout, {}, {
            "default": () => [
                vnode(LayoutHeader, {}, {
                    "default": () => [
                        "工作区标题"
                    ]
                }),
                vnode(Layout, {}, {
                    "default": () => [
                        vnode(LayoutSider, {}, {
                            "default": () => [
                                "项目导航"
                            ]
                        }),
                        vnode(LayoutContent, {}, {
                            "default": () => [
                                "主要内容"
                            ]
                        })
                    ]
                }),
                vnode(LayoutFooter, {}, {
                    "default": () => [
                        "© 2026"
                    ]
                })
            ]
        }));
    }
});
`,rows:[[`Layout`,`HTMLAttributes<HTMLDivElement>`,`flex container`],[`LayoutHeader`,`HTMLAttributes<HTMLElement>`,`header region`],[`LayoutSider`,`width?: number | string`,`220`],[`LayoutContent`,`HTMLAttributes<HTMLElement>`,`main region`],[`LayoutFooter`,`HTMLAttributes<HTMLElement>`,`footer region`]],preview:C(E,{class:`additional-layout-preview`},{default:()=>[C(se,{},{default:()=>[`工作区标题`]}),C(E,{},{default:()=>[C(A,{width:105},{default:()=>[`项目导航`]}),C(D,{},{default:()=>[`主要内容`]})]}),C(k,{},{default:()=>[`© 2026`]})]})},{id:`grid`,title:`Grid 栅格`,icon:`▦`,group:`布局组件`,description:`基于 24 列的网格快速构建对齐的内容布局。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Grid, GridCol } from "atelier-ui-vue/grid";
export const ProjectGrid = defineComponent({
    "name": "ProjectGrid",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Grid, {
            "columns": 24,
            "gap": 12
        }, {
            "default": () => [
                vnode(GridCol, {
                    "span": 12
                }, {
                    "default": () => [
                        "项目名称"
                    ]
                }),
                vnode(GridCol, {
                    "span": 12
                }, {
                    "default": () => [
                        "负责人"
                    ]
                }),
                vnode(GridCol, {
                    "span": 24
                }, {
                    "default": () => [
                        "更多信息"
                    ]
                })
            ]
        }));
    }
});
`,rows:[[`Grid.columns`,`number`,`24`],[`Grid.gap`,`number | string`,`16`],[`GridCol.span`,`number`,`12`]],preview:C(ie,{columns:24},{default:()=>[C(T,{span:12},{default:()=>[`项目名称`]}),C(T,{span:12},{default:()=>[`负责人`]}),C(T,{span:24},{default:()=>[`最近更新 · 今天`]})]})},{id:`inputOTP`,title:`InputOTP 验证码输入`,icon:`▦`,group:`数据录入`,description:`将一次性验证码拆分为易于输入和校验的独立数字格。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { InputOTP } from "atelier-ui-vue/input-otp";
export const VerificationCode = defineComponent({
    "name": "VerificationCode",
    "props": [],
    "setup": (props, { slots }) => {
        const code = vueRef('');
        const setCode = refSetter(code);
        return () => (vnode(InputOTP, {
            "modelValue": code.value,
            "onChange": setCode,
            "onComplete": (value: string) => console.log('验证码：', value),
            "ariaLabel": "登录验证码"
        }, {}));
    }
});
`,rows:[[`length`,`number`,`6`],[`value / defaultValue`,`string`,`—`],[`onChange`,`(value: string) => void`,`—`],[`onComplete`,`(value: string) => void`,`—`],[`disabled`,`boolean`,`false`],[`autoFocus`,`boolean`,`false`]],preview:C(U,{defaultValue:`482`,ariaLabel:`演示验证码`},{})},{id:`result`,title:`Result 结果`,icon:`✓`,group:`反馈组件`,description:`在独立页面或任务结束后呈现清晰的状态与下一步操作。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Result } from "atelier-ui-vue/result";
export const SaveResult = defineComponent({
    "name": "SaveResult",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Result, {
            "status": "success",
            "title": "保存成功",
            "subTitle": "项目设置已更新。"
        }, {
            "extra": () => vnode(Button, {
                "variant": "primary"
            }, {
                "default": () => [
                    "返回项目"
                ]
            })
        }));
    }
});
`,rows:[[`status`,`'success' | 'error' | 'info' | 'warning' | '404' | '500'`,`info`],[`title`,`VNodeChild / slot`,`required`],[`subTitle`,`VNodeChild / slot`,`—`],[`extra`,`VNodeChild / slot`,`—`]],preview:C(P,{status:`success`,title:`保存成功`,subTitle:`项目设置已更新。`},{extra:()=>C(g,{variant:`primary`},{default:()=>[`返回项目`]})})},{id:`message`,title:`Message 全局提示`,icon:`·`,group:`反馈组件`,description:`在页面顶部短暂展示轻量级的操作结果提示。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { message } from "atelier-ui-vue/message";
export const SaveMessage = defineComponent({
    "name": "SaveMessage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Button, {
            "onClick": () => message.success('设置已保存')
        }, {
            "default": () => [
                "保存设置"
            ]
        });
    }
});
`,rows:[[`message.success(content, options?)`,`(VNodeChild, MessageOptions?) => { close }`,`—`],[`message.open(content, options?)`,`(VNodeChild, MessageOptions?) => { close }`,`info`],[`duration`,`number`,`4000 ms`],[`message.destroy()`,`() => void`,`关闭所有消息`]],preview:C(g,{onClick:()=>he.success(`设置已保存`)},{default:()=>[`保存设置`]})},{id:`notification`,title:`Notification 通知提醒`,icon:`▣`,group:`反馈组件`,description:`在屏幕角落呈现带标题和描述的详细通知卡片。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { notification } from "atelier-ui-vue/notification";
export const ProjectNotice = defineComponent({
    "name": "ProjectNotice",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Button, {
            "onClick": () => notification.success({
                title: '成员已加入',
                description: '林知夏已加入 Aurora workspace。',
            })
        }, {
            "default": () => [
                "查看通知"
            ]
        });
    }
});
`,rows:[[`notification.open(options)`,`NotificationOptions => { close }`,`—`],[`title`,`VNodeChild / slot`,`required`],[`description`,`VNodeChild / slot`,`—`],[`type`,`'success' | 'info' | 'warning' | 'error'`,`info`],[`placement`,`'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'`,`top-right`],[`notification.destroy()`,`() => void`,`关闭所有通知`]],preview:C(g,{onClick:()=>ge.success({title:`成员已加入`,description:`林知夏已加入 Aurora workspace。`})},{default:()=>[`查看通知`]})},{id:`configProvider`,title:`ConfigProvider 全局化配置`,icon:`⚙`,group:`通用组件`,description:`在子树范围统一配置前缀、方向、尺寸、语言和主题变量。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { ConfigProvider } from "atelier-ui-vue/config-provider";
import { Button } from "atelier-ui-vue/button";
export const BrandedSection = defineComponent({
    "name": "BrandedSection",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(ConfigProvider, {
            "size": "large",
            "locale": "zh-CN",
            "theme": { primaryColor: '#2f9472', borderRadius: '12px' }
        }, {
            "default": () => [
                vnode(Button, {
                    "variant": "primary"
                }, {
                    "default": () => [
                        "保存更改"
                    ]
                })
            ]
        }));
    }
});
`,rows:[[`prefixCls`,`string`,`at`],[`direction`,`'ltr' | 'rtl'`,`ltr`],[`size`,`'small' | 'middle' | 'large'`,`middle`],[`locale`,`'zh-CN' | 'en-US'`,`zh-CN`],[`theme.primaryColor`,`string`,`—`],[`theme.borderRadius`,`string`,`—`],[`useConfig()`,`UIConfig`,`读取上下文`]],preview:C(de,{size:`large`,locale:`zh-CN`,theme:{primaryColor:`#2f9472`}},{default:()=>[C(g,{variant:`primary`},{default:()=>[`保存更改`]})]})}];export{_e as AdditionalComponentPage};