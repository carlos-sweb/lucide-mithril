import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M12 2v14" /><path d="m19 9-7 7-7-7" /><circle cx="12" cy="21" r="1" />' })
}