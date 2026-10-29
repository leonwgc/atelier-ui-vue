<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { Expand } from 'atelier-ui-vue/expand';

const open = ref(false);
</script>

<template>
  <div class="demo">
    <div class="toolbar">
      <Button :aria-expanded="open" aria-controls="project-details" @click="open = !open">
        {{ open ? '收起项目详情' : '展开项目详情' }}
      </Button>
      <span class="hint">观察内容高度的平滑变化</span>
    </div>
    <div class="stage">
      <div class="summary">
        <strong>品牌体验升级</strong>
        <span class="badge">进行中</span>
      </div>
      <Expand :open="open" :duration="450">
        <div id="project-details" class="details">
          <p>统一品牌视觉、梳理关键交互，并建立可复用的组件规范。</p>
          <p>负责人：Alex Morgan · 下次评审：周五</p>
        </div>
      </Expand>
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
.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.details {
  padding-top: 18px;
  color: var(--at-color-muted);
  font-size: 14px;
  line-height: 1.8;
}
.details p {
  margin: 0 0 12px;
}
</style>
