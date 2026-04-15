import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M16 4.525v14.948" /><path d="M20 3A17 17 0 0 1 4 3" /><path d="M4 21a17 17 0 0 1 16 0" /><path d="M8 4.525v14.948" />'))  
}