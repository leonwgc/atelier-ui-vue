<script setup lang="ts">
import RenderNode from './internal/RenderNode';
import './styles/theme.css';
import './styles/timeline.css';
defineProps<{ items: { key: string; content: import('vue').VNodeChild; label?: import('vue').VNodeChild; color?: string }[]; pending?: string }>();
</script>

<template>
<ol class="at-timeline"><li v-for="(item, index) in items" :key="item.key" class="at-timeline__item"><span class="at-timeline__dot" :style="{ backgroundColor: item.color, borderColor: item.color }" aria-hidden="true" /><div class="at-timeline__body"><time v-if="item.label" class="at-timeline__label"><RenderNode :content="item.label" /></time><div class="at-timeline__content"><slot :item="item"><RenderNode :content="item.content" /></slot></div></div><span v-if="index < items.length - 1 || pending" class="at-timeline__line" aria-hidden="true" /></li><li v-if="pending || $slots.pending" class="at-timeline__item at-timeline__item--pending"><span class="at-timeline__dot" aria-hidden="true" /><div class="at-timeline__content"><slot name="pending">{{ pending }}</slot></div></li></ol>
</template>
