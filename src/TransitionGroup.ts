import { defineComponent, h, cloneVNode, ref, Fragment } from 'vue';
import type { VNode } from 'vue';
import Transition from './Transition.vue';
import './styles/theme.css'; import './styles/transition.css';
function flatten(nodes: VNode[]): VNode[] { return nodes.flatMap(node => node.type === Fragment && Array.isArray(node.children) ? flatten(node.children as VNode[]) : [node]); }
export const TransitionGroup = defineComponent({ name: 'TransitionGroup', setup(_, { slots }) {
 let previous = new Map<string | number | symbol, VNode>(); const exiting = new Map<string | number | symbol, VNode>(); const version = ref(0);
 return () => { void version.value; const children = flatten(slots.default?.() ?? []); const current = new Map(children.filter(node => node.type === Transition && node.key !== null).map(node => [node.key!, node])); for (const [key, node] of previous) if (!current.has(key)) exiting.set(key, node); for (const key of current.keys()) exiting.delete(key); previous = current;
 const nodes = children.map(node => node.type === Transition ? cloneVNode(node, { in: true, appear: node.props?.appear ?? true }) : node);
 for (const [key, node] of exiting) nodes.push(cloneVNode(node, { key, in: false, appear: node.props?.appear ?? true, onExited: () => { exiting.delete(key); version.value++; } }, true));
 return h('div', { class: 'at-transition-group' }, nodes); };
} });
