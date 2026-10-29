<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { DatePicker } from 'atelier-ui-vue/date-picker';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const date = ref('2026-11-15');
const setDate = refSetter(date);
</script>

<template>
  <div>
    <DatePicker
      label="预计发布日期"
      hint="选择一个工作日作为目标日期"
      :modelValue="date"
      @change="
        (event: Event) => setDate((event.target as HTMLInputElement).value)
      "
    ></DatePicker>
    <DatePicker
      label="只读日期"
      defaultValue="2026-10-27"
      disabled
    ></DatePicker>
  </div>
</template>
