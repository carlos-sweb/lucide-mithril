import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M2 20h20" /><path d="m9 10 2 2 4-4" /><rect x="3" y="4" width="18" height="12" rx="2" />'))  
}