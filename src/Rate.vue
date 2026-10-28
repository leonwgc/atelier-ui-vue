<script setup lang="ts">
import './styles/theme.css';
import './styles/rate.css';
import { ref, computed } from 'vue';
const props = withDefaults(defineProps<{ modelValue?: number; defaultValue?: number; count?: number; allowHalf?: boolean; allowClear?: boolean; disabled?: boolean; size?: 'sm' | 'md' | 'lg'; tooltips?: string[]; label?: string; character?: string }>(), { defaultValue: 0, count: 5, allowClear: true, size: 'md', label: '评分', character: '★' });
const inner = ref(props.defaultValue); const hover = ref<number | null>(null); const current = computed(() => props.modelValue ?? inner.value);
const emit = defineEmits<{ 'update:modelValue': [value: number]; change: [value: number]; hoverChange: [value: number | null] }>();
function update(value: number) { if (props.disabled) return; if (props.modelValue === undefined) inner.value = value; emit('update:modelValue', value); emit('change', value); }
function point(event: PointerEvent, index: number) { const rect = (event.currentTarget as HTMLElement).getBoundingClientRect(); return props.allowHalf && event.clientX - rect.left < rect.width / 2 ? index - 0.5 : index; }
function preview(value: number | null) { if (props.disabled) return; hover.value = value; emit('hoverChange', value); }
function choose(event: PointerEvent, index: number) { const next = point(event, index); update(props.allowClear && next === current.value ? 0 : next); }
function key(event: KeyboardEvent) { const unit = props.allowHalf ? 0.5 : 1; let next: number | undefined; if (['ArrowRight', 'ArrowUp'].includes(event.key)) next = Math.min(props.count, current.value + unit); if (['ArrowLeft', 'ArrowDown'].includes(event.key)) next = Math.max(0, current.value - unit); if (event.key === 'Home') next = unit; if (event.key === 'End') next = props.count; if (next !== undefined) { event.preventDefault(); update(next); } }
</script>

<template>
<div :class="['at-rate', `at-rate--${size}`, { 'at-rate--disabled': disabled }]"><div class="at-rate__stars" role="slider" :tabindex="disabled ? -1 : 0" :aria-label="label" :aria-valuemin="0" :aria-valuemax="count" :aria-valuenow="current" :aria-valuetext="tooltips?.[Math.ceil(current) - 1] ?? `${current} 星`" :aria-disabled="disabled" @keydown="key" @mouseleave="preview(null)"><button v-for="index in count" :key="index" type="button" tabindex="-1" :class="['at-rate__star', { 'at-rate__star--active': (hover ?? current) >= index, 'at-rate__star--half': (hover ?? current) > index - 1 && (hover ?? current) < index, 'at-rate__star--hover': hover !== null && hover > index - 1 }]" :aria-label="tooltips?.[index - 1] ?? `${index} 星`" :aria-pressed="current > index - 1" :disabled="disabled" @pointermove="preview(point($event, index))" @pointerdown="choose($event, index)" @click="!$event.detail && update(allowClear && current === index ? 0 : index)"><span class="at-rate__base"><slot name="character" :index="index">{{ character }}</slot></span><span class="at-rate__fill" :style="{ width: `${Math.max(0, Math.min(1, (hover ?? current) - index + 1)) * 100}%` }" aria-hidden="true"><slot name="character" :index="index">{{ character }}</slot></span></button></div><span v-if="tooltips" class="at-rate__caption" aria-live="polite">{{ tooltips[Math.ceil(hover ?? current) - 1] ?? '' }}</span></div>
</template>
