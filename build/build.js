import sources from 'lucide'
import { mkdir } from 'node:fs/promises'

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

await mkdir('icons', { recursive: true });
await mkdir('icons-lynx', { recursive: true });

const generatedIcons = [];

function escapeSingleQuoted(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function iconDts(name) {
  return `import type { Component, Attributes } from 'mithril';
interface IconAttrs extends Attributes {
    size?: number;
}
declare const ${name}: Component<IconAttrs>;
export default ${name};
`;
}

for (const name of names) {
  if (casingAliases.has(name)) continue;
  if (!Array.isArray(sources[name])) continue;

  let svgPath = '';
  for (const path of sources[name]) {
    const tag = path[0];
    svgPath += `<${tag} `;

    Object.entries(path[1]).forEach(([key, vl]) => {
      svgPath += `${key}="${vl}" `;
    });

    svgPath += `/>`;
  }

  const safeSvgPath = escapeSingleQuoted(svgPath);

  await Bun.write(
    'icons/' + name + '.js',
`import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('${safeSvgPath}'))
}`
  );

  await Bun.write('icons/' + name + '.d.ts', iconDts(name));

  // mithril-lynx / Lynx: full <svg> in content; size via outer style object.
  await Bun.write(
    'icons-lynx/' + name + '.js',
`import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'
export default lynxIcon('${safeSvgPath}', _attrs, 24)
`
  );

  await Bun.write('icons-lynx/' + name + '.d.ts', iconDts(name));

  generatedIcons.push(name);
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
console.log(`✓ ${generatedIcons.length} iconos generados en icons-lynx/`);
console.log(`✓ index.js actualizado con ${generatedIcons.length} exports`);
console.log(`✓ index.d.ts actualizado con ${generatedIcons.length} exports`);
