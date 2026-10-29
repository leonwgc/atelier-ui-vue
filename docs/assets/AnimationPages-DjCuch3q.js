import{t as e}from"./Input-DBOg5Aup.js";import{n as t,r as n}from"./form-DMeKSd-S.js";import{A as r,E as i,H as a,I as o,J as s,K as c,L as l,O as u,T as d,W as f,Y as p,d as m,g as h,j as g,l as _,m as v,n as y,p as b,s as x,u as ee,v as S,w as te,x as C}from"./index-CILakwI7.js";import{a as w,i as T,n as ne,r as re}from"./shared-DuhUujBE.js";var E=S({__name:`FadeIn`,props:{delay:{default:0},duration:{default:500}},setup(e){return(t,n)=>(u(),v(`div`,{class:c(`at-fade-in`),style:s({"--at-fade-in-delay":`${Math.max(0,e.delay)}ms`,"--at-fade-in-duration":`${Math.max(0,e.duration)}ms`})},[g(t.$slots,`default`)],4))}}),D=S({__name:`BlurFade`,props:{delay:{default:0},duration:{default:500},blur:{default:6},offsetY:{default:8}},setup(e){return(t,n)=>(u(),v(`div`,{class:c(`at-blur-fade`),style:s({"--at-blur-fade-delay":`${Math.max(0,e.delay)}ms`,"--at-blur-fade-duration":`${Math.max(0,e.duration)}ms`,"--at-blur-fade-blur":`${Math.max(0,e.blur)}px`,"--at-blur-fade-y":`${e.offsetY}px`})},[g(t.$slots,`default`)],4))}}),O=S({__name:`ScaleIn`,props:{delay:{default:0},duration:{default:450},startScale:{default:.88}},setup(e){return(t,n)=>(u(),v(`div`,{class:c(`at-scale-in`),style:s({"--at-scale-in-delay":`${Math.max(0,e.delay)}ms`,"--at-scale-in-duration":`${Math.max(0,e.duration)}ms`,"--at-scale-in-start":String(Math.max(0,e.startScale))})},[g(t.$slots,`default`)],4))}}),k=S({__name:`Pulse`,props:{delay:{default:0},duration:{default:1400}},setup(e){return(t,n)=>(u(),v(`div`,{class:c(`at-pulse`),style:s({"--at-pulse-delay":`${Math.max(0,e.delay)}ms`,"--at-pulse-duration":`${Math.max(0,e.duration)}ms`})},[g(t.$slots,`default`)],4))}}),A=S({__name:`Glow`,props:{delay:{default:0},duration:{default:1800},color:{default:`#8b7dff`}},setup(e){return(t,n)=>(u(),v(`div`,{class:c(`at-glow`),style:s({"--at-glow-delay":`${Math.max(0,e.delay)}ms`,"--at-glow-duration":`${Math.max(0,e.duration)}ms`,"--at-glow-color":e.color})},[g(t.$slots,`default`)],4))}}),j=S({__name:`Press`,props:{delay:{default:0},duration:{default:500}},setup(e){return(t,n)=>(u(),v(`div`,{class:c(`at-press`),style:s({"--at-press-delay":`${Math.max(0,e.delay)}ms`,"--at-press-duration":`${Math.max(0,e.duration)}ms`})},[g(t.$slots,`default`)],4))}}),M=S({__name:`HoverLift`,props:{delay:{default:0},duration:{default:500},lift:{default:6}},setup(e){return(t,n)=>(u(),v(`div`,{class:c(`at-hover-lift`),style:s({"--at-hover-lift-delay":`${Math.max(0,e.delay)}ms`,"--at-hover-lift-duration":`${Math.max(0,e.duration)}ms`,"--at-hover-lift-distance":`${Math.max(0,e.lift)}px`})},[g(t.$slots,`default`)],4))}}),N=S({__name:`Shimmer`,props:{delay:{default:0},duration:{default:1800},highlight:{default:`rgb(255 255 255 / 62%)`}},setup(e){return(t,n)=>(u(),v(`div`,{class:c(`at-shimmer`),style:s({"--at-shimmer-delay":`${Math.max(0,e.delay)}ms`,"--at-shimmer-duration":`${Math.max(0,e.duration)}ms`,"--at-shimmer-highlight":e.highlight})},[g(t.$slots,`default`)],4))}}),P=S({__name:`Shake`,props:{delay:{default:0},duration:{default:650},active:{type:Boolean,default:!0}},setup(e){return(t,n)=>(u(),v(`div`,{class:c([`at-shake`,{"at-shake--active":e.active}]),style:s({"--at-shake-delay":`${Math.max(0,e.delay)}ms`,"--at-shake-duration":`${Math.max(0,e.duration)}ms`})},[g(t.$slots,`default`)],6))}}),F=S({__name:`Wobble`,props:{delay:{default:0},duration:{default:900},active:{type:Boolean,default:!0}},setup(e){return(t,n)=>(u(),v(`div`,{class:c([`at-wobble`,{"at-wobble--active":e.active}]),style:s({"--at-wobble-delay":`${Math.max(0,e.delay)}ms`,"--at-wobble-duration":`${Math.max(0,e.duration)}ms`})},[g(t.$slots,`default`)],6))}}),I=S({__name:`SlideIn`,props:{direction:{default:`up`},distance:{default:16},delay:{default:0},duration:{default:500}},setup(e){return(t,n)=>(u(),v(`div`,{class:`at-slide-in`,style:s({"--at-slide-in-x":`${e.direction===`left`?-Math.max(0,e.distance):e.direction===`right`?Math.max(0,e.distance):0}px`,"--at-slide-in-y":`${e.direction===`up`?Math.max(0,e.distance):e.direction===`down`?-Math.max(0,e.distance):0}px`,"--at-slide-in-delay":`${Math.max(0,e.delay)}ms`,"--at-slide-in-duration":`${Math.max(0,e.duration)}ms`})},[g(t.$slots,`default`)],4))}}),L=S({__name:`FlipIn`,props:{direction:{default:`y`},delay:{default:0},duration:{default:600}},setup(e){return(t,n)=>(u(),v(`div`,{class:c([`at-flip-in`,`at-flip-in--${e.direction}`]),style:s({"--at-flip-in-delay":`${Math.max(0,e.delay)}ms`,"--at-flip-in-duration":`${Math.max(0,e.duration)}ms`})},[g(t.$slots,`default`)],6))}}),R=[`data-open`,`aria-hidden`],z=S({__name:`Expand`,props:{open:{type:Boolean},duration:{default:300}},setup(e){let t=e,n=a(null);return l(()=>{n.value&&(n.value.inert=!t.open)}),(t,r)=>(u(),v(`div`,{class:`at-expand`,"data-open":e.open?`true`:`false`,"aria-hidden":!e.open,style:s({"--at-expand-duration":`${Math.max(0,e.duration)}ms`})},[m(`div`,{ref_key:`content`,ref:n,class:`at-expand__inner`},[g(t.$slots,`default`)],512)],12,R))}}),B={class:`at-flip-card__inner`},V=[`aria-hidden`],H=[`aria-hidden`],U=S({__name:`FlipCard`,props:{flipped:{type:Boolean},direction:{default:`horizontal`}},setup(e){let t=e,n=a(null),r=a(null);return l(()=>{n.value&&(n.value.inert=!!t.flipped),r.value&&(r.value.inert=!t.flipped)}),(t,i)=>(u(),v(`div`,{class:c([`at-flip-card`,{"at-flip-card--flipped":e.flipped}]),style:s({"--at-flip-card-rotation":e.direction===`horizontal`?`rotateY(180deg)`:`rotateX(180deg)`}),role:`group`,"aria-label":`Flip card`},[m(`div`,B,[m(`div`,{ref_key:`front`,ref:n,class:`at-flip-card__face at-flip-card__face--front`,"aria-hidden":!!e.flipped},[g(t.$slots,`front`)],8,V),m(`div`,{ref_key:`back`,ref:r,class:`at-flip-card__face at-flip-card__face--back`,"aria-hidden":!e.flipped},[g(t.$slots,`back`)],8,H)])],6))}}),W=S({__name:`BorderBeam`,props:{color:{default:`#8b7dff`},duration:{default:5},paused:{type:Boolean}},setup(e){return(t,n)=>(u(),v(`div`,{class:c([`at-border-beam`,{"at-border-beam--paused":e.paused}]),style:s({"--at-beam-color":e.color,"--at-beam-duration":`${Math.max(.5,e.duration)}s`})},[m(`div`,null,[g(t.$slots,`default`)])],6))}}),G={class:`at-marquee__track`},ie={class:`at-marquee__group`},K=S({__name:`Marquee`,props:{duration:{default:28},direction:{default:`left`},pauseOnHover:{type:Boolean,default:!0},gradient:{type:Boolean}},setup(e){let t=a(null);return i(()=>{t.value&&(t.value.inert=!0)}),(n,r)=>(u(),v(`div`,{class:c([`at-marquee`,`at-marquee--${e.direction}`,{"at-marquee--pause-on-hover":e.pauseOnHover,"at-marquee--gradient":e.gradient}]),style:s({"--at-marquee-duration":`${Math.max(.5,e.duration)}s`}),"aria-roledescription":`marquee`},[m(`div`,G,[m(`div`,ie,[g(n.$slots,`default`)]),m(`div`,{ref_key:`duplicate`,ref:t,class:`at-marquee__group`,"aria-hidden":`true`},[g(n.$slots,`default`)],512)])],6))}}),q=[`aria-label`],J=S({__name:`NumberTicker`,props:{value:{},startValue:{default:0},duration:{default:1200},delay:{default:0},decimals:{default:0},locale:{default:`zh-CN`},prefix:{default:``},suffix:{default:``}},setup(e){let t=e,n=a(t.startValue),r=0,s;function c(){cancelAnimationFrame(r),clearTimeout(s),matchMedia(`(prefers-reduced-motion: reduce)`).matches||t.duration<=0?n.value=t.value:(n.value=t.startValue,s=setTimeout(()=>{let e,i=a=>{e??=a;let o=Math.min((a-e)/t.duration,1);n.value=t.startValue+(t.value-t.startValue)*(1-(1-o)**3),o<1&&(r=requestAnimationFrame(i))};r=requestAnimationFrame(i)},t.delay))}i(()=>{c(),o(()=>[t.value,t.startValue,t.duration,t.delay],c)}),d(()=>{cancelAnimationFrame(r),clearTimeout(s)});let l=ee(()=>new Intl.NumberFormat(t.locale,{minimumFractionDigits:t.decimals,maximumFractionDigits:t.decimals}));return(t,r)=>(u(),v(`span`,{class:`at-number-ticker`,"aria-label":`${e.prefix}${l.value.format(e.value)}${e.suffix}`,"aria-live":`off`},p(e.prefix)+p(l.value.format(n.value))+p(e.suffix),9,q))}}),Y=S({__name:`TypingAnimation`,props:{words:{},typeSpeed:{default:75},deleteSpeed:{default:38},pauseDuration:{default:1300},loop:{type:Boolean,default:!0},cursor:{type:Boolean,default:!0}},setup(e){let t=e,n=a(``),r;function s(){if(clearTimeout(r),n.value=``,!t.words.length)return;if(matchMedia(`(prefers-reduced-motion: reduce)`).matches){n.value=t.words[0];return}let e=0,i=0,a=!1,o=()=>{let s=t.words[e]??``;if(i+=a?-1:1,n.value=s.slice(0,Math.max(0,i)),!a&&i>=s.length){if(!t.loop&&e===t.words.length-1)return;a=!0,r=setTimeout(o,t.pauseDuration)}else a&&i<=0&&(a=!1,e=(e+1)%t.words.length),r=setTimeout(o,Math.max(0,a?t.deleteSpeed:t.typeSpeed))};r=setTimeout(o,t.typeSpeed)}return i(()=>{s(),o(()=>[t.words.join(`\0`),t.typeSpeed,t.deleteSpeed,t.pauseDuration,t.loop],s)}),d(()=>clearTimeout(r)),(t,r)=>(u(),v(`span`,{class:c([`at-typing-animation`,{"at-typing-animation--cursor":e.cursor}]),"aria-live":`off`},p(n.value),3))}}),ae=[`data-visible`],oe=S({__name:`ScrollReveal`,props:{direction:{default:`up`},distance:{default:16},delay:{default:0},duration:{default:600},threshold:{default:.1},rootMargin:{default:`0px`},once:{type:Boolean,default:!0}},setup(e){let t=e,n=a(null),r=a(!1),c;function l(){c?.disconnect(),n.value&&(typeof IntersectionObserver>`u`||matchMedia(`(prefers-reduced-motion: reduce)`).matches?r.value=!0:(c=new IntersectionObserver(([e])=>{e.isIntersecting?(r.value=!0,t.once&&n.value&&c?.unobserve(n.value)):t.once||(r.value=!1)},{threshold:t.threshold,rootMargin:t.rootMargin}),c.observe(n.value)))}return i(()=>{l(),o(()=>[t.threshold,t.rootMargin,t.once],l)}),d(()=>c?.disconnect()),(t,i)=>(u(),v(`div`,{ref_key:`root`,ref:n,class:`at-scroll-reveal`,"data-visible":r.value?`true`:`false`,style:s({"--at-scroll-reveal-x":`${e.direction===`left`?-Math.max(0,e.distance):e.direction===`right`?Math.max(0,e.distance):0}px`,"--at-scroll-reveal-y":`${e.direction===`up`?Math.max(0,e.distance):e.direction===`down`?-Math.max(0,e.distance):0}px`,"--at-scroll-reveal-delay":`${Math.max(0,e.delay)}ms`,"--at-scroll-reveal-duration":`${Math.max(0,e.duration)}ms`})},[g(t.$slots,`default`)],12,ae))}}),se={class:`at-confetti`},ce=S({__name:`Confetti`,props:{active:{type:Boolean,default:!0},count:{default:24},duration:{default:1800},colors:{default:()=>[`#7c3aed`,`#06b6d4`,`#f59e0b`,`#ec4899`,`#22c55e`]}},setup(e){let t=[-42,-31,-20,-9,2,13,24,35,44],n=[-8,-16,-24,-12,-20,-4,-18],i=[35,95,155,215,275,325];return(a,o)=>(u(),v(`span`,se,[g(a.$slots,`default`),e.active?(u(!0),v(x,{key:0},r(Number.isFinite(e.count)?Math.min(100,Math.max(0,Math.floor(e.count))):0,r=>(u(),v(`span`,{key:r,class:`at-confetti__particle`,"aria-hidden":`true`,style:s({"--at-confetti-x":`${t[(r-1)%t.length]}px`,"--at-confetti-y":`${n[(r-1)%n.length]}px`,"--at-confetti-rotate":`${i[(r-1)%i.length]}deg`,"--at-confetti-size":`${6+(r-1)%4*2}px`,"--at-confetti-duration":`${Number.isFinite(e.duration)?Math.max(0,e.duration):0}ms`,"--at-confetti-delay":`${(r-1)%6*25}ms`,"--at-confetti-color":e.colors[(r-1)%e.colors.length]??`#7c3aed`})},null,4))),128)):b(``,!0)]))}}),le={class:`at-animated-list`},ue=S({__name:`AnimatedList`,props:{items:{},getItemKey:{},staggerDelay:{default:70},duration:{default:420},itemClassName:{}},setup(e){return(t,n)=>(u(),v(`ul`,le,[(u(!0),v(x,null,r(e.items,(n,r)=>(u(),v(`li`,{key:e.getItemKey?.(n,r)??r,class:c([`at-animated-list__item`,e.itemClassName]),style:s({"--at-animated-list-delay":`${Math.max(0,r*e.staggerDelay)}ms`,"--at-animated-list-duration":`${Math.max(0,e.duration)}ms`})},[g(t.$slots,`default`,{item:n,index:r},()=>[h(p(n),1)])],6))),128))]))}});function X(e){return e.flatMap(e=>e.type===x&&Array.isArray(e.children)?X(e.children):[e])}var de=S({name:`Stagger`,props:{staggerDelay:{type:Number,default:70},duration:{type:Number,default:420},itemClassName:String},setup(e,{slots:t}){return()=>C(`div`,{class:`at-stagger`},X(t.default?.()??[]).map((t,n)=>C(`div`,{key:t.key??n,class:[`at-stagger__item`,e.itemClassName],style:{"--at-stagger-delay":`${Math.max(0,n*e.staggerDelay)}ms`,"--at-stagger-duration":`${Math.max(0,e.duration)}ms`}},[t])))}}),fe=[`aria-hidden`],Z=S({__name:`Transition`,props:{in:{type:Boolean,default:!0},timeout:{default:200},appear:{type:Boolean},mountOnEnter:{type:Boolean,default:!0},unmountOnExit:{type:Boolean,default:!0},animation:{default:`fade`},classNames:{},childrenClassName:{}},emits:[`enter`,`entered`,`exit`,`exited`],setup(e,{emit:t}){let n=e,r=t,l=a(n.in?n.appear?`entering`:`entered`:`exited`),f=a(n.in||!n.mountOnEnter),p=a(null),h,_=0;async function y(e){let t=++_;if(clearTimeout(h),e&&(f.value=!0),l.value=e?`entering`:`exiting`,await te(),_!==t)return;p.value&&(p.value.inert=!e,r(e?`enter`:`exit`,p.value));let i=matchMedia(`(prefers-reduced-motion: reduce)`).matches;h=setTimeout(()=>{_===t&&(p.value&&r(e?`entered`:`exited`,p.value),l.value=e?`entered`:`exited`)},i?0:Math.max(0,n.timeout))}return i(()=>{n.in&&n.appear&&y(!0),p.value&&(p.value.inert=!n.in),o(()=>[n.in,n.timeout,n.appear],([e])=>{y(e)})}),d(()=>{_++,clearTimeout(h)}),(t,r)=>f.value&&!(l.value===`exited`&&e.unmountOnExit)?(u(),v(`div`,{key:0,ref_key:`node`,ref:p,class:c([`at-transition`,`at-transition--${e.animation}`,`at-transition--${l.value}`,typeof e.classNames==`string`?`${e.classNames}-${l.value}`:e.classNames?.[l.value]]),style:s({"--at-transition-duration":`${Math.max(0,e.timeout)}ms`}),"aria-hidden":!n.in||l.value===`exited`||void 0},[m(`div`,{class:c([`at-transition__content`,e.childrenClassName])},[!n.in&&t.$slots.exit?g(t.$slots,`exit`,{},void 0,void 0,0):g(t.$slots,`default`,{},void 0,void 0,1)],2)],14,fe)):b(``,!0)}});function Q(e){return e.flatMap(e=>e.type===x&&Array.isArray(e.children)?Q(e.children):[e])}var pe=S({name:`TransitionGroup`,setup(e,{slots:t}){let n=new Map,r=new Map,i=a(0);return()=>{i.value;let e=Q(t.default?.()??[]),a=new Map(e.filter(e=>e.type===Z&&e.key!==null).map(e=>[e.key,e]));for(let[e,t]of n)a.has(e)||r.set(e,t);for(let e of a.keys())r.delete(e);n=a;let o=e.map(e=>e.type===Z?_(e,{in:!0,appear:e.props?.appear??!0}):e);for(let[e,t]of r)o.push(_(t,{key:e,in:!1,appear:t.props?.appear??!0,onExited:()=>{r.delete(e),i.value++}},!0));return C(`div`,{class:`at-transition-group`},o)}}}),$=S({name:`ExpandPreview`,props:[],setup:(e,{slots:t})=>{let n=f(!1),r=T(n);return()=>w(`div`,{class:`animation-expand-demo`},[w(y,{size:`sm`,"aria-expanded":n.value,"aria-controls":`animation-expand-demo-panel`,onClick:()=>r(e=>!e)},{default:()=>[n.value?`收起内容`:`展开内容`]}),w(z,{id:`animation-expand-demo-panel`,open:n.value,class:`animation-expand-preview`},{default:()=>[w(`p`,{},[`Additional details are revealed here.`])]})])}}),me=S({name:`SingleTransitionDemo`,props:[],setup:(e,{slots:t})=>{let n=f(!0),r=T(n);return()=>w(`div`,{class:`animation-transition-demo`},[w(y,{size:`sm`,onClick:()=>r(e=>!e)},{default:()=>[`切换筛选面板`]}),w(Z,{in:n.value,animation:`collapse`,timeout:200},{default:()=>[w(`div`,{class:`animation-transition-panel`},[`筛选条件与结果设置`])]})])}}),he=S({name:`TransitionGroupDemo`,props:[],setup:(r,{slots:i})=>{let a=n({defaultValues:{members:[{name:`Alex Chen`},{name:`Morgan Lee`}]}}),o=t({control:a.control,name:`members`});return()=>w(`div`,{class:`animation-transition-demo`},[w(y,{size:`sm`,onClick:()=>o.append({name:``})},{default:()=>[`＋ 添加成员`]}),w(pe,{class:`animation-transition-list`},{default:()=>[o.fields.map((t,n)=>w(Z,{key:t.id,animation:`slide-up`,timeout:200},{exit:()=>w(`div`,{class:`animation-transition-exit`},[t.name||`成员 ${n+1}`,` 已移除`]),default:()=>[w(`div`,{class:`animation-transition-row`},[w(e,{"aria-label":`成员 ${n+1} 姓名`,placeholder:`成员姓名`,...a.register(`members.${n}.name`)},{}),w(`button`,{type:`button`,class:`animation-transition-remove`,"aria-label":`移除成员 ${n+1}`,onClick:()=>o.remove(n)},[`×`])])]}))]})])}}),ge=S({name:`AnimationPage`,props:[`id`],setup:(e,{slots:t})=>{let{id:n}=e,r=f(!1),i=T(r),a=_e.find(e=>e.id===n);return a?()=>w(x,null,[w(`div`,{class:`page-heading`},[w(`div`,{class:`eyebrow`},[w(`span`,{class:`eyebrow__dot`},[]),`动画组件`]),w(`div`,{class:`page-heading__row`},[w(`div`,{},[w(`h1`,{},[a.title]),w(`p`,{},[a.description])]),w(`span`,{class:`heading-badge`},[a.title.split(` `)[0]])])]),w(`section`,{class:`example-card`},[w(`div`,{class:`example-card__heading`},[w(`div`,{},[w(`h3`,{},[`交互示例`]),w(`p`,{},[`体验组件效果，再查看可直接使用的 TypeScript 示例。`])]),w(`button`,{type:`button`,class:`code-toggle ${r.value?`code-toggle--active`:``}`,onClick:()=>i(e=>!e)},[w(`span`,{},[`</>`]),r.value?`收起代码`:`查看完整代码`])]),w(`div`,{class:`example-card__preview`},[a.preview]),r.value&&w(`pre`,{class:`code-panel`},[w(`code`,{innerHTML:{__html:ne(a.code)}.__html},[])])]),w(`section`,{class:`api-table-section`},[w(`div`,{class:`eyebrow`},[w(`span`,{class:`eyebrow__dot`},[]),` API REFERENCE`]),w(`h2`,{},[`组件属性`]),w(`div`,{class:`api-table-wrap`},[w(`table`,{class:`api-table`},[w(`thead`,{},[w(`tr`,{},[w(`th`,{},[`属性`]),w(`th`,{},[`类型`]),w(`th`,{},[`默认值`])])]),w(`tbody`,{},[a.rows.map(([e,t,n])=>w(`tr`,{key:e},[w(`td`,{},[w(`code`,{},[re(e,a.rows)])]),w(`td`,{},[t]),w(`td`,{},[n])]))])])])])]):()=>null}}),_e=[{id:`marquee`,title:`Marquee 滚动展示`,icon:`⇢`,description:`以连续循环的轨道展示标签、动态或品牌内容。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Marquee } from "atelier-ui-vue/marquee";
export const ProjectMarquee = defineComponent({
    "name": "ProjectMarquee",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Marquee, {
            "duration": 24,
            "gradient": true,
            "pauseOnHover": true
        }, {
            "default": () => [
                vnode("span", {}, [
                    "Design systems"
                ]),
                vnode("span", {}, [
                    "Product teams"
                ]),
                vnode("span", {}, [
                    "Made to move"
                ])
            ]
        }));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`duration`,`number`,`28 秒`],[`direction`,`'left' | 'right'`,`left`],[`pauseOnHover`,`boolean`,`true`],[`gradient`,`boolean`,`false`]],preview:w(K,{duration:12,gradient:!0},{default:()=>[w(`span`,{class:`animation-pill`},[`Design systems`]),w(`span`,{class:`animation-pill`},[`Product teams`]),w(`span`,{class:`animation-pill`},[`Made to move`])]})},{id:`numberTicker`,title:`NumberTicker 数值滚动`,icon:`↗`,description:`使用缓动数字递增强调统计值和关键指标。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { NumberTicker } from "atelier-ui-vue/number-ticker";
export const MonthlyRevenue = defineComponent({
    "name": "MonthlyRevenue",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(NumberTicker, {
            "value": 12840,
            "duration": 1400
        }, {
            "prefix": () => "$"
        });
    }
});
`,rows:[[`value`,`number`,`required`],[`startValue`,`number`,`0`],[`duration`,`number`,`1200 ms`],[`delay`,`number`,`0 ms`],[`decimals`,`number`,`0`],[`locale`,`string`,`zh-CN`],[`prefix / suffix`,`string`,`—`]],preview:w(`div`,{class:`animation-number-preview`},[w(J,{value:12840,duration:1600},{prefix:()=>`$`})])},{id:`typingAnimation`,title:`TypingAnimation 打字效果`,icon:`▏`,description:`逐字输入、停顿并轮播多段短文案。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { TypingAnimation } from "atelier-ui-vue/typing-animation";
export const RotatingHeadline = defineComponent({
    "name": "RotatingHeadline",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(TypingAnimation, {
            "words": ['Build with clarity', 'Ship with confidence'],
            "typeSpeed": 65,
            "pauseDuration": 1200
        }, {}));
    }
});
`,rows:[[`words`,`string[]`,`required`],[`typeSpeed`,`number`,`75 ms`],[`deleteSpeed`,`number`,`38 ms`],[`pauseDuration`,`number`,`1300 ms`],[`loop`,`boolean`,`true`],[`cursor`,`boolean`,`true`]],preview:w(`div`,{class:`animation-typing-preview`},[w(Y,{words:[`Build with clarity`,`Ship with confidence`],typeSpeed:65,pauseDuration:1e3},{})])},{id:`blurFade`,title:`BlurFade 模糊渐入`,icon:`◌`,description:`让内容以轻微位移和模糊渐显，支持错峰延迟。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { BlurFade } from "atelier-ui-vue/blur-fade";
export const Intro = defineComponent({
    "name": "Intro",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(BlurFade, {
            "delay": 120,
            "duration": 600,
            "blur": 8,
            "offsetY": 12
        }, {
            "default": () => [
                vnode("h2", {}, [
                    "Every detail finds its place."
                ])
            ]
        }));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`delay`,`number`,`0 ms`],[`duration`,`number`,`500 ms`],[`blur`,`number`,`6 px`],[`offsetY`,`number`,`8 px`]],preview:w(D,{key:`blur-fade-demo`,class:`animation-fade-preview`,delay:80,duration:850},{default:()=>[w(`strong`,{},[`Every detail finds its place.`])]})},{id:`fadeIn`,title:`FadeIn 淡入`,icon:`◦`,description:`让内容以轻柔的透明度渐变进入，可配置延迟与时长。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { FadeIn } from "atelier-ui-vue/fade-in";
export const Intro = defineComponent({
    "name": "Intro",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(FadeIn, {
            "delay": 120,
            "duration": 700
        }, {
            "default": () => [
                vnode("h2", {}, [
                    "Every detail finds its place."
                ])
            ]
        }));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`delay`,`number`,`0 ms`],[`duration`,`number`,`500 ms`],[`HTML attributes`,`HTMLAttributes<HTMLDivElement>`,`—`]],preview:w(E,{key:`fade-in-demo`,class:`animation-fade-preview`,delay:80,duration:850},{default:()=>[w(`strong`,{},[`Every detail finds its place.`])]})},{id:`slideIn`,title:`SlideIn 滑入`,icon:`⇲`,description:`让内容从指定方向平滑滑入，同时淡入显示。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { SlideIn } from "atelier-ui-vue/slide-in";
export const Intro = defineComponent({
    "name": "Intro",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(SlideIn, {
            "direction": "left",
            "distance": 24,
            "delay": 100,
            "duration": 600
        }, {
            "default": () => [
                vnode("h2", {}, [
                    "Every detail finds its place."
                ])
            ]
        }));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`direction`,`'left' | 'right' | 'up' | 'down'`,`up`],[`distance`,`number`,`16 px`],[`delay`,`number`,`0 ms`],[`duration`,`number`,`500 ms`],[`HTML attributes`,`HTMLAttributes<HTMLDivElement>`,`—`]],preview:w(I,{key:`slide-in-demo`,class:`animation-fade-preview`,direction:`left`,distance:24,delay:80,duration:850},{default:()=>[w(`strong`,{},[`Every detail finds its place.`])]})},{id:`scrollReveal`,title:`ScrollReveal 滚动显现`,icon:`⌄`,description:`元素进入视口时渐入，可选择方向、距离及是否重复触发。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { ScrollReveal } from "atelier-ui-vue/scroll-reveal";
export const FeatureCard = defineComponent({
    "name": "FeatureCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(ScrollReveal, {
            "direction": "up",
            "distance": 20,
            "once": true
        }, {
            "default": () => [
                vnode("article", {}, [
                    vnode("h2", {}, [
                        "Reveal on scroll"
                    ]),
                    vnode("p", {}, [
                        "Content appears as it enters the viewport."
                    ])
                ])
            ]
        }));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`direction`,`'left' | 'right' | 'up' | 'down'`,`up`],[`distance`,`number`,`16 px`],[`delay / duration`,`number`,`0 / 600 ms`],[`threshold`,`number`,`0.1`],[`rootMargin`,`string`,`0px`],[`once`,`boolean`,`true`]],preview:w(oe,{key:`scroll-reveal-demo`,class:`animation-fade-preview`,direction:`up`},{default:()=>[w(`strong`,{},[`Reveal on scroll`])]})},{id:`scaleIn`,title:`ScaleIn 缩放弹入`,icon:`⊙`,description:`内容从较小比例平滑放大并淡入，适用于卡片、弹窗和菜单。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { ScaleIn } from "atelier-ui-vue/scale-in";
export const WelcomeCard = defineComponent({
    "name": "WelcomeCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(ScaleIn, {
            "startScale": 0.85,
            "duration": 450
        }, {
            "default": () => [
                vnode("article", {}, [
                    "Welcome back"
                ])
            ]
        }));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`startScale`,`number`,`0.88`],[`delay`,`number`,`0 ms`],[`duration`,`number`,`450 ms`]],preview:w(O,{key:`scale-in-demo`,class:`animation-fade-preview`},{default:()=>[w(`strong`,{},[`Welcome back`])]})},{id:`stagger`,title:`Stagger 错峰动画`,icon:`☷`,description:`以错峰顺序呈现任意子元素，适合标签、卡片和列表内容。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Stagger } from "atelier-ui-vue/stagger";
export const FeatureTags = defineComponent({
    "name": "FeatureTags",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Stagger, {
            "staggerDelay": 90
        }, {
            "default": () => [
                vnode("span", {}, [
                    "Fast setup"
                ]),
                vnode("span", {}, [
                    "Accessible"
                ]),
                vnode("span", {}, [
                    "Customizable"
                ])
            ]
        }));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`staggerDelay`,`number`,`70 ms`],[`duration`,`number`,`420 ms`],[`itemClassName`,`string`,`—`],[`HTML attributes`,`HTMLAttributes<HTMLDivElement>`,`—`]],preview:w(de,{key:`stagger-demo`,class:`animation-stagger-preview`,staggerDelay:100},{default:()=>[w(`span`,{class:`animation-pill`},[`Fast setup`]),w(`span`,{class:`animation-pill`},[`Accessible`]),w(`span`,{class:`animation-pill`},[`Customizable`])]})},{id:`expand`,title:`Expand 平滑展开`,icon:`⌄`,description:`对受控内容进行平滑展开与收起，并隐藏折叠内容的辅助技术焦点。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Expand } from "atelier-ui-vue/expand";
