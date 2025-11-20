import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M5 7v11a1 1 0 0 0 1 1h11" /><path d="M5.293 18.707 11 13" /><circle cx="19" cy="19" r="2" /><circle cx="5" cy="5" r="2" />'))  
}