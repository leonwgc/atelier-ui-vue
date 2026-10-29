<script setup lang="ts">
import { Watermark } from 'atelier-ui-vue/watermark';
</script>

<template>
  <Watermark
    :content="['Atelier · 内部预览', 'lin@atelier.design']"
    :font="{ color: 'rgba(104, 92, 246, 0.16)', fontSize: 14 }"
    :gap="[80, 70]"
  >
    <template #default>
      <div :style="{ minHeight: 200 }">受保护的内容</div>
    </template>
  </Watermark>
</template>
