import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect width="20" height="6" x="2" y="4" rx="2" /><rect width="20" height="6" x="2" y="14" rx="2" />'))  
}