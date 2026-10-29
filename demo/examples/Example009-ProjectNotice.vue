<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { notification } from 'atelier-ui-vue/notification';

const save = () =>
  notification.success({
    title: '成员已加入',
    description: '林知夏已加入 Aurora workspace。',
  });
</script>

<template>
  <Button @click="save"><template #default>查看通知</template></Button>
</template>
