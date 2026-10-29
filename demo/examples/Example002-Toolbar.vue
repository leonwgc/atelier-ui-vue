<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { Flex } from 'atelier-ui-vue/flex';
</script>

<template>
  <Flex :gap="12" justify="space-between">
    <template #default>
      <strong>项目</strong>
      <Button type="button">筛选</Button>
    </template>
  </Flex>
</template>
