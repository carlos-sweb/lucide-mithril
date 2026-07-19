import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" />'))
}