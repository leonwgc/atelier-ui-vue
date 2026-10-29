<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import {
  Table,
  type TableChange,
  type TableColumn,
} from 'atelier-ui-vue/table';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const allProjects: Project[] = Array.from(
  { length: 42 },
  (_: unknown, index: number) => ({
    id: String(index + 1),
    name: '项目 ' + (index + 1),
    owner: index % 2 === 0 ? '林知夏' : '陈一川',
    status: index % 2 === 0 ? '进行中' : '已完成',
  }),
);
type Project = {
  id: string;
  name: string;
  owner: string;
  status: string;
};
async function requestProjects(change: TableChange) {
  await new Promise((resolve: (value: unknown) => void) =>
    window.setTimeout(resolve, 250),
  );
  const start = (change.page - 1) * change.pageSize;
  return allProjects.slice(start, start + change.pageSize);
}
const columns: TableColumn<Record<string, unknown>>[] = [
  { key: 'name', title: '项目名称', dataIndex: 'name', sorter: true },
  { key: 'owner', title: '负责人', dataIndex: 'owner' },
  { key: 'status', title: '状态', dataIndex: 'status' },
];
const page = ref(1);
const setPage = refSetter(page);
const pageData = ref(allProjects.slice(0, 10));
const setPageData = refSetter(pageData);
const loading = ref(false);
const setLoading = refSetter(loading);
async function handleTableChange(change: TableChange) {
  setLoading(true);
  setPage(change.page);
  try {
    setPageData(await requestProjects(change));
  } finally {
    setLoading(false);
  }
}
</script>

<template>
  <Table
    mode="server"
    rowKey="id"
    :columns="columns"
    :dataSource="pageData"
    :currentPage="page"
    :total="allProjects.length"
    :pageSize="10"
    :loading="loading"
    @change="handleTableChange"
  ></Table>
</template>
