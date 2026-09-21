import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<rect width="7" height="18" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" />' })
}