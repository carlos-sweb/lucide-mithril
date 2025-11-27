import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<polyline points="3.5 2 6.5 12.5 18 12.5" /><line x1="9.5" x2="5.5" y1="12.5" y2="20" /><line x1="15" x2="18.5" y1="12.5" y2="20" /><path d="M2.75 18a13 13 0 0 0 18.5 0" />'))  
}