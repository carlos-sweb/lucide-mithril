import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2" /><rect x="8" y="8" width="14" height="14" rx="2" /><path d="m12.5 12.5 5 5" /><path d="m12.5 17.5 5-5" />'))
}