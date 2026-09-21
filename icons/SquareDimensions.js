import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<rect width="18" height="18" x="3" y="3" rx="2" /><path d="M12 7H7v5" /><path d="M12 17h5v-5" />'))
}