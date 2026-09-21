import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M14.832 8.445a1 1 0 00-1.589-.098l-2.075 3.098a1 1 0 000 1.11l2 3a1 1 0 001.664 0l2-3a1 1 0 000-1.11z" /><path d="m7.18 20.827-5-11a2 2 0 01.993-2.647L7 5.44" /><rect x="7" y="2" width="14" height="20" rx="2" />' })
}