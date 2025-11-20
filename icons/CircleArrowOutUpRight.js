import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M22 12A10 10 0 1 1 12 2" /><path d="M22 2 12 12" /><path d="M16 2h6v6" />'))  
}