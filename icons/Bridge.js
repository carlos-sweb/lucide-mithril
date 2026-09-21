import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M10 9.728V16" /><path d="M14 9.728V16" /><path d="M18 20V4" /><path d="m22 11-4-4A7.5 7.5 0 0 1 6 7l-4 4" /><path d="M22 16H2" /><path d="M6 20V4" />'))
}