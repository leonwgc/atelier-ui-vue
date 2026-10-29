<script setup lang="ts">
import { Timeline } from 'atelier-ui-vue/timeline';
</script>

<template>
  <Timeline
    :items="[
      { key: 'created', label: '09:30', content: '项目已创建' },
      { key: 'invited', label: '10:15', content: '林知夏邀请了 3 位成员' },
      { key: 'updated', label: '11:20', content: '更新了项目视觉规范' },
    ]"
    pending="等待下一次更新"
  ></Timeline>
</template>
