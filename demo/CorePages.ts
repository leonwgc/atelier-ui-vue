import { defineComponent, shallowRef as vueRef, computed, Fragment } from 'vue';
import type { VNodeChild } from 'vue';
import { refSetter, vnode, demoEffect } from './demo-runtime';
import type { SelectValue, TableChange, ControllerRenderProps } from '../src';
import { Alert, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, CheckboxGroup, Collapse, Controller, DatePicker, Descriptions, Divider, Drawer, Empty, Input, Modal, Pagination, Progress, RadioGroup, Select, Skeleton, Spin, Steps, Switch, Table, Tabs, Tag, Textarea, Timeline, Tooltip, Upload, useFieldArray, useForm, useWatch, type TableColumn, } from '../src';
import { ApiTable, ExampleCard, PageHeading } from './shared';
type Project = {
    id: string;
    name: string;
    owner: string;
    status: string;
    updated: string;
    members: number;
};
export const FormPage = defineComponent({
    "name": "FormPage",
    "props": [],
    "setup": (props, { slots }) => {
        const form = useForm<{
            workspace: string;
            email: string;
            plan: string;
            updates: boolean;
            members: Array<{
                name: string;
                role: string;
            }>;
        }>({ mode: 'onBlur', defaultValues: { workspace: '', email: '', plan: 'studio', updates: true, members: [{ name: 'Jordan Lee', role: 'Admin' }] } });
        const members = useFieldArray<{
            workspace: string;
            email: string;
            plan: string;
            updates: boolean;
            members: Array<{
                name: string;
                role: string;
            }>;
        }, {
            name: string;
            role: string;
        }>({ control: form.control, name: 'members' });
        const watchedPlan = useWatch({ control: form.control, name: 'plan' });
        const onSubmit = form.handleSubmit(async (values: { workspace: string; email: string; plan: string; updates: boolean; members: Array<{ name: string; role: string; }>; }) => {
            await new Promise((resolve: (value: unknown) => void) => window.setTimeout(resolve, 450));
            window.alert(`已创建工作区：${values.workspace}`);
        });
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "FORM MANAGEMENT",
                "title": "Form Hooks",
                "description": "以 Hooks 管理表单状态、校验与提交。用原生 form 组织界面，让数据流保持清晰。",
                "badge": "Hook-first API"
            }, {}),
            vnode("div", {
                "class": "docs-callout"
            }, [
                vnode("span", {}, [
                    "✦"
                ]),
                vnode("div", {}, [
                    vnode("strong", {}, [
                        "从 useForm 开始"
                    ]),
                    vnode("p", {}, [
                        "字段通过 register 接入；复杂受控组件使用 Controller。字段订阅独立更新，减少不必要的渲染。"
                    ])
                ]),
                vnode("a", {
                    "href": "#form-api"
                }, [
                    "API 说明 ↓"
                ])
            ]),
            vnode(ExampleCard, {
                "title": "创建工作区",
                "description": "结合注册字段、受控 Select、动态成员列表与提交状态。",
                "code": codeSamples.workspaceForm
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "form-preview-layout"
                    }, [
                        vnode("form", {
                            "class": "workspace-form",
                            "onSubmit": (event: Event) => void onSubmit(event),
                            "noValidate": true
                        }, [
                            vnode("div", {
                                "class": "form-preview-heading"
                            }, [
                                vnode("span", {
                                    "class": "form-preview-icon"
                                }, [
                                    "✳"
                                ]),
                                vnode("div", {}, [
                                    vnode("h4", {}, [
                                        "创建你的工作区"
                                    ]),
                                    vnode("p", {}, [
                                        "邀请团队成员，一起开始协作。"
                                    ])
                                ])
                            ]),
                            vnode("div", {
                                "class": "form-fields-grid"
                            }, [
                                vnode(Input, {
                                    "label": "工作区名称",
                                    "placeholder": "例如：Northstar Studio",
                                    "error": form.formState.errors.workspace?.message,
                                    ...form.register('workspace', { required: '请输入工作区名称', minLength: { value: 3, message: '至少输入 3 个字符' } })
                                }, {}),
                                vnode(Input, {
                                    "label": "工作邮箱",
                                    "placeholder": "you@company.com",
                                    "type": "email",
                                    "error": form.formState.errors.email?.message,
                                    ...form.register('email', { required: '请输入工作邮箱', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入有效的邮箱地址' } })
                                }, {})
                            ]),
                            vnode(Controller, {
                                "control": form.control,
                                "name": "plan"
                            }, {
                                "default": ({ field }: ControllerRenderProps<{ workspace: string; email: string; plan: string; updates: boolean; members: Array<{ name: string; role: string; }>; }>) => vnode(Select, {
                                    "label": "选择套餐",
                                    "modelValue": String(field.value ?? ''),
                                    "onChange": (value: SelectValue) => field.onChange(value),
                                    "onBlur": field.onBlur,
                                    "options": [{ label: 'Starter · 个人项目', value: 'starter' }, { label: 'Studio · 成长团队', value: 'studio' }, { label: 'Enterprise · 大型组织', value: 'enterprise' }]
                                }, {})
                            }),
                            vnode("div", {
                                "class": "dynamic-members"
                            }, [
                                vnode("div", {
                                    "class": "dynamic-members__top"
                                }, [
                                    vnode("div", {}, [
                                        vnode("label", {
                                            "class": "at-field__label"
                                        }, [
                                            "团队成员"
                                        ]),
                                        vnode("span", {}, [
                                            "添加一起协作的伙伴"
                                        ])
                                    ]),
                                    vnode(Button, {
                                        "size": "sm",
                                        "onClick": () => members.append({ name: '', role: 'Member' })
                                    }, {
                                        "default": () => [
                                            "＋ 添加成员"
                                        ]
                                    })
                                ]),
                                members.fields.map((member: { name: string; role: string; } & { id: string; }, index: number) => vnode("div", {
                                    "class": "member-row",
                                    "key": member.id
                                }, [
                                    vnode(Input, {
                                        "aria-label": `成员 ${index + 1} 姓名`,
                                        "placeholder": "姓名",
                                        ...form.register(`members.${index}.name`)
                                    }, {}),
                                    vnode(Select, {
                                        "aria-label": `成员 ${index + 1} 角色`,
                                        "options": [{ label: '管理员', value: 'Admin' }, { label: '成员', value: 'Member' }, { label: '访客', value: 'Guest' }],
                                        ...form.register(`members.${index}.role`)
                                    }, {}),
                                    vnode("button", {
                                        "type": "button",
                                        "class": "remove-member",
                                        "aria-label": "移除成员",
                                        "onClick": () => members.remove(index)
                                    }, [
                                        "×"
                                    ])
                                ]))
                            ]),
                            vnode("div", {
                                "class": "form-preview-footer"
                            }, [
                                vnode(Checkbox, {
                                    ...form.register('updates')
                                }, {
                                    "default": () => [
                                        "接收产品更新和团队灵感"
                                    ]
                                }),
                                vnode(Button, {
                                    "type": "submit",
                                    "variant": "primary",
                                    "loading": form.formState.isSubmitting
                                }, {
                                    "default": () => [
                                        "创建工作区 ",
                                        vnode("span", {}, [
                                            "→"
                                        ])
                                    ]
                                })
                            ])
                        ]),
                        vnode("aside", {
                            "class": "form-state-panel"
                        }, [
                            vnode("div", {
                                "class": "state-panel__title"
                            }, [
                                vnode("span", {}, [
                                    "LIVE STATE"
                                ]),
                                vnode("i", {}, [])
                            ]),
                            vnode("div", {
                                "class": "state-row"
                            }, [
                                vnode("span", {}, [
                                    "当前套餐"
                                ]),
                                vnode("b", {}, [
                                    String(watchedPlan.value ?? '—')
                                ])
                            ]),
                            vnode("div", {
                                "class": "state-row"
                            }, [
                                vnode("span", {}, [
                                    "表单状态"
                                ]),
                                vnode("b", {
                                    "class": form.formState.isDirty ? 'state-value--active' : ''
                                }, [
                                    form.formState.isDirty ? '已修改' : '初始状态'
                                ])
                            ]),
                            vnode("div", {
                                "class": "state-row"
                            }, [
                                vnode("span", {}, [
                                    "校验状态"
                                ]),
                                vnode("b", {}, [
                                    form.formState.isValid ? '无错误' : `${Object.keys(form.formState.errors).length} 个错误`
                                ])
                            ]),
                            vnode("div", {
                                "class": "state-json"
                            }, [
                                vnode("span", {}, [
                                    "formState"
                                ]),
                                vnode("code", {}, [
                                    `{\n  isDirty: ${form.formState.isDirty},\n  isSubmitting: ${form.formState.isSubmitting},\n  submitCount: ${form.formState.submitCount}\n}`
                                ])
                            ]),
                            vnode("button", {
                                "type": "button",
                                "class": "reset-link",
                                "onClick": () => form.reset()
                            }, [
                                "↺ 重置所有字段"
                            ])
                        ])
                    ])
                ]
            }),
            vnode("div", {
                "class": "section-heading-row",
                "id": "form-api"
            }, [
                vnode("div", {}, [
                    vnode("div", {
                        "class": "eyebrow"
                    }, [
                        vnode("span", {
                            "class": "eyebrow__dot"
                        }, []),
                        " CORE API"
                    ]),
                    vnode("h2", {}, [
                        "让表单状态有迹可循"
                    ])
                ]),
                vnode("span", {
                    "class": "section-index"
                }, [
                    "01 — 03"
                ])
            ]),
            vnode("div", {
                "class": "api-grid"
            }, [
                vnode(ApiCard, {
                    "title": "useForm",
                    "text": "创建并配置表单实例，返回字段注册、提交处理和状态控制方法。",
                    "tags": ['register', 'handleSubmit', 'reset', 'trigger']
                }, {}),
                vnode(ApiCard, {
                    "title": "Controller",
                    "text": "连接 Select 等受控组件，统一提供 value、onChange、onBlur 与字段状态。",
                    "tags": ['field', 'fieldState', 'formState']
                }, {}),
                vnode(ApiCard, {
                    "title": "useFieldArray",
                    "text": "管理动态增删的字段数组，并提供 append、remove、move 等操作。",
                    "tags": ['append', 'remove', 'move', 'replace']
                }, {})
            ]),
            vnode("div", {
                "class": "implementation-note"
            }, [
                vnode("span", {}, [
                    "✦"
                ]),
                vnode("p", {}, [
                    vnode("strong", {}, [
                        "校验按需触发。"
                    ]),
                    "默认在提交时校验，也可以配置为输入或失焦时校验。内置规则覆盖必填、长度、数值范围、正则与异步自定义校验；Resolver 可连接 Zod 或 Yup。"
                ])
            ])
        ]);
    }
});
export const ApiCard = defineComponent({
    "name": "ApiCard",
    "props": [
        "title",
        "text",
        "tags"
    ],
    "setup": (props, { slots }) => {
        const { title, text, tags } = props;
        return () => vnode("article", {
            "class": "api-card"
        }, [
            vnode("span", {
                "class": "api-card__icon"
            }, [
                "⌘"
            ]),
            vnode("h3", {}, [
                title
            ]),
            vnode("p", {}, [
                text
            ]),
            vnode("div", {
                "class": "api-tags"
            }, [
                tags.map((tag: string) => vnode("code", {
                    "key": tag
                }, [
                    tag
                ]))
            ])
        ]);
    }
});
export const ButtonPage = defineComponent({
    "name": "ButtonPage",
    "props": [],
    "setup": (props, { slots }) => {
        const loading = vueRef(false);
        const setLoading = refSetter(loading);
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "FOUNDATIONS",
                "title": "Button 按钮",
                "description": "清楚表达操作优先级，在需要的时候给出恰到好处的反馈。",
                "badge": "Button"
            }, {}),
            vnode(ExampleCard, {
                "title": "按钮类型",
                "description": "根据操作的重要程度，选择合适的视觉权重。",
                "code": codeSamples.buttonTypes
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "component-row"
                    }, [
                        vnode(Button, {
                            "variant": "primary"
                        }, {
                            "default": () => [
                                "创建项目 ",
                                vnode("span", {}, [
                                    "→"
                                ])
                            ]
                        }),
                        vnode(Button, {
                            "variant": "secondary"
                        }, {
                            "default": () => [
                                "取消"
                            ]
                        }),
                        vnode(Button, {
                            "variant": "tertiary"
                        }, {
                            "default": () => [
                                "了解更多 ↗"
                            ]
                        }),
                        vnode(Button, {
                            "variant": "danger"
                        }, {
                            "default": () => [
                                "删除项目"
                            ]
                        }),
                        vnode(Button, {
                            "variant": "ghost"
                        }, {
                            "default": () => [
                                "更多操作"
                            ]
                        })
                    ])
                ]
            }),
            vnode(ExampleCard, {
                "title": "尺寸与状态",
                "description": "提供三种尺寸，并支持加载和禁用状态。",
                "code": codeSamples.buttonStates
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "component-row component-row--align-end"
                    }, [
                        vnode(Button, {
                            "size": "sm"
                        }, {
                            "default": () => [
                                "小号按钮"
                            ]
                        }),
                        vnode(Button, {
                            "size": "md"
                        }, {
                            "default": () => [
                                "默认尺寸"
                            ]
                        }),
                        vnode(Button, {
                            "size": "lg",
                            "variant": "primary"
                        }, {
                            "default": () => [
                                "主要操作"
                            ]
                        }),
                        vnode(Button, {
                            "loading": true,
                            "variant": "primary"
                        }, {
                            "default": () => [
                                "正在保存"
                            ]
                        }),
                        vnode(Button, {
                            "disabled": true
                        }, {
                            "default": () => [
                                "暂不可用"
                            ]
                        })
                    ])
                ]
            }),
            vnode(ExampleCard, {
                "title": "交互示例",
                "description": "点击按钮体验异步加载状态。",
                "code": codeSamples.buttonLoading
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "component-row"
                    }, [
                        vnode(Button, {
                            "variant": "primary",
                            "loading": loading.value,
                            "onClick": () => { setLoading(true); window.setTimeout(() => setLoading(false), 1200); }
                        }, {
                            "default": () => [
                                "保存设置"
                            ]
                        }),
                        vnode("span", {
                            "class": "demo-hint"
                        }, [
                            "点击后显示 1.2 秒加载状态"
                        ])
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["variant", "primary | secondary | tertiary | danger | ghost", "secondary"], ["size", "sm | md | lg", "md"], ["loading", "boolean", "false"], ["fullWidth", "boolean", "false"], ["icon", "VNodeChild / slot", "—"]]
            }, {})
        ]);
    }
});
export const InputPage = defineComponent({
    "name": "InputPage",
    "props": [],
    "setup": (props, { slots }) => {
        const query = vueRef('');
        const setQuery = refSetter(query);
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "DATA ENTRY",
                "title": "Input 输入组件",
                "description": "为文本与多行内容提供清晰、友好的输入体验。",
                "badge": "Input · Textarea"
            }, {}),
            vnode(ExampleCard, {
                "title": "Input 输入框",
                "description": "支持标签、提示、错误状态、前后缀和清空操作。",
                "code": codeSamples.inputs
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "input-demo-grid"
                    }, [
                        vnode(Input, {
                            "label": "项目名称",
                            "placeholder": "请输入项目名称"
                        }, {}),
                        vnode(Input, {
                            "label": "搜索成员",
                            "placeholder": "按姓名或邮箱搜索",
                            "clearable": true,
                            "modelValue": query.value,
                            "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setQuery(event.target.value)
                        }, {
                            "prefix": () => vnode("span", {
                                "class": "search-icon"
                            }, [
                                "⌕"
                            ])
                        }),
                        vnode(Input, {
                            "label": "工作邮箱",
                            "placeholder": "name@company.com",
                            "error": "请输入有效的邮箱地址"
                        }, {}),
                        vnode(Input, {
                            "label": "只读字段",
                            "modelValue": "workspace-id-1842",
                            "readOnly": true,
                            "hint": "此字段由系统自动生成"
                        }, {})
                    ])
                ]
            }),
            vnode(ExampleCard, {
                "title": "Textarea 多行输入",
                "description": "适合备注、描述等较长内容。",
                "code": codeSamples.textarea
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "textarea-demo"
                    }, [
                        vnode(Textarea, {
                            "label": "项目简介",
                            "placeholder": "描述一下这个项目…",
                            "rows": 4,
                            "hint": "简单介绍项目目标和团队协作方式"
                        }, {})
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["label", "string", "—"], ["hint / error", "string", "—"], ["prefix / suffix", "VNodeChild / slot", "—"], ["clearable", "boolean", "false"], ["size", "'sm' | 'md' | 'lg'", "'md'"], ["rows", "number", "3"]]
            }, {})
        ]);
    }
});
export const SelectionPage = defineComponent({
    "name": "SelectionPage",
    "props": [],
    "setup": (props, { slots }) => {
        const topics = vueRef(['design']);
        const setTopics = refSetter(topics);
        const role = vueRef('member');
        const setRole = refSetter(role);
        const enabled = vueRef(true);
        const setEnabled = refSetter(enabled);
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "DATA ENTRY",
                "title": "选择组件",
                "description": "Checkbox、Radio 与 Switch，覆盖多选、单选和即时开关状态。",
                "badge": "Checkbox · Radio · Switch"
            }, {}),
            vnode(ExampleCard, {
                "title": "Checkbox 多选",
                "description": "独立复选和分组选项都支持受控状态。",
                "code": codeSamples.checkbox
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "selection-layout"
                    }, [
                        vnode("div", {
                            "class": "selection-block"
                        }, [
                            vnode("span", {
                                "class": "demo-label"
                            }, [
                                "独立复选"
                            ]),
                            vnode(Checkbox, {
                                "defaultChecked": true
                            }, {
                                "default": () => [
                                    "同意服务条款"
                                ]
                            }),
                            vnode(Checkbox, {
                                "disabled": true
                            }, {
                                "default": () => [
                                    "当前不可选"
                                ]
                            })
                        ]),
                        vnode("div", {
                            "class": "selection-block"
                        }, [
                            vnode("span", {
                                "class": "demo-label"
                            }, [
                                "兴趣主题"
                            ]),
                            vnode(CheckboxGroup, {
                                "modelValue": topics.value,
                                "onChange": setTopics,
                                "options": [{ label: '产品设计', value: 'design' }, { label: '工程实践', value: 'engineering' }, { label: '团队管理', value: 'team' }]
                            }, {}),
                            vnode("span", {
                                "class": "demo-hint"
                            }, [
                                "已选择：",
                                topics.value.join('、') || '无'
                            ])
                        ])
                    ])
                ]
            }),
            vnode(ExampleCard, {
                "title": "Radio 单选",
                "description": "在一组选项中选择一个明确的值。",
                "code": codeSamples.radio
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "selection-layout"
                    }, [
                        vnode("div", {
                            "class": "selection-block"
                        }, [
                            vnode("span", {
                                "class": "demo-label"
                            }, [
                                "工作区角色"
                            ]),
                            vnode(RadioGroup, {
                                "name": "role-demo",
                                "modelValue": role.value,
                                "onChange": setRole,
                                "options": [{ label: '管理员', value: 'admin' }, { label: '成员', value: 'member' }, { label: '访客', value: 'guest' }]
                            }, {}),
                            vnode("span", {
                                "class": "demo-hint"
                            }, [
                                "当前角色：",
                                role.value
                            ])
                        ])
                    ])
                ]
            }),
            vnode(ExampleCard, {
                "title": "Switch 开关",
                "description": "用于立即生效的二元设置。",
                "code": codeSamples.switch
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "switch-row"
                    }, [
                        vnode("div", {}, [
                            vnode("strong", {}, [
                                "开启产品更新"
                            ]),
                            vnode("span", {}, [
                                "接收功能更新、技巧与灵感"
                            ])
                        ]),
                        vnode(Switch, {
                            "modelValue": enabled.value,
                            "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setEnabled(event.target.checked)
                        }, {
                            "checked": () => "开",
                            "unchecked": () => "关"
                        })
                    ])
                ]
            })
        ]);
    }
});
export const FeedbackPage = defineComponent({
    "name": "FeedbackPage",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "FEEDBACK",
                "title": "Modal 弹窗",
                "description": "在需要聚焦重要决策时出现，不打断用户理解当前上下文。",
                "badge": "Modal"
            }, {}),
            vnode(ExampleCard, {
                "title": "受控 Modal",
                "description": "用于确认、编辑或承载需要专注完成的短流程。",
                "code": codeSamples.modal
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "component-row"
                    }, [
                        vnode(Button, {
                            "variant": "primary",
                            "onClick": () => setOpen(true)
                        }, {
                            "default": () => [
                                "邀请成员"
                            ]
                        }),
                        vnode("span", {
                            "class": "demo-hint"
                        }, [
                            "弹窗支持遮罩关闭、Escape 和焦点管理"
                        ])
                    ]),
                    vnode(Modal, {
                        "open": open.value,
                        "title": "邀请团队成员",
                        "description": "发送邀请后，对方会收到一封加入工作区的邮件。",
                        "onClose": () => setOpen(false),
                        "onOk": () => setOpen(false)
                    }, {
                        "default": () => [
                            vnode("div", {
                                "class": "modal-demo-content"
                            }, [
                                vnode(Input, {
                                    "label": "邮箱地址",
                                    "placeholder": "name@company.com"
                                }, {}),
                                vnode(Select, {
                                    "label": "成员权限",
                                    "options": [{ label: '成员 · 可编辑内容', value: 'member' }, { label: '管理员 · 管理工作区', value: 'admin' }, { label: '访客 · 仅查看', value: 'guest' }]
                                }, {}),
                                vnode("p", {
                                    "class": "modal-demo-note"
                                }, [
                                    "你可以在成员设置中随时调整权限。"
                                ])
                            ])
                        ]
                    })
                ]
            }),
            vnode(ExampleCard, {
                "title": "命令式确认",
                "description": "删除、归档等需要明确确认的破坏性操作。",
                "code": codeSamples.confirm
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "component-row"
                    }, [
                        vnode(Button, {
                            "variant": "danger",
                            "onClick": () => Modal.confirm({ title: '删除这个项目？', content: '删除后，项目和其中的所有内容都将无法恢复。', danger: true, onOk: () => window.alert('项目已删除') })
                        }, {
                            "default": () => [
                                "删除项目"
                            ]
                        }),
                        vnode("span", {
                            "class": "demo-hint"
                        }, [
                            "点击体验命令式确认弹窗"
                        ])
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["open", "boolean", "—"], ["onClose", "() => void", "—"], ["onOk", "() => void | Promise<void>", "—"], ["maskClosable", "boolean", "true"], ["closeOnEscape", "boolean", "true"], ["Modal.confirm", "ConfirmOptions → { destroy }", "—"]]
            }, {})
        ]);
    }
});
export const AlertPage = defineComponent({
    "name": "AlertPage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "FEEDBACK",
                "title": "Alert 提示",
                "description": "用语义化状态表达成功、提醒和错误信息。",
                "badge": "Alert"
            }, {}),
            vnode(ExampleCard, {
                "title": "提示类型",
                "description": "提供信息、成功、警告和错误四种状态。",
                "code": codeSamples.alert
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "common-demo-stack"
                    }, [
                        vnode(Alert, {
                            "variant": "info",
                            "title": "即将发布"
                        }, {
                            "default": () => [
                                "项目成员会收到一封更新通知。"
                            ]
                        }),
                        vnode(Alert, {
                            "variant": "success",
                            "title": "更改已保存",
                            "closable": true
                        }, {
                            "default": () => [
                                "你的工作区信息已更新。"
                            ]
                        }),
                        vnode(Alert, {
                            "variant": "warning",
                            "title": "存储空间不足"
                        }, {
                            "default": () => [
                                "请清理文件或升级套餐后继续上传。"
                            ]
                        }),
                        vnode(Alert, {
                            "variant": "error",
                            "title": "保存失败"
                        }, {
                            "default": () => [
                                "网络连接中断，请重试。"
                            ]
                        })
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["variant", "info | success | warning | error", "info"], ["title", "VNodeChild / slot", "—"], ["closable", "boolean", "false"], ["onClose", "() => void", "—"]]
            }, {})
        ]);
    }
});
export const TagPage = defineComponent({
    "name": "TagPage",
    "props": [],
    "setup": (props, { slots }) => {
        const showTag = vueRef(true);
        const setShowTag = refSetter(showTag);
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "DATA DISPLAY",
                "title": "Tag 标签",
                "description": "为状态、分类和筛选条件提供紧凑标记。",
                "badge": "Tag"
            }, {}),
            vnode(ExampleCard, {
                "title": "标签类型",
                "description": "用颜色区分标签的语义和优先级。",
                "code": codeSamples.tag
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "common-demo-row"
                    }, [
                        vnode(Tag, {
                            "variant": "primary"
                        }, {
                            "default": () => [
                                "设计中"
                            ]
                        }),
                        vnode(Tag, {
                            "variant": "success"
                        }, {
                            "default": () => [
                                "已发布"
                            ]
                        }),
                        vnode(Tag, {
                            "variant": "warning"
                        }, {
                            "default": () => [
                                "待审核"
                            ]
                        }),
                        vnode(Tag, {
                            "variant": "danger"
                        }, {
                            "default": () => [
                                "已阻塞"
                            ]
                        }),
                        showTag.value && vnode(Tag, {
                            "closable": true,
                            "onClose": () => setShowTag(false)
                        }, {
                            "default": () => [
                                "可移除标签"
                            ]
                        })
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["variant", "neutral | primary | success | warning | danger", "neutral"], ["closable", "boolean", "false"], ["onClose", "() => void", "—"]]
            }, {})
        ]);
    }
});
export const AvatarPage = defineComponent({
    "name": "AvatarPage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "DATA DISPLAY",
                "title": "Avatar 头像",
                "description": "展示成员身份，并在图片不可用时使用姓名首字母。",
                "badge": "Avatar"
            }, {}),
            vnode(ExampleCard, {
                "title": "头像尺寸与回退",
                "description": "提供多种尺寸；图片无法加载时显示姓名标记。",
                "code": codeSamples.avatar
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "common-demo-row common-demo-row--align-end"
                    }, [
                        vnode(Avatar, {
                            "name": "林知夏",
                            "size": "sm"
                        }, {}),
                        vnode(Avatar, {
                            "name": "陈一川"
                        }, {}),
                        vnode(Avatar, {
                            "name": "周禾",
                            "size": "lg"
                        }, {}),
                        vnode("span", {
                            "class": "demo-hint"
                        }, [
                            "图片加载失败时自动回退到姓名标记"
                        ])
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["src", "string", "—"], ["alt / name", "string", "—"], ["size", "sm | md | lg", "md"]]
            }, {})
        ]);
    }
});
export const TooltipPage = defineComponent({
    "name": "TooltipPage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "FEEDBACK",
                "title": "Tooltip 文字提示",
                "description": "悬停或键盘聚焦时显示简短补充说明。",
                "badge": "Tooltip"
            }, {}),
            vnode(ExampleCard, {
                "title": "提示位置",
                "description": "可将提示放在触发元素的上、下、左或右侧。",
                "code": codeSamples.tooltip
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "common-demo-row"
                    }, [
                        vnode(Tooltip, {
                            "title": "保存后，所有工作区成员都能看到更新。",
                            "placement": "top"
                        }, {
                            "default": () => [
                                vnode(Button, {
                                    "variant": "secondary"
                                }, {
                                    "default": () => [
                                        "保存帮助"
                                    ]
                                })
                            ]
                        }),
                        vnode(Tooltip, {
                            "title": "邀请链接将在 7 天后失效。",
                            "placement": "right"
                        }, {
                            "default": () => [
                                vnode(Button, {
                                    "variant": "tertiary"
                                }, {
                                    "default": () => [
                                        "邀请说明"
                                    ]
                                })
                            ]
                        }),
                        vnode("span", {
                            "class": "demo-hint"
                        }, [
                            "将鼠标移到按钮上，或使用 Tab 键聚焦"
                        ])
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["title", "VNodeChild / slot", "required"], ["placement", "top | bottom | left | right", "top"], ["#default", "VNodeChild / slot", "required"]]
            }, {})
        ]);
    }
});
export const BadgePage = defineComponent({
    "name": "BadgePage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "DATA DISPLAY",
                "title": "Badge 徽标",
                "description": "在图标、头像等元素旁呈现数量或状态提醒。",
                "badge": "Badge"
            }, {}),
            vnode(ExampleCard, {
                "title": "数量与状态",
                "description": "支持数字上限、红点和语义状态。",
                "code": codeSamples.badge
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "common-demo-row"
                    }, [
                        vnode(Badge, {
                            "count": 5
                        }, {
                            "default": () => [
                                vnode(Avatar, {
                                    "name": "林知夏",
                                    "size": "lg"
                                }, {})
                            ]
                        }),
                        vnode(Badge, {
                            "count": 128,
                            "overflowCount": 99
                        }, {
                            "default": () => [
                                vnode(Button, {}, {
                                    "default": () => [
                                        "通知"
                                    ]
                                })
                            ]
                        }),
                        vnode(Badge, {
                            "dot": true
                        }, {
                            "default": () => [
                                vnode(Button, {
                                    "variant": "secondary"
                                }, {
                                    "default": () => [
                                        "消息"
                                    ]
                                })
                            ]
                        }),
                        vnode(Badge, {
                            "status": "success",
                            "text": "项目运行正常"
                        }, {})
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["count", "VNodeChild / slot", "—"], ["dot", "boolean", "false"], ["overflowCount", "number", "99"], ["showZero", "boolean", "false"], ["status", "default | success | processing | warning | error", "default"], ["text", "VNodeChild / slot", "—"]]
            }, {})
        ]);
    }
});
export const BreadcrumbPage = defineComponent({
    "name": "BreadcrumbPage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "NAVIGATION",
                "title": "Breadcrumb 面包屑",
                "description": "展示当前位置，并帮助用户快速返回上级页面。",
                "badge": "Breadcrumb"
            }, {}),
            vnode(ExampleCard, {
                "title": "页面路径",
                "description": "通过 href 或 onClick 为上级路径提供导航行为。",
                "code": codeSamples.breadcrumb
            }, {
                "default": () => [
                    vnode(Breadcrumb, {
                        "items": [{ title: '工作区', onClick: () => window.alert('返回工作区') }, { title: '项目列表', onClick: () => window.alert('返回项目列表') }, { title: '品牌视觉升级' }]
                    }, {})
                ]
            }),
            vnode(ExampleCard, {
                "title": "自定义分隔符",
                "description": "分隔符可以是文本或任意 React 节点。",
                "code": codeSamples.breadcrumbCustom
            }, {
                "default": () => [
                    vnode(Breadcrumb, {
                        "separator": "›",
                        "items": [{ title: '设计团队' }, { title: '品牌项目' }, { title: '视觉规范' }]
                    }, {})
                ]
            }),
            vnode(ApiTable, {
                "rows": [["items", "BreadcrumbItem[]", "required"], ["items[].title", "VNodeChild / slot", "required"], ["items[].href", "string", "—"], ["items[].onClick", "() => void", "—"], ["separator", "VNodeChild / slot", "'/ '"]]
            }, {})
        ]);
    }
});
export const DividerPage = defineComponent({
    "name": "DividerPage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "FOUNDATIONS",
                "title": "Divider 分割线",
                "description": "分隔相邻内容，或为相关信息添加轻量标题。",
                "badge": "Divider"
            }, {}),
            vnode(ExampleCard, {
                "title": "水平分割",
                "description": "支持普通线、虚线与带标题分割线。",
                "code": codeSamples.divider
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "divider-demo"
                    }, [
                        vnode("span", {}, [
                            "项目概览"
                        ]),
                        vnode(Divider, {}, {}),
                        vnode("span", {}, [
                            "成员与权限"
                        ]),
                        vnode(Divider, {
                            "dashed": true
                        }, {
                            "default": () => [
                                "团队设置"
                            ]
                        }),
                        vnode("span", {}, [
                            "最近更新"
                        ])
                    ])
                ]
            }),
            vnode(ExampleCard, {
                "title": "垂直分割",
                "code": codeSamples.dividerVertical
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "common-demo-row"
                    }, [
                        vnode("span", {}, [
                            "项目"
                        ]),
                        vnode(Divider, {
                            "orientation": "vertical"
                        }, {}),
                        vnode("span", {}, [
                            "成员"
                        ]),
                        vnode(Divider, {
                            "orientation": "vertical",
                            "dashed": true
                        }, {}),
                        vnode("span", {}, [
                            "设置"
                        ])
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["orientation", "horizontal | vertical", "horizontal"], ["dashed", "boolean", "false"], ["plain", "boolean", "false"], ["#default", "VNodeChild / slot", "—"]]
            }, {})
        ]);
    }
});
export const EmptyPage = defineComponent({
    "name": "EmptyPage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "FEEDBACK",
                "title": "Empty 空状态",
                "description": "在列表、搜索或数据面板中清楚说明当前没有内容。",
                "badge": "Empty"
            }, {}),
            vnode(ExampleCard, {
                "title": "带操作的空状态",
                "description": "提供下一步操作，帮助用户从空白状态继续。",
                "code": codeSamples.empty
            }, {
                "default": () => [
                    vnode(Empty, {
                        "description": "还没有项目"
                    }, {
                        "default": () => [
                            vnode(Button, {
                                "variant": "primary"
                            }, {
                                "default": () => [
                                    "创建第一个项目"
                                ]
                            })
                        ]
                    })
                ]
            }),
            vnode(ExampleCard, {
                "title": "自定义描述",
                "code": codeSamples.emptySearch
            }, {
                "default": () => [
                    vnode(Empty, {
                        "description": "没有找到符合条件的结果"
                    }, {})
                ]
            }),
            vnode(ApiTable, {
                "rows": [["description", "VNodeChild / slot", "暂无数据"], ["image", "VNodeChild / slot", "默认插画"], ["#default", "VNodeChild / slot", "—"]]
            }, {})
        ]);
    }
});
export const PaginationPage = defineComponent({
    "name": "PaginationPage",
    "props": [],
    "setup": (props, { slots }) => {
        const current = vueRef(3);
        const setCurrent = refSetter(current);
        const pageSize = vueRef(10);
        const setPageSize = refSetter(pageSize);
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "NAVIGATION",
                "title": "Pagination 分页",
                "description": "将长列表拆分为清晰、可浏览的数据页。",
                "badge": "Pagination"
            }, {}),
            vnode(ExampleCard, {
                "title": "分页与每页条数",
                "description": "支持受控页码、总数提示及每页条数切换。",
                "code": codeSamples.pagination
            }, {
                "default": () => [
                    vnode(Pagination, {
                        "current": current.value,
                        "pageSize": pageSize.value,
                        "total": 86,
                        "showSizeChanger": true,
                        "onChange": (page: number, size: number) => { setCurrent(page); setPageSize(size); }
                    }, {})
                ]
            }),
            vnode(ApiTable, {
                "rows": [["current", "number", "required"], ["pageSize", "number", "required"], ["total", "number", "required"], ["onChange", "(page, pageSize) => void", "required"], ["showSizeChanger", "boolean", "false"], ["pageSizeOptions", "number[]", "[10, 20, 50]"]]
            }, {})
        ]);
    }
});
export const ProgressPage = defineComponent({
    "name": "ProgressPage",
    "props": [],
    "setup": (props, { slots }) => {
        const percent = vueRef(68);
        const setPercent = refSetter(percent);
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "FEEDBACK",
                "title": "Progress 进度条",
                "description": "用进度和状态让长时间任务保持可见。",
                "badge": "Progress"
            }, {}),
            vnode(ExampleCard, {
                "title": "进度与状态",
                "description": "百分比会限制在 0 至 100，并支持自定义文案和颜色。",
                "code": codeSamples.progress
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "common-demo-stack"
                    }, [
                        vnode(Progress, {
                            "percent": percent.value,
                            "status": "active",
                            "label": `上传中 ${percent.value}%`
                        }, {}),
                        vnode(Progress, {
                            "percent": 100
                        }, {}),
                        vnode(Progress, {
                            "percent": 42,
                            "status": "exception",
                            "label": "上传失败 · 42%"
                        }, {}),
                        vnode(Button, {
                            "onClick": () => setPercent((value: number) => value >= 100 ? 0 : value + 8)
                        }, {
                            "default": () => [
                                "推进进度"
                            ]
                        })
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["percent", "number", "required"], ["status", "normal | active | success | exception", "自动判断"], ["showInfo", "boolean", "true"], ["strokeColor", "string", "主题色"], ["label", "VNodeChild / slot", "百分比"]]
            }, {})
        ]);
    }
});
export const SkeletonPage = defineComponent({
    "name": "SkeletonPage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "FEEDBACK",
                "title": "Skeleton 骨架屏",
                "description": "内容加载时先展示结构轮廓，减少页面跳动。",
                "badge": "Skeleton"
            }, {}),
            vnode(ExampleCard, {
                "title": "动态骨架",
                "description": "支持头像、标题和可配置行数。",
                "code": codeSamples.skeleton
            }, {
                "default": () => [
                    vnode(Skeleton, {
                        "active": true,
                        "avatar": true,
                        "title": true,
                        "paragraph": { rows: 3 }
                    }, {})
                ]
            }),
            vnode(ExampleCard, {
                "title": "简洁占位",
                "code": codeSamples.skeletonSimple
            }, {
                "default": () => [
                    vnode(Skeleton, {
                        "title": false,
                        "paragraph": { rows: 2 }
                    }, {})
                ]
            }),
            vnode(ApiTable, {
                "rows": [["active", "boolean", "false"], ["avatar", "boolean", "false"], ["title", "boolean", "true"], ["paragraph", "boolean | { rows?: number }", "true"]]
            }, {})
        ]);
    }
});
export const SpinPage = defineComponent({
    "name": "SpinPage",
    "props": [],
    "setup": (props, { slots }) => {
        const spinning = vueRef(true);
        const setSpinning = refSetter(spinning);
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "FEEDBACK",
                "title": "Spin 加载中",
                "description": "在请求或局部内容更新期间提供轻量加载反馈。",
                "badge": "Spin"
            }, {}),
            vnode(ExampleCard, {
                "title": "独立加载指示器",
                "description": "提供三种尺寸和可选说明。",
                "code": codeSamples.spinSizes
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "common-demo-row"
                    }, [
                        vnode(Spin, {
                            "size": "sm"
                        }, {}),
                        vnode(Spin, {
                            "tip": "正在加载项目…"
                        }, {}),
                        vnode(Spin, {
                            "size": "lg"
                        }, {})
                    ])
                ]
            }),
            vnode(ExampleCard, {
                "title": "局部内容加载",
                "description": "可以遮罩一个容器，保留上下文。",
                "code": codeSamples.spinContent
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "spin-demo"
                    }, [
                        vnode(Spin, {
                            "spinning": spinning.value,
                            "tip": "正在同步成员…"
                        }, {
                            "default": () => [
                                vnode("div", {}, [
                                    vnode("strong", {}, [
                                        "项目成员"
                                    ]),
                                    vnode("p", {}, [
                                        "林知夏 · 陈一川 · 周禾"
                                    ])
                                ])
                            ]
                        })
                    ]),
                    vnode(Button, {
                        "onClick": () => setSpinning((value: boolean) => !value)
                    }, {
                        "default": () => [
                            spinning.value ? '显示内容' : '重新加载'
                        ]
                    })
                ]
            }),
            vnode(ApiTable, {
                "rows": [["spinning", "boolean", "true"], ["size", "sm | md | lg", "md"], ["tip", "VNodeChild / slot", "—"], ["#default", "VNodeChild / slot", "—"]]
            }, {})
        ]);
    }
});
export const TabsPage = defineComponent({
    "name": "TabsPage",
    "props": [],
    "setup": (props, { slots }) => {
        const activeKey = vueRef('overview');
        const setActiveKey = refSetter(activeKey);
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "NAVIGATION",
                "title": "Tabs 标签页",
                "description": "在同一页面内切换相互关联的内容视图。",
                "badge": "Tabs"
            }, {}),
            vnode(ExampleCard, {
                "title": "受控标签页",
                "description": "支持受控或默认选中，并提供键盘方向键切换。",
                "code": codeSamples.tabs
            }, {
                "default": () => [
                    vnode(Tabs, {
                        "activeKey": activeKey.value,
                        "onChange": setActiveKey,
                        "items": [{ key: 'overview', label: '概览', children: '项目进度和关键指标会显示在这里。' }, { key: 'members', label: '成员', children: '管理项目成员与权限。' }, { key: 'activity', label: '动态', children: '查看项目最近的变更。' }]
                    }, {})
                ]
            }),
            vnode(ApiTable, {
                "rows": [["items", "TabItem[]", "required"], ["items[].key", "string", "required"], ["items[].label", "VNodeChild / slot", "required"], ["items[].children", "VNodeChild / slot", "required"], ["activeKey", "string", "非受控"], ["onChange", "(key) => void", "—"]]
            }, {})
        ]);
    }
});
export const CardPage = defineComponent({
    "name": "CardPage",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "FOUNDATIONS",
                "title": "Card 卡片",
                "description": "将相关内容、操作和信息组织在独立容器中。",
                "badge": "Card"
            }, {}),
            vnode(ExampleCard, {
                "title": "带标题与操作的卡片",
                "description": "支持标题、辅助操作和悬停反馈。",
                "code": codeSamples.card
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "card-demo"
                    }, [
                        vnode(Card, {
                            "title": "品牌视觉升级",
                            "hoverable": true
                        }, {
                            "extra": () => vnode(Button, {
                                "variant": "tertiary"
                            }, {
                                "default": () => [
                                    "查看详情"
                                ]
                            }),
                            "default": () => [
                                vnode("p", {}, [
                                    "正在为新一季产品更新品牌视觉与设计规范。"
                                ]),
                                vnode("span", {}, [
                                    "最近更新 · 3 分钟前"
                                ])
                            ]
                        }),
                        vnode(Card, {
                            "title": "快速提示",
                            "bordered": false
                        }, {
                            "default": () => [
                                "卡片可以按需关闭边框，适合嵌入分组内容。"
                            ]
                        })
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["title", "VNodeChild / slot", "—"], ["extra", "VNodeChild / slot", "—"], ["hoverable", "boolean", "false"], ["bordered", "boolean", "true"], ["#default", "VNodeChild / slot", "—"]]
            }, {})
        ]);
    }
});
export const DescriptionsPage = defineComponent({
    "name": "DescriptionsPage",
    "props": [],
    "setup": (props, { slots }) => {
        const items = [{ key: 'name', label: '项目名称', children: '品牌视觉升级' }, { key: 'owner', label: '负责人', children: '林知夏' }, { key: 'status', label: '项目状态', children: '进行中' }, { key: 'updated', label: '最近更新', children: '3 分钟前' }];
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "DATA DISPLAY",
                "title": "Descriptions 描述列表",
                "description": "以标签和值的形式展示对象属性和详情信息。",
                "badge": "Descriptions"
            }, {}),
            vnode(ExampleCard, {
                "title": "项目详情",
                "description": "支持自适应列数和边框布局。",
                "code": codeSamples.descriptions
            }, {
                "default": () => [
                    vnode(Descriptions, {
                        "title": "项目详情",
                        "bordered": true,
                        "column": 2,
                        "items": items
                    }, {})
                ]
            }),
            vnode(ApiTable, {
                "rows": [["items", "DescriptionItem[]", "required"], ["items[].key", "string", "required"], ["items[].label", "VNodeChild / slot", "required"], ["items[].children", "VNodeChild / slot", "required"], ["column", "number", "3"], ["bordered", "boolean", "false"]]
            }, {})
        ]);
    }
});
export const StepsPage = defineComponent({
    "name": "StepsPage",
    "props": [],
    "setup": (props, { slots }) => {
        const current = vueRef(1);
        const setCurrent = refSetter(current);
        const items = [{ title: '创建工作区', description: '填写基本信息' }, { title: '邀请成员', description: '与团队协作' }, { title: '完成设置', description: '开始使用' }];
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "NAVIGATION",
                "title": "Steps 步骤条",
                "description": "展示多阶段流程的进度，并帮助用户理解当前步骤。",
                "badge": "Steps"
            }, {}),
            vnode(ExampleCard, {
                "title": "可交互步骤",
                "description": "点击步骤切换当前进度，也可仅展示只读状态。",
                "code": codeSamples.steps
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "steps-demo"
                    }, [
                        vnode(Steps, {
                            "current": current.value,
                            "onChange": setCurrent,
                            "items": items
                        }, {}),
                        vnode(Button, {
                            "onClick": () => setCurrent((step: number) => (step + 1) % items.length)
                        }, {
                            "default": () => [
                                "下一步"
                            ]
                        })
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["items", "StepItem[]", "required"], ["current", "number", "0"], ["direction", "horizontal | vertical", "horizontal"], ["onChange", "(step) => void", "—"], ["items[].status", "wait | process | finish | error", "自动计算"]]
            }, {})
        ]);
    }
});
export const TimelinePage = defineComponent({
    "name": "TimelinePage",
    "props": [],
    "setup": (props, { slots }) => {
        const items = [{ key: 'created', label: '09:30', content: '项目已创建' }, { key: 'invited', label: '10:15', content: '林知夏邀请了 3 位成员' }, { key: 'updated', label: '11:20', content: '更新了项目视觉规范', color: '#48a982' }];
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "DATA DISPLAY",
                "title": "Timeline 时间轴",
                "description": "按时间顺序呈现活动、变更和事件记录。",
                "badge": "Timeline"
            }, {}),
            vnode(ExampleCard, {
                "title": "项目动态",
                "description": "支持时间标记、节点颜色和待处理项。",
                "code": codeSamples.timeline
            }, {
                "default": () => [
                    vnode(Timeline, {
                        "items": items,
                        "pending": "等待下一次更新"
                    }, {})
                ]
            }),
            vnode(ApiTable, {
                "rows": [["items", "TimelineItem[]", "required"], ["items[].key", "string", "required"], ["items[].content", "VNodeChild / slot", "required"], ["items[].label", "VNodeChild / slot", "—"], ["items[].color", "string", "主题色"], ["pending", "VNodeChild / slot", "—"]]
            }, {})
        ]);
    }
});
export const CollapsePage = defineComponent({
    "name": "CollapsePage",
    "props": [],
    "setup": (props, { slots }) => {
        const activeKey = vueRef('members');
        const setActiveKey = refSetter(activeKey);
        const items = [{ key: 'members', title: '成员与权限', children: '管理工作区成员的访问级别。' }, { key: 'notifications', title: '通知设置', children: '选择项目更新的通知方式。' }, { key: 'archive', title: '归档项目', children: '归档后项目会从活跃列表中移除。' }];
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "DATA DISPLAY",
                "title": "Collapse 折叠面板",
                "description": "按需展开内容，保持长页面结构简洁。",
                "badge": "Collapse"
            }, {}),
            vnode(ExampleCard, {
                "title": "手风琴面板",
                "description": "手风琴模式下同一时间只展开一项。",
                "code": codeSamples.collapse
            }, {
                "default": () => [
                    vnode(Collapse, {
                        "accordion": true,
                        "activeKey": activeKey.value,
                        "onChange": (key: string | string[]) => setActiveKey(String(key)),
                        "items": items
                    }, {})
                ]
            }),
            vnode(ApiTable, {
                "rows": [["items", "CollapseItem[]", "required"], ["accordion", "boolean", "false"], ["activeKey", "string | string[]", "非受控"], ["defaultActiveKey", "string | string[]", "—"], ["onChange", "(activeKey) => void", "—"]]
            }, {})
        ]);
    }
});
export const DatePickerPage = defineComponent({
    "name": "DatePickerPage",
    "props": [],
    "setup": (props, { slots }) => {
        const date = vueRef('2026-11-15');
        const setDate = refSetter(date);
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "DATA ENTRY",
                "title": "DatePicker 日期选择",
                "description": "使用浏览器原生日期控件输入和选择日期。",
                "badge": "DatePicker"
            }, {}),
            vnode(ExampleCard, {
                "title": "发布日期",
                "description": "保留原生键盘与平台日期选择交互。",
                "code": codeSamples.datePicker
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "common-demo-stack"
                    }, [
                        vnode(DatePicker, {
                            "label": "预计发布日期",
                            "hint": "选择一个工作日作为目标日期",
                            "modelValue": date.value,
                            "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setDate(event.target.value)
                        }, {}),
                        vnode("span", {
                            "class": "demo-hint"
                        }, [
                            "当前值：",
                            date.value
                        ]),
                        vnode(DatePicker, {
                            "label": "只读日期",
                            "defaultValue": "2026-10-27",
                            "disabled": true
                        }, {})
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["label", "VNodeChild / slot", "—"], ["hint / error", "VNodeChild / slot", "—"], ["value / defaultValue", "string", "—"], ["min / max", "string", "—"], ["disabled", "boolean", "false"], ["onChange", "ChangeEvent<HTMLInputElement>", "—"]]
            }, {})
        ]);
    }
});
export const UploadPage = defineComponent({
    "name": "UploadPage",
    "props": [],
    "setup": (props, { slots }) => {
        const fileNames = vueRef<string[]>([]);
        const setFileNames = refSetter(fileNames);
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "DATA ENTRY",
                "title": "Upload 上传",
                "description": "通过选择文件或拖放文件，将本地内容接入业务流程。",
                "badge": "Upload"
            }, {}),
            vnode(ExampleCard, {
                "title": "项目附件",
                "description": "支持文件类型过滤、多选、拖放和移除已选文件。",
                "code": codeSamples.upload
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "upload-demo"
                    }, [
                        vnode(Upload, {
                            "accept": ".pdf,.png,.jpg",
                            "multiple": true,
                            "onChange": (files: File[]) => setFileNames(files.map((file: File) => file.name))
                        }, {}),
                        vnode("span", {
                            "class": "demo-hint"
                        }, [
                            fileNames.value.length ? `已选择 ${fileNames.value.length} 个文件` : '选择的文件仅保存在当前演示状态中'
                        ])
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["accept", "string", "—"], ["multiple", "boolean", "false"], ["disabled", "boolean", "false"], ["onChange", "(files: File[]) => void", "—"]]
            }, {})
        ]);
    }
});
export const DrawerPage = defineComponent({
    "name": "DrawerPage",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "FEEDBACK",
                "title": "Drawer 抽屉",
                "description": "从页面边缘展示辅助内容，同时保留当前页面上下文。",
                "badge": "Drawer"
            }, {}),
            vnode(ExampleCard, {
                "title": "项目详情抽屉",
                "description": "支持左右方向、遮罩关闭和 Escape 关闭。",
                "code": codeSamples.drawer
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "common-demo-row"
                    }, [
                        vnode(Button, {
                            "variant": "primary",
                            "onClick": () => setOpen(true)
                        }, {
                            "default": () => [
                                "查看项目详情"
                            ]
                        }),
                        vnode("span", {
                            "class": "demo-hint"
                        }, [
                            "点击打开右侧抽屉"
                        ]),
                        vnode(Drawer, {
                            "open": open.value,
                            "title": "项目详情",
                            "onClose": () => setOpen(false)
                        }, {
                            "default": () => [
                                vnode("p", {}, [
                                    "项目成员、访问权限和最近动态会显示在这里。"
                                ]),
                                vnode(Descriptions, {
                                    "column": 1,
                                    "items": [{ key: 'owner', label: '负责人', children: '林知夏' }, { key: 'status', label: '状态', children: '进行中' }]
                                }, {})
                            ]
                        })
                    ])
                ]
            }),
            vnode(ApiTable, {
                "rows": [["open", "boolean", "required"], ["title", "VNodeChild / slot", "—"], ["placement", "left | right", "right"], ["width", "number | string", "420"], ["onClose", "() => void", "required"], ["maskClosable / closeOnEscape", "boolean", "true"]]
            }, {})
        ]);
    }
});
export const TablePage = defineComponent({
    "name": "TablePage",
    "props": [],
    "setup": (props, { slots }) => {
        const selected = vueRef<(string | number)[]>([]);
        const setSelected = refSetter(selected);
        const serverPage = vueRef(1);
        const setServerPage = refSetter(serverPage);
        const loading = vueRef(false);
        const setLoading = refSetter(loading);
        const serverData = computed(() => projects.slice((serverPage.value - 1) * 4, serverPage.value * 4));
        return () => vnode(Fragment, null, [
            vnode(PageHeading, {
                "eyebrow": "DATA DISPLAY",
                "title": "Table 表格",
                "description": "结构化呈现数据，并将排序、筛选和选择等操作保持在用户视线之内。",
                "badge": "Table"
            }, {}),
            vnode(ExampleCard, {
                "title": "项目列表",
                "description": "本地分页、排序、筛选与行选择。",
                "code": codeSamples.table
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "table-toolbar"
                    }, [
                        vnode("div", {}, [
                            vnode("strong", {}, [
                                "所有项目"
                            ]),
                            vnode("span", {}, [
                                "共 9 个项目"
                            ])
                        ]),
                        vnode("div", {}, [
                            vnode(Button, {
                                "onClick": () => { setLoading(true); window.setTimeout(() => setLoading(false), 850); }
                            }, {
                                "default": () => [
                                    "↻ 刷新数据"
                                ]
                            }),
                            vnode(Button, {
                                "variant": "primary"
                            }, {
                                "default": () => [
                                    "＋ 新建项目"
                                ]
                            })
                        ])
                    ]),
                    vnode(Table, {
                        "rowKey": "id",
                        "columns": projectColumns,
                        "dataSource": projects,
                        "rowSelection": { selectedRowKeys: selected.value, onChange: setSelected },
                        "loading": loading.value,
                        "onChange": (change: TableChange) => console.info('Table change', change)
                    }, {}),
                    vnode("div", {
                        "class": "table-selection-note"
                    }, [
                        selected.value.length ? `已选择 ${selected.value.length} 个项目` : '点击行首复选框，选择需要批量操作的项目'
                    ])
                ]
            }),
            vnode(ExampleCard, {
                "title": "服务端分页模式",
                "description": "通过受控模式将分页和筛选交给业务请求。",
                "code": codeSamples.serverTable
            }, {
                "default": () => [
                    vnode("div", {
                        "class": "server-table-toolbar"
                    }, [
                        vnode("span", {}, [
                            "服务端数据模拟 · 每页 4 条"
                        ]),
                        vnode("span", {}, [
                            "当前请求页：",
                            vnode("b", {}, [
                                serverPage.value
                            ])
                        ])
                    ]),
                    vnode(Table, {
                        "mode": "server",
                        "rowKey": "id",
                        "columns": projectColumns,
                        "dataSource": serverData.value,
                        "currentPage": serverPage.value,
                        "total": projects.length,
                        "pageSize": 4,
                        "pageSizeOptions": [4],
                        "onChange": (change: TableChange) => { setServerPage(change.page); }
                    }, {})
                ]
            })
        ]);
    }
});
// Every code panel is a standalone TSX example with its imports and local state.
const codeSamples = {
    workspaceForm: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { SelectValue, ControllerRenderProps } from 'atelier-ui-vue';
import { Button } from "atelier-ui-vue/button";
import { Input } from "atelier-ui-vue/input";
import { Select } from "atelier-ui-vue/select";
import { Controller, useFieldArray, useForm } from "atelier-ui-vue/form";
type WorkspaceValues = {
    name: string;
    email: string;
    plan: string;
    members: Array<{
        name: string;
        role: string;
    }>;
};
export const CreateWorkspace = defineComponent({
    "name": "CreateWorkspace",
    "props": [],
    "setup": (props, { slots }) => {
        const form = useForm<WorkspaceValues>({
            mode: 'onBlur',
            defaultValues: {
                name: '',
                email: '',
                plan: 'studio',
                members: [{ name: 'Jordan Lee', role: 'Admin' }],
            },
        });
        const members = useFieldArray<WorkspaceValues, WorkspaceValues['members'][number]>({
            control: form.control,
            name: 'members',
        });
        const onSubmit = form.handleSubmit(async (values) => {
            console.log('Create workspace:', values);
        });
        return () => (vnode("form", {
            "onSubmit": onSubmit,
            "noValidate": true
        }, [
            vnode(Input, {
                "label": "\u5DE5\u4F5C\u533A\u540D\u79F0",
                "placeholder": "\u4F8B\u5982\uFF1ANorthstar Studio",
                "error": form.formState.errors.name?.message,
                ...form.register('name', {
                    required: '\u8BF7\u8F93\u5165\u5DE5\u4F5C\u533A\u540D\u79F0',
                    minLength: { value: 3, message: '\u81F3\u5C11\u8F93\u5165 3 \u4E2A\u5B57\u7B26' },
                })
            }, {}),
            vnode(Input, {
                "label": "\u5DE5\u4F5C\u90AE\u7BB1",
                "type": "email",
                "placeholder": "you@company.com",
                "error": form.formState.errors.email?.message,
                ...form.register('email', {
                    required: '\u8BF7\u8F93\u5165\u5DE5\u4F5C\u90AE\u7BB1',
                    pattern: {
                        value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                        message: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1\u5730\u5740',
                    },
                })
            }, {}),
            vnode(Controller, {
                "control": form.control,
                "name": "plan"
            }, {
                "default": ({ field }: ControllerRenderProps) => (vnode(Select, {
                    "label": "\u9009\u62E9\u5957\u9910",
                    "options": plans,
                    "modelValue": String(field.value ?? ''),
                    "onChange": (value: SelectValue) => field.onChange(value),
                    "onBlur": field.onBlur
                }, {}))
            }),
            vnode("h3", {}, [
                "\u56E2\u961F\u6210\u5458"
            ]),
            members.fields.map((member, index) => (vnode("div", {
                "key": member.id
            }, [
                vnode(Input, {
                    "aria-label": \`\u6210\u5458 \${index + 1} \u59D3\u540D\`,
                    "placeholder": "\u59D3\u540D",
                    ...form.register(\`members.\${index}.name\`)
                }, {}),
                vnode(Select, {
                    "aria-label": \`\u6210\u5458 \${index + 1} \u89D2\u8272\`,
                    "options": [
                        { label: '\u7BA1\u7406\u5458', value: 'Admin' },
                        { label: '\u6210\u5458', value: 'Member' },
                        { label: '\u8BBF\u5BA2', value: 'Guest' },
                    ],
                    ...form.register(\`members.\${index}.role\`)
                }, {}),
                vnode("button", {
                    "type": "button",
                    "onClick": () => members.remove(index)
                }, [
                    "\u79FB\u9664\u6210\u5458"
                ])
            ]))),
            vnode("button", {
                "type": "button",
                "onClick": () => members.append({ name: '', role: 'Member' })
            }, [
                "\u6DFB\u52A0\u6210\u5458"
            ]),
            vnode(Button, {
                "type": "submit",
                "variant": "primary",
                "loading": form.formState.isSubmitting
            }, {
                "default": () => [
                    "\u521B\u5EFA\u5DE5\u4F5C\u533A"
                ]
            })
        ]));
    }
});
const plans = [
    { label: 'Starter \u00B7 \u4E2A\u4EBA\u9879\u76EE', value: 'starter' },
    { label: 'Studio \u00B7 \u6210\u957F\u56E2\u961F', value: 'studio' },
    { label: 'Enterprise \u00B7 \u5927\u578B\u7EC4\u7EC7', value: 'enterprise' },
];
`,
    buttonTypes: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
export const ButtonTypes = defineComponent({
    "name": "ButtonTypes",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Button, {
                "variant": "primary"
            }, {
                "default": () => [
                    "\u521B\u5EFA\u9879\u76EE"
                ]
            }),
            vnode(Button, {
                "variant": "secondary"
            }, {
                "default": () => [
                    "\u53D6\u6D88"
                ]
            }),
            vnode(Button, {
                "variant": "tertiary"
            }, {
                "default": () => [
                    "\u4E86\u89E3\u66F4\u591A"
                ]
            }),
            vnode(Button, {
                "variant": "danger"
            }, {
                "default": () => [
                    "\u5220\u9664\u9879\u76EE"
                ]
            }),
            vnode(Button, {
                "variant": "ghost"
            }, {
                "default": () => [
                    "\u66F4\u591A\u64CD\u4F5C"
                ]
            })
        ]));
    }
});
`,
    buttonStates: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
export const ButtonSizesAndStates = defineComponent({
    "name": "ButtonSizesAndStates",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Button, {
                "size": "sm"
            }, {
                "default": () => [
                    "\u5C0F\u53F7\u6309\u94AE"
                ]
            }),
            vnode(Button, {
                "size": "md"
            }, {
                "default": () => [
                    "\u9ED8\u8BA4\u5C3A\u5BF8"
                ]
            }),
            vnode(Button, {
                "size": "lg",
                "variant": "primary"
            }, {
                "default": () => [
                    "\u4E3B\u8981\u64CD\u4F5C"
                ]
            }),
            vnode(Button, {
                "loading": true,
                "variant": "primary"
            }, {
                "default": () => [
                    "\u6B63\u5728\u4FDD\u5B58"
                ]
            }),
            vnode(Button, {
                "disabled": true
            }, {
                "default": () => [
                    "\u6682\u4E0D\u53EF\u7528"
                ]
            })
        ]));
    }
});
`,
    buttonLoading: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
export const SaveSettingsButton = defineComponent({
    "name": "SaveSettingsButton",
    "props": [],
    "setup": (props, { slots }) => {
        const loading = vueRef(false);
        const setLoading = refSetter(loading);
        async function saveSettings() {
            setLoading(true);
            try {
                await new Promise((resolve: (value: unknown) => void) => window.setTimeout(resolve, 1200));
            }
            finally {
                setLoading(false);
            }
        }
        return () => (vnode(Button, {
            "variant": "primary",
            "loading": loading.value,
            "onClick": saveSettings
        }, {
            "default": () => [
                "\u4FDD\u5B58\u8BBE\u7F6E"
            ]
        }));
    }
});
`,
    inputs: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Input } from "atelier-ui-vue/input";
export const ProjectFields = defineComponent({
    "name": "ProjectFields",
    "props": [],
    "setup": (props, { slots }) => {
        const query = vueRef('');
        const setQuery = refSetter(query);
        return () => (vnode("div", {}, [
            vnode(Input, {
                "label": "\u9879\u76EE\u540D\u79F0",
                "placeholder": "\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"
            }, {}),
            vnode(Input, {
                "label": "\u641C\u7D22\u6210\u5458",
                "placeholder": "\u6309\u59D3\u540D\u6216\u90AE\u7BB1\u641C\u7D22",
                "clearable": true,
                "modelValue": query.value,
                "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setQuery(event.target.value)
            }, {
                "prefix": () => vnode("span", {
                    "aria-hidden": "true"
                }, [
                    "\u2315"
                ])
            }),
            vnode(Input, {
                "label": "\u5DE5\u4F5C\u90AE\u7BB1",
                "type": "email",
                "placeholder": "name@company.com",
                "error": "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1\u5730\u5740"
            }, {}),
            vnode(Input, {
                "label": "\u53EA\u8BFB\u5B57\u6BB5",
                "modelValue": "workspace-id-1842",
                "readOnly": true,
                "hint": "\u6B64\u5B57\u6BB5\u7531\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210"
            }, {})
        ]));
    }
});
`,
    textarea: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Textarea } from "atelier-ui-vue/textarea";
export const ProjectDescription = defineComponent({
    "name": "ProjectDescription",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Textarea, {
            "label": "\u9879\u76EE\u7B80\u4ECB",
            "placeholder": "\u63CF\u8FF0\u4E00\u4E0B\u8FD9\u4E2A\u9879\u76EE\u2026",
            "rows": 4,
            "hint": "\u7B80\u5355\u4ECB\u7ECD\u9879\u76EE\u76EE\u6807\u548C\u56E2\u961F\u534F\u4F5C\u65B9\u5F0F"
        }, {}));
    }
});
`,
    checkbox: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Checkbox, CheckboxGroup } from "atelier-ui-vue/checkbox";
export const NotificationPreferences = defineComponent({
    "name": "NotificationPreferences",
    "props": [],
    "setup": (props, { slots }) => {
        const updatesEnabled = vueRef(true);
        const setUpdatesEnabled = refSetter(updatesEnabled);
        const topics = vueRef(['design']);
        const setTopics = refSetter(topics);
        return () => (vnode("div", {}, [
            vnode(Checkbox, {
                "modelValue": updatesEnabled.value,
                "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setUpdatesEnabled(event.target.checked)
            }, {
                "default": () => [
                    "\u63A5\u6536\u4EA7\u54C1\u66F4\u65B0"
                ]
            }),
            vnode(CheckboxGroup, {
                "options": topicOptions,
                "modelValue": topics.value,
                "onChange": setTopics
            }, {}),
            vnode("p", {}, [
                "\u5DF2\u9009\u62E9\uFF1A",
                topics.value.join('\u3001') || '\u65E0'
            ])
        ]));
    }
});
const topicOptions = [
    { label: '\u4EA7\u54C1\u8BBE\u8BA1', value: 'design' },
    { label: '\u5DE5\u7A0B\u5B9E\u8DF5', value: 'engineering' },
    { label: '\u56E2\u961F\u7BA1\u7406', value: 'team' },
];
`,
    radio: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { RadioGroup } from "atelier-ui-vue/radio";
export const WorkspaceRolePicker = defineComponent({
    "name": "WorkspaceRolePicker",
    "props": [],
    "setup": (props, { slots }) => {
        const role = vueRef('member');
        const setRole = refSetter(role);
        return () => (vnode("div", {}, [
            vnode(RadioGroup, {
                "name": "workspace-role",
                "options": roles,
                "modelValue": role.value,
                "onChange": setRole
            }, {}),
            vnode("p", {}, [
                "\u5F53\u524D\u89D2\u8272\uFF1A",
                role.value
            ])
        ]));
    }
});
const roles = [
    { label: '\u7BA1\u7406\u5458', value: 'admin' },
    { label: '\u6210\u5458', value: 'member' },
    { label: '\u8BBF\u5BA2', value: 'guest' },
];
`,
    switch: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Switch } from "atelier-ui-vue/switch";
export const ProductUpdatesSwitch = defineComponent({
    "name": "ProductUpdatesSwitch",
    "props": [],
    "setup": (props, { slots }) => {
        const enabled = vueRef(true);
        const setEnabled = refSetter(enabled);
        return () => (vnode("label", {}, [
            vnode("span", {}, [
                "\u5F00\u542F\u4EA7\u54C1\u66F4\u65B0"
            ]),
            vnode(Switch, {
                "modelValue": enabled.value,
                "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setEnabled(event.target.checked)
            }, {
                "checked": () => "\u5F00",
                "unchecked": () => "\u5173"
            })
        ]));
    }
});
`,
    modal: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Modal } from "atelier-ui-vue/modal";
export const InviteMember = defineComponent({
    "name": "InviteMember",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        const email = vueRef('');
        const setEmail = refSetter(email);
        async function sendInvitation() {
            console.log('Invite:', email.value);
            setOpen(false);
        }
        return () => (vnode(Fragment, null, [
            vnode(Button, {
                "variant": "primary",
                "onClick": () => setOpen(true)
            }, {
                "default": () => [
                    "\u9080\u8BF7\u6210\u5458"
                ]
            }),
            vnode(Modal, {
                "open": open.value,
                "title": "\u9080\u8BF7\u56E2\u961F\u6210\u5458",
                "onClose": () => setOpen(false),
                "onOk": sendInvitation
            }, {
                "default": () => [
                    vnode(Input, {
                        "label": "\u90AE\u7BB1\u5730\u5740",
                        "type": "email",
                        "placeholder": "name@company.com",
                        "modelValue": email.value,
                        "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setEmail(event.target.value)
                    }, {})
                ]
            })
        ]));
    }
});
`,
    confirm: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Modal } from "atelier-ui-vue/modal";
export const DeleteProjectButton = defineComponent({
    "name": "DeleteProjectButton",
    "props": [],
    "setup": (props, { slots }) => {
        function deleteProject() {
            console.log('Project deleted');
        }
        function confirmDelete() {
            Modal.confirm({
                title: '\u5220\u9664\u8FD9\u4E2A\u9879\u76EE\uFF1F',
                content: '\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002',
                danger: true,
                onOk: deleteProject,
            });
        }
        return () => vnode(Button, {
            "variant": "danger",
            "onClick": confirmDelete
        }, {
            "default": () => [
                "\u5220\u9664\u9879\u76EE"
            ]
        });
    }
});
`,
    table: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import type { TableChange } from 'atelier-ui-vue';
import { Table, type TableColumn } from "atelier-ui-vue/table";
type Project = {
    id: string;
    name: string;
    owner: string;
    status: string;
    members: number;
};
export const ProjectTable = defineComponent({
    "name": "ProjectTable",
    "props": [],
    "setup": (props, { slots }) => {
        const selectedRowKeys = vueRef<(string | number)[]>([]);
        const setSelectedRowKeys = refSetter(selectedRowKeys);
        return () => (vnode(Table, {
            "rowKey": "id",
            "columns": columns,
            "dataSource": projects,
            "rowSelection": { "selectedRowKeys": selectedRowKeys.value, onChange: setSelectedRowKeys },
            "onChange": (change: TableChange) => console.log('Table change:', change)
        }, {}));
    }
});
const projects: Project[] = [
    { id: 'p-01', name: '\u54C1\u724C\u89C6\u89C9\u5347\u7EA7', owner: '\u6797\u77E5\u590F', status: '\u8FDB\u884C\u4E2D', members: 8 },
    { id: 'p-02', name: '\u79FB\u52A8\u7AEF\u4F53\u9A8C\u4F18\u5316', owner: '\u9648\u4E00\u5DDD', status: '\u8BC4\u5BA1\u4E2D', members: 5 },
    { id: 'p-03', name: '\u79CB\u5B63\u4EA7\u54C1\u53D1\u5E03', owner: '\u5468\u79BE', status: '\u5DF2\u5B8C\u6210', members: 12 },
];
const columns: TableColumn<Project>[] = [
    { key: 'name', title: '\u9879\u76EE\u540D\u79F0', dataIndex: 'name', sorter: true },
    { key: 'owner', title: '\u8D1F\u8D23\u4EBA', dataIndex: 'owner' },
    { key: 'status', title: '\u72B6\u6001', dataIndex: 'status' },
    { key: 'members', title: '\u6210\u5458', dataIndex: 'members', align: 'center' },
];
`,
    serverTable: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Table, type TableChange, type TableColumn } from "atelier-ui-vue/table";
type Project = {
    id: string;
    name: string;
    owner: string;
    status: string;
};
export const ServerProjectTable = defineComponent({
    "name": "ServerProjectTable",
    "props": [],
    "setup": (props, { slots }) => {
        const page = vueRef(1);
        const setPage = refSetter(page);
        const pageData = vueRef(allProjects.slice(0, 10));
        const setPageData = refSetter(pageData);
        const loading = vueRef(false);
        const setLoading = refSetter(loading);
        async function handleTableChange(change: TableChange) {
            setLoading(true);
            setPage(change.page);
            try {
                setPageData(await requestProjects(change));
            }
            finally {
                setLoading(false);
            }
        }
        return () => (vnode(Table, {
            "mode": "server",
            "rowKey": "id",
            "columns": columns,
            "dataSource": pageData.value,
            "currentPage": page.value,
            "total": allProjects.length,
            "pageSize": 10,
            "loading": loading.value,
            "onChange": handleTableChange
        }, {}));
    }
});
const allProjects: Project[] = Array.from({ length: 42 }, (_: unknown, index: number) => ({
    id: String(index + 1),
    name: '\u9879\u76EE ' + (index + 1),
    owner: index % 2 === 0 ? '\u6797\u77E5\u590F' : '\u9648\u4E00\u5DDD',
    status: index % 2 === 0 ? '\u8FDB\u884C\u4E2D' : '\u5DF2\u5B8C\u6210',
}));
async function requestProjects(change: TableChange) {
    await new Promise((resolve: (value: unknown) => void) => window.setTimeout(resolve, 250));
    const start = (change.page - 1) * change.pageSize;
    return allProjects.slice(start, start + change.pageSize);
}
const columns: TableColumn<Project>[] = [
    { key: 'name', title: '\u9879\u76EE\u540D\u79F0', dataIndex: 'name', sorter: true },
    { key: 'owner', title: '\u8D1F\u8D23\u4EBA', dataIndex: 'owner' },
    { key: 'status', title: '\u72B6\u6001', dataIndex: 'status' },
];
`,
    alert: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Alert } from "atelier-ui-vue/alert";
export const WorkspaceNotice = defineComponent({
    "name": "WorkspaceNotice",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Alert, {
                "variant": "info",
                "title": "\u5373\u5C06\u53D1\u5E03"
            }, {
                "default": () => [
                    "\u9879\u76EE\u6210\u5458\u4F1A\u6536\u5230\u4E00\u5C01\u66F4\u65B0\u901A\u77E5\u3002"
                ]
            }),
            vnode(Alert, {
                "variant": "success",
                "title": "\u66F4\u6539\u5DF2\u4FDD\u5B58",
                "closable": true
            }, {
                "default": () => [
                    "\u4F60\u7684\u5DE5\u4F5C\u533A\u4FE1\u606F\u5DF2\u66F4\u65B0\u3002"
                ]
            }),
            vnode(Alert, {
                "variant": "warning",
                "title": "\u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3"
            }, {
                "default": () => [
                    "\u8BF7\u6E05\u7406\u6587\u4EF6\u6216\u5347\u7EA7\u5957\u9910\u540E\u7EE7\u7EED\u4E0A\u4F20\u3002"
                ]
            }),
            vnode(Alert, {
                "variant": "error",
                "title": "\u4FDD\u5B58\u5931\u8D25"
            }, {
                "default": () => [
                    "\u7F51\u7EDC\u8FDE\u63A5\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5\u3002"
                ]
            })
        ]));
    }
});
`,
    tag: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Tag } from "atelier-ui-vue/tag";
export const ProjectTags = defineComponent({
    "name": "ProjectTags",
    "props": [],
    "setup": (props, { slots }) => {
        const showDesignTag = vueRef(true);
        const setShowDesignTag = refSetter(showDesignTag);
        return () => (vnode("div", {}, [
            vnode(Tag, {
                "variant": "primary"
            }, {
                "default": () => [
                    "\u8BBE\u8BA1\u4E2D"
                ]
            }),
            vnode(Tag, {
                "variant": "success"
            }, {
                "default": () => [
                    "\u5DF2\u53D1\u5E03"
                ]
            }),
            vnode(Tag, {
                "variant": "warning"
            }, {
                "default": () => [
                    "\u5F85\u5BA1\u6838"
                ]
            }),
            vnode(Tag, {
                "variant": "danger"
            }, {
                "default": () => [
                    "\u5DF2\u963B\u585E"
                ]
            }),
            showDesignTag.value && (vnode(Tag, {
                "closable": true,
                "onClose": () => setShowDesignTag(false)
            }, {
                "default": () => [
                    "\u53EF\u79FB\u9664\u6807\u7B7E"
                ]
            }))
        ]));
    }
});
`,
    avatar: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
