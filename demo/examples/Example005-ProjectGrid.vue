<script setup lang="ts">
import { Grid, GridCol } from 'atelier-ui-vue/grid';
</script>

<template>
  <Grid :columns="24" :gap="12">
    <template #default>
      <GridCol :span="12"><template #default>项目名称</template></GridCol>
      <GridCol :span="12"><template #default>负责人</template></GridCol>
      <GridCol :span="24"><template #default>更多信息</template></GridCol>
    </template>
  </Grid>
</template>
