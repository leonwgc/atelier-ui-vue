<script setup lang="ts">
import './styles/theme.css';
import './styles/icon.css';
withDefaults(defineProps<{ name: 'plus' | 'search' | 'check' | 'close' | 'arrow-right' | 'info' | 'more'; size?: number; title?: string }>(), { size: 20 });
const paths = { plus: 'M12 5v14M5 12h14', search: 'm20 20-4-4', check: 'm5 12 4 4L19 6', close: 'm6 6 12 12M18 6 6 18', 'arrow-right': 'M5 12h14m-6-6 6 6-6 6', info: 'M12 11v5M12 8h.01', more: '' };
</script>

<template>
<svg class="at-icon" :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" :role="title ? 'img' : undefined" :aria-hidden="title ? undefined : true"><title v-if="title">{{ title }}</title><path v-if="paths[name]" :d="paths[name]" /><circle v-if="name === 'search'" cx="11" cy="11" r="7" /><circle v-if="name === 'info'" cx="12" cy="12" r="9" /><template v-if="name === 'more'"><circle v-for="x in [5, 12, 19]" :key="x" :cx="x" cy="12" r="1" /></template></svg>
</template>
