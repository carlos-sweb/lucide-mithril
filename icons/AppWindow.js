import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect x="2" y="4" w="undefined" h="undefined" r="undefined" /><path d="M10 4v4" /><path d="M2 8h20" /><path d="M6 4v4" />'))  
}