import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{__proto__:Object.assign({},_attrs,vnode.attrs)},m.trust('<rect w="undefined" h="undefined" x="2" y="4" r="undefined" /><path d="M2 14h20" /><path d="M12 20v-6" />'))  
}