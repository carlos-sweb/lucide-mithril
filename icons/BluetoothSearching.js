import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="m7 7 10 10-5 5V2l5 5L7 17" /><path d="M20.83 14.83a4 4 0 0 0 0-5.66" /><path d="M18 12h.01" />'))  
}