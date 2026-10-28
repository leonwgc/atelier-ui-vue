<script setup lang="ts">
import RenderNode from './internal/RenderNode';
import './styles/theme.css';
import './styles/breadcrumb.css';
withDefaults(defineProps<{ items: { title: import('vue').VNodeChild; href?: string; onClick?: () => void }[]; separator?: string }>(), { separator: '/' });
</script>

<template>
<nav class="at-breadcrumb" aria-label="面包屑导航"><ol><li v-for="(item, i) in items" :key="i" :aria-current="i === items.length - 1 ? 'page' : undefined"><a v-if="item.href && i !== items.length - 1" :href="item.href" @click="item.onClick?.()"><RenderNode :content="item.title" /></a><button v-else-if="item.onClick && i !== items.length - 1" type="button" @click="item.onClick()"><RenderNode :content="item.title" /></button><span v-else><RenderNode :content="item.title" /></span><span v-if="i < items.length - 1" class="at-breadcrumb__separator" aria-hidden="true"><slot name="separator">{{ separator }}</slot></span></li></ol></nav>
</template>
