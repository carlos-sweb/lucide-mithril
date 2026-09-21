import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M12 7v5l4 2" /><path d="M16 8h5V3" /><path d="m21 8-2.3-2.3A9.7 9.7 0 0012 3a9 9 0 109 9" />'))
}