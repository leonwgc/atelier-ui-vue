import type { VNodeChild } from 'vue';
export interface TableFilterOption { label: string; value: string }
export interface TableColumn<T = Record<string, unknown>> { key: string; title: string; dataIndex?: keyof T | string; width?: number | string; align?: 'left' | 'center' | 'right'; render?: (value: unknown, record: T, index: number) => VNodeChild; sorter?: boolean | ((left: T, right: T) => number); filters?: TableFilterOption[]; onFilter?: (value: string, record: T) => boolean }
export interface TableChange { page: number; pageSize: number; sort?: { key: string; direction: 'asc' | 'desc' }; filters: Record<string, string> }
