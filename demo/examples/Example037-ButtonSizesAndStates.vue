<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
</script>

<template>
  <div>
    <Button size="sm"><template #default>小号按钮</template></Button>
    <Button size="md"><template #default>默认尺寸</template></Button>
    <Button size="lg" variant="primary">
      <template #default>主要操作</template>
    </Button>
    <Button loading variant="primary">
      <template #default>正在保存</template>
    </Button>
    <Button disabled><template #default>暂不可用</template></Button>
  </div>
</template>
