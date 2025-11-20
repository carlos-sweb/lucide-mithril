import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<circle cx="8" cy="18" r="4" /><path d="M12 18V2l7 4" />'))  
}