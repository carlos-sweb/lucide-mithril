import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect width="20" height="16" x="2" y="4" rx="2" /><path d="M12 9v11" /><path d="M2 9h13a2 2 0 0 1 2 2v9" />'))  
}