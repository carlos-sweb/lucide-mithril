import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M10 10v11" /><path d="M10 3v1.35" /><path d="M14 14v1" /><path d="M14 8v.35" /><path d="M18 5v7.35" /><path d="M2 10v3" /><path d="m2 2 20 20" /><path d="M22 10v3" /><path d="M6 6v11" />'))
}