export const TeamAvatars = defineComponent({
    "name": "TeamAvatars",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Avatar, {
                "name": "\u6797\u77E5\u590F",
                "size": "sm"
            }, {}),
            vnode(Avatar, {
                "name": "\u9648\u4E00\u5DDD"
            }, {}),
            vnode(Avatar, {
                "name": "\u5468\u79BE",
                "size": "lg"
            }, {})
        ]));
    }
});
`,
    tooltip: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Tooltip } from "atelier-ui-vue/tooltip";
export const HelpTooltip = defineComponent({
    "name": "HelpTooltip",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Tooltip, {
            "title": "\u4FDD\u5B58\u540E\uFF0C\u6240\u6709\u5DE5\u4F5C\u533A\u6210\u5458\u90FD\u80FD\u770B\u5230\u66F4\u65B0\u3002",
            "placement": "top"
        }, {
            "default": () => [
                vnode(Button, {
                    "variant": "secondary"
                }, {
                    "default": () => [
                        "\u4FDD\u5B58\u5E2E\u52A9"
                    ]
                })
            ]
        }));
    }
});
`,
    badge: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Badge } from "atelier-ui-vue/badge";
import { Button } from "atelier-ui-vue/button";
export const NotificationBadge = defineComponent({
    "name": "NotificationBadge",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Badge, {
                "count": 5
            }, {
                "default": () => [
                    vnode(Avatar, {
                        "name": "\u6797\u77E5\u590F"
                    }, {})
                ]
            }),
            vnode(Badge, {
                "count": 128,
                "overflowCount": 99
            }, {
                "default": () => [
                    vnode(Button, {}, {
                        "default": () => [
                            "\u901A\u77E5"
                        ]
                    })
                ]
            }),
            vnode(Badge, {
                "status": "success",
                "text": "\u9879\u76EE\u8FD0\u884C\u6B63\u5E38"
            }, {})
        ]));
    }
});
`,
    breadcrumb: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Breadcrumb } from "atelier-ui-vue/breadcrumb";
export const ProjectBreadcrumb = defineComponent({
    "name": "ProjectBreadcrumb",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Breadcrumb, {
            "items": [
                { title: '\u5DE5\u4F5C\u533A', href: '/' },
                { title: '\u9879\u76EE\u5217\u8868', href: '/projects' },
                { title: '\u54C1\u724C\u89C6\u89C9\u5347\u7EA7' },
            ]
        }, {}));
    }
});
`,
    breadcrumbCustom: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Breadcrumb } from "atelier-ui-vue/breadcrumb";
