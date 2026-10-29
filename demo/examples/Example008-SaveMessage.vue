<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { message } from 'atelier-ui-vue/message';

const save = () => message.success('设置已保存');
</script>

<template>
  <Button @click="save"><template #default>保存设置</template></Button>
</template>
