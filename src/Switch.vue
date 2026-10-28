<script lang="ts">
export default { inheritAttrs: false };
</script>

<script setup lang="ts">
import { ref, computed, useAttrs } from 'vue';
import './styles/theme.css';
import './styles/switch.css';

const props = defineProps<{ modelValue?: boolean; defaultChecked?: boolean; disabled?: boolean }>();
const emit = defineEmits<{ 'update:modelValue': [value: boolean]; change: [event: Event] }>();
const attrs = useAttrs();
const internal = ref(props.defaultChecked ?? false);
const checked = computed(() => props.modelValue ?? internal.value);
function onChange(event: Event) {
  const next = (event.target as HTMLInputElement).checked;
  if (props.modelValue == null) internal.value = next;
  emit('update:modelValue', next);
  emit('change', event);
}
</script>

<template>
  <label class="at-switch" :class="attrs.class" :style="attrs.style">
    <input v-bind="{ ...attrs, class: undefined, style: undefined }" type="checkbox" role="switch" class="at-switch__input" :checked="checked" :disabled="disabled" @change="onChange">
    <span class="at-switch__track"><span class="at-switch__thumb" /><span class="at-switch__label at-switch__label--on"><slot name="checked" /></span><span class="at-switch__label at-switch__label--off"><slot name="unchecked" /></span></span>
  </label>
</template>
