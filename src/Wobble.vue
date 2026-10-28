<script setup lang="ts">
import './styles/theme.css';
import './styles/wobble.css';
withDefaults(defineProps<{ delay?: number; duration?: number; active?: boolean; }>(), { delay: 0, duration: 900, active: true });
</script>

<template>
<div :class="['at-wobble', { 'at-wobble--active': active }]" :style="{ '--at-wobble-delay': `${Math.max(0, delay)}ms`, '--at-wobble-duration': `${Math.max(0, duration)}ms`,  }"><slot /></div>
</template>
