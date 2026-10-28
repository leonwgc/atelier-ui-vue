import { createApp, h, ref } from 'vue';
import type { VNodeChild } from 'vue';
import ModalView from './Modal.vue';
import Button from './Button.vue';
export interface ConfirmOptions { title: VNodeChild; content?: VNodeChild; okText?: string; cancelText?: string; danger?: boolean; onOk?: () => void | Promise<void>; onCancel?: () => void }
function confirm(options: ConfirmOptions) {
  if (typeof document === 'undefined') return { destroy() {} };
  const mount = document.createElement('div'); document.body.appendChild(mount); let destroyed = false;
  const pending = ref(false); const error = ref('');
  const app = createApp({ setup() {
    const close = () => { options.onCancel?.(); destroy(); };
    async function accept() { if (pending.value) return; pending.value = true; error.value = ''; try { await options.onOk?.(); destroy(); } catch (failure) { error.value = failure instanceof Error ? failure.message : '操作失败，请重试。'; } finally { pending.value = false; } }
    return () => h(ModalView, { open: true, onClose: close, okText: options.okText, cancelText: options.cancelText }, { title: () => options.title, default: () => [options.content, error.value ? h('p', { role: 'alert', class: 'at-field__error' }, error.value) : null], footer: () => [h(Button, { disabled: pending.value, onClick: close }, () => options.cancelText ?? '取消'), h(Button, { variant: options.danger ? 'danger' : 'primary', loading: pending.value, onClick: accept }, () => options.okText ?? '确定')] });
  } });
  function destroy() { if (destroyed) return; destroyed = true; app.unmount(); mount.remove(); }
  app.mount(mount); return { destroy };
}
export const Modal = Object.assign(ModalView, { confirm });
