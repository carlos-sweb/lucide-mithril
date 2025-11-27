import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect width="6" height="14" x="2" y="5" rx="2" /><rect width="6" height="10" x="16" y="7" rx="2" /><path d="M12 2v20" />'))  
}