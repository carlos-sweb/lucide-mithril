import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M20 4L9 15" /><path d="M21 19L3 19" /><path d="M9 15L4 10" />'))  
}