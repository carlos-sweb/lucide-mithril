import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 14v1" /><path d="M15 19v2" /><path d="M15 3v2" /><path d="M15 9v1" />'))  
}