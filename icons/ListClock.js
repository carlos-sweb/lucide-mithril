import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M16 13v2.2l1.6 1" /><path d="M3 12h3.458" /><path d="M3 19h3.832" /><path d="M3 5h18" /><circle cx="16" cy="15" r="6" />'))
}