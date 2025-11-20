import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="3" y="5" r="undefined" /><rect w="undefined" h="undefined" x="15" y="7" r="undefined" /><path d="M3 2v20" /><path d="M21 2v20" />'))  
}