<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { Space } from 'atelier-ui-vue/space';
</script>

<template>
  <Space :size="12">
    <template #default>
      <Button><template #default>保存草稿</template></Button>
      <Button variant="primary"><template #default>发布</template></Button>
    </template>
  </Space>
</template>
