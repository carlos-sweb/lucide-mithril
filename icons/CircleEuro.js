import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M15 9.4a4 4 0 1 0 0 5.2" /><path d="M7 12h5" /><circle cx="12" cy="12" r="10" />'))  
}