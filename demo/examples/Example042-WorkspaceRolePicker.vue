<script setup lang="ts">
import { ref } from 'vue';
import { RadioGroup } from 'atelier-ui-vue/radio';

const roles = [
  { label: '管理员', value: 'admin' },
  { label: '成员', value: 'member' },
  { label: '访客', value: 'guest' },
];
const role = ref('member');
</script>

<template>
  <div>
    <RadioGroup
      name="workspace-role"
      :options="roles"
      v-model="role"
    ></RadioGroup>
    <p>当前角色： {{ role }}</p>
  </div>
</template>
