<script lang="ts">
export default { inheritAttrs: false };
</script>
<script setup lang="ts">
import './styles/theme.css';
import './styles/field.css';
import './styles/textarea.css';
import { ref, computed, useAttrs, getCurrentInstance } from 'vue';
const props = defineProps<{ modelValue?: string; defaultValue?: string; label?: string; hint?: string; error?: string; id?: string }>();
const attrs = useAttrs();
const generatedId = `at-textarea-${getCurrentInstance()?.uid}`;
const inputId = computed(() => props.id ?? generatedId);
const nativeAttrs = computed(() => { const { class: _class, style: _style, ...rest } = attrs; return rest; });
const describedBy = computed(() => [attrs['aria-describedby'], props.error || props.hint ? `${inputId.value}-feedback` : undefined].filter(Boolean).join(' ') || undefined);
const inner = ref(props.defaultValue ?? '');
const value = computed(() => props.modelValue ?? inner.value);
const emit = defineEmits<{ 'update:modelValue': [value: string]; change: [event: Event] }>();
function update(event: Event) { const next = (event.target as HTMLTextAreaElement).value; if (props.modelValue === undefined) inner.value = next; emit('update:modelValue', next); emit('change', event); }
</script>

<template>
<div :class="['at-field', attrs.class]" :style="attrs.style as import('vue').CSSProperties">
  <label v-if="label" :for="inputId" class="at-field__label">{{ label }}</label>
  <textarea v-bind="nativeAttrs" :value="value" :id="inputId" :class="['at-textarea', { 'at-textarea--error': error }]" :aria-invalid="!!error" :aria-describedby="describedBy" @input="update" />
  <span v-if="error" :id="`${inputId}-feedback`" class="at-field__error" role="alert">{{ error }}</span>
  <span v-else-if="hint" :id="`${inputId}-feedback`" class="at-field__hint">{{ hint }}</span>
</div>
</template>
