<script setup lang="ts">
import {
  BackTop,
  FloatButton,
  FloatButtonGroup,
} from 'atelier-ui-vue/float-button';
</script>

<template>
  <FloatButton tooltip="帮助">
    <template #icon><span aria-hidden="true">◉</span></template>
  </FloatButton>
  <FloatButton
    type="primary"
    shape="square"
    description="反馈"
    :badge="{ count: 5 }"
  >
    <template #icon><span aria-hidden="true">◉</span></template>
  </FloatButton>
  <FloatButtonGroup shape="square">
    <template #default>
      <FloatButton tooltip="帮助">
        <template #icon><span aria-hidden="true">◉</span></template>
      </FloatButton>
      <FloatButton tooltip="反馈" :badge="{ dot: true }">
        <template #icon><span aria-hidden="true">◉</span></template>
      </FloatButton>
    </template>
  </FloatButtonGroup>
  <FloatButtonGroup trigger="click" type="primary" tooltip="快捷操作">
    <template #default>
      <FloatButton tooltip="新建文档">
        <template #icon><span aria-hidden="true">◉</span></template>
      </FloatButton>
      <FloatButton tooltip="邀请成员">
        <template #icon><span aria-hidden="true">◉</span></template>
      </FloatButton>
    </template>
  </FloatButtonGroup>
  <BackTop :visibilityHeight="200"></BackTop>
</template>
