import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" /><path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" /><line x1="19" x2="5" y1="5" y2="19" />' })
}