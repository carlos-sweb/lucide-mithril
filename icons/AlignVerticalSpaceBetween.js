import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="5" y="15" r="undefined" /><rect w="undefined" h="undefined" x="7" y="3" r="undefined" /><path d="M2 21h20" /><path d="M2 3h20" />'))  
}