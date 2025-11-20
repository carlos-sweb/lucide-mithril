import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 12h.01" /><path d="M16 12h.01" /><path d="m17 7 5 5-5 5" /><path d="m7 7-5 5 5 5" /><path d="M8 12h.01" />'))  
}