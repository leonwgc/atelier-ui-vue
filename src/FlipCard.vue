<script setup lang="ts">
import './styles/theme.css';
import './styles/flip-card.css';
import { ref, watchEffect } from 'vue';
const props = withDefaults(defineProps<{ flipped?: boolean; direction?: 'horizontal' | 'vertical' }>(), { direction: 'horizontal' });
const front = ref<HTMLElement | null>(null); const back = ref<HTMLElement | null>(null);
watchEffect(() => { if (front.value) front.value.inert = !!props.flipped; if (back.value) back.value.inert = !props.flipped; });
</script>

<template>
<div :class="['at-flip-card', { 'at-flip-card--flipped': flipped }]" :style="{ '--at-flip-card-rotation': direction === 'horizontal' ? 'rotateY(180deg)' : 'rotateX(180deg)' }" role="group" aria-label="Flip card"><div class="at-flip-card__inner"><div ref="front" class="at-flip-card__face at-flip-card__face--front" :aria-hidden="!!flipped"><slot name="front" /></div><div ref="back" class="at-flip-card__face at-flip-card__face--back" :aria-hidden="!flipped"><slot name="back" /></div></div></div>
</template>
