<script setup lang="ts">
import { ref } from 'vue';
import { Mentions } from 'atelier-ui-vue/mentions';

const members = [
  { value: '林知夏', description: 'lin@atelier.design · 设计' },
  { value: '陈一川', description: 'chen@atelier.design · 前端' },
];
const text = ref('@林知夏 请确认设计稿');
</script>

<template>
  <Mentions
    label="项目留言"
    :options="members"
    v-model="text"
    :autoSize="{ minRows: 3, maxRows: 6 }"
  ></Mentions>
  <Mentions label="多种触发符" :options="['林知夏', '陈一川']" :rows="2">
    <template #prefix>@ #</template>
  </Mentions>
</template>
