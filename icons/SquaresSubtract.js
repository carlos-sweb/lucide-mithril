import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M10 22a2 2 0 0 1-2-2" /><path d="M16 22h-2" /><path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z" /><path d="M20 8a2 2 0 0 1 2 2" /><path d="M22 14v2" /><path d="M22 20a2 2 0 0 1-2 2" />'))  
}