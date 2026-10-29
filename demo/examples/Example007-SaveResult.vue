<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { Result } from 'atelier-ui-vue/result';
</script>

<template>
  <Result status="success" title="保存成功" subTitle="项目设置已更新。">
    <template #extra>
      <Button variant="primary"><template #default>返回项目</template></Button>
    </template>
  </Result>
</template>
