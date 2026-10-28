import ts from 'typescript';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
const root=fileURLToPath(new URL('..', import.meta.url)).replace(/\/$/, ''), samples=new Map();
for(const name of ['CorePages','DataEntryPages','DataDisplayPages','NavigationPages','AnimationPages','AdditionalPages']) {
const source=ts.createSourceFile(name,fs.readFileSync(`${root}/demo/${name}.ts`,'utf8'),ts.ScriptTarget.Latest,true);
function walk(node){if(ts.isNoSubstitutionTemplateLiteral(node)&&node.text.includes('atelier-ui-vue')&&node.text.startsWith('import '))samples.set(node.text,`${name}:${source.getLineAndCharacterOfPosition(node.getStart()).line+1}`);ts.forEachChild(node,walk);}walk(source);
}
const virtual=new Map([...samples.keys()].map((code,index)=>[`${root}/.sample-check/${index}.ts`,code]));
const options={target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext,moduleResolution:ts.ModuleResolutionKind.Bundler,strict:true,skipLibCheck:true,noEmit:true,lib:['lib.es2022.d.ts','lib.dom.d.ts','lib.dom.iterable.d.ts']};
const host=ts.createCompilerHost(options),read=host.readFile,fileExists=host.fileExists;
host.readFile=name=>virtual.get(name)??read(name);host.fileExists=name=>virtual.has(name)||fileExists(name);
const program=ts.createProgram([...virtual.keys()],options,host);const errors=ts.getPreEmitDiagnostics(program);
console.log(`${samples.size} standalone samples, ${errors.length} diagnostics`);
for(const error of errors){let label='';if(error.file){const pos=error.file.getLineAndCharacterOfPosition(error.start??0);label=`${samples.get(virtual.get(error.file.fileName))??error.file.fileName} sample line ${pos.line+1}`;}console.log(label,ts.flattenDiagnosticMessageText(error.messageText,' '));}
process.exitCode=errors.length?1:0;
