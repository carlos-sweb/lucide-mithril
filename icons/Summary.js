import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M15 4H7" /><path d="m18 16 3 3-3 3" /><path d="M3 4v13a2 2 0 0 0 2 2h16" /><path d="M7 14h7" /><path d="M7 9h12" />'))  
}