export const CustomBreadcrumb = defineComponent({
    "name": "CustomBreadcrumb",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Breadcrumb, {
            "separator": "\u203A",
            "items": [
                { title: '\u8BBE\u8BA1\u56E2\u961F' },
                { title: '\u54C1\u724C\u9879\u76EE' },
                { title: '\u89C6\u89C9\u89C4\u8303' },
            ]
        }, {}));
    }
});
`,
    divider: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Divider } from "atelier-ui-vue/divider";
export const ContentDivider = defineComponent({
    "name": "ContentDivider",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("section", {}, [
            vnode("p", {}, [
                "\u9879\u76EE\u6982\u89C8"
            ]),
            vnode(Divider, {
                "orientation": "horizontal"
            }, {}),
            vnode("p", {}, [
                "\u6210\u5458\u4E0E\u6743\u9650"
            ]),
            vnode(Divider, {
                "orientation": "vertical"
            }, {}),
            vnode("span", {}, [
                "\u6700\u8FD1\u66F4\u65B0"
            ])
        ]));
    }
});
`,
    dividerVertical: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Divider } from "atelier-ui-vue/divider";
export const InlineDivider = defineComponent({
    "name": "InlineDivider",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode("span", {}, [
                "\u9879\u76EE"
            ]),
            vnode(Divider, {
                "orientation": "vertical"
            }, {}),
            vnode("span", {}, [
                "\u6210\u5458"
            ]),
            vnode(Divider, {
                "orientation": "vertical",
                "dashed": true
            }, {}),
            vnode("span", {}, [
                "\u8BBE\u7F6E"
            ])
        ]));
    }
});
`,
    empty: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Empty } from "atelier-ui-vue/empty";
export const EmptyProjects = defineComponent({
    "name": "EmptyProjects",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Empty, {
            "description": "\u8FD8\u6CA1\u6709\u9879\u76EE"
        }, {
            "default": () => [
                vnode(Button, {
                    "variant": "primary"
                }, {
                    "default": () => [
                        "\u521B\u5EFA\u7B2C\u4E00\u4E2A\u9879\u76EE"
                    ]
                })
            ]
        }));
    }
});
`,
    emptySearch: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Empty } from "atelier-ui-vue/empty";
