<script setup lang="ts">
import './styles/theme.css';
import './styles/empty.css';
withDefaults(defineProps<{ description?: string }>(), { description: '暂无数据' });
</script>

<template>
<div class="at-empty"><div class="at-empty__image" aria-hidden="true"><slot name="image"><svg viewBox="0 0 120 82" focusable="false"><path d="M14 17h92v53H14z" fill="#f7f7fc" stroke="#e3e4ee" stroke-width="2"/><path d="M27 30h66M27 41h51M27 52h37" stroke="#dedfee" stroke-width="4" stroke-linecap="round"/><circle cx="90" cy="61" r="13" fill="#eeeaff" stroke="#dcd7ff" stroke-width="2"/><path d="m86 61 3 3 6-7" fill="none" stroke="#7569e9" stroke-width="2" /></svg></slot></div><div class="at-empty__description"><slot name="description">{{ description }}</slot></div><div v-if="$slots.default" class="at-empty__actions"><slot /></div></div>
</template>
