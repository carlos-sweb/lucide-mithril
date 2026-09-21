import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M12 6h4a2 2 0 0 1 2 2v7" /><path d="M6 12v9" /><path d="m8.5 3.5-5 5" /><path d="m8.5 8.5-5-5" /><circle cx="18" cy="18" r="3" />'))
}