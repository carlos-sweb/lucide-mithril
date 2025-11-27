import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M3 5h6" /><path d="M3 12h13" /><path d="M3 19h13" /><path d="m16 8-3-3 3-3" /><path d="M21 19V7a2 2 0 0 0-2-2h-6" />'))  
}