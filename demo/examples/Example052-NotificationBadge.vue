<script setup lang="ts">
import { Avatar } from 'atelier-ui-vue/avatar';
import { Badge } from 'atelier-ui-vue/badge';
import { Button } from 'atelier-ui-vue/button';
</script>

<template>
  <div>
    <Badge :count="5">
      <template #default><Avatar name="林知夏"></Avatar></template>
    </Badge>
    <Badge :count="128" :overflowCount="99">
      <template #default>
        <Button><template #default>通知</template></Button>
      </template>
    </Badge>
    <Badge status="success" text="项目运行正常"></Badge>
  </div>
</template>