export const EmptySearchResults = defineComponent({
    "name": "EmptySearchResults",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Empty, {
            "description": "\u6CA1\u6709\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u7ED3\u679C"
        }, {});
    }
});
`,
    pagination: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Pagination } from "atelier-ui-vue/pagination";
export const ProjectPagination = defineComponent({
    "name": "ProjectPagination",
    "props": [],
    "setup": (props, { slots }) => {
        const page = vueRef(1);
        const setPage = refSetter(page);
        const pageSize = vueRef(10);
        const setPageSize = refSetter(pageSize);
        return () => (vnode(Pagination, {
            "current": page.value,
            "pageSize": pageSize.value,
            "total": 86,
            "showSizeChanger": true,
            "onChange": (nextPage: number, nextPageSize: number) => {
                setPage(nextPage);
                setPageSize(nextPageSize);
            }
        }, {}));
    }
});
`,
    progress: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Progress } from "atelier-ui-vue/progress";
export const UploadProgress = defineComponent({
    "name": "UploadProgress",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Progress, {
                "percent": 68,
                "status": "active",
                "label": "\u4E0A\u4F20\u4E2D 68%"
            }, {}),
            vnode(Progress, {
                "percent": 100
            }, {}),
            vnode(Progress, {
                "percent": 42,
                "status": "exception"
            }, {})
        ]));
    }
});
`,
    skeleton: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Skeleton } from "atelier-ui-vue/skeleton";
export const ProjectCardPlaceholder = defineComponent({
    "name": "ProjectCardPlaceholder",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Skeleton, {
            "active": true,
            "avatar": true,
            "title": true,
            "paragraph": { rows: 3 }
        }, {});
    }
});
`,
    skeletonSimple: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Skeleton } from "atelier-ui-vue/skeleton";
