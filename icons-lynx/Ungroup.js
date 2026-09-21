import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<rect x="11" y="14" width="10" height="7" rx="2" /><rect x="3" y="3" width="10" height="7" rx="2" />' })
}