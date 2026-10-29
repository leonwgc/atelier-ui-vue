<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { NumberTicker } from 'atelier-ui-vue/number-ticker';

const replay = ref(0);
const revenue = ref(12840);
</script>

<template>
  <div class="demo">
    <div class="toolbar">
      <Button @click="replay++">重新计数</Button>
      <Button variant="tertiary" @click="revenue = revenue === 12840 ? 24680 : 12840">
        切换目标数值
      </Button>
    </div>
    <div class="card metric">
      <span class="hint">本月收入 · 从 0 开始递增</span>
      <NumberTicker
        :key="replay"
        :value="revenue"
        :duration="1800"
        prefix="¥"
        class="metric__number"
      />
      <span class="badge">目标 {{ revenue.toLocaleString() }}</span>
    </div>
  </div>
</template>

<style scoped>
.demo {
  display: grid;
  justify-items: start;
  gap: 20px;
}
.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}
.hint {
  margin: 0;
  color: var(--at-color-muted);
  font-size: 13px;
  line-height: 1.6;
}
.stage {
  width: min(100%, 420px);
  min-width: 0;
  padding: 24px;
  box-sizing: border-box;
  border: 1px dashed var(--at-color-border);
  border-radius: var(--at-radius-md);
  background: var(--at-color-surface-muted);
}
.card {
  display: grid;
  gap: 12px;
  min-height: 150px;
  padding: 24px;
  box-sizing: border-box;
  border: 1px solid var(--at-color-border);
  border-radius: var(--at-radius-md);
  background: var(--at-color-surface);
  color: var(--at-color-text);
  box-shadow: var(--at-shadow-sm);
}
.card strong {
  font-size: 22px;
  line-height: 1.35;
}
.card p {
  margin: 0;
  color: var(--at-color-muted);
  font-size: 14px;
  line-height: 1.7;
}
.badge {
  width: fit-content;
  padding: 5px 10px;
  border-radius: 999px;
  background: var(--at-color-primary-soft);
  color: var(--at-color-primary);
  font-size: 12px;
  font-weight: 600;
}
.metric {
  width: min(100%, 360px);
}
.metric__number {
  color: var(--at-color-primary);
  font-size: 44px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}
</style>
