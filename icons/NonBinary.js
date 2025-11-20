import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 2v10" /><path d="m8.5 4 7 4" /><path d="m8.5 8 7-4" /><circle c="undefined" c="undefined" r="5" />'))  
}