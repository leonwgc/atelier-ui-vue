<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{ code: string }>();
const parts = computed(() =>
  props.code
    .split(
      /(<!--[\s\S]*?-->|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|<\/?[A-Za-z][\w.-]*|\b(?:import|from|const|let|function|return|async|await|true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b)/g,
    )
    .map((text) => ({
      text,
      className:
        text.startsWith('//') || text.startsWith('<!--')
          ? 'code-token--comment'
          : /^['"]/.test(text)
            ? 'code-token--string'
            : text.startsWith('<')
              ? 'code-token--tag'
              : /^(import|from|const|let|function|return|async|await|true|false|null|undefined)$/.test(
                    text,
                  )
                ? 'code-token--keyword'
                : /^\d/.test(text)
                  ? 'code-token--number'
                  : undefined,
    })),
);
</script>
<template>
  <pre
    class="code-panel"
    tabindex="0"
    aria-label="Vue 示例源代码"
  ><code><span v-for="(part, index) in parts" :key="index" :class="part.className">{{ part.text }}</span></code></pre>
</template>
