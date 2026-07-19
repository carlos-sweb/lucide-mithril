import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 2q2 2.5 0 5t0 5 0 5 0 5" /><path d="M19 2q2 2.5 0 5t0 5 0 5 0 5" /><path d="M5 2q2 2.5 0 5t0 5 0 5 0 5" />'))  
}