<script lang="ts">
export default { inheritAttrs: false };
</script>
<script setup lang="ts">
import './styles/theme.css';
import './styles/radio.css';
import { ref, useAttrs, computed } from 'vue';
const props = withDefaults(defineProps<{ modelValue?: boolean; defaultChecked?: boolean; disabled?: boolean }>(), { modelValue: undefined });
const inner = ref(props.defaultChecked ?? false);
const attrs = useAttrs();
const checked = computed(() => props.modelValue ?? inner.value);
const emit = defineEmits<{ 'update:modelValue': [value: boolean]; change: [event: Event] }>();
function update(event: Event) { const next = (event.target as HTMLInputElement).checked; if (props.modelValue === undefined) inner.value = next; emit('update:modelValue', next); emit('change', event); }
</script>

<template>
<label class="at-radio" :class="attrs.class" :style="attrs.style"><input v-bind="{ ...attrs, class: undefined, style: undefined }" type="radio" class="at-radio__input" :checked="checked" :disabled="disabled" @change="update"><span class="at-radio__circle" aria-hidden="true"></span><span v-if="$slots.default"><slot /></span></label>
</template>
