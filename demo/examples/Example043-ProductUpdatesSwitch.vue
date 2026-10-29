<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Switch } from 'atelier-ui-vue/switch';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const enabled = ref(true);
const setEnabled = refSetter(enabled);
</script>

<template>
  <label>
    <span>开启产品更新</span>
    <Switch
      :modelValue="enabled"
      @change="
        (event: Event) => setEnabled((event.target as HTMLInputElement).checked)
      "
    >
      <template #checked>开</template>
      <template #unchecked>关</template>
    </Switch>
  </label>
</template>
