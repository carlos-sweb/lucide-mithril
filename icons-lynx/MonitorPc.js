import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M10 15H4a2 2 0 01-2-2V7a2 2 0 012-2h6" /><path d="M10 19H5" /><path d="M14 11h8" /><path d="M14 7h8" /><path d="M18 17h.01" /><path d="M9 19v-4" /><rect x="14" y="3" width="8" height="18" rx="1" />' })
}