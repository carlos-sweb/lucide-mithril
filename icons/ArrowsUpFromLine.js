import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="m4 6 3-3 3 3" /><path d="M7 17V3" /><path d="m14 6 3-3 3 3" /><path d="M17 17V3" /><path d="M4 21h16" />'))  
}