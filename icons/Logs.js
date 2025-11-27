import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M3 5h1" /><path d="M3 12h1" /><path d="M3 19h1" /><path d="M8 5h1" /><path d="M8 12h1" /><path d="M8 19h1" /><path d="M13 5h8" /><path d="M13 12h8" /><path d="M13 19h8" />'))  
}