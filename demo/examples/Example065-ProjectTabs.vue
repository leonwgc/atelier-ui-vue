<script setup lang="ts">
import { Tabs } from 'atelier-ui-vue/tabs';
</script>

<template>
  <Tabs
    defaultActiveKey="overview"
    :items="[
      { key: 'overview', label: '概览', children: '项目进度和关键指标。' },
      { key: 'members', label: '成员', children: '管理项目成员与权限。' },
      { key: 'activity', label: '动态', children: '查看项目最近的变更。' },
    ]"
  ></Tabs>
</template>
