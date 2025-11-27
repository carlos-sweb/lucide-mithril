import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M18 6V4a2 2 0 1 0-4 0v2" /><path d="M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" /><rect x="12" y="6" width="8" height="5" rx="1" />'))  
}