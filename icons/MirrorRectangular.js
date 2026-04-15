import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M11 6 8 9" /><path d="m16 7-8 8" /><rect x="4" y="2" width="16" height="20" rx="2" />'))  
}