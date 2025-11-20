import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="m12 17-5-5 5-5" /><path d="M22 18v-2a4 4 0 0 0-4-4H7" /><path d="m7 17-5-5 5-5" />'))  
}