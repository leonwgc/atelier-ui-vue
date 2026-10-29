<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { Popover } from 'atelier-ui-vue/popover';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const open = ref(false);
const setOpen = refSetter(open);
</script>

<template>
  <Popover title="分享项目" content="复制链接并邀请团队成员加入。">
    <template #default>
      <Button><template #default>点击触发</template></Button>
    </template>
  </Popover>
  <Popover trigger="hover" placement="top" content="悬停时显示。">
    <template #default>
      <Button variant="tertiary"><template #default>悬停触发</template></Button>
    </template>
  </Popover>
  <Popover
    trigger="focus"
    placement="right"
    :arrow="false"
    content="聚焦时显示。"
  >
    <template #default><input placeholder="聚焦触发" /></template>
  </Popover>
  <Popover
    :open="open"
    @update:open="setOpen"
    placement="bottom-end"
    title="受控弹层"
  >
    <template #content>
      <Button size="sm" @click="() => setOpen(false)">
        <template #default>知道了</template>
      </Button>
    </template>
    <template #default>
      <Button variant="primary">
        <template #default>受控 · 富内容</template>
      </Button>
    </template>
  </Popover>
</template>
