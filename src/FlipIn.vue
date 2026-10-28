<script setup lang="ts">
import './styles/theme.css';
import './styles/flip-in.css';
withDefaults(defineProps<{ direction?: 'x' | 'y'; delay?: number; duration?: number }>(), { direction: 'y', delay: 0, duration: 600 });
</script>

<template>
<div :class="['at-flip-in', `at-flip-in--${direction}`]" :style="{ '--at-flip-in-delay': `${Math.max(0, delay)}ms`, '--at-flip-in-duration': `${Math.max(0, duration)}ms` }"><slot /></div>
</template>
