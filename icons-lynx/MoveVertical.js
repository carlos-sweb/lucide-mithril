import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M12 2v20" /><path d="m8 18 4 4 4-4" /><path d="m8 6 4-4 4 4" />' })
}