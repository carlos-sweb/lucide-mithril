import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15" /><path d="M17 2v6" /><path d="M17 4h2" /><path d="M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /><circle cx="17" cy="10" r="2" />'))  
}