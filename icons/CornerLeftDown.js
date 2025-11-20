import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="m14 15-5 5-5-5" /><path d="M20 4h-7a4 4 0 0 0-4 4v12" />'))  
}