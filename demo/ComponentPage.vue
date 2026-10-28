<script setup lang="ts">
import { computed, ref } from 'vue';
import * as components from '../src';
import ExampleCard from './ExampleCard.vue';
import ApiTable from './ApiTable.vue';
import examples from './examples.json';
const props = defineProps<{ page: { id: string; title: string; group: string; description?: string } }>();
const aliases: Record<string, string> = { buttons: 'Button', inputs: 'Input', selection: 'Checkbox', feedback: 'Modal' };
const name = computed(() => aliases[props.page.id] ?? props.page.title.split(' ')[0]);
const available = computed(() => name.value in components);
const component = computed(() => components[name.value as keyof typeof components]);
const value = ref('');
const checked = ref(true);
const topics = ref(['design']);
const role = ref('member');
const open = ref(false);
const loading = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;
import { onBeforeUnmount } from 'vue';
onBeforeUnmount(() => clearTimeout(timer));
function save() { loading.value = true; timer = setTimeout(() => { loading.value = false; }, 1200); }
const example = computed(() => (examples as Record<string, { code: string; rows: string[][]; props: Record<string, unknown>; content: string }>)[name.value]);
const code = computed(() => example.value?.code ?? `<script setup lang="ts">\nimport { ${name.value} } from 'atelier-ui-vue';\nimport 'atelier-ui-vue/style.css';\n<\/script>\n\n<template>\n  <${name.value}>内容</${name.value}>\n</template>`);
const sample0 = `<script setup lang="ts">\nimport { Button } from 'atelier-ui-vue/button';\n<\/script>\n<template>\n  <Button size="sm">小号按钮</Button>\n  <Button size="md">默认尺寸</Button>\n  <Button size="lg" variant="primary">主要操作</Button>\n  <Button loading variant="primary">正在保存</Button>\n  <Button disabled>暂不可用</Button>\n</template>`;
const sample1 = `<script setup lang="ts">\nimport { ref, onBeforeUnmount } from 'vue';\nimport { Button } from 'atelier-ui-vue/button';\nconst loading = ref(false);\nlet timer: ReturnType<typeof setTimeout>;\nfunction save() {\n  loading.value = true;\n  timer = setTimeout(() => { loading.value = false; }, 1200);\n}\nonBeforeUnmount(() => clearTimeout(timer));\n<\/script>\n<template>\n  <Button variant="primary" :loading="loading" @click="save">保存设置</Button>\n</template>`;
</script>
<template>
  <div class="page-heading"><div class="eyebrow"><span class="eyebrow__dot" />{{ page.id === 'buttons' ? 'FOUNDATIONS' : page.group === '数据录入' ? 'DATA ENTRY' : page.group === '动画' ? 'ANIMATION' : 'COMPONENTS' }}</div><div class="page-heading__row"><div><h1>{{ page.title }}</h1><p>{{ page.description ?? (page.id === 'buttons' ? '清楚表达操作优先级，在需要的时候给出恰到好处的反馈。' : page.id === 'inputs' ? '为文本与多行内容提供清晰、友好的输入体验。' : '清晰的 API、克制的视觉与自然的交互，构建完整的产品体验。') }}</p></div><span class="heading-badge">{{ name }}</span></div></div>
  <template v-if="page.id === 'buttons'">
    <ExampleCard title="按钮类型" description="根据操作的重要程度，选择合适的视觉权重。" :code="example?.code"><div class="component-row"><components.Button variant="primary">创建项目 <span>→</span></components.Button><components.Button>取消</components.Button><components.Button variant="tertiary">了解更多 ↗</components.Button><components.Button variant="danger">删除项目</components.Button><components.Button variant="ghost">更多操作</components.Button></div></ExampleCard>
    <ExampleCard title="尺寸与状态" description="提供三种尺寸，并支持加载和禁用状态。" :code="sample0"><div class="component-row component-row--align-end"><components.Button size="sm">小号按钮</components.Button><components.Button>默认尺寸</components.Button><components.Button size="lg" variant="primary">主要操作</components.Button><components.Button loading variant="primary">正在保存</components.Button><components.Button disabled>暂不可用</components.Button></div></ExampleCard>
    <ExampleCard title="交互示例" description="点击按钮体验异步加载状态。" :code="sample1"><div class="component-row"><components.Button variant="primary" :loading="loading" @click="save">保存设置</components.Button><span class="demo-hint">点击后显示 1.2 秒加载状态</span></div></ExampleCard>
  </template>
  <template v-else-if="page.id === 'inputs'">
    <ExampleCard title="Input 输入框" description="支持标签、提示、错误状态、前后缀和清空操作。" :code="example?.code"><div class="input-demo-grid"><components.Input label="项目名称" placeholder="请输入项目名称" /><components.Input v-model="value" label="搜索成员" placeholder="按姓名或邮箱搜索" clearable><template #prefix><span class="search-icon">⌕</span></template></components.Input><components.Input label="工作邮箱" placeholder="name@company.com" error="请输入有效的邮箱地址" /><components.Input label="只读字段" model-value="workspace-id-1842" readonly hint="此字段由系统自动生成" /></div></ExampleCard>
    <ExampleCard title="Textarea 多行输入" description="适合备注、描述等较长内容。" :code="examples.Textarea.code"><div class="textarea-demo"><components.Textarea label="项目简介" placeholder="描述一下这个项目…" :rows="4" hint="简单介绍项目目标和团队协作方式" /></div></ExampleCard>
  </template>
  <template v-else-if="page.id === 'selection'">
    <ExampleCard title="Checkbox 多选" description="独立复选和分组选项都支持受控状态。" :code="examples.CheckboxGroup.code"><div class="selection-layout"><div class="selection-block"><span class="demo-label">独立复选</span><components.Checkbox default-checked>同意服务条款</components.Checkbox><components.Checkbox disabled>当前不可选</components.Checkbox></div><div class="selection-block"><span class="demo-label">兴趣主题</span><components.CheckboxGroup v-model="topics" :options="[{ label: '产品设计', value: 'design' }, { label: '工程实践', value: 'engineering' }, { label: '团队管理', value: 'team' }]" /><span class="demo-hint">已选择：{{ topics.join('、') || '无' }}</span></div></div></ExampleCard>
    <ExampleCard title="Radio 单选" description="在一组选项中选择一个明确的值。" :code="examples.RadioGroup.code"><div class="selection-layout"><div class="selection-block"><span class="demo-label">工作区角色</span><components.RadioGroup v-model="role" name="role-demo" :options="[{ label: '管理员', value: 'admin' }, { label: '成员', value: 'member' }, { label: '访客', value: 'guest' }]" /><span class="demo-hint">当前角色：{{ role }}</span></div></div></ExampleCard>
    <ExampleCard title="Switch 开关" description="用于立即生效的二元设置。" :code="examples.Switch.code"><div class="switch-row"><div><strong>开启产品更新</strong><span>接收功能更新、技巧与灵感</span></div><components.Switch v-model="checked" aria-label="开启产品更新"><template #checked>开</template><template #unchecked>关</template></components.Switch></div></ExampleCard>
  </template>
  <ExampleCard v-else-if="name === 'Modal' || name === 'Drawer'" title="受控浮层" description="支持遮罩关闭、Escape 和焦点管理。" :code="code"><components.Button variant="primary" @click="open = true">{{ name === 'Modal' ? '邀请成员' : '打开抽屉' }}</components.Button><component :is="component" v-model:open="open" title="邀请团队成员" @ok="open = false"><components.Input label="邮箱地址" placeholder="name@company.com" /></component></ExampleCard>
  <ExampleCard v-else-if="available" title="基础用法" description="组件默认样式与插槽示例。" :code="code"><div class="common-demo-stack"><component :is="component" v-bind="example?.props ?? {}"><template v-if="example?.content" #default>{{ example.content }}</template></component></div></ExampleCard>
  <div v-else class="docs-callout"><span>✦</span><div><strong>组件迁移中</strong><p>此页面保留原站导航位置；交互示例将在组件实现后接入。</p></div></div>
  <ApiTable v-if="available && example?.rows.length" :rows="example.rows" />
</template>
