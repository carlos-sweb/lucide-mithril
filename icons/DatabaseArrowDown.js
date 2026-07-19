import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="m16 19 3 3 3-3" /><path d="M19 16v6" /><path d="M21 12.536V5" /><path d="M3 12A9 3 0 0 0 15.182 14.806" /><path d="M3 5V19A9 3 0 0 0 13.318 21.968" /><ellipse cx="12" cy="5" rx="9" ry="3" />'))
}