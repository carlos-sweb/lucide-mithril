import _attrs from '../default_attrs.js'
import m from 'mithril'
export default {
  view:(vnode)=>m('svg',{ __proto__ : Object.assign( {} , _attrs(vnode.attrs ? vnode.attrs.size : 24 ) , vnode.attrs || {} )}, m.trust('<path d="m10.8 5 2.111 4.223" /><path d="M17.75 7 15 2.1" /><path d="m4.874 14.647 2.12 4.24" /><path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2z" /><path d="m7.906 9.712 2.005 4.411" />'))  
}