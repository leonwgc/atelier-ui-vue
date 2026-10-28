# Atelier UI Vue

Vue 3 + TypeScript + Vite 8 的 Atelier UI 移植项目。完整迁移尚未完成，逐项进度见 [MIGRATION.md](./MIGRATION.md)。

使用 Node.js 20.19+ 或 22.12+：

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

`npm run dev` 启动组件演示，`npm run build` 生成组件库、类型声明和演示站点。

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { Input, Button } from 'atelier-ui-vue';
import 'atelier-ui-vue/style.css';
const name = ref('');
</script>
<template>
  <Input v-model="name" label="名称" clearable />
  <Button variant="primary">保存</Button>
</template>
```

支持从 `atelier-ui-vue/button` 等子路径导入组件；构建产物需要显式导入公共样式。组件内容使用默认插槽，图标、前后缀等使用具名插槽。Tabs 和 Collapse 使用 `v-model:activeKey`，Pagination 使用 `v-model:current` 和 `v-model:pageSize`。

已有实现共 52 个组件导出。尚待迁移的组件、表单工具、逐组件 API 手册和浏览器交互验收均记录在迁移清单中。
