import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="3" y="3" r="undefined" /><path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" /><path d="M12 7v10" /><path d="M16 7v10" />'))  
}