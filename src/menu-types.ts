import type { InjectionKey, VNodeChild } from 'vue';
export interface MenuItem { key: string; label?: VNodeChild; icon?: VNodeChild; disabled?: boolean; danger?: boolean; type?: 'item' | 'group' | 'divider'; children?: MenuItem[]; href?: string; onClick?: (item: MenuItem) => void }
export type MenuMode = 'inline' | 'vertical' | 'horizontal';
export interface MenuContext { mode: MenuMode; collapsed: boolean; selectedKey?: string; openKeys: string[]; inlineIndent: number; select: (item: MenuItem) => void; toggle: (key: string) => void; render: (item: MenuItem) => VNodeChild; keydown: (event: KeyboardEvent) => void }
export const menuKey: InjectionKey<MenuContext> = Symbol('AtelierMenu');
