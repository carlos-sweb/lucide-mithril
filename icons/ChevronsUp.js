import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="m17 11-5-5-5 5" /><path d="m17 18-5-5-5 5" />'))  
}