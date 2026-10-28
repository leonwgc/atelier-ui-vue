import { defineComponent, h, Fragment, type VNode } from 'vue';
import './styles/theme.css';
import './styles/stagger.css';
function flatten(nodes: VNode[]): VNode[] { return nodes.flatMap(node => node.type === Fragment && Array.isArray(node.children) ? flatten(node.children as VNode[]) : [node]); }
export const Stagger = defineComponent({
  name: 'Stagger', props: { staggerDelay: { type: Number, default: 70 }, duration: { type: Number, default: 420 }, itemClassName: String },
  setup(props, { slots }) { return () => h('div', { class: 'at-stagger' }, flatten(slots.default?.() ?? []).map((child, index) => h('div', { key: child.key ?? index, class: ['at-stagger__item', props.itemClassName], style: { '--at-stagger-delay': `${Math.max(0, index * props.staggerDelay)}ms`, '--at-stagger-duration': `${Math.max(0, props.duration)}ms` } }, [child]))); },
});
