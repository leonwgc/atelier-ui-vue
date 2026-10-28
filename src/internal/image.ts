import type { InjectionKey } from 'vue';
export interface PreviewItem { id: string; src: string; previewSrc?: string }
export const imageGroupKey: InjectionKey<{ register: (item: PreviewItem) => () => void; open: (id: string) => void }> = Symbol('AtelierImageGroup');
