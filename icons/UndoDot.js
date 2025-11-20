import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M21 17a9 9 0 0 0-15-6.7L3 13" /><path d="M3 7v6h6" /><circle cx="12" cy="17" r="1" />'))  
}