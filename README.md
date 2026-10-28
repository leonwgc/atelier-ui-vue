# Atelier UI Vue

Atelier UI 的 Vue 3 + TypeScript 实现，使用 Vite 8 构建。保留 React 版本的 94 个公开模块、130 个运行时导出、设计令牌和演示站点结构；示例与组件使用 Vue 渲染、响应式状态和插槽，无 React 运行时依赖。

使用 Node.js 20.19+（20.x）或 22.12+，本次构建使用 Node.js 24.3.0。

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

- `npm run dev`：启动交互文档站点。
- `npm run typecheck`：检查组件和演示页面类型。
- `npm run build`：生成 `dist/` 下的 ESM、CommonJS、类型声明和样式，再生成 `docs/` 静态站点。
- `npm run check:examples`：针对已构建的类型声明检查所有独立代码示例。
- `npm run build:demo`：单独打包 `docs/`，资源使用相对路径，可部署在子目录。

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { Input } from 'atelier-ui-vue/input';
import { Button } from 'atelier-ui-vue/button';

const name = ref('');
</script>

<template>
  <Input v-model="name" label="名称" clearable />
  <Button variant="primary">保存</Button>
</template>
```

支持根入口与 119 个独立子路径。组件入口自动关联自身样式；需要统一加载全量样式时，可导入 `atelier-ui-vue/style.css`，主题单独入口为 `atelier-ui-vue/theme.css`。

React 的 `value/checked` 对应 Vue 的 `modelValue` 和 `v-model`；弹层使用 `v-model:open`，分页使用 `v-model:current`、`v-model:pageSize`，树使用 `v-model:checkedKeys` 等对应状态。原事件保留参数含义，模板中使用 `@change`、`@select`、`@close` 等。自定义内容使用默认或具名作用域插槽，例如 Select 的 `#option`、Tree 的 `#title`、Transfer 的 `#item` 和 `#footer`。完整使用方式见各组件页面的 Vue TypeScript 示例和 API 表。

表单组合函数从 `atelier-ui-vue/form` 导入。`useForm` 管理注册、校验与提交，`Controller` 通过默认作用域插槽提供 `field`、`fieldState` 和 `formState`；`useWatch` 返回计算属性，`useFieldArray` 管理动态数组。Zod / Yup 适配器分别从 `zodResolver` / `yupResolver` 子路径导入。

公开运行时导出（与源项目逐项核对）：

- `Button`, `Input`, `InputOTP`, `Textarea`, `Select`, `Checkbox`, `CheckboxGroup`, `Radio`, `RadioGroup`, `Switch`
- `Modal`, `Table`, `Alert`, `Tag`, `Avatar`, `Tooltip`, `Badge`, `Breadcrumb`, `Divider`, `Empty`
- `Pagination`, `Progress`, `Skeleton`, `Spin`, `Tabs`, `Card`, `Descriptions`, `Steps`, `Timeline`, `Collapse`
- `DatePicker`, `Upload`, `Drawer`, `Controller`, `FormProvider`, `useFieldArray`, `useForm`, `useFormContext`, `useWatch`, `BackTop`
- `FloatButton`, `FloatButtonGroup`, `Icon`, `Link`, `Paragraph`, `Text`, `Title`, `Typography`, `Flex`, `Space`
- `Layout`, `LayoutHeader`, `LayoutSider`, `LayoutContent`, `LayoutFooter`, `Grid`, `GridCol`, `Affix`, `Anchor`, `Dropdown`
- `AutoComplete`, `InputNumber`, `Rate`, `Slider`, `TimePicker`, `formatTime`, `parseTime`, `Segmented`, `Countdown`, `Statistic`
- `formatCountdown`, `formatStatistic`, `Image`, `ImagePreviewGroup`, `Popover`, `Popconfirm`, `Result`, `Cascader`, `ColorPicker`, `hsvToRgb`
- `parseColor`, `rgbToHsv`, `toHex`, `Mentions`, `Transfer`, `TreeSelect`, `Calendar`, `Carousel`, `List`, `ListItem`
- `ListItemMeta`, `Listy`, `Masonry`, `QRCode`, `Menu`, `Tree`, `Tour`, `Watermark`, `Splitter`, `SplitterPanel`
- `Message`, `message`, `Notification`, `notification`, `ConfigProvider`, `useConfig`, `BorderBeam`, `Marquee`, `NumberTicker`, `TypingAnimation`
- `BlurFade`, `FadeIn`, `SlideIn`, `ScrollReveal`, `ScaleIn`, `Stagger`, `Expand`, `Pulse`, `Glow`, `Shake`
- `Wobble`, `HoverLift`, `Press`, `FlipIn`, `FlipCard`, `Confetti`, `Shimmer`, `AnimatedList`, `Transition`, `TransitionGroup`

另外提供 `zodResolver`、`yupResolver` 与底层 `encodeQR` 工具导出。设计令牌位于 `design-tokens.json`，运行时主题为 `src/styles/theme.css`；保留源项目的 `--at-` 变量和 `at-` 类名。

迁移清单见 [MIGRATION.md](./MIGRATION.md)。维护时可设置 `ATELIER_REACT_SOURCE` 指向原 React 仓库，然后运行 `python3 scripts/sync-entries.py` 同步入口清单，或运行 `node scripts/port-demo.mjs` 更新示例转换；生成后仍须检查类型、构建和浏览器行为。
