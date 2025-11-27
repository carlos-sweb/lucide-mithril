import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 6v6l2 1" /><path d="M12.337 21.994a10 10 0 1 1 9.588-8.767" /><path d="m14 18 4 4 4-4" /><path d="M18 14v8" />'))  
}