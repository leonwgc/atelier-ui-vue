<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Pagination } from 'atelier-ui-vue/pagination';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const page = ref(1);
const setPage = refSetter(page);
const pageSize = ref(10);
const setPageSize = refSetter(pageSize);
</script>

<template>
  <Pagination
    :current="page"
    :pageSize="pageSize"
    :total="86"
    showSizeChanger
    @change="
      (nextPage: number, nextPageSize: number) => {
        setPage(nextPage);
        setPageSize(nextPageSize);
      }
    "
  ></Pagination>
</template>
