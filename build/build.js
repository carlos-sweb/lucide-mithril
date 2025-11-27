import  sources from 'lucide'
import {isObject,isFunction} from 'pp-is'
const names = Object.keys(sources);

//var i = 0;


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
}
   //if(i == 0) break
}

