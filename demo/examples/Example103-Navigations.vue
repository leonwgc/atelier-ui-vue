<script setup lang="ts">
import { Menu } from 'atelier-ui-vue/menu';

const items = [
  { key: 'home', label: '工作台' },
  {
    key: 'members',
    label: '团队',
    children: [{ key: 'design', label: '设计团队' }],
  },
];
</script>

<template>
  <Menu mode="horizontal" :items="items" defaultSelectedKey="home"></Menu>
  <Menu mode="vertical" :items="items" defaultSelectedKey="home"></Menu>
  <Menu
    theme="dark"
    :items="items"
    defaultSelectedKey="design"
    :defaultOpenKeys="['members']"
  ></Menu>
</template>
