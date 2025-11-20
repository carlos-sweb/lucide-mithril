import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="2" y="4" r="undefined" /><path d="M12 9v11" /><path d="M2 9h13a2 2 0 0 1 2 2v9" />'))  
}