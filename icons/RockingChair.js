import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="m15 13 3.708 7.416" /><path d="M3 19a15 15 0 0 0 18 0" /><path d="m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18" /><path d="m9 13-3.708 7.416" />'))  
}