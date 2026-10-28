<script setup lang="ts">
import './styles/theme.css';
import './styles/fade-in.css';
withDefaults(defineProps<{ delay?: number; duration?: number;  }>(), { delay: 0, duration: 500 });
</script>

<template>
<div :class="'at-fade-in'" :style="{ '--at-fade-in-delay': `${Math.max(0, delay)}ms`, '--at-fade-in-duration': `${Math.max(0, duration)}ms`,  }"><slot /></div>
</template>
