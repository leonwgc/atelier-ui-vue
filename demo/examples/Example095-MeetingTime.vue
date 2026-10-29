<script setup lang="ts">
import { ref } from 'vue';
import { TimePicker } from 'atelier-ui-vue/time-picker';

const time = ref<string | null>('14:30');
</script>

<template>
  <TimePicker
    label="会议时间"
    v-model="time"
    minTime="09:00"
    maxTime="18:00"
  ></TimePicker>
  <TimePicker
    label="精确到秒"
    format="HH:mm:ss"
    defaultValue="08:15:30"
    :secondStep="15"
  ></TimePicker>
  <TimePicker
    label="15 分钟间隔"
    :minuteStep="15"
    :showNow="false"
  ></TimePicker>
</template>
