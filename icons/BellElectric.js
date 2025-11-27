import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M18.518 17.347A7 7 0 0 1 14 19" /><path d="M18.8 4A11 11 0 0 1 20 9" /><path d="M9 9h.01" /><circle cx="20" cy="16" r="2" /><circle cx="9" cy="9" r="7" /><rect x="4" y="16" width="10" height="6" rx="2" />'))  
}