import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 20h.01" /><path d="M8.5 16.429a5 5 0 0 1 7 0" />'))  
}