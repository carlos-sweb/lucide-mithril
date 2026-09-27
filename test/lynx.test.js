import { test, expect, mock } from 'bun:test'

// mithril-runtime is an optional peer dep; stub `m` so the vnode can be inspected.
mock.module('mithril-runtime', () => ({ default: (tag, attrs) => ({ tag, attrs }) }))

const { default: Home } = await import('../icons-lynx/Home.js')

const render = (attrs) => Home.view({ attrs }).attrs

test('red icon + extra prop + ontap', () => {
  const ontap = () => {}
  const out = render({ size: 32, stroke: 'red', 'stroke-width': 1.5, ontap })

  // events stay on the OUTER svg element
  expect(out.ontap).toBe(ontap)
  // design attrs go INSIDE content
  expect(out.content).toStartWith('<svg ')
  expect(out.content).toContain('stroke="red"')
  expect(out.content).toContain('stroke-width="1.5"')
  // ...and not on the outer element
  expect(out.stroke).toBeUndefined()
  expect(out['stroke-width']).toBeUndefined()
  expect(out.content).not.toContain('ontap')
  expect(out.style).toEqual({ width: '32px', height: '32px' })
})

test('other Lynx event flavours and outer-only attrs stay out of content', () => {
  const fn = () => {}
  const out = render({ stroke: 'red', bindtap: fn, catchtap: fn, 'global-bindtap': fn, id: 'icon', 'data-x': '1' })
  for (const k of ['bindtap', 'catchtap', 'global-bindtap', 'id', 'data-x']) {
    expect(out[k]).toBeDefined()
    expect(out.content).not.toContain(` ${k}=`)
  }
})
