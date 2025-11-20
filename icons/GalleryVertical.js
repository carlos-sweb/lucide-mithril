import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M3 2h18" /><rect w="undefined" h="undefined" x="3" y="6" r="undefined" /><path d="M3 22h18" />'))  
}