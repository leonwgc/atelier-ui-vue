<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { Descriptions } from 'atelier-ui-vue/descriptions';
import { Drawer } from 'atelier-ui-vue/drawer';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const open = ref(false);
const setOpen = refSetter(open);
</script>

<template>
  <Button variant="primary" @click="() => setOpen(true)">
    <template #default>查看项目详情</template>
  </Button>
  <Drawer :open="open" title="项目详情" @close="() => setOpen(false)">
    <template #default>
      <p>项目成员、访问权限和最近动态会显示在这里。</p>
      <Descriptions
        :column="1"
        :items="[
          { key: 'owner', label: '负责人', children: '林知夏' },
          { key: 'status', label: '状态', children: '进行中' },
        ]"
      ></Descriptions>
    </template>
  </Drawer>
</template>
