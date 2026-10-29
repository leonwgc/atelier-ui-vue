import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  root: 'demo',
  base: './',
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^atelier-ui-vue\/(.+)$/,
        replacement: new URL('../src/entries/$1.ts', import.meta.url).pathname,
      },
      {
        find: 'atelier-ui-vue',
        replacement: new URL('../src/index.ts', import.meta.url).pathname,
      },
    ],
  },
  build: { outDir: '../docs', emptyOutDir: true },
});
