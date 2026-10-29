<script setup lang="ts">
import { QRCode } from 'atelier-ui-vue/qrcode';

const url = 'https://example.com/invite/atelier';
const logo =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" rx="8" fill="#685cf6"/></svg>',
  );
</script>

<template>
  <QRCode :value="url"></QRCode>
  <QRCode :value="url" color="#685cf6">
    <template #icon>{{ logo }}</template>
  </QRCode>
  <QRCode
    :value="url"
    type="canvas"
    bgColor="#f7f8fb"
    :bordered="false"
  ></QRCode>
  <QRCode
    :value="url"
    status="expired"
    @refresh="() => console.log('refresh')"
  ></QRCode>
</template>
