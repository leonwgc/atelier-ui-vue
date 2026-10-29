<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
</script>

<template>
  <div>
    <Button variant="primary"><template #default>创建项目</template></Button>
    <Button variant="secondary"><template #default>取消</template></Button>
    <Button variant="tertiary"><template #default>了解更多</template></Button>
    <Button variant="danger"><template #default>删除项目</template></Button>
    <Button variant="ghost"><template #default>更多操作</template></Button>
  </div>
</template>
