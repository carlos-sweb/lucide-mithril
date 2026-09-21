import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}) }, m.trust('<path d="M21 10.5a9 2.5 0 01-18 0v8a9 2.5 0 0018 0z" /><path d="M21 10.5A9 2.5 25.32 004.59 3.47 9 2.5 25.32 0021 10.5" /><path d="M3 10.5a9 2.5 0 016.527-2.405" /><path d="M9 16.858a31 31 0 006 0" />'))
}