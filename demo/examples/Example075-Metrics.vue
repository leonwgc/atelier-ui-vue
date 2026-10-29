<script setup lang="ts">
import { Countdown, Statistic } from 'atelier-ui-vue/statistic';

const deadline = Date.now() + 1000 * 60 * 60 * 26;
</script>

<template>
  <Statistic title="活跃成员" :value="128430">
    <template #suffix>人</template>
  </Statistic>
  <Statistic
    title="月度营收"
    :value="2395120.5"
    :precision="2"
    trend="up"
    trendLabel="较上月 +12.4%"
  >
    <template #prefix>¥</template>
  </Statistic>
  <Statistic title="跳出率" :value="32.18" :precision="2" trend="down">
    <template #suffix>%</template>
  </Statistic>
  <Statistic title="加载中" :value="0" loading></Statistic>
  <Countdown
    title="活动倒计时"
    :value="deadline"
    format="D 天 HH:mm:ss"
    @finish="() => console.log('结束')"
  ></Countdown>
</template>
