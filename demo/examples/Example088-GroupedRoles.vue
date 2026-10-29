<script setup lang="ts">
import { Select } from 'atelier-ui-vue/select';

const grouped = [
  {
    label: '设计',
    options: [
      { label: '产品设计师', value: 'designer' },
      { label: '品牌设计师', value: 'brand' },
    ],
  },
  {
    label: '研发',
    options: [
      { label: '前端工程师', value: 'frontend' },
      { label: '后端工程师', value: 'backend' },
    ],
  },
];
</script>

<template>
  <Select label="分组 + 搜索" :options="grouped" searchable></Select>
  <Select label="自定义选项渲染" :options="grouped[1].options">
    <template #option="scope">
      <span class="option">
        <strong>{{ scope.option.label }}</strong>
        <template v-if="scope.selected"><span>✓</span></template>
      </span>
    </template>
  </Select>
</template>
