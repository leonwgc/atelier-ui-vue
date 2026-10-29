<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Transfer } from 'atelier-ui-vue/transfer';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const members = [
  { key: 'lin', title: '林知夏', description: '设计' },
  { key: 'chen', title: '陈一川', description: '前端' },
  { key: 'zhou', title: '周禾', description: '产品' },
  { key: 'guest', title: '访客账号', disabled: true },
];
const targets = ref<string[]>(['lin']);
const setTargets = refSetter(targets);
</script>

<template>
  <Transfer
    :dataSource="members"
    :targetKeys="targets"
    @change="(keys: string[]) => setTargets(keys)"
    :titles="['可选成员', '项目成员']"
  ></Transfer>
  <Transfer
    :dataSource="members"
    :defaultTargetKeys="['chen']"
    showSearch
    oneWay
  >
    <template #item="scope">
      <span>
        {{ scope.item.title }}
        ·
        {{ scope.item.description }}
      </span>
    </template>
    <template #footer="scope">
      {{ `${scope.direction === 'left' ? '可选' : '已选'} ${scope.total} 人` }}
    </template>
  </Transfer>
</template>
