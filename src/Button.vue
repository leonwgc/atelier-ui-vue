<script setup lang="ts">
import './styles/theme.css';
import './styles/button.css';

withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}>(), { variant: 'secondary', size: 'md', type: 'button' });
</script>

<template>
  <button :type="type" :class="['at-button', `at-button--${variant}`, `at-button--${size}`, { 'at-button--full': fullWidth }]" :disabled="disabled || loading" :aria-busy="loading || undefined">
    <span v-if="loading" class="at-spinner at-spinner--inline" aria-hidden="true" />
    <span v-else-if="$slots.icon" class="at-button__icon"><slot name="icon" /></span>
    <slot />
  </button>
</template>
