<script setup lang="ts">
import './styles/theme.css';
import './styles/pulse.css';
withDefaults(defineProps<{ delay?: number; duration?: number;  }>(), { delay: 0, duration: 1400 });
</script>

<template>
<div :class="'at-pulse'" :style="{ '--at-pulse-delay': `${Math.max(0, delay)}ms`, '--at-pulse-duration': `${Math.max(0, duration)}ms`,  }"><slot /></div>
</template>
