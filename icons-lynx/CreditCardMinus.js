import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M22 13V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h8.536" /><path d="M22 10H2" /><path d="M6 14h2" /><path d="M16 17h6" />' })
}