<script setup lang="ts">
import type { SelectValue } from 'atelier-ui-vue';
import { Button } from 'atelier-ui-vue/button';
import { Input } from 'atelier-ui-vue/input';
import { Select } from 'atelier-ui-vue/select';
import { useFieldArray, useForm } from 'atelier-ui-vue/form';

type WorkspaceValues = {
  name: string;
  email: string;
  plan: string;
  members: Array<{
    name: string;
    role: string;
  }>;
};
const plans = [
  { label: 'Starter · 个人项目', value: 'starter' },
  { label: 'Studio · 成长团队', value: 'studio' },
  { label: 'Enterprise · 大型组织', value: 'enterprise' },
];
const form = useForm<WorkspaceValues>({
  mode: 'onBlur',
  defaultValues: {
    name: '',
    email: '',
    plan: 'studio',
    members: [{ name: 'Jordan Lee', role: 'Admin' }],
  },
});
const members = useFieldArray<WorkspaceValues, WorkspaceValues['members'][number]>({
  control: form.control,
  name: 'members',
});
const onSubmit = form.handleSubmit(async (values) => {
  console.log('Create workspace:', values);
});
function textField(...args: Parameters<typeof form.register>) {
  const field = form.register(...args);
  return { ...field, modelValue: String(field.modelValue ?? '') };
}
</script>

<template>
  <form @submit="onSubmit" noValidate>
    <Input
      label="工作区名称"
      placeholder="例如：Northstar Studio"
      :error="form.formState.errors.name?.message"
      v-bind="
        textField('name', {
          required: '请输入工作区名称',
          minLength: { value: 3, message: '至少输入 3 个字符' },
        })
      "
    ></Input>
    <Input
      label="工作邮箱"
      type="email"
      placeholder="you@company.com"
      :error="form.formState.errors.email?.message"
      v-bind="
        textField('email', {
          required: '请输入工作邮箱',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: '请输入有效的邮箱地址',
          },
        })
      "
    ></Input>
    <Select
      label="选择套餐"
      :options="plans"
      :modelValue="String(form.getValues().plan ?? '')"
      @change="(value: SelectValue) => form.setValue('plan', value)"
    ></Select>
    <h3>团队成员</h3>
    <template v-for="(member, index) in members.fields">
      <div>
        <Input
          :aria-label="`成员 ${index + 1} 姓名`"
          placeholder="姓名"
          v-bind="textField(`members.${index}.name`)"
        ></Input>
        <Select
          :aria-label="`成员 ${index + 1} 角色`"
          :options="[
            { label: '管理员', value: 'Admin' },
            { label: '成员', value: 'Member' },
            { label: '访客', value: 'Guest' },
          ]"
          v-bind="textField(`members.${index}.role`)"
        ></Select>
        <Button type="button" @click="() => members.remove(index)">移除成员</Button>
      </div>
    </template>
    <Button type="button" @click="() => members.append({ name: '', role: 'Member' })">
      添加成员
    </Button>
    <Button type="submit" variant="primary" :loading="form.formState.isSubmitting">
      <template #default>创建工作区</template>
    </Button>
  </form>
</template>
