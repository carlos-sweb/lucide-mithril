import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<circle cx="12" cy="19" r="2" /><circle cx="12" cy="5" r="2" /><circle cx="16" cy="12" r="2" /><circle cx="20" cy="19" r="2" /><circle cx="4" cy="19" r="2" /><circle cx="8" cy="12" r="2" />'))  
}