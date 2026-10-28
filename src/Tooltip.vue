<script setup lang="ts">
import './styles/theme.css';
import './styles/tooltip.css';
import Overlay from './internal/Overlay.vue';
withDefaults(defineProps<{ title?: string; placement?: 'top' | 'bottom' | 'left' | 'right' }>(), { placement: 'top' });
</script>

<template>
<Overlay class="at-tooltip__trigger" :trigger="['hover', 'focus']" :placement="placement" panel-class="at-tooltip__content" role="tooltip"><slot /><template #content><slot name="title">{{ title }}</slot></template></Overlay>
</template>
