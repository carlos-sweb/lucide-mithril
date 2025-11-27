import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M10 2v6.292a7 7 0 1 0 4 0V2" /><path d="M5 15h14" /><path d="M8.5 2h7" />'))  
}