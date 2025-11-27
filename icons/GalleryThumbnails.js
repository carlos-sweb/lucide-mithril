import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect width="18" height="14" x="3" y="3" rx="2" /><path d="M4 21h1" /><path d="M9 21h1" /><path d="M14 21h1" /><path d="M19 21h1" />'))  
}