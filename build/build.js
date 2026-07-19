import sources from 'lucide'

const names = Object.keys(sources);

const casingAliases = new Set();
for (const name of names) {
  if (!Array.isArray(sources[name])) continue;
  for (const other of names) {
    if (other === name || !Array.isArray(sources[other])) continue;
    if (name.toLowerCase() === other.toLowerCase() &&
        JSON.stringify(sources[name]) === JSON.stringify(sources[other]) &&
        names.indexOf(name) < names.indexOf(other)) {
      casingAliases.add(name);
    }
  }
}

const generatedIcons = [];

for(const name of names ){
   if( casingAliases.has(name) ) continue;
   if( Array.isArray(sources[name])){
      let svgPath = '';   
   for( const path of sources[name] ){
      const tag = path[0];
      svgPath += `<${tag} `

      Object.entries(path[1]).forEach(([key,vl])=>{
         svgPath +=`${key}="${vl}" `
      })
   
      svgPath += `/>`      
   }


   await Bun.write('icons/'+name+'.js',
`import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('${svgPath}'))
}`
)

   await Bun.write('icons/'+name+'.d.ts',
`import type { Component, Attributes } from 'mithril';
interface IconAttrs extends Attributes {
    size?: number;
}
declare const ${name}: Component<IconAttrs>;
export default ${name};
`
)
   generatedIcons.push(name);
}
}

generatedIcons.sort();

const indexContent = generatedIcons
  .map(name => `export { default as ${name} } from './icons/${name}.js';`)
  .join('\n') + '\n';

await Bun.write('index.js', indexContent);

const indexDtsContent = generatedIcons
  .map(name => `export { default as ${name} } from './icons/${name}.js';`)
  .join('\n') + '\n';

await Bun.write('index.d.ts', indexDtsContent);

console.log(`✓ ${generatedIcons.length} iconos generados en icons/`);
console.log(`✓ index.js actualizado con ${generatedIcons.length} exports`);
console.log(`✓ index.d.ts actualizado con ${generatedIcons.length} exports`);

