<script setup lang="ts">
import './styles/theme.css';
import './styles/progress.css';
import { computed } from 'vue';
const props = withDefaults(defineProps<{ percent: number; status?: 'normal' | 'active' | 'success' | 'exception'; showInfo?: boolean; strokeColor?: string; label?: string }>(), { showInfo: true });
const value = computed(() => Math.max(0, Math.min(100, props.percent)));
</script>

<template>
<div :class="['at-progress', `at-progress--${status ?? (value === 100 ? 'success' : 'normal')}`]"><div class="at-progress__track" role="progressbar" :aria-valuenow="value" :aria-valuemin="0" :aria-valuemax="100" :aria-label="label ?? '进度'"><span class="at-progress__bar" :style="{ width: `${value}%`, backgroundColor: strokeColor }" /></div><span v-if="showInfo" class="at-progress__info"><slot name="label">{{ label ?? `${value}%` }}</slot></span></div>
</template>
