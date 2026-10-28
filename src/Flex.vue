<script setup lang="ts">
import './styles/theme.css';
import './styles/flex.css';
import type { CSSProperties } from 'vue';
withDefaults(defineProps<{ vertical?: boolean; gap?: number | string; align?: CSSProperties['alignItems']; justify?: CSSProperties['justifyContent']; wrap?: boolean }>(), { gap: 12, align: 'center', justify: 'flex-start' });
</script>

<template>
<div class="at-flex" :style="{ display: 'flex', flexDirection: vertical ? 'column' : 'row', gap: typeof gap === 'number' ? `${gap}px` : gap, alignItems: align, justifyContent: justify, flexWrap: wrap ? 'wrap' : 'nowrap' }"><slot /></div>
</template>
