import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="3" y="3" r="undefined" /><path d="M14 15h1" /><path d="M19 15h2" /><path d="M3 15h2" /><path d="M9 15h1" />'))  
}