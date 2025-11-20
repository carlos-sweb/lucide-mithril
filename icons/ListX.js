import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M16 5H3" /><path d="M11 12H3" /><path d="M16 19H3" /><path d="m15.5 9.5 5 5" /><path d="m20.5 9.5-5 5" />'))  
}