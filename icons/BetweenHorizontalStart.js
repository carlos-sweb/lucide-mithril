import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect width="13" height="7" x="8" y="3" rx="1" /><path d="m2 9 3 3-3 3" /><rect width="13" height="7" x="8" y="14" rx="1" />'))  
}