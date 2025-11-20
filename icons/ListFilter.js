import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M2 5h20" /><path d="M6 12h12" /><path d="M9 19h6" />'))  
}