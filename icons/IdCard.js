import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M13 19a4 4 0 00-8 0" /><path d="M16 10h2" /><path d="M16 14h2" /><circle cx="9" cy="12" r="3" /><rect x="2" y="5" width="20" height="14" rx="2" />'))
}