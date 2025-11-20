import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M5 16v2" /><path d="M19 16v2" /><rect w="undefined" h="undefined" x="2" y="8" r="undefined" /><path d="M18 12h.01" />'))  
}