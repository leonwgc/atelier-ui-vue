<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Upload } from 'atelier-ui-vue/upload';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const fileNames = ref<string[]>([]);
const setFileNames = refSetter(fileNames);
</script>

<template>
  <div>
    <Upload
      accept=".pdf,.png,.jpg"
      multiple
      @change="
        (files: File[]) => setFileNames(files.map((file: File) => file.name))
      "
    ></Upload>
    <p>
      <template v-if="fileNames.length">
        {{ '已选择 ' + fileNames.length + ' 个文件' }}
      </template>
      <template v-else>选择的文件仅保存在当前演示状态中</template>
    </p>
  </div>
</template>
