import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="5" y="2" r="undefined" /><path d="M15 14h.01" /><path d="M9 6h6" /><path d="M9 10h6" />'))  
}