import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 6v6l4 2" /><path d="M22 12a10 10 0 1 0-11 9.95" /><path d="m22 16-5.5 5.5L14 19" />'))  
}