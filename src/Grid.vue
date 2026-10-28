<script setup lang="ts">
import './styles/theme.css';
import './styles/grid.css';
withDefaults(defineProps<{ columns?: number; gap?: number | string }>(), { columns: 24, gap: 16 });
</script>

<template>
<div class="at-grid" :style="{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: typeof gap === 'number' ? `${gap}px` : gap }"><slot /></div>
</template>
