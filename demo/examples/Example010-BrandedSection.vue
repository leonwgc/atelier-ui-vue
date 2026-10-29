<script setup lang="ts">
import { ConfigProvider } from 'atelier-ui-vue/config-provider';
import { Button } from 'atelier-ui-vue/button';
</script>

<template>
  <ConfigProvider
    size="large"
    locale="zh-CN"
    :theme="{ primaryColor: '#2f9472', borderRadius: '12px' }"
  >
    <template #default>
      <Button variant="primary"><template #default>保存更改</template></Button>
    </template>
  </ConfigProvider>
</template>
