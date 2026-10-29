<script setup lang="ts">
import { Alert } from 'atelier-ui-vue/alert';
</script>

<template>
  <div>
    <Alert variant="info" title="即将发布">
      <template #default>项目成员会收到一封更新通知。</template>
    </Alert>
    <Alert variant="success" title="更改已保存" closable>
      <template #default>你的工作区信息已更新。</template>
    </Alert>
    <Alert variant="warning" title="存储空间不足">
      <template #default>请清理文件或升级套餐后继续上传。</template>
    </Alert>
    <Alert variant="error" title="保存失败">
      <template #default>网络连接中断，请重试。</template>
    </Alert>
  </div>
</template>
