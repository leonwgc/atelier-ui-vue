<script setup lang="ts">
import { vueApiName } from './api';
const props = withDefaults(defineProps<{ rows: string[][]; title?: string }>(), { title: '组件属性' });
</script>
<template><section class="api-table-section"><div class="eyebrow"><span class="eyebrow__dot" /> API REFERENCE</div><h2>{{ title }}</h2><div class="api-table-wrap"><table class="api-table"><thead><tr><th>属性</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr v-for="[name, type, value] in rows" :key="name"><td><code>{{ vueApiName(name, props.rows) }}</code></td><td>{{ type }}</td><td>{{ value }}</td></tr></tbody></table></div></section></template>
