<script setup lang="ts">
import { ref } from 'vue';
import { Cascader } from 'atelier-ui-vue/cascader';

const regions = [
  {
    label: '中国',
    value: 'cn',
    children: [
      {
        label: '上海',
        value: 'sh',
        children: [
          { label: '徐汇区', value: 'xuhui' },
          { label: '浦东新区', value: 'pudong' },
        ],
      },
      {
        label: '杭州',
        value: 'hz',
        children: [{ label: '西湖区', value: 'xihu' }],
      },
    ],
  },
];
const path = ref<string[]>(['cn', 'sh', 'xuhui']);
</script>

<template>
  <Cascader label="所在地区" :options="regions" v-model="path"></Cascader>
  <Cascader
    label="悬停展开 + 搜索"
    :options="regions"
    expandTrigger="hover"
    showSearch
  ></Cascader>
  <Cascader label="允许选择任意一级" :options="regions" changeOnSelect>
    <template #display="scope">{{ scope.labels.join(' › ') }}</template>
  </Cascader>
</template>
