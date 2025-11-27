import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M15 5h6" /><path d="M15 12h6" /><path d="M3 19h18" /><path d="m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" /><path d="M3.92 10h6.16" />'))  
}