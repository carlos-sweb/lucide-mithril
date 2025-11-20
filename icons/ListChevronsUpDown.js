import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M3 5h8" /><path d="M3 12h8" /><path d="M3 19h8" /><path d="m15 8 3-3 3 3" /><path d="m15 16 3 3 3-3" />'))  
}