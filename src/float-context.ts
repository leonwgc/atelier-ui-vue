import type { InjectionKey } from 'vue';
export const floatKey: InjectionKey<{ shape: 'circle' | 'square'; inline: boolean }> = Symbol('AtelierFloatGroup');
