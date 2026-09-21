import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M15 12v-1.584" /><path d="M17 10a5 5 0 00-3 1" /><path d="M7 10a5 5 0 013 1" /><path d="M9 12v-1.584" /><path d="M9 17a5 5 0 016.001 0" /><circle cx="12" cy="12" r="10" />'))
}