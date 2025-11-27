import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 22a10 10 0 1 1 10-10" /><path d="M22 22 12 12" /><path d="M22 16v6h-6" />'))  
}