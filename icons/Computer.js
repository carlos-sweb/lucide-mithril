import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M12 18h6" /><path d="M6 18h.01" /><path d="M8 6h1" /><rect x="2" y="14" width="20" height="8" rx="2" /><rect x="4" y="2" width="16" height="12" rx="2" />'))
}