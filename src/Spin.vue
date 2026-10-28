<script setup lang="ts">
import './styles/theme.css';
import './styles/spin.css';
withDefaults(defineProps<{ spinning?: boolean; size?: 'sm' | 'md' | 'lg'; tip?: string }>(), { spinning: true, size: 'md' });
</script>

<template>
<div v-if="$slots.default || spinning" :class="$slots.default ? 'at-spin-container' : 'at-spin-standalone'" :aria-busy="spinning"><slot /><div v-if="spinning" :class="$slots.default ? 'at-spin-container__overlay' : undefined"><span :class="['at-spin', `at-spin--${size}`]" role="status" :aria-label="tip ?? '加载中'"><span /><span /><span /><span /></span><span v-if="tip" class="at-spin__tip">{{ tip }}</span></div></div>
</template>
