import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M7 11h8" /><path d="M7 16h3" /><path d="M7 6h12" />'))  
}