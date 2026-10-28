<script setup lang="ts">
import './styles/theme.css';
import './styles/skeleton.css';
withDefaults(defineProps<{ active?: boolean; avatar?: boolean; title?: boolean; paragraph?: boolean | { rows?: number } }>(), { title: true, paragraph: true });
</script>

<template>
<div :class="['at-skeleton', { 'at-skeleton--active': active }]" aria-busy="true" aria-label="内容加载中"><div class="at-skeleton__avatar-row"><span v-if="avatar" class="at-skeleton__avatar" /><div v-if="title || paragraph" class="at-skeleton__body"><span v-if="title" class="at-skeleton__title" /><div v-if="paragraph" class="at-skeleton__paragraph"><span v-for="i in (typeof paragraph === 'object' ? Math.max(1, paragraph.rows ?? 3) : 3)" :key="i" :style="{ width: i === (typeof paragraph === 'object' ? Math.max(1, paragraph.rows ?? 3) : 3) ? '62%' : '100%' }" /></div></div></div></div>
</template>
