<script setup lang="ts">
import { ref } from 'vue';
import { InputOTP } from 'atelier-ui-vue/input-otp';

const code = ref('');
</script>

<template>
  <InputOTP
    v-model="code"
    @complete="(value: string) => console.log('验证码：', value)"
    ariaLabel="登录验证码"
  ></InputOTP>
</template>
