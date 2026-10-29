<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'atelier-ui-vue/button';
import { AnimatedList } from 'atelier-ui-vue/animated-list';

const activities = ref([{ id: 1, title: '工作区已创建', detail: '团队可以开始协作了' }]);
let nextId = 2;
function addActivity() {
  const id = nextId++;
  activities.value.push({ id, title: `新动态 ${id}`, detail: '此条内容刚刚加入列表' });
}
function reset() {
  activities.value = [
    { id: nextId++, title: '工作区已创建', detail: '团队可以开始协作了' },
  ];
}
</script>

<template>
  <div class="demo">
    <div class="toolbar">
      <Button :disabled="activities.length >= 6" @click="addActivity">添加动态</Button>
      <Button variant="tertiary" @click="reset">重置列表</Button>
      <span class="hint">最多添加 6 项，观察新增项的进入动画</span>
    </div>
    <AnimatedList
      :items="activities"
      :get-item-key="(_, index) => activities[index].id"
      :duration="600"
      :stagger-delay="100"
      class="activity-list"
    >
      <template #default="{ index }">
        <article class="activity-row">
          <span class="badge">{{ index + 1 }}</span>
          <div>
            <strong>{{ activities[index].title }}</strong>
            <p>{{ activities[index].detail }}</p>
          </div>
        </article>
      </template>
    </AnimatedList>
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
.activity-list {
  width: min(100%, 480px);
}
.activity-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px;
  border: 1px solid var(--at-color-border);
  border-radius: var(--at-radius-md);
  background: var(--at-color-surface);
}
.activity-row p {
  margin: 6px 0 0;
  color: var(--at-color-muted);
  font-size: 13px;
}
</style>
