<script setup lang="ts">
import './styles/theme.css';
import './styles/scale-in.css';
withDefaults(defineProps<{ delay?: number; duration?: number; startScale?: number; }>(), { delay: 0, duration: 450, startScale: 0.88 });
</script>

<template>
<div :class="'at-scale-in'" :style="{ '--at-scale-in-delay': `${Math.max(0, delay)}ms`, '--at-scale-in-duration': `${Math.max(0, duration)}ms`, '--at-scale-in-start': String(Math.max(0, startScale)), }"><slot /></div>
</template>
