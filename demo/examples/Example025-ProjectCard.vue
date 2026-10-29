<script setup lang="ts">
import { HoverLift } from 'atelier-ui-vue/hover-lift';
</script>

<template>
  <div class="demo">
    <p class="hint">鼠标移入卡片观察抬升，移出后恢复</p>
    <div class="stage">
      <HoverLift :lift="12" :duration="350" class="effect-frame">
        <article class="card">
          <span class="badge">ATELIER UI</span>
          <strong>探索最新项目</strong>
          <p>将鼠标移到卡片上，卡片会向上抬起。</p>
        </article>
      </HoverLift>
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
.effect-frame {
  border-radius: var(--at-radius-md);
}
</style>
