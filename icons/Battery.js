import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M 22 14 L 22 10" /><rect x="2" y="6" width="16" height="12" rx="2" />'))  
}