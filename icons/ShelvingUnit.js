import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" /><path d="M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" /><path d="M20 22V2" /><path d="M4 12h16" /><path d="M4 20h16" /><path d="M4 2v20" /><path d="M4 4h16" />'))  
}