import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M7 12h2l2 5 2-10h4" /><rect x="3" y="3" w="undefined" h="undefined" r="undefined" />'))  
}