import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M14 3h1" /><path d="m16 16 5 5" /><path d="M19 3a2 2 0 012 2" /><path d="m21 16-5 5" /><path d="M21 9v1" /><path d="M3 14v1" /><path d="M3 9v1" /><path d="M5 21a2 2 0 01-2-2" /><path d="M5 3a2 2 0 00-2 2" /><path d="M9 21h1" /><path d="M9 3h1" />'))
}