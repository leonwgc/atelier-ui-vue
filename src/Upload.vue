<script setup lang="ts">
import './styles/theme.css';
import './styles/upload.css';
import { ref } from 'vue';
const props = defineProps<{ accept?: string; multiple?: boolean; disabled?: boolean }>();
const input = ref<HTMLInputElement | null>(null); const files = ref<File[]>([]);
const emit = defineEmits<{ change: [files: File[]] }>();
function update(incoming: File[]) { if (props.disabled) return; const types = props.accept?.split(',').map(value => value.trim().toLowerCase()).filter(Boolean) ?? []; const accepted = incoming.filter(file => !types.length || types.some(type => type.startsWith('.') ? file.name.toLowerCase().endsWith(type) : type.endsWith('/*') ? file.type.toLowerCase().startsWith(type.slice(0, -1)) : file.type.toLowerCase() === type)); files.value = props.multiple ? [...files.value, ...accepted] : accepted.slice(0, 1); emit('change', files.value); }
function drop(event: DragEvent) { event.preventDefault(); update(Array.from(event.dataTransfer?.files ?? [])); }
function choose(event: Event) { const element = event.target as HTMLInputElement; update(Array.from(element.files ?? [])); element.value = ''; }
function remove(index: number) { files.value = files.value.filter((_, at) => at !== index); emit('change', files.value); }
</script>

<template>
<div :class="['at-upload', { 'at-upload--disabled': disabled }]" @dragover.prevent @drop="drop"><input ref="input" class="at-upload__input" type="file" :accept="accept" :multiple="multiple" :disabled="disabled" @change="choose"><div class="at-upload__prompt"><span class="at-upload__icon" aria-hidden="true">↑</span><div><strong>拖动文件到此处，或 <button type="button" :disabled="disabled" @click="input?.click()">选择文件</button></strong><span>{{ accept ? `支持格式：${accept}` : '可拖拽文件上传' }}</span></div></div><ul v-if="files.length" class="at-upload__list" aria-label="已选文件"><li v-for="(file, index) in files" :key="`${file.name}-${file.lastModified}-${index}`"><span>{{ file.name }}</span><button type="button" :disabled="disabled" :aria-label="`移除 ${file.name}`" @click="remove(index)">移除</button></li></ul></div>
</template>
