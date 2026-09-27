import m from 'mithril-runtime'

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

// Only attributes that change how the icon is drawn go INSIDE the `content` <svg>.
// Everything else (events, id, class, data-*, key, flatten, ...) stays on the outer
// Lynx element, where Lynx can actually see it.
const DESIGN_ATTRS = /^(stroke|fill|clip|marker|stop|flood|lighting)(-[a-z-]+)?$|^(color|opacity|transform|viewBox|width|height|preserveAspectRatio|shape-rendering|vector-effect|display|visibility|overflow)$/

function isDesignAttr(k, v) {
  return DESIGN_ATTRS.test(k) && (typeof v !== 'function') && (typeof v !== 'object' || v === null)
}

export function mergeStyle(px, style) {
  const base = { width: `${px}px`, height: `${px}px` }
  if (!style || typeof style === 'string') return base
  return { ...base, ...style }
}

/** @param {string} inner SVG children markup (no outer <svg>)
 *  @param {(size:number)=>object} defaultsFn
 *  @param {number} defaultSize
 */
export function lynxIcon(inner, defaultsFn, defaultSize = 24) {
  return {
    view(vnode) {
      const attrs = vnode.attrs || {}
      const { size, style, class: cls, className, content: _drop, ...rest } = attrs
      const outer = {}
      const svgProps = {}
      for (const [k, v] of Object.entries(rest)) {
        if (isDesignAttr(k, v)) svgProps[k] = v
        else outer[k] = v
      }
      const px = Number(size ?? svgProps.width ?? svgProps.height ?? defaultSize)
      const merged = { xmlns: 'http://www.w3.org/2000/svg', ...defaultsFn(px), ...svgProps }
      delete merged.size
      delete merged.style
      delete merged.content
      let open = '<svg'
      for (const [k, v] of Object.entries(merged)) {
        if (v == null) continue
        open += ` ${k}="${escapeAttr(v)}"`
      }
      open += '>'
      if (cls != null || className != null) outer.class = cls ?? className
      outer.style = mergeStyle(px, style)
      outer.content = open + inner + '</svg>'
      return m('svg', outer)
    }
  }
}
