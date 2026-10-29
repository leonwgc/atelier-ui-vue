<script setup lang="ts">
import { Masonry } from 'atelier-ui-vue/masonry';

const cards = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  height: 100 + (index % 3) * 40,
}));
</script>

<template>
  <Masonry
    :dataSource="cards"
    :itemKey="(_, index) => index"
    :columns="{ 0: 1, 480: 2, 760: 3 }"
    :gap="14"
  >
    <template #default="scope">
      <div :style="{ height: cards[scope.index].height }">
        卡片 {{ cards[scope.index].id }}
      </div>
    </template>
  </Masonry>
</template>