export const Details = defineComponent({
    "name": "Details",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        return () => (vnode(Fragment, null, [
            vnode(Button, {
                "onClick": () => setOpen((value: boolean) => !value)
            }, {
                "default": () => [
                    open.value ? 'Hide details' : 'Show details'
                ]
            }),
            vnode(Expand, {
                "open": open.value
            }, {
                "default": () => [
                    vnode("p", {}, [
                        "Additional details are revealed here."
                    ])
                ]
            })
        ]));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`open`,`boolean`,`required`],[`duration`,`number`,`300 ms`],[`HTML attributes`,`HTMLAttributes<HTMLDivElement>`,`—`]],preview:w($,{},{})},{id:`pulse`,title:`Pulse 呼吸`,icon:`◉`,description:`以柔和的循环缩放和透明度变化强调需要关注的内容。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Pulse } from "atelier-ui-vue/pulse";
export const LiveStatus = defineComponent({
    "name": "LiveStatus",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Pulse, {
            "duration": 1400
        }, {
            "default": () => [
                vnode("span", {}, [
                    "● Live now"
                ])
            ]
        });
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`duration`,`number`,`1400 ms`],[`HTML attributes`,`HTMLAttributes<HTMLDivElement>`,`—`]],preview:w(k,{class:`animation-fade-preview`},{default:()=>[w(`strong`,{},[`● Live now`])]})},{id:`glow`,title:`Glow 柔光`,icon:`✧`,description:`在内容周围循环显示柔和光晕，可自定义颜色与速度。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Glow } from "atelier-ui-vue/glow";
export const Highlight = defineComponent({
    "name": "Highlight",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Glow, {
            "color": "#8b7dff",
            "duration": 1800
        }, {
            "default": () => [
                "Featured"
            ]
        });
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`color`,`string`,`#8b7dff`],[`duration`,`number`,`1800 ms`]],preview:w(A,{class:`animation-fade-preview`},{default:()=>[w(`strong`,{},[`Featured`])]})},{id:`shake`,title:`Shake 震动反馈`,icon:`↔`,description:`通过短促的水平抖动反馈错误或无效操作，可用 active 重新触发。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Shake } from "atelier-ui-vue/shake";
export const InvalidField = defineComponent({
    "name": "InvalidField",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Shake, {
            "active": true
        }, {
            "default": () => [
                vnode("span", {
                    "role": "alert"
                }, [
                    "Please check this field."
                ])
            ]
        });
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`active`,`boolean`,`true`],[`duration`,`number`,`650 ms`]],preview:w(P,{key:`shake-demo`,class:`animation-fade-preview`},{default:()=>[w(`strong`,{},[`Invalid input`])]})},{id:`wobble`,title:`Wobble 摇摆反馈`,icon:`↝`,description:`以轻微旋转摆动吸引注意，可用 active 控制播放与重播。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Wobble } from "atelier-ui-vue/wobble";
export const NewFeature = defineComponent({
    "name": "NewFeature",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Wobble, {
            "active": true
        }, {
            "default": () => [
                vnode("span", {}, [
                    "New feature"
                ])
            ]
        });
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`active`,`boolean`,`true`],[`duration`,`number`,`900 ms`]],preview:w(F,{key:`wobble-demo`,class:`animation-fade-preview`},{default:()=>[w(`strong`,{},[`New feature`])]})},{id:`hoverLift`,title:`HoverLift 悬停抬升`,icon:`⌃`,description:`鼠标悬停时轻微上浮，常用于卡片和可点击内容。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { HoverLift } from "atelier-ui-vue/hover-lift";
export const ProjectCard = defineComponent({
    "name": "ProjectCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(HoverLift, {
            "lift": 6
        }, {
            "default": () => [
                vnode("article", {}, [
                    "Explore the latest projects"
                ])
            ]
        }));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`lift`,`number`,`6 px`],[`duration`,`number`,`500 ms`]],preview:w(M,{class:`animation-interaction-preview`},{default:()=>[w(`strong`,{},[`Hover to lift`])]})},{id:`press`,title:`Press 按压反馈`,icon:`●`,description:`指针按下时轻微缩小，提供即时的交互反馈。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Press } from "atelier-ui-vue/press";
