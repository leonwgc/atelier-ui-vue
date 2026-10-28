<script setup lang="ts">import './styles/theme.css'; import './styles/list.css';</script>
<template><div class="at-list__item"><div class="at-list__item-main"><div class="at-list__item-content"><slot /></div><ul v-if="$slots.actions" class="at-list__actions"><slot name="actions" /></ul></div><div v-if="$slots.extra" class="at-list__item-extra"><slot name="extra" /></div></div></template>
