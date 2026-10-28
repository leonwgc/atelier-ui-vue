<script setup lang="ts">
import './styles/theme.css';
import './styles/statistic.css';
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import Statistic from './Statistic.vue';
import { formatCountdown } from './internal/statistic';
const props = withDefaults(defineProps<{ value: number | Date; format?: string; title?: string; prefix?: string; suffix?: string; loading?: boolean }>(), { format: 'HH:mm:ss' });
const remaining = ref(Math.max(0, Number(props.value) - Date.now()));
const emit = defineEmits<{ finish: []; change: [remaining: number] }>(); let timer: ReturnType<typeof setInterval>;
function start() { clearInterval(timer); let finished = false; const tick = () => { remaining.value = Math.max(0, Number(props.value) - Date.now()); emit('change', remaining.value); if (remaining.value === 0 && !finished) { finished = true; emit('finish'); clearInterval(timer); } }; tick(); if (remaining.value > 0) timer = setInterval(tick, /S/.test(props.format) ? 50 : 1000 / 30); }
onMounted(() => { start(); watch(() => [props.value, props.format], start); }); onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
<Statistic class="at-statistic--countdown" :title="title" :value="formatCountdown(remaining, format)" :prefix="prefix" :suffix="suffix" :loading="loading" />
</template>
