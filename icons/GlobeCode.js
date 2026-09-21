import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M15.5 10 13 7.5 15.5 5" /><path d="M15.861 14A14.5 14.5 0 0112 22a14.48 14.48 0 010-20 10 10 0 109.888 11.5" /><path d="M19.5 5 22 7.5 19.5 10" /><path d="M2 12h8.5" />'))
}