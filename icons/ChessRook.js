import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" /><path d="M10 2v2" /><path d="M14 2v2" /><path d="m17 18-1-9" /><path d="M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" /><path d="M6 4h12" /><path d="m7 18 1-9" />'))  
}