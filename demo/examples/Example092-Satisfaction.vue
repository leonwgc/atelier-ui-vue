<script setup lang="ts">
import { ref } from 'vue';
import { Rate } from 'atelier-ui-vue/rate';

const score = ref(4);
</script>

<template>
  <Rate v-model="score"></Rate>
  <Rate
    allowHalf
    :defaultValue="3.5"
    :tooltips="['很差', '较差', '一般', '不错', '很棒']"
  ></Rate>
  <Rate :defaultValue="5" disabled size="sm"></Rate>
  <Rate :defaultValue="2"><template #character>♥</template></Rate>
</template>
