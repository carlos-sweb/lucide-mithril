import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M10 3v18" /><path d="M14 8v6.35" /><path d="m17 17 5 5" /><path d="M18 5v8.1" /><path d="M2 10v3" /><path d="M22 10v3" /><path d="m22 17-5 5" /><path d="M6 6v11" />' })
}