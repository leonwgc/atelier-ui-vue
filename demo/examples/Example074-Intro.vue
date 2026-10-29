<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import {
  Link,
  Paragraph,
  Text,
  Title,
  Typography,
} from 'atelier-ui-vue/typography';

function refSetter<T>(state: Ref<T>) {
  return (next: T | ((previous: T) => T)) => {
    state.value =
      typeof next === 'function'
        ? (next as (previous: T) => T)(state.value)
        : next;
  };
}
const name = ref('Atelier 设计系统');
const setName = refSetter(name);
</script>

<template>
  <Typography>
    <template #default>
      <Title :level="2">
        <template #default>{{ name }}</template>
      </Title>
      <Paragraph>
        <template #default>
          一套
          <Text strong><template #default>强调细节</template></Text>
          的组件库。
          <Text type="secondary"><template #default>次要</template></Text>
          、
          <Text code><template #default>code</template></Text>
          、
          <Text keyboard><template #default>⌘K</template></Text>
          、
          <Text mark><template #default>高亮</template></Text>
          与
          <Link href="#"><template #default>链接</template></Link>
          。
        </template>
      </Paragraph>
      <Paragraph copyable>
        <template #default>这段文本可以一键复制。</template>
      </Paragraph>
      <Text :editable="{ onChange: setName }">
        <template #default>{{ name }}</template>
      </Text>
      <Paragraph :ellipsis="{ rows: 2, expandable: true }">
        <template #default>很长的段落……</template>
      </Paragraph>
      <Text ellipsis :style="{ maxWidth: 240 }">
        <template #default>单行省略文本</template>
      </Text>
    </template>
  </Typography>
</template>
