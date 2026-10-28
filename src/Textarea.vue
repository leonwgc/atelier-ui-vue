<script lang="ts">
export default { inheritAttrs: false };
</script>
<script setup lang="ts">
import './styles/theme.css';
import './styles/field.css';
import './styles/textarea.css';
import { ref, computed, useAttrs } from 'vue';
const props = defineProps<{ modelValue?: string; defaultValue?: string; label?: string; hint?: string; error?: string; id?: string }>();
const attrs = useAttrs();
const inner = ref(props.defaultValue ?? '');
const value = computed(() => props.modelValue ?? inner.value);
const emit = defineEmits<{ 'update:modelValue': [value: string]; change: [event: Event] }>();
function update(event: Event) { const next = (event.target as HTMLTextAreaElement).value; if (props.modelValue === undefined) inner.value = next; emit('update:modelValue', next); emit('change', event); }
</script>

<template>
<div class="at-field"><label v-if="label" class="at-field__label">{{ label }}<textarea v-bind="attrs" :value="value" :id="id" :class="['at-textarea', { 'at-textarea--error': error }]" :aria-invalid="!!error" @input="update" /></label><textarea v-else v-bind="attrs" :value="value" :id="id" :class="['at-textarea', { 'at-textarea--error': error }]" :aria-invalid="!!error" @input="update" /><span v-if="error" class="at-field__error" role="alert">{{ error }}</span><span v-else-if="hint" class="at-field__hint">{{ hint }}</span></div>
</template>
