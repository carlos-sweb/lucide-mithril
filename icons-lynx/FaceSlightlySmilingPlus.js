import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M13.267 2.08a10 10 0 108.653 8.653" /><path d="M15 10V9" /><path d="M16 5h6" /><path d="M16.472 15a6 6 0 01-8.943 0" /><path d="M19 2v6" /><path d="M9 10V9" />' })
}