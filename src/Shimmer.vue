<script setup lang="ts">
import './styles/theme.css';
import './styles/shimmer.css';
withDefaults(defineProps<{ delay?: number; duration?: number; highlight?: string; }>(), { delay: 0, duration: 1800, highlight: 'rgb(255 255 255 / 62%)' });
</script>

<template>
<div :class="'at-shimmer'" :style="{ '--at-shimmer-delay': `${Math.max(0, delay)}ms`, '--at-shimmer-duration': `${Math.max(0, duration)}ms`, '--at-shimmer-highlight': highlight, }"><slot /></div>
</template>
