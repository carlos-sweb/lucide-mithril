import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect x="5" y="2" width="14" height="20" rx="7" /><path d="M12 6v4" />'))  
}