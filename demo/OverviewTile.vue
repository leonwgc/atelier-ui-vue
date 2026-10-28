<script setup lang="ts">
defineProps<{ index: string; title: string; subtitle: string; color: string; icon: string }>();
</script>
<template><button type="button" :class="['overview-tile', `overview-tile--${color}`]"><div class="overview-tile__head"><span class="tile-icon">{{ icon }}</span><span class="tile-index">{{ index }}</span></div><div class="overview-tile__text"><h3>{{ title }}</h3><span>{{ subtitle }}</span></div><div class="overview-tile__visual"><slot /></div><span class="tile-arrow">↗</span></button></template>
