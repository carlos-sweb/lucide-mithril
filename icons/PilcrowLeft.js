import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M14 3v11" /><path d="M14 9h-3a3 3 0 0 1 0-6h9" /><path d="M18 3v11" /><path d="M22 18H2l4-4" /><path d="m6 22-4-4" />'))  
}