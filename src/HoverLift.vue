<script setup lang="ts">
import './styles/theme.css';
import './styles/hover-lift.css';
withDefaults(defineProps<{ delay?: number; duration?: number; lift?: number; }>(), { delay: 0, duration: 500, lift: 6 });
</script>

<template>
<div :class="'at-hover-lift'" :style="{ '--at-hover-lift-delay': `${Math.max(0, delay)}ms`, '--at-hover-lift-duration': `${Math.max(0, duration)}ms`, '--at-hover-lift-distance': `${Math.max(0, lift)}px`, }"><slot /></div>
</template>
