<script setup lang="ts">
import './styles/theme.css';
import './styles/pagination.css';
import { computed } from 'vue';
const props = withDefaults(defineProps<{ current: number; pageSize: number; total: number; pageSizeOptions?: number[]; showSizeChanger?: boolean }>(), { pageSizeOptions: () => [10, 20, 50] });
const pages = computed(() => Math.max(1, Math.ceil(props.total / Math.max(1, props.pageSize))));
const page = computed(() => Math.min(Math.max(1, props.current), pages.value));
const numbers = computed(() => { const start = Math.max(1, Math.min(page.value - 2, pages.value - 4)); return Array.from({ length: Math.min(5, pages.value) }, (_, index) => start + index); });
const emit = defineEmits<{ 'update:current': [value: number]; 'update:pageSize': [value: number]; change: [page: number, pageSize: number] }>();
function change(next: number, size = props.pageSize) { emit('update:current', next); if (size !== props.pageSize) emit('update:pageSize', size); emit('change', next, size); }
function sizeChange(event: Event) { change(1, Number((event.target as HTMLSelectElement).value)); }
</script>

<template>
<nav class="at-pagination" aria-label="分页"><span class="at-pagination__total">共 {{ total }} 条</span><label v-if="showSizeChanger" class="at-pagination__size">每页<select aria-label="每页条数" :value="pageSize" @change="sizeChange"><option v-for="size in pageSizeOptions" :key="size" :value="size">{{ size }}</option></select>条</label><button type="button" aria-label="上一页" :disabled="page <= 1" @click="change(page - 1)">上一页</button><button v-for="number in numbers" :key="number" type="button" :aria-label="`第 ${number} 页`" :aria-current="number === page ? 'page' : undefined" :class="{ 'at-pagination__page--active': number === page }" @click="change(number)">{{ number }}</button><span v-if="pages > 5" aria-hidden="true">…</span><button type="button" aria-label="下一页" :disabled="page >= pages" @click="change(page + 1)">下一页</button></nav>
</template>
