<script setup lang="ts">
import './styles/theme.css';
import './styles/glow.css';
withDefaults(defineProps<{ delay?: number; duration?: number; color?: string; }>(), { delay: 0, duration: 1800, color: '#8b7dff' });
</script>

<template>
<div :class="'at-glow'" :style="{ '--at-glow-delay': `${Math.max(0, delay)}ms`, '--at-glow-duration': `${Math.max(0, duration)}ms`, '--at-glow-color': color, }"><slot /></div>
</template>
