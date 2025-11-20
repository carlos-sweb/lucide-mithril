import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 15v7" /><path d="M9 19h6" /><circle cx="12" cy="9" r="6" />'))  
}