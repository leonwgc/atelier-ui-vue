<script setup lang="ts">
import { ref, computed, provide } from 'vue';
import { imageGroupKey, type PreviewItem } from './internal/image'; import PreviewLayer from './internal/PreviewLayer.vue';
import './styles/theme.css'; import './styles/image.css';
const props = defineProps<{ items?: (string | { src: string; previewSrc?: string })[]; current?: number; visible?: boolean }>(); const emit = defineEmits<{ 'update:current': [value: number]; change: [value: number]; 'update:visible': [value: boolean] }>();
const registered = ref<PreviewItem[]>([]), inner = ref(0), innerOpen = ref(false); const items = computed(() => props.items?.map((item, index) => typeof item === 'string' ? { id: `item-${index}`, src: item } : { id: `item-${index}`, ...item }) ?? registered.value); const index = computed(() => Math.min(props.current ?? inner.value, Math.max(0, items.value.length - 1))); const opened = computed(() => props.visible ?? innerOpen.value);
function change(value: number) { if (props.current === undefined) inner.value = value; emit('update:current', value); emit('change', value); }
function setOpen(value: boolean) { if (props.visible === undefined) innerOpen.value = value; emit('update:visible', value); }
provide(imageGroupKey, { register(item) { const at = registered.value.findIndex(value => value.id === item.id); if (at < 0) registered.value.push(item); else registered.value[at] = item; return () => { registered.value = registered.value.filter(value => value.id !== item.id); }; }, open(id) { change(Math.max(0, registered.value.findIndex(item => item.id === id))); setOpen(true); } });
</script>
<template><slot /><PreviewLayer v-if="opened && items.length" :items="items" :index="index" @change="change" @close="setOpen(false)" /></template>
