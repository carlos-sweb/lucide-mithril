import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M11 19H5v-6" /><path d="M13 5h6v6" /><path d="M19 5 5 19" />'))
}