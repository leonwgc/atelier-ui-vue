<script setup lang="ts">
import { ChevronRight, Check } from './internal/icons';
import { ref, computed, nextTick, defineComponent, h, useSlots } from 'vue';
import type { PropType } from 'vue';
import RenderNode from './internal/RenderNode';
import { flattenTree, conduct, descendants, type TreeNode, type TreeCheckInfo } from './tree-types';
import './styles/theme.css'; import './styles/tree.css';
const props = withDefaults(defineProps<{ treeData: TreeNode[]; checkable?: boolean; checkStrictly?: boolean; selectable?: boolean; multiple?: boolean; expandedKeys?: string[]; defaultExpandedKeys?: string[]; defaultExpandAll?: boolean; selectedKeys?: string[]; defaultSelectedKeys?: string[]; checkedKeys?: string[]; defaultCheckedKeys?: string[]; showLine?: boolean; showIcon?: boolean; filterValue?: string; loadData?: (node: TreeNode) => Promise<void>; expandAction?: 'click' | false; blockNode?: boolean; label?: string }>(), { selectable: true, filterValue: '', label: '树形控件' });
const emit = defineEmits<{ 'update:expandedKeys': [keys: string[]]; expand: [keys: string[], info: { expanded: boolean; node: TreeNode }]; 'update:selectedKeys': [keys: string[]]; select: [keys: string[], info: { selected: boolean; node: TreeNode }]; 'update:checkedKeys': [keys: string[]]; check: [keys: string[], info: TreeCheckInfo]; loadError: [error: unknown, node: TreeNode] }>();
const flat = computed(() => flattenTree(props.treeData)); const innerExpanded = ref(props.defaultExpandedKeys ?? (props.defaultExpandAll ? flat.value.filter(item => item.node.children?.length || item.node.isLeaf === false).map(item => item.node.key) : [])); const innerSelected = ref(props.defaultSelectedKeys ?? []), innerChecked = ref(props.defaultCheckedKeys ?? []), loading = ref<string[]>([]), focused = ref(''); const root = ref<HTMLElement | null>(null);
const selected = computed(() => props.selectedKeys ?? innerSelected.value); const rawChecked = computed(() => props.checkedKeys ?? innerChecked.value);
const expanded = computed(() => { const keys = new Set(props.expandedKeys ?? innerExpanded.value); if (props.filterValue) flat.value.filter(item => typeof item.node.title === 'string' && item.node.title.toLocaleLowerCase().includes(props.filterValue.toLocaleLowerCase())).forEach(item => { let parent = item.parent; while (parent) { keys.add(parent); parent = flat.value.find(item => item.node.key === parent)?.parent; } }); return [...keys]; });
const visible = computed(() => flat.value.filter(item => { let parent = item.parent; while (parent) { if (!expanded.value.includes(parent)) return false; parent = flat.value.find(item => item.node.key === parent)?.parent; } return true; })); const checks = computed(() => props.checkStrictly ? { checked: new Set(rawChecked.value), half: new Set<string>() } : conduct(props.treeData, new Set(rawChecked.value)));
function leaf(node: TreeNode) { return node.isLeaf ?? !node.children?.length; }
async function expand(node: TreeNode) { if (node.disabled || leaf(node)) return; const was = expanded.value.includes(node.key); const next = was ? expanded.value.filter(key => key !== node.key) : [...expanded.value, node.key]; if (props.expandedKeys === undefined) innerExpanded.value = next; emit('update:expandedKeys', next); emit('expand', next, { expanded: !was, node }); if (!was && props.loadData && !node.children?.length && !loading.value.includes(node.key)) { loading.value.push(node.key); try { await props.loadData(node); } catch (error) { emit('loadError', error, node); } finally { loading.value = loading.value.filter(key => key !== node.key); } } }
function select(node: TreeNode, event: MouseEvent | KeyboardEvent) { if (node.disabled || !props.selectable || node.selectable === false) return; const was = selected.value.includes(node.key), additive = props.multiple && (event.ctrlKey || event.metaKey || event.shiftKey); const next = was ? additive ? selected.value.filter(key => key !== node.key) : selected.value.length > 1 ? [node.key] : [] : additive ? [...selected.value, node.key] : [node.key]; if (props.selectedKeys === undefined) innerSelected.value = next; emit('update:selectedKeys', next); emit('select', next, { selected: !was, node }); }
function check(node: TreeNode) { if (node.disabled || node.disableCheckbox) return; const was = checks.value.checked.has(node.key); let next: string[]; if (props.checkStrictly) next = was ? rawChecked.value.filter(key => key !== node.key) : [...rawChecked.value, node.key]; else { const affected = new Set([node.key, ...descendants(node).filter(node => !node.disabled && !node.disableCheckbox).map(node => node.key)]); const keys = new Set(checks.value.checked); if (was) { affected.forEach(key => keys.delete(key)); let parent = flat.value.find(item => item.node.key === node.key)?.parent; while (parent) { keys.delete(parent); parent = flat.value.find(item => item.node.key === parent)?.parent; } } else affected.forEach(key => keys.add(key)); next = [...conduct(props.treeData, keys).checked]; } const result = props.checkStrictly ? { half: new Set<string>() } : conduct(props.treeData, new Set(next)); if (props.checkedKeys === undefined) innerChecked.value = next; emit('update:checkedKeys', next); emit('check', next, { checked: !was, node, halfCheckedKeys: [...result.half] }); }
async function key(event: KeyboardEvent, index: number) { const item = visible.value[index]; if (!item) return; let next = index; if (event.key === 'ArrowDown') next = Math.min(visible.value.length - 1, index + 1); else if (event.key === 'ArrowUp') next = Math.max(0, index - 1); else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = visible.value.length - 1; else if (event.key === 'ArrowRight') { if (!leaf(item.node) && !expanded.value.includes(item.node.key)) void expand(item.node); else next = Math.min(visible.value.length - 1, index + 1); } else if (event.key === 'ArrowLeft') { if (expanded.value.includes(item.node.key)) void expand(item.node); else next = Math.max(0, visible.value.findIndex(value => value.node.key === item.parent)); } else if (event.key === ' ') { if (props.checkable) check(item.node); else select(item.node, event); } else if (event.key === 'Enter') select(item.node, event); else return; event.stopPropagation(); event.preventDefault(); focused.value = visible.value[next]?.node.key ?? ''; await nextTick(); Array.from(root.value?.querySelectorAll<HTMLElement>('[role=treeitem]') ?? []).find(element => element.dataset.key === focused.value)?.focus(); }
const slots = useSlots();
function highlighted(title: string) {
  const query = props.filterValue;
  if (!query) return title;
  const nodes: import('vue').VNodeChild[] = [];
  let offset = 0, index = title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase());
  while (index >= 0) { nodes.push(title.slice(offset, index), h('mark', title.slice(index, index + query.length))); offset = index + query.length; index = title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase(), offset); }
  nodes.push(title.slice(offset)); return nodes;
}
const TreeBranch = defineComponent({
  name: 'AtelierTreeBranch',
  props: { nodes: { type: Array as PropType<TreeNode[]>, required: true }, depth: { type: Number, default: 0 }, ancestorsLast: { type: Array as PropType<boolean[]>, default: () => [] } },
  setup(branch) { return (): import('vue').VNode[] => branch.nodes.map((node, siblingIndex): import('vue').VNode => {
    const isLeaf = leaf(node), open = expanded.value.includes(node.key), isLast = siblingIndex === branch.nodes.length - 1;
    const canSelect = props.selectable && node.selectable !== false && !node.disabled;
    const canCheck = props.checkable && node.checkable !== false;
    const matched = !!props.filterValue && typeof node.title === 'string' && node.title.toLocaleLowerCase().includes(props.filterValue.toLocaleLowerCase());
    const icon = slots.icon?.({ node, expanded: open, leaf: isLeaf }) ?? node.icon;
    return h('li', {
      key: node.key, role: 'treeitem', 'aria-level': branch.depth + 1, 'aria-expanded': isLeaf ? undefined : open,
      'aria-selected': canSelect ? selected.value.includes(node.key) : undefined,
      'aria-checked': canCheck ? checks.value.half.has(node.key) ? 'mixed' : checks.value.checked.has(node.key) : undefined,
      'aria-disabled': node.disabled || undefined, 'data-key': node.key,
      tabindex: focused.value ? focused.value === node.key ? 0 : -1 : visible.value[0]?.node.key === node.key ? 0 : -1,
      class: ['at-tree__node', { 'at-tree__node--selected': selected.value.includes(node.key), 'at-tree__node--disabled': node.disabled, 'at-tree__node--leaf': isLeaf, 'at-tree__node--matched': matched }],
      style: { '--at-tree-level': branch.depth }, onFocus: (event: FocusEvent) => { event.stopPropagation(); focused.value = node.key; },
      onKeydown: (event: KeyboardEvent) => key(event, visible.value.findIndex(item => item.node.key === node.key)),
    }, [
      h('div', { class: 'at-tree__row', onClick: (event: MouseEvent) => { if (node.disabled) return; select(node, event); if (props.expandAction === 'click') void expand(node); } }, [
        ...(props.showLine ? branch.ancestorsLast.map(last => h('span', { class: ['at-tree__indent', { 'at-tree__indent--end': last }], 'aria-hidden': true })) : []),
        props.showLine && branch.depth > 0 ? h('span', { class: ['at-tree__connector', { 'at-tree__connector--last': isLast }], 'aria-hidden': true }) : null,
        h('button', { type: 'button', tabindex: -1, 'aria-hidden': isLeaf, 'aria-label': open ? '收起' : '展开', class: ['at-tree__switcher', { 'at-tree__switcher--leaf': isLeaf, 'at-tree__switcher--open': open, 'at-tree__switcher--loading': loading.value.includes(node.key) }], onClick: (event: MouseEvent) => { event.stopPropagation(); void expand(node); } }, [loading.value.includes(node.key) ? h('span', { class: 'at-tree__spinner' }) : isLeaf ? null : slots.switcherIcon?.({ node }) ?? h(ChevronRight, { size: 14 })]),
        canCheck ? h('span', { role: 'presentation', class: ['at-tree__checkbox', { 'at-tree__checkbox--checked': checks.value.checked.has(node.key), 'at-tree__checkbox--half': checks.value.half.has(node.key), 'at-tree__checkbox--disabled': node.disabled || node.disableCheckbox }], onClick: (event: MouseEvent) => { event.stopPropagation(); check(node); } }, [checks.value.checked.has(node.key) ? h(Check, { size: 12 }) : null]) : null,
        props.showIcon && icon ? h('span', { class: 'at-tree__icon' }, h(RenderNode, { content: icon })) : null,
        h('span', { class: ['at-tree__title', { 'at-tree__title--selectable': canSelect }] }, slots.title?.({ node }) ?? (typeof node.title === 'string' ? highlighted(node.title) : h(RenderNode, { content: node.title }))),
      ]),
      !isLeaf && node.children ? h('div', { class: 'at-tree__children', 'aria-hidden': !open, inert: !open ? '' : undefined }, [h('ul', { role: 'group', class: 'at-tree__group' }, [h(TreeBranch, { nodes: node.children, depth: branch.depth + 1, ancestorsLast: branch.depth === 0 ? [] : [...branch.ancestorsLast, isLast] })])]) : null,
    ]);
  }); },
});
</script>
<template><ul ref="root" :class="['at-tree', { 'at-tree--block': blockNode, 'at-tree--line': showLine }]" role="tree" :aria-label="label" :aria-multiselectable="multiple"><TreeBranch :nodes="treeData" /></ul></template>
