<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Input } from 'atelier-ui-vue/input';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next;
  };
}
const query = ref('');
const setQuery = refSetter(query);
</script>

<template>
  <div>
    <Input label="项目名称" placeholder="请输入项目名称"></Input>
    <Input
      label="搜索成员"
      placeholder="按姓名或邮箱搜索"
      clearable
      :modelValue="query"
      @change="(event: Event) => setQuery((event.target as HTMLInputElement).value)"
    >
      <template #prefix><span aria-hidden="true">⌕</span></template>
    </Input>
    <Input
      label="工作邮箱"
      type="email"
      placeholder="name@company.com"
      error="请输入有效的邮箱地址"
    ></Input>
    <Input
      label="只读字段"
      modelValue="workspace-id-1842"
      readOnly
      hint="此字段由系统自动生成"
    ></Input>
  </div>
</template>
