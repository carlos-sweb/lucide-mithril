import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M12 8v8" /><path d="m8.5 14 7-4" /><path d="m8.5 10 7 4" />'))  
}