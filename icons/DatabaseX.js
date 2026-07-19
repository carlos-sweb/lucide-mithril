import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="m17 17 5 5" /><path d="M19.323 13.744A9 3 0 0 0 21 12" /><path d="M21 13.127V5" /><path d="m22 17-5 5" /><path d="M3 12A9 3 0 0 0 13.563 14.954" /><path d="M3 5V19A9 3 0 0 0 13 21.981" /><ellipse cx="12" cy="5" rx="9" ry="3" />'))
}