<script setup lang="ts">
import './styles/theme.css';
import './styles/expand.css';
import { ref, watchEffect } from 'vue';
const props = withDefaults(defineProps<{ open: boolean; duration?: number }>(), { duration: 300 });
const content = ref<HTMLElement | null>(null);
watchEffect(() => { if (content.value) content.value.inert = !props.open; });
</script>

<template>
<div class="at-expand" :data-open="open ? 'true' : 'false'" :aria-hidden="!open" :style="{ '--at-expand-duration': `${Math.max(0, duration)}ms` }"><div ref="content" class="at-expand__inner"><slot /></div></div>
</template>
