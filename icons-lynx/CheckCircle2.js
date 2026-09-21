import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<circle cx="12" cy="12" r="10" /><path d="m16 9-5.5 5.5L8 12" />' })
}