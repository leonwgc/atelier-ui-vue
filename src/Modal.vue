<script setup lang="ts">
import './styles/theme.css';
import './styles/modal.css';
import { ref } from 'vue';
import { useDialog } from './internal/dialog';
import Button from './Button.vue';
const props = withDefaults(defineProps<{ open: boolean; title?: string; description?: string; width?: number | string; placement?: 'left' | 'right'; maskClosable?: boolean; closeOnEscape?: boolean; okText?: string; cancelText?: string; confirmLoading?: boolean; footer?: boolean }>(), { width: 520, placement: 'right', maskClosable: true, closeOnEscape: true, okText: '确定', cancelText: '取消', footer: true });
const panel = ref<HTMLElement | null>(null);
const emit = defineEmits<{ 'update:open': [value: boolean]; close: []; ok: [] }>();
function close() { emit('update:open', false); emit('close'); }
useDialog(() => props.open, panel, close, () => props.closeOnEscape);
</script>

<template>
<Teleport to="body"><div v-if="open" class="at-modal-mask" @mousedown.self="maskClosable && close()"><div ref="panel" role="dialog" aria-modal="true" :aria-label="title ?? '对话框'" tabindex="-1" :class="['at-modal', undefined]" :style="{ width: typeof width === 'number' ? `${width}px` : width }"><div class="at-modal__header"><div><h2 class="at-modal__title"><slot name="title">{{ title }}</slot></h2><p v-if="description" class="at-modal__description">{{ description }}</p></div><button type="button" class="at-modal__close" aria-label="关闭" @click="close">×</button></div><div class="at-modal__body"><slot /></div><div v-if="footer" class="at-modal__footer"><slot name="footer"><Button @click="close">{{ cancelText }}</Button><Button variant="primary" :loading="confirmLoading" @click="emit('ok')">{{ okText }}</Button></slot></div></div></div></Teleport>
</template>
