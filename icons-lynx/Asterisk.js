import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M12 5v14" /><path d="m18.065 8.496-12.125 7" /><path d="m5.94 8.504 12.125 7" />' })
}