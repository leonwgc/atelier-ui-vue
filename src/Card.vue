<script setup lang="ts">
import './styles/theme.css';
import './styles/card.css';
withDefaults(defineProps<{ title?: string; hoverable?: boolean; bordered?: boolean }>(), { bordered: true });
</script>

<template>
<div :class="['at-card', { 'at-card--hoverable': hoverable, 'at-card--borderless': !bordered }]"><div v-if="title || $slots.title || $slots.extra" class="at-card__header"><h3><slot name="title">{{ title }}</slot></h3><div v-if="$slots.extra" class="at-card__extra"><slot name="extra" /></div></div><div class="at-card__body"><slot /></div></div>
</template>
