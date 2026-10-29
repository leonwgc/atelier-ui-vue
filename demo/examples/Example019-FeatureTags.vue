<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { Stagger } from 'atelier-ui-vue/stagger';

const replay = ref(0);
</script>

<template>
  <div class="demo">
    <div class="toolbar">
      <Button @click="replay++">重新播放</Button>
      <span class="hint">每项间隔 180ms，按顺序进入</span>
    </div>
    <Stagger :key="replay" :stagger-delay="180" :duration="600">
      <article
        v-for="(title, index) in ['建立工作区', '邀请团队成员', '开始第一个项目']"
        :key="title"
        class="step-card"
      >
        <span class="badge">0{{ index + 1 }}</span>
        <strong>{{ title }}</strong>
      </article>
    </Stagger>
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
.step-card {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
  padding: 18px 24px;
  border: 1px solid var(--at-color-border);
  border-radius: var(--at-radius-md);
  background: var(--at-color-surface);
}
</style>
