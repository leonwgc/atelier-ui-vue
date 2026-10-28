import { ref, watch, nextTick, onBeforeUnmount, getCurrentInstance } from 'vue';
import type { CSSProperties } from 'vue';
export type FloatingPlacement = 'top' | 'bottom' | 'left' | 'right';
export type PopupPlacement = FloatingPlacement | `${FloatingPlacement}-${'start' | 'end'}`;
export function useFloating(open: () => boolean, placement: () => PopupPlacement, close: () => void, matchWidth = false) {
  const anchor = ref<HTMLElement | null>(null), panel = ref<HTMLElement | null>(null);
  const position = ref<CSSProperties>({ position: 'fixed', top: '-9999px', left: '-9999px' });
  const resolvedPlacement = ref(placement());
  const id = `at-popup-${getCurrentInstance()?.uid ?? 0}`;
  let cleanup: (() => void) | undefined;
  function measure() {
    if (!anchor.value || !panel.value) return;
    const a = anchor.value.getBoundingClientRect();
    if (matchWidth) panel.value.style.width = `${a.width}px`;
    const f = panel.value.getBoundingClientRect();
    const [preferred, align] = placement().split('-');
    const side = preferred as FloatingPlacement;
    const space = { top: a.top, bottom: window.innerHeight - a.bottom, left: a.left, right: window.innerWidth - a.right };
    const opposite = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' } as const;
    const required = (side === 'top' || side === 'bottom' ? f.height : f.width) + 18;
    const actual = space[side] < required && space[opposite[side]] > space[side] ? opposite[side] : side;
    let left = a.left + (a.width - f.width) / 2, top = a.top + (a.height - f.height) / 2;
    if (actual === 'top' || actual === 'bottom') { top = actual === 'top' ? a.top - f.height - 8 : a.bottom + 8; if (align === 'start') left = a.left; if (align === 'end') left = a.right - f.width; }
    else { left = actual === 'left' ? a.left - f.width - 8 : a.right + 8; if (align === 'start') top = a.top; if (align === 'end') top = a.bottom - f.height; }
    resolvedPlacement.value = `${actual}${align ? `-${align}` : ''}` as PopupPlacement;
    position.value = { position: 'fixed', top: `${Math.max(12, Math.min(top, innerHeight - f.height - 12))}px`, left: `${Math.max(12, Math.min(left, innerWidth - f.width - 12))}px`, width: matchWidth ? `${a.width}px` : undefined };
  }
  watch([open, placement], async ([shown], _, invalidate) => {
    cleanup?.(); cleanup = undefined;
    if (!shown || typeof document === 'undefined') return;
    let cancelled = false; invalidate(() => { cancelled = true; }); await nextTick(); if (cancelled) return;
    measure();
    const pointer = (event: PointerEvent) => { if (!anchor.value?.contains(event.target as Node) && !panel.value?.contains(event.target as Node)) close(); };
    const key = (event: KeyboardEvent) => { if (event.key === 'Escape') { close(); anchor.value?.focus(); } };
    const observer = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(measure);
    if (anchor.value) observer?.observe(anchor.value); if (panel.value) observer?.observe(panel.value);
    window.addEventListener('resize', measure); window.addEventListener('scroll', measure, true); document.addEventListener('pointerdown', pointer); document.addEventListener('keydown', key);
    cleanup = () => { observer?.disconnect(); window.removeEventListener('resize', measure); window.removeEventListener('scroll', measure, true); document.removeEventListener('pointerdown', pointer); document.removeEventListener('keydown', key); };
  }, { immediate: true, flush: 'post' });
  onBeforeUnmount(() => cleanup?.());
  return { anchor, panel, position, resolvedPlacement, id, measure };
}
