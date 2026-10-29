<script setup lang="ts">
import { computed } from 'vue';
import pages from './pages.json';
import { examples } from './examples';
import ExampleCard from './ExampleCard.vue';
import ApiTable from './ApiTable.vue';
interface Page {
  id: string;
  title?: string;
  description?: string;
  eyebrow?: string;
  group?: string;
  badge?: string;
  rows?: string[][];
  examples: { title: string; description?: string; example: string | null }[];
}
const props = defineProps<{ id: string }>();
const page = computed<Page | undefined>(() =>
  pages.find((item) => item.id === props.id),
);
function example(id: string | null) {
  return id && id in examples
    ? examples[id as keyof typeof examples]
    : undefined;
}
</script>

<template>
  <template v-if="page">
    <div class="page-heading">
      <div class="eyebrow">
        <span class="eyebrow__dot" />
        {{ page.eyebrow ?? page.group?.toLocaleUpperCase() }}
      </div>
      <div class="page-heading__row">
        <div>
          <h1>{{ page.title }}</h1>
          <p>{{ page.description }}</p>
        </div>
        <span class="heading-badge">
          {{ page.badge ?? page.title?.split(' ')[0] }}
        </span>
      </div>
    </div>
    <ExampleCard
      v-for="item in page.examples"
      :key="item.example ?? item.title"
      :title="item.title"
      :description="item.description ?? undefined"
      :code="example(item.example)?.source"
    >
      <component :is="example(item.example)?.component" />
    </ExampleCard>
    <ApiTable v-if="page.rows?.length" :rows="page.rows" />
  </template>
</template>
