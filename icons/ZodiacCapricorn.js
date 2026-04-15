import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0" /><path d="M7 19V6a3 3 0 0 0-3-3h0" /><circle cx="17" cy="17" r="3" />'))  
}