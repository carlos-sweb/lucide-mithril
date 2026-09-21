import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M14 21h1" /><path d="m17 17-2.18-2.18" /><path d="M5 21a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2" /><path d="M9 21h1" /><path d="M9.56 14.44 17 7" /><path d="M9.56 9.56 12 12" /><circle cx="8.5" cy="15.5" r="1.5" /><circle cx="8.5" cy="8.5" r="1.5" />' })
}