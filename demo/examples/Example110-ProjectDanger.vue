<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { Popconfirm } from 'atelier-ui-vue/popconfirm';

const request = fetch;
</script>

<template>
  <Popconfirm
    title="归档这个项目？"
    description="你之后仍可以从归档列表恢复。"
    @confirm="() => console.log('归档')"
  >
    <template #default>
      <Button><template #default>归档项目</template></Button>
    </template>
  </Popconfirm>
  <Popconfirm
    title="删除项目"
    description="删除后不可恢复，确定继续吗？"
    okText="删除"
    okType="danger"
    @confirm="
      () =>
        request('/api/projects/1', { method: 'DELETE' }).then(() => undefined)
    "
  >
    <template #default>
      <Button variant="danger"><template #default>删除项目</template></Button>
    </template>
  </Popconfirm>
</template>
