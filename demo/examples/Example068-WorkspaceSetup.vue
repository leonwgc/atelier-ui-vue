<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { Steps } from 'atelier-ui-vue/steps';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const current = ref(1);
const setCurrent = refSetter(current);
</script>

<template>
  <div>
    <Steps
      :current="current"
      @change="setCurrent"
      :items="[
        { title: '创建工作区', description: '填写基本信息' },
        { title: '邀请成员', description: '与团队协作' },
        { title: '完成设置', description: '开始使用' },
      ]"
    ></Steps>
    <Button @click="() => setCurrent((step: number) => (step + 1) % 3)">
      <template #default>下一步</template>
    </Button>
  </div>
</template>
