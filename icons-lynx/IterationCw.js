import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M4 10a8 8 0 1 1 8 8H4" /><path d="m8 22-4-4 4-4" />' })
}