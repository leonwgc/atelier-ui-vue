import ts from 'typescript';
import fs from 'node:fs';
const root=process.cwd(), source=process.env.ATELIER_REACT_SOURCE ?? new URL('../../atelier-ui', import.meta.url).pathname;
const names=['DataEntryPages','DataDisplayPages','NavigationPages','AnimationPages','AdditionalPages'];
const program=ts.createProgram([...names,'main'].map(name=>`${source}/demo/${name}.tsx`),{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext,moduleResolution:ts.ModuleResolutionKind.Bundler,jsx:ts.JsxEmit.ReactJSX,strict:true,skipLibCheck:true});
let checker=program.getTypeChecker(); const printer=ts.createPrinter({newLine:ts.NewLineKind.LineFeed});
const f=ts.factory, id=name=>f.createIdentifier(name), str=text=>ts.setEmitFlags(f.createStringLiteral(text),ts.EmitFlags.NoAsciiEscaping), call=(name,args)=>f.createCallExpression(id(name),undefined,args), array=items=>f.createArrayLiteralExpression(items,true), prop=(name,value)=>f.createPropertyAssignment(str(name),value);
function inferred(parameter) { if(parameter.type)return parameter.type; const type=checker.getTypeAtLocation(parameter); if(type.flags&ts.TypeFlags.Any)return undefined; return checker.typeToTypeNode(type,parameter,ts.NodeBuilderFlags.NoTruncation|ts.NodeBuilderFlags.UseAliasDefinedOutsideCurrentScope); }
const slotAttrs={icon:'icon',prefix:'prefix',suffix:'suffix',front:'front',back:'back',checkedChildren:'checked',unCheckedChildren:'unchecked',exit:'exit'};
const slotFunctions={ displayRender:['display',['labels','selectedOptions']], renderItem:['default',['item','index']], optionRender:['option',['option','state']], labelRender:['label',['option']], titleRender:['title',['node']], cellRender:['cell',['date','info']], headerRender:['header',['info']], indicatorsRender:['indicators',['current','total']], statusRender:['status',['status','info']] };
function convert(sf,{sample=false}={}) {
 const transformer=context=>{
  let reactive=new Set();let childrenSlot=false;
  function reference(node) { const p=node.parent; if(!p)return true; return !(ts.isPropertyAccessExpression(p)&&p.name===node||ts.isPropertyAssignment(p)&&p.name===node||ts.isBindingElement(p)&&p.name===node||ts.isVariableDeclaration(p)&&p.name===node||ts.isParameter(p)&&p.name===node||ts.isTypeReferenceNode(p)||ts.isPropertySignature(p)||ts.isImportSpecifier(p)||ts.isFunctionDeclaration(p)&&p.name===node); }
  function visit(node) {
   if(ts.isImportDeclaration(node)) { const module=node.moduleSpecifier.text; if(module==='react'||module.startsWith('react-dom'))return undefined; if(module==='./styles.css')return undefined; if(module==='./AdditionalPages'||module==='./DataEntryPages'||module==='./NavigationPages'||module==='./DataDisplayPages'||module==='./AnimationPages')return undefined; if(sample&&module.startsWith('atelier-ui'))return f.updateImportDeclaration(node,node.modifiers,node.importClause,str(module.replace('atelier-ui','atelier-ui-vue')),node.attributes); }
   if(ts.isTypeReferenceNode(node)&&ts.isIdentifier(node.typeName)&&node.typeName.text==='Key')return f.createUnionTypeNode([f.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),f.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)]);
   if(ts.isTypeReferenceNode(node)&&ts.isIdentifier(node.typeName)&&node.typeName.text==='ReactNode')return f.createTypeReferenceNode('VNodeChild');
   if(ts.isStringLiteral(node)&&node.text==='children')return str('#default');
   if(ts.isStringLiteral(node)&&node.text==='className')return str('class');
   if(ts.isStringLiteral(node)&&node.text==='ReactNode')return str('VNodeChild / slot');
   if(ts.isNoSubstitutionTemplateLiteral(node)&&node.text.includes('atelier-ui')&&node.text.includes('export function')) { try { const text=convertSample(node.text); return f.createNoSubstitutionTemplateLiteral(text); } catch(error) { console.error('Sample conversion failed:',node.text.slice(0,100),error.message); return node; } }
   if(ts.isFunctionDeclaration(node)&&node.name&&/^[A-Z]/.test(node.name.text)&&node.body&&hasJSX(node.body))return component(node);
   if(ts.isVariableStatement(node)) {
    const declarations=[]; const statements=[];
    for(const declaration of node.declarationList.declarations){
     const init=declaration.initializer;
     if(init&&ts.isCallExpression(init)&&ts.isIdentifier(init.expression)&&init.expression.text==='useState'&&ts.isArrayBindingPattern(declaration.name)){
      const [state,setter]=declaration.name.elements;if(!state||!setter||!ts.isIdentifier(state.name)||!ts.isIdentifier(setter.name))throw Error('Unsupported state');
      const argument = init.arguments[0]; const args=argument?[ts.isArrowFunction(argument)||ts.isFunctionExpression(argument)?f.createCallExpression(f.createParenthesizedExpression(ts.visitNode(argument,visit)),undefined,[]):ts.visitNode(argument,visit)]:[];
      statements.push(f.createVariableStatement(undefined,f.createVariableDeclarationList([f.createVariableDeclaration(state.name,undefined,undefined,f.createCallExpression(id('vueRef'),init.typeArguments?.map(type=>ts.visitNode(type,visit)),args))],ts.NodeFlags.Const)));
      statements.push(f.createVariableStatement(undefined,f.createVariableDeclarationList([f.createVariableDeclaration(setter.name,undefined,undefined,call('refSetter',[state.name]))],ts.NodeFlags.Const)));
      reactive.add(state.name.text);
     }else if(init&&ts.isCallExpression(init)&&ts.isIdentifier(init.expression)&&init.expression.text==='useMemo'&&ts.isIdentifier(declaration.name)){
      statements.push(f.createVariableStatement(node.modifiers,f.createVariableDeclarationList([f.createVariableDeclaration(declaration.name,undefined,undefined,call('computed',[ts.visitNode(init.arguments[0],visit)]))],ts.NodeFlags.Const)));reactive.add(declaration.name.text);
     }else { declarations.push(ts.visitEachChild(declaration,visit,context)); if(init&&ts.isCallExpression(init)&&ts.isIdentifier(init.expression)&&init.expression.text==='useWatch'&&ts.isIdentifier(declaration.name))reactive.add(declaration.name.text); }
    }
    if(declarations.length)statements.push(f.updateVariableStatement(node,node.modifiers,f.updateVariableDeclarationList(node.declarationList,declarations)));
    return statements;
   }
   if(ts.isCallExpression(node)&&ts.isIdentifier(node.expression)&&node.expression.text==='useRef') {
    return f.createCallExpression(id('vueRef'),node.typeArguments?.map(type=>f.createUnionTypeNode([type,f.createLiteralTypeNode(f.createNull())])),node.arguments.map(arg=>ts.visitNode(arg,visit)));
   }
   if(ts.isCallExpression(node)&&ts.isIdentifier(node.expression)&&node.expression.text==='useEffect')return call('demoEffect',node.arguments.map(arg=>ts.visitNode(arg,visit)));
   if(ts.isCallExpression(node)&&ts.isPropertyAccessExpression(node.expression)&&node.expression.expression.getText(sf)==='createRoot')return undefined;
   if(ts.isPropertyAccessExpression(node)&&node.name.text==='current')return f.createPropertyAccessExpression(ts.visitNode(node.expression,visit),'value');
   if(ts.isPropertyAccessExpression(node)&&node.name.text==='formState')return ts.visitEachChild(node,visit,context);
   if(ts.isIdentifier(node)&&node.text==='children'&&childrenSlot&&reference(node))return call('slotContent',[]);
   if(ts.isIdentifier(node)&&reactive.has(node.text)&&reference(node))return f.createPropertyAccessExpression(id(node.text),'value');
   if(ts.isShorthandPropertyAssignment(node)&&reactive.has(node.name.text))return prop(node.name.text,f.createPropertyAccessExpression(id(node.name.text),'value'));
   if(ts.isJsxElement(node)||ts.isJsxSelfClosingElement(node)||ts.isJsxFragment(node))return jsx(node);
   if(ts.isArrowFunction(node)||ts.isFunctionExpression(node)){
    const parameters=node.parameters.map(parameter=>parameter.type?parameter:f.updateParameterDeclaration(parameter,parameter.modifiers,parameter.dotDotDotToken,parameter.name,parameter.questionToken,inferred(parameter),parameter.initializer));
    const updated=ts.isArrowFunction(node)?f.updateArrowFunction(node,node.modifiers,node.typeParameters,parameters,node.type,node.equalsGreaterThanToken,node.body):f.updateFunctionExpression(node,node.modifiers,node.asteriskToken,node.name,node.typeParameters,parameters,node.type,node.body);
    return ts.visitEachChild(updated,visit,context);
   }
   return ts.visitEachChild(node,visit,context);
  }
  function hasJSX(node) { let found=false;function walk(node){if(ts.isJsxElement(node)||ts.isJsxSelfClosingElement(node)||ts.isJsxFragment(node))found=true;else ts.forEachChild(node,walk);}walk(node);return found; }
  function component(node){
   const previous=reactive, oldChildren=childrenSlot;reactive=new Set();const parameters=node.parameters;const keys=[];let binding;
   if(parameters.length&&ts.isObjectBindingPattern(parameters[0].name)){for(const element of parameters[0].name.elements){const name=(element.propertyName??element.name).getText(sf);keys.push(name);if(name==='children')childrenSlot=true;}const elements=parameters[0].name.elements.filter(element=>(element.propertyName??element.name).getText(sf)!=='children'); if(elements.length)binding=f.createVariableStatement(undefined,f.createVariableDeclarationList([f.createVariableDeclaration(f.createObjectBindingPattern(elements),undefined,undefined,id('props'))],ts.NodeFlags.Const));}
   const body=[];if(binding)body.push(binding);
   for(const statement of node.body.statements){
    if(ts.isReturnStatement(statement))body.push(f.createReturnStatement(f.createArrowFunction(undefined,undefined,[],undefined,f.createToken(ts.SyntaxKind.EqualsGreaterThanToken),statement.expression?ts.visitNode(statement.expression,visit):f.createNull())));
    else if(ts.isIfStatement(statement)&&ts.isReturnStatement(statement.thenStatement))body.push(f.updateIfStatement(statement,ts.visitNode(statement.expression,visit),f.createReturnStatement(f.createArrowFunction(undefined,undefined,[],undefined,f.createToken(ts.SyntaxKind.EqualsGreaterThanToken),statement.thenStatement.expression?ts.visitNode(statement.thenStatement.expression,visit):f.createNull())),statement.elseStatement));
    else {const result=visit(statement);if(Array.isArray(result))body.push(...result);else if(result)body.push(result);}
   }
   const setupParams=[f.createParameterDeclaration(undefined,undefined,'props'),f.createParameterDeclaration(undefined,undefined,f.createObjectBindingPattern([f.createBindingElement(undefined,undefined,'slots')]))];
   if(childrenSlot)body.splice(binding?1:0,0,f.createVariableStatement(undefined,f.createVariableDeclarationList([f.createVariableDeclaration('slotContent',undefined,undefined,f.createArrowFunction(undefined,undefined,[],undefined,f.createToken(ts.SyntaxKind.EqualsGreaterThanToken),f.createCallChain(f.createPropertyAccessExpression(id('slots'),'default'),f.createToken(ts.SyntaxKind.QuestionDotToken),undefined,[])))],ts.NodeFlags.Const)));
   const options=[prop('name',str(node.name.text)),prop('props',array(keys.filter(key=>key!=='children').map(str))),prop('setup',f.createArrowFunction(undefined,undefined,setupParams,undefined,f.createToken(ts.SyntaxKind.EqualsGreaterThanToken),f.createBlock(body,true)))];
   reactive=previous;childrenSlot=oldChildren;
   return f.createVariableStatement([f.createModifier(ts.SyntaxKind.ExportKeyword)],f.createVariableDeclarationList([f.createVariableDeclaration(node.name,undefined,undefined,call('defineComponent',[f.createObjectLiteralExpression(options,true)]))],ts.NodeFlags.Const));
  }
  function jsx(node){
   if(ts.isJsxFragment(node))return call('vnode',[id('Fragment'),f.createNull(),array(children(node.children))]);
   const opening=ts.isJsxElement(node)?node.openingElement:node;const tagText=opening.tagName.getText(sf);const native=/^[a-z]/.test(tagText);const tag=native?str(tagText):opening.tagName;const attrs=[],slots=[];
   for(const attr of opening.attributes.properties){
    if(ts.isJsxSpreadAttribute(attr)){attrs.push(f.createSpreadAssignment(ts.visitNode(attr.expression,visit)));continue;}
    let name=attr.name.getText(sf);let value=attr.initializer?(ts.isStringLiteral(attr.initializer)?str(attr.initializer.text):attr.initializer.expression?ts.visitNode(attr.initializer.expression,visit):f.createTrue()):f.createTrue();
    if(native && name==='onChange' && ['input','textarea'].includes(tagText)) { const inputType=opening.attributes.properties.find(attribute=>ts.isJsxAttribute(attribute)&&attribute.name.getText(sf)==='type')?.initializer; if(!inputType || !ts.isStringLiteral(inputType) || !['checkbox','radio','file'].includes(inputType.text))name='onInput'; }
    if(name==='className')name='class';
    if(['strokeWidth','strokeLinecap','strokeLinejoin','fillRule','clipRule','strokeDasharray','strokeDashoffset'].includes(name))name=name.replace(/[A-Z]/g,char=>'-'+char.toLowerCase());
    if(name==='htmlFor')name='for';
    if(name==='dangerouslySetInnerHTML'){name='innerHTML';value=f.createPropertyAccessExpression(value,'__html');}
    if(!native){
     if(name==='value'&&!['Statistic','NumberTicker','Countdown','QRCode'].includes(tagText))name='modelValue';
     if(name==='checked')name='modelValue';
     const events={onOpenChange:'onUpdate:open',onVisibleChange:'onUpdate:visible'};if(events[name])name=events[name];
     if(tagText==='Transfer' && name==='render') { slots.push(prop('item',f.createArrowFunction(undefined,undefined,[f.createParameterDeclaration(undefined,undefined,'scope',undefined,f.createTypeLiteralNode([f.createPropertySignature(undefined,'item',undefined,f.createTypeReferenceNode('TransferItem'))]))],undefined,f.createToken(ts.SyntaxKind.EqualsGreaterThanToken),f.createCallExpression(f.createParenthesizedExpression(value),undefined,[f.createPropertyAccessExpression(id('scope'),'item')]))));continue; }
     if(tagText==='Transfer' && name==='footer') { const fields=[f.createPropertySignature(undefined,'direction',undefined,f.createTypeReferenceNode('TransferDirection')), ...['total','selected'].map(key=>f.createPropertySignature(undefined,key,undefined,f.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)))];slots.push(prop('footer',f.createArrowFunction(undefined,undefined,[f.createParameterDeclaration(undefined,undefined,'scope',undefined,f.createTypeLiteralNode(fields))],undefined,f.createToken(ts.SyntaxKind.EqualsGreaterThanToken),f.createCallExpression(f.createParenthesizedExpression(value),undefined,[f.createPropertyAccessExpression(id('scope'),'direction'),id('scope')]))));continue; }
     let slot=slotAttrs[name]; if(tagText==='Tree' && name==='icon' && attr.initializer && ts.isJsxExpression(attr.initializer) && attr.initializer.expression && ts.isArrowFunction(attr.initializer.expression)) slot=undefined;if(['title','extra','footer','content','description','avatar','cover'].includes(name)&&attr.initializer&&ts.isJsxExpression(attr.initializer)&&attr.initializer.expression&&hasJSX(attr.initializer.expression))slot=name;
     if(slot){slots.push(prop(slot,f.createArrowFunction(undefined,undefined,[],undefined,f.createToken(ts.SyntaxKind.EqualsGreaterThanToken),value)));continue;}
     if(tagText==='Controller' && name==='render') { slots.push(prop('default',value)); continue; }
     if(slotFunctions[name] || (tagText==='Tree' && name==='icon' && !slot)){
      const [slot,allKeys]=slotFunctions[name]??['icon',['node','state']]; const original=attr.initializer?.expression; const signature=original?checker.getTypeAtLocation(original).getCallSignatures()[0]:undefined; const keys=allKeys.slice(0,signature?.parameters.length??(ts.isArrowFunction(value)?value.parameters.length:allKeys.length)); const fields=[]; keys.forEach((key,index)=>{const symbol=signature?.parameters[index];const type=symbol?checker.getTypeOfSymbolAtLocation(symbol,original):undefined;if(key==='state'&&type){for(const field of type.getProperties()){fields.push(f.createPropertySignature(undefined,field.name,undefined,checker.typeToTypeNode(checker.getTypeOfSymbolAtLocation(field,original),original,ts.NodeBuilderFlags.NoTruncation|ts.NodeBuilderFlags.UseAliasDefinedOutsideCurrentScope)));}}else if(key==='info'&&name==='headerRender'&&type){const node=checker.typeToTypeNode(type,original,ts.NodeBuilderFlags.NoTruncation|ts.NodeBuilderFlags.UseAliasDefinedOutsideCurrentScope);if(ts.isTypeLiteralNode(node))fields.push(...node.members);}else if(key==='info'&&name==='statusRender'){fields.push(f.createPropertySignature(undefined,'onRefresh',f.createToken(ts.SyntaxKind.QuestionToken),f.createFunctionTypeNode(undefined,[],f.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword))));}else fields.push(f.createPropertySignature(undefined,key,undefined,type?checker.typeToTypeNode(type,original,ts.NodeBuilderFlags.NoTruncation|ts.NodeBuilderFlags.UseAliasDefinedOutsideCurrentScope):f.createKeywordTypeNode(key==='index'||key==='current'||key==='total'?ts.SyntaxKind.NumberKeyword:ts.SyntaxKind.UnknownKeyword)));}); const scopeType=f.createTypeLiteralNode(fields);const scope=id('scope');const args=keys.map(key=>key==='state'?f.createObjectLiteralExpression(fields.filter(field=>!keys.includes(field.name.text)).map(field=>prop(field.name.text,f.createPropertyAccessExpression(scope,field.name.text)))):key==='info'&&name==='headerRender'?scope:key==='info'&&name==='statusRender'?f.createObjectLiteralExpression([prop('onRefresh',f.createPropertyAccessExpression(scope,'onRefresh'))]):f.createPropertyAccessExpression(scope,key));
      slots.push(prop(slot,f.createArrowFunction(undefined,undefined,[f.createParameterDeclaration(undefined,undefined,scope,undefined,scopeType)],undefined,f.createToken(ts.SyntaxKind.EqualsGreaterThanToken),f.createCallExpression(f.createParenthesizedExpression(value),undefined,args))));continue;
     }
    }
    attrs.push(prop(name,value));
   }
   let content=ts.isJsxElement(node)?children(node.children):[];if(tagText==='code' && content.length===1 && ts.isIdentifier(content[0]) && content[0].text==='prop')content=[call('vueApiName',[id('prop'),f.createPropertyAccessExpression(id('item'),'rows')])];
   if(native)return call('vnode',[tag,f.createObjectLiteralExpression(attrs,true),array(content)]);
   if(content.length)slots.push(prop('default',f.createArrowFunction(undefined,undefined,[],undefined,f.createToken(ts.SyntaxKind.EqualsGreaterThanToken),array(content))));
   return call('vnode',[tag,f.createObjectLiteralExpression(attrs,true),f.createObjectLiteralExpression(slots,true)]);
  }
  function children(nodes){return nodes.flatMap(node=>{if(ts.isJsxText(node)){const text=node.text.replace(/\r/g,'').split('\n').map((line,index,lines)=>index===0&&lines.length===1?line:line.trim()).filter(Boolean).join(' ');return text?[str(text)]:[];}if(ts.isJsxExpression(node))return node.expression?[ts.visitNode(node.expression,visit)]:[];return[jsx(node)];});}
  return node=>ts.visitNode(node,visit);
 };
 const result=ts.transform(sf,[transformer]);let tree=result.transformed[0]; const statements=[...tree.statements]; const components=statements.filter(statement=>ts.isVariableStatement(statement)&&statement.declarationList.declarations.some(d=>d.initializer&&ts.isCallExpression(d.initializer)&&ts.isIdentifier(d.initializer.expression)&&d.initializer.expression.text==='defineComponent')); tree=f.updateSourceFile(tree,[...statements.filter(statement=>ts.isImportDeclaration(statement)||ts.isInterfaceDeclaration(statement)||ts.isTypeAliasDeclaration(statement)),...components,...statements.filter(statement=>!ts.isImportDeclaration(statement)&&!ts.isInterfaceDeclaration(statement)&&!ts.isTypeAliasDeclaration(statement)&&!components.includes(statement))]); let text=printer.printFile(tree);result.dispose();
 text=text.replace(/reason\?: any/g, 'reason?: unknown').replace(/\{ field: any; \}/g, 'ControllerRenderProps').replace(/React\.VNodeChild/g,'VNodeChild').replace(/React\.FormEvent<[^>]+>/g,'Event').replace(/import\(["']react["']\)\.Key/g,'(string | number)').replace(/ReactNode/g,'VNodeChild').replace(/React\.ChangeEvent<([^>]+)>/g,'Event & { target: $1; currentTarget: $1 }').replace(/React\.MouseEvent<([^>]+)>/g,'MouseEvent & { currentTarget: $1 }').replace(/React\.KeyboardEvent<([^>]+)>/g,'KeyboardEvent & { currentTarget: $1 }');
 const sharedImports=`import { defineComponent, shallowRef as vueRef, computed, Fragment } from 'vue';\nimport type { VNodeChild } from 'vue';\n`;
 const header=sample?`import { defineComponent, shallowRef as vueRef, computed, Fragment, createVNode, watch, onMounted } from 'vue';\nimport type { VNodeChild, Ref, VNodeTypes, CSSProperties } from 'vue';\n`+fs.readFileSync(`${root}/demo/demo-runtime.ts`,'utf8').replace(/^import[^\n]+\n/gm,'').replace(/export /g,'')+'\n':sharedImports+`import { refSetter, vnode, demoEffect } from './demo-runtime';\n`;

const publicTypes=[...fs.readFileSync(`${source}/src/index.ts`,'utf8').matchAll(/export type \{([^}]+)\}/g)].flatMap(match=>match[1].split(',').map(value=>value.trim()));publicTypes.push('ControllerRenderProps','CalendarCellInfo');const imports=new Set(tree.statements.filter(ts.isImportDeclaration).flatMap(statement=>statement.importClause?.namedBindings&&ts.isNamedImports(statement.importClause.namedBindings)?statement.importClause.namedBindings.elements.map(element=>element.name.text):[]));const declared=new Set(tree.statements.filter(statement=>ts.isInterfaceDeclaration(statement)||ts.isTypeAliasDeclaration(statement)).map(statement=>statement.name.text));const refs=new Set();function findTypes(node){if(ts.isTypeReferenceNode(node)&&ts.isIdentifier(node.typeName))refs.add(node.typeName.text);ts.forEachChild(node,findTypes);}findTypes(tree);if(text.includes('ControllerRenderProps'))refs.add('ControllerRenderProps');const needed=[...new Set(publicTypes)].filter(name=>refs.has(name)&&!imports.has(name)&&!declared.has(name));return header+(!sample&&text.includes('vueApiName(')?`import { vueApiName } from './api';\n`:'')+(needed.length?`import type { ${needed.join(', ')} } from '${sample?'atelier-ui-vue':'../src'}';\n`:'')+text;
}
function convertSample(text) {
 const iconNames=new Set(text.match(/\b[A-Za-z]+Icon\b/g) ?? []);
 for(const name of iconNames){if(new RegExp(`(?:function|const) ${name}\\b`).test(text))continue;for(const sf of program.getSourceFiles()){if(!sf.fileName.startsWith(source+'/demo/'))continue;const declaration=sf.statements.find(node=>(ts.isFunctionDeclaration(node)&&node.name?.text===name)||(ts.isVariableStatement(node)&&node.declarationList.declarations.some(declaration=>ts.isIdentifier(declaration.name)&&declaration.name.text===name)));if(declaration){text=declaration.getText(sf)+'\n'+text;break;}}}

 const filename=`${source}/demo/__vue_port_sample.tsx`; const options={target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext,moduleResolution:ts.ModuleResolutionKind.Bundler,jsx:ts.JsxEmit.ReactJSX,strict:true,skipLibCheck:true}; const host=ts.createCompilerHost(options);const original=host.getSourceFile.bind(host);host.getSourceFile=(path,languageVersion,...args)=>path===filename?ts.createSourceFile(path,text,languageVersion,true,ts.ScriptKind.TSX):original(path,languageVersion,...args); const sampleProgram=ts.createProgram([filename],options,host); const previous=checker;checker=sampleProgram.getTypeChecker();try{return convert(sampleProgram.getSourceFile(filename),{sample:true});}finally{checker=previous;}
}
for(const name of names){const sf=program.getSourceFile(`${source}/demo/${name}.tsx`);fs.writeFileSync(`${root}/demo/${name}.ts`,convert(sf));console.log('Converted',name);}
const main=program.getSourceFile(`${source}/demo/main.tsx`);const start=main.statements.find(node=>ts.isFunctionDeclaration(node)&&node.name?.text==='FormPage').pos;const selected=main.statements.filter(node=>ts.isImportDeclaration(node)&&['../src','./shared'].includes(node.moduleSpecifier.text)||ts.isVariableStatement(node)&&node.declarationList.declarations.some(d=>ts.isIdentifier(d.name)&&d.name.text==='codeSamples')||node.pos>=start&&!ts.isExpressionStatement(node));fs.writeFileSync(`${root}/demo/CorePages.ts`,convert(f.updateSourceFile(main,selected)));console.log('Converted CorePages');
