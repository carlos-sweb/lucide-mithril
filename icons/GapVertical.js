import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M2 12h2" /><path d="M8 12h2" /><path d="M14 12h2" /><path d="M20 12h2" /><path d="M3 21v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" /><path d="M3 3v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3" />'))
}