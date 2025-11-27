import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 6v6l4 2" /><path d="M20 12v5" /><path d="M20 21h.01" /><path d="M21.25 8.2A10 10 0 1 0 16 21.16" />'))  
}