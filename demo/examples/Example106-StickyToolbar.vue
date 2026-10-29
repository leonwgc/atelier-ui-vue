<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Affix } from 'atelier-ui-vue/affix';
import { Button } from 'atelier-ui-vue/button';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const containerRef = ref<(HTMLDivElement | null) | null>(null);
const pinned = ref(false);
const setPinned = refSetter(pinned);
</script>

<template>
  <div ref="containerRef" :style="{ height: 260, overflow: 'auto' }">
    <p>向下滚动…</p>
    <Affix :target="() => containerRef" :offsetTop="0" @change="setPinned">
      <template #default>
        <div :class="pinned ? 'toolbar toolbar--pinned' : 'toolbar'">
          <strong>项目设置</strong>
          <Button size="sm" variant="primary">
            <template #default>保存更改</template>
          </Button>
        </div>
      </template>
    </Affix>
  </div>
</template>
