import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M5 15h14" /><path d="M5 9h14" /><path d="m14 20-5-5 6-6-5-5" />'))  
}