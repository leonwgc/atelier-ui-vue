<script setup lang="ts">
import { ref } from 'vue';
import { ColorPicker } from 'atelier-ui-vue/color-picker';

const color = ref('#685cf6');
</script>

<template>
  <ColorPicker
    label="品牌主色"
    v-model="color"
    :presets="['#685cf6', '#2f9472', '#c98a29', '#d94d64']"
  ></ColorPicker>
  <ColorPicker
    label="带透明度 · RGB"
    defaultValue="#2f947299"
    showAlpha
    format="rgb"
  ></ColorPicker>
  <ColorPicker
    label="仅色块"
    defaultValue="#c98a29"
    :showText="false"
  ></ColorPicker>
</template>
