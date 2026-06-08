'use client'

import { useEffect } from 'react'

interface CursorSpiralOptions {
  count?: number
  lerpBase?: number
  decay?: number
  color?: string
  minSize?: number
  maxSize?: number
}

export function CursorSpiral(opts: CursorSpiralOptions = {}) {
  useEffect(() => {
    const COUNT    = opts.count    ?? 7
    const LERP     = opts.lerpBase ?? 0.09
    const DECAY    = opts.decay    ?? 0.77
    const COLOR    = opts.color    ?? '255,255,255'
    const MIN_SIZE = opts.minSize  ?? 3
    const MAX_SIZE = opts.maxSize  ?? 20

    if (!window.matchMedia('(pointer: fine)').matches) return

    document.body.style.cursor = 'none'
    document.querySelectorAll('a, button, [role="button"], input, select, textarea, label')
      .forEach(el => ((el as HTMLElement).style.cursor = 'none'))

    const canvas = document.createElement('canvas')
    canvas.style.cssText = [
      'position:fixed', 'top:0', 'left:0',
      'width:100%', 'height:100%',
      'pointer-events:none', 'z-index:99999',
    ].join(';')
    document.body.appendChild(canvas)
    const ctx = canvas.getContext('2d')!

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const pos = Array.from({ length: COUNT }, () => ({ x: -999, y: -999 }))
    let mx = -999, my = -999, visible = false
    let rafId: number

    function onMouseMove(e: MouseEvent) {
      mx = e.clientX
      my = e.clientY
      visible = true
    }
    function onMouseLeave() { visible = false }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)

    function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const tx = visible ? mx : -999
      const ty = visible ? my : -999

      pos[0].x = lerp(pos[0].x, tx, LERP)
      pos[0].y = lerp(pos[0].y, ty, LERP)
      for (let i = 1; i < COUNT; i++) {
        const f = LERP * Math.pow(DECAY, i)
        pos[i].x = lerp(pos[i].x, pos[i - 1].x, f)
        pos[i].y = lerp(pos[i].y, pos[i - 1].y, f)
      }

      if (pos[0].x > -100) {
        for (let i = COUNT - 1; i >= 0; i--) {
          const t      = i / (COUNT - 1)
          const radius = MIN_SIZE + (MAX_SIZE - MIN_SIZE) * (1 - t * 0.78)
          const alpha  = 1 - t * 0.87
          const lw     = 1.2

          ctx.beginPath()
          ctx.arc(pos[i].x, pos[i].y, radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(${COLOR},${alpha})`
          ctx.lineWidth = lw
          ctx.stroke()
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      canvas.remove()
      document.body.style.cursor = ''
      document.querySelectorAll('a, button, [role="button"], input, select, textarea, label')
        .forEach(el => ((el as HTMLElement).style.cursor = ''))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
