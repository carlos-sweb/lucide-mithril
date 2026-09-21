import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M10 11v6" /><path d="M14 17v-3" /><path d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-1.576.768" /><path d="M19 6v7.344" /><path d="m2 2 20 20" /><path d="M21 6h-9.344" /><path d="M3 6h3" /><path d="M5 6v14a2 2 0 002 2h10a2 2 0 002-2v-1" />' })
}