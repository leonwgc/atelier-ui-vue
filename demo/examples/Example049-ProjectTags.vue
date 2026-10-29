<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Tag } from 'atelier-ui-vue/tag';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const showDesignTag = ref(true);
const setShowDesignTag = refSetter(showDesignTag);
</script>

<template>
  <div>
    <Tag variant="primary"><template #default>设计中</template></Tag>
    <Tag variant="success"><template #default>已发布</template></Tag>
    <Tag variant="warning"><template #default>待审核</template></Tag>
    <Tag variant="danger"><template #default>已阻塞</template></Tag>
    <template v-if="showDesignTag">
      <Tag closable @close="() => setShowDesignTag(false)">
        <template #default>可移除标签</template>
      </Tag>
    </template>
  </div>
</template>
