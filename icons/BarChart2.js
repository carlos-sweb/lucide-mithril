import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M5 21v-6" /><path d="M12 21V3" /><path d="M19 21V9" />'))  
}