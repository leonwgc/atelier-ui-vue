<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { AutoComplete } from 'atelier-ui-vue/auto-complete';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const value = ref('');
const setValue = refSetter(value);
</script>

<template>
  <AutoComplete
    label="负责人"
    :options="['林知夏', '陈一川', '周禾']"
    v-model="value"
    allowClear
    placeholder="搜索或输入姓名"
  ></AutoComplete>
  <AutoComplete
    label="邮箱后缀补全"
    :filterOption="false"
    :options="
      value.includes('@')
        ? []
        : ['gmail.com', 'outlook.com'].map(
            (domain: string) => `${value || 'name'}@${domain}`,
          )
    "
    @select="(selected: string) => setValue(selected)"
  ></AutoComplete>
</template>
