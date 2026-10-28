<script setup lang="ts">
defineProps<{ number: string; title: string; text: string }>();
</script>
<template><div class="principle"><span class="principle__number">{{ number }}</span><div><h3>{{ title }}</h3><p>{{ text }}</p></div><span class="principle__spark">✦</span></div></template>
