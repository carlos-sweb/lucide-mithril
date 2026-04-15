import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" /><path d="m22 19-3 3" /><path d="M5 19V5.5a1 1 0 0 1 5 0" /><path d="M5 5.5A2.5 2.5 0 0 0 2.5 3" />'))  
}