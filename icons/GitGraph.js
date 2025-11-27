import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<circle cx="5" cy="6" r="3" /><path d="M5 9v6" /><circle cx="5" cy="18" r="3" /><path d="M12 3v18" /><circle cx="19" cy="6" r="3" /><path d="M16 15.7A9 9 0 0 0 19 9" />'))  
}