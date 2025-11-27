import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="m2 8 2 2-2 2 2 2-2 2" /><path d="m22 8-2 2 2 2-2 2 2 2" /><path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" /><path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" /><line x1="2" x2="22" y1="2" y2="22" />'))  
}