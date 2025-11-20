import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M11 14h1v4" /><path d="M16 2v4" /><path d="M3 10h18" /><path d="M8 2v4" /><rect x="3" y="4" width="18" height="18" rx="2" />'))  
}