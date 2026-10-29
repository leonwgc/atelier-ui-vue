<script setup lang="ts">
import { ref } from 'vue';
import { TreeSelect } from 'atelier-ui-vue/tree-select';

const teams = [
  {
    label: '设计部',
    value: 'design',
    children: [
      { label: '品牌组', value: 'brand' },
      { label: '体验组', value: 'ux' },
    ],
  },
  {
    label: '工程部',
    value: 'engineering',
    children: [
      {
        label: '前端组',
        value: 'frontend',
        children: [{ label: 'Web 小组', value: 'web' }],
      },
      { label: '后端组', value: 'backend' },
    ],
  },
];
const team = ref('web');
const checked = ref<string[]>(['ux']);
</script>

<template>
  <TreeSelect
    label="所属团队"
    :treeData="teams"
    v-model="team"
    showSearch
  ></TreeSelect>
  <TreeSelect
    label="多选可勾选"
    :treeData="teams"
    treeCheckable
    v-model="checked"
    treeDefaultExpandAll
  ></TreeSelect>
</template>
