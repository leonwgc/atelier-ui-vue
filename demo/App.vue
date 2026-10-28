<script setup lang="ts">
import { computed, nextTick, onMounted, onBeforeUnmount, ref } from 'vue';
import navigation from './navigation.json';
import Overview from './Overview.vue';
import DocsPage from './DocsPage.vue';
import { useDialog } from '../src/internal/dialog';
const page = ref('overview');
const mobileMenu = ref(false);
const sidebarCollapsed = ref(false);
const collapsedGroups = ref<string[]>([]);
const searchOpen = ref(false);
const searchQuery = ref('');
const activeResult = ref(0);
const searchInput = ref<HTMLInputElement | null>(null);
const searchButton = ref<HTMLButtonElement | null>(null);
const searchPanel = ref<HTMLElement | null>(null);
const currentPage = computed(() => navigation.find(item => item.id === page.value) ?? navigation[0]);
const groups = [...new Set(navigation.map(item => item.group))];
const searchResults = computed(() => navigation.filter(item => `${item.title} ${item.group}`.toLocaleLowerCase().includes(searchQuery.value.trim().toLocaleLowerCase())));
function navigate(id: string) { page.value = id; mobileMenu.value = false; searchOpen.value = false; const group = navigation.find(item => item.id === id)?.group; collapsedGroups.value = collapsedGroups.value.filter(item => item !== group); window.scrollTo({ top: 0 }); }
function toggleGroup(group: string) { collapsedGroups.value = collapsedGroups.value.includes(group) ? collapsedGroups.value.filter(item => item !== group) : [...collapsedGroups.value, group]; }
async function openSearch() { searchQuery.value = ''; activeResult.value = 0; searchOpen.value = true; await nextTick(); searchInput.value?.focus(); }
function closeSearch() { searchOpen.value = false; searchButton.value?.focus(); }
function shortcut(event: KeyboardEvent) { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); void openSearch(); } }
function searchKey(event: KeyboardEvent) {
  if (event.key === 'Escape') { event.preventDefault(); closeSearch(); }
  if (event.key === 'ArrowDown') { event.preventDefault(); activeResult.value = Math.min(activeResult.value + 1, searchResults.value.length - 1); }
  if (event.key === 'ArrowUp') { event.preventDefault(); activeResult.value = Math.max(activeResult.value - 1, 0); }
  if (event.key === 'Enter' && searchResults.value[activeResult.value]) { event.preventDefault(); navigate(searchResults.value[activeResult.value].id); }
  void nextTick(() => document.getElementById(`search-result-${searchResults.value[activeResult.value]?.id}`)?.scrollIntoView({ block: 'nearest' }));
}
useDialog(() => searchOpen.value, searchPanel, closeSearch, () => true);
onMounted(() => window.addEventListener('keydown', shortcut));
onBeforeUnmount(() => window.removeEventListener('keydown', shortcut));
</script>
<template>
  <div :class="['site-shell', { 'site-shell--sidebar-collapsed': sidebarCollapsed }]">
    <aside :class="['sidebar', { 'sidebar--open': mobileMenu, 'sidebar--collapsed': sidebarCollapsed }]">
      <a class="brand" href="#top" @click.prevent="navigate('overview')"><span class="brand__mark"><span /><span /><span /><span /></span><span class="brand__name">atelier<span>ui</span><small>DESIGN SYSTEM</small></span></a>
      <div class="sidebar__version"><span>组件手册</span><span class="version-pill">v0.1.0</span></div>
      <nav class="side-nav" aria-label="组件导航"><div v-for="(group, index) in groups" :key="group" class="side-nav__group">
        <button type="button" class="side-nav__label" :aria-label="`${group} 分类`" :aria-expanded="!collapsedGroups.includes(group)" :aria-controls="`nav-group-${index}`" :title="sidebarCollapsed ? group : undefined" @click="toggleGroup(group)"><span>{{ sidebarCollapsed ? group.slice(0, 1) : group }}</span><span :class="['side-nav__chevron', { 'side-nav__chevron--collapsed': collapsedGroups.includes(group) }]" aria-hidden="true">⌄</span></button>
        <div :id="`nav-group-${index}`" class="side-nav__items" :hidden="collapsedGroups.includes(group)"><button v-for="item in navigation.filter(item => item.group === group)" :key="item.id" type="button" :title="sidebarCollapsed ? item.title : undefined" :aria-label="item.title" :class="['side-nav__item', { 'side-nav__item--active': page === item.id }]" @click="navigate(item.id)"><span class="side-nav__icon">{{ item.icon }}</span><span class="side-nav__item-label">{{ item.title }}</span><span v-if="item.id === 'form'" class="nav-tag">NEW</span></button></div>
      </div></nav>
      <div class="sidebar__bottom"><div class="sidebar-note"><span class="sidebar-note__spark">✳</span><div><strong>精心打磨每个细节</strong><span>为产品界面而生的组件</span></div></div><div class="sidebar__copyright">Made for thoughtful interfaces <span>✦</span></div></div>
    </aside>
    <main id="top" class="main-area">
      <header class="topbar"><button class="sidebar-toggle" type="button" :aria-label="sidebarCollapsed ? '展开侧边栏' : '收起侧边栏'" :title="sidebarCollapsed ? '展开侧边栏' : '收起侧边栏'" @click="sidebarCollapsed = !sidebarCollapsed"><span aria-hidden="true">{{ sidebarCollapsed ? '›' : '‹' }}</span></button><button class="mobile-menu" type="button" :aria-label="mobileMenu ? '关闭导航' : '打开导航'" @click="sidebarCollapsed = false; mobileMenu = !mobileMenu">☰</button><div class="breadcrumbs"><span>组件手册</span><span class="crumb-separator">/</span><strong>{{ currentPage.title }}</strong></div><div class="topbar__right"><button ref="searchButton" class="search-trigger" type="button" aria-label="全局搜索，Command 加 K" @click="openSearch"><span aria-hidden="true">⌕</span><kbd>⌘ K</kbd></button><span class="topbar__status"><i /> 所有组件已就绪</span></div></header>
      <div class="content-wrap"><Overview v-if="page === 'overview'" @navigate="navigate" /><DocsPage v-else :key="page" :id="page" /><footer class="site-footer"><span>Atelier UI · 让界面细节自然发生</span><span>Vue 3 · TypeScript</span></footer></div>
    </main>
    <div v-if="searchOpen" class="search-overlay" @mousedown.self="closeSearch"><section ref="searchPanel" class="global-search" role="dialog" aria-modal="true" aria-labelledby="global-search-title" tabindex="-1"><h2 id="global-search-title" class="sr-only">搜索组件</h2><div class="global-search__input-wrap"><span aria-hidden="true">⌕</span><input ref="searchInput" v-model="searchQuery" placeholder="搜索组件或分类…" aria-label="搜索组件或分类" aria-controls="global-search-results" :aria-activedescendant="searchResults[activeResult] ? `search-result-${searchResults[activeResult].id}` : undefined" autocomplete="off" @input="activeResult = 0" @keydown="searchKey"><kbd>ESC</kbd></div><div id="global-search-results" class="global-search__results" role="listbox" aria-label="搜索结果"><button v-for="(item, index) in searchResults" :id="`search-result-${item.id}`" :key="item.id" type="button" role="option" :aria-selected="activeResult === index" :class="['global-search__result', { 'global-search__result--active': activeResult === index }]" @mouseenter="activeResult = index" @click="navigate(item.id)"><span class="global-search__result-icon">{{ item.icon }}</span><span class="global-search__result-copy"><strong>{{ item.title }}</strong><small>{{ item.group }}</small></span><kbd>↵</kbd></button><p v-if="!searchResults.length" class="global-search__empty">没有找到匹配的组件</p></div><footer class="global-search__footer"><span>↑ ↓ 选择</span><span>Enter 打开</span><span>Esc 关闭</span></footer></section></div>
  </div>
</template>
