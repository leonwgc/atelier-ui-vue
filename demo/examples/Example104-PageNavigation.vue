<script setup lang="ts">
import { ref } from 'vue';
import { Anchor } from 'atelier-ui-vue/anchor';

const containerRef = ref<(HTMLDivElement | null) | null>(null);
const browserWindow = window;
</script>

<template>
  <div :style="{ display: 'flex', gap: 24 }">
    <div ref="containerRef" :style="{ height: 320, overflow: 'auto' }">
      <section id="overview">项目概览</section>
      <section id="members">项目成员</section>
      <section id="activity">最近动态</section>
    </div>
    <Anchor
      :getContainer="() => containerRef ?? browserWindow"
      :offsetTop="12"
      :items="[
        {
          href: '#overview',
          title: '项目概览',
          children: [{ href: '#goals', title: '目标' }],
        },
        { href: '#members', title: '项目成员' },
        { href: '#activity', title: '最近动态' },
      ]"
      @change="(href: string) => console.log(href)"
    ></Anchor>
  </div>
</template>
