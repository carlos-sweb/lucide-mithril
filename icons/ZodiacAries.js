import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 7.5a4.5 4.5 0 1 1 5 4.5" /><path d="M7 12a4.5 4.5 0 1 1 5-4.5V21" />'))  
}