export const CompactPlaceholder = defineComponent({
    "name": "CompactPlaceholder",
    "props": [],
    "setup": (props, { slots }) => {
        return () => vnode(Skeleton, {
            "title": false,
            "paragraph": { rows: 2 }
        }, {});
    }
});
`,
    spin: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Spin } from "atelier-ui-vue/spin";
export const LoadingProject = defineComponent({
    "name": "LoadingProject",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Spin, {
            "spinning": true,
            "tip": "\u6B63\u5728\u52A0\u8F7D\u9879\u76EE\u2026"
        }, {
            "default": () => [
                vnode("section", {
                    "style": { minHeight: 120 }
                }, [
                    "\u9879\u76EE\u5185\u5BB9\u52A0\u8F7D\u5B8C\u6210\u540E\u4F1A\u663E\u793A\u5728\u8FD9\u91CC\u3002"
                ])
            ]
        }));
    }
});
`,
    spinSizes: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Spin } from "atelier-ui-vue/spin";
export const LoadingIndicators = defineComponent({
    "name": "LoadingIndicators",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Spin, {
                "size": "sm"
            }, {}),
            vnode(Spin, {
                "tip": "\u6B63\u5728\u52A0\u8F7D\u9879\u76EE\u2026"
            }, {}),
            vnode(Spin, {
                "size": "lg"
            }, {})
        ]));
    }
});
`,
    spinContent: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Spin } from "atelier-ui-vue/spin";
export const LoadingMembers = defineComponent({
    "name": "LoadingMembers",
    "props": [],
    "setup": (props, { slots }) => {
        const spinning = vueRef(true);
        const setSpinning = refSetter(spinning);
        return () => (vnode("div", {}, [
            vnode(Spin, {
                "spinning": spinning.value,
                "tip": "\u6B63\u5728\u540C\u6B65\u6210\u5458\u2026"
            }, {
                "default": () => [
                    vnode("section", {
                        "style": { minHeight: 120 }
                    }, [
                        "\u9879\u76EE\u6210\u5458\uFF1A\u6797\u77E5\u590F\u3001\u9648\u4E00\u5DDD\u3001\u5468\u79BE"
                    ])
                ]
            }),
            vnode(Button, {
                "onClick": () => setSpinning((value: boolean) => !value)
            }, {
                "default": () => [
                    "\u5207\u6362\u52A0\u8F7D\u72B6\u6001"
                ]
            })
        ]));
    }
});
`,
    tabs: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Tabs } from "atelier-ui-vue/tabs";
