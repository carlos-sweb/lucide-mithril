import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 18V6" /><path d="M17 10v3a1 1 0 0 0 1 1h3" /><path d="M21 10v8" /><path d="M4 12h8" /><path d="M4 18V6" />'))  
}