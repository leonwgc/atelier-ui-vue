<script setup lang="ts">
import './styles/theme.css';
import './styles/popconfirm.css';
import { ref } from 'vue';
import Overlay from './internal/Overlay.vue';
import Button from './Button.vue';
import type { PopupPlacement } from './internal/floating';
const props = withDefaults(defineProps<{ title?: string; description?: string; open?: boolean; defaultOpen?: boolean; disabled?: boolean; placement?: PopupPlacement; okText?: string; cancelText?: string; okType?: 'primary' | 'danger'; showCancel?: boolean; errorText?: string; onConfirm?: (event: MouseEvent) => void | Promise<void> }>(), { placement: 'top', okText: '确定', cancelText: '取消', okType: 'primary', showCancel: true, errorText: '操作失败，请重试。' });
const pending = ref(false); const failed = ref(false); const emit = defineEmits<{ 'update:open': [value: boolean]; cancel: [event: MouseEvent] }>();
async function confirm(event: MouseEvent, close: () => void) { if (pending.value) return; pending.value = true; failed.value = false; try { await props.onConfirm?.(event); close(); } catch { failed.value = true; } finally { pending.value = false; } }
</script>

<template>
<Overlay class="at-popconfirm__trigger" :open="open" :default-open="defaultOpen" :disabled="disabled" :placement="placement" panel-class="at-popconfirm__panel" role="alertdialog" @update:open="emit('update:open', $event)"><slot /><template #content="{ close }"><div class="at-popconfirm__body"><span :class="['at-popconfirm__icon', { 'at-popconfirm__icon--danger': okType === 'danger' }]" aria-hidden="true"><slot name="icon">!</slot></span><div class="at-popconfirm__text"><strong class="at-popconfirm__title"><slot name="title">{{ title }}</slot></strong><span v-if="description" class="at-popconfirm__description">{{ description }}</span><span v-if="failed" class="at-popconfirm__error" role="alert">{{ errorText }}</span></div></div><div class="at-popconfirm__actions"><Button v-if="showCancel" size="sm" :disabled="pending" @click="emit('cancel', $event); close()">{{ cancelText }}</Button><Button size="sm" :variant="okType" :loading="pending" @click="confirm($event, close)">{{ okText }}</Button></div></template></Overlay>
</template>
