<script setup lang="ts">
import './styles/theme.css';
import './styles/result.css';
withDefaults(defineProps<{ status?: 'success' | 'error' | 'info' | 'warning' | '404' | '500'; title?: string; subTitle?: string }>(), { status: 'info' });
const icons = { success: '✓', error: '×', info: 'i', warning: '!', '404': '404', '500': '500' };
</script>

<template>
<section :class="['at-result', `at-result--${status}`]"><span class="at-result__icon" aria-hidden="true"><slot name="icon">{{ icons[status] }}</slot></span><h2><slot name="title">{{ title }}</slot></h2><p v-if="subTitle || $slots.subTitle"><slot name="subTitle">{{ subTitle }}</slot></p><div v-if="$slots.extra" class="at-result__extra"><slot name="extra" /></div></section>
</template>
