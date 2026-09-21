import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M19 11h.01" /><path d="M19 6h.01" /><path d="M5 8c0-4 4-4 4-4 6 0 6 6 6 6 0 7-10 11-10 11" /><circle cx="7" cy="8" r="2" />' })
}