import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 2v20" /><path d="M2 5h20" /><path d="M3 3v2" /><path d="M7 3v2" /><path d="M17 3v2" /><path d="M21 3v2" /><path d="m19 5-7 7-7-7" />'))  
}