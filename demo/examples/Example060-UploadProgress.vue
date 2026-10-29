<script setup lang="ts">
import { Progress } from 'atelier-ui-vue/progress';
</script>

<template>
  <div>
    <Progress :percent="68" status="active" label="上传中 68%"></Progress>
    <Progress :percent="100"></Progress>
    <Progress :percent="42" status="exception"></Progress>
  </div>
</template>
