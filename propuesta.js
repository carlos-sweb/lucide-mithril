import _attrs from '../default_attrs.js'
import m from 'mithril'

export default {
  view:(vnode) => {
    // The attributes passed to the component
    const passedAttrs = vnode.attrs;
    
    // Create the merged attributes object that will be used as the prototype.
    // This follows the original component's pattern of merging defaults with passed attributes.
    const protoAttrs = Object.assign({}, _attrs, passedAttrs);

    // If a 'size' attribute is provided, it takes priority and sets both width and height.
    if (protoAttrs.size != null) {
      protoAttrs.width = protoAttrs.size;
      protoAttrs.height = protoAttrs.size;
    }

    // The SVG is rendered with an empty attributes object that inherits from our processed protoAttrs.
    // This maintains the structure of the original component.
    return m('svg', {__proto__: protoAttrs}, m.trust('<path d="m14 12 4 4 4-4" /><path d="M18 16V7" /><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /><path d="M3.304 13h6.392" />'));
  }
}
