import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M10 12.01h.01" /><path d="M18 8v4a8 8 0 0 1-1.07 4" /><circle cx="10" cy="12" r="4" /><rect x="2" y="4" width="20" height="16" rx="2" />'))  
}