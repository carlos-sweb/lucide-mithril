import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M2 7v10" /><path d="M6 5v14" /><rect w="undefined" h="undefined" x="10" y="3" r="undefined" />'))  
}