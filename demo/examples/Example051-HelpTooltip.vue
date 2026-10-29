<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { Tooltip } from 'atelier-ui-vue/tooltip';
</script>

<template>
  <Tooltip title="保存后，所有工作区成员都能看到更新。" placement="top">
    <template #default>
      <Button variant="secondary">
        <template #default>保存帮助</template>
      </Button>
    </template>
  </Tooltip>
</template>
