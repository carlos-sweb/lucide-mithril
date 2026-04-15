import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 6h4a2 2 0 0 1 2 2v7" /><path d="M6 12v9" /><path d="M9 3 3 9" /><path d="M9 9 3 3" /><circle cx="18" cy="18" r="3" />'))  
}