export const ProjectTabs = defineComponent({
    "name": "ProjectTabs",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Tabs, {
            "defaultActiveKey": "overview",
            "items": [
                { key: 'overview', label: '\u6982\u89C8', children: '\u9879\u76EE\u8FDB\u5EA6\u548C\u5173\u952E\u6307\u6807\u3002' },
                { key: 'members', label: '\u6210\u5458', children: '\u7BA1\u7406\u9879\u76EE\u6210\u5458\u4E0E\u6743\u9650\u3002' },
                { key: 'activity', label: '\u52A8\u6001', children: '\u67E5\u770B\u9879\u76EE\u6700\u8FD1\u7684\u53D8\u66F4\u3002' },
            ]
        }, {}));
    }
});
`,
    card: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Card } from "atelier-ui-vue/card";
export const ProjectCard = defineComponent({
    "name": "ProjectCard",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode("div", {}, [
            vnode(Card, {
                "title": "\u54C1\u724C\u89C6\u89C9\u5347\u7EA7",
                "hoverable": true
            }, {
                "extra": () => vnode(Button, {
                    "variant": "tertiary"
                }, {
                    "default": () => [
                        "\u67E5\u770B\u8BE6\u60C5"
                    ]
                }),
                "default": () => [
                    vnode("p", {}, [
                        "\u6B63\u5728\u4E3A\u65B0\u4E00\u5B63\u4EA7\u54C1\u66F4\u65B0\u54C1\u724C\u89C6\u89C9\u4E0E\u8BBE\u8BA1\u89C4\u8303\u3002"
                    ]),
                    vnode("span", {}, [
                        "\u6700\u8FD1\u66F4\u65B0 \u00B7 3 \u5206\u949F\u524D"
                    ])
                ]
            }),
            vnode(Card, {
                "title": "\u5FEB\u901F\u63D0\u793A",
                "bordered": false
            }, {
                "default": () => [
                    "\u5361\u7247\u53EF\u4EE5\u6309\u9700\u5173\u95ED\u8FB9\u6846\uFF0C\u9002\u5408\u5D4C\u5165\u5206\u7EC4\u5185\u5BB9\u3002"
                ]
            })
        ]));
    }
});
`,
    descriptions: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Descriptions } from "atelier-ui-vue/descriptions";
