import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5" /><path d="M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5" /><path d="M6 19V6a3 3 0 0 0-3-3h0" /><path d="M6 5.5a1 1 0 0 1 5 0V19" />'))  
}