<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Menu, type MenuItem } from 'atelier-ui-vue/menu';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const items: MenuItem[] = [
  { key: 'home', label: '工作台', icon: '◉' },
  {
    key: 'projects',
    label: '项目',
    icon: '◉',
    children: [
      { key: 'all', label: '全部项目' },
      { key: 'mine', label: '我负责的' },
    ],
  },
  { key: 'divider', type: 'divider' },
  { key: 'settings', label: '设置', icon: '◉' },
];
const selected = ref('mine');
const setSelected = refSetter(selected);
const collapsed = ref(false);
const setCollapsed = refSetter(collapsed);
</script>

<template>
  <Menu
    :items="items"
    :selectedKey="selected"
    @select="setSelected"
    :defaultOpenKeys="['projects']"
    :collapsed="collapsed"
  ></Menu>
  <Button type="button" @click="() => setCollapsed((value: boolean) => !value)">
    切换折叠
  </Button>
</template>
