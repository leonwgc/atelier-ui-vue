import{t as e}from"./Input-DBOg5Aup.js";import{t}from"./Tag-C47n_nSU.js";import{i as n,n as r,r as i,t as a}from"./Empty-CCaeJDEK.js";import{b as o,n as s,t as c}from"./ApiTable-CMaXdLlV.js";import{t as l}from"./Select-COEuXdTf.js";import{i as u,n as d,r as f,t as p}from"./form-DMeKSd-S.js";import{t as m}from"./Overlay-B8C-6DYA.js";import{A as h,C as g,G as _,H as v,I as ee,J as y,K as b,N as x,O as S,P as C,R as w,W as T,Y as E,_ as D,c as O,d as k,f as A,g as j,j as M,m as N,n as P,o as F,p as I,r as te,s as L,t as R,u as z,v as B,x as V,y as ne}from"./index-CILakwI7.js";import{a as H,i as U,t as W}from"./shared-DuhUujBE.js";var re=[`checked`,`disabled`],ie={class:`at-switch__track`},ae={class:`at-switch__label at-switch__label--on`},oe={class:`at-switch__label at-switch__label--off`},se=B({inheritAttrs:!1,__name:`Switch`,props:{modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean},disabled:{type:Boolean}},emits:[`update:modelValue`,`change`],setup(e,{emit:t}){let n=e,r=t,i=C(),a=v(n.defaultChecked??!1),o=z(()=>n.modelValue??a.value);function s(e){let t=e.target.checked;n.modelValue??(a.value=t),r(`update:modelValue`,t),r(`change`,e)}return(t,n)=>(S(),N(`label`,{class:b([`at-switch`,_(i).class]),style:y(_(i).style)},[k(`input`,g({..._(i),class:void 0,style:void 0},{type:`checkbox`,role:`switch`,class:`at-switch__input`,checked:o.value,disabled:e.disabled,onChange:s}),null,16,re),k(`span`,ie,[n[0]||=k(`span`,{class:`at-switch__thumb`},null,-1),k(`span`,ae,[M(t.$slots,`checked`)]),k(`span`,oe,[M(t.$slots,`unchecked`)])])],6))}}),ce={key:0,class:`at-card__header`},le={key:0,class:`at-card__extra`},ue={class:`at-card__body`},de=B({__name:`Card`,props:{title:{},hoverable:{type:Boolean},bordered:{type:Boolean,default:!0}},setup(e){return(t,n)=>(S(),N(`div`,{class:b([`at-card`,{"at-card--hoverable":e.hoverable,"at-card--borderless":!e.bordered}])},[e.title||t.$slots.title||t.$slots.extra?(S(),N(`div`,ce,[k(`h3`,null,[M(t.$slots,`title`,{},()=>[j(E(e.title),1)])]),t.$slots.extra?(S(),N(`div`,le,[M(t.$slots,`extra`)])):I(``,!0)])):I(``,!0),k(`div`,ue,[M(t.$slots,`default`)])],2))}}),fe=[`role`],pe={class:`at-alert__icon`,"aria-hidden":`true`},me={class:`at-alert__content`},he={key:0,class:`at-alert__title`},ge={key:1,class:`at-alert__description`},G=B({__name:`Alert`,props:{variant:{default:`info`},title:{},closable:{type:Boolean}},emits:[`close`],setup(e,{emit:t}){let n=v(!0),r=t,i={info:`i`,success:`✓`,warning:`!`,error:`×`};return(t,a)=>n.value?(S(),N(`div`,{key:0,class:b([`at-alert`,`at-alert--${e.variant}`]),role:e.variant===`error`?`alert`:`status`},[k(`span`,pe,E(i[e.variant]),1),k(`div`,me,[e.title||t.$slots.title?(S(),N(`strong`,he,[M(t.$slots,`title`,{},()=>[j(E(e.title),1)])])):I(``,!0),t.$slots.default?(S(),N(`div`,ge,[M(t.$slots,`default`)])):I(``,!0)]),e.closable?(S(),N(`button`,{key:0,type:`button`,class:`at-alert__close`,"aria-label":`关闭提示`,onClick:a[0]||=e=>{n.value=!1,r(`close`)}},`×`)):I(``,!0)],10,fe)):I(``,!0)}}),_e=[`aria-orientation`],K=B({__name:`Divider`,props:{orientation:{default:`horizontal`},dashed:{type:Boolean},plain:{type:Boolean}},setup(e){return(t,n)=>(S(),N(`div`,{role:`separator`,"aria-orientation":e.orientation,class:b([`at-divider`,{"at-divider--vertical":e.orientation===`vertical`,"at-divider--dashed":e.dashed,"at-divider--with-text":e.orientation===`horizontal`&&t.$slots.default}])},[e.orientation===`horizontal`&&t.$slots.default?(S(),N(`span`,{key:0,class:b([`at-divider__text`,{"at-divider__text--plain":e.plain}])},[M(t.$slots,`default`)],2)):I(``,!0)],10,_e))}}),ve=[`aria-valuenow`,`aria-label`],ye={key:0,class:`at-progress__info`},q=B({__name:`Progress`,props:{percent:{},status:{},showInfo:{type:Boolean,default:!0},strokeColor:{},label:{}},setup(e){let t=e,n=z(()=>Math.max(0,Math.min(100,t.percent)));return(t,r)=>(S(),N(`div`,{class:b([`at-progress`,`at-progress--${e.status??(n.value===100?`success`:`normal`)}`])},[k(`div`,{class:`at-progress__track`,role:`progressbar`,"aria-valuenow":n.value,"aria-valuemin":0,"aria-valuemax":100,"aria-label":e.label??`进度`},[k(`span`,{class:`at-progress__bar`,style:y({width:`${n.value}%`,backgroundColor:e.strokeColor})},null,4)],8,ve),e.showInfo?(S(),N(`span`,ye,[M(t.$slots,`label`,{},()=>[j(E(e.label??`${n.value}%`),1)])])):I(``,!0)],2))}}),be={key:0,class:`at-badge__standalone`},xe={key:1,class:`at-badge`},Se=[`aria-label`],J=B({__name:`Badge`,props:{count:{},dot:{type:Boolean},overflowCount:{default:99},showZero:{type:Boolean},status:{},text:{}},setup(e){let t=e,n=z(()=>typeof t.count==`number`&&t.count>t.overflowCount?`${t.overflowCount}+`:t.count);return(t,r)=>t.$slots.default?(S(),N(`span`,xe,[M(t.$slots,`default`),e.dot||e.count!=null&&(e.showZero||typeof e.count!=`number`||e.count>0)?(S(),N(`sup`,{key:0,class:b([`at-badge__count`,e.status&&`at-badge__count--${e.status}`,{"at-badge__count--dot":e.dot}]),"aria-label":e.dot?`有新消息`:`数量 ${n.value}`},E(e.dot?``:n.value),11,Se)):I(``,!0)])):(S(),N(`span`,be,[k(`i`,{class:b([`at-badge__status`,`at-badge__status--${e.status??`default`}`])},null,2),j(E(e.text??e.count),1)]))}}),Ce=[`for`],we=[`value`,`id`,`aria-invalid`,`aria-describedby`],Te=[`id`],Ee=[`id`],De=B({inheritAttrs:!1,__name:`Textarea`,props:{modelValue:{},defaultValue:{},label:{},hint:{},error:{},id:{}},emits:[`update:modelValue`,`change`],setup(e,{emit:t}){let n=e,r=C(),i=`at-textarea-${ne()?.uid}`,a=z(()=>n.id??i),o=z(()=>{let{class:e,style:t,...n}=r;return n}),s=z(()=>[r[`aria-describedby`],n.error||n.hint?`${a.value}-feedback`:void 0].filter(Boolean).join(` `)||void 0),c=v(n.defaultValue??``),l=z(()=>n.modelValue??c.value),u=t;function d(e){let t=e.target.value;n.modelValue===void 0&&(c.value=t),u(`update:modelValue`,t),u(`change`,e)}return(t,n)=>(S(),N(`div`,{class:b([`at-field`,_(r).class]),style:y(_(r).style)},[e.label?(S(),N(`label`,{key:0,for:a.value,class:`at-field__label`},E(e.label),9,Ce)):I(``,!0),k(`textarea`,g(o.value,{value:l.value,id:a.value,class:[`at-textarea`,{"at-textarea--error":e.error}],"aria-invalid":!!e.error,"aria-describedby":s.value,onInput:d}),null,16,we),e.error?(S(),N(`span`,{key:1,id:`${a.value}-feedback`,class:`at-field__error`,role:`alert`},E(e.error),9,Te)):e.hint?(S(),N(`span`,{key:2,id:`${a.value}-feedback`,class:`at-field__hint`},E(e.hint),9,Ee)):I(``,!0)],6))}}),Oe=[`checked`,`disabled`],ke={key:0},Y=B({inheritAttrs:!1,__name:`Checkbox`,props:{modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean},disabled:{type:Boolean}},emits:[`update:modelValue`,`change`],setup(e,{emit:t}){let n=e,r=v(n.defaultChecked??!1),i=C(),a=z(()=>n.modelValue??r.value),o=t;function s(e){let t=e.target.checked;n.modelValue===void 0&&(r.value=t),o(`update:modelValue`,t),o(`change`,e)}return(t,n)=>(S(),N(`label`,{class:b([`at-check`,_(i).class]),style:y(_(i).style)},[k(`input`,g({..._(i),class:void 0,style:void 0},{type:`checkbox`,class:`at-check__input`,checked:a.value,disabled:e.disabled,onChange:s}),null,16,Oe),n[0]||=k(`span`,{class:`at-check__box`,"aria-hidden":`true`},`✓`,-1),t.$slots.default?(S(),N(`span`,ke,[M(t.$slots,`default`)])):I(``,!0)],6))}}),Ae=[`checked`,`disabled`],je={key:0},Me=B({inheritAttrs:!1,__name:`Radio`,props:{modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean},disabled:{type:Boolean}},emits:[`update:modelValue`,`change`],setup(e,{emit:t}){let n=e,r=v(n.defaultChecked??!1),i=C(),a=z(()=>n.modelValue??r.value),o=t;function s(e){let t=e.target.checked;n.modelValue===void 0&&(r.value=t),o(`update:modelValue`,t),o(`change`,e)}return(t,n)=>(S(),N(`label`,{class:b([`at-radio`,_(i).class]),style:y(_(i).style)},[k(`input`,g({..._(i),class:void 0,style:void 0},{type:`radio`,class:`at-radio__input`,checked:a.value,disabled:e.disabled,onChange:s}),null,16,Ae),n[0]||=k(`span`,{class:`at-radio__circle`,"aria-hidden":`true`},null,-1),t.$slots.default?(S(),N(`span`,je,[M(t.$slots,`default`)])):I(``,!0)],6))}}),Ne={class:`at-choice-group`,role:`group`},Pe=B({__name:`CheckboxGroup`,props:{options:{},modelValue:{},defaultValue:{},disabled:{type:Boolean},name:{}},emits:[`update:modelValue`,`change`],setup(e,{emit:t}){let n=e,r=v(n.defaultValue??[]),i=z(()=>n.modelValue??r.value),a=t;function s(e){let t=i.value.includes(e)?i.value.filter(t=>t!==e):[...i.value,e];n.modelValue===void 0&&(r.value=t),a(`update:modelValue`,t),a(`change`,t)}return(t,n)=>(S(),N(`div`,Ne,[(S(!0),N(L,null,h(e.options,n=>(S(),A(Y,{key:n.value,name:e.name,value:n.value,"model-value":i.value.includes(n.value),disabled:e.disabled||n.disabled,onChange:e=>s(n.value)},{default:w(()=>[M(t.$slots,`option`,{option:n},()=>[D(_(o),{content:n.label},null,8,[`content`])])]),_:2},1032,[`name`,`value`,`model-value`,`disabled`,`onChange`]))),128))]))}}),Fe={class:`at-choice-group`,role:`radiogroup`},Ie=B({__name:`RadioGroup`,props:{options:{},modelValue:{},defaultValue:{},disabled:{type:Boolean},name:{}},emits:[`update:modelValue`,`change`],setup(e,{emit:t}){let n=e,r=v(n.defaultValue??``),i=z(()=>n.modelValue??r.value),a=t;function s(e){let t=e;n.modelValue===void 0&&(r.value=t),a(`update:modelValue`,t),a(`change`,t)}return(t,n)=>(S(),N(`div`,Fe,[(S(!0),N(L,null,h(e.options,n=>(S(),A(Me,{key:n.value,name:e.name,value:n.value,"model-value":i.value===n.value,disabled:e.disabled||n.disabled,onChange:e=>s(n.value)},{default:w(()=>[M(t.$slots,`option`,{option:n},()=>[D(_(o),{content:n.label},null,8,[`content`])])]),_:2},1032,[`name`,`value`,`model-value`,`disabled`,`onChange`]))),128))]))}}),Le={class:`at-tabs__list`,role:`tablist`},Re=[`aria-selected`,`tabindex`,`disabled`,`onClick`],ze=[`aria-label`],Be=B({__name:`Tabs`,props:{items:{},activeKey:{},defaultActiveKey:{}},emits:[`update:activeKey`,`change`],setup(e,{emit:t}){let n=e,r=v(n.defaultActiveKey??n.items.find(e=>!e.disabled)?.key),i=z(()=>n.items.find(e=>e.key===(n.activeKey??r.value)&&!e.disabled)??n.items.find(e=>!e.disabled)),a=v(null),s=t;function c(e){n.activeKey===void 0&&(r.value=e),s(`update:activeKey`,e),s(`change`,e)}function l(e){if(![`Home`,`End`,`ArrowLeft`,`ArrowRight`].includes(e.key))return;e.preventDefault();let t=n.items.filter(e=>!e.disabled),r=t.findIndex(e=>e.key===i.value?.key),o=e.key===`Home`?0:e.key===`End`?t.length-1:(r+(e.key===`ArrowRight`?1:t.length-1))%t.length,s=t[o];s&&(c(s.key),a.value?.querySelectorAll(`[role=tab]:not(:disabled)`)[o]?.focus())}return(t,n)=>(S(),N(`div`,{ref_key:`root`,ref:a,class:`at-tabs`},[k(`div`,Le,[(S(!0),N(L,null,h(e.items,e=>(S(),N(`button`,{key:e.key,type:`button`,role:`tab`,class:`at-tabs__tab`,"aria-selected":e.key===i.value?.key,tabindex:e.key===i.value?.key?0:-1,disabled:e.disabled,onClick:t=>c(e.key),onKeydown:l},[M(t.$slots,`label`,{item:e},()=>[D(_(o),{content:e.label},null,8,[`content`])])],40,Re))),128))]),i.value?(S(),N(`div`,{key:0,role:`tabpanel`,class:`at-tabs__panel`,"aria-label":typeof i.value.label==`string`?i.value.label:`标签页内容`},[M(t.$slots,`default`,{item:i.value},()=>[D(_(o),{content:i.value.children},null,8,[`content`])])],8,ze)):I(``,!0)],512))}}),Ve={class:`at-collapse`},He={class:`at-collapse__heading`},Ue=[`aria-expanded`,`disabled`,`onClick`],We=[`aria-label`],Ge=B({__name:`Collapse`,props:{items:{},accordion:{type:Boolean},activeKey:{},defaultActiveKey:{}},emits:[`update:activeKey`,`change`],setup(e,{emit:t}){let n=e,r=v(n.defaultActiveKey??(n.accordion?``:[])),i=z(()=>{let e=n.activeKey??r.value;return Array.isArray(e)?e:e?[e]:[]}),a=t;function s(e){let t=i.value.includes(e)?i.value.filter(t=>t!==e):n.accordion?[e]:[...i.value,e],o=n.accordion?t[0]??``:t;n.activeKey===void 0&&(r.value=o),a(`update:activeKey`,o),a(`change`,o)}return(t,n)=>(S(),N(`div`,Ve,[(S(!0),N(L,null,h(e.items,e=>(S(),N(`section`,{key:e.key,class:`at-collapse__item`},[k(`h3`,He,[k(`button`,{type:`button`,class:`at-collapse__trigger`,"aria-expanded":i.value.includes(e.key),disabled:e.disabled,onClick:t=>s(e.key)},[k(`span`,null,[M(t.$slots,`title`,{item:e},()=>[D(_(o),{content:e.title},null,8,[`content`])])]),n[0]||=k(`span`,{class:`at-collapse__chevron`,"aria-hidden":`true`},`⌄`,-1)],8,Ue)]),i.value.includes(e.key)?(S(),N(`div`,{key:0,class:`at-collapse__panel`,role:`region`,"aria-label":typeof e.title==`string`?e.title:`折叠内容`},[M(t.$slots,`default`,{item:e},()=>[D(_(o),{content:e.children},null,8,[`content`])])],8,We)):I(``,!0)]))),128))]))}}),Ke=[`aria-busy`],qe=[`aria-label`],Je={key:0,class:`at-spin__tip`},X=B({__name:`Spin`,props:{spinning:{type:Boolean,default:!0},size:{default:`md`},tip:{}},setup(e){return(t,n)=>t.$slots.default||e.spinning?(S(),N(`div`,{key:0,class:b(t.$slots.default?`at-spin-container`:`at-spin-standalone`),"aria-busy":e.spinning},[M(t.$slots,`default`),e.spinning?(S(),N(`div`,{key:0,class:b(t.$slots.default?`at-spin-container__overlay`:void 0)},[k(`span`,{class:b([`at-spin`,`at-spin--${e.size}`]),role:`status`,"aria-label":e.tip??`加载中`},[...n[0]||=[k(`span`,null,null,-1),k(`span`,null,null,-1),k(`span`,null,null,-1),k(`span`,null,null,-1)]],10,qe),e.tip?(S(),N(`span`,Je,E(e.tip),1)):I(``,!0)],2)):I(``,!0)],10,Ke)):I(``,!0)}}),Ye={key:0,class:`at-descriptions__title`},Xe=B({__name:`Descriptions`,props:{title:{},items:{},column:{default:3},bordered:{type:Boolean}},setup(e){return(t,n)=>(S(),N(`div`,{class:b([`at-descriptions`,{"at-descriptions--bordered":e.bordered}])},[e.title||t.$slots.title?(S(),N(`h3`,Ye,[M(t.$slots,`title`,{},()=>[j(E(e.title),1)])])):I(``,!0),k(`dl`,{class:`at-descriptions__list`,style:y({gridTemplateColumns:`repeat(${Math.max(1,Math.min(6,Number.isFinite(e.column)?Math.floor(e.column):3))}, minmax(0, 1fr))`})},[(S(!0),N(L,null,h(e.items,e=>(S(),N(`div`,{key:e.key,class:`at-descriptions__item`},[k(`dt`,null,[M(t.$slots,`label`,{item:e},()=>[D(_(o),{content:e.label},null,8,[`content`])])]),k(`dd`,null,[M(t.$slots,`default`,{item:e},()=>[D(_(o),{content:e.children},null,8,[`content`])])])]))),128))],4)],2))}}),Ze={class:`at-timeline`},Qe={class:`at-timeline__body`},$e={key:0,class:`at-timeline__label`},et={class:`at-timeline__content`},tt={key:0,class:`at-timeline__line`,"aria-hidden":`true`},nt={key:0,class:`at-timeline__item at-timeline__item--pending`},rt={class:`at-timeline__content`},it=B({__name:`Timeline`,props:{items:{},pending:{}},setup(e){return(t,n)=>(S(),N(`ol`,Ze,[(S(!0),N(L,null,h(e.items,(n,r)=>(S(),N(`li`,{key:n.key,class:`at-timeline__item`},[k(`span`,{class:`at-timeline__dot`,style:y({backgroundColor:n.color,borderColor:n.color}),"aria-hidden":`true`},null,4),k(`div`,Qe,[n.label?(S(),N(`time`,$e,[D(_(o),{content:n.label},null,8,[`content`])])):I(``,!0),k(`div`,et,[M(t.$slots,`default`,{item:n},()=>[D(_(o),{content:n.content},null,8,[`content`])])])]),r<e.items.length-1||e.pending?(S(),N(`span`,tt)):I(``,!0)]))),128)),e.pending||t.$slots.pending?(S(),N(`li`,nt,[n[0]||=k(`span`,{class:`at-timeline__dot`,"aria-hidden":`true`},null,-1),k(`div`,rt,[M(t.$slots,`pending`,{},()=>[j(E(e.pending),1)])])])):I(``,!0)]))}}),at={class:`at-breadcrumb`,"aria-label":`面包屑导航`},ot=[`aria-current`],st=[`href`,`onClick`],ct=[`onClick`],lt={key:2},ut={key:3,class:`at-breadcrumb__separator`,"aria-hidden":`true`},dt=B({__name:`Breadcrumb`,props:{items:{},separator:{default:`/`}},setup(e){return(t,n)=>(S(),N(`nav`,at,[k(`ol`,null,[(S(!0),N(L,null,h(e.items,(n,r)=>(S(),N(`li`,{key:r,"aria-current":r===e.items.length-1?`page`:void 0},[n.href&&r!==e.items.length-1?(S(),N(`a`,{key:0,href:n.href,onClick:e=>n.onClick?.()},[D(_(o),{content:n.title},null,8,[`content`])],8,st)):n.onClick&&r!==e.items.length-1?(S(),N(`button`,{key:1,type:`button`,onClick:e=>n.onClick()},[D(_(o),{content:n.title},null,8,[`content`])],8,ct)):(S(),N(`span`,lt,[D(_(o),{content:n.title},null,8,[`content`])])),r<e.items.length-1?(S(),N(`span`,ut,[M(t.$slots,`separator`,{},()=>[j(E(e.separator),1)])])):I(``,!0)],8,ot))),128))])]))}}),ft=[`aria-label`],pt={class:`at-modal__header`},mt={class:`at-modal__title`},ht={key:0,class:`at-modal__description`},gt={class:`at-modal__body`},_t={key:0,class:`at-modal__footer`},vt=B({__name:`Modal`,props:{open:{type:Boolean},title:{},description:{},width:{default:520},placement:{default:`right`},maskClosable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},okText:{default:`确定`},cancelText:{default:`取消`},confirmLoading:{type:Boolean},footer:{type:Boolean,default:!0}},emits:[`update:open`,`close`,`ok`],setup(e,{emit:t}){let n=e,r=v(null),i=t;function a(){i(`update:open`,!1),i(`close`)}return R(()=>n.open,r,a,()=>n.closeOnEscape),(t,n)=>(S(),A(O,{to:`body`},[e.open?(S(),N(`div`,{key:0,class:`at-modal-mask`,onMousedown:n[1]||=F(t=>e.maskClosable&&a(),[`self`])},[k(`div`,{ref_key:`panel`,ref:r,role:`dialog`,"aria-modal":`true`,"aria-label":e.title??`对话框`,tabindex:`-1`,class:b([`at-modal`,void 0]),style:y({width:typeof e.width==`number`?`${e.width}px`:e.width})},[k(`div`,pt,[k(`div`,null,[k(`h2`,mt,[M(t.$slots,`title`,{},()=>[j(E(e.title),1)])]),e.description?(S(),N(`p`,ht,E(e.description),1)):I(``,!0)]),k(`button`,{type:`button`,class:`at-modal__close`,"aria-label":`关闭`,onClick:a},`×`)]),k(`div`,gt,[M(t.$slots,`default`)]),e.footer?(S(),N(`div`,_t,[M(t.$slots,`footer`,{},()=>[D(P,{onClick:a},{default:w(()=>[j(E(e.cancelText),1)]),_:1}),D(P,{variant:`primary`,loading:e.confirmLoading,onClick:n[0]||=e=>i(`ok`)},{default:w(()=>[j(E(e.okText),1)]),_:1},8,[`loading`])])])):I(``,!0)],12,ft)],32)):I(``,!0)]))}});function yt(e){if(typeof document>`u`)return{destroy(){}};let t=document.createElement(`div`);document.body.appendChild(t);let n=!1,r=v(!1),i=v(``),a=te({setup(){let t=()=>{e.onCancel?.(),o()};async function n(){if(!r.value){r.value=!0,i.value=``;try{await e.onOk?.(),o()}catch(e){i.value=e instanceof Error?e.message:`操作失败，请重试。`}finally{r.value=!1}}}return()=>V(vt,{open:!0,onClose:t,okText:e.okText,cancelText:e.cancelText},{title:()=>e.title,default:()=>[e.content,i.value?V(`p`,{role:`alert`,class:`at-field__error`},i.value):null],footer:()=>[V(P,{disabled:r.value,onClick:t},()=>e.cancelText??`取消`),V(P,{variant:e.danger?`danger`:`primary`,loading:r.value,onClick:n},()=>e.okText??`确定`)]})}});function o(){n||(n=!0,a.unmount(),t.remove())}return a.mount(t),{destroy:o}}var bt=Object.assign(vt,{confirm:yt}),xt=[`aria-label`],St={class:`at-drawer__header`},Ct={class:`at-drawer__title`},wt={key:0,class:`at-drawer__description`},Tt={class:`at-drawer__body`},Et=B({__name:`Drawer`,props:{open:{type:Boolean},title:{},description:{},width:{default:420},placement:{default:`right`},maskClosable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},okText:{default:`确定`},cancelText:{default:`取消`},confirmLoading:{type:Boolean},footer:{type:Boolean,default:!0}},emits:[`update:open`,`close`,`ok`],setup(e,{emit:t}){let n=e,r=v(null),i=t;function a(){i(`update:open`,!1),i(`close`)}return R(()=>n.open,r,a,()=>n.closeOnEscape),(t,n)=>(S(),A(O,{to:`body`},[e.open?(S(),N(`div`,{key:0,class:`at-drawer-mask`,onMousedown:n[0]||=F(t=>e.maskClosable&&a(),[`self`])},[k(`div`,{ref_key:`panel`,ref:r,role:`dialog`,"aria-modal":`true`,"aria-label":e.title??`侧边抽屉`,tabindex:`-1`,class:b([`at-drawer`,`at-drawer--${e.placement}`]),style:y({width:typeof e.width==`number`?`${e.width}px`:e.width})},[k(`header`,St,[k(`div`,null,[k(`h2`,Ct,[M(t.$slots,`title`,{},()=>[j(E(e.title),1)])]),e.description?(S(),N(`p`,wt,E(e.description),1)):I(``,!0)]),k(`button`,{type:`button`,class:`at-drawer__close`,"aria-label":`关闭`,onClick:a},`×`)]),k(`div`,Tt,[M(t.$slots,`default`)])],14,xt)],32)):I(``,!0)]))}}),Dt={class:`at-date-picker`},Ot={class:`at-date-picker__label`},kt={key:0},At=[`value`,`aria-invalid`],jt=B({inheritAttrs:!1,__name:`DatePicker`,props:{modelValue:{},defaultValue:{},label:{},hint:{},error:{}},emits:[`update:modelValue`,`change`],setup(e,{emit:t}){let n=e,r=C(),i=v(n.defaultValue??``),a=z(()=>n.modelValue??i.value),o=t;function s(e){let t=e.target.value;n.modelValue===void 0&&(i.value=t),o(`update:modelValue`,t),o(`change`,e)}return(t,n)=>(S(),N(`div`,Dt,[k(`label`,Ot,[e.label?(S(),N(`span`,kt,E(e.label),1)):I(``,!0),k(`input`,g(_(r),{type:`date`,value:a.value,class:[`at-date-picker__input`,{"at-date-picker__input--error":e.error}],"aria-invalid":!!e.error,onInput:s}),null,16,At)]),e.hint||e.error?(S(),N(`span`,{key:0,class:b([`at-date-picker__help`,{"at-date-picker__help--error":e.error}])},E(e.error??e.hint),3)):I(``,!0)]))}}),Mt=[`aria-current`],Nt={class:`at-steps__indicator`,"aria-hidden":`true`},Pt={class:`at-steps__content`},Ft={class:`at-steps__title`},It={key:0,class:`at-steps__description`},Lt={key:0,class:`at-steps__connector`,"aria-hidden":`true`},Rt=B({__name:`Steps`,props:{items:{},current:{default:0},direction:{default:`horizontal`},clickable:{type:Boolean}},emits:[`update:current`,`change`],setup(e,{emit:t}){let n=t,r=ne(),i=z(()=>!!r?.vnode.props?.onChange||!!r?.vnode.props?.[`onUpdate:current`]);return(t,r)=>(S(),N(`ol`,{class:b([`at-steps`,`at-steps--${e.direction}`]),"aria-label":`步骤进度`},[(S(!0),N(L,null,h(e.items,(r,a)=>(S(),N(`li`,{key:a,class:b([`at-steps__item`,`at-steps__item--${r.status??(a<e.current?`finish`:a===e.current?`process`:`wait`)}`,{"at-steps__item--current":a===e.current}]),"aria-current":a===e.current?`step`:void 0},[(S(),A(x(i.value?`button`:`div`),{type:i.value?`button`:void 0,class:`at-steps__action`,disabled:i.value&&r.disabled,onClick:e=>i.value&&!r.disabled&&(n(`update:current`,a),n(`change`,a))},{default:w(()=>[k(`span`,Nt,E(r.status===`error`?`!`:r.status===`finish`||!r.status&&a<e.current?`✓`:a+1),1),k(`span`,Pt,[k(`span`,Ft,[M(t.$slots,`title`,{item:r,index:a},()=>[D(_(o),{content:r.title},null,8,[`content`])])]),r.description?(S(),N(`span`,It,[D(_(o),{content:r.description},null,8,[`content`])])):I(``,!0)])]),_:2},1032,[`type`,`disabled`,`onClick`])),a<e.items.length-1?(S(),N(`span`,Lt)):I(``,!0)],10,Mt))),128))],2))}}),zt=[`accept`,`multiple`,`disabled`],Bt={class:`at-upload__prompt`},Vt=[`disabled`],Ht={key:0,class:`at-upload__list`,"aria-label":`已选文件`},Ut=[`disabled`,`aria-label`,`onClick`],Wt=B({__name:`Upload`,props:{accept:{},multiple:{type:Boolean},disabled:{type:Boolean}},emits:[`change`],setup(e,{emit:t}){let n=e,r=v(null),i=v([]),a=t;function o(e){if(n.disabled)return;let t=n.accept?.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean)??[],r=e.filter(e=>!t.length||t.some(t=>t.startsWith(`.`)?e.name.toLowerCase().endsWith(t):t.endsWith(`/*`)?e.type.toLowerCase().startsWith(t.slice(0,-1)):e.type.toLowerCase()===t));i.value=n.multiple?[...i.value,...r]:r.slice(0,1),a(`change`,i.value)}function s(e){e.preventDefault(),o(Array.from(e.dataTransfer?.files??[]))}function c(e){let t=e.target;o(Array.from(t.files??[])),t.value=``}function l(e){i.value=i.value.filter((t,n)=>n!==e),a(`change`,i.value)}return(t,n)=>(S(),N(`div`,{class:b([`at-upload`,{"at-upload--disabled":e.disabled}]),onDragover:n[1]||=F(()=>{},[`prevent`]),onDrop:s},[k(`input`,{ref_key:`input`,ref:r,class:`at-upload__input`,type:`file`,accept:e.accept,multiple:e.multiple,disabled:e.disabled,onChange:c},null,40,zt),k(`div`,Bt,[n[3]||=k(`span`,{class:`at-upload__icon`,"aria-hidden":`true`},`↑`,-1),k(`div`,null,[k(`strong`,null,[n[2]||=j(`拖动文件到此处，或 `,-1),k(`button`,{type:`button`,disabled:e.disabled,onClick:n[0]||=e=>r.value?.click()},`选择文件`,8,Vt)]),k(`span`,null,E(e.accept?`支持格式：${e.accept}`:`可拖拽文件上传`),1)])]),i.value.length?(S(),N(`ul`,Ht,[(S(!0),N(L,null,h(i.value,(t,n)=>(S(),N(`li`,{key:`${t.name}-${t.lastModified}-${n}`},[k(`span`,null,E(t.name),1),k(`button`,{type:`button`,disabled:e.disabled,"aria-label":`移除 ${t.name}`,onClick:e=>l(n)},`移除`,8,Ut)]))),128))])):I(``,!0)],34))}}),Gt=B({__name:`Tooltip`,props:{title:{},placement:{default:`top`}},setup(e){return(t,n)=>(S(),A(m,{class:`at-tooltip__trigger`,trigger:[`hover`,`focus`],placement:e.placement,"panel-class":`at-tooltip__content`,role:`tooltip`},{content:w(()=>[M(t.$slots,`title`,{},()=>[j(E(e.title),1)])]),default:w(()=>[M(t.$slots,`default`)]),_:3},8,[`placement`]))}}),Kt={class:`at-table-shell`},qt={class:`at-table-scroll`},Jt={class:`at-table`},Yt={key:0,class:`at-table__selection`},Xt={class:`at-table__heading`},Zt=[`aria-label`,`onClick`],Qt=[`aria-label`,`value`,`onChange`],$t=[`value`],en={key:0},tn=[`colspan`],nn=[`aria-busy`],rn={key:0,class:`at-table__selection`},an={class:`at-table__pagination`},on={class:`at-table__page-controls`},sn=[`value`],cn=[`value`],ln=[`disabled`],un={class:`at-table__page`},dn=[`disabled`],fn=B({__name:`Table`,props:{columns:{},dataSource:{},rowKey:{},loading:{type:Boolean},emptyText:{default:`暂无数据`},mode:{default:`client`},pageSize:{default:8},currentPage:{},total:{},pageSizeOptions:{default:()=>[8,16,32]},rowSelection:{}},emits:[`change`,`update:currentPage`,`selectionChange`],setup(e,{emit:t}){let n=e,r=t,i=v(1),a=v(n.pageSize),o=v(),s=v({}),c=z(()=>n.currentPage??i.value);ee(()=>n.pageSize,e=>{a.value=e});let l=e=>typeof n.rowKey==`function`?n.rowKey(e):String(e[n.rowKey]),u=z(()=>{if(n.mode===`server`)return n.dataSource;let e=[...n.dataSource];for(let[t,r]of Object.entries(s.value)){let i=n.columns.find(e=>e.key===t);r&&i&&(e=e.filter(e=>i.onFilter?.(r,e)??String(e[String(i.dataIndex)]??``)===r))}let t=o.value;if(t){let r=n.columns.find(e=>e.key===t.key);e.sort((e,n)=>{let i=typeof r?.sorter==`function`?r.sorter(e,n):String(e[String(r?.dataIndex)]??``).localeCompare(String(n[String(r?.dataIndex)]??``),`zh-CN`,{numeric:!0});return t.direction===`asc`?i:-i})}return e}),d=z(()=>n.mode===`server`?n.total??n.dataSource.length:u.value.length),f=z(()=>Math.max(1,Math.ceil(d.value/a.value))),p=z(()=>n.mode===`client`?u.value.slice((c.value-1)*a.value,c.value*a.value):u.value);function m(e){n.currentPage===void 0&&(i.value=e),r(`update:currentPage`,e),r(`change`,{page:e,pageSize:a.value,sort:o.value,filters:{...s.value}})}function g(e){o.value={key:e.key,direction:o.value?.key===e.key&&o.value.direction===`asc`?`desc`:`asc`},m(1)}function b(e,t){s.value={...s.value,[t.key]:e.target.value},m(1)}function x(e){let t=n.dataSource.filter(t=>e.includes(l(t)));n.rowSelection?.onChange?.(e,t),r(`selectionChange`,e,t)}function C(e){let t=p.value.map(l);x(e?[...new Set([...n.rowSelection?.selectedRowKeys??[],...t])]:(n.rowSelection?.selectedRowKeys??[]).filter(e=>!t.includes(e)))}function w(e,t){let r=n.rowSelection?.selectedRowKeys??[];x(t?[...new Set([...r,l(e)])]:r.filter(t=>t!==l(e)))}function T(e){a.value=Number(e.target.value),m(1)}let O=B({props:{content:{type:[String,Number,Object,Array,Boolean]}},setup:e=>()=>e.content});return(t,n)=>(S(),N(`div`,Kt,[k(`div`,qt,[k(`table`,Jt,[k(`thead`,null,[k(`tr`,null,[e.rowSelection?(S(),N(`th`,Yt,[D(Y,{"aria-label":`选择本页全部行`,"model-value":p.value.length>0&&p.value.every(t=>e.rowSelection?.selectedRowKeys.includes(l(t))),"onUpdate:modelValue":C},null,8,[`model-value`])])):I(``,!0),(S(!0),N(L,null,h(e.columns,e=>(S(),N(`th`,{key:e.key,style:y({width:typeof e.width==`number`?`${e.width}px`:e.width,textAlign:e.align})},[k(`div`,Xt,[M(t.$slots,`headerCell`,{column:e},()=>[k(`span`,null,E(e.title),1)]),e.sorter?(S(),N(`button`,{key:0,type:`button`,class:`at-table__sort`,"aria-label":`按${e.title}排序`,onClick:t=>g(e)},`↕`,8,Zt)):I(``,!0),e.filters?.length?(S(),N(`select`,{key:1,class:`at-table__filter`,"aria-label":`筛选${e.title}`,value:s.value[e.key]??``,onChange:t=>b(t,e)},[n[2]||=k(`option`,{value:``},`全部`,-1),(S(!0),N(L,null,h(e.filters,e=>(S(),N(`option`,{key:e.value,value:e.value},E(e.label),9,$t))),128))],40,Qt)):I(``,!0)])],4))),128))])]),k(`tbody`,null,[e.loading||!p.value.length?(S(),N(`tr`,en,[k(`td`,{colspan:e.columns.length+ +!!e.rowSelection},[k(`div`,{class:`at-table__status`,"aria-busy":e.loading},[e.loading?(S(),N(L,{key:0},[n[3]||=k(`span`,{class:`at-spinner`},null,-1),n[4]||=j(`正在加载数据…`,-1)],64)):M(t.$slots,`empty`,{},()=>[j(E(e.emptyText),1)],void 0,1)],8,nn)],8,tn)])):I(``,!0),(S(!0),N(L,null,h(e.loading?[]:p.value,(n,r)=>(S(),N(`tr`,{key:l(n)},[e.rowSelection?(S(),N(`td`,rn,[D(Y,{"aria-label":`选择第 ${r+1} 行`,"model-value":e.rowSelection.selectedRowKeys.includes(l(n)),"onUpdate:modelValue":e=>w(n,e)},null,8,[`aria-label`,`model-value`,`onUpdate:modelValue`])])):I(``,!0),(S(!0),N(L,null,h(e.columns,e=>(S(),N(`td`,{key:e.key,style:y({textAlign:e.align})},[M(t.$slots,`bodyCell`,{column:e,record:n,index:r,value:n[String(e.dataIndex)]},()=>[e.render?(S(),A(_(O),{key:0,content:e.render(n[String(e.dataIndex)],n,r)},null,8,[`content`])):(S(),N(L,{key:1},[j(E(n[String(e.dataIndex)]??``),1)],64))])],4))),128))]))),128))])])]),k(`div`,an,[k(`span`,null,`共 `+E(d.value)+` 条`,1),k(`div`,on,[k(`label`,null,[n[5]||=j(`每页 `,-1),k(`select`,{value:a.value,onChange:T},[(S(!0),N(L,null,h(e.pageSizeOptions,e=>(S(),N(`option`,{key:e,value:e},E(e),9,cn))),128))],40,sn),n[6]||=j(` 条`,-1)]),k(`button`,{type:`button`,disabled:c.value<=1,onClick:n[0]||=e=>m(c.value-1)},`上一页`,8,ln),k(`span`,un,E(c.value)+` / `+E(f.value),1),k(`button`,{type:`button`,disabled:c.value>=f.value,onClick:n[1]||=e=>m(c.value+1)},`下一页`,8,dn)])])]))}}),pn=B({name:`FormPage`,props:[],setup:(t,{slots:n})=>{let r=f({mode:`onBlur`,defaultValues:{workspace:``,email:``,plan:`studio`,updates:!0,members:[{name:`Jordan Lee`,role:`Admin`}]}}),i=d({control:r.control,name:`members`}),a=u({control:r.control,name:`plan`}),o=r.handleSubmit(async e=>{await new Promise(e=>window.setTimeout(e,450)),window.alert(`已创建工作区：${e.workspace}`)});return()=>H(L,null,[H(W,{eyebrow:`FORM MANAGEMENT`,title:`Form Hooks`,description:`以 Hooks 管理表单状态、校验与提交。用原生 form 组织界面，让数据流保持清晰。`,badge:`Hook-first API`},{}),H(`div`,{class:`docs-callout`},[H(`span`,{},[`✦`]),H(`div`,{},[H(`strong`,{},[`从 useForm 开始`]),H(`p`,{},[`字段通过 register 接入；复杂受控组件使用 Controller。字段订阅独立更新，减少不必要的渲染。`])]),H(`a`,{href:`#form-api`},[`API 说明 ↓`])]),H(s,{title:`创建工作区`,description:`结合注册字段、受控 Select、动态成员列表与提交状态。`,code:Q.workspaceForm},{default:()=>[H(`div`,{class:`form-preview-layout`},[H(`form`,{class:`workspace-form`,onSubmit:e=>void o(e),noValidate:!0},[H(`div`,{class:`form-preview-heading`},[H(`span`,{class:`form-preview-icon`},[`✳`]),H(`div`,{},[H(`h4`,{},[`创建你的工作区`]),H(`p`,{},[`邀请团队成员，一起开始协作。`])])]),H(`div`,{class:`form-fields-grid`},[H(e,{label:`工作区名称`,placeholder:`例如：Northstar Studio`,error:r.formState.errors.workspace?.message,...r.register(`workspace`,{required:`请输入工作区名称`,minLength:{value:3,message:`至少输入 3 个字符`}})},{}),H(e,{label:`工作邮箱`,placeholder:`you@company.com`,type:`email`,error:r.formState.errors.email?.message,...r.register(`email`,{required:`请输入工作邮箱`,pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:`请输入有效的邮箱地址`}})},{})]),H(p,{control:r.control,name:`plan`},{default:({field:e})=>H(l,{label:`选择套餐`,modelValue:String(e.value??``),onChange:t=>e.onChange(t),onBlur:e.onBlur,options:[{label:`Starter · 个人项目`,value:`starter`},{label:`Studio · 成长团队`,value:`studio`},{label:`Enterprise · 大型组织`,value:`enterprise`}]},{})}),H(`div`,{class:`dynamic-members`},[H(`div`,{class:`dynamic-members__top`},[H(`div`,{},[H(`label`,{class:`at-field__label`},[`团队成员`]),H(`span`,{},[`添加一起协作的伙伴`])]),H(P,{size:`sm`,onClick:()=>i.append({name:``,role:`Member`})},{default:()=>[`＋ 添加成员`]})]),i.fields.map((t,n)=>H(`div`,{class:`member-row`,key:t.id},[H(e,{"aria-label":`成员 ${n+1} 姓名`,placeholder:`姓名`,...r.register(`members.${n}.name`)},{}),H(l,{"aria-label":`成员 ${n+1} 角色`,options:[{label:`管理员`,value:`Admin`},{label:`成员`,value:`Member`},{label:`访客`,value:`Guest`}],...r.register(`members.${n}.role`)},{}),H(`button`,{type:`button`,class:`remove-member`,"aria-label":`移除成员`,onClick:()=>i.remove(n)},[`×`])]))]),H(`div`,{class:`form-preview-footer`},[H(Y,{...r.register(`updates`)},{default:()=>[`接收产品更新和团队灵感`]}),H(P,{type:`submit`,variant:`primary`,loading:r.formState.isSubmitting},{default:()=>[`创建工作区 `,H(`span`,{},[`→`])]})])]),H(`aside`,{class:`form-state-panel`},[H(`div`,{class:`state-panel__title`},[H(`span`,{},[`LIVE STATE`]),H(`i`,{},[])]),H(`div`,{class:`state-row`},[H(`span`,{},[`当前套餐`]),H(`b`,{},[String(a.value??`—`)])]),H(`div`,{class:`state-row`},[H(`span`,{},[`表单状态`]),H(`b`,{class:r.formState.isDirty?`state-value--active`:``},[r.formState.isDirty?`已修改`:`初始状态`])]),H(`div`,{class:`state-row`},[H(`span`,{},[`校验状态`]),H(`b`,{},[r.formState.isValid?`无错误`:`${Object.keys(r.formState.errors).length} 个错误`])]),H(`div`,{class:`state-json`},[H(`span`,{},[`formState`]),H(`code`,{},[`{\n  isDirty: ${r.formState.isDirty},\n  isSubmitting: ${r.formState.isSubmitting},\n  submitCount: ${r.formState.submitCount}\n}`])]),H(`button`,{type:`button`,class:`reset-link`,onClick:()=>r.reset()},[`↺ 重置所有字段`])])])]}),H(`div`,{class:`section-heading-row`,id:`form-api`},[H(`div`,{},[H(`div`,{class:`eyebrow`},[H(`span`,{class:`eyebrow__dot`},[]),` CORE API`]),H(`h2`,{},[`让表单状态有迹可循`])]),H(`span`,{class:`section-index`},[`01 — 03`])]),H(`div`,{class:`api-grid`},[H(Z,{title:`useForm`,text:`创建并配置表单实例，返回字段注册、提交处理和状态控制方法。`,tags:[`register`,`handleSubmit`,`reset`,`trigger`]},{}),H(Z,{title:`Controller`,text:`连接 Select 等受控组件，统一提供 value、onChange、onBlur 与字段状态。`,tags:[`field`,`fieldState`,`formState`]},{}),H(Z,{title:`useFieldArray`,text:`管理动态增删的字段数组，并提供 append、remove、move 等操作。`,tags:[`append`,`remove`,`move`,`replace`]},{})]),H(`div`,{class:`implementation-note`},[H(`span`,{},[`✦`]),H(`p`,{},[H(`strong`,{},[`校验按需触发。`]),`默认在提交时校验，也可以配置为输入或失焦时校验。内置规则覆盖必填、长度、数值范围、正则与异步自定义校验；Resolver 可连接 Zod 或 Yup。`])])])}}),Z=B({name:`ApiCard`,props:[`title`,`text`,`tags`],setup:(e,{slots:t})=>{let{title:n,text:r,tags:i}=e;return()=>H(`article`,{class:`api-card`},[H(`span`,{class:`api-card__icon`},[`⌘`]),H(`h3`,{},[n]),H(`p`,{},[r]),H(`div`,{class:`api-tags`},[i.map(e=>H(`code`,{key:e},[e]))])])}}),mn=B({name:`ButtonPage`,props:[],setup:(e,{slots:t})=>{let n=T(!1),r=U(n);return()=>H(L,null,[H(W,{eyebrow:`FOUNDATIONS`,title:`Button 按钮`,description:`清楚表达操作优先级，在需要的时候给出恰到好处的反馈。`,badge:`Button`},{}),H(s,{title:`按钮类型`,description:`根据操作的重要程度，选择合适的视觉权重。`,code:Q.buttonTypes},{default:()=>[H(`div`,{class:`component-row`},[H(P,{variant:`primary`},{default:()=>[`创建项目 `,H(`span`,{},[`→`])]}),H(P,{variant:`secondary`},{default:()=>[`取消`]}),H(P,{variant:`tertiary`},{default:()=>[`了解更多 ↗`]}),H(P,{variant:`danger`},{default:()=>[`删除项目`]}),H(P,{variant:`ghost`},{default:()=>[`更多操作`]})])]}),H(s,{title:`尺寸与状态`,description:`提供三种尺寸，并支持加载和禁用状态。`,code:Q.buttonStates},{default:()=>[H(`div`,{class:`component-row component-row--align-end`},[H(P,{size:`sm`},{default:()=>[`小号按钮`]}),H(P,{size:`md`},{default:()=>[`默认尺寸`]}),H(P,{size:`lg`,variant:`primary`},{default:()=>[`主要操作`]}),H(P,{loading:!0,variant:`primary`},{default:()=>[`正在保存`]}),H(P,{disabled:!0},{default:()=>[`暂不可用`]})])]}),H(s,{title:`交互示例`,description:`点击按钮体验异步加载状态。`,code:Q.buttonLoading},{default:()=>[H(`div`,{class:`component-row`},[H(P,{variant:`primary`,loading:n.value,onClick:()=>{r(!0),window.setTimeout(()=>r(!1),1200)}},{default:()=>[`保存设置`]}),H(`span`,{class:`demo-hint`},[`点击后显示 1.2 秒加载状态`])])]}),H(c,{rows:[[`variant`,`primary | secondary | tertiary | danger | ghost`,`secondary`],[`size`,`sm | md | lg`,`md`],[`loading`,`boolean`,`false`],[`fullWidth`,`boolean`,`false`],[`icon`,`VNodeChild / slot`,`—`]]},{})])}}),hn=B({name:`InputPage`,props:[],setup:(t,{slots:n})=>{let r=T(``),i=U(r);return()=>H(L,null,[H(W,{eyebrow:`DATA ENTRY`,title:`Input 输入组件`,description:`为文本与多行内容提供清晰、友好的输入体验。`,badge:`Input · Textarea`},{}),H(s,{title:`Input 输入框`,description:`支持标签、提示、错误状态、前后缀和清空操作。`,code:Q.inputs},{default:()=>[H(`div`,{class:`input-demo-grid`},[H(e,{label:`项目名称`,placeholder:`请输入项目名称`},{}),H(e,{label:`搜索成员`,placeholder:`按姓名或邮箱搜索`,clearable:!0,modelValue:r.value,onChange:e=>i(e.target.value)},{prefix:()=>H(`span`,{class:`search-icon`},[`⌕`])}),H(e,{label:`工作邮箱`,placeholder:`name@company.com`,error:`请输入有效的邮箱地址`},{}),H(e,{label:`只读字段`,modelValue:`workspace-id-1842`,readOnly:!0,hint:`此字段由系统自动生成`},{})])]}),H(s,{title:`Textarea 多行输入`,description:`适合备注、描述等较长内容。`,code:Q.textarea},{default:()=>[H(`div`,{class:`textarea-demo`},[H(De,{label:`项目简介`,placeholder:`描述一下这个项目…`,rows:4,hint:`简单介绍项目目标和团队协作方式`},{})])]}),H(c,{rows:[[`label`,`string`,`—`],[`hint / error`,`string`,`—`],[`prefix / suffix`,`VNodeChild / slot`,`—`],[`clearable`,`boolean`,`false`],[`size`,`'sm' | 'md' | 'lg'`,`'md'`],[`rows`,`number`,`3`]]},{})])}}),gn=B({name:`SelectionPage`,props:[],setup:(e,{slots:t})=>{let n=T([`design`]),r=U(n),i=T(`member`),a=U(i),o=T(!0),c=U(o);return()=>H(L,null,[H(W,{eyebrow:`DATA ENTRY`,title:`选择组件`,description:`Checkbox、Radio 与 Switch，覆盖多选、单选和即时开关状态。`,badge:`Checkbox · Radio · Switch`},{}),H(s,{title:`Checkbox 多选`,description:`独立复选和分组选项都支持受控状态。`,code:Q.checkbox},{default:()=>[H(`div`,{class:`selection-layout`},[H(`div`,{class:`selection-block`},[H(`span`,{class:`demo-label`},[`独立复选`]),H(Y,{defaultChecked:!0},{default:()=>[`同意服务条款`]}),H(Y,{disabled:!0},{default:()=>[`当前不可选`]})]),H(`div`,{class:`selection-block`},[H(`span`,{class:`demo-label`},[`兴趣主题`]),H(Pe,{modelValue:n.value,onChange:r,options:[{label:`产品设计`,value:`design`},{label:`工程实践`,value:`engineering`},{label:`团队管理`,value:`team`}]},{}),H(`span`,{class:`demo-hint`},[`已选择：`,n.value.join(`、`)||`无`])])])]}),H(s,{title:`Radio 单选`,description:`在一组选项中选择一个明确的值。`,code:Q.radio},{default:()=>[H(`div`,{class:`selection-layout`},[H(`div`,{class:`selection-block`},[H(`span`,{class:`demo-label`},[`工作区角色`]),H(Ie,{name:`role-demo`,modelValue:i.value,onChange:a,options:[{label:`管理员`,value:`admin`},{label:`成员`,value:`member`},{label:`访客`,value:`guest`}]},{}),H(`span`,{class:`demo-hint`},[`当前角色：`,i.value])])])]}),H(s,{title:`Switch 开关`,description:`用于立即生效的二元设置。`,code:Q.switch},{default:()=>[H(`div`,{class:`switch-row`},[H(`div`,{},[H(`strong`,{},[`开启产品更新`]),H(`span`,{},[`接收功能更新、技巧与灵感`])]),H(se,{modelValue:o.value,onChange:e=>c(e.target.checked)},{checked:()=>`开`,unchecked:()=>`关`})])]})])}}),_n=B({name:`FeedbackPage`,props:[],setup:(t,{slots:n})=>{let r=T(!1),i=U(r);return()=>H(L,null,[H(W,{eyebrow:`FEEDBACK`,title:`Modal 弹窗`,description:`在需要聚焦重要决策时出现，不打断用户理解当前上下文。`,badge:`Modal`},{}),H(s,{title:`受控 Modal`,description:`用于确认、编辑或承载需要专注完成的短流程。`,code:Q.modal},{default:()=>[H(`div`,{class:`component-row`},[H(P,{variant:`primary`,onClick:()=>i(!0)},{default:()=>[`邀请成员`]}),H(`span`,{class:`demo-hint`},[`弹窗支持遮罩关闭、Escape 和焦点管理`])]),H(bt,{open:r.value,title:`邀请团队成员`,description:`发送邀请后，对方会收到一封加入工作区的邮件。`,onClose:()=>i(!1),onOk:()=>i(!1)},{default:()=>[H(`div`,{class:`modal-demo-content`},[H(e,{label:`邮箱地址`,placeholder:`name@company.com`},{}),H(l,{label:`成员权限`,options:[{label:`成员 · 可编辑内容`,value:`member`},{label:`管理员 · 管理工作区`,value:`admin`},{label:`访客 · 仅查看`,value:`guest`}]},{}),H(`p`,{class:`modal-demo-note`},[`你可以在成员设置中随时调整权限。`])])]})]}),H(s,{title:`命令式确认`,description:`删除、归档等需要明确确认的破坏性操作。`,code:Q.confirm},{default:()=>[H(`div`,{class:`component-row`},[H(P,{variant:`danger`,onClick:()=>bt.confirm({title:`删除这个项目？`,content:`删除后，项目和其中的所有内容都将无法恢复。`,danger:!0,onOk:()=>window.alert(`项目已删除`)})},{default:()=>[`删除项目`]}),H(`span`,{class:`demo-hint`},[`点击体验命令式确认弹窗`])])]}),H(c,{rows:[[`open`,`boolean`,`—`],[`onClose`,`() => void`,`—`],[`onOk`,`() => void | Promise<void>`,`—`],[`maskClosable`,`boolean`,`true`],[`closeOnEscape`,`boolean`,`true`],[`Modal.confirm`,`ConfirmOptions → { destroy }`,`—`]]},{})])}}),vn=B({name:`AlertPage`,props:[],setup:(e,{slots:t})=>()=>H(L,null,[H(W,{eyebrow:`FEEDBACK`,title:`Alert 提示`,description:`用语义化状态表达成功、提醒和错误信息。`,badge:`Alert`},{}),H(s,{title:`提示类型`,description:`提供信息、成功、警告和错误四种状态。`,code:Q.alert},{default:()=>[H(`div`,{class:`common-demo-stack`},[H(G,{variant:`info`,title:`即将发布`},{default:()=>[`项目成员会收到一封更新通知。`]}),H(G,{variant:`success`,title:`更改已保存`,closable:!0},{default:()=>[`你的工作区信息已更新。`]}),H(G,{variant:`warning`,title:`存储空间不足`},{default:()=>[`请清理文件或升级套餐后继续上传。`]}),H(G,{variant:`error`,title:`保存失败`},{default:()=>[`网络连接中断，请重试。`]})])]}),H(c,{rows:[[`variant`,`info | success | warning | error`,`info`],[`title`,`VNodeChild / slot`,`—`],[`closable`,`boolean`,`false`],[`onClose`,`() => void`,`—`]]},{})])}),yn=B({name:`TagPage`,props:[],setup:(e,{slots:n})=>{let r=T(!0),i=U(r);return()=>H(L,null,[H(W,{eyebrow:`DATA DISPLAY`,title:`Tag 标签`,description:`为状态、分类和筛选条件提供紧凑标记。`,badge:`Tag`},{}),H(s,{title:`标签类型`,description:`用颜色区分标签的语义和优先级。`,code:Q.tag},{default:()=>[H(`div`,{class:`common-demo-row`},[H(t,{variant:`primary`},{default:()=>[`设计中`]}),H(t,{variant:`success`},{default:()=>[`已发布`]}),H(t,{variant:`warning`},{default:()=>[`待审核`]}),H(t,{variant:`danger`},{default:()=>[`已阻塞`]}),r.value&&H(t,{closable:!0,onClose:()=>i(!1)},{default:()=>[`可移除标签`]})])]}),H(c,{rows:[[`variant`,`neutral | primary | success | warning | danger`,`neutral`],[`closable`,`boolean`,`false`],[`onClose`,`() => void`,`—`]]},{})])}}),bn=B({name:`AvatarPage`,props:[],setup:(e,{slots:t})=>()=>H(L,null,[H(W,{eyebrow:`DATA DISPLAY`,title:`Avatar 头像`,description:`展示成员身份，并在图片不可用时使用姓名首字母。`,badge:`Avatar`},{}),H(s,{title:`头像尺寸与回退`,description:`提供多种尺寸；图片无法加载时显示姓名标记。`,code:Q.avatar},{default:()=>[H(`div`,{class:`common-demo-row common-demo-row--align-end`},[H(n,{name:`林知夏`,size:`sm`},{}),H(n,{name:`陈一川`},{}),H(n,{name:`周禾`,size:`lg`},{}),H(`span`,{class:`demo-hint`},[`图片加载失败时自动回退到姓名标记`])])]}),H(c,{rows:[[`src`,`string`,`—`],[`alt / name`,`string`,`—`],[`size`,`sm | md | lg`,`md`]]},{})])}),xn=B({name:`TooltipPage`,props:[],setup:(e,{slots:t})=>()=>H(L,null,[H(W,{eyebrow:`FEEDBACK`,title:`Tooltip 文字提示`,description:`悬停或键盘聚焦时显示简短补充说明。`,badge:`Tooltip`},{}),H(s,{title:`提示位置`,description:`可将提示放在触发元素的上、下、左或右侧。`,code:Q.tooltip},{default:()=>[H(`div`,{class:`common-demo-row`},[H(Gt,{title:`保存后，所有工作区成员都能看到更新。`,placement:`top`},{default:()=>[H(P,{variant:`secondary`},{default:()=>[`保存帮助`]})]}),H(Gt,{title:`邀请链接将在 7 天后失效。`,placement:`right`},{default:()=>[H(P,{variant:`tertiary`},{default:()=>[`邀请说明`]})]}),H(`span`,{class:`demo-hint`},[`将鼠标移到按钮上，或使用 Tab 键聚焦`])])]}),H(c,{rows:[[`title`,`VNodeChild / slot`,`required`],[`placement`,`top | bottom | left | right`,`top`],[`#default`,`VNodeChild / slot`,`required`]]},{})])}),Sn=B({name:`BadgePage`,props:[],setup:(e,{slots:t})=>()=>H(L,null,[H(W,{eyebrow:`DATA DISPLAY`,title:`Badge 徽标`,description:`在图标、头像等元素旁呈现数量或状态提醒。`,badge:`Badge`},{}),H(s,{title:`数量与状态`,description:`支持数字上限、红点和语义状态。`,code:Q.badge},{default:()=>[H(`div`,{class:`common-demo-row`},[H(J,{count:5},{default:()=>[H(n,{name:`林知夏`,size:`lg`},{})]}),H(J,{count:128,overflowCount:99},{default:()=>[H(P,{},{default:()=>[`通知`]})]}),H(J,{dot:!0},{default:()=>[H(P,{variant:`secondary`},{default:()=>[`消息`]})]}),H(J,{status:`success`,text:`项目运行正常`},{})])]}),H(c,{rows:[[`count`,`VNodeChild / slot`,`—`],[`dot`,`boolean`,`false`],[`overflowCount`,`number`,`99`],[`showZero`,`boolean`,`false`],[`status`,`default | success | processing | warning | error`,`default`],[`text`,`VNodeChild / slot`,`—`]]},{})])}),Cn=B({name:`BreadcrumbPage`,props:[],setup:(e,{slots:t})=>()=>H(L,null,[H(W,{eyebrow:`NAVIGATION`,title:`Breadcrumb 面包屑`,description:`展示当前位置，并帮助用户快速返回上级页面。`,badge:`Breadcrumb`},{}),H(s,{title:`页面路径`,description:`通过 href 或 onClick 为上级路径提供导航行为。`,code:Q.breadcrumb},{default:()=>[H(dt,{items:[{title:`工作区`,onClick:()=>window.alert(`返回工作区`)},{title:`项目列表`,onClick:()=>window.alert(`返回项目列表`)},{title:`品牌视觉升级`}]},{})]}),H(s,{title:`自定义分隔符`,description:`分隔符可以是文本或任意 React 节点。`,code:Q.breadcrumbCustom},{default:()=>[H(dt,{separator:`›`,items:[{title:`设计团队`},{title:`品牌项目`},{title:`视觉规范`}]},{})]}),H(c,{rows:[[`items`,`BreadcrumbItem[]`,`required`],[`items[].title`,`VNodeChild / slot`,`required`],[`items[].href`,`string`,`—`],[`items[].onClick`,`() => void`,`—`],[`separator`,`VNodeChild / slot`,`'/ '`]]},{})])}),wn=B({name:`DividerPage`,props:[],setup:(e,{slots:t})=>()=>H(L,null,[H(W,{eyebrow:`FOUNDATIONS`,title:`Divider 分割线`,description:`分隔相邻内容，或为相关信息添加轻量标题。`,badge:`Divider`},{}),H(s,{title:`水平分割`,description:`支持普通线、虚线与带标题分割线。`,code:Q.divider},{default:()=>[H(`div`,{class:`divider-demo`},[H(`span`,{},[`项目概览`]),H(K,{},{}),H(`span`,{},[`成员与权限`]),H(K,{dashed:!0},{default:()=>[`团队设置`]}),H(`span`,{},[`最近更新`])])]}),H(s,{title:`垂直分割`,code:Q.dividerVertical},{default:()=>[H(`div`,{class:`common-demo-row`},[H(`span`,{},[`项目`]),H(K,{orientation:`vertical`},{}),H(`span`,{},[`成员`]),H(K,{orientation:`vertical`,dashed:!0},{}),H(`span`,{},[`设置`])])]}),H(c,{rows:[[`orientation`,`horizontal | vertical`,`horizontal`],[`dashed`,`boolean`,`false`],[`plain`,`boolean`,`false`],[`#default`,`VNodeChild / slot`,`—`]]},{})])}),Tn=B({name:`EmptyPage`,props:[],setup:(e,{slots:t})=>()=>H(L,null,[H(W,{eyebrow:`FEEDBACK`,title:`Empty 空状态`,description:`在列表、搜索或数据面板中清楚说明当前没有内容。`,badge:`Empty`},{}),H(s,{title:`带操作的空状态`,description:`提供下一步操作，帮助用户从空白状态继续。`,code:Q.empty},{default:()=>[H(a,{description:`还没有项目`},{default:()=>[H(P,{variant:`primary`},{default:()=>[`创建第一个项目`]})]})]}),H(s,{title:`自定义描述`,code:Q.emptySearch},{default:()=>[H(a,{description:`没有找到符合条件的结果`},{})]}),H(c,{rows:[[`description`,`VNodeChild / slot`,`暂无数据`],[`image`,`VNodeChild / slot`,`默认插画`],[`#default`,`VNodeChild / slot`,`—`]]},{})])}),En=B({name:`PaginationPage`,props:[],setup:(e,{slots:t})=>{let n=T(3),r=U(n),a=T(10),o=U(a);return()=>H(L,null,[H(W,{eyebrow:`NAVIGATION`,title:`Pagination 分页`,description:`将长列表拆分为清晰、可浏览的数据页。`,badge:`Pagination`},{}),H(s,{title:`分页与每页条数`,description:`支持受控页码、总数提示及每页条数切换。`,code:Q.pagination},{default:()=>[H(i,{current:n.value,pageSize:a.value,total:86,showSizeChanger:!0,onChange:(e,t)=>{r(e),o(t)}},{})]}),H(c,{rows:[[`current`,`number`,`required`],[`pageSize`,`number`,`required`],[`total`,`number`,`required`],[`onChange`,`(page, pageSize) => void`,`required`],[`showSizeChanger`,`boolean`,`false`],[`pageSizeOptions`,`number[]`,`[10, 20, 50]`]]},{})])}}),Dn=B({name:`ProgressPage`,props:[],setup:(e,{slots:t})=>{let n=T(68),r=U(n);return()=>H(L,null,[H(W,{eyebrow:`FEEDBACK`,title:`Progress 进度条`,description:`用进度和状态让长时间任务保持可见。`,badge:`Progress`},{}),H(s,{title:`进度与状态`,description:`百分比会限制在 0 至 100，并支持自定义文案和颜色。`,code:Q.progress},{default:()=>[H(`div`,{class:`common-demo-stack`},[H(q,{percent:n.value,status:`active`,label:`上传中 ${n.value}%`},{}),H(q,{percent:100},{}),H(q,{percent:42,status:`exception`,label:`上传失败 · 42%`},{}),H(P,{onClick:()=>r(e=>e>=100?0:e+8)},{default:()=>[`推进进度`]})])]}),H(c,{rows:[[`percent`,`number`,`required`],[`status`,`normal | active | success | exception`,`自动判断`],[`showInfo`,`boolean`,`true`],[`strokeColor`,`string`,`主题色`],[`label`,`VNodeChild / slot`,`百分比`]]},{})])}}),On=B({name:`SkeletonPage`,props:[],setup:(e,{slots:t})=>()=>H(L,null,[H(W,{eyebrow:`FEEDBACK`,title:`Skeleton 骨架屏`,description:`内容加载时先展示结构轮廓，减少页面跳动。`,badge:`Skeleton`},{}),H(s,{title:`动态骨架`,description:`支持头像、标题和可配置行数。`,code:Q.skeleton},{default:()=>[H(r,{active:!0,avatar:!0,title:!0,paragraph:{rows:3}},{})]}),H(s,{title:`简洁占位`,code:Q.skeletonSimple},{default:()=>[H(r,{title:!1,paragraph:{rows:2}},{})]}),H(c,{rows:[[`active`,`boolean`,`false`],[`avatar`,`boolean`,`false`],[`title`,`boolean`,`true`],[`paragraph`,`boolean | { rows?: number }`,`true`]]},{})])}),kn=B({name:`SpinPage`,props:[],setup:(e,{slots:t})=>{let n=T(!0),r=U(n);return()=>H(L,null,[H(W,{eyebrow:`FEEDBACK`,title:`Spin 加载中`,description:`在请求或局部内容更新期间提供轻量加载反馈。`,badge:`Spin`},{}),H(s,{title:`独立加载指示器`,description:`提供三种尺寸和可选说明。`,code:Q.spinSizes},{default:()=>[H(`div`,{class:`common-demo-row`},[H(X,{size:`sm`},{}),H(X,{tip:`正在加载项目…`},{}),H(X,{size:`lg`},{})])]}),H(s,{title:`局部内容加载`,description:`可以遮罩一个容器，保留上下文。`,code:Q.spinContent},{default:()=>[H(`div`,{class:`spin-demo`},[H(X,{spinning:n.value,tip:`正在同步成员…`},{default:()=>[H(`div`,{},[H(`strong`,{},[`项目成员`]),H(`p`,{},[`林知夏 · 陈一川 · 周禾`])])]})]),H(P,{onClick:()=>r(e=>!e)},{default:()=>[n.value?`显示内容`:`重新加载`]})]}),H(c,{rows:[[`spinning`,`boolean`,`true`],[`size`,`sm | md | lg`,`md`],[`tip`,`VNodeChild / slot`,`—`],[`#default`,`VNodeChild / slot`,`—`]]},{})])}}),An=B({name:`TabsPage`,props:[],setup:(e,{slots:t})=>{let n=T(`overview`),r=U(n);return()=>H(L,null,[H(W,{eyebrow:`NAVIGATION`,title:`Tabs 标签页`,description:`在同一页面内切换相互关联的内容视图。`,badge:`Tabs`},{}),H(s,{title:`受控标签页`,description:`支持受控或默认选中，并提供键盘方向键切换。`,code:Q.tabs},{default:()=>[H(Be,{activeKey:n.value,onChange:r,items:[{key:`overview`,label:`概览`,children:`项目进度和关键指标会显示在这里。`},{key:`members`,label:`成员`,children:`管理项目成员与权限。`},{key:`activity`,label:`动态`,children:`查看项目最近的变更。`}]},{})]}),H(c,{rows:[[`items`,`TabItem[]`,`required`],[`items[].key`,`string`,`required`],[`items[].label`,`VNodeChild / slot`,`required`],[`items[].children`,`VNodeChild / slot`,`required`],[`activeKey`,`string`,`非受控`],[`onChange`,`(key) => void`,`—`]]},{})])}}),jn=B({name:`CardPage`,props:[],setup:(e,{slots:t})=>()=>H(L,null,[H(W,{eyebrow:`FOUNDATIONS`,title:`Card 卡片`,description:`将相关内容、操作和信息组织在独立容器中。`,badge:`Card`},{}),H(s,{title:`带标题与操作的卡片`,description:`支持标题、辅助操作和悬停反馈。`,code:Q.card},{default:()=>[H(`div`,{class:`card-demo`},[H(de,{title:`品牌视觉升级`,hoverable:!0},{extra:()=>H(P,{variant:`tertiary`},{default:()=>[`查看详情`]}),default:()=>[H(`p`,{},[`正在为新一季产品更新品牌视觉与设计规范。`]),H(`span`,{},[`最近更新 · 3 分钟前`])]}),H(de,{title:`快速提示`,bordered:!1},{default:()=>[`卡片可以按需关闭边框，适合嵌入分组内容。`]})])]}),H(c,{rows:[[`title`,`VNodeChild / slot`,`—`],[`extra`,`VNodeChild / slot`,`—`],[`hoverable`,`boolean`,`false`],[`bordered`,`boolean`,`true`],[`#default`,`VNodeChild / slot`,`—`]]},{})])}),Mn=B({name:`DescriptionsPage`,props:[],setup:(e,{slots:t})=>{let n=[{key:`name`,label:`项目名称`,children:`品牌视觉升级`},{key:`owner`,label:`负责人`,children:`林知夏`},{key:`status`,label:`项目状态`,children:`进行中`},{key:`updated`,label:`最近更新`,children:`3 分钟前`}];return()=>H(L,null,[H(W,{eyebrow:`DATA DISPLAY`,title:`Descriptions 描述列表`,description:`以标签和值的形式展示对象属性和详情信息。`,badge:`Descriptions`},{}),H(s,{title:`项目详情`,description:`支持自适应列数和边框布局。`,code:Q.descriptions},{default:()=>[H(Xe,{title:`项目详情`,bordered:!0,column:2,items:n},{})]}),H(c,{rows:[[`items`,`DescriptionItem[]`,`required`],[`items[].key`,`string`,`required`],[`items[].label`,`VNodeChild / slot`,`required`],[`items[].children`,`VNodeChild / slot`,`required`],[`column`,`number`,`3`],[`bordered`,`boolean`,`false`]]},{})])}}),Nn=B({name:`StepsPage`,props:[],setup:(e,{slots:t})=>{let n=T(1),r=U(n),i=[{title:`创建工作区`,description:`填写基本信息`},{title:`邀请成员`,description:`与团队协作`},{title:`完成设置`,description:`开始使用`}];return()=>H(L,null,[H(W,{eyebrow:`NAVIGATION`,title:`Steps 步骤条`,description:`展示多阶段流程的进度，并帮助用户理解当前步骤。`,badge:`Steps`},{}),H(s,{title:`可交互步骤`,description:`点击步骤切换当前进度，也可仅展示只读状态。`,code:Q.steps},{default:()=>[H(`div`,{class:`steps-demo`},[H(Rt,{current:n.value,onChange:r,items:i},{}),H(P,{onClick:()=>r(e=>(e+1)%i.length)},{default:()=>[`下一步`]})])]}),H(c,{rows:[[`items`,`StepItem[]`,`required`],[`current`,`number`,`0`],[`direction`,`horizontal | vertical`,`horizontal`],[`onChange`,`(step) => void`,`—`],[`items[].status`,`wait | process | finish | error`,`自动计算`]]},{})])}}),Pn=B({name:`TimelinePage`,props:[],setup:(e,{slots:t})=>{let n=[{key:`created`,label:`09:30`,content:`项目已创建`},{key:`invited`,label:`10:15`,content:`林知夏邀请了 3 位成员`},{key:`updated`,label:`11:20`,content:`更新了项目视觉规范`,color:`#48a982`}];return()=>H(L,null,[H(W,{eyebrow:`DATA DISPLAY`,title:`Timeline 时间轴`,description:`按时间顺序呈现活动、变更和事件记录。`,badge:`Timeline`},{}),H(s,{title:`项目动态`,description:`支持时间标记、节点颜色和待处理项。`,code:Q.timeline},{default:()=>[H(it,{items:n,pending:`等待下一次更新`},{})]}),H(c,{rows:[[`items`,`TimelineItem[]`,`required`],[`items[].key`,`string`,`required`],[`items[].content`,`VNodeChild / slot`,`required`],[`items[].label`,`VNodeChild / slot`,`—`],[`items[].color`,`string`,`主题色`],[`pending`,`VNodeChild / slot`,`—`]]},{})])}}),Fn=B({name:`CollapsePage`,props:[],setup:(e,{slots:t})=>{let n=T(`members`),r=U(n),i=[{key:`members`,title:`成员与权限`,children:`管理工作区成员的访问级别。`},{key:`notifications`,title:`通知设置`,children:`选择项目更新的通知方式。`},{key:`archive`,title:`归档项目`,children:`归档后项目会从活跃列表中移除。`}];return()=>H(L,null,[H(W,{eyebrow:`DATA DISPLAY`,title:`Collapse 折叠面板`,description:`按需展开内容，保持长页面结构简洁。`,badge:`Collapse`},{}),H(s,{title:`手风琴面板`,description:`手风琴模式下同一时间只展开一项。`,code:Q.collapse},{default:()=>[H(Ge,{accordion:!0,activeKey:n.value,onChange:e=>r(String(e)),items:i},{})]}),H(c,{rows:[[`items`,`CollapseItem[]`,`required`],[`accordion`,`boolean`,`false`],[`activeKey`,`string | string[]`,`非受控`],[`defaultActiveKey`,`string | string[]`,`—`],[`onChange`,`(activeKey) => void`,`—`]]},{})])}}),In=B({name:`DatePickerPage`,props:[],setup:(e,{slots:t})=>{let n=T(`2026-11-15`),r=U(n);return()=>H(L,null,[H(W,{eyebrow:`DATA ENTRY`,title:`DatePicker 日期选择`,description:`使用浏览器原生日期控件输入和选择日期。`,badge:`DatePicker`},{}),H(s,{title:`发布日期`,description:`保留原生键盘与平台日期选择交互。`,code:Q.datePicker},{default:()=>[H(`div`,{class:`common-demo-stack`},[H(jt,{label:`预计发布日期`,hint:`选择一个工作日作为目标日期`,modelValue:n.value,onChange:e=>r(e.target.value)},{}),H(`span`,{class:`demo-hint`},[`当前值：`,n.value]),H(jt,{label:`只读日期`,defaultValue:`2026-10-27`,disabled:!0},{})])]}),H(c,{rows:[[`label`,`VNodeChild / slot`,`—`],[`hint / error`,`VNodeChild / slot`,`—`],[`value / defaultValue`,`string`,`—`],[`min / max`,`string`,`—`],[`disabled`,`boolean`,`false`],[`onChange`,`ChangeEvent<HTMLInputElement>`,`—`]]},{})])}}),Ln=B({name:`UploadPage`,props:[],setup:(e,{slots:t})=>{let n=T([]),r=U(n);return()=>H(L,null,[H(W,{eyebrow:`DATA ENTRY`,title:`Upload 上传`,description:`通过选择文件或拖放文件，将本地内容接入业务流程。`,badge:`Upload`},{}),H(s,{title:`项目附件`,description:`支持文件类型过滤、多选、拖放和移除已选文件。`,code:Q.upload},{default:()=>[H(`div`,{class:`upload-demo`},[H(Wt,{accept:`.pdf,.png,.jpg`,multiple:!0,onChange:e=>r(e.map(e=>e.name))},{}),H(`span`,{class:`demo-hint`},[n.value.length?`已选择 ${n.value.length} 个文件`:`选择的文件仅保存在当前演示状态中`])])]}),H(c,{rows:[[`accept`,`string`,`—`],[`multiple`,`boolean`,`false`],[`disabled`,`boolean`,`false`],[`onChange`,`(files: File[]) => void`,`—`]]},{})])}}),Rn=B({name:`DrawerPage`,props:[],setup:(e,{slots:t})=>{let n=T(!1),r=U(n);return()=>H(L,null,[H(W,{eyebrow:`FEEDBACK`,title:`Drawer 抽屉`,description:`从页面边缘展示辅助内容，同时保留当前页面上下文。`,badge:`Drawer`},{}),H(s,{title:`项目详情抽屉`,description:`支持左右方向、遮罩关闭和 Escape 关闭。`,code:Q.drawer},{default:()=>[H(`div`,{class:`common-demo-row`},[H(P,{variant:`primary`,onClick:()=>r(!0)},{default:()=>[`查看项目详情`]}),H(`span`,{class:`demo-hint`},[`点击打开右侧抽屉`]),H(Et,{open:n.value,title:`项目详情`,onClose:()=>r(!1)},{default:()=>[H(`p`,{},[`项目成员、访问权限和最近动态会显示在这里。`]),H(Xe,{column:1,items:[{key:`owner`,label:`负责人`,children:`林知夏`},{key:`status`,label:`状态`,children:`进行中`}]},{})]})])]}),H(c,{rows:[[`open`,`boolean`,`required`],[`title`,`VNodeChild / slot`,`—`],[`placement`,`left | right`,`right`],[`width`,`number | string`,`420`],[`onClose`,`() => void`,`required`],[`maskClosable / closeOnEscape`,`boolean`,`true`]]},{})])}}),zn=B({name:`TablePage`,props:[],setup:(e,{slots:t})=>{let n=T([]),r=U(n),i=T(1),a=U(i),o=T(!1),c=U(o),l=z(()=>$.slice((i.value-1)*4,i.value*4));return()=>H(L,null,[H(W,{eyebrow:`DATA DISPLAY`,title:`Table 表格`,description:`结构化呈现数据，并将排序、筛选和选择等操作保持在用户视线之内。`,badge:`Table`},{}),H(s,{title:`项目列表`,description:`本地分页、排序、筛选与行选择。`,code:Q.table},{default:()=>[H(`div`,{class:`table-toolbar`},[H(`div`,{},[H(`strong`,{},[`所有项目`]),H(`span`,{},[`共 9 个项目`])]),H(`div`,{},[H(P,{onClick:()=>{c(!0),window.setTimeout(()=>c(!1),850)}},{default:()=>[`↻ 刷新数据`]}),H(P,{variant:`primary`},{default:()=>[`＋ 新建项目`]})])]),H(fn,{rowKey:`id`,columns:Bn,dataSource:$,rowSelection:{selectedRowKeys:n.value,onChange:r},loading:o.value,onChange:e=>console.info(`Table change`,e)},{}),H(`div`,{class:`table-selection-note`},[n.value.length?`已选择 ${n.value.length} 个项目`:`点击行首复选框，选择需要批量操作的项目`])]}),H(s,{title:`服务端分页模式`,description:`通过受控模式将分页和筛选交给业务请求。`,code:Q.serverTable},{default:()=>[H(`div`,{class:`server-table-toolbar`},[H(`span`,{},[`服务端数据模拟 · 每页 4 条`]),H(`span`,{},[`当前请求页：`,H(`b`,{},[i.value])])]),H(fn,{mode:`server`,rowKey:`id`,columns:Bn,dataSource:l.value,currentPage:i.value,total:$.length,pageSize:4,pageSizeOptions:[4],onChange:e=>{a(e.page)}},{})]})])}}),Q={workspaceForm:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { SelectValue, ControllerRenderProps } from 'atelier-ui-vue';
import { Button } from "atelier-ui-vue/button";
import { Input } from "atelier-ui-vue/input";
import { Select } from "atelier-ui-vue/select";
import { Controller, useFieldArray, useForm } from "atelier-ui-vue/form";
type WorkspaceValues = {
    name: string;
    email: string;
    plan: string;
    members: Array<{
        name: string;
        role: string;
    }>;
};
export const CreateWorkspace = defineComponent({
    "name": "CreateWorkspace",
    "props": [],
    "setup": (props, { slots }) => {
        const form = useForm<WorkspaceValues>({
            mode: 'onBlur',
            defaultValues: {
                name: '',
                email: '',
                plan: 'studio',
                members: [{ name: 'Jordan Lee', role: 'Admin' }],
            },
        });
        const members = useFieldArray<WorkspaceValues, WorkspaceValues['members'][number]>({
            control: form.control,
            name: 'members',
        });
        const onSubmit = form.handleSubmit(async (values) => {
            console.log('Create workspace:', values);
        });
        return () => (vnode("form", {
            "onSubmit": onSubmit,
            "noValidate": true
        }, [
            vnode(Input, {
                "label": "工作区名称",
                "placeholder": "例如：Northstar Studio",
                "error": form.formState.errors.name?.message,
                ...form.register('name', {
                    required: '请输入工作区名称',
                    minLength: { value: 3, message: '至少输入 3 个字符' },
                })
            }, {}),
            vnode(Input, {
                "label": "工作邮箱",
                "type": "email",
                "placeholder": "you@company.com",
                "error": form.formState.errors.email?.message,
                ...form.register('email', {
                    required: '请输入工作邮箱',
                    pattern: {
                        value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                        message: '请输入有效的邮箱地址',
                    },
                })
            }, {}),
            vnode(Controller, {
                "control": form.control,
                "name": "plan"
            }, {
                "default": ({ field }: ControllerRenderProps) => (vnode(Select, {
                    "label": "选择套餐",
                    "options": plans,
                    "modelValue": String(field.value ?? ''),
                    "onChange": (value: SelectValue) => field.onChange(value),
                    "onBlur": field.onBlur
                }, {}))
            }),
            vnode("h3", {}, [
                "团队成员"
            ]),
            members.fields.map((member, index) => (vnode("div", {
                "key": member.id
            }, [
                vnode(Input, {
                    "aria-label": \`成员 \${index + 1} 姓名\`,
                    "placeholder": "姓名",
                    ...form.register(\`members.\${index}.name\`)
                }, {}),
                vnode(Select, {
                    "aria-label": \`成员 \${index + 1} 角色\`,
                    "options": [
                        { label: '管理员', value: 'Admin' },
                        { label: '成员', value: 'Member' },
                        { label: '访客', value: 'Guest' },
                    ],
                    ...form.register(\`members.\${index}.role\`)
                }, {}),
                vnode("button", {
                    "type": "button",
                    "onClick": () => members.remove(index)
                }, [
                    "移除成员"
                ])
            ]))),
            vnode("button", {
                "type": "button",
                "onClick": () => members.append({ name: '', role: 'Member' })
            }, [
                "添加成员"
            ]),
            vnode(Button, {
                "type": "submit",
                "variant": "primary",
                "loading": form.formState.isSubmitting
            }, {
                "default": () => [
                    "创建工作区"
                ]
            })
        ]));
    }
});
const plans = [
    { label: 'Starter · 个人项目', value: 'starter' },
    { label: 'Studio · 成长团队', value: 'studio' },
    { label: 'Enterprise · 大型组织', value: 'enterprise' },
];
`,buttonTypes:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
export const ButtonTypes = defineComponent({
    "name": "ButtonTypes",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Button, {
                "variant": "primary"
            }, {
                "default": () => [
                    "创建项目"
                ]
            }),
            vnode(Button, {
                "variant": "secondary"
            }, {
                "default": () => [
                    "取消"
                ]
            }),
            vnode(Button, {
                "variant": "tertiary"
            }, {
                "default": () => [
                    "了解更多"
                ]
            }),
            vnode(Button, {
                "variant": "danger"
            }, {
                "default": () => [
                    "删除项目"
                ]
            }),
            vnode(Button, {
                "variant": "ghost"
            }, {
                "default": () => [
                    "更多操作"
                ]
            })
        ]));
    }
});
`,buttonStates:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
export const ButtonSizesAndStates = defineComponent({
    "name": "ButtonSizesAndStates",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Button, {
                "size": "sm"
            }, {
                "default": () => [
                    "小号按钮"
                ]
            }),
            vnode(Button, {
                "size": "md"
            }, {
                "default": () => [
                    "默认尺寸"
                ]
            }),
            vnode(Button, {
                "size": "lg",
                "variant": "primary"
            }, {
                "default": () => [
                    "主要操作"
                ]
            }),
            vnode(Button, {
                "loading": true,
                "variant": "primary"
            }, {
                "default": () => [
                    "正在保存"
                ]
            }),
            vnode(Button, {
                "disabled": true
            }, {
                "default": () => [
                    "暂不可用"
                ]
            })
        ]));
    }
});
`,buttonLoading:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
export const SaveSettingsButton = defineComponent({
    "name": "SaveSettingsButton",
    "props": [],
    "setup": (props, { slots }) => {
        const loading = vueRef(false);
        const setLoading = refSetter(loading);
        async function saveSettings() {
            setLoading(true);
            try {
                await new Promise((resolve: (value: unknown) => void) => window.setTimeout(resolve, 1200));
            }
            finally {
                setLoading(false);
            }
        }
        return () => (vnode(Button, {
            "variant": "primary",
            "loading": loading.value,
            "onClick": saveSettings
        }, {
            "default": () => [
                "保存设置"
            ]
        }));
    }
});
`,inputs:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Input } from "atelier-ui-vue/input";
export const ProjectFields = defineComponent({
    "name": "ProjectFields",
    "props": [],
    "setup": (props, { slots }) => {
        const query = vueRef('');
        const setQuery = refSetter(query);
        return () => (vnode("div", {}, [
            vnode(Input, {
                "label": "项目名称",
                "placeholder": "请输入项目名称"
            }, {}),
            vnode(Input, {
                "label": "搜索成员",
                "placeholder": "按姓名或邮箱搜索",
                "clearable": true,
                "modelValue": query.value,
                "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setQuery(event.target.value)
            }, {
                "prefix": () => vnode("span", {
                    "aria-hidden": "true"
                }, [
                    "⌕"
                ])
            }),
            vnode(Input, {
                "label": "工作邮箱",
                "type": "email",
                "placeholder": "name@company.com",
                "error": "请输入有效的邮箱地址"
            }, {}),
            vnode(Input, {
                "label": "只读字段",
                "modelValue": "workspace-id-1842",
                "readOnly": true,
                "hint": "此字段由系统自动生成"
            }, {})
        ]));
    }
});
`,textarea:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Textarea } from "atelier-ui-vue/textarea";
export const ProjectDescription = defineComponent({
    "name": "ProjectDescription",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Textarea, {
            "label": "项目简介",
            "placeholder": "描述一下这个项目…",
            "rows": 4,
            "hint": "简单介绍项目目标和团队协作方式"
        }, {}));
    }
});
`,checkbox:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Checkbox, CheckboxGroup } from "atelier-ui-vue/checkbox";
export const NotificationPreferences = defineComponent({
    "name": "NotificationPreferences",
    "props": [],
    "setup": (props, { slots }) => {
        const updatesEnabled = vueRef(true);
        const setUpdatesEnabled = refSetter(updatesEnabled);
        const topics = vueRef(['design']);
        const setTopics = refSetter(topics);
        return () => (vnode("div", {}, [
            vnode(Checkbox, {
                "modelValue": updatesEnabled.value,
                "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setUpdatesEnabled(event.target.checked)
            }, {
                "default": () => [
                    "接收产品更新"
                ]
            }),
            vnode(CheckboxGroup, {
                "options": topicOptions,
                "modelValue": topics.value,
                "onChange": setTopics
            }, {}),
            vnode("p", {}, [
                "已选择：",
                topics.value.join('、') || '无'
            ])
        ]));
    }
});
const topicOptions = [
    { label: '产品设计', value: 'design' },
    { label: '工程实践', value: 'engineering' },
    { label: '团队管理', value: 'team' },
];
`,radio:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { RadioGroup } from "atelier-ui-vue/radio";
export const WorkspaceRolePicker = defineComponent({
    "name": "WorkspaceRolePicker",
    "props": [],
    "setup": (props, { slots }) => {
        const role = vueRef('member');
        const setRole = refSetter(role);
        return () => (vnode("div", {}, [
            vnode(RadioGroup, {
                "name": "workspace-role",
                "options": roles,
                "modelValue": role.value,
                "onChange": setRole
            }, {}),
            vnode("p", {}, [
                "当前角色：",
                role.value
            ])
        ]));
    }
});
const roles = [
    { label: '管理员', value: 'admin' },
    { label: '成员', value: 'member' },
    { label: '访客', value: 'guest' },
];
`,switch:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Switch } from "atelier-ui-vue/switch";
export const ProductUpdatesSwitch = defineComponent({
    "name": "ProductUpdatesSwitch",
    "props": [],
    "setup": (props, { slots }) => {
        const enabled = vueRef(true);
        const setEnabled = refSetter(enabled);
        return () => (vnode("label", {}, [
            vnode("span", {}, [
                "开启产品更新"
            ]),
            vnode(Switch, {
                "modelValue": enabled.value,
                "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setEnabled(event.target.checked)
            }, {
                "checked": () => "开",
                "unchecked": () => "关"
            })
        ]));
    }
});
`,modal:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Modal } from "atelier-ui-vue/modal";
export const InviteMember = defineComponent({
    "name": "InviteMember",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        const email = vueRef('');
        const setEmail = refSetter(email);
        async function sendInvitation() {
            console.log('Invite:', email.value);
            setOpen(false);
        }
        return () => (vnode(Fragment, null, [
            vnode(Button, {
                "variant": "primary",
                "onClick": () => setOpen(true)
            }, {
                "default": () => [
                    "邀请成员"
                ]
            }),
            vnode(Modal, {
                "open": open.value,
                "title": "邀请团队成员",
                "onClose": () => setOpen(false),
                "onOk": sendInvitation
            }, {
                "default": () => [
                    vnode(Input, {
                        "label": "邮箱地址",
                        "type": "email",
                        "placeholder": "name@company.com",
                        "modelValue": email.value,
                        "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setEmail(event.target.value)
                    }, {})
                ]
            })
        ]));
    }
});
`,confirm:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Modal } from "atelier-ui-vue/modal";
export const DeleteProjectButton = defineComponent({
    "name": "DeleteProjectButton",
    "props": [],
    "setup": (props, { slots }) => {
        function deleteProject() {
            console.log('Project deleted');
        }
        function confirmDelete() {
            Modal.confirm({
                title: '删除这个项目？',
                content: '此操作无法撤销。',
                danger: true,
                onOk: deleteProject,
            });
        }
        return () => vnode(Button, {
            "variant": "danger",
            "onClick": confirmDelete
        }, {
            "default": () => [
                "删除项目"
            ]
        });
    }
});
`,table:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { TableChange } from 'atelier-ui-vue';
import { Table, type TableColumn } from "atelier-ui-vue/table";
type Project = {
    id: string;
    name: string;
    owner: string;
    status: string;
    members: number;
};
export const ProjectTable = defineComponent({
    "name": "ProjectTable",
    "props": [],
    "setup": (props, { slots }) => {
        const selectedRowKeys = vueRef<(string | number)[]>([]);
        const setSelectedRowKeys = refSetter(selectedRowKeys);
        return () => (vnode(Table, {
            "rowKey": "id",
            "columns": columns,
            "dataSource": projects,
            "rowSelection": { "selectedRowKeys": selectedRowKeys.value, onChange: setSelectedRowKeys },
            "onChange": (change: TableChange) => console.log('Table change:', change)
        }, {}));
    }
});
const projects: Project[] = [
    { id: 'p-01', name: '品牌视觉升级', owner: '林知夏', status: '进行中', members: 8 },
    { id: 'p-02', name: '移动端体验优化', owner: '陈一川', status: '评审中', members: 5 },
    { id: 'p-03', name: '秋季产品发布', owner: '周禾', status: '已完成', members: 12 },
];
const columns: TableColumn<Project>[] = [
    { key: 'name', title: '项目名称', dataIndex: 'name', sorter: true },
    { key: 'owner', title: '负责人', dataIndex: 'owner' },
    { key: 'status', title: '状态', dataIndex: 'status' },
    { key: 'members', title: '成员', dataIndex: 'members', align: 'center' },
];
`,serverTable:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Table, type TableChange, type TableColumn } from "atelier-ui-vue/table";
type Project = {
    id: string;
    name: string;
    owner: string;
    status: string;
};
export const ServerProjectTable = defineComponent({
    "name": "ServerProjectTable",
    "props": [],
    "setup": (props, { slots }) => {
        const page = vueRef(1);
        const setPage = refSetter(page);
        const pageData = vueRef(allProjects.slice(0, 10));
        const setPageData = refSetter(pageData);
        const loading = vueRef(false);
        const setLoading = refSetter(loading);
        async function handleTableChange(change: TableChange) {
            setLoading(true);
            setPage(change.page);
            try {
                setPageData(await requestProjects(change));
            }
            finally {
                setLoading(false);
            }
        }
        return () => (vnode(Table, {
            "mode": "server",
            "rowKey": "id",
            "columns": columns,
            "dataSource": pageData.value,
            "currentPage": page.value,
            "total": allProjects.length,
            "pageSize": 10,
            "loading": loading.value,
            "onChange": handleTableChange
        }, {}));
    }
});
const allProjects: Project[] = Array.from({ length: 42 }, (_: unknown, index: number) => ({
    id: String(index + 1),
    name: '项目 ' + (index + 1),
    owner: index % 2 === 0 ? '林知夏' : '陈一川',
    status: index % 2 === 0 ? '进行中' : '已完成',
}));
async function requestProjects(change: TableChange) {
    await new Promise((resolve: (value: unknown) => void) => window.setTimeout(resolve, 250));
    const start = (change.page - 1) * change.pageSize;
    return allProjects.slice(start, start + change.pageSize);
}
const columns: TableColumn<Project>[] = [
    { key: 'name', title: '项目名称', dataIndex: 'name', sorter: true },
    { key: 'owner', title: '负责人', dataIndex: 'owner' },
    { key: 'status', title: '状态', dataIndex: 'status' },
];
`,alert:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Alert } from "atelier-ui-vue/alert";
export const WorkspaceNotice = defineComponent({
    "name": "WorkspaceNotice",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Alert, {
                "variant": "info",
                "title": "即将发布"
            }, {
                "default": () => [
                    "项目成员会收到一封更新通知。"
                ]
            }),
            vnode(Alert, {
                "variant": "success",
                "title": "更改已保存",
                "closable": true
            }, {
                "default": () => [
                    "你的工作区信息已更新。"
                ]
            }),
            vnode(Alert, {
                "variant": "warning",
                "title": "存储空间不足"
            }, {
                "default": () => [
                    "请清理文件或升级套餐后继续上传。"
                ]
            }),
            vnode(Alert, {
                "variant": "error",
                "title": "保存失败"
            }, {
                "default": () => [
                    "网络连接中断，请重试。"
                ]
            })
        ]));
    }
});
`,tag:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Tag } from "atelier-ui-vue/tag";
export const ProjectTags = defineComponent({
    "name": "ProjectTags",
    "props": [],
    "setup": (props, { slots }) => {
        const showDesignTag = vueRef(true);
        const setShowDesignTag = refSetter(showDesignTag);
        return () => (vnode("div", {}, [
            vnode(Tag, {
                "variant": "primary"
            }, {
                "default": () => [
                    "设计中"
                ]
            }),
            vnode(Tag, {
                "variant": "success"
            }, {
                "default": () => [
                    "已发布"
                ]
            }),
            vnode(Tag, {
                "variant": "warning"
            }, {
                "default": () => [
                    "待审核"
                ]
            }),
            vnode(Tag, {
                "variant": "danger"
            }, {
                "default": () => [
                    "已阻塞"
                ]
            }),
            showDesignTag.value && (vnode(Tag, {
                "closable": true,
                "onClose": () => setShowDesignTag(false)
            }, {
                "default": () => [
                    "可移除标签"
                ]
            }))
        ]));
    }
});
`,avatar:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
export const TeamAvatars = defineComponent({
    "name": "TeamAvatars",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Avatar, {
                "name": "林知夏",
                "size": "sm"
            }, {}),
            vnode(Avatar, {
                "name": "陈一川"
            }, {}),
            vnode(Avatar, {
                "name": "周禾",
                "size": "lg"
            }, {})
        ]));
    }
});
`,tooltip:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Tooltip } from "atelier-ui-vue/tooltip";
export const HelpTooltip = defineComponent({
    "name": "HelpTooltip",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Tooltip, {
            "title": "保存后，所有工作区成员都能看到更新。",
            "placement": "top"
        }, {
            "default": () => [
                vnode(Button, {
                    "variant": "secondary"
                }, {
                    "default": () => [
                        "保存帮助"
                    ]
                })
            ]
        }));
    }
});
`,badge:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Badge } from "atelier-ui-vue/badge";
import { Button } from "atelier-ui-vue/button";
export const NotificationBadge = defineComponent({
    "name": "NotificationBadge",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Badge, {
                "count": 5
            }, {
                "default": () => [
                    vnode(Avatar, {
                        "name": "林知夏"
                    }, {})
                ]
            }),
            vnode(Badge, {
                "count": 128,
                "overflowCount": 99
            }, {
                "default": () => [
                    vnode(Button, {}, {
                        "default": () => [
                            "通知"
                        ]
                    })
                ]
            }),
            vnode(Badge, {
                "status": "success",
                "text": "项目运行正常"
            }, {})
        ]));
    }
});
`,breadcrumb:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Breadcrumb } from "atelier-ui-vue/breadcrumb";
export const ProjectBreadcrumb = defineComponent({
    "name": "ProjectBreadcrumb",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Breadcrumb, {
            "items": [
                { title: '工作区', href: '/' },
                { title: '项目列表', href: '/projects' },
                { title: '品牌视觉升级' },
            ]
        }, {}));
    }
});
`,breadcrumbCustom:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Breadcrumb } from "atelier-ui-vue/breadcrumb";
export const CustomBreadcrumb = defineComponent({
    "name": "CustomBreadcrumb",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Breadcrumb, {
            "separator": "›",
            "items": [
                { title: '设计团队' },
                { title: '品牌项目' },
                { title: '视觉规范' },
            ]
        }, {}));
    }
});
`,divider:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Divider } from "atelier-ui-vue/divider";
export const ContentDivider = defineComponent({
    "name": "ContentDivider",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("section", {}, [
            vnode("p", {}, [
                "项目概览"
            ]),
            vnode(Divider, {
                "orientation": "horizontal"
            }, {}),
            vnode("p", {}, [
                "成员与权限"
            ]),
            vnode(Divider, {
                "orientation": "vertical"
            }, {}),
            vnode("span", {}, [
                "最近更新"
            ])
        ]));
    }
});
`,dividerVertical:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Divider } from "atelier-ui-vue/divider";
export const InlineDivider = defineComponent({
    "name": "InlineDivider",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode("span", {}, [
                "项目"
            ]),
            vnode(Divider, {
                "orientation": "vertical"
            }, {}),
            vnode("span", {}, [
                "成员"
            ]),
            vnode(Divider, {
                "orientation": "vertical",
                "dashed": true
            }, {}),
            vnode("span", {}, [
                "设置"
            ])
        ]));
    }
});
`,empty:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Empty } from "atelier-ui-vue/empty";
export const EmptyProjects = defineComponent({
    "name": "EmptyProjects",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Empty, {
            "description": "还没有项目"
        }, {
            "default": () => [
                vnode(Button, {
                    "variant": "primary"
                }, {
                    "default": () => [
                        "创建第一个项目"
                    ]
                })
            ]
        }));
    }
});
`,emptySearch:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Empty } from "atelier-ui-vue/empty";
export const EmptySearchResults = defineComponent({
    "name": "EmptySearchResults",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Empty, {
            "description": "没有找到符合条件的结果"
        }, {});
    }
});
`,pagination:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Pagination } from "atelier-ui-vue/pagination";
export const ProjectPagination = defineComponent({
    "name": "ProjectPagination",
    "props": [],
    "setup": (props, { slots }) => {
        const page = vueRef(1);
        const setPage = refSetter(page);
        const pageSize = vueRef(10);
        const setPageSize = refSetter(pageSize);
        return () => (vnode(Pagination, {
            "current": page.value,
            "pageSize": pageSize.value,
            "total": 86,
            "showSizeChanger": true,
            "onChange": (nextPage: number, nextPageSize: number) => {
                setPage(nextPage);
                setPageSize(nextPageSize);
            }
        }, {}));
    }
});
`,progress:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Progress } from "atelier-ui-vue/progress";
export const UploadProgress = defineComponent({
    "name": "UploadProgress",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Progress, {
                "percent": 68,
                "status": "active",
                "label": "上传中 68%"
            }, {}),
            vnode(Progress, {
                "percent": 100
            }, {}),
            vnode(Progress, {
                "percent": 42,
                "status": "exception"
            }, {})
        ]));
    }
});
`,skeleton:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Skeleton } from "atelier-ui-vue/skeleton";
export const ProjectCardPlaceholder = defineComponent({
    "name": "ProjectCardPlaceholder",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Skeleton, {
            "active": true,
            "avatar": true,
            "title": true,
            "paragraph": { rows: 3 }
        }, {});
    }
});
`,skeletonSimple:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Skeleton } from "atelier-ui-vue/skeleton";
export const CompactPlaceholder = defineComponent({
    "name": "CompactPlaceholder",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Skeleton, {
            "title": false,
            "paragraph": { rows: 2 }
        }, {});
    }
});
`,spin:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Spin } from "atelier-ui-vue/spin";
export const LoadingProject = defineComponent({
    "name": "LoadingProject",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Spin, {
            "spinning": true,
            "tip": "正在加载项目…"
        }, {
            "default": () => [
                vnode("section", {
                    "style": { minHeight: 120 }
                }, [
                    "项目内容加载完成后会显示在这里。"
                ])
            ]
        }));
    }
});
`,spinSizes:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Spin } from "atelier-ui-vue/spin";
export const LoadingIndicators = defineComponent({
    "name": "LoadingIndicators",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Spin, {
                "size": "sm"
            }, {}),
            vnode(Spin, {
                "tip": "正在加载项目…"
            }, {}),
            vnode(Spin, {
                "size": "lg"
            }, {})
        ]));
    }
});
`,spinContent:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Spin } from "atelier-ui-vue/spin";
export const LoadingMembers = defineComponent({
    "name": "LoadingMembers",
    "props": [],
    "setup": (props, { slots }) => {
        const spinning = vueRef(true);
        const setSpinning = refSetter(spinning);
        return () => (vnode("div", {}, [
            vnode(Spin, {
                "spinning": spinning.value,
                "tip": "正在同步成员…"
            }, {
                "default": () => [
                    vnode("section", {
                        "style": { minHeight: 120 }
                    }, [
                        "项目成员：林知夏、陈一川、周禾"
                    ])
                ]
            }),
            vnode(Button, {
                "onClick": () => setSpinning((value: boolean) => !value)
            }, {
                "default": () => [
                    "切换加载状态"
                ]
            })
        ]));
    }
});
`,tabs:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Tabs } from "atelier-ui-vue/tabs";
export const ProjectTabs = defineComponent({
    "name": "ProjectTabs",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Tabs, {
            "defaultActiveKey": "overview",
            "items": [
                { key: 'overview', label: '概览', children: '项目进度和关键指标。' },
                { key: 'members', label: '成员', children: '管理项目成员与权限。' },
                { key: 'activity', label: '动态', children: '查看项目最近的变更。' },
            ]
        }, {}));
    }
});
`,card:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Card } from "atelier-ui-vue/card";
export const ProjectCard = defineComponent({
    "name": "ProjectCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Card, {
                "title": "品牌视觉升级",
                "hoverable": true
            }, {
                "extra": () => vnode(Button, {
                    "variant": "tertiary"
                }, {
                    "default": () => [
                        "查看详情"
                    ]
                }),
                "default": () => [
                    vnode("p", {}, [
                        "正在为新一季产品更新品牌视觉与设计规范。"
                    ]),
                    vnode("span", {}, [
                        "最近更新 · 3 分钟前"
                    ])
                ]
            }),
            vnode(Card, {
                "title": "快速提示",
                "bordered": false
            }, {
                "default": () => [
                    "卡片可以按需关闭边框，适合嵌入分组内容。"
                ]
            })
        ]));
    }
});
`,descriptions:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Descriptions } from "atelier-ui-vue/descriptions";
export const ProjectDetails = defineComponent({
    "name": "ProjectDetails",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Descriptions, {
            "title": "项目详情",
            "bordered": true,
            "column": 2,
            "items": [
                { key: 'name', label: '项目名称', children: '品牌视觉升级' },
                { key: 'owner', label: '负责人', children: '林知夏' },
                { key: 'status', label: '项目状态', children: '进行中' },
                { key: 'updated', label: '最近更新', children: '3 分钟前' },
            ]
        }, {}));
    }
});
`,steps:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Steps } from "atelier-ui-vue/steps";
export const WorkspaceSetup = defineComponent({
    "name": "WorkspaceSetup",
    "props": [],
    "setup": (props, { slots }) => {
        const current = vueRef(1);
        const setCurrent = refSetter(current);
        return () => (vnode("div", {}, [
            vnode(Steps, {
                "current": current.value,
                "onChange": setCurrent,
                "items": [
                    { title: '创建工作区', description: '填写基本信息' },
                    { title: '邀请成员', description: '与团队协作' },
                    { title: '完成设置', description: '开始使用' },
                ]
            }, {}),
            vnode(Button, {
                "onClick": () => setCurrent((step: number) => (step + 1) % 3)
            }, {
                "default": () => [
                    "下一步"
                ]
            })
        ]));
    }
});
`,timeline:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Timeline } from "atelier-ui-vue/timeline";
export const ProjectActivity = defineComponent({
    "name": "ProjectActivity",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Timeline, {
            "items": [
                { key: 'created', label: '09:30', content: '项目已创建' },
                { key: 'invited', label: '10:15', content: '林知夏邀请了 3 位成员' },
                { key: 'updated', label: '11:20', content: '更新了项目视觉规范' },
            ],
            "pending": "等待下一次更新"
        }, {}));
    }
});
`,collapse:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Collapse } from "atelier-ui-vue/collapse";
export const ProjectSettings = defineComponent({
    "name": "ProjectSettings",
    "props": [],
    "setup": (props, { slots }) => {
        const activeKey = vueRef('members');
        const setActiveKey = refSetter(activeKey);
        return () => (vnode(Collapse, {
            "accordion": true,
            "activeKey": activeKey.value,
            "onChange": (key: string | string[]) => setActiveKey(String(key)),
            "items": [
                { key: 'members', title: '成员与权限', children: '管理工作区成员的访问级别。' },
                { key: 'notifications', title: '通知设置', children: '选择项目更新的通知方式。' },
                { key: 'archive', title: '归档项目', children: '归档后项目会从活跃列表中移除。' },
            ]
        }, {}));
    }
});
`,datePicker:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { DatePicker } from "atelier-ui-vue/date-picker";
export const ReleaseDate = defineComponent({
    "name": "ReleaseDate",
    "props": [],
    "setup": (props, { slots }) => {
        const date = vueRef('2026-11-15');
        const setDate = refSetter(date);
        return () => (vnode("div", {}, [
            vnode(DatePicker, {
                "label": "预计发布日期",
                "hint": "选择一个工作日作为目标日期",
                "modelValue": date.value,
                "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setDate(event.target.value)
            }, {}),
            vnode(DatePicker, {
                "label": "只读日期",
                "defaultValue": "2026-10-27",
                "disabled": true
            }, {})
        ]));
    }
});
`,upload:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Upload } from "atelier-ui-vue/upload";
export const ProjectFiles = defineComponent({
    "name": "ProjectFiles",
    "props": [],
    "setup": (props, { slots }) => {
        const fileNames = vueRef<string[]>([]);
        const setFileNames = refSetter(fileNames);
        return () => (vnode("div", {}, [
            vnode(Upload, {
                "accept": ".pdf,.png,.jpg",
                "multiple": true,
                "onChange": (files: File[]) => setFileNames(files.map((file: File) => file.name))
            }, {}),
            vnode("p", {}, [
                fileNames.value.length ? '已选择 ' + fileNames.value.length + ' 个文件' : '选择的文件仅保存在当前演示状态中'
            ])
        ]));
    }
});
`,drawer:`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Descriptions } from "atelier-ui-vue/descriptions";
import { Drawer } from "atelier-ui-vue/drawer";
export const ProjectDrawer = defineComponent({
    "name": "ProjectDrawer",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        return () => (vnode(Fragment, null, [
            vnode(Button, {
                "variant": "primary",
                "onClick": () => setOpen(true)
            }, {
                "default": () => [
                    "查看项目详情"
                ]
            }),
            vnode(Drawer, {
                "open": open.value,
                "title": "项目详情",
                "onClose": () => setOpen(false)
            }, {
                "default": () => [
                    vnode("p", {}, [
                        "项目成员、访问权限和最近动态会显示在这里。"
                    ]),
                    vnode(Descriptions, {
                        "column": 1,
                        "items": [
                            { key: 'owner', label: '负责人', children: '林知夏' },
                            { key: 'status', label: '状态', children: '进行中' },
                        ]
                    }, {})
                ]
            })
        ]));
    }
});
`},$=[{id:`p-01`,name:`品牌视觉升级`,owner:`林知夏`,status:`进行中`,updated:`3 分钟前`,members:8},{id:`p-02`,name:`移动端体验优化`,owner:`陈一川`,status:`评审中`,updated:`28 分钟前`,members:5},{id:`p-03`,name:`秋季产品发布`,owner:`周禾`,status:`已完成`,updated:`昨天`,members:12},{id:`p-04`,name:`客户洞察研究`,owner:`许安然`,status:`进行中`,updated:`昨天`,members:4},{id:`p-05`,name:`设计系统 2.0`,owner:`顾清`,status:`评审中`,updated:`2 天前`,members:9},{id:`p-06`,name:`增长落地页`,owner:`沈星野`,status:`已完成`,updated:`3 天前`,members:3},{id:`p-07`,name:`合作伙伴门户`,owner:`白予`,status:`进行中`,updated:`4 天前`,members:7},{id:`p-08`,name:`数据看板改版`,owner:`叶知秋`,status:`已完成`,updated:`上周`,members:6},{id:`p-09`,name:`帮助中心重构`,owner:`唐木`,status:`评审中`,updated:`上周`,members:4}],Bn=[{key:`name`,title:`项目名称`,dataIndex:`name`,sorter:!0,render:e=>H(`span`,{class:`project-cell`},[H(`i`,{class:`project-cell__icon`},[`✳`]),H(`b`,{},[String(e)])])},{key:`owner`,title:`负责人`,dataIndex:`owner`},{key:`status`,title:`状态`,dataIndex:`status`,filters:[{label:`进行中`,value:`进行中`},{label:`评审中`,value:`评审中`},{label:`已完成`,value:`已完成`}],onFilter:(e,t)=>t.status===e,render:e=>H(`span`,{class:`status-pill status-pill--${e===`进行中`?`active`:e===`评审中`?`review`:`done`}`},[H(`i`,{},[]),String(e)])},{key:`members`,title:`成员`,dataIndex:`members`,align:`center`},{key:`updated`,title:`最近更新`,dataIndex:`updated`,sorter:!0}];export{vn as AlertPage,Z as ApiCard,bn as AvatarPage,Sn as BadgePage,Cn as BreadcrumbPage,mn as ButtonPage,jn as CardPage,Fn as CollapsePage,In as DatePickerPage,Mn as DescriptionsPage,wn as DividerPage,Rn as DrawerPage,Tn as EmptyPage,_n as FeedbackPage,pn as FormPage,hn as InputPage,En as PaginationPage,Dn as ProgressPage,gn as SelectionPage,On as SkeletonPage,kn as SpinPage,Nn as StepsPage,zn as TablePage,An as TabsPage,yn as TagPage,Pn as TimelinePage,xn as TooltipPage,Ln as UploadPage};