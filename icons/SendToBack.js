import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect x="14" y="14" w="undefined" h="undefined" r="undefined" /><rect x="2" y="2" w="undefined" h="undefined" r="undefined" /><path d="M7 14v1a2 2 0 0 0 2 2h1" /><path d="M14 7h1a2 2 0 0 1 2 2v1" />'))  
}