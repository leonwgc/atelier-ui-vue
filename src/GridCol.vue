<script setup lang="ts">
import './styles/theme.css';
import './styles/grid.css';
withDefaults(defineProps<{ span?: number }>(), { span: 12 });
</script>

<template>
<div class="at-grid__col" :style="{ gridColumn: `span ${span}` }"><slot /></div>
</template>
