import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect width="18" height="18" x="3" y="3" rx="2" /><rect x="9" y="9" width="6" height="6" rx="1" />'))  
}