import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<circle cx="12" cy="12" r="10" /><path d="M8 15h8" /><path d="M8 9h2" /><path d="M14 9h2" />'))
}