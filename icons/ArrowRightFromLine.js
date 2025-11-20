import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M3 5v14" /><path d="M21 12H7" /><path d="m15 18 6-6-6-6" />'))  
}