<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { Transition as AtelierTransition } from 'atelier-ui-vue/transition';

const open = ref(true);
</script>

<template>
  <div class="demo">
    <div class="toolbar">
      <Button :aria-expanded="open" @click="open = !open">
        {{ open ? '收起筛选面板' : '展开筛选面板' }}
      </Button>
      <span class="hint" aria-live="polite">
        {{ open ? '面板已展开' : '面板已收起' }}
      </span>
    </div>
    <div class="stage transition-stage">
      <AtelierTransition :in="open" animation="collapse" :timeout="450">
        <article class="card">
          <span class="badge">筛选条件</span>
          <strong>项目筛选</strong>
          <p>当前条件：进行中 · 设计团队 · 本月更新</p>
        </article>
      </AtelierTransition>
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
.transition-stage {
  min-height: 210px;
}
</style>
