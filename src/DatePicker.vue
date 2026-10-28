<script lang="ts">export default { inheritAttrs: false };</script>
<script setup lang="ts">
import './styles/theme.css';
import './styles/date-picker.css';
import { ref, computed, useAttrs } from 'vue';
const props = defineProps<{ modelValue?: string; defaultValue?: string; label?: string; hint?: string; error?: string }>();
const attrs = useAttrs(); const inner = ref(props.defaultValue ?? ''); const value = computed(() => props.modelValue ?? inner.value);
const emit = defineEmits<{ 'update:modelValue': [value: string]; change: [event: Event] }>();
function update(event: Event) { const next = (event.target as HTMLInputElement).value; if (props.modelValue === undefined) inner.value = next; emit('update:modelValue', next); emit('change', event); }
</script>

<template>
<div class="at-date-picker"><label class="at-date-picker__label"><span v-if="label">{{ label }}</span><input v-bind="attrs" type="date" :value="value" :class="['at-date-picker__input', { 'at-date-picker__input--error': error }]" :aria-invalid="!!error" @input="update"></label><span v-if="hint || error" :class="['at-date-picker__help', { 'at-date-picker__help--error': error }]">{{ error ?? hint }}</span></div>
</template>
