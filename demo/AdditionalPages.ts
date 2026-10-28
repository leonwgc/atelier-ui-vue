import { defineComponent, shallowRef as vueRef, computed, Fragment } from 'vue';
import type { VNodeChild } from 'vue';
import { refSetter, vnode, demoEffect } from './demo-runtime';
import { vueApiName } from './api';
import { highlightCode } from './shared';
import { Button, ConfigProvider, Flex, Grid, GridCol, Icon, InputOTP, Layout, LayoutContent, LayoutFooter, LayoutHeader, LayoutSider, message, notification, Result, Space, } from '../src';
export type AdditionalPageId = 'flex' | 'grid' | 'icon' | 'inputOTP' | 'layout' | 'result' | 'space' | 'message' | 'notification' | 'configProvider';
type ApiRow = [
    string,
    string,
    string
];
interface ComponentPageMeta {
    id: AdditionalPageId;
    title: string;
    icon: string;
    group: string;
    description: string;
    code: string;
    rows: ApiRow[];
    preview: VNodeChild;
}
export const TagLike = defineComponent({
    "name": "TagLike",
    "props": [],
    "setup": (props, { slots }) => {
        const slotContent = () => slots.default?.();
        return () => vnode("span", {
            "class": "additional-tag-like"
        }, [
            slotContent()
        ]);
    }
});
export const AdditionalComponentPage = defineComponent({
    "name": "AdditionalComponentPage",
    "props": [
        "id"
    ],
    "setup": (props, { slots }) => {
        const { id } = props;
        const showCode = vueRef(false);
        const setShowCode = refSetter(showCode);
        const item = additionalComponents.find((component: ComponentPageMeta) => component.id === id);
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
                    item.group.toLocaleUpperCase()
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
                            "在下方体验组件，再展开查看可直接使用的 TypeScript 示例。"
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
export const additionalComponents: ComponentPageMeta[] = [
    {
        id: 'icon', title: 'Icon 图标', icon: '✦', group: '基础组件', description: '使用轻量的内联 SVG 图标表达清晰、可访问的操作含义。',
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

import { Icon } from "atelier-ui-vue/icon";
export const ActionIcons = defineComponent({
    "name": "ActionIcons",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode("div", {}, [
            vnode(Icon, {
                "name": "search",
                "title": "\u641C\u7D22"
            }, {}),
            vnode(Icon, {
                "name": "plus",
                "size": 24
            }, {})
        ]);
    }
});
`,
        rows: [['name', "'plus' | 'search' | 'check' | 'close' | 'arrow-right' | 'info' | 'more'", 'required'], ['size', 'number', '20'], ['title', 'string', '—']],
        preview: vnode("div", {
            "class": "additional-icon-preview"
        }, [
            vnode(Icon, {
                "name": "search",
                "title": "搜索"
            }, {}),
            vnode(Icon, {
                "name": "plus",
                "size": 24
            }, {}),
            vnode(Icon, {
                "name": "check",
                "size": 24
            }, {}),
            vnode(Icon, {
                "name": "arrow-right",
                "size": 24
            }, {})
        ]),
    },
    {
        id: 'flex', title: 'Flex 弹性布局', icon: '↔', group: '布局组件', description: '使用常见的 Flexbox 属性快速对齐和排列内容。',
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
import { Flex } from "atelier-ui-vue/flex";
export const Toolbar = defineComponent({
    "name": "Toolbar",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Flex, {
            "gap": 12,
            "justify": "space-between"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "\u9879\u76EE"
                ]),
                vnode("button", {
                    "type": "button"
                }, [
                    "\u7B5B\u9009"
                ])
            ]
        }));
    }
});
`,
        rows: [['vertical', 'boolean', 'false'], ['gap', 'number | string', '12'], ['align', 'CSSProperties[alignItems]', 'center'], ['justify', 'CSSProperties[justifyContent]', 'flex-start'], ['wrap', 'boolean', 'false']],
        preview: vnode(Flex, {
            "class": "additional-flex-preview",
            "justify": "space-between"
        }, {
            "default": () => [
                vnode("strong", {}, [
                    "项目工作区"
                ]),
                vnode(Button, {
                    "size": "sm"
                }, {
                    "default": () => [
                        "筛选"
                    ]
                }),
                vnode(TagLike, {}, {
                    "default": () => [
                        "全部项目"
                    ]
                })
            ]
        }),
    },
    {
        id: 'space', title: 'Space 间距', icon: '↔', group: '布局组件', description: '为一组相邻元素提供统一、可换行的间距。',
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
import { Space } from "atelier-ui-vue/space";
export const Actions = defineComponent({
    "name": "Actions",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Space, {
            "size": 12
        }, {
            "default": () => [
                vnode(Button, {}, {
                    "default": () => [
                        "\u4FDD\u5B58\u8349\u7A3F"
                    ]
                }),
                vnode(Button, {
                    "variant": "primary"
                }, {
                    "default": () => [
                        "\u53D1\u5E03"
                    ]
                })
            ]
        });
    }
});
`,
        rows: [['size', 'number | string', '12'], ['direction', "'horizontal' | 'vertical'", 'horizontal'], ['wrap', 'boolean', 'false'], ["#default", "VNodeChild / slot", 'required']],
        preview: vnode(Space, {
            "wrap": true
        }, {
            "default": () => [
                vnode(Button, {}, {
                    "default": () => [
                        "保存草稿"
                    ]
                }),
                vnode(Button, {
                    "variant": "primary"
                }, {
                    "default": () => [
                        "发布"
                    ]
                }),
                vnode(Button, {
                    "variant": "tertiary"
                }, {
                    "default": () => [
                        "更多"
                    ]
                })
            ]
        }),
    },
    {
        id: 'layout', title: 'Layout 布局', icon: '▤', group: '布局组件', description: '组合页头、侧栏、内容区和页脚，搭建常见页面骨架。',
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

import { Layout, LayoutContent, LayoutFooter, LayoutHeader, LayoutSider } from "atelier-ui-vue/layout";
export const ProjectLayout = defineComponent({
    "name": "ProjectLayout",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Layout, {}, {
            "default": () => [
                vnode(LayoutHeader, {}, {
                    "default": () => [
                        "\u5DE5\u4F5C\u533A\u6807\u9898"
                    ]
                }),
                vnode(Layout, {}, {
                    "default": () => [
                        vnode(LayoutSider, {}, {
                            "default": () => [
                                "\u9879\u76EE\u5BFC\u822A"
                            ]
                        }),
                        vnode(LayoutContent, {}, {
                            "default": () => [
                                "\u4E3B\u8981\u5185\u5BB9"
                            ]
                        })
                    ]
                }),
                vnode(LayoutFooter, {}, {
                    "default": () => [
                        "\u00A9 2026"
                    ]
                })
            ]
        }));
    }
});
`,
        rows: [['Layout', 'HTMLAttributes<HTMLDivElement>', 'flex container'], ['LayoutHeader', 'HTMLAttributes<HTMLElement>', 'header region'], ['LayoutSider', 'width?: number | string', '220'], ['LayoutContent', 'HTMLAttributes<HTMLElement>', 'main region'], ['LayoutFooter', 'HTMLAttributes<HTMLElement>', 'footer region']],
        preview: vnode(Layout, {
            "class": "additional-layout-preview"
        }, {
            "default": () => [
                vnode(LayoutHeader, {}, {
                    "default": () => [
                        "工作区标题"
                    ]
                }),
                vnode(Layout, {}, {
                    "default": () => [
                        vnode(LayoutSider, {
                            "width": 105
                        }, {
                            "default": () => [
                                "项目导航"
                            ]
                        }),
                        vnode(LayoutContent, {}, {
                            "default": () => [
                                "主要内容"
                            ]
                        })
                    ]
                }),
                vnode(LayoutFooter, {}, {
                    "default": () => [
                        "© 2026"
                    ]
                })
            ]
        }),
    },
    {
        id: 'grid', title: 'Grid 栅格', icon: '▦', group: '布局组件', description: '基于 24 列的网格快速构建对齐的内容布局。',
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

import { Grid, GridCol } from "atelier-ui-vue/grid";
export const ProjectGrid = defineComponent({
    "name": "ProjectGrid",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Grid, {
            "columns": 24,
            "gap": 12
        }, {
            "default": () => [
                vnode(GridCol, {
                    "span": 12
                }, {
                    "default": () => [
                        "\u9879\u76EE\u540D\u79F0"
                    ]
                }),
                vnode(GridCol, {
                    "span": 12
                }, {
                    "default": () => [
                        "\u8D1F\u8D23\u4EBA"
                    ]
                }),
                vnode(GridCol, {
                    "span": 24
                }, {
                    "default": () => [
                        "\u66F4\u591A\u4FE1\u606F"
                    ]
                })
            ]
        }));
    }
});
`,
        rows: [['Grid.columns', 'number', '24'], ['Grid.gap', 'number | string', '16'], ['GridCol.span', 'number', '12']],
        preview: vnode(Grid, {
            "columns": 24
        }, {
            "default": () => [
                vnode(GridCol, {
                    "span": 12
                }, {
                    "default": () => [
                        "项目名称"
                    ]
                }),
                vnode(GridCol, {
                    "span": 12
                }, {
                    "default": () => [
                        "负责人"
                    ]
                }),
                vnode(GridCol, {
                    "span": 24
                }, {
                    "default": () => [
                        "最近更新 · 今天"
                    ]
                })
            ]
        }),
    },
    {
        id: 'inputOTP', title: 'InputOTP 验证码输入', icon: '▦', group: '数据录入', description: '将一次性验证码拆分为易于输入和校验的独立数字格。',
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

import { InputOTP } from "atelier-ui-vue/input-otp";
export const VerificationCode = defineComponent({
    "name": "VerificationCode",
    "props": [],
    "setup": (props, { slots }) => {
        const code = vueRef('');
        const setCode = refSetter(code);
        return () => (vnode(InputOTP, {
            "modelValue": code.value,
            "onChange": setCode,
            "onComplete": (value: string) => console.log('\u9A8C\u8BC1\u7801\uFF1A', value),
            "ariaLabel": "\u767B\u5F55\u9A8C\u8BC1\u7801"
        }, {}));
    }
});
`,
        rows: [['length', 'number', '6'], ['value / defaultValue', 'string', '—'], ['onChange', '(value: string) => void', '—'], ['onComplete', '(value: string) => void', '—'], ['disabled', 'boolean', 'false'], ['autoFocus', 'boolean', 'false']],
        preview: vnode(InputOTP, {
            "defaultValue": "482",
            "ariaLabel": "演示验证码"
        }, {}),
    },
    {
        id: 'result', title: 'Result 结果', icon: '✓', group: '反馈组件', description: '在独立页面或任务结束后呈现清晰的状态与下一步操作。',
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
import { Result } from "atelier-ui-vue/result";
export const SaveResult = defineComponent({
    "name": "SaveResult",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Result, {
            "status": "success",
            "title": "\u4FDD\u5B58\u6210\u529F",
            "subTitle": "\u9879\u76EE\u8BBE\u7F6E\u5DF2\u66F4\u65B0\u3002"
        }, {
            "extra": () => vnode(Button, {
                "variant": "primary"
            }, {
                "default": () => [
                    "\u8FD4\u56DE\u9879\u76EE"
                ]
            })
        }));
    }
});
`,
        rows: [['status', "'success' | 'error' | 'info' | 'warning' | '404' | '500'", 'info'], ['title', "VNodeChild / slot", 'required'], ['subTitle', "VNodeChild / slot", '—'], ['extra', "VNodeChild / slot", '—']],
        preview: vnode(Result, {
            "status": "success",
            "title": "保存成功",
            "subTitle": "项目设置已更新。"
        }, {
            "extra": () => vnode(Button, {
                "variant": "primary"
            }, {
                "default": () => [
                    "返回项目"
                ]
            })
        }),
    },
    {
        id: 'message', title: 'Message 全局提示', icon: '·', group: '反馈组件', description: '在页面顶部短暂展示轻量级的操作结果提示。',
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
import { message } from "atelier-ui-vue/message";
export const SaveMessage = defineComponent({
    "name": "SaveMessage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Button, {
            "onClick": () => message.success('\u8BBE\u7F6E\u5DF2\u4FDD\u5B58')
        }, {
            "default": () => [
                "\u4FDD\u5B58\u8BBE\u7F6E"
            ]
        });
    }
});
`,
        rows: [['message.success(content, options?)', '(VNodeChild, MessageOptions?) => { close }', '—'], ['message.open(content, options?)', '(VNodeChild, MessageOptions?) => { close }', 'info'], ['duration', 'number', '4000 ms'], ['message.destroy()', '() => void', '关闭所有消息']],
        preview: vnode(Button, {
            "onClick": () => message.success('设置已保存')
        }, {
            "default": () => [
                "保存设置"
            ]
        }),
    },
    {
        id: 'notification', title: 'Notification 通知提醒', icon: '▣', group: '反馈组件', description: '在屏幕角落呈现带标题和描述的详细通知卡片。',
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
import { notification } from "atelier-ui-vue/notification";
export const ProjectNotice = defineComponent({
    "name": "ProjectNotice",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Button, {
            "onClick": () => notification.success({
                title: '\u6210\u5458\u5DF2\u52A0\u5165',
                description: '\u6797\u77E5\u590F\u5DF2\u52A0\u5165 Aurora workspace\u3002',
            })
        }, {
            "default": () => [
                "\u67E5\u770B\u901A\u77E5"
            ]
        });
    }
});
`,
        rows: [['notification.open(options)', 'NotificationOptions => { close }', '—'], ['title', "VNodeChild / slot", 'required'], ['description', "VNodeChild / slot", '—'], ['type', "'success' | 'info' | 'warning' | 'error'", 'info'], ['placement', "'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'", 'top-right'], ['notification.destroy()', '() => void', '关闭所有通知']],
        preview: vnode(Button, {
            "onClick": () => notification.success({ title: '成员已加入', description: '林知夏已加入 Aurora workspace。' })
        }, {
            "default": () => [
                "查看通知"
            ]
        }),
    },
    {
        id: 'configProvider', title: 'ConfigProvider 全局化配置', icon: '⚙', group: '通用组件', description: '在子树范围统一配置前缀、方向、尺寸、语言和主题变量。',
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

import { ConfigProvider } from "atelier-ui-vue/config-provider";
import { Button } from "atelier-ui-vue/button";
export const BrandedSection = defineComponent({
    "name": "BrandedSection",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(ConfigProvider, {
            "size": "large",
            "locale": "zh-CN",
            "theme": { primaryColor: '#2f9472', borderRadius: '12px' }
        }, {
            "default": () => [
                vnode(Button, {
                    "variant": "primary"
                }, {
                    "default": () => [
                        "\u4FDD\u5B58\u66F4\u6539"
                    ]
                })
            ]
        }));
    }
});
`,
        rows: [['prefixCls', 'string', 'at'], ['direction', "'ltr' | 'rtl'", 'ltr'], ['size', "'small' | 'middle' | 'large'", 'middle'], ['locale', "'zh-CN' | 'en-US'", 'zh-CN'], ['theme.primaryColor', 'string', '—'], ['theme.borderRadius', 'string', '—'], ['useConfig()', 'UIConfig', '读取上下文']],
        preview: vnode(ConfigProvider, {
            "size": "large",
            "locale": "zh-CN",
            "theme": { primaryColor: '#2f9472' }
        }, {
            "default": () => [
                vnode(Button, {
                    "variant": "primary"
                }, {
                    "default": () => [
                        "保存更改"
                    ]
                })
            ]
        }),
    },
];
export function isAdditionalPageId(id: string): id is AdditionalPageId {
    return additionalComponents.some((item: ComponentPageMeta) => item.id === id);
}
