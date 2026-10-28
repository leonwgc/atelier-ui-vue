import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { readFileSync, readdirSync } from 'node:fs';
import entries from './library-entries.json' with { type: 'json' };
function attachStyles(): Plugin {
  return {
    name: 'atelier-vue-component-styles',
    generateBundle(options, bundle) {
      for (const item of Object.values(bundle)) {
        if (item.type !== 'chunk') continue;
        const styles = (item as typeof item & { viteMetadata?: { importedCss?: Set<string> } }).viteMetadata?.importedCss;
        if (!styles?.size) continue;
        const files = [...new Set([...styles, 'theme.css'])];
        item.code = options.format === 'es'
          ? files.map(file => `import ${JSON.stringify(`./${file}`)};`).join('\n') + '\n' + item.code
          : `if(typeof document!=="undefined"&&!(typeof process!=="undefined"&&process.versions?.node)){${files.map(file => `require(${JSON.stringify(`./${file}`)});`).join('')}}\n${item.code}`;
      }
      if (!bundle['index.css']) this.emitFile({ type: 'asset', fileName: 'index.css', source: ['theme.css', ...readdirSync('src/styles').filter(name => name.endsWith('.css') && name !== 'theme.css')].map(name => readFileSync(`src/styles/${name}`, 'utf8')).join('\n') });
      this.emitFile({ type: 'asset', fileName: 'theme.css', source: readFileSync('src/styles/theme.css', 'utf8') });
    },
  };
}
export default defineConfig({
  plugins: [vue(), attachStyles()],
  build: {
    cssCodeSplit: true,
    lib: { entry: entries, formats: ['es', 'cjs'], fileName: (format, name) => `${name}.${format === 'es' ? 'js' : 'cjs'}` },
    rolldownOptions: { external: ['vue'] },
  },
});
