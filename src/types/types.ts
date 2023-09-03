export type EventType = TouchEvent | MouseEvent

export type EventNameStart = keyof Pick<DocumentEventMap, 'touchstart' | 'mousedown'>

export type EventNameEnd = keyof Pick<DocumentEventMap, 'touchend' | 'mouseup'>

export type EventNameMove = keyof Pick<DocumentEventMap, 'touchmove' | 'mousemove'>

export interface ICursorCords {
  x: number
  y: number
}

export interface IDirection {
  left: boolean
  right: boolean
  top: boolean
  bottom: boolean
}
