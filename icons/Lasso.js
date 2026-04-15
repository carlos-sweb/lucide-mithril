import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M3.704 14.467a10 8 0 1 1 3.115 2.375" /><path d="M7 22a5 5 0 0 1-2-3.994" /><circle cx="5" cy="16" r="2" />'))  
}