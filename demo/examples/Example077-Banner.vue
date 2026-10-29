<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { ref } from 'vue';
import { Carousel, type CarouselRef } from 'atelier-ui-vue/carousel';

const componentRef = ref<CarouselRef | null>(null);
const covers = ['#685cf6', '#2f9472', '#e9a438'].map(
  (color, index) =>
    'data:image/svg+xml,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="100%" height="100%" fill="${color}"/><text x="32" y="190" fill="white" font-size="48">Atelier ${index + 1}</text></svg>`,
    ),
);
</script>

<template>
  <Carousel
    ref="componentRef"
    autoplay
    arrows
    :aspectRatio="16 / 7"
    @change="(index: number) => console.log(index)"
  >
    <template #default>
      <template v-for="cover in covers"><img :src="cover" alt="" /></template>
    </template>
  </Carousel>
  <Button type="button" @click="() => componentRef?.next()">下一张</Button>
  <Carousel effect="fade" dotPosition="right" :aspectRatio="4 / 3">
    <template #default>
      <div>设计评审</div>
      <div>发布计划</div>
    </template>
  </Carousel>
</template>
