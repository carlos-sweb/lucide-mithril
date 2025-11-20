import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" /><path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" /><path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" /><circle cx="12" cy="12" r="10" />'))  
}