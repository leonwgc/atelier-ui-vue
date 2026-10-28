from pathlib import Path
import re,json,os
root=Path(__file__).resolve().parent.parent
source=Path(os.environ.get('ATELIER_REACT_SOURCE', root.parent/'atelier-ui'))
index=(root/'src/index.ts').read_text()
exports={}
for block,module in re.findall(r'^export \{([^}]+)\} from [\'"]([^\'"]+)',index,re.M):
 for element in block.split(','):
  parts=element.strip().split(' as '); imported=parts[0]; name=parts[-1]; exports[name]=(module,imported)
existing=set()
for p in [root/'src/data-types.ts',root/'src/form/types.ts',root/'src/config.ts',root/'src/table-types.ts',root/'src/menu-types.ts',root/'src/tree-types.ts',root/'src/Typography.ts',root/'src/Splitter.ts',root/'src/Modal.ts',root/'src/internal/color.ts',root/'src/internal/time.ts',root/'src/internal/watermark.ts',root/'src/internal/qr.ts']:
 existing.update(re.findall(r'export (?:interface|type) (\w+)',p.read_text()))
source_index=(source/'src/index.ts').read_text()
alltypes=[name.strip() for block in re.findall(r'export type \{([^}]+)\}',source_index) for name in block.split(',')]
aliases=[]
for name in alltypes:
 if name in existing or not name.endswith('Props'):continue
 component=name[:-5]
 if component=='TypographyBase':component='Text'
 if component not in exports:raise RuntimeError(f'No component for {name}')
 module,imported=exports[component];base=f"InstanceType<typeof import('{module}')['{imported}']>['$props']"
 generic=''
 if component in ['Table','List','Listy','Masonry','AnimatedList']:generic='<T = unknown>'
 if component=='Table':base=f"Omit<{base}, 'columns' | 'dataSource' | 'rowKey'> & {{ columns: import('./table-types').TableColumn<T>[]; dataSource: T[]; rowKey: keyof T | ((record: T) => string | number) }}"
 elif component=='List':base=f"Omit<{base}, 'dataSource' | 'rowKey'> & {{ dataSource: T[]; rowKey?: keyof T | ((item: T, index: number) => string | number) }}"
 elif component in ['Listy','AnimatedList']:base=f"Omit<{base}, 'items' | 'itemKey' | 'getItemKey'> & {{ items: T[]; itemKey?: (item: T, index: number) => string | number; getItemKey?: (item: T, index: number) => string | number }}"
 elif component=='Masonry':base=f"Omit<{base}, 'items' | 'dataSource' | 'itemKey'> & {{ items?: T[]; dataSource?: T[]; itemKey?: (item: T, index: number) => string | number }}"
 elif component=='Slider':generic="<T extends import('./data-types').SliderValue = number>";base=f"Omit<{base}, 'modelValue' | 'defaultValue'> & {{ modelValue?: T; defaultValue?: T }}"
 elif component=='Segmented':generic='<T extends string = string>';base=f"Omit<{base}, 'modelValue' | 'defaultValue' | 'options'> & {{ modelValue?: T; defaultValue?: T; options: (T | import('./data-types').SegmentedOption<T>)[] }}"
 aliases.append(f'export type {name}{generic} = {base};')
(root/'src/public-props.ts').write_text('\n'.join(aliases)+'\n')
if "export type * from './public-props';" not in index:index+="export type * from './public-props';\n"
(root/'src/index.ts').write_text(index)
entries={'index':'src/index.ts'}
p=root/'package.json';d=json.loads(p.read_text());d['exports']={'.':{'types':'./dist/index.d.ts','import':'./dist/index.js','require':'./dist/index.cjs'},'./style.css':'./dist/index.css','./theme.css':'./dist/theme.css'}
for original in sorted((source/'src/entries').glob('*.ts')):
 runtime=[x.strip().split(' as ')[-1] for block in re.findall(r'^export \{([^}]+)\}',original.read_text(),re.M) for x in block.split(',')]
 if not runtime:continue
 lines=[]
 for name in runtime:
  if name not in exports:raise RuntimeError(f'Missing export {name}')
  module,imported=exports[name]; lines.append(f"export {{ {imported+' as '+name if imported!=name else name} }} from '{'.'+module}';")
 type_names=[x.strip() for block in re.findall(r'^export type \{([^}]+)\}',original.read_text(),re.M) for x in block.split(',')]
 if type_names:lines.append("export type { "+', '.join(type_names)+" } from '../index';")
 entry=f'src/entries/{original.name}';(root/entry).write_text('\n'.join(lines)+'\n');slug=original.stem;entries[slug]=entry;d['exports']['./'+slug]={'types':f'./dist/entries/{slug}.d.ts','import':f'./dist/{slug}.js','require':f'./dist/{slug}.cjs'}
# Preserve extra Vue compound-component entry points as well.
for name,(module,imported) in exports.items():
 if not name[0].isupper():continue
 slug=re.sub(r'([A-Z]+)([A-Z][a-z])',r'\1-\2',name);slug=re.sub(r'([a-z0-9])([A-Z])',r'\1-\2',slug).lower()
 if slug in entries:continue
 entry=f'src/entries/{slug}.ts';(root/entry).write_text(f"export {{ {imported+' as '+name if imported!=name else name} }} from '{'.'+module}';\n");entries[slug]=entry;d['exports']['./'+slug]={'types':f'./dist/entries/{slug}.d.ts','import':f'./dist/{slug}.js','require':f'./dist/{slug}.cjs'}
(root/'library-entries.json').write_text(json.dumps(entries,indent=2)+'\n')
d['main']='./dist/index.cjs';d['module']='./dist/index.js';d['types']='./dist/index.d.ts';p.write_text(json.dumps(d,indent=2)+'\n')
allruntime=[name.strip() for block in re.findall(r'^export \{([^}]+)\}',source_index,re.M) for name in block.split(',')]
(root/'MIGRATION.md').write_text('# 迁移清单\n\n勾选代表已有 Vue 实现；交互和示例的完整验收仍需逐项核对。源项目：`~/atelier-ui`。\n\n'+'\n'.join(f'- [{"x" if name in exports else " "}] {name}' for name in allruntime)+'\n')
print(f'{len(allruntime)} source runtime exports; {len(entries)-1} entries; {len(aliases)} component prop types')
