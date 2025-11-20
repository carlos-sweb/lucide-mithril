import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M21 5H3" /><path d="M17 12H7" /><path d="M19 19H5" />'))  
}