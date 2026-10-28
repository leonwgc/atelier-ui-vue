import { defineComponent } from 'vue';
import type { PropType, VNodeChild } from 'vue';
export default defineComponent({ name: 'PopupContent', props: { render: Function as PropType<(menu: VNodeChild) => VNodeChild> }, setup(props, { slots }) { return () => { const menu = slots.default?.() ?? null; return props.render ? props.render(menu) : menu; }; } });
