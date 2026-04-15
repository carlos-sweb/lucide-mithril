import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M12 2v2" /><path d="M12 8a4 4 0 0 0-1.645 7.647" /><path d="M2 12h2" /><path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" /><path d="m4.93 4.93 1.41 1.41" /><path d="m6.34 17.66-1.41 1.41" />'))  
}