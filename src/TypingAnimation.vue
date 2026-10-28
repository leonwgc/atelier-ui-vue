<script setup lang="ts">
import './styles/theme.css';
import './styles/typing-animation.css';
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
const props = withDefaults(defineProps<{ words: string[]; typeSpeed?: number; deleteSpeed?: number; pauseDuration?: number; loop?: boolean; cursor?: boolean }>(), { typeSpeed: 75, deleteSpeed: 38, pauseDuration: 1300, loop: true, cursor: true });
const text = ref(''); let timer: ReturnType<typeof setTimeout>;
function start() { clearTimeout(timer); text.value = ''; if (!props.words.length) return; if (matchMedia('(prefers-reduced-motion: reduce)').matches) { text.value = props.words[0]; return; } let word = 0, count = 0, deleting = false; const tick = () => { const value = props.words[word] ?? ''; count += deleting ? -1 : 1; text.value = value.slice(0, Math.max(0, count)); if (!deleting && count >= value.length) { if (!props.loop && word === props.words.length - 1) return; deleting = true; timer = setTimeout(tick, props.pauseDuration); return; } if (deleting && count <= 0) { deleting = false; word = (word + 1) % props.words.length; } timer = setTimeout(tick, Math.max(0, deleting ? props.deleteSpeed : props.typeSpeed)); }; timer = setTimeout(tick, props.typeSpeed); }
onMounted(() => { start(); watch(() => [props.words.join('\0'), props.typeSpeed, props.deleteSpeed, props.pauseDuration, props.loop], start); }); onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
<span :class="['at-typing-animation', { 'at-typing-animation--cursor': cursor }]" aria-live="off">{{ text }}</span>
</template>
