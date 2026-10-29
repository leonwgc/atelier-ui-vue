<script setup lang="ts">
import { ref } from 'vue';
import { Anchor } from 'atelier-ui-vue/anchor';

const containerRef = ref<(HTMLDivElement | null) | null>(null);
const browserWindow = window;
</script>

<template>
  <Anchor
    direction="horizontal"
    :affix="false"
    :getContainer="() => containerRef ?? browserWindow"
    :items="[
      { href: '#overview', title: '概览' },
      { href: '#members', title: '成员' },
      { href: '#files', title: '文件' },
    ]"
  ></Anchor>
  <div ref="containerRef" :style="{ height: 300, overflow: 'auto' }">
    <section id="overview">概览</section>
    <section id="members">成员</section>
    <section id="files">文件</section>
  </div>
</template>
