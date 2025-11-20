import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 3v6" /><circle c="undefined" c="undefined" r="3" /><path d="M12 15v6" />'))  
}