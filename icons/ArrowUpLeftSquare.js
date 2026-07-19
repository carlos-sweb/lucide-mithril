import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="M15 15 9 9" /><path d="M9 15V9h6" /><rect x="3" y="3" width="18" height="18" rx="2" />'))  
}