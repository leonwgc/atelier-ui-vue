<script setup lang="ts">
import './styles/theme.css';
import './styles/animated-list.css';
withDefaults(defineProps<{ items: unknown[]; getItemKey?: (item: unknown, index: number) => string | number; staggerDelay?: number; duration?: number; itemClassName?: string }>(), { staggerDelay: 70, duration: 420 });
</script>

<template>
<ul class="at-animated-list"><li v-for="(item, index) in items" :key="getItemKey?.(item, index) ?? index" :class="['at-animated-list__item', itemClassName]" :style="{ '--at-animated-list-delay': `${Math.max(0, index * staggerDelay)}ms`, '--at-animated-list-duration': `${Math.max(0, duration)}ms` }"><slot :item="item" :index="index">{{ item }}</slot></li></ul>
</template>
