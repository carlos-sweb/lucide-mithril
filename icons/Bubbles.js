import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5" /><circle cx="18.5" cy="8.5" r="3.5" /><circle cx="7.5" cy="16.5" r="5.5" /><circle cx="7.5" cy="4.5" r="2.5" />'))  
}