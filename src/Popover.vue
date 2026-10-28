<script setup lang="ts">
import './styles/theme.css';
import './styles/popover.css';
import Overlay from './internal/Overlay.vue';
import type { PopupPlacement } from './internal/floating';
withDefaults(defineProps<{ content?: string; title?: string; arrow?: boolean; open?: boolean; defaultOpen?: boolean; disabled?: boolean; trigger?: 'click' | 'hover' | 'focus' | 'contextMenu' | ('click' | 'hover' | 'focus' | 'contextMenu')[]; placement?: PopupPlacement; overlayClassName?: string; mouseEnterDelay?: number; mouseLeaveDelay?: number }>(), { open: undefined, arrow: true, trigger: 'click', placement: 'bottom' });
const emit = defineEmits<{ 'update:open': [value: boolean] }>();
</script>

<template>
<Overlay class="at-popover__trigger" :open="open" :default-open="defaultOpen" :disabled="disabled" :trigger="trigger" :placement="placement" :mouse-enter-delay="mouseEnterDelay" :mouse-leave-delay="mouseLeaveDelay" :panel-class="['at-popover__panel', arrow ? 'at-popover__panel--arrow' : '', overlayClassName].filter(Boolean).join(' ')" @update:open="emit('update:open', $event)"><slot /><template #content="scope"><strong v-if="title || $slots.title" class="at-popover__title"><slot name="title">{{ title }}</slot></strong><div class="at-popover__content"><slot name="content" v-bind="scope">{{ content }}</slot></div></template></Overlay>
</template>
