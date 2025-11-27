import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" /><path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" /><path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" /><path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" /><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />'))  
}