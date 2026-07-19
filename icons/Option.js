import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M14 3h7" /><path d="M3 3h5.28a1 1 0 0 1 .948.684l5.544 16.632a1 1 0 0 0 .949.684H21" />'))  
}