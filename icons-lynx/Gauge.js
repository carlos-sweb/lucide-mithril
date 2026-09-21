import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" />' })
}