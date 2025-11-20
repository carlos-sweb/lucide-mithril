import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" />'))  
}