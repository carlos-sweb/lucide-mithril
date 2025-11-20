import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect width="13" height="7" x="3" y="3" rx="1" /><path d="m22 15-3-3 3-3" /><rect width="13" height="7" x="3" y="14" rx="1" />'))  
}