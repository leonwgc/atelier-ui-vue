<script setup lang="ts">
import { ref } from 'vue';
import { Select } from 'atelier-ui-vue/select';

const roles = [
  { label: '产品设计师', value: 'designer', description: '负责界面与体验' },
  { label: '前端工程师', value: 'frontend' },
  { label: '产品经理', value: 'pm' },
  { label: '访客（只读）', value: 'guest', disabled: true },
];
const role = ref('frontend');
</script>

<template>
  <Select label="团队角色" :options="roles" v-model="role" allowClear></Select>
  <Select label="禁用状态" :options="roles" defaultValue="pm" disabled></Select>
</template>
