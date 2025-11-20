import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M7 10h10" /><path d="M7 14h10" /><circle c="undefined" c="undefined" r="10" />'))  
}