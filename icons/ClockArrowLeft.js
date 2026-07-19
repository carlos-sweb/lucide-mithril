import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 6v6l1.5.8" /><path d="M12.338 21.994a10 10 0 1 1 9.587-8.767" /><path d="M14 18h8" /><path d="m18 22-4-4 4-4" />'))  
}