export const ProjectDetails = defineComponent({
    "name": "ProjectDetails",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Descriptions, {
            "title": "\u9879\u76EE\u8BE6\u60C5",
            "bordered": true,
            "column": 2,
            "items": [
                { key: 'name', label: '\u9879\u76EE\u540D\u79F0', children: '\u54C1\u724C\u89C6\u89C9\u5347\u7EA7' },
                { key: 'owner', label: '\u8D1F\u8D23\u4EBA', children: '\u6797\u77E5\u590F' },
                { key: 'status', label: '\u9879\u76EE\u72B6\u6001', children: '\u8FDB\u884C\u4E2D' },
                { key: 'updated', label: '\u6700\u8FD1\u66F4\u65B0', children: '3 \u5206\u949F\u524D' },
            ]
        }, {}));
    }
});
`,
    steps: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Steps } from "atelier-ui-vue/steps";
export const WorkspaceSetup = defineComponent({
    "name": "WorkspaceSetup",
    "props": [],
    "setup": (props, { slots }) => {
        const current = vueRef(1);
        const setCurrent = refSetter(current);
        return () => (vnode("div", {}, [
            vnode(Steps, {
                "current": current.value,
                "onChange": setCurrent,
                "items": [
                    { title: '\u521B\u5EFA\u5DE5\u4F5C\u533A', description: '\u586B\u5199\u57FA\u672C\u4FE1\u606F' },
                    { title: '\u9080\u8BF7\u6210\u5458', description: '\u4E0E\u56E2\u961F\u534F\u4F5C' },
                    { title: '\u5B8C\u6210\u8BBE\u7F6E', description: '\u5F00\u59CB\u4F7F\u7528' },
                ]
            }, {}),
            vnode(Button, {
                "onClick": () => setCurrent((step: number) => (step + 1) % 3)
            }, {
                "default": () => [
                    "\u4E0B\u4E00\u6B65"
                ]
            })
        ]));
    }
});
`,
    timeline: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Timeline } from "atelier-ui-vue/timeline";
