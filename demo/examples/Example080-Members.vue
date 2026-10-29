<script setup lang="ts">
import { Avatar } from 'atelier-ui-vue/avatar';
import { List, ListItem, ListItemMeta } from 'atelier-ui-vue/list';
import { Tag } from 'atelier-ui-vue/tag';

const members = [
  {
    id: 'lin',
    name: '林知夏',
    role: '产品设计师',
    email: 'lin@atelier.design',
  },
];
</script>

<template>
  <List
    :dataSource="members"
    rowKey="id"
    bordered
    header="团队成员"
    :pagination="{ pageSize: 3 }"
  >
    <template #default="scope">
      <ListItem>
        <template #extra>
          <Tag>
            <template #default>{{ members[scope.index].role }}</template>
          </Tag>
        </template>
        <template #default>
          <ListItemMeta
            :title="members[scope.index].name"
            :description="members[scope.index].email"
          >
            <template #avatar>
              <Avatar :name="members[scope.index].name"></Avatar>
            </template>
          </ListItemMeta>
        </template>
      </ListItem>
    </template>
  </List>
  <List
    :dataSource="members"
    rowKey="id"
    :grid="{ column: 4, gutter: 14, xs: 1, sm: 2 }"
  >
    <template #default="scope">
      <ListItem>
        <template #default>{{ members[scope.index].name }}</template>
      </ListItem>
    </template>
  </List>
</template>
