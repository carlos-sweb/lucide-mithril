import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7.5 3v18" /><path d="M12 3v18" /><path d="M16.5 3v18" />'))  
}