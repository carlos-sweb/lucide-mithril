import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="3" y="3" r="undefined" /><circle c="undefined" c="undefined" r="5" /><path d="M12 12h.01" />'))  
}