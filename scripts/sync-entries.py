from pathlib import Path
import re,json
root=Path(__file__).resolve().parent.parent
index=root/'src/index.ts'
p=root/'package.json';d=json.loads(p.read_text());entries={'index':'src/index.ts'}
for name in re.findall(r'default as (\w+)',index.read_text()):
 slug=re.sub(r'(?<!^)(?=[A-Z])','-',name).lower();entries[slug]=f'src/entries/{slug}.ts';(root/entries[slug]).write_text(f"export {{ default as {name} }} from '../{name}.vue';\n");d['exports']['./'+slug]={'types':f'./dist/entries/{slug}.d.ts','import':f'./dist/{slug}.js'}
p.write_text(json.dumps(d,indent=2)+'\n')
p=root/'vite.config.ts';s=p.read_text();s=re.sub(r'entry: \{.*?\}, formats:', 'entry: '+json.dumps(entries)+', formats:',s);p.write_text(s)
p=root/'MIGRATION.md';s=p.read_text()
for name in re.findall(r'default as (\w+)',index.read_text()):s=s.replace(f'- [ ] {name}\n',f'- [x] {name}\n')
p.write_text(s)
