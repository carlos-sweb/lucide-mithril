import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="m16 16-4 4-4-4" /><path d="M3 12h18" /><path d="m8 8 4-4 4 4" />'))  
}