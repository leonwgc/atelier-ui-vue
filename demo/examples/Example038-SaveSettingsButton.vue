<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next;
  };
}
const loading = ref(false);
const setLoading = refSetter(loading);
async function saveSettings() {
  setLoading(true);
  try {
    await new Promise((resolve: (value: unknown) => void) =>
      window.setTimeout(resolve, 1200),
    );
  } finally {
    setLoading(false);
  }
}
</script>

<template>
  <Button variant="primary" :loading="loading" @click="saveSettings">
    <template #default>保存设置</template>
  </Button>
</template>
