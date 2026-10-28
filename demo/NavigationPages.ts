import { defineComponent, shallowRef as vueRef, computed, Fragment } from 'vue';
import type { VNodeChild } from 'vue';
import { refSetter, vnode, demoEffect } from './demo-runtime';
import { Affix, Anchor, BackTop, Button, Dropdown, FloatButton, FloatButtonGroup, Menu, Popconfirm, Popover, Tag, Tour, type DropdownItem, type MenuItem, type TourStep, } from '../src';
import { ApiTable, ExampleCard, PageHeading } from './shared';
export type NavigationPageId = 'dropdown' | 'menu' | 'anchor' | 'affix' | 'tour' | 'floatButton' | 'popover' | 'popconfirm';
interface Example {
    title: string;
    description?: string;
    code: string;
    preview: VNodeChild;
}
interface NavigationPageMeta {
    id: NavigationPageId;
    title: string;
    icon: string;
    group: string;
    eyebrow: string;
    badge: string;
    description: string;
    examples: Example[];
    rows: string[][];
}
export const BasicDropdown = defineComponent({
    "name": "BasicDropdown",
    "props": [],
    "setup": (props, { slots }) => {
        const last = vueRef('');
        const setLast = refSetter(last);
        return () => vnode("div", {
            "class": "component-row",
            "style": { gap: 18 }
        }, [
            vnode(Dropdown, {
                "items": projectActions,
                "onSelect": (key: string) => setLast(key)
            }, {
                "default": () => [
                    vnode(Button, {}, {
                        "default": () => [
                            "更多操作"
                        ]
                    })
                ]
            }),
            vnode(Dropdown, {
                "items": projectActions.filter((item: DropdownItem) => item.type !== 'group' && item.key !== 'divider-2'),
                "trigger": "hover",
                "placement": "bottom-end",
                "showArrow": true,
                "onSelect": (key: string) => setLast(key)
            }, {
                "default": () => [
                    vnode("span", {
                        "class": "demo-link-trigger"
                    }, [
                        "悬停展开"
                    ])
                ]
            }),
            vnode(Dropdown, {
                "items": [{ key: 'rename', label: '重命名' }, { key: 'move', label: '移动到…' }, { key: 'divider', type: 'divider' }, { key: 'remove', label: '移除', danger: true }],
                "trigger": "contextMenu",
                "onSelect": (key: string) => setLast(key)
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "demo-context-area"
                    }, [
                        "右键点击此区域"
                    ])
                ]
            }),
            vnode("span", {
                "class": "demo-hint"
            }, [
                last.value ? `最近选择：${last.value}` : '选择一项后会显示在这里'
            ])
        ]);
    }
});
export const InlineMenu = defineComponent({
    "name": "InlineMenu",
    "props": [],
    "setup": (props, { slots }) => {
        const selected = vueRef('mine');
        const setSelected = refSetter(selected);
        const collapsed = vueRef(false);
        const setCollapsed = refSetter(collapsed);
        return () => vnode("div", {
            "class": "demo-menu-row"
        }, [
            vnode("div", {
                "class": "demo-menu-frame"
            }, [
                vnode(Menu, {
                    "items": workspaceMenu,
                    "selectedKey": selected.value,
                    "onSelect": setSelected,
                    "defaultOpenKeys": ['projects'],
                    "collapsed": collapsed.value,
                    "label": "工作区导航"
                }, {})
            ]),
            vnode("div", {
                "class": "demo-menu-side"
            }, [
                vnode(Button, {
                    "size": "sm",
                    "onClick": () => setCollapsed((value: boolean) => !value)
                }, {
                    "default": () => [
                        collapsed.value ? '展开菜单' : '收起菜单'
                    ]
                }),
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "当前选中：",
                    selected.value
                ])
            ])
        ]);
    }
});
export const HorizontalMenu = defineComponent({
    "name": "HorizontalMenu",
    "props": [],
    "setup": (props, { slots }) => {
        const selected = vueRef('home');
        const setSelected = refSetter(selected);
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 18 }
        }, [
            vnode("div", {
                "class": "demo-menu-bar"
            }, [
                vnode(Menu, {
                    "mode": "horizontal",
                    "items": workspaceMenu.filter((item: MenuItem) => item.type !== 'divider'),
                    "selectedKey": selected.value,
                    "onSelect": setSelected,
                    "label": "顶部导航"
                }, {})
            ]),
            vnode("div", {
                "class": "demo-menu-row"
            }, [
                vnode("div", {
                    "class": "demo-menu-frame"
                }, [
                    vnode(Menu, {
                        "mode": "vertical",
                        "items": workspaceMenu,
                        "defaultSelectedKey": "home",
                        "label": "侧边导航（弹出子菜单）"
                    }, {})
                ]),
                vnode(Menu, {
                    "theme": "dark",
                    "items": workspaceMenu,
                    "defaultSelectedKey": "design",
                    "defaultOpenKeys": ['members'],
                    "label": "深色菜单"
                }, {})
            ])
        ]);
    }
});
export const ScrollSpyAnchor = defineComponent({
    "name": "ScrollSpyAnchor",
    "props": [
        "direction"
    ],
    "setup": (props, { slots }) => {
        const { direction = 'vertical' } = props;
        const containerRef = vueRef<(HTMLDivElement | null) | null>(null);
        const prefix = direction === 'vertical' ? 'anchor' : 'hanchor';
        const sections = [{ id: `${prefix}-overview`, title: '项目概览', children: direction === 'vertical' ? [{ id: `${prefix}-goals`, title: '目标' }, { id: `${prefix}-scope`, title: '范围' }] : undefined }, { id: `${prefix}-members`, title: '项目成员' }, { id: `${prefix}-activity`, title: '最近动态' }, { id: `${prefix}-files`, title: '文件' }];
        const items = sections.map((section: { id: string; title: string; children: { id: string; title: string; }[] | undefined; } | { id: string; title: string; children?: undefined; }) => ({ href: `#${section.id}`, title: section.title, children: section.children?.map((child: { id: string; title: string; }) => ({ href: `#${child.id}`, title: child.title })) }));
        const anchor = vnode(Anchor, {
            "items": items,
            "direction": direction,
            "getContainer": () => containerRef.value ?? window,
            "offsetTop": 12,
            "replace": true,
            "affix": false
        }, {});
        return () => vnode("div", {
            "class": direction === 'vertical' ? 'demo-anchor-layout' : 'demo-anchor-layout demo-anchor-layout--horizontal'
        }, [
            direction === 'horizontal' && anchor,
            vnode("div", {
                "ref": containerRef,
                "class": "demo-anchor-scroll"
            }, [
                sections.flatMap((section: { id: string; title: string; children: { id: string; title: string; }[] | undefined; } | { id: string; title: string; children?: undefined; }) => [section, ...(section.children ?? [])]).map((section: { id: string; title: string; }) => vnode("section", {
                    "key": section.id,
                    "id": section.id,
                    "class": "demo-anchor-section"
                }, [
                    vnode("h4", {}, [
                        section.title
                    ]),
                    vnode("p", {}, [
                        "滚动内容时，锚点会自动高亮对应区块；点击锚点可平滑定位。"
                    ])
                ]))
            ]),
            direction === 'vertical' && anchor
        ]);
    }
});
export const ScrollAffix = defineComponent({
    "name": "ScrollAffix",
    "props": [],
    "setup": (props, { slots }) => {
        const containerRef = vueRef<(HTMLDivElement | null) | null>(null);
        const pinned = vueRef(false);
        const setPinned = refSetter(pinned);
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 10 }
        }, [
            vnode("div", {
                "ref": containerRef,
                "class": "demo-affix-scroll"
            }, [
                vnode("p", {
                    "class": "demo-affix-filler"
                }, [
                    "向下滚动这个容器，操作栏会固定在容器顶部。"
                ]),
                vnode(Affix, {
                    "target": () => containerRef.value,
                    "offsetTop": 0,
                    "onChange": setPinned
                }, {
                    "default": () => [
                        vnode("div", {
                            "class": `demo-affix-bar ${pinned.value ? 'demo-affix-bar--pinned' : ''}`
                        }, [
                            vnode("strong", {}, [
                                "项目设置"
                            ]),
                            vnode(Button, {
                                "size": "sm",
                                "variant": "primary"
                            }, {
                                "default": () => [
                                    "保存更改"
                                ]
                            })
                        ])
                    ]
                }),
                Array.from({ length: 8 }, (_: unknown, index: number) => vnode("p", {
                    "key": index,
                    "class": "demo-affix-filler"
                }, [
                    "内容段落 ",
                    index + 1,
                    " · 固钉在滚动时保持可见。"
                ]))
            ]),
            vnode("span", {
                "class": "demo-hint"
            }, [
                "当前状态：",
                pinned.value ? '已固定' : '未固定'
            ])
        ]);
    }
});
export const OnboardingTour = defineComponent({
    "name": "OnboardingTour",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        const type = vueRef<'default' | 'primary'>('default');
        const setType = refSetter(type);
        const createRef = vueRef<(HTMLButtonElement | null) | null>(null);
        const searchRef = vueRef<(HTMLDivElement | null) | null>(null);
        const membersRef = vueRef<(HTMLDivElement | null) | null>(null);
        const steps: TourStep[] = [
            { title: '欢迎使用 Atelier', description: '花 30 秒了解工作区的三个核心区域。' },
            { title: '新建项目', description: '从这里创建项目，所有协作都从一个清晰的项目开始。', target: () => createRef.value, placement: 'bottom-start' },
            { title: '全局搜索', description: '输入名称、成员或标签即可快速定位，也可以用 ⌘K 打开。', target: searchRef, placement: 'bottom' },
            { title: '成员与权限', description: '邀请成员并分配角色，权限变更会实时生效。', target: membersRef, placement: 'top' },
        ];
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 16 }
        }, [
            vnode("div", {
                "class": "demo-tour-toolbar"
            }, [
                vnode(Button, {
                    "ref": createRef,
                    "variant": "primary"
                }, {
                    "default": () => [
                        "＋ 新建项目"
                    ]
                }),
                vnode("div", {
                    "ref": searchRef,
                    "class": "demo-tour-search"
                }, [
                    "⌕ 搜索项目、成员…"
                ]),
                vnode("div", {
                    "ref": membersRef,
                    "class": "demo-tour-members"
                }, [
                    vnode("span", {}, [
                        "林"
                    ]),
                    vnode("span", {}, [
                        "陈"
                    ]),
                    vnode("span", {}, [
                        "周"
                    ]),
                    vnode("em", {}, [
                        "+3"
                    ])
                ])
            ]),
            vnode("div", {
                "class": "component-row"
            }, [
                vnode(Button, {
                    "onClick": () => { setType('default'); setOpen(true); }
                }, {
                    "default": () => [
                        "开始引导"
                    ]
                }),
                vnode(Button, {
                    "onClick": () => { setType('primary'); setOpen(true); }
                }, {
                    "default": () => [
                        "主色风格"
                    ]
                })
            ]),
            vnode(Tour, {
                "open": open.value,
                "steps": steps,
                "type": type.value,
                "onClose": () => setOpen(false),
                "onFinish": () => console.info('tour finished')
            }, {})
        ]);
    }
});
export const FloatButtons = defineComponent({
    "name": "FloatButtons",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        return () => vnode("div", {
            "class": "demo-float-stage"
        }, [
            vnode("div", {
                "class": "demo-float-cell"
            }, [
                vnode(FloatButton, {
                    "inline": true,
                    "tooltip": "帮助"
                }, {
                    "icon": () => vnode(HelpIcon, {}, {})
                }),
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "默认"
                ])
            ]),
            vnode("div", {
                "class": "demo-float-cell"
            }, [
                vnode(FloatButton, {
                    "inline": true,
                    "type": "primary",
                    "shape": "square",
                    "description": "反馈",
                    "badge": { count: 5 }
                }, {
                    "icon": () => vnode(ChatIcon, {}, {})
                }),
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "主色 · 方形 · 徽标"
                ])
            ]),
            vnode("div", {
                "class": "demo-float-cell"
            }, [
                vnode(FloatButtonGroup, {
                    "inline": true,
                    "shape": "square"
                }, {
                    "default": () => [
                        vnode(FloatButton, {
                            "tooltip": "帮助"
                        }, {
                            "icon": () => vnode(HelpIcon, {}, {})
                        }),
                        vnode(FloatButton, {
                            "tooltip": "反馈",
                            "badge": { dot: true }
                        }, {
                            "icon": () => vnode(ChatIcon, {}, {})
                        }),
                        vnode(FloatButton, {
                            "tooltip": "设置"
                        }, {
                            "icon": () => vnode(SettingsIcon, {}, {})
                        })
                    ]
                }),
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "静态分组"
                ])
            ]),
            vnode("div", {
                "class": "demo-float-cell demo-float-cell--tall"
            }, [
                vnode(FloatButtonGroup, {
                    "inline": true,
                    "trigger": "click",
                    "type": "primary",
                    "open": open.value,
                    "onUpdate:open": setOpen,
                    "tooltip": "快捷操作"
                }, {
                    "default": () => [
                        vnode(FloatButton, {
                            "tooltip": "新建文档"
                        }, {
                            "icon": () => vnode(EditIcon, {}, {})
                        }),
                        vnode(FloatButton, {
                            "tooltip": "邀请成员"
                        }, {
                            "icon": () => vnode(UsersIcon, {}, {})
                        }),
                        vnode(FloatButton, {
                            "tooltip": "发起讨论"
                        }, {
                            "icon": () => vnode(ChatIcon, {}, {})
                        })
                    ]
                }),
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "点击展开菜单"
                ])
            ]),
            vnode(BackTop, {
                "visibilityHeight": 200,
                "tooltip": "回到顶部"
            }, {})
        ]);
    }
});
export const PopoverExamples = defineComponent({
    "name": "PopoverExamples",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        return () => vnode("div", {
            "class": "component-row",
            "style": { gap: 18 }
        }, [
            vnode(Popover, {
                "title": "分享项目",
                "content": "复制链接并邀请团队成员加入。"
            }, {
                "default": () => [
                    vnode(Button, {}, {
                        "default": () => [
                            "点击触发"
                        ]
                    })
                ]
            }),
            vnode(Popover, {
                "trigger": "hover",
                "placement": "top",
                "content": "悬停时显示，离开后延迟关闭。"
            }, {
                "default": () => [
                    vnode(Button, {
                        "variant": "tertiary"
                    }, {
                        "default": () => [
                            "悬停触发"
                        ]
                    })
                ]
            }),
            vnode(Popover, {
                "trigger": "focus",
                "placement": "right",
                "arrow": false,
                "content": "聚焦输入框时显示提示。"
            }, {
                "default": () => [
                    vnode("input", {
                        "class": "demo-plain-input",
                        "placeholder": "聚焦触发",
                        "aria-label": "聚焦触发示例"
                    }, [])
                ]
            }),
            vnode(Popover, {
                "open": open.value,
                "onUpdate:open": setOpen,
                "placement": "bottom-end",
                "title": "受控弹层"
            }, {
                "content": () => vnode("div", {
                    "class": "demo-popover-body"
                }, [
                    vnode("p", {}, [
                        "可以在内容中放置任意交互元素。"
                    ]),
                    vnode("div", {
                        "class": "component-row"
                    }, [
                        vnode(Button, {
                            "size": "sm",
                            "onClick": () => setOpen(false)
                        }, {
                            "default": () => [
                                "关闭"
                            ]
                        }),
                        vnode(Button, {
                            "size": "sm",
                            "variant": "primary",
                            "onClick": () => setOpen(false)
                        }, {
                            "default": () => [
                                "知道了"
                            ]
                        })
                    ])
                ]),
                "default": () => [
                    vnode(Button, {
                        "variant": "primary"
                    }, {
                        "default": () => [
                            "受控 · 富内容"
                        ]
                    })
                ]
            })
        ]);
    }
});
export const PopconfirmExamples = defineComponent({
    "name": "PopconfirmExamples",
    "props": [],
    "setup": (props, { slots }) => {
        const log = vueRef('');
        const setLog = refSetter(log);
        return () => vnode("div", {
            "class": "component-row",
            "style": { gap: 18 }
        }, [
            vnode(Popconfirm, {
                "title": "归档这个项目？",
                "description": "你之后仍可以从归档列表恢复。",
                "onConfirm": () => setLog('已归档'),
                "onCancel": () => setLog('已取消')
            }, {
                "default": () => [
                    vnode(Button, {}, {
                        "default": () => [
                            "归档项目"
                        ]
                    })
                ]
            }),
            vnode(Popconfirm, {
                "title": "删除项目",
                "description": "删除后不可恢复，确定继续吗？",
                "okText": "删除",
                "okType": "danger",
                "placement": "bottom",
                "onConfirm": () => new Promise<void>((resolve: (value: void | PromiseLike<void>) => void) => setTimeout(() => { setLog('已删除（异步 800ms）'); resolve(); }, 800))
            }, {
                "default": () => [
                    vnode(Button, {
                        "variant": "danger"
                    }, {
                        "default": () => [
                            "删除项目"
                        ]
                    })
                ]
            }),
            vnode(Popconfirm, {
                "title": "发布到生产环境",
                "description": "本示例会模拟一次失败的请求。",
                "okText": "发布",
                "placement": "right",
                "onConfirm": () => new Promise<void>((_: (value: void | PromiseLike<void>) => void, reject: (reason?: unknown) => void) => setTimeout(() => reject(new Error('network')), 600))
            }, {
                "default": () => [
                    vnode(Button, {
                        "variant": "tertiary"
                    }, {
                        "default": () => [
                            "模拟失败"
                        ]
                    })
                ]
            }),
            vnode(Tag, {}, {
                "default": () => [
                    log.value || '等待操作'
                ]
            })
        ]);
    }
});
export const NavigationPage = defineComponent({
    "name": "NavigationPage",
    "props": [
        "id"
    ],
    "setup": (props, { slots }) => {
        const { id } = props;
        const page = navigationPages.find((item: NavigationPageMeta) => item.id === id);
        if (!page)
            return () => null;
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": page.eyebrow,
                "title": page.title,
                "description": page.description,
                "badge": page.badge
            }, {}),
            page.examples.map((example: Example) => vnode(ExampleCard, {
                "key": example.title,
                "title": example.title,
                "description": example.description,
                "code": example.code
            }, {
                "default": () => [
                    example.preview
                ]
            })),
            vnode(ApiTable, {
                "rows": page.rows
            }, {})
        ]);
    }
});
const EditIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "M12 20h9"
    }, []),
    vnode("path", {
        "d": "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"
    }, [])
]);
const CopyIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("rect", {
        "x": "9",
        "y": "9",
        "width": "13",
        "height": "13",
        "rx": "2"
    }, []),
    vnode("path", {
        "d": "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
    }, [])
]);
const TrashIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"
    }, [])
]);
const HomeIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "m3 11 9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1Z"
    }, [])
]);
const FolderIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
    }, [])
]);
const UsersIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("circle", {
        "cx": "9",
        "cy": "8",
        "r": "3.5"
    }, []),
    vnode("path", {
        "d": "M2.5 20a6.5 6.5 0 0 1 13 0"
    }, []),
    vnode("path", {
        "d": "M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4.5-6.2"
    }, [])
]);
const SettingsIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("circle", {
        "cx": "12",
        "cy": "12",
        "r": "3"
    }, []),
    vnode("path", {
        "d": "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"
    }, [])
]);
const ChatIcon = () => vnode("svg", {
    "width": "20",
    "height": "20",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z"
    }, [])
]);
const HelpIcon = () => vnode("svg", {
    "width": "20",
    "height": "20",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("circle", {
        "cx": "12",
        "cy": "12",
        "r": "9"
    }, []),
    vnode("path", {
        "d": "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01"
    }, [])
]);
const projectActions: DropdownItem[] = [
    { key: 'edit', label: '编辑项目', icon: vnode(EditIcon, {}, {}), extra: '⌘E' },
    { key: 'duplicate', label: '复制项目', icon: vnode(CopyIcon, {}, {}), extra: '⌘D' },
    { key: 'divider-1', type: 'divider' },
    { key: 'share', type: 'group', label: '分享', children: [{ key: 'link', label: '复制链接' }, { key: 'invite', label: '邀请成员' }] },
    { key: 'divider-2', type: 'divider' },
    { key: 'archive', label: '归档项目', disabled: true },
    { key: 'delete', label: '删除项目', icon: vnode(TrashIcon, {}, {}), danger: true },
];
const workspaceMenu: MenuItem[] = [
    { key: 'home', label: '工作台', icon: vnode(HomeIcon, {}, {}) },
    { key: 'projects', label: '项目', icon: vnode(FolderIcon, {}, {}), children: [
            { key: 'all', label: '全部项目' },
            { key: 'mine', label: '我负责的' },
            { key: 'archived', label: '已归档', disabled: true },
        ] },
    { key: 'members', label: '成员', icon: vnode(UsersIcon, {}, {}), children: [
            { key: 'group-teams', type: 'group', label: '团队', children: [{ key: 'design', label: '设计部' }, { key: 'engineering', label: '工程部' }] },
            { key: 'invite', label: '邀请成员' },
        ] },
    { key: 'divider', type: 'divider' },
    { key: 'settings', label: '设置', icon: vnode(SettingsIcon, {}, {}) },
];
export const navigationPages: NavigationPageMeta[] = [
    {
        id: 'dropdown', title: 'Dropdown 下拉菜单', icon: '⌄', group: '导航组件', eyebrow: 'NAVIGATION', badge: 'Dropdown', description: '在触发器旁展示一组操作，支持图标、快捷键提示、分组、分割线、危险项与键盘导航。',
        examples: [{ title: '触发方式与菜单结构', description: '点击、悬停与右键三种触发；菜单项支持 icon / extra / group / divider / danger / disabled。', preview: vnode(BasicDropdown, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Dropdown, type DropdownItem } from "atelier-ui-vue/dropdown";
export const ProjectActions = defineComponent({
    "name": "ProjectActions",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Fragment, null, [
            vnode(Dropdown, {
                "items": items,
                "onSelect": (key: string) => console.log(key)
            }, {
                "default": () => [
                    vnode(Button, {}, {
                        "default": () => [
                            "\u66F4\u591A\u64CD\u4F5C"
                        ]
                    })
                ]
            }),
            vnode(Dropdown, {
                "items": items,
                "trigger": "hover",
                "placement": "bottom-end",
                "showArrow": true
            }, {
                "default": () => [
                    vnode("span", {}, [
                        "\u60AC\u505C\u5C55\u5F00"
                    ])
                ]
            }),
            vnode(Dropdown, {
                "items": items,
                "trigger": "contextMenu"
            }, {
                "default": () => [
                    vnode("div", {
                        "style": { padding: 24, border: '1px dashed #ccc' }
                    }, [
                        "\u53F3\u952E\u70B9\u51FB\u6B64\u533A\u57DF"
                    ])
                ]
            })
        ]));
    }
});
const items: DropdownItem[] = [
    { key: 'edit', label: '\u7F16\u8F91\u9879\u76EE', extra: '\u2318E' },
    { key: 'duplicate', label: '\u590D\u5236\u9879\u76EE', extra: '\u2318D' },
    { key: 'divider', type: 'divider' },
    { key: 'share', type: 'group', label: '\u5206\u4EAB', children: [{ key: 'link', label: '\u590D\u5236\u94FE\u63A5' }, { key: 'invite', label: '\u9080\u8BF7\u6210\u5458' }] },
    { key: 'delete', label: '\u5220\u9664\u9879\u76EE', danger: true },
];
` }],
        rows: [['items', 'DropdownItem[]', 'required'], ['onSelect', '(key, item) => void', '—'], ['trigger', "'click' | 'hover' | 'contextMenu' | 数组", "'click'"], ['placement', 'PopupPlacement', "'bottom-start'"], ['open / defaultOpen / onOpenChange', 'boolean / boolean / (open) => void', '—'], ['showArrow', 'boolean', 'false'], ['matchTriggerWidth', 'boolean', 'false'], ['disabled', 'boolean', 'false'], ['overlayClassName / overlayStyle', 'string / CSSProperties', '—'], ['menuClassName', 'string', '—'], ['DropdownItem', '{ key, label, icon?, extra?, disabled?, danger?, type?, children?, onClick? }', '—']],
    },
    {
        id: 'menu', title: 'Menu 导航菜单', icon: '☰', group: '导航组件', eyebrow: 'NAVIGATION', badge: 'Menu', description: '支持内嵌展开、水平与垂直弹出三种模式，可折叠为图标栏，提供深色主题与完整键盘导航。',
        examples: [
            { title: '内嵌模式与折叠', description: '子菜单以动画展开；折叠后仅显示图标，子菜单改为悬浮弹出。', preview: vnode(InlineMenu, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Menu, type MenuItem } from "atelier-ui-vue/menu";
export const WorkspaceMenu = defineComponent({
    "name": "WorkspaceMenu",
    "props": [],
    "setup": (props, { slots }) => {
        const selected = vueRef('mine');
        const setSelected = refSetter(selected);
        const collapsed = vueRef(false);
        const setCollapsed = refSetter(collapsed);
        return () => (vnode(Fragment, null, [
            vnode(Menu, {
                "items": items,
                "selectedKey": selected.value,
                "onSelect": setSelected,
                "defaultOpenKeys": ['projects'],
                "collapsed": collapsed.value
            }, {}),
            vnode("button", {
                "type": "button",
                "onClick": () => setCollapsed((value: boolean) => !value)
            }, [
                "\u5207\u6362\u6298\u53E0"
            ])
        ]));
    }
});
const SettingsIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("circle", {
        "cx": "12",
        "cy": "12",
        "r": "3"
    }, []),
    vnode("path", {
        "d": "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"
    }, [])
]);
const FolderIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
    }, [])
]);
const HomeIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "m3 11 9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1Z"
    }, [])
]);
const items: MenuItem[] = [
    { key: 'home', label: '\u5DE5\u4F5C\u53F0', icon: vnode(HomeIcon, {}, {}) },
    { key: 'projects', label: '\u9879\u76EE', icon: vnode(FolderIcon, {}, {}), children: [
            { key: 'all', label: '\u5168\u90E8\u9879\u76EE' },
            { key: 'mine', label: '\u6211\u8D1F\u8D23\u7684' },
        ] },
    { key: 'divider', type: 'divider' },
    { key: 'settings', label: '\u8BBE\u7F6E', icon: vnode(SettingsIcon, {}, {}) },
];
` },
            { title: '水平、垂直弹出与深色主题', description: 'horizontal 适合顶栏；vertical 的子菜单向右弹出；theme="dark" 适配深色侧栏。', preview: vnode(HorizontalMenu, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Menu } from "atelier-ui-vue/menu";
export const Navigations = defineComponent({
    "name": "Navigations",
    "props": [
        "items"
    ],
    "setup": (props, { slots }) => {
        const { items } = props;
        return () => (vnode(Fragment, null, [
            vnode(Menu, {
                "mode": "horizontal",
                "items": items,
                "defaultSelectedKey": "home"
            }, {}),
            vnode(Menu, {
                "mode": "vertical",
                "items": items,
                "defaultSelectedKey": "home"
            }, {}),
            vnode(Menu, {
                "theme": "dark",
                "items": items,
                "defaultSelectedKey": "design",
                "defaultOpenKeys": ['members']
            }, {})
        ]));
    }
});
` },
        ],
        rows: [['items', 'MenuItem[]', 'required'], ['mode', "'inline' | 'vertical' | 'horizontal'", "'inline'"], ['selectedKey / defaultSelectedKey', 'string', '—'], ['onSelect', '(key, item) => void', '—'], ['openKeys / defaultOpenKeys', 'string[]', '— / []'], ['onOpenChange', '(openKeys) => void', '—'], ['collapsed', 'boolean', 'false'], ['theme', "'light' | 'dark'", "'light'"], ['inlineIndent', 'number', '20'], ['selectable', 'boolean', 'true'], ['label', 'string', "'菜单'"], ['MenuItem', '{ key, label, icon?, disabled?, danger?, type?, children?, href?, onClick? }', '—']],
    },
    {
        id: 'anchor', title: 'Anchor 锚点', icon: '⚓', group: '导航组件', eyebrow: 'NAVIGATION', badge: 'Anchor', description: '页内导航：滚动时自动高亮当前区块，点击平滑定位，支持嵌套层级与水平布局。',
        examples: [
            { title: '滚动监听', description: '通过 getContainer 指定滚动容器；滚动时墨条跟随高亮项移动。', preview: vnode(ScrollSpyAnchor, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Anchor } from "atelier-ui-vue/anchor";
export const PageNavigation = defineComponent({
    "name": "PageNavigation",
    "props": [],
    "setup": (props, { slots }) => {
        const containerRef = vueRef<(HTMLDivElement | null) | null>(null);
        return () => (vnode("div", {
            "style": { display: 'flex', gap: 24 }
        }, [
            vnode("div", {
                "ref": containerRef,
                "style": { height: 320, overflow: 'auto' }
            }, [
                vnode("section", {
                    "id": "overview"
                }, [
                    "\u9879\u76EE\u6982\u89C8"
                ]),
                vnode("section", {
                    "id": "members"
                }, [
                    "\u9879\u76EE\u6210\u5458"
                ]),
                vnode("section", {
                    "id": "activity"
                }, [
                    "\u6700\u8FD1\u52A8\u6001"
                ])
            ]),
            vnode(Anchor, {
                "getContainer": () => containerRef.value ?? window,
                "offsetTop": 12,
                "items": [
                    { href: '#overview', title: '\u9879\u76EE\u6982\u89C8', children: [{ href: '#goals', title: '\u76EE\u6807' }] },
                    { href: '#members', title: '\u9879\u76EE\u6210\u5458' },
                    { href: '#activity', title: '\u6700\u8FD1\u52A8\u6001' },
                ],
                "onChange": (href: string) => console.log(href)
            }, {})
        ]));
    }
});
` },
            { title: '水平方向', description: 'direction="horizontal" 适合放在内容区顶部作为小节导航。', preview: vnode(ScrollSpyAnchor, {
                    "direction": "horizontal"
                }, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Anchor } from "atelier-ui-vue/anchor";
export const SectionTabs = defineComponent({
    "name": "SectionTabs",
    "props": [],
    "setup": (props, { slots }) => {
        const containerRef = vueRef<(HTMLDivElement | null) | null>(null);
        return () => (vnode(Fragment, null, [
            vnode(Anchor, {
                "direction": "horizontal",
                "affix": false,
                "getContainer": () => containerRef.value ?? window,
                "items": [{ href: '#overview', title: '\u6982\u89C8' }, { href: '#members', title: '\u6210\u5458' }, { href: '#files', title: '\u6587\u4EF6' }]
            }, {}),
            vnode("div", {
                "ref": containerRef,
                "style": { height: 300, overflow: 'auto' }
            }, [
                vnode("section", {
                    "id": "overview"
                }, [
                    "\u6982\u89C8"
                ]),
                vnode("section", {
                    "id": "members"
                }, [
                    "\u6210\u5458"
                ]),
                vnode("section", {
                    "id": "files"
                }, [
                    "\u6587\u4EF6"
                ])
            ])
        ]));
    }
});
` },
        ],
        rows: [['items', 'AnchorItem[]', 'required'], ['offsetTop', 'number', '0'], ['bounds', 'number', '5'], ['targetOffset', 'number', 'offsetTop'], ['direction', "'vertical' | 'horizontal'", "'vertical'"], ['affix', 'boolean', 'true'], ['getContainer', '() => HTMLElement | Window', 'window'], ['replace', 'boolean', 'false'], ['onChange', '(activeHref) => void', '—'], ['onClick', '(event, item) => void', '—'], ['AnchorItem', '{ key?, href, title, children? }', '—']],
    },
    {
        id: 'affix', title: 'Affix 固钉', icon: '⌖', group: '布局组件', eyebrow: 'LAYOUT', badge: 'Affix', description: '当元素滚动到指定位置时将其固定，并以占位元素保持原有布局，支持自定义滚动容器。',
        examples: [{ title: '在滚动容器中固定', description: 'target 指定滚动容器，onChange 返回固定状态。', preview: vnode(ScrollAffix, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Affix } from "atelier-ui-vue/affix";
import { Button } from "atelier-ui-vue/button";
export const StickyToolbar = defineComponent({
    "name": "StickyToolbar",
    "props": [],
    "setup": (props, { slots }) => {
        const containerRef = vueRef<(HTMLDivElement | null) | null>(null);
        const pinned = vueRef(false);
        const setPinned = refSetter(pinned);
        return () => (vnode("div", {
            "ref": containerRef,
            "style": { height: 260, overflow: 'auto' }
        }, [
            vnode("p", {}, [
                "\u5411\u4E0B\u6EDA\u52A8\u2026"
            ]),
            vnode(Affix, {
                "target": () => containerRef.value,
                "offsetTop": 0,
                "onChange": setPinned
            }, {
                "default": () => [
                    vnode("div", {
                        "class": pinned.value ? 'toolbar toolbar--pinned' : 'toolbar'
                    }, [
                        vnode("strong", {}, [
                            "\u9879\u76EE\u8BBE\u7F6E"
                        ]),
                        vnode(Button, {
                            "size": "sm",
                            "variant": "primary"
                        }, {
                            "default": () => [
                                "\u4FDD\u5B58\u66F4\u6539"
                            ]
                        })
                    ])
                ]
            })
        ]));
    }
});
` }],
        rows: [['offsetTop', 'number', '0'], ['offsetBottom', 'number', '—'], ['target', '() => HTMLElement | Window', 'window'], ['onChange', '(affixed: boolean) => void', '—'], ["#default", "VNodeChild / slot", 'required']],
    },
    {
        id: 'tour', title: 'Tour 漫游式引导', icon: '✧', group: '反馈组件', eyebrow: 'FEEDBACK', badge: 'Tour', description: '聚光遮罩高亮目标元素，卡片自动定位并带箭头，支持步骤指示、键盘切换与主色风格。',
        examples: [{ title: '分步引导', description: '第一步无目标时居中展示；后续步骤跟随目标元素并平滑过渡。', preview: vnode(OnboardingTour, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Tour, type TourStep } from "atelier-ui-vue/tour";
export const Onboarding = defineComponent({
    "name": "Onboarding",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        const createRef = vueRef<(HTMLButtonElement | null) | null>(null);
        const searchRef = vueRef<(HTMLDivElement | null) | null>(null);
        const steps: TourStep[] = [
            { title: '\u6B22\u8FCE\u4F7F\u7528 Atelier', description: '\u82B1 30 \u79D2\u4E86\u89E3\u5DE5\u4F5C\u533A\u3002' },
            { title: '\u65B0\u5EFA\u9879\u76EE', description: '\u4ECE\u8FD9\u91CC\u521B\u5EFA\u9879\u76EE\u3002', target: () => createRef.value, placement: 'bottom-start' },
            { title: '\u5168\u5C40\u641C\u7D22', description: '\u4E5F\u53EF\u4EE5\u7528 \u2318K \u6253\u5F00\u3002', target: searchRef, placement: 'bottom' },
        ];
        return () => (vnode(Fragment, null, [
            vnode(Button, {
                "ref": createRef,
                "variant": "primary"
            }, {
                "default": () => [
                    "\uFF0B \u65B0\u5EFA\u9879\u76EE"
                ]
            }),
            vnode("div", {
                "ref": searchRef
            }, [
                "\u2315 \u641C\u7D22\u9879\u76EE\u3001\u6210\u5458\u2026"
            ]),
            vnode(Button, {
                "onClick": () => setOpen(true)
            }, {
                "default": () => [
                    "\u5F00\u59CB\u5F15\u5BFC"
                ]
            }),
            vnode(Tour, {
                "open": open.value,
                "steps": steps,
                "onClose": () => setOpen(false),
                "onFinish": () => console.log('done')
            }, {})
        ]));
    }
});
` }],
        rows: [['steps', 'TourStep[]', 'required'], ['open', 'boolean', 'false'], ['onClose', '(current) => void', '—'], ['onFinish', '() => void', '—'], ['current / defaultCurrent', 'number', '— / 0'], ['onChange', '(current) => void', '—'], ['mask', 'boolean', 'true'], ['type', "'default' | 'primary'", "'default'"], ['arrow', 'boolean', 'true'], ['gap / radius', 'number', '6 / 10'], ['closable', 'boolean', 'true'], ['indicatorsRender', '(current, total) => VNodeChild', '圆点'], ['zIndex', 'number', '1200'], ['scrollIntoViewOptions', 'boolean | ScrollIntoViewOptions', "{ block: 'center', behavior: 'smooth' }"], ['TourStep', '{ title, description?, cover?, target?, placement?, mask?, nextButtonProps?, prevButtonProps? }', '—']],
    },
    {
        id: 'floatButton', title: 'FloatButton 悬浮按钮', icon: '↗', group: '基础组件', eyebrow: 'GENERAL', badge: 'FloatButton', description: '固定在视口角落的快捷操作，支持主色与方形样式、徽标、分组展开菜单以及回到顶部。',
        examples: [{ title: '形态、分组与回到顶部', description: '示例以 inline 方式内嵌展示；页面滚动超过 200px 后右下角会出现 BackTop。', preview: vnode(FloatButtons, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { BackTop, FloatButton, FloatButtonGroup } from "atelier-ui-vue/float-button";
export const QuickActions = defineComponent({
    "name": "QuickActions",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Fragment, null, [
            vnode(FloatButton, {
                "tooltip": "\u5E2E\u52A9"
            }, {
                "icon": () => vnode(HelpIcon, {}, {})
            }),
            vnode(FloatButton, {
                "type": "primary",
                "shape": "square",
                "description": "\u53CD\u9988",
                "badge": { count: 5 }
            }, {
                "icon": () => vnode(ChatIcon, {}, {})
            }),
            vnode(FloatButtonGroup, {
                "shape": "square"
            }, {
                "default": () => [
                    vnode(FloatButton, {
                        "tooltip": "\u5E2E\u52A9"
                    }, {
                        "icon": () => vnode(HelpIcon, {}, {})
                    }),
                    vnode(FloatButton, {
                        "tooltip": "\u53CD\u9988",
                        "badge": { dot: true }
                    }, {
                        "icon": () => vnode(ChatIcon, {}, {})
                    })
                ]
            }),
            vnode(FloatButtonGroup, {
                "trigger": "click",
                "type": "primary",
                "tooltip": "\u5FEB\u6377\u64CD\u4F5C"
            }, {
                "default": () => [
                    vnode(FloatButton, {
                        "tooltip": "\u65B0\u5EFA\u6587\u6863"
                    }, {
                        "icon": () => vnode(EditIcon, {}, {})
                    }),
                    vnode(FloatButton, {
                        "tooltip": "\u9080\u8BF7\u6210\u5458"
                    }, {
                        "icon": () => vnode(UsersIcon, {}, {})
                    })
                ]
            }),
            vnode(BackTop, {
                "visibilityHeight": 200
            }, {})
        ]));
    }
});
const UsersIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("circle", {
        "cx": "9",
        "cy": "8",
        "r": "3.5"
    }, []),
    vnode("path", {
        "d": "M2.5 20a6.5 6.5 0 0 1 13 0"
    }, []),
    vnode("path", {
        "d": "M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4.5-6.2"
    }, [])
]);
const EditIcon = () => vnode("svg", {
    "width": "16",
    "height": "16",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "M12 20h9"
    }, []),
    vnode("path", {
        "d": "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"
    }, [])
]);
const ChatIcon = () => vnode("svg", {
    "width": "20",
    "height": "20",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("path", {
        "d": "M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z"
    }, [])
]);
const HelpIcon = () => vnode("svg", {
    "width": "20",
    "height": "20",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true"
}, [
    vnode("circle", {
        "cx": "12",
        "cy": "12",
        "r": "9"
    }, []),
    vnode("path", {
        "d": "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01"
    }, [])
]);
` }],
        rows: [['icon', "VNodeChild / slot", '↑'], ['description', "VNodeChild / slot", '—'], ['shape', "'circle' | 'square'", "'circle'"], ['type', "'default' | 'primary'", "'default'"], ['tooltip', 'string', '—'], ['href / target', 'string', '—'], ['badge', '{ count?, dot?, overflowCount? }', '—'], ['inline', 'boolean', 'false'], ['FloatButtonGroup.trigger', "'click' | 'hover'", '—'], ['FloatButtonGroup.open / onOpenChange', 'boolean / (open) => void', '—'], ['FloatButtonGroup.placement', "'top' | 'bottom' | 'left' | 'right'", "'top'"], ['BackTop.visibilityHeight', 'number', '400'], ['BackTop.target', '() => HTMLElement | Window', 'window'], ['BackTop.duration', 'number', '450']],
    },
    {
        id: 'popover', title: 'Popover 气泡卡片', icon: '▱', group: '反馈组件', eyebrow: 'FEEDBACK', badge: 'Popover', description: '在触发元素附近展示带标题的浮层，支持点击 / 悬停 / 聚焦触发、八种位置、箭头与受控模式。',
        examples: [{ title: '触发方式与位置', preview: vnode(PopoverExamples, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Popover } from "atelier-ui-vue/popover";
export const ShareDetails = defineComponent({
    "name": "ShareDetails",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        return () => (vnode(Fragment, null, [
            vnode(Popover, {
                "title": "\u5206\u4EAB\u9879\u76EE",
                "content": "\u590D\u5236\u94FE\u63A5\u5E76\u9080\u8BF7\u56E2\u961F\u6210\u5458\u52A0\u5165\u3002"
            }, {
                "default": () => [
                    vnode(Button, {}, {
                        "default": () => [
                            "\u70B9\u51FB\u89E6\u53D1"
                        ]
                    })
                ]
            }),
            vnode(Popover, {
                "trigger": "hover",
                "placement": "top",
                "content": "\u60AC\u505C\u65F6\u663E\u793A\u3002"
            }, {
                "default": () => [
                    vnode(Button, {
                        "variant": "tertiary"
                    }, {
                        "default": () => [
                            "\u60AC\u505C\u89E6\u53D1"
                        ]
                    })
                ]
            }),
            vnode(Popover, {
                "trigger": "focus",
                "placement": "right",
                "arrow": false,
                "content": "\u805A\u7126\u65F6\u663E\u793A\u3002"
            }, {
                "default": () => [
                    vnode("input", {
                        "placeholder": "\u805A\u7126\u89E6\u53D1"
                    }, [])
                ]
            }),
            vnode(Popover, {
                "open": open.value,
                "onUpdate:open": setOpen,
                "placement": "bottom-end",
                "title": "\u53D7\u63A7\u5F39\u5C42"
            }, {
                "content": () => vnode(Button, {
                    "size": "sm",
                    "onClick": () => setOpen(false)
                }, {
                    "default": () => [
                        "\u77E5\u9053\u4E86"
                    ]
                }),
                "default": () => [
                    vnode(Button, {
                        "variant": "primary"
                    }, {
                        "default": () => [
                            "\u53D7\u63A7 \u00B7 \u5BCC\u5185\u5BB9"
                        ]
                    })
                ]
            })
        ]));
    }
});
` }],
        rows: [['content', "VNodeChild / slot", 'required'], ['title', "VNodeChild / slot", '—'], ['trigger', "'click' | 'hover' | 'focus' | 'contextMenu' | 数组", "'click'"], ['placement', 'PopupPlacement', "'bottom'"], ['arrow', 'boolean', 'true'], ['open / defaultOpen / onOpenChange', 'boolean / boolean / (open) => void', '—'], ['mouseEnterDelay / mouseLeaveDelay', 'number (ms)', '80 / 120'], ['disabled', 'boolean', 'false'], ['overlayClassName / overlayStyle', 'string / CSSProperties', '—'], ["#default", "VNodeChild / slot", 'required']],
    },
    {
        id: 'popconfirm', title: 'Popconfirm 气泡确认框', icon: '✓', group: '反馈组件', eyebrow: 'FEEDBACK', badge: 'Popconfirm', description: '就地请求确认，支持异步确认（自动 loading）、失败提示、危险操作样式与自定义文案。',
        examples: [{ title: '基础、异步与失败处理', preview: vnode(PopconfirmExamples, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Popconfirm } from "atelier-ui-vue/popconfirm";
export const ProjectDanger = defineComponent({
    "name": "ProjectDanger",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Fragment, null, [
            vnode(Popconfirm, {
                "title": "\u5F52\u6863\u8FD9\u4E2A\u9879\u76EE\uFF1F",
                "description": "\u4F60\u4E4B\u540E\u4ECD\u53EF\u4EE5\u4ECE\u5F52\u6863\u5217\u8868\u6062\u590D\u3002",
                "onConfirm": () => console.log('\u5F52\u6863')
            }, {
                "default": () => [
                    vnode(Button, {}, {
                        "default": () => [
                            "\u5F52\u6863\u9879\u76EE"
                        ]
                    })
                ]
            }),
            vnode(Popconfirm, {
                "title": "\u5220\u9664\u9879\u76EE",
                "description": "\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u786E\u5B9A\u7EE7\u7EED\u5417\uFF1F",
                "okText": "\u5220\u9664",
                "okType": "danger",
                "onConfirm": () => fetch('/api/projects/1', { method: 'DELETE' }).then(() => undefined)
            }, {
                "default": () => [
                    vnode(Button, {
                        "variant": "danger"
                    }, {
                        "default": () => [
                            "\u5220\u9664\u9879\u76EE"
                        ]
                    })
                ]
            })
        ]));
    }
});
` }],
        rows: [['title', "VNodeChild / slot", 'required'], ['description', "VNodeChild / slot", '—'], ['icon', "VNodeChild / slot", '警示图标'], ['onConfirm', '(event) => void | Promise<void>', '—'], ['onCancel', '(event) => void', '—'], ['okText / cancelText', "VNodeChild / slot", "'确定' / '取消'"], ['okType', "'primary' | 'danger'", "'primary'"], ['showCancel', 'boolean', 'true'], ['errorText', "VNodeChild / slot", "'操作失败，请重试。'"], ['placement', 'PopupPlacement', "'top'"], ['open / defaultOpen / onOpenChange', 'boolean / boolean / (open) => void', '—'], ['disabled', 'boolean', 'false'], ['overlayClassName / overlayStyle', 'string / CSSProperties', '—']],
    },
];
export function isNavigationPageId(id: string): id is NavigationPageId {
    return navigationPages.some((item: NavigationPageMeta) => item.id === id);
}
