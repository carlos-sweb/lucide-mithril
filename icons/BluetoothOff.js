import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="m17 17-5 5V12l-5 5" /><path d="m2 2 20 20" /><path d="M14.5 9.5 17 7l-5-5v4.5" />'))  
}