<script setup lang="ts">
import './styles/theme.css';
import './styles/scroll-reveal.css';
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
const props = withDefaults(defineProps<{ direction?: 'left' | 'right' | 'up' | 'down'; distance?: number; delay?: number; duration?: number; threshold?: number; rootMargin?: string; once?: boolean }>(), { direction: 'up', distance: 16, delay: 0, duration: 600, threshold: 0.1, rootMargin: '0px', once: true });
const root = ref<HTMLElement | null>(null); const visible = ref(false); let observer: IntersectionObserver | undefined;
function observe() { observer?.disconnect(); if (!root.value) return; if (typeof IntersectionObserver === 'undefined' || matchMedia('(prefers-reduced-motion: reduce)').matches) { visible.value = true; return; } observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { visible.value = true; if (props.once && root.value) observer?.unobserve(root.value); } else if (!props.once) visible.value = false; }, { threshold: props.threshold, rootMargin: props.rootMargin }); observer.observe(root.value); }
onMounted(() => { observe(); watch(() => [props.threshold, props.rootMargin, props.once], observe); }); onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
<div ref="root" class="at-scroll-reveal" :data-visible="visible ? 'true' : 'false'" :style="{ '--at-scroll-reveal-x': `${direction === 'left' ? -Math.max(0, distance) : direction === 'right' ? Math.max(0, distance) : 0}px`, '--at-scroll-reveal-y': `${direction === 'up' ? Math.max(0, distance) : direction === 'down' ? -Math.max(0, distance) : 0}px`, '--at-scroll-reveal-delay': `${Math.max(0, delay)}ms`, '--at-scroll-reveal-duration': `${Math.max(0, duration)}ms` }"><slot /></div>
</template>
