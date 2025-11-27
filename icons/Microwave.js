import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect width="20" height="15" x="2" y="4" rx="2" /><rect width="8" height="7" x="6" y="8" rx="1" /><path d="M18 8v7" /><path d="M6 19v2" /><path d="M18 19v2" />'))  
}