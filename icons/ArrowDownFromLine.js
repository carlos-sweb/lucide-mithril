import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M19 3H5" /><path d="M12 21V7" /><path d="m6 15 6 6 6-6" />'))  
}