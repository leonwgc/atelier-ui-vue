<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Slider } from 'atelier-ui-vue/slider';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const opacity = ref(72);
const setOpacity = refSetter(opacity);
const range = ref<[number, number]>([20, 60]);
const setRange = refSetter(range);
</script>

<template>
  <Slider
    label="透明度"
    showValue
    :modelValue="opacity"
    @change="(value) => typeof value === 'number' && setOpacity(value)"
    :tooltipFormatter="(value: number) => `${value}%`"
  ></Slider>
  <Slider
    label="预算区间"
    showValue
    range
    :modelValue="range"
    @change="(value) => Array.isArray(value) && setRange(value)"
    :step="5"
  ></Slider>
  <Slider
    label="满意度"
    :marks="{ 0: '很差', 50: '一般', 100: '很棒' }"
    :step="null"
    :defaultValue="50"
    tooltip="none"
  ></Slider>
</template>
