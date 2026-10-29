<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { Input } from 'atelier-ui-vue/input';
import { Modal } from 'atelier-ui-vue/modal';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const open = ref(false);
const setOpen = refSetter(open);
const email = ref('');
const setEmail = refSetter(email);
async function sendInvitation() {
  console.log('Invite:', email.value);
  setOpen(false);
}
</script>

<template>
  <Button variant="primary" @click="() => setOpen(true)">
    <template #default>邀请成员</template>
  </Button>
  <Modal
    :open="open"
    title="邀请团队成员"
    @close="() => setOpen(false)"
    @ok="sendInvitation"
  >
    <template #default>
      <Input
        label="邮箱地址"
        type="email"
        placeholder="name@company.com"
        :modelValue="email"
        @change="
          (event: Event) => setEmail((event.target as HTMLInputElement).value)
        "
      ></Input>
    </template>
  </Modal>
</template>
