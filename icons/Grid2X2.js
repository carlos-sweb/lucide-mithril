import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<path d="M12 3v18" /><path d="M3 12h18" /><rect x="3" y="3" w="undefined" h="undefined" r="undefined" />'))  
}