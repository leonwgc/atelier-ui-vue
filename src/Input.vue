<script lang="ts">
export default { inheritAttrs: false };
</script>

<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue';
import './styles/theme.css';
import './styles/field.css';
import './styles/input.css';

const props = withDefaults(defineProps<{
  modelValue?: string | number;
  defaultValue?: string | number;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  hint?: string;
  error?: string;
  clearable?: boolean;
  disabled?: boolean;
  id?: string;
}>(), { size: 'md' });
const emit = defineEmits<{ 'update:modelValue': [value: string]; change: [event: Event] }>();
const attrs = useAttrs();
const input = ref<HTMLInputElement | null>(null);
const internal = ref(String(props.defaultValue ?? ''));
const value = computed(() => props.modelValue == null ? internal.value : String(props.modelValue));
const inputId = computed(() => props.id ?? (props.label ? `at-input-${props.label.replace(/\W+/g, '-').toLowerCase()}` : undefined));
function update(next: string, event: Event) {
  if (props.modelValue == null) internal.value = next;
  emit('update:modelValue', next);
  emit('change', event);
}
function onInput(event: Event) { update((event.target as HTMLInputElement).value, event); }
function clear() {
  if (!input.value) return;
  input.value.value = '';
  input.value.dispatchEvent(new Event('input', { bubbles: true }));
}

</script>

<template>
  <div class="at-field" :class="attrs.class" :style="attrs.style">
    <label v-if="label" class="at-field__label" :for="inputId">{{ label }}</label>
    <div :class="['at-input-wrap', `at-input-wrap--${size}`, { 'at-input-wrap--error': error, 'at-input-wrap--disabled': disabled }]">
      <span v-if="$slots.prefix" class="at-input-wrap__adornment"><slot name="prefix" /></span>
      <input ref="input" v-bind="{ ...attrs, class: undefined, style: undefined }" :id="inputId" class="at-input" :value="value" :disabled="disabled" :aria-invalid="error ? true : undefined" @input="onInput">
      <button v-if="clearable && value && !disabled" type="button" class="at-input-wrap__clear" aria-label="清空输入" @click="clear">×</button>
      <span v-if="$slots.suffix" class="at-input-wrap__adornment"><slot name="suffix" /></span>
    </div>
    <span v-if="error" class="at-field__error" role="alert">{{ error }}</span>
    <span v-else-if="hint" class="at-field__hint">{{ hint }}</span>
  </div>
</template>
