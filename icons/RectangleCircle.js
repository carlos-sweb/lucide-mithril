import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" /><circle cx="14" cy="12" r="8" />'))  
}