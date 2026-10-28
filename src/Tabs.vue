<script setup lang="ts">
import RenderNode from './internal/RenderNode';
import './styles/theme.css';
import './styles/tabs.css';
import { computed, ref } from 'vue';
const props = defineProps<{ items: { key: string; label: import('vue').VNodeChild; disabled?: boolean; children?: import('vue').VNodeChild }[]; activeKey?: string; defaultActiveKey?: string }>();
const inner = ref(props.defaultActiveKey ?? props.items.find(item => !item.disabled)?.key);
const selected = computed(() => props.items.find(item => item.key === (props.activeKey ?? inner.value) && !item.disabled) ?? props.items.find(item => !item.disabled));
const root = ref<HTMLElement | null>(null);
const emit = defineEmits<{ 'update:activeKey': [key: string]; change: [key: string] }>();
function select(key: string) { if (props.activeKey === undefined) inner.value = key; emit('update:activeKey', key); emit('change', key); }
function keydown(event: KeyboardEvent) { if (!['Home', 'End', 'ArrowLeft', 'ArrowRight'].includes(event.key)) return; event.preventDefault(); const enabled = props.items.filter(item => !item.disabled); const index = enabled.findIndex(item => item.key === selected.value?.key); const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? enabled.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : enabled.length - 1)) % enabled.length; const next = enabled[nextIndex]; if (next) { select(next.key); root.value?.querySelectorAll<HTMLButtonElement>('[role=tab]:not(:disabled)')[nextIndex]?.focus(); } }
</script>

<template>
<div ref="root" class="at-tabs"><div class="at-tabs__list" role="tablist"><button v-for="item in items" :key="item.key" type="button" role="tab" class="at-tabs__tab" :aria-selected="item.key === selected?.key" :tabindex="item.key === selected?.key ? 0 : -1" :disabled="item.disabled" @click="select(item.key)" @keydown="keydown"><slot name="label" :item="item"><RenderNode :content="item.label" /></slot></button></div><div v-if="selected" role="tabpanel" class="at-tabs__panel" :aria-label="typeof selected.label === 'string' ? selected.label : '标签页内容'"><slot :item="selected"><RenderNode :content="selected.children" /></slot></div></div>
</template>
