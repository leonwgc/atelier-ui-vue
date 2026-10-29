<script setup lang="ts">
import { ref } from 'vue';
import { Segmented } from 'atelier-ui-vue/segmented';

const view = ref<string>('list');
</script>

<template>
  <Segmented
    :options="[
      { label: '列表', value: 'list' },
      { label: '看板', value: 'board' },
      { label: '日历', value: 'calendar' },
    ]"
    v-model="view"
  ></Segmented>
  <Segmented
    :options="[
      { label: '周', value: 'week' },
      { label: '月', value: 'month' },
    ]"
    defaultValue="month"
    size="sm"
    shape="round"
  ></Segmented>
  <Segmented
    :options="['全部', '进行中', '已完成']"
    block
    size="lg"
  ></Segmented>
</template>
