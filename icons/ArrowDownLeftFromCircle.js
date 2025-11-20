import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M2 12a10 10 0 1 1 10 10" /><path d="m2 22 10-10" /><path d="M8 22H2v-6" />'))  
}