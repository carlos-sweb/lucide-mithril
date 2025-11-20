import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<circle c="undefined" c="undefined" r="10" /><path d="m12 16 4-4-4-4" /><path d="M8 12h8" />'))  
}