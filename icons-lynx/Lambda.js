import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'
export default {
   view:(vnode)=>m('svg',{ ..._attrs(vnode.attrs?.size ?? 24), ...(vnode.attrs || {}), content:'<path d="M11.38 10 5 20" /><path d="M19 18a2 2 0 01-2 2c-4.87-.003-5.052-16-10-16a2 2 0 00-2 2" />' })
}