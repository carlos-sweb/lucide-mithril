import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="m17 18-1.535 1.605a5 5 0 0 1-8-1.5" /><path d="M17 22v-4h-4" /><path d="M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607" /><path d="M7 10v4h4" /><path d="m7 14 1.535-1.605a5 5 0 0 1 8 1.5" />'))  
}