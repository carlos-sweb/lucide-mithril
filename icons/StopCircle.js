import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<circle cx="12" cy="12" r="10" /><rect x="9" y="9" width="6" height="6" rx="1" />'))
}