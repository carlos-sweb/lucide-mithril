import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 7v4" /><path d="M7.998 9.003a5 5 0 1 0 8-.005" /><circle cx="12" cy="12" r="10" />'))  
}