<script setup lang="ts">
import { TypingAnimation } from 'atelier-ui-vue/typing-animation';
</script>

<template>
  <div class="demo">
    <p class="hint">依次输入、停顿、删除，再切换下一句。</p>
    <div class="card typing-card">
      <span class="badge">为团队打造更好的体验</span>
      <TypingAnimation
        :words="['让想法清晰呈现', '让协作自然发生', '让细节恰到好处']"
        :type-speed="120"
        :delete-speed="70"
        :pause-duration="1500"
        class="headline"
      />
      <p>观察光标与文字的逐字变化。</p>
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
.typing-card {
  width: min(100%, 520px);
}
.headline {
  min-height: 42px;
  font-size: clamp(20px, 4vw, 30px);
  font-weight: 700;
}
</style>
