import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" /><path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" /><line x1="4" x2="20" y1="12" y2="12" />'))  
}