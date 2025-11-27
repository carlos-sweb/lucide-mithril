import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M10.88 21.94 15.46 14" /><path d="M21.17 8H12" /><path d="M3.95 6.06 8.54 14" /><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />'))  
}