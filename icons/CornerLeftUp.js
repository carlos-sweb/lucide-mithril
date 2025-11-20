import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M14 9 9 4 4 9" /><path d="M20 20h-7a4 4 0 0 1-4-4V4" />'))  
}