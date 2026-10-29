<script setup lang="ts">
import {
  Layout,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutSider,
} from 'atelier-ui-vue/layout';
</script>

<template>
  <Layout>
    <template #default>
      <LayoutHeader><template #default>工作区标题</template></LayoutHeader>
      <Layout>
        <template #default>
          <LayoutSider><template #default>项目导航</template></LayoutSider>
          <LayoutContent><template #default>主要内容</template></LayoutContent>
        </template>
      </Layout>
      <LayoutFooter><template #default>© 2026</template></LayoutFooter>
    </template>
  </Layout>
</template>
