<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { FlipCard } from 'atelier-ui-vue/flip-card';

const flipped = ref(false);
</script>

<template>
  <div class="flip-demo">
    <div class="flip-demo__toolbar">
      <Button :aria-pressed="flipped" @click="flipped = !flipped">
        {{ flipped ? '翻回正面' : '翻到背面' }}
      </Button>
      <span class="flip-demo__status" aria-live="polite">
        {{ flipped ? '当前：背面 · 成员详情' : '当前：正面 · 成员名片' }}
      </span>
    </div>

    <FlipCard class="flip-demo__card" :flipped="flipped">
      <template #front>
        <article class="member-card member-card--front">
          <span class="member-card__side">正面 / PROFILE</span>
          <span class="member-card__avatar" aria-hidden="true">AM</span>
          <strong class="member-card__name">Alex Morgan</strong>
          <span class="member-card__role">产品设计师</span>
          <span class="member-card__hint">翻转卡片，查看成员详情 →</span>
        </article>
      </template>
      <template #back>
        <article class="member-card member-card--back">
          <span class="member-card__side">背面 / DETAILS</span>
          <strong class="member-card__name">让好想法成为好体验</strong>
          <p class="member-card__description">
            负责产品交互与设计系统，让每个界面细节保持一致。
          </p>
          <span class="member-card__email">alex@example.com</span>
          <span class="member-card__hint">点击“翻回正面”再次查看翻转效果</span>
        </article>
      </template>
    </FlipCard>
  </div>
</template>

<style scoped>
.flip-demo {
  display: grid;
  justify-items: start;
  gap: 20px;
}

.flip-demo__toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.flip-demo__status {
  color: var(--at-color-muted);
  font-size: 13px;
}

.flip-demo__card {
  width: min(100%, 340px);
}

.member-card {
  display: flex;
  min-height: 250px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 24px;
  border: 1px solid var(--at-color-border);
  border-radius: var(--at-radius-md);
  box-shadow: var(--at-shadow-sm);
}

.member-card--front {
  background: var(--at-color-surface);
  color: var(--at-color-text);
}

.member-card--back {
  border-color: var(--at-color-primary);
  background: var(--at-color-primary);
  color: var(--at-color-surface);
}

.member-card__side {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  opacity: 0.7;
}

.member-card__avatar {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 50%;
  background: var(--at-color-primary-soft);
  color: var(--at-color-primary);
  font-weight: 600;
}

.member-card__name {
  font-size: 21px;
}

.member-card__role,
.member-card__description,
.member-card__email {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

.member-card__hint {
  margin-top: auto;
  padding-top: 12px;
  font-size: 12px;
  opacity: 0.75;
}
</style>
