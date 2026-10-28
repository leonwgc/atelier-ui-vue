<script setup lang="ts">
import './styles/theme.css';
import './styles/press.css';
withDefaults(defineProps<{ delay?: number; duration?: number;  }>(), { delay: 0, duration: 500 });
</script>

<template>
<div :class="'at-press'" :style="{ '--at-press-delay': `${Math.max(0, delay)}ms`, '--at-press-duration': `${Math.max(0, duration)}ms`,  }"><slot /></div>
</template>
