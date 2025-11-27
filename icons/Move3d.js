import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M5 3v16h16" /><path d="m5 19 6-6" /><path d="m2 6 3-3 3 3" /><path d="m18 16 3 3-3 3" />'))  
}