import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M4 12h8" /><path d="M4 18V6" /><path d="M12 18V6" /><circle cx="19" cy="16" r="2" /><path d="M20 10c-2 2-3 3.5-3 6" />'))  
}