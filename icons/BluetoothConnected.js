import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="m7 7 10 10-5 5V2l5 5L7 17" /><line x1="18" x2="21" y1="12" y2="12" /><line x1="3" x2="6" y1="12" y2="12" />'))  
}