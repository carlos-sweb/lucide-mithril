import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<circle cx="12" cy="6" r="1" /><line x1="5" x2="19" y1="12" y2="12" /><circle cx="12" cy="18" r="1" />'))  
}