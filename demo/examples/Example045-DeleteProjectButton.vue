<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { Modal } from 'atelier-ui-vue/modal';

function deleteProject() {
  console.log('Project deleted');
}
function confirmDelete() {
  Modal.confirm({
    title: '删除这个项目？',
    content: '此操作无法撤销。',
    danger: true,
    onOk: deleteProject,
  });
}
</script>

<template>
  <Button variant="danger" @click="confirmDelete">
    <template #default>删除项目</template>
  </Button>
</template>
