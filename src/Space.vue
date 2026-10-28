<script setup lang="ts">
import './styles/theme.css';
import './styles/space.css';
withDefaults(defineProps<{ size?: number | string; direction?: 'horizontal' | 'vertical'; wrap?: boolean }>(), { size: 12, direction: 'horizontal' });
</script>

<template>
<div :class="['at-space', `at-space--${direction}`]" :style="{ gap: typeof size === 'number' ? `${size}px` : size, flexWrap: wrap ? 'wrap' : 'nowrap' }"><slot /></div>
</template>
