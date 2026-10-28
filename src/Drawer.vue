<script setup lang="ts">
import './styles/theme.css';
import './styles/drawer.css';
import { ref } from 'vue';
import { useDialog } from './internal/dialog';
import Button from './Button.vue';
const props = withDefaults(defineProps<{ open: boolean; title?: string; description?: string; width?: number | string; placement?: 'left' | 'right'; maskClosable?: boolean; closeOnEscape?: boolean; okText?: string; cancelText?: string; confirmLoading?: boolean; footer?: boolean }>(), { width: 420, placement: 'right', maskClosable: true, closeOnEscape: true, okText: '确定', cancelText: '取消', footer: true });
const panel = ref<HTMLElement | null>(null);
const emit = defineEmits<{ 'update:open': [value: boolean]; close: []; ok: [] }>();
function close() { emit('update:open', false); emit('close'); }
useDialog(() => props.open, panel, close, () => props.closeOnEscape);
</script>

<template>
<Teleport to="body"><div v-if="open" class="at-drawer-mask" @mousedown.self="maskClosable && close()"><div ref="panel" role="dialog" aria-modal="true" :aria-label="title ?? '侧边抽屉'" tabindex="-1" :class="['at-drawer', `at-drawer--${placement}`]" :style="{ width: typeof width === 'number' ? `${width}px` : width }"><header class="at-drawer__header"><div><h2 class="at-drawer__title"><slot name="title">{{ title }}</slot></h2><p v-if="description" class="at-drawer__description">{{ description }}</p></div><button type="button" class="at-drawer__close" aria-label="关闭" @click="close">×</button></header><div class="at-drawer__body"><slot /></div></div></div></Teleport>
</template>
