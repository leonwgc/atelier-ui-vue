import { readdirSync, readFileSync } from 'node:fs';
import { parse, compileScript, compileTemplate } from '@vue/compiler-sfc';
const directory = new URL('../demo/examples/', import.meta.url);
const files = readdirSync(directory).filter((name) => name.endsWith('.vue'));
for (const filename of files) {
  try {
    const source = readFileSync(new URL(filename, directory), 'utf8');
    if (/\b(?:vnode|createVNode)\s*\(/.test(source))
      throw new Error(`${filename}: render helper found`);
    const { descriptor, errors } = parse(source, { filename });
    if (errors.length) throw new Error(`${filename}: ${errors.join('\n')}`);
    const script = compileScript(descriptor, { id: filename });
    const template = compileTemplate({
      source: descriptor.template.content,
      filename,
      id: filename,
      compilerOptions: { bindingMetadata: script.bindings },
    });
    if (template.errors.length)
      throw new Error(`${filename}: ${template.errors.join('\n')}`);
  } catch (error) {
    throw new Error(`${filename}: ${error.message}`);
  }
}
console.log(`${files.length} Vue SFC examples compiled successfully`);
