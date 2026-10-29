<script setup lang="ts">
import { ref } from 'vue';
import { InputNumber } from 'atelier-ui-vue/input-number';

const count = ref<number | null>(8);
</script>

<template>
  <InputNumber
    label="团队人数"
    :min="1"
    :max="100"
    v-model="count"
  ></InputNumber>
  <InputNumber
    label="预算（万元）"
    :min="0"
    :step="0.5"
    :precision="1"
    :defaultValue="12.5"
    controls="inline"
  >
    <template #prefix>¥</template>
  </InputNumber>
  <InputNumber
    label="折扣"
    :min="0"
    :max="100"
    :defaultValue="85"
    :formatter="(value: number) => `${value}%`"
    :parser="(text: string) => Number(text.replace('%', ''))"
  ></InputNumber>
</template>
