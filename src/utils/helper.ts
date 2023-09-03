export const isMobile = () => 'ontouchstart' in document.documentElement

export const isTouchEvent = (event: TouchEvent | MouseEvent): event is TouchEvent => {
  return 'changedTouches' in event
}
