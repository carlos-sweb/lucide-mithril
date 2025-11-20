import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<circle cx="7" cy="7" r="5" /><circle cx="17" cy="17" r="5" /><path d="M12 17h10" /><path d="m3.46 10.54 7.08-7.08" />'))  
}