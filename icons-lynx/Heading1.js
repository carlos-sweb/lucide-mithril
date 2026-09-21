import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M4 12h8" /><path d="M4 18V6" /><path d="M12 18V6" /><path d="m17 12 3-2v8" />' })
}