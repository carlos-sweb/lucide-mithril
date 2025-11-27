import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<circle cx="6" cy="12" r="4" /><circle cx="18" cy="12" r="4" /><line x1="6" x2="18" y1="16" y2="16" />'))  
}