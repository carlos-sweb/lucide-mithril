import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M2 20h.01" /><path d="M7 20v-4" /><path d="M12 20v-8" />'))  
}