import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="3" y="3" r="undefined" /><path d="M7 7h10" /><path d="M10 7v10" /><path d="M16 17a2 2 0 0 1-2-2V7" />'))  
}