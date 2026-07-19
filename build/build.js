import sources from 'lucide'

const names = Object.keys(sources);
const generatedIcons = [];

for(const name of names ){            
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
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('${svgPath}'))  
}`
)
   generatedIcons.push(name);
}
}

generatedIcons.sort();

const indexContent = generatedIcons
  .map(name => `export { default as ${name} } from './icons/${name}.js';`)
  .join('\n') + '\n';

await Bun.write('index.js', indexContent);

console.log(`✓ ${generatedIcons.length} iconos generados en icons/`);
console.log(`✓ index.js actualizado con ${generatedIcons.length} exports`);

