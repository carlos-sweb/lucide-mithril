import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M10 6h8" /><path d="M12 16h6" /><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M8 11h7" />'))  
}