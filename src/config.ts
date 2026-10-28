import { inject } from 'vue';
import type { InjectionKey } from 'vue';
export interface ThemeTokens { primaryColor?: string; borderRadius?: string; colorBgContainer?: string; colorText?: string; colorBorder?: string }
export type ConfigSize = 'small' | 'middle' | 'large';
export type ConfigLocale = 'zh-CN' | 'en-US';
export interface UIConfig { prefixCls: string; direction: 'ltr' | 'rtl'; size: ConfigSize; locale: ConfigLocale; theme: ThemeTokens }
export const configKey: InjectionKey<UIConfig> = Symbol('AtelierConfig');
export function useConfig() { return inject(configKey, { prefixCls: 'at', direction: 'ltr', size: 'middle', locale: 'zh-CN', theme: {} }); }
