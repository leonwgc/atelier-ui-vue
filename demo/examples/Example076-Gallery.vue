<script setup lang="ts">
import { Image, ImagePreviewGroup } from 'atelier-ui-vue/image';

const covers = ['#685cf6', '#2f9472', '#e9a438'].map(
  (color, index) =>
    'data:image/svg+xml,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="100%" height="100%" fill="${color}"/><text x="32" y="190" fill="white" font-size="48">Atelier ${index + 1}</text></svg>`,
    ),
);
</script>

<template>
  <Image :src="covers[0]" alt="项目封面" :width="240" :height="150"></Image>
  <Image
    src="/broken.png"
    :fallback="covers[1]"
    alt="失败后回退"
    :width="240"
    :height="150"
  ></Image>
  <ImagePreviewGroup>
    <template #default>
      <template v-for="(cover, index) in covers">
        <Image
          :src="cover"
          :alt="`图片 ${Number(index) + 1}`"
          :width="120"
          :height="80"
        ></Image>
      </template>
    </template>
  </ImagePreviewGroup>
</template>
