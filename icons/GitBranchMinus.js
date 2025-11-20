import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M15 6a9 9 0 0 0-9 9V3" /><path d="M21 18h-6" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" />'))  
}