import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />'))  
}