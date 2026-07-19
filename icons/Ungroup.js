import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect x="11" y="14" width="10" height="7" rx="2" /><rect x="3" y="3" width="10" height="7" rx="2" />'))  
}