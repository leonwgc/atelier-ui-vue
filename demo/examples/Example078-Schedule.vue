<script setup lang="ts">
import { ref } from 'vue';
import { Calendar } from 'atelier-ui-vue/calendar';

const events: Record<string, string[]> = {
  '2026-10-15': ['发布 v0.2', '周会'],
};
const key = (date: Date) => date.toISOString().slice(0, 10);
const date = ref(new Date(2026, 9, 27));
</script>

<template>
  <Calendar v-model="date">
    <template #cell="scope">
      <template v-if="scope.info.type === 'date' && events[key(scope.date)]">
        <ul>
          <template v-for="item in events[key(scope.date)]">
            <li>{{ item }}</li>
          </template>
        </ul>
      </template>
      <template v-else></template>
    </template>
  </Calendar>
  <Calendar
    :fullscreen="false"
    v-model="date"
    :disabledDate="(value: Date) => value.getDay() === 0"
  ></Calendar>
</template>
