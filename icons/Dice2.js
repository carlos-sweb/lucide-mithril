import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M15 9h.01" /><path d="M9 15h.01" />'))  
}