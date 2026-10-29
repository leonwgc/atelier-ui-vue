<script setup lang="ts">
import { AutoComplete } from 'atelier-ui-vue/auto-complete';

const members = [
  { value: '林知夏', description: 'lin@atelier.design · 设计' },
  { value: '陈一川', description: 'chen@atelier.design · 前端' },
];
</script>

<template>
  <AutoComplete
    label="搜索团队成员"
    :options="members"
    popupClassName="member-popup"
    :popupMatchSelectWidth="false"
    :popupStyle="{ minWidth: 320 }"
  >
    <template #option="scope">
      <span :class="scope.active ? 'member member--scope.active' : 'member'">
        <span class="member__avatar">{{ scope.option.value.slice(0, 1) }}</span>
        <span>
          <strong>{{ scope.option.value }}</strong>
          <small>{{ scope.option.description }}</small>
        </span>
      </span>
    </template>
  </AutoComplete>
</template>
