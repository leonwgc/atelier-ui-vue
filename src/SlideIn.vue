<script setup lang="ts">
import './styles/theme.css';
import './styles/slide-in.css';
withDefaults(defineProps<{ direction?: 'left' | 'right' | 'up' | 'down'; distance?: number; delay?: number; duration?: number }>(), { direction: 'up', distance: 16, delay: 0, duration: 500 });
</script>

<template>
<div class="at-slide-in" :style="{ '--at-slide-in-x': `${direction === 'left' ? -Math.max(0, distance) : direction === 'right' ? Math.max(0, distance) : 0}px`, '--at-slide-in-y': `${direction === 'up' ? Math.max(0, distance) : direction === 'down' ? -Math.max(0, distance) : 0}px`, '--at-slide-in-delay': `${Math.max(0, delay)}ms`, '--at-slide-in-duration': `${Math.max(0, duration)}ms` }"><slot /></div>
</template>
