import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M12 18h.01" /><path d="M15 2.458V5a1 1 0 01-1 1h-4a1 1 0 01-1-1V2.458" /><path d="M16 16h.01" /><path d="M18 12h.01" /><path d="M6 12h.01" /><path d="M8 16h.01" /><circle cx="12" cy="12" r="10" />' })
}