<script setup lang="ts">
import './styles/theme.css';
import './styles/blur-fade.css';
withDefaults(defineProps<{ delay?: number; duration?: number; blur?: number; offsetY?: number; }>(), { delay: 0, duration: 500, blur: 6, offsetY: 8 });
</script>

<template>
<div :class="'at-blur-fade'" :style="{ '--at-blur-fade-delay': `${Math.max(0, delay)}ms`, '--at-blur-fade-duration': `${Math.max(0, duration)}ms`, '--at-blur-fade-blur': `${Math.max(0, blur)}px`, '--at-blur-fade-y': `${offsetY}px`, }"><slot /></div>
</template>
