import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="m13 21-3-3 3-3" /><path d="M20 18H10" /><path d="M3 11h.01" /><rect x="6" y="3" width="5" height="8" rx="2.5" />'))  
}