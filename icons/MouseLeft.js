import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 7.318V10" /><path d="M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7" /><circle cx="7" cy="4" r="2" />'))  
}