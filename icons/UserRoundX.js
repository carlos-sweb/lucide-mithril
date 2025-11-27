import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M2 21a8 8 0 0 1 11.873-7" /><circle cx="10" cy="8" r="5" /><path d="m17 17 5 5" /><path d="m22 17-5 5" />'))  
}