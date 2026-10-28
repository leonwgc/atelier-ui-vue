<script setup lang="ts">
import RenderNode from './internal/RenderNode';
import { getCurrentInstance, computed } from 'vue';
import './styles/theme.css';
import './styles/steps.css';
withDefaults(defineProps<{ items: { title: import('vue').VNodeChild; description?: import('vue').VNodeChild; status?: 'wait' | 'process' | 'finish' | 'error'; disabled?: boolean }[]; current?: number; direction?: 'horizontal' | 'vertical'; clickable?: boolean }>(), { current: 0, direction: 'horizontal' });
const emit = defineEmits<{ 'update:current': [value: number]; change: [value: number] }>();
const instance = getCurrentInstance();
const interactive = computed(() => !!instance?.vnode.props?.onChange || !!instance?.vnode.props?.['onUpdate:current']);
</script>

<template>
<ol :class="['at-steps', `at-steps--${direction}`]" aria-label="步骤进度"><li v-for="(item, index) in items" :key="index" :class="['at-steps__item', `at-steps__item--${item.status ?? (index < current ? 'finish' : index === current ? 'process' : 'wait')}`, { 'at-steps__item--current': index === current }]" :aria-current="index === current ? 'step' : undefined"><component :is="interactive ? 'button' : 'div'" :type="interactive ? 'button' : undefined" class="at-steps__action" :disabled="interactive && item.disabled" @click="interactive && !item.disabled && (emit('update:current', index), emit('change', index))"><span class="at-steps__indicator" aria-hidden="true">{{ item.status === 'error' ? '!' : (item.status === 'finish' || (!item.status && index < current)) ? '✓' : index + 1 }}</span><span class="at-steps__content"><span class="at-steps__title"><slot name="title" :item="item" :index="index"><RenderNode :content="item.title" /></slot></span><span v-if="item.description" class="at-steps__description"><RenderNode :content="item.description" /></span></span></component><span v-if="index < items.length - 1" class="at-steps__connector" aria-hidden="true" /></li></ol>
</template>
