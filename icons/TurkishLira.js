import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M15 4 5 9" /><path d="m15 8.5-10 5" /><path d="M18 12a9 9 0 0 1-9 9V3" />'))  
}