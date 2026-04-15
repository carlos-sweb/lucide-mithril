import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><line x1="9.56066" y1="9.56066" x2="12" y2="12" /><line x1="17" y1="17" x2="14.82" y2="14.82" /><circle cx="8.5" cy="15.5" r="1.5" /><line x1="9.56066" y1="14.43934" x2="17" y2="7" />'))  
}