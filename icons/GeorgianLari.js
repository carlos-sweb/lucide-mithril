import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M11.5 21a7.5 7.5 0 1 1 7.35-9" /><path d="M13 12V3" /><path d="M4 21h16" /><path d="M9 12V3" />'))  
}