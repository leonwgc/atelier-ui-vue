<script setup lang="ts">
import './styles/theme.css';
import './styles/divider.css';
withDefaults(defineProps<{ orientation?: 'horizontal' | 'vertical'; dashed?: boolean; plain?: boolean }>(), { orientation: 'horizontal' });
</script>

<template>
<div role="separator" :aria-orientation="orientation" :class="['at-divider', { 'at-divider--vertical': orientation === 'vertical', 'at-divider--dashed': dashed, 'at-divider--with-text': orientation === 'horizontal' && $slots.default }]"><span v-if="orientation === 'horizontal' && $slots.default" :class="['at-divider__text', { 'at-divider__text--plain': plain }]"><slot /></span></div>
</template>
