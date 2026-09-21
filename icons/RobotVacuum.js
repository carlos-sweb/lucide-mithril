import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M11 17h2" /><path d="M12 12h.01" /><path d="M17 12a5 5 0 00-10 0" /><path d="M19 2v2.8" /><path d="M2 5h2.8" /><path d="M22 5h-2.8" /><path d="M5 2v2.8" /><circle cx="12" cy="12" r="10" />'))
}