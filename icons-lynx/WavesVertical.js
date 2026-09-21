import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M12 2q2 2.5 0 5t0 5 0 5 0 5" /><path d="M19 2q2 2.5 0 5t0 5 0 5 0 5" /><path d="M5 2q2 2.5 0 5t0 5 0 5 0 5" />' })
}