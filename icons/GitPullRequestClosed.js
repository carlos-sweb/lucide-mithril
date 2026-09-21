import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="m15.5 3.5 5 5" /><path d="m15.5 8.5 5-5" /><path d="M18 11.62V15" /><path d="M6 9v12" /><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" />'))
}