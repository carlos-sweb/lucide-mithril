import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 6h.01" /><circle cx="12" cy="14" r="4" /><path d="M12 14h.01" />'))  
}