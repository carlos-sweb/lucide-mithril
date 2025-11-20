import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M19.5 7a24 24 0 0 1 0 10" /><path d="M4.5 7a24 24 0 0 0 0 10" /><path d="M7 19.5a24 24 0 0 0 10 0" /><path d="M7 4.5a24 24 0 0 1 10 0" /><rect x="17" y="17" width="5" height="5" rx="1" /><rect x="17" y="2" width="5" height="5" rx="1" /><rect x="2" y="17" width="5" height="5" rx="1" /><rect x="2" y="2" width="5" height="5" rx="1" />'))  
}