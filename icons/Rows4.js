import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="3" y="3" r="undefined" /><path d="M21 7.5H3" /><path d="M21 12H3" /><path d="M21 16.5H3" />'))  
}