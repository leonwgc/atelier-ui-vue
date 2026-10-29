<script setup lang="ts">
import { ref } from 'vue';
import { Select } from 'atelier-ui-vue/select';

const channels = [
  { label: '邮件通知', value: 'email' },
  { label: '站内消息', value: 'in-app' },
  { label: 'Slack', value: 'slack' },
  { label: '企业微信', value: 'wecom' },
];
const selected = ref<string[]>(['email', 'in-app']);
</script>

<template>
  <Select
    label="通知渠道"
    :options="channels"
    multiple
    searchable
    v-model="selected"
  ></Select>
  <Select
    label="折叠超出的标签"
    :options="channels"
    multiple
    :defaultValue="['email', 'in-app', 'slack']"
    :maxTagCount="2"
  ></Select>
</template>
