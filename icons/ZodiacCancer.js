import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M21 14.5A9 6.5 0 0 1 5.5 19" /><path d="M3 9.5A9 6.5 0 0 1 18.5 5" /><circle cx="17.5" cy="14.5" r="3.5" /><circle cx="6.5" cy="9.5" r="3.5" />'))  
}