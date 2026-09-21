import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M14 13h4" /><path d="M16 15v-4" /><path d="M18 5v2" /><path d="M6 13h4" /><path d="M6 5v2" /><rect x="2" y="7" width="20" height="12" rx="2" />' })
}