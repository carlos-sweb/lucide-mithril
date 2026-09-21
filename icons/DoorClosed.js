import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" /><path d="M2 21h20" /><path d="M9 12h.01" />'))
}