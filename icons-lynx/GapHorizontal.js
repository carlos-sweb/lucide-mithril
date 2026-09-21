import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M12 2v2" /><path d="M12 8v2" /><path d="M12 14v2" /><path d="M12 20v2" /><path d="M21 3h-3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" /><path d="M3 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3" />' })
}