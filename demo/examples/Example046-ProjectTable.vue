<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { TableChange } from 'atelier-ui-vue';
import { Table, type TableColumn } from 'atelier-ui-vue/table';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const projects: Project[] = [
  {
    id: 'p-01',
    name: '品牌视觉升级',
    owner: '林知夏',
    status: '进行中',
    members: 8,
  },
  {
    id: 'p-02',
    name: '移动端体验优化',
    owner: '陈一川',
    status: '评审中',
    members: 5,
  },
  {
    id: 'p-03',
    name: '秋季产品发布',
    owner: '周禾',
    status: '已完成',
    members: 12,
  },
];
type Project = {
  id: string;
  name: string;
  owner: string;
  status: string;
  members: number;
};
const columns: TableColumn<Record<string, unknown>>[] = [
  { key: 'name', title: '项目名称', dataIndex: 'name', sorter: true },
  { key: 'owner', title: '负责人', dataIndex: 'owner' },
  { key: 'status', title: '状态', dataIndex: 'status' },
  { key: 'members', title: '成员', dataIndex: 'members', align: 'center' },
];
const selectedRowKeys = ref<(string | number)[]>([]);
const setSelectedRowKeys = refSetter(selectedRowKeys);
</script>

<template>
  <Table
    rowKey="id"
    :columns="columns"
    :dataSource="projects"
    :rowSelection="{
      selectedRowKeys: selectedRowKeys,
      onChange: setSelectedRowKeys,
    }"
    @change="(change: TableChange) => console.log('Table change:', change)"
  ></Table>
</template>
