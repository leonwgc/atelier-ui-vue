<script setup lang="ts">
import { computed } from 'vue';
import { defineAsyncComponent } from 'vue';
import navigation from './navigation.json';
const props = defineProps<{ id: string }>();
const coreRoutes: Record<string, keyof typeof import('./CorePages')> = { form: 'FormPage', buttons: 'ButtonPage', inputs: 'InputPage', selection: 'SelectionPage', feedback: 'FeedbackPage', table: 'TablePage', alert: 'AlertPage', tag: 'TagPage', avatar: 'AvatarPage', tooltip: 'TooltipPage', badge: 'BadgePage', breadcrumb: 'BreadcrumbPage', divider: 'DividerPage', empty: 'EmptyPage', pagination: 'PaginationPage', progress: 'ProgressPage', skeleton: 'SkeletonPage', spin: 'SpinPage', tabs: 'TabsPage', card: 'CardPage', descriptions: 'DescriptionsPage', steps: 'StepsPage', timeline: 'TimelinePage', collapse: 'CollapsePage', datePicker: 'DatePickerPage', upload: 'UploadPage', drawer: 'DrawerPage' };
const entryIds = new Set(['select', 'autoComplete', 'inputNumber', 'rate', 'slider', 'segmented', 'timePicker', 'colorPicker', 'mentions', 'cascader', 'treeSelect', 'transfer']);
const displayIds = new Set(['typography', 'statistic', 'image', 'carousel', 'calendar', 'tree', 'list', 'listy', 'masonry', 'qrcode', 'watermark', 'splitter']);
const navigationIds = new Set(['dropdown', 'menu', 'anchor', 'affix', 'tour', 'floatButton', 'popover', 'popconfirm']);
const additionalIds = new Set(['flex', 'grid', 'icon', 'inputOTP', 'layout', 'result', 'space', 'message', 'notification', 'configProvider']);
const animationIds = new Set(navigation.filter(item => item.group === '动画').map(item => item.id));
const page = computed(() => defineAsyncComponent(async () => {
  if (entryIds.has(props.id)) return (await import('./DataEntryPages')).DataEntryPage;
  if (displayIds.has(props.id)) return (await import('./DataDisplayPages')).DataDisplayPage;
  if (navigationIds.has(props.id)) return (await import('./NavigationPages')).NavigationPage;
  if (additionalIds.has(props.id)) return (await import('./AdditionalPages')).AdditionalComponentPage;
  if (animationIds.has(props.id)) return (await import('./AnimationPages')).AnimationPage;
  return (await import('./CorePages'))[coreRoutes[props.id]];
}));
</script>
<template><component :is="page" v-bind="coreRoutes[id] ? {} : { id }" /></template>
