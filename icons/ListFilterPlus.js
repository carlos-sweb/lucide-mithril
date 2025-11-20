import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 5H2" /><path d="M6 12h12" /><path d="M9 19h6" /><path d="M16 5h6" /><path d="M19 8V2" />'))  
}