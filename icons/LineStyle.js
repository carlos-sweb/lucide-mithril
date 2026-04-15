import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M11 5h2" /><path d="M15 12h6" /><path d="M19 5h2" /><path d="M3 12h6" /><path d="M3 19h18" /><path d="M3 5h2" />'))  
}