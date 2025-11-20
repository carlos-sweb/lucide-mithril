import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M19 13v6h-6" /><path d="M5 11V5h6" /><path d="m5 5 14 14" />'))  
}