import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="m14 6 4 4" /><path d="M17 3h4v4" /><path d="m21 3-7.75 7.75" /><circle cx="9" cy="15" r="6" />'))  
}