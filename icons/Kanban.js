import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M5 3v14" /><path d="M12 3v8" /><path d="M19 3v18" />'))  
}