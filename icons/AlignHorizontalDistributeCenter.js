import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="4" y="5" r="undefined" /><rect w="undefined" h="undefined" x="14" y="7" r="undefined" /><path d="M17 22v-5" /><path d="M17 7V2" /><path d="M7 22v-3" /><path d="M7 5V2" />'))  
}