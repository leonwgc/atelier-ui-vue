<script setup lang="ts">
import './styles/theme.css';
import './styles/statistic.css';
import { computed } from 'vue';
import type { CSSProperties } from 'vue';
import { formatStatistic } from './internal/statistic';
const props = withDefaults(defineProps<{ title?: string; value: number | string; precision?: number; groupSeparator?: string; decimalSeparator?: string; prefix?: string; suffix?: string; formatter?: (value: number | string) => string; loading?: boolean; valueStyle?: CSSProperties; trend?: 'up' | 'down'; trendLabel?: string; size?: 'sm' | 'md' | 'lg' }>(), { size: 'md' });
const formatted = computed(() => formatStatistic(props.value, props));
</script>

<template>
<div :class="['at-statistic', `at-statistic--${size}`, trend && `at-statistic--${trend}`]"><div v-if="title || $slots.title" class="at-statistic__title"><slot name="title">{{ title }}</slot></div><div v-if="loading" class="at-statistic__skeleton" aria-busy="true" aria-label="加载中" /><div v-else class="at-statistic__content" :style="valueStyle"><span v-if="prefix || $slots.prefix" class="at-statistic__prefix"><slot name="prefix">{{ prefix }}</slot></span><span v-if="trend" class="at-statistic__trend" :aria-label="trend === 'up' ? '上升' : '下降'">{{ trend === 'up' ? '↑' : '↓' }}</span><span class="at-statistic__value"><slot name="formatter" :value="value"><template v-if="formatter">{{ formatter(value) }}</template><template v-else><span class="at-statistic__int">{{ formatted.integer }}</span><span v-if="formatted.decimal" class="at-statistic__decimal">{{ formatted.decimal }}</span></template></slot></span><span v-if="suffix || $slots.suffix" class="at-statistic__suffix"><slot name="suffix">{{ suffix }}</slot></span></div><div v-if="trendLabel && !loading" class="at-statistic__trend-label">{{ trendLabel }}</div></div>
</template>
