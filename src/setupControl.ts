import { isTouchEvent } from './utils/helper'
import { type IDirection, type EventType, type ICursorCords } from './types/types'
import { EVENT_START, EVENT_END, EVENT_MOVE } from './utils/constants'

export const getTouchCords = (event: EventType): ICursorCords => {
  if (isTouchEvent(event)) {
    return { x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY }
  }
  return { x: event.pageX, y: event.pageY }
}

export function setupControl (element: HTMLDivElement | null): void {
  if (!element) return

  const circle = element.querySelector<HTMLDivElement>('.control-circle')

  if (!circle) return

  const holderRect = element.getBoundingClientRect()

  let prevX: number | null = null
  let prevY: number | null = null

  const direction: IDirection = {
    left: false,
    right: false,
    top: false,
    bottom: false
  }

  circle.style.top = holderRect.y + holderRect.height / 2 - 20 + 'px'
  circle.style.left = holderRect.x + holderRect.width / 2 - 20 + 'px'

  let isMouseDown = false

  const move = (ev: EventType): void => {
    if (!isMouseDown) return

    const { x, y } = getTouchCords(ev)

    if (prevX == null || prevY == null) {
      prevX = x
      prevY = y
      return
    }
    const deltaX = Math.abs(x - prevX)
    const deltaY = Math.abs(y - prevY)
    direction.left = x < prevX
    direction.right = x > prevX
    direction.top = y < prevY
    direction.bottom = y > prevY

    const circleRect = circle.getBoundingClientRect()

    let circleX = circleRect.x
    let circleY = circleRect.y

    if (direction.left) {
      circleX -= deltaX
    } else if (direction.right) {
      circleX += deltaX
    }

    if (direction.top) {
      circleY -= deltaY
    } else if (direction.bottom) {
      circleY += deltaY
    }

    if (circleX + 20 < holderRect.x) {
      circleX = holderRect.x - 20
    }
    if (circleX + 20 > holderRect.right) {
      circleX = holderRect.right - 20
    }
    if (circleY + 20 < holderRect.y) {
      circleY = holderRect.y - 20
    }
    if (circleY + 20 > holderRect.bottom) {
      circleY = holderRect.bottom - 20
    }

    circle.style.left = circleX + 'px'
    circle.style.top = circleY + 'px'

    prevX = x
    prevY = y
  }

  document.addEventListener(EVENT_START, (ev: EventType) => {
    isMouseDown = true

    const { x, y } = getTouchCords(ev)
    prevX = x
    prevY = y
  })

  document.addEventListener(EVENT_END, (ev: EventType) => {
    isMouseDown = false
    prevX = null
    prevY = null
    circle.style.top = holderRect.y + holderRect.height / 2 - 20 + 'px'
    circle.style.left = holderRect.x + holderRect.width / 2 - 20 + 'px'
  })

  document.addEventListener(EVENT_MOVE, (ev: EventType) => {
    move(ev)
  })
}
