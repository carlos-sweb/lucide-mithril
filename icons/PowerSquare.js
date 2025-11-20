import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 7v4" /><path d="M7.998 9.003a5 5 0 1 0 8-.005" /><rect x="3" y="3" width="18" height="18" rx="2" />'))  
}