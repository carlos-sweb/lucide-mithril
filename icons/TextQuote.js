import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M17 5H3" /><path d="M21 12H8" /><path d="M21 19H8" /><path d="M3 12v7" />'))  
}