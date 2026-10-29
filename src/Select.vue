<script lang="ts">export default { inheritAttrs: false };</script>
<script setup lang="ts">
import { ChevronDown, Check } from './internal/icons';
import type { SelectOption as Option, SelectOptionGroup as Group } from './data-types';

import { useAttrs } from 'vue';
import PopupContent from './internal/PopupContent';
import RenderNode from './internal/RenderNode';
import { computed, nextTick, ref, watch } from 'vue';
import { useFloating, type PopupPlacement } from './internal/floating';
import './styles/theme.css';
import './styles/field.css';
import './styles/selector.css';
import './styles/floating.css';
import './styles/select.css';
const attrs = useAttrs();
const props = withDefaults(defineProps<{ options: (Option | Group)[]; modelValue?: string | string[]; defaultValue?: string | string[]; size?: 'sm' | 'md' | 'lg'; status?: 'error' | 'warning'; label?: string; hint?: string; error?: string; placeholder?: string; searchable?: boolean; multiple?: boolean; disabled?: boolean; allowClear?: boolean; maxTagCount?: number; name?: string; filterOption?: boolean | ((query: string, option: Option) => boolean); notFoundContent?: string; open?: boolean; defaultOpen?: boolean; placement?: PopupPlacement; popupClassName?: string; popupStyle?: import('vue').CSSProperties; popupRender?: (menu: import('vue').VNodeChild) => import('vue').VNodeChild; popupMatchSelectWidth?: boolean }>(), { open: undefined, size: 'md', placeholder: '请选择…', filterOption: true, notFoundContent: '暂无匹配选项', placement: 'bottom-start', popupMatchSelectWidth: true });
const emit = defineEmits<{ 'update:modelValue': [value: string | string[]]; change: [value: string | string[], option: Option | Option[] | undefined]; 'update:open': [value: boolean]; search: [query: string] }>();
const inner = ref(props.defaultValue ?? (props.multiple ? [] : '')); const innerOpen = ref(props.defaultOpen ?? false); const query = ref(''); const active = ref(-1); const search = ref<HTMLInputElement | null>(null);
const value = computed(() => props.modelValue ?? inner.value); const selected = computed(() => Array.isArray(value.value) ? value.value : value.value ? [value.value] : []);
const opened = computed(() => (props.open ?? innerOpen.value) && !props.disabled);
const options = computed(() => props.options.flatMap(item => 'options' in item ? item.options : [item]));
const visible = computed(() => options.value.filter(option => !query.value || props.filterOption === false || (typeof props.filterOption === 'function' ? props.filterOption(query.value, option) : option.label.toLocaleLowerCase().includes(query.value.toLocaleLowerCase()))));
const labels = computed(() => selected.value.map(value => options.value.find(option => option.value === value) ?? { value, label: value }));
function setOpen(next: boolean) { if (props.disabled) return; if (props.open === undefined) innerOpen.value = next; emit('update:open', next); }
const { anchor, panel, position, resolvedPlacement, id } = useFloating(() => opened.value, () => props.placement, () => setOpen(false), props.popupMatchSelectWidth);
function update(next: string | string[]) { if (props.modelValue === undefined) inner.value = next; emit('update:modelValue', next); emit('change', next, Array.isArray(next) ? options.value.filter(item => next.includes(item.value)) : options.value.find(item => item.value === next)); }
function groupAt(index: number) { const group = props.options.find(item => 'options' in item && item.options.includes(visible.value[index])); if (!group || !('options' in group)) return ''; const previous = visible.value[index - 1]; return previous && group.options.includes(previous) ? '' : group.label; }
function choose(option: Option) { if (option.disabled || props.disabled) return; update(props.multiple ? selected.value.includes(option.value) ? selected.value.filter(item => item !== option.value) : [...selected.value, option.value] : option.value); query.value = ''; if (!props.multiple) { setOpen(false); anchor.value?.focus(); } else search.value?.focus(); }
function clear() { update(props.multiple ? [] : ''); query.value = ''; }
function highlighted(label: string) { const at = query.value ? label.toLocaleLowerCase().indexOf(query.value.toLocaleLowerCase()) : -1; return at < 0 ? [label, '', ''] : [label.slice(0, at), label.slice(at, at + query.value.length), label.slice(at + query.value.length)]; }
watch(opened, async shown => { query.value = ''; active.value = shown ? visible.value.findIndex(option => selected.value.includes(option.value) && !option.disabled) : -1; if (shown && active.value < 0) active.value = visible.value.findIndex(option => !option.disabled); if (shown && props.searchable) { await nextTick(); search.value?.focus(); } });
watch(query, next => { emit('search', next); active.value = visible.value.findIndex(option => !option.disabled); });
watch(active, async index => { await nextTick(); panel.value?.querySelectorAll('[role=option]')[index]?.scrollIntoView({ block: 'nearest' }); });
function key(event: KeyboardEvent) {
  if (event.defaultPrevented || props.disabled) return;
  const enabled = visible.value.map((item, index) => item.disabled ? -1 : index).filter(index => index >= 0);
  if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) { event.preventDefault(); if (!opened.value) { setOpen(true); return; } if (!enabled.length) return; const at = enabled.indexOf(active.value); active.value = event.key === 'Home' ? enabled[0] : event.key === 'End' ? enabled.at(-1) ?? -1 : enabled[(at + (event.key === 'ArrowDown' ? 1 : -1) + enabled.length) % enabled.length] ?? -1; }
  if (event.key === 'Enter' || (event.key === ' ' && (!props.searchable || !opened.value))) { event.preventDefault(); if (!opened.value) setOpen(true); else if (visible.value[active.value] && !visible.value[active.value].disabled) choose(visible.value[active.value]); }
  if (event.key === 'Tab') setOpen(false);
  if (event.key === 'Backspace' && !query.value && props.multiple) update(selected.value.slice(0, -1));
}
</script>
<template>
  <div class="at-field" :class="attrs.class" :style="attrs.style">
    <label v-if="label" :id="`${id}-label`" :for="typeof attrs.id === 'string' ? attrs.id : id" class="at-field__label">{{ label }}</label>
    <div :id="typeof attrs.id === 'string' ? attrs.id : id" ref="anchor" v-bind="{ ...attrs, class: undefined, style: undefined }" :class="['at-selector', `at-selector--${size}`, 'at-select', { 'at-selector--open': opened, 'at-selector--disabled': disabled, 'at-selector--error': error || status === 'error', 'at-selector--warning': status === 'warning', 'at-select--multiple': multiple, 'at-select--searchable': searchable }]" role="combobox" :tabindex="disabled ? -1 : 0" aria-haspopup="listbox" :aria-expanded="opened" :aria-controls="opened ? `${id}-list` : undefined" :aria-labelledby="label ? `${id}-label` : undefined" :aria-activedescendant="opened && active >= 0 && !searchable ? `${id}-option-${active}` : undefined" :aria-invalid="!!error || status === 'error' || undefined" @click="setOpen(!opened)" @keydown="key">
      <slot name="prefix" />
      <div v-if="multiple" class="at-selector__tags">
        <span v-for="option in labels.slice(0, maxTagCount ?? labels.length)" :key="option.value" class="at-selector__tag"><span class="at-selector__tag-label"><slot name="label" :option="option">{{ option.label }}</slot></span><button type="button" class="at-selector__tag-remove" :disabled="disabled" :aria-label="`移除 ${option.label}`" @click.stop="update(selected.filter(value => value !== option.value))">×</button></span>
        <span v-if="maxTagCount !== undefined && labels.length > maxTagCount" class="at-selector__tag at-selector__tag--count">+{{ labels.length - maxTagCount }}</span>
        <input v-if="searchable && opened" ref="search" v-model="query" class="at-selector__search" :placeholder="labels.length ? '' : placeholder" :aria-label="label ? `${label}搜索` : '搜索选项'" aria-autocomplete="list" :aria-controls="`${id}-list`" :aria-activedescendant="active >= 0 ? `${id}-option-${active}` : undefined" @click.stop>
        <span v-else-if="!labels.length" class="at-selector__placeholder">{{ placeholder }}</span>
      </div>
      <input v-else-if="searchable && opened" ref="search" v-model="query" class="at-selector__search" :placeholder="labels[0]?.label ?? placeholder" :aria-label="label ? `${label}搜索` : '搜索选项'" aria-autocomplete="list" :aria-controls="`${id}-list`" :aria-activedescendant="active >= 0 ? `${id}-option-${active}` : undefined" @click.stop>
      <span v-else class="at-selector__value" :class="{ 'at-selector__placeholder': !labels.length }"><template v-if="labels.length"><span v-if="labels[0].icon" class="at-select__option-icon"><RenderNode :content="labels[0].icon" /></span><slot name="label" :option="labels[0]">{{ labels[0].label }}</slot></template><template v-else>{{ placeholder }}</template></span>
      <button v-if="allowClear && selected.length && !disabled" type="button" class="at-selector__clear" aria-label="清空选择" @click.stop="clear">×</button><span class="at-selector__arrow" aria-hidden="true"><ChevronDown :size="14" /></span>
      <input v-for="item in name ? selected : []" :key="item" type="hidden" :name="name" :value="item">
    </div>
    <span v-if="error" class="at-field__error" role="alert">{{ error }}</span><span v-else-if="hint" class="at-field__hint">{{ hint }}</span>
    <Teleport to="body"><div v-if="opened" ref="panel" :class="['at-popup', `at-popup--${size}`, 'at-select__popup', popupClassName]" :style="[position, popupStyle]" :data-placement="resolvedPlacement"><PopupContent :render="popupRender"><slot name="popup"><ul :id="`${id}-list`" class="at-popup__list at-select__list" role="listbox" :aria-multiselectable="multiple" :aria-labelledby="label ? `${id}-label` : undefined"><template v-for="(option, index) in visible" :key="option.value"><li v-if="groupAt(index)" role="presentation" class="at-popup__group">{{ groupAt(index) }}</li><li :id="`${id}-option-${index}`" role="option" :aria-selected="selected.includes(option.value)" :aria-disabled="option.disabled" :class="['at-option', { 'at-option--active': index === active, 'at-option--selected': selected.includes(option.value), 'at-option--disabled': option.disabled }]" @mousedown.prevent @mouseenter="!option.disabled && (active = index)" @click="choose(option)"><slot name="option" :option="option" :active="index === active" :selected="selected.includes(option.value)" :query="query"><span v-if="option.icon" class="at-select__option-icon"><RenderNode :content="option.icon" /></span><span class="at-option__label">{{ highlighted(option.label)[0] }}<mark v-if="highlighted(option.label)[1]">{{ highlighted(option.label)[1] }}</mark>{{ highlighted(option.label)[2] }}<small v-if="option.description" class="at-option__description"><RenderNode :content="option.description" /></small></span><span class="at-option__check" aria-hidden="true"><Check :size="16" /></span></slot></li></template><li v-if="!visible.length" class="at-popup__empty"><slot name="notFound">{{ notFoundContent }}</slot></li></ul></slot></PopupContent></div></Teleport>
  </div>
</template>
