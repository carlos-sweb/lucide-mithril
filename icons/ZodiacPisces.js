import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M19 21a15 15 0 0 1 0-18" /><path d="M20 12H4" /><path d="M5 3a15 15 0 0 1 0 18" />'))  
}