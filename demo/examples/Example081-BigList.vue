<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Listy, type ListyRef } from 'atelier-ui-vue/listy';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const componentRef = ref<ListyRef | null>(null);
const count = ref(2000);
const setCount = refSetter(count);
const items = Array.from(
  { length: count.value },
  (_: unknown, index: number) => ({
    id: index + 1,
    name: `成员 ${index + 1}`,
  }),
);
</script>

<template>
  <Button type="button" @click="() => componentRef?.scrollTo(999, 'center')">
    跳到第 1000 行
  </Button>
  <Listy
    ref="componentRef"
    :items="items"
    :itemKey="(_, index) => items[index].id"
    :height="300"
    :itemHeight="48"
    dynamicHeight
    @endReached="() => setCount((value: number) => value + 500)"
  >
    <template #default="scope">
      <strong>{{ items[scope.index].name }}</strong>
    </template>
  </Listy>
</template>
