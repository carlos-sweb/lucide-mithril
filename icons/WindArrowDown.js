import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M10 2v8" /><path d="M12.8 21.6A2 2 0 1 0 14 18H2" /><path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" /><path d="m6 6 4 4 4-4" />'))  
}