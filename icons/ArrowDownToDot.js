import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 2v14" /><path d="m19 9-7 7-7-7" /><circle cx="12" cy="21" r="1" />'))  
}