import { createApp, defineComponent, h, onBeforeUnmount, onMounted, ref, shallowReactive } from 'vue';
import type { PropType, VNodeChild, App } from 'vue';
import './styles/theme.css'; import './styles/message.css'; import './styles/notification.css';
export type MessageType = 'success' | 'info' | 'warning' | 'error';
export type NotificationPlacement = 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
export interface MessageOptions { duration?: number; onClose?: () => void }
export interface NotificationOptions extends MessageOptions { title: VNodeChild; description?: VNodeChild; type?: MessageType; placement?: NotificationPlacement }
export const Message = defineComponent({
  name: 'Message', props: { type: { type: String as PropType<MessageType>, default: 'info' }, content: [String, Number, Object, Array] as PropType<VNodeChild>, duration: { type: Number, default: 4000 } }, emits: ['close'],
  setup(props, { emit, slots }) { const visible = ref(true); let timer: ReturnType<typeof setTimeout>; const close = () => { if (!visible.value) return; visible.value = false; emit('close'); }; onMounted(() => { if (props.duration > 0) timer = setTimeout(close, props.duration); }); onBeforeUnmount(() => clearTimeout(timer)); return () => visible.value ? h('div', { class: ['at-message', `at-message--${props.type}`], role: props.type === 'error' ? 'alert' : 'status' }, [h('span', { 'aria-hidden': true }, props.type === 'success' ? '✓' : props.type === 'error' ? '!' : '·'), slots.default?.() ?? props.content, h('button', { type: 'button', 'aria-label': '关闭提示', onClick: close }, '×')]) : null; },
});
export const Notification = defineComponent({
  name: 'Notification', props: { title: [String, Number, Object, Array] as PropType<VNodeChild>, description: [String, Number, Object, Array] as PropType<VNodeChild>, type: { type: String as PropType<MessageType>, default: 'info' }, placement: { type: String as PropType<NotificationPlacement>, default: 'top-right' } }, emits: ['close'],
  setup(props, { emit, slots }) { return () => h('aside', { class: ['at-notification', `at-notification--${props.placement}`, `at-notification--${props.type}`], role: 'status' }, [h('div', [h('strong', [slots.title?.() ?? props.title]), props.description || slots.default ? h('p', [slots.default?.() ?? props.description]) : null]), h('button', { type: 'button', 'aria-label': '关闭通知', onClick: () => emit('close') }, '×')]); },
});
interface Entry extends NotificationOptions { id: number; kind: 'message' | 'notification'; content?: VNodeChild }
const entries = shallowReactive<Entry[]>([]); let nextId = 0; let app: App | undefined; let container: HTMLElement | undefined;
const timers = new Map<number, ReturnType<typeof setTimeout>>();
function remove(id: number) { const at = entries.findIndex(entry => entry.id === id); if (at < 0) return; const entry = entries[at]; clearTimeout(timers.get(id)); timers.delete(id); entries.splice(at, 1); try { entry.onClose?.(); } finally { if (!entries.length) { app?.unmount(); container?.remove(); app = undefined; container = undefined; } } }
function add(entry: Omit<Entry, 'id'>) {
  if (typeof document === 'undefined') return { close() {} };
  const id = ++nextId; entries.push({ ...entry, id });
  if (!app) { container = document.createElement('div'); container.dataset.atFeedbackHost = ''; document.body.appendChild(container); app = createApp({ setup: () => () => entries.map((entry, index) => h(entry.kind === 'message' ? Message : Notification, { ...entry, key: entry.id, duration: 0, style: entry.kind === 'message' ? { top: `${22 + entries.filter((item, at) => at < index && item.kind === 'message').length * 64}px` } : { [entry.placement?.startsWith('bottom') ? 'bottom' : 'top']: `${20 + entries.filter((item, at) => at < index && item.kind === 'notification' && item.placement === entry.placement).length * 110}px` }, onClose: () => remove(entry.id) })) }); app.mount(container); }
  if ((entry.duration ?? 0) > 0) timers.set(id, setTimeout(() => remove(id), entry.duration));
  return { close: () => remove(id) };
}
function showMessage(type: MessageType, content: VNodeChild, options: MessageOptions = {}) { return add({ kind: 'message', title: '', content, type, duration: options.duration ?? 4000, onClose: options.onClose }); }
export const message = { open: (content: VNodeChild, options?: MessageOptions) => showMessage('info', content, options), success: (content: VNodeChild, options?: MessageOptions) => showMessage('success', content, options), info: (content: VNodeChild, options?: MessageOptions) => showMessage('info', content, options), warning: (content: VNodeChild, options?: MessageOptions) => showMessage('warning', content, options), error: (content: VNodeChild, options?: MessageOptions) => showMessage('error', content, options), destroy() { [...entries].filter(entry => entry.kind === 'message').forEach(entry => remove(entry.id)); } };
function notify(options: NotificationOptions) { return add({ ...options, kind: 'notification', type: options.type ?? 'info', placement: options.placement ?? 'top-right', duration: options.duration ?? 4500 }); }
export const notification = { open: notify, success: (options: NotificationOptions) => notify({ ...options, type: 'success' }), info: (options: NotificationOptions) => notify({ ...options, type: 'info' }), warning: (options: NotificationOptions) => notify({ ...options, type: 'warning' }), error: (options: NotificationOptions) => notify({ ...options, type: 'error' }), destroy() { [...entries].filter(entry => entry.kind === 'notification').forEach(entry => remove(entry.id)); } };
