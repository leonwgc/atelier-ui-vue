<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { BlurFade } from 'atelier-ui-vue/blur-fade';

const replay = ref(0);
</script>

<template>
  <div class="demo">
    <div class="toolbar">
      <Button @click="replay++">重新播放</Button>
      <span class="hint">点击按钮可重复观察动画</span>
    </div>
    <div class="stage">
      <BlurFade :key="replay" :duration="750" :blur="12" :offsetY="18">
        <article class="card">
          <span class="badge">动画预览</span>
          <strong>从模糊到清晰</strong>
          <p>观察文字与卡片轮廓逐渐变得清晰。</p>
        </article>
      </BlurFade>
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
</style>
