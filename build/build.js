import  sources from 'lucide'
import {isObject,isFunction} from 'pp-is'
const names = Object.keys(sources);

//var i = 0;


for(const name of names ){            
   if( Array.isArray(sources[name])){
      let svgPath = '';   
   for( const path of sources[name] ){
      svgPath += `<${path[0]} `
      if( isObject(path[1])){
         for( const [a,v] in path[1]){
            svgPath +=`${a}="${path[1][a]}" `
         }
      }
      svgPath += `/>`      
   }


   await Bun.write('icons/'+name+'.js',
`import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('${svgPath}'))  
}`
)
}
   //if(i == 0) break
}

