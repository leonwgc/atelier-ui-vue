<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Checkbox, CheckboxGroup } from 'atelier-ui-vue/checkbox';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const topicOptions = [
  { label: '产品设计', value: 'design' },
  { label: '工程实践', value: 'engineering' },
  { label: '团队管理', value: 'team' },
];
const updatesEnabled = ref(true);
const setUpdatesEnabled = refSetter(updatesEnabled);
const topics = ref(['design']);
</script>

<template>
  <div>
    <Checkbox
      :modelValue="updatesEnabled"
      @change="
        (event: Event) =>
          setUpdatesEnabled((event.target as HTMLInputElement).checked)
      "
    >
      <template #default>接收产品更新</template>
    </Checkbox>
    <CheckboxGroup :options="topicOptions" v-model="topics"></CheckboxGroup>
    <p>已选择： {{ topics.join('、') || '无' }}</p>
  </div>
</template>
