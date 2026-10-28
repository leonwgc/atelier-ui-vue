<script setup lang="ts">
import './styles/theme.css';
import './styles/shake.css';
withDefaults(defineProps<{ delay?: number; duration?: number; active?: boolean; }>(), { delay: 0, duration: 650, active: true });
</script>

<template>
<div :class="['at-shake', { 'at-shake--active': active }]" :style="{ '--at-shake-delay': `${Math.max(0, delay)}ms`, '--at-shake-duration': `${Math.max(0, duration)}ms`,  }"><slot /></div>
</template>
