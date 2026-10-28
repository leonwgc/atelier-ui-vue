<script setup lang="ts">
import './styles/theme.css';
import './styles/layout.css';
withDefaults(defineProps<{ width?: number | string }>(), { width: 220 });
</script>

<template>
<aside class="at-layout__sider" :style="{ width: typeof width === 'number' ? `${width}px` : width }"><slot /></aside>
</template>
