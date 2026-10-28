import { defineComponent, shallowRef as vueRef, computed, Fragment } from 'vue';
import type { VNodeChild } from 'vue';
import { refSetter, vnode, demoEffect } from './demo-runtime';
import { vueApiName } from './api';
import { highlightCode } from './shared';
import { AnimatedList, BlurFade, BorderBeam, Button, Confetti, Expand, FadeIn, FlipCard, FlipIn, Glow, HoverLift, Input, Marquee, NumberTicker, Press, Pulse, ScaleIn, ScrollReveal, Shake, Shimmer, SlideIn, Stagger, Transition, TransitionGroup, TypingAnimation, Wobble, useFieldArray, useForm } from '../src';
export type AnimationPageId = 'marquee' | 'numberTicker' | 'typingAnimation' | 'blurFade' | 'fadeIn' | 'slideIn' | 'scrollReveal' | 'scaleIn' | 'stagger' | 'expand' | 'pulse' | 'glow' | 'shake' | 'wobble' | 'hoverLift' | 'press' | 'flipIn' | 'flipCard' | 'confetti' | 'shimmer' | 'animatedList' | 'transition' | 'transitionGroup' | 'borderBeam';
type ApiRow = [
    string,
    string,
    string
];
interface AnimationPageMeta {
    id: AnimationPageId;
    title: string;
    icon: string;
    description: string;
    code: string;
    rows: ApiRow[];
    preview: VNodeChild;
}
export const ExpandPreview = defineComponent({
    "name": "ExpandPreview",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        return () => (vnode("div", {
            "class": "animation-expand-demo"
        }, [
            vnode(Button, {
                "size": "sm",
                "aria-expanded": open.value,
                "aria-controls": "animation-expand-demo-panel",
                "onClick": () => setOpen((value: boolean) => !value)
            }, {
                "default": () => [
                    open.value ? '收起内容' : '展开内容'
                ]
            }),
            vnode(Expand, {
                "id": "animation-expand-demo-panel",
                "open": open.value,
                "class": "animation-expand-preview"
            }, {
                "default": () => [
                    vnode("p", {}, [
                        "Additional details are revealed here."
                    ])
                ]
            })
        ]));
    }
});
export const SingleTransitionDemo = defineComponent({
    "name": "SingleTransitionDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(true);
        const setOpen = refSetter(open);
        return () => vnode("div", {
            "class": "animation-transition-demo"
        }, [
            vnode(Button, {
                "size": "sm",
                "onClick": () => setOpen((value: boolean) => !value)
            }, {
                "default": () => [
                    "切换筛选面板"
                ]
            }),
            vnode(Transition, {
                "in": open.value,
                "animation": "collapse",
                "timeout": 200
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "animation-transition-panel"
                    }, [
                        "筛选条件与结果设置"
                    ])
                ]
            })
        ]);
    }
});
export const TransitionGroupDemo = defineComponent({
    "name": "TransitionGroupDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const form = useForm<{
            members: Array<{
                name: string;
            }>;
        }>({ defaultValues: { members: [{ name: 'Alex Chen' }, { name: 'Morgan Lee' }] } });
        const members = useFieldArray<{
            members: Array<{
                name: string;
            }>;
        }, {
            name: string;
        }>({ control: form.control, name: 'members' });
        return () => vnode("div", {
            "class": "animation-transition-demo"
        }, [
            vnode(Button, {
                "size": "sm",
                "onClick": () => members.append({ name: '' })
            }, {
                "default": () => [
                    "＋ 添加成员"
                ]
            }),
            vnode(TransitionGroup, {
                "class": "animation-transition-list"
            }, {
                "default": () => [
                    members.fields.map((member: { name: string; } & { id: string; }, index: number) => vnode(Transition, {
                        "key": member.id,
                        "animation": "slide-up",
                        "timeout": 200
                    }, {
                        "exit": () => vnode("div", {
                            "class": "animation-transition-exit"
                        }, [
                            member.name || `成员 ${index + 1}`,
                            " 已移除"
                        ]),
                        "default": () => [
                            vnode("div", {
                                "class": "animation-transition-row"
                            }, [
                                vnode(Input, {
                                    "aria-label": `成员 ${index + 1} 姓名`,
                                    "placeholder": "成员姓名",
                                    ...form.register(`members.${index}.name`)
                                }, {}),
                                vnode("button", {
                                    "type": "button",
                                    "class": "animation-transition-remove",
                                    "aria-label": `移除成员 ${index + 1}`,
                                    "onClick": () => members.remove(index)
                                }, [
                                    "×"
                                ])
                            ])
                        ]
                    }))
                ]
            })
        ]);
    }
});
export const AnimationPage = defineComponent({
    "name": "AnimationPage",
    "props": [
        "id"
    ],
    "setup": (props, { slots }) => {
        const { id } = props;
        const showCode = vueRef(false);
        const setShowCode = refSetter(showCode);
        const item = animationPages.find((page: AnimationPageMeta) => page.id === id);
        if (!item)
            return () => null;
        return () => vnode(Fragment, null, [
            vnode("div", {
                "class": "page-heading"
            }, [
                vnode("div", {
                    "class": "eyebrow"
                }, [
                    vnode("span", {
                        "class": "eyebrow__dot"
                    }, []),
                    "动画组件"
                ]),
                vnode("div", {
                    "class": "page-heading__row"
                }, [
                    vnode("div", {}, [
                        vnode("h1", {}, [
                            item.title
                        ]),
                        vnode("p", {}, [
                            item.description
                        ])
                    ]),
                    vnode("span", {
                        "class": "heading-badge"
                    }, [
                        item.title.split(' ')[0]
                    ])
                ])
            ]),
            vnode("section", {
                "class": "example-card"
            }, [
                vnode("div", {
                    "class": "example-card__heading"
                }, [
                    vnode("div", {}, [
                        vnode("h3", {}, [
                            "交互示例"
                        ]),
                        vnode("p", {}, [
                            "体验组件效果，再查看可直接使用的 TypeScript 示例。"
                        ])
                    ]),
                    vnode("button", {
                        "type": "button",
                        "class": `code-toggle ${showCode.value ? 'code-toggle--active' : ''}`,
                        "onClick": () => setShowCode((visible: boolean) => !visible)
                    }, [
                        vnode("span", {}, [
                            `</>`
                        ]),
                        showCode.value ? '收起代码' : '查看完整代码'
                    ])
                ]),
                vnode("div", {
                    "class": "example-card__preview"
                }, [
                    item.preview
                ]),
                showCode.value && vnode("pre", {
                    "class": "code-panel"
                }, [
                    vnode("code", {
                        "innerHTML": { __html: highlightCode(item.code) }.__html
                    }, [])
                ])
            ]),
            vnode("section", {
                "class": "api-table-section"
            }, [
                vnode("div", {
                    "class": "eyebrow"
                }, [
                    vnode("span", {
                        "class": "eyebrow__dot"
                    }, []),
                    " API REFERENCE"
                ]),
                vnode("h2", {}, [
                    "组件属性"
                ]),
                vnode("div", {
                    "class": "api-table-wrap"
                }, [
                    vnode("table", {
                        "class": "api-table"
                    }, [
                        vnode("thead", {}, [
                            vnode("tr", {}, [
                                vnode("th", {}, [
                                    "属性"
                                ]),
                                vnode("th", {}, [
                                    "类型"
                                ]),
                                vnode("th", {}, [
                                    "默认值"
                                ])
                            ])
                        ]),
                        vnode("tbody", {}, [
                            item.rows.map(([prop, type, fallback]: ApiRow) => vnode("tr", {
                                "key": prop
                            }, [
                                vnode("td", {}, [
                                    vnode("code", {}, [
                                        vueApiName(prop, item.rows)
                                    ])
                                ]),
                                vnode("td", {}, [
                                    type
                                ]),
                                vnode("td", {}, [
                                    fallback
                                ])
                            ]))
                        ])
                    ])
                ])
            ])
        ]);
    }
});
const activityItems = [
    { id: 'workspace', initials: 'W', title: 'Workspace created', description: 'Studio One is ready to use', time: '2 min ago' },
    { id: 'review', initials: 'D', title: 'Design review completed', description: 'All 8 comments were resolved', time: '18 min ago' },
    { id: 'release', initials: 'R', title: 'Release published', description: 'Version 2.4.0 is now live', time: '1 hr ago' },
];
export const animationPages: AnimationPageMeta[] = [
    {
        id: 'marquee', title: 'Marquee 滚动展示', icon: '⇢', description: '以连续循环的轨道展示标签、动态或品牌内容。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Marquee } from "atelier-ui-vue/marquee";
export const ProjectMarquee = defineComponent({
    "name": "ProjectMarquee",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Marquee, {
            "duration": 24,
            "gradient": true,
            "pauseOnHover": true
        }, {
            "default": () => [
                vnode("span", {}, [
                    "Design systems"
                ]),
                vnode("span", {}, [
                    "Product teams"
                ]),
                vnode("span", {}, [
                    "Made to move"
                ])
            ]
        }));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['duration', 'number', '28 秒'], ['direction', "'left' | 'right'", 'left'], ['pauseOnHover', 'boolean', 'true'], ['gradient', 'boolean', 'false']],
        preview: vnode(Marquee, {
            "duration": 12,
            "gradient": true
        }, {
            "default": () => [
                vnode("span", {
                    "class": "animation-pill"
                }, [
                    "Design systems"
                ]),
                vnode("span", {
                    "class": "animation-pill"
                }, [
                    "Product teams"
                ]),
                vnode("span", {
                    "class": "animation-pill"
                }, [
                    "Made to move"
                ])
            ]
        }),
    },
    {
        id: 'numberTicker', title: 'NumberTicker 数值滚动', icon: '↗', description: '使用缓动数字递增强调统计值和关键指标。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { NumberTicker } from "atelier-ui-vue/number-ticker";
export const MonthlyRevenue = defineComponent({
    "name": "MonthlyRevenue",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(NumberTicker, {
            "value": 12840,
            "duration": 1400
        }, {
            "prefix": () => "$"
        });
    }
});
`,
        rows: [['value', 'number', 'required'], ['startValue', 'number', '0'], ['duration', 'number', '1200 ms'], ['delay', 'number', '0 ms'], ['decimals', 'number', '0'], ['locale', 'string', 'zh-CN'], ['prefix / suffix', 'string', '—']],
        preview: vnode("div", {
            "class": "animation-number-preview"
        }, [
            vnode(NumberTicker, {
                "value": 12840,
                "duration": 1600
            }, {
                "prefix": () => "$"
            })
        ]),
    },
    {
        id: 'typingAnimation', title: 'TypingAnimation 打字效果', icon: '▏', description: '逐字输入、停顿并轮播多段短文案。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { TypingAnimation } from "atelier-ui-vue/typing-animation";
export const RotatingHeadline = defineComponent({
    "name": "RotatingHeadline",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(TypingAnimation, {
            "words": ['Build with clarity', 'Ship with confidence'],
            "typeSpeed": 65,
            "pauseDuration": 1200
        }, {}));
    }
});
`,
        rows: [['words', 'string[]', 'required'], ['typeSpeed', 'number', '75 ms'], ['deleteSpeed', 'number', '38 ms'], ['pauseDuration', 'number', '1300 ms'], ['loop', 'boolean', 'true'], ['cursor', 'boolean', 'true']],
        preview: vnode("div", {
            "class": "animation-typing-preview"
        }, [
            vnode(TypingAnimation, {
                "words": ['Build with clarity', 'Ship with confidence'],
                "typeSpeed": 65,
                "pauseDuration": 1000
            }, {})
        ]),
    },
    {
        id: 'blurFade', title: 'BlurFade 模糊渐入', icon: '◌', description: '让内容以轻微位移和模糊渐显，支持错峰延迟。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { BlurFade } from "atelier-ui-vue/blur-fade";
export const Intro = defineComponent({
    "name": "Intro",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(BlurFade, {
            "delay": 120,
            "duration": 600,
            "blur": 8,
            "offsetY": 12
        }, {
            "default": () => [
                vnode("h2", {}, [
                    "Every detail finds its place."
                ])
            ]
        }));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['delay', 'number', '0 ms'], ['duration', 'number', '500 ms'], ['blur', 'number', '6 px'], ['offsetY', 'number', '8 px']],
        preview: vnode(BlurFade, {
            "key": "blur-fade-demo",
            "class": "animation-fade-preview",
            "delay": 80,
            "duration": 850
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Every detail finds its place."
                ])
            ]
        }),
    },
    {
        id: 'fadeIn', title: 'FadeIn 淡入', icon: '◦', description: '让内容以轻柔的透明度渐变进入，可配置延迟与时长。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { FadeIn } from "atelier-ui-vue/fade-in";
export const Intro = defineComponent({
    "name": "Intro",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(FadeIn, {
            "delay": 120,
            "duration": 700
        }, {
            "default": () => [
                vnode("h2", {}, [
                    "Every detail finds its place."
                ])
            ]
        }));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['delay', 'number', '0 ms'], ['duration', 'number', '500 ms'], ['HTML attributes', 'HTMLAttributes<HTMLDivElement>', '—']],
        preview: vnode(FadeIn, {
            "key": "fade-in-demo",
            "class": "animation-fade-preview",
            "delay": 80,
            "duration": 850
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Every detail finds its place."
                ])
            ]
        }),
    },
    {
        id: 'slideIn', title: 'SlideIn 滑入', icon: '⇲', description: '让内容从指定方向平滑滑入，同时淡入显示。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { SlideIn } from "atelier-ui-vue/slide-in";
export const Intro = defineComponent({
    "name": "Intro",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(SlideIn, {
            "direction": "left",
            "distance": 24,
            "delay": 100,
            "duration": 600
        }, {
            "default": () => [
                vnode("h2", {}, [
                    "Every detail finds its place."
                ])
            ]
        }));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['direction', "'left' | 'right' | 'up' | 'down'", 'up'], ['distance', 'number', '16 px'], ['delay', 'number', '0 ms'], ['duration', 'number', '500 ms'], ['HTML attributes', 'HTMLAttributes<HTMLDivElement>', '—']],
        preview: vnode(SlideIn, {
            "key": "slide-in-demo",
            "class": "animation-fade-preview",
            "direction": "left",
            "distance": 24,
            "delay": 80,
            "duration": 850
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Every detail finds its place."
                ])
            ]
        }),
    },
    {
        id: 'scrollReveal', title: 'ScrollReveal 滚动显现', icon: '⌄', description: '元素进入视口时渐入，可选择方向、距离及是否重复触发。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { ScrollReveal } from "atelier-ui-vue/scroll-reveal";
export const FeatureCard = defineComponent({
    "name": "FeatureCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(ScrollReveal, {
            "direction": "up",
            "distance": 20,
            "once": true
        }, {
            "default": () => [
                vnode("article", {}, [
                    vnode("h2", {}, [
                        "Reveal on scroll"
                    ]),
                    vnode("p", {}, [
                        "Content appears as it enters the viewport."
                    ])
                ])
            ]
        }));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['direction', "'left' | 'right' | 'up' | 'down'", 'up'], ['distance', 'number', '16 px'], ['delay / duration', 'number', '0 / 600 ms'], ['threshold', 'number', '0.1'], ['rootMargin', 'string', '0px'], ['once', 'boolean', 'true']],
        preview: vnode(ScrollReveal, {
            "key": "scroll-reveal-demo",
            "class": "animation-fade-preview",
            "direction": "up"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Reveal on scroll"
                ])
            ]
        }),
    },
    {
        id: 'scaleIn', title: 'ScaleIn 缩放弹入', icon: '⊙', description: '内容从较小比例平滑放大并淡入，适用于卡片、弹窗和菜单。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { ScaleIn } from "atelier-ui-vue/scale-in";
export const WelcomeCard = defineComponent({
    "name": "WelcomeCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(ScaleIn, {
            "startScale": 0.85,
            "duration": 450
        }, {
            "default": () => [
                vnode("article", {}, [
                    "Welcome back"
                ])
            ]
        }));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['startScale', 'number', '0.88'], ['delay', 'number', '0 ms'], ['duration', 'number', '450 ms']],
        preview: vnode(ScaleIn, {
            "key": "scale-in-demo",
            "class": "animation-fade-preview"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Welcome back"
                ])
            ]
        }),
    },
    {
        id: 'stagger', title: 'Stagger 错峰动画', icon: '☷', description: '以错峰顺序呈现任意子元素，适合标签、卡片和列表内容。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Stagger } from "atelier-ui-vue/stagger";
export const FeatureTags = defineComponent({
    "name": "FeatureTags",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Stagger, {
            "staggerDelay": 90
        }, {
            "default": () => [
                vnode("span", {}, [
                    "Fast setup"
                ]),
                vnode("span", {}, [
                    "Accessible"
                ]),
                vnode("span", {}, [
                    "Customizable"
                ])
            ]
        }));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['staggerDelay', 'number', '70 ms'], ['duration', 'number', '420 ms'], ['itemClassName', 'string', '—'], ['HTML attributes', 'HTMLAttributes<HTMLDivElement>', '—']],
        preview: vnode(Stagger, {
            "key": "stagger-demo",
            "class": "animation-stagger-preview",
            "staggerDelay": 100
        }, {
            "default": () => [
                vnode("span", {
                    "class": "animation-pill"
                }, [
                    "Fast setup"
                ]),
                vnode("span", {
                    "class": "animation-pill"
                }, [
                    "Accessible"
                ]),
                vnode("span", {
                    "class": "animation-pill"
                }, [
                    "Customizable"
                ])
            ]
        }),
    },
    {
        id: 'expand', title: 'Expand 平滑展开', icon: '⌄', description: '对受控内容进行平滑展开与收起，并隐藏折叠内容的辅助技术焦点。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Button } from "atelier-ui-vue/button";
import { Expand } from "atelier-ui-vue/expand";
export const Details = defineComponent({
    "name": "Details",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        return () => (vnode(Fragment, null, [
            vnode(Button, {
                "onClick": () => setOpen((value: boolean) => !value)
            }, {
                "default": () => [
                    open.value ? 'Hide details' : 'Show details'
                ]
            }),
            vnode(Expand, {
                "open": open.value
            }, {
                "default": () => [
                    vnode("p", {}, [
                        "Additional details are revealed here."
                    ])
                ]
            })
        ]));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['open', 'boolean', 'required'], ['duration', 'number', '300 ms'], ['HTML attributes', 'HTMLAttributes<HTMLDivElement>', '—']],
        preview: vnode(ExpandPreview, {}, {}),
    },
    {
        id: 'pulse', title: 'Pulse 呼吸', icon: '◉', description: '以柔和的循环缩放和透明度变化强调需要关注的内容。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Pulse } from "atelier-ui-vue/pulse";
export const LiveStatus = defineComponent({
    "name": "LiveStatus",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Pulse, {
            "duration": 1400
        }, {
            "default": () => [
                vnode("span", {}, [
                    "\u25CF Live now"
                ])
            ]
        });
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['duration', 'number', '1400 ms'], ['HTML attributes', 'HTMLAttributes<HTMLDivElement>', '—']],
        preview: vnode(Pulse, {
            "class": "animation-fade-preview"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "● Live now"
                ])
            ]
        }),
    },
    {
        id: 'glow', title: 'Glow 柔光', icon: '✧', description: '在内容周围循环显示柔和光晕，可自定义颜色与速度。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Glow } from "atelier-ui-vue/glow";
export const Highlight = defineComponent({
    "name": "Highlight",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Glow, {
            "color": "#8b7dff",
            "duration": 1800
        }, {
            "default": () => [
                "Featured"
            ]
        });
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['color', 'string', '#8b7dff'], ['duration', 'number', '1800 ms']],
        preview: vnode(Glow, {
            "class": "animation-fade-preview"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Featured"
                ])
            ]
        }),
    },
    {
        id: 'shake', title: 'Shake 震动反馈', icon: '↔', description: '通过短促的水平抖动反馈错误或无效操作，可用 active 重新触发。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Shake } from "atelier-ui-vue/shake";
export const InvalidField = defineComponent({
    "name": "InvalidField",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Shake, {
            "active": true
        }, {
            "default": () => [
                vnode("span", {
                    "role": "alert"
                }, [
                    "Please check this field."
                ])
            ]
        });
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['active', 'boolean', 'true'], ['duration', 'number', '650 ms']],
        preview: vnode(Shake, {
            "key": "shake-demo",
            "class": "animation-fade-preview"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Invalid input"
                ])
            ]
        }),
    },
    {
        id: 'wobble', title: 'Wobble 摇摆反馈', icon: '↝', description: '以轻微旋转摆动吸引注意，可用 active 控制播放与重播。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Wobble } from "atelier-ui-vue/wobble";
export const NewFeature = defineComponent({
    "name": "NewFeature",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Wobble, {
            "active": true
        }, {
            "default": () => [
                vnode("span", {}, [
                    "New feature"
                ])
            ]
        });
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['active', 'boolean', 'true'], ['duration', 'number', '900 ms']],
        preview: vnode(Wobble, {
            "key": "wobble-demo",
            "class": "animation-fade-preview"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "New feature"
                ])
            ]
        }),
    },
    {
        id: 'hoverLift', title: 'HoverLift 悬停抬升', icon: '⌃', description: '鼠标悬停时轻微上浮，常用于卡片和可点击内容。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { HoverLift } from "atelier-ui-vue/hover-lift";
export const ProjectCard = defineComponent({
    "name": "ProjectCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(HoverLift, {
            "lift": 6
        }, {
            "default": () => [
                vnode("article", {}, [
                    "Explore the latest projects"
                ])
            ]
        }));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['lift', 'number', '6 px'], ['duration', 'number', '500 ms']],
        preview: vnode(HoverLift, {
            "class": "animation-interaction-preview"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Hover to lift"
                ])
            ]
        }),
    },
    {
        id: 'press', title: 'Press 按压反馈', icon: '●', description: '指针按下时轻微缩小，提供即时的交互反馈。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Press } from "atelier-ui-vue/press";
export const PressableCard = defineComponent({
    "name": "PressableCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Press, {}, {
            "default": () => [
                vnode("button", {
                    "type": "button"
                }, [
                    "Press and hold"
                ])
            ]
        }));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['duration', 'number', '500 ms']],
        preview: vnode(Press, {
            "class": "animation-interaction-preview"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Press and hold"
                ])
            ]
        }),
    },
    {
        id: 'flipIn', title: 'FlipIn 翻转进入', icon: '⟳', description: '内容以 3D 翻转并淡入，可选择绕 X 或 Y 轴旋转。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { FlipIn } from "atelier-ui-vue/flip-in";
export const RevealCard = defineComponent({
    "name": "RevealCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(FlipIn, {
            "direction": "y",
            "duration": 600
        }, {
            "default": () => [
                vnode("article", {}, [
                    "Just revealed"
                ])
            ]
        });
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['direction', "'x' | 'y'", 'y'], ['delay', 'number', '0 ms'], ['duration', 'number', '600 ms']],
        preview: vnode(FlipIn, {
            "key": "flip-in-demo",
            "class": "animation-fade-preview"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Just revealed"
                ])
            ]
        }),
    },
    {
        id: 'flipCard', title: 'FlipCard 翻转卡片', icon: '▣', description: '通过外部状态控制卡片正反面翻转。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { FlipCard } from "atelier-ui-vue/flip-card";
export const MemberCard = defineComponent({
    "name": "MemberCard",
    "props": [],
    "setup": (props, { slots }) => {
        const flipped = vueRef(false);
        const setFlipped = refSetter(flipped);
        return () => (vnode("div", {}, [
            vnode("button", {
                "type": "button",
                "onClick": () => setFlipped((value: boolean) => !value)
            }, [
                "Flip card"
            ]),
            vnode(FlipCard, {
                "flipped": flipped.value
            }, {
                "front": () => vnode("strong", {}, [
                    "Alex Morgan"
                ]),
                "back": () => vnode("span", {}, [
                    "Product designer"
                ])
            })
        ]));
    }
});
`,
        rows: [['front / back', "VNodeChild / slot", 'required'], ['flipped', 'boolean', 'false'], ['direction', "'horizontal' | 'vertical'", 'horizontal'], ['HTML attributes', 'HTMLAttributes<HTMLDivElement>', '—']],
        preview: vnode(FlipCard, {
            "class": "animation-flip-card"
        }, {
            "front": () => vnode("strong", {}, [
                "Alex Morgan"
            ]),
            "back": () => vnode("span", {}, [
                "Product designer"
            ])
        }),
    },
    {
        id: 'confetti', title: 'Confetti 庆祝粒子', icon: '✳', description: '在内容周围播放轻量庆祝粒子，支持数量、颜色与时长。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Confetti } from "atelier-ui-vue/confetti";
export const SuccessMessage = defineComponent({
    "name": "SuccessMessage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Confetti, {
            "count": 24,
            "colors": ['#7c3aed', '#06b6d4', '#f59e0b']
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Payment complete!"
                ])
            ]
        }));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'optional'], ['active', 'boolean', 'true'], ['count', 'number', '24'], ['duration', 'number', '1800 ms'], ['colors', 'string[]', '内置配色']],
        preview: vnode("div", {
            "class": "animation-confetti-preview"
        }, [
            vnode(Confetti, {}, {
                "default": () => [
                    vnode("strong", {}, [
                        "Payment complete!"
                    ])
                ]
            })
        ]),
    },
    {
        id: 'shimmer', title: 'Shimmer 流光', icon: '✧', description: '为内容表面添加柔和的掠光效果，可自定义高光颜色。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Shimmer } from "atelier-ui-vue/shimmer";
export const Highlight = defineComponent({
    "name": "Highlight",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Shimmer, {
            "duration": 1800
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Ready for the next release"
                ])
            ]
        }));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['duration', 'number', '1800 ms'], ['highlight', 'string', '半透明白色']],
        preview: vnode(Shimmer, {
            "class": "animation-shimmer-preview"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Ready for the next release"
                ])
            ]
        }),
    },
    {
        id: 'animatedList', title: 'AnimatedList 列表渐入', icon: '☷', description: '以错峰渐入动画呈现动态列表内容。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { AnimatedList } from "atelier-ui-vue/animated-list";
export const ActivityFeed = defineComponent({
    "name": "ActivityFeed",
    "props": [],
    "setup": (props, { slots }) => {
        const activities = [
            { id: 'workspace', initials: 'W', title: 'Workspace created', detail: 'Studio One is ready to use', time: '2 min ago' },
            { id: 'review', initials: 'D', title: 'Design review completed', detail: 'All 8 comments were resolved', time: '18 min ago' },
            { id: 'release', initials: 'R', title: 'Release published', detail: 'Version 2.4.0 is now live', time: '1 hr ago' },
        ];
        return () => (vnode(AnimatedList, {
            "items": activities,
            "getItemKey": (activity: { id: string; initials: string; title: string; detail: string; time: string; }) => activity.id
        }, {
            "default": (scope: {
                item: { id: string; initials: string; title: string; detail: string; time: string; };
            }) => ((activity: { id: string; initials: string; title: string; detail: string; time: string; }) => (vnode("article", {
                "class": "activity-item"
            }, [
                vnode("span", {
                    "class": "activity-item__avatar"
                }, [
                    activity.initials
                ]),
                vnode("span", {
                    "class": "activity-item__content"
                }, [
                    vnode("strong", {}, [
                        activity.title
                    ]),
                    vnode("small", {}, [
                        activity.detail
                    ])
                ]),
                vnode("time", {}, [
                    activity.time
                ])
            ])))(scope.item)
        }));
    }
});
`,
        rows: [['items', 'VNodeChild[] | T[]', 'required'], ['renderItem', '(item: T, index: number) => VNodeChild', '自定义结构化数据的列表项'], ['getItemKey', '(item: T, index: number) => Key', '—'], ['staggerDelay', 'number', '70 ms'], ['duration', 'number', '420 ms'], ['itemClassName', 'string', '—'], ['HTML attributes', 'HTMLAttributes<HTMLUListElement>', '—']],
        preview: vnode(AnimatedList, {
            "key": "activity-list-demo",
            "class": "animation-list-preview",
            "items": activityItems,
            "getItemKey": (item: { id: string; initials: string; title: string; description: string; time: string; }) => item.id,
            "staggerDelay": 120
        }, {
            "default": (scope: {
                item: { id: string; initials: string; title: string; description: string; time: string; };
            }) => ((item: { id: string; initials: string; title: string; description: string; time: string; }) => vnode("article", {
                "class": "animation-list-preview__item"
            }, [
                vnode("span", {
                    "class": "animation-list-preview__avatar"
                }, [
                    item.initials
                ]),
                vnode("span", {
                    "class": "animation-list-preview__body"
                }, [
                    vnode("strong", {}, [
                        item.title
                    ]),
                    vnode("small", {}, [
                        item.description
                    ])
                ]),
                vnode("time", {}, [
                    item.time
                ])
            ]))(scope.item)
        }),
    },
    {
        id: 'transition', title: 'Transition 单项过渡', icon: '↕', description: '为条件显示的面板或内容提供统一的进入、退出生命周期。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Button } from "atelier-ui-vue/button";
import { Transition } from "atelier-ui-vue/transition";
export const FilterPanel = defineComponent({
    "name": "FilterPanel",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(true);
        const setOpen = refSetter(open);
        return () => (vnode(Fragment, null, [
            vnode(Button, {
                "onClick": () => setOpen((value: boolean) => !value)
            }, {
                "default": () => [
                    "\u5207\u6362\u7B5B\u9009\u9762\u677F"
                ]
            }),
            vnode(Transition, {
                "in": open.value,
                "animation": "collapse",
                "timeout": 200
            }, {
                "default": () => [
                    vnode("div", {}, [
                        "\u7B5B\u9009\u6761\u4EF6\u4E0E\u7ED3\u679C\u8BBE\u7F6E"
                    ])
                ]
            })
        ]));
    }
});
`,
        rows: [['in', 'boolean', 'true'], ['animation', "'fade' | 'slide-up' | 'collapse' | 'none'", 'fade'], ['timeout', 'number', '200 ms'], ['appear', 'boolean', 'false'], ['mountOnEnter / unmountOnExit', 'boolean', 'true'], ['exit', "VNodeChild / slot", "#default"], ['classNames', 'string | Partial<Record<TransitionStatus, string>>', '—'], ['onEnter / onEntered', '(node: HTMLDivElement) => void', '—'], ['onExit / onExited', '(node: HTMLDivElement) => void', '—']],
        preview: vnode(SingleTransitionDemo, {}, {}),
    },
    {
        id: 'transitionGroup', title: 'TransitionGroup 动态项过渡', icon: '⇅', description: '按稳定 key 管理子项增删；表单数据立即变化，退场项仅保留视觉快照。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { Button } from "atelier-ui-vue/button";
import { Input } from "atelier-ui-vue/input";
import { Transition } from "atelier-ui-vue/transition";
import { TransitionGroup } from "atelier-ui-vue/transition-group";
import { useFieldArray, useForm } from "atelier-ui-vue/form";
export const TeamMembers = defineComponent({
    "name": "TeamMembers",
    "props": [],
    "setup": (props, { slots }) => {
        const form = useForm({ defaultValues: { members: [{ name: 'Alex Chen' }] } });
        const members = useFieldArray({ control: form.control, name: 'members' });
        return () => (vnode(Fragment, null, [
            vnode(Button, {
                "onClick": () => members.append({ name: '' })
            }, {
                "default": () => [
                    "\u6DFB\u52A0\u6210\u5458"
                ]
            }),
            vnode(TransitionGroup, {}, {
                "default": () => [
                    members.fields.map((member, index) => (vnode(Transition, {
                        "key": member.id,
                        "animation": "slide-up",
                        "timeout": 200
                    }, {
                        "exit": () => vnode("div", {}, [
                            member.name || '\u672A\u547D\u540D\u6210\u5458',
                            " \u5DF2\u79FB\u9664"
                        ]),
                        "default": () => [
                            vnode("div", {}, [
                                vnode(Input, {
                                    "aria-label": '\u6210\u5458 ' + (index + 1) + ' \u59D3\u540D',
                                    ...form.register('members.' + index + '.name')
                                }, {}),
                                vnode("button", {
                                    "type": "button",
                                    "onClick": () => members.remove(index)
                                }, [
                                    "\u79FB\u9664"
                                ])
                            ])
                        ]
                    })))
                ]
            })
        ]));
    }
});
`,
        rows: [["#default", 'keyed Transition elements', 'required'], ["class", 'string', '—'], ['exit snapshot', 'Transition.exit: VNodeChild', 'optional'], ['removal', 'data is removed immediately', '—']],
        preview: vnode(TransitionGroupDemo, {}, {}),
    },
    {
        id: 'borderBeam', title: 'BorderBeam 边框流光', icon: '✧', description: '为重点内容添加可控颜色和速度的流动边框。',
        code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
import type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';
function refSetter<T>(state: Ref<T>) { return (next: T | ((previous: T) => T)) => { state.value = typeof next === 'function' ? (next as (previous: T) => T)(state.value) : next; }; }
const unitless = new Set(['opacity', 'zIndex', 'fontWeight', 'lineHeight', 'flex', 'flexGrow', 'flexShrink', 'order', 'gridRow', 'gridColumn', 'WebkitLineClamp', 'strokeWidth', 'strokeDashoffset', 'scale', 'zoom']);
function normalizeStyle(style: unknown): unknown { if (Array.isArray(style)) return style.map(normalizeStyle); if (!style || typeof style !== 'object') return style; return Object.fromEntries(Object.entries(style).map(([key, value]) => [key, typeof value === 'number' && !unitless.has(key) && !key.startsWith('--') ? \`\${value}px\` : value])); }
function vnode(type: VNodeTypes, props: Record<string, unknown> | null, children: VNodeChild[] | Record<string, (...args: never[]) => VNodeChild> = []) {
  return createVNode(type, props?.style ? { ...props, style: normalizeStyle(props.style) as CSSProperties } : props, children);
}
function demoEffect(effect: () => void | (() => void), dependencies?: unknown[]) {
  onMounted(() => { watch(() => dependencies ?? [], (_, __, cleanup) => { const dispose = effect(); if (dispose) cleanup(dispose); }, { immediate: true, deep: true }); });
}
interface DemoSlotScope { item: unknown; index: number; option: unknown; node: unknown; active: boolean; selected: boolean; query: string; date: Date; info: unknown; current: number; total: number; status: string; onRefresh?: () => void }

import { BorderBeam } from "atelier-ui-vue/border-beam";
export const HighlightCard = defineComponent({
    "name": "HighlightCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(BorderBeam, {
            "color": "#2f9472",
            "duration": 5
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Ready for the next release"
                ])
            ]
        }));
    }
});
`,
        rows: [["#default", "VNodeChild / slot", 'required'], ['color', 'string', '#8b7dff'], ['duration', 'number', '5 秒'], ['paused', 'boolean', 'false'], ["class", 'string', '—']],
        preview: vnode(BorderBeam, {
            "color": "#2f9472"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "Ready for the next release"
                ])
            ]
        }),
    },
];
export function isAnimationPageId(id: string): id is AnimationPageId {
    return animationPages.some((item: AnimationPageMeta) => item.id === id);
}
