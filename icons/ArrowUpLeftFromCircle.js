import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M2 8V2h6" /><path d="m2 2 10 10" /><path d="M12 2A10 10 0 1 1 2 12" />'))  
}