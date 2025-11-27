import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" /><circle cx="12" cy="12" r="2" /><path d="M13.4 10.6 19 5" />'))  
}