import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="m14 15-5 5-5-5" /><path d="M20 4h-7a4 4 0 0 0-4 4v12" />' })
}