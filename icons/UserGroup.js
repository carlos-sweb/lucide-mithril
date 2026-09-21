import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M17 21v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1" /><path d="M19 10h1a2 2 0 012 2v1" /><path d="M5 10H4a2 2 0 00-2 2v1" /><circle cx="12" cy="11" r="3" /><circle cx="18" cy="4" r="2" /><circle cx="6" cy="4" r="2" />'))
}