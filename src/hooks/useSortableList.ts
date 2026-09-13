import { nextTick, onScopeDispose, readonly, shallowRef } from 'vue'
import type { Ref } from 'vue'
import { useEventListener } from '@vueuse/core'

const DURATION = 180
const EASING = 'cubic-bezier(.2, .8, .2, 1)'

/** Reorder the direct children of a grid by the pointer's nearest card slot. */
export function useSortableList<T>(items: Ref<T[]>) {
  const containerRef = shallowRef<HTMLElement | null>(null)
  const draggingIndex = shallowRef<number | null>(null)

  let dragEl: HTMLElement | null = null
  let ghostEl: HTMLElement | null = null
  let pointerId: number | null = null
  let offsetX = 0
  let offsetY = 0
  let rafId = 0
  let lastEvent: PointerEvent | null = null
  let slotRects = new Map<HTMLElement, DOMRect>()
  let pendingLayout: Promise<void> | null = null
  let ending = false
  let dropAnimation: Animation | null = null
  const moveAnimations = new Map<HTMLElement, Animation>()

  function childElements(): HTMLElement[] {
    return Array.from(containerRef.value?.children ?? []).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    )
  }

  function itemFrom(target: EventTarget | null): HTMLElement | null {
    const root = containerRef.value
    let el = target instanceof Element ? target : null
    while (el && el.parentElement !== root) el = el.parentElement
    return el instanceof HTMLElement ? el : null
  }

  function recordRects(): Map<HTMLElement, DOMRect> {
    return new Map(childElements().map((child) => [child, child.getBoundingClientRect()]))
  }

  function scheduleMove() {
    if (rafId || !lastEvent) return
    rafId = requestAnimationFrame(() => {
      rafId = 0
      if (lastEvent) update(lastEvent)
    })
  }

  function update(event: PointerEvent) {
    if (!dragEl || !ghostEl || draggingIndex.value === null) return

    ghostEl.style.left = `${event.clientX - offsetX}px`
    ghostEl.style.top = `${event.clientY - offsetY}px`
    if (pendingLayout) return

    const children = childElements()
    let to = draggingIndex.value
    let nearest = Infinity
    children.forEach((child, index) => {
      const rect = slotRects.get(child) ?? child.getBoundingClientRect()
      const dx = event.clientX - (rect.left + rect.width / 2)
      const dy = event.clientY - (rect.top + rect.height / 2)
      const distance = dx * dx + dy * dy
      if (distance < nearest) {
        nearest = distance
        to = index
      }
    })

    const from = draggingIndex.value
    if (to === from) return
    // FLIP: First — snapshot positions
    const first = recordRects()
    for (const animation of moveAnimations.values()) animation.cancel()
    moveAnimations.clear()
    const [moved] = items.value.splice(from, 1)
    items.value.splice(to, 0, moved)
    draggingIndex.value = to

    pendingLayout = nextTick().then(() => {
      slotRects = recordRects()
      if (dragEl) {
        // FLIP: Last + invert + play
        for (const [child, previous] of first) {
          const current = slotRects.get(child)
          if (!current) continue
          const dx = previous.left - current.left
          const dy = previous.top - current.top
          if (!dx && !dy) continue
          const animation = child.animate(
            [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'translate(0, 0)' }],
            { duration: DURATION, easing: EASING },
          )
          moveAnimations.set(child, animation)
          const clear = () => {
            if (moveAnimations.get(child) === animation) moveAnimations.delete(child)
          }
          void animation.finished.then(clear, clear)
        }
      }
      pendingLayout = null
      if (lastEvent && !ending) scheduleMove()
    })
  }

  function cleanup() {
    dropAnimation?.cancel()
    dropAnimation = null
    ghostEl?.remove()
    ghostEl = null
    dragEl = null
    pointerId = null
    draggingIndex.value = null
    ending = false
  }

  async function endDrag(event: PointerEvent) {
    if (event.pointerId !== pointerId) return
    ending = true
    if (rafId) cancelAnimationFrame(rafId)
    rafId = 0
    lastEvent = null
    if (event.type === 'pointercancel') {
      cleanup()
      return
    }

    if (pendingLayout) await pendingLayout
    update(event)
    if (pendingLayout) await pendingLayout

    const ghost = ghostEl
    const slot = dragEl && slotRects.get(dragEl)
    if (ghost && slot) {
      // FLIP: release point → slot
      const from = ghost.getBoundingClientRect()
      ghost.style.left = `${slot.left}px`
      ghost.style.top = `${slot.top}px`
      dropAnimation = ghost.animate(
        [
          { transform: `translate(${from.left - slot.left}px, ${from.top - slot.top}px)` },
          { transform: 'translate(0, 0)' },
        ],
        { duration: DURATION, easing: EASING },
      )
      await dropAnimation.finished.catch(() => {})
    }
    cleanup()
  }

  useEventListener(containerRef, 'pointerdown', (event) => {
    if (event.button !== 0 || dragEl) return
    if (event.target instanceof Element && event.target.closest('a, button')) return
    const el = itemFrom(event.target)
    if (!el) return
    const from = childElements().indexOf(el)
    if (from === -1) return

    event.preventDefault()
    const rect = el.getBoundingClientRect()
    offsetX = event.clientX - rect.left
    offsetY = event.clientY - rect.top
    dragEl = el
    pointerId = event.pointerId

    ghostEl = el.cloneNode(true) as HTMLElement
    ghostEl.removeAttribute('id')
    ghostEl.setAttribute('aria-hidden', 'true')
    ghostEl.classList.add('is-drag-ghost')
    // Reparented to <body>: restore what it inherited, e.g. `list-style: none`
    // from a <ul>, otherwise the clone paints a stray marker.
    ghostEl.style.listStyle = getComputedStyle(el).listStyle
    Object.assign(ghostEl.style, {
      position: 'fixed',
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      margin: '0',
      pointerEvents: 'none',
      zIndex: '1000',
    })
    document.body.appendChild(ghostEl)

    slotRects = recordRects()
    draggingIndex.value = from
    containerRef.value?.setPointerCapture(event.pointerId)
  })

  useEventListener(containerRef, 'pointermove', (event) => {
    if (event.pointerId !== pointerId || ending) return
    lastEvent = event
    scheduleMove()
  })

  useEventListener(containerRef, 'pointerup', endDrag)
  useEventListener(containerRef, 'pointercancel', endDrag)

  onScopeDispose(() => {
    if (rafId) cancelAnimationFrame(rafId)
    for (const animation of moveAnimations.values()) animation.cancel()
    cleanup()
  })

  return { containerRef, draggingIndex: readonly(draggingIndex) }
}
