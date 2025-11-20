import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M10 9v7" /><path d="M14 6v10" /><circle cx="17.5" cy="12.5" r="3.5" /><circle cx="6.5" cy="12.5" r="3.5" />'))  
}