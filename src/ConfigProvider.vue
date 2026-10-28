<script setup lang="ts">
import { computed, provide, reactive } from 'vue';
import { configKey, type ThemeTokens, type ConfigSize, type ConfigLocale } from './config';
import './styles/theme.css'; import './styles/config-provider.css';
const props = withDefaults(defineProps<{ prefixCls?: string; direction?: 'ltr' | 'rtl'; size?: ConfigSize; locale?: ConfigLocale; theme?: ThemeTokens }>(), { prefixCls: 'at', direction: 'ltr', size: 'middle', locale: 'zh-CN', theme: () => ({}) });
provide(configKey, reactive({ get prefixCls() { return props.prefixCls; }, get direction() { return props.direction; }, get size() { return props.size; }, get locale() { return props.locale; }, get theme() { return props.theme; } }));
const style = computed(() => ({ '--at-control-height': props.size === 'small' ? '32px' : props.size === 'large' ? '48px' : '40px', '--at-color-primary': props.theme.primaryColor, '--at-color-primary-hover': props.theme.primaryColor ? `color-mix(in srgb, ${props.theme.primaryColor} 88%, black)` : undefined, '--at-color-primary-soft': props.theme.primaryColor ? `color-mix(in srgb, ${props.theme.primaryColor} 10%, white)` : undefined, '--at-radius-md': props.theme.borderRadius, '--at-color-surface': props.theme.colorBgContainer, '--at-color-text': props.theme.colorText, '--at-color-border': props.theme.colorBorder }));
</script>
<template><div :class="`${prefixCls}-config`" :dir="direction" :lang="locale" :data-size="size" :style="style"><slot /></div></template>
