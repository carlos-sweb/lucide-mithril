import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="m16 16-3 3 3 3" /><path d="M3 12h14.5a1 1 0 0 1 0 7H13" /><path d="M3 19h6" /><path d="M3 5h18" />'))  
}