import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M11 7v4" /><path d="M11 15h.01" />' })
}