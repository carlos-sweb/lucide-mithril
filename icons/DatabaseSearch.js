import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M21 11.693V5" /><path d="m22 22-1.875-1.875" /><path d="M3 12a9 3 0 0 0 8.697 2.998" /><path d="M3 5v14a9 3 0 0 0 9.28 2.999" /><circle cx="18" cy="18" r="3" /><ellipse cx="12" cy="5" rx="9" ry="3" />'))  
}