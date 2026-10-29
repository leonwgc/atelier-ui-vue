<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { Empty } from 'atelier-ui-vue/empty';
</script>

<template>
  <Empty description="还没有项目">
    <template #default>
      <Button variant="primary">
        <template #default>创建第一个项目</template>
      </Button>
    </template>
  </Empty>
</template>
