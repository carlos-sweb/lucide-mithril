import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M3 3v16a2 2 0 0 0 2 2h16" /><rect x="15" y="5" width="4" height="12" rx="1" /><rect x="7" y="8" width="4" height="9" rx="1" />'))  
}