import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M20 11H4" /><path d="M20 7H4" /><path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" />'))  
}