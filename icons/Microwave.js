import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="2" y="4" r="undefined" /><rect w="undefined" h="undefined" x="6" y="8" r="undefined" /><path d="M18 8v7" /><path d="M6 19v2" /><path d="M18 19v2" />'))  
}