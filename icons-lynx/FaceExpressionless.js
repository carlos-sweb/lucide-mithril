import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M14 10h2" /><path d="M8 10h2" /><path d="M8 16h8" /><circle cx="12" cy="12" r="10" />' })
}