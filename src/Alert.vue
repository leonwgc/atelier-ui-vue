<script setup lang="ts">
import './styles/theme.css';
import './styles/alert.css';
import { ref } from 'vue';
withDefaults(defineProps<{ variant?: 'info' | 'success' | 'warning' | 'error'; title?: string; closable?: boolean }>(), { variant: 'info' });
const visible = ref(true);
const emit = defineEmits<{ close: [] }>();
const icons = { info: 'i', success: '✓', warning: '!', error: '×' };
</script>

<template>
<div v-if="visible" :class="['at-alert', `at-alert--${variant}`]" :role="variant === 'error' ? 'alert' : 'status'"><span class="at-alert__icon" aria-hidden="true">{{ icons[variant] }}</span><div class="at-alert__content"><strong v-if="title || $slots.title" class="at-alert__title"><slot name="title">{{ title }}</slot></strong><div v-if="$slots.default" class="at-alert__description"><slot /></div></div><button v-if="closable" type="button" class="at-alert__close" aria-label="关闭提示" @click="visible = false; emit('close')">×</button></div>
</template>
