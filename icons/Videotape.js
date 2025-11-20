import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect width="20" height="16" x="2" y="4" rx="2" /><path d="M2 8h20" /><circle cx="8" cy="14" r="2" /><path d="M8 12h8" /><circle cx="16" cy="14" r="2" />'))  
}