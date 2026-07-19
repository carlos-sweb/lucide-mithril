import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="m19 16-3 3" /><path d="M2 21a8 8 0 0 1 12.664-6.5" /><path d="M22 19h-6l3 3" /><circle cx="10" cy="8" r="5" />'))
}