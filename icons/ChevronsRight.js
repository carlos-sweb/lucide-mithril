import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" />'))  
}