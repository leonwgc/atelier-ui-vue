<script setup lang="ts">
import './styles/theme.css';
import './styles/border-beam.css';
withDefaults(defineProps<{ color?: string; duration?: number; paused?: boolean }>(), { color: '#8b7dff', duration: 5 });
</script>

<template>
<div :class="['at-border-beam', { 'at-border-beam--paused': paused }]" :style="{ '--at-beam-color': color, '--at-beam-duration': `${Math.max(0.5, duration)}s` }"><div><slot /></div></div>
</template>
