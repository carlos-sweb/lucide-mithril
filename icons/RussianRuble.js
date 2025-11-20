import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M6 11h8a4 4 0 0 0 0-8H9v18" /><path d="M6 15h8" />'))  
}