import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect width="6" height="20" x="4" y="2" rx="2" /><rect width="6" height="20" x="14" y="2" rx="2" />'))  
}