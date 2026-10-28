<script setup lang="ts">
import './styles/theme.css';
import './styles/avatar.css';
import { ref, watch } from 'vue';
const props = withDefaults(defineProps<{ src?: string; alt?: string; name?: string; size?: 'sm' | 'md' | 'lg' }>(), { size: 'md' });
const failed = ref(false);
watch(() => props.src, () => { failed.value = false; });
</script>

<template>
<span :class="['at-avatar', `at-avatar--${size}`]" :aria-label="alt ?? name ?? '用户'"><img v-if="src && !failed" class="at-avatar__image" :src="src" :alt="alt ?? name ?? ''" @error="failed = true"><span v-else class="at-avatar__fallback" aria-hidden="true">{{ name?.trim().slice(0, 1).toUpperCase() || '?' }}</span></span>
</template>
