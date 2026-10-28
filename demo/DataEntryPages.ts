import { defineComponent, shallowRef as vueRef, computed, Fragment } from 'vue';
import type { VNodeChild } from 'vue';
import { refSetter, vnode, demoEffect } from './demo-runtime';
import type { SelectValue, MentionOption, TransferDirection, TreeSelectValue } from '../src';
import { AutoComplete, Cascader, ColorPicker, InputNumber, Mentions, Rate, Segmented, Select, Slider, TimePicker, Transfer, TreeSelect, type AutoCompleteOption, type CascaderOption, type SelectOption, type TransferItem, type TreeSelectNode, } from '../src';
import { ApiTable, ExampleCard, PageHeading } from './shared';
export type DataEntryPageId = 'select' | 'autoComplete' | 'inputNumber' | 'rate' | 'slider' | 'segmented' | 'timePicker' | 'colorPicker' | 'mentions' | 'cascader' | 'treeSelect' | 'transfer';
interface Example {
    title: string;
    description?: string;
    code: string;
    preview: VNodeChild;
}
interface DataEntryPageMeta {
    id: DataEntryPageId;
    title: string;
    icon: string;
    group: string;
    badge: string;
    description: string;
    examples: Example[];
    rows: string[][];
}
export const ControlledSelect = defineComponent({
    "name": "ControlledSelect",
    "props": [],
    "setup": (props, { slots }) => {
        const role = vueRef('frontend');
        const setRole = refSetter(role);
        return () => vnode("div", {
            "class": "input-demo-grid"
        }, [
            vnode(Select, {
                "label": "团队角色",
                "options": roles,
                "modelValue": role.value,
                "onChange": (value: SelectValue) => setRole(value as string),
                "hint": `当前值：${role.value || '未选择'}`,
                "allowClear": true
            }, {}),
            vnode(Select, {
                "label": "禁用状态",
                "options": roles,
                "defaultValue": "pm",
                "disabled": true
            }, {})
        ]);
    }
});
export const MultipleSelect = defineComponent({
    "name": "MultipleSelect",
    "props": [],
    "setup": (props, { slots }) => {
        const selected = vueRef<string[]>(['email', 'in-app']);
        const setSelected = refSetter(selected);
        return () => vnode("div", {
            "class": "input-demo-grid"
        }, [
            vnode(Select, {
                "label": "通知渠道",
                "options": channels,
                "multiple": true,
                "searchable": true,
                "modelValue": selected.value,
                "onChange": (value: SelectValue) => setSelected(value as string[]),
                "placeholder": "选择通知渠道"
            }, {}),
            vnode(Select, {
                "label": "折叠超出的标签",
                "options": channels,
                "multiple": true,
                "defaultValue": ['email', 'in-app', 'slack', 'wecom'],
                "maxTagCount": 2
            }, {})
        ]);
    }
});
export const CustomSelect = defineComponent({
    "name": "CustomSelect",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode("div", {
            "class": "input-demo-grid"
        }, [
            vnode(Select, {
                "label": "分组 + 搜索",
                "options": groupedRoles,
                "searchable": true,
                "placeholder": "搜索角色"
            }, {}),
            vnode(Select, {
                "label": "自定义选项渲染",
                "options": roles,
                "defaultValue": "designer",
                "popupClassName": "demo-select-popup",
                "popupRender": (menu: VNodeChild) => vnode(Fragment, null, [
                    menu,
                    vnode("div", {
                        "class": "at-popup__footer demo-popup-footer"
                    }, [
                        vnode("span", {}, [
                            "找不到合适的角色？"
                        ]),
                        vnode("button", {
                            "type": "button",
                            "onClick": () => window.alert('新建角色')
                        }, [
                            "新建角色"
                        ])
                    ])
                ])
            }, {
                "option": (scope: {
                    option: SelectOption;
                    active: boolean;
                    selected: boolean;
                    query: string;
                }) => ((option: SelectOption, { selected }: { active: boolean; selected: boolean; query: string; }) => vnode("span", {
                    "class": "demo-option"
                }, [
                    vnode("span", {
                        "class": "demo-option__avatar",
                        "aria-hidden": "true"
                    }, [
                        option.label.slice(0, 1)
                    ]),
                    vnode("span", {
                        "class": "demo-option__body"
                    }, [
                        vnode("strong", {}, [
                            option.label
                        ]),
                        option.description && vnode("small", {}, [
                            option.description
                        ])
                    ]),
                    selected && vnode("span", {
                        "class": "demo-option__mark"
                    }, [
                        "✓"
                    ])
                ]))(scope.option, { "active": scope.active, "selected": scope.selected, "query": scope.query })
            })
        ]);
    }
});
export const BasicAutoComplete = defineComponent({
    "name": "BasicAutoComplete",
    "props": [],
    "setup": (props, { slots }) => {
        const value = vueRef('');
        const setValue = refSetter(value);
        return () => vnode("div", {
            "class": "input-demo-grid"
        }, [
            vnode(AutoComplete, {
                "label": "负责人",
                "options": ['林知夏', '陈一川', '周禾', '沈星河'],
                "modelValue": value.value,
                "onChange": setValue,
                "placeholder": "搜索或输入姓名",
                "allowClear": true,
                "hint": value.value ? `当前输入：${value.value}` : '支持键盘 ↑ ↓ 选择，Enter 确认'
            }, {}),
            vnode(AutoComplete, {
                "label": "邮箱后缀补全",
                "options": value.value.includes('@') ? [] : ['gmail.com', 'outlook.com', 'atelier.design'].map((domain: string) => `${value.value || 'name'}@${domain}`),
                "filterOption": false,
                "placeholder": "输入邮箱前缀",
                "onSelect": (selected: string) => setValue(selected)
            }, {})
        ]);
    }
});
export const StyledAutoComplete = defineComponent({
    "name": "StyledAutoComplete",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode("div", {
            "class": "input-demo-grid"
        }, [
            vnode(AutoComplete, {
                "label": "自定义弹层风格",
                "options": members,
                "placeholder": "搜索团队成员",
                "popupClassName": "demo-dark-popup",
                "popupMatchSelectWidth": false,
                "popupStyle": { minWidth: 320 },
                "popupRender": (menu: VNodeChild) => vnode(Fragment, null, [
                    vnode("div", {
                        "class": "demo-dark-popup__title"
                    }, [
                        "团队成员"
                    ]),
                    menu,
                    vnode("div", {
                        "class": "demo-dark-popup__footer"
                    }, [
                        "↑ ↓ 切换 · Enter 选择 · Esc 关闭"
                    ])
                ])
            }, {
                "option": (scope: {
                    option: AutoCompleteOption;
                    active: boolean;
                    query: string;
                }) => ((option: AutoCompleteOption, { active }: { active: boolean; query: string; }) => vnode("span", {
                    "class": `demo-member ${active ? 'demo-member--active' : ''}`
                }, [
                    vnode("span", {
                        "class": "demo-member__avatar"
                    }, [
                        option.value.slice(0, 1)
                    ]),
                    vnode("span", {
                        "class": "demo-member__body"
                    }, [
                        vnode("strong", {}, [
                            option.value
                        ]),
                        vnode("small", {}, [
                            option.description
                        ])
                    ])
                ]))(scope.option, { "active": scope.active, "query": scope.query })
            }),
            vnode(AutoComplete, {
                "label": "不匹配时的提示",
                "options": ['设计评审', '发布计划', '周会纪要'],
                "notFoundContent": "没有找到相关文档",
                "placeholder": "搜索文档",
                "status": "warning",
                "hint": "status=warning 时边框会变为警示色"
            }, {})
        ]);
    }
});
export const BasicInputNumber = defineComponent({
    "name": "BasicInputNumber",
    "props": [],
    "setup": (props, { slots }) => {
        const count = vueRef<number | null>(8);
        const setCount = refSetter(count);
        return () => vnode("div", {
            "class": "input-demo-grid"
        }, [
            vnode(InputNumber, {
                "label": "团队人数",
                "min": 1,
                "max": 100,
                "modelValue": count.value,
                "onChange": setCount,
                "hint": `当前：${count.value ?? '空'} 人`
            }, {}),
            vnode(InputNumber, {
                "label": "预算（万元）",
                "min": 0,
                "step": 0.5,
                "precision": 1,
                "defaultValue": 12.5,
                "controls": "inline"
            }, {
                "prefix": () => "¥"
            }),
            vnode(InputNumber, {
                "label": "折扣",
                "min": 0,
                "max": 100,
                "defaultValue": 85,
                "formatter": (value: number) => `${value}%`,
                "parser": (text: string) => Number(text.replace('%', ''))
            }, {}),
            vnode(InputNumber, {
                "label": "禁用",
                "defaultValue": 3,
                "disabled": true
            }, {})
        ]);
    }
});
export const BasicRate = defineComponent({
    "name": "BasicRate",
    "props": [],
    "setup": (props, { slots }) => {
        const score = vueRef(4);
        const setScore = refSetter(score);
        return () => vnode("div", {
            "class": "component-row component-row--align-end",
            "style": { gap: 36 }
        }, [
            vnode("div", {}, [
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "基础评分 · 当前 ",
                    score.value,
                    " 分"
                ]),
                vnode("br", {}, []),
                vnode(Rate, {
                    "modelValue": score.value,
                    "onChange": setScore
                }, {})
            ]),
            vnode("div", {}, [
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "半星 + 文案"
                ]),
                vnode("br", {}, []),
                vnode(Rate, {
                    "allowHalf": true,
                    "defaultValue": 3.5,
                    "tooltips": ['很差', '较差', '一般', '不错', '很棒']
                }, {})
            ]),
            vnode("div", {}, [
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "只读 / 小尺寸"
                ]),
                vnode("br", {}, []),
                vnode(Rate, {
                    "defaultValue": 5,
                    "disabled": true,
                    "size": "sm",
                    "label": "历史评分",
                    "tooltips": ['1 分', '2 分', '3 分', '4 分', '5 分']
                }, {})
            ]),
            vnode("div", {}, [
                vnode("span", {
                    "class": "demo-hint"
                }, [
                    "自定义字符"
                ]),
                vnode("br", {}, []),
                vnode(Rate, {
                    "defaultValue": 2,
                    "label": "喜爱程度",
                    "tooltips": ['一颗心', '两颗心', '三颗心', '四颗心', '五颗心'],
                    "character": vnode("span", {
                        "style": { fontSize: 24, lineHeight: 1 }
                    }, [
                        "♥"
                    ])
                }, {})
            ])
        ]);
    }
});
export const BasicSlider = defineComponent({
    "name": "BasicSlider",
    "props": [],
    "setup": (props, { slots }) => {
        const opacity = vueRef(72);
        const setOpacity = refSetter(opacity);
        const range = vueRef<[
            number,
            number
        ]>([20, 60]);
        const setRange = refSetter(range);
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 28, maxWidth: 520 }
        }, [
            vnode(Slider, {
                "label": "透明度",
                "showValue": true,
                "modelValue": opacity.value,
                "onChange": setOpacity,
                "tooltipFormatter": (value: number) => `${value}%`
            }, {}),
            vnode(Slider, {
                "label": "预算区间",
                "showValue": true,
                "range": true,
                "modelValue": range.value,
                "onChange": setRange,
                "min": 0,
                "max": 100,
                "step": 5
            }, {}),
            vnode(Slider, {
                "label": "满意度",
                "marks": { 0: '很差', 25: '较差', 50: '一般', 75: '不错', 100: '很棒' },
                "step": null,
                "defaultValue": 75,
                "tooltip": "none"
            }, {}),
            vnode(Slider, {
                "label": "禁用",
                "defaultValue": 40,
                "disabled": true
            }, {})
        ]);
    }
});
export const BasicSegmented = defineComponent({
    "name": "BasicSegmented",
    "props": [],
    "setup": (props, { slots }) => {
        const view = vueRef<'list' | 'board' | 'calendar'>('list');
        const setView = refSetter(view);
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 18, justifyItems: 'start' }
        }, [
            vnode(Segmented, {
                "options": [{ label: '列表', value: 'list' }, { label: '看板', value: 'board' }, { label: '日历', value: 'calendar' }],
                "modelValue": view.value,
                "onChange": setView
            }, {}),
            vnode(Segmented, {
                "options": [{ label: '周', value: 'week', icon: '▤' }, { label: '月', value: 'month', icon: '▦' }, { label: '季度', value: 'quarter', icon: '▧', disabled: true }],
                "defaultValue": "month",
                "size": "sm",
                "shape": "round"
            }, {}),
            vnode(Segmented, {
                "options": ['全部', '进行中', '已完成'],
                "block": true,
                "style": { width: 360 },
                "size": "lg"
            }, {}),
            vnode("span", {
                "class": "demo-hint"
            }, [
                "当前视图：",
                view.value
            ])
        ]);
    }
});
export const BasicTimePicker = defineComponent({
    "name": "BasicTimePicker",
    "props": [],
    "setup": (props, { slots }) => {
        const time = vueRef<string | null>('14:30');
        const setTime = refSetter(time);
        return () => vnode("div", {
            "class": "input-demo-grid"
        }, [
            vnode(TimePicker, {
                "label": "会议时间",
                "modelValue": time.value,
                "onChange": setTime,
                "minTime": "09:00",
                "maxTime": "18:00",
                "hint": time.value ? `已选择 ${time.value}` : '09:00 – 18:00 之间'
            }, {}),
            vnode(TimePicker, {
                "label": "精确到秒",
                "format": "HH:mm:ss",
                "defaultValue": "08:15:30",
                "secondStep": 15
            }, {}),
            vnode(TimePicker, {
                "label": "15 分钟间隔",
                "minuteStep": 15,
                "placeholder": "选择时段",
                "showNow": false
            }, {}),
            vnode(TimePicker, {
                "label": "禁用",
                "defaultValue": "10:00",
                "disabled": true
            }, {})
        ]);
    }
});
export const BasicColorPicker = defineComponent({
    "name": "BasicColorPicker",
    "props": [],
    "setup": (props, { slots }) => {
        const color = vueRef('#685cf6');
        const setColor = refSetter(color);
        return () => vnode("div", {
            "class": "input-demo-grid"
        }, [
            vnode(ColorPicker, {
                "label": "品牌主色",
                "modelValue": color.value,
                "onChange": setColor,
                "presets": ['#685cf6', '#2f9472', '#c98a29', '#d94d64', '#222438', '#9298aa'],
                "hint": `当前：${color.value}`
            }, {}),
            vnode(ColorPicker, {
                "label": "带透明度 · RGB",
                "defaultValue": "#2f947299",
                "showAlpha": true,
                "format": "rgb"
            }, {}),
            vnode("div", {
                "class": "component-row component-row--align-end"
            }, [
                vnode(ColorPicker, {
                    "label": "仅色块",
                    "defaultValue": "#c98a29",
                    "showText": false
                }, {}),
                vnode(ColorPicker, {
                    "label": "可清除",
                    "defaultValue": "#d94d64",
                    "allowClear": true,
                    "size": "sm"
                }, {})
            ]),
            vnode("div", {
                "class": "at-field"
            }, [
                vnode("span", {
                    "class": "at-field__label"
                }, [
                    "实时预览"
                ]),
                vnode("div", {
                    "class": "demo-color-preview",
                    "style": { background: color.value },
                    "aria-hidden": "true"
                }, [])
            ])
        ]);
    }
});
export const BasicMentions = defineComponent({
    "name": "BasicMentions",
    "props": [],
    "setup": (props, { slots }) => {
        const text = vueRef('@林知夏 请确认设计稿');
        const setText = refSetter(text);
        return () => vnode("div", {
            "class": "textarea-demo demo-stack",
            "style": { display: 'grid', gap: 18 }
        }, [
            vnode(Mentions, {
                "label": "项目留言",
                "options": members.map((member: AutoCompleteOption) => ({ value: member.value, description: member.description })),
                "modelValue": text.value,
                "onChange": setText,
                "autoSize": { minRows: 3, maxRows: 6 },
                "hint": "输入 @ 选择成员"
            }, {}),
            vnode(Mentions, {
                "label": "多种触发符",
                "options": ['林知夏', '陈一川', '周禾'],
                "placeholder": "@ 提及成员，# 关联话题",
                "rows": 2,
                "filterOption": (query: string, option: MentionOption) => option.value.includes(query)
            }, {
                "prefix": () => ['@', '#']
            })
        ]);
    }
});
export const BasicCascader = defineComponent({
    "name": "BasicCascader",
    "props": [],
    "setup": (props, { slots }) => {
        const path = vueRef<string[]>(['cn', 'sh', 'xuhui']);
        const setPath = refSetter(path);
        return () => vnode("div", {
            "class": "input-demo-grid"
        }, [
            vnode(Cascader, {
                "label": "所在地区",
                "options": regions,
                "modelValue": path.value,
                "onChange": setPath,
                "hint": `已选：${path.value.join(' / ') || '无'}`
            }, {}),
            vnode(Cascader, {
                "label": "悬停展开 + 搜索",
                "options": regions,
                "expandTrigger": "hover",
                "showSearch": true,
                "placeholder": "搜索城市或区县"
            }, {}),
            vnode(Cascader, {
                "label": "允许选择任意一级",
                "options": regions,
                "changeOnSelect": true,
                "defaultValue": ['cn', 'hz']
            }, {
                "display": (scope: {
                    labels: string[];
                }) => ((labels: string[]) => labels.join(' › '))(scope.labels)
            }),
            vnode(Cascader, {
                "label": "禁用",
                "options": regions,
                "defaultValue": ['sg', 'central'],
                "disabled": true
            }, {})
        ]);
    }
});
export const BasicTreeSelect = defineComponent({
    "name": "BasicTreeSelect",
    "props": [],
    "setup": (props, { slots }) => {
        const team = vueRef('web');
        const setTeam = refSetter(team);
        const checked = vueRef<string[]>(['ux']);
        const setChecked = refSetter(checked);
        return () => vnode("div", {
            "class": "input-demo-grid"
        }, [
            vnode(TreeSelect, {
                "label": "所属团队",
                "treeData": teams,
                "modelValue": team.value,
                "onChange": (value: TreeSelectValue) => setTeam(value as string),
                "showSearch": true,
                "hint": `当前：${team.value}`
            }, {}),
            vnode(TreeSelect, {
                "label": "多选可勾选",
                "treeData": teams,
                "treeCheckable": true,
                "modelValue": checked.value,
                "onChange": (value: TreeSelectValue) => setChecked(value as string[]),
                "treeDefaultExpandAll": true,
                "placeholder": "选择参与团队"
            }, {}),
            vnode(TreeSelect, {
                "label": "默认展开指定节点",
                "treeData": teams,
                "treeDefaultExpandedKeys": ['engineering'],
                "placeholder": "请选择团队",
                "size": "sm"
            }, {}),
            vnode(TreeSelect, {
                "label": "禁用",
                "treeData": teams,
                "defaultValue": "brand",
                "disabled": true
            }, {})
        ]);
    }
});
export const BasicTransfer = defineComponent({
    "name": "BasicTransfer",
    "props": [],
    "setup": (props, { slots }) => {
        const targets = vueRef<string[]>(['lin']);
        const setTargets = refSetter(targets);
        return () => vnode("div", {
            "class": "demo-stack",
            "style": { display: 'grid', gap: 24 }
        }, [
            vnode(Transfer, {
                "dataSource": transferMembers,
                "targetKeys": targets.value,
                "onChange": (keys: string[], direction: TransferDirection, moved: string[]) => { setTargets(keys); console.info(direction, moved); },
                "titles": ['可选成员', '项目成员']
            }, {}),
            vnode(Transfer, {
                "dataSource": transferMembers,
                "defaultTargetKeys": ['chen', 'zhou'],
                "showSearch": true,
                "oneWay": true,
                "titles": ['成员库', '已加入'],
                "operations": ['加入项目', '移出项目']
            }, {
                "item": (scope: {
                    item: TransferItem;
                }) => ((item: TransferItem) => vnode("span", {}, [
                    item.title,
                    vnode("span", {
                        "class": "demo-hint"
                    }, [
                        " · ",
                        item.description ?? '未分组'
                    ])
                ]))(scope.item),
                "footer": (scope: {
                    direction: TransferDirection;
                    total: number;
                    selected: number;
                }) => ((direction: TransferDirection, info: { total: number; selected: number; }) => `${direction === 'left' ? '可选' : '已选'} ${info.total} 人`)(scope.direction, scope)
            })
        ]);
    }
});
export const DataEntryPage = defineComponent({
    "name": "DataEntryPage",
    "props": [
        "id"
    ],
    "setup": (props, { slots }) => {
        const { id } = props;
        const page = dataEntryPages.find((item: DataEntryPageMeta) => item.id === id);
        if (!page)
            return () => null;
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "DATA ENTRY",
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
const roles: SelectOption[] = [
    { label: '产品设计师', value: 'designer', description: '负责界面与体验' },
    { label: '前端工程师', value: 'frontend', description: '负责组件与页面实现' },
    { label: '后端工程师', value: 'backend' },
    { label: '产品经理', value: 'pm' },
    { label: '访客（只读）', value: 'guest', disabled: true },
];
const channels: SelectOption[] = [{ label: '邮件通知', value: 'email' }, { label: '站内消息', value: 'in-app' }, { label: 'Slack', value: 'slack' }, { label: '企业微信', value: 'wecom' }, { label: '短信', value: 'sms' }];
const groupedRoles = [
    { label: '设计', options: [{ label: '产品设计师', value: 'designer' }, { label: '品牌设计师', value: 'brand' }] },
    { label: '研发', options: [{ label: '前端工程师', value: 'frontend' }, { label: '后端工程师', value: 'backend' }, { label: '测试工程师', value: 'qa' }] },
];
const members: AutoCompleteOption[] = [
    { value: '林知夏', description: 'lin@atelier.design · 设计' },
    { value: '陈一川', description: 'chen@atelier.design · 前端' },
    { value: '周禾', description: 'zhou@atelier.design · 产品' },
    { value: '沈星河', description: 'shen@atelier.design · 后端' },
];
const regions: CascaderOption[] = [
    { label: '中国', value: 'cn', children: [
            { label: '上海', value: 'sh', children: [{ label: '徐汇区', value: 'xuhui' }, { label: '长宁区', value: 'changning' }, { label: '浦东新区', value: 'pudong' }] },
            { label: '杭州', value: 'hz', children: [{ label: '西湖区', value: 'xihu' }, { label: '余杭区', value: 'yuhang' }] },
            { label: '成都', value: 'cd', disabled: true },
        ] },
    { label: '新加坡', value: 'sg', children: [{ label: '中央区', value: 'central' }] },
];
const teams: TreeSelectNode[] = [
    { label: '设计部', value: 'design', children: [{ label: '品牌组', value: 'brand' }, { label: '体验组', value: 'ux' }] },
    { label: '工程部', value: 'engineering', children: [
            { label: '前端组', value: 'frontend', children: [{ label: 'Web 小组', value: 'web' }, { label: '移动端小组', value: 'mobile' }] },
            { label: '后端组', value: 'backend' },
        ] },
    { label: '市场部', value: 'marketing', disabled: true },
];
const transferMembers: TransferItem[] = [
    { key: 'lin', title: '林知夏', description: '设计' },
    { key: 'chen', title: '陈一川', description: '前端' },
    { key: 'zhou', title: '周禾', description: '产品' },
    { key: 'shen', title: '沈星河', description: '后端' },
    { key: 'guest', title: '访客账号', disabled: true },
];
export const dataEntryPages: DataEntryPageMeta[] = [
    {
        id: 'select', title: 'Select 选择器', icon: '⌄', group: '数据录入', badge: 'Select', description: '自绘的下拉选择器，支持搜索、多选、分组、自定义选项与弹层内容。',
        examples: [
            { title: '基础用法', description: '受控与非受控、清除与禁用。', preview: vnode(ControlledSelect, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { SelectValue } from 'atelier-ui-vue';
import { Select } from "atelier-ui-vue/select";
export const RolePicker = defineComponent({
    "name": "RolePicker",
    "props": [],
    "setup": (props, { slots }) => {
        const role = vueRef('frontend');
        const setRole = refSetter(role);
        return () => (vnode(Fragment, null, [
            vnode(Select, {
                "label": "\u56E2\u961F\u89D2\u8272",
                "options": roles,
                "modelValue": role.value,
                "onChange": (value: SelectValue) => setRole(value as string),
                "allowClear": true
            }, {}),
            vnode(Select, {
                "label": "\u7981\u7528\u72B6\u6001",
                "options": roles,
                "defaultValue": "pm",
                "disabled": true
            }, {})
        ]));
    }
});
const roles = [
    { label: '\u4EA7\u54C1\u8BBE\u8BA1\u5E08', value: 'designer', description: '\u8D1F\u8D23\u754C\u9762\u4E0E\u4F53\u9A8C' },
    { label: '\u524D\u7AEF\u5DE5\u7A0B\u5E08', value: 'frontend' },
    { label: '\u4EA7\u54C1\u7ECF\u7406', value: 'pm' },
    { label: '\u8BBF\u5BA2\uFF08\u53EA\u8BFB\uFF09', value: 'guest', disabled: true },
];
` },
            { title: '多选与标签折叠', description: '多选以标签呈现，可配合搜索与 maxTagCount。', preview: vnode(MultipleSelect, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { SelectValue } from 'atelier-ui-vue';
import { Select } from "atelier-ui-vue/select";
export const ChannelPicker = defineComponent({
    "name": "ChannelPicker",
    "props": [],
    "setup": (props, { slots }) => {
        const selected = vueRef<string[]>(['email', 'in-app']);
        const setSelected = refSetter(selected);
        return () => (vnode(Fragment, null, [
            vnode(Select, {
                "label": "\u901A\u77E5\u6E20\u9053",
                "options": channels,
                "multiple": true,
                "searchable": true,
                "modelValue": selected.value,
                "onChange": (value: SelectValue) => setSelected(value as string[])
            }, {}),
            vnode(Select, {
                "label": "\u6298\u53E0\u8D85\u51FA\u7684\u6807\u7B7E",
                "options": channels,
                "multiple": true,
                "defaultValue": ['email', 'in-app', 'slack'],
                "maxTagCount": 2
            }, {})
        ]));
    }
});
const channels = [
    { label: '\u90AE\u4EF6\u901A\u77E5', value: 'email' },
    { label: '\u7AD9\u5185\u6D88\u606F', value: 'in-app' },
    { label: 'Slack', value: 'slack' },
    { label: '\u4F01\u4E1A\u5FAE\u4FE1', value: 'wecom' },
];
` },
            { title: '分组、自定义选项与弹层', description: '通过 optionRender 与 popupRender 定制下拉内容。', preview: vnode(CustomSelect, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { SelectOption } from 'atelier-ui-vue';
import { Select } from "atelier-ui-vue/select";
export const GroupedRoles = defineComponent({
    "name": "GroupedRoles",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Fragment, null, [
            vnode(Select, {
                "label": "\u5206\u7EC4 + \u641C\u7D22",
                "options": grouped,
                "searchable": true
            }, {}),
            vnode(Select, {
                "label": "\u81EA\u5B9A\u4E49\u9009\u9879\u6E32\u67D3",
                "options": grouped[1].options,
                "popupRender": (menu: VNodeChild) => (vnode(Fragment, null, [
                    menu,
                    vnode("div", {
                        "class": "at-popup__footer"
                    }, [
                        vnode("button", {
                            "type": "button"
                        }, [
                            "\u65B0\u5EFA\u89D2\u8272"
                        ])
                    ])
                ]))
            }, {
                "option": (scope: {
                    option: SelectOption;
                    active: boolean;
                    selected: boolean;
                    query: string;
                }) => ((option: SelectOption, { selected }: { active: boolean; selected: boolean; query: string; }) => (vnode("span", {
                    "class": "option"
                }, [
                    vnode("strong", {}, [
                        option.label
                    ]),
                    selected && vnode("span", {}, [
                        "\u2713"
                    ])
                ])))(scope.option, { "active": scope.active, "selected": scope.selected, "query": scope.query })
            })
        ]));
    }
});
const grouped = [
    { label: '\u8BBE\u8BA1', options: [{ label: '\u4EA7\u54C1\u8BBE\u8BA1\u5E08', value: 'designer' }, { label: '\u54C1\u724C\u8BBE\u8BA1\u5E08', value: 'brand' }] },
    { label: '\u7814\u53D1', options: [{ label: '\u524D\u7AEF\u5DE5\u7A0B\u5E08', value: 'frontend' }, { label: '\u540E\u7AEF\u5DE5\u7A0B\u5E08', value: 'backend' }] },
];
` },
        ],
        rows: [['options', 'Array<SelectOption | SelectOptionGroup>', 'required'], ['value / defaultValue', 'string | string[]', '—'], ['onChange', '(value, option) => void', '—'], ['multiple / searchable', 'boolean', 'false'], ['allowClear', 'boolean', 'false'], ['maxTagCount', 'number', '—'], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['status', "'error' | 'warning'", '—'], ['label / hint / error', 'string', '—'], ['placeholder', 'string', "'请选择…'"], ['notFoundContent', "VNodeChild / slot", "'暂无匹配选项'"], ['open / onOpenChange', 'boolean / (open) => void', '—'], ['placement', 'PopupPlacement', "'bottom-start'"], ['popupClassName / popupStyle', 'string / CSSProperties', '—'], ['popupMatchSelectWidth', 'boolean', 'true'], ['popupRender', '(menu) => VNodeChild', '—'], ['optionRender', '(option, { active, selected, query }) => VNodeChild', '—'], ['labelRender', '(option) => VNodeChild', '—']],
    },
    {
        id: 'autoComplete', title: 'AutoComplete 自动完成', icon: '⌕', group: '数据录入', badge: 'AutoComplete', description: '输入时提供匹配建议，弹层完全自绘，可自由定制风格与内容。',
        examples: [
            { title: '基础用法', description: '本地过滤、关键字高亮与键盘导航。', preview: vnode(BasicAutoComplete, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { AutoComplete } from "atelier-ui-vue/auto-complete";
export const OwnerSearch = defineComponent({
    "name": "OwnerSearch",
    "props": [],
    "setup": (props, { slots }) => {
        const value = vueRef('');
        const setValue = refSetter(value);
        return () => (vnode(Fragment, null, [
            vnode(AutoComplete, {
                "label": "\u8D1F\u8D23\u4EBA",
                "options": ['\u6797\u77E5\u590F', '\u9648\u4E00\u5DDD', '\u5468\u79BE'],
                "modelValue": value.value,
                "onChange": setValue,
                "allowClear": true,
                "placeholder": "\u641C\u7D22\u6216\u8F93\u5165\u59D3\u540D"
            }, {}),
            vnode(AutoComplete, {
                "label": "\u90AE\u7BB1\u540E\u7F00\u8865\u5168",
                "filterOption": false,
                "options": value.value.includes('@') ? [] : ['gmail.com', 'outlook.com'].map((domain: string) => \`\${value.value || 'name'}@\${domain}\`),
                "onSelect": (selected: string) => setValue(selected)
            }, {})
        ]));
    }
});
` },
            { title: '自定义弹层风格', description: 'popupClassName、popupStyle、optionRender 与 popupRender 组合出完全不同的视觉。', preview: vnode(StyledAutoComplete, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { AutoCompleteOption } from 'atelier-ui-vue';
import { AutoComplete } from "atelier-ui-vue/auto-complete";
export const MemberSearch = defineComponent({
    "name": "MemberSearch",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(AutoComplete, {
            "label": "\u641C\u7D22\u56E2\u961F\u6210\u5458",
            "options": members,
            "popupClassName": "member-popup",
            "popupMatchSelectWidth": false,
            "popupStyle": { minWidth: 320 },
            "popupRender": (menu: VNodeChild) => (vnode(Fragment, null, [
                vnode("div", {
                    "class": "member-popup__title"
                }, [
                    "\u56E2\u961F\u6210\u5458"
                ]),
                menu,
                vnode("div", {
                    "class": "member-popup__footer"
                }, [
                    "\u2191 \u2193 \u5207\u6362 \u00B7 Enter \u9009\u62E9"
                ])
            ]))
        }, {
            "option": (scope: {
                option: AutoCompleteOption;
                active: boolean;
                query: string;
            }) => ((option: AutoCompleteOption, { active }: { active: boolean; query: string; }) => (vnode("span", {
                "class": active ? 'member member--active' : 'member'
            }, [
                vnode("span", {
                    "class": "member__avatar"
                }, [
                    option.value.slice(0, 1)
                ]),
                vnode("span", {}, [
                    vnode("strong", {}, [
                        option.value
                    ]),
                    vnode("small", {}, [
                        option.description
                    ])
                ])
            ])))(scope.option, { "active": scope.active, "query": scope.query })
        }));
    }
});
const members = [
    { value: '\u6797\u77E5\u590F', description: 'lin@atelier.design \u00B7 \u8BBE\u8BA1' },
    { value: '\u9648\u4E00\u5DDD', description: 'chen@atelier.design \u00B7 \u524D\u7AEF' },
];
` },
        ],
        rows: [['options', 'Array<string | AutoCompleteOption>', 'required'], ['value / defaultValue', 'string', "— / ''"], ['onChange', '(value: string) => void', '—'], ['onSelect', '(value, option) => void', '—'], ['onSearch', '(query) => void', '—'], ['filterOption', 'boolean | (query, option) => boolean', 'true'], ['highlight', 'boolean', 'true'], ['allowClear', 'boolean', 'false'], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['status', "'error' | 'warning'", '—'], ['label / hint / error', 'string', '—'], ['prefix / suffix', "VNodeChild / slot", '—'], ['notFoundContent', "VNodeChild / slot", 'null'], ['open / defaultOpen / onOpenChange', 'boolean / boolean / (open) => void', '—'], ['placement', 'PopupPlacement', "'bottom-start'"], ['popupClassName / popupStyle', 'string / CSSProperties', '—'], ['popupMatchSelectWidth', 'boolean', 'true'], ['popupRender', '(menu) => VNodeChild', '—'], ['optionRender', '(option, { active, query }) => VNodeChild', '—']],
    },
    {
        id: 'inputNumber', title: 'InputNumber 数字输入框', icon: '#', group: '数据录入', badge: 'InputNumber', description: '按范围、步长与精度录入数值，支持长按步进、键盘调节与格式化显示。',
        examples: [
            { title: '基础用法', description: '受控数值、精度、前缀、格式化与禁用。', preview: vnode(BasicInputNumber, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { InputNumber } from "atelier-ui-vue/input-number";
export const TeamCapacity = defineComponent({
    "name": "TeamCapacity",
    "props": [],
    "setup": (props, { slots }) => {
        const count = vueRef<number | null>(8);
        const setCount = refSetter(count);
        return () => (vnode(Fragment, null, [
            vnode(InputNumber, {
                "label": "\u56E2\u961F\u4EBA\u6570",
                "min": 1,
                "max": 100,
                "modelValue": count.value,
                "onChange": setCount
            }, {}),
            vnode(InputNumber, {
                "label": "\u9884\u7B97\uFF08\u4E07\u5143\uFF09",
                "min": 0,
                "step": 0.5,
                "precision": 1,
                "defaultValue": 12.5,
                "controls": "inline"
            }, {
                "prefix": () => "\u00A5"
            }),
            vnode(InputNumber, {
                "label": "\u6298\u6263",
                "min": 0,
                "max": 100,
                "defaultValue": 85,
                "formatter": (value: number) => \`\${value}%\`,
                "parser": (text: string) => Number(text.replace('%', ''))
            }, {})
        ]));
    }
});
` },
        ],
        rows: [['value / defaultValue', 'number | null', '— / null'], ['onChange', '(value: number | null) => void', '—'], ['min / max', 'number', '-∞ / ∞'], ['step', 'number', '1'], ['precision', 'number', '由 step 推断'], ['controls', "boolean | 'stacked' | 'inline'", "'stacked'"], ['keyboard', 'boolean', 'true'], ['formatter / parser', '(value) => string / (text) => number | null', '—'], ['prefix / suffix', "VNodeChild / slot", '—'], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['status', "'error' | 'warning'", '—'], ['label / hint / error', 'string', '—'], ['disabled / readOnly', 'boolean', 'false']],
    },
    {
        id: 'rate', title: 'Rate 评分', icon: '★', group: '数据录入', badge: 'Rate', description: '以星级收集评分，支持半星、文案提示、自定义字符与键盘操作。',
        examples: [
            { title: '基础用法', description: '受控评分、半星、只读与自定义字符。', preview: vnode(BasicRate, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Rate } from "atelier-ui-vue/rate";
export const Satisfaction = defineComponent({
    "name": "Satisfaction",
    "props": [],
    "setup": (props, { slots }) => {
        const score = vueRef(4);
        const setScore = refSetter(score);
        return () => (vnode(Fragment, null, [
            vnode(Rate, {
                "modelValue": score.value,
                "onChange": setScore
            }, {}),
            vnode(Rate, {
                "allowHalf": true,
                "defaultValue": 3.5,
                "tooltips": ['\u5F88\u5DEE', '\u8F83\u5DEE', '\u4E00\u822C', '\u4E0D\u9519', '\u5F88\u68D2']
            }, {}),
            vnode(Rate, {
                "defaultValue": 5,
                "disabled": true,
                "size": "sm"
            }, {}),
            vnode(Rate, {
                "defaultValue": 2,
                "character": vnode("span", {}, [
                    "\u2665"
                ])
            }, {})
        ]));
    }
});
` },
        ],
        rows: [['value / defaultValue', 'number', '— / 0'], ['onChange', '(value: number) => void', '—'], ['onHoverChange', '(value: number | null) => void', '—'], ['count', 'number', '5'], ['allowHalf', 'boolean', 'false'], ['allowClear', 'boolean', 'true'], ['disabled', 'boolean', 'false'], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['character', 'VNodeChild | (index) => VNodeChild', '★'], ['tooltips', 'string[]', '—'], ['label', 'string', "'评分'"]],
    },
    {
        id: 'slider', title: 'Slider 滑动输入条', icon: '━', group: '数据录入', badge: 'Slider', description: '在数值区间内拖动取值，支持双滑块范围、刻度标记、提示气泡与键盘微调。',
        examples: [
            { title: '基础用法', description: '单值、范围、刻度吸附与禁用。', preview: vnode(BasicSlider, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Slider } from "atelier-ui-vue/slider";
export const OpacitySetting = defineComponent({
    "name": "OpacitySetting",
    "props": [],
    "setup": (props, { slots }) => {
        const opacity = vueRef(72);
        const setOpacity = refSetter(opacity);
        const range = vueRef<[
            number,
            number
        ]>([20, 60]);
        const setRange = refSetter(range);
        return () => (vnode(Fragment, null, [
            vnode(Slider, {
                "label": "\u900F\u660E\u5EA6",
                "showValue": true,
                "modelValue": opacity.value,
                "onChange": setOpacity,
                "tooltipFormatter": (value: number) => \`\${value}%\`
            }, {}),
            vnode(Slider, {
                "label": "\u9884\u7B97\u533A\u95F4",
                "showValue": true,
                "range": true,
                "modelValue": range.value,
                "onChange": setRange,
                "step": 5
            }, {}),
            vnode(Slider, {
                "label": "\u6EE1\u610F\u5EA6",
                "marks": { 0: '\u5F88\u5DEE', 50: '\u4E00\u822C', 100: '\u5F88\u68D2' },
                "step": null,
                "defaultValue": 50,
                "tooltip": "none"
            }, {})
        ]));
    }
});
` },
        ],
        rows: [['value / defaultValue', 'number | [number, number]', '— / min'], ['onChange', '(value) => void', '—'], ['onChangeComplete', '(value) => void', '—'], ['min / max', 'number', '0 / 100'], ['step', 'number | null', '1'], ['range', 'boolean', 'false'], ['marks', 'Record<number, VNodeChild | { label, style }>', '—'], ['tooltip', "'auto' | 'always' | 'none'", "'auto'"], ['tooltipFormatter', '(value) => VNodeChild', '—'], ['vertical', 'boolean', 'false'], ['showValue', 'boolean', 'false'], ['included', 'boolean', 'true'], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['disabled', 'boolean', 'false']],
    },
    {
        id: 'segmented', title: 'Segmented 分段控制器', icon: '◧', group: '数据录入', badge: 'Segmented', description: '在少量互斥选项间切换，带平滑滑动的指示块与方向键导航。',
        examples: [
            { title: '基础用法', description: '受控切换、图标、尺寸、圆角与通栏布局。', preview: vnode(BasicSegmented, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Segmented } from "atelier-ui-vue/segmented";
export const ViewSwitch = defineComponent({
    "name": "ViewSwitch",
    "props": [],
    "setup": (props, { slots }) => {
        const view = vueRef<'list' | 'board' | 'calendar'>('list');
        const setView = refSetter(view);
        return () => (vnode(Fragment, null, [
            vnode(Segmented, {
                "options": [{ label: '\u5217\u8868', value: 'list' }, { label: '\u770B\u677F', value: 'board' }, { label: '\u65E5\u5386', value: 'calendar' }],
                "modelValue": view.value,
                "onChange": setView
            }, {}),
            vnode(Segmented, {
                "options": [{ label: '\u5468', value: 'week', icon: '\u25A4' }, { label: '\u6708', value: 'month', icon: '\u25A6' }],
                "defaultValue": "month",
                "size": "sm",
                "shape": "round"
            }, {}),
            vnode(Segmented, {
                "options": ['\u5168\u90E8', '\u8FDB\u884C\u4E2D', '\u5DF2\u5B8C\u6210'],
                "block": true,
                "size": "lg"
            }, {})
        ]));
    }
});
` },
        ],
        rows: [['options', 'Array<string | { label, value, icon?, disabled? }>', 'required'], ['value / defaultValue', 'string', '— / 首个可用项'], ['onChange', '(value) => void', '—'], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['block', 'boolean', 'false'], ['vertical', 'boolean', 'false'], ['shape', "'default' | 'round'", "'default'"], ['disabled', 'boolean', 'false'], ['label', 'string', "'视图切换'"]],
    },
    {
        id: 'timePicker', title: 'TimePicker 时间选择', icon: '◷', group: '数据录入', badge: 'TimePicker', description: '通过时 / 分 / 秒滚动列选择时间，支持步长、禁用区间与“此刻”快捷操作。',
        examples: [
            { title: '基础用法', description: '受控值、秒级精度、分钟步长与范围限制。', preview: vnode(BasicTimePicker, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { TimePicker } from "atelier-ui-vue/time-picker";
export const MeetingTime = defineComponent({
    "name": "MeetingTime",
    "props": [],
    "setup": (props, { slots }) => {
        const time = vueRef<string | null>('14:30');
        const setTime = refSetter(time);
        return () => (vnode(Fragment, null, [
            vnode(TimePicker, {
                "label": "\u4F1A\u8BAE\u65F6\u95F4",
                "modelValue": time.value,
                "onChange": setTime,
                "minTime": "09:00",
                "maxTime": "18:00"
            }, {}),
            vnode(TimePicker, {
                "label": "\u7CBE\u786E\u5230\u79D2",
                "format": "HH:mm:ss",
                "defaultValue": "08:15:30",
                "secondStep": 15
            }, {}),
            vnode(TimePicker, {
                "label": "15 \u5206\u949F\u95F4\u9694",
                "minuteStep": 15,
                "showNow": false
            }, {})
        ]));
    }
});
` },
        ],
        rows: [['value / defaultValue', 'string | null', '— / null'], ['onChange', '(value: string | null, parts) => void', '—'], ['format', "'HH:mm' | 'HH:mm:ss'", "'HH:mm'"], ['hourStep / minuteStep / secondStep', 'number', '1'], ['minTime / maxTime', "string ('HH:mm')", '—'], ['disabledHours / disabledMinutes / disabledSeconds', '() => number[] 等', '—'], ['showNow', 'boolean', 'true'], ['allowClear', 'boolean', 'true'], ['placeholder', 'string', "'选择时间'"], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['status', "'error' | 'warning'", '—'], ['label / hint / error', 'string', '—'], ['open / onOpenChange', 'boolean / (open) => void', '—'], ['popupClassName / popupStyle', 'string / CSSProperties', '—']],
    },
    {
        id: 'colorPicker', title: 'ColorPicker 颜色选择器', icon: '◉', group: '数据录入', badge: 'ColorPicker', description: '自绘的 HSV 取色面板，支持透明度、多种格式、预设色板与手动输入。',
        examples: [
            { title: '基础用法', description: '受控颜色、透明度通道、不同输出格式与仅色块模式。', preview: vnode(BasicColorPicker, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { ColorPicker } from "atelier-ui-vue/color-picker";
export const BrandColor = defineComponent({
    "name": "BrandColor",
    "props": [],
    "setup": (props, { slots }) => {
        const color = vueRef('#685cf6');
        const setColor = refSetter(color);
        return () => (vnode(Fragment, null, [
            vnode(ColorPicker, {
                "label": "\u54C1\u724C\u4E3B\u8272",
                "modelValue": color.value,
                "onChange": setColor,
                "presets": ['#685cf6', '#2f9472', '#c98a29', '#d94d64']
            }, {}),
            vnode(ColorPicker, {
                "label": "\u5E26\u900F\u660E\u5EA6 \u00B7 RGB",
                "defaultValue": "#2f947299",
                "showAlpha": true,
                "format": "rgb"
            }, {}),
            vnode(ColorPicker, {
                "label": "\u4EC5\u8272\u5757",
                "defaultValue": "#c98a29",
                "showText": false
            }, {})
        ]));
    }
});
` },
        ],
        rows: [['value / defaultValue', 'string', "— / '#685cf6'"], ['onChange', '(hex, color: ColorValue) => void', '—'], ['onChangeComplete', '(hex, color) => void', '—'], ['format', "'hex' | 'rgb' | 'hsl'", "'hex'"], ['showAlpha', 'boolean', 'false'], ['showText', 'boolean', 'true'], ['presets', 'string[] | Array<{ label, colors }>', '—'], ['allowClear', 'boolean', 'false'], ['disabled', 'boolean', 'false'], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['label / hint / error', 'string', '—'], ['open / onOpenChange', 'boolean / (open) => void', '—'], ['popupClassName / popupStyle', 'string / CSSProperties', '—']],
    },
    {
        id: 'mentions', title: 'Mentions 提及', icon: '@', group: '数据录入', badge: 'Mentions', description: '在多行文本中输入触发符后弹出候选成员，弹层跟随光标位置。',
        examples: [
            { title: '基础用法', description: '自动高度、多触发符与自定义过滤。', preview: vnode(BasicMentions, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Mentions } from "atelier-ui-vue/mentions";
export const TeamNote = defineComponent({
    "name": "TeamNote",
    "props": [],
    "setup": (props, { slots }) => {
        const text = vueRef('@\u6797\u77E5\u590F \u8BF7\u786E\u8BA4\u8BBE\u8BA1\u7A3F');
        const setText = refSetter(text);
        return () => (vnode(Fragment, null, [
            vnode(Mentions, {
                "label": "\u9879\u76EE\u7559\u8A00",
                "options": members,
                "modelValue": text.value,
                "onChange": setText,
                "autoSize": { minRows: 3, maxRows: 6 }
            }, {}),
            vnode(Mentions, {
                "label": "\u591A\u79CD\u89E6\u53D1\u7B26",
                "options": ['\u6797\u77E5\u590F', '\u9648\u4E00\u5DDD'],
                "rows": 2
            }, {
                "prefix": () => ['@', '#']
            })
        ]));
    }
});
const members = [
    { value: '\u6797\u77E5\u590F', description: 'lin@atelier.design \u00B7 \u8BBE\u8BA1' },
    { value: '\u9648\u4E00\u5DDD', description: 'chen@atelier.design \u00B7 \u524D\u7AEF' },
];
` },
        ],
        rows: [['options', 'Array<string | MentionOption>', 'required'], ['value / defaultValue', 'string', "— / ''"], ['onChange', '(value: string) => void', '—'], ['onSelect', '(option, prefix) => void', '—'], ['onSearch', '(query, prefix) => void', '—'], ['prefix', 'string | string[]', "'@'"], ['split', 'string', "' '"], ['filterOption', 'boolean | (query, option) => boolean', 'true'], ['autoSize', 'boolean | { minRows, maxRows }', 'false'], ['rows', 'number', '3'], ['notFoundContent', "VNodeChild / slot", "'没有匹配的成员'"], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['status', "'error' | 'warning'", '—'], ['label / hint / error', 'string', '—'], ['popupClassName / popupStyle', 'string / CSSProperties', '—'], ['optionRender', '(option, { active, query }) => VNodeChild', '—']],
    },
    {
        id: 'cascader', title: 'Cascader 级联选择', icon: '⋯', group: '数据录入', badge: 'Cascader', description: '多列级联面板按层级选择路径，支持悬停展开、任意层级选择与路径搜索。',
        examples: [
            { title: '基础用法', description: '受控路径、悬停展开 + 搜索、任意层级选择与禁用。', preview: vnode(BasicCascader, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Cascader } from "atelier-ui-vue/cascader";
export const RegionPicker = defineComponent({
    "name": "RegionPicker",
    "props": [],
    "setup": (props, { slots }) => {
        const path = vueRef<string[]>(['cn', 'sh', 'xuhui']);
        const setPath = refSetter(path);
        return () => (vnode(Fragment, null, [
            vnode(Cascader, {
                "label": "\u6240\u5728\u5730\u533A",
                "options": regions,
                "modelValue": path.value,
                "onChange": setPath
            }, {}),
            vnode(Cascader, {
                "label": "\u60AC\u505C\u5C55\u5F00 + \u641C\u7D22",
                "options": regions,
                "expandTrigger": "hover",
                "showSearch": true
            }, {}),
            vnode(Cascader, {
                "label": "\u5141\u8BB8\u9009\u62E9\u4EFB\u610F\u4E00\u7EA7",
                "options": regions,
                "changeOnSelect": true
            }, {
                "display": (scope: {
                    labels: string[];
                }) => ((labels: string[]) => labels.join(' \u203A '))(scope.labels)
            })
        ]));
    }
});
const regions = [
    { label: '\u4E2D\u56FD', value: 'cn', children: [
            { label: '\u4E0A\u6D77', value: 'sh', children: [{ label: '\u5F90\u6C47\u533A', value: 'xuhui' }, { label: '\u6D66\u4E1C\u65B0\u533A', value: 'pudong' }] },
            { label: '\u676D\u5DDE', value: 'hz', children: [{ label: '\u897F\u6E56\u533A', value: 'xihu' }] },
        ] },
];
` },
        ],
        rows: [['options', 'CascaderOption[]', 'required'], ['value / defaultValue', 'string[]', '— / []'], ['onChange', '(path, selectedOptions) => void', '—'], ['expandTrigger', "'click' | 'hover'", "'click'"], ['changeOnSelect', 'boolean', 'false'], ['showSearch', 'boolean', 'false'], ['displayRender', '(labels, selectedOptions) => VNodeChild', "labels.join(' / ')"], ['allowClear', 'boolean', 'true'], ['notFoundContent', "VNodeChild / slot", "'暂无匹配选项'"], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['status', "'error' | 'warning'", '—'], ['label / hint / error', 'string', '—'], ['disabled', 'boolean', 'false'], ['open / onOpenChange', 'boolean / (open) => void', '—'], ['popupClassName / popupStyle', 'string / CSSProperties', '—']],
    },
    {
        id: 'treeSelect', title: 'TreeSelect 树选择', icon: '⌥', group: '数据录入', badge: 'TreeSelect', description: '以树形面板从层级数据中选择，支持搜索、单选 / 多选与级联勾选。',
        examples: [
            { title: '基础用法', description: '单选搜索、可勾选多选、默认展开与禁用。', preview: vnode(BasicTreeSelect, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { TreeSelectValue } from 'atelier-ui-vue';
import { TreeSelect } from "atelier-ui-vue/tree-select";
export const TeamSelect = defineComponent({
    "name": "TeamSelect",
    "props": [],
    "setup": (props, { slots }) => {
        const team = vueRef('web');
        const setTeam = refSetter(team);
        const checked = vueRef<string[]>(['ux']);
        const setChecked = refSetter(checked);
        return () => (vnode(Fragment, null, [
            vnode(TreeSelect, {
                "label": "\u6240\u5C5E\u56E2\u961F",
                "treeData": teams,
                "modelValue": team.value,
                "onChange": (value: TreeSelectValue) => setTeam(value as string),
                "showSearch": true
            }, {}),
            vnode(TreeSelect, {
                "label": "\u591A\u9009\u53EF\u52FE\u9009",
                "treeData": teams,
                "treeCheckable": true,
                "modelValue": checked.value,
                "onChange": (value: TreeSelectValue) => setChecked(value as string[]),
                "treeDefaultExpandAll": true
            }, {})
        ]));
    }
});
const teams = [
    { label: '\u8BBE\u8BA1\u90E8', value: 'design', children: [{ label: '\u54C1\u724C\u7EC4', value: 'brand' }, { label: '\u4F53\u9A8C\u7EC4', value: 'ux' }] },
    { label: '\u5DE5\u7A0B\u90E8', value: 'engineering', children: [
            { label: '\u524D\u7AEF\u7EC4', value: 'frontend', children: [{ label: 'Web \u5C0F\u7EC4', value: 'web' }] },
            { label: '\u540E\u7AEF\u7EC4', value: 'backend' },
        ] },
];
` },
        ],
        rows: [['treeData', 'TreeSelectNode[]', 'required'], ['value / defaultValue', 'string | string[]', '—'], ['onChange', '(value, nodes) => void', '—'], ['multiple', 'boolean', 'false'], ['treeCheckable', 'boolean', 'false'], ['showSearch', 'boolean', 'false'], ['treeDefaultExpandAll', 'boolean', 'false'], ['treeDefaultExpandedKeys', 'string[]', '—'], ['maxTagCount', 'number', '—'], ['allowClear', 'boolean', 'true'], ['notFoundContent', "VNodeChild / slot", "'暂无匹配选项'"], ['size', "'sm' | 'md' | 'lg'", "'md'"], ['status', "'error' | 'warning'", '—'], ['label / hint / error', 'string', '—'], ['disabled', 'boolean', 'false'], ['popupClassName / popupStyle', 'string / CSSProperties', '—'], ['popupMatchSelectWidth', 'boolean', 'true']],
    },
    {
        id: 'transfer', title: 'Transfer 穿梭框', icon: '⇄', group: '数据录入', badge: 'Transfer', description: '在两个列表间批量移动条目，支持全选、搜索、单向模式与自定义渲染。',
        examples: [
            { title: '基础用法', description: '受控目标列表、搜索、单向移除与自定义条目 / 页脚。', preview: vnode(BasicTransfer, {}, {}), code: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { TransferDirection, TransferItem } from 'atelier-ui-vue';
import { Transfer } from "atelier-ui-vue/transfer";
export const MemberTransfer = defineComponent({
    "name": "MemberTransfer",
    "props": [],
    "setup": (props, { slots }) => {
        const targets = vueRef<string[]>(['lin']);
        const setTargets = refSetter(targets);
        return () => (vnode(Fragment, null, [
            vnode(Transfer, {
                "dataSource": members,
                "targetKeys": targets.value,
                "onChange": (keys: string[]) => setTargets(keys),
                "titles": ['\u53EF\u9009\u6210\u5458', '\u9879\u76EE\u6210\u5458']
            }, {}),
            vnode(Transfer, {
                "dataSource": members,
                "defaultTargetKeys": ['chen'],
                "showSearch": true,
                "oneWay": true
            }, {
                "item": (scope: {
                    item: TransferItem;
                }) => ((item: TransferItem) => vnode("span", {}, [
                    item.title,
                    " \u00B7 ",
                    item.description
                ]))(scope.item),
                "footer": (scope: {
                    direction: TransferDirection;
                    total: number;
                    selected: number;
                }) => ((direction: TransferDirection, info: { total: number; selected: number; }) => \`\${direction === 'left' ? '\u53EF\u9009' : '\u5DF2\u9009'} \${info.total} \u4EBA\`)(scope.direction, scope)
            })
        ]));
    }
});
const members = [
    { key: 'lin', title: '\u6797\u77E5\u590F', description: '\u8BBE\u8BA1' },
    { key: 'chen', title: '\u9648\u4E00\u5DDD', description: '\u524D\u7AEF' },
    { key: 'zhou', title: '\u5468\u79BE', description: '\u4EA7\u54C1' },
    { key: 'guest', title: '\u8BBF\u5BA2\u8D26\u53F7', disabled: true },
];
` },
        ],
        rows: [['dataSource', 'TransferItem[]', 'required'], ['targetKeys / defaultTargetKeys', 'string[]', '— / []'], ['onChange', '(targetKeys, direction, moveKeys) => void', '—'], ['selectedKeys / onSelectChange', 'string[] / (source, target) => void', '—'], ['titles', '[VNodeChild, VNodeChild]', "['可选项目', '已选项目']"], ['operations', '[string, string]', "['移至已选', '移回可选']"], ['showSearch', 'boolean', 'false'], ['filterOption', '(query, item) => boolean', '按标题包含'], ['render', '(item) => VNodeChild', 'item.title'], ['footer', '(direction, { total, selected }) => VNodeChild', '—'], ['showSelectAll', 'boolean', 'true'], ['oneWay', 'boolean', 'false'], ['disabled', 'boolean', 'false'], ['listStyle', 'CSSProperties', '—'], ['notFoundContent', "VNodeChild / slot", "'暂无数据'"]],
    },
];
export function isDataEntryPageId(id: string): id is DataEntryPageId {
    return dataEntryPages.some((item: DataEntryPageMeta) => item.id === id);
}
