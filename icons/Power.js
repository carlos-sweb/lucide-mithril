import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 2v10" /><path d="M18.4 6.6a9 9 0 1 1-12.77.04" />'))  
}