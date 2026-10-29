<script setup lang="ts">
import { Marquee } from 'atelier-ui-vue/marquee';
</script>

<template>
  <div class="demo">
    <p class="hint">内容持续滚动，将鼠标移入下方区域可暂停。</p>
    <div class="marquee-stage">
      <Marquee :duration="16" gradient pause-on-hover>
        <span
          v-for="label in ['设计系统', '团队协作', '无障碍体验', '灵活组合', '细节打磨']"
          :key="label"
          class="marquee-item"
        >
          ✦ {{ label }}
        </span>
      </Marquee>
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
.marquee-stage {
  width: min(100%, 620px);
  padding: 24px 0;
  border: 1px solid var(--at-color-border);
  border-radius: var(--at-radius-md);
  overflow: hidden;
}
.marquee-item {
  display: inline-flex;
  padding: 18px 24px;
  border-radius: var(--at-radius-md);
  background: var(--at-color-primary-soft);
  color: var(--at-color-primary);
  font-weight: 600;
}
</style>
