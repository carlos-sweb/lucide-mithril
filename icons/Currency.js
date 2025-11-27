import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<circle cx="12" cy="12" r="8" /><line x1="3" x2="6" y1="3" y2="6" /><line x1="21" x2="18" y1="3" y2="6" /><line x1="3" x2="6" y1="21" y2="18" /><line x1="21" x2="18" y1="21" y2="18" />'))  
}