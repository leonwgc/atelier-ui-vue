import { defineComponent, shallowRef as vueRef, computed, Fragment } from 'vue';
import type { VNodeChild } from 'vue';
import { refSetter, vnode, demoEffect } from './demo-runtime';
import type { CalendarCellInfo } from '../src';
import { Avatar, Button, Calendar, Carousel, Countdown, Image, ImagePreviewGroup, Link, List, ListItem, ListItemMeta, Listy, Masonry, Paragraph, QRCode, Splitter, SplitterPanel, Statistic, Tag, Text, Title, Tree, Typography, Watermark, type CarouselRef, type ListyRef, type QRCodeStatus, type TreeNode, } from '../src';
import { ApiTable, ExampleCard, PageHeading } from './shared';
export type DataDisplayPageId = 'typography' | 'statistic' | 'image' | 'carousel' | 'calendar' | 'tree' | 'list' | 'listy' | 'masonry' | 'qrcode' | 'watermark' | 'splitter';
interface Example {
    title: string;
    description?: string;
    code: string;
    preview: VNodeChild;
}
interface DataDisplayPageMeta {
    id: DataDisplayPageId;
    title: string;
    icon: string;
    group: string;
    eyebrow: string;
    badge: string;
    description: string;
    examples: Example[];
    rows: string[][];
}
export const TypographyDemo = defineComponent({
    "name": "TypographyDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const name = vueRef('Atelier 设计系统');
        const setName = refSetter(name);
        return () => vnode(Typography, {}, {
            "default": () => [
                vnode(Title, {
                    "level": 2
                }, {
                    "default": () => [
                        name.value
                    ]
                }),
                vnode(Paragraph, {}, {
                    "default": () => [
                        "一套",
                        vnode(Text, {
                            "strong": true
                        }, {
                            "default": () => [
                                "强调细节"
                            ]
                        }),
                        "的 React 组件库。",
                        vnode(Text, {
                            "type": "secondary"
                        }, {
                            "default": () => [
                                "次要文本"
                            ]
                        }),
                        "、",
                        vnode(Text, {
                            "type": "success"
                        }, {
                            "default": () => [
                                "成功"
                            ]
                        }),
                        "、",
                        vnode(Text, {
                            "type": "warning"
                        }, {
                            "default": () => [
                                "警告"
                            ]
                        }),
                        "、",
                        vnode(Text, {
                            "type": "danger"
                        }, {
                            "default": () => [
                                "危险"
                            ]
                        }),
                        "、",
                        vnode(Text, {
                            "code": true
                        }, {
                            "default": () => [
                                "code"
                            ]
                        }),
                        "、",
                        vnode(Text, {
                            "keyboard": true
                        }, {
                            "default": () => [
                                "⌘K"
                            ]
                        }),
                        "、",
                        vnode(Text, {
                            "mark": true
                        }, {
                            "default": () => [
                                "高亮"
                            ]
                        }),
                        "、",
                        vnode(Text, {
                            "delete": true
                        }, {
                            "default": () => [
                                "删除"
                            ]
                        }),
                        "、",
                        vnode(Text, {
                            "underline": true
                        }, {
                            "default": () => [
                                "下划线"
                            ]
                        }),
                        "、",
                        vnode(Text, {
                            "italic": true
                        }, {
                            "default": () => [
                                "斜体"
                            ]
                        }),
                        "与 ",
                        vnode(Link, {
                            "href": "#typography"
                        }, {
                            "default": () => [
                                "链接"
                            ]
                        }),
                        "。"
                    ]
                }),
                vnode(Paragraph, {
                    "copyable": true
                }, {
                    "default": () => [
                        "这段文本可以一键复制，点击右侧图标试试。"
                    ]
                }),
                vnode(Text, {
                    "editable": { onChange: setName }
                }, {
                    "default": () => [
                        name.value
                    ]
                }),
                vnode(Paragraph, {
                    "ellipsis": { rows: 2, expandable: true },
                    "type": "secondary"
                }, {
                    "default": () => [
                        "Atelier UI 以可访问性为先：所有交互控件都具备语义角色、可见焦点与键盘操作。组件之间共享同一套主题变量、动效时长与缓动曲线，因此在不同页面之间切换时，界面保持一致的节奏感。你可以通过 ConfigProvider 覆盖主题 token，也可以直接使用 CSS 变量进行细粒度定制。这段文字默认折叠为两行，点击“展开”可以查看全部内容。"
                    ]
                }),
                vnode(Text, {
                    "ellipsis": true,
                    "style": { maxWidth: 240 }
                }, {
                    "default": () => [
                        "单行省略：这是一段很长很长的文本内容，超出宽度后会显示省略号。"
                    ]
                })
            ]
        });
    }
});
export const StatisticDemo = defineComponent({
    "name": "StatisticDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const deadline = vueRef(Date.now() + 1000 * 60 * 60 * 26 + 1000 * 45).value;
        return () => vnode("div", {
            "class": "demo-stat-grid"
        }, [
            vnode(Statistic, {
                "title": "活跃成员",
                "value": 128430
            }, {
                "suffix": () => "人"
            }),
            vnode(Statistic, {
                "title": "月度营收",
                "value": 2395120.5,
                "precision": 2,
                "trend": "up",
                "trendLabel": "较上月 +12.4%"
            }, {
                "prefix": () => "¥"
            }),
            vnode(Statistic, {
                "title": "跳出率",
                "value": 32.18,
                "precision": 2,
                "trend": "down",
                "trendLabel": "较上周 -3.2%"
            }, {
                "suffix": () => "%"
            }),
            vnode(Statistic, {
                "title": "加载中",
                "value": 0,
                "loading": true
            }, {}),
            vnode(Countdown, {
                "title": "活动倒计时",
                "value": deadline,
                "format": "D 天 HH:mm:ss"
            }, {}),
            vnode(Countdown, {
                "title": "毫秒级",
                "value": deadline,
                "format": "HH:mm:ss.SS",
                "size": "sm"
            }, {})
        ]);
    }
});
export const ImageDemo = defineComponent({
    "name": "ImageDemo",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 20 }
        }, [
            vnode("div", {
                "class": "component-row",
                "style": { gap: 16, alignItems: 'flex-start' }
            }, [
                vnode(Image, {
                    "src": covers[0],
                    "alt": "Aurora 项目封面",
                    "width": 240,
                    "height": 150
                }, {}),
                vnode(Image, {
                    "src": "https://invalid.example/broken.png",
                    "alt": "加载失败示例",
                    "width": 160,
                    "height": 150
                }, {}),
                vnode(Image, {
                    "src": "https://invalid.example/broken-2.png",
                    "fallback": covers[3],
                    "alt": "失败后回退",
                    "width": 240,
                    "height": 150
                }, {})
            ]),
            vnode(ImagePreviewGroup, {}, {
                "default": () => [
                    vnode("div", {
                        "class": "component-row",
                        "style": { gap: 12 }
                    }, [
                        covers.map((cover: string, index: number) => vnode(Image, {
                            "key": cover,
                            "src": cover,
                            "alt": `相册图片 ${index + 1}`,
                            "width": 120,
                            "height": 80
                        }, {}))
                    ])
                ]
            })
        ]);
    }
});
export const CarouselDemo = defineComponent({
    "name": "CarouselDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const ref = vueRef<CarouselRef | null>(null);
        const current = vueRef(0);
        const setCurrent = refSetter(current);
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 18 }
        }, [
            vnode(Carousel, {
                "ref": ref,
                "autoplay": true,
                "arrows": true,
                "aspectRatio": 16 / 7,
                "onChange": setCurrent,
                "style": { maxWidth: 640 }
            }, {
                "default": () => [
                    covers.map((cover: string, index: number) => vnode("img", {
                        "key": cover,
                        "src": cover,
                        "alt": `幻灯片 ${index + 1}`
                    }, []))
                ]
            }),
            vnode("div", {
                "class": "component-row"
            }, [
                vnode(Button, {
                    "size": "sm",
                    "onClick": () => ref.value?.prev()
                }, {
                    "default": () => [
                        "上一张"
                    ]
                }),
                vnode(Button, {
                    "size": "sm",
                    "onClick": () => ref.value?.next()
                }, {
                    "default": () => [
                        "下一张"
                    ]
                }),
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "当前：",
                    current.value + 1,
                    " / ",
                    covers.length
                ])
            ]),
            vnode("div", {
                "class": "demo-carousel-row"
            }, [
                vnode(Carousel, {
                    "effect": "fade",
                    "dotPosition": "right",
                    "aspectRatio": 4 / 3,
                    "style": { maxWidth: 300 }
                }, {
                    "default": () => [
                        ['设计评审', '发布计划', '周会纪要'].map((text: string) => vnode("div", {
                            "key": text,
                            "class": "demo-slide"
                        }, [
                            text
                        ]))
                    ]
                }),
                vnode(Carousel, {
                    "dotPosition": "top",
                    "infinite": false,
                    "arrows": true,
                    "aspectRatio": 4 / 3,
                    "style": { maxWidth: 300 }
                }, {
                    "default": () => [
                        ['不循环', '第二页', '最后一页'].map((text: string) => vnode("div", {
                            "key": text,
                            "class": "demo-slide demo-slide--alt"
                        }, [
                            text
                        ]))
                    ]
                })
            ])
        ]);
    }
});
export const CalendarDemo = defineComponent({
    "name": "CalendarDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const date = vueRef(new Date(2026, 9, 27));
        const setDate = refSetter(date);
        const events: Record<string, string[]> = { '2026-10-08': ['设计评审'], '2026-10-15': ['发布 v0.2', '周会'], '2026-10-27': ['组件走查'] };
        const key = (value: Date) => `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`;
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 20 }
        }, [
            vnode(Calendar, {
                "modelValue": date.value,
                "onChange": setDate
            }, {
                "cell": (scope: {
                    date: Date;
                    info: CalendarCellInfo;
                }) => ((value: Date, info: CalendarCellInfo) => info.type === 'date' && events[key(value)] ? vnode("ul", {
                    "class": "demo-calendar-events"
                }, [
                    events[key(value)].map((item: string) => vnode("li", {
                        "key": item
                    }, [
                        item
                    ]))
                ]) : null)(scope.date, scope.info)
            }),
            vnode("div", {
                "class": "component-row",
                "style": { alignItems: 'flex-start', gap: 20 }
            }, [
                vnode(Calendar, {
                    "fullscreen": false,
                    "modelValue": date.value,
                    "onChange": setDate,
                    "disabledDate": (value: Date) => value.getDay() === 0
                }, {
                    "cell": (scope: {
                        date: Date;
                        info: CalendarCellInfo;
                    }) => ((value: Date, info: CalendarCellInfo) => (info.type === 'date' && events[key(value)] ? true : null))(scope.date, scope.info)
                }),
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "已选择：",
                    date.value.toLocaleDateString('zh-CN'),
                    "（周日不可选）"
                ])
            ])
        ]);
    }
});
export const TreeDemo = defineComponent({
    "name": "TreeDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const checked = vueRef<string[]>(['logo']);
        const setChecked = refSetter(checked);
        const selected = vueRef<string[]>(['tokens']);
        const setSelected = refSetter(selected);
        const filter = vueRef('');
        const setFilter = refSetter(filter);
        const lazyData = vueRef<TreeNode[]>(folderTree);
        const setLazyData = refSetter(lazyData);
        const loadData = (node: TreeNode) => new Promise<void>((resolve: (value: void | PromiseLike<void>) => void) => setTimeout(() => {
            setLazyData((data: TreeNode[]) => data.map((item: TreeNode) => (item.key === node.key ? { ...item, children: [{ key: `${node.key}-1`, title: '2024 年归档' }, { key: `${node.key}-2`, title: '2025 年归档' }] } : item)));
            resolve();
        }, 700));
        return () => vnode("div", {
            "class": "demo-tree-row"
        }, [
            vnode("div", {
                "class": "demo-tree-frame"
            }, [
                vnode(Tree, {
                    "treeData": folderTree,
                    "checkable": true,
                    "defaultExpandAll": true,
                    "checkedKeys": checked.value,
                    "onCheck": (keys: string[]) => setChecked(keys),
                    "selectedKeys": selected.value,
                    "onSelect": (keys: string[]) => setSelected(keys),
                    "label": "文件树（可勾选）"
                }, {}),
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "已勾选：",
                    checked.value.join(', ') || '无'
                ])
            ]),
            vnode("div", {
                "class": "demo-tree-frame"
            }, [
                vnode("input", {
                    "class": "demo-plain-input",
                    "placeholder": "搜索节点…",
                    "value": filter.value,
                    "onInput": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setFilter(event.target.value),
                    "aria-label": "搜索树节点"
                }, []),
                vnode(Tree, {
                    "treeData": lazyData.value,
                    "showLine": true,
                    "showIcon": true,
                    "filterValue": filter.value,
                    "loadData": loadData,
                    "defaultExpandedKeys": ['design'],
                    "blockNode": true,
                    "label": "文件树（连线 + 异步加载）"
                }, {
                    "icon": (scope: {
                        node: TreeNode;
                        expanded: boolean;
                        leaf: boolean;
                    }) => ((_: TreeNode, state: { expanded: boolean; leaf: boolean; }) => vnode("span", {
                        "aria-hidden": "true"
                    }, [
                        state.leaf ? '📄' : state.expanded ? '📂' : '📁'
                    ]))(scope.node, { "expanded": scope.expanded, "leaf": scope.leaf })
                })
            ])
        ]);
    }
});
export const ListDemo = defineComponent({
    "name": "ListDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const loading = vueRef(false);
        const setLoading = refSetter(loading);
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 20 }
        }, [
            vnode(List, {
                "dataSource": members,
                "rowKey": "id",
                "bordered": true,
                "header": vnode("div", {
                    "class": "component-row",
                    "style": { justifyContent: 'space-between' }
                }, [
                    vnode("span", {}, [
                        "团队成员"
                    ]),
                    vnode(Button, {
                        "size": "sm",
                        "onClick": () => { setLoading(true); setTimeout(() => setLoading(false), 900); }
                    }, {
                        "default": () => [
                            "刷新"
                        ]
                    })
                ]),
                "footer": `共 ${members.length} 人`,
                "loading": loading.value,
                "pagination": { pageSize: 3 }
            }, {
                "default": (scope: {
                    item: { id: string; name: string; role: string; email: string; };
                }) => ((member: { id: string; name: string; role: string; email: string; }) => vnode(ListItem, {
                    "actions": [vnode("button", {
                            "key": "edit",
                            "type": "button"
                        }, [
                            "编辑"
                        ]), vnode("button", {
                            "key": "remove",
                            "type": "button"
                        }, [
                            "移除"
                        ])]
                }, {
                    "extra": () => vnode(Tag, {}, {
                        "default": () => [
                            member.role
                        ]
                    }),
                    "default": () => [
                        vnode(ListItemMeta, {
                            "title": member.name,
                            "description": member.email
                        }, {
                            "avatar": () => vnode(Avatar, {
                                "name": member.name
                            }, {})
                        })
                    ]
                }))(scope.item)
            }),
            vnode(List, {
                "dataSource": members.slice(0, 4),
                "rowKey": "id",
                "grid": { column: 4, gutter: 14, xs: 1, sm: 2 }
            }, {
                "default": (scope: {
                    item: { id: string; name: string; role: string; email: string; };
                }) => ((member: { id: string; name: string; role: string; email: string; }) => vnode(ListItem, {}, {
                    "default": () => [
                        vnode(ListItemMeta, {
                            "title": member.name,
                            "description": member.role
                        }, {
                            "avatar": () => vnode(Avatar, {
                                "name": member.name
                            }, {})
                        })
                    ]
                }))(scope.item)
            }),
            vnode(List, {
                "dataSource": [],
                "bordered": true,
                "emptyText": "还没有成员，点击右上角邀请"
            }, {
                "default": (scope: {}) => (() => null)()
            })
        ]);
    }
});
export const ListyDemo = defineComponent({
    "name": "ListyDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const ref = vueRef<ListyRef | null>(null);
        const count = vueRef(2000);
        const setCount = refSetter(count);
        const items = Array.from({ length: count.value }, (_: unknown, index: number) => ({ id: index + 1, name: `成员 ${index + 1}`, note: index % 7 === 0 ? '这一行内容更长一些，用于演示动态高度测量时不同行高的排版效果。' : '普通成员' }));
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 14 }
        }, [
            vnode("div", {
                "class": "component-row"
            }, [
                vnode(Button, {
                    "size": "sm",
                    "onClick": () => ref.value?.scrollTo(999, 'center')
                }, {
                    "default": () => [
                        "跳到第 1000 行"
                    ]
                }),
                vnode(Button, {
                    "size": "sm",
                    "onClick": () => ref.value?.scrollToTop()
                }, {
                    "default": () => [
                        "回到顶部"
                    ]
                }),
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "共 ",
                    count.value.toLocaleString(),
                    " 行，仅渲染可见区域"
                ])
            ]),
            vnode(Listy, {
                "ref": ref,
                "items": items,
                "itemKey": (item: { id: number; name: string; note: string; }) => item.id,
                "height": 300,
                "itemHeight": 48,
                "dynamicHeight": true,
                "onEndReached": () => setCount((value: number) => Math.min(value + 500, 10000)),
                "footer": count.value >= 10000 ? '已加载全部' : '滚动到底部自动加载更多'
            }, {
                "default": (scope: {
                    item: { id: number; name: string; note: string; };
                }) => ((item: { id: number; name: string; note: string; }) => vnode("div", {
                    "class": "demo-listy-row"
                }, [
                    vnode(Avatar, {
                        "name": item.name,
                        "size": "sm"
                    }, {}),
                    vnode("div", {}, [
                        vnode("strong", {}, [
                            item.name
                        ]),
                        vnode("div", {
                            "class": "demo-hint"
                        }, [
                            item.note
                        ])
                    ])
                ]))(scope.item)
            })
        ]);
    }
});
export const MasonryDemo = defineComponent({
    "name": "MasonryDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const cards = vueRef((() => Array.from({ length: 9 }, (_: unknown, index: number) => ({ id: index + 1, height: 80 + ((index * 53) % 120), color: covers[index % covers.length] })))());
        const setCards = refSetter(cards);
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 14 }
        }, [
            vnode("div", {
                "class": "component-row"
            }, [
                vnode(Button, {
                    "size": "sm",
                    "onClick": () => setCards((list: { id: number; height: number; color: string; }[]) => [...list, { id: list.length + 1, height: 80 + ((list.length * 53) % 120), color: covers[list.length % covers.length] }])
                }, {
                    "default": () => [
                        "添加卡片"
                    ]
                }),
                vnode(Button, {
                    "size": "sm",
                    "onClick": () => setCards((list: { id: number; height: number; color: string; }[]) => list.slice(0, -1)),
                    "disabled": cards.value.length === 0
                }, {
                    "default": () => [
                        "移除最后一张"
                    ]
                })
            ]),
            vnode(Masonry, {
                "dataSource": cards.value,
                "itemKey": (card: { id: number; height: number; color: string; }) => card.id,
                "columns": { 0: 1, 480: 2, 760: 3 },
                "gap": 14
            }, {
                "default": (scope: {
                    item: { id: number; height: number; color: string; };
                }) => ((card: { id: number; height: number; color: string; }) => vnode("div", {
                    "class": "demo-masonry-card",
                    "style": { height: card.height, backgroundImage: `url(${card.color})` }
                }, [
                    vnode("span", {}, [
                        "卡片 ",
                        card.id
                    ])
                ]))(scope.item)
            })
        ]);
    }
});
export const QRCodeDemo = defineComponent({
    "name": "QRCodeDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const status = vueRef<QRCodeStatus>('active');
        const setStatus = refSetter(status);
        const text = vueRef('https://atelier.design/invite/team-aurora');
        const setText = refSetter(text);
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 16 }
        }, [
            vnode("input", {
                "class": "demo-plain-input",
                "style": { maxWidth: 420 },
                "value": text.value,
                "onInput": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setText(event.target.value),
                "aria-label": "二维码内容"
            }, []),
            vnode("div", {
                "class": "component-row",
                "style": { gap: 20, alignItems: 'flex-start' }
            }, [
                vnode(QRCode, {
                    "value": text.value
                }, {}),
                vnode(QRCode, {
                    "value": text.value,
                    "size": 160,
                    "color": "#685cf6"
                }, {
                    "icon": () => covers[0]
                }),
                vnode(QRCode, {
                    "value": text.value,
                    "type": "canvas",
                    "size": 160,
                    "color": "#1d1f33",
                    "bgColor": "#f7f8fb",
                    "bordered": false
                }, {}),
                vnode(QRCode, {
                    "value": text.value,
                    "status": status.value,
                    "onRefresh": () => setStatus('active'),
                    "size": 160
                }, {})
            ]),
            vnode("div", {
                "class": "component-row"
            }, [
                (['active', 'loading', 'expired', 'scanned'] as QRCodeStatus[]).map((item: QRCodeStatus) => vnode(Button, {
                    "key": item,
                    "size": "sm",
                    "variant": status.value === item ? 'primary' : 'secondary',
                    "onClick": () => setStatus(item)
                }, {
                    "default": () => [
                        item
                    ]
                }))
            ])
        ]);
    }
});
export const WatermarkDemo = defineComponent({
    "name": "WatermarkDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const text = vueRef('Atelier · 内部预览');
        const setText = refSetter(text);
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 14 }
        }, [
            vnode("input", {
                "class": "demo-plain-input",
                "style": { maxWidth: 320 },
                "value": text.value,
                "onInput": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setText(event.target.value),
                "aria-label": "水印文字"
            }, []),
            vnode(Watermark, {
                "content": [text.value, 'lin@atelier.design'],
                "font": { color: 'rgba(104, 92, 246, 0.16)', fontSize: 14 },
                "gap": [80, 70]
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "demo-watermark-body"
                    }, [
                        vnode(Title, {
                            "level": 4
                        }, {
                            "default": () => [
                                "项目设置"
                            ]
                        }),
                        vnode(Paragraph, {
                            "type": "secondary"
                        }, {
                            "default": () => [
                                "水印由 canvas 生成并平铺在内容之上；通过开发者工具删除或隐藏水印节点时会被自动恢复。"
                            ]
                        }),
                        vnode("div", {
                            "class": "component-row"
                        }, [
                            vnode(Button, {
                                "variant": "primary"
                            }, {
                                "default": () => [
                                    "保存"
                                ]
                            }),
                            vnode(Button, {}, {
                                "default": () => [
                                    "取消"
                                ]
                            })
                        ])
                    ])
                ]
            })
        ]);
    }
});
export const SplitterDemo = defineComponent({
    "name": "SplitterDemo",
    "props": [],
    "setup": (props, { slots }) => {
        const sizes = vueRef<number[]>([]);
        const setSizes = refSetter(sizes);
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 14 }
        }, [
            vnode(Splitter, {
                "style": { height: 240 },
                "onResizeEnd": setSizes
            }, {
                "default": () => [
                    vnode(SplitterPanel, {
                        "defaultSize": "30%",
                        "min": "18%",
                        "max": "50%",
                        "collapsible": true
                    }, {
                        "default": () => [
                            vnode("strong", {}, [
                                "导航"
                            ]),
                            vnode("p", {
                                "class": "demo-hint"
                            }, [
                                "可拖拽、可折叠，最小 18%，最大 50%。"
                            ])
                        ]
                    }),
                    vnode(SplitterPanel, {}, {
                        "default": () => [
                            vnode("strong", {}, [
                                "内容区"
                            ]),
                            vnode("p", {
                                "class": "demo-hint"
                            }, [
                                "按住分隔条拖动，或聚焦分隔条后使用方向键（Shift 加速）。"
                            ])
                        ]
                    }),
                    vnode(SplitterPanel, {
                        "defaultSize": 200,
                        "min": 120,
                        "resizable": false
                    }, {
                        "default": () => [
                            vnode("strong", {}, [
                                "属性面板"
                            ]),
                            vnode("p", {
                                "class": "demo-hint"
                            }, [
                                "resizable=false，宽度固定。"
                            ])
                        ]
                    })
                ]
            }),
            vnode(Splitter, {
                "layout": "vertical",
                "style": { height: 260 },
                "lazy": true
            }, {
                "default": () => [
                    vnode(SplitterPanel, {
                        "defaultSize": "40%",
                        "min": 60
                    }, {
                        "default": () => [
                            vnode("strong", {}, [
                                "编辑器"
                            ]),
                            vnode("p", {
                                "class": "demo-hint"
                            }, [
                                "垂直布局，lazy 模式在松开时才应用新尺寸。"
                            ])
                        ]
                    }),
                    vnode(SplitterPanel, {
                        "collapsible": true
                    }, {
                        "default": () => [
                            vnode("strong", {}, [
                                "控制台"
                            ]),
                            vnode("p", {
                                "class": "demo-hint"
                            }, [
                                "可折叠面板。"
                            ])
                        ]
                    })
                ]
            }),
            vnode("span", {
                "class": "demo-hint"
            }, [
                sizes.value.length ? `当前宽度：${sizes.value.map((size: number) => Math.round(size)).join(' / ')} px` : '拖动上方分隔条查看尺寸回调'
            ])
        ]);
    }
});
export const DataDisplayPage = defineComponent({
    "name": "DataDisplayPage",
    "props": [
        "id"
    ],
    "setup": (props, { slots }) => {
        const { id } = props;
        const page = dataDisplayPages.find((item: DataDisplayPageMeta) => item.id === id);
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
const svgImage = (fill: string, accent: string, label: string) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400"><rect width="640" height="400" fill="${fill}"/><circle cx="500" cy="120" r="70" fill="${accent}" opacity=".85"/><path d="M0 320 170 170l130 110 100-80 240 190H0Z" fill="${accent}"/><text x="32" y="60" fill="#fff" font-family="sans-serif" font-size="28" font-weight="700">${label}</text></svg>`)}`;
const covers = [svgImage('#685cf6', '#b6b0ff', 'Aurora'), svgImage('#2f9472', '#9fdcc5', 'Meadow'), svgImage('#c98a29', '#f3d8a3', 'Dune'), svgImage('#222438', '#6f78a8', 'Night')];
const folderTree: TreeNode[] = [
    { key: 'design', title: '设计部', children: [
            { key: 'brand', title: '品牌项目', children: [{ key: 'logo', title: 'Logo 规范.fig' }, { key: 'poster', title: '海报模板.fig' }] },
            { key: 'ux', title: '体验规范', children: [{ key: 'tokens', title: '设计 Token.json' }, { key: 'motion', title: '动效指南.md', disabled: true }] },
        ] },
    { key: 'engineering', title: '工程部', children: [{ key: 'web', title: 'Web 前端' }, { key: 'mobile', title: '移动端' }] },
    { key: 'archive', title: '归档（空）', isLeaf: false },
];
const members = [
    { id: 'lin', name: '林知夏', role: '产品设计师', email: 'lin@atelier.design' },
    { id: 'chen', name: '陈一川', role: '前端工程师', email: 'chen@atelier.design' },
    { id: 'zhou', name: '周禾', role: '产品经理', email: 'zhou@atelier.design' },
    { id: 'shen', name: '沈星河', role: '后端工程师', email: 'shen@atelier.design' },
    { id: 'su', name: '苏晚', role: '测试工程师', email: 'su@atelier.design' },
];
export const dataDisplayPages: DataDisplayPageMeta[] = [
    {
        id: 'typography', title: 'Typography 排版', icon: 'T', group: '基础组件', eyebrow: 'GENERAL', badge: 'Typography', description: '标题、段落、文本与链接的统一排版，支持复制、编辑、省略展开与多种语义样式。',
        examples: [{ title: '标题、文本样式、复制、编辑与省略', preview: vnode(TypographyDemo, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Link, Paragraph, Text, Title, Typography } from "atelier-ui-vue/typography";
export const Intro = defineComponent({
    "name": "Intro",
    "props": [],
    "setup": (props, { slots }) => {
        const name = vueRef('Atelier \u8BBE\u8BA1\u7CFB\u7EDF');
        const setName = refSetter(name);
        return () => (vnode(Typography, {}, {
            "default": () => [
                vnode(Title, {
                    "level": 2
                }, {
                    "default": () => [
                        name.value
                    ]
                }),
                vnode(Paragraph, {}, {
                    "default": () => [
                        "\u4E00\u5957",
                        vnode(Text, {
                            "strong": true
                        }, {
                            "default": () => [
                                "\u5F3A\u8C03\u7EC6\u8282"
                            ]
                        }),
                        "\u7684\u7EC4\u4EF6\u5E93\u3002",
                        vnode(Text, {
                            "type": "secondary"
                        }, {
                            "default": () => [
                                "\u6B21\u8981"
                            ]
                        }),
                        "\u3001",
                        vnode(Text, {
                            "code": true
                        }, {
                            "default": () => [
                                "code"
                            ]
                        }),
                        "\u3001",
                        vnode(Text, {
                            "keyboard": true
                        }, {
                            "default": () => [
                                "\u2318K"
                            ]
                        }),
                        "\u3001",
                        vnode(Text, {
                            "mark": true
                        }, {
                            "default": () => [
                                "\u9AD8\u4EAE"
                            ]
                        }),
                        " \u4E0E ",
                        vnode(Link, {
                            "href": "#"
                        }, {
                            "default": () => [
                                "\u94FE\u63A5"
                            ]
                        }),
                        "\u3002"
                    ]
                }),
                vnode(Paragraph, {
                    "copyable": true
                }, {
                    "default": () => [
                        "\u8FD9\u6BB5\u6587\u672C\u53EF\u4EE5\u4E00\u952E\u590D\u5236\u3002"
                    ]
                }),
                vnode(Text, {
                    "editable": { onChange: setName }
                }, {
                    "default": () => [
                        name.value
                    ]
                }),
                vnode(Paragraph, {
                    "ellipsis": { rows: 2, expandable: true }
                }, {
                    "default": () => [
                        "\u5F88\u957F\u7684\u6BB5\u843D\u2026\u2026"
                    ]
                }),
                vnode(Text, {
                    "ellipsis": true,
                    "style": { maxWidth: 240 }
                }, {
                    "default": () => [
                        "\u5355\u884C\u7701\u7565\u6587\u672C"
                    ]
                })
            ]
        }));
    }
});
` }],
        rows: [['Title.level', '1 | 2 | 3 | 4 | 5', '1'], ['type', "'secondary' | 'success' | 'warning' | 'danger'", '—'], ['strong / italic / underline / delete', 'boolean', 'false'], ['code / keyboard / mark', 'boolean', 'false'], ['disabled', 'boolean', 'false'], ['copyable', 'boolean | { text?, onCopy?, tooltips? }', 'false'], ['editable', 'boolean | { editing?, onStart?, onChange?, onCancel?, onEnd?, maxLength? }', 'false'], ['ellipsis', 'boolean | { rows?, expandable?, symbol?, onExpand?, tooltip? }', 'false'], ['Link.href / target', 'string', '—'], ['Typography.as', "'article' | 'section' | 'div'", "'article'"]],
    },
    {
        id: 'statistic', title: 'Statistic 统计数值', icon: '↗', group: '数据展示', eyebrow: 'DATA DISPLAY', badge: 'Statistic', description: '突出展示关键指标，支持千分位、精度、前后缀、趋势标识、加载骨架以及倒计时。',
        examples: [{ title: '数值、趋势与倒计时', preview: vnode(StatisticDemo, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Countdown, Statistic } from "atelier-ui-vue/statistic";
export const Metrics = defineComponent({
    "name": "Metrics",
    "props": [],
    "setup": (props, { slots }) => {
        const deadline = Date.now() + 1000 * 60 * 60 * 26;
        return () => (vnode(Fragment, null, [
            vnode(Statistic, {
                "title": "\u6D3B\u8DC3\u6210\u5458",
                "value": 128430
            }, {
                "suffix": () => "\u4EBA"
            }),
            vnode(Statistic, {
                "title": "\u6708\u5EA6\u8425\u6536",
                "value": 2395120.5,
                "precision": 2,
                "trend": "up",
                "trendLabel": "\u8F83\u4E0A\u6708 +12.4%"
            }, {
                "prefix": () => "\u00A5"
            }),
            vnode(Statistic, {
                "title": "\u8DF3\u51FA\u7387",
                "value": 32.18,
                "precision": 2,
                "trend": "down"
            }, {
                "suffix": () => "%"
            }),
            vnode(Statistic, {
                "title": "\u52A0\u8F7D\u4E2D",
                "value": 0,
                "loading": true
            }, {}),
            vnode(Countdown, {
                "title": "\u6D3B\u52A8\u5012\u8BA1\u65F6",
                "value": deadline,
                "format": "D \u5929 HH:mm:ss",
                "onFinish": () => console.log('\u7ED3\u675F')
            }, {})
        ]));
    }
});
` }],
        rows: [['title', "VNodeChild / slot", '—'], ['value', 'number | string', 'required'], ['precision', 'number', '—'], ['groupSeparator / decimalSeparator', 'string', "',' / '.'"], ['prefix / suffix', "VNodeChild / slot", '—'], ['formatter', '(value) => VNodeChild', '—'], ['loading', 'boolean', 'false'], ['trend', "'up' | 'down'", '—'], ['trendLabel', "VNodeChild / slot", '—'], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['valueStyle', 'CSSProperties', '—'], ['Countdown.value', 'number | Date', 'required'], ['Countdown.format', "string（D / H / m / s / S）", "'HH:mm:ss'"], ['Countdown.onFinish / onChange', '() => void / (ms) => void', '—']],
    },
    {
        id: 'image', title: 'Image 图片', icon: '▧', group: '数据展示', eyebrow: 'DATA DISPLAY', badge: 'Image', description: '带骨架占位、失败回退与全屏预览的图片组件，预览支持缩放、旋转、翻转、拖拽与相册切换。',
        examples: [{ title: '占位、回退与相册预览', description: '点击任意图片打开预览层；相册内可用 ← → 切换，滚轮缩放，Esc 关闭。', preview: vnode(ImageDemo, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Image, ImagePreviewGroup } from "atelier-ui-vue/image";
export const Gallery = defineComponent({
    "name": "Gallery",
    "props": [
        "covers"
    ],
    "setup": (props, { slots }) => {
        const { covers } = props;
        return () => (vnode(Fragment, null, [
            vnode(Image, {
                "src": covers[0],
                "alt": "\u9879\u76EE\u5C01\u9762",
                "width": 240,
                "height": 150
            }, {}),
            vnode(Image, {
                "src": "/broken.png",
                "fallback": covers[1],
                "alt": "\u5931\u8D25\u540E\u56DE\u9000",
                "width": 240,
                "height": 150
            }, {}),
            vnode(ImagePreviewGroup, {}, {
                "default": () => [
                    covers.map((cover: string, index: number) => vnode(Image, {
                        "key": cover,
                        "src": cover,
                        "alt": \`\u56FE\u7247 \${index + 1}\`,
                        "width": 120,
                        "height": 80
                    }, {}))
                ]
            })
        ]));
    }
});
` }],
        rows: [['src', 'string', 'required'], ['alt', 'string', "''"], ['preview', 'boolean | { src?, mask?, visible?, onVisibleChange? }', 'true'], ['fallback', 'string', '—'], ['placeholder', 'boolean | VNodeChild', 'true'], ['fit', 'CSS object-fit', "'cover'"], ['rounded', 'boolean | number', 'true'], ['loading', "'lazy' | 'eager'", "'lazy'"], ['onPreviewOpen', '() => void', '—'], ['PreviewGroup.items', 'Array<string | { src, previewSrc? }>', '子元素自动收集'], ['PreviewGroup.current / onChange', 'number / (index) => void', '—'], ['PreviewGroup.visible / onVisibleChange', 'boolean / (visible) => void', '—']],
    },
    {
        id: 'carousel', title: 'Carousel 走马灯', icon: '▭', group: '数据展示', eyebrow: 'DATA DISPLAY', badge: 'Carousel', description: '滑动 / 淡入两种切换效果，支持自动播放（悬停暂停）、拖拽、箭头、指示点位置与命令式控制。',
        examples: [{ title: '自动播放、拖拽、淡入与非循环', preview: vnode(CarouselDemo, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Carousel, type CarouselRef } from "atelier-ui-vue/carousel";
export const Banner = defineComponent({
    "name": "Banner",
    "props": [
        "covers"
    ],
    "setup": (props, { slots }) => {
        const { covers } = props;
        const ref = vueRef<CarouselRef | null>(null);
        return () => (vnode(Fragment, null, [
            vnode(Carousel, {
                "ref": ref,
                "autoplay": true,
                "arrows": true,
                "aspectRatio": 16 / 7,
                "onChange": (index: number) => console.log(index)
            }, {
                "default": () => [
                    covers.map((cover: string) => vnode("img", {
                        "key": cover,
                        "src": cover,
                        "alt": ""
                    }, []))
                ]
            }),
            vnode("button", {
                "type": "button",
                "onClick": () => ref.value?.next()
            }, [
                "\u4E0B\u4E00\u5F20"
            ]),
            vnode(Carousel, {
                "effect": "fade",
                "dotPosition": "right",
                "aspectRatio": 4 / 3
            }, {
                "default": () => [
                    vnode("div", {}, [
                        "\u8BBE\u8BA1\u8BC4\u5BA1"
                    ]),
                    vnode("div", {}, [
                        "\u53D1\u5E03\u8BA1\u5212"
                    ])
                ]
            })
        ]));
    }
});
` }],
        rows: [['children / items', 'VNodeChild / VNodeChild[]', '—'], ['autoplay', 'boolean', 'false'], ['autoplaySpeed', 'number (ms)', '4000'], ['pauseOnHover', 'boolean', 'true'], ['effect', "'slide' | 'fade'", "'slide'"], ['dots', 'boolean', 'true'], ['dotPosition', "'bottom' | 'top' | 'left' | 'right'", "'bottom'"], ['arrows', 'boolean', 'false'], ['infinite', 'boolean', 'true'], ['draggable', 'boolean', 'true'], ['speed', 'number (ms)', '450'], ['current / defaultCurrent', 'number', '— / 0'], ['onChange / beforeChange / afterChange', '(index) => void', '—'], ['aspectRatio', 'number', '—'], ['ref', '{ next, prev, goTo }', '—']],
    },
    {
        id: 'calendar', title: 'Calendar 日历', icon: '▦', group: '数据展示', eyebrow: 'DATA DISPLAY', badge: 'Calendar', description: '月 / 年两种面板，支持全屏日程单元格、紧凑卡片、禁用日期、有效范围与完整键盘导航。',
        examples: [{ title: '全屏日程与紧凑卡片', description: '方向键移动焦点，PageUp / PageDown 切换月份，Enter 选择。', preview: vnode(CalendarDemo, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { CalendarCellInfo } from 'atelier-ui-vue';
import { Calendar } from "atelier-ui-vue/calendar";
export const Schedule = defineComponent({
    "name": "Schedule",
    "props": [],
    "setup": (props, { slots }) => {
        const date = vueRef(new Date(2026, 9, 27));
        const setDate = refSetter(date);
        return () => (vnode(Fragment, null, [
            vnode(Calendar, {
                "modelValue": date.value,
                "onChange": setDate
            }, {
                "cell": (scope: {
                    date: Date;
                    info: CalendarCellInfo;
                }) => ((value: Date, info: CalendarCellInfo) => info.type === 'date' && events[key(value)] ? vnode("ul", {}, [
                    events[key(value)].map((item: string) => vnode("li", {
                        "key": item
                    }, [
                        item
                    ]))
                ]) : null)(scope.date, scope.info)
            }),
            vnode(Calendar, {
                "fullscreen": false,
                "modelValue": date.value,
                "onChange": setDate,
                "disabledDate": (value: Date) => value.getDay() === 0
            }, {})
        ]));
    }
});
const events: Record<string, string[]> = { '2026-10-15': ['\u53D1\u5E03 v0.2', '\u5468\u4F1A'] };
const key = (date: Date) => date.toISOString().slice(0, 10);
` }],
        rows: [['value / defaultValue', 'Date', '— / 今天'], ['onChange', '(date) => void', '—'], ['onSelect', '(date, { source }) => void', '—'], ['onPanelChange', '(date, mode) => void', '—'], ['mode / defaultMode', "'month' | 'year'", "— / 'month'"], ['fullscreen', 'boolean', 'true'], ['cellRender', '(date, info) => VNodeChild', '—'], ['disabledDate', '(date) => boolean', '—'], ['validRange', '[Date, Date]', '—'], ['firstDayOfWeek', '0 | 1', '1'], ['weekdayLabels', 'string[]', '日一二三四五六'], ['showToday', 'boolean', 'true'], ['headerRender', '(info) => VNodeChild', '—']],
    },
    {
        id: 'tree', title: 'Tree 树形控件', icon: '⋮', group: '数据展示', eyebrow: 'DATA DISPLAY', badge: 'Tree', description: '层级数据的展开、选择与级联勾选，支持连线、图标、搜索高亮、异步加载与键盘导航。',
        examples: [{ title: '可勾选、连线 + 图标、搜索与异步加载', description: '左侧为级联勾选；右侧输入关键字会高亮并自动展开，“归档”节点在展开时异步加载子节点。', preview: vnode(TreeDemo, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Tree, type TreeNode } from "atelier-ui-vue/tree";
export const FolderTree = defineComponent({
    "name": "FolderTree",
    "props": [],
    "setup": (props, { slots }) => {
        const checked = vueRef<string[]>([]);
        const setChecked = refSetter(checked);
        const tree = vueRef(data);
        const setTree = refSetter(tree);
        const loadData = (node: TreeNode) => fetch(\`/api/folders/\${node.key}\`).then((res: Response) => res.json()).then((children) => {
            setTree((current: TreeNode[]) => current.map((item: TreeNode) => (item.key === node.key ? { ...item, children } : item)));
        });
        return () => (vnode(Fragment, null, [
            vnode(Tree, {
                "treeData": tree.value,
                "checkable": true,
                "defaultExpandAll": true,
                "checkedKeys": checked.value,
                "onCheck": (keys: string[]) => setChecked(keys)
            }, {}),
            vnode(Tree, {
                "treeData": tree.value,
                "showLine": true,
                "showIcon": true,
                "loadData": loadData,
                "filterValue": "\u54C1\u724C",
                "blockNode": true
            }, {})
        ]));
    }
});
const data: TreeNode[] = [
    { key: 'design', title: '\u8BBE\u8BA1\u90E8', children: [{ key: 'brand', title: '\u54C1\u724C\u9879\u76EE' }, { key: 'ux', title: '\u4F53\u9A8C\u89C4\u8303' }] },
    { key: 'archive', title: '\u5F52\u6863', isLeaf: false },
];
` }],
        rows: [['treeData', 'TreeNode[]', 'required'], ['checkable / checkStrictly', 'boolean', 'false'], ['selectable / multiple', 'boolean', 'true / false'], ['expandedKeys / defaultExpandedKeys / defaultExpandAll', 'string[] / string[] / boolean', '—'], ['onExpand', '(keys, { expanded, node }) => void', '—'], ['selectedKeys / defaultSelectedKeys', 'string[]', '—'], ['onSelect', '(keys, { selected, node }) => void', '—'], ['checkedKeys / defaultCheckedKeys', 'string[]', '—'], ['onCheck', '(keys, { checked, node, halfCheckedKeys }) => void', '—'], ['showLine / showIcon', 'boolean', 'false'], ['icon', 'VNodeChild | (node, { expanded, leaf }) => VNodeChild', '—'], ['switcherIcon', "VNodeChild / slot", '›'], ['titleRender', '(node) => VNodeChild', '—'], ['filterValue', 'string', '—'], ['loadData', '(node) => Promise<void>', '—'], ['expandAction', "'click' | false", 'false'], ['blockNode', 'boolean', 'false'], ['TreeNode', '{ key, title, children?, disabled?, disableCheckbox?, selectable?, checkable?, icon?, isLeaf? }', '—']],
    },
    {
        id: 'list', title: 'List 列表', icon: '☰', group: '数据展示', eyebrow: 'DATA DISPLAY', badge: 'List', description: '通用列表容器：头尾、分割线、尺寸、加载骨架、分页、栅格布局与空状态。',
        examples: [{ title: '分页列表、栅格与空状态', preview: vnode(ListDemo, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Avatar } from "atelier-ui-vue/avatar";
import { List, ListItem, ListItemMeta } from "atelier-ui-vue/list";
import { Tag } from "atelier-ui-vue/tag";
export const Members = defineComponent({
    "name": "Members",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Fragment, null, [
            vnode(List, {
                "dataSource": members,
                "rowKey": "id",
                "bordered": true,
                "header": "\u56E2\u961F\u6210\u5458",
                "pagination": { pageSize: 3 }
            }, {
                "default": (scope: {
                    item: { id: string; name: string; role: string; email: string; };
                }) => ((member: { id: string; name: string; role: string; email: string; }) => (vnode(ListItem, {
                    "actions": [vnode("button", {
                            "key": "edit",
                            "type": "button"
                        }, [
                            "\u7F16\u8F91"
                        ])]
                }, {
                    "extra": () => vnode(Tag, {}, {
                        "default": () => [
                            member.role
                        ]
                    }),
                    "default": () => [
                        vnode(ListItemMeta, {
                            "title": member.name,
                            "description": member.email
                        }, {
                            "avatar": () => vnode(Avatar, {
                                "name": member.name
                            }, {})
                        })
                    ]
                })))(scope.item)
            }),
            vnode(List, {
                "dataSource": members,
                "rowKey": "id",
                "grid": { column: 4, gutter: 14, xs: 1, sm: 2 }
            }, {
                "default": (scope: {
                    item: { id: string; name: string; role: string; email: string; };
                }) => ((member: { id: string; name: string; role: string; email: string; }) => vnode(ListItem, {}, {
                    "default": () => [
                        member.name
                    ]
                }))(scope.item)
            })
        ]));
    }
});
const members = [{ id: 'lin', name: '\u6797\u77E5\u590F', role: '\u4EA7\u54C1\u8BBE\u8BA1\u5E08', email: 'lin@atelier.design' }];
` }],
        rows: [['dataSource', 'T[]', 'required'], ['renderItem', '(item, index) => VNodeChild', 'required'], ['rowKey', 'keyof T | (item, index) => Key', 'index'], ['header / footer', "VNodeChild / slot", '—'], ['bordered / split', 'boolean', 'false / true'], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['loading / loadingRows', 'boolean / number', 'false / 3'], ['emptyText', "VNodeChild / slot", "'暂无数据'"], ['grid', '{ column?, gutter?, xs?, sm?, md?, lg? }', '—'], ['pagination', 'boolean | { pageSize?, current?, onChange?, position?, align? }', 'false'], ['height / onEndReached', 'number / () => void', '—'], ['ListItem.actions / extra', 'VNodeChild[] / VNodeChild', '—'], ['ListItemMeta.avatar / title / description', "VNodeChild / slot", '—']],
    },
    {
        id: 'listy', title: 'Listy 虚拟列表', icon: '≡', group: '数据展示', eyebrow: 'DATA DISPLAY', badge: 'Listy', description: '只渲染可视区域的长列表，支持固定 / 动态行高、滚动到指定行、触底加载与页脚。',
        examples: [{ title: '一万行数据的虚拟滚动', preview: vnode(ListyDemo, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Listy, type ListyRef } from "atelier-ui-vue/listy";
export const BigList = defineComponent({
    "name": "BigList",
    "props": [],
    "setup": (props, { slots }) => {
        const ref = vueRef<ListyRef | null>(null);
        const count = vueRef(2000);
        const setCount = refSetter(count);
        const items = Array.from({ length: count.value }, (_: unknown, index: number) => ({ id: index + 1, name: \`\u6210\u5458 \${index + 1}\` }));
        return () => (vnode(Fragment, null, [
            vnode("button", {
                "type": "button",
                "onClick": () => ref.value?.scrollTo(999, 'center')
            }, [
                "\u8DF3\u5230\u7B2C 1000 \u884C"
            ]),
            vnode(Listy, {
                "ref": ref,
                "items": items,
                "itemKey": (item: { id: number; name: string; }) => item.id,
                "height": 300,
                "itemHeight": 48,
                "dynamicHeight": true,
                "onEndReached": () => setCount((value: number) => value + 500)
            }, {
                "default": (scope: {
                    item: { id: number; name: string; };
                }) => ((item: { id: number; name: string; }) => vnode("strong", {}, [
                    item.name
                ]))(scope.item)
            })
        ]));
    }
});
` }],
        rows: [['items', 'T[]', 'required'], ['renderItem', '(item, index) => VNodeChild', 'required'], ['itemKey', '(item, index) => Key', 'index'], ['height', 'number', '320'], ['itemHeight', 'number', '44'], ['dynamicHeight', 'boolean', 'false'], ['overscan', 'number', '4'], ['onEndReached / endReachedThreshold', '() => void / number', '— / 120'], ['onVisibleRangeChange', '({ start, end }) => void', '—'], ['emptyText / footer', "VNodeChild / slot", '—'], ['split', 'boolean', 'true'], ['ref', '{ scrollTo(index, align), scrollToTop() }', '—']],
    },
    {
        id: 'masonry', title: 'Masonry 瀑布流', icon: '▤', group: '数据展示', eyebrow: 'DATA DISPLAY', badge: 'Masonry', description: '基于测量的真正瀑布流：按最短列放置，响应式列数，增删卡片时平滑重排。',
        examples: [{ title: '响应式列数与动态增删', preview: vnode(MasonryDemo, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Masonry } from "atelier-ui-vue/masonry";
export const Gallery = defineComponent({
    "name": "Gallery",
    "props": [
        "cards"
    ],
    "setup": (props, { slots }) => {
        const { cards } = props;
        return () => (vnode(Masonry, {
            "dataSource": cards,
            "itemKey": (card: { id: number; height: number; }) => card.id,
            "columns": { 0: 1, 480: 2, 760: 3 },
            "gap": 14
        }, {
            "default": (scope: {
                item: { id: number; height: number; };
            }) => ((card: { id: number; height: number; }) => vnode("div", {
                "style": { height: card.height }
            }, [
                "\u5361\u7247 ",
                card.id
            ]))(scope.item)
        }));
    }
});
` }],
        rows: [['children / dataSource + renderItem', 'VNodeChild / T[] + (item, index) => VNodeChild', '—'], ['itemKey', '(item, index) => Key', 'index'], ['columns', 'number | Record<minWidth, number>', '3'], ['gap', 'number | [column, row]', '16'], ['sequential', 'boolean', 'false'], ['onLayout', '({ columns, height }) => void', '—']],
    },
    {
        id: 'qrcode', title: 'QRCode 二维码', icon: '▣', group: '数据展示', eyebrow: 'DATA DISPLAY', badge: 'QRCode', description: '内置零依赖的 QR 编码器（Byte 模式，1–40 版本，L/M/Q/H 纠错），支持 SVG / Canvas 渲染、中心 Logo 与状态遮罩。',
        examples: [{ title: '渲染方式、Logo 与状态', description: '修改输入框内容会即时重新编码，可直接用手机扫描验证。', preview: vnode(QRCodeDemo, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { QRCode } from "atelier-ui-vue/qrcode";
export const Invite = defineComponent({
    "name": "Invite",
    "props": [
        "url",
        "logo"
    ],
    "setup": (props, { slots }) => {
        const { url, logo } = props;
        return () => (vnode(Fragment, null, [
            vnode(QRCode, {
                "value": url
            }, {}),
            vnode(QRCode, {
                "value": url,
                "color": "#685cf6"
            }, {
                "icon": () => logo
            }),
            vnode(QRCode, {
                "value": url,
                "type": "canvas",
                "bgColor": "#f7f8fb",
                "bordered": false
            }, {}),
            vnode(QRCode, {
                "value": url,
                "status": "expired",
                "onRefresh": () => console.log('refresh')
            }, {})
        ]));
    }
});
` }],
        rows: [['value', 'string', 'required'], ['size', 'number', '160'], ['type', "'svg' | 'canvas'", "'svg'"], ['errorLevel', "'L' | 'M' | 'Q' | 'H'", "'M'（有 icon 时 'H'）"], ['color / bgColor', 'string', "'#222438' / '#ffffff'"], ['icon / iconSize', 'string / number', '— / size × 0.22'], ['bordered', 'boolean', 'true'], ['margin', 'number（模块数）', '2'], ['status', "'active' | 'expired' | 'loading' | 'scanned'", "'active'"], ['onRefresh', '() => void', '—'], ['statusRender', '(status, { onRefresh }) => VNodeChild', '—'], ['encodeQR (独立导出)', '(text, level?) => { size, version, modules }', '—']],
    },
    {
        id: 'watermark', title: 'Watermark 水印', icon: '▧', group: '反馈组件', eyebrow: 'FEEDBACK', badge: 'Watermark', description: '基于 canvas 的文字 / 图片平铺水印，支持多行、旋转、间距、字体配置、全屏模式与防篡改。',
        examples: [{ title: '多行文字水印与防篡改', preview: vnode(WatermarkDemo, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Watermark } from "atelier-ui-vue/watermark";
export const ProtectedPreview = defineComponent({
    "name": "ProtectedPreview",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Watermark, {
            "content": ['Atelier \u00B7 \u5185\u90E8\u9884\u89C8', 'lin@atelier.design'],
            "font": { color: 'rgba(104, 92, 246, 0.16)', fontSize: 14 },
            "gap": [80, 70]
        }, {
            "default": () => [
                vnode("div", {
                    "style": { minHeight: 200 }
                }, [
                    "\u53D7\u4FDD\u62A4\u7684\u5185\u5BB9"
                ])
            ]
        }));
    }
});
` }],
        rows: [['content', 'string | string[]', '—'], ['image', 'string', '—'], ['width / height', 'number', '按内容测量'], ['rotate', 'number', '-22'], ['gap', '[number, number]', '[100, 100]'], ['offset', '[number, number]', 'gap / 2'], ['font', '{ color?, fontSize?, fontWeight?, fontFamily?, fontStyle?, textAlign? }', "rgba(0,0,0,.12) / 16px"], ['zIndex', 'number', '9'], ['fullscreen', 'boolean', 'false']],
    },
    {
        id: 'splitter', title: 'Splitter 分隔面板', icon: '◫', group: '布局组件', eyebrow: 'LAYOUT', badge: 'Splitter', description: '可拖拽调整的多面板布局，支持水平 / 垂直、最小最大尺寸、折叠、禁止调整与延迟应用。',
        examples: [{ title: '水平三栏与垂直两栏', preview: vnode(SplitterDemo, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Splitter, SplitterPanel } from "atelier-ui-vue/splitter";
export const Workbench = defineComponent({
    "name": "Workbench",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Fragment, null, [
            vnode(Splitter, {
                "style": { height: 240 },
                "onResizeEnd": (sizes: number[]) => console.log(sizes)
            }, {
                "default": () => [
                    vnode(SplitterPanel, {
                        "defaultSize": "30%",
                        "min": "18%",
                        "max": "50%",
                        "collapsible": true
                    }, {
                        "default": () => [
                            "\u5BFC\u822A"
                        ]
                    }),
                    vnode(SplitterPanel, {}, {
                        "default": () => [
                            "\u5185\u5BB9\u533A"
                        ]
                    }),
                    vnode(SplitterPanel, {
                        "defaultSize": 200,
                        "resizable": false
                    }, {
                        "default": () => [
                            "\u5C5E\u6027\u9762\u677F"
                        ]
                    })
                ]
            }),
            vnode(Splitter, {
                "layout": "vertical",
                "style": { height: 260 },
                "lazy": true
            }, {
                "default": () => [
                    vnode(SplitterPanel, {
                        "defaultSize": "40%",
                        "min": 60
                    }, {
                        "default": () => [
                            "\u7F16\u8F91\u5668"
                        ]
                    }),
                    vnode(SplitterPanel, {
                        "collapsible": true
                    }, {
                        "default": () => [
                            "\u63A7\u5236\u53F0"
                        ]
                    })
                ]
            })
        ]));
    }
});
` }],
        rows: [['layout', "'horizontal' | 'vertical'", "'horizontal'"], ['lazy', 'boolean', 'false'], ['onResizeStart / onResize / onResizeEnd', '(sizes: number[]) => void', '—'], ['Panel.size / defaultSize', 'number | string（px 或 %）', '平均分配'], ['Panel.min / max', 'number | string', '—'], ['Panel.resizable', 'boolean', 'true'], ['Panel.collapsible', "boolean | { start?, end? }", 'false']],
    },
];
export function isDataDisplayPageId(id: string): id is DataDisplayPageId {
    return dataDisplayPages.some((item: DataDisplayPageMeta) => item.id === id);
}
