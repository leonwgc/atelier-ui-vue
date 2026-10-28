<script setup lang="ts">
import './styles/theme.css';
import './styles/confetti.css';
withDefaults(defineProps<{ active?: boolean; count?: number; duration?: number; colors?: string[] }>(), { active: true, count: 24, duration: 1800, colors: () => ['#7c3aed', '#06b6d4', '#f59e0b', '#ec4899', '#22c55e'] });
const x = [-42, -31, -20, -9, 2, 13, 24, 35, 44]; const y = [-8, -16, -24, -12, -20, -4, -18]; const rotations = [35, 95, 155, 215, 275, 325];
</script>

<template>
<span class="at-confetti"><slot /><template v-if="active"><span v-for="index in (Number.isFinite(count) ? Math.min(100, Math.max(0, Math.floor(count))) : 0)" :key="index" class="at-confetti__particle" aria-hidden="true" :style="{ '--at-confetti-x': `${x[(index - 1) % x.length]}px`, '--at-confetti-y': `${y[(index - 1) % y.length]}px`, '--at-confetti-rotate': `${rotations[(index - 1) % rotations.length]}deg`, '--at-confetti-size': `${6 + ((index - 1) % 4) * 2}px`, '--at-confetti-duration': `${Number.isFinite(duration) ? Math.max(0, duration) : 0}ms`, '--at-confetti-delay': `${((index - 1) % 6) * 25}ms`, '--at-confetti-color': colors[(index - 1) % colors.length] ?? '#7c3aed' }" /></template></span>
</template>
