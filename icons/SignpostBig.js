import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M10 9H4L2 7l2-2h6" /><path d="M14 5h6l2 2-2 2h-6" /><path d="M10 22V4a2 2 0 1 1 4 0v18" /><path d="M8 22h8" />'))  
}