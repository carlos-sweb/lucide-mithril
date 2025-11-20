import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" />'))  
}