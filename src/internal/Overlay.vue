<script setup lang="ts">
import { computed, ref, onBeforeUnmount } from 'vue';
import { useFloating, type PopupPlacement } from './floating';
import '../styles/theme.css';
import '../styles/floating.css';
const props = withDefaults(defineProps<{ open?: boolean; defaultOpen?: boolean; disabled?: boolean; trigger?: 'click' | 'hover' | 'focus' | 'contextMenu' | ('click' | 'hover' | 'focus' | 'contextMenu')[]; placement?: PopupPlacement; panelClass?: string; role?: string; mouseEnterDelay?: number; mouseLeaveDelay?: number }>(), { trigger: 'click', placement: 'bottom', role: 'dialog', mouseEnterDelay: 0.1, mouseLeaveDelay: 0.1 });
const emit = defineEmits<{ 'update:open': [value: boolean] }>(); const inner = ref(props.defaultOpen ?? false); const shown = computed(() => (props.open ?? inner.value) && !props.disabled); let timer: ReturnType<typeof setTimeout>;
function setOpen(value: boolean) { clearTimeout(timer); if (props.disabled) return; if (props.open === undefined) inner.value = value; emit('update:open', value); }
function has(trigger: string) { return Array.isArray(props.trigger) ? props.trigger.includes(trigger as 'click') : props.trigger === trigger; }
function keepOpen() { clearTimeout(timer); }
function enter() { clearTimeout(timer); if (has('hover')) timer = setTimeout(() => setOpen(true), props.mouseEnterDelay * 1000); }
function leave() { clearTimeout(timer); if (has('hover')) timer = setTimeout(() => setOpen(false), props.mouseLeaveDelay * 1000); }
const { anchor, panel, position, resolvedPlacement, id } = useFloating(() => shown.value, () => props.placement, () => setOpen(false));
onBeforeUnmount(() => clearTimeout(timer)); defineExpose({ close: () => setOpen(false), open: () => setOpen(true) });
</script>
<template><span ref="anchor" tabindex="0" :aria-expanded="role !== 'tooltip' ? shown : undefined" :aria-haspopup="role !== 'tooltip' ? 'dialog' : undefined" :aria-describedby="shown ? id : undefined" @mouseenter="enter" @mouseleave="leave" @focusin="has('focus') && setOpen(true)" @focusout="has('focus') && setOpen(false)" @click="has('click') && setOpen(!shown)" @contextmenu="has('contextMenu') && ($event.preventDefault(), setOpen(true))" @keydown.enter.self.prevent="setOpen(!shown)" @keydown.space.self.prevent="setOpen(!shown)"><slot /></span><Teleport to="body"><div v-if="shown" :id="id" ref="panel" :role="role" :class="['at-popup', panelClass]" :style="position" :data-placement="resolvedPlacement" @mouseenter="keepOpen" @mouseleave="leave"><slot name="content" :close="() => setOpen(false)" /></div></Teleport></template>
