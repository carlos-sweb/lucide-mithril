import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /><path d="m7.9 7.9 2.7 2.7" /><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /><path d="m13.4 10.6 2.7-2.7" /><circle cx="7.5" cy="16.5" r=".5" fill="currentColor" /><path d="m7.9 16.1 2.7-2.7" /><circle cx="16.5" cy="16.5" r=".5" fill="currentColor" /><path d="m13.4 13.4 2.7 2.7" /><circle cx="12" cy="12" r="2" />'))  
}