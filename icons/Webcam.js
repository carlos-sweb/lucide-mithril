import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<circle cx="12" cy="10" r="8" /><circle cx="12" cy="10" r="3" /><path d="M7 22h10" /><path d="M12 22v-4" />'))  
}