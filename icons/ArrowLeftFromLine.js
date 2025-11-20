import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="m9 6-6 6 6 6" /><path d="M3 12h14" /><path d="M21 19V5" />'))  
}