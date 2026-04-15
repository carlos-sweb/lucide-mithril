import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M10 6.6 8.6 8" /><path d="M12 18v4" /><path d="M15 7.5 9.5 13" /><path d="M7 22h10" /><circle cx="12" cy="10" r="8" />'))  
}