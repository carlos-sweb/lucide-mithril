import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M21.95 13a10 10 0 1 0-8.685 8.92" /><path d="M12 6v6l4 2" /><path d="m16 19 2 2 4-4" />' })
}