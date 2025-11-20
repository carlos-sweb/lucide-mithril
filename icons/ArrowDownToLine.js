import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 17V3" /><path d="m6 11 6 6 6-6" /><path d="M19 21H5" />'))  
}