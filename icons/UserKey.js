import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M20 11v6" /><path d="M20 13h2" /><path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" /><circle cx="10" cy="7" r="4" /><circle cx="20" cy="19" r="2" />'))  
}