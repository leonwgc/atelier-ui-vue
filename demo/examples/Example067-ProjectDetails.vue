<script setup lang="ts">
import { Descriptions } from 'atelier-ui-vue/descriptions';
</script>

<template>
  <Descriptions
    title="项目详情"
    bordered
    :column="2"
    :items="[
      { key: 'name', label: '项目名称', children: '品牌视觉升级' },
      { key: 'owner', label: '负责人', children: '林知夏' },
      { key: 'status', label: '项目状态', children: '进行中' },
      { key: 'updated', label: '最近更新', children: '3 分钟前' },
    ]"
  ></Descriptions>
</template>
