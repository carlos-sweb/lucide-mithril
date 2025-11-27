import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M10 9.17a3 3 0 1 0 0 5.66" /><path d="M17 9.17a3 3 0 1 0 0 5.66" /><rect x="2" y="5" width="20" height="14" rx="2" />'))  
}