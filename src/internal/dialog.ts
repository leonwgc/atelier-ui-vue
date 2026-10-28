import { nextTick, onBeforeUnmount, watch, type Ref } from 'vue';
let locks = 0;
let previousOverflow = '';
const stack: HTMLElement[] = [];
export function useDialog(open: () => boolean, panel: Ref<HTMLElement | null>, close: () => void, escape: () => boolean) {
  let cleanup: (() => void) | undefined;
  watch(open, async (shown, _, invalidate) => {
    cleanup?.(); cleanup = undefined;
    if (!shown || typeof document === 'undefined') return;
    let cancelled = false; invalidate(() => { cancelled = true; });
    await nextTick(); if (cancelled || !panel.value) return;
    const element = panel.value;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (locks++ === 0) { previousOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; }
    stack.push(element); element.focus();
    const keydown = (event: KeyboardEvent) => {
      if (stack.at(-1) !== element) return;
      if (event.key === 'Escape' && escape()) { event.preventDefault(); close(); }
      if (event.key !== 'Tab') return;
      const focusable = Array.from(element.querySelectorAll<HTMLElement>('button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),a[href],[tabindex]:not([tabindex="-1"])')).filter(node => !node.closest('[inert]') && node.getClientRects().length);
      const first = focusable[0], last = focusable.at(-1);
      if (!first) { event.preventDefault(); element.focus(); }
      else if (event.shiftKey && (document.activeElement === first || document.activeElement === element)) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && (document.activeElement === last || !element.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', keydown);
    cleanup = () => { document.removeEventListener('keydown', keydown); const index = stack.indexOf(element); if (index >= 0) stack.splice(index, 1); if (--locks === 0) document.body.style.overflow = previousOverflow; previous?.focus(); };
  }, { immediate: true, flush: 'post' });
  onBeforeUnmount(() => cleanup?.());
}
