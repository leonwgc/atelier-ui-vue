<script setup lang="ts">
import { Textarea } from 'atelier-ui-vue/textarea';
</script>

<template>
  <Textarea
    label="项目简介"
    placeholder="描述一下这个项目…"
    :rows="4"
    hint="简单介绍项目目标和团队协作方式"
  ></Textarea>
</template>
