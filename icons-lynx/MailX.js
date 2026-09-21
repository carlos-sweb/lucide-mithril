import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M22 12.532V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.792" /><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><path d="m16.5 16.5 5 5" /><path d="m21.5 16.5-5 5" />' })
}