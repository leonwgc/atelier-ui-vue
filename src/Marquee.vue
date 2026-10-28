<script setup lang="ts">
import './styles/theme.css';
import './styles/marquee.css';
import { ref, onMounted } from 'vue';
withDefaults(defineProps<{ duration?: number; direction?: 'left' | 'right'; pauseOnHover?: boolean; gradient?: boolean }>(), { duration: 28, direction: 'left', pauseOnHover: true });
const duplicate = ref<HTMLElement | null>(null); onMounted(() => { if (duplicate.value) duplicate.value.inert = true; });
</script>

<template>
<div :class="['at-marquee', `at-marquee--${direction}`, { 'at-marquee--pause-on-hover': pauseOnHover, 'at-marquee--gradient': gradient }]" :style="{ '--at-marquee-duration': `${Math.max(0.5, duration)}s` }" aria-roledescription="marquee"><div class="at-marquee__track"><div class="at-marquee__group"><slot /></div><div ref="duplicate" class="at-marquee__group" aria-hidden="true"><slot /></div></div></div>
</template>
