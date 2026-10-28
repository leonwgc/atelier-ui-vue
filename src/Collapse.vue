<script setup lang="ts">
import './styles/theme.css';
import './styles/collapse.css';
import { ref, computed } from 'vue';
const props = defineProps<{ items: { key: string; title: string; children?: string; disabled?: boolean }[]; accordion?: boolean; activeKey?: string | string[]; defaultActiveKey?: string | string[] }>();
const inner = ref<string | string[]>(props.defaultActiveKey ?? (props.accordion ? '' : []));
const selected = computed(() => { const value = props.activeKey ?? inner.value; return Array.isArray(value) ? value : value ? [value] : []; });
const emit = defineEmits<{ 'update:activeKey': [value: string | string[]]; change: [value: string | string[]] }>();
function toggle(key: string) { const keys = selected.value.includes(key) ? selected.value.filter(value => value !== key) : props.accordion ? [key] : [...selected.value, key]; const next = props.accordion ? keys[0] ?? '' : keys; if (props.activeKey === undefined) inner.value = next; emit('update:activeKey', next); emit('change', next); }
</script>

<template>
<div class="at-collapse"><section v-for="item in items" :key="item.key" class="at-collapse__item"><h3 class="at-collapse__heading"><button type="button" class="at-collapse__trigger" :aria-expanded="selected.includes(item.key)" :disabled="item.disabled" @click="toggle(item.key)"><span><slot name="title" :item="item">{{ item.title }}</slot></span><span class="at-collapse__chevron" aria-hidden="true">⌄</span></button></h3><div v-if="selected.includes(item.key)" class="at-collapse__panel" role="region" :aria-label="item.title"><slot :item="item">{{ item.children }}</slot></div></section></div>
</template>