export const PressableCard = defineComponent({
    "name": "PressableCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Press, {}, {
            "default": () => [
                vnode("button", {
                    "type": "button"
                }, [
                    "Press and hold"
                ])
            ]
        }));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`duration`,`number`,`500 ms`]],preview:w(j,{class:`animation-interaction-preview`},{default:()=>[w(`strong`,{},[`Press and hold`])]})},{id:`flipIn`,title:`FlipIn 翻转进入`,icon:`⟳`,description:`内容以 3D 翻转并淡入，可选择绕 X 或 Y 轴旋转。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { FlipIn } from "atelier-ui-vue/flip-in";
export const RevealCard = defineComponent({
    "name": "RevealCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(FlipIn, {
            "direction": "y",
            "duration": 600
        }, {
            "default": () => [
                vnode("article", {}, [
                    "Just revealed"
                ])
            ]
        });
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`direction`,`'x' | 'y'`,`y`],[`delay`,`number`,`0 ms`],[`duration`,`number`,`600 ms`]],preview:w(L,{key:`flip-in-demo`,class:`animation-fade-preview`},{default:()=>[w(`strong`,{},[`Just revealed`])]})},{id:`flipCard`,title:`FlipCard 翻转卡片`,icon:`▣`,description:`通过外部状态控制卡片正反面翻转。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { FlipCard } from "atelier-ui-vue/flip-card";
export const MemberCard = defineComponent({
    "name": "MemberCard",
    "props": [],
    "setup": (props, { slots }) => {
        const flipped = vueRef(false);
        const setFlipped = refSetter(flipped);
        return () => (vnode("div", {}, [
            vnode("button", {
                "type": "button",
                "onClick": () => setFlipped((value: boolean) => !value)
            }, [
                "Flip card"
            ]),
            vnode(FlipCard, {
                "flipped": flipped.value
            }, {
                "front": () => vnode("strong", {}, [
                    "Alex Morgan"
                ]),
                "back": () => vnode("span", {}, [
                    "Product designer"
                ])
            })
        ]));
    }
});
`,rows:[[`front / back`,`VNodeChild / slot`,`required`],[`flipped`,`boolean`,`false`],[`direction`,`'horizontal' | 'vertical'`,`horizontal`],[`HTML attributes`,`HTMLAttributes<HTMLDivElement>`,`—`]],preview:w(U,{class:`animation-flip-card`},{front:()=>w(`strong`,{},[`Alex Morgan`]),back:()=>w(`span`,{},[`Product designer`])})},{id:`confetti`,title:`Confetti 庆祝粒子`,icon:`✳`,description:`在内容周围播放轻量庆祝粒子，支持数量、颜色与时长。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Confetti } from "atelier-ui-vue/confetti";
export const SuccessMessage = defineComponent({
    "name": "SuccessMessage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Confetti, {
            "count": 24,
            "colors": ['#7c3aed', '#06b6d4', '#f59e0b']
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Payment complete!"
                ])
            ]
        }));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`optional`],[`active`,`boolean`,`true`],[`count`,`number`,`24`],[`duration`,`number`,`1800 ms`],[`colors`,`string[]`,`内置配色`]],preview:w(`div`,{class:`animation-confetti-preview`},[w(ce,{},{default:()=>[w(`strong`,{},[`Payment complete!`])]})])},{id:`shimmer`,title:`Shimmer 流光`,icon:`✧`,description:`为内容表面添加柔和的掠光效果，可自定义高光颜色。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Shimmer } from "atelier-ui-vue/shimmer";
export const Highlight = defineComponent({
    "name": "Highlight",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Shimmer, {
            "duration": 1800
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Ready for the next release"
                ])
            ]
        }));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`duration`,`number`,`1800 ms`],[`highlight`,`string`,`半透明白色`]],preview:w(N,{class:`animation-shimmer-preview`},{default:()=>[w(`strong`,{},[`Ready for the next release`])]})},{id:`animatedList`,title:`AnimatedList 列表渐入`,icon:`☷`,description:`以错峰渐入动画呈现动态列表内容。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { AnimatedList } from "atelier-ui-vue/animated-list";
export const ActivityFeed = defineComponent({
    "name": "ActivityFeed",
    "props": [],
    "setup": (props, { slots }) => {
        const activities = [
            { id: 'workspace', initials: 'W', title: 'Workspace created', detail: 'Studio One is ready to use', time: '2 min ago' },
            { id: 'review', initials: 'D', title: 'Design review completed', detail: 'All 8 comments were resolved', time: '18 min ago' },
            { id: 'release', initials: 'R', title: 'Release published', detail: 'Version 2.4.0 is now live', time: '1 hr ago' },
        ];
        return () => (vnode(AnimatedList, {
            "items": activities,
            "getItemKey": (activity: { id: string; initials: string; title: string; detail: string; time: string; }) => activity.id
        }, {
            "default": (scope: {
                item: { id: string; initials: string; title: string; detail: string; time: string; };
            }) => ((activity: { id: string; initials: string; title: string; detail: string; time: string; }) => (vnode("article", {
                "class": "activity-item"
            }, [
                vnode("span", {
                    "class": "activity-item__avatar"
                }, [
                    activity.initials
                ]),
                vnode("span", {
                    "class": "activity-item__content"
                }, [
                    vnode("strong", {}, [
                        activity.title
                    ]),
                    vnode("small", {}, [
                        activity.detail
                    ])
                ]),
                vnode("time", {}, [
                    activity.time
                ])
            ])))(scope.item)
        }));
    }
});
`,rows:[[`items`,`VNodeChild[] | T[]`,`required`],[`renderItem`,`(item: T, index: number) => VNodeChild`,`自定义结构化数据的列表项`],[`getItemKey`,`(item: T, index: number) => Key`,`—`],[`staggerDelay`,`number`,`70 ms`],[`duration`,`number`,`420 ms`],[`itemClassName`,`string`,`—`],[`HTML attributes`,`HTMLAttributes<HTMLUListElement>`,`—`]],preview:w(ue,{key:`activity-list-demo`,class:`animation-list-preview`,items:[{id:`workspace`,initials:`W`,title:`Workspace created`,description:`Studio One is ready to use`,time:`2 min ago`},{id:`review`,initials:`D`,title:`Design review completed`,description:`All 8 comments were resolved`,time:`18 min ago`},{id:`release`,initials:`R`,title:`Release published`,description:`Version 2.4.0 is now live`,time:`1 hr ago`}],getItemKey:e=>e.id,staggerDelay:120},{default:e=>(e=>w(`article`,{class:`animation-list-preview__item`},[w(`span`,{class:`animation-list-preview__avatar`},[e.initials]),w(`span`,{class:`animation-list-preview__body`},[w(`strong`,{},[e.title]),w(`small`,{},[e.description])]),w(`time`,{},[e.time])]))(e.item)})},{id:`transition`,title:`Transition 单项过渡`,icon:`↕`,description:`为条件显示的面板或内容提供统一的进入、退出生命周期。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Transition } from "atelier-ui-vue/transition";
export const FilterPanel = defineComponent({
    "name": "FilterPanel",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(true);
        const setOpen = refSetter(open);
        return () => (vnode(Fragment, null, [
            vnode(Button, {
                "onClick": () => setOpen((value: boolean) => !value)
            }, {
                "default": () => [
                    "切换筛选面板"
                ]
            }),
            vnode(Transition, {
                "in": open.value,
                "animation": "collapse",
                "timeout": 200
            }, {
                "default": () => [
                    vnode("div", {}, [
                        "筛选条件与结果设置"
                    ])
                ]
            })
        ]));
    }
});
`,rows:[[`in`,`boolean`,`true`],[`animation`,`'fade' | 'slide-up' | 'collapse' | 'none'`,`fade`],[`timeout`,`number`,`200 ms`],[`appear`,`boolean`,`false`],[`mountOnEnter / unmountOnExit`,`boolean`,`true`],[`exit`,`VNodeChild / slot`,`#default`],[`classNames`,`string | Partial<Record<TransitionStatus, string>>`,`—`],[`onEnter / onEntered`,`(node: HTMLDivElement) => void`,`—`],[`onExit / onExited`,`(node: HTMLDivElement) => void`,`—`]],preview:w(me,{},{})},{id:`transitionGroup`,title:`TransitionGroup 动态项过渡`,icon:`⇅`,description:`按稳定 key 管理子项增删；表单数据立即变化，退场项仅保留视觉快照。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Input } from "atelier-ui-vue/input";
import { Transition } from "atelier-ui-vue/transition";
import { TransitionGroup } from "atelier-ui-vue/transition-group";
import { useFieldArray, useForm } from "atelier-ui-vue/form";
export const TeamMembers = defineComponent({
    "name": "TeamMembers",
    "props": [],
    "setup": (props, { slots }) => {
        const form = useForm({ defaultValues: { members: [{ name: 'Alex Chen' }] } });
        const members = useFieldArray({ control: form.control, name: 'members' });
        return () => (vnode(Fragment, null, [
            vnode(Button, {
                "onClick": () => members.append({ name: '' })
            }, {
                "default": () => [
                    "添加成员"
                ]
            }),
            vnode(TransitionGroup, {}, {
                "default": () => [
                    members.fields.map((member, index) => (vnode(Transition, {
                        "key": member.id,
                        "animation": "slide-up",
                        "timeout": 200
                    }, {
                        "exit": () => vnode("div", {}, [
                            member.name || '未命名成员',
                            " 已移除"
                        ]),
                        "default": () => [
                            vnode("div", {}, [
                                vnode(Input, {
                                    "aria-label": '成员 ' + (index + 1) + ' 姓名',
                                    ...form.register('members.' + index + '.name')
                                }, {}),
                                vnode("button", {
                                    "type": "button",
                                    "onClick": () => members.remove(index)
                                }, [
                                    "移除"
                                ])
                            ])
                        ]
                    })))
                ]
            })
        ]));
    }
});
`,rows:[[`#default`,`keyed Transition elements`,`required`],[`class`,`string`,`—`],[`exit snapshot`,`Transition.exit: VNodeChild`,`optional`],[`removal`,`data is removed immediately`,`—`]],preview:w(he,{},{})},{id:`borderBeam`,title:`BorderBeam 边框流光`,icon:`✧`,description:`为重点内容添加可控颜色和速度的流动边框。`,code:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { BorderBeam } from "atelier-ui-vue/border-beam";
export const HighlightCard = defineComponent({
    "name": "HighlightCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(BorderBeam, {
            "color": "#2f9472",
            "duration": 5
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Ready for the next release"
                ])
            ]
        }));
    }
});
`,rows:[[`#default`,`VNodeChild / slot`,`required`],[`color`,`string`,`#8b7dff`],[`duration`,`number`,`5 秒`],[`paused`,`boolean`,`false`],[`class`,`string`,`—`]],preview:w(W,{color:`#2f9472`},{default:()=>[w(`strong`,{},[`Ready for the next release`])]})}];export{ge as AnimationPage};