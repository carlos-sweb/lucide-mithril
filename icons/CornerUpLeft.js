import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M20 20v-7a4 4 0 0 0-4-4H4" /><path d="M9 14 4 9l5-5" />'))  
}