<script setup lang="ts">
import './styles/theme.css';
import './styles/input-otp.css';
import { ref, computed, onMounted } from 'vue';
const props = withDefaults(defineProps<{ length?: number; modelValue?: string; defaultValue?: string; disabled?: boolean; autoFocus?: boolean; ariaLabel?: string }>(), { length: 6, defaultValue: '', ariaLabel: '验证码' });
const root = ref<HTMLElement | null>(null); const inner = ref(props.defaultValue); const count = computed(() => Math.max(1, Math.floor(props.length))); const value = computed(() => (props.modelValue ?? inner.value).replace(/\D/g, '').slice(0, count.value));
const emit = defineEmits<{ 'update:modelValue': [value: string]; change: [value: string]; complete: [value: string] }>();
function update(next: string) { next = next.replace(/\D/g, '').slice(0, count.value); if (props.modelValue === undefined) inner.value = next; emit('update:modelValue', next); emit('change', next); if (next.length === count.value) emit('complete', next); }
function focus(index: number) { root.value?.querySelectorAll('input')[Math.max(0, Math.min(index, count.value - 1))]?.focus(); }
function fill(index: number, raw: string) { if (props.disabled) return; const digits = raw.replace(/\D/g, ''); if (!digits) return; const chars = value.value.split(''); digits.slice(0, count.value - index).split('').forEach((digit, offset) => { chars[index + offset] = digit; }); update(chars.join('')); focus(index + digits.length); }
function input(event: Event, index: number) { fill(index, (event.target as HTMLInputElement).value); }
function key(event: KeyboardEvent, index: number) { if (props.disabled) return; if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); focus(index + (event.key === 'ArrowLeft' ? -1 : 1)); } if (event.key === 'Backspace' || event.key === 'Delete') { event.preventDefault(); const target = event.key === 'Backspace' && !value.value[index] ? index - 1 : index; if (target >= 0) { const chars = value.value.split(''); chars[target] = ''; update(chars.join('')); focus(target); } } }
function paste(event: ClipboardEvent) { event.preventDefault(); const index = Array.from(root.value?.querySelectorAll('input') ?? []).findIndex(input => input === document.activeElement); fill(Math.max(0, index), event.clipboardData?.getData('text') ?? ''); }
onMounted(() => { if (props.autoFocus) focus(0); });
</script>

<template>
<div ref="root" class="at-input-otp" role="group" :aria-label="ariaLabel" @paste="paste"><input v-for="index in count" :key="index" class="at-input-otp__cell" type="text" inputmode="numeric" pattern="[0-9]*" :autocomplete="index === 1 ? 'one-time-code' : 'off'" :aria-label="`${ariaLabel}第 ${index} 位`" :value="value[index - 1] ?? ''" :disabled="disabled" @input="input($event, index - 1)" @keydown="key($event, index - 1)"></div>
</template>
