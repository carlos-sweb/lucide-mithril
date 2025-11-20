import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect width="14" height="6" x="5" y="14" rx="2" /><rect width="10" height="6" x="7" y="4" rx="2" /><path d="M2 14h20" /><path d="M2 4h20" />'))  
}