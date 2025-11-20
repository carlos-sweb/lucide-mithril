import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M5 16v2" /><path d="M19 16v2" /><rect width="20" height="8" x="2" y="8" rx="2" /><path d="M18 12h.01" />'))  
}