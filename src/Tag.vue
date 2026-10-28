<script setup lang="ts">
import './styles/theme.css';
import './styles/tag.css';
withDefaults(defineProps<{ variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger'; closable?: boolean }>(), { variant: 'neutral' });
const emit = defineEmits<{ close: [] }>();
</script>

<template>
<span :class="['at-tag', `at-tag--${variant}`]"><slot /><button v-if="closable" type="button" class="at-tag__close" aria-label="移除标签" @click="emit('close')">×</button></span>
</template>
