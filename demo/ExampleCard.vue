<script setup lang="ts">
import { ref } from 'vue';
import CodeBlock from './CodeBlock.vue';
defineProps<{ title: string; description?: string; code?: string }>();
const showCode = ref(false);
</script>
<template><section class="example-card"><div class="example-card__heading"><div><h3>{{ title }}</h3><p v-if="description">{{ description }}</p></div><button v-if="code" type="button" :class="['code-toggle', { 'code-toggle--active': showCode }]" :aria-expanded="showCode" @click="showCode = !showCode"><span>&lt;/&gt;</span>{{ showCode ? '收起代码' : '查看完整代码' }}</button></div><div class="example-card__preview"><slot /></div><CodeBlock v-if="showCode" :code="code ?? ''" /></section></template>
