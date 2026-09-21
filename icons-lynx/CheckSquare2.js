import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<rect width="18" height="18" x="3" y="3" rx="2" /><path d="m16 9-5.5 5.5L8 12" />' })
}