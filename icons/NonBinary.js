import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 2v10" /><path d="m8.5 4 7 4" /><path d="m8.5 8 7-4" /><circle cx="12" cy="17" r="5" />'))  
}