<script lang="ts">export default { inheritAttrs: false };</script>
<script setup lang="ts">
import { ChevronDown, Minus, Plus } from './internal/icons';
import { useAttrs, getCurrentInstance } from 'vue';
import './styles/theme.css';
import './styles/field.css';
import './styles/input.css';
import './styles/input-number.css';
import { ref, computed, watch, onBeforeUnmount } from 'vue';
const attrs = useAttrs();
const generatedFieldId = `at-field-${getCurrentInstance()?.uid}`;
const fieldId = computed(() => typeof attrs.id === 'string' ? attrs.id : generatedFieldId);
const props = withDefaults(defineProps<{ modelValue?: number | null; defaultValue?: number | null; min?: number; max?: number; step?: number; precision?: number; size?: 'sm' | 'md' | 'lg'; status?: 'error' | 'warning'; label?: string; hint?: string; error?: string; controls?: boolean | 'stacked' | 'inline'; keyboard?: boolean; formatter?: (value: number) => string; parser?: (text: string) => number | null; disabled?: boolean; readOnly?: boolean; placeholder?: string }>(), { defaultValue: null, min: -Infinity, max: Infinity, step: 1, size: 'md', controls: 'stacked', keyboard: true });
const inner = ref<number | null>(props.defaultValue); const current = computed(() => props.modelValue === undefined ? inner.value : props.modelValue); const precision = computed(() => props.precision ?? (String(props.step).split('.')[1]?.length ?? 0));
function format(value: number | null) { return value === null ? '' : props.formatter ? props.formatter(value) : value.toFixed(precision.value); }
const text = ref(format(current.value)); const focused = ref(false);
watch([current, precision], () => { if (!focused.value) text.value = format(current.value); });
const emit = defineEmits<{ 'update:modelValue': [value: number | null]; change: [value: number | null] }>();
function update(raw: number | null) { const next = raw === null || !Number.isFinite(raw) ? null : Number(Math.max(props.min, Math.min(props.max, raw)).toFixed(precision.value)); if (props.modelValue === undefined) inner.value = next; text.value = format(next); emit('update:modelValue', next); emit('change', next); }
function commit() { const cleaned = text.value.replace(/[^\d.-]/g, ''); update(props.parser ? props.parser(text.value) : cleaned === '' || cleaned === '-' || cleaned === '.' ? null : Number(cleaned)); }
function bump(direction: number) { if (props.disabled || props.readOnly) return; update((current.value ?? (Number.isFinite(props.min) && props.min > 0 ? props.min : 0)) + direction * props.step); }
let timer: ReturnType<typeof setTimeout>; function stop() { clearTimeout(timer); } function hold(event: PointerEvent, direction: number) { event.preventDefault(); stop(); bump(direction); const repeat = (delay: number) => { timer = setTimeout(() => { bump(direction); repeat(Math.max(40, delay * 0.85)); }, delay); }; repeat(400); }
onBeforeUnmount(stop);
function key(event: KeyboardEvent) { if (event.key === 'Enter') commit(); if (!props.keyboard) return; if (event.key === 'ArrowUp' || event.key === 'ArrowDown') { event.preventDefault(); bump(event.key === 'ArrowUp' ? 1 : -1); } }
</script>

<template>
<div class="at-field" :class="attrs.class" :style="attrs.style"><label v-if="label" :for="fieldId" class="at-field__label">{{ label }}</label><div :class="['at-input-wrap', `at-input-wrap--${size}`, 'at-input-number', controls && `at-input-number--${controls === true ? 'stacked' : controls}`, { 'at-input-wrap--error': error || status === 'error', 'at-input-wrap--warning': status === 'warning', 'at-input-wrap--disabled': disabled }]"><button v-if="controls === 'inline'" type="button" class="at-input-number__step at-input-number__step--inline" aria-label="减少" :disabled="disabled || readOnly || (current !== null && current <= min)" @pointerdown="hold($event, -1)" @pointerup="stop" @pointerleave="stop" @pointercancel="stop" @click="!$event.detail && bump(-1)"><Minus :size="14" /></button><slot name="prefix" /><input :id="fieldId" v-model="text" v-bind="{ ...attrs, class: undefined, style: undefined }" class="at-input at-input-number__input" type="text" :inputmode="precision > 0 ? 'decimal' : 'numeric'" role="spinbutton" :aria-label="label" :aria-valuenow="current ?? undefined" :aria-valuemin="Number.isFinite(min) ? min : undefined" :aria-valuemax="Number.isFinite(max) ? max : undefined" :aria-invalid="!!error || status === 'error'" autocomplete="off" :disabled="disabled" :readonly="readOnly" :placeholder="placeholder" @focus="focused = true" @blur="focused = false; commit()" @keydown="key"><slot name="suffix" /><button v-if="controls === 'inline'" type="button" class="at-input-number__step at-input-number__step--inline" aria-label="增加" :disabled="disabled || readOnly || (current !== null && current >= max)" @pointerdown="hold($event, 1)" @pointerup="stop" @pointerleave="stop" @pointercancel="stop" @click="!$event.detail && bump(1)"><Plus :size="14" /></button><span v-if="controls === 'stacked' || controls === true" class="at-input-number__handlers"><button v-for="direction in [1, -1]" :key="direction" type="button" class="at-input-number__step" tabindex="-1" :aria-label="direction === 1 ? '增加' : '减少'" :disabled="disabled || readOnly || (current !== null && (direction === 1 ? current >= max : current <= min))" @pointerdown="hold($event, direction)" @pointerup="stop" @pointerleave="stop" @pointercancel="stop" @click="!$event.detail && bump(direction)"><ChevronDown :size="12" :style="direction === 1 ? { transform: 'rotate(180deg)' } : undefined" /></button></span></div><span v-if="error" class="at-field__error" role="alert">{{ error }}</span><span v-else-if="hint" class="at-field__hint">{{ hint }}</span></div>
</template>
