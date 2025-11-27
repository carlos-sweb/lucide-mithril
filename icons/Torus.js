import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<ellipse cx="12" cy="11" rx="3" ry="2" /><ellipse cx="12" cy="12.5" rx="10" ry="8.5" />'))  
}