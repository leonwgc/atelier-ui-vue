<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { Spin } from 'atelier-ui-vue/spin';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const spinning = ref(true);
const setSpinning = refSetter(spinning);
</script>

<template>
  <div>
    <Spin :spinning="spinning" tip="正在同步成员…">
      <template #default>
        <section :style="{ minHeight: 120 }">
          项目成员：林知夏、陈一川、周禾
        </section>
      </template>
    </Spin>
    <Button @click="() => setSpinning((value: boolean) => !value)">
      <template #default>切换加载状态</template>
    </Button>
  </div>
</template>
