import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="3" y="3" r="undefined" /><path d="m15 9-6 6" /><path d="M9 9h.01" /><path d="M15 15h.01" />'))  
}