<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Collapse } from 'atelier-ui-vue/collapse';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const activeKey = ref('members');
const setActiveKey = refSetter(activeKey);
</script>

<template>
  <Collapse
    accordion
    :activeKey="activeKey"
    @change="(key: string | string[]) => setActiveKey(String(key))"
    :items="[
      {
        key: 'members',
        title: '成员与权限',
        children: '管理工作区成员的访问级别。',
      },
      {
        key: 'notifications',
        title: '通知设置',
        children: '选择项目更新的通知方式。',
      },
      {
        key: 'archive',
        title: '归档项目',
        children: '归档后项目会从活跃列表中移除。',
      },
    ]"
  ></Collapse>
</template>
