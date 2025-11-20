import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<circle c="undefined" c="undefined" r="10" /><path d="M17 12h.01" /><path d="M12 12h.01" /><path d="M7 12h.01" />'))  
}