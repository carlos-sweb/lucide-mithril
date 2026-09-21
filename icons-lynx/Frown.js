import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M15 10V9" /><path d="M9 10V9" /><path d="M9 16a5 5 0 016 0" /><circle cx="12" cy="12" r="10" />' })
}