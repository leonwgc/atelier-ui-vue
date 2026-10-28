<script setup lang="ts">
import './styles/theme.css';
import './styles/descriptions.css';
withDefaults(defineProps<{ title?: string; items: { key: string; label: string; children?: string }[]; column?: number; bordered?: boolean }>(), { column: 3 });
</script>

<template>
<div :class="['at-descriptions', { 'at-descriptions--bordered': bordered }]"><h3 v-if="title || $slots.title" class="at-descriptions__title"><slot name="title">{{ title }}</slot></h3><dl class="at-descriptions__list" :style="{ gridTemplateColumns: `repeat(${Math.max(1, Math.min(6, Number.isFinite(column) ? Math.floor(column) : 3))}, minmax(0, 1fr))` }"><div v-for="item in items" :key="item.key" class="at-descriptions__item"><dt><slot name="label" :item="item">{{ item.label }}</slot></dt><dd><slot :item="item">{{ item.children }}</slot></dd></div></dl></div>
</template>
