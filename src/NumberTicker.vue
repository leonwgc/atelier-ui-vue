<script setup lang="ts">
import './styles/theme.css';
import './styles/number-ticker.css';
import { ref, onMounted, watch, onBeforeUnmount, computed } from 'vue';
const props = withDefaults(defineProps<{ value: number; startValue?: number; duration?: number; delay?: number; decimals?: number; locale?: string; prefix?: string; suffix?: string }>(), { startValue: 0, duration: 1200, delay: 0, decimals: 0, locale: 'zh-CN', prefix: '', suffix: '' });
const current = ref(props.startValue); let frame = 0; let timer: ReturnType<typeof setTimeout>;
function start() { cancelAnimationFrame(frame); clearTimeout(timer); if (matchMedia('(prefers-reduced-motion: reduce)').matches || props.duration <= 0) { current.value = props.value; return; } current.value = props.startValue; timer = setTimeout(() => { let begin: number | undefined; const tick = (now: number) => { begin ??= now; const progress = Math.min((now - begin) / props.duration, 1); current.value = props.startValue + (props.value - props.startValue) * (1 - (1 - progress) ** 3); if (progress < 1) frame = requestAnimationFrame(tick); }; frame = requestAnimationFrame(tick); }, props.delay); }
onMounted(() => { start(); watch(() => [props.value, props.startValue, props.duration, props.delay], start); }); onBeforeUnmount(() => { cancelAnimationFrame(frame); clearTimeout(timer); });
const formatter = computed(() => new Intl.NumberFormat(props.locale, { minimumFractionDigits: props.decimals, maximumFractionDigits: props.decimals }));
</script>

<template>
<span class="at-number-ticker" :aria-label="`${prefix}${formatter.format(value)}${suffix}`" aria-live="off">{{ prefix }}{{ formatter.format(current) }}{{ suffix }}</span>
</template>