export const ProjectActivity = defineComponent({
    "name": "ProjectActivity",
    "props": [],
    "setup": (props, { slots }) => {
        return () => (vnode(Timeline, {
            "items": [
                { key: 'created', label: '09:30', content: '\u9879\u76EE\u5DF2\u521B\u5EFA' },
                { key: 'invited', label: '10:15', content: '\u6797\u77E5\u590F\u9080\u8BF7\u4E86 3 \u4F4D\u6210\u5458' },
                { key: 'updated', label: '11:20', content: '\u66F4\u65B0\u4E86\u9879\u76EE\u89C6\u89C9\u89C4\u8303' },
            ],
            "pending": "\u7B49\u5F85\u4E0B\u4E00\u6B21\u66F4\u65B0"
        }, {}));
    }
});
`,
    collapse: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Collapse } from "atelier-ui-vue/collapse";
export const ProjectSettings = defineComponent({
    "name": "ProjectSettings",
    "props": [],
    "setup": (props, { slots }) => {
        const activeKey = vueRef('members');
        const setActiveKey = refSetter(activeKey);
        return () => (vnode(Collapse, {
            "accordion": true,
            "activeKey": activeKey.value,
            "onChange": (key: string | string[]) => setActiveKey(String(key)),
            "items": [
                { key: 'members', title: '\u6210\u5458\u4E0E\u6743\u9650', children: '\u7BA1\u7406\u5DE5\u4F5C\u533A\u6210\u5458\u7684\u8BBF\u95EE\u7EA7\u522B\u3002' },
                { key: 'notifications', title: '\u901A\u77E5\u8BBE\u7F6E', children: '\u9009\u62E9\u9879\u76EE\u66F4\u65B0\u7684\u901A\u77E5\u65B9\u5F0F\u3002' },
                { key: 'archive', title: '\u5F52\u6863\u9879\u76EE', children: '\u5F52\u6863\u540E\u9879\u76EE\u4F1A\u4ECE\u6D3B\u8DC3\u5217\u8868\u4E2D\u79FB\u9664\u3002' },
            ]
        }, {}));
    }
});
`,
    datePicker: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { DatePicker } from "atelier-ui-vue/date-picker";
export const ReleaseDate = defineComponent({
    "name": "ReleaseDate",
    "props": [],
    "setup": (props, { slots }) => {
        const date = vueRef('2026-11-15');
        const setDate = refSetter(date);
        return () => (vnode("div", {}, [
            vnode(DatePicker, {
                "label": "\u9884\u8BA1\u53D1\u5E03\u65E5\u671F",
                "hint": "\u9009\u62E9\u4E00\u4E2A\u5DE5\u4F5C\u65E5\u4F5C\u4E3A\u76EE\u6807\u65E5\u671F",
                "modelValue": date.value,
                "onChange": (event: Event & { target: HTMLInputElement; currentTarget: HTMLInputElement }) => setDate(event.target.value)
            }, {}),
            vnode(DatePicker, {
                "label": "\u53EA\u8BFB\u65E5\u671F",
                "defaultValue": "2026-10-27",
                "disabled": true
            }, {})
        ]));
    }
});
`,
    upload: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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

import { Upload } from "atelier-ui-vue/upload";
export const ProjectFiles = defineComponent({
    "name": "ProjectFiles",
    "props": [],
    "setup": (props, { slots }) => {
        const fileNames = vueRef<string[]>([]);
        const setFileNames = refSetter(fileNames);
        return () => (vnode("div", {}, [
            vnode(Upload, {
                "accept": ".pdf,.png,.jpg",
                "multiple": true,
                "onChange": (files: File[]) => setFileNames(files.map((file: File) => file.name))
            }, {}),
            vnode("p", {}, [
                fileNames.value.length ? '\u5DF2\u9009\u62E9 ' + fileNames.value.length + ' \u4E2A\u6587\u4EF6' : '\u9009\u62E9\u7684\u6587\u4EF6\u4EC5\u4FDD\u5B58\u5728\u5F53\u524D\u6F14\u793A\u72B6\u6001\u4E2D'
            ])
        ]));
    }
});
`,
    drawer: `import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';
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
import { Descriptions } from "atelier-ui-vue/descriptions";
import { Drawer } from "atelier-ui-vue/drawer";
export const ProjectDrawer = defineComponent({
    "name": "ProjectDrawer",
    "props": [],
    "setup": (props, { slots }) => {
        const open = vueRef(false);
        const setOpen = refSetter(open);
        return () => (vnode(Fragment, null, [
            vnode(Button, {
                "variant": "primary",
                "onClick": () => setOpen(true)
            }, {
                "default": () => [
                    "\u67E5\u770B\u9879\u76EE\u8BE6\u60C5"
                ]
            }),
            vnode(Drawer, {
                "open": open.value,
                "title": "\u9879\u76EE\u8BE6\u60C5",
                "onClose": () => setOpen(false)
            }, {
                "default": () => [
                    vnode("p", {}, [
                        "\u9879\u76EE\u6210\u5458\u3001\u8BBF\u95EE\u6743\u9650\u548C\u6700\u8FD1\u52A8\u6001\u4F1A\u663E\u793A\u5728\u8FD9\u91CC\u3002"
                    ]),
                    vnode(Descriptions, {
                        "column": 1,
                        "items": [
                            { key: 'owner', label: '\u8D1F\u8D23\u4EBA', children: '\u6797\u77E5\u590F' },
                            { key: 'status', label: '\u72B6\u6001', children: '\u8FDB\u884C\u4E2D' },
                        ]
                    }, {})
                ]
            })
        ]));
    }
});
`,
} as const;
const projects: Project[] = [
    { id: 'p-01', name: '品牌视觉升级', owner: '林知夏', status: '进行中', updated: '3 分钟前', members: 8 },
    { id: 'p-02', name: '移动端体验优化', owner: '陈一川', status: '评审中', updated: '28 分钟前', members: 5 },
    { id: 'p-03', name: '秋季产品发布', owner: '周禾', status: '已完成', updated: '昨天', members: 12 },
    { id: 'p-04', name: '客户洞察研究', owner: '许安然', status: '进行中', updated: '昨天', members: 4 },
    { id: 'p-05', name: '设计系统 2.0', owner: '顾清', status: '评审中', updated: '2 天前', members: 9 },
    { id: 'p-06', name: '增长落地页', owner: '沈星野', status: '已完成', updated: '3 天前', members: 3 },
    { id: 'p-07', name: '合作伙伴门户', owner: '白予', status: '进行中', updated: '4 天前', members: 7 },
    { id: 'p-08', name: '数据看板改版', owner: '叶知秋', status: '已完成', updated: '上周', members: 6 },
    { id: 'p-09', name: '帮助中心重构', owner: '唐木', status: '评审中', updated: '上周', members: 4 },
];
const projectColumns: TableColumn<Project>[] = [
    { key: 'name', title: '项目名称', dataIndex: 'name', sorter: true, render: (value: unknown) => vnode("span", {
            "class": "project-cell"
        }, [
            vnode("i", {
                "class": "project-cell__icon"
            }, [
                "✳"
            ]),
            vnode("b", {}, [
                String(value)
            ])
        ]) },
    { key: 'owner', title: '负责人', dataIndex: 'owner' },
    { key: 'status', title: '状态', dataIndex: 'status', filters: [{ label: '进行中', value: '进行中' }, { label: '评审中', value: '评审中' }, { label: '已完成', value: '已完成' }], onFilter: (value: string, record: Project) => record.status === value, render: (value: unknown) => vnode("span", {
            "class": `status-pill status-pill--${value === '进行中' ? 'active' : value === '评审中' ? 'review' : 'done'}`
        }, [
            vnode("i", {}, []),
            String(value)
        ]) },
    { key: 'members', title: '成员', dataIndex: 'members', align: 'center' },
    { key: 'updated', title: '最近更新', dataIndex: 'updated', sorter: true },
];
