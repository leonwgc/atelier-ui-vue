<script setup lang="ts">
import './styles/theme.css';
import './styles/checkbox.css';
import './styles/radio.css';
import { ref, computed } from 'vue';
import Checkbox from './Checkbox.vue';
const props = defineProps<{ options: { label: string; value: string; disabled?: boolean }[]; modelValue?: string[]; defaultValue?: string[]; disabled?: boolean; name?: string }>();
const inner = ref<string[]>(props.defaultValue ?? []);
const selected = computed(() => props.modelValue ?? inner.value);
const emit = defineEmits<{ 'update:modelValue': [value: string[]]; change: [value: string[]] }>();
function choose(value: string) { const next = selected.value.includes(value) ? selected.value.filter(item => item !== value) : [...selected.value, value]; if (props.modelValue === undefined) inner.value = next; emit('update:modelValue', next); emit('change', next); }
</script>

<template>
<div class="at-choice-group" role="group"><Checkbox v-for="option in options" :key="option.value" :name="name" :value="option.value" :model-value="selected.includes(option.value)" :disabled="disabled || option.disabled" @change="choose(option.value)"><slot name="option" :option="option">{{ option.label }}</slot></Checkbox></div>
</template>
