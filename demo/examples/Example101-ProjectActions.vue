<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { Dropdown, type DropdownItem } from 'atelier-ui-vue/dropdown';

const items: DropdownItem[] = [
  { key: 'edit', label: '编辑项目', extra: '⌘E' },
  { key: 'duplicate', label: '复制项目', extra: '⌘D' },
  { key: 'divider', type: 'divider' },
  {
    key: 'share',
    type: 'group',
    label: '分享',
    children: [
      { key: 'link', label: '复制链接' },
      { key: 'invite', label: '邀请成员' },
    ],
  },
  { key: 'delete', label: '删除项目', danger: true },
];
</script>

<template>
  <Dropdown :items="items" @select="(key: string) => console.log(key)">
    <template #default>
      <Button><template #default>更多操作</template></Button>
    </template>
  </Dropdown>
  <Dropdown :items="items" trigger="hover" placement="bottom-end" showArrow>
    <template #default><span>悬停展开</span></template>
  </Dropdown>
  <Dropdown :items="items" trigger="contextMenu">
    <template #default>
      <div :style="{ padding: 24, border: '1px dashed #ccc' }">
        右键点击此区域
      </div>
    </template>
  </Dropdown>
</template>
