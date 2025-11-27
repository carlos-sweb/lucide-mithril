import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect width="16" height="6" x="2" y="4" rx="2" /><rect width="9" height="6" x="9" y="14" rx="2" /><path d="M22 22V2" />'))  
}