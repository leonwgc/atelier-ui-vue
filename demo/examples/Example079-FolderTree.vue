<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Tree, type TreeNode } from 'atelier-ui-vue/tree';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const data: TreeNode[] = [
  {
    key: 'design',
    title: '设计部',
    children: [
      { key: 'brand', title: '品牌项目' },
      { key: 'ux', title: '体验规范' },
    ],
  },
  { key: 'archive', title: '归档', isLeaf: false },
];
const checked = ref<string[]>([]);
const setChecked = refSetter(checked);
const tree = ref(data);
const setTree = refSetter(tree);
const loadData = (node: TreeNode) =>
  fetch(`/api/folders/${node.key}`)
    .then((res: Response) => res.json())
    .then((children) => {
      setTree((current: TreeNode[]) =>
        current.map((item: TreeNode) =>
          item.key === node.key ? { ...item, children } : item,
        ),
      );
    });
</script>

<template>
  <Tree
    :treeData="tree"
    checkable
    defaultExpandAll
    :checkedKeys="checked"
    @check="(keys: string[]) => setChecked(keys)"
  ></Tree>
  <Tree
    :treeData="tree"
    showLine
    showIcon
    :loadData="loadData"
    filterValue="品牌"
    blockNode
  ></Tree>
</template>
