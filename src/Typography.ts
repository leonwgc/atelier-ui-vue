import { Copy, Edit, Check } from './internal/icons';
import { defineComponent, h, ref, computed, nextTick, onBeforeUnmount } from 'vue';
import type { PropType, VNodeChild } from 'vue';
import './styles/theme.css'; import './styles/typography.css';
export type TextType = 'secondary' | 'success' | 'warning' | 'danger';
export interface CopyableConfig { text?: string; onCopy?: () => void; tooltips?: [string, string] }
export interface EditableConfig { editing?: boolean; onStart?: () => void; onChange?: (value: string) => void; onCancel?: () => void; onEnd?: () => void; maxLength?: number }
export interface EllipsisConfig { rows?: number; expandable?: boolean; symbol?: string; onExpand?: () => void; tooltip?: boolean }
const baseProps = { type: String as PropType<TextType>, strong: Boolean, italic: Boolean, underline: Boolean, delete: Boolean, code: Boolean, keyboard: Boolean, mark: Boolean, disabled: Boolean, copyable: [Boolean, Object] as PropType<boolean | CopyableConfig>, editable: [Boolean, Object] as PropType<boolean | EditableConfig>, ellipsis: [Boolean, Object] as PropType<boolean | EllipsisConfig>, level: { type: Number as PropType<1 | 2 | 3 | 4 | 5>, default: 1 }, href: String, target: String };
function createTypography(name: string, tag: string) {
 return defineComponent({ name, props: baseProps, emits: ['change', 'copy', 'editStart', 'editEnd', 'editCancel', 'expand'], setup(props, { slots, emit }) {
  const node = ref<HTMLElement | null>(null), editor = ref<HTMLTextAreaElement | null>(null), editing = ref(false), expanded = ref(false), copied = ref(false), draft = ref(''); let timer: ReturnType<typeof setTimeout>; let settled = false;
  const edit = computed(() => props.editable ? props.editable === true ? {} : props.editable : null); const copy = computed(() => props.copyable ? props.copyable === true ? {} : props.copyable : null); const ellipsis = computed(() => props.ellipsis ? props.ellipsis === true ? { rows: 1 } : props.ellipsis : null);
  function start() { if (props.disabled) return; draft.value = node.value?.querySelector('.at-typography__text')?.textContent ?? node.value?.textContent ?? ''; settled = false; edit.value?.onStart?.(); emit('editStart'); if (edit.value?.editing === undefined) editing.value = true; void nextTick(() => { editor.value?.focus(); editor.value?.setSelectionRange(draft.value.length, draft.value.length); }); }
  function finish(cancel = false) { if (settled) return; settled = true; if (cancel) { edit.value?.onCancel?.(); emit('editCancel'); } else { edit.value?.onChange?.(draft.value); emit('change', draft.value); } edit.value?.onEnd?.(); emit('editEnd'); editing.value = false; }
  async function clipboard() { if (props.disabled) return; const text = copy.value?.text ?? node.value?.querySelector('.at-typography__text')?.textContent ?? ''; try { await navigator.clipboard.writeText(text); } catch { const area = document.createElement('textarea'); area.value = text; document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); } copied.value = true; copy.value?.onCopy?.(); emit('copy'); clearTimeout(timer); timer = setTimeout(() => { copied.value = false; }, 2000); }
  onBeforeUnmount(() => clearTimeout(timer));
  return () => {
   const ell = ellipsis.value; const clamp = ell && !expanded.value; const classes = ['at-typography', props.type && `at-typography--${props.type}`, props.disabled && 'at-typography--disabled', clamp && ((ell.rows ?? 1) > 1 ? 'at-typography--clamp' : 'at-typography--ellipsis'), name === 'Paragraph' && 'at-typography--paragraph', name === 'Title' && ['at-typography--title', `at-typography--h${props.level}`], name === 'Link' && 'at-typography--link'];
   const isEditing = edit.value?.editing ?? editing.value;
   if (isEditing) return h(tag === 'a' ? 'span' : tag, { ref: node, class: [...classes, 'at-typography--editing'] }, [h('textarea', { ref: editor, class: 'at-typography__editor', 'aria-label': '编辑文本', value: draft.value, maxlength: edit.value?.maxLength, rows: 1, onInput: (event: Event) => { draft.value = (event.target as HTMLTextAreaElement).value; }, onBlur: () => finish(), onKeydown: (event: KeyboardEvent) => { if ((event.key === 'Enter' && !event.shiftKey) || event.key === 'Escape') { event.preventDefault(); finish(event.key === 'Escape'); } } })]);
   let content: VNodeChild = slots.default?.() ?? [];
   for (const [enabled, element, cls] of [[props.code, 'code', 'at-typography__code'], [props.keyboard, 'kbd', 'at-typography__kbd'], [props.mark, 'mark', 'at-typography__mark'], [props.delete, 'del', ''], [props.underline, 'u', ''], [props.italic, 'i', ''], [props.strong, 'strong', '']] as const) if (enabled) content = h(element, { class: cls }, [content]);
   const expand = ell?.expandable && !expanded.value ? h('button', { type: 'button', class: 'at-typography__expand', onClick: () => { expanded.value = true; ell.onExpand?.(); emit('expand'); } }, ell.symbol ?? '展开') : null;
   const actions = edit.value || copy.value ? h('span', { class: 'at-typography__actions' }, [edit.value ? h('button', { type: 'button', class: 'at-typography__action', 'aria-label': '编辑', disabled: props.disabled, onClick: start }, [h(Edit)]) : null, copy.value ? h('button', { type: 'button', class: ['at-typography__action', copied.value && 'at-typography__action--done'], 'aria-label': copy.value.tooltips?.[copied.value ? 1 : 0] ?? (copied.value ? '已复制' : '复制'), disabled: props.disabled, onClick: clipboard }, [h(copied.value ? Check : Copy, { size: 14 })]) : null]) : null;
   const text = h('span', { class: 'at-typography__text' }, [content]); const style = clamp && (ell.rows ?? 1) > 1 ? { WebkitLineClamp: ell.rows } : undefined;
   return h(name === 'Title' ? `h${props.level}` : tag, { ref: node, class: classes, style, href: props.disabled ? undefined : props.href, target: props.target, rel: props.target === '_blank' ? 'noopener noreferrer' : undefined, 'aria-disabled': props.disabled || undefined, tabindex: props.disabled && tag === 'a' ? -1 : undefined, onClick: (event: MouseEvent) => { if (props.disabled && tag === 'a') event.preventDefault(); } }, name === 'Paragraph' ? [h('p', { class: 'at-typography__paragraph-text', style }, [text, expand]), actions] : [text, expand, actions]);
  };
 } });
}
export const Text = createTypography('Text', 'span');
export const Title = createTypography('Title', 'h1');
export const Paragraph = createTypography('Paragraph', 'div');
export const Link = createTypography('Link', 'a');
export const Typography = defineComponent({ name: 'Typography', props: { as: { type: String as PropType<'article' | 'section' | 'div'>, default: 'article' } }, setup: (props, { slots }) => () => h(props.as, { class: 'at-typography-root' }, slots.default?.()) });
