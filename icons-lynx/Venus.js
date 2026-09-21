import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M12 15v7" /><path d="M9 19h6" /><circle cx="12" cy="9" r="6" />' })
}