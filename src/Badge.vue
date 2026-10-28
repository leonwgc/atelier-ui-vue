<script setup lang="ts">
import './styles/theme.css';
import './styles/badge.css';
import { computed } from 'vue';
const props = withDefaults(defineProps<{ count?: number | string; dot?: boolean; overflowCount?: number; showZero?: boolean; status?: 'default' | 'success' | 'processing' | 'warning' | 'error'; text?: string }>(), { overflowCount: 99 });
const display = computed(() => typeof props.count === 'number' && props.count > props.overflowCount ? `${props.overflowCount}+` : props.count);
</script>

<template>
<span v-if="!$slots.default" class="at-badge__standalone"><i :class="['at-badge__status', `at-badge__status--${status ?? 'default'}`]" />{{ text ?? count }}</span><span v-else class="at-badge"><slot /><sup v-if="dot || (count != null && (showZero || typeof count !== 'number' || count > 0))" :class="['at-badge__count', status && `at-badge__count--${status}`, { 'at-badge__count--dot': dot }]" :aria-label="dot ? '有新消息' : `数量 ${display}`">{{ dot ? '' : display }}</sup></span>
</template>
