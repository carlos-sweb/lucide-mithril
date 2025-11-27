import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" /><path d="M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" /><path d="m6.707 6.707 10.586 10.586" /><path d="M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" />'))  
}