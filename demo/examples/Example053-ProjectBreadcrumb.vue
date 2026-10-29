<script setup lang="ts">
import { Breadcrumb } from 'atelier-ui-vue/breadcrumb';
</script>

<template>
  <Breadcrumb
    :items="[
      { title: '工作区', href: '/' },
      { title: '项目列表', href: '/projects' },
      { title: '品牌视觉升级' },
    ]"
  ></Breadcrumb>
</template>
