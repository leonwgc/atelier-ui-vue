<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { BorderBeam } from 'atelier-ui-vue/border-beam';

const paused = ref(false);
</script>

<template>
  <div class="demo">
    <div class="toolbar">
      <Button :aria-pressed="paused" @click="paused = !paused">
        {{ paused ? '继续流光' : '暂停流光' }}
      </Button>
      <span class="hint">观察沿卡片边缘旋转的绿色光线</span>
    </div>
    <BorderBeam color="#2f9472" :duration="3" :paused="paused" class="beam-card">
      <span class="badge">PRO WORKSPACE</span>
      <h3>让创意持续流动</h3>
      <p>边框流光强调当前值得关注的内容。</p>
    </BorderBeam>
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
.beam-card {
  width: min(100%, 380px);
}
.beam-card h3 {
  margin: 20px 0 12px;
  font-size: 24px;
}
.beam-card p {
  color: var(--at-color-muted);
  font-size: 14px;
  line-height: 1.7;
}
</style>
