import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 15V9" /><path d="M3 15h18" /><path d="M3 9h18" /><rect w="undefined" h="undefined" x="3" y="3" r="undefined" />'))  
}