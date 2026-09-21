import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M16 2v2" /><path d="M17.915 21a6 6 0 10-12 0" /><path d="M8 2v2" /><circle cx="12" cy="11" r="4" /><rect x="3" y="3" width="18" height="18" rx="2" />'))
}