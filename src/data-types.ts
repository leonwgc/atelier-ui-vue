import type { VNodeChild, Ref } from 'vue';
import type { PopupPlacement } from './internal/floating';
export interface SelectOption { label: string; value: string; disabled?: boolean; description?: VNodeChild; icon?: VNodeChild }
export interface SelectOptionGroup { label: string; options: SelectOption[] }
export type SelectValue = string | string[];
export interface AutoCompleteOption { value: string; label?: VNodeChild; description?: VNodeChild; disabled?: boolean }
export type AutoCompleteOptionInput = string | AutoCompleteOption;
export interface CascaderOption { label: string; value: string; disabled?: boolean; children?: CascaderOption[]; isLeaf?: boolean }
export interface TransferItem { key: string; title: string; description?: VNodeChild; disabled?: boolean }
export type TransferDirection = 'left' | 'right';
export interface TreeSelectNode { label: string; value: string; children?: TreeSelectNode[]; disabled?: boolean; selectable?: boolean; icon?: VNodeChild }
export type TreeSelectValue = string | string[];
export interface MentionOption { value: string; label?: VNodeChild; description?: VNodeChild; avatar?: VNodeChild; disabled?: boolean }
export type MentionOptionInput = string | MentionOption;
export interface CarouselRef { next: () => void; prev: () => void; goTo: (index: number) => void }
export type CarouselEffect = 'slide' | 'fade';
export type DotPosition = 'bottom' | 'top' | 'left' | 'right';
export interface ListyRef { scrollTo: (index: number, align?: 'start' | 'center' | 'end') => void; scrollToTop: () => void }
export type QRCodeStatus = 'active' | 'expired' | 'loading' | 'scanned';
export interface DropdownItem { key: string; label?: VNodeChild; icon?: VNodeChild; extra?: VNodeChild; disabled?: boolean; danger?: boolean; type?: 'item' | 'divider' | 'group'; children?: DropdownItem[]; onClick?: (item: DropdownItem) => void }
export type TourTarget = HTMLElement | null | undefined | (() => HTMLElement | null | undefined) | Ref<HTMLElement | null>;
export interface TourStep { title: VNodeChild; description?: VNodeChild; cover?: VNodeChild; target?: TourTarget; placement?: PopupPlacement; mask?: boolean; nextButtonProps?: { children?: VNodeChild; onClick?: () => void }; prevButtonProps?: { children?: VNodeChild; onClick?: () => void } }
export type CalendarMode = 'month' | 'year';
export interface CalendarCellInfo { type: 'date' | 'month'; today: boolean; selected: boolean; outside: boolean; disabled: boolean }
export type StepStatus = 'wait' | 'process' | 'finish' | 'error';
export interface StepItem { title: VNodeChild; description?: VNodeChild; status?: StepStatus; disabled?: boolean }
export interface TabItem { key: string; label: VNodeChild; children: VNodeChild; disabled?: boolean }
export interface CollapseItem { key: string; title: VNodeChild; children: VNodeChild; disabled?: boolean }
export interface DescriptionItem { key: string; label: VNodeChild; children: VNodeChild }
export interface BreadcrumbItem { title: VNodeChild; href?: string; onClick?: () => void }
export interface TimelineItem { key: string; content: VNodeChild; label?: VNodeChild; color?: string }
export type AlertVariant = 'info' | 'success' | 'warning' | 'error';
export type TagVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
export type BadgeStatus = 'default' | 'success' | 'processing' | 'warning' | 'error';
export type ProgressStatus = 'normal' | 'active' | 'success' | 'exception';
export type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '500';
export type SliderValue = number | [number, number];
export type SliderMarks = Record<number, VNodeChild | { label: VNodeChild; style?: import('vue').CSSProperties }>;
export type TransitionStatus = 'entering' | 'entered' | 'exiting' | 'exited';
export type TransitionAnimation = 'fade' | 'slide-up' | 'collapse' | 'none';
export type TransitionClassNames = string | Partial<Record<TransitionStatus, string>>;
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export type PopoverPlacement = PopupPlacement;
export type FloatingPlacement = PopupPlacement;
export type PopoverTrigger = 'click' | 'hover' | 'focus' | 'contextMenu' | ('click' | 'hover' | 'focus' | 'contextMenu')[];
export type FloatButtonShape = 'circle' | 'square';
export type FloatButtonType = 'default' | 'primary';
export interface SegmentedOption<T extends string = string> { label: VNodeChild; value: T; icon?: VNodeChild; disabled?: boolean }
export interface CheckboxOption { label: VNodeChild; value: string; disabled?: boolean }
export interface RadioOption { label: VNodeChild; value: string; disabled?: boolean }
export interface ImagePreviewConfig { src?: string; mask?: VNodeChild; visible?: boolean; onVisibleChange?: (visible: boolean) => void }
export interface ListGridConfig { column?: number; gutter?: number; xs?: number; sm?: number; md?: number; lg?: number }
export interface ListPaginationConfig { pageSize?: number; current?: number; defaultCurrent?: number; onChange?: (page: number, pageSize: number) => void; position?: 'top' | 'bottom' | 'both'; align?: 'start' | 'center' | 'end'; showSizeChanger?: boolean; pageSizeOptions?: number[] }
export type SlideInDirection = 'left' | 'right' | 'up' | 'down';
export type ScrollRevealDirection = SlideInDirection;
export type IconName = 'plus' | 'search' | 'check' | 'close' | 'arrow-right' | 'info' | 'more';
