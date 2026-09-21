import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M12.5 19H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v3.5" /><path d="M2 10h20" /><path d="M6 14h2" /><path d="m16.5 14.5 5 5" /><path d="m21.5 14.5-5 5" />'))
}