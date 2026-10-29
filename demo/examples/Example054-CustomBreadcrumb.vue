<script setup lang="ts">
import { Breadcrumb } from 'atelier-ui-vue/breadcrumb';
</script>

<template>
  <Breadcrumb
    separator="›"
    :items="[
      { title: '设计团队' },
      { title: '品牌项目' },
      { title: '视觉规范' },
    ]"
  ></Breadcrumb>
</template>
