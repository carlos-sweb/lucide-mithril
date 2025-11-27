import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M10 20h4" /><path d="M12 16v6" /><path d="M17 2h4v4" /><path d="m21 2-5.46 5.46" /><circle cx="12" cy="11" r="5" />'))  
}