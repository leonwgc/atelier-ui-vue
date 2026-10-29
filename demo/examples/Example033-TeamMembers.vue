<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { Input } from 'atelier-ui-vue/input';
import { Transition as AtelierTransition } from 'atelier-ui-vue/transition';
import { TransitionGroup as AtelierTransitionGroup } from 'atelier-ui-vue/transition-group';
import { useFieldArray, useForm } from 'atelier-ui-vue/form';

const form = useForm({ defaultValues: { members: [{ name: 'Alex Chen' }] } });
const members = useFieldArray({ control: form.control, name: 'members' });
function textField(...args: Parameters<typeof form.register>) {
  const field = form.register(...args);
  return { ...field, modelValue: String(field.modelValue ?? '') };
}
</script>

<template>
  <div class="transition-toolbar">
    <Button
      @click="members.append({ name: `成员 ${members.fields.length + 1}` })"
    >
      添加成员
    </Button>
    <span aria-live="polite">
      当前 {{ members.fields.length }} 位成员，增删时观察滑入和退出动画
    </span>
  </div>
  <AtelierTransitionGroup>
    <template #default>
      <AtelierTransition
        v-for="(member, index) in members.fields"
        :key="member.id"
        animation="slide-up"
        :timeout="200"
      >
        <template #exit>
          <div class="transition-exit">
            {{ member.name || '未命名成员' }} 已移除
          </div>
        </template>
        <template #default>
          <div class="transition-member-row">
            <Input
              :aria-label="'成员 ' + (index + 1) + ' 姓名'"
              v-bind="textField('members.' + index + '.name')"
            ></Input>
            <Button
              variant="tertiary"
              size="sm"
              @click="() => members.remove(index)"
            >
              移除
            </Button>
          </div>
        </template>
      </AtelierTransition>
    </template>
  </AtelierTransitionGroup>
</template>

<style scoped>
.transition-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}
.transition-toolbar span {
  color: var(--at-color-muted);
  font-size: 13px;
}
.transition-exit {
  margin-top: 12px;
  padding: 16px;
  border: 1px dashed var(--at-color-border);
  border-radius: var(--at-radius-md);
  color: var(--at-color-muted);
}

.transition-member-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
}
.transition-member-row > .at-field {
  flex: 1;
}
</style>
