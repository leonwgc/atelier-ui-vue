<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { ScrollReveal } from 'atelier-ui-vue/scroll-reveal';

const scrollArea = ref<HTMLDivElement | null>(null);
function resetScroll() {
  scrollArea.value?.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <div class="demo">
    <div class="toolbar">
      <Button @click="resetScroll">回到顶部</Button>
      <span class="hint">在下方区域向下滚动，让卡片进入视野</span>
    </div>
    <div ref="scrollArea" class="scroll-stage" tabindex="0" aria-label="滚动动画演示区域">
      <div class="scroll-spacer">向下滚动 ↓</div>
      <ScrollReveal :once="false" :distance="36" :duration="800" :threshold="0.3">
        <article class="card">
          <span class="badge">ATELIER UI</span>
          <strong>刚好在此刻出现</strong>
          <p>卡片进入可见区域时显示，移出后可再次触发。</p>
        </article>
      </ScrollReveal>
      <div class="scroll-end">↑ 向上滚动可再次观察</div>
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
.scroll-stage {
  width: min(100%, 460px);
  height: 280px;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid var(--at-color-border);
  border-radius: var(--at-radius-md);
  background: var(--at-color-surface-muted);
}
.scroll-spacer {
  display: grid;
  min-height: 300px;
  place-items: center;
  color: var(--at-color-muted);
}
.scroll-end {
  padding: 28px 0;
  color: var(--at-color-muted);
  font-size: 13px;
  text-align: center;
}
</style>
