<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { Tour } from 'atelier-ui-vue/tour';

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
const createRef = ref<HTMLSpanElement | null>(null);
const searchRef = ref<(HTMLDivElement | null) | null>(null);
const steps = [
  { title: '欢迎使用 Atelier', description: '花 30 秒了解工作区。' },
  {
    title: '新建项目',
    description: '从这里创建项目。',
    target: () => createRef.value,
    placement: 'bottom-start' as const,
  },
  {
    title: '全局搜索',
    description: '也可以用 ⌘K 打开。',
    target: () => searchRef.value,
    placement: 'bottom' as const,
  },
];
</script>

<template>
  <span ref="createRef"><Button variant="primary">＋ 新建项目</Button></span>
  <div ref="searchRef">⌕ 搜索项目、成员…</div>
  <Button @click="() => setOpen(true)">
    <template #default>开始引导</template>
  </Button>
  <Tour
    :open="open"
    :steps="steps"
    @close="() => setOpen(false)"
    @finish="() => console.log('done')"
  ></Tour>
</template>
