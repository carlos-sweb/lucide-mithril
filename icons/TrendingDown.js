import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M16 17h6v-6" /><path d="m22 17-8.5-8.5-5 5L2 7" />'))  
}