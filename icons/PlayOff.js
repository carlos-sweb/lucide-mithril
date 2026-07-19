import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="m10.215 4.56 9.79 5.71a2 2 0 0 1 .003 3.458l-.393.23" /><path d="m16.042 16.042-8.034 4.686A2 2 0 0 1 5 19V5" /><path d="m2 2 20 20" />'))  
}