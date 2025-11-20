import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="m16 14 4 4-4 4" /><path d="M20 10a8 8 0 1 0-8 8h8" />'))  
}