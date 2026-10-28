import { createVNode as vnode, defineComponent } from 'vue';
import type { SVGAttributes } from 'vue';
type Props = SVGAttributes & { size?: number };
const Svg = defineComponent({ name: 'AtelierSvg', inheritAttrs: false, props: { size: { type: Number, default: 16 } }, setup(props, { attrs, slots }) { return () => vnode('svg', { width: props.size, height: props.size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': true, focusable: false, ...attrs }, slots.default?.()); } });
export const ChevronDown = (props: Props) => vnode(Svg, {
    ...props
}, {
    "default": () => [
        vnode("path", {
            "d": "m6 9 6 6 6-6"
        }, [])
    ]
});
export const ChevronRight = (props: Props) => vnode(Svg, {
    ...props
}, {
    "default": () => [
        vnode("path", {
            "d": "m9 6 6 6-6 6"
        }, [])
    ]
});
export const ChevronLeft = (props: Props) => vnode(Svg, {
    ...props
}, {
    "default": () => [
        vnode("path", {
            "d": "m15 6-6 6 6 6"
        }, [])
    ]
});
export const Check = (props: Props) => vnode(Svg, {
    ...props
}, {
    "default": () => [
        vnode("path", {
            "d": "m5 12 4.5 4.5L19 7"
        }, [])
    ]
});
export const Close = (props: Props) => vnode(Svg, {
    ...props
}, {
    "default": () => [
        vnode("path", {
            "d": "M6 6l12 12M18 6 6 18"
        }, [])
    ]
});
export const Clock = (props: Props) => vnode(Svg, {
    ...props
}, {
    "default": () => [
        vnode("circle", {
            "cx": "12",
            "cy": "12",
            "r": "9"
        }, []),
        vnode("path", {
            "d": "M12 7v5l3 2"
        }, [])
    ]
});
export const Search = (props: Props) => vnode(Svg, {
    ...props
}, {
    "default": () => [
        vnode("circle", {
            "cx": "11",
            "cy": "11",
            "r": "7"
        }, []),
        vnode("path", {
            "d": "m20 20-4-4"
        }, [])
    ]
});
export const Plus = (props: Props) => vnode(Svg, {
    ...props
}, {
    "default": () => [
        vnode("path", {
            "d": "M12 5v14M5 12h14"
        }, [])
    ]
});
export const Minus = (props: Props) => vnode(Svg, {
    ...props
}, {
    "default": () => [
        vnode("path", {
            "d": "M5 12h14"
        }, [])
    ]
});
export const Star = ({ size = 24, ...props }: Props) => vnode("svg", {
    "width": size,
    "height": size,
    "viewBox": "0 0 24 24",
    "fill": "currentColor",
    "aria-hidden": "true",
    "focusable": "false",
    ...props
}, [
    vnode("path", {
        "d": "M12 2.5l2.95 6.26 6.85.84-5.05 4.72 1.3 6.78L12 17.77 5.95 21.1l1.3-6.78L2.2 9.6l6.85-.84L12 2.5z"
    }, [])
]);

const detailIcon = (children: () => import('vue').VNode[], size = 18) => (props: Props) => vnode(Svg, { size, ...props }, { default: children });
export const ZoomIn = detailIcon(() => [vnode('circle', { cx: 11, cy: 11, r: 7 }), vnode('path', { d: 'm20 20-4-4M11 8v6M8 11h6' })]);
export const ZoomOut = detailIcon(() => [vnode('circle', { cx: 11, cy: 11, r: 7 }), vnode('path', { d: 'm20 20-4-4M8 11h6' })]);
export const Rotate = detailIcon(() => [vnode('path', { d: 'M3 12a9 9 0 1 0 3-6.7' }), vnode('path', { d: 'M3 4v5h5' })]);
export const Flip = detailIcon(() => [vnode('path', { d: 'M12 3v18' }), vnode('path', { d: 'M8 7 3 12l5 5' }), vnode('path', { d: 'm16 7 5 5-5 5' })]);
export const Eye = detailIcon(() => [vnode('path', { d: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z' }), vnode('circle', { cx: 12, cy: 12, r: 3 })]);
export const Copy = detailIcon(() => [vnode('rect', { x: 9, y: 9, width: 13, height: 13, rx: 2 }), vnode('path', { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' })], 14);
export const Edit = detailIcon(() => [vnode('path', { d: 'M12 20h9' }), vnode('path', { d: 'M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z' })], 14);
export const BrokenImage = detailIcon(() => [vnode('rect', { x: 3, y: 5, width: 18, height: 14, rx: 2 }), vnode('path', { d: 'm3 16 5-5 4 4 3-3 6 6' }), vnode('path', { d: 'm3 3 18 18' })], 28);
