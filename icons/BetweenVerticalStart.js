import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect width="7" height="13" x="3" y="8" rx="1" /><path d="m15 2-3 3-3-3" /><rect width="7" height="13" x="14" y="8" rx="1" />'))  
}