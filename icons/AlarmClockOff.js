import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" /><path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" /><path d="m22 6-3-3" /><path d="M6.26 18.67 4 21" /><path d="m2 2 20 20" /><path d="M4 4 2 6" />'))  
}