<script setup lang="ts">
import { Splitter, SplitterPanel } from 'atelier-ui-vue/splitter';
</script>

<template>
  <Splitter
    :style="{ height: 240 }"
    @resizeEnd="(sizes: number[]) => console.log(sizes)"
  >
    <template #default>
      <SplitterPanel defaultSize="30%" min="18%" max="50%" collapsible>
        <template #default>导航</template>
      </SplitterPanel>
      <SplitterPanel><template #default>内容区</template></SplitterPanel>
      <SplitterPanel :defaultSize="200" :resizable="false">
        <template #default>属性面板</template>
      </SplitterPanel>
    </template>
  </Splitter>
  <Splitter layout="vertical" :style="{ height: 260 }" lazy>
    <template #default>
      <SplitterPanel defaultSize="40%" :min="60">
        <template #default>编辑器</template>
      </SplitterPanel>
      <SplitterPanel collapsible>
        <template #default>控制台</template>
      </SplitterPanel>
    </template>
  </Splitter>
</template>
