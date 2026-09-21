import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M8 2v3" /><path d="M16 2v3" /><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M8 13h.01" /><path d="M12 13h.01" /><path d="M16 13h.01" /><path d="M8 17h.01" /><path d="M12 17h.01" /><path d="M16 17h.01" />' })
}