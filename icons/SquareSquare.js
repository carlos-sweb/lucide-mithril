import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect x="3" y="3" w="undefined" h="undefined" r="undefined" /><rect x="8" y="8" w="undefined" h="undefined" r="undefined" />'))  
}