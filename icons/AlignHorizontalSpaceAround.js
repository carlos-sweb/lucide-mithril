import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<rect width="6" height="10" x="9" y="7" rx="2" /><path d="M4 22V2" /><path d="M20 22V2" />'))
}