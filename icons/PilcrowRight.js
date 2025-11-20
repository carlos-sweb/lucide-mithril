import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M10 3v11" /><path d="M10 9H7a1 1 0 0 1 0-6h8" /><path d="M14 3v11" /><path d="m18 14 4 4H2" /><path d="m22 18-4 4" />'))  
}