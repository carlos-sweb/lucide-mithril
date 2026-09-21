import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="m20 15-5.5 5.5L12 18" /><path d="m4 16 6-12 5.115 10.23" /><path d="M6 12h8" />' })
}