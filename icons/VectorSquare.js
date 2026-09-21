import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M17.055 4.533a24 24 0 00-10.11 0" /><path d="M19.467 17.055a24 24 0 000-10.11" /><path d="M4.533 6.945a24 24 0 000 10.11" /><path d="M6.945 19.467a24 24 0 0010.11 0" /><circle cx="19" cy="19" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="5" cy="5" r="2" />'))
}