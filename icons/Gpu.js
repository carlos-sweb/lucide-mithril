import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M2 21V3" /><path d="M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26" /><path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" /><circle cx="16" cy="11" r="2" /><circle cx="8" cy="11" r="2" />'))  
}