import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M5.42 9.42 8 12" /><circle cx="4" cy="8" r="2" /><path d="m14 6-8.58 8.58" /><circle cx="4" cy="16" r="2" /><path d="M10.8 14.8 14 18" /><path d="M16 12h-2" /><path d="M22 12h-2" />'))  
}