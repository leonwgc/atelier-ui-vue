<script setup lang="ts">
import { Button } from 'atelier-ui-vue/button';
import { Card } from 'atelier-ui-vue/card';
</script>

<template>
  <div>
    <Card title="品牌视觉升级" hoverable>
      <template #extra>
        <Button variant="tertiary">
          <template #default>查看详情</template>
        </Button>
      </template>
      <template #default>
        <p>正在为新一季产品更新品牌视觉与设计规范。</p>
        <span>最近更新 · 3 分钟前</span>
      </template>
    </Card>
    <Card title="快速提示" :bordered="false">
      <template #default>卡片可以按需关闭边框，适合嵌入分组内容。</template>
    </Card>
  </div>